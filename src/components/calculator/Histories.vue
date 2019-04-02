<template>

  <div class="calculator-logs">
    <span v-for="(history, key) in histories" v-bind:key="key+1">{{ history.val }}</span>
  </div>

</template>

<script>
/* eslint-disable */
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Histories',
  mounted () {
    this.fetchHistories()
  },
  computed: mapGetters({ histories: 'calculator/histories' }),
  methods: mapActions({ fetchHistories: 'calculator/fetchHistories' })
}
</script>

<style lang="scss">
$darker: #2f2f31;
$dark: #424345;
$gray: #616163;
$white: #fff;
$light: rgb(240, 240, 240);
$accent: #f49e3f;
$primary: #e1f7f3;


.calculator-logs {
  height: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  align-items: flex-end;
  flex-direction: column;
  justify-content: flex-end;
  &:before {
      top: 0;
      left: 0;
      right: 0;
      // height: 48px;
      content: '';
      z-index: 5;
      position: absolute;
      background: linear-gradient(to bottom, $light, rgba($light, 0));
  }
  span {
      color: $darker;
      opacity: .75;
      display: block;
      font-size: .8rem;
      text-align: right;
      margin-top: .4rem;
      line-height: 1;
      font-weight: lighter;
  }
}

</style>


