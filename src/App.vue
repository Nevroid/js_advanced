<template>
  <Catalog class="product-content" />
</template>

<script>
import Catalog from "./components/Catalog.vue";
export default {
  components: {
    Catalog,
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