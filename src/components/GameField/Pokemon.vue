<script setup>

const props = defineProps({
  pokemon: Object,
})

</script>
<template>
<img
        class="img-fluid"
        id="bubbles2"
        src="@/assets/images/attackGifs/bubbles.gif"
        alt="pokemon front"
        style="width: 40%; margin-left: 10%; margin-top: 10%; object-fit: contain; display: none; z-index: 2"
>
<img
        class="img-fluid"
        id="fire2"
        src="@/assets/images/attackGifs/fire.gif"
        alt="pokemon front"
        style="width: 40%; margin-left: 10%; margin-top: 10%; object-fit: contain; display: none; z-index: 2"
>
<img
        class="img-fluid"
        id="punch2"
        src="@/assets/images/attackGifs/punch.gif"
        alt="pokemon front"
        style="width: 40%; margin-left: 10%; margin-top: 10%; object-fit: contain; display: none; z-index: 2"
>
<img
        class="img-fluid"
        :src="`/src/assets/images/pokemons/${pokemon.pType}Front.gif`"
        alt="pokemon front"
        style="width: 40%; margin-left: 10%; margin-top: 10%; object-fit: contain"
>
</template>