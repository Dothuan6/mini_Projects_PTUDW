<template>
    <div class="container m-auto w-100">
        <form @submit="register">
            <div class="mb-3 w-25">
            <label for="maNhanVien" class="form-label">Mã nhân viên</label>
            <input type="text" class="form-control" id="maNhanVien" v-model="nhanVienLocal.maNhanVien" />
        </div>
        <div class="mb-3 w-25">
            <label for="tenNhanVien" class="form-label">Tên nhân viên</label>
            <input type="text" class="form-control" id="tenNhanVien" v-model="nhanVienLocal.hoTenNhanVien" />
        </div>
        <div class="mb-3 w-25">
            <label for="chucVu" class="form-label">Chức vụ</label>
            <input type="text" class="form-control" id="chucVu" v-model="nhanVienLocal.chucVu" />
        </div>
        <div class="mb-3 w-25">
            <label for="password" class="form-label">Mật khẩu</label>
            <input type="password" class="form-control" id="password" v-model="nhanVienLocal.password" />
        </div>
        <div class="mb-3 w-25">
            <label for="diaChi" class="form-label">Địa chỉ</label>
            <input type="text" class="form-control" id="diaChi" v-model="nhanVienLocal.diaChi" />
        </div>
        <div class="mb-3 w-25">
            <label for="dienThoai" class="form-label">Số điện thoại</label>
            <input type="text" class="form-control" id="dienThoai" v-model="nhanVienLocal.dienThoai" />
        </div>
        <button type="submit" class="btn btn-primary m-2">Đăng ký</button>
        <div v-if="error" class="alert alert-danger mt-3" role="alert">
            {{ error }} 
        </div>
        <div v-if="success" class="alert alert-success mt-3" role="alert">
            {{ success }}
        </div>
        </form>
    </div>
</template>
<script>
import {Form} from 'vee-validate';
export default {
    components: {
        Form
    },
    emits: ['submit:NhanVien'],
    props: {
        nhanVien: {
            type: Object,
            default: () => ({
                maNhanVien: '',
                hoTenNhanVien: '',
                chucVu: '',
                password: '',
                diaChi: '',
                dienThoai: ''
            })
        }
    },
    data() {
        return {
            nhanVienLocal: {...this.nhanVien},
        }
    },
    methods: {
        register() {
            this.$emit('submit:NhanVien', this.nhanVienLocal)
            this.$router.push({ name: 'nhanvien.login' });
        }
    }
}   
</script>