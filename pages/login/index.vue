<template>
  <v-layout row>
    <v-flex xs6 offset-xs3 elevation-2>
      <app-login-panel></app-login-panel>
    </v-flex>
  </v-layout>
</template>
<script>
import AuthenticationService from '@/service/AuthenticationService'
import loginPanel from '@/components/Authentication/loginPanel'

export default {
  components: {
    appLoginPanel: loginPanel
  }
}
</script>
