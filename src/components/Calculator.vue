<template>
<!--  https://github.com/salazarr-js/v-calculator  -->

<div id="calculator">

  <Histories></Histories>

  <!-- INPUT -->
  <div class="row">
    <div class="col">
      <button class="btn" @click="getResult()">=</button>
    </div>
    <div class="col wide-3">
      <input type="string" class="input" v-model="value" @keyup.enter="getResult()">
    </div>
  </div>

  <!-- EXPRESIONS -->
  <div class="row">
    <div class="col wide-3">
      <button class="btn action" @click="clear">CLEAR</button>
    </div>
    <BtnAddExpresion :value="'*'" :ligth="true"></BtnAddExpresion>
  </div>

  <div class="row">

    <BtnAddExpresion :value="1"></BtnAddExpresion>
    <BtnAddExpresion :value="2"></BtnAddExpresion>
    <BtnAddExpresion :value="3"></BtnAddExpresion>
    <BtnAddExpresion :value="'+'" :ligth="true"></BtnAddExpresion>

  </div>

  <div class="row">

    <BtnAddExpresion :value="4"></BtnAddExpresion>
    <BtnAddExpresion :value="5"></BtnAddExpresion>
    <BtnAddExpresion :value="6"></BtnAddExpresion>
    <BtnAddExpresion :value="'-'" :ligth="true"></BtnAddExpresion>

  </div>
  <div class="row">

    <BtnAddExpresion :value="7"></BtnAddExpresion>
    <BtnAddExpresion :value="8"></BtnAddExpresion>
    <BtnAddExpresion :value="9"></BtnAddExpresion>
    <div class="col">
      <button class="btn accent action" @click="getPercentage">%</button>
    </div>

  </div>

  <div class="row">

    <BtnAddExpresion :value="'/'" :ligth="true"></BtnAddExpresion>
    <BtnAddExpresion :value="0"></BtnAddExpresion>
    <BtnAddExpresion :value="'.'" :ligth="true"></BtnAddExpresion>

    <div class="col">
      <button class="btn accent action" @click="getResult">=</button>
    </div>

  </div>
</div>
</template>

<script>
/* eslint-disable */
import { mapState, mapGetters, mapActions } from 'vuex'
import Histories from './calculator/Histories'
import BtnAddExpresion from './calculator/BtnAddExpresion'

export default {

  name: 'Calculator',
  components: { BtnAddExpresion, Histories },
  methods: mapActions({
    getResult: 'calculator/getResult',
    getPercentage: 'calculator/getPercentage',
    clear: 'calculator/clear'
  }),

  computed: {
    value: {
      get () { return this.$store.state.calculator.value },
      set (val) { this.$store.commit('calculator/SET_VALUE', val) }
    }
  }
};
</script>

<style lang="scss">
$darker: #2f2f31;
$dark: #424345;
$gray: #616163;
$white: #fff;
$light: rgb(240, 240, 240);
$accent: #f49e3f;
$primary: #e1f7f3;

*, ::after, ::before {
box-sizing: border-box;
}
body {
margin: 0;
height: 100vh;
display: flex;
font-size: 10px;
align-items: flex-end;
justify-content: center;
background-color: $white;
}
#calculator {
width: 100%;
margin: 0 auto;
display: flex;
padding: 0;
max-width: 320px;
min-width: 320px;
flex-direction: column;
background-color: $white;
}
.input {
    color: $dark;
    width: 100%;
    border: none;
    padding: .8rem;
    display: block;
    font-size: 2.4rem;
    background: none;
    text-align: right;
    font-weight: lighter;
    &:focus, &:active {
    outline: none;
    }
}

.row {
    display: flex;
    padding: 0;
    justify-content: space-around;
    margin: 10px 0;
}
</style>
