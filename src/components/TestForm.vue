<template>
  <div>
    <input v-model="id" type="text" placeholder="id" />
    <br />
    <input v-model="description" type="text" placeholder="description" />
    <br />
    <MidButton :buttonText="expandButtonText" @clicked="formData" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import MidButton from "./MidButton.vue";
export default {
  components: {
    MidButton,
  },
  data() {
    return {
      expandButtonText: "SEND",
      id: "",
      description: "",
    };
  },
  methods: {
    ...mapActions(["sendDataToFile"]),
    formData() {
      const dataToSend = { id: this.id, description: this.description };
      console.log(dataToSend);
      this.sendDataToFile(dataToSend);
    },
  },
};
</script>

<style>
</style>