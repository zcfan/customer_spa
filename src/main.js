import Vue from 'vue';
import store from './store';
import router from './router';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  created() {
    store.dispatch('FETCH_CATEGORIES');
  },
});
