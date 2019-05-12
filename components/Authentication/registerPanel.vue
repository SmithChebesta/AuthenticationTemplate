<template>
  <app-panel :title="'Register'">
    <v-form class="py-2 px-4" autocomplete="false">
      <v-text-field
        :error="isError"
        :error-messages="errorMsg.email"
        v-model="email"
        label="Email"
        type="email"
        hint="Enter your Email"
      ></v-text-field>

      <v-text-field
        :error="isError"
        :error-messages="errorMsg.password1"
        v-model="password1"
        label="Password"
        type="password"
        hint="Enter your password"
      ></v-text-field>

      <v-text-field
        :error="isError"
        :error-messages="errorMsg.password2"
        v-model="password2"
        label="Confirm Password"
        type="password"
        hint="Enter your password again"
      ></v-text-field>
      <v-btn color="success" @click="onSignUp">Sign up</v-btn>
    </v-form>
  </app-panel>
</template>

<script>
import AuthenticationService from '@/service/AuthenticationService'
import panel from '@/components/UI/panel'
export default {
  components: {
    appPanel: panel
  },
  data() {
    return {
      email: '',
      password1: '',
      password2: '',
      isError: false,
      error: null,
      errorMsg: {
        email: '',
        password1: '',
        password2: ''
      }
    }
  },
  methods: {
    async onSignUp() {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password1: this.password1,
          password2: this.password2
        })

        this.$store.dispatch('setToken', response.data.token)
        this.$cookies.set('token', response.data.token, {
          maxAge: 60
        })

        this.$store.dispatch('setUser', response.data.user)

        this.$router.push('/')
      } catch (error) {
        this.error = error.response.data
        this.error.forEach(item => {
          if (item.param === 'email') {
            this.errorMsg.email = item.msg
          } else if (item.param === 'password1') {
            this.errorMsg.password1 = item.msg
          } else if (item.param === 'password2') {
            this.errorMsg.password2 = item.msg
          }
        })
        this.isError = true
      }
    }
  }
}
</script>

<style>
</style>
