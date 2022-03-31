<template>
  <div>
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="blue-grey darken-1"
      dark
    >
      <v-toolbar-title class="ml-2">
        <!-- <v-img
          class="mr-3 float-left"
          :src="require('@/assets/logo.png')"
          height="30px"
          width="30px"
        >
        </v-img> -->
        <a
          href="/"
          class="white--text"
          style="text-decoration: none; margin-left: 15px"
          >8-SELLER-MARKET</a
        >
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="hidden-sm-and-down pl-10 ml-4"
      />
      <v-spacer />
      <v-btn icon>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
      <v-btn @click="onBtn" icon>
        <v-badge content="2" value="2" color="green" overlap>
          <v-icon>mdi-bell</v-icon>
        </v-badge>
      </v-btn>
      <v-btn @click="onBtn" href="/cart" icon>
        <v-badge content="2" value="2" color="green" overlap>
          <v-icon>mdi-cart</v-icon>
        </v-badge>
      </v-btn>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  name: 'Header',
  methods: {
    onBtn() {
      console.log('onBtn')
    },
  },
}
</script>
