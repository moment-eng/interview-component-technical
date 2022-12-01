<template>
  <div class="inline-block p-4 border">Create {{ length }} inputs here</div>
</template>

<script>
export default {
  name: "OTPInput",
  props: {
    length: Number,
    default: () => 0,
  },
};
</script>

<style scoped>
</style>