<template>
  <v-main>
    <v-bottom-navigation :value="activeBtn" color="primary" horizontal>
      <a href="/" class="v-btn">
        <span>Home</span>
      </a>
      <v-menu open-on-hover offset-y>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on">
            <span>Shop</span>
          </v-btn>
        </template>
        <v-card class="mx-auto" max-width="344" outlined>
          <v-list-item v-for="(item, index) in items" :key="index" href="/shop">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-card>
      </v-menu>
      <a href="/product" class="v-btn">
        <span>Product</span>
      </a>
      <v-btn href="/blog">
        <span>Blog</span>
      </v-btn>
    </v-bottom-navigation>
  </v-main>
</template>
<script>
export default {
  name: 'LayoutHeader',
  data() {
    return {
      items: [
        { title: 'T-Shirts' },
        { title: 'Jackets' },
        { title: 'Shirts' },
        { title: 'Jeans' },
        { title: 'Shoes' },
      ],
      activeBtn: 1,
    }
  },
}
</script>
