export default {
  registerDev(state, payload) {
    state.developers.push(payload);
  },
  setDevelopers(state, payload) {
    state.developers = payload;
  },
};
