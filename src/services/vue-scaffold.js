class VueScaffold {
  constructor(http) {
    this.http = http
  }
  async getVueScaffold(params = {}) {
    return await this.http
      .get('/vue-scaffold/', { params })
      .then(resp => resp.data)
  }
}


const factory = httpClient => new VueScaffold(httpClient)

export default factory
