import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/HomePage.vue'
import Exam from '@/pages/ExamPage.vue'
import MyExam from '@/pages/MyExamPage.vue'
import Sign from '@/pages/SignPage.vue'
import Finish from '@/pages/FinishPage.vue'
import Personal from '@/pages/Personal/ScoreQueryPage.vue'

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/home', redirect: "/" },
    { path: '/myexam', name: 'myxam', component: MyExam },
    { path: '/sign', name: 'sign', component: Sign },
    {
        path: '/exam/:id',
        name: 'exam',
        component: Exam,
        props: route => ({ ...route.params, id: parseInt(route.params.id) })
    },
    { path: '/finish', name: 'finish', component: Finish },
    { path: '/personal', name: 'personal', component: Personal },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router