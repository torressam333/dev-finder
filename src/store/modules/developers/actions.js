export default {
  registerDev(context, data) {
    //construct dev data - keys must match what the vuex store has
    const devData = {
      id: context.rootGetters.userId,
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };

    //commit this action w/ newly formatted data keys
    context.commit('registerDev', devData);
  },
};
