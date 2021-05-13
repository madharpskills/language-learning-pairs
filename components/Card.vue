<template>
  <div class="Card" style="width:200px;height:100px;border: 1px solid #ffffff;color: #ffffff;"></div>
</template>

<style>
.Card {
  animation: 1s appear;
  margin: auto;
  border-radius: 4px;
}

.Card:hover {
  background-color: #fff;
}


@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
