/* eslint-disable */
const state = {
  histories: [],
  value: 0,
  buttons: [
    {
      value: 0,
      wide: true
    }
  ]
}
const getters = {
  histories (state) {
    return state.histories
  }
}

const actions = {
  addExpresion({state, commit}, e) {
    if ( Number.isInteger(state.value) )
      state.value = '';
    state.value += e;
  },
  clear({state}) {
    state.value = 0;
  },
  getResult({state, commit}) {
    const oldHistory = state.value;
    state.value = Number(eval(state.value)).toFixed(0);
    commit('ADD_HISTORY', oldHistory)
  },
  getPercentage({state, commit}) {
    const oldHistory = state.value;
    state.value = Number(eval(state.value) / 100).toFixed(3)
    commit('ADD_HISTORY', oldHistory+'%')
  },
  fetchHistories({state, commit}) {

    let localHistory = localStorage.getItem('histories');

    localHistory = (localHistory) ? JSON.parse(localHistory) : [];
    commit('MERGE_HISTORIES', localHistory)
  }
}

const mutations = {
  SET_VALUE(state, val) {
    console.log(val);
    state.value = val
  },
  ADD_HISTORY(state, oldHistory) {
    state.histories.push( {val: oldHistory + `=${state.value}` })
    localStorage.setItem('histories', JSON.stringify(state.histories))
  },
  MERGE_HISTORIES(state, localHistory) {
    const current = state.histories;
    const newHistories = current.concat(localHistory)
    state.histories = newHistories
  }
}

export default {
namespaced: true,
state,
getters,
actions,
mutations
}
