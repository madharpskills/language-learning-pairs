<template>
<div class="bg-gradient-to-t from-indigo-800 to-indigo-200 ...">
  <div class="container">
    <div>
      <!-- <Logo /> -->
      <h1 class="title">
        Language Learning Pairs
      </h1>
      <!-- <Card /> -->
      <div class="menu">
        <a href="#" v-if="!newGame" @click="openGameMenu()" class="button--white">New Game</a>
        <div v-if="newGame" class="options">
          <div>
          <h1 class="subtitle" style="color: #fff;padding: 15px">Mode</h1>
          <button @click="mode='words'" :class="{ 'button--white--clicked' : mode == 'words', 'button--white' : mode != 'words' }">Words with pictures</button>
          <button @click="mode='pictures'" :class="{ 'button--white--clicked' : mode == 'pictures', 'button--white' : mode != 'pictures' }">Pictures only</button>
          </div>

          <div>
          <h1 class="subtitle" style="color: #fff;padding: 15px">Language</h1>
          <button @click="language='japanese'" :class="{ 'button--white--clicked' : language == 'japanese', 'button--white' : language != 'japanese' }">Japanese</button>
          </div>

          <div>
          <h1 class="subtitle" style="color: #fff;padding: 15px">Size</h1>
          <button @click="size='12'" :class="{ 'button--white--clicked' : size == '12', 'button--white' : size != '12' }">12</button>
          <button @click="size='16'" :class="{ 'button--white--clicked' : size == '16', 'button--white' : size != '16' }">16</button>
          <button @click="size='20'" :class="{ 'button--white--clicked' : size == '20', 'button--white' : size != '20' }">20</button>
          </div>
          <div style="padding: 25px">
            <a href="game" @click="startGame()" class="button--white">Start Game</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    data () {
        return {
            newGame: false,
            language: null,
            mode: null,
            size: null,
            gameReady: false
        }
    },
    methods: {
        openGameMenu () {
            this.newGame = true
        },
        startGame(mode, language, size) {
            
        }
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
