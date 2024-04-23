<template>
    <div v-if="muonSach">
        <h1 class="text-center">Mượn sách</h1>
        <MuonSachForm :muonSach="muonSach" @submit:muonSach="addMuonSach" />
        <p>{{ message }}</p>
    </div>
</template>
<script>
import MuonSachForm from "@/components/muonsach/MuonSachForm.vue";
import MuonSachService from "@/services/muonsach.service";
import BookService from "@/services/book.service";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
export default {
    components: {
        MuonSachForm,
    },
    props: {
        id: { type: String, required: true },
    },
    data() {
        return {
            muonSach: null,
            message: "",
        };
    },
    methods: {
        async addMuonSach(data) {
            try {
                await MuonSachService.create(data);
                toast.success("Mượn sách thành công");
                this.message = "Đang chuyển hướng đến trang sách đã mượn...";
                setTimeout(() => {
                    this.$router.push("/sachdamuon");
                }, 3000);
            } catch (error) {
                console.log(error);
            }
        },
        async getBook(id) {
            try {
                this.muonSach = await BookService.get(id);
            } catch (error) {
                console.log(error);
                this.$router.push({
                    name: "notfound",
                    params: {
                        pathMatch: this.$route.path.split("/").slice(1),
                    },
                    query: this.$route.query,
                    hash: this.$route.hash,
                });
            }
        },
        
        
    },
    created() {
        this.getBook(this.$route.params.id);
    },
    
};
</script>
