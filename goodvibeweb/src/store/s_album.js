import ax from '../apis/serve';

const albumModule = {
  state: {
    albums: []
  },
  gatters: {

  },
  mutations: {

  },
  actions: {
    fetchAlbum({ commit }) {
      ax
        .get('/album')
        .then(({ data }) => {
          console.log(data)
        })
        .catch(console.log)
    }
  }
}

export default albumModule;