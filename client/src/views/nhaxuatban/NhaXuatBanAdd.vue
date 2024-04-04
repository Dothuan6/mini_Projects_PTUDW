<template>
  <div class="page" v-if="nhaXuatBan">
    <h4>Thêm Nhà Xuất Bản</h4>
    <NhaXuatBanForm :nhaXuatBan="nhaXuatBan" @submit:nhaXuatBan="addNXB" />
    <p>{{ message }}</p>
  </div>
</template>
<script>
import NhaXuatBanForm from "@/components/nhaxuatban/NhaXuatBanForm.vue";
import NhaXuatBanService from "@/services/nhaxuatban.service";
export default {
  components: {
    NhaXuatBanForm,
  },
  data() {
    return {
      nhaXuatBan: {},
      message: "",
    };
  },
  methods: {
    async addNXB(data) {
      try {
        await NhaXuatBanService.create(data);
        alert("Thêm mới thành công");
        this.$router.push("/nxb");
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {},

};
</script>
