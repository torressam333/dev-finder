export default {
  requests({ requests }, getters, rootState, rootGetters) {
    //Return list of requests
    const devId = rootGetters.userId;
    return requests.filter((request) => request.devId === devId);
  },
  hasRequests({ requests }) {
    //Works like a validation rule - (bool)
    return requests && requests.length > 0;
  },
};
