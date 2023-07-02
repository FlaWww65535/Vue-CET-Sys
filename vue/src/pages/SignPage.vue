<script>
import sourceData from '@/data.json'
import PageExamVue from '../components/PageExam.vue'
import RegisterCard from '../components/RegisterCard.vue'
export default {
    components: {
        PageExamVue,
        RegisterCard
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
        },
        getAvaliableExamInfo() {
            this.$axios(
                `/api/exam/${this.pagination.id}`
            )
                .then(res => {
                    this.pagination = res.data.data;
                    console.log(res);
                })
                .catch(error => { });
        },
    }

}

</script>

<template>
    <h1>Exams title</h1>
    <section>
        <div v-for="exam in exams" :key="exam.id">
            <page-exam-vue :exam="exam" :exam_num="examNumber"></page-exam-vue>
            <button @click="() => { if (evokeConfirm()) examNumber++ }">报名</button>
        </div>
    </section>
</template>