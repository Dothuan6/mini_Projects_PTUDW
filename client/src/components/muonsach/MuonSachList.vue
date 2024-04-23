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
    },
};
</script>
<template>
    <div v-for="(muonSach, index) in MuonSach"
            :key="muonSach._id"
            :class="{ active: index === activeIndex }"
            @click="updateActiveIndex(index)"
            class="card mb-2">
        <div class="card-body">
            <h5 class="card-title">
                Tên sách: {{ muonSach.tenSach }}
            </h5>
            <h6 class="card-subtitle  mb-2 text-muted">
               Mã sách:  {{ muonSach.maSach }}
            </h6>
            <h6 class="card-subtitle  mb-2 text-muted">
                Mã độc giả: {{ muonSach.maDocGia }}
            </h6>
</div>
    </div>
</template>