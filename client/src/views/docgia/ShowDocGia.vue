<script>
import DocGiaList from "@/components/docgia/DocGiaList.vue";
import DocGiaService from "@/services/docgia.service";
import DocGiaCard from "@/components/docgia/DocGiaCard.vue";
import InputSearch from "@/components/includes/InputSearch.vue";
export default {
  components: {
    DocGiaList,
    DocGiaCard,
    InputSearch,
  },
  data() {
    return {
      docGia: [],
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
    docGiaStrings() {
      return this.docGia.map((docgia) => {
        const { tenDocGia, maDocGia, ngaySinh, gioiTinh, diaChi, dienThoai } =
          docgia;
        return [
          tenDocGia,
          maDocGia,
          ngaySinh,
          gioiTinh,
          diaChi,
          dienThoai,
        ].join(" ");
      });
    },
    filteredDocGia() {
      if (!this.searchText) {
        return this.docGia;
      }
      return this.docGia.filter((_docGia, index) => {
        return this.docGiaStrings[index]
          .toLowerCase()
          .includes(this.searchText.toLowerCase());
      });
    },
    activeDocGia() {
      if (this.activeIndex < 0) {
        return null;
      }
      return this.filteredDocGia[this.activeIndex];
    },
    filteredDocGiaCount() {
      return this.filteredDocGia.length;
    },
  },
  methods: {
    async retrieveDocGia() {
      try {
        this.docGia = await DocGiaService.getAll();
      } catch (error) {
        console.error(error);
      }
    },
    refreshList() {
      this.retrieveDocGia();
      this.activeIndex = -1;
    },
    deletedocgia() {
      if (confirm("Bạn muốn xóa độc giả này?")) {
        if (this.activeDocGia) {
          DocGiaService.delete(this.activeDocGia._id)
            .then(() => {
              this.refreshList();
            })
            .catch((error) => {
              console.error(error);
            });
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
      <h4>Danh sách độc giả</h4>
      <DocGiaList
        v-if="filteredDocGiaCount > 0"
        :docGia="filteredDocGia"
        v-model:activeIndex="activeIndex"
      />
      <div v-else>
        <p>Không có độc giả nào</p>
      </div>
      <div class="mt-3 row justify-content-around align-items-center">
        <button
          class="btn col-md-4 mb-2 mt-3 btn-outline btn-primary"
          @click="refreshList()"
        >
          Làm mới
        </button>
      </div>
    </div>
    <div class="mt-3 col-md-6">
      <div v-if="activeDocGia">
        <h4>Chi tiết đọc giả</h4>
        <DocGiaCard :docGia="activeDocGia" />
        <span
          @click="deletedocgia"
          class="mt-2 btn badge badge-warning bg-danger mb-2 pb-2"
        >
          <i class="fa-solid fa-trash-can"></i
        ></span>
      </div>
    </div>
  </div>
</template>
