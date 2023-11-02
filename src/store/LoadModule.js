export const loading = {
    namespaced: true,

    state: () => ({
        loading: false,
    }),

    mutations: {
        SET_LOADING(state, loading) {
            state.loading = loading;
        },
    },

    actions: {
        setLoading({ commit }, loading) {
            commit("SET_LOADING", loading);
        },
    },

    getters: {
        loading: state => state.loading,
    },
}