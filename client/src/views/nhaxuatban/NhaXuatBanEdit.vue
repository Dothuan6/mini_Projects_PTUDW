<template>
  <div v-if="nhaXuatBan" class="page">
    <h4>Chỉnh Nhà Xuất Bản</h4>
    <NhaXuatBanForm
      :nhaXuatBan="nhaXuatBan"
      @submit:nhaXuatBan="updateNXB"
    />
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
  props: {
    id: { type: String, required: true },
  },
  data() {
    return {
      nhaXuatBan: null,
      message: "",
    };
  },
  methods: {
    async getNXB(id) {
      try {
        this.nhaXuatBan = await NhaXuatBanService.get(id);
      } catch (error) {
        console.log(error);
        // Chuyển sang trang NotFound đồng thời giữ cho URL không đổi
        this.$router.push({
          name: "notfound",
          params: {
            pathMatch: this.$route.path.split("/").slice(1),
          },
          query: this.$route.query,
          hash: this.$route.hash,
        });
      }
    },
    async updateNXB(data) {
      try {
        await NhaXuatBanService.update(this.nhaXuatBan._id, data);
        alert("Cập nhật thành công");
        this.$router.push("/nxb");
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getNXB(this.id);
  },
};
</script>
