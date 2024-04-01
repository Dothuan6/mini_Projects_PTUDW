<script>
import axios from 'axios'
export default {
    data() {
        return {
            tenDocGia: '',
            password: ''
        }
    },
    methods: {
        login() {
            axios.post('http://localhost:3000/api/docgia/login', {
                tenDocGia: this.tenDocGia,
                password: this.password
            }).then(res => {
                console.log(res.data)
                localStorage.setItem('token', res.data.token)
                this.$router.push('/docgia')
            }).catch(err => {
                console.log(err)
            })
        }
    }
    
}
</script>
<template>
    <div>
        <h1>Đăng nhập</h1>
        <input type="text" v-model="tenDocGia" placeholder="Tên độc giả">
        <input type="password" v-model="password" placeholder="Mật khẩu">
        <button @click="login">Đăng nhập</button>
    </div>
</template>