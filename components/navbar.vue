<template>
  <v-navigation-drawer
    temporary
    app
    disable-route-watcher
    disable-resize-watcher
    color="blue-grey lighten-4"
    :value="showNav"
    @input="$emit('input',$event)"
  >
    <v-toolbar dense dark color="cyan">
      <v-toolbar-title>Navigator</v-toolbar-title>
    </v-toolbar>
    <v-divider></v-divider>
    <v-btn class="py-4 ma-0" flat block to="/" nuxt exact-active-class exact>
      <v-icon left class="pr-2 cyan--text text--darken-2">home</v-icon>
      <h4 class="font-weight-regular mr-auto">Home</h4>
    </v-btn>
    <v-btn
      class="py-4 ma-0"
      flat
      block
      to="/register"
      v-show="!$store.state.isLogined "
      nuxt
      exact-active-class
      exact
    >
      <v-icon left class="pr-2 cyan--text text--darken-2">dashboard</v-icon>
      <h4 class="font-weight-regular mr-auto">Register</h4>
    </v-btn>
    <v-btn
      class="py-4 ma-0"
      flat
      block
      to="/login"
      v-show="!$store.state.isLogined "
      nuxt
      exact-active-class
      exact
    >
      <v-icon left class="pr-2 cyan--text text--darken-2">dashboard</v-icon>
      <h4 class="font-weight-regular mr-auto">Login</h4>
    </v-btn>
    <v-btn
      class="py-4 ma-0"
      flat
      block
      @click="logout"
      v-show="$store.state.isLogined "
      nuxt
      exact-active-class
      exact
    >
      <v-icon left class="pr-2 cyan--text text--darken-2">dashboard</v-icon>
      <h4 class="font-weight-regular mr-auto">Logout</h4>
    </v-btn>
  </v-navigation-drawer>
</template>
<script>
export default {
  props: {
    showNav: {
      type: Boolean,
      dafault: false
    }
  },
  data() {
    return {
      showNavChild: false
    }
  },
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
<style scoped>
.v-btn--active {
  border-right: 4px solid rgb(0, 0, 0);
}
</style>
