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
              <p
                class="app__info"
              >Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. It is designed from the ground up to be incrementally adoptable, and can easily scale between a library and a framework depending on different use cases. It consists of an approachable core library that focuses on the view layer only, and an ecosystem of supporting libraries that helps you tackle complexity in large Single-Page Applications.</p>
              <button type="submit" class="btn btnPrimary" @click="basicModal = false">OK</button>
            </div>
          </Modal>

          <!-- Form modal -->
          <button
            class="app__button btn btnPrimary"
            @click="formModal.show = !formModal.show"
          >Show form modal</button>
          <Modal v-show="formModal.show" title="Form Modal" @close="closeModalForm">
            <form slot="body" @submit.prevent="submitModalForm">
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
          <span class="app__text app__text_email">{{item.email}}</span>
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
    closeModalForm() {
      this.formModal = {
        show: false,
        name: "",
        email: ""
      };
    },
    addUserData(userData) {
      this.data = [...this.data, userData];
    },
    submitModalForm() {
      const userData = {
        name: this.formModal.name,
        email: this.formModal.email,
        source: "FORM MODAL"
      };
      this.addUserData(userData);
      this.closeModalForm();
    },

    submitValidateForm(userData) {
      this.addUserData(userData);
    }
  }
};
</script>

<style lang="scss">
.app__container {
  display: flex;
  justify-content: space-evenly;
}

.app__info {
  margin-bottom: 20px;
  text-align: left;
}

.app__block {
  width: 1000px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  .app__text {
    width: 20%;
    padding: 10px;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .app__text_number {
    width: 10%;
  }

  .app__text_email {
    width: 30%;
  }
}

.app__button {
  &:hover {
    opacity: 0.8;
  }
}
</style>
