<script>
import MuonSachList from "@/components/muonsach/MuonSachList.vue";
import MuonSachService from "@/services/muonsach.service";
import InputSearch from "@/components/includes/InputSearch.vue";
import MuonSachCard from "../../components/muonsach/MuonSachCard.vue";
export default {
  components: {
    MuonSachList,
    InputSearch,
    MuonSachCard,
  },
  data() {
    return {
      muonSach: [],
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
    muonSachStrings() {
      return this.muonSach.map((muonSach) => {
        const { maDocGia, maSach, ngayMuon, ngayTra, tinhTrang } = muonSach;
        return [maDocGia, maSach, ngayMuon, ngayTra, tinhTrang].join(" ");
      });
    },
    filteredMuonSach() {
      if (!this.searchText) {
        return this.muonSach;
      }
      return this.muonSach.filter((_muonSach, index) => {
        return this.muonSachStrings[index]
          .toLowerCase()
          .includes(this.searchText.toLowerCase());
      });
    },
    activeMuonSach() {
      if (this.activeIndex < 0) {
        return null;
      }
      return this.filteredMuonSach[this.activeIndex];
    },
    filteredMuonSachCount() {
      return this.filteredMuonSach.length;
    },
  },
  methods: {
    async retrieveMuonSach() {
      try {
        this.muonSach = await MuonSachService.getAll();
      } catch (error) {
        console.error(error);
      }
    },
    refreshList() {
      this.retrieveMuonSach();
      this.activeIndex = -1;
    },
    async deleteMuonSach(maMuonSach) {
      if(confirm("Xác nhận trả sách")){
        try {
        await MuonSachService.delete(maMuonSach);
        this.retrieveMuonSach();
      } catch (error) {
        console.error(error);
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
      <h4>Danh sách mượn sách</h4>
      <MuonSachList
        v-if="filteredMuonSachCount > 0"
        :MuonSach="filteredMuonSach"
        :activeIndex="activeIndex"
        @update:activeIndex="activeIndex = $event"
      />
      <p v-else>Không có sách nào đang mượn</p>
      <div class="mt-3 row mx-1 align-items-center">
        <button
          class="btn col-md-4 mb-2 mt-3 btn-outline btn-primary"
          @click="refreshList()"
        >
          Làm mới
        </button>
        <router-link
          :to="{ name: 'sachmuon.add'}"
          class="btn btn-success my-3 col-md-4 mb-2 mt-3 mx-2"
        >
          Mượn Sách
        </router-link>
      </div>
    </div>
    <div class="col-md-5 mt-3">
      <div v-if="activeMuonSach">
        <h4>Chi tiết mượn sách</h4>
        <MuonSachCard :muonSach="activeMuonSach" />
        <span class="btn btn-warning my-2" @click="deleteMuonSach(activeMuonSach._id)">
          Trả sách
        </span>
      </div>
    </div>
  </div>
</template>
