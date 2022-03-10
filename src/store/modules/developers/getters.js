export default {
  getAllDevelopers(state) {
    return state.developers;
  },
  hasDevelopers(state) {
    //Will be used as helper getter (checking truthiness)
    return state.developers && state.developers.length > 0;
  },
  getDeveloperById(state, id) {
    return state.developers.find((dev) => dev.id === id);
  },
  isDev(_, getters, _2, rootGetters) {
    const developers = getters.getAllDevelopers;

    //Look for a dev with our userId in root state
    const userId = rootGetters.userId;

    //Bool value returned
    return developers.some((dev) => (dev.id = userId));
  },
};
