<template>
    <div v-if="muonSach">
    <h1>Mượn sách</h1>
    <MuonSachForm
        :muonSach="muonSach"
        @submit:muonSach="addMuonSach"
    />
        <p>{{ message }}</p>
    </div>
</template>
<script>
import MuonSachForm from "@/components/muonsach/MuonSachForm.vue";
import MuonSachService from "@/services/muonsach.service"
import BookService from "@/services/book.service";
import {toast} from 'vue3-toastify';
import 'vue3-toastify/dist/index.css'
export default { 
    components: {
        MuonSachForm,

    },
    data() {
        return {
            muonSach: {},
            message: "",
        };
    },
    methods: {
        async addMuonSach(data) {
            try {
                await MuonSachService.create(data);
                toast.success("Mượn sách thành công");
                const {_id} = 
                BookService.update(_id, {soQuyen:this.soQuyen-1});
                this.$router.push("/sachmuon");
            } catch (error) {
                console.log(error);
            }
        },
        
    },
    created() {
    },
};
</script>