<template>
  <div>
    <h1>Đăng nhập nhân viên</h1>
    <form @submit="login">
      <label class="form-label" for="username">Username:</label>
      <input
        class="form-control w-25"
        type="text"
        id="username"
        v-model="hoTenNhanVien"
        required
      />
      <label class="form-label mt-2" for="password">Password:</label>
      <input
        class="form-control w-25"
        type="password"
        id="password"
        v-model="password"
        required
      />
      <button class="btn btn-primary my-2" type="submit">Login</button>
    </form>
  </div>
</template>
<script>
import axios from "axios";
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
          alert("Đăng nhập thành công");
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
