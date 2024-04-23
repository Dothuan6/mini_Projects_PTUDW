<script>
export default {
  props: {
    docGia: { type: Array, default: [] },
    activeIndex: { type: Number, default: -1 },
  },
  emits: ["update:activeIndex"],
  methods: {
    updateActiveIndex(index) {
      this.$emit("update:activeIndex", index);
    },
  },
};
</script>
<template>
  <div class="card mb-2"  v-for="(docgia, index) in docGia"
      :key="docgia._id"
      :class="{ active: index === activeIndex }"
      @click="updateActiveIndex(index)">
    <div
      class="card-body"
    >
     <h5 class="card-title">
        Tên độc giả: {{ docgia.tenDocGia }}
     </h5>
     <h7 class="card-subtitle  mb-2 text-muted">
       Mã độc giả:  {{ docgia.maDocGia }}
     </h7>
    </div>

  </div>
</template>
