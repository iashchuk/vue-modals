<template>
  <div class="field" :class="{field_error: v.$error}">
    <label class="field__label">{{label}}:</label>
    <input
      type="password"
      v-model="password"
      class="field__input"
      :class="{field__input_error: v.$error}"
      @change="v.$touch()"
    />
    <p class="field__text field__text_error" v-if="!v.required">Field is required</p>
    <p
      class="field__text field__text_error"
      v-if="!v.minLength && v.$params.minLength"
    >Password must have at least {{v.$params.minLength.min}} symbols</p>
    <p
      class="field__text field__text_error"
      v-if="v.required &&  !v.sameAsPassword"
    >Passwords don't match</p>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: "Password"
    },
    type: {
      type: String
    },
    v: {
      type: Object,
      required: true
    }
  },
  computed: {
    password: {
      get() {
        console.log(this.v);
        return this.value;
      },
      set(value) {
        this.v.$touch();
        this.$emit("input", value);
      }
    }
  }
};
</script>

<style lang='scss' scoped>
.field {
  position: relative;
  padding-bottom: 35px;
}

.field__input {
  margin-bottom: 0;
}

.field__input_error {
  border: 1px solid tomato;
}

.field__label {
  margin-bottom: 5px;
}

.field__text {
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

.field_error {
  .field__text_error {
    display: block;
  }
}
</style>