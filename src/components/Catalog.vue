<template>
  <div>
    <CatalogItem
      class="product_mb product"
      v-for="id in getItemsOnPage"
      :key="id"
      :id="id"
    />

    <CatalogItem
      class="product_mb product"
      v-if="getExpandCounter > 0"
      v-for="id in getItemsOnPage"
      :key="id"
      :id="id"
    />

    <div @click="expandCounterIncr">
      <MidButton v-if="getExpandCounter < 2" :buttonText="expandButtonText" />
    </div>
  </div>
</template>

<script>
import CatalogItem from "./CatalogItem.vue";
import MidButton from "./MidButton.vue";
import { mapMutations, mapGetters, mapActions } from "vuex";
export default {
  created() {
    this.requestData(this.testCnt);
  },
  // updated() {
  //   this.requestData(getExpandCounter);
  // },
  components: {
    CatalogItem,
    MidButton,
  },
  methods: {
    ...mapMutations(["setData", "expandCounterIncr"]),
    ...mapActions(["requestData"]),
  },
  computed: {
    ...mapGetters([
      "getData",
      "getItemsOnPage",
      "getTotalCost",
      "getExpandCounter",
    ]),
    testCnt() {
      return this.getExpandCounter;
    },
  },
  data() {
    return {
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