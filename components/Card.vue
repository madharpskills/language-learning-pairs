<template>
  <div class="Card">
    <!-- <p v-if="$fetchState.pending">Loading....</p>
    <p v-else-if="$fetchState.error">Error while fetching word</p> -->
    <!-- <ul v-else>
      <li>
        {{ cardstuff.english }}
      </li>
      <li>
        {{ cardstuff.target }}
      </li>
    </ul> -->
  </div>
</template>

<script>
    export default {
        data() {
            return {
                cardstuff: {}
            }
        },
        // async fetch() {
        //     this.cardstuff = await fetch('http://localhost:3000/api/word/red')
        //         .then(res => res.json())
        // }
    }
</script>

<style>
@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
