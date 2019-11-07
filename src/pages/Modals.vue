<template>
  <div class="page wrapper-content wrapper-content--fixed">
    <section class="page__section">
      <div class="page__container container">
        <!-- Basic modal -->
        <Button class="page__button" @click="basicModal = !basicModal">Show basic modal</Button>

        <Modal v-show="basicModal" title="Basic Modal" @onClose="basicModal=false">
          <ModalContent slot="body" @onConfirm="basicModal = false" />
        </Modal>

        <!-- Sign In modal -->
        <Button class="page__button" @click="signInModal = !signInModal">Show sign in modal</Button>

        <Modal v-if="signInModal" title="Sign In Modal" @onClose="signInModal=false">
          <SignInForm slot="body" @onSubmit="submitSignInModal" />
        </Modal>

        <!-- Sign Up modal -->
        <Button class="page__button" @click="signUpModal = !signUpModal">Show sign up modal</Button>

        <Modal v-if="signUpModal" title="Sign Up Modal" @onClose="signUpModal=false">
          <SignUpForm slot="body" @onSubmit="submitSignUpModal" />
        </Modal>
      </div>
    </section>

    <DataList :data="data" />
  </div>
</template>

<script>
import Modal from "../ui/Modal";
import SignUpForm from "../components/SignUp/SignUpForm";
import SignInForm from "../components/SignIn/SignInForm";
import ModalContent from "../components/Common/ModalContent";
import DataList from "../components/Common/DataList";
import Button from "../ui/buttons/Button";

export default {
  components: {
    Modal,
    SignUpForm,
    SignInForm,
    ModalContent,
    DataList,
    Button
  },
  data() {
    return {
      basicModal: false,
      signInModal: false,
      signUpModal: false,
      data: []
    };
  },
  methods: {
    addUserData(userData) {
      this.data = [...this.data, userData];
    },
    submitSignInModal(userData) {
      this.addUserData({ ...userData, source: "SIGN IN MODAL" });
      this.signInModal = false;
    },

    submitSignUpModal(userData) {
      this.addUserData({ ...userData, source: "SIGN UP MODAL" });
      this.signUpModal = false;
    }
  }
};
</script>

<style lang="scss">
.page__container {
  display: flex;
  justify-content: space-evenly;
}

.page__button {
  &:hover {
    opacity: 0.8;
  }
}
</style>
