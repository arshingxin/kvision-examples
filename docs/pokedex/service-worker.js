if(!self.define){let e,i={};const n=(n,t)=>(n=new URL(n+".js",t).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(t,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let o={};const d=e=>n(e,s),f={module:{uri:s},exports:o,require:d};i[s]=Promise.all(t.map((e=>f[e]||d(e)))).then((e=>(r(...e),o)))}}define(["./workbox-a7df7adf"],(function(e){"use strict";e.setCacheNameDetails({prefix:"pokedex"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.html",revision:"d57abc64288739a3cc863c42f08854ca"},{url:"main.bundle.js",revision:"9e895413f7f749920d56a953858fa3df"},{url:"main.bundle.js.LICENSE.txt",revision:"0325f85d414e3d3c7d3a0a77ba71d22e"}],{})}));
