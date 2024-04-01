<script>
import InputSearch from '@/components/InputSearch.vue';
import BookCard from '@/components/BookCard.vue';
import BookList from '@/components/BookList.vue';
import BookService from '@/services/book.service';
export default {
    components: {
        InputSearch,
        BookCard,
        BookList
    },
    data() {
        return {
            Sach: [],
            searchText: "",
            activeIndex: -1,
        };
    },
    watch: {
        searchText() {
            this.activeIndex = -1;
        },
    },
    computed: {
        bookStrings(){
            return this.Sach.map((sach) => {
                const { tenSach, maSach, tacGia, namXuatBan, soQuyen, donGia } = sach;
                return [tenSach, maSach, tacGia, namXuatBan, soQuyen, donGia].join(" ");
            });
        },  
        filteredBooks() {
            if (!this.searchText) {
                return this.Sach;
            }
            return this.Sach.filter((_sach,index) => {
                return this.bookStrings[index].toLowerCase().includes(this.searchText.toLowerCase());
            });
        },
        activeBook() {
            if (this.activeIndex <0) {
                return null;
            }
            return this.filteredBooks[this.activeIndex];
        },
        filteredBooksCount() {
            return this.filteredBooks.length;
        },
    },
    methods:{
        async retrieveBook(){
            try {
                this.Sach = await BookService.getAll();
            } catch (error) {
                console.error(error);
            }
        },
        refreshList(){
            this.retrieveBook();
            this.activeIndex = -1;
        },
        goToAddBook(){
            this.$router.push({ name: "sach.add" });
        },
    },
    mounted(){
        this.refreshList();
    },
};
</script>
<style scoped>
.page {
    text-align: left;
    max-width: 750px;
}
</style>
<template>
   <div class="page row">
    <div class="mt-3 col-md-6">
      <h4>
        Danh Sách Các Loại Sách
    </h4>
      <BookList
        v-if="filteredBooksCount > 0"
        :Sach="filteredBooks"
        v-model:activeIndex="activeIndex"
      />
      <p v-else>Không có sách nào nào.</p>
      <div class="mt-3 row justify-content-around align-items-center">
        <button class="btn btn-sm btn-primary" @click="refreshList()">
          <i class="fas fa-redo"></i>Làm mới
        </button>
        <button class="btn btn-sm mb-2 btn-success mt-3" @click="goToAddBook">
          <i class="fas fa-plus"></i> Thêm mới
        </button>
      </div>
    </div>
    <div class="col-md-6 mt-3">
      <div v-if="activeBook">
        <h4>
          Chi tiết Sách
        </h4>
        <BookCard :Sach="activeBook" />
        <router-link
          :to="{ name: 'book.edit', params: { id: activeBook._id }, }"
        >
          <span class="mt-2 badge badge-warning bg-warning">
            <i class="fas fa-edit"> </i>Hiệu chỉnh
          </span>
        </router-link>
      </div>
    </div>
  </div>
</template>