if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/PokemonLite-vue/sw.js', { scope: '/PokemonLite-vue/' })})}