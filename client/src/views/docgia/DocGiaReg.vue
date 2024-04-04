<template>
    <div v-if="DocGia">
    <h1>Đăng ký đọc giả</h1>
    <DocGiaForm
        :DocGia="DocGia"
        @submit:DocGia="addDocGia"
    />
        <p>{{ message }}</p>
    </div>
</template>
<script>
import DocGiaForm from "@/components/docgia/DocGiaRegForm.vue";
import DocGiaService from "@/services/docgia.service";
export default {
    components: {
        DocGiaForm,
    },
    data() {
        return {
            DocGia: {},
            message: "",
        };
    },
    methods: {
        async addDocGia(data) {
            try {
                await DocGiaService.create(data);
                alert('Đăng ký thành công');
                this.$router.push({ name: "docgia.login" });
            } catch (error) {
                console.log(error);
            }
        },
    },
    created() {
    },
};
</script>