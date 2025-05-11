<script setup>
import {defineProps} from 'vue';
defineProps({
  claass: {
    type: String,
    default: '',
  },
});
</script>
<template>
  <svg class="text-blue-600 animate-cube" width="46" height="53" viewBox="0 0 46 53" fill="none"
       :class="claass"
       xmlns="http://www.w3.org/2000/svg">
    <path d="m23.102 1 22.1 12.704v25.404" fill="blue" stroke="currentColor" stroke-width="1.435"
          stroke-linejoin="bevel"></path>
    <path d="m23.101 1l-22.1 12.704v25.404" fill="blue" stroke="currentColor" stroke-width="1.435"
          stroke-linejoin="bevel"></path>
    <path d="m45.202 39.105-22.1 12.702L1 39.105" stroke="currentColor" stroke-width="1.435"
          stroke-linejoin="bevel"></path>
    <path transform="matrix(.86698 .49834 .00003 1 1 13.699)" stroke="currentColor" stroke-width="1.435"
          stroke-linejoin="bevel" d="M0 0h25.491v25.405H0z"></path>
    <path transform="matrix(.86698 -.49834 -.00003 1 23.102 26.402)" stroke="currentColor" stroke-width="1.435"
          stroke-linejoin="bevel" d="M0 0h25.491v25.405H0z"></path>
    <path transform="matrix(.86701 -.49829 .86701 .49829 1 13.702)" stroke="currentColor" stroke-width="1.435"
          stroke-linejoin="bevel" d="M0 0h25.491v25.491H0z"></path>
  </svg>
</template>
<script>
export default {
  name: 'PrizmIcon',
};
</script>
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

glowy {
  border: solid 5px #FC5185;
  transition: border-width 0.6s linear;
}
</style>
