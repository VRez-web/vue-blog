<template>
  <div class="reset-password">
    <Modal
      v-if="modalActive"
      :modalMessage="modalMessage"
      @close-modal="closeModal"
    />
    <Loader v-if="loadingShow" />
    <div class="form-wrap">
      <form class="reset">
        <p class="login-register">
          Back to
          <router-link class="router-link" :to="{ name: 'login' }"
            >Login</router-link
          >
        </p>
        <h2>Reset password</h2>
        <p>Forgot your password? Enter your email to reset it</p>
        <div class="inputs">
          <div class="input">
            <input type="email" placeholder="Email" v-model="email" />
            <email class="icon" />
          </div>
        </div>
        <button @click.prevent="resetPassword">Reset</button>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
  </div>
</template>

<script>
import email from "@/assets/Icons/envelope-regular.svg";
import Modal from "@/components/Modal";
import Loader from "@/components/Loader";
import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "ForgotPassword",
  components: {
    email,
    Modal,
    Loader,
  },
  data() {
    return {
      email: null,
      modalActive: false,
      modalMessage: "Changes",
      loadingShow: false,
    };
  },
  methods: {
    resetPassword() {
      this.loadingShow = true;
      firebase
        .auth()
        .sendPasswordResetEmail(this.email)
        .then(() => {
          this.modalMessage =
            "If your account exists, you will receive a email";
          this.loadingShow = false;
          this.modalActive = true;
        })
        .catch((err) => {
          this.modalMessage = err.message;
          this.loadingShow = false;
          this.modalActive = true;
        });
    },
    closeModal() {
      this.modalActive = !this.modalActive;
      this.email = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.reset-password {
  position: relative;

  .form-wrap {
    .reset {
      h2 {
        margin-bottom: 0;
      }

      p {
        text-align: center;
        margin-bottom: 32px;
      }
    }
  }
}
</style>
