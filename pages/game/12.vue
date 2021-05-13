<template>
  <ul class="deck" id="card-deck">
    <li class="card"><Card /></li><li class="card"><Card /></li><li class="card"><Card /></li><li class="card"><Card /></li>
    <li class="card"><Card /></li><li class="card"><Card /></li><li class="card"><Card /></li><li class="card"><Card /></li>
    <li class="card"><Card /></li><li class="card"><Card /></li><li class="card"><Card /></li><li class="card"><Card /></li>
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
