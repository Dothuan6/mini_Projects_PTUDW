<script>
export default {
    props: {
        nhaXuatBan: { type: Array, default: [] },
    },
}
</script>
<template>
   <div>
        <div class="p-1">
        <strong>Mã:</strong>
        {{ nhaXuatBan.maNXB }}
        </div>
        <div class="p-1">
        <strong>Tên:</strong>
        {{ nhaXuatBan.tenNXB }}
        </div>
        <div class="p-1">
        <strong>Địa chỉ:</strong>
        {{nhaXuatBan.diaChi }}
        </div>
    </div>
</template>