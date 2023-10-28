export const film = {
    namespaced: true,

    state:() => ({
        film: {
            id: 0,
            title: "",
            plot: "",
            year: "",
            duration: "",
            countries: [],
            genres: [],
            directors: [],
            writers: [],
            poster: "",
            ratingKoda: "",
            ratingKinopoisk: "",
            youtubeTrailer: "",
            actors: [],
            voiceover: [],
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
                ratingKoda: 9.0,
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

    getters: {
    },

    mutations: {
    },

    actions: {
    },
}