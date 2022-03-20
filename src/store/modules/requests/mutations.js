export default {
  addRequest(state, payload) {
    console.log(payload);
    //Payload should be validated by this point
    state.requests.push(payload);
  },
};
