export default {
  requests({ requests }) {
    //Return list of requests
    return requests;
  },
  hasRequests({ requests }) {
    //Works like a validation rule - (bool)
    return requests && requests.length > 0;
  },
};
