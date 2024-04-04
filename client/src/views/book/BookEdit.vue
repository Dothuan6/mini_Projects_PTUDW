<template>
    <div v-if="Sach" class="page">
    <h4>Hiệu chỉnh Sách</h4>
    <BookForm
        :Sach="Sach"
        @submit:Sach="updateBook"
        @delete:Sach="deleteBook"
    />
        <p>{{ message }}</p>
    </div>
</template>

<script>
import BookForm from "@/components/book/BookForm.vue";
import BookService from "@/services/book.service";
export default {
    components: {
        BookForm,
    },
    props: {
        id: { type: String, required: true },
    },
    data() {
        return {
            Sach: null,
            message: "",
        };
    },
    methods: {
        async getBook(id) {
            try {
                this.Sach = await BookService.get(id);
            } catch (error) {
                console.log(error);
                // Chuyển sang trang NotFound đồng thời giữ cho URL không đổi
                this.$router.push({
                    name: "notfound",
                    params: {
                        pathMatch: this.$route.path.split("/").slice(1)
                    },
                    query: this.$route.query,
                    hash: this.$route.hash,
                });
            }
        },
        async updateBook(data) {
            try {
                await BookService.update(this.Sach._id, data);
                alert("Cập nhật thành công");
                this.$router.push({ name: "book" });
            } catch (error) {
                console.log(error);
            }
        },
        async deleteBook() {
            if (confirm("Bạn muốn xóa Sách này?")) {
                try {
                    await BookService.delete(this.Sach._id);
                    this.$router.push({ name: "book" });
                } catch (error) {
                    console.log(error);
                }
            }
        },
    },
    created() {
        this.getBook(this.id);
        this.message = "";
    },
};
</script>