<template>
<div class="bg-gradient-to-t from-indigo-800 to-indigo-200 ...">
  <div class="container">
    <div>
      <h1 class="title">
        Language Learning Pairs
      </h1>
      <div>{{ gameOptions }}</div>
      <!-- <div> -->
        <!-- <ul class="deck" id="card-deck">
            <li class="card" type="diamond">
                <i class="fa fa-diamond"></i>
            </li>
            <li class="card">
                <Card />
            </li>
            <li class="card" type="plane">
                <i class="fa fa-paper-plane-o"></i>
            </li>
            <li class="card match" type="anchor">
                <i class="fa fa-anchor"></i>
            </li>
            <li class="card" type="bolt" >
                <i class="fa fa-bolt"></i>
            </li>
            <li class="card" type="cube">
                <i class="fa fa-cube"></i>
            </li>
            <li class="card match" type="anchor">
                <i class="fa fa-anchor"></i>
            </li>
            <li class="card" type="leaf">
                <i class="fa fa-leaf"></i>
            </li>
            <li class="card" type="bicycle">
                <i class="fa fa-bicycle"></i>
            </li>
            <li class="card" type="diamond">
                <i class="fa fa-diamond"></i>
            </li>
            <li class="card" type="bomb">
                <i class="fa fa-bomb"></i>
            </li>
            <li class="card" type="leaf">
                <i class="fa fa-leaf"></i>
            </li>
            <li class="card" type="bomb">
                <i class="fa fa-bomb"></i>
            </li>
            <li class="card open show" type="bolt">
                <i class="fa fa-bolt"></i>
            </li>
            <li class="card" type="bicycle">
                <i class="fa fa-bicycle"></i>
            </li>
            <li class="card" type="plane">
                <i class="fa fa-paper-plane-o"></i>
            </li>
            <li class="card" type="cube">
                <i class="fa fa-cube"></i>
            </li>
        </ul> -->
      <!-- </div> -->
      <NuxtChild />
    </div>
    <div style="padding-top: 800px">
      <NuxtLink to="/" class="button--white">Home</NuxtLink>
    </div>
  </div>
</div>
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
  font-size: 10;
  color: #ffffff;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 2px 20px 0 rgba(46, 61, 73, 0.5);
}

.deck .card:hover {
  background-color: #fff;
  color: #35495e
}

.deck .card.open {
  transform: rotateY(0);
  background: #02b3e4;
  cursor: default;
  animation-name: flipInY;
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  animation-duration: .75s;
}

.deck .card.show {
  font-size: 33px;
}

.deck .card.match {
  cursor: default;
  background: #E5F720;
  font-size: 33px;
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
</style>
