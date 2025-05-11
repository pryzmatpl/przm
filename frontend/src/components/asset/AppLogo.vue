<script setup>
import {defineComponent} from 'vue';

defineComponent({
  name: 'AppLogo',
});
</script>

<style lang="scss" scoped>
.pryzmat-logo {
    width:113px;
}
.pryzmat-blur{
    margin-top:-41px;
}
</style>

<template>
    <div>
    <a href="/">
        <img alt="Pryzmat sp. z o.o." src="../../assets/LogoPrizmTrans.png" class="pryzmat-logo">
    </a>
    </div>
</template>

