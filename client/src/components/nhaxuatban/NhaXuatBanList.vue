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
    <ul class="list-group">
        <li
            class="list-group-item"
            v-for="(nxb, index) in nhaXuatBan"
            :key="nxb._id"
            :class="{ active: index === activeIndex }"
            @click="updateActiveIndex(index)"
        >
            {{ nxb.tenNXB }} - {{ nxb.maNXB }}
        </li>
    </ul>
</template>