import axios from "axios";
import {API_PATH} from "@/api/api";
import router from "@/router/router";

export const series = {
    namespaced: true,

    state: () => ({
        info: {},
        series: [],
    }),

    getters: {}
    ,

    mutations: {
        setSeries(state, series) {
            state.info = series
        }
    }
    ,

    actions: {
        async getSeries({commit}, id) {
            try {
                await axios.get(API_PATH + "/series/" + id)
                    .then(response => {
                        commit('setSeries', response.data)
                        console.log(response.data.voiceiversSeries)
                    })
            } catch (e) {
                await router.push({path: "/404"})
            }

        }
    }
    ,
}