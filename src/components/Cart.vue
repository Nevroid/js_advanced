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
import CartItem from "./CartItem.vue";
export default {
  components: {
    CartItem,
  },
  methods: {},
  data() {
    return {
      items_cart: [
        {
          title: "T-Shirt",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          price: 88,
          img: "./img/product_000.jpg",
          page: "",
          id: 1,
        },
        {
          title: "Jeans",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          price: 125,
          img: "./img/product_001.jpg",
          page: "",
          id: 2,
        },
        {
          title: "Sweater",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          price: 75,
          img: "./img/product_003.jpg",
          page: "",
          id: 3,
        },
        {
          title: "Coat",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          price: 200,
          img: "./img/product_004.jpg",
          page: "",
          id: 4,
        },
        {
          title: "Socks",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          price: 5,
          img: "./img/product_005.jpg",
          page: "",
          id: 5,
        },
        {
          title: "Sneakers",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          price: 50,
          img: "./img/product_006.jpg",
          page: "",
          id: 6,
        },
      ],
    };
  },
};
</script>

<style module>
/* .carfghtalog {
  color: blue;
  padding-top: 48px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
} */
</style>