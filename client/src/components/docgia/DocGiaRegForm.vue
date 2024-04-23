<template>
  <div class="container m-auto w-100">
    <form @submit="register">
      <div class="mb-3 w-50">
        <label for="maDocGia" class="form-label">Mã đọc giả</label>
        <input
          type="text"
          class="form-control"
          id="maDocGia"
          v-model="docgiaLocal.maDocGia"
        />
      </div>
      <div class="mb-3 w-50">
        <label for="password" class="form-label">Mật khẩu</label>
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="docgiaLocal.password"
        />
      </div>
      <div class="mb-3 w-50">
        <label for="hoLot" class="form-label">Họ lót</label>
        <input
          type="text"
          class="form-control"
          id="hoLot"
          v-model="docgiaLocal.hoLot"
        />
      </div>
      <div class="mb-3 w-50">
        <label for="tenDocGia" class="form-label">Tên Đọc giả</label>
        <input
          type="text"
          class="form-control"
          id="tenDocGia"
          v-model="docgiaLocal.tenDocGia"
        />
      </div>
      <div class="mb-3 w-50">
        <label for="ngaySinh" class="form-label">Ngày sinh</label>
        <input
          type="date"
          class="form-control"
          id="ngaySinh"
          v-model="docgiaLocal.ngaySinh"
        />
      </div>
      <div class="mb-3 w-50">
        <label for="gioiTinh" class="form-label">Giới tính</label>
        <input
          type="text"
          class="form-control"
          id="gioiTinh"
          v-model="docgiaLocal.gioiTinh"
        />
      </div>
      <div class="mb-3 w-50">
        <label for="diaChi" class="form-label">Địa chỉ</label>
        <input
          type="text"
          class="form-control"
          id="diaChi"
          v-model="docgiaLocal.diaChi"
        />
      </div>
      <div class="mb-3 w-50">
        <label for="dienThoai" class="form-label">Số điện thoại</label>
        <input
          type="text"
          class="form-control"
          id="dienThoai"
          v-model="docgiaLocal.dienThoai"
        />
      </div>
      
      <button type="submit" class="btn btn-primary m-2">Đăng ký</button>
    </form>
  </div>
</template>
<script>
import { Form } from "vee-validate";
import {toast} from 'vue3-toastify';
export default {
  components: {
    Form,
  },
  emits: ["submit:DocGia"],
  props: {
    docGia: {
      type: Object,
      default: () => ({
        maDocGia: "",
        password: "",
        hoLot: "",
        tenDocGia: "",
        ngaySinh: "",
        gioiTinh: "",
        diaChi: "",
        dienThoai: "",
      }),
    },
  },
  data() {
    return {
      docgiaLocal: { ...this.docGia },
    };
  },
  methods: {
    register(e) {
      if (!this.docgiaLocal.maDocGia ||
        !this.docgiaLocal.password ||
        !this.docgiaLocal.hoLot ||
        !this.docgiaLocal.tenDocGia ||
        !this.docgiaLocal.ngaySinh ||
        !this.docgiaLocal.gioiTinh ||
        !this.docgiaLocal.diaChi ||
        !this.docgiaLocal.dienThoai) {
        toast.error('Vui lòng nhập đầy đủ thông tin');
      return;
    }
      e.preventDefault();
      this.$emit("submit:DocGia", this.docgiaLocal);
      
    },
  },
};
</script>
