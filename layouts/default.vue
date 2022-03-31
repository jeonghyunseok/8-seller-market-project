<template>
  <v-app id="inspire">
    <app-header />
    <navigation-bar />
    <Nuxt />
    <bottom />
  </v-app>
</template>
<script>
import AppHeader from '~/components/layout/header.vue'

import NavigationBar from '~/components/layout/navigationBar.vue'
import Bottom from '~/components/layout/bottom.vue'
export default {
  name: 'Layout',
  components: {
    AppHeader,
    NavigationBar,
    Bottom,
  },
}
</script>
