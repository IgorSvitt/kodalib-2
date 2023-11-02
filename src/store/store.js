import {createStore} from "vuex";
import {film} from "@/store/FilmModule";
import {loading} from "@/store/LoadModule";

export default createStore({
    modules:{
        film: film,
        load: loading,
    }
})
