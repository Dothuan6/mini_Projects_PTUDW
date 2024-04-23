<template>
    <div class="bg-warning mb-2 p-3 w-50">
        <h1>
            Đăng nhập đọc giả
        </h1>
        <form @submit="login">
      <label class="form-label" for="username">Username:</label>
      <input
        class="form-control w-50"
        type="text"
        id="username"
        v-model="tenDocGia"
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
export default {
  data() {
    return {
      tenDocGia: "",
      password: "",
      success: null,
      error: null,
    };
  },
  methods: {
    login(event) {
      event.preventDefault();
      axios
        .post("/api/docgia/login", {
          tenDocGia: this.tenDocGia,
          password: this.password,
        })
        .then(async (response) => {
          const docgia = response.data;
          alert("Đăng nhập thành công");
          sessionStorage.setItem("docgia", JSON.stringify(docgia));
          //cài đặt khi đăng nhập sẽ hiển thị giao diện đọc giả
          await this.$router.push("/sachmuon");
          window.location.reload();
        })
        .catch((error) => {
          alert("Sai mật khẩu hoặc tên đăng nhập");
        });
    },
  },
};
</script>