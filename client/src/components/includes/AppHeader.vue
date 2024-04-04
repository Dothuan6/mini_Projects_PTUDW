<script>
import InputSearch from "@/components/includes/InputSearch.vue";
import NhanVienLog from "@/views/nhanvien/NhanVienLog.vue";
import DocGiaLog from "@/views/docgia/DocGiaLog.vue";
import { ref } from "vue";
export default {
  components: {
    InputSearch,
      NhanVienLog,
      DocGiaLog
  },
  data() {
    return {
      isLoggedIn: false,
      isLoggedInDocGia: false,
    };
  },
  created() {
    const docgia = JSON.parse(sessionStorage.getItem("docgia"));
    const nhanvien = JSON.parse(sessionStorage.getItem("nhanvien"));
    if (nhanvien) {
      this.isLoggedIn = true;
    }
    if(docgia){
      this.isLoggedInDocGia = true;
    }
  },
  methods: {
    async logout() {
      const nhanvien = sessionStorage.removeItem("nhanvien");
      const docgia = sessionStorage.removeItem("docgia");
      await this.$router.push({ name: "nhanvien.login" });
      if (nhanvien) {
        alert("Đăng xuất thành công");
        this.isLoggedIn = false;
      }
      if(docgia){
        alert("Đăng xuất thành công");
        this.isLoggedInDocGia = false;
      }
      window.location.reload();
    },
  },
  setup() {
    const nhanvien = ref(JSON.parse(sessionStorage.getItem("nhanvien")));
    const docgia = ref(JSON.parse(sessionStorage.getItem("docgia")));
    return { nhanvien,docgia };
  },
};
</script>
<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <div class="container-fluid">
      <a v-if="isLoggedIn" href="/" class="navbar-brand"
        >Quản lý {{ nhanvien.hoTenNhanVien }}</a
      >
      <a v-if="isLoggedInDocGia" href="#" class="navbar-brand"
        >Xin chào {{ docgia.tenDocGia }}</a
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
          <li v-if="isLoggedInDocGia" class="nav-item">
            <router-link :to="{ name: 'sachmuon' }" class="nav-link">
              Sách mượn
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
           <li v-if="isLoggedIn" class="nav-item">
            <router-link :to="{ name: 'quanlysachmuon' }" class="nav-link">
              Quản lý sách mượn
            </router-link>
          </li>
          <li v-if="!isLoggedIn  && !isLoggedInDocGia" class="nav-item">
            <router-link :to="{ name: 'nhanvien.register' }" class="nav-link">
              Đăng ký quản lý
            </router-link>
          </li>
          <li v-if="!isLoggedIn && !isLoggedInDocGia" class="nav-item">
            <router-link :to="{ name: 'nhanvien.login' }" class="nav-link">
              Đăng nhập quản lý
            </router-link>
          </li>
          <li v-if="isLoggedIn || isLoggedInDocGia" class="nav-item">
            <router-link :to="{name:'nhanvien.login'}" @click="logout" class="nav-link">
              Đăng xuất
            </router-link>
          </li>
          <li v-if="!isLoggedIn  && !isLoggedInDocGia" class="nav-item">
            <router-link :to="{ name: 'docgia.register' }" class="nav-link">
              Đăng ký đọc giả
            </router-link>
          </li>
          <li v-if="!isLoggedIn && !isLoggedInDocGia " class="nav-item">
            <router-link :to="{ name: 'docgia.login' }" class="nav-link">
              Đăng nhập đọc giả
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
