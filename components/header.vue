<template>
  <v-toolbar dense fixed dark color="cyan" nuxt>
    <v-toolbar-title>
      <nuxt-link to="/">
        <h3 class="headline white--text">Title</h3>
      </nuxt-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn v-if="!$store.state.isLogined" to="/register" color="White" flat>Register</v-btn>
      <v-btn v-if="!$store.state.isLogined" to="/login" color="White" flat>Login</v-btn>
      <v-btn v-if="$store.state.isLogined" @click="logout" color="White" flat>Logout</v-btn>
    </v-toolbar-items>
    <v-toolbar-side-icon class="hidden-md-and-up" @click="$emit('toggle')"></v-toolbar-side-icon>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$cookies.remove('token')

      this.$router.push('/')
    }
  }
}
</script>

<style>
a {
  text-decoration: none;
}
</style>
