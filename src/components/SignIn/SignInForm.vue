<template>
  <form clas="form" slot="body" @submit.prevent="onSubmit">
    <!-- email -->
    <div class="form__item" :class="{form__item_error: $v.email.$error}">
      <label class="form__label">E-mail:</label>
      <input
        v-model="email"
        class="form__input"
        :class="{form__input_error: $v.email.$error}"
        @change="$v.email.$touch()"
      />
      <p class="form__error" v-if="!$v.email.required">Field is required</p>
      <p class="form__error" v-if="!$v.email.email">Email is not correct</p>
    </div>
    <!-- password -->
    <div class="form__item" :class="{form__item_error: $v.password.$error}">
      <label class="form__label">Password:</label>
      <input
        type="password"
        v-model="password"
        class="form__input"
        :class="{form__input_error: $v.password.$error}"
        @change="$v.password.$touch()"
      />
      <p class="form__error" v-if="!$v.password.required">Field is required</p>
      <p
        class="form__error"
        v-if="!$v.password.minLength"
      >Password must have at least {{$v.password.$params.minLength.min}} symbols</p>
    </div>
    <Field v-model="text" />
    {{email}} - {{text}}
    <button type="submit" class="btn btnPrimary">Submit!</button>
  </form>
</template>

<script>
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";
import Modal from "../../ui/Modal";
import Field from "../../ui/Field";

export default {
  components: {
    Modal,
    Field
  },
  beforeDestroy() {
    this.onReset();
  },
  data() {
    return {
      email: "",
      password: "",
      text: ""
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
    },
    text: {
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