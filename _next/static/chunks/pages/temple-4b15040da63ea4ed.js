(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[861],{6592:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/temple",function(){return o(998)}])},6694:function(e,t,o){"use strict";o.d(t,{X7:function(){return p},CZ:function(){return g}});var n=o(5893),a=o(5769),r=(o(7011),o(1411)),s=(o(1217),o(5147)),i=o(7294),l=o(7431),c=o(9521),d=o(3157),u=o(5960);function x(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function m(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},n=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),n.forEach((function(t){x(e,t,o[t])}))}return e}function b(){var e=(0,c.S)().progress;return(0,n.jsx)(d.V,{center:!0,children:(0,n.jsx)("div",{className:"w-96 h-96",children:(0,n.jsx)("div",{className:"h-2 bg-gradient-to-r from-razzmatazz to-blue-500 rounded-lg",children:(0,n.jsx)("div",{className:"h-2 bg-diablo-dark-gold rounded-lg w-".concat(e.toFixed(),"%")})})})})}function p(e){var t=e.fogColor,o=e.pntLgts,a=e.boxTexture,r=e.isBox,l=e.objPos,c=e.objScale,d=e.isSquareCard,x=e.fastSpin;return(0,n.jsx)(s.Xz,{children:(0,n.jsxs)(i.Suspense,{fallback:null,children:[(0,n.jsx)("fog",{attach:"fog",args:t}),o.map((function(e,t){return(0,n.jsx)("pointLight",{position:e.position,color:e.color},"light-".concat(t))})),(0,n.jsx)(f,{position:l||[0,0,2],rotation:[0,-.2,0],boxTexture:a,isBox:r,objScale:c,isSquareCard:d,fastSpin:x}),(0,n.jsx)(u.xC,{multisampling:8,children:(0,n.jsx)(u.dp,{kernelSize:1,luminanceThreshold:0,luminanceSmoothing:.4,intensity:.2})})]})})}function f(e){var t=(0,a.m)(e.boxTexture),o=(0,i.useRef)(null);(0,s.xQ)((function(t,n){return e.fastSpin?o.current.rotation.x=o.current.rotation.y+=.2*n:o.current.rotation.y+=.005}));var r=[2,2,2];return e.boxTexture?(e.isBox||(r=e.isSquareCard?[2.5,2.5,.01]:[1.6,3.2,.01]),(0,n.jsxs)("mesh",m({},e,{ref:o,rotation:e.isBox?[Math.PI/-8,0,0]:[0,0,0],scale:e.objScale,children:[(0,n.jsx)("boxGeometry",{args:r}),(0,n.jsx)("meshStandardMaterial",{map:t})]}))):(0,n.jsx)(l.wW,{})}function h(e){var t=(0,s.U2)(r.y,"/three_d/treasure/source/treasure.fbx"),o=(0,i.useRef)(null),l="/three_d/treasure/textures/",c=(0,a.m)("".concat(l,"treasure01_initialShadingGroup_BaseColor.jpg")),d=((0,a.m)("".concat(l,"treasure01_initialShadingGroup_Metalness.jpg")),(0,a.m)("".concat(l,"treasure01_initialShadingGroup_Normal.jpg"))),u=(0,a.m)("".concat(l,"treasure01_initialShadingGroup_Roughness.jpg")),x=(0,a.m)("".concat(l,"internal_ground_ao_texture.jpeg")),b=(0,i.useMemo)((function(){var e;return t.traverse((function(t){"Mesh"===t.type&&(e=t.geometry)})),e}),[t]);return(0,s.xQ)((function(e,t){return o.current.rotation.y+=.005})),(0,n.jsx)("mesh",m({},e,{geometry:b,ref:o,scale:.4,rotation:[Math.PI/-8,0,0],children:(0,n.jsx)("meshPhysicalMaterial",{map:c,normalMap:d,roughnessMap:u,aoMap:x})}))}function g(){return(0,n.jsx)(s.Xz,{children:(0,n.jsxs)(i.Suspense,{fallback:(0,n.jsx)(b,{}),children:[(0,n.jsx)("pointLight",{position:[10,20,50],color:"white"}),(0,n.jsx)("pointLight",{position:[-10,-10,-10],color:"gold"}),(0,n.jsx)(h,{position:[0,-3,0]})]})})}},998:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return w}});var n=o(5893),a=o(29),r=o(7294),s=o(9795),i=o(1163),l=o(1436),c=o(2814),d=o(856),u=o(7039),x=o(7431),m=o(6413),b=o(3801),p=o(6694),f=o(6976),h=[{title:"Omikuji",Icon:l.PPh,Comp:function(){var e=(0,s.Ge)(),t=e.library,o=e.account,a=e.chainId,r=(0,u.$G)().t;if(!a)return(0,n.jsx)(x.V9,{message:r("temple.connect_wallet"),Icon:b.oAu});if(!(0,d.MR)(a))return(0,n.jsx)(x.V9,{message:r("temple.unsupported_chain"),Icon:b.SI8});return(0,n.jsx)("div",{className:"font-cursive text-diablo-dark-gold h-auto",children:(0,n.jsxs)("div",{className:"flex flex-wrap h-full p-3 gap-2 justify-between",children:[(0,n.jsxs)("div",{className:"w-full md:w-5/12 border-2 border-diablo-dark-gold rounded-lg",children:[(0,n.jsx)("div",{className:"w-full h-64",children:(0,n.jsx)(p.X7,{fastSpin:!1,isSquareCard:!1,objScale:1.3,fogColor:["#0E93AD",0,1e3],objPos:[0,0,0],pntLgts:[{position:[10,20,50],color:"white"},{position:[-10,-10,-10],color:"red"}],boxTexture:"/images/box/1.jpg",isBox:!0})}),(0,n.jsx)("div",{className:"w-full h-full p-2",children:(0,n.jsx)(f.Rb,{chainId:a,account:o,library:t,eventChainId:137,totalSellOrder:2e3,tokenId:1,assetName:r("lootbox.omikuji.name"),assetDescription:r("lootbox.omikuji.description"),assetPrice:"200",className:"px-4 py-2 m-2 text-diablo-dark-gold mt-3 border-2 border-diablo-dark-gold",innerText:r("lootbox.purchase")})})]}),(0,n.jsxs)("div",{className:"w-full md:w-5/12 border-2 border-diablo-dark-gold rounded-lg",children:[(0,n.jsx)("div",{className:"w-full h-64",children:(0,n.jsx)(p.X7,{fastSpin:!1,isSquareCard:!1,objScale:1.3,fogColor:["#0E93AD",0,1e3],objPos:[0,0,0],pntLgts:[{position:[10,20,50],color:"white"},{position:[-10,-10,-10],color:"gold"}],boxTexture:"/images/box/2.jpg",isBox:!0})}),(0,n.jsx)("div",{className:"w-full h-full p-2",children:(0,n.jsx)(f.Rb,{chainId:a,account:o,library:t,eventChainId:137,totalSellOrder:500,tokenId:2,assetName:r("lootbox.omamori.name"),assetDescription:r("lootbox.omamori.description"),assetPrice:"2000",className:"px-4 py-2 m-2 text-diablo-dark-gold mt-3 border-2 border-diablo-dark-gold",innerText:r("lootbox.purchase")})})]})]})},"omikuji")}},{title:"Souvenir",Icon:l.BHp,Comp:function(){var e=(0,s.Ge)(),t=e.library,o=e.account,a=e.chainId,r=(0,u.$G)().t;if(!a)return(0,n.jsx)(x.V9,{message:r("temple.connect_wallet"),Icon:b.oAu});if(!(0,d.MR)(a))return(0,n.jsx)(x.V9,{message:r("temple.unsupported_chain"),Icon:b.SI8});return(0,n.jsx)("div",{className:"font-cursive text-diablo-dark-gold h-auto",children:(0,n.jsxs)("div",{className:"flex flex-wrap h-full p-3 gap-2 justify-between",children:[(0,n.jsx)("div",{className:"w-full md:w-6/12 h-64 border-2 border-diablo-dark-gold rounded-lg",children:(0,n.jsx)(p.X7,{fastSpin:!1,isSquareCard:!1,objScale:1.3,fogColor:["#0E93AD",0,1e3],objPos:[0,0,0],pntLgts:[{position:[10,20,50],color:"white"},{position:[-10,-10,-10],color:"#0F93AD"}],boxTexture:"/images/box/0.jpg",isBox:!0})}),(0,n.jsx)("div",{className:"w-full md:w-5/12 h-full p-2",children:(0,n.jsx)(f.Rb,{chainId:a,account:o,library:t,eventChainId:137,totalSellOrder:10,tokenId:0,assetName:r("lootbox.omiyage.name"),assetDescription:r("lootbox.omiyage.description"),assetPrice:"100",className:"px-4 py-2 m-2 text-diablo-dark-gold mt-3 border-2 border-diablo-dark-gold",innerText:r("lootbox.purchase")})})]})},"omiyage")}},{title:"Inventory",Icon:l.X5K,Comp:function(){var e=(0,i.useRouter)(),t=(0,s.Ge)(),o=t.library,a=t.account,l=t.chainId,c=(0,r.useState)(void 0),m=c[0],p=c[1],f=(0,u.$G)().t;if((0,r.useEffect)((function(){if(l){var e=(0,d.UF)(l,a,null,null);p(void 0),fetch(e).then((function(e){return e.json()})).then((function(e){p(e)})).catch((function(e){console.log(e)}))}}),[l]),!l)return(0,n.jsx)(x.V9,{message:f("temple.connect_wallet"),Icon:b.oAu});if(!(0,d.MR)(l))return(0,n.jsx)(x.V9,{message:f("temple.unsupported_chain"),Icon:b.SI8});if(m){var h,g=j;return m.result?(h=m.result.filter((function(e){return null!=e.metadata})),g=v):h=m.assets,0==h.length?(0,n.jsx)(x.V9,{message:f("temple.inventory_empty"),Icon:b.xx7}):(0,n.jsx)("div",{className:"flex flex-wrap gap-7 text-center p-4 justify-between md:justify-start place-content-center m-2",children:m&&h.map((function(t,r){return(0,n.jsx)(g,{item:t,router:e,library:o,chainId:l,account:a},r)}))})}return(0,n.jsx)(x.wW,{})}}];function g(e){var t=e.className,o=e.item,a=e.trait;return"box"==(0,m.YF)(o)?(0,n.jsx)(n.Fragment,{}):(0,n.jsx)("div",{className:t,children:(0,m.PJ)(a,o.traits).value})}function j(e){var t=e.item,o=e.router,a=e.library,r=e.chainId,s=e.account,i=(0,m.kh)(t);return i?(0,n.jsxs)("button",{className:"w-18 h-18 pb-full border-".concat((0,m.s2)(t)," p-4  border-2 rounded-lg relative"),onClick:function(){var e=(0,m.B6)("lang")?(0,m.B6)("lang"):"en";o.push("/items?id=".concat(t.token_id,"&asset_type=").concat((0,m.YF)(t),"&lang=").concat(e))},children:[(0,n.jsx)(g,{item:t,trait:"Inscription",className:"absolute -left-3 -bottom-3 bg-".concat((0,m.s2)(t)," w-auto h-6 text-centerk rounded-full text-xs py-1 px-2")}),(0,n.jsx)(g,{item:t,trait:"Deck",className:"absolute -left-3 -top-3 bg-".concat((0,m.s2)(t)," w-auto h-6 text-centerk rounded-full text-xs py-1 px-2")}),(0,n.jsx)(f.Ms,{method:"balanceOf",token_id:t.token_id,library:a,chainId:r,account:s,isBox:"box"==(0,m.YF)(t),className:"absolute -right-3 -bottom-3 bg-".concat((0,m.s2)(t)," w-auto h-6 text-centerk rounded-full text-xs py-1 px-2")}),(0,n.jsx)(i,{className:"h-12 w-12"})]},t.token_id):(0,n.jsx)(n.Fragment,{})}function v(e){var t=e.item,o=e.router,a=e.library,r=e.chainId,s=e.account,i=JSON.parse(t.metadata),l={traits:i.attributes,token_id:t.token_id,name:i.name},c=(0,m.kh)(l);return c?(0,n.jsxs)("button",{className:"w-18 h-18 pb-full border-".concat((0,m.s2)(l)," p-4  border-2 rounded-lg relative"),onClick:function(){var e=(0,m.B6)("lang")?(0,m.B6)("lang"):"en";o.push("/items?id=".concat(l.token_id,"&asset_type=").concat((0,m.YF)(l),"&lang=").concat(e))},children:[(0,n.jsx)(g,{item:l,trait:"Inscription",className:"absolute -left-3 -bottom-3 bg-".concat((0,m.s2)(l)," w-auto h-6 text-centerk rounded-full text-xs py-1 px-2")}),(0,n.jsx)(g,{item:l,trait:"Deck",className:"absolute -left-3 -top-3 bg-".concat((0,m.s2)(l)," w-auto h-6 text-centerk rounded-full text-xs py-1 px-2")}),(0,n.jsx)(f.Ms,{method:"balanceOf",token_id:l.token_id,library:a,chainId:r,account:s,isBox:"box"==(0,m.YF)(l),className:"absolute -right-3 -bottom-3 bg-".concat((0,m.s2)(l)," w-auto h-6 text-centerk rounded-full text-xs py-1 px-2")}),(0,n.jsx)(c,{className:"h-12 w-12"})]},l.token_id):(0,n.jsx)(n.Fragment,{})}function w(){var e=(0,u.$G)().t,t=(0,r.useState)({index:0}),o=t[0],s=t[1];return(0,r.useEffect)((function(){var e=parseInt((0,m.B6)("tab"))?parseInt((0,m.B6)("tab")):0;s({index:e})}),[]),(0,n.jsxs)(a.Z,{pageTitle:"tokyo.cards",children:[(0,n.jsxs)("section",{className:"deck-section py-5 h-20",children:[(0,n.jsx)("div",{className:"flex flex-row mx-auto w-1/3 text-cinnabar",children:(0,n.jsx)("div",{className:"border-obsidian-gold border-b-2 w-1/2 m-auto",children:" "})}),(0,n.jsx)("span",{className:"w-1/3 mx-auto lufddo text-center lg:text-2xl text-diablo-dark-gold place-self-center",children:(0,n.jsx)("div",{className:"font-cursive text-diablo-dark-gold text-xl",children:e("temple.".concat(h[o.index].title.toLowerCase()))})}),(0,n.jsx)("div",{className:"flex flex-row mx-auto w-1/3 text-cinnabar",children:(0,n.jsx)("div",{className:"border-obsidian-gold border-b-2 w-1/2 m-auto",children:" "})})]}),(0,n.jsx)("section",{className:"text-white",children:(0,n.jsxs)("div",{className:"grid grid-cols-10 gap-2 my-3",children:[(0,n.jsx)("div",{className:"col-span-8 rounded-br-lg rounded-tr-lg sm:rounded-lg bg-obsidian-dark",children:h.map((function(e,t){var a=e.Comp;if(o.index==t)return(0,n.jsx)(a,{},t)}))}),(0,n.jsx)("div",{className:"col-span-2",children:h.map((function(t,a){var r=t.title,i=t.Icon;return(0,n.jsxs)("button",{className:"w-full p-2  mb-2 flex auto-padding border-l-4 rounded border-".concat(o.index==a?"diablo-dark-gold":"obsidian-gold"),onClick:function(){!function(e){(0,m.I1)("tab",e),s({index:e})}(a)},children:[(0,n.jsx)(c.G,{icon:i,className:"w-6 mx-1 text-2xl text-".concat(o.index==a?"diablo-dark-gold":"obsidian-gold")},"i-".concat(a)),(0,n.jsx)("span",{className:"font-cursive text-".concat(o.index==a?"diablo-dark-gold":"obsidian-gold"," hidden sm:block ml-2"),children:e("temple.".concat(r.toLowerCase()))},"s-".concat(a))]},"b-".concat(a))}))})]})})]})}}},function(e){e.O(0,[774,523,112,737,444,345,885,197,888,179],(function(){return t=6592,e(e.s=t);var t}));var t=e.O();_N_E=t}]);