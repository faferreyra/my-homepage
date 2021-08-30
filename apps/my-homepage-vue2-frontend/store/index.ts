import Vue from 'vue';
import Vuex from 'vuex';

import applications from './modules/applications';
import bookmarks from './modules/bookmarks';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ready: true
  },
  modules: {
    applications,
    bookmarks
  }
});
