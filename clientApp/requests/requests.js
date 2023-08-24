export default (context, endPoint) => ({
  async setTag() {
    const response = await context.$axios.get(endPoint)
    return response;

  },
  async setParams(params) {
    const response = await context.$axios.post(endPoint, null, params)
    return response;
  },
  async setPayload(payload) {
    const response = await context.$axios.post(endPoint, payload)
    return response;
  },
  async setParamsBody(payload, params) {
    const response = await context.$axios.post(endPoint, payload, {
      params
    });
    return response;
  },
  async setFormData(payload, config) {
    const response = await context.$axios.post(endPoint, payload, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    });
    return response;
  },

})

