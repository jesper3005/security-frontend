<script>
import VueRecaptcha from "vue-recaptcha";

export default {
  name: "TTTLogin",
  components: { VueRecaptcha },
  data() {
    return {
      username: "",
      password: "",
      submitted: false
    };
  },
  methods: {
    onSubmit: function() {
      this.$refs.invisibleRecaptcha.execute();
    },
    onVerify: function(response) {
      console.log("Verify: " + response);
      alert("Verifyed, but not really");
    },
    onExpired: function() {
      console.log("Expired");
    },
    resetRecaptcha() {
      this.$refs.recaptcha.reset(); // Direct call reset method
    }
  }
};
</script>

<template>
  <div class="loginContainer">
    <form>
      <input
        type="text"
        v-model="username"
        name="username"
        :class="{ 'isInvalid': submitted && !username}"
        placeholder="Account name..."
        class="username"
      />
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

  .username {
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