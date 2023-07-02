<script>
import sourceData from '@/data.json'
import PageQuestionVue from '../components/PageQuestion.vue'
export default {
    components: {
        PageQuestionVue
    },
    data() {
        return {
            count: '',
            seconds: 7200
        }
    },
    props: {
        id: { type: Number, required: true }
    },
    computed: {
        exam() {
            return sourceData.exams.find((exam) => exam.id === this.id)
        }
    },
    mounted() {
        this.Timer()
    },
    methods: {
        countDown() {
            let h = parseInt(this.seconds / (60 * 60) % 24);
            h = h < 10 ? "0" + h : h
            let m = parseInt(this.seconds / 60 % 60);
            m = m < 10 ? "0" + m : m
            let s = parseInt(this.seconds % 60);
            s = s < 10 ? "0" + s : s
            this.count = h + '时' + m + '分' + s + '秒'
        },
        Timer() {
            this.countDown()
            setInterval(() => {
                this.seconds--
                this.countDown()
            }, 1000)
        },
        evokeConfirm() {
            var r = confirm("是否确认提交");
            if (r) {
                this.$router.push({ path: '/finish' });
            }
        },
        getQuestionsInfo() {
            //分页查询所有试卷信息
            this.$axios(
                `/api/questions/${this.pagination.current}/${this.pagination.size}`
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
    <h1>Exam title</h1>
    <div>
        {{ count }}
    </div>
    <section>
        <div v-for="question in exam.questions" :key="question.id">
            <page-question-vue :question="question"></page-question-vue>
        </div>
    </section>
    <div></div>
    <button @click="evokeConfirm()">提交</button>
</template>