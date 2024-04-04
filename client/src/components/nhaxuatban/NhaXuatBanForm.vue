<template>
    <Form @submit="submitNhaXuatBan">
      <div class="form-group">
        <label for="maNXB">Mã NXB</label>
        <Field
          name="maNXB"
          type="text"
          class="form-control"
          v-model="nxbLocal.maNXB"
        />
      </div>
      <div class="form-group">
        <label for="tenNXB">Tên NXB</label>
        <Field
          name="tenNXB"
          type="text"
          class="form-control"
          v-model="nxbLocal.tenNXB"
        />
      </div>
      <div class="form-group">
        <label for="diaChi">Địa chỉ</label>
        <Field
          name="diaChi"
          type="text"
          class="form-control"
          v-model="nxbLocal.diaChi"
        />
      </div>
      <div class="form-group mt-2">
        <button class="btn btn-primary mx-2"><i class="fas fa-save"></i> Lưu</button>
        <button
          v-if="nxbLocal._id"
          type="button"
          class="ml-2 btn btn-danger"
          @click="deleteNXB"
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
    emits: ["submit:nhaXuatBan", "delete:nhaXuatBan"],
    props: {
      nhaXuatBan: { type: Object, required: true },
    },
    data() {
      return {
        nxbLocal: this.nhaXuatBan,
      };
    },
    methods: {
      submitNhaXuatBan() {
        this.$emit("submit:nhaXuatBan", this.nxbLocal);
      },
      deleteNhaXuatBan() {
        this.$emit("delete:nhaXuatBan", this.nxbLocal.id);
      },
    },
  };
  </script>
  <style scoped>
  @import "@/assets/form.css";
  </style>
  