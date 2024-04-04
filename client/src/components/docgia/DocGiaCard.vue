<script>
export default {
  props: {
    docGia: { type: Object, required: true },
  },
};
</script>

<template>
    <div>
        <div class="p-1">
        <strong>Mã:</strong>
        {{ docGia.maDocGia }}
        </div>
        <div class="p-1">
        <strong>Tên:</strong>
        {{ docGia.tenDocGia }}
        </div>
        <div class="p-1">
        <strong>Địa chỉ:</strong>
        {{ docGia.diaChi }}
        </div>
        <div class="p-1">
        <strong>Ngày sinh:</strong>
        {{ docGia.ngaySinh }}
        </div>
        <div class="p-1">
        <strong>Giới tính:</strong>
        {{ docGia.gioiTinh }}
        </div>
        <div class="p-1">
        <strong>Số điện thoại:</strong>
        {{ docGia.dienThoai }}
        </div>
    </div>
</template>
