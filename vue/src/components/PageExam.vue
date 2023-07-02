<script>
import sourceData from '@/data.json'
export default {
    data() {
        return {
            picked: "A",
        }
    },
    props: {
        exam: { type: Object, require: true },
        exam_num: Number
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
                <span>限时{{ exam.totalTime }}分钟</span><br>
                <span>满分100分</span><br>
                <span>名额:{{ exam_num }}/{{ exam.totalPerson }}</span>
            </div>
        </ul>
    </div>
</template>