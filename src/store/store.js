import {createStore} from "vuex";
import {film} from "@/store/FilmModule";

export default createStore({
    modules:{
        film: film
    }
})
