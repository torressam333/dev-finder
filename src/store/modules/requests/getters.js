export default {
  requests({ requests }, _, _, rootGetters) {
    //Return list of requests belonging to specific user
    const devId = rootGetters.userId;
    return requests.filter((request) => request.devId === devId);
  },
  hasRequests(_, getters) {
    //Works like a validation rule - (bool)
    return getters.requests && getters.requests.length > 0;
  },
};
