<template>
  <Modal class="success" :title="title" @onClose="onClose">
    <div class="success__body" slot="body">
      <div class="success__data">
        <p v-if="name" class="success__text">
          <span class="success__title">Name:</span>
          {{name}}
        </p>
        <p class="success__text">
          <span class="success__title">E-mail:</span>
          {{email}}
        </p>
        <p class="success__text">
          <span class="success__title">Password:</span>
          {{password}}
        </p>
      </div>
      <router-link class="success__link link" to="/">Go to home page</router-link>
    </div>
  </Modal>
</template>

<script>
import Modal from "../../ui/Modal.vue";

export default {
  components: {
    Modal
  },
  props: {
    title: {
      type: String,
      required: true
    },
    name: {
      type: String
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    onClose: {
      type: Function,
      requred: true
    }
  }
};
</script>

<style lang="scss">
.success__data {
  text-align: left;
}

.success__title {
  display: inline-block;
  min-width: 100px;
  font-weight: 600;
}

.success__link {
  display: inline-block;
  margin-top: 25px;
}
</style>
