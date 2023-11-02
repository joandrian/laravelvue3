import axios from 'axios';
import * as types from './mutation_types';

const state = {
  subjects: [],
};

const mutations = {
  [types.SET_SUBJECT_NAME](state, subjects) {
    state.subjects = subjects;
  },
};

const actions = {
  async fetchUserSubjects({ commit }) {
    try {
        const token = localStorage.getItem('access_token');
        if (token) {
          // Add the token to the request headers
          const config = {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          };

      // Make an Axios request to fetch user subjects from the Laravel backend
      const response = await axios.get('/user/subjects',config); // Adjust the API route to your Laravel setup

      // Assuming a successful response returns an array of subjects
      const subjects = response.data;

      // Commit the subjects to the state
     commit(types.SET_SUBJECT_NAME, subjects);
        }
    } catch (error) {
      console.error('Failed to fetch user subjects:', error);
    }
  },
};

const getters = {
  userSubjects: (state) => state.subjects,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
