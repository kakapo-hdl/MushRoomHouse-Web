import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const store=new Vuex.Store({
  state:{
    Token:localStorage.getItem('Token') ? localStorage.getItem('Token'):''
  },
  mutations:{
    changeLogin(state,user){
      state.Token= user.Token;
      localStorage.setItem('Token',user.Token)
    }
  }
})
export default store;