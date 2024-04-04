<script>
export default {
    props: {
        muonSach: { type: Object, required: true },
    },
};
</script>
<template>
    <div>
        <div class="p-1">
            <strong>Mã sách:</strong>
            {{ muonSach.maSach }}
        </div>
        <div class="p-1">
            <strong>Tên sách:</strong>
            {{ muonSach.tenSach }}
        </div>
        <div class="p-1">
            <strong>Mã độc giả:</strong>
            {{ muonSach.maDocGia }}
        </div>
        <div class="p-1">
            <strong>Tên độc giả:</strong>
            {{ muonSach.tenDocGia }}
        </div>
        <div class="p-1">
            <strong>Ngày mượn:</strong>
            {{ muonSach.ngayMuon }}
        </div>
        <div class="p-1">
            <strong>Ngày trả:</strong>
            {{ muonSach.ngayTra }}
        </div>
        <div class="p-1">
            <strong>Trạng thái:</strong>
            {{ muonSach.tinhTrang }}
        </div>
    </div>
</template>