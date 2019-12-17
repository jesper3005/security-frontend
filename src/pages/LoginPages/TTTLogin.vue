<script>
import VueRecaptcha from "vue-recaptcha";
import { mapActions, mapState } from 'vuex'

export default {
  name: "TTTLogin",
  components: { VueRecaptcha },
  data() {
    return {
      email: "",
      password: "",
      submitted: false
    };
  },
  computed: {
    ...mapState(['account'])
  },
  methods: {
      ...mapActions("account", ["login", "logout"]),
      handleSubmit(e) {
      this.submitted = true;
      const { email, password } = this;
      if (email && password) {
        this.login({ email, password });
      }
    }
  }
};
</script>

<template>
  <div class="loginContainer">
    <div v-show="submitted && !email" class="invalid-feedback">Email is required</div>
    <form @submit.prevent="handleSubmit">
      <input
        type="text"
        v-model="email"
        name="email"
        :class="{ 'isInvalid': submitted && !email}"
        placeholder="Email..."
        class="email"
      />
      <div v-show="submitted && !password" class="invalid-feedback">Password is required</div>
      <input
        type="password"
        v-model="password"
        name="password"
        :class="{ 'is-invalid': submitted && !password }"
        placeholder="Password..."
        class="password"
      />
      <button>Login</button>
      <router-link to="/register" class="register">Register</router-link>
    </form>
  </div>
</template>

<style scoped>
  .loginContainer {
    width: 100%;
    height: 100%;
    margin: auto;
    margin-top: 10%;
  }

  .email {
    display: block;
    margin: auto;
    background-color: white;
    height: 20px;
    width: 18%;
    border: 1px solid rgba(214, 214, 214, 0.664);
    box-shadow: 1px 1px rgba(228, 228, 228, 0.603);
    border-radius: 40px;
    padding: 20px;
    margin-bottom: 12px;
  }

  .password {
    display: block;
    margin: auto;
    background-color: white;
    height: 20px;
    width: 18%;
    border: 1px solid rgba(214, 214, 214, 0.664);
    box-shadow: 1px 1px rgba(228, 228, 228, 0.603);
    border-radius: 40px;
    padding: 20px;
    margin-bottom: 50px;
  }

  button {
    display: block;
    margin: auto;
    color: grey;
    background-color: white;
    height: 50px;
    width: 18%;
    border: 1px solid rgba(214, 214, 214, 0.664);
    box-shadow: 1px 1px rgba(228, 228, 228, 0.603);
    border-radius: 40px;
    padding: 12px;
    margin-bottom: 10px;
  }
</style>