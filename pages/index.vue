<template>
<div class="bg-gradient-to-t from-indigo-800 to-indigo-200 ...">
  <div class="container">
    <div>
      <h1 class="title">
        Language Learning Pairs
      </h1>
      <div class="menu">
        <button v-if="!gameOptions.newGame" @click="openGameMenu()" class="button--white">New Game</button>
        <div v-if="gameOptions.newGame" class="options">
          <div id="mode">
          <h1 class="subtitle" style="color: #fff;padding: 15px">Mode</h1>
          <button @click="setMode('words with pictures')" :class="{ 'button--white--clicked' : gameOptions.mode == 'words with pictures', 'button--white' : gameOptions.mode != 'words with pictures' }">Words with pictures</button>
          <button @click="setMode('words')" :class="{ 'button--white--clicked' : gameOptions.mode == 'words', 'button--white' : gameOptions.mode != 'words' }">Words only</button>
          <button @click="setMode('pictures')" :class="{ 'button--white--clicked' : gameOptions.mode == 'pictures', 'button--white' : gameOptions.mode != 'pictures' }">Pictures only</button>
          </div>

          <div v-if="gameOptions.mode != 'pictures'" id="language">
          <h1 class="subtitle" style="color: #fff;padding: 15px">Language</h1>
          <button @click="setLanguage('japanese')" :class="{ 'button--white--clicked' : gameOptions.language == 'japanese', 'button--white' : gameOptions.language != 'japanese' }">Japanese</button>
          </div>

          <div id="size">
          <h1 class="subtitle" style="color: #fff;padding: 15px">Size</h1>
          <button @click="setSize('12')" :class="{ 'button--white--clicked' : gameOptions.size == '12', 'button--white' : gameOptions.size != '12' }">12</button>
          <button @click="setSize('16')" :class="{ 'button--white--clicked' : gameOptions.size == '16', 'button--white' : gameOptions.size != '16' }">16</button>
          <button @click="setSize('20')" :class="{ 'button--white--clicked' : gameOptions.size == '20', 'button--white' : gameOptions.size != '20' }">20</button>
          </div>
          <div style="padding: 25px">
            <NuxtLink v-if="gameOptions.size != null && gameOptions.mode != null && gameOptions.language != null" to="game" @click="startGame()" class="button--white">Start Game</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    data () {
        return {

        }
    },
    computed: {
        gameOptions () {
            return this.$store.state.game
        }
    },
    methods: {
        ...mapMutations({
            setMode: 'game/setMode',
            setLanguage: 'game/setLanguage',
            setSize: 'game/setSize',
            openGameMenu: 'game/openGameMenu'
        })
    }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #fff;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 30px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.menu {
  padding-top: 15px;
}
</style>
