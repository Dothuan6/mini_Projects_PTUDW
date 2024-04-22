<script>
export default {
  props: {
    Sach: { type: Array, default: [] },
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
  <div class="card mb-2"
      v-for="(sach, index) in Sach"
      :key="sach._id"
      :class="{ active: index === activeIndex }"
      @click="updateActiveIndex(index)" style="width: 18rem;">
  <div  class="card-body">
    <h5 class="card-title">{{ sach.tenSach }}</h5>
    <h6 class="card-subtitle mb-2 text-muted"> {{ sach.tacGia }}</h6>
  </div>
</div>
</template>
