import VueRouter from "vue-router";
import User from "./pages/User.vue";
import Hello from "./pages/Hello.vue";

const router = new VueRouter({
    routes: [
        { path: '/user', component: User },
        { path: '/hello', component: Hello },
    ]
});

export default router;