export const state = () => ({
  message: ''
});

export const mutations = {
  success(state, payload) {
    state.message = payload
  },
  error(state, payload) {
    state.message = payload

  }
};
