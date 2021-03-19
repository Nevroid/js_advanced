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
    <div style="display: flex" :class="[$style.btnblock]">
      <MidButton @clicked="formData">Save CART</MidButton>
      <br />
      <MidButton @clicked="emptyCart">Empty CART</MidButton>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
import CartItem from "./CartItem.vue";
import MidButton from "./MidButton.vue";
export default {
  created() {
    this.requestCartData();
  },
  components: {
    CartItem,
    MidButton,
  },
  methods: {
    ...mapMutations(["setData", "deleteCartData"]),
    ...mapActions(["requestData", "sendDataToFile", "requestCartData"]),
    formData() {
      const dataToSend = this.getCartData;
      console.log(dataToSend);
      this.sendDataToFile(dataToSend);
    },
    emptyCart() {
      this.deleteCartData();
      this.formData();
    },
  },

  computed: {
    ...mapGetters([
      "getData",
      "getItemsOnPage",
      "getTotalCost",
      "getItemsInCart",
      "getCartData",
    ]),
  },
};
</script>

<style module>
.btnblock {
  display: flex;
}
</style>