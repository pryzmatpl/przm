<script setup>
import {ref, onMounted} from 'vue';

// Create a reactive variable to track dark mode state
const isDarkMode = ref(true);

// Function to toggle between light and dark mode
const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
  applyTheme(isDarkMode.value);
};

// Function to apply the appropriate theme
const applyTheme = (isDark) => {
  // First add the transition class to enable smooth transitions between themes
  document.documentElement.classList.add('theme-transition');

  // Apply the appropriate class to the document
  if (isDark) {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.add('light');
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }

  // Remove transition class after transition is complete
  setTimeout(() => {
    document.documentElement.classList.remove('theme-transition');
  }, 300); // Match this to your transition duration
};

// Initialize theme based on user's saved preference or system preference
onMounted(() => {
  // First add transition-blocking class to prevent initial transition flash
  document.documentElement.classList.add('theme-initial');

  // Check for saved theme preference or use system preference
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme) {
    isDarkMode.value = savedTheme === 'dark';
  } else {
    // If no saved preference, check system preference
    isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  // Apply the theme
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  } else {
    document.documentElement.classList.add('light');
    document.documentElement.classList.remove('dark');
  }

  // Remove the initial class after a delay to enable transitions after initial load
  setTimeout(() => {
    document.documentElement.classList.remove('theme-initial');
  }, 300);
});
</script>

<template>
  <button
    @click="toggleTheme"
    class="theme-toggle-btn"
    :aria-label="isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <!-- Sun icon for dark mode (shows when in dark mode to switch to light) -->
    <svg
      v-if="isDarkMode"
      class="sun-icon"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="2" />
      <path d="M12 2V4" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      <path d="M12 20V22" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      <path d="M4 12L2 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      <path d="M22 12L20 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      <path d="M19.7778 4.22217L17.5556 6.4444" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      <path d="M6.44446 17.5555L4.22223 19.7778" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      <path d="M19.7778 19.7778L17.5556 17.5555" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      <path d="M6.44447 6.4444L4.22224 4.22217" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
    </svg>

    <!-- Moon icon for light mode (shows when in light mode to switch to dark) -->
    <svg
      v-else
      class="moon-icon"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.5287 15.9294C21.3687 15.6594 20.9187 15.2394 19.7987 15.4394C19.1787 15.5494 18.5487 15.5994 17.9187 15.5694C15.5587 15.4694 13.5087 14.3494 12.1787 12.5294C10.9287 10.8094 10.4787 8.50937 11.0087 6.36937C11.1087 5.98937 11.2387 5.30937 10.9187 4.77937C10.6087 4.24937 10.0087 4.01937 9.46873 4.02937C9.27873 4.02937 9.08873 4.05937 8.89873 4.10937C5.30873 5.10937 2.59873 8.29937 2.12873 12.0294C1.98873 13.0894 1.94873 15.9994 3.70873 18.9394C5.07873 21.2694 7.34873 22.8794 10.0087 23.5194C10.7087 23.7194 11.4287 23.8094 12.1487 23.8394C12.2787 23.8394 12.4087 23.8494 12.5287 23.8494C15.8887 23.8394 19.0087 22.4594 21.1387 19.9794C22.1587 18.7094 22.5187 17.5294 21.5287 15.9294Z"
        fill="currentColor"
      />
    </svg>

    <span class="toggle-glow"></span>
  </button>
</template>

<style scoped>
.theme-toggle-btn {
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;
}

.theme-toggle-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: scale(1.05);
}

.theme-toggle-btn:active {
  transform: scale(0.95);
}

.light .theme-toggle-btn {
  color: #1E293B;
}

.light .theme-toggle-btn:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.sun-icon, .moon-icon {
  width: 22px;
  height: 22px;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.sun-icon {
  color: #FFD43B;
}

.moon-icon {
  color: #A5B4FC;
}

.toggle-glow {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.theme-toggle-btn:hover .toggle-glow {
  opacity: 1;
  background: radial-gradient(circle at center, rgba(255, 212, 59, 0.2) 0%, transparent 70%);
}

.light .theme-toggle-btn:hover .toggle-glow {
  background: radial-gradient(circle at center, rgba(165, 180, 252, 0.3) 0%, transparent 70%);
}

/* Animation for icon transitions */
.sun-icon, .moon-icon {
  animation: spin-in 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes spin-in {
  from {
    transform: rotate(-180deg) scale(0);
    opacity: 0;
  }
  to {
    transform: rotate(0) scale(1);
    opacity: 1;
  }
}
</style>

<style>
/* Global styles for theme transitions */
:root.theme-transition,
:root.theme-transition *,
:root.theme-transition *:before,
:root.theme-transition *:after {
  transition: all 0.3s !important;
  transition-delay: 0 !important;
}

:root.theme-initial,
:root.theme-initial *,
:root.theme-initial *:before,
:root.theme-initial *:after {
  transition: none !important;
}
</style>
