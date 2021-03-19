<template>
  <div>
    <Catalog class="product-content" />
    <Cart />
  </div>
</template>

<script>
import Catalog from "./Catalog.vue";
import Cart from "./Cart.vue";
import TestForm from "./TestForm.vue";

export default {
  components: {
    Catalog,
    Cart,
    TestForm,
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