export default {
  contactDev(context, payload) {
    const newRequest = {
      id: new Date().toDateString(), //placeholder to create unique id per request
      devId: payload.devId,
      email: payload.email,
      message: payload.message,
    };

    //Call add request mutation and pass payload to state when
    // this action is dispatched
    context.commit('addRequest', newRequest);
  },
};
