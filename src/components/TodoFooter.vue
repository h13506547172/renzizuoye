<template>
  <footer class="footer">
    <span class="todo-count"
      >剩余<strong>{{ noDoList.length }}</strong></span
    >
    <ul class="filters">
      <li>
        <a :class="{selected:flag === '全部'}" href="javascript:;" @click="clickFn('全部')">全部</a>
      </li>
      <li>
        <a :class="{selected:flag === '未完成'}" href="javascript:;" @click="clickFn('未完成')">未完成</a>
      </li>
      <li>
        <a :class="{selected:flag === '已完成'}" href="javascript:;" @click="clickFn('已完成')">已完成</a>
      </li>
    </ul>
    <button class="clear-completed">清除已完成</button>
  </footer>
</template>

<script>
import { mapGetters } from "vuex";
import { createNamespacedHelpers } from "vuex";
const { mapActions: mapTodosActions } = createNamespacedHelpers("todos");
export default {
  data () {
    return {
      flag: '全部'
    }
  },
  computed: {
    ...mapGetters(["todoList"]),
    noDoList() {
      return this.todoList.filter((item) => item.done === false);
    },
  },
  methods: {
    ...mapTodosActions(['asyncfilterList']),
    clickFn(val){
      this.flag = val
      this.asyncfilterList(val)
    }
  }
};
</script>
