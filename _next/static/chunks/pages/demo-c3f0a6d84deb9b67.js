(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[656],{5872:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/demo",function(){return n(672)}])},672:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return F}});var r=n(5893),o=n(7294),i=n(9008),a=n(9795),s=n(715);function l(e){var t=new s.Q(e);return t.pollingInterval=12e3,t}var c=function(e){var t=e.pageTitle,n=e.children;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.default,{children:(0,r.jsx)("title",{children:t})}),(0,r.jsx)(a.Ht,{getLibrary:l,children:(0,r.jsx)("main",{className:"w-full h-screen",children:n})})]})},u=n(1217),h=n(2849),d=n(5769),f=n(6413),x=n(254),p=n(3328),g=n(8626),j=n(3857),m=n(4232),v=n(9521),y=n(7854),b=n(5960);function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){w(e,t,n[t])}))}return e}function _(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(l){o=!0,i=l}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function k(){var e=(0,v.S)().progress;return(0,r.jsx)(y.V,{center:!0,children:(0,r.jsxs)("div",{className:"text-diablo-dark-gold",children:[e.toFixed(),"%"]})})}function O(e){var t=_((0,d.m)(["/three_d/girl/textures/floor/Marble006_1K_Roughness.jpg","/images/logo.png"]),2),n=t[0],o=t[1];return(0,r.jsxs)("mesh",S({rotation:[-Math.PI/2,0,Math.PI/2]},e,{children:[(0,r.jsx)("planeGeometry",{args:[10,10]}),(0,r.jsx)(x.Q,{resolution:1024,mirror:.75,mixBlur:10,mixStrength:2,minDepthThreshold:.8,maxDepthThreshold:1.2,depthToBlurRatioBias:.2,color:"aqua",metalness:.5,roughnessMap:n,roughness:1,normalMap:o,normalScale:[4,4]})]}))}function T(e){var t=(0,d.m)(e.boxTexture),n=(0,o.useRef)(),i=(0,o.useState)(!1),a=i[0],s=i[1],l=(0,o.useState)(!1),c=l[0],u=l[1],h=(0,o.useState)(!1),x=h[0],p=h[1],g=[3,5,9,12,16,17,20];return(0,m.xQ)((function(t,r){var o=t.clock.getElapsedTime();if(o.toFixed()%17===0&&!x){var i=Math.floor(Math.random()*g.length);e.setAction(g[i]),p(!0)}o.toFixed()%31===0&&x&&(e.setAction(12),p(!1)),e.setElapsed(o.toFixed()),n.current.rotation.x=n.current.rotation.y+=.5*r})),(0,r.jsxs)("mesh",S({},e,{ref:n,scale:c?.4:.25,onClick:function(e){u(!c);var t=(0,f.B6)("lang")?(0,f.B6)("lang"):"en";window.location.href="/?lang=".concat(t)},onPointerOver:function(e){return s(!0)},onPointerOut:function(e){return s(!1)},children:[(0,r.jsx)("boxGeometry",{args:[1,1,1]}),(0,r.jsx)("meshStandardMaterial",{map:t,color:a?"hotpink":"white"})]}))}function E(e){var t="/three_d/girl/scene.gltf",n=(0,m.U2)(u.E,t),i=(0,g.L)(t).animations,a=(0,j.v)(i),s=a.ref,l=a.actions,c=Object.keys(l),d=(0,o.useState)(12),f=d[0],x=d[1],v=(0,o.useState)(0),y=v[0],b=v[1],w={fontSize:2.5,letterSpacing:-.05,lineHeight:1,"material-toneMapped":!1};return(0,o.useEffect)((function(){var e;return null===(e=l[c[f]])||void 0===e||e.reset().fadeIn(.5).play(),function(){var e;null===(e=l[c[f]])||void 0===e||e.fadeOut(.5)}}),[l,f,.5]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("directionalLight",{position:[2.5,8,5],intensity:1.5}),(0,r.jsx)(T,{boxTexture:"/images/card_set/tokyo.jpg",position:[.5,2,1.5],setAction:x,setElapsed:b,totalActions:c.length}),(0,r.jsx)("primitive",S({},e,{receiveShadow:!0,ref:s,scale:1,rotation:[0,0,0],object:n.scene})),(0,r.jsx)(O,{position:[0,-2.8,0],"rotation-x":-Math.PI/2}),(0,r.jsx)(p.i,{yawFrequency:.1,pitchFrequency:.1,rollFrequency:.1}),(0,r.jsx)(h.x,S({position:[0,5,-7]},w,{color:"#B80B4D",children:" Tokyo "}),"word-1"),(0,r.jsx)(h.x,S({position:[-1,3,-7]},w,{color:"#A11A56",children:" Cards "}),"word-2"),(0,r.jsxs)(h.x,S({position:[-2,1,-7]},w,{color:"#0E93AD",children:[" ","0x1".concat(y)," "]}),"word-3"),(0,r.jsx)(h.x,{position:[0,-.5,-7],color:"orange",fontSize:.5,children:" Hit the cube to Join the NFT Sale"},"word-4")]})}function P(){return(0,r.jsx)(m.Xz,{children:(0,r.jsxs)(o.Suspense,{fallback:(0,r.jsx)(k,{}),children:[(0,r.jsx)("pointLight",{position:[10,50,50],color:"gold"}),(0,r.jsx)("pointLight",{position:[0,-10,0],color:"aqua"}),(0,r.jsx)(E,{position:[0,-2.5,0]}),(0,r.jsx)(b.xC,{multisampling:8,children:(0,r.jsx)(b.dp,{kernelSize:1,luminanceThreshold:0,luminanceSmoothing:.4,intensity:.2})})]})})}function F(){return(0,r.jsx)(c,{pageTitle:"tokyo.cards",children:(0,r.jsx)(P,{})})}}},function(e){e.O(0,[737,444,493,408,483,343,774,888,179],(function(){return t=5872,e(e.s=t);var t}));var t=e.O();_N_E=t}]);