<template>
  <div class="row">
    <div class="col-md-6">
      <Form @submit="submitMuonSach" class="w-50">
        <div class="form-group">
          <label class="mb-2" for="maSach">Mã Sách</label>
          <Field
            name="maSach"
            type="text"
            id="maSach"
            class="form-control"
            v-model="muonSachLocal.maSach"
          />
        </div>
        <div class="form-group">
          <label class="mb-2" for="tenSach">Tên sách</label>
          <Field
            name="tenSach"
            type="text"
            id="tenSach"
            class="form-control"
            v-model="muonSachLocal.tenSach"
          />
        </div>
        <div class="form-group">
          <label class="mb-2" for="maDocGia">Mã đọc giả</label>
          <Field
            name="maDocGia"
            type="text"
            id="maDocGia"
            class="form-control"
            v-model="muonSachLocal.maDocGia"
          />
        </div>
        <div class="form-group">
          <label class="mb-2" for="tenDocGia">Tên đọc giả</label>
          <Field
            name="tenDocGia"
            type="text"
            id="tenDocGia"
            class="form-control"
            v-model="muonSachLocal.tenDocGia"
          />
        </div>
        <div class="form-group">
          <label class="mb-2" for="ngayMuon">Ngày mượn</label>
          <Field
            name="ngayMuon"
            id="ngayMuon"
            type="date"
            class="form-control"
            v-model="muonSachLocal.ngayMuon"
          />
        </div>
        <div class="form-group">
          <label class="mb-2" for="ngayTra">Ngày trả</label>
          <Field
            name="ngayTra"
            id="ngayTra"
            type="date"
            class="form-control"
            v-model="muonSachLocal.ngayTra"
          />
        </div>
        <div class="form-group">
          <label for="trangThai">Trạng thái</label>
          <select id="trangThai" name="trangThai" v-model="muonSachLocal.trangThai">
          <option value="Đã mượn">Đã mượn</option>
          </select>
        </div>
        <button type="submit" class="btn mt-3 btn-primary">Xác nhận</button>
      </Form>
    </div>
  </div>
</template>
<script>
import { Form, Field } from "vee-validate";
import {toast} from 'vue3-toastify';
export default {
  components: {
    Form,
    Field,
  },
  emits: ["submit:muonSach"],
  props: {
    muonSach: { type: Object, required: true },
  },
  data() {
    return {
      muonSachLocal: this.muonSach,
    };
  },
  methods: {
    submitMuonSach() {
      if (
      !this.muonSachLocal.maSach) {
      toast.error("Vui lòng điền đầy đủ thông tin mã sách và các thông tin còn lại.");
      return;
    }else if(!this.muonSachLocal.maDocGia){
      toast.error("Vui lòng điền đầy đủ thông tin mã đọc giả và các thông tin còn lại.");
      return;
    }else if(!this.muonSachLocal.ngayMuon){
      toast.error("Vui lòng điền đầy đủ thông tin ngày mượn và các thông tin còn lại.");
      return;
    }else if(!this.muonSachLocal.ngayTra){
      toast.error("Vui lòng điền đầy đủ thông tin ngày trả và các thông tin còn lại.");
      return;
    }else if(!this.muonSachLocal.tenSach){
      toast.error("Vui lòng điền đầy đủ thông tin tên sách và các thông tin còn lại.");
      return;
    }else if(!this.muonSachLocal.tenDocGia){
      toast.error("Vui lòng điền đầy đủ thông tin tên đọc giả và các thông tin còn lại.");
      return;
    }
      this.$emit("submit:muonSach", this.muonSachLocal);
      
    },
  },
};
</script>
<style scoped>
@import "@/assets/form.css";
</style>
