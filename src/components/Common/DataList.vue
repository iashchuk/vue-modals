<template>
  <section class="lisy">
    <div class="list__block" v-for="(item, index) in data" :key="index">
      <span class="list__text list__text_number">{{index + 1}}</span>
      <span class="list__text">{{item.name}}</span>
      <span class="list__text list__text_email">{{item.email}}</span>
      <span class="list__text">{{item.password}}</span>
      <span class="list__text">{{item.source}}</span>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.list__block {
  width: 1000px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}

.list__text {
  width: 20%;
  padding: 10px;
  text-overflow: ellipsis;
  overflow: hidden;
}

.list__text_number {
  width: 10%;
}

.list__text_email {
  width: 30%;
}
</style>
