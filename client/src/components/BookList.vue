<script>
export default{
    props: {
        Sach: { type: Array, default: [] },
        activeIndex:{type: Number, default: -1},
    },
    emits: ["update:activeIndex"],
    methods: {
        updateActiveIndex(index){
            this.$emit("update:activeIndex", index);
        },
    },
};
</script>
<template>
    <ul class="list-group">
        <li 
        class="list-group-item"
        v-for="(sach,index) in Sach"
        :key="sach._id"
        :class="{active: index === activeIndex}"
        @click="updateActiveIndex(index)"
        >
            {{sach.tenSach}} - {{ sach.tacGia }}
         </li>
    </ul>
</template>