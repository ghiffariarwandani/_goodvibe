import Vue from 'vue';
import Vuex from 'vuex';

import router from '../router';
import albumModule from './s_album';
import merchModule from './s_merch';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    albumModule,
    merchModule
  }
})
