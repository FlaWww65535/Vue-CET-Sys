<script>
import sourceData from '@/data.json'
export default {
    data() {
        return {
        }
    },
    props: {
        exam: { type: Object, require: true },
    },
    computed: {

    },

}
</script>

<template>
    <div>
        <ul class="paper">
            <p class="name">{{ exam.title }}</p>
            <div class="info">
                <span>满分100分</span><br>
                <span>您的得分是:{{ exam.score }}</span>
            </div>
        </ul>
    </div>
</template>