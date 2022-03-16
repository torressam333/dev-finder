/**Parent vuex store file
 * All modules etc... will be loaded through here
 */
import { createStore } from 'vuex';
import developerModule from './modules/developers/main.js';
import requestsModule from './modules/requests/main.js';

export default createStore({
  modules: {
    developers: developerModule,
    requests: requestsModule,
  },
  state() {
    return {
      userId: 'dev1',
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    },
  },
});
