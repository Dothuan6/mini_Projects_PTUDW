<script>
import NhaXuatBanService from "@/services/nhaxuatban.service";
import NhaXuatBanCard from "@/components/nhaxuatban/NhaXuatBanCard.vue";
import InputSearch from "@/components/includes/InputSearch.vue";
import NhaXuatBanList from "@/components/nhaxuatban/NhaXuatBanList.vue";
export default {
  components: {
    NhaXuatBanCard,
    InputSearch,
    NhaXuatBanList,
  },
  data() {
    return {
      nhaXuatBan: [],
      searchText: "",
      activeIndex: -1,
    };
  },
  watch: {
    searchText() {
      this.activeIndex = -1;
    },
  },
  computed: {
    nhaXuatBanStrings() {
      return this.nhaXuatBan.map((nhaxuatban) => {
        const { maNXB, tenNXB, diaChi } = nhaxuatban;
        return [maNXB, tenNXB, diaChi].join(" ");
      });
    },
    filteredNhaXuatBan() {
      if (!this.searchText) {
        return this.nhaXuatBan;
      }
      return this.nhaXuatBan.filter((_nhaxuatban, index) => {
        return this.nhaXuatBanStrings[index]
          .toLowerCase()
          .includes(this.searchText.toLowerCase());
      });
    },
    activeNhaXuatBan() {
      if (this.activeIndex < 0) {
        return null;
      }
      return this.filteredNhaXuatBan[this.activeIndex];
    },
    filteredNhaXuatBanCount() {
      return this.filteredNhaXuatBan.length;
    },
  },
  methods: {
    async retrieveNhaXuatBan() {
      try {
        this.nhaXuatBan = await NhaXuatBanService.getAll();
      } catch (error) {
        console.error(error);
      }
    },
    refreshList() {
      this.retrieveNhaXuatBan();
      this.activeIndex = -1;
    },
    goToAddNXB() {
      this.$router.push({ name: "nxb.add" });
    },
    async deleteNXB() {
      if (this.activeNhaXuatBan) {
        if (confirm("Bạn có muốn xóa nhà xuất bản này?")) {
          try {
            await NhaXuatBanService.delete(this.activeNhaXuatBan._id);
            this.refreshList();
            this.$router.push({name:"nxb"})
          } catch (error) {
            console.error(error);
          }
        }
      }
    },
  },
  mounted() {
    this.refreshList();
  },
};
</script>
<style scoped>
.page {
  text-align: left;
  max-width: 750px;
}
</style>
<template>
  <div class="page row">
    <form class="d-flex">
      <InputSearch v-model="searchText" />
    </form>
    <div class="mt-3 col-md-6">
      <h4>Nhà xuất bản</h4>
      <NhaXuatBanList
        v-if="filteredNhaXuatBanCount > 0"
        :nhaXuatBan="filteredNhaXuatBan"
        v-model:activeIndex="activeIndex"
      />
      <p v-else>Không có nhà xuất bản nào.</p>
      <button
        class="btn btn-outline col-md-4 mb-2 btn-success mt-3"
        @click="goToAddNXB"
      >
        <i class="fas fa-plus"></i> Thêm mới
      </button>
    </div>
    <div class="mt-3 col-md-6">
      <div v-if="activeNhaXuatBan">
        <h4>Chi tiết nhà xuất bản</h4>
        <NhaXuatBanCard :nhaXuatBan="activeNhaXuatBan" />
        <router-link
          :to="{ name: 'nxb.edit', params: { id: activeNhaXuatBan._id } }"
        >
          <span class="mt-2 badge badge-warning bg-warning mb-2 pb-2">
            <i class="fas fa-edit"> </i>Hiệu chỉnh
          </span>
        </router-link>
        <span
          @click="deleteNXB"
          class="mt-2 btn mx-2 badge badge-warning bg-danger mb-2 pb-2"
        >
          <i class="fa-solid fa-trash-can"></i>
        </span>
      </div>
    </div>
  </div>
</template>
