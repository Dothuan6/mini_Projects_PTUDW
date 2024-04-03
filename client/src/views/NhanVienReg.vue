<template>
    <div v-if="NhanVien">
    <h1>Đăng ký nhân viên</h1>
    <NhanVienForm
        :NhanVien="NhanVien"
        @submit:NhanVien="addNhanVien"
    />
        <p>{{ message }}</p>
    </div>
</template>
<script>
import NhanVienForm from "@/components/NhanVienRegForm.vue";
import NhanVienService from "@/services/nhanvien.service";
export default {
    components: {
        NhanVienForm,
    },
    data() {
        return {
            NhanVien: {},
            message: "",
        };
    },
    methods: {
        async addNhanVien(data) {
            try {
                await NhanVienService.create(data);
                alert('Đăng ký thành công');
                this.$router.push({ name: "nhanvien.login" });
            } catch (error) {
                console.log(error);
            }
        },
    },
    created() {
    },
};
</script>