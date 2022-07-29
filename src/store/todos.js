export default {
  namespaced: true,
  state: {
    todoList: [
      {
        name: '吃饭',
        done: false,
        id: 1,
      },
      {
        name: '睡觉',
        done: false,
        id: 2,
      },
      {
        name: '打豆豆',
        done: false,
        id: 3,
      },
    ],
    show: '全部',
    color: `rgb(255, 255, 255)`
  },
  getters: {
    todoList2(state) {
      if (state.show ==='全部') {
        return state.todoList
      }
      if (state.show ==='已完成') {
        return state.todoList.filter((item) => item.done === true)
      }
      if (state.show ==='未完成') {
        return state.todoList.filter((item) => item.done === false)
      }
      
    }
  },
  mutations: {
    addList(state,data) {
      state.todoList.push(data)
    },
    removeList(state, data) {
      state.todoList = state.todoList.filter((item) => item.id !== data)
    },
    curItem(state, data) {
      state.todoList.forEach((item) => {
        if (item.id === data.id) {
          item.done = data.done
        }
      })
    },
    filterList(state, data) {
      state.show = data
    },
    changeColor(state, data) {
      state.color = data
    }
  },
  actions: {
    asyncAddList(context, data) {
      context.commit('addList',data)
    },
    asyncRemoveList(context, data) {
      context.commit('removeList',data)
    },
    asynccurItem(context, data) {
      context.commit('curItem',data)
    },
    asyncfilterList(context, data) {
      context.commit('filterList',data)
    },
    asyncchangeColor(context, data) {
      context.commit('changeColor',data)
    }
  },
}