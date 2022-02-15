/**Holds all developer related state */
import actions from './actions.js';
import getters from './getters.js';
import mutations from './mutations.js';

export default {
  namespaced: true,
  state() {
    return {
      developers: [
        {
          id: 'dev1',
          firstName: 'Jason',
          lastName: 'Bourne',
          areas: ['frontend', 'backend'],
          description:
            "I'm Jason and I've worked as a freelance web developer for years. Let me help your company by applying my expertise!",
          hourlyRate: 35,
        },
        {
          id: 'dev2',
          firstName: 'Roger',
          lastName: 'Rabbit',
          areas: ['backend', 'machine-learning'],
          description:
            'I am Roger and as a senior software engineer, I can help your company improve its backend and data processes',
          hourlyRate: 45,
        },
      ],
    };
  },
  actions,
  getters,
  mutations,
};
