<template>
  <div>
    <p
      class="content"
    >Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. It is designed from the ground up to be incrementally adoptable, and can easily scale between a library and a framework depending on different use cases. It consists of an approachable core library that focuses on the view layer only, and an ecosystem of supporting libraries that helps you tackle complexity in large Single-Page Applications.</p>
    <button type="button" class="content__button btn btnPrimary" @click="onConfirm">OK</button>
  </div>
</template>

<script>
export default {
  methods: {
    onConfirm() {
      this.$emit("onConfirm");
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  margin-bottom: 20px;
  text-align: left;
}

.content__button {
  &:hover {
    opacity: 0.8;
  }
}
</style>
