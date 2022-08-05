import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headerColor: '#ffffff',
    appBg: '#ffffff'
  },
  mutations: {
    setheaderColor (state, payload) {
      state.headerColor = payload
    },
    setappBg (state, payload) {
      state.appBg = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
