<script>
export default {
  props: {
    Sach: { type: Object, required: true },
  },
};
</script>

<template>
  <div>
    <div class="p-1">
      <strong>Mã:</strong>
      {{ Sach.maSach }}
    </div>
    <div class="p-1">
      <strong>Tên:</strong>
      {{ Sach.tenSach }}
    </div>
    <div class="p-1">
      <strong> Tác giả: </strong>
      {{ Sach.tacGia }}
    </div>
    <div class="p-1">
      <strong> Năm xuất bản: </strong>
      {{ Sach.namXuatBan }}
    </div>
    <div class="p-1">
      <strong> Số quyển: </strong>
      {{ Sach.soQuyen }} quyển
    </div>
    <div class="p-1">
      <strong>Giá: </strong>
      {{ Sach.donGia }} VND
    </div>
  </div>
</template>
