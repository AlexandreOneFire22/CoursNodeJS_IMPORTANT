(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const u=(o,i,t,s)=>{const e={titre:o,auteur:i,resume:t,estLu:s,id:crypto.randomUUID(),createdAt:new Date().toDateString()},r=localStorage.getItem("livres"),n=r?JSON.parse(r):[];n.push(e),localStorage.setItem("livres",JSON.stringify(n))},m=()=>{const o=localStorage.getItem("livres");return o?JSON.parse(o):[]},g=o=>{const i=localStorage.getItem("livres"),s=(i?JSON.parse(i):[]).filter(e=>e.id!=o);localStorage.setItem("livres",JSON.stringify(s))},f=o=>{const i=localStorage.getItem("livres"),t=i?JSON.parse(i):[],s=t.find(e=>e.id===o);s.estLu=!s.estLu,localStorage.setItem("livres",JSON.stringify(t))},l=()=>{const o=document.querySelector("#booksList"),i=m();o.innerHTML=i.map(t=>{const s=new Date(t.createdAt).toLocaleDateString("fr-FR");return`<div class="col-md-6 col-lg-4" id="book-${t.id}">
     <div class="card h-100">
        <div class="card-body">
            <div class="d-flex justify-content-between align-items-start mb-2">
                <h5 class="card-title mb-0">${t.titre}</h5>
                <span class="badge ${t.estLu?"bg-success":"bg-secondary"} toggle-read-btn" 
                        style="cursor: pointer;" data-id = "${t.id}" >
                    ${t.estLu?'<i class="bi bi-check-circle me-1"></i>Lu':'<i class="bi bi-circle me-1"></i>Non lu'}
                </span>
                </div>
                <h6 class="card-subtitle mb-2">
                <i class="bi bi-person me-1"></i>${t.auteur}
                </h6>
                <p class="card-text small">${t.resume}</p>
                <div class="d-flex justify-content-between align-items-center mt-3">
                <small class="text-muted">
                    <i class="bi bi-calendar3 me-1"></i>${s}
                </small>
                <button class="btn btn-outline-danger btn-sm delete-btn" data-id = "${t.id}">
                    <i class="bi bi-trash me-1"></i>Supprimer
                </button>
            </div>
        </div>
    </div>
</div>
`}).join("")},v=()=>{const o=document.querySelector("#toggleFormBtn"),i=document.querySelector("#formSection"),t=new bootstrap.Collapse(i,{toggle:!1}),s=document.querySelector("#bookForm");o.addEventListener("click",()=>{t.toggle()}),i.addEventListener("hidden.bs.collapse",()=>{s.reset()}),s.addEventListener("submit",r=>{r.preventDefault();const n=s.title.value,c=s.author.value,a=s.summary.value,d=s.isRead.checked;u(n,c,a,d),t.hide(),l()}),document.querySelector("#booksList").addEventListener("click",r=>{const n=r.target.closest(".delete-btn, .toggle-read-btn");if(n===null)return;const c=n.dataset.id;n.classList.contains("delete-btn")?(g(c),l()):n.classList.contains("toggle-read-btn")&&(f(c),l())})};v();l();
