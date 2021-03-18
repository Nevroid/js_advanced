<template>
  <div>
    <CatalogItem
      class="product_mb product"
      v-for="id in getItemsOnPage"
      :key="id"
      :id="id"
    />

    <MidButton
      @clicked="expandCatalog"
      v-if="catalogCounter < 2"
      :buttonText="expandButtonText"
    />
  </div>
</template>

<script>
import CatalogItem from "./CatalogItem.vue";
import MidButton from "./MidButton.vue";
import { mapMutations, mapGetters, mapActions } from "vuex";
export default {
  created() {
    this.requestData(this.catalogCounter);
  },
  data() {
    return {
      expandButtonText: "Show More",
      catalogCounter: 0,
    };
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
      "getExpandCounter",
    ]),
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