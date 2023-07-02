<script>
import sourceData from '@/data.json'
import RegisterCard from '../../components/RegisterCard.vue'
import PageScore from '../../components/PageScore.vue'
export default {
    components: {
        RegisterCard,
        PageScore
    },
    data() {
        return {
            examNumber: 0
        }
    },
    props: {
        id: { type: Number, required: true },

    },
    computed: {
        exams() {
            return sourceData.exams
        }
    },
    mounted() {
    },
    methods: {
        evokeConfirm() {
            return confirm("是否确认报名");
        }
    }

}

</script>

<template>
    <h1>我的成绩</h1>
    <section class="paper">
        <div v-for="exam in exams" :key="exam.id">
            <page-score :exam="exam"></page-score>
        </div>
    </section>
</template>
