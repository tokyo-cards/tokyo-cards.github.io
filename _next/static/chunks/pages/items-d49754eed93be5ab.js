(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[689],{83:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/items",function(){return a(7321)}])},6694:function(e,t,a){"use strict";a.d(t,{X7:function(){return d},CZ:function(){return f}});var n=a(5893),s=a(5769),r=(a(7011),a(1411)),i=a(6447),o=a(7294),l=a(7431);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){c(e,t,a[t])}))}return e}function d(e){var t=e.fogColor,a=e.pntLgtPos,s=e.boxTexture,r=e.isBox,l=e.objPos,c=e.objScale,u=e.isSquareCard,d=e.fastSpin;return(0,n.jsx)(i.Xz,{children:(0,n.jsxs)(o.Suspense,{fallback:null,children:[(0,n.jsx)("fog",{attach:"fog",args:t}),(0,n.jsx)("pointLight",{position:a}),(0,n.jsx)(x,{position:l||[0,0,2],rotation:[0,-.2,0],boxTexture:s,isBox:r,objScale:c,isSquareCard:u,fastSpin:d})]})})}function x(e){var t=(0,s.m)(e.boxTexture),a=(0,o.useRef)(null);(0,i.xQ)((function(t,n){return e.fastSpin?a.current.rotation.x=a.current.rotation.y+=.2*n:a.current.rotation.y+=.005}));var r=[2,2,2];return e.boxTexture?(e.isBox||(r=e.isSquareCard?[2.5,2.5,.01]:[1.6,3.2,.01]),(0,n.jsxs)("mesh",u({},e,{ref:a,rotation:e.isBox?[Math.PI/-8,0,0]:[0,0,0],scale:e.objScale,children:[(0,n.jsx)("boxGeometry",{args:r}),(0,n.jsx)("meshStandardMaterial",{map:t})]}))):(0,n.jsx)(l.wW,{})}function m(e){var t=(0,i.U2)(r.y,"/three_d/treasure/source/treasure.fbx"),a=(0,o.useRef)(null),l="/three_d/treasure/textures/",c=(0,s.m)("".concat(l,"treasure01_initialShadingGroup_BaseColor.jpg")),d=((0,s.m)("".concat(l,"treasure01_initialShadingGroup_Metalness.jpg")),(0,s.m)("".concat(l,"treasure01_initialShadingGroup_Normal.jpg"))),x=(0,s.m)("".concat(l,"treasure01_initialShadingGroup_Roughness.jpg")),m=(0,s.m)("".concat(l,"internal_ground_ao_texture.jpeg")),f=(0,o.useMemo)((function(){var e;return t.traverse((function(t){"Mesh"===t.type&&(e=t.geometry)})),e}),[t]);return(0,i.xQ)((function(e,t){return a.current.rotation.y+=.005})),(0,n.jsx)("mesh",u({},e,{geometry:f,ref:a,scale:.4,rotation:[Math.PI/-8,0,0],children:(0,n.jsx)("meshPhysicalMaterial",{map:c,normalMap:d,roughnessMap:x,aoMap:m})}))}function f(){return(0,n.jsx)(i.Xz,{children:(0,n.jsxs)(o.Suspense,{fallback:null,children:[(0,n.jsx)("pointLight",{position:[10,10,10],color:"white"}),(0,n.jsx)(m,{position:[0,-3,0]})]})})}},7321:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return b}});var n=a(5893),s=a(7294),r=a(7039),i=a(29),o=a(9795),l=a(856),c=a(7431),u=a(3153),d=a(1163),x=a(6413),m=a(6976),f=a(6694);function h(e){var t=e.isBox,a=e.item_id,s=(0,o.Ge)(),i=s.library,d=s.account,x=s.chainId,f=(0,r.$G)().t;return x?(0,l.MR)(x)?(0,n.jsxs)("div",{className:"flex flex-wrap space-around h-full content-between font-cursive text-diablo-dark-gold",children:[(0,n.jsxs)("div",{className:"w-full",children:[f("items.total_supply"),":",(0,n.jsx)(m.Ms,{className:"inline mx-2",method:"totalSupply",token_id:a,library:i,account:d,chainId:x,isBox:t})]}),(0,n.jsxs)("div",{className:"w-full mb-2",children:[f("items.owns"),":",(0,n.jsx)(m.Ms,{className:"inline mx-2",method:"balanceOf",token_id:a,library:i,account:d,chainId:x,isBox:t})]}),(0,n.jsx)("div",{className:"w-full border-t-2 pt-2 border-obsidian-gold",children:t?(0,n.jsx)(m.tQ,{method:"unpack",token_id:a,library:i,account:d,chainId:x}):null})]}):(0,n.jsx)(c.V9,{message:f("temple.unsupported_chain"),Icon:ExclamationIcon}):(0,n.jsx)(c.V9,{message:f("temple.connect_wallet"),Icon:u.oAu})}function b(){var e=(0,r.$G)().t,t=((0,r.$G)("raw").t_raw,(0,s.useState)([])),a=t[0],o=t[1],l=(0,s.useState)(void 0),m=l[0],b=l[1],p=(0,s.useState)(!1),g=p[0],j=p[1],v=(0,s.useState)(void 0),w=v[0],y=v[1],N=(0,s.useState)(!1),_=N[0],k=N[1],S=(0,s.useState)(!1),P=S[0],B=S[1],O=(0,d.useRouter)();return(0,s.useEffect)((function(){var e=(0,x.B6)("id");b(e),(x.PZ.indexOf(parseInt(e))>-1||x.xn.indexOf(parseInt(e))>-1)&&B(!0);var t="box"==(0,x.B6)("asset_type")?"box":"items";"box"==t&&k(!0);var a=1!=window.history.length,n=function(e,t,a){return"en"===e?"https://tokyo.cards/api/".concat(t,"/").concat(a,"/"):"https://tokyo.cards/api/locale/".concat(e,"/").concat(t,"/").concat(a,"/")}((0,x.B6)("lang")?(0,x.B6)("lang"):"en",t,e);fetch(n).then((function(e){return e.json()})).then((function(e){j(!1),o(e),y(a)}))}),[]),g||!a?(0,n.jsx)(c.wW,{}):(0,n.jsxs)(i.Z,{pageTitle:"tokyo.cards",children:[(0,n.jsx)("button",{className:" hover:bg-obsidian-dark block h-14 w-14 bg-diablo-dark-gold rounded-full fixed z-40 bottom-5 right-5 drop-shadow-lg text-white ",onClick:function(){var e=(0,x.B6)("lang")?(0,x.B6)("lang"):"en";w?O.push("/temple?lang=".concat(e,"&tab=2")):O.push("/?lang=".concat(e))},children:w?(0,n.jsx)(u.Y4O,{className:"h-8 w-8 m-auto"}):(0,n.jsx)(u.tvw,{className:"h-8 w-8 m-auto"})}),(0,n.jsxs)("section",{className:"deck-section py-5 h-20",children:[(0,n.jsx)("div",{className:"flex flex-row mx-auto w-1/3 text-cinnabar",children:(0,n.jsx)("div",{className:"border-obsidian-gold border-b-2 w-1/2 m-auto",children:" "})}),(0,n.jsx)("span",{className:"w-1/3 mx-auto lufddo text-center lg:text-2xl text-diablo-dark-gold place-self-center",children:(0,n.jsxs)("div",{className:"font-cursive text-diablo-dark-gold text-xl",children:[" ",e("items.detail")," "]})}),(0,n.jsx)("div",{className:"flex flex-row mx-auto w-1/3 text-cinnabar",children:(0,n.jsx)("div",{className:"border-obsidian-gold border-b-2 w-1/2 m-auto",children:" "})})]}),(0,n.jsxs)("section",{className:"flex flex-wrap gap-5 m-3",children:[(0,n.jsx)("div",{className:"w-full h-96 relative border-diablo-dark-gold rounded-lg text-center lg:w-6/12",children:a.image?(0,n.jsx)(f.X7,{fastSpin:!1,objScale:1,objPos:void 0,fogColor:["#0E93AD",0,1e3],pntLgtPos:[10,10,10],boxTexture:a.image,isSquareCard:P,isBox:_}):(0,n.jsx)(c.wW,{})}),(0,n.jsxs)("div",{className:"text-cinnabar w-full lg:w-5/12 flex flex-wrap gap-4",children:[(0,n.jsxs)("div",{className:"bg-obsidian-gray w-full p-4 rounded-lg",children:[a.attributes&&_&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"text-2xl font-cursive text-rarity-artifact",children:a&&a.name}),(0,n.jsx)("div",{className:"text-base font-cursive text-diablo-dark-gold",children:e("items.limited")}),(0,n.jsx)("div",{className:"text-sm font-cursive text-diablo-dark-gold",children:e("items.box")}),(0,n.jsxs)("div",{className:"text-xs font text-rarity-uncommon",children:[a.attributes[0].value," ",e("items.item_inside")]})]}),a.attributes&&!_&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"text-2xl font-cursive text-".concat((0,x.kg)((0,x.PJ)("Rarity",a.attributes).value)),children:a&&a.name}),(0,n.jsx)("div",{className:"text-base font-cursive text-".concat((0,x.kg)((0,x.PJ)("Rarity",a.attributes).value)),children:e((0,x.PJ)("Rarity",a.attributes).value)}),(0,n.jsx)("div",{className:"text-sm font-cursive text-diablo-dark-gold",children:e((0,x.PJ)("Card Type",a.attributes).value)})]}),(0,n.jsx)("div",{className:"text-xs text-rarity-artifact",children:a&&a.description})]}),(0,n.jsx)("div",{className:"text-cinnabar p-4 rounded-lg w-full bg-obsidian-gray",children:(0,n.jsx)(h,{isBox:_,item_id:m})})]}),(0,n.jsx)("div",{className:"text-cinnabar flex flex-wrap gap-2 text-center justify-start place-content-center w-full",children:a.attributes&&!_&&a.attributes.map((function(e,t){return"Name"==e.trait_type?null:(0,n.jsxs)("div",{className:"text-sm rounded-lg h-24 w-24 p-2 bg-obsidian-gray relative",children:[(0,n.jsx)("div",{className:"absolute",children:e.trait_type},"title-".concat(t)),(0,n.jsx)("div",{className:"absolute top-10 w-20 text-".concat((0,x.kg)(e.value)),children:e.value},"value-".concat(t))]},"c-".concat(t))}))},"traits")]})]})}}},function(e){e.O(0,[774,523,112,737,345,734,197,888,179],(function(){return t=83,e(e.s=t);var t}));var t=e.O();_N_E=t}]);