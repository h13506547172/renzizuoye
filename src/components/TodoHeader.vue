<template>
  <header class="header">
    <h1 :style="{'color': $store.state.todos.color}">todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox"/>
    <label for="toggle-all"></label>
    <input
      v-model="addIpt"
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      @keyup.enter="addFn"
    />
  </header>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions: mapTodosActions } = createNamespacedHelpers("todos");
export default {
  computed: {
    todoList() {
      return this.$store.state.todos.todoList;
    },
  },
  data() {
    return {
      addIpt: "",
    };
  },
  methods: {
    ...mapTodosActions(["asyncAddList"]),
    addFn() {
      const addItem = {
        id: this.todoList[this.todoList.length-1].id + 1,
        name: this.addIpt,
        done: false
      }
      this.asyncAddList(addItem)
      this.addIpt = "";
    },
  },
};
</script>
