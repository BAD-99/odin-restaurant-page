(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>E});var o=t(81),a=t.n(o),r=t(645),i=t.n(r),c=t(667),s=t.n(c),l=new URL(t(59),t.b),d=new URL(t(522),t.b),p=new URL(t(688),t.b),u=new URL(t(581),t.b),m=new URL(t(704),t.b),f=new URL(t(554),t.b),h=i()(a()),g=s()(l),y=s()(d),v=s()(p),b=s()(u),w=s()(m),x=s()(f);h.push([e.id,`:root {\n    --background: #252525;\n    --sapphire: #4059AD;\n    --blue-gray: #6b9ac4;\n    --tiff: #97d8c4;\n    --white: #eff2f1;\n    --xanth: #f4b942;\n    --container-width: clamp(400px, 50%, 720px);\n}\n\n@font-face {\n    font-family: 'Jelle';\n    src: url(${g}) format('woff2'),\n        url(${y}) format('woff');\n}\n\nbody {\n    background-image: url(${v});\n    background-size: max(100dvh, 100dvw);\n    background-repeat: no-repeat;\n    background-position: center;\n    background-color: var(--background);\n    background-attachment: fixed;\n    margin: 0;\n    position: absolute;\n    min-height: 100vh;\n    left: 0;\n    right: 0;\n    display: flex;\n    flex-direction: column;\n}\n\nheader {\n    display: flex;\n    width: 100%;\n    /* align-items: center; */\n    justify-content: center;\n    background-color: var(--blue-gray);\n    /* opacity: 20%; */\n}\n\nfooter{\n    background-color: var(--sapphire);\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 0.8rem;\n    color: var(--white);\n    padding: 2rem;\n    display: flex;\n    /* align-items: center; */\n    justify-content: center;\n    /* position: absolute; */\n    /* bottom: 0; */\n}\n\nfooter a{\n    text-decoration: none;\n    color: var(--xanth);\n    padding: 1rem;\n}\n\nbutton {\n    appearance: none;\n    border: none;\n    font-family: Arial, Helvetica, sans-serif;\n    font-weight: bold;\n    border-radius: 8px;\n}\n\n.flex button {\n    margin: 1rem;\n    padding: 1rem 2rem;\n    font-size: 1.5rem;\n    color: var(--white);\n    background-color: var(--xanth);\n}\n\n.flex button:hover {\n    background-color: color-mix(in srgb, var(--xanth) 80%, white 20%);\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    flex-grow: 1;\n}\n\n.container {\n    margin: 1rem 0;\n    background-color: var(--sapphire);\n    width: var(--container-width);\n    border-radius: 16px;\n    border: 8px solid var(--xanth);\n    color: var(--white);\n    font-family: 'Jelle', Arial, Helvetica, sans-serif;\n    padding: 1rem;\n}\n\n.title {\n    padding: 1rem 0;\n\n}\n\n.container h1 {\n    padding: 0;\n    margin: 0;\n    text-align: center;\n    color: var(--tiff);\n    font-size: 3rem;\n}\n\n.container p {\n    padding: 1rem 2rem;\n    font-size: 1.2rem;\n    margin: 0;\n}\n\n.container>ul {\n    list-style: none;\n}\n\n.container>ul>li {\n    font-size: 1.2rem;\n}\n\n.employee-card {\n    display: flex;\n}\n.employee-info>li:first-of-type{\n    font-size: 2rem;\n}\n.employee-info>li:last-of-type{\n    font-size: 1rem;\n}\n\n#manager{\n    content: url(${b});\n    width: min(300px, 35%);\n    aspect-ratio: 1/1;\n    border-radius: 100%;\n    object-fit: cover;\n}\n\n#chef{\n    content: url(${w});\n    width: min(300px, 35%);\n    aspect-ratio: 1/1;\n    border-radius: 100%;\n    object-fit: cover;\n}\n\n#waitress{\n    content: url(${x});\n    width: min(300px, 35%);\n    aspect-ratio: 1/1;\n    border-radius: 100%;\n    object-fit: cover;\n}`,""]);const E=h},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,a,r){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);o&&i[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),n.push(d))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var r={},i=[],c=0;c<e.length;c++){var s=e[c],l=o.base?s[0]+o.base:s[0],d=r[l]||0,p="".concat(l," ").concat(d);r[l]=d+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=a(m,o);o.byIndex=c,n.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var r=o(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var c=t(r[i]);n[c].references--}for(var s=o(e,a),l=0;l<r.length;l++){var d=t(r[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}r=s}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},522:(e,n,t)=>{e.exports=t.p+"a16baad22a0f88a6a051.woff"},59:(e,n,t)=>{e.exports=t.p+"d2e2d8b9e4d8c214fcd1.woff2"},704:(e,n,t)=>{e.exports=t.p+"e404e6766f053a432ad2.jpg"},688:(e,n,t)=>{e.exports=t.p+"9d361e774fd745f7c33e.jpg"},581:(e,n,t)=>{e.exports=t.p+"d628a3d0c85ea0e4ce52.jpg"},554:(e,n,t)=>{e.exports=t.p+"0179d37f38f0a6141993.jpg"}},n={};function t(o){var a=n[o];if(void 0!==a)return a.exports;var r=n[o]={id:o,exports:{}};return e[o](r,r.exports,t),r.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");if(o.length)for(var a=o.length-1;a>-1&&!e;)e=o[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),a=t.n(o),r=t(569),i=t.n(r),c=t(565),s=t.n(c),l=t(216),d=t.n(l),p=t(589),u=t.n(p),m=t(426),f={};function h(e,n,t){const o=document.createElement(e);return null!=n&&""!=n&&o.classList.add(n),null!=t&&""!=t&&(o.textContent=t),o}function g(){const e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("container"),n.append(h("h1","","Wingin' It!"),h("p","","Here at Wingin' It, we make all kinds of wings! What kinds you ask? We make bone-in, boneless, saucy, dry, exotic, cretaceous, and mechanical! If'n you want the nuts and bolts, click the menu tab to see what we serve!"));const t=document.createElement("div");t.classList.add("container");const o=document.createElement("ul");t.append(h("h1","","Hours"),o),o.append(h("li","","Sunday: 11am - 1am"),h("li","","Monday: 10am - 11pm"),h("li","","Tuesday: 10am - 11pm"),h("li","","Wednesday: 10am - 11pm"),h("li","","Thursday: 10am - 12am"),h("li","","Friday: 10am - 12am"),h("li","","Saturday: 11am - 1am"));const a=document.createElement("div");a.classList.add("container"),a.append(h("h1","","Location"),h("p","","64 Goose Lane, Skymall, US Airspace")),e.append(n,t,a)}f.styleTagTransform=u(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=d(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const y=document.createElement("div");function v(){y.innerHTML=""}y.id="content";const b=h("header","flex"),w=document.createElement("button");w.textContent="Home",w.addEventListener("click",(()=>{v(),g()}));const x=document.createElement("button");x.textContent="Menu",x.addEventListener("click",(()=>{v(),function(){const e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("container");const t=document.createElement("ul");n.append(h("h1","","Chicken Wings"),h("p","","Chicken wings come in bone-in and boneless."),t),t.append(h("li","","6 piece combo: $5.99"),h("li","","8 piece combo: $7.49"),h("li","","10 piece combo: $8.99"),h("li","","20 wings: $15.99"),h("li","","30 wings: $22.99"),h("li","","50 wings: $35.99"));const o=document.createElement("div");o.classList.add("container");const a=document.createElement("ul");o.append(h("h1","","Pterodactyl Wings"),h("p","","Pterodactyl wings are fossil-in or fossilless. Fossil returns are $1,000 off your order for complete wings. Ask your server about fossil returns!"),a),a.append(h("li","","Quarter wing: $9,599.49"),h("li","","Half wing: $15,029.99"),h("li","","Full wing: $18,999.99"),h("li","","2 wings: $24,099.99"),h("li","","4 wings: $37,999.49"),h("li","","8 wings: $64,049.99"));const r=document.createElement("div");r.classList.add("container");const i=document.createElement("ul");r.append(h("h1","","Plane Wings"),h("p","","Plane wings come in bolt-in or boltless. Limit 2 per person."),i),i.append(h("li","","Cessna 172: $79,999.99"),h("li","","DHC-6 Twin Otter: $899,999.99"),h("li","","A-10 'Warthog': $3,599,999.99"),h("li","","Airbus A320: $20,199,999.99"),h("li","","Boeing 747: $83,679,999.99"));const c=document.createElement("div");c.classList.add("container");const s=document.createElement("ul");c.append(h("h1","","Sauces"),h("p","","Our sauces are hand-made each day! 2 free sauces for each order, additional sauces are $0.75 extra."),s),s.append(h("li","","Sweet and Spicy BBQ"),h("li","","Mild Buffalo"),h("li","","Spicy Ranch"),h("li","","Hot Buffalo"),h("li","","Jurassic Jalepeno"),h("li","","Mesozoic Mustard"),h("li","","Hydraulic Fluid"),h("li","","BBQ 747")),e.append(n,o,r,c)}()}));const E=document.createElement("button");E.textContent="Contact",E.addEventListener("click",(()=>{v(),function(){const e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("container","employee-card");const t=document.createElement("ul");t.classList.add("employee-info"),t.append(h("li","employee-name","Goose"),h("li","employee-credential","Manager"),h("li","employee-credential","555-555-5555"),h("li","employee-credential","goose15loose@notFake.com"));const o=document.createElement("img");o.id="manager",n.append(o,t);const a=document.createElement("div");a.classList.add("container","employee-card");const r=document.createElement("ul");r.classList.add("employee-info"),r.append(h("li","employee-name","Rex"),h("li","employee-credential","Chef"),h("li","employee-credential","555-555-5555"),h("li","employee-credential","RexTexMex@notFake.com"));const i=document.createElement("img");i.id="chef",a.append(i,r);const c=document.createElement("div");c.classList.add("container","employee-card");const s=document.createElement("ul");s.classList.add("employee-info"),s.append(h("li","employee-name","Pelly"),h("li","employee-credential","Waitress"),h("li","employee-credential","555-555-5555"),h("li","employee-credential","pelly64@notFake.com"));const l=document.createElement("img");l.id="waitress",c.append(l,s),e.append(n,a,c)}()})),b.append(w,x,E);const k=h("footer"),L=document.createElement("div");k.append(L);const $=document.createElement("a");$.href="https://unsplash.com/photos/a-person-wearing-a-helmet-and-goggles-4lD0wEPzSjU",$.textContent="Mohamadreza Azhdari";const S=document.createElement("a");S.href="https://unsplash.com/photos/brown-and-black-dinosaur-illustration-SByb8Ch9XcQ",S.textContent="Amy-Leigh Barnard";const C=document.createElement("a");C.href="https://unsplash.com/photos/white-pelican-on-brown-wooden-dock-during-daytime-veFlkAIjKJk",C.textContent=" Valeriia Miller";const M=document.createElement("a");M.href="https://unsplash.com/photos/four-fighter-planes-in-grayscale-photography-DTZaI8lolUk",M.textContent="Leo",L.append(h("span","","Images used from: "),$,S,C,M),document.body.append(b,y,k),g()})()})();