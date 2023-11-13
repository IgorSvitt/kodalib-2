import axios from "axios";
import {API_PATH} from "@/api/api";
import router from "@/router/router";

export const film = {
    namespaced: true,

    state: () => ({
        info: {
            id: 0,
            title: "Паразиты",
            plot: "Обычное корейское семейство Кимов жизнь не балует. Приходится жить в сыром грязном полуподвале, воровать интернет у соседей и перебиваться случайными подработками. Однажды друг сына семейства, уезжая на стажировку за границу, предлагает тому заменить его и поработать репетитором у старшеклассницы в богатой семье Пак. Подделав диплом о высшем образовании, парень отправляется в шикарный дизайнерский особняк и производит на хозяйку дома хорошее впечатление. Тут же ему в голову приходит необычный план по трудоустройству сестры.",
            year: "2019",
            countries: ["Южная Корея"],
            genres: ["драма", "комедия", "триллер"],
            directors: ["Пон Джун Хо"],
            writers: ["Пон Джун Хо", "Хан Чжэ Вон"],
            poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/9c3920f8-8e8d-476b-b952-d838a9d97cea/orig",
            ratingKoda: 8.2,
            ratingKp: 8.0,
            actors: ["Сон Кан Хо", "Чхве У Сик", "Чхве Чжон Эн", "Чо Ё Чжон", "Пак Со Дам", "Ли Сон Гюн", "Чхве Ву Сик", "Чхве Джи У", "Пак Со Джун"],
            voiceovers: ["Дубляж", "Субтитры", "Оригинал",],
        },
        films: [
            {
                id: 1,
                title: "Королевство зомби",
                poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/0891509c-24ad-4f8f-8e7a-527ebbe8d1c7/orig",
                ratingKoda: 8.9,
                ratingKinopoisk: 7.7,
            },
            {
                id: 2,
                title: "Паразиты",
                poster: "https://ucare.timepad.ru/91198481-1d6f-4a5b-865c-22e335da577c/poster_event_2315049.jpg",
                ratingKoda: 8.4,
                ratingKinopoisk: 8.0,
            },
            {
                id: 3,
                title: "Истинная красота",
                poster: "https://a.viewy.ru/2022/06/11/dyshevno16549525024134.jpg",
                ratingKoda: 9.1,
                ratingKinopoisk: 8.3,
            },
            {
                id: 4,
                title: "Мстители: Финал",
                poster: "https://0.soompi.io/wp-content/uploads/2019/04/05012854/Abyss.jpg",
                ratingKoda: 9.2,
                ratingKinopoisk: 8.4,
            },
            {
                id: 5,
                title: "Зеленая книга",
                poster: "https://0.soompi.io/wp-content/uploads/2019/08/06201948/Love-Alarm.jpg",
                ratingKoda: 9.3,
                ratingKinopoisk: 8.5,
            },
            {
                id: 6,
                title: "Король Лев",
                poster: "https://ae04.alicdn.com/kf/Haf808a61e32845f29c323b3c899a20b1o.jpg",
                ratingKoda: 9.4,
                ratingKinopoisk: 8.6,
            },
            {
                id: 7,
                title: "Джокер",
                poster: "https://unnie.ru/wp-content/uploads/2022/01/Lee-Dong-Wook-Jo-Bo-Ah-2-scaled-1.jpg",
                ratingKoda: 9.5,
                ratingKinopoisk: 8.7,
            },
            {
                id: 8,
                title: "Хатико: Самый верный друг",
                poster: "https://avatars.dzeninfra.ru/get-zen_doc/9429668/pub_6422447960618029c05ca142_643597a056c7f229f6958122/scale_1200",
                ratingKoda: 9.6,
                ratingKinopoisk: 8.8,
            },
        ],
    }),

    getters: {},

    mutations: {
        setFilm(state, film) {
            state.info = film
        }
    },

    actions: {
        async getFilm({commit}, id) {
            try {
                await axios.get(API_PATH + "/films/" + id)
                    .then(response => {
                        commit('setFilm', response.data)
                    })
            } catch (e) {
                await router.push({path: "/404"})
            }

        }
    },
}