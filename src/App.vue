<template>
  <div class="app wrapper">
    <div class="app__content wrapper-content">
      <section class="app__section">
        <div class="app__container container">
          <button class="btn btnPrimary" @click="modalFirst = !modalFirst">Show first modal</button>
          <Modal v-if="modalFirst" :title="title" @closeModal="modalFirst=false" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";

export default {
  components: {
    Modal
  },
  data() {
    return {
      modalFirst: false,
      title: "Modals App"
    };
  }
};
</script>

<style lang="scss"></style>
