import{j as d,r as l,R as u,a as f}from"./vendor.0e667b8e.js";const m=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}};m();const n=d.exports.jsx,i=d.exports.jsxs;function p(){const[o,r]=l.exports.useState("");return i("div",{className:"feedback-container",children:[n("textarea",{placeholder:"Your Feedback",value:o,onChange:a=>r(a.target.value),className:"feedback-input",id:"feedback-input"}),i("div",{className:"feedback-subtext-container",children:[n("p",{className:"instruction-text-left",children:"Word Limit: 100"}),n("p",{className:"instruction-text-right",children:"Press Enter to Continue"})]})]})}function h(){return i("div",{className:"intro",children:[n("p",{className:"iam",children:"I am"}),n("p",{className:"name",children:"Zulqarnain Haider"}),n("p",{className:"sub-heading",children:"A frontend developer and designer"})]})}const g=()=>i("div",{className:"landing-container",children:[n(h,{}),n(p,{})]});function v(){return n("div",{className:"App",children:n(g,{})})}u.render(n(f.StrictMode,{children:n(v,{})}),document.getElementById("root"));