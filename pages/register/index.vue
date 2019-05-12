<template>
  <v-layout row>
    <v-flex xs6 offset-xs3 elevation-2>
      <app-register-panel></app-register-panel>
    </v-flex>
  </v-layout>
</template>
<script>
import AuthenticationService from '@/service/AuthenticationService'
import appRegisterPanel from '@/components/Authentication/registerPanel'
export default {
  components: {
    appRegisterPanel
  }
}
</script>
