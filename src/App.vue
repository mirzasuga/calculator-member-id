<template>
  <div id="app">
    <Calculator></Calculator>
  </div>
</template>

<script>
/* eslint-disable */
import Calculator from './components/Calculator.vue';

export default {
  name: 'app',
  components: { Calculator },
};
</script>

<style lang="sass">
@import "./assets/scss/style.scss";
</style>

