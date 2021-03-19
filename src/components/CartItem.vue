<template>
  <div>
    <a :href="getCartItemData.page">
      <img
        class="product__img"
        :src="getCartItemData.img"
        :alt="getCartItemData.title"
      />
    </a>
    <div class="product__info">
      <a :href="getCartItemData.page" class="product__name">{{
        getCartItemData.title
      }}</a>
      <p class="product__text">{{ getCartItemData.description }}</p>
      <div class="product__price">
        $<span
          :id="getCartItemData.id + 'p'"
          class="product__price price-calc"
          >{{ getCartItemData.price }}</span
        >
      </div>
      <div class="product__price">
        <span class="decrQnt" :id="getCartItemData.id + 'decrQnt'"> - </span
        >Quantity:
        <span
          @click="incrQnt"
          :id="getCartItemData.id + 'q'"
          class="qnt-calc"
          >{{ getCartItemData.qnt }}</span
        ><span class="incrQnt" :id="getCartItemData.id + 'incrQnt'"> + </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
export default {
  props: {
    id: String,
  },
  methods: {
    incrQnt() {},
  },
  computed: {
    ...mapGetters(["getCartData", "getItemsInCart"]),
    getCartItemData() {
      return this.getCartData[this.id];
    },
  },
};
</script>

<style>
</style>