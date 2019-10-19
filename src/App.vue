<template>
  <div class="app wrapper">
    <div class="app__content wrapper-content">
      <section class="app__section">
        <div class="app__container container">
          <!-- Basic modal -->
          <button
            class="app__button btn btnPrimary"
            @click="basicModal = !basicModal"
          >Show basic modal</button>
          <Modal v-show="basicModal" title="Basic Modal" @close="basicModal=false">
            <div slot="body">
              <p>Text</p>
              <button>Click</button>
            </div>
          </Modal>

          <!-- Form modal -->
          <button
            class="app__button btn btnPrimary"
            @click="formModal.show = !formModal.show"
          >Show form modal</button>
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
          <button
            class="app__button btn btnPrimary"
            @click="validateModal = !validateModal"
          >Show validate modal</button>
          <Validate
            v-show="validateModal"
            @close="validateModal=false"
            @submitValidateForm="submitValidateForm"
          />
        </div>
      </section>
      <section class="app__section">
        <div class="app__block" v-for="(item, index) in data" :key="index">
          <span class="app__text app__text_number">{{index + 1}}</span>
          <span class="app__text">{{item.name}}</span>
          <span class="app__text">{{item.email}}</span>
          <span class="app__text">{{item.password}}</span>
          <span class="app__text">{{item.source}}</span>
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
      validateModal: false,
      data: []
    };
  },
  methods: {
    submitForm() {
      this.data = [
        ...this.data,
        {
          name: this.formModal.name,
          email: this.formModal.email,
          source: "FORM MODAL"
        }
      ];
      this.formModal.show = false;
      this.formModal.name = "";
      this.formModal.email = "";
    },
    submitValidateForm(user) {
      this.data = [...this.data, user];
    }
  }
};
</script>

<style lang="scss">
.app__container {
  display: flex;
  justify-content: space-evenly;
}

.app__block {
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  .app__text {
    width: 23%;
    padding: 10px;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .app__text_number {
    width: 8%;
  }
}

.app__button {
  &:hover {
    opacity: 0.8;
  }
}
</style>
