<template>
  <button :class="{'type1': type === 'large'}">
    <slot>
      <span>{{ title }}</span>
    </slot>
  </button>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    type: {
      type: String,
    },
  },
  data() {
    return {};
  },

  created() {
    console.log(this.title);
  },

  methods: {},
};
</script>

<style  scoped>
.type1 {
  width: 200px;
  height: 100px;
  font-size:30px;
  background: pink;
}
img {
  width: 100%;
  height: 100%;
}
</style>
