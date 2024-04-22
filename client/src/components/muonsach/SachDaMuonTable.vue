<script>
export default {
  props: {
    MuonSach: { type: Array, default: [] },
    activeIndex: { type: Number, default: -1 },
  },
  emits: ["update:activeIndex"],
  methods: {
    updateActiveIndex(index) {
      this.$emit("update:activeIndex", index);
    },
    traSach(sach) {
      this.$emit("traSach", sach);
    },

  },
  
  
};
</script>
<template>
  <div>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>STT</th>
          <th>Mã sách</th>
          <th>Tên sách</th>
          <th>Ngày mượn</th>
          <th>Ngày trả</th>
          <th>Trạng thái</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(muonSach, index) in MuonSach"
          :key="muonSach._id"
          :class="{ active: index === activeIndex }"
          @click="updateActiveIndex(index)"
        >
          <td>{{ index + 1 }}</td>
          <td>{{ muonSach.maSach }}</td>
          <td>{{ muonSach.tenSach }}</td>
          <td>{{ muonSach.ngayMuon }}</td>
          <td>{{ muonSach.ngayTra }}</td>
          <td>{{ muonSach.trangThai }}</td>
          <td>
            <button
              v-if="muonSach.trangThai === 'Đã mượn'"
              @click="traSach(sach)"
              class="btn btn-primary"
            >
              Trả sách
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

