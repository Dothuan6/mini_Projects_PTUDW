<script>
import { ref } from "vue";
import DocGiaService from "@/services/docgia.service";
export default {
  setup() {
    const docgia = ref({
      tenDocGia: "",
      password: "",
      ngaySinh: "",
      diaChi: "",
      soDienThoai: "",
      gioiTinh:"",
      hoLot:""
    });
    const error = ref(null);
    const success = ref(null);
    const create = async () => {
      try {
        error.value = null;
        success.value = null;
        await DocGiaService.create(docgia.value);
        success.value = "Đăng ký thành công";
      } catch (error) {
        success.value = null;
        error.value = error.response.data.message;
      }
    };
    return { docgia, error, success, create };
  },
};

</script>
<template>
    <div class="container">
        <h3>Đăng ký</h3>
        <form @submit.prevent="register">
        <div class="mb-3">
            <label for="tenDocGia" class="form-label">Tên độc giả</label>
            <input type="text" class="form-control" id="tenDocGia" v-model="docgia.tenDocGia" />
        </div>
        <div class="mb-3">
            <label for="hoLot" class="form-label">Họ lót</label>
            <input type="text" class="form-control" id="hoLot" v-model="docgia.hoLot" />
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Mật khẩu</label>
            <input type="password" class="form-control" id="password" v-model="docgia.password" />
        </div>
        <div class="mb-3">
            <label for="ngaySinh" class="form-label">Ngày sinh</label>
            <input type="date" class="form-control" id="ngaySinh" v-model="docgia.ngaySinh" />
        </div>
        <div class="mb-3">
            <label for="diaChi" class="form-label">Địa chỉ</label>
            <input type="text" class="form-control" id="diaChi" v-model="docgia.diaChi" />
        </div>
        <div class="mb-3">
            <label for="soDienThoai" class="form-label">Số điện thoại</label>
            <input type="text" class="form-control" id="soDienThoai" v-model="docgia.soDienThoai" />
        </div>
        <div class="mb-3">
            <label for="gioiTinh" class="form-label">Giới tính</label>
            <input type="text" class="form-control" id="gioiTinh" v-model="docgia.gioiTinh" />
        </div>
        <button type="submit" class="btn btn-primary">Đăng ký</button>
        <div v-if="error" class="alert alert-danger mt-3" role="alert">
            {{ error }} 
        </div>
        <div v-if="success" class="alert alert-success mt-3" role="alert">
            {{ success }}
        </div>
        </form>
    </div>
</template>
