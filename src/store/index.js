import Vue from 'vue'
import Vuex from 'vuex'
import createVuexPersisted from "vuex-persistedstate"
import todos from "./todos";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
    todoList(state) {
      return state.todos.todoList
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    todos
  },
  plugins: [
    // 默认是所有vuex模块中的state的值存入本地
        createVuexPersisted()
      ]
})
