<template>
  <div>
    <button @click="colorChange">换肤</button>
    <Vbutton :title="'按钮组件'" :type="'large'">
      <template>
        <img src="https://img01.yzcdn.cn/vant/cat.jpeg" alt="">
      </template>
    </Vbutton>
    <div class="todoapp">
      <todo-header></todo-header>
      <todo-main></todo-main>
      <todo-footer></todo-footer>
    </div>
  </div>
</template>

<script>
import TodoFooter from './components/TodoFooter.vue' // shift + alt + 下
import TodoHeader from './components/TodoHeader.vue' // shift + alt + 下
import TodoMain from './components/TodoMain.vue' // shift + alt + 下
import Vbutton from "./components/Vbutton.vue";
export default {
  data() {
    return {}
  },

  components: {
    TodoFooter,
    TodoHeader,
    TodoMain,
    Vbutton
  },

  created() {},

  methods: {
    colorChange(){
      const color = `rgb(${Math.floor(Math.random() *256)},${Math.floor(Math.random() *256)},${Math.floor(Math.random() *256)})`
      // console.log(color);
      this.$store.dispatch('todos/asyncchangeColor', color)
    }
  },
}
</script>

<style scoped></style>
