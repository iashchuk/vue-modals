<template>
  <div class="app wrapper">
    <div class="app__content wrapper-content">
      <section class="app__section">
        <div class="app__container container">
          <!-- Basic modal -->
          <button class="btn btnPrimary" @click="basicModal = !basicModal">Show basic modal</button>
          <Modal v-show="basicModal" title="Basic Modal" @close="basicModal=false">
            <div slot="body">
              <p>Text</p>
              <button>Click</button>
            </div>
          </Modal>

          <!-- Form modal -->
          <button class="btn btnPrimary" @click="formModal.show = !formModal.show">Show form modal</button>
          <Modal v-show="formModal.show" title="Form Modal" @close="formModal.show=false">
            <form slot="body" @submit.prevent="submitForm">
              <label>Name:</label>
              <input type="text" v-model="formModal.name" required />
              <label>E-mail:</label>
              <input type="text" v-model="formModal.email" required />
              <button type="submit" class="btn btnPrimary">Submit!</button>
            </form>
          </Modal>

          <!-- Validate modal -->
          <button class="btn btnPrimary" @click="validateModal = !validateModal">Show validate modal</button>
          <Validate v-show="validateModal" @close="validateModal=false" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
import Validate from "@/components/Validate.vue";

export default {
  components: {
    Modal,
    Validate
  },
  data() {
    return {
      basicModal: false,
      formModal: {
        show: false,
        name: "",
        email: ""
      },
      validateModal: false
    };
  },
  methods: {
    submitForm() {
      console.log({
        name: this.formModal.name,
        email: this.formModal.email
      });

      this.formModal.name = "";
      this.formModal.email = "";
    }
  }
};
</script>

<style lang="scss"></style>
