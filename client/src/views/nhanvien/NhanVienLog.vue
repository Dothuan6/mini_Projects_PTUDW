<template>
  <div class="bg-warning mb-2 p-3 w-50">
    <h1>Đăng nhập nhân viên</h1>
    <form @submit="login">
      <label class="form-label" for="username">Username:</label>
      <input
        class="form-control w-50"
        type="text"
        id="username"
        v-model="hoTenNhanVien"
        required
      />
      <label class="form-label mt-2" for="password">Password:</label>
      <input
        class="form-control w-50"
        type="password"
        id="password"
        v-model="password"
        required
      />
      <button class="btn btn-success my-2" type="submit">Login</button>
    </form>
  </div>
</template>
<script>
import axios from "axios";
import {toast} from 'vue3-toastify';
import 'vue3-toastify/dist/index.css'
export default {
  data() {
    return {
      hoTenNhanVien: "",
      password: "",
      success: null,
      error: null,
    };
  },
  methods: {
    login(event) {
      event.preventDefault();
      axios
        .post("/api/nhanvien/login", {
          hoTenNhanVien: this.hoTenNhanVien,
          password: this.password,
        })
        .then(async (response) => {
          const nhanvien = response.data;
          toast.success("Đăng nhập thành công", {
            timeout: 1000,
          });
          sessionStorage.setItem("nhanvien", JSON.stringify(nhanvien));
          await this.$router.push("/");
          window.location.reload();
        })
        .catch((error) => {
          alert("Sai mật khẩu hoặc tên đăng nhập");
        });
    },
  },
};
</script>
