<template>
  <div
    :class="[$style.btntest]"
    class="product-box_button center"
    @click="$emit('clicked')"
  >
    {{ buttonText }}
  </div>
</template>

<script>
export default {
  props: {
    buttonText: String,
  },
};
</script>


<style module>
.btntest {
  color: yellowgreen;
}
</style>