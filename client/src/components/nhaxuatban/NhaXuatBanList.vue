<script>
export default{
    props: {
        nhaXuatBan: { type: Array, default: [] },
        activeIndex: { type: Number, default: -1 },
    },
    emits: ["update:activeIndex"],
    methods: {
        updateActiveIndex(index) {
            this.$emit("update:activeIndex", index);
        },
    },
}
</script>
<template>
    <div class="card mb-2"
            v-for="(nxb, index) in nhaXuatBan"
            :key="nxb._id"
            :class="{ active: index === activeIndex }"
            @click="updateActiveIndex(index)">
        <div class="card-body">
            <h5 class="card-title">
                Tên NXB: {{ nxb.tenNXB }}
            </h5>
            <h6 class="card-subtitle  mb-2 text-muted">
                Địa chỉ: {{ nxb.diaChi }}
            </h6>
    </div>
    </div>
</template>