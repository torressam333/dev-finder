/**Parent vuex store file
 * All modules etc... will be loaded through here
 */
import { createStore } from 'vuex';
import developerModule from './modules/developers/main.js';

export default createStore({
  modules: {
    developerModule,
  },
});
