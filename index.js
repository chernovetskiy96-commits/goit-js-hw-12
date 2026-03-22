import{a as S,S as v,i as c}from"./assets/vendor-DQvd0HNi.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const q="https://pixabay.com/api/",C="55106557-17a58ac065e1340b333cc7179";async function u(r,t){return(await S.get(q,{params:{key:C,q:r,page:t,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const f=document.querySelector(".gallery"),m=document.querySelector(".loader"),g=document.querySelector(".load-more-button"),B=new v(".gallery a",{captionsData:"alt",captionDelay:250});function h(r){const t=r.map(({webformatURL:s,largeImageURL:a,tags:e,likes:o,views:n,comments:L,downloads:w})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${a}">
            <img
              class="gallery-image"
              src="${s}"
              alt="${e}"
            />
          </a>
          <div class="info">
            <p class="info-item"><b>Likes</b> ${o}</p>
            <p class="info-item"><b>Views</b> ${n}</p>
            <p class="info-item"><b>Comments</b> ${L}</p>
            <p class="info-item"><b>Downloads</b> ${w}</p>
          </div>
        </li>
      `).join("");f.insertAdjacentHTML("beforeend",t),B.refresh()}function P(){f.innerHTML=""}function p(){m.classList.add("is-visible")}function y(){m.classList.remove("is-visible")}function b(){g.classList.remove("is-hidden")}function l(){g.classList.add("is-hidden")}const M=document.querySelector(".form"),$=document.querySelector(".load-more-button");let i=1,d="";l();M.addEventListener("submit",O);$.addEventListener("click",R);async function O(r){r.preventDefault();const t=r.currentTarget.elements["search-text"].value.trim();if(t){d=t,i=1,P(),l(),p();try{const s=await u(d,i);if(!s.hits||s.hits.length===0){c.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight"});return}h(s.hits),s.totalHits>15&&b(),i+=1}catch{c.show({message:"Something went wrong. Please try again later.",messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight"})}finally{y()}}}async function R(){p(),l();try{const r=await u(d,i);h(r.hits);const t=document.querySelector(".gallery-item");if(t){const a=t.getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"})}i*15>=r.totalHits?(c.show({message:"We're sorry, but you've reached the end of search results.",messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight"}),l()):b(),i+=1}catch{c.show({message:"Something went wrong. Please try again later.",messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight"})}finally{y()}}
//# sourceMappingURL=index.js.map
