<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li
      :class="{ completed: item.done }"
      v-for="item in todoList2"
      :key="item.id"
    >
      <div class="view">
        <input
          class="toggle"
          type="checkbox"
          v-model="item.done"
          @change="changeFn(item)"
        />
        <label>{{ item.name }}</label>
        <button class="destroy" @click="removeFn(item.id)"></button>
      </div>
    </li>
  </ul>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers('todos')
export default {
  computed: {
    ...mapGetters(['todoList2']),
    todoList() {
      return this.$store.state.todos.todoList;
    },
  },
  methods: {
    removeFn(id) {
      this.$store.dispatch("todos/asyncRemoveList", id);
    },
    changeFn(item) {
      // console.log(item);
      this.$store.dispatch("todos/asynccurItem", item);
    },
  },
};
</script>
