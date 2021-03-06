const state = () => ({
    newGame: false,
    mode: null,
    language: null,
    size: null
})

const mutations = {
    openGameMenu(state) {
        state.newGame = true
    },
    setMode(state, mode) {
        state.mode = mode
        if (mode === 'pictures') {
            state.language = 'japanese'
        }
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