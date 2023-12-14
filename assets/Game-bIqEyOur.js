import{_ as p,s as y,l as m,m as u,o as r,c as i,y as j,a as o,F as f,t as _,n as G,i as S,z as V,f as d,p as b,b as $,e as z,g as x,C,q as A,h as D,x as h,A as L,B as U,D as w,k as g,r as q,E,d as J,v as R,S as W}from"./index-UpClggMC.js";import{u as I}from"./pokemons-VKwGqaep.js";const K="/PokemonLite-vue/assets/gamefield-1kCAL5oI.jpg",Q=["src"],X=["src"],Y={__name:"Pokemon",props:{pokemon:Object,side:String,playerNr:String},setup(e){const n=e,{attackAnimation:t}=y(m()),a=u(()=>t.value.animationOn===parseInt(n.playerNr)),s=u(()=>t.value.animationType);return(c,l)=>(r(),i(f,null,[a.value?(r(),i("img",{key:0,class:"img-fluid",src:`src/assets/images/attackGifs/${s.value}.gif`,alt:"pokemon front",style:{width:"40%","margin-left":"10%","object-fit":"contain","z-index":"2"}},null,8,Q)):j("",!0),o("img",{class:"img-fluid",src:`/pokemons/${e.pokemon.pType}${e.side}.gif`,alt:"pokemon front",style:{width:"40%","margin-left":"10%","object-fit":"contain"}},null,8,X)],64))}},B=p(Y,[["__scopeId","data-v-af94d6b9"]]),Z={class:"pokemon-status"},ee={class:"pokemon-name"},te={class:"pokemon-health-background"},ne={__name:"PokemonStatus",props:{pokemon:Object},setup(e){const n=e,t=u(()=>parseInt(n.pokemon.hp/n.pokemon.maxHp*100)),a=u(()=>`${n.pokemon.hp} / ${n.pokemon.maxHp} `);return(s,c)=>(r(),i("div",Z,[o("div",ee,_(e.pokemon.pType),1),o("div",te,[o("div",{id:"bar-p-1",class:"pokemon-health-bar",style:G(`width: ${t.value}%`)},null,4)]),S(" "+_(a.value),1)]))}},H=p(ne,[["__scopeId","data-v-cd960f9f"]]),ae=e=>(b("data-v-6ab5cd24"),e=e(),$(),e),oe={class:"image-container"},se=ae(()=>o("img",{src:K},null,-1)),ce={class:"overlay-content"},re={class:"row h-50"},le={id:"player-1-status",class:"col"},ie={id:"player-1-pokemon",class:"col position-relative"},ue={class:"row h-50"},pe={id:"player-2-pokemon",class:"col position-relative"},de={id:"player-2-status",class:"col"},me={__name:"GameField.module",props:{player1Data:Object|String,player2Data:Object|String},async setup(e){let n,t;const{getData:a}=m(),s=e;[n,t]=V(()=>a()),await n,t();const c=u(()=>s.player1Data.pokemons.contents&&s.player1Data.pokemons.contents[s.player1Data.currentPoke]),l=u(()=>s.player2Data.pokemons.contents&&s.player2Data.pokemons.contents[s.player2Data.currentPoke]);return(k,v)=>(r(),i("div",oe,[se,o("div",ce,[o("div",re,[o("div",le,[d(H,{pokemon:c.value},null,8,["pokemon"])]),o("div",ie,[d(B,{pokemon:c.value,side:"Front",playerNr:"1"},null,8,["pokemon"])])]),o("div",ue,[o("div",pe,[d(B,{pokemon:l.value,side:"Back",playerNr:"2"},null,8,["pokemon"])]),o("div",de,[d(H,{pokemon:l.value},null,8,["pokemon"])])])])]))}},_e=p(me,[["__scopeId","data-v-6ab5cd24"]]),ve={__name:"DecisionButton",props:{buttonType:String,text:String,onClickHandler:Function},setup(e){const n=e,t=u(()=>n.buttonType==="decideFight"?"fight-button":n.buttonType==="decideSwitch"?"switch-button":"");return(a,s)=>(r(),i("button",{onClick:s[0]||(s[0]=c=>e.onClickHandler(e.text)),class:z(`button-style ${t.value}`)},_(e.text),3))}},F=p(ve,[["__scopeId","data-v-fcafa6cd"]]),O={__name:"DecisionState",props:{player:Object},setup(e){const n=t=>{let a;switch(t){case"Fight!":a=1;break;case"Switch!":a=2;break}x.post(`${C.serverUrl}/api/decision`,{move:a})};return(t,a)=>(r(),i(f,null,[d(F,{buttonType:"decideFight",text:"Fight!",onClickHandler:n}),d(F,{buttonType:"decideSwitch",text:"Switch!",onClickHandler:n})],64))}},ke={__name:"AttackButton",props:{attack:Object,onClickHandler:Function,move:Number},setup(e){return(n,t)=>(r(),i("button",{onClick:t[0]||(t[0]=a=>e.onClickHandler(e.move)),class:"attack-button button-style fight-button small"},_(e.attack.name),1))}},he=p(ke,[["__scopeId","data-v-506b1068"]]),ye={__name:"FightingState",props:{player:Object,isTurn:Boolean},setup(e){const{showAttackAnimation:n}=m(),{pokemons:t}=y(I()),{getPokemonsData:a}=I(),s=e,c=u(()=>s.player.value.pokemons.contents[s.player.value.currentPoke]),l=u(()=>t.value.find(v=>v.name===c.value.pType).attacks),k=v=>{n(t.value.find(P=>P.name===c.value.pType).pokemonArt),x.post(`${C.serverUrl}/api/fighting`,{move:v})};return A(()=>{a()}),(v,P)=>(r(!0),i(f,null,D(l.value,(T,M)=>(r(),h(he,{attack:T,key:T.name,onClickHandler:k,move:M+1},null,8,["attack","move"]))),128))}},fe=e=>(b("data-v-6187cea5"),e=e(),$(),e),ge=["src"],be=fe(()=>o("br",null,null,-1)),$e={__name:"SwitchPokemonButton",props:{pokemon:Object,onClickHandler:Function,move:Number},setup(e){return(n,t)=>(r(),i("button",{onClick:t[0]||(t[0]=a=>e.onClickHandler(e.move)),class:"pokemon-button small"},[o("img",{class:"img-fluid",src:`/pokemons/${e.pokemon.pType}Front.gif`,style:{width:"10vh"},alt:""},null,8,ge),S(" "+_(e.pokemon.pType)+" ",1),be,S(" HP: "+_(e.pokemon.hp),1)]))}},Se=p($e,[["__scopeId","data-v-6187cea5"]]),we={__name:"SwitchPokemonState",props:{player:Object,isTurn:Boolean},setup(e){const n=e,t=a=>{x.post(`${C.serverUrl}/api/switch`,{move:a})};return(a,s)=>(r(!0),i(f,null,D(n.player.value.pokemons.contents,(c,l)=>(r(),h(Se,{pokemon:c,key:c.pType.name,onClickHandler:t,move:l+1},null,8,["pokemon","move"]))),128))}},xe={class:"container"},Ce={id:"menu-field",class:"mx-auto menu-field"},De={class:"turn"},Pe={class:"menu-wrapper"},Te={__name:"GameMenu.module",setup(e){const{gameState:n,player1:t,player2:a,gameTurn:s}=y(m()),c=u(()=>s.value===1?t:a),l=u(()=>{switch(n.value){case"DesicionState()":return O;case"FightingState()":return ye;case"SwitchPokemonState()":return we;default:return O}});return(k,v)=>(r(),i("div",xe,[o("div",Ce,[o("div",De," It's your turn "+_(c.value.value.name)+" ! ",1),o("div",Pe,[(r(),h(L(l.value),{player:c.value},null,8,["player"]))])])]))}},Ie=p(Te,[["__scopeId","data-v-9acd40d8"]]),Be={__name:"ChatArea",setup(e){const{chatMessages:n}=y(m());return(t,a)=>{const s=U("v-list");return r(),h(s,{class:"chat-area",id:"chat-area"},{default:w(()=>[(r(!0),i(f,null,D(g(n),(c,l)=>(r(),i("v-list-item",{key:l},[o("v-list-item-content",null,_(c),1)]))),128))]),_:1})}}},He=p(Be,[["__scopeId","data-v-c9385f44"]]),N=e=>(b("data-v-4f5c06b8"),e=e(),$(),e),Fe={class:"chat",id:"app"},Oe=N(()=>o("div",{class:"row chat-title"},"Chat",-1)),je={class:"row",style:{display:"flex","justify-content":"center"}},Ae={class:"row",style:{display:"flex"}},Ne=N(()=>o("button",{class:"send-button",type:"submit"},"Send",-1)),Me={__name:"Chat.module",props:{currentPlayerData:{type:Object,required:!0}},setup(e){const{sendChatMessage:n}=m(),t=e,a=q(""),s=()=>{const c=`${t.currentPlayerData.name}: ${a.value.trim()}`;console.log("sendMessage",JSON.stringify({msg:c})),n(c),a.value=""};return(c,l)=>(r(),i("div",Fe,[Oe,o("div",je,[d(He)]),o("div",Ae,[o("form",{class:"send-message",onSubmit:E(s,["prevent"])},[J(o("textarea",{class:"send-message-textarea","onUpdate:modelValue":l[0]||(l[0]=k=>a.value=k),maxlength:"100"},null,512),[[R,a.value]]),Ne],32)])]))}},Ge=p(Me,[["__scopeId","data-v-4f5c06b8"]]),Ve=e=>(b("data-v-d9a55a4b"),e=e(),$(),e),ze={class:"row game-view"},Le={class:"container-fluid"},Ue=Ve(()=>o("div",{class:"spinner-border text-primary",role:"status"},[o("span",{class:"visually-hidden"},"Loading...")],-1)),qe={__name:"Game",setup(e){const{getData:n}=m(),{player1:t,player2:a,chatOpen:s,gameTurn:c}=y(m()),l=u(()=>c.value===1?t.value:a.value);return A(async()=>{await n()}),(k,v)=>(r(),i("main",null,[o("div",ze,[g(s)?(r(),h(Ge,{key:0,currentPlayerData:l.value},null,8,["currentPlayerData"])):j("",!0),(r(),h(W,null,{fallback:w(()=>[Ue]),default:w(()=>[o("div",Le,[d(_e,{player1Data:g(t),player2Data:g(a)},null,8,["player1Data","player2Data"]),d(Ie)])]),_:1}))])]))}},Re=p(qe,[["__scopeId","data-v-d9a55a4b"]]);export{Re as default};
