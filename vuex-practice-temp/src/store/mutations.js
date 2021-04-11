export default {
  regData(state, payload) {
    state.datas.push(payload);
  },
  setData(state, payload) {
    state.datas = payload;
  }
};
