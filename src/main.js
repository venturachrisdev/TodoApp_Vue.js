// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex';
import App from './App'
import TodoStore from './stores/todosStore';

Vue.use(Vuex);

const store = new Vuex.Store(TodoStore);

/* eslint-disable no-new */
new Vue({
	components: {App},
	store
}).$mount('#app');
