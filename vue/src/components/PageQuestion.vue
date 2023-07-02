<script>
export default {
    data() {
        return {
            picked: "   ",
        }
    },
    props: {
        question: { type: Object, require: true }
    },
    computed: {

    },

}
</script>

<template>
    <div>
        <h2>{{ question.id }},{{ question.title }}</h2>
        <p>{{ question.text }}</p>
        <div class="options" v-if="question.type == 0">
            <div v-for="option in question.options" :key="option.index">
                <input type="radio" :id="option.index" :value="option.index" v-model="picked">
                <label for="option.index">{{ option.text }}</label>
            </div>
        </div>
        <div v-if="question.type == 1">
            <textarea class="inputbox" placeholder="请输入回答..."></textarea>
        </div>
    </div>
</template>

<style>
.inputbox {
    height: 20;
    width: 40;
}

.options {
    text-align: left;
}
</style>