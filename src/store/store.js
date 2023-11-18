import {createStore} from "vuex";
import {film} from "@/store/FilmModule";
import {loading} from "@/store/LoadModule";
import {series} from "@/store/SeriesModule";

export default createStore({
    modules:{
        film: film,
        load: loading,
        series: series
    }
})
