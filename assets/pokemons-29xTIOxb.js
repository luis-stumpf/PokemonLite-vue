import{G as n,r as t,C as e,g as r}from"./index-D5mMWWVX.js";const p=n("pokemons",()=>{const o=t(e.pokemonSamples);async function s(){const a=await r.get(`${e.serverUrl}/api/allPokemonsJson`);o.value=a.data}return{pokemons:o,getPokemonsData:s}});export{p as u};
