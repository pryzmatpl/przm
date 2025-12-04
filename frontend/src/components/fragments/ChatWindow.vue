<script setup>
import {ref, onMounted, inject} from 'vue';

const $t = inject('$t');

const CALENDLY_URL = 'https://calendly.com/piotr-slupski-pryzmat/30min';
const CUO_PAGE_URL = '/service/cuo';

// Initial CUO-focused greeting
const initialGreeting = {
  role: 'assistant',
  content: "Hey—I'm Peter. If you're here, your company is probably a tangled mess of technical debt, misaligned Deep Tech investments, and wasted resources. CUO cuts through that complexity and transforms it into a streamlined, tuned, working machine. What's your biggest company complexity challenge?",
  quickReplies: [
    { label: 'Tech Stack Issues', value: 'tech' },
    { label: 'Company Transformation', value: 'gear' },
    { label: 'Deep Tech Investment Strategy', value: 'investment' },
    { label: 'Quick Audit Chat', value: 'audit' },
    { label: 'Just Browsing', value: 'browsing' }
  ]
};

const messages = ref([initialGreeting]);
const newMessage = ref('');
const chatContainer = ref(null);
const isLoading = ref(false);
const showQuickReplies = ref(true);
const conversationContext = ref('initial');

// CUO system context - concise for cost efficiency
const cuoSystemContext = `You are Peter, Chief Upgrade Officer at Pryzm.at. Philosophy: "I don't impulse-buy. Neither should you." Help optimize tech stacks OR Deep Tech Investment Strategy with Power Law Risk.

Offerings: 48-Hour Purge ($3-5k), Annual Retainer ($15-25k/yr), Niche Builds ($7-12k).

Tone: Concise, no-BS. Guide to ${CALENDLY_URL} or ${CUO_PAGE_URL}. Keep responses under 40 words.`;

// Branching responses for quick replies
const quickReplyResponses = {
  tech: {
    content: "Sounds familiar—my Threadripper rig's been crushing it for 6 years with zero full swaps. Want a 48-hour purge of your stack? ($3-5k, saves you 10x in regrets.) Or ongoing advice? Let's hop on a call.",
    quickReplies: [
      { label: 'Book 48-Hour Audit', value: 'book_audit', action: 'calendly' },
      { label: 'Learn About Retainer', value: 'retainer_info' },
      { label: 'Tell Me More', value: 'tech_details' }
    ]
  },
  gear: {
    content: "Company transformation is the game. I help turn your tangled mess into a streamlined machine. Niche Builds ($7-12k) include custom infrastructure, full sourcing, and Power Law Risk assessment. Want to discuss your company's specific challenges?",
    quickReplies: [
      { label: 'Book Niche Build', value: 'book_build', action: 'calendly' },
      { label: 'See Transformation Process', value: 'gear_examples' },
      { label: 'Tell Me More', value: 'gear_details' }
    ]
  },
  investment: {
    content: "Deep Tech Investment Strategy with Power Law Risk—framework for asymmetric bets where upside massively outweighs downside. I help founders identify Deep Tech opportunities. Annual retainer ($15-25k/yr) includes unlimited Deep Tech Investment Strategy advice.",
    quickReplies: [
      { label: 'Book Strategy Call', value: 'book_investment', action: 'calendly' },
      { label: 'What is Power Law Risk?', value: 'power_law_explain' },
      { label: 'Retainer Details', value: 'retainer_info' }
    ]
  },
  audit: {
    content: "Perfect. 48-Hour Purge & Rebuild: Complete audit of your tech stack OR Deep Tech investment portfolio, upgrade path, migration plan, 30-day support. ($3-5k, saves you 10x in future regrets.) Ready to book?",
    quickReplies: [
      { label: 'Book Audit Call', value: 'book_audit', action: 'calendly' },
      { label: 'See Full CUO Page', value: 'cuo_page', action: 'link' },
      { label: 'Questions First', value: 'audit_questions' }
    ]
  },
  browsing: {
    content: "No pressure—CUO is the sword that cuts the Gordian Knot in tech. We cut through your company's tangled mess and turn it into a working machine. Check out CUO retainers for ongoing transformation guidance. What's your company's biggest complexity challenge?",
    quickReplies: [
      { label: 'Explore CUO', value: 'cuo_page', action: 'link' },
      { label: 'See Pricing', value: 'pricing_info' },
      { label: 'Tell Me Your Company', value: 'setup_share' }
    ]
  },
  retainer_info: {
    content: "Annual Retainer ($15-25k/yr, limited to 4-8 clients): Unlimited async advice via Telegram/Slack, Deep Tech Power Law Risk analysis on $500+ decisions, priority 24-48hr response, quarterly Deep Tech Investment Strategy reviews. Book a call to see if we're a fit.",
    quickReplies: [
      { label: 'Book Retainer Call', value: 'book_retainer', action: 'calendly' },
      { label: 'See All Tiers', value: 'cuo_page', action: 'link' }
    ]
  },
  power_law_explain: {
    content: "Power Law Risk = framework for asymmetric opportunities in Deep Tech. Most bets fail, but the few that win return 10-100x. I help you identify where to place those bets—in tech infrastructure OR Deep Tech investments. It's an asset when you know where to look.",
    quickReplies: [
      { label: 'Book Strategy Call', value: 'book_investment', action: 'calendly' },
      { label: 'See Deep Tech Investment Tier', value: 'retainer_info' }
    ]
  },
  email_contact: {
    content: "You can reach me at pryzmat@pryzmat.pl. For CUO inquiries, mention which tier interests you (48-Hour Purge, Retainer, or Niche Builds). I typically respond within 24 hours.",
    quickReplies: [
      { label: 'Book Call Instead', value: 'book_call', action: 'calendly' },
      { label: 'See CUO Page', value: 'cuo_page', action: 'link' }
    ]
  },
  more_info: {
    content: "CUO offers three tiers for company transformation: 48-Hour Purge ($3-5k) cuts through complexity fast, Annual Retainer ($15-25k/yr) provides ongoing guidance, and Niche Builds ($7-12k) for custom infrastructure. All focus on turning tangled messes into working machines. Want details on a specific tier?",
    quickReplies: [
      { label: '48-Hour Purge', value: 'audit' },
      { label: 'Annual Retainer', value: 'retainer_info' },
      { label: 'Niche Builds', value: 'gear' },
      { label: 'Book Call', value: 'book_call', action: 'calendly' }
    ]
  }
};

