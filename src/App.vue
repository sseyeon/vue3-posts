<template>
  <TheHeader></TheHeader>
  <TheView></TheView>
</template>

<script>
import TheView from "@/layouts/TheView.vue";
import TheHeader from "@/layouts/TheHeader.vue";
export default {
  name: "App",
  components: {
    TheHeader,
    TheView,
  },
};
</script>

<style></style>
