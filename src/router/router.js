import MainPage from "@/components/pages/main/MainPage.vue";
import {createRouter, createWebHistory, useRoute} from "vue-router";
import FilmPage from "@/components/pages/film/FilmPage.vue";
import NotFoundPage from "@/components/pages/error/NotFoundPage.vue";
import store from "@/store/store";
import SeriesPage from "@/components/pages/series/SeriesPage.vue";
import CatalogPage from "@/components/pages/catalog/CatalogPage.vue";
import GenresPage from "@/components/pages/genres/GenresPage.vue";
import NewPage from "@/components/pages/new/NewPage.vue";
import FilmsPage from "@/components/pages/films/FilmsPage.vue";
import TopSeriesPage from "@/components/pages/top/TopSeriesPage.vue";
import LoginPage from "@/components/pages/login/LoginPage.vue";


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
        meta: {requiresData: true},
    },
    {
        path: "/series/:id",
        name: "SeriesPage",
        component: SeriesPage,
        meta: {requiresData: true},
    },
    {
        name: "CatalogPage",
        path: "/catalog",
        component: CatalogPage,
    },
    {
        name: "GenrePage",
        path: "/genres",
        component: GenresPage,
    },
    {
        name: "NewPage",
        path: "/new",
        component: NewPage,
    },
    {
        name: "FilmsPage",
        path: "/films",
        component: FilmsPage,
    },
    {
        name: "TopSeriesPage",
        path: "/top",
        component: TopSeriesPage,
    },
    {
        name: "LoginPage",
        path: "/login",
        component: LoginPage
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
    scrollBehavior(to, from, savedPosition) {
        // всегда прокручивать до верха
        return {top: 0}
    },
});


router.beforeEach(async (to, from, next) => {
    if (to.name === "FilmPage" && store.state.film.info.id !== to.params.id
        && (from.name === "MainPage" || from.name === "SeriesPage" || from.name === "FilmPage" || from.name === "CatalogPage" || from.name === "GenrePage" || from.name === "NewPage" || from.name === "FilmsPage" || from.name === "TopSeriesPage"))
        {
            await store.dispatch("film/getFilm", to.params.id);
            next();
        }
    else
        if (to.name === "SeriesPage" && store.state.film.info.id !== to.params.id
            && (from.name === "MainPage" || from.name === "SeriesPage" || from.name === "FilmPage" || from.name === "CatalogPage" || from.name === "GenrePage" || from.name === "NewPage" || from.name === "FilmsPage" || from.name === "TopSeriesPage")) {
            await store.dispatch("series/getSeries", to.params.id);
            next();
        } else {
            next();
        }
    }
)


    export default router;

