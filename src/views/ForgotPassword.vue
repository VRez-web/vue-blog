<template>
  <div class="reset-password">
    <Modal v-if="modalActive" @close-modal="closeModal" />
    <Loader v-if="loadingShow" />
    <div class="form-wrap">
      <form class="reset">
        <h2>Reset password</h2>
        <p>Forgot your password? Enter your email to reset it</p>
        <div class="inputs">
          <div class="input">
            <input type="email" placeholder="Email" v-model="email" />
            <email class="icon" />
          </div>
        </div>
        <button>Reset</button>
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
      modalActive: true,
      modalMessage: "Changes",
      loadingShow: false,
    };
  },
  methods: {
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
