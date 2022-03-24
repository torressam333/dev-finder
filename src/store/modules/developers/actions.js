export default {
  async registerDev(context, data) {
    //construct dev data - keys must match what the vuex store has
    const userId = context.rootGetters.userId;

    const devData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };

    //Send this to firebase
    const response = await fetch(
      `https://dev-finder-d2956-default-rtdb.firebaseio.com/developers/${userId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(devData),
      }
    );

    //Returns promise
    const result = await response.json();
    console.log(result);

    if (!response.ok) {
      throw Error('Something went wrong');
    }

    //commit this action w/ newly formatted data keys
    context.commit('registerDev', {
      //Spread original dev data (add in user id after the fact since we want it in vuex)
      ...devData,
      id: userId,
    });
  },
};
