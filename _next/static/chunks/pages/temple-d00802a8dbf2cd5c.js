(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[861],{6592:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/temple",function(){return o(998)}])},6694:function(e,t,o){"use strict";o.d(t,{X7:function(){return m},ZP:function(){return b},lf:function(){return j}});var n=o(5893),r=o(5769),a=o(7011),s=(o(9854),o(1217),o(4232)),i=o(7294),l=o(7431),c=o(5960),d=o(5449);function u(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function x(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},n=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),n.forEach((function(t){u(e,t,o[t])}))}return e}function m(e){var t=e.fogColor,o=e.pntLgts,r=e.boxTexture,a=e.isBox,l=e.objPos,d=e.objScale,u=e.isSquareCard,x=e.fastSpin;return(0,n.jsx)(s.Xz,{children:(0,n.jsxs)(i.Suspense,{fallback:null,children:[(0,n.jsx)("fog",{attach:"fog",args:t}),o.map((function(e,t){return(0,n.jsx)("pointLight",{position:e.position,color:e.color},"light-".concat(t))})),(0,n.jsx)(p,{position:l||[0,0,2],rotation:[0,-.2,0],boxTexture:r,isBox:a,objScale:d,isSquareCard:u,fastSpin:x}),(0,n.jsx)(c.xC,{multisampling:8,children:(0,n.jsx)(c.dp,{kernelSize:1,luminanceThreshold:0,luminanceSmoothing:.4,intensity:.2})})]})})}function b(e){var t=e.fogColor,o=e.pntLgts,r=e.boxTexture,a=(e.isBox,e.objPos),l=e.objScale,d=e.isSquareCard;e.fastSpin;return(0,n.jsx)(s.Xz,{children:(0,n.jsxs)(i.Suspense,{fallback:null,children:[(0,n.jsx)("fog",{attach:"fog",args:t}),o.map((function(e,t){return(0,n.jsx)("pointLight",{position:e.position,color:e.color},"light-".concat(t))})),(0,n.jsx)(f,{position:a||[0,0,2],rotation:[0,-.2,0],boxTexture:r,objScale:l,isSquareCard:d}),(0,n.jsx)(c.xC,{multisampling:8,children:(0,n.jsx)(c.dp,{kernelSize:1,luminanceThreshold:0,luminanceSmoothing:.4,intensity:.2})})]})})}function f(e){var t=(0,i.useState)(!1),o=t[0],a=t[1],c=(0,d.useSpring)({scale:o?1.2:.8,config:d.config.wobbly}).scale,u=(0,r.m)(e.boxTexture),m=(0,i.useRef)(null);(0,s.xQ)((function(e,t){return m.current.rotation.x=m.current.rotation.y+=.2*t}));return e.boxTexture?(0,n.jsxs)(d.q.mesh,x({},e,{ref:m,scale:c,onClick:function(){return a(!o)},children:[(0,n.jsx)("boxGeometry",{args:[2,2,2]}),(0,n.jsx)("meshStandardMaterial",{map:u})]})):(0,n.jsx)(l.wW,{})}function p(e){var t=(0,r.m)(e.boxTexture),o=(0,i.useRef)(null);(0,s.xQ)((function(t,n){return e.fastSpin?o.current.rotation.x=o.current.rotation.y+=.2*n:o.current.rotation.y+=.005}));var a=[2,2,2];return e.boxTexture?(e.isBox||(a=e.isSquareCard?[2.5,2.5,.01]:[1.6,3.2,.01]),(0,n.jsxs)("mesh",x({},e,{ref:o,rotation:e.isBox?[Math.PI/-8,0,0]:[0,0,0],scale:e.objScale,children:[(0,n.jsx)("boxGeometry",{args:a}),(0,n.jsx)("meshStandardMaterial",{map:t})]}))):(0,n.jsx)(l.wW,{})}function h(e){var t=(0,s.U2)(a.L,"/three_d/gem/source/gem.obj"),o=(0,i.useRef)(null);return(0,s.xQ)((function(e,t){return o.current.rotation.y+=.005})),(0,n.jsx)("primitive",x({},e,{ref:o,scale:.8,rotation:[0,0,0],object:t}))}function j(){return(0,n.jsx)(s.Xz,{children:(0,n.jsxs)(i.Suspense,{fallback:null,children:[(0,n.jsx)("pointLight",{position:[10,10,10],color:"#0F93AD"}),(0,n.jsx)(h,{position:[0,-2,0]}),(0,n.jsx)(c.xC,{multisampling:8,children:(0,n.jsx)(c.dp,{kernelSize:1,luminanceThreshold:0,luminanceSmoothing:.4,intensity:.2})})]})})}},998:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return k}});var n=o(5893),r=o(4032),a=o(7294),s=o(9795),i=o(1163),l=o(1436),c=o(2814),d=o(856),u=o(7039),x=o(7431),m=o(6413),b=o(3801),f=o(6694),p=o(6976),h=[{title:"Omikuji",Icon:l.PPh,Comp:function(){var e=(0,s.Ge)(),t=e.library,o=e.account,r=e.chainId,a=(0,u.$G)().t;if(!r)return(0,n.jsx)(x.V9,{message:a("temple.connect_wallet"),Icon:b.oAu});if(!(0,d.MR)(r))return(0,n.jsx)(x.V9,{message:a("temple.unsupported_chain"),Icon:b.SI8});return(0,n.jsx)("div",{className:"font-cursive text-diablo-dark-gold h-auto",children:(0,n.jsxs)("div",{className:"flex flex-wrap h-full p-3 gap-2 justify-between",children:[(0,n.jsxs)("div",{className:"w-full md:w-5/12 border-2 border-diablo-dark-gold rounded-lg",children:[(0,n.jsx)("div",{className:"w-full h-64",children:(0,n.jsx)(f.X7,{fastSpin:!1,isSquareCard:!1,objScale:1.3,fogColor:["#0E93AD",0,1e3],objPos:[0,0,0],pntLgts:[{position:[10,20,50],color:"white"},{position:[-10,-10,-10],color:"red"}],boxTexture:"/images/box/1.jpg",isBox:!0})}),(0,n.jsx)("div",{className:"w-full h-full p-2",children:(0,n.jsx)(p.Rb,{chainId:r,account:o,library:t,eventChainId:137,totalSellOrder:4e3,tokenId:1,assetName:a("lootbox.omikuji.name"),assetDescription:a("lootbox.omikuji.description"),assetPrice:"200",className:"px-4 py-2 m-2 text-diablo-dark-gold mt-3 border-2 border-diablo-dark-gold",innerText:a("lootbox.purchase")})})]}),(0,n.jsxs)("div",{className:"w-full md:w-5/12 border-2 border-diablo-dark-gold rounded-lg",children:[(0,n.jsx)("div",{className:"w-full h-64",children:(0,n.jsx)(f.X7,{fastSpin:!1,isSquareCard:!1,objScale:1.3,fogColor:["#0E93AD",0,1e3],objPos:[0,0,0],pntLgts:[{position:[10,20,50],color:"white"},{position:[-10,-10,-10],color:"gold"}],boxTexture:"/images/box/2.jpg",isBox:!0})}),(0,n.jsx)("div",{className:"w-full h-full p-2",children:(0,n.jsx)(p.Rb,{chainId:r,account:o,library:t,eventChainId:137,totalSellOrder:2e3,tokenId:2,assetName:a("lootbox.omamori.name"),assetDescription:a("lootbox.omamori.description"),assetPrice:"2000",className:"px-4 py-2 m-2 text-diablo-dark-gold mt-3 border-2 border-diablo-dark-gold",innerText:a("lootbox.purchase")})})]})]})},"omikuji")}},{title:"Souvenir",Icon:l.BHp,Comp:function(){var e=(0,s.Ge)(),t=e.library,o=e.account,r=e.chainId,a=(0,u.$G)().t;if(!r)return(0,n.jsx)(x.V9,{message:a("temple.connect_wallet"),Icon:b.oAu});if(!(0,d.MR)(r))return(0,n.jsx)(x.V9,{message:a("temple.unsupported_chain"),Icon:b.SI8});return(0,n.jsx)("div",{className:"font-cursive text-diablo-dark-gold h-auto",children:(0,n.jsxs)("div",{className:"flex flex-wrap h-full p-3 gap-2 justify-between",children:[(0,n.jsx)("div",{className:"w-full md:w-6/12 h-64 border-2 border-diablo-dark-gold rounded-lg",children:(0,n.jsx)(f.X7,{fastSpin:!1,isSquareCard:!1,objScale:1.3,fogColor:["#0E93AD",0,1e3],objPos:[0,0,0],pntLgts:[{position:[10,20,50],color:"white"},{position:[-10,-10,-10],color:"#0F93AD"}],boxTexture:"/images/box/0.jpg",isBox:!0})}),(0,n.jsx)("div",{className:"w-full md:w-5/12 h-full p-2",children:(0,n.jsx)(p.Rb,{chainId:r,account:o,library:t,eventChainId:137,totalSellOrder:39830,tokenId:0,assetName:a("lootbox.omiyage.name"),assetDescription:a("lootbox.omiyage.description"),assetPrice:"25",className:"px-4 py-2 m-2 text-diablo-dark-gold mt-3 border-2 border-diablo-dark-gold",innerText:a("lootbox.purchase")})})]})},"omiyage")}},{title:"Inventory",Icon:l.X5K,Comp:function(){var e=(0,i.useRouter)(),t=(0,s.Ge)(),o=t.library,r=t.account,l=t.chainId,c=(0,a.useState)(void 0),m=c[0],f=c[1],p=(0,u.$G)().t;if((0,a.useEffect)((function(){if(l){var e=(0,d.UF)(l,r,null,null);f(void 0),fetch(e).then((function(e){return e.json()})).then((function(e){f(e)})).catch((function(e){console.log(e)}))}}),[l]),!l)return(0,n.jsx)(x.V9,{message:p("temple.connect_wallet"),Icon:b.oAu});if(!(0,d.MR)(l))return(0,n.jsx)(x.V9,{message:p("temple.unsupported_chain"),Icon:b.SI8});if(m){var h,j=g;return m.result?(h=m.result.filter((function(e){return null!=e.metadata})),j=v):h=m.assets,0==h.length?(0,n.jsx)(x.V9,{message:p("temple.inventory_empty"),Icon:b.xx7}):(0,n.jsx)("div",{className:"flex flex-wrap gap-7 text-center p-4 justify-between md:justify-start place-content-center m-2",children:m&&h.map((function(t,a){return(0,n.jsx)(j,{item:t,router:e,library:o,chainId:l,account:r},a)}))})}return(0,n.jsx)(x.wW,{})}}];function j(e){var t=e.className,o=e.item,r=e.trait;return"box"==(0,m.YF)(o)?(0,n.jsx)(n.Fragment,{}):(0,n.jsx)("div",{className:t,children:(0,m.PJ)(r,o.traits).value})}function g(e){var t=e.item,o=e.router,r=e.library,a=e.chainId,s=e.account,i=(0,m.kh)(t);return i?(0,n.jsxs)("button",{className:"w-18 h-18 pb-full border-".concat((0,m.s2)(t)," p-4  border-2 rounded-lg relative"),onClick:function(){var e=(0,m.B6)("lang")?(0,m.B6)("lang"):"en";o.push("/items?id=".concat(t.token_id,"&asset_type=").concat((0,m.YF)(t),"&lang=").concat(e))},children:[(0,n.jsx)(j,{item:t,trait:"Inscription",className:"absolute -left-3 -bottom-3 bg-".concat((0,m.s2)(t)," w-auto h-6 text-centerk rounded-full text-xs py-1 px-2")}),(0,n.jsx)(j,{item:t,trait:"Deck",className:"absolute -left-3 -top-3 bg-".concat((0,m.s2)(t)," w-auto h-6 text-centerk rounded-full text-xs py-1 px-2")}),(0,n.jsx)(p.Ms,{method:"balanceOf",token_id:t.token_id,library:r,chainId:a,account:s,isBox:"box"==(0,m.YF)(t),className:"absolute -right-3 -bottom-3 bg-".concat((0,m.s2)(t)," w-auto h-6 text-centerk rounded-full text-xs py-1 px-2")}),(0,n.jsx)(i,{className:"h-12 w-12"})]},t.token_id):(0,n.jsx)(n.Fragment,{})}function v(e){var t=e.item,o=e.router,r=e.library,a=e.chainId,s=e.account,i=JSON.parse(t.metadata),l={traits:i.attributes,token_id:t.token_id,name:i.name},c=(0,m.kh)(l);return c?(0,n.jsxs)("button",{className:"w-18 h-18 pb-full border-".concat((0,m.s2)(l)," p-4  border-2 rounded-lg relative"),onClick:function(){var e=(0,m.B6)("lang")?(0,m.B6)("lang"):"en";o.push("/items?id=".concat(l.token_id,"&asset_type=").concat((0,m.YF)(l),"&lang=").concat(e))},children:[(0,n.jsx)(j,{item:l,trait:"Inscription",className:"absolute -left-3 -bottom-3 bg-".concat((0,m.s2)(l)," w-auto h-6 text-centerk rounded-full text-xs py-1 px-2")}),(0,n.jsx)(j,{item:l,trait:"Deck",className:"absolute -left-3 -top-3 bg-".concat((0,m.s2)(l)," w-auto h-6 text-centerk rounded-full text-xs py-1 px-2")}),(0,n.jsx)(p.Ms,{method:"balanceOf",token_id:l.token_id,library:r,chainId:a,account:s,isBox:"box"==(0,m.YF)(l),className:"absolute -right-3 -bottom-3 bg-".concat((0,m.s2)(l)," w-auto h-6 text-centerk rounded-full text-xs py-1 px-2")}),(0,n.jsx)(c,{className:"h-12 w-12"})]},l.token_id):(0,n.jsx)(n.Fragment,{})}function k(){var e=(0,u.$G)().t,t=(0,a.useState)({index:0}),o=t[0],s=t[1];return(0,a.useEffect)((function(){var e=parseInt((0,m.B6)("tab"))?parseInt((0,m.B6)("tab")):0;s({index:e})}),[]),(0,n.jsxs)(r.Z,{pageTitle:"tokyo.cards",children:[(0,n.jsxs)("section",{className:"deck-section py-5 h-20",children:[(0,n.jsx)("div",{className:"flex flex-row mx-auto w-1/3 text-cinnabar",children:(0,n.jsx)("div",{className:"border-obsidian-gold border-b-2 w-1/2 m-auto",children:" "})}),(0,n.jsx)("span",{className:"w-1/3 mx-auto lufddo text-center lg:text-2xl text-diablo-dark-gold place-self-center",children:(0,n.jsx)("div",{className:"font-cursive text-diablo-dark-gold text-xl",children:e("temple.".concat(h[o.index].title.toLowerCase()))})}),(0,n.jsx)("div",{className:"flex flex-row mx-auto w-1/3 text-cinnabar",children:(0,n.jsx)("div",{className:"border-obsidian-gold border-b-2 w-1/2 m-auto",children:" "})})]}),(0,n.jsx)("section",{className:"text-white",children:(0,n.jsxs)("div",{className:"grid grid-cols-10 gap-2 my-3",children:[(0,n.jsx)("div",{className:"col-span-8 rounded-br-lg rounded-tr-lg sm:rounded-lg bg-obsidian-dark",children:h.map((function(e,t){var r=e.Comp;if(o.index==t)return(0,n.jsx)(r,{},t)}))}),(0,n.jsx)("div",{className:"col-span-2",children:h.map((function(t,r){var a=t.title,i=t.Icon;return(0,n.jsxs)("button",{className:"w-full p-2  mb-2 flex auto-padding border-l-4 rounded border-".concat(o.index==r?"diablo-dark-gold":"obsidian-gold"),onClick:function(){!function(e){(0,m.I1)("tab",e),s({index:e})}(r)},children:[(0,n.jsx)(c.G,{icon:i,className:"w-6 mx-1 text-2xl text-".concat(o.index==r?"diablo-dark-gold":"obsidian-gold")},"i-".concat(r)),(0,n.jsx)("span",{className:"font-cursive text-".concat(o.index==r?"diablo-dark-gold":"obsidian-gold"," hidden sm:block ml-2"),children:e("temple.".concat(a.toLowerCase()))},"s-".concat(r))]},"b-".concat(r))}))})]})})]})}}},function(e){e.O(0,[774,523,112,737,444,493,403,551,354,343,386,888,179],(function(){return t=6592,e(e.s=t);var t}));var t=e.O();_N_E=t}]);