<script setup>
import {ref, onMounted, inject} from 'vue';

const $t = inject('$t');

const messages = ref([
  {
    role: 'assistant',
    content: 'Hello! How can I help you today?',
  },
]);
const newMessage = ref('');
const chatContainer = ref(null);
const isLoading = ref(false);

const sendMessage = async () => {
  if (newMessage.value.trim() === '') return;

  const userContent = newMessage.value;
  messages.value.push({role: 'user', content: userContent});
  newMessage.value = '';
  scrollToBottom();
  isLoading.value = true;

  try {
    const response = await fetch('https://pryzmat.pl/send-email.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
      },
      body: JSON.stringify({
        messages: messages.value,
      }),
    });

    const result = await response.json();
    const reply = result.reply || 'I had trouble responding.';

    messages.value.push({role: 'assistant', content: reply});
  } catch (err) {
    console.error('Error:', err);
    messages.value.push({role: 'assistant', content: 'Sorry, an error occurred. Please try again.'});
  } finally {
    isLoading.value = false;
    scrollToBottom();
  }
};

const scrollToBottom = () => {
  setTimeout(() => {
    if (chatContainer.value) {
      chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
    }
  }, 50);
};

const handleKeyDown = (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
};

onMounted(scrollToBottom);
</script>


<template>
  <div class="chat-window">
    <div class="chat-header">
      <div class="chat-title">
        <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16 13H13V16C13 16.55 12.55 17 12 17C11.45 17 11 16.55 11 16V13H8C7.45 13 7 12.55 7 12C7 11.45 7.45 11 8 11H11V8C11 7.45 11.45 7 12 7C12.55 7 13 7.45 13 8V11H16C16.55 11 17 11.45 17 12C17 12.55 16.55 13 16 13Z" />
        </svg>
        {{ $t('Pryzmat AI Assistant') }}
      </div>
      <div class="chat-subtitle">{{ $t('Powered by OpenAI') }}</div>
    </div>

    <div ref="chatContainer" class="chat-messages">
      <div
        v-for="(message, index) in messages"
        :key="index"
        :class="['message', message.role === 'user' ? 'user-message' : 'assistant-message']"
      >
        <div class="message-content">
          {{ message.content }}
        </div>
      </div>

      <div v-if="isLoading" class="message assistant-message">
        <div class="message-content typing-indicator">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>

    <div class="chat-input">
      <textarea
        v-model="newMessage"
        @keydown="handleKeyDown"
        :placeholder="$t('Type your message...')"
        rows="1"
      ></textarea>
      <button @click="sendMessage" :disabled="newMessage.trim() === '' || isLoading">
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 2L11 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
.chat-window {
  display: flex;
  flex-direction: column;
  background-color: rgba(19, 27, 43, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  width: 100%;
  height: 480px;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.light .chat-window {
  background-color: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(0, 0, 0, 0.08);
}

.chat-header {
  padding: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(38, 54, 86, 0.5);
}

.light .chat-header {
  background-color: rgba(245, 245, 250, 0.9);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.chat-title {
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 1.1rem;
  color: white;
}

.chat-subtitle {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 4px;
}

.light .chat-title {
  color: #131b2b;
}

.light .chat-subtitle {
  color: rgba(19, 27, 43, 0.6);
}

.chat-messages {
  flex-grow: 1;
  padding: 16px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.message {
  max-width: 80%;
  padding: 10px 14px;
  border-radius: 12px;
  animation: fadeIn 0.3s ease;
}

.user-message {
  align-self: flex-end;
  background-color: rgb(112, 0, 255, 0.8);
  color: white;
  border-bottom-right-radius: 4px;
}

.assistant-message {
  align-self: flex-start;
  background-color: rgba(38, 54, 86, 0.7);
  color: white;
  border-bottom-left-radius: 4px;
}

.light .assistant-message {
  background-color: rgba(240, 240, 245, 0.9);
  color: #131b2b;
}

.chat-input {
  display: flex;
  padding: 12px 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(25, 35, 55, 0.5);
}

.light .chat-input {
  background-color: rgba(245, 245, 250, 0.9);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.chat-input textarea {
  flex-grow: 1;
  border: none;
  padding: 10px 14px;
  border-radius: 24px;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  resize: none;
  outline: none;
  margin-right: 8px;
  font-family: inherit;
}

.light .chat-input textarea {
  background-color: rgba(19, 27, 43, 0.1);
  color: #131b2b;
}

.chat-input textarea::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.light .chat-input textarea::placeholder {
  color: rgba(19, 27, 43, 0.5);
}

.chat-input button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgb(112, 0, 255);
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.chat-input button:hover {
  background-color: rgb(92, 0, 204);
  transform: scale(1.05);
}

.chat-input button:disabled {
  background-color: rgba(112, 0, 255, 0.5);
  cursor: not-allowed;
}

/* Typing indicator animation */
.typing-indicator {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 10px;
  height: 24px;
}

.typing-indicator span {
  display: inline-block;
  width: 8px;
  height: 8px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  animation: typing-dot 1.4s infinite ease-in-out both;
}

.light .typing-indicator span {
  background-color: rgba(19, 27, 43, 0.7);
}

.typing-indicator span:nth-child(1) {
  animation-delay: 0s;
}

.typing-indicator span:nth-child(2) {
  animation-delay: 0.2s;
}

.typing-indicator span:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes typing-dot {
  0%, 80%, 100% {
    transform: scale(0.6);
    opacity: 0.6;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
