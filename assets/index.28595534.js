import{j as i,R as l,a}from"./vendor.b96a9a13.js";const d=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}};d();const t=i.exports.jsx,u=i.exports.jsxs;function f(){return t("div",{className:"App",children:u("div",{className:"intro",children:[t("p",{className:"iam",children:"I am"}),t("p",{className:"first-name",children:"Zulqarnain"}),t("p",{className:"last-name",children:"Haider"}),t("p",{className:"sub-heading",children:"A frontend developer and designer"})]})})}l.render(t(a.StrictMode,{children:t(f,{})}),document.getElementById("root"));
