<script>
import SachDaMuonTable from "@/components/muonsach/SachDaMuonTable.vue";
import MuonSachService from "@/services/muonsach.service";
import InputSearch from "@/components/includes/InputSearch.vue";
export default{
  components: {
    SachDaMuonTable,
    InputSearch,
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
    },
    traSach() {
      try {
        const { _id, maSach } = this.activeMuonSach;
        MuonSachService.update(_id, { trangThai: "Đã trả" });
        this.retrieveMuonSach();
        this.activeIndex = -1;
        this.$emit("traSach", maSach);
      } catch (error) {
        
      }
    },

  },
  created() {
    this.retrieveMuonSach();
  },
};
</script>
<template>
  <div>
    <InputSearch v-model="searchText" class="mb-2" />
    <SachDaMuonTable
      :MuonSach="filteredMuonSach"
      :activeIndex="activeIndex"
      @update:activeIndex="activeIndex = $event"
      @click="traSach"
    />
  </div>
</template>