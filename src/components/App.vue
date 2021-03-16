<template>
  <div>
    <Catalog class="product-content" />
    <Cart class="product__usercart" />
  </div>
</template>

<script>
import Catalog from "./Catalog.vue";
import Cart from "./Cart.vue";

export default {
  components: {
    Catalog,
    Cart,
  },
  data() {
    return {
      someTestData: "test",
    };
  },
};
</script>

<style>
</style>