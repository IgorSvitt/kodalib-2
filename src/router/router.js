import MainPage from "@/components/pages/main/MainPage.vue";
import {createRouter, createWebHistory, useRoute} from "vue-router";
import FilmPage from "@/components/pages/film/FilmPage.vue";
import NotFoundPage from "@/components/pages/error/NotFoundPage.vue";
import store from "@/store/store";

const route = useRoute()

const routes = [
    {
        path: "/",
        component: MainPage,
    },
    {
        path: "/film/:id",
        name: "FilmPage",
        component: FilmPage,
        meta: { requiresData: true },
    },
    {
        path: "/404",
        component: NotFoundPage,
    },
    {
        path: "/:pathMatch(.*)*",
        component: NotFoundPage,
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(""),
});

router.afterEach((to,from,next) => {
    window.scrollTo(0,0);
});

router.beforeEach(async (to, from, next) => {
    if (to.name === "FilmPage" && store.state.film.info.id === 0) {
        await store.dispatch("film/getFilm", to.params.id);
        next();
    } else {
        next();
    }
})


export default router;

