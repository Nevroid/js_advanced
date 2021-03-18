<template>
  <div>
    <h3>Customer Cart</h3>
    <div class="product__usercart">
      <CartItem
        class="product_mb product userCart__item"
        v-for="id in getItemsInCart"
        :key="id"
        :id="id"
      />
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
import CartItem from "./CartItem.vue";
export default {
  created() {
    this.requestData(this.catalogCounter);
  },
  data() {
    return {};
  },

  components: {
    CartItem,
  },
  methods: {
    ...mapMutations(["setData"]),
    ...mapActions(["requestData"]),
    expandCatalog() {
      this.catalogCounter++;
      this.requestData(this.catalogCounter);
    },
  },
  computed: {
    ...mapGetters([
      "getData",
      "getItemsOnPage",
      "getTotalCost",
      "getItemsInCart",
    ]),
  },
};
</script>

<style module>
</style>