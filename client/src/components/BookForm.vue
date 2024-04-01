<template>
  <Form @submit="submitBook">
    <div class="form-group">
      <label for="maSach">Mã sách</label>
      <Field
        name="maSach"
        type="text"
        class="form-control"
        v-model="bookLocal.maSach"
      />
    </div>
    <div class="form-group">
      <label for="tenSach">Tên sách</label>
      <Field
        name="tenSach"
        type="text"
        class="form-control"
        v-model="bookLocal.tenSach"
      />
    </div>
    <div class="form-group">
      <label for="tacGia">Tác giả</label>
      <Field
        name="tacGia"
        type="text"
        class="form-control"
        v-model="bookLocal.tacGia"
      />
    </div>
    <div class="form-group">
      <label for="namXuatBan">Năm xuất bản</label>
      <Field
        name="namXuatBan"
        type="text"
        class="form-control"
        v-model="bookLocal.namXuatBan"
      />
    </div>
    <div class="form-group">
      <label for="soQuyen">Số quyển</label>
      <Field
        name="soQuyen"
        type="text"
        class="form-control"
        v-model="bookLocal.soQuyen"
      />
    </div>
    <div class="form-group">
      <label for="donGia">Giá</label>
      <Field
        name="donGia"
        type="text"
        class="form-control"
        v-model="bookLocal.donGia"
      />
    </div>
    <div class="form-group mt-2">
      <button class="btn btn-primary mx-2"><i class="fas fa-save"></i> Lưu</button>
      <button
        v-if="bookLocal._id"
        type="button"
        class="ml-2 btn btn-danger"
        @click="deleteBook"
      >
        <i class="fas fa-trash"></i>
        Xóa
      </button>
    </div>
  </Form>
</template>

<script>
import { Form, Field,  } from "vee-validate";

export default {
  components: {
    Form,
    Field
  },
  emits: ["submit:Sach", "delete:Sach"],
  props: {
    Sach: { type: Object, required: true },
  },
  data() {
    return {
      bookLocal: this.Sach,
    };
  },
  methods: {
    submitBook() {
      this.$emit("submit:Sach", this.bookLocal);
    },
    deleteBook() {
      this.$emit("delete:Sach", this.bookLocal.id);
    },
  },
};
</script>
<style scoped>
@import "@/assets/form.css";
</style>
