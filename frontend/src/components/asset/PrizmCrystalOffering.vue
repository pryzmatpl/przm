<script setup>
const currentCrystal = Math.floor(Math.random() * 9 + 1)
const logoPath = require(`@/assets/image${currentCrystal}.png`);
</script>
<template>
  <div class="crystal-container">
    <img :src="logoPath" class="w-full h-full object-contain">
  </div>
</template>
<script>
export default {
  name: 'PrizmIcon',
};
</script>
<style scoped lang="scss">
.crystal-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

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
