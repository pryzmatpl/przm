<?php
// api/chat.php
ini_set('display_errors', '1');
ini_set('display_startup_errors', '1');
error_reporting(E_ALL);

require_once __DIR__ . '/vendor/autoload.php';

header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

// Optional: Handle preflight
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

header('Content-Type: application/json');
// Load env

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../');
$dotenv->load();

try {
    $openaiKey = $_ENV['OAI_KEY'];
    $input = json_decode(file_get_contents('php://input'), true);
    if (!isset($input['messages']) || !is_array($input['messages'])) {
        http_response_code(400);
        echo json_encode(array('error' => 'Invalid or missing messages'));
        exit();
    }
    $messages = $input['messages'];

    // Define tools schema
    $tools = array(
        array(
            'type' => 'function',
            'function' => array(
                'name' => 'send_email',
                'description' => 'Send an email to given recipient(s) with a subject and message.',
                'parameters' => array(
                    'type' => 'object',
                    'properties' => array(
                        'to' => array(
                            'type' => 'string',
                            'description' => 'Comma-separated recipient email addresses.',
                        ),
                        'subject' => array(
                            'type' => 'string',
                            'description' => 'Email subject line.',
                        ),
                        'body' => array(
                            'type' => 'string',
                            'description' => 'Body of the email message.',
                        ),
                    ),
                    'required' => array('to', 'subject', 'body'),
                    'additionalProperties' => false,
                ),
                'strict' => true,
            ),
        ),
    );

    // First API call to OpenAI - using cost-efficient model
    $payload = array(
        'model' => 'gpt-4o-mini', // Cost-efficient model with function-calling support
        'messages' => $messages,
        'tools' => $tools,
        'max_tokens' => 150, // Limit response length for cost efficiency
        'temperature' => 0.7, // Balanced creativity/efficiency
    );

    $ch = curl_init('https://api.openai.com/v1/chat/completions');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        'Content-Type: application/json',
        'Authorization: Bearer ' . $openaiKey,
    ));
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));

    $response = curl_exec($ch);
    $httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $curl_error = curl_error($ch);
    curl_close($ch);

    if ($httpcode < 200 || $httpcode >= 300 || !$response) {
        http_response_code(500);
        echo json_encode(array('error' => 'Failed to contact OpenAI', 'details' => $curl_error));
        exit();
    }

    $result = json_decode($response, true);
    if (!$result || !isset($result['choices'][0]['message'])) {
        http_response_code(500);
        echo json_encode(array('error' => 'Invalid response from OpenAI'));
        exit();
    }

    $first_message = $result['choices'][0]['message'];

    // Handle tool calls
    if (isset($first_message['tool_calls'])) {
        $tool_calls = $first_message['tool_calls'];
        $tool_messages = array();

        $mail = new PHPMailer(true);
    
        foreach ($tool_calls as $tool_call) {
            if ($tool_call['function']['name'] === 'send_email') {
                $arguments = json_decode($tool_call['function']['arguments'], true);
                $to = $arguments['to'];
                $subject = $arguments['subject'];
                $body = $arguments['body'];
		 try {
			// SMTP configuration
			$mail->isSMTP();
			$mail->Host = 'smtp.pryzmat.pl'; // Update this to your SMTP server
			$mail->SMTPAuth = true;
			$mail->Username = 'pryzmat@pryzmat.pl'; // SMTP username
			$mail->Password = '[PASSWORDHERE]';       // SMTP password
			$mail->SMTPSecure = 'tls';               // or 'ssl' if required
			$mail->Port = 587;                       // or 465 if using SSL

			// Sender and recipient
			$mail->setFrom('pryzmat@pryzmat.pl', 'Pryzmat');
			$mail->addAddress('piotr.slupski@pryzmat.pl'); // You can explode by comma if $to is a CSV

			// Email content
			$mail->isHTML(false); // Set to true if sending HTML
			$mail->Subject = $subject;
			$mail->Body = $body . " from " . $to;

			$mail->send();
			$email_sent = true;
		    } catch (Exception $e) {
			    $email_sent = false;
		    }

		    $tool_messages[] = array(
			'role' => 'tool',
			'tool_call_id' => $tool_call['id'],
			'content' => json_encode(array(
			    'status' => $email_sent ? 'sent' : 'failed',
			)),
		    );
            }
        }

        // Second API call with tool call results
        $updated_messages = array_merge($messages, array($first_message), $tool_messages);
        $second_payload = array(
            'model' => 'gpt-4o-mini',
            'messages' => $updated_messages,
            'max_tokens' => 150, // Limit response length for cost efficiency
            'temperature' => 0.7,
        );

        $ch = curl_init('https://api.openai.com/v1/chat/completions');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/json',
            'Authorization: Bearer ' . $openaiKey,
        ));
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($second_payload));

        $second_response = curl_exec($ch);
        $second_httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $curl_error = curl_error($ch);
        curl_close($ch);

        if ($second_httpcode < 200 || $second_httpcode >= 300 || !$second_response) {
            http_response_code(500);
            echo json_encode(array('error' => 'Failed to contact OpenAI on second request', 'details' => $curl_error));
            exit();
        }

        $second_result = json_decode($second_response, true);
        if (!$second_result || !isset($second_result['choices'][0]['message']['content'])) {
            http_response_code(500);
            echo json_encode(array('error' => 'Invalid response from OpenAI on second request'));
            exit();
        }

        $final_message = $second_result['choices'][0]['message']['content'];
        echo json_encode(array('reply' => $final_message));
    } else {
        // No tool calls, return the first message content
        $reply = isset($first_message['content']) ? $first_message['content'] : null;
        echo json_encode(array('reply' => $reply));
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(array('error' => 'Server error', 'details' => $e->getMessage()));
}
?>