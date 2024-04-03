<script>
import InputSearch from "@/components/InputSearch.vue";
import NhanVienLog from "@/views/NhanVienLog.vue";
import { ref } from "vue";
export default {
  components: {
    InputSearch,
    NhanVienLog,
  },
  data() {
    return {
      isLoggedIn: false,
    };
  },
  created() {
    const nhanvien = JSON.parse(sessionStorage.getItem("nhanvien"));
    // console.log(nhanvien.hoTenNhanVien)
    if (nhanvien) {
      this.isLoggedIn = true;
    }
    // return nhanvien?.hoTenNhanVien;
  },
  methods: {
    logout() {
      sessionStorage.removeItem("nhanvien");
      this.isLoggedIn = false;
      window.location.reload();
    },
  },
  setup() {
    const nhanvien = ref(JSON.parse(sessionStorage.getItem("nhanvien")));
    return { nhanvien };
  },
};
</script>
<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <div class="container-fluid">
      <a v-if="isLoggedIn" href="/" class="navbar-brand"
        >Quản lý {{ nhanvien.hoTenNhanVien }}</a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li v-if="isLoggedIn" class="nav-item">
            <router-link :to="{ name: 'book' }" class="nav-link">
              Sách
            </router-link>
          </li>
          <li v-if="isLoggedIn" class="nav-item">
            <router-link :to="{ name: 'showdocgia' }" class="nav-link">
              Độc giả
            </router-link>
          </li>
          <li v-if="isLoggedIn" class="nav-item">
            <router-link :to="{ name: 'shownxb' }" class="nav-link">
              Nhà xuất bản
            </router-link>
          </li>
          <li v-if="!isLoggedIn" class="nav-item">
            <router-link :to="{ name: 'nhanvien.register' }" class="nav-link">
              Đăng ký
            </router-link>
          </li>
          <li v-if="!isLoggedIn" class="nav-item">
            <router-link :to="{ name: 'nhanvien.login' }" class="nav-link">
              Đăng nhập
            </router-link>
          </li>
          <li v-if="isLoggedIn" class="nav-item">
            <a href="#" class="nav-link" @click="logout"> Đăng xuất </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
