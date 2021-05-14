<template>
<div class="bg-gradient-to-t from-indigo-800 to-indigo-200 ...">
  <div class="container">
    <div>
      <h1 class="title">
        Language Learning Pairs
      </h1>
      <div>{{ gameOptions }}</div>
      <ul class="deck" id="card-deck">
        <li v-for="card in cards" @click="card.isFlipped = !card.isFlipped">
          <div class="deck card" :class="{ 'flipped': card.isFlipped }">
            {{card.english}}
          </div>
        </li>
      </ul>
    </div>
    <div style="padding-top: 800px">
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
            cards: []
        }
    },
    computed: {
        gameOptions () {
            return this.$store.state.game
        }
    },
    async asyncData({ store, $axios }) {
        let cards = await $axios.$get(`http://localhost:3000/api/words?language=${store.state.game.language}`)
        return { cards }
    },
    created () {
        if (this.cards.length > this.$store.state.game.size / 2) {
            this.cards = this.cards.slice(0, this.$store.state.game.size / 2)
        }
        
        this.cards.forEach((card) => {
            Vue.set(card, 'isFlipped', false)
        })

        this.cards = _.shuffle(this.cards.concat(_.cloneDeep(this.cards)))
    },
    methods: {
        flipCard(card) {
            !card.isFlipped
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
  /* background: #ffffff;; */
  color: transparent;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 2px 20px 0 rgba(46, 61, 73, 0.5);
}

.deck .card:hover {
  background-color: #fff;
  color: transparent
}

.deck .card.flipped:hover {
  color: #35495e
}

.deck .card.flipped {
  transform: rotateY(0);
  background: #02b3e4;
  cursor: default;
  color: #fff;
  animation-name: flipInY;
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  animation-duration: .75s;
}

.deck .card.show {
  /* font-size: 33px; */
}

.deck .card.match {
  cursor: default;
  background: #20b627;
  /* font-size: 33px; */
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
  background: #e2043b;
}

.deck .card.disabled {
  pointer-events: none;
  opacity: 0.9;
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
