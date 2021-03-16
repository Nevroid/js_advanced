<template>
  <div>
    <CatalogItem
      class="product_mb product"
      v-for="id in getItemsOnPage"
      :key="id"
      :id="id"
    />
    <div @click="incrCounter()">
      <MidButton :buttonText="expandButtonText" />
    </div>
  </div>
</template>

<script>
import CatalogItem from "./CatalogItem.vue";
import MidButton from "./MidButton.vue";
import { mapMutations, mapGetters, mapActions } from "vuex";
export default {
  created() {
    this.requestData(this.moreCounter);
  },
  components: {
    CatalogItem,
    MidButton,
  },
  methods: {
    ...mapMutations(["setData"]),
    ...mapActions(["requestData"]),
    incrCounter() {
      if (this.moreCounter < 2) {
        this.moreCounter++;
      } else {
        this.moreCounter--;
      }
    },
  },
  computed: {
    ...mapGetters(["getData", "getItemsOnPage", "getTotalCost"]),
  },
  data() {
    return {
      moreCounter: 0,
      expandButtonText: "Show More",
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