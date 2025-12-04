<script setup>
import {ref, onMounted, computed} from 'vue';
import {useRoute} from 'vue-router';
import axios from 'axios';

const API_URL = process.env.VUE_APP_API_URL || 'http://localhost:9011';
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

const route = useRoute();

// Get the solution name from the route
const solutionName = computed(() => {
  const path = route.path;
  if (path.includes('cuo')) return 'Chief Upgrade Officer';
  if (path.includes('detailing')) return 'Code Detailing';
  if (path.includes('cloudexit')) return 'Cloud Exit';
  if (path.includes('ai')) return 'On-Premises AI';
  if (path.includes('3d')) return '3D Services';
  if (path.includes('diligence')) return 'Due Diligence';
  return 'Solution';
});

const CALENDLY_URL = 'https://calendly.com/piotr-slupski-pryzmat/30min';

// Initial greeting based on solution
const initialGreeting = computed(() => ({
  role: 'assistant',
  content: `Hey—I'm Peter. You're viewing ${solutionName.value}. Want to discuss how this solution can transform your company? What's your biggest challenge right now?`,
  quickReplies: [
    { label: 'Book a Call', value: 'book_call', action: 'calendly' },
    { label: 'Ask Questions', value: 'ask_questions' },
    { label: 'Get Quote', value: 'get_quote' },
    { label: 'See Other Solutions', value: 'other_solutions' }
  ]
}));

const messages = ref([initialGreeting.value]);
const newMessage = ref('');
const chatContainer = ref(null);
const isLoading = ref(false);
const showQuickReplies = ref(true);

const quickReplyResponses = {
  book_call: {
    content: `Perfect! Let's discuss ${solutionName.value} and see how it fits your needs. Book a call: ${CALENDLY_URL}`,
    quickReplies: [
      { label: 'Open Calendar', value: 'open_calendly', action: 'calendly' },
      { label: 'Questions First', value: 'ask_questions' }
    ]
  },
  ask_questions: {
    content: `Ask me anything about ${solutionName.value}. I'll answer directly or we can hop on a call if it's complex.`,
    quickReplies: []
  },
  get_quote: {
    content: `I can prepare a quote for ${solutionName.value}. Tell me about your project scope, timeline, and requirements.`,
    quickReplies: [
      { label: 'Send Email Request', value: 'send_email_quote', action: 'email' },
      { label: 'Book Call Instead', value: 'book_call', action: 'calendly' }
    ]
  },
  other_solutions: {
    content: 'We offer Code Detailing, Cloud Exit, On-Premises AI, 3D Services, Due Diligence, and Chief Upgrade Officer. Which interests you?',
    quickReplies: [
      { label: 'CUO', value: 'cuo_link', action: 'link', link: '/service/cuo' },
      { label: 'Code Detailing', value: 'detailing_link', action: 'link', link: '/service/detailing' },
      { label: 'Cloud Exit', value: 'cloudexit_link', action: 'link', link: '/service/cloudexit' },
      { label: 'See All', value: 'solutions_link', action: 'link', link: '/solutions' }
    ]
  },
  send_email_quote: {
    content: `I'll send you a quote request for ${solutionName.value}. What's your email?`,
    quickReplies: []
  }
};

const handleQuickReply = async (reply) => {
  if (!reply) return;
  
  // Handle actions
  if (reply.action === 'calendly') {
    window.open(CALENDLY_URL, '_blank');
    addMessage('user', `I'd like to book a call about ${solutionName.value}`);
    addMessage('assistant', `Perfect! I've opened the booking calendar. Pick a time that works—we'll discuss ${solutionName.value} and see how it fits your needs.`);
    showQuickReplies.value = false;
    return;
  }
  
  if (reply.action === 'link') {
    window.location.href = reply.link || '/solutions';
    return;
  }
  
  if (reply.action === 'email') {
    const subject = encodeURIComponent(`Quote Request: ${solutionName.value}`);
    const body = encodeURIComponent(`Hi Peter,\n\nI'm interested in getting a quote for ${solutionName.value}.\n\nProject details:\n[Please describe your project scope, timeline, and requirements]\n\nBest regards`);
    window.location.href = `mailto:pryzmat@pryzmat.pl?subject=${subject}&body=${body}`;
    return;
  }
  
  // Add user message
  addMessage('user', reply.label);
  
  // Get response
  const response = quickReplyResponses[reply.value];
  if (response) {
    setTimeout(() => {
      addMessage('assistant', response.content, response.quickReplies);
    }, 500);
  } else {
    // Send email with solution tracking
    await sendEmailWithTracking(reply.label);
  }
  
  showQuickReplies.value = false;
};

