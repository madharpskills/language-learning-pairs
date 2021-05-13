<template>
  <ul class="deck" id="card-deck">
    <li class="card flipped"><Card /></li><li class="card unmatched"><Card /></li><li class="card"><Card /></li><li class="card"><Card /></li>
    <li class="card show"><Card /></li><li class="card disabled"><Card /></li><li class="card"><Card /></li><li class="card"><Card /></li>
    <li class="card match"><Card /></li><li class="card"><Card /></li><li class="card"><Card /></li><li class="card"><Card /></li>
  </ul>
</template>

<script>
export default {
    data () {
        return {
            rows: [{}]
        }
    },
    computed: {
        gameOptions () {
            return this.$store.state.game
        }
    },
    methods: {
        
    }
}
</script>
