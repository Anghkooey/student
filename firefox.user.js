// ==UserScript==
// @name          Firefox
// @author        https://github.com/Anghkooey/
// @namespace     https://github.com/Anghkooey/student
// @version       1.1.0
// @include       https://platforma.uafm.edu.pl/*
// @run-at        document-start
// @description   none
// ==/UserScript==

(()=>{const e=window.requestAnimationFrame,t=window.setTimeout,n=window.setInterval,o=performance.now.bind(performance),i=Date.now,d=window.addEventListener,r=document.addEventListener;let c=0;Object.defineProperty(document,"visibilityState",{get:()=>"visible"}),Object.defineProperty(document,"webkitVisibilityState",{get:()=>"visible"}),Object.defineProperty(document,"hidden",{get:()=>!1}),document.onvisibilitychange=null,unsafeWindow.onblur=null,unsafeWindow.onfocus=null,unsafeWindow.document.hasFocus=()=>!0,window.requestAnimationFrame=t=>e((()=>{try{t(o())}catch(e){}})),window.setTimeout=(e,n)=>t((()=>{try{e()}catch(e){}}),Math.max(0,n)),window.setInterval=(e,t)=>n((()=>{try{e()}catch(e){}}),Math.max(0,t)),setInterval((()=>{c+=10}),100),performance.now=()=>o()+c,Date.now=()=>i()+c;const s=new Set(["visibilitychange","webkitvisibilitychange","blur","focus","mouseleave","mouseout"]);window.addEventListener=new Proxy(window.addEventListener,{apply(e,t,n){if(!s.has(n[0]))return d.apply(t,n)}}),document.addEventListener=new Proxy(document.addEventListener,{apply(e,t,n){if(!s.has(n[0]))return r.apply(t,n)}}),Object.defineProperty(document,"fullscreenElement",{get:()=>document.documentElement}),Object.defineProperty(document,"fullscreenEnabled",{get:()=>!0}),Object.defineProperty(document,"webkitFullscreenElement",{get:()=>document.documentElement}),Object.defineProperty(document,"mozFullScreenElement",{get:()=>document.documentElement}),Object.defineProperty(document,"msFullscreenElement",{get:()=>document.documentElement});["fullscreenchange","fullscreenerror"].forEach((e=>{document.addEventListener(e,(e=>{e.stopImmediatePropagation(),e.preventDefault()}),!0)})),Object.defineProperty(window,"innerWidth",{get:()=>screen.width}),Object.defineProperty(window,"innerHeight",{get:()=>screen.height})})(),(()=>{const e=()=>{document.querySelectorAll(".eminus_test_question h3.eminus_test_question_details.noselect").forEach((e=>{e.classList.remove("noselect"),e.style.userSelect="text"}))},t=()=>{new MutationObserver(e).observe(document,{childList:!0,subtree:!0}),e()};"loading"===document.readyState?document.addEventListener("DOMContentLoaded",t):t()})();