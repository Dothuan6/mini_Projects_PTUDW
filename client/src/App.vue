<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
} 
</script>
<template>
  <div id="app m-auto">
    <AppHeader />
    <div class="mt-3">
      <router-view />
    </div>
  </div>
  <AppFooter />
</template>
<style>
.page {
  max-width: 400px;
  margin: auto;
}
</style>