<template>
  <div>
    <Modal v-if="!signUpSuccessed" title="Sign Up" @onClose="closeSignUp">
      <div class="sign__body" slot="body">
        <SignUpForm @onSubmit="submitSignUpForm" />
        <router-link class="sign__button" to="/auth/signin">Sign In</router-link>
      </div>
    </Modal>

    <SuccessModal
      v-show="signUpSuccessed"
      title="Sign up is successed"
      :name="successData.name"
      :email="successData.email"
      :password="successData.password"
      :onClose="closeSignUp"
    />
  </div>
</template>

<script>
import { router } from "../../main";
import Modal from "../../ui/Modal";
import SignUpForm from "./SignUpForm";
import SuccessModal from "../SignIn/SuccessModal";

const defaultSuccessData = {
  email: "",
  name: "",
  password: ""
};

export default {
  components: {
    Modal,
    SignUpForm,
    SuccessModal
  },
  data() {
    return {
      signUpSuccessed: false,
      successData: defaultSuccessData
    };
  },
  methods: {
    closeSignUp() {
      this.successData = defaultSuccessData;
      router.push("/auth");
    },
    submitSignUpForm(userData) {
      this.signUpSuccessed = true;
      this.successData = userData;
    }
  }
};
</script>

<style lang="scss" scoped>
.sign__body {
  min-height: 645px;
}

.sign__button {
  display: inline-block;
  width: 100%;
  margin-top: 59px;
  margin-bottom: 5px;
  padding: 15px 0;
  border: 0;
  border-top: 2px solid #494ce8;
  background: none;

  &:hover {
    opacity: 0.7;
  }
}
</style>
