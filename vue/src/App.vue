<template>
  <div :class="['p-16', '[&_input]:border', '[&_input]:border-gray-300']">
    <h1 class="font-bold text-md pb-2">Enter Code:</h1>
    <OTPInput :length="6" />
  </div>
</template>

<script>
import OTPInput from "./components/OTPInput.vue";

export default {
  name: "App",
  components: {
    OTPInput,
  },
};
</script>

<style scoped>
</style>