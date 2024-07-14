import{a as E,S as g,A as k,i as m}from"./assets/vendor-445a0bd3.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const f of r.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&i(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const e={popupEl:document.querySelector(".header-pop-up-menu"),burgerEl:document.querySelector(".header-burger-btn"),closeBtnEl:document.querySelector(".pop-up-close-btn"),closeModalEl:document.querySelector(".pop-up-list"),closeModEl:document.querySelector(".pop-up-order-link"),openMenuEl:document.querySelector(".header-menu-list"),menuListEl:document.querySelector(".header-menu-btn"),headerSection:document.querySelector(".header"),selectThemeElem:document.querySelector("#theme-select"),heroElem:document.querySelector(".hero-container"),bodyElem:document.querySelector("body"),contactForm:document.querySelector(".footer-form"),email:document.getElementById("user-email"),comments:document.getElementById("user-comment"),backdropEl:document.querySelector(".footer-backdrop"),modalEl:document.querySelector(".modal"),closeModalBtnEl:document.querySelector(".close-btn"),modalTitleEl:document.querySelector(".modal-title"),modalMessageEl:document.querySelector(".modal-message"),reviewsList:document.querySelector("#reviews-list"),swiperBtns:document.querySelector(".navigation-buttons-reviews"),loader:document.querySelector(".load-container"),upBtn:document.querySelector(".up-button"),toggleContainer:document.querySelector(".toggle-container"),toggle:document.querySelector("#theme-toggle")};E.defaults.baseURL="https://portfolio-js.b.goit.study/api/";async function M(){return(await E.get("reviews")).data}new g(".project .swiper",{loop:!1,onlyInViewport:!0,mousewheel:!0,keyboard:{enabled:!0},slidesPerView:1,spaceBetween:28,navigation:{nextEl:".swiper-button-next-project",prevEl:".swiper-button-prev-project"},speed:1e3,effect:"cube",cubeEffect:{slideShadows:!0,shadow:!1},direction:"vertical",grabCursor:!0});new g(".about .swiper",{slidesPerView:2,autoplay:{delay:1500,disableOnInteraction:!0,pauseOnMouseEnter:!0},spaceBetween:0,loop:!0,mousewheel:!0,keyboard:{enabled:!0},breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}},navigation:{nextEl:".swiper-button-next"},speed:1e3,grabCursor:!0});new k(".about .accordion-container",{openOnInit:[0]});const b="/DevTeam5/assets/error-c9c1e08a.svg";function u(t,s){const n=JSON.stringify(s);localStorage.setItem(t,n)}function q(t){const s=localStorage.getItem(t);try{return JSON.parse(s)}catch{return s}}e.contactForm.addEventListener("submit",async function(t){t.preventDefault();const s=e.email.value,n=e.comments.value;if(!s||!n){m.error({title:"Error!",titleSize:"16",titleColor:"#fafafa",message:"Please fill in both fields",messageSize:"16",messageColor:"#fafafa",backgroundColor:"var(--primary-color)",theme:"dark",position:"center",closeOnEscape:!0,closeOnClick:!0,iconUrl:b});return}const i={email:s,comment:n};u("email",s),u("comment",n);try{const r=(await E.post("requests",i,{headers:{"Content-Type":"application/json"},body:JSON.stringify(i)})).data;r.error?m.error({title:"Error!",titleSize:"16",titleColor:"#fafafa",message:`${r.error}`,messageSize:"16",messageColor:"#fafafa",backgroundColor:"var(--primary-color)",theme:"dark",position:"bottomCenter",closeOnEscape:!0,closeOnClick:!0,iconUrl:b}):(localStorage.removeItem(w),e.contactForm.reset()),e.modalTitleEl.textContent=r.title,e.modalMessageEl.textContent=r.message,O()}catch(o){m.error({title:"Error!",titleSize:"16",titleColor:"#fafafa",message:`${o.message}`,messageSize:"16",messageColor:"#fafafa",backgroundColor:"var(--primary-color)",theme:"dark",position:"bottomCenter",closeOnEscape:!0,closeOnClick:!0,iconUrl:b})}});function O(){e.backdropEl.classList.add("is-open-footer"),document.body.classList.contains("scroll-off")||document.body.classList.add("scroll-off")}function h(){e.backdropEl.classList.remove("is-open-footer"),document.body.classList.contains("scroll-off")&&document.body.classList.remove("scroll-off")}e.closeModalBtnEl.addEventListener("click",h);document.addEventListener("keydown",t=>{t.key==="Escape"&&e.backdropEl.classList.contains("is-open-footer")&&h()});document.addEventListener("click",t=>{t.composedPath().includes(e.modalEl)||h()});const w="feedback-form-state",v=q(w),d={email:"",comments:""};v&&(d.email=v.email,d.comments=v.comments);e.email.value=d.email;e.comments.value=d.comments;e.contactForm.addEventListener("input",t=>{d[t.target.name]=t.target.value.trim(),u(w,d)});const L="Theme",{toggle:y,bodyElem:l,heroElem:c,popupEl:a}=e;document.addEventListener("DOMContentLoaded",()=>{q(L)==="blue"?(y.checked=!0,l.classList.add("theme-blue"),c.classList.add("theme-blue"),a.classList.add("theme-blue"),document.querySelector(".toggle-container").classList.remove("hidden"),document.querySelector(".order-link").classList.remove("hidden")):(l.classList.add("theme-red"),c.classList.add("theme-red"),a.classList.add("theme-red"),document.querySelector(".toggle-container").classList.remove("hidden"),document.querySelector(".order-link").classList.remove("hidden")),y.addEventListener("change",()=>{y.checked?(l.classList.remove("theme-red"),c.classList.remove("theme-red"),a.classList.remove("theme-red"),l.classList.add("theme-blue"),c.classList.add("theme-blue"),a.classList.add("theme-blue"),u(L,"blue")):(l.classList.remove("theme-blue"),c.classList.remove("theme-blue"),a.classList.remove("theme-blue"),l.classList.add("theme-red"),c.classList.add("theme-red"),a.classList.add("theme-red"),u(L,"red"))})});document.addEventListener("DOMContentLoaded",function(){new k(".faq-accordion",{duration:400,showMultiple:!0,elementClass:"faq-accordion-item",triggerClass:"question-wrapper",panelClass:"faq-accordion-panel"})});function B(t,s){const n=t.map(({avatar_url:i,author:o,review:r})=>`
    <li class="review-card swiper-slide">
      <div class="author-info">
        <img class="review-card-image" src="${i}" alt="${o}">
        <h3 class="review-author-name">${o}</h3>
      </div>
      <p class="review-text">${r}</p>
    </li>
  `).join("");s.innerHTML=n}const P="/DevTeam5/assets/sprite-8d1c536a.svg#error";function T(){e.loader.classList.remove("hidden")}function S(){e.loader.classList.add("hidden")}V();async function V(){try{T();const t=await M();S(),x(),B(t,e.reviewsList)}catch{S();const s=`<div class="reviews-error">
    <h3>Not found</h3>
    </div>`;e.reviewsList.insertAdjacentHTML("afterend",s),m.error({title:"Reviews not found!",titleSize:"16",titleColor:"#fafafa",messageSize:"16",messageColor:"#fafafa",backgroundColor:"var(--primary-color)",theme:"dark",position:"center",closeOnEscape:!0,closeOnClick:!0,iconUrl:P})}}function x(){e.swiperBtns.classList.remove("hidden")}new g(".reviews-container.swiper ",{navigation:{nextEl:".swiper-button-next-reviews",prevEl:".swiper-button-prev-reviews"},keyboard:{enabled:!0,onlyInViewport:!1},grabCursor:!0,loop:!1,slidesPerView:1,spaceBetween:16,breakpoints:{375:{slidesPerView:1,spaceBetween:16},768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}}});e.burgerEl.addEventListener("click",I);e.closeModalEl.addEventListener("click",p);e.closeModEl.addEventListener("click",p);function I(){e.popupEl.classList.add("is-open-mobile"),document.body.classList.contains("scroll-off-mobile")||document.body.classList.add("scroll-off-mobile")}function p(){e.popupEl.classList.remove("is-open-mobile"),document.body.classList.contains("scroll-off-mobile")&&document.body.classList.remove("scroll-off-mobile")}e.closeBtnEl.addEventListener("click",p);document.addEventListener("keydown",t=>{t.key==="Escape"&&e.popupEl.classList.contains("is-open-mobile")&&p()});function j(){e.openMenuEl.classList.toggle("is-hidden")}function C(){e.openMenuEl.classList.add("is-hidden")}e.menuListEl.addEventListener("click",j);document.addEventListener("click",t=>{t.composedPath().includes(e.menuListEl)||C()});document.addEventListener("keydown",t=>{t.key==="Escape"&&!e.openMenuEl.classList.contains("is-hidden")&&C()});function z(){window.scrollY>=700?e.upBtn.classList.remove("is-hidden"):e.upBtn.classList.add("is-hidden")}window.addEventListener("scroll",z);
//# sourceMappingURL=commonHelpers.js.map
