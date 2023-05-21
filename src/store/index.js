import { createStore } from 'vuex'

export default createStore({
  state: {
    naviModal: false
  },
  mutations: {
    naviModalAction(state){
      state.naviModal = !state.naviModal
    }
  } 

})
