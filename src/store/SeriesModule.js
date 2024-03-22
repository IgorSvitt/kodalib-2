import axios from "axios";
import {API_PATH} from "@/api/api";
import router from "@/router/router";

export const series = {
    namespaced: true,

    state: () => ({
        info: {
            id: 0,
            name: "",
            description: "",
            poster: "",
            year: "",
            country: "",
            genres: [],
            rating: 0,
            episodes: [],
        },
        series: [],
        episode: {},
    }),

    getters: {}
    ,

    mutations: {
        setSeries(state, series) {
            state.info = series
        },
        setEpisode(state, episode) {
            state.episode = episode
        },
        setSeriesList(state, series) {
            state.series = series
        },
    }
    ,

    actions: {
        async getSeries({commit}, id) {
            try {
                await axios.get(API_PATH + "/series/" + id)
                    .then(response => {
                        commit('setSeries', response.data)
                    })
            } catch (e) {
                await router.push({path: "/404"})
            }
        },

        async getNewSeries({commit}) {
            try {
                await axios.get(API_PATH + "/series/new")
                    .then(response => {
                        commit('setSeriesList', response.data)
                    })
            } catch (e) {
                console.log(e)
                commit('setSeriesList', [])
            }
        },

        async getTopSeries({commit}) {
            try {
                await axios.get(API_PATH + "/series/top")
                    .then(response => {
                        commit('setSeriesList', response.data)
                    })
            } catch (e) {
                console.log(e)
                commit('setSeriesList', [])
            }
        }
    }
    ,
}