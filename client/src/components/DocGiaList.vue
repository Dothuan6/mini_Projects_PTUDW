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
    <ul class="list-group
    ">
        <li
            class="list-group-item"
            v-for="(docgia, index) in docGia"
            :key="docgia._id"
            :class="{ active: index === activeIndex }"
            @click="updateActiveIndex(index)"
        >
            {{ docgia.tenDocGia }} - {{ docgia.maDocGia }}
        </li>
    </ul>
</template>