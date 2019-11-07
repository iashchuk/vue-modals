<template>
  <form clas="form" slot="body" @submit.prevent="onSubmit">
    <EmailField v-model="email" :v="$v.email" />
    <PasswordField v-model="password" :v="$v.password" />
    <button type="submit" class="btn btnPrimary">Submit!</button>
  </form>
</template>

<script>
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";
import Modal from "../../ui/Modal";
import EmailField from "../../ui/form/EmailField";
import PasswordField from "../../ui/form/PasswordField";

export default {
  components: {
    Modal,
    EmailField,
    PasswordField
  },
  beforeDestroy() {
    this.onReset();
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    }
  },
  methods: {
    onReset() {
      this.email = "";
      this.password = "";
      this.$v.$reset();
    },
    onSubmit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        const user = {
          email: this.email,
          password: this.password
        };

        this.$emit("onSubmit", user);
        this.onReset();
      }
    }
  }
};
</script>

<style lang='scss'>
.form__item {
  position: relative;
  padding-bottom: 35px;
}

.form__input {
  margin-bottom: 0;
}

.form__input_error {
  border: 1px solid tomato;
}

.form__label {
  margin-bottom: 5px;
}

.form__error {
  position: absolute;
  bottom: 15px;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
  display: none;
  font-size: 13px;
  line-height: 20px;
  color: tomato;
}

.form__item_error {
  .form__error {
    display: block;
  }
}
</style>