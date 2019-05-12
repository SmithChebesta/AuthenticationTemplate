<template>
  <v-app>
    <app-header @toggle="(isNavShow = !isNavShow)"></app-header>
    <app-navbar :showNav="isNavShow" @input="isNavShow = $event"></app-navbar>
    <v-content class="mt-5">
      <v-container>
        <nuxt/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import header from '@/components/header'
import navbar from '@/components/navbar'
export default {
  middleware: ['checkLogin'],
  components: {
    appHeader: header,
    appNavbar: navbar
  },
  data() {
    return {
      isNavShow: false
    }
  }
}
</script>
