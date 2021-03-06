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
    //const result = await response.json();
    // console.log(result);

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

  async loadDevelopers(context) {
    //Grab all developer data from Firebase
    const response = await fetch(
      `https://dev-finder-d2956-default-rtdb.firebaseio.com/developers.json`
    );

    const responseData = await response.json();

    if (!response.ok) {
      throw Error('Something went wrong');
    }

    const developers = [];

    for (const key in responseData) {
      //Construct a dev based on data format in response
      const dev = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas,
      };

      //Add each dev from FB into our developers array
      developers.push(dev);
    }

    context.commit('setDevelopers', developers);
  },
};