const handleQuickReply = async (reply) => {
  if (!reply) return;
  
  // Handle actions
  if (reply.action === 'calendly') {
    window.open(CALENDLY_URL, '_blank');
    addMessage('user', `I'd like to book a call`);
    addMessage('assistant', `Perfect! I've opened the booking calendar. Pick a time that works—we'll discuss your setup and see which CUO tier fits. Looking forward to it.`);
    showQuickReplies.value = false;
    return;
  }
  
  if (reply.action === 'link') {
    window.location.href = CUO_PAGE_URL;
    return;
  }
  
  // Get response
  const response = quickReplyResponses[reply.value];
  if (response) {
    // Add user message
    addMessage('user', reply.label);
    setTimeout(() => {
      addMessage('assistant', response.content, response.quickReplies);
      conversationContext.value = reply.value;
    }, 500);
  } else {
    // Fallback to AI - add the reply as a user message first
    addMessage('user', reply.label);
    showQuickReplies.value = false;
    isLoading.value = true;
    await sendMessageToAI();
  }
  
  showQuickReplies.value = false;
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

// Detect booking/scheduling intent
const isBookingIntent = (message) => {
  const bookingKeywords = [
    'schedule', 'book', 'booking', 'call', 'meeting', 'appointment',
    'calendar', 'calendly', 'time slot', 'available', 'when can we',
    'set up a call', 'set up call', 'setup call', 'lets schedule',
    'let\'s schedule', 'i want to book', 'i\'d like to book',
    'can we schedule', 'can we book', 'would like to schedule',
    'arrange a call', 'arrange call', 'set a time', 'set time'
  ];
  const lowerMessage = message.toLowerCase();
  return bookingKeywords.some(keyword => lowerMessage.includes(keyword));
};

// Detect technical questions
const isTechnicalQuestion = (message) => {
  const technicalKeywords = [
    'amd', 'intel', 'cpu', 'processor', 'gpu', 'graphics', 'ram', 'memory',
    'how does', 'how do', 'how to', 'what is', 'what are', 'explain',
    'why does', 'why do', 'difference between', 'vs', 'versus', 'better',
    'architecture', 'algorithm', 'implementation', 'code', 'programming',
    'api', 'database', 'server', 'framework', 'library', 'stack',
    'performance', 'optimization', 'scalability', 'security', 'deployment',
    'docker', 'kubernetes', 'aws', 'cloud', 'infrastructure',
    'javascript', 'python', 'react', 'vue', 'node', 'backend', 'frontend',
    'sql', 'nosql', 'redis', 'cache', 'queue', 'microservices',
    'threadripper', 'ryzen', 'core i', 'xeon', 'nvidia', 'radeon'
  ];
  const lowerMessage = message.toLowerCase();
  const hasQuestionMark = message.includes('?');
  const hasTechnicalKeyword = technicalKeywords.some(keyword => lowerMessage.includes(keyword));
  
  // Also check for question patterns
  const questionPatterns = [
    /^(how|what|why|when|where|which|who)\s+/i,
    /^can you/i,
    /^could you/i,
    /^would you/i,
    /better to/i,
    /should i/i,
    /which.*better/i,
    /what.*difference/i
  ];
  const hasQuestionPattern = questionPatterns.some(pattern => pattern.test(message.trim()));
  
  // If it has technical keywords, it's technical (even without question mark)
  return hasTechnicalKeyword || (hasQuestionMark && hasQuestionPattern);
};

// Detect CUO-related questions
const isCUOQuestion = (message) => {
  const cuoKeywords = [
    'cuo', 'chief upgrade officer', 'upgrade officer',
    'understand.*offer', 'what.*cuo', 'tell me.*cuo',
    'cuo.*offer', 'cuo.*service', 'cuo.*tier',
    '48.*hour', 'purge.*rebuild', 'retainer', 'niche.*build',
    'power law', 'deep tech.*investment', 'investment.*strategy'
  ];
  const lowerMessage = message.toLowerCase();
  return cuoKeywords.some(keyword => {
    const regex = new RegExp(keyword, 'i');
    return regex.test(lowerMessage);
  });
};

// Get last user message for context
const getLastUserMessage = () => {
  return [...messages.value].reverse().find(msg => msg.role === 'user');
};

const sendMessage = async () => {
  if (newMessage.value.trim() === '') return;

  const userContent = newMessage.value;
  addMessage('user', userContent);
  newMessage.value = '';
  showQuickReplies.value = false;
  
  // Check for booking intent first
  if (isBookingIntent(userContent)) {
    addMessage('assistant', `Perfect! Here's my calendar: ${CALENDLY_URL}\n\nPick a time that works—we'll discuss your setup and see which CUO tier fits. Looking forward to it!`, [
      { label: 'Open Calendar', value: 'open_calendly', action: 'calendly' },
      { label: 'Tell Me More First', value: 'more_info' }
    ]);
    showQuickReplies.value = true;
    return;
  }
  
  isLoading.value = true;
  await sendMessageToAI();
};

const sendMessageToAI = async () => {
  try {
    // Check last user message for booking intent (in case it wasn't caught earlier)
    const lastUserMessage = getLastUserMessage();
    if (lastUserMessage && isBookingIntent(lastUserMessage.content)) {
      addMessage('assistant', `Perfect! Here's my calendar: ${CALENDLY_URL}\n\nPick a time that works—we'll discuss your setup and see which CUO tier fits. Looking forward to it!`, [
        { label: 'Open Calendar', value: 'open_calendly', action: 'calendly' },
        { label: 'Tell Me More First', value: 'more_info' }
      ]);
      showQuickReplies.value = true;
      return;
    }
    
    // Check if it's a technical question - answer directly (Elon style)
    if (lastUserMessage && isTechnicalQuestion(lastUserMessage.content)) {
      const technicalAnswer = generateElonStyleAnswer(lastUserMessage.content);
      addMessage('assistant', technicalAnswer, [
        { label: 'Book CUO Consultation', value: 'book_call', action: 'calendly' },
        { label: 'Ask Another Question', value: 'ask_another' }
      ]);
      showQuickReplies.value = true;
      return;
    }
    
    // Prepend system context to guide AI toward CUO
    // Limit message history to last 6 messages for cost efficiency
    const recentMessages = messages.value.slice(-6);
    const messagesWithContext = [
      { role: 'system', content: cuoSystemContext },
      ...recentMessages.map(msg => ({
        role: msg.role,
        content: msg.content
      }))
    ];

    const response = await fetch('https://pryzmat.pl/send-email.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
      },
      body: JSON.stringify({
        messages: messagesWithContext,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    
    if (result.error) {
      throw new Error(result.error);
    }
    
    const reply = result.reply || 'I had trouble responding. Let me know what you need.';

    addMessage('assistant', reply);
    
    // Add closing CTA if conversation is winding down
    if (messages.value.length > 4 && !conversationContext.value.includes('book')) {
      setTimeout(() => {
        addMessage('assistant', 'Ready to migrate? Book a 15-min audit call here, or reply with details—I\'ll respond in <24h.', [
          { label: 'Book Audit Call', value: 'book_audit', action: 'calendly' },
          { label: 'See CUO Page', value: 'cuo_page', action: 'link' }
        ]);
        showQuickReplies.value = true;
      }, 1000);
    }
  } catch (err) {
    console.error('Error calling API:', err);
    const lastUserMessage = getLastUserMessage();
    
    if (!lastUserMessage) {
      addMessage('assistant', 'Sorry, I encountered an error. Please try again or email me at pryzmat@pryzmat.pl');
      isLoading.value = false;
      scrollToBottom();
      return;
    }
    
    // Check if last message was about booking
    if (isBookingIntent(lastUserMessage.content)) {
      addMessage('assistant', `No problem! Here's my calendar: ${CALENDLY_URL}\n\nPick a time that works for you.`, [
        { label: 'Open Calendar', value: 'open_calendly', action: 'calendly' }
      ]);
      showQuickReplies.value = true;
    } 
    // Check if it's a technical question - answer like Elon (Pareto 20/80)
    else if (isTechnicalQuestion(lastUserMessage.content)) {
      const technicalAnswer = generateElonStyleAnswer(lastUserMessage.content);
      addMessage('assistant', technicalAnswer, [
        { label: 'Book CUO Consultation', value: 'book_call', action: 'calendly' },
        { label: 'Ask Another Question', value: 'ask_another' }
      ]);
      showQuickReplies.value = true;
    }
    // Check if it's a CUO question - provide helpful info
    else if (isCUOQuestion(lastUserMessage.content)) {
      addMessage('assistant', 'CUO (Chief Upgrade Officer) helps you optimize tech stacks OR Deep Tech Investment Strategy with Power Law Risk analysis. Three tiers: 48-Hour Purge ($3-5k), Annual Retainer ($15-25k/yr), Niche Builds ($7-12k). Want details on a specific tier?', [
        { label: '48-Hour Purge', value: 'audit' },
        { label: 'Annual Retainer', value: 'retainer_info' },
        { label: 'Niche Builds', value: 'gear' },
        { label: 'Book Call', value: 'book_call', action: 'calendly' }
      ]);
      showQuickReplies.value = true;
    }
    // Only redirect to CUO if it's truly off-topic AND we have an error
    else {
      addMessage('assistant', `I had trouble processing that. Let's focus on what matters: optimizing your setup or Deep Tech Investment Strategy. That's what CUO does—turn waste into weapons, optimize for long-term value.\n\nWant to discuss your specific situation? Book a call: ${CALENDLY_URL}`, [
        { label: 'Book CUO Call', value: 'book_call', action: 'calendly' },
        { label: 'See CUO Tiers', value: 'cuo_page', action: 'link' },
        { label: 'Email Instead', value: 'email_contact' }
      ]);
      showQuickReplies.value = true;
    }
  } finally {
    isLoading.value = false;
    scrollToBottom();
  }
};

// Generate Elon-style technical answer (Pareto 20/80 principle)
const generateElonStyleAnswer = (question) => {
  const lowerQuestion = question.toLowerCase();
  
  // CPU/Processor questions (AMD vs Intel)
  if (lowerQuestion.includes('amd') || lowerQuestion.includes('intel') || lowerQuestion.includes('cpu') || lowerQuestion.includes('processor')) {
    return "AMD for value and cores (Threadripper crushes workloads). Intel for single-thread performance and compatibility. For CUO builds, I spec based on workload: AMD for parallel work, Intel for legacy/compatibility. The 20%: match CPU to actual use case, not hype. Most people over-spec.";
  }
  
  // Architecture/Infrastructure questions
  if (lowerQuestion.includes('architecture') || lowerQuestion.includes('infrastructure') || lowerQuestion.includes('scalability')) {
    return "Core principle: Start simple, scale what works. Most systems fail from over-engineering. Build for 10x, not 1000x. Use proven patterns (REST, queues, caches). The 20% that matters: data model, API contracts, monitoring. Everything else is optimization theater.";
  }
  
  // Performance/Optimization
  if (lowerQuestion.includes('performance') || lowerQuestion.includes('optimization') || lowerQuestion.includes('slow')) {
    return "Measure first. 80% of slowness comes from: database queries (N+1), missing indexes, no caching, bloated payloads. Fix those. Don't optimize code that runs once. Profile, don't guess. Cache aggressively. That's it.";
  }
  
  // Deployment/DevOps
  if (lowerQuestion.includes('deploy') || lowerQuestion.includes('docker') || lowerQuestion.includes('kubernetes') || lowerQuestion.includes('ci/cd')) {
    return "Automate everything. Docker for consistency. K8s if you need orchestration (most don't). CI/CD is non-negotiable. The 20%: version control, automated tests, one-command deploys. Everything else is nice-to-have. Start there.";
  }
  
  // Database questions
  if (lowerQuestion.includes('database') || lowerQuestion.includes('sql') || lowerQuestion.includes('nosql') || lowerQuestion.includes('data')) {
    return "SQL for structured, relational data. NoSQL for scale or flexibility. Most apps need SQL. The 20%: proper indexes, connection pooling, query optimization. Don't overthink it. PostgreSQL solves 90% of problems.";
  }
  
  // Framework/Stack questions
  if (lowerQuestion.includes('framework') || lowerQuestion.includes('stack') || lowerQuestion.includes('react') || lowerQuestion.includes('vue') || lowerQuestion.includes('node')) {
    return "Framework doesn't matter if you understand fundamentals. Pick one, master it. React/Vue are tools—the 20%: component architecture, state management, routing. Everything else is syntax. Focus on patterns, not libraries.";
  }
  
  // Security questions
  if (lowerQuestion.includes('security') || lowerQuestion.includes('auth') || lowerQuestion.includes('encryption')) {
    return "Security is layers. The 20%: HTTPS everywhere, proper auth (OAuth2/JWT), input validation, secrets management. Don't roll your own crypto. Use battle-tested libraries. Most breaches come from misconfiguration, not clever hacks.";
  }
  
  // API questions
  if (lowerQuestion.includes('api') || lowerQuestion.includes('rest') || lowerQuestion.includes('graphql')) {
    return "REST for simplicity. GraphQL if you need flexibility. The 20%: clear contracts, versioning strategy, rate limiting, error handling. Everything else is preference. Start REST, evolve if needed.";
  }
  
  // General technical - provide Pareto principle answer
  return "Focus on the 20% that delivers 80% of value. Most complexity is unnecessary. Understand fundamentals, use proven patterns, measure everything. Don't optimize prematurely. Build, measure, iterate. That's the game.";
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
  // Auto-focus after a brief delay for better UX
  setTimeout(() => {
    const textarea = document.querySelector('.chat-input textarea');
    if (textarea) textarea.focus();
  }, 500);
});
</script>

<template>
  <div class="chat-window">
    <div class="chat-header">
      <div class="chat-title">
        <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16 13H13V16C13 16.55 12.55 17 12 17C11.45 17 11 16.55 11 16V13H8C7.45 13 7 12.55 7 12C7 11.45 7.45 11 8 11H11V8C11 7.45 11.45 7 12 7C12.55 7 13 7.45 13 8V11H16C16.55 11 17 11.45 17 12C17 12.55 16.55 13 16 13Z" />
        </svg>
        Chief Upgrade Officer
      </div>
      <div class="chat-subtitle">Upgrade Without the Waste</div>
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

<script>
export default {
  methods: {
    formatMessage(content) {
      // Simple formatting for links (Calendly URLs)
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
  color: rgb(var(--color-text-primary));
}

.chat-subtitle {
  font-size: 0.8rem;
  color: rgb(var(--color-text-muted));
  margin-top: 4px;
}

.light .chat-title {
  color: rgb(var(--color-text-primary));
}

.light .chat-subtitle {
  color: rgb(var(--color-text-muted));
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

.light .assistant-message {
  background-color: rgba(240, 240, 245, 0.9);
  color: rgb(var(--color-text-primary));
}

.message-content {
  line-height: 1.5;
  word-wrap: break-word;
}

.message-link {
  color: rgb(112, 0, 255);
  text-decoration: underline;
  transition: opacity 0.2s;
}

.message-link:hover {
  opacity: 0.8;
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

.quick-reply-btn:active {
  transform: translateY(0);
}

.light .quick-reply-btn {
  background-color: rgba(112, 0, 255, 0.1);
  border-color: rgba(112, 0, 255, 0.3);
  color: rgb(var(--color-text-primary));
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
  color: rgb(var(--color-text-primary));
  resize: none;
  outline: none;
  margin-right: 8px;
  font-family: inherit;
  font-size: 0.9rem;
}

.light .chat-input textarea {
  background-color: rgba(19, 27, 43, 0.1);
  color: rgb(var(--color-text-primary));
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

/* Mobile responsiveness */
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