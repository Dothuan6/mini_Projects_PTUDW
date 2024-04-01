<script>
import InputSearch from "@/components/InputSearch.vue";
export default{
    components: {
        InputSearch,
    },
    data() {
        return {
            searchText: "",
            Sach: [],
            activeIndex: -1,
        };
    },
    watch: {
        searchText() {
            this.activeIndex = -1;
        },
    },
}

</script>

<template>
  <!-- <nav class="navbar navbar-expand navbar-dark bg-dark">
        <a href="/" class="navbar-brand">Ứng dụng Quản lý sách</a>
        <div class="mr-auto navbar-nav">
            <li class="nav-item">
                <router-link :to="{ name: 'muon-sach' }" class="nav-link">
                    Sách mượn
                    <i class="fas fa-address-book"></i>
                </router-link>
            </li>
        </div>
    </nav> -->
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <div class="container-fluid">
      <a href="/" class="navbar-brand">Ứng dụng Quản lý sách</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link :to="{ name: 'book' }" class="nav-link">
              Mượn sách
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'docgia.register' }" class="nav-link">
              Đăng ký
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'docgia.login' }" class="nav-link">
              Đăng nhập
            </router-link>
          </li>
        </ul>
        <form class="d-flex">
          <InputSearch v-model="searchText" />
        </form>
      </div>
    </div>
  </nav>
</template>
