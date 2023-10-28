import MainPage from "@/components/pages/main/MainPage.vue";
import {createRouter, createWebHistory} from "vue-router";
import FilmPage from "@/components/pages/film/FilmPage.vue";

const routes = [
    {
        path: "/",
        component: MainPage,
    },
    {
        path: "/film/:name_id",
        component: FilmPage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(""),
});

export default router;

