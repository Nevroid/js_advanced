<template>
  <div>
    <h3>Customer Cart</h3>
    <div class="product__usercart">
      <div v-for="item in items_cart">
        <CartItem
          class="product_mb product userCart__item"
          :goodTitle="item.title"
          :goodPrice="item.price"
          :goodDescription="item.description"
          :goodImg="item.img"
          :goodPage="item.page"
          :goodId="item.id"
        />
      </div>
    </div>
  </div>
</template>
<script>
import CartItem from "./CartItemTemp.vue";
export default {
  components: {
    CartItem,
  },
  methods: {},
  data() {
    return {};
  },
};
</script>

<style module>
.carfghtalog {
  color: blue;
  padding-top: 48px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>