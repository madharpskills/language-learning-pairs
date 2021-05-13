<template>
  <ul class="deck" id="card-deck">
    <li v-for="card in cards" @click="card.isFlipped = !card.isFlipped">
      <div class="deck card" :class="{ 'flipped': card.isFlipped }">
        {{card.english}}
        {{card.isFlipped}}
      </div>
    </li>
  </ul>
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
    async asyncData({ store, $axios }) {
        let cards = await $axios.$get(`http://localhost:3000/api/words?language=${store.state.game.language}`)
        return { cards }
    },
    created () {
        if (this.cards.length > 8) {
            this.cards = this.cards.slice(0, 8)
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
