<template>
  <Modal title="Validate Modal" @close="onClose">
    <form clas="form" slot="body" @submit.prevent="onSubmit">
      <!-- name -->
      <div class="form__item" :class="{form__item_error: $v.name.$error}">
        <label class="form__label">Name:</label>
        <input
          v-model="name"
          class="form__input"
          :class="{form__input_error: $v.name.$error}"
          @change="$v.name.$touch()"
        />
        <p class="form__error" v-if="!$v.name.required">Field is required</p>
        <p
          class="form__error"
          v-if="!$v.name.minLength"
        >Name must have at least {{$v.name.$params.minLength.min}} letters</p>
      </div>
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
      <button type="submit" class="btn btnPrimary">Submit!</button>
    </form>
  </Modal>
</template>

<script>
import { required, minLength, email } from "vuelidate/lib/validators";
import Modal from "@/components/Modal";

export default {
  components: {
    Modal
  },
  data() {
    return {
      name: "",
      email: ""
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(4)
    },
    email: {
      required,
      email
    }
  },
  methods: {
    onClose() {
      this.name = "";
      this.email = "";
      this.$v.$reset();
      this.$emit("close");
    },
    onSubmit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        const user = {
          name: this.name,
          email: this.email
        };
        console.log(user);
        this.onClose();
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