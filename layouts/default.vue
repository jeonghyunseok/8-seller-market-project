<template>
  <div>
    <app-header />
    <navigation-bar />
    <Nuxt />
    <bottom />
  </div>
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
