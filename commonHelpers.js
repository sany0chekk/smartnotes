import{S as l,a as h}from"./assets/vendor-456d1972.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(o){if(o.ep)return;o.ep=!0;const r=i(o);fetch(o.href,r)}})();window.addEventListener("load",()=>{l().reveal(".header"),l().reveal(".hero"),l().reveal(".reviews"),l().reveal(".benefits"),l().reveal(".plans"),l().reveal(".sign"),l().reveal(".footer"),t("left",".header-logo"),c("top","50px",".header-nav-item"),t("right",".header-btn"),t("right",".header-mobile-open"),t("left",".hero-title"),t("right",".hero-img"),t("bottom",".hero-descr"),t("bottom",".hero-form"),t("right",".reviews-list"),t("left",".benefits-title"),t("right",".benefits-descr"),c("bottom","100px",".benefits-item"),t("bottom",".video-container"),t("top",".plans-title"),t("top",".plans-descr"),t("right",".plans-version"),c("bottom","100px",".plans-item"),t("left",".questions-title"),t("right",".questions-descr"),c("bottom","100px",".questions-item"),t("left",".sign-content"),t("right",".sign-img"),t("left",".footer-content"),t("top",".footer-item-title"),c("bottom","100px",".footer-item-el"),t("left",".footer-bottom")});function t(e,n){l().reveal(n,{origin:e,distance:"50px",duration:1e3,delay:100})}function c(e,n,i){const a=l({origin:e,distance:n,duration:1e3,delay:100});document.querySelectorAll(i).forEach((r,s)=>{const p=s*100;a.reveal(r,{delay:p})})}const d=document.querySelector(".header-mobile"),y=document.querySelector(".js-reg-open");d.querySelector(".header-mobile-close");y.addEventListener("click",v);d.addEventListener("click",g);function v(){d.classList.add("active"),document.body.style.overflow="hidden"}function g(e){e.target!==e.currentTarget&&(d.classList.remove("active"),document.body.style.overflow=null)}const b=document.querySelectorAll(".questions-item");b.forEach(e=>{e.addEventListener("click",()=>{e.classList.toggle("active")})});const L=document.querySelectorAll('a[href*="#"]');for(let e of L)e.addEventListener("click",function(n){n.preventDefault();const i=e.getAttribute("href").substr(1);document.getElementById(i).scrollIntoView({behavior:"smooth",block:"start"})});new h(".reviews-swiper-container",{direction:"horizontal",spaceBetween:30,slidesPerView:1,centeredSlides:!0,autoplay:!0,delay:3e3,loop:!0});const u=document.querySelector(".plays-switch"),m=document.querySelectorAll(".plans-item-price");u.addEventListener("change",()=>{u.checked?m.forEach(e=>{const i=parseFloat(e.textContent.replace("$",""))*12*.75;e.innerHTML=`$${i.toFixed(2)} <span>/ year</span>`}):m.forEach(e=>{const i=parseFloat(e.textContent.replace("$",""))/12/.75;e.innerHTML=`$${i.toFixed(2)} <span>/ month</span>`})});function q(e){e.classList.add("active"),document.body.style.overflow="hidden"}function E(e){e.classList.remove("active"),document.body.style.overflow=null}const f=document.querySelector(".reg"),w=document.querySelector(".reg-form"),S=document.querySelectorAll(".js-reg-open"),x=document.querySelector(".reg-dialog-close");w.addEventListener("submit",e=>{e.preventDefault()});S.forEach(e=>{e.addEventListener("click",()=>{q(f)})});x.addEventListener("click",()=>{E(f)});
//# sourceMappingURL=commonHelpers.js.map
