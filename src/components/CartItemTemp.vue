<template>
  <div>
    <a :href="goodPage">
      <img class="product__img" :src="goodImg" :alt="goodTitle" />
    </a>
    <div class="product__info">
      <a :href="goodPage" class="product__name">{{ goodTitle }}</a>
      <p class="product__text">{{ goodDescription }}</p>
      <div class="product__price">
        $<span :id="goodId + 'p'" class="product__price price-calc">{{
          goodPrice
        }}</span>
      </div>
      <div class="product__price">
        <span class="decrQnt" :id="goodId + 'decrQnt'"> - </span>Quantity:
        <span :id="goodId + 'q'" class="qnt-calc">${this._qnt}</span
        ><span class="incrQnt" :id="goodId + 'incrQnt'"> + </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodTitle: String,
    goodPrice: Number,
    goodDescription: String,
    goodImg: String,
    goodPage: String,
    goodId: Number,
  },
};
</script>

<style>
</style>