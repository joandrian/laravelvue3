import { createStore } from 'vuex';
import subject from './subject';

const store = createStore({
  state: {
    user: null,
  },
  mutations: {
    setUserData(state, userData) {
      state.user = userData;
    },
    clearUserData(state) {
      state.user = null;
    },
  },
  actions: {
    login({ commit }, userData) {
      commit('setUserData', userData);
    },
    logout({ commit }) {
      commit('clearUserData');
    },
  },
  modules: {
    subject,
  },
});

export default store;
