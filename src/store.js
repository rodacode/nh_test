import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    inhabitants: []
  },
  mutations: {
    SET_INHABITANTS (state, inhabitants) {
      state.inhabitants = inhabitants
    }
  },
  actions: {
    loadInhabitants ({ commit }) {
      axios
        .get('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json')
        .then(response => response.data.Brastlewark)
        .then(inhabitants => {
        commit('SET_INHABITANTS', inhabitants)
        })
    }

  },
  getters : {
    getInhabitantById: (state) => (id) => {
      return state.inhabitants.find(inhabitant => inhabitant.id === id)
    },
    getInhabitants: (state) => {
      return state.inhabitants
    }
  }
})
