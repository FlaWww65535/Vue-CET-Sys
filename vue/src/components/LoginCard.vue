<script>

import { Text } from 'vue';
export default {
    data() {
        return {
            username: "",
            password: "",
            repeat_password: "",
            isRegister: false
        };
    },
    props: {
        show: Boolean
    },
    components: { Text }
}
</script>

<template>
    <Transition name="modal">
        <div v-if="show" class="modal-mask">
            <div class="modal-container">
                <div class="modal-header">
                    <slot name="header">{{ !isRegister ? "Log in" : "Sign up" }}</slot>
                </div>

                <div class="modal-body">
                    <input placeholder="username" v-model="username">
                    <input placeholder="password" type="password" v-model="password">
                    <input v-if="isRegister" placeholder="repeat password" type="password" v-model="repeat_password">
                </div>

                <div class="modal-footer">
                    <u @click="() => { isRegister = !isRegister; }">{{ isRegister ? "Log in" : "Sign up" }}</u>
                    <button class="modal-default-button" @click="$emit('login')">{{ !isRegister ? "Log in" : "Sign up"
                    }}</button>
                    <button class="modal-default-button" @click="$emit('close')">Close</button>
                </div>
            </div>
        </div>
    </Transition>
</template>

<style>
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    transition: opacity 0.3s ease;
}

.modal-container {
    width: 300px;
    margin: auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
}

.modal-header h3 {
    margin-top: 0;
    color: #42b983;
}

.modal-body {
    margin: 20px 0;
}

.modal-default-button {
    float: right;
}

/*
 * 对于 transition="modal" 的元素来说
 * 当通过 Vue.js 切换它们的可见性时
 * 以下样式会被自动应用。
 *
 * 你可以简单地通过编辑这些样式
 * 来体验该模态框的过渡效果。
 */

.modal-enter-from {
    opacity: 0;
}

.modal-leave-to {
    opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
</style>