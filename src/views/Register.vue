<template>
  <div class="form-wrap">
    <form class="register">
      <p class="login-register">
        Already have an account?
        <router-link class="router-link" :to="{ name: 'login' }"
          >Login</router-link
        >
      </p>
      <h2>Create your FireBlog account</h2>
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="First name" v-model="firstName" />
          <user-icon class="icon" />
        </div>
        <div class="input">
          <input type="text" placeholder="Last name" v-model="lastName" />
          <user-icon class="icon" />
        </div>
        <div class="input">
          <input type="text" placeholder="User name" v-model="userName" />
          <user-icon class="icon" />
        </div>
        <div class="input">
          <input type="email" placeholder="Email" v-model="email" />
          <email class="icon" />
        </div>

        <div class="input">
          <input type="password" placeholder="Password" v-model="password" />
          <password class="icon" />
        </div>
      </div>

      <button>Sign Up</button>

      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script>
import email from "@/assets/Icons/envelope-regular.svg";
import password from "@/assets/Icons/lock-alt-solid.svg";
import userIcon from "@/assets/Icons/user-alt-light.svg";

export default {
  name: "Register",
  components: {
    email,
    password,
    userIcon,
  },
  data() {
    return {
      firstName: null,
      lastName: null,
      userName: null,
      email: null,
      password: null,
    };
  },
};
</script>

<style lang="scss" scoped>
.register {
  h2 {
    max-width: 350px;
  }
}
</style>
