export default {
  getDevelopers(state) {
    return state.developers;
  },
  hasDevelopers(state) {
    //Will be used as helper getter (checking truthiness)
    state.developers && state.developers.length > 0;
  },
};
