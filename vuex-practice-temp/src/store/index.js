import { createStore } from 'vuex';
import getters from './getters.js';
import actions from './actions.js';
import mutations from './mutations.js';

const store = createStore({
  state() {
    return {
      datas: [
        {
          firstName: 'Aayushi',
          lastName: 'Prajapati',
          address: 'Ahmedabad',
          gender: 'female'
        },
        {
          firstName: 'Sujal',
          lastName: 'Prajapati',
          address: 'Gandhinagar',
          gender: 'male'
        }
      ]
    };
  },
  mutations,
  actions,
  getters
});

export default store;
