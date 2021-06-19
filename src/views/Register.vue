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
        <p v-show="error" class="error">
          {{ errorMsg }}
        </p>
      </div>

      <button @click.prevent="register">Sign Up</button>

      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script>
import email from "@/assets/Icons/envelope-regular.svg";
import password from "@/assets/Icons/lock-alt-solid.svg";
import userIcon from "@/assets/Icons/user-alt-light.svg";
import firebase from "firebase/app";
import "firebase/auth";
import db from "@/firebase/firebaseInit";

export default {
  name: "Register",
  components: {
    email,
    password,
    userIcon,
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      error: false,
      errorMsg: "",
    };
  },
  methods: {
    async register() {
      if (
        !!this.email &&
        !!this.password &&
        !!this.firstName &&
        !!this.lastName &&
        !!this.userName
      ) {
        this.error = false;
        this.errorMsg = "";

        const firebaseAuth = await firebase.auth();
        const createUser = await firebaseAuth.createUserWithEmailAndPassword(
          this.email,
          this.password
        );

        const result = await createUser;
        const dataBase = db.collection("users").doc(result.user.uid);

        await dataBase.set({
          firstName: this.firstName,
          lastName: this.lastName,
          userName: this.userName,
          email: this.email,
        });

        this.$router.push({ name: "home" });

        return;
      }

      this.error = true;
      this.errorMsg = "Please fill out all the fields!";
      return;
    },
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
