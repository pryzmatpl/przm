<script setup>
import {defineProps, inject} from 'vue';
const $t=inject('$t');

const props = defineProps({
  heading: {
    type: Boolean,
    default: false,
  },
  headingStr: {
    type: String,
    default: "",
  },
  message: {
    type: String,
  },
  animated: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <div class="welcome-box" :class="{ 'animate-heading': animated }">
    <div v-if="heading" class="heading-container mb-8 max-w-5xl mx-auto text-color-text-secondary">
      <h1 class="heading-primary">
        <span class="text-indigo-300">{{$t("Troubleshooting Technology and ")}}</span>
        <span class="text-sky-200">{{$t("Innovation")}}</span>
        <div class="mt-4">
          <span class="heading-secondary text-indigo-400">
            {{$t("A prism for technological complexity.")}}
          </span>
        </div>
      </h1>
    </div>

    <div v-else-if="headingStr && !heading" class="heading-container mb-8">
      <h1 class="heading-primary">
        <span class="text-indigo-300">{{$t(props.headingStr)}}</span>
      </h1>
    </div>

    <p class="welcome-message" v-if="message">
      {{ message }}
    </p>
  </div>
</template>

<style scoped>
.welcome-box {
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
}

.heading-container {
  position: relative;
  z-index: 1;
  padding: 1.5rem 2rem;
  margin-bottom: 1.5rem;
  background-color: rgba(19, 27, 43, 0.75);
  backdrop-filter: blur(8px);
  border-radius: 1rem;
  box-shadow:
    0 10px 25px -5px rgba(0, 0, 0, 0.1),
    0 8px 10px -6px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.05);
  width: fit-content;
  max-width: 90%;
  overflow: hidden;
}

.heading-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(157, 77, 255, 0.5), transparent);
  z-index: -1;
}

.heading-primary {
  font-weight: 800;
  font-size: 2.5rem;
  line-height: 1.2;
  letter-spacing: -0.02em;
  text-align: center;
}

.heading-secondary {
  font-size: 1.75rem;
  font-weight: 600;
  line-height: 1.3;
  opacity: 0.9;
}

.welcome-message {
  font-size: 1.25rem;
  line-height: 1.6;
  text-align: center;
  margin: 0 auto;
  color: rgba(255, 255, 255, 0.9);
  background-color: rgba(19, 27, 43, 0.75);
  backdrop-filter: blur(8px);
  border-radius: 0.75rem;
  padding: 1.25rem 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.05);
  width: 800px;
}

/* Animation styles */
.animate-heading .heading-primary {
  animation: fadeSlideDown 1s ease forwards;
}

.animate-heading .heading-secondary {
  animation: fadeSlideUp 1s ease 0.3s forwards;
  opacity: 0;
}

.animate-heading .welcome-message {
  animation: fadeIn 1s ease 0.6s forwards;
  opacity: 0;
}

@keyframes fadeSlideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeSlideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 0.9;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .heading-primary {
    font-size: 1.75rem;
  }

  .heading-secondary {
    font-size: 1.25rem;
  }

  .welcome-message {
    font-size: 1rem;
    padding: 1rem;
  }

  .heading-container {
    padding: 1rem 1.5rem;
  }
}
</style>