const sendEmailWithTracking = async (userMessage) => {
  isLoading.value = true;
  try {
    const emailData = {
      name: 'Chat User',
      email: 'chat@pryzmat.pl', // Will be updated when user provides email
      subject: `Inquiry about ${solutionName.value}`,
      message: `User message: ${userMessage}\n\nSource: ${solutionName.value} page (${route.path})\nTimestamp: ${new Date().toISOString()}`,
      sourcePage: route.path,
      solutionName: solutionName.value
    };
    
    const response = await api.post('/api/contact', emailData);
    
    if (response.data.status === 'success') {
      addMessage('assistant', `Got it! I've sent your inquiry about ${solutionName.value}. I'll respond via email within 24 hours. Want to book a call in the meantime?`, [
        { label: 'Book Call', value: 'book_call', action: 'calendly' },
        { label: 'Ask Another Question', value: 'ask_questions' }
      ]);
      showQuickReplies.value = true;
    }
  } catch (err) {
    console.error('Error sending email:', err);
    addMessage('assistant', `I had trouble sending that. You can email me directly at pryzmat@pryzmat.pl with subject "${solutionName.value} Inquiry" or book a call.`, [
      { label: 'Book Call', value: 'book_call', action: 'calendly' },
      { label: 'Email Directly', value: 'email_direct', action: 'email' }
    ]);
    showQuickReplies.value = true;
  } finally {
    isLoading.value = false;
  }
};

const sendMessage = async () => {
  if (newMessage.value.trim() === '') return;

  const userContent = newMessage.value;
  addMessage('user', userContent);
  newMessage.value = '';
  showQuickReplies.value = false;
  isLoading.value = true;

  await sendEmailWithTracking(userContent);
};

const addMessage = (role, content, quickReplies = null) => {
  const message = {
    role,
    content,
    quickReplies: quickReplies || undefined
  };
  messages.value.push(message);
  scrollToBottom();
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

onMounted(() => {
  scrollToBottom();
});
</script>

<template>
  <div class="chat-window">
    <div class="chat-header">
      <div class="chat-title">
        <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16 13H13V16C13 16.55 12.55 17 12 17C11.45 17 11 16.55 11 16V13H8C7.45 13 7 12.55 7 12C7 11.45 7.45 11 8 11H11V8C11 7.45 11.45 7 12 7C12.55 7 13 7.45 13 8V11H16C16.55 11 17 11.45 17 12C17 12.55 16.55 13 16 13Z" />
        </svg>
        {{ solutionName }}
      </div>
      <div class="chat-subtitle">Let's discuss your needs</div>
    </div>

    <div ref="chatContainer" class="chat-messages">
      <div
        v-for="(message, index) in messages"
        :key="index"
        :class="['message', message.role === 'user' ? 'user-message' : 'assistant-message']"
      >
        <div class="message-content" v-html="formatMessage(message.content)"></div>
        
        <!-- Quick Reply Buttons -->
        <div v-if="message.quickReplies && showQuickReplies && index === messages.length - 1" class="quick-replies">
          <button
            v-for="(reply, replyIndex) in message.quickReplies"
            :key="replyIndex"
            @click="handleQuickReply(reply)"
            class="quick-reply-btn"
          >
            {{ reply.label }}
          </button>
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
        placeholder="Type your message..."
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

<script>
export default {
  methods: {
    formatMessage(content) {
      if (!content) return '';
      const urlRegex = /(https?:\/\/[^\s]+)/g;
      return content.replace(urlRegex, '<a href="$1" target="_blank" rel="noopener noreferrer" class="message-link">$1</a>');
    }
  }
};
</script>

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

.chat-header {
  padding: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(38, 54, 86, 0.5);
}

.chat-title {
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 1.1rem;
  color: rgb(var(--color-text-primary));
}

.chat-subtitle {
  font-size: 0.8rem;
  color: rgb(var(--color-text-muted));
  margin-top: 4px;
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
  max-width: 85%;
  padding: 10px 14px;
  border-radius: 12px;
  animation: fadeIn 0.3s ease;
}

.user-message {
  align-self: flex-end;
  background-color: rgb(112, 0, 255, 0.8);
  color: rgb(var(--color-text-primary));
  border-bottom-right-radius: 4px;
}

.assistant-message {
  align-self: flex-start;
  background-color: rgba(38, 54, 86, 0.7);
  color: rgb(var(--color-text-primary));
  border-bottom-left-radius: 4px;
}

.message-content {
  line-height: 1.5;
  word-wrap: break-word;
}

.message-link {
  color: rgb(112, 0, 255);
  text-decoration: underline;
}

.quick-replies {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.quick-reply-btn {
  padding: 8px 14px;
  background-color: rgba(112, 0, 255, 0.2);
  border: 1px solid rgba(112, 0, 255, 0.4);
  border-radius: 20px;
  color: rgb(var(--color-text-primary));
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.quick-reply-btn:hover {
  background-color: rgba(112, 0, 255, 0.3);
  border-color: rgba(112, 0, 255, 0.6);
  transform: translateY(-1px);
}

.chat-input {
  display: flex;
  padding: 12px 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(25, 35, 55, 0.5);
}

.chat-input textarea {
  flex-grow: 1;
  border: none;
  padding: 10px 14px;
  border-radius: 24px;
  background-color: rgba(255, 255, 255, 0.1);
  color: rgb(var(--color-text-primary));
  resize: none;
  outline: none;
  margin-right: 8px;
  font-family: inherit;
  font-size: 0.9rem;
}

.chat-input textarea::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.chat-input button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgb(112, 0, 255);
  color: rgb(var(--color-text-primary));
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
  transform: none;
}

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

@media (max-width: 768px) {
  .quick-replies {
    flex-direction: column;
  }
  
  .quick-reply-btn {
    width: 100%;
    text-align: center;
  }
  
  .message {
    max-width: 90%;
  }
}
</style>
