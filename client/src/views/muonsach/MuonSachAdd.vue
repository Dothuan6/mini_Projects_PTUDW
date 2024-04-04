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
                await localStorage.setItem("muonSach", JSON.stringify(data));
                alert("Mượn sách thành công");
                this.$router.push("/quanlysachmuon");
            } catch (error) {
                console.log(error);
            }
        },
    },
    created() {
    },
};
</script>