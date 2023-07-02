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
        getAllExamInfo() {
            //分页查询所有试卷信息
            this.$axios(
                `/api/myexam/${this.pagination.current}/${this.pagination.size}`
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
    <h1>已报名的考试</h1>
    <section>
        <div v-for="exam in exams" :key="exam.id">
            <page-exam-vue :exam="exam" :exam_num="1"></page-exam-vue>
            <RouterLink :to="{ name: 'exam', params: { id: exam.id } }">
                <button>开始</button>
            </RouterLink>
        </div>
    </section>
</template>