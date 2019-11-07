<template>
  <div>
    <Modal v-if="!signInSuccessed" title="Use your account" @onClose="closeSignIn">
      <div class="sign__body" slot="body">
        <img class="sign__logo" alt="Vue logo" src="../../assets/logo.png" />
        <SignInForm @onSubmit="submitSignInForm" />
        <router-link class="sign__button" to="/auth/signup">Sign Up</router-link>
      </div>
    </Modal>

    <SuccessModal
      v-show="signInSuccessed"
      title="You are authorized!"
      :email="successData.email"
      :password="successData.password"
      :onClose="closeSignIn"
    />
  </div>
</template>

<script>
import { router } from "../../main";
import Modal from "../../ui/Modal";
import SignInForm from "./SignInForm";
import SuccessModal from "./SuccessModal";

const defaultSuccessData = {
  email: "",
  password: ""
};

export default {
  components: {
    Modal,
    SignInForm,
    SuccessModal
  },
  data() {
    return {
      signInSuccessed: false,
      successData: defaultSuccessData
    };
  },
  methods: {
    closeSignIn() {
      this.successData = defaultSuccessData;
      router.push("/auth");
    },
    submitSignInForm(userData) {
      this.signInSuccessed = true;
      this.successData = userData;
    }
  }
};
</script>

<style lang="scss" scoped>
.sign__body {
  min-height: 757px;
}

.sign__logo {
  margin-top: 20px;
  margin-bottom: 16px;
}
.sign__button {
  display: inline-block;
  width: 100%;
  margin-top: 176px;
  margin-bottom: 5px;
  padding: 15px 0;
  border: 0;
  border-top: 2px solid #494ce8;
  background: none;

  &:hover {
    color: #494ce8;
  }
}
</style>
