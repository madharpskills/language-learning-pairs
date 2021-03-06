<template>
<div class="bg-gradient-to-t from-indigo-800 to-indigo-200 ...">
  <div class="container">
    <div>
      <h1 class="title">
        Language Learning Pairs
      </h1>

      <div v-if="gameOptions.mode == 'words'">
        <ul class="deck" id="card-deck">
          <li v-for="card in cards" @click="flipCard(card)" v-bind:key="card">
            <div v-if="!card.isTarget" class="deck card" :class="{ 'flipped': card.isFlipped, 'matched': card.isMatched, 'unmatched': card.unmatch }">
              {{card.english}}
            </div>
            <div v-if="card.isTarget" class="deck card" :class="{ 'flipped': card.isFlipped, 'matched': card.isMatched, 'unmatched': card.unmatch }">
              {{card.target}}
            </div>
          </li>
        </ul>
      </div>

      <div v-if="gameOptions.mode == 'words with pictures'">
        <ul class="deck" id="card-deck">
          <li v-for="card in cards" @click="flipCard(card)" v-bind:key="card">
            <div v-if="!card.isTarget" class="deck card" :class="{ 'flipped': card.isFlipped, 'matched': card.isMatched, 'unmatched': card.unmatch }">
              <div style="position: relative;" :class="{ 'hide': !card.isFlipped }">
                <img class="picture" :src="`${card.pictureFilepath}`" />
              </div>
              <div style="position: absolute; bottom: 0; padding: 10px">
                {{card.english}}
              </div>
            </div>
            <div v-if="card.isTarget" class="deck card" :class="{ 'flipped': card.isFlipped, 'matched': card.isMatched, 'unmatched': card.unmatch }">
              <div style="position: relative;" :class="{ 'hide': !card.isFlipped }">
                <img class="picture" :src="`${card.pictureFilepath}`" />
              </div>
              <div style="position: absolute; bottom: 0; padding: 10px">
                {{card.target}}
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div v-if="gameOptions.mode == 'pictures'">
        <ul class="deck" id="card-deck">
          <li v-for="card in cards" @click="flipCard(card)" v-bind:key="card">
            <div v-if="!card.isTarget" class="deck card" :class="{ 'flipped': card.isFlipped, 'matched': card.isMatched, 'unmatched': card.unmatch }">
              <div :class="{ 'hide': !card.isFlipped }">
                <img class="picture" :src="`${card.pictureFilepath}`" />
              </div>
            </div>
            <div v-if="card.isTarget" class="deck card" :class="{ 'flipped': card.isFlipped, 'matched': card.isMatched, 'unmatched': card.unmatch }">
              <div :class="{ 'hide': !card.isFlipped }">
                <img class="picture" :src="`${card.pictureFilepath}`" />
              </div>
            </div>
          </li>
        </ul>
      </div>

    </div>
    <div style="padding-top: 800px; margin 20px">
      <button style="margin: 20px" v-if="gameFinished" class="button--white" @click="reset">Play again</button>
      <NuxtLink to="/" class="button--white">Home</NuxtLink>
    </div>
  </div>
</div>
</template>

<script>
import _ from "lodash"
import Vue from "vue"

export default {
    data () {
        return {
            words: [],
            cards: [],
            flippedCards: [],
            gameFinished: false
        }
    },
    computed: {
        gameOptions () {
            return this.$store.state.game
        }
    },
    async asyncData({ store, $axios }) {
        let words = await $axios.$get(`/api/words?language=${store.state.game.language}`)
        return { words }
    },
    created () {
        if (this.words.length > this.$store.state.game.size / 2) {
            this.words = this.words.slice(0, this.$store.state.game.size / 2)
        }

        this.reset()
    },
    methods: {
        reset() {
            this.cards = []
            let englishWords = _.cloneDeep(this.words)
            englishWords.forEach(word => word.isTarget = false)
            let targetWords = _.cloneDeep(this.words)
            targetWords.forEach(word => word.isTarget = true)
            this.cards = _.shuffle(this.cards.concat(englishWords, targetWords))

            this.cards.forEach((card) => {
                Vue.set(card, 'isFlipped', false)
                Vue.set(card, 'isMatched', false)
                Vue.set(card, 'unmatch', false)
            })

            setTimeout(() => {  
                this.gameFinished = false
                this.flippedCards = []
            }, 600)
        },
        flipCard(card) {
            if(card.isMatched || card.isFlipped || this.flippedCards.length === 2){
                return
            }

            card.isFlipped = true

            if (this.flippedCards.length < 2) {
                this.flippedCards.push(card)
            }

            if (this.flippedCards.length === 2) {
                this.match()
            }
        },
        match() {
            if (this.flippedCards[0].id === this.flippedCards[1].id) {
                setTimeout(() => {
                    this.flippedCards.forEach(card => card.isMatched = true)
                    this.flippedCards = []

                    if(this.cards.every(card => card.isMatched === true)){
                        this.gameFinished = true
                    }
                }, 400)
            } else {
                setTimeout(() => {
                    this.flippedCards.forEach(card => card.isFlipped = false)
                    this.flippedCards.forEach(card => card.unmatch = true)
                    setTimeout(() => {
                        this.flippedCards.forEach(card => card.unmatch = false)
                        this.flippedCards = []
                    }, 500)
                }, 600)
            }
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

.picture {
  max-width: 100px; 
  max-height: 100px;
  border-radius: 8px;
  border: 1px solid #000;
}

.hide {
  display: none;
}

/*
 * Styles for the deck of cards
 */

.deck {
  width: 60%;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 8px 9px 26px 0 rgba(46, 61, 73, 0.5);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.deck .card {
  height: 8rem;
  width: 10rem;
  margin: 5px 8px;
  color: transparent;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 2px 20px 0 rgba(46, 61, 73, 0.5);
  position: relative;
}

.deck .card:hover {
  background-color: #fff;
  color: transparent
}

.deck .card.flipped {
  transform: rotateY(0);
  background: #323068;
  cursor: default;
  color: #fff;
  animation-name: flipInY;
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  animation-duration: .75s;
}

.deck .card.matched {
  cursor: default;
  background: #babaff;
  animation-name: rubberBand;
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  animation-duration: .75s;
}

.deck .card.unmatched {
  animation-name: pulse;
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  animation-duration: .75s;
}

/* animations */

@keyframes flipInY {
  from {
  	transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
  	animation-timing-function: ease-in;
  	opacity: 0;
  }

  40% {
  	transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
  	animation-timing-function: ease-in;
  }

  60% {
  	transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
  	opacity: 1;
  }

  80% {
  	transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
  	transform: perspective(400px);
  }
}

@keyframes rubberBand {
  from {
  	transform: scale3d(1, 1, 1);
  }

  30% {
  	transform: scale3d(1.25, 0.75, 1);
  }

  40% {
  	transform: scale3d(0.75, 1.25, 1);
  }

  50% {
  	transform: scale3d(1.15, 0.85, 1);
  }

  65% {
  	transform: scale3d(.95, 1.05, 1);
  }

  75% {
  	transform: scale3d(1.05, .95, 1);
  }

  to {
  	transform: scale3d(1, 1, 1);
  }
}

@keyframes pulse {
  from {
  	transform: scale3d(1, 1, 1);
  }

  50% {
  	transform: scale3d(1.2, 1.2, 1.2);
  }

  to {
  	transform: scale3d(1, 1, 1);
  }
}
</style>
