<template>
    <div>
      <h1>Welcome {{ user.user.name }}, <a @click="logout">Logout</a> </h1>
    </div>
    <div>
    <h2>Your Subjects</h2>
      <ul>
        <li v-for="subject in userSubjects" :key="subject.id">{{ subject.name }}</li>
      </ul>
    </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
    userSubjects() {
      return this.$store.getters.userSubjects;
    },
  },
  methods: {
    async logout() {
      this.$store.dispatch('logout');
      this.$router.push('/');
    },
  },
  mounted() {
    // Dispatch the action to fetch user subjects when the component mounts
    this.$store.dispatch('fetchUserSubjects');
  },
};
</script>
