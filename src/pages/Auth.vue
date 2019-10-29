<template>
  <div class="page wrapper-content wrapper-content--fixed">
    <div class="page__container">
      <router-link class="page__link" to="/auth/signin">Sign in</router-link>
      <router-link class="page__link page__link_reverse" to="/auth/signup">Sign Up</router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.page__container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 200px;
}

.page__link {
  margin-right: 35px;
  padding: 5px 20px;
  font-weight: bold;
  font-size: 24px;
  color: #454545;
  border-radius: 5px;
  border: 2px solid#454545;
}

.page__link_reverse {
  background-color: #454545;
  color: #fff;
}
</style>