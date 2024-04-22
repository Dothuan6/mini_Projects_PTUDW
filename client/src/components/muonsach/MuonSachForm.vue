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
        <button type="submit" class="btn mt-3 btn-primary">Xác nhận</button>
      </Form>
    </div>
  </div>
</template>
<script>
import { Form, Field } from "vee-validate";
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
      this.$emit("submit:muonSach", this.muonSachLocal);
    },
  },
};
</script>
<style scoped>
@import "@/assets/form.css";
</style>
