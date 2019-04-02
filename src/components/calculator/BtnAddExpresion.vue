<template>

  <div :class="(wide) ? 'col wide-3' : 'col'">
    <button :class="(ligth) ? 'btn accent' : 'btn'"
      @click="addExpresion(value)">
      {{value}}
    </button>
  </div>

</template>

<script>
/* eslint-disable */
import { mapActions } from 'vuex'
export default {
  name: 'BtnAddExpresion',
  props:[ 'value', 'wide', 'ligth' ],
  methods: mapActions({ addExpresion: 'calculator/addExpresion' })
}
</script>

<style lang="scss">
$darker: #2f2f31;
$dark: #424345;
$gray: #616163;
$white: #fff;
$light: rgb(240, 240, 240);
$accent: #ffead3;
$primary: #e1f7f3;

.col {
  flex: 1;
  // box-shadow: 0 0 0 1px $darker;
  &.wide { flex: 2; }
  &.wide-3 { flex: 3; }
  margin: 0 10px;
}

.btn {
  width: 100%;
  height: 50px;
  color: $dark;
  border: none;
  cursor: pointer;
  padding: .8rem;
  outline: none;
  font-size: 1.6rem;
  transition: all .3s ease-in-out;
  font-weight: 200;
  justify-content: center;
  background-color: $primary;
  border-radius: 80px;
  &.accent { background-color: $accent; color: $dark; }
  &.gray { background-color: $dark; }

  &.action { }
  &:active {
      background-color: $darker;
  }
}
</style>


