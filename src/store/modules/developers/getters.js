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
  }
};
