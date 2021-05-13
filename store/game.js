const state = () => ({
    mode: null,
    language: null,
    size: null,
})

const mutations = {
    setMode(state, mode) {
        state.mode = mode
    },
    setLanguage(state, language) {
        state.language = language
    },
    setSize(state, size) {
        state.size = size
    }
}

module.exports = {
    state,
    mutations
}