<template>
  <div>
    <v-toolbar dense flat color="cyan" dark>
      <v-toolbar-title>{{title}}</v-toolbar-title>
    </v-toolbar>
    <slot>No Content Currently added</slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      dafault: 'Title'
    }
  }
}
</script>

<style>
</style>
