export default {
  async regData(context, payload) {
    const response = await fetch(
      'https://temp-vuex-default-rtdb.firebaseio.com/register.json',
      {
        method: 'POST',
        body: JSON.stringify(payload)
      }
    );
    // const responseData = await response.JSON
    if (!response.ok) {
      //error..
      const error = new Error(response.message || 'failed to send data');
      throw error;
    }
    context.commit('regData', payload);
  },

  async loadData(context) {
    const response = await fetch(
      'https://temp-vuex-default-rtdb.firebaseio.com/register.json'
    );
    const responseData = await response.JSON;

    if (!response.ok) {
      const error = new Error(response.message || 'failed to fetch data');
      throw error;
    }

    context.commit('setData', responseData);
  }
};
