<template>
    <div>
      <h2>Login Form</h2>
      <form @submit.prevent="login">
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      async login() {
        try {
          // Make an Axios request to your Laravel route for authentication
          const response = await axios.post('/login', {
            email: this.email,
            password: this.password,
          });

          // Assuming a successful response returns a JSON with user information
          const userData = response.data;
          const accessToken = response.data.token.token;
          this.saveTokenToLocalStorage(accessToken);
          // Dispatch an action to store the user data in Vuex
          this.$store.dispatch('login', userData);

          // Redirect to the /dashboard route
          this.$router.push('/dashboard');
        } catch (error) {
          // Handle login errors here
          console.error('Login failed:', error);
        }
      },

      saveTokenToLocalStorage(token) {
      // Save the token to localStorage
      localStorage.setItem('access_token', token);
    },
    getTokenFromLocalStorage() {
      // Retrieve the token from localStorage
      return localStorage.getItem('access_token');
    },
    },
  };
  </script>
