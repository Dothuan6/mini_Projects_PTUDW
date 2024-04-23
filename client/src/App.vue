<script>
import AppHeader from "@/components/includes/AppHeader.vue";
import AppFooter from "@/components/includes/AppFooter.vue";
import {toast} from 'vue3-toastify';
import 'vue3-toastify/dist/index.css'
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
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./assets/images/background.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="./assets/images/bg-1.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="./assets/images/bg-2.jpg" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
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
img{
  height: 400px;
  width: 100%;
}
</style>