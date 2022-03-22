<template>
  <header class="p-3 mb-3 border-bottom">
    <div class="container">
      <div class="row">
        <div>
          <div class="text-left">
            <img
              src="@/static/icon.png"
              alt="mdo"
              width="30"
              height="30"
              class="rounded-circle"
              style="margin-bottom: 0.75rem"
            />
            <span class="title">8-SELLER-MARKET</span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'Header',
}
</script>
<style lang="scss" scoped>
.text-left {
  .title {
    font-family: 'Merriweather';
    font-size: 1.4rem;
    font-weight: 600;
    margin-left: 0.25rem;
  }
}
</style>
