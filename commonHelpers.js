import{S as s,a as p}from"./assets/vendor-456d1972.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function i(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(o){if(o.ep)return;o.ep=!0;const r=i(o);fetch(o.href,r)}})();window.addEventListener("load",()=>{s().reveal(".header"),s().reveal(".hero"),s().reveal(".reviews"),s().reveal(".benefits"),s().reveal(".plans"),s().reveal(".sign"),s().reveal(".footer"),e("left",".header-logo"),c("top","50px",".header-nav-item"),e("right",".header-btn"),e("right",".header-mobile-open"),e("left",".hero-title"),e("right",".hero-img"),e("bottom",".hero-descr"),e("bottom",".hero-form"),e("right",".reviews-list"),e("left",".benefits-title"),e("right",".benefits-descr"),c("bottom","100px",".benefits-item"),e("bottom",".video-container"),e("top",".plans-title"),e("top",".plans-descr"),e("right",".plans-version"),c("bottom","100px",".plans-item"),e("left",".questions-title"),e("right",".questions-descr"),c("bottom","100px",".questions-item"),e("left",".sign-content"),e("right",".sign-img"),e("left",".footer-content"),e("top",".footer-item-title"),c("bottom","100px",".footer-item-el"),e("left",".footer-bottom")});function e(t,n){s().reveal(n,{origin:t,distance:"50px",duration:1e3,delay:100})}function c(t,n,i){const a=s({origin:t,distance:n,duration:1e3,delay:100});document.querySelectorAll(i).forEach((r,l)=>{const m=l*100;a.reveal(r,{delay:m})})}const d=document.querySelector(".header-mobile"),h=document.querySelector(".header-mobile-open");d.querySelector(".header-mobile-close");h.addEventListener("click",y);d.addEventListener("click",g);function y(){d.classList.add("active"),document.body.style.overflow="hidden"}function g(t){t.target!==t.currentTarget&&(d.classList.remove("active"),document.body.style.overflow=null)}const v=document.querySelectorAll(".questions-item");v.forEach(t=>{t.addEventListener("click",()=>{t.classList.toggle("active")})});const b=document.querySelectorAll('a[href*="#"]');for(let t of b)t.addEventListener("click",function(n){n.preventDefault();const i=t.getAttribute("href").substr(1);document.getElementById(i).scrollIntoView({behavior:"smooth",block:"start"})});new p(".reviews-swiper-container",{direction:"horizontal",spaceBetween:30,slidesPerView:1,centeredSlides:!0,autoplay:!0,delay:3e3,loop:!0});const u=document.querySelector(".plays-switch"),f=document.querySelectorAll(".plans-item-price");u.addEventListener("change",()=>{u.checked?f.forEach(t=>{const i=parseFloat(t.textContent.replace("$",""))*12*.75;t.innerHTML=`$${i.toFixed(2)} <span>/ year</span>`}):f.forEach(t=>{const i=parseFloat(t.textContent.replace("$",""))/12/.75;t.innerHTML=`$${i.toFixed(2)} <span>/ month</span>`})});
//# sourceMappingURL=commonHelpers.js.map