<template>
    <Form @submit="submitDocGia">
        <div class="form-group">
            <label for="maDocGia">Mã độc giả</label>
            <Field
                name="maDocGia"
                type="text"
                class="form-control"
                v-model="docGiaLocal.maDocGia"
            />
        </div>
        <div class="form-group">
            <label for="hoTenDocGia">Họ tên độc giả</label>
            <Field
                name="hoTenDocGia"
                type="text"
                class="form-control"
                v-model="docGiaLocal.hoTenDocGia"
            />
        </div>
        <div class="form-group">
            <label for="diaChi">Địa chỉ</label>
            <Field
                name="diaChi"
                type="text"
                class="form-control"
                v-model="docGiaLocal.diaChi"
            />
        </div>
        <div class="form-group">
            <label for="dienThoai">Số điện thoại</label>
            <Field
                name="dienThoai"
                type="text"
                class="form-control"
                v-model="docGiaLocal.dienThoai"
            />
        </div>
        <div class="form-group">
            <label for="ngaySinh">Ngày sinh</label>
            <Field
                name="ngaySinh"
                type="date"
                class="form-control"
                v-model="docGiaLocal.ngaySinh"
            />
        </div>
        <div class="form-group">
            <label for="gioiTinh">Giới tính</label>
            <Field
                name="gioiTinh"
                type="text"
                class="form-control"
                v-model="docGiaLocal.gioiTinh"
            />
        </div>
        <div class="form-group">
            <label for="password">Mật khẩu</label>
            <Field
                name="password"
                type="password"
                class="form-control"
                v-model="docGiaLocal.password"
            />
        </div>
        <div class="form-group mt-2">
            <button class="btn btn-primary mx-2"><i class="fas fa-save"></i> Lưu</button>
            <button
                v-if="docGiaLocal._id"
                type="button"
                class="ml-2 btn btn-danger"
                @click="deleteDocGia"
            >
                <i class="fas fa-trash"></i> Xóa
            </button>
        </div>
        <div v-if="error" class="alert alert-danger mt-3" role="alert">
            {{ error }}
        </div>
        <div v-if="success" class="alert alert-success mt-3" role="alert">
            {{ success }}
        </div>
    </Form>
</template>
<script>
import { Form, Field } from "vee-validate"
export default {
    components: {
        Form,
        Field
    },
    emits: ['submit:DocGia'],
    props: {
        docGia: {
            type: Object,
            default: () => ({
                maDocGia: '',
                hoTenDocGia: '',
                diaChi: '',
                dienThoai: '',
                ngaySinh: '',
                gioiTinh: '',
                password: ''
            })
        }
    },
    data() {
        return {
            docGiaLocal: { ...this.docGia },
            error: null,
            success: null
        }
    },
    methods: {
        async submitDocGia() {
            try {
                this.$emit('submit:DocGia', this.docGiaLocal)
                this.success = 'Đăng ký thành công'
            } catch (error) {
                this.error = error.message
            }
        },
        async deleteDocGia() {
            try {
                await this.$emit('delete:DocGia', this.docGiaLocal)
                this.success = 'Xóa thành công'
            } catch (error) {
                this.error = error.message
            }
        }
    }
}
</script>