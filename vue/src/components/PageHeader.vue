<script>
import LoginCardVue from './LoginCard.vue'
export default {
    components: {
        LoginCardVue
    },
    data() {
        return {
            showLoginCard: false,
            isLogin: false,
            isRegister: false
        }
    },
    methods: {
        setIsLogin() { isLogin = true; showLoginCard = false; }
    }


}
</script>


<template>
    <div id="nav">
        <RouterLink id='logo' to="home">CET-6</RouterLink>
        <RouterLink to="sign">报名</RouterLink>
        <RouterLink to="myexam">试题</RouterLink>
        <RouterLink to="personal">我的</RouterLink>
        <button id="login-button" @click="() => showLoginCard = true">{{ !isLogin ? "Login" : "Logout" }}</button>
    </div>


    <Teleport to="body">
        <!-- 使用这个 modal 组件，传入 prop -->
        <LoginCardVue :show="showLoginCard" @close="() => showLoginCard = false"
            @login="() => { showLoginCard = false; isLogin = true; }" @register="() => { isRegister = true }">

        </LoginCardVue>
    </Teleport>
</template>