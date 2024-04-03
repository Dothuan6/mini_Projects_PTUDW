<template>
    <div v-if="Sach" class="page">
    <h4>Thêm sách</h4>
    <BookForm
        :Sach="Sach"
        @submit:Sach="addBook"
    />
        <p>{{ message }}</p>
    </div>
</template>

<script>
import BookForm from "@/components/BookForm.vue";
import BookService from "@/services/book.service";

export default {
    components: {
        BookForm,
    },

    data() {
        return {
            Sach: {},
            message: "",
        };
    },
    methods: {
        async addBook(data) {
            try {
                await BookService.create(data);
                alert("Thêm mới thành công");
                this.$router.push({ name: "book" });
            } catch (error) {
                console.log(error);
            }
        },
    },
    created() {
    },
};
</script>