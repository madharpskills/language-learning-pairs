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
    async asyncData({ $axios }) {
        let cards = await $axios.$get(`http://localhost:3000/api/words?language=japanese`)
        return { cards }
    },
    created () {
        let cards1 = _.cloneDeep(this.cards)
        this.cards = this.cards.concat(cards1)

        this.cards.forEach((card) => {
            Vue.set(card, 'isFlipped', false)
        })
    },
    methods: {
        flipCard(card) {
            !card.isFlipped
        }
    }
}
</script>
