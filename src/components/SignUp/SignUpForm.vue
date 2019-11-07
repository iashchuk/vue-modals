<template>
  <form clas="form" slot="body" @submit.prevent="onSubmit">
    <TextField label="Name" v-model="name" :v="$v.name" />
    <TextField label="Surname" v-model="surname" :v="$v.surname" />
    <EmailField v-model="email" :v="$v.email" />
    <PasswordField v-model="password" :v="$v.password" />
    <PasswordField label="Confirm password" v-model="confirmPassword" :v="$v.confirmPassword" />
    <button type="submit" class="btn btnPrimary">Submit!</button>
  </form>
</template>

<script>
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";
import TextField from "../../ui/form/TextField";
import EmailField from "../../ui/form/EmailField";
import PasswordField from "../../ui/form/PasswordField";

export default {
  components: {
    TextField,
    EmailField,
    PasswordField
  },
  beforeDestroy() {
    this.onReset();
  },
  data() {
    return {
      name: "",
      surname: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(4)
    },
    surname: {
      required,
      minLength: minLength(2)
    },
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    },
    confirmPassword: {
      required,
      sameAsPassword: sameAs("password")
    }
  },
  methods: {
    onReset() {
      this.name = "";
      this.surname = "";
      this.email = "";
      this.password = "";
      this.confirmPassword = "";
      this.$v.$reset();
    },
    onSubmit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        const user = {
          name: this.name,
          surname: this.surname,
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