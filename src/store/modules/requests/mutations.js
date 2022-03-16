export default {
  addRequest(state, payload) {
    //Payload should be validated by this point
    state.requests.push(payload);
  },
};
