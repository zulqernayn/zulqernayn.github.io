var Fi={exports:{}},L={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Fl=Object.getOwnPropertySymbols,yd=Object.prototype.hasOwnProperty,vd=Object.prototype.propertyIsEnumerable;function wd(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function Sd(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(o){return t[o]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(o){i[o]=o}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var Au=Sd()?Object.assign:function(e,t){for(var n,r=wd(e),i,o=1;o<arguments.length;o++){n=Object(arguments[o]);for(var s in n)yd.call(n,s)&&(r[s]=n[s]);if(Fl){i=Fl(n);for(var l=0;l<i.length;l++)vd.call(n,i[l])&&(r[i[l]]=n[i[l]])}}return r};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ns=Au,gn=60103,Ou=60106;L.Fragment=60107;L.StrictMode=60108;L.Profiler=60114;var Du=60109,Ru=60110,Lu=60112;L.Suspense=60113;var Fu=60115,Mu=60116;if(typeof Symbol=="function"&&Symbol.for){var Ce=Symbol.for;gn=Ce("react.element"),Ou=Ce("react.portal"),L.Fragment=Ce("react.fragment"),L.StrictMode=Ce("react.strict_mode"),L.Profiler=Ce("react.profiler"),Du=Ce("react.provider"),Ru=Ce("react.context"),Lu=Ce("react.forward_ref"),L.Suspense=Ce("react.suspense"),Fu=Ce("react.memo"),Mu=Ce("react.lazy")}var Ml=typeof Symbol=="function"&&Symbol.iterator;function Ed(e){return e===null||typeof e!="object"?null:(e=Ml&&e[Ml]||e["@@iterator"],typeof e=="function"?e:null)}function Pr(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $u={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ju={};function yn(e,t,n){this.props=e,this.context=t,this.refs=ju,this.updater=n||$u}yn.prototype.isReactComponent={};yn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(Pr(85));this.updater.enqueueSetState(this,e,t,"setState")};yn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Vu(){}Vu.prototype=yn.prototype;function Ps(e,t,n){this.props=e,this.context=t,this.refs=ju,this.updater=n||$u}var xs=Ps.prototype=new Vu;xs.constructor=Ps;Ns(xs,yn.prototype);xs.isPureReactComponent=!0;var As={current:null},zu=Object.prototype.hasOwnProperty,Bu={key:!0,ref:!0,__self:!0,__source:!0};function Uu(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)zu.call(t,r)&&!Bu.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:gn,type:e,key:o,ref:s,props:i,_owner:As.current}}function _d(e,t){return{$$typeof:gn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Os(e){return typeof e=="object"&&e!==null&&e.$$typeof===gn}function kd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var $l=/\/+/g;function ro(e,t){return typeof e=="object"&&e!==null&&e.key!=null?kd(""+e.key):t.toString(36)}function Kr(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case gn:case Ou:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+ro(s,0):r,Array.isArray(i)?(n="",e!=null&&(n=e.replace($l,"$&/")+"/"),Kr(i,t,n,"",function(u){return u})):i!=null&&(Os(i)&&(i=_d(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace($l,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){o=e[l];var a=r+ro(o,l);s+=Kr(o,t,n,a,i)}else if(a=Ed(e),typeof a=="function")for(e=a.call(e),l=0;!(o=e.next()).done;)o=o.value,a=r+ro(o,l++),s+=Kr(o,t,n,a,i);else if(o==="object")throw t=""+e,Error(Pr(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function $r(e,t,n){if(e==null)return e;var r=[],i=0;return Kr(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Cd(e){if(e._status===-1){var t=e._result;t=t(),e._status=0,e._result=t,t.then(function(n){e._status===0&&(n=n.default,e._status=1,e._result=n)},function(n){e._status===0&&(e._status=2,e._result=n)})}if(e._status===1)return e._result;throw e._result}var Hu={current:null};function Ge(){var e=Hu.current;if(e===null)throw Error(Pr(321));return e}var Id={ReactCurrentDispatcher:Hu,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:As,IsSomeRendererActing:{current:!1},assign:Ns};L.Children={map:$r,forEach:function(e,t,n){$r(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return $r(e,function(){t++}),t},toArray:function(e){return $r(e,function(t){return t})||[]},only:function(e){if(!Os(e))throw Error(Pr(143));return e}};L.Component=yn;L.PureComponent=Ps;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Id;L.cloneElement=function(e,t,n){if(e==null)throw Error(Pr(267,e));var r=Ns({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=As.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)zu.call(t,a)&&!Bu.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&l!==void 0?l[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:gn,type:e.type,key:i,ref:o,props:r,_owner:s}};L.createContext=function(e,t){return t===void 0&&(t=null),e={$$typeof:Ru,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:Du,_context:e},e.Consumer=e};L.createElement=Uu;L.createFactory=function(e){var t=Uu.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:Lu,render:e}};L.isValidElement=Os;L.lazy=function(e){return{$$typeof:Mu,_payload:{_status:-1,_result:e},_init:Cd}};L.memo=function(e,t){return{$$typeof:Fu,type:e,compare:t===void 0?null:t}};L.useCallback=function(e,t){return Ge().useCallback(e,t)};L.useContext=function(e,t){return Ge().useContext(e,t)};L.useDebugValue=function(){};L.useEffect=function(e,t){return Ge().useEffect(e,t)};L.useImperativeHandle=function(e,t,n){return Ge().useImperativeHandle(e,t,n)};L.useLayoutEffect=function(e,t){return Ge().useLayoutEffect(e,t)};L.useMemo=function(e,t){return Ge().useMemo(e,t)};L.useReducer=function(e,t,n){return Ge().useReducer(e,t,n)};L.useRef=function(e){return Ge().useRef(e)};L.useState=function(e){return Ge().useState(e)};L.version="17.0.2";Fi.exports=L;var Qy=Fi.exports,Wu={exports:{}},ke={},bu={exports:{}},qu={};/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){var t,n,r,i;if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}if(typeof window=="undefined"||typeof MessageChannel!="function"){var a=null,u=null,g=function(){if(a!==null)try{var E=e.unstable_now();a(!0,E),a=null}catch(x){throw setTimeout(g,0),x}};t=function(E){a!==null?setTimeout(t,0,E):(a=E,setTimeout(g,0))},n=function(E,x){u=setTimeout(E,x)},r=function(){clearTimeout(u)},e.unstable_shouldYield=function(){return!1},i=e.unstable_forceFrameRate=function(){}}else{var v=window.setTimeout,h=window.clearTimeout;if(typeof console!="undefined"){var w=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),typeof w!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var C=!1,k=null,d=-1,c=5,f=0;e.unstable_shouldYield=function(){return e.unstable_now()>=f},i=function(){},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):c=0<E?Math.floor(1e3/E):5};var p=new MessageChannel,m=p.port2;p.port1.onmessage=function(){if(k!==null){var E=e.unstable_now();f=E+c;try{k(!0,E)?m.postMessage(null):(C=!1,k=null)}catch(x){throw m.postMessage(null),x}}else C=!1},t=function(E){k=E,C||(C=!0,m.postMessage(null))},n=function(E,x){d=v(function(){E(e.unstable_now())},x)},r=function(){h(d),d=-1}}function N(E,x){var D=E.length;E.push(x);e:for(;;){var H=D-1>>>1,K=E[H];if(K!==void 0&&0<A(K,x))E[H]=x,E[D]=K,D=H;else break e}}function S(E){return E=E[0],E===void 0?null:E}function T(E){var x=E[0];if(x!==void 0){var D=E.pop();if(D!==x){E[0]=D;e:for(var H=0,K=E.length;H<K;){var vt=2*(H+1)-1,wt=E[vt],Pn=vt+1,zt=E[Pn];if(wt!==void 0&&0>A(wt,D))zt!==void 0&&0>A(zt,wt)?(E[H]=zt,E[Pn]=D,H=Pn):(E[H]=wt,E[vt]=D,H=vt);else if(zt!==void 0&&0>A(zt,D))E[H]=zt,E[Pn]=D,H=Pn;else break e}}return x}return null}function A(E,x){var D=E.sortIndex-x.sortIndex;return D!==0?D:E.id-x.id}var I=[],Q=[],Ji=1,me=null,J=3,Mr=!1,yt=!1,Nn=!1;function eo(E){for(var x=S(Q);x!==null;){if(x.callback===null)T(Q);else if(x.startTime<=E)T(Q),x.sortIndex=x.expirationTime,N(I,x);else break;x=S(Q)}}function to(E){if(Nn=!1,eo(E),!yt)if(S(I)!==null)yt=!0,t(no);else{var x=S(Q);x!==null&&n(to,x.startTime-E)}}function no(E,x){yt=!1,Nn&&(Nn=!1,r()),Mr=!0;var D=J;try{for(eo(x),me=S(I);me!==null&&(!(me.expirationTime>x)||E&&!e.unstable_shouldYield());){var H=me.callback;if(typeof H=="function"){me.callback=null,J=me.priorityLevel;var K=H(me.expirationTime<=x);x=e.unstable_now(),typeof K=="function"?me.callback=K:me===S(I)&&T(I),eo(x)}else T(I);me=S(I)}if(me!==null)var vt=!0;else{var wt=S(Q);wt!==null&&n(to,wt.startTime-x),vt=!1}return vt}finally{me=null,J=D,Mr=!1}}var gd=i;e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){yt||Mr||(yt=!0,t(no))},e.unstable_getCurrentPriorityLevel=function(){return J},e.unstable_getFirstCallbackNode=function(){return S(I)},e.unstable_next=function(E){switch(J){case 1:case 2:case 3:var x=3;break;default:x=J}var D=J;J=x;try{return E()}finally{J=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=gd,e.unstable_runWithPriority=function(E,x){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var D=J;J=E;try{return x()}finally{J=D}},e.unstable_scheduleCallback=function(E,x,D){var H=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?H+D:H):D=H,E){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=D+K,E={id:Ji++,callback:x,priorityLevel:E,startTime:D,expirationTime:K,sortIndex:-1},D>H?(E.sortIndex=D,N(Q,E),S(I)===null&&E===S(Q)&&(Nn?r():Nn=!0,n(to,D-H))):(E.sortIndex=K,N(I,E),yt||Mr||(yt=!0,t(no))),E},e.unstable_wrapCallback=function(E){var x=J;return function(){var D=J;J=x;try{return E.apply(this,arguments)}finally{J=D}}}})(qu);bu.exports=qu;/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mi=Fi.exports,z=Au,G=bu.exports;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!Mi)throw Error(y(227));var Gu=new Set,cr={};function Mt(e,t){un(e,t),un(e+"Capture",t)}function un(e,t){for(cr[e]=t,e=0;e<t.length;e++)Gu.add(t[e])}var He=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),Td=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,jl=Object.prototype.hasOwnProperty,Vl={},zl={};function Nd(e){return jl.call(zl,e)?!0:jl.call(Vl,e)?!1:Td.test(e)?zl[e]=!0:(Vl[e]=!0,!1)}function Pd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function xd(e,t,n,r){if(t===null||typeof t=="undefined"||Pd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function se(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var Z={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Z[e]=new se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Z[t]=new se(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Z[e]=new se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Z[e]=new se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Z[e]=new se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Z[e]=new se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Z[e]=new se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Z[e]=new se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Z[e]=new se(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ds=/[\-:]([a-z])/g;function Rs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ds,Rs);Z[t]=new se(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ds,Rs);Z[t]=new se(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ds,Rs);Z[t]=new se(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Z[e]=new se(e,1,!1,e.toLowerCase(),null,!1,!1)});Z.xlinkHref=new se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Z[e]=new se(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ls(e,t,n,r){var i=Z.hasOwnProperty(t)?Z[t]:null,o=i!==null?i.type===0:r?!1:!(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N");o||(xd(t,n,i,r)&&(n=null),r||i===null?Nd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var $t=Mi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Bn=60103,_t=60106,Ye=60107,Fs=60108,Gn=60114,Ms=60109,$s=60110,$i=60112,Qn=60113,si=60120,ji=60115,js=60116,Vs=60121,zs=60128,Qu=60129,Bs=60130,Ro=60131;if(typeof Symbol=="function"&&Symbol.for){var q=Symbol.for;Bn=q("react.element"),_t=q("react.portal"),Ye=q("react.fragment"),Fs=q("react.strict_mode"),Gn=q("react.profiler"),Ms=q("react.provider"),$s=q("react.context"),$i=q("react.forward_ref"),Qn=q("react.suspense"),si=q("react.suspense_list"),ji=q("react.memo"),js=q("react.lazy"),Vs=q("react.block"),q("react.scope"),zs=q("react.opaque.id"),Qu=q("react.debug_trace_mode"),Bs=q("react.offscreen"),Ro=q("react.legacy_hidden")}var Bl=typeof Symbol=="function"&&Symbol.iterator;function xn(e){return e===null||typeof e!="object"?null:(e=Bl&&e[Bl]||e["@@iterator"],typeof e=="function"?e:null)}var io;function Un(e){if(io===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);io=t&&t[1]||""}return`
`+io+e}var oo=!1;function jr(e,t){if(!e||oo)return"";oo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(a){var r=a}Reflect.construct(e,[],t)}else{try{t.call()}catch(a){r=a}e.call(t.prototype)}else{try{throw Error()}catch(a){r=a}e()}}catch(a){if(a&&r&&typeof a.stack=="string"){for(var i=a.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l])return`
`+i[s].replace(" at new "," at ");while(1<=s&&0<=l);break}}}finally{oo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Un(e):""}function Ad(e){switch(e.tag){case 5:return Un(e.type);case 16:return Un("Lazy");case 13:return Un("Suspense");case 19:return Un("SuspenseList");case 0:case 2:case 15:return e=jr(e.type,!1),e;case 11:return e=jr(e.type.render,!1),e;case 22:return e=jr(e.type._render,!1),e;case 1:return e=jr(e.type,!0),e;default:return""}}function Xt(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ye:return"Fragment";case _t:return"Portal";case Gn:return"Profiler";case Fs:return"StrictMode";case Qn:return"Suspense";case si:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case $s:return(e.displayName||"Context")+".Consumer";case Ms:return(e._context.displayName||"Context")+".Provider";case $i:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case ji:return Xt(e.type);case Vs:return Xt(e._render);case js:t=e._payload,e=e._init;try{return Xt(e(t))}catch{}}return null}function ut(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function Ku(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Od(e){var t=Ku(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Vr(e){e._valueTracker||(e._valueTracker=Od(e))}function Yu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ku(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function li(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function Lo(e,t){var n=t.checked;return z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function Ul(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ut(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Xu(e,t){t=t.checked,t!=null&&Ls(e,"checked",t,!1)}function Fo(e,t){Xu(e,t);var n=ut(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Mo(e,t.type,n):t.hasOwnProperty("defaultValue")&&Mo(e,t.type,ut(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Hl(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Mo(e,t,n){(t!=="number"||li(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}function Dd(e){var t="";return Mi.Children.forEach(e,function(n){n!=null&&(t+=n)}),t}function $o(e,t){return e=z({children:void 0},t),(t=Dd(t.children))&&(e.children=t),e}function Zt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ut(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function jo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(y(91));return z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Wl(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(y(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ut(n)}}function Zu(e,t){var n=ut(t.value),r=ut(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function bl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}var Vo={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function Ju(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ju(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var zr,ec=function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!==Vo.svg||"innerHTML"in e)e.innerHTML=t;else{for(zr=zr||document.createElement("div"),zr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=zr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function fr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Kn={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Rd=["Webkit","ms","Moz","O"];Object.keys(Kn).forEach(function(e){Rd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Kn[t]=Kn[e]})});function tc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Kn.hasOwnProperty(e)&&Kn[e]?(""+t).trim():t+"px"}function nc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=tc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Ld=z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Bo(e,t){if(t){if(Ld[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(y(60));if(!(typeof t.dangerouslySetInnerHTML=="object"&&"__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(y(62))}}function Uo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function Us(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ho=null,Jt=null,en=null;function ql(e){if(e=Ar(e)){if(typeof Ho!="function")throw Error(y(280));var t=e.stateNode;t&&(t=Wi(t),Ho(e.stateNode,e.type,t))}}function rc(e){Jt?en?en.push(e):en=[e]:Jt=e}function ic(){if(Jt){var e=Jt,t=en;if(en=Jt=null,ql(e),t)for(e=0;e<t.length;e++)ql(t[e])}}function Hs(e,t){return e(t)}function oc(e,t,n,r,i){return e(t,n,r,i)}function Ws(){}var sc=Hs,kt=!1,so=!1;function bs(){(Jt!==null||en!==null)&&(Ws(),ic())}function Fd(e,t,n){if(so)return e(t,n);so=!0;try{return sc(e,t,n)}finally{so=!1,bs()}}function dr(e,t){var n=e.stateNode;if(n===null)return null;var r=Wi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(y(231,t,typeof n));return n}var Wo=!1;if(He)try{var An={};Object.defineProperty(An,"passive",{get:function(){Wo=!0}}),window.addEventListener("test",An,An),window.removeEventListener("test",An,An)}catch{Wo=!1}function Md(e,t,n,r,i,o,s,l,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(g){this.onError(g)}}var Yn=!1,ai=null,ui=!1,bo=null,$d={onError:function(e){Yn=!0,ai=e}};function jd(e,t,n,r,i,o,s,l,a){Yn=!1,ai=null,Md.apply($d,arguments)}function Vd(e,t,n,r,i,o,s,l,a){if(jd.apply(this,arguments),Yn){if(Yn){var u=ai;Yn=!1,ai=null}else throw Error(y(198));ui||(ui=!0,bo=u)}}function jt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&1026)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function lc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Gl(e){if(jt(e)!==e)throw Error(y(188))}function zd(e){var t=e.alternate;if(!t){if(t=jt(e),t===null)throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Gl(i),e;if(o===r)return Gl(i),t;o=o.sibling}throw Error(y(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(n.tag!==3)throw Error(y(188));return n.stateNode.current===n?e:t}function ac(e){if(e=zd(e),!e)return null;for(var t=e;;){if(t.tag===5||t.tag===6)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}function Ql(e,t){for(var n=e.alternate;t!==null;){if(t===e||t===n)return!0;t=t.return}return!1}var uc,qs,cc,fc,qo=!1,Pe=[],et=null,tt=null,nt=null,pr=new Map,hr=new Map,On=[],Kl="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Go(e,t,n,r,i){return{blockedOn:e,domEventName:t,eventSystemFlags:n|16,nativeEvent:i,targetContainers:[r]}}function Yl(e,t){switch(e){case"focusin":case"focusout":et=null;break;case"dragenter":case"dragleave":tt=null;break;case"mouseover":case"mouseout":nt=null;break;case"pointerover":case"pointerout":pr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":hr.delete(t.pointerId)}}function Dn(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e=Go(t,n,r,i,o),t!==null&&(t=Ar(t),t!==null&&qs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Bd(e,t,n,r,i){switch(t){case"focusin":return et=Dn(et,e,t,n,r,i),!0;case"dragenter":return tt=Dn(tt,e,t,n,r,i),!0;case"mouseover":return nt=Dn(nt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return pr.set(o,Dn(pr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,hr.set(o,Dn(hr.get(o)||null,e,t,n,r,i)),!0}return!1}function Ud(e){var t=Ct(e.target);if(t!==null){var n=jt(t);if(n!==null){if(t=n.tag,t===13){if(t=lc(n),t!==null){e.blockedOn=t,fc(e.lanePriority,function(){G.unstable_runWithPriority(e.priority,function(){cc(n)})});return}}else if(t===3&&n.stateNode.hydrate){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ys(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n!==null)return t=Ar(n),t!==null&&qs(t),e.blockedOn=n,!1;t.shift()}return!0}function Xl(e,t,n){Yr(e)&&n.delete(t)}function Hd(){for(qo=!1;0<Pe.length;){var e=Pe[0];if(e.blockedOn!==null){e=Ar(e.blockedOn),e!==null&&uc(e);break}for(var t=e.targetContainers;0<t.length;){var n=Ys(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n!==null){e.blockedOn=n;break}t.shift()}e.blockedOn===null&&Pe.shift()}et!==null&&Yr(et)&&(et=null),tt!==null&&Yr(tt)&&(tt=null),nt!==null&&Yr(nt)&&(nt=null),pr.forEach(Xl),hr.forEach(Xl)}function Rn(e,t){e.blockedOn===t&&(e.blockedOn=null,qo||(qo=!0,G.unstable_scheduleCallback(G.unstable_NormalPriority,Hd)))}function dc(e){function t(i){return Rn(i,e)}if(0<Pe.length){Rn(Pe[0],e);for(var n=1;n<Pe.length;n++){var r=Pe[n];r.blockedOn===e&&(r.blockedOn=null)}}for(et!==null&&Rn(et,e),tt!==null&&Rn(tt,e),nt!==null&&Rn(nt,e),pr.forEach(t),hr.forEach(t),n=0;n<On.length;n++)r=On[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<On.length&&(n=On[0],n.blockedOn===null);)Ud(n),n.blockedOn===null&&On.shift()}function Br(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var bt={animationend:Br("Animation","AnimationEnd"),animationiteration:Br("Animation","AnimationIteration"),animationstart:Br("Animation","AnimationStart"),transitionend:Br("Transition","TransitionEnd")},lo={},pc={};He&&(pc=document.createElement("div").style,"AnimationEvent"in window||(delete bt.animationend.animation,delete bt.animationiteration.animation,delete bt.animationstart.animation),"TransitionEvent"in window||delete bt.transitionend.transition);function Vi(e){if(lo[e])return lo[e];if(!bt[e])return e;var t=bt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in pc)return lo[e]=t[n];return e}var hc=Vi("animationend"),mc=Vi("animationiteration"),gc=Vi("animationstart"),yc=Vi("transitionend"),vc=new Map,Gs=new Map,Wd=["abort","abort",hc,"animationEnd",mc,"animationIteration",gc,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",yc,"transitionEnd","waiting","waiting"];function Qs(e,t){for(var n=0;n<e.length;n+=2){var r=e[n],i=e[n+1];i="on"+(i[0].toUpperCase()+i.slice(1)),Gs.set(r,t),vc.set(r,i),Mt(i,[r])}}var bd=G.unstable_now;bd();var $=8;function Ht(e){if((1&e)!==0)return $=15,1;if((2&e)!==0)return $=14,2;if((4&e)!==0)return $=13,4;var t=24&e;return t!==0?($=12,t):(e&32)!==0?($=11,32):(t=192&e,t!==0?($=10,t):(e&256)!==0?($=9,256):(t=3584&e,t!==0?($=8,t):(e&4096)!==0?($=7,4096):(t=4186112&e,t!==0?($=6,t):(t=62914560&e,t!==0?($=5,t):e&67108864?($=4,67108864):(e&134217728)!==0?($=3,134217728):(t=805306368&e,t!==0?($=2,t):(1073741824&e)!==0?($=1,1073741824):($=8,e))))))}function qd(e){switch(e){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function Gd(e){switch(e){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(y(358,e))}}function mr(e,t){var n=e.pendingLanes;if(n===0)return $=0;var r=0,i=0,o=e.expiredLanes,s=e.suspendedLanes,l=e.pingedLanes;if(o!==0)r=o,i=$=15;else if(o=n&134217727,o!==0){var a=o&~s;a!==0?(r=Ht(a),i=$):(l&=o,l!==0&&(r=Ht(l),i=$))}else o=n&~s,o!==0?(r=Ht(o),i=$):l!==0&&(r=Ht(l),i=$);if(r===0)return 0;if(r=31-ct(r),r=n&((0>r?0:1<<r)<<1)-1,t!==0&&t!==r&&(t&s)===0){if(Ht(t),i<=$)return t;$=i}if(t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ct(t),i=1<<n,r|=e[n],t&=~i;return r}function wc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ci(e,t){switch(e){case 15:return 1;case 14:return 2;case 12:return e=Wt(24&~t),e===0?ci(10,t):e;case 10:return e=Wt(192&~t),e===0?ci(8,t):e;case 8:return e=Wt(3584&~t),e===0&&(e=Wt(4186112&~t),e===0&&(e=512)),e;case 2:return t=Wt(805306368&~t),t===0&&(t=268435456),t}throw Error(y(358,e))}function Wt(e){return e&-e}function ao(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function zi(e,t,n){e.pendingLanes|=t;var r=t-1;e.suspendedLanes&=r,e.pingedLanes&=r,e=e.eventTimes,t=31-ct(t),e[t]=n}var ct=Math.clz32?Math.clz32:Yd,Qd=Math.log,Kd=Math.LN2;function Yd(e){return e===0?32:31-(Qd(e)/Kd|0)|0}var Xd=G.unstable_UserBlockingPriority,Zd=G.unstable_runWithPriority,Xr=!0;function Jd(e,t,n,r){kt||Ws();var i=Ks,o=kt;kt=!0;try{oc(i,e,t,n,r)}finally{(kt=o)||bs()}}function ep(e,t,n,r){Zd(Xd,Ks.bind(null,e,t,n,r))}function Ks(e,t,n,r){if(Xr){var i;if((i=(t&4)===0)&&0<Pe.length&&-1<Kl.indexOf(e))e=Go(null,e,t,n,r),Pe.push(e);else{var o=Ys(e,t,n,r);if(o===null)i&&Yl(e,r);else{if(i){if(-1<Kl.indexOf(e)){e=Go(o,e,t,n,r),Pe.push(e);return}if(Bd(o,e,t,n,r))return;Yl(e,r)}Dc(e,t,r,null,n)}}}}function Ys(e,t,n,r){var i=Us(r);if(i=Ct(i),i!==null){var o=jt(i);if(o===null)i=null;else{var s=o.tag;if(s===13){if(i=lc(o),i!==null)return i;i=null}else if(s===3){if(o.stateNode.hydrate)return o.tag===3?o.stateNode.containerInfo:null;i=null}else o!==i&&(i=null)}}return Dc(e,t,r,i,n),null}var Xe=null,Xs=null,Zr=null;function Sc(){if(Zr)return Zr;var e,t=Xs,n=t.length,r,i="value"in Xe?Xe.value:Xe.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Zr=i.slice(e,1<r?1-r:void 0)}function Jr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ur(){return!0}function Zl(){return!1}function he(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ur:Zl,this.isPropagationStopped=Zl,this}return z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ur)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ur)},persist:function(){},isPersistent:Ur}),t}var vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zs=he(vn),xr=z({},vn,{view:0,detail:0}),tp=he(xr),uo,co,Ln,Bi=z({},xr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Js,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ln&&(Ln&&e.type==="mousemove"?(uo=e.screenX-Ln.screenX,co=e.screenY-Ln.screenY):co=uo=0,Ln=e),uo)},movementY:function(e){return"movementY"in e?e.movementY:co}}),Jl=he(Bi),np=z({},Bi,{dataTransfer:0}),rp=he(np),ip=z({},xr,{relatedTarget:0}),fo=he(ip),op=z({},vn,{animationName:0,elapsedTime:0,pseudoElement:0}),sp=he(op),lp=z({},vn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ap=he(lp),up=z({},vn,{data:0}),ea=he(up),cp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=dp[e])?!!t[e]:!1}function Js(){return pp}var hp=z({},xr,{key:function(e){if(e.key){var t=cp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Jr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Js,charCode:function(e){return e.type==="keypress"?Jr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Jr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mp=he(hp),gp=z({},Bi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ta=he(gp),yp=z({},xr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Js}),vp=he(yp),wp=z({},vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sp=he(wp),Ep=z({},Bi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_p=he(Ep),kp=[9,13,27,32],el=He&&"CompositionEvent"in window,Xn=null;He&&"documentMode"in document&&(Xn=document.documentMode);var Cp=He&&"TextEvent"in window&&!Xn,Ec=He&&(!el||Xn&&8<Xn&&11>=Xn),na=String.fromCharCode(32),ra=!1;function _c(e,t){switch(e){case"keyup":return kp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qt=!1;function Ip(e,t){switch(e){case"compositionend":return kc(t);case"keypress":return t.which!==32?null:(ra=!0,na);case"textInput":return e=t.data,e===na&&ra?null:e;default:return null}}function Tp(e,t){if(qt)return e==="compositionend"||!el&&_c(e,t)?(e=Sc(),Zr=Xs=Xe=null,qt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ec&&t.locale!=="ko"?null:t.data;default:return null}}var Np={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ia(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Np[e.type]:t==="textarea"}function Cc(e,t,n,r){rc(r),t=fi(t,"onChange"),0<t.length&&(n=new Zs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Zn=null,gr=null;function Pp(e){xc(e,0)}function Ui(e){var t=Qt(e);if(Yu(t))return e}function xp(e,t){if(e==="change")return t}var Ic=!1;if(He){var po;if(He){var ho="oninput"in document;if(!ho){var oa=document.createElement("div");oa.setAttribute("oninput","return;"),ho=typeof oa.oninput=="function"}po=ho}else po=!1;Ic=po&&(!document.documentMode||9<document.documentMode)}function sa(){Zn&&(Zn.detachEvent("onpropertychange",Tc),gr=Zn=null)}function Tc(e){if(e.propertyName==="value"&&Ui(gr)){var t=[];if(Cc(t,gr,e,Us(e)),e=Pp,kt)e(t);else{kt=!0;try{Hs(e,t)}finally{kt=!1,bs()}}}}function Ap(e,t,n){e==="focusin"?(sa(),Zn=t,gr=n,Zn.attachEvent("onpropertychange",Tc)):e==="focusout"&&sa()}function Op(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ui(gr)}function Dp(e,t){if(e==="click")return Ui(t)}function Rp(e,t){if(e==="input"||e==="change")return Ui(t)}function Lp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ye=typeof Object.is=="function"?Object.is:Lp,Fp=Object.prototype.hasOwnProperty;function yr(e,t){if(ye(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!Fp.call(t,n[r])||!ye(e[n[r]],t[n[r]]))return!1;return!0}function la(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function aa(e,t){var n=la(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=la(n)}}function Nc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Nc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ua(){for(var e=window,t=li();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=li(e.document)}return t}function Qo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Mp=He&&"documentMode"in document&&11>=document.documentMode,Gt=null,Ko=null,Jn=null,Yo=!1;function ca(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Yo||Gt==null||Gt!==li(r)||(r=Gt,"selectionStart"in r&&Qo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Jn&&yr(Jn,r)||(Jn=r,r=fi(Ko,"onSelect"),0<r.length&&(t=new Zs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Gt)))}Qs("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);Qs("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);Qs(Wd,2);for(var fa="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),mo=0;mo<fa.length;mo++)Gs.set(fa[mo],0);un("onMouseEnter",["mouseout","mouseover"]);un("onMouseLeave",["mouseout","mouseover"]);un("onPointerEnter",["pointerout","pointerover"]);un("onPointerLeave",["pointerout","pointerover"]);Mt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Pc=new Set("cancel close invalid load scroll toggle".split(" ").concat(Hn));function da(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Vd(r,t,void 0,e),e.currentTarget=null}function xc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==o&&i.isPropagationStopped())break e;da(i,l,u),o=a}else for(s=0;s<r.length;s++){if(l=r[s],a=l.instance,u=l.currentTarget,l=l.listener,a!==o&&i.isPropagationStopped())break e;da(i,l,u),o=a}}}if(ui)throw e=bo,ui=!1,bo=null,e}function j(e,t){var n=Lc(t),r=e+"__bubble";n.has(r)||(Oc(t,e,2,!1),n.add(r))}var pa="_reactListening"+Math.random().toString(36).slice(2);function Ac(e){e[pa]||(e[pa]=!0,Gu.forEach(function(t){Pc.has(t)||ha(t,!1,e,null),ha(t,!0,e,null)}))}function ha(e,t,n,r){var i=4<arguments.length&&arguments[4]!==void 0?arguments[4]:0,o=n;if(e==="selectionchange"&&n.nodeType!==9&&(o=n.ownerDocument),r!==null&&!t&&Pc.has(e)){if(e!=="scroll")return;i|=2,o=r}var s=Lc(o),l=e+"__"+(t?"capture":"bubble");s.has(l)||(t&&(i|=4),Oc(o,e,i,t),s.add(l))}function Oc(e,t,n,r){var i=Gs.get(t);switch(i===void 0?2:i){case 0:i=Jd;break;case 1:i=ep;break;default:i=Ks}n=i.bind(null,t,n,e),i=void 0,!Wo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Dc(e,t,n,r,i){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var a=s.tag;if((a===3||a===4)&&(a=s.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;s=s.return}for(;l!==null;){if(s=Ct(l),s===null)return;if(a=s.tag,a===5||a===6){r=o=s;continue e}l=l.parentNode}}r=r.return}Fd(function(){var u=o,g=Us(n),v=[];e:{var h=vc.get(e);if(h!==void 0){var w=Zs,C=e;switch(e){case"keypress":if(Jr(n)===0)break e;case"keydown":case"keyup":w=mp;break;case"focusin":C="focus",w=fo;break;case"focusout":C="blur",w=fo;break;case"beforeblur":case"afterblur":w=fo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Jl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=rp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=vp;break;case hc:case mc:case gc:w=sp;break;case yc:w=Sp;break;case"scroll":w=tp;break;case"wheel":w=_p;break;case"copy":case"cut":case"paste":w=ap;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=ta}var k=(t&4)!==0,d=!k&&e==="scroll",c=k?h!==null?h+"Capture":null:h;k=[];for(var f=u,p;f!==null;){p=f;var m=p.stateNode;if(p.tag===5&&m!==null&&(p=m,c!==null&&(m=dr(f,c),m!=null&&k.push(vr(f,m,p)))),d)break;f=f.return}0<k.length&&(h=new w(h,C,null,n,g),v.push({event:h,listeners:k}))}}if((t&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",h&&(t&16)===0&&(C=n.relatedTarget||n.fromElement)&&(Ct(C)||C[wn]))break e;if((w||h)&&(h=g.window===g?g:(h=g.ownerDocument)?h.defaultView||h.parentWindow:window,w?(C=n.relatedTarget||n.toElement,w=u,C=C?Ct(C):null,C!==null&&(d=jt(C),C!==d||C.tag!==5&&C.tag!==6)&&(C=null)):(w=null,C=u),w!==C)){if(k=Jl,m="onMouseLeave",c="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(k=ta,m="onPointerLeave",c="onPointerEnter",f="pointer"),d=w==null?h:Qt(w),p=C==null?h:Qt(C),h=new k(m,f+"leave",w,n,g),h.target=d,h.relatedTarget=p,m=null,Ct(g)===u&&(k=new k(c,f+"enter",C,n,g),k.target=p,k.relatedTarget=d,m=k),d=m,w&&C)t:{for(k=w,c=C,f=0,p=k;p;p=Bt(p))f++;for(p=0,m=c;m;m=Bt(m))p++;for(;0<f-p;)k=Bt(k),f--;for(;0<p-f;)c=Bt(c),p--;for(;f--;){if(k===c||c!==null&&k===c.alternate)break t;k=Bt(k),c=Bt(c)}k=null}else k=null;w!==null&&ma(v,h,w,k,!1),C!==null&&d!==null&&ma(v,d,C,k,!0)}}e:{if(h=u?Qt(u):window,w=h.nodeName&&h.nodeName.toLowerCase(),w==="select"||w==="input"&&h.type==="file")var N=xp;else if(ia(h))if(Ic)N=Rp;else{N=Op;var S=Ap}else(w=h.nodeName)&&w.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(N=Dp);if(N&&(N=N(e,u))){Cc(v,N,n,g);break e}S&&S(e,h,u),e==="focusout"&&(S=h._wrapperState)&&S.controlled&&h.type==="number"&&Mo(h,"number",h.value)}switch(S=u?Qt(u):window,e){case"focusin":(ia(S)||S.contentEditable==="true")&&(Gt=S,Ko=u,Jn=null);break;case"focusout":Jn=Ko=Gt=null;break;case"mousedown":Yo=!0;break;case"contextmenu":case"mouseup":case"dragend":Yo=!1,ca(v,n,g);break;case"selectionchange":if(Mp)break;case"keydown":case"keyup":ca(v,n,g)}var T;if(el)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else qt?_c(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(Ec&&n.locale!=="ko"&&(qt||A!=="onCompositionStart"?A==="onCompositionEnd"&&qt&&(T=Sc()):(Xe=g,Xs="value"in Xe?Xe.value:Xe.textContent,qt=!0)),S=fi(u,A),0<S.length&&(A=new ea(A,e,null,n,g),v.push({event:A,listeners:S}),T?A.data=T:(T=kc(n),T!==null&&(A.data=T)))),(T=Cp?Ip(e,n):Tp(e,n))&&(u=fi(u,"onBeforeInput"),0<u.length&&(g=new ea("onBeforeInput","beforeinput",null,n,g),v.push({event:g,listeners:u}),g.data=T))}xc(v,t)})}function vr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function fi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=dr(e,n),o!=null&&r.unshift(vr(e,o,i)),o=dr(e,t),o!=null&&r.push(vr(e,o,i))),e=e.return}return r}function Bt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ma(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=dr(n,o),a!=null&&s.unshift(vr(n,a,l))):i||(a=dr(n,o),a!=null&&s.push(vr(n,a,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}function di(){}var go=null,yo=null;function Rc(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function Xo(e,t){return e==="textarea"||e==="option"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ga=typeof setTimeout=="function"?setTimeout:void 0,$p=typeof clearTimeout=="function"?clearTimeout:void 0;function tl(e){e.nodeType===1?e.textContent="":e.nodeType===9&&(e=e.body,e!=null&&(e.textContent=""))}function tn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break}return e}function ya(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var vo=0;function jp(e){return{$$typeof:zs,toString:e,valueOf:e}}var Hi=Math.random().toString(36).slice(2),Ze="__reactFiber$"+Hi,pi="__reactProps$"+Hi,wn="__reactContainer$"+Hi,va="__reactEvents$"+Hi;function Ct(e){var t=e[Ze];if(t)return t;for(var n=e.parentNode;n;){if(t=n[wn]||n[Ze]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ya(e);e!==null;){if(n=e[Ze])return n;e=ya(e)}return t}e=n,n=e.parentNode}return null}function Ar(e){return e=e[Ze]||e[wn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function Wi(e){return e[pi]||null}function Lc(e){var t=e[va];return t===void 0&&(t=e[va]=new Set),t}var Zo=[],Kt=-1;function mt(e){return{current:e}}function V(e){0>Kt||(e.current=Zo[Kt],Zo[Kt]=null,Kt--)}function U(e,t){Kt++,Zo[Kt]=e.current,e.current=t}var ft={},re=mt(ft),ue=mt(!1),xt=ft;function cn(e,t){var n=e.type.contextTypes;if(!n)return ft;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ce(e){return e=e.childContextTypes,e!=null}function hi(){V(ue),V(re)}function wa(e,t,n){if(re.current!==ft)throw Error(y(168));U(re,t),U(ue,n)}function Fc(e,t,n){var r=e.stateNode;if(e=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(y(108,Xt(t)||"Unknown",i));return z({},n,r)}function ei(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ft,xt=re.current,U(re,e),U(ue,ue.current),!0}function Sa(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=Fc(e,t,xt),r.__reactInternalMemoizedMergedChildContext=e,V(ue),V(re),U(re,e)):V(ue),U(ue,n)}var nl=null,Pt=null,Vp=G.unstable_runWithPriority,rl=G.unstable_scheduleCallback,Jo=G.unstable_cancelCallback,zp=G.unstable_shouldYield,Ea=G.unstable_requestPaint,es=G.unstable_now,Bp=G.unstable_getCurrentPriorityLevel,bi=G.unstable_ImmediatePriority,Mc=G.unstable_UserBlockingPriority,$c=G.unstable_NormalPriority,jc=G.unstable_LowPriority,Vc=G.unstable_IdlePriority,wo={},Up=Ea!==void 0?Ea:function(){},Fe=null,ti=null,So=!1,_a=es(),te=1e4>_a?es:function(){return es()-_a};function fn(){switch(Bp()){case bi:return 99;case Mc:return 98;case $c:return 97;case jc:return 96;case Vc:return 95;default:throw Error(y(332))}}function zc(e){switch(e){case 99:return bi;case 98:return Mc;case 97:return $c;case 96:return jc;case 95:return Vc;default:throw Error(y(332))}}function At(e,t){return e=zc(e),Vp(e,t)}function wr(e,t,n){return e=zc(e),rl(e,t,n)}function Le(){if(ti!==null){var e=ti;ti=null,Jo(e)}Bc()}function Bc(){if(!So&&Fe!==null){So=!0;var e=0;try{var t=Fe;At(99,function(){for(;e<t.length;e++){var n=t[e];do n=n(!0);while(n!==null)}}),Fe=null}catch(n){throw Fe!==null&&(Fe=Fe.slice(e+1)),rl(bi,Le),n}finally{So=!1}}}var Hp=$t.ReactCurrentBatchConfig;function Ie(e,t){if(e&&e.defaultProps){t=z({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var mi=mt(null),gi=null,Yt=null,yi=null;function il(){yi=Yt=gi=null}function ol(e){var t=mi.current;V(mi),e.type._context._currentValue=t}function Uc(e,t){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)===t){if(n===null||(n.childLanes&t)===t)break;n.childLanes|=t}else e.childLanes|=t,n!==null&&(n.childLanes|=t);e=e.return}}function nn(e,t){gi=e,yi=Yt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Te=!0),e.firstContext=null)}function Ee(e,t){if(yi!==e&&t!==!1&&t!==0)if((typeof t!="number"||t===1073741823)&&(yi=e,t=1073741823),t={context:e,observedBits:t,next:null},Yt===null){if(gi===null)throw Error(y(308));Yt=t,gi.dependencies={lanes:0,firstContext:t,responders:null}}else Yt=Yt.next=t;return e._currentValue}var Qe=!1;function sl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function Hc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function rt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function it(e,t){if(e=e.updateQueue,e!==null){e=e.shared;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}}function ka(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Sr(e,t,n,r){var i=e.updateQueue;Qe=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,s===null?o=u:s.next=u,s=a;var g=e.alternate;if(g!==null){g=g.updateQueue;var v=g.lastBaseUpdate;v!==s&&(v===null?g.firstBaseUpdate=u:v.next=u,g.lastBaseUpdate=a)}}if(o!==null){v=i.baseState,s=0,g=u=a=null;do{l=o.lane;var h=o.eventTime;if((r&l)===l){g!==null&&(g=g.next={eventTime:h,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var w=e,C=o;switch(l=t,h=n,C.tag){case 1:if(w=C.payload,typeof w=="function"){v=w.call(h,v,l);break e}v=w;break e;case 3:w.flags=w.flags&-4097|64;case 0:if(w=C.payload,l=typeof w=="function"?w.call(h,v,l):w,l==null)break e;v=z({},v,l);break e;case 2:Qe=!0}}o.callback!==null&&(e.flags|=32,l=i.effects,l===null?i.effects=[o]:l.push(o))}else h={eventTime:h,lane:l,tag:o.tag,payload:o.payload,callback:o.callback,next:null},g===null?(u=g=h,a=v):g=g.next=h,s|=l;if(o=o.next,o===null){if(l=i.shared.pending,l===null)break;o=l.next,l.next=null,i.lastBaseUpdate=l,i.shared.pending=null}}while(1);g===null&&(a=v),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=g,Dr|=s,e.lanes=s,e.memoizedState=v}}function Ca(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(y(191,i));i.call(r)}}}var Wc=new Mi.Component().refs;function vi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var qi={isMounted:function(e){return(e=e._reactInternals)?jt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=de(),i=ot(e),o=rt(r,i);o.payload=t,n!=null&&(o.callback=n),it(e,o),st(e,i,r)},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=de(),i=ot(e),o=rt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),it(e,o),st(e,i,r)},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=de(),r=ot(e),i=rt(n,r);i.tag=2,t!=null&&(i.callback=t),it(e,i),st(e,r,n)}};function Ia(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!yr(n,r)||!yr(i,o):!0}function bc(e,t,n){var r=!1,i=ft,o=t.contextType;return typeof o=="object"&&o!==null?o=Ee(o):(i=ce(t)?xt:re.current,r=t.contextTypes,o=(r=r!=null)?cn(e,i):ft),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=qi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ta(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&qi.enqueueReplaceState(t,t.state,null)}function ts(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Wc,sl(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ee(o):(o=ce(t)?xt:re.current,i.context=cn(e,o)),Sr(e,n,i,r),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(vi(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&qi.enqueueReplaceState(i,i.state,null),Sr(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4)}var Hr=Array.isArray;function Fn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var s=r.refs;s===Wc&&(s=r.refs={}),o===null?delete s[i]:s[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function Wr(e,t){if(e.type!=="textarea")throw Error(y(31,Object.prototype.toString.call(t)==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":t))}function qc(e){function t(d,c){if(e){var f=d.lastEffect;f!==null?(f.nextEffect=c,d.lastEffect=c):d.firstEffect=d.lastEffect=c,c.nextEffect=null,c.flags=8}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function i(d,c){return d=pt(d,c),d.index=0,d.sibling=null,d}function o(d,c,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<c?(d.flags=2,c):f):(d.flags=2,c)):c}function s(d){return e&&d.alternate===null&&(d.flags=2),d}function l(d,c,f,p){return c===null||c.tag!==6?(c=Io(f,d.mode,p),c.return=d,c):(c=i(c,f),c.return=d,c)}function a(d,c,f,p){return c!==null&&c.elementType===f.type?(p=i(c,f.props),p.ref=Fn(d,c,f),p.return=d,p):(p=oi(f.type,f.key,f.props,null,d.mode,p),p.ref=Fn(d,c,f),p.return=d,p)}function u(d,c,f,p){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=To(f,d.mode,p),c.return=d,c):(c=i(c,f.children||[]),c.return=d,c)}function g(d,c,f,p,m){return c===null||c.tag!==7?(c=ln(f,d.mode,p,m),c.return=d,c):(c=i(c,f),c.return=d,c)}function v(d,c,f){if(typeof c=="string"||typeof c=="number")return c=Io(""+c,d.mode,f),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Bn:return f=oi(c.type,c.key,c.props,null,d.mode,f),f.ref=Fn(d,null,c),f.return=d,f;case _t:return c=To(c,d.mode,f),c.return=d,c}if(Hr(c)||xn(c))return c=ln(c,d.mode,f,null),c.return=d,c;Wr(d,c)}return null}function h(d,c,f,p){var m=c!==null?c.key:null;if(typeof f=="string"||typeof f=="number")return m!==null?null:l(d,c,""+f,p);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Bn:return f.key===m?f.type===Ye?g(d,c,f.props.children,p,m):a(d,c,f,p):null;case _t:return f.key===m?u(d,c,f,p):null}if(Hr(f)||xn(f))return m!==null?null:g(d,c,f,p,null);Wr(d,f)}return null}function w(d,c,f,p,m){if(typeof p=="string"||typeof p=="number")return d=d.get(f)||null,l(c,d,""+p,m);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Bn:return d=d.get(p.key===null?f:p.key)||null,p.type===Ye?g(c,d,p.props.children,m,p.key):a(c,d,p,m);case _t:return d=d.get(p.key===null?f:p.key)||null,u(c,d,p,m)}if(Hr(p)||xn(p))return d=d.get(f)||null,g(c,d,p,m,null);Wr(c,p)}return null}function C(d,c,f,p){for(var m=null,N=null,S=c,T=c=0,A=null;S!==null&&T<f.length;T++){S.index>T?(A=S,S=null):A=S.sibling;var I=h(d,S,f[T],p);if(I===null){S===null&&(S=A);break}e&&S&&I.alternate===null&&t(d,S),c=o(I,c,T),N===null?m=I:N.sibling=I,N=I,S=A}if(T===f.length)return n(d,S),m;if(S===null){for(;T<f.length;T++)S=v(d,f[T],p),S!==null&&(c=o(S,c,T),N===null?m=S:N.sibling=S,N=S);return m}for(S=r(d,S);T<f.length;T++)A=w(S,d,T,f[T],p),A!==null&&(e&&A.alternate!==null&&S.delete(A.key===null?T:A.key),c=o(A,c,T),N===null?m=A:N.sibling=A,N=A);return e&&S.forEach(function(Q){return t(d,Q)}),m}function k(d,c,f,p){var m=xn(f);if(typeof m!="function")throw Error(y(150));if(f=m.call(f),f==null)throw Error(y(151));for(var N=m=null,S=c,T=c=0,A=null,I=f.next();S!==null&&!I.done;T++,I=f.next()){S.index>T?(A=S,S=null):A=S.sibling;var Q=h(d,S,I.value,p);if(Q===null){S===null&&(S=A);break}e&&S&&Q.alternate===null&&t(d,S),c=o(Q,c,T),N===null?m=Q:N.sibling=Q,N=Q,S=A}if(I.done)return n(d,S),m;if(S===null){for(;!I.done;T++,I=f.next())I=v(d,I.value,p),I!==null&&(c=o(I,c,T),N===null?m=I:N.sibling=I,N=I);return m}for(S=r(d,S);!I.done;T++,I=f.next())I=w(S,d,T,I.value,p),I!==null&&(e&&I.alternate!==null&&S.delete(I.key===null?T:I.key),c=o(I,c,T),N===null?m=I:N.sibling=I,N=I);return e&&S.forEach(function(Ji){return t(d,Ji)}),m}return function(d,c,f,p){var m=typeof f=="object"&&f!==null&&f.type===Ye&&f.key===null;m&&(f=f.props.children);var N=typeof f=="object"&&f!==null;if(N)switch(f.$$typeof){case Bn:e:{for(N=f.key,m=c;m!==null;){if(m.key===N){switch(m.tag){case 7:if(f.type===Ye){n(d,m.sibling),c=i(m,f.props.children),c.return=d,d=c;break e}break;default:if(m.elementType===f.type){n(d,m.sibling),c=i(m,f.props),c.ref=Fn(d,m,f),c.return=d,d=c;break e}}n(d,m);break}else t(d,m);m=m.sibling}f.type===Ye?(c=ln(f.props.children,d.mode,p,f.key),c.return=d,d=c):(p=oi(f.type,f.key,f.props,null,d.mode,p),p.ref=Fn(d,c,f),p.return=d,d=p)}return s(d);case _t:e:{for(m=f.key;c!==null;){if(c.key===m)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){n(d,c.sibling),c=i(c,f.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=To(f,d.mode,p),c.return=d,d=c}return s(d)}if(typeof f=="string"||typeof f=="number")return f=""+f,c!==null&&c.tag===6?(n(d,c.sibling),c=i(c,f),c.return=d,d=c):(n(d,c),c=Io(f,d.mode,p),c.return=d,d=c),s(d);if(Hr(f))return C(d,c,f,p);if(xn(f))return k(d,c,f,p);if(N&&Wr(d,f),typeof f=="undefined"&&!m)switch(d.tag){case 1:case 22:case 0:case 11:case 15:throw Error(y(152,Xt(d.type)||"Component"))}return n(d,c)}}var wi=qc(!0),Gc=qc(!1),Or={},Oe=mt(Or),Er=mt(Or),_r=mt(Or);function It(e){if(e===Or)throw Error(y(174));return e}function ns(e,t){switch(U(_r,t),U(Er,e),U(Oe,Or),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:zo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=zo(t,e)}V(Oe),U(Oe,t)}function dn(){V(Oe),V(Er),V(_r)}function Na(e){It(_r.current);var t=It(Oe.current),n=zo(t,e.type);t!==n&&(U(Er,e),U(Oe,n))}function ll(e){Er.current===e&&(V(Oe),V(Er))}var B=mt(0);function Si(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&64)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ve=null,Je=null,De=!1;function Qc(e,t){var n=ve(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=t,n.return=e,n.flags=8,e.lastEffect!==null?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function Pa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,!0):!1;case 13:return!1;default:return!1}}function rs(e){if(De){var t=Je;if(t){var n=t;if(!Pa(e,t)){if(t=tn(n.nextSibling),!t||!Pa(e,t)){e.flags=e.flags&-1025|2,De=!1,Ve=e;return}Qc(Ve,n)}Ve=e,Je=tn(t.firstChild)}else e.flags=e.flags&-1025|2,De=!1,Ve=e}}function xa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ve=e}function br(e){if(e!==Ve)return!1;if(!De)return xa(e),De=!0,!1;var t=e.type;if(e.tag!==5||t!=="head"&&t!=="body"&&!Xo(t,e.memoizedProps))for(t=Je;t;)Qc(e,t),t=tn(t.nextSibling);if(xa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Je=tn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Je=null}}else Je=Ve?tn(e.stateNode.nextSibling):null;return!0}function Eo(){Je=Ve=null,De=!1}var rn=[];function al(){for(var e=0;e<rn.length;e++)rn[e]._workInProgressVersionPrimary=null;rn.length=0}var er=$t.ReactCurrentDispatcher,we=$t.ReactCurrentBatchConfig,kr=0,W=null,ee=null,Y=null,Ei=!1,tr=!1;function le(){throw Error(y(321))}function ul(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ye(e[n],t[n]))return!1;return!0}function cl(e,t,n,r,i,o){if(kr=o,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,er.current=e===null||e.memoizedState===null?bp:qp,e=n(r,i),tr){o=0;do{if(tr=!1,!(25>o))throw Error(y(301));o+=1,Y=ee=null,t.updateQueue=null,er.current=Gp,e=n(r,i)}while(tr)}if(er.current=Ii,t=ee!==null&&ee.next!==null,kr=0,Y=ee=W=null,Ei=!1,t)throw Error(y(300));return e}function Tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Y===null?W.memoizedState=Y=e:Y=Y.next=e,Y}function Vt(){if(ee===null){var e=W.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var t=Y===null?W.memoizedState:Y.next;if(t!==null)Y=t,ee=e;else{if(e===null)throw Error(y(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},Y===null?W.memoizedState=Y=e:Y=Y.next=e}return Y}function xe(e,t){return typeof t=="function"?t(e):t}function Mn(e){var t=Vt(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=ee,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){i=i.next,r=r.baseState;var l=s=o=null,a=i;do{var u=a.lane;if((kr&u)===u)l!==null&&(l=l.next={lane:0,action:a.action,eagerReducer:a.eagerReducer,eagerState:a.eagerState,next:null}),r=a.eagerReducer===e?a.eagerState:e(r,a.action);else{var g={lane:u,action:a.action,eagerReducer:a.eagerReducer,eagerState:a.eagerState,next:null};l===null?(s=l=g,o=r):l=l.next=g,W.lanes|=u,Dr|=u}a=a.next}while(a!==null&&a!==i);l===null?o=r:l.next=s,ye(r,t.memoizedState)||(Te=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}return[t.memoizedState,n.dispatch]}function $n(e){var t=Vt(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);ye(o,t.memoizedState)||(Te=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Aa(e,t,n){var r=t._getVersion;r=r(t._source);var i=t._workInProgressVersionPrimary;if(i!==null?e=i===r:(e=e.mutableReadLanes,(e=(kr&e)===e)&&(t._workInProgressVersionPrimary=r,rn.push(t))),e)return n(t._source);throw rn.push(t),Error(y(350))}function Kc(e,t,n,r){var i=oe;if(i===null)throw Error(y(349));var o=t._getVersion,s=o(t._source),l=er.current,a=l.useState(function(){return Aa(i,t,n)}),u=a[1],g=a[0];a=Y;var v=e.memoizedState,h=v.refs,w=h.getSnapshot,C=v.source;v=v.subscribe;var k=W;return e.memoizedState={refs:h,source:t,subscribe:r},l.useEffect(function(){h.getSnapshot=n,h.setSnapshot=u;var d=o(t._source);if(!ye(s,d)){d=n(t._source),ye(g,d)||(u(d),d=ot(k),i.mutableReadLanes|=d&i.pendingLanes),d=i.mutableReadLanes,i.entangledLanes|=d;for(var c=i.entanglements,f=d;0<f;){var p=31-ct(f),m=1<<p;c[p]|=d,f&=~m}}},[n,t,r]),l.useEffect(function(){return r(t._source,function(){var d=h.getSnapshot,c=h.setSnapshot;try{c(d(t._source));var f=ot(k);i.mutableReadLanes|=f&i.pendingLanes}catch(p){c(function(){throw p})}})},[t,r]),ye(w,n)&&ye(C,t)&&ye(v,r)||(e={pending:null,dispatch:null,lastRenderedReducer:xe,lastRenderedState:g},e.dispatch=u=pl.bind(null,W,e),a.queue=e,a.baseQueue=null,g=Aa(i,t,n),a.memoizedState=a.baseState=g),g}function Yc(e,t,n){var r=Vt();return Kc(r,e,t,n)}function jn(e){var t=Tt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e=t.queue={pending:null,dispatch:null,lastRenderedReducer:xe,lastRenderedState:e},e=e.dispatch=pl.bind(null,W,e),[t.memoizedState,e]}function _i(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=W.updateQueue,t===null?(t={lastEffect:null},W.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Oa(e){var t=Tt();return e={current:e},t.memoizedState=e}function ki(){return Vt().memoizedState}function is(e,t,n,r){var i=Tt();W.flags|=e,i.memoizedState=_i(1|t,n,void 0,r===void 0?null:r)}function fl(e,t,n,r){var i=Vt();r=r===void 0?null:r;var o=void 0;if(ee!==null){var s=ee.memoizedState;if(o=s.destroy,r!==null&&ul(r,s.deps)){_i(t,n,o,r);return}}W.flags|=e,i.memoizedState=_i(1|t,n,o,r)}function Da(e,t){return is(516,4,e,t)}function Ci(e,t){return fl(516,4,e,t)}function Xc(e,t){return fl(4,2,e,t)}function Zc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Jc(e,t,n){return n=n!=null?n.concat([e]):null,fl(4,2,Zc.bind(null,t,e),n)}function dl(){}function ef(e,t){var n=Vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ul(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function tf(e,t){var n=Vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ul(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Wp(e,t){var n=fn();At(98>n?98:n,function(){e(!0)}),At(97<n?97:n,function(){var r=we.transition;we.transition=1;try{e(!1),t()}finally{we.transition=r}})}function pl(e,t,n){var r=de(),i=ot(e),o={lane:i,action:n,eagerReducer:null,eagerState:null,next:null},s=t.pending;if(s===null?o.next=o:(o.next=s.next,s.next=o),t.pending=o,s=e.alternate,e===W||s!==null&&s===W)tr=Ei=!0;else{if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var l=t.lastRenderedState,a=s(l,n);if(o.eagerReducer=s,o.eagerState=a,ye(a,l))return}catch{}finally{}st(e,i,r)}}var Ii={readContext:Ee,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useLayoutEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useMutableSource:le,useOpaqueIdentifier:le,unstable_isNewReconciler:!1},bp={readContext:Ee,useCallback:function(e,t){return Tt().memoizedState=[e,t===void 0?null:t],e},useContext:Ee,useEffect:Da,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,is(4,2,Zc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return is(4,2,e,t)},useMemo:function(e,t){var n=Tt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Tt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e=r.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},e=e.dispatch=pl.bind(null,W,e),[r.memoizedState,e]},useRef:Oa,useState:jn,useDebugValue:dl,useDeferredValue:function(e){var t=jn(e),n=t[0],r=t[1];return Da(function(){var i=we.transition;we.transition=1;try{r(e)}finally{we.transition=i}},[e]),n},useTransition:function(){var e=jn(!1),t=e[0];return e=Wp.bind(null,e[1]),Oa(e),[e,t]},useMutableSource:function(e,t,n){var r=Tt();return r.memoizedState={refs:{getSnapshot:t,setSnapshot:null},source:e,subscribe:n},Kc(r,e,t,n)},useOpaqueIdentifier:function(){if(De){var e=!1,t=jp(function(){throw e||(e=!0,n("r:"+(vo++).toString(36))),Error(y(355))}),n=jn(t)[1];return(W.mode&2)===0&&(W.flags|=516,_i(5,function(){n("r:"+(vo++).toString(36))},void 0,null)),t}return t="r:"+(vo++).toString(36),jn(t),t},unstable_isNewReconciler:!1},qp={readContext:Ee,useCallback:ef,useContext:Ee,useEffect:Ci,useImperativeHandle:Jc,useLayoutEffect:Xc,useMemo:tf,useReducer:Mn,useRef:ki,useState:function(){return Mn(xe)},useDebugValue:dl,useDeferredValue:function(e){var t=Mn(xe),n=t[0],r=t[1];return Ci(function(){var i=we.transition;we.transition=1;try{r(e)}finally{we.transition=i}},[e]),n},useTransition:function(){var e=Mn(xe)[0];return[ki().current,e]},useMutableSource:Yc,useOpaqueIdentifier:function(){return Mn(xe)[0]},unstable_isNewReconciler:!1},Gp={readContext:Ee,useCallback:ef,useContext:Ee,useEffect:Ci,useImperativeHandle:Jc,useLayoutEffect:Xc,useMemo:tf,useReducer:$n,useRef:ki,useState:function(){return $n(xe)},useDebugValue:dl,useDeferredValue:function(e){var t=$n(xe),n=t[0],r=t[1];return Ci(function(){var i=we.transition;we.transition=1;try{r(e)}finally{we.transition=i}},[e]),n},useTransition:function(){var e=$n(xe)[0];return[ki().current,e]},useMutableSource:Yc,useOpaqueIdentifier:function(){return $n(xe)[0]},unstable_isNewReconciler:!1},Qp=$t.ReactCurrentOwner,Te=!1;function ae(e,t,n,r){t.child=e===null?Gc(t,null,n,r):wi(t,e.child,n,r)}function Ra(e,t,n,r,i){n=n.render;var o=t.ref;return nn(t,i),r=cl(e,t,n,r,o,i),e!==null&&!Te?(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~i,ze(e,t,i)):(t.flags|=1,ae(e,t,r,i),t.child)}function La(e,t,n,r,i,o){if(e===null){var s=n.type;return typeof s=="function"&&!wl(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,nf(e,t,s,r,i,o)):(e=oi(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}return s=e.child,(i&o)===0&&(i=s.memoizedProps,n=n.compare,n=n!==null?n:yr,n(i,r)&&e.ref===t.ref)?ze(e,t,o):(t.flags|=1,e=pt(s,r),e.ref=t.ref,e.return=t,t.child=e)}function nf(e,t,n,r,i,o){if(e!==null&&yr(e.memoizedProps,r)&&e.ref===t.ref)if(Te=!1,(o&i)!==0)(e.flags&16384)!==0&&(Te=!0);else return t.lanes=e.lanes,ze(e,t,o);return os(e,t,n,r,o)}function _o(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden"||r.mode==="unstable-defer-without-hiding")if((t.mode&4)===0)t.memoizedState={baseLanes:0},Gr(t,n);else if((n&1073741824)!==0)t.memoizedState={baseLanes:0},Gr(t,o!==null?o.baseLanes:n);else return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e},Gr(t,e),null;else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Gr(t,r);return ae(e,t,i,n),t.child}function rf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=128)}function os(e,t,n,r,i){var o=ce(n)?xt:re.current;return o=cn(t,o),nn(t,i),n=cl(e,t,n,r,o,i),e!==null&&!Te?(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~i,ze(e,t,i)):(t.flags|=1,ae(e,t,n,i),t.child)}function Fa(e,t,n,r,i){if(ce(n)){var o=!0;ei(t)}else o=!1;if(nn(t,i),t.stateNode===null)e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),bc(t,n,r),ts(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var a=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ee(u):(u=ce(n)?xt:re.current,u=cn(t,u));var g=n.getDerivedStateFromProps,v=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function";v||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Ta(t,s,r,u),Qe=!1;var h=t.memoizedState;s.state=h,Sr(t,r,s,i),a=t.memoizedState,l!==r||h!==a||ue.current||Qe?(typeof g=="function"&&(vi(t,n,g,r),a=t.memoizedState),(l=Qe||Ia(t,n,l,r,h,a,u))?(v||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4)):(typeof s.componentDidMount=="function"&&(t.flags|=4),t.memoizedProps=r,t.memoizedState=a),s.props=r,s.state=a,s.context=u,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4),r=!1)}else{s=t.stateNode,Hc(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Ie(t.type,l),s.props=u,v=t.pendingProps,h=s.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ee(a):(a=ce(n)?xt:re.current,a=cn(t,a));var w=n.getDerivedStateFromProps;(g=typeof w=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==v||h!==a)&&Ta(t,s,r,a),Qe=!1,h=t.memoizedState,s.state=h,Sr(t,r,s,i);var C=t.memoizedState;l!==v||h!==C||ue.current||Qe?(typeof w=="function"&&(vi(t,n,w,r),C=t.memoizedState),(u=Qe||Ia(t,n,u,r,h,C,a))?(g||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,C,a),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,C,a)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=256)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=256),t.memoizedProps=r,t.memoizedState=C),s.props=r,s.state=C,s.context=a,r=u):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=256),r=!1)}return ss(e,t,n,r,o,i)}function ss(e,t,n,r,i,o){rf(e,t);var s=(t.flags&64)!==0;if(!r&&!s)return i&&Sa(t,n,!1),ze(e,t,o);r=t.stateNode,Qp.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=wi(t,e.child,null,o),t.child=wi(t,null,l,o)):ae(e,t,l,o),t.memoizedState=r.state,i&&Sa(t,n,!0),t.child}function Ma(e){var t=e.stateNode;t.pendingContext?wa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&wa(e,t.context,!1),ns(e,t.containerInfo)}var qr={dehydrated:null,retryLane:0};function $a(e,t,n){var r=t.pendingProps,i=B.current,o=!1,s;return(s=(t.flags&64)!==0)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-65):e!==null&&e.memoizedState===null||r.fallback===void 0||r.unstable_avoidThisFallback===!0||(i|=1),U(B,i&1),e===null?(r.fallback!==void 0&&rs(t),e=r.children,i=r.fallback,o?(e=ja(t,e,i,n),t.child.memoizedState={baseLanes:n},t.memoizedState=qr,e):typeof r.unstable_expectedLoadTime=="number"?(e=ja(t,e,i,n),t.child.memoizedState={baseLanes:n},t.memoizedState=qr,t.lanes=33554432,e):(n=Sl({mode:"visible",children:e},t.mode,n,null),n.return=t,t.child=n)):e.memoizedState!==null?o?(r=za(e,t,r.children,r.fallback,n),o=t.child,i=e.child.memoizedState,o.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},o.childLanes=e.childLanes&~n,t.memoizedState=qr,r):(n=Va(e,t,r.children,n),t.memoizedState=null,n):o?(r=za(e,t,r.children,r.fallback,n),o=t.child,i=e.child.memoizedState,o.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},o.childLanes=e.childLanes&~n,t.memoizedState=qr,r):(n=Va(e,t,r.children,n),t.memoizedState=null,n)}function ja(e,t,n,r){var i=e.mode,o=e.child;return t={mode:"hidden",children:t},(i&2)===0&&o!==null?(o.childLanes=0,o.pendingProps=t):o=Sl(t,i,0,null),n=ln(n,i,r,null),o.return=e,n.return=e,o.sibling=n,e.child=o,n}function Va(e,t,n,r){var i=e.child;return e=i.sibling,n=pt(i,{mode:"visible",children:n}),(t.mode&2)===0&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(e.nextEffect=null,e.flags=8,t.firstEffect=t.lastEffect=e),t.child=n}function za(e,t,n,r,i){var o=t.mode,s=e.child;e=s.sibling;var l={mode:"hidden",children:n};return(o&2)===0&&t.child!==s?(n=t.child,n.childLanes=0,n.pendingProps=l,s=n.lastEffect,s!==null?(t.firstEffect=n.firstEffect,t.lastEffect=s,s.nextEffect=null):t.firstEffect=t.lastEffect=null):n=pt(s,l),e!==null?r=pt(e,r):(r=ln(r,o,i,null),r.flags|=2),r.return=t,n.return=t,n.sibling=r,t.child=n,r}function Ba(e,t){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Uc(e.return,t)}function ko(e,t,n,r,i,o){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,lastEffect:o}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i,s.lastEffect=o)}function Ua(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ae(e,t,r.children,n),r=B.current,(r&2)!==0)r=r&1|2,t.flags|=64;else{if(e!==null&&(e.flags&64)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ba(e,n);else if(e.tag===19)Ba(e,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(B,r),(t.mode&2)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Si(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ko(t,!1,i,n,o,t.lastEffect);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Si(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ko(t,!0,n,null,o,t.lastEffect);break;case"together":ko(t,!1,null,null,void 0,t.lastEffect);break;default:t.memoizedState=null}return t.child}function ze(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Dr|=t.lanes,(n&t.childLanes)!==0){if(e!==null&&t.child!==e.child)throw Error(y(153));if(t.child!==null){for(e=t.child,n=pt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=pt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}return null}var of,ls,sf,lf;of=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ls=function(){};sf=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,It(Oe.current);var o=null;switch(n){case"input":i=Lo(e,i),r=Lo(e,r),o=[];break;case"option":i=$o(e,i),r=$o(e,r),o=[];break;case"select":i=z({},i,{value:void 0}),r=z({},r,{value:void 0}),o=[];break;case"textarea":i=jo(e,i),r=jo(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=di)}Bo(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(cr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||a&&a.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in a)a.hasOwnProperty(s)&&l[s]!==a[s]&&(n||(n={}),n[s]=a[s])}else n||(o||(o=[]),o.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(o=o||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(cr.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&j("scroll",e),o||l===a||(o=[])):typeof a=="object"&&a!==null&&a.$$typeof===zs?a.toString():(o=o||[]).push(u,a))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};lf=function(e,t,n,r){n!==r&&(t.flags|=4)};function Vn(e,t){if(!De)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Kp(e,t,n){var r=t.pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return ce(t.type)&&hi(),null;case 3:return dn(),V(ue),V(re),al(),r=t.stateNode,r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(br(t)?t.flags|=4:r.hydrate||(t.flags|=256)),ls(t),null;case 5:ll(t);var i=It(_r.current);if(n=t.type,e!==null&&t.stateNode!=null)sf(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=128);else{if(!r){if(t.stateNode===null)throw Error(y(166));return null}if(e=It(Oe.current),br(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ze]=t,r[pi]=o,n){case"dialog":j("cancel",r),j("close",r);break;case"iframe":case"object":case"embed":j("load",r);break;case"video":case"audio":for(e=0;e<Hn.length;e++)j(Hn[e],r);break;case"source":j("error",r);break;case"img":case"image":case"link":j("error",r),j("load",r);break;case"details":j("toggle",r);break;case"input":Ul(r,o),j("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},j("invalid",r);break;case"textarea":Wl(r,o),j("invalid",r)}Bo(n,o),e=null;for(var s in o)o.hasOwnProperty(s)&&(i=o[s],s==="children"?typeof i=="string"?r.textContent!==i&&(e=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(e=["children",""+i]):cr.hasOwnProperty(s)&&i!=null&&s==="onScroll"&&j("scroll",r));switch(n){case"input":Vr(r),Hl(r,o,!0);break;case"textarea":Vr(r),bl(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=di)}r=e,t.updateQueue=r,r!==null&&(t.flags|=4)}else{switch(s=i.nodeType===9?i:i.ownerDocument,e===Vo.html&&(e=Ju(n)),e===Vo.html?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Ze]=t,e[pi]=r,of(e,t,!1,!1),t.stateNode=e,s=Uo(n,r),n){case"dialog":j("cancel",e),j("close",e),i=r;break;case"iframe":case"object":case"embed":j("load",e),i=r;break;case"video":case"audio":for(i=0;i<Hn.length;i++)j(Hn[i],e);i=r;break;case"source":j("error",e),i=r;break;case"img":case"image":case"link":j("error",e),j("load",e),i=r;break;case"details":j("toggle",e),i=r;break;case"input":Ul(e,r),i=Lo(e,r),j("invalid",e);break;case"option":i=$o(e,r);break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=z({},r,{value:void 0}),j("invalid",e);break;case"textarea":Wl(e,r),i=jo(e,r),j("invalid",e);break;default:i=r}Bo(n,i);var l=i;for(o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="style"?nc(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&ec(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&fr(e,a):typeof a=="number"&&fr(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(cr.hasOwnProperty(o)?a!=null&&o==="onScroll"&&j("scroll",e):a!=null&&Ls(e,o,a,s))}switch(n){case"input":Vr(e),Hl(e,r,!1);break;case"textarea":Vr(e),bl(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ut(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Zt(e,!!r.multiple,o,!1):r.defaultValue!=null&&Zt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=di)}Rc(n,r)&&(t.flags|=4)}t.ref!==null&&(t.flags|=128)}return null;case 6:if(e&&t.stateNode!=null)lf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(y(166));n=It(_r.current),It(Oe.current),br(t)?(r=t.stateNode,n=t.memoizedProps,r[Ze]=t,r.nodeValue!==n&&(t.flags|=4)):(r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ze]=t,t.stateNode=r)}return null;case 13:return V(B),r=t.memoizedState,(t.flags&64)!==0?(t.lanes=n,t):(r=r!==null,n=!1,e===null?t.memoizedProps.fallback!==void 0&&br(t):n=e.memoizedState!==null,r&&!n&&(t.mode&2)!==0&&(e===null&&t.memoizedProps.unstable_avoidThisFallback!==!0||(B.current&1)!==0?X===0&&(X=3):((X===0||X===3)&&(X=4),oe===null||(Dr&134217727)===0&&(En&134217727)===0||on(oe,ne))),(r||n)&&(t.flags|=4),null);case 4:return dn(),ls(t),e===null&&Ac(t.stateNode.containerInfo),null;case 10:return ol(t),null;case 17:return ce(t.type)&&hi(),null;case 19:if(V(B),r=t.memoizedState,r===null)return null;if(o=(t.flags&64)!==0,s=r.rendering,s===null)if(o)Vn(r,!1);else{if(X!==0||e!==null&&(e.flags&64)!==0)for(e=t.child;e!==null;){if(s=Si(e),s!==null){for(t.flags|=64,Vn(r,!1),o=s.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),r.lastEffect===null&&(t.firstEffect=null),t.lastEffect=r.lastEffect,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=2,o.nextEffect=null,o.firstEffect=null,o.lastEffect=null,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return U(B,B.current&1|2),t.child}e=e.sibling}r.tail!==null&&te()>ps&&(t.flags|=64,o=!0,Vn(r,!1),t.lanes=33554432)}else{if(!o)if(e=Si(s),e!==null){if(t.flags|=64,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Vn(r,!0),r.tail===null&&r.tailMode==="hidden"&&!s.alternate&&!De)return t=t.lastEffect=r.lastEffect,t!==null&&(t.nextEffect=null),null}else 2*te()-r.renderingStartTime>ps&&n!==1073741824&&(t.flags|=64,o=!0,Vn(r,!1),t.lanes=33554432);r.isBackwards?(s.sibling=t.child,t.child=s):(n=r.last,n!==null?n.sibling=s:t.child=s,r.last=s)}return r.tail!==null?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=t.lastEffect,r.renderingStartTime=te(),n.sibling=null,t=B.current,U(B,o?t&1|2:t&1),n):null;case 23:case 24:return vl(),e!==null&&e.memoizedState!==null!=(t.memoizedState!==null)&&r.mode!=="unstable-defer-without-hiding"&&(t.flags|=4),null}throw Error(y(156,t.tag))}function Yp(e){switch(e.tag){case 1:ce(e.type)&&hi();var t=e.flags;return t&4096?(e.flags=t&-4097|64,e):null;case 3:if(dn(),V(ue),V(re),al(),t=e.flags,(t&64)!==0)throw Error(y(285));return e.flags=t&-4097|64,e;case 5:return ll(e),null;case 13:return V(B),t=e.flags,t&4096?(e.flags=t&-4097|64,e):null;case 19:return V(B),null;case 4:return dn(),null;case 10:return ol(e),null;case 23:case 24:return vl(),null;default:return null}}function hl(e,t){try{var n="",r=t;do n+=Ad(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i}}function as(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Xp=typeof WeakMap=="function"?WeakMap:Map;function af(e,t,n){n=rt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ni||(Ni=!0,hs=r),as(e,t)},n}function uf(e,t,n){n=rt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return as(e,t),r(i)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){typeof r!="function"&&(Ae===null?Ae=new Set([this]):Ae.add(this),as(e,t));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}var Zp=typeof WeakSet=="function"?WeakSet:Set;function Ha(e){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(n){lt(e,n)}else t.current=null}function Jp(e,t){switch(t.tag){case 0:case 11:case 15:case 22:return;case 1:if(t.flags&256&&e!==null){var n=e.memoizedProps,r=e.memoizedState;e=t.stateNode,t=e.getSnapshotBeforeUpdate(t.elementType===t.type?n:Ie(t.type,n),r),e.__reactInternalSnapshotBeforeUpdate=t}return;case 3:t.flags&256&&tl(t.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(y(163))}function eh(e,t,n){switch(n.tag){case 0:case 11:case 15:case 22:if(t=n.updateQueue,t=t!==null?t.lastEffect:null,t!==null){e=t=t.next;do{if((e.tag&3)===3){var r=e.create;e.destroy=r()}e=e.next}while(e!==t)}if(t=n.updateQueue,t=t!==null?t.lastEffect:null,t!==null){e=t=t.next;do{var i=e;r=i.next,i=i.tag,(i&4)!==0&&(i&1)!==0&&(vf(n,e),ah(n,e)),e=r}while(e!==t)}return;case 1:e=n.stateNode,n.flags&4&&(t===null?e.componentDidMount():(r=n.elementType===n.type?t.memoizedProps:Ie(n.type,t.memoizedProps),e.componentDidUpdate(r,t.memoizedState,e.__reactInternalSnapshotBeforeUpdate))),t=n.updateQueue,t!==null&&Ca(n,t,e);return;case 3:if(t=n.updateQueue,t!==null){if(e=null,n.child!==null)switch(n.child.tag){case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}Ca(n,t,e)}return;case 5:e=n.stateNode,t===null&&n.flags&4&&Rc(n.type,n.memoizedProps)&&e.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&dc(n))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(y(163))}function Wa(e,t){for(var n=e;;){if(n.tag===5){var r=n.stateNode;if(t)r=r.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{r=n.stateNode;var i=n.memoizedProps.style;i=i!=null&&i.hasOwnProperty("display")?i.display:null,r.style.display=tc("display",i)}}else if(n.tag===6)n.stateNode.nodeValue=t?"":n.memoizedProps;else if((n.tag!==23&&n.tag!==24||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function ba(e,t){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(nl,t)}catch{}switch(t.tag){case 0:case 11:case 14:case 15:case 22:if(e=t.updateQueue,e!==null&&(e=e.lastEffect,e!==null)){var n=e=e.next;do{var r=n,i=r.destroy;if(r=r.tag,i!==void 0)if((r&4)!==0)vf(t,n);else{r=t;try{i()}catch(o){lt(r,o)}}n=n.next}while(n!==e)}break;case 1:if(Ha(t),e=t.stateNode,typeof e.componentWillUnmount=="function")try{e.props=t.memoizedProps,e.state=t.memoizedState,e.componentWillUnmount()}catch(o){lt(t,o)}break;case 5:Ha(t);break;case 4:cf(e,t)}}function qa(e){e.alternate=null,e.child=null,e.dependencies=null,e.firstEffect=null,e.lastEffect=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.return=null,e.updateQueue=null}function Ga(e){return e.tag===5||e.tag===3||e.tag===4}function Qa(e){e:{for(var t=e.return;t!==null;){if(Ga(t))break e;t=t.return}throw Error(y(160))}var n=t;switch(t=n.stateNode,n.tag){case 5:var r=!1;break;case 3:t=t.containerInfo,r=!0;break;case 4:t=t.containerInfo,r=!0;break;default:throw Error(y(161))}n.flags&16&&(fr(t,""),n.flags&=-17);e:t:for(n=e;;){for(;n.sibling===null;){if(n.return===null||Ga(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2)){n=n.stateNode;break e}}r?us(e,n,t):cs(e,n,t)}function us(e,t,n){var r=e.tag,i=r===5||r===6;if(i)e=i?e.stateNode:e.stateNode.instance,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=di));else if(r!==4&&(e=e.child,e!==null))for(us(e,t,n),e=e.sibling;e!==null;)us(e,t,n),e=e.sibling}function cs(e,t,n){var r=e.tag,i=r===5||r===6;if(i)e=i?e.stateNode:e.stateNode.instance,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(cs(e,t,n),e=e.sibling;e!==null;)cs(e,t,n),e=e.sibling}function cf(e,t){for(var n=t,r=!1,i,o;;){if(!r){r=n.return;e:for(;;){if(r===null)throw Error(y(160));switch(i=r.stateNode,r.tag){case 5:o=!1;break e;case 3:i=i.containerInfo,o=!0;break e;case 4:i=i.containerInfo,o=!0;break e}r=r.return}r=!0}if(n.tag===5||n.tag===6){e:for(var s=e,l=n,a=l;;)if(ba(s,a),a.child!==null&&a.tag!==4)a.child.return=a,a=a.child;else{if(a===l)break e;for(;a.sibling===null;){if(a.return===null||a.return===l)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}o?(s=i,l=n.stateNode,s.nodeType===8?s.parentNode.removeChild(l):s.removeChild(l)):i.removeChild(n.stateNode)}else if(n.tag===4){if(n.child!==null){i=n.stateNode.containerInfo,o=!0,n.child.return=n,n=n.child;continue}}else if(ba(e,n),n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return,n.tag===4&&(r=!1)}n.sibling.return=n.return,n=n.sibling}}function Co(e,t){switch(t.tag){case 0:case 11:case 14:case 15:case 22:var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do(r.tag&3)===3&&(e=r.destroy,r.destroy=void 0,e!==void 0&&e()),r=r.next;while(r!==n)}return;case 1:return;case 5:if(n=t.stateNode,n!=null){r=t.memoizedProps;var i=e!==null?e.memoizedProps:r;e=t.type;var o=t.updateQueue;if(t.updateQueue=null,o!==null){for(n[pi]=r,e==="input"&&r.type==="radio"&&r.name!=null&&Xu(n,r),Uo(e,i),t=Uo(e,r),i=0;i<o.length;i+=2){var s=o[i],l=o[i+1];s==="style"?nc(n,l):s==="dangerouslySetInnerHTML"?ec(n,l):s==="children"?fr(n,l):Ls(n,s,l,t)}switch(e){case"input":Fo(n,r);break;case"textarea":Zu(n,r);break;case"select":e=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,o=r.value,o!=null?Zt(n,!!r.multiple,o,!1):e!==!!r.multiple&&(r.defaultValue!=null?Zt(n,!!r.multiple,r.defaultValue,!0):Zt(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(t.stateNode===null)throw Error(y(162));t.stateNode.nodeValue=t.memoizedProps;return;case 3:n=t.stateNode,n.hydrate&&(n.hydrate=!1,dc(n.containerInfo));return;case 12:return;case 13:t.memoizedState!==null&&(yl=te(),Wa(t.child,!0)),Ka(t);return;case 19:Ka(t);return;case 17:return;case 23:case 24:Wa(t,t.memoizedState!==null);return}throw Error(y(163))}function Ka(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Zp),t.forEach(function(r){var i=fh.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function th(e,t){return e!==null&&(e=e.memoizedState,e===null||e.dehydrated!==null)?(t=t.memoizedState,t!==null&&t.dehydrated===null):!1}var nh=Math.ceil,Ti=$t.ReactCurrentDispatcher,ml=$t.ReactCurrentOwner,P=0,oe=null,b=null,ne=0,Ot=0,fs=mt(0),X=0,Gi=null,Sn=0,Dr=0,En=0,gl=0,ds=null,yl=0,ps=1/0;function _n(){ps=te()+500}var _=null,Ni=!1,hs=null,Ae=null,dt=!1,nr=null,Wn=90,ms=[],gs=[],Ue=null,rr=0,ys=null,ni=-1,Me=0,ri=0,ir=null,ii=!1;function de(){return(P&48)!==0?te():ni!==-1?ni:ni=te()}function ot(e){if(e=e.mode,(e&2)===0)return 1;if((e&4)===0)return fn()===99?1:2;if(Me===0&&(Me=Sn),Hp.transition!==0){ri!==0&&(ri=ds!==null?ds.pendingLanes:0),e=Me;var t=4186112&~ri;return t&=-t,t===0&&(e=4186112&~e,t=e&-e,t===0&&(t=8192)),t}return e=fn(),(P&4)!==0&&e===98?e=ci(12,Me):(e=qd(e),e=ci(e,Me)),e}function st(e,t,n){if(50<rr)throw rr=0,ys=null,Error(y(185));if(e=Qi(e,t),e===null)return null;zi(e,t,n),e===oe&&(En|=t,X===4&&on(e,ne));var r=fn();t===1?(P&8)!==0&&(P&48)===0?vs(e):(_e(e,n),P===0&&(_n(),Le())):((P&4)===0||r!==98&&r!==99||(Ue===null?Ue=new Set([e]):Ue.add(e)),_e(e,n)),ds=e}function Qi(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}function _e(e,t){for(var n=e.callbackNode,r=e.suspendedLanes,i=e.pingedLanes,o=e.expirationTimes,s=e.pendingLanes;0<s;){var l=31-ct(s),a=1<<l,u=o[l];if(u===-1){if((a&r)===0||(a&i)!==0){u=t,Ht(a);var g=$;o[l]=10<=g?u+250:6<=g?u+5e3:-1}}else u<=t&&(e.expiredLanes|=a);s&=~a}if(r=mr(e,e===oe?ne:0),t=$,r===0)n!==null&&(n!==wo&&Jo(n),e.callbackNode=null,e.callbackPriority=0);else{if(n!==null){if(e.callbackPriority===t)return;n!==wo&&Jo(n)}t===15?(n=vs.bind(null,e),Fe===null?(Fe=[n],ti=rl(bi,Bc)):Fe.push(n),n=wo):t===14?n=wr(99,vs.bind(null,e)):(n=Gd(t),n=wr(n,ff.bind(null,e))),e.callbackPriority=t,e.callbackNode=n}}function ff(e){if(ni=-1,ri=Me=0,(P&48)!==0)throw Error(y(327));var t=e.callbackNode;if(gt()&&e.callbackNode!==t)return null;var n=mr(e,e===oe?ne:0);if(n===0)return null;var r=n,i=P;P|=16;var o=mf();(oe!==e||ne!==r)&&(_n(),sn(e,r));do try{oh();break}catch(l){hf(e,l)}while(1);if(il(),Ti.current=o,P=i,b!==null?r=0:(oe=null,ne=0,r=X),(Sn&En)!==0)sn(e,0);else if(r!==0){if(r===2&&(P|=64,e.hydrate&&(e.hydrate=!1,tl(e.containerInfo)),n=wc(e),n!==0&&(r=bn(e,n))),r===1)throw t=Gi,sn(e,0),on(e,n),_e(e,te()),t;switch(e.finishedWork=e.current.alternate,e.finishedLanes=n,r){case 0:case 1:throw Error(y(345));case 2:St(e);break;case 3:if(on(e,n),(n&62914560)===n&&(r=yl+500-te(),10<r)){if(mr(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){de(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ga(St.bind(null,e),r);break}St(e);break;case 4:if(on(e,n),(n&4186112)===n)break;for(r=e.eventTimes,i=-1;0<n;){var s=31-ct(n);o=1<<s,s=r[s],s>i&&(i=s),n&=~o}if(n=i,n=te()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*nh(n/1960))-n,10<n){e.timeoutHandle=ga(St.bind(null,e),n);break}St(e);break;case 5:St(e);break;default:throw Error(y(329))}}return _e(e,te()),e.callbackNode===t?ff.bind(null,e):null}function on(e,t){for(t&=~gl,t&=~En,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ct(t),r=1<<n;e[n]=-1,t&=~r}}function vs(e){if((P&48)!==0)throw Error(y(327));if(gt(),e===oe&&(e.expiredLanes&ne)!==0){var t=ne,n=bn(e,t);(Sn&En)!==0&&(t=mr(e,t),n=bn(e,t))}else t=mr(e,0),n=bn(e,t);if(e.tag!==0&&n===2&&(P|=64,e.hydrate&&(e.hydrate=!1,tl(e.containerInfo)),t=wc(e),t!==0&&(n=bn(e,t))),n===1)throw n=Gi,sn(e,0),on(e,t),_e(e,te()),n;return e.finishedWork=e.current.alternate,e.finishedLanes=t,St(e),_e(e,te()),null}function rh(){if(Ue!==null){var e=Ue;Ue=null,e.forEach(function(t){t.expiredLanes|=24&t.pendingLanes,_e(t,te())})}Le()}function df(e,t){var n=P;P|=1;try{return e(t)}finally{P=n,P===0&&(_n(),Le())}}function pf(e,t){var n=P;P&=-2,P|=8;try{return e(t)}finally{P=n,P===0&&(_n(),Le())}}function Gr(e,t){U(fs,Ot),Ot|=t,Sn|=t}function vl(){Ot=fs.current,V(fs)}function sn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,$p(n)),b!==null)for(n=b.return;n!==null;){var r=n;switch(r.tag){case 1:r=r.type.childContextTypes,r!=null&&hi();break;case 3:dn(),V(ue),V(re),al();break;case 5:ll(r);break;case 4:dn();break;case 13:V(B);break;case 19:V(B);break;case 10:ol(r);break;case 23:case 24:vl()}n=n.return}oe=e,b=pt(e.current,null),ne=Ot=Sn=t,X=0,Gi=null,gl=En=Dr=0}function hf(e,t){do{var n=b;try{if(il(),er.current=Ii,Ei){for(var r=W.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ei=!1}if(kr=0,Y=ee=W=null,tr=!1,ml.current=null,n===null||n.return===null){X=1,Gi=t,b=null;break}e:{var o=e,s=n.return,l=n,a=t;if(t=ne,l.flags|=2048,l.firstEffect=l.lastEffect=null,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a;if((l.mode&2)===0){var g=l.alternate;g?(l.updateQueue=g.updateQueue,l.memoizedState=g.memoizedState,l.lanes=g.lanes):(l.updateQueue=null,l.memoizedState=null)}var v=(B.current&1)!==0,h=s;do{var w;if(w=h.tag===13){var C=h.memoizedState;if(C!==null)w=C.dehydrated!==null;else{var k=h.memoizedProps;w=k.fallback===void 0?!1:k.unstable_avoidThisFallback!==!0?!0:!v}}if(w){var d=h.updateQueue;if(d===null){var c=new Set;c.add(u),h.updateQueue=c}else d.add(u);if((h.mode&2)===0){if(h.flags|=64,l.flags|=16384,l.flags&=-2981,l.tag===1)if(l.alternate===null)l.tag=17;else{var f=rt(-1,1);f.tag=2,it(l,f)}l.lanes|=1;break e}a=void 0,l=t;var p=o.pingCache;if(p===null?(p=o.pingCache=new Xp,a=new Set,p.set(u,a)):(a=p.get(u),a===void 0&&(a=new Set,p.set(u,a))),!a.has(l)){a.add(l);var m=ch.bind(null,o,u,l);u.then(m,m)}h.flags|=4096,h.lanes=t;break e}h=h.return}while(h!==null);a=Error((Xt(l.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)}X!==5&&(X=2),a=hl(a,l),h=s;do{switch(h.tag){case 3:o=a,h.flags|=4096,t&=-t,h.lanes|=t;var N=af(h,o,t);ka(h,N);break e;case 1:o=a;var S=h.type,T=h.stateNode;if((h.flags&64)===0&&(typeof S.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(Ae===null||!Ae.has(T)))){h.flags|=4096,t&=-t,h.lanes|=t;var A=uf(h,o,t);ka(h,A);break e}}h=h.return}while(h!==null)}yf(n)}catch(I){t=I,b===n&&n!==null&&(b=n=n.return);continue}break}while(1)}function mf(){var e=Ti.current;return Ti.current=Ii,e===null?Ii:e}function bn(e,t){var n=P;P|=16;var r=mf();oe===e&&ne===t||sn(e,t);do try{ih();break}catch(i){hf(e,i)}while(1);if(il(),P=n,Ti.current=r,b!==null)throw Error(y(261));return oe=null,ne=0,X}function ih(){for(;b!==null;)gf(b)}function oh(){for(;b!==null&&!zp();)gf(b)}function gf(e){var t=wf(e.alternate,e,Ot);e.memoizedProps=e.pendingProps,t===null?yf(e):b=t,ml.current=null}function yf(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&2048)===0){if(n=Kp(n,t,Ot),n!==null){b=n;return}if(n=t,n.tag!==24&&n.tag!==23||n.memoizedState===null||(Ot&1073741824)!==0||(n.mode&4)===0){for(var r=0,i=n.child;i!==null;)r|=i.lanes|i.childLanes,i=i.sibling;n.childLanes=r}e!==null&&(e.flags&2048)===0&&(e.firstEffect===null&&(e.firstEffect=t.firstEffect),t.lastEffect!==null&&(e.lastEffect!==null&&(e.lastEffect.nextEffect=t.firstEffect),e.lastEffect=t.lastEffect),1<t.flags&&(e.lastEffect!==null?e.lastEffect.nextEffect=t:e.firstEffect=t,e.lastEffect=t))}else{if(n=Yp(t),n!==null){n.flags&=2047,b=n;return}e!==null&&(e.firstEffect=e.lastEffect=null,e.flags|=2048)}if(t=t.sibling,t!==null){b=t;return}b=t=e}while(t!==null);X===0&&(X=5)}function St(e){var t=fn();return At(99,sh.bind(null,e,t)),null}function sh(e,t){do gt();while(nr!==null);if((P&48)!==0)throw Error(y(327));var n=e.finishedWork;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null;var r=n.lanes|n.childLanes,i=r,o=e.pendingLanes&~i;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=i,e.mutableReadLanes&=i,e.entangledLanes&=i,i=e.entanglements;for(var s=e.eventTimes,l=e.expirationTimes;0<o;){var a=31-ct(o),u=1<<a;i[a]=0,s[a]=-1,l[a]=-1,o&=~u}if(Ue!==null&&(r&24)===0&&Ue.has(e)&&Ue.delete(e),e===oe&&(b=oe=null,ne=0),1<n.flags?n.lastEffect!==null?(n.lastEffect.nextEffect=n,r=n.firstEffect):r=n:r=n.firstEffect,r!==null){if(i=P,P|=32,ml.current=null,go=Xr,s=ua(),Qo(s)){if("selectionStart"in s)l={start:s.selectionStart,end:s.selectionEnd};else e:if(l=(l=s.ownerDocument)&&l.defaultView||window,(u=l.getSelection&&l.getSelection())&&u.rangeCount!==0){l=u.anchorNode,o=u.anchorOffset,a=u.focusNode,u=u.focusOffset;try{l.nodeType,a.nodeType}catch{l=null;break e}var g=0,v=-1,h=-1,w=0,C=0,k=s,d=null;t:for(;;){for(var c;k!==l||o!==0&&k.nodeType!==3||(v=g+o),k!==a||u!==0&&k.nodeType!==3||(h=g+u),k.nodeType===3&&(g+=k.nodeValue.length),(c=k.firstChild)!==null;)d=k,k=c;for(;;){if(k===s)break t;if(d===l&&++w===o&&(v=g),d===a&&++C===u&&(h=g),(c=k.nextSibling)!==null)break;k=d,d=k.parentNode}k=c}l=v===-1||h===-1?null:{start:v,end:h}}else l=null;l=l||{start:0,end:0}}else l=null;yo={focusedElem:s,selectionRange:l},Xr=!1,ir=null,ii=!1,_=r;do try{lh()}catch(I){if(_===null)throw Error(y(330));lt(_,I),_=_.nextEffect}while(_!==null);ir=null,_=r;do try{for(s=e;_!==null;){var f=_.flags;if(f&16&&fr(_.stateNode,""),f&128){var p=_.alternate;if(p!==null){var m=p.ref;m!==null&&(typeof m=="function"?m(null):m.current=null)}}switch(f&1038){case 2:Qa(_),_.flags&=-3;break;case 6:Qa(_),_.flags&=-3,Co(_.alternate,_);break;case 1024:_.flags&=-1025;break;case 1028:_.flags&=-1025,Co(_.alternate,_);break;case 4:Co(_.alternate,_);break;case 8:l=_,cf(s,l);var N=l.alternate;qa(l),N!==null&&qa(N)}_=_.nextEffect}}catch(I){if(_===null)throw Error(y(330));lt(_,I),_=_.nextEffect}while(_!==null);if(m=yo,p=ua(),f=m.focusedElem,s=m.selectionRange,p!==f&&f&&f.ownerDocument&&Nc(f.ownerDocument.documentElement,f)){for(s!==null&&Qo(f)&&(p=s.start,m=s.end,m===void 0&&(m=p),"selectionStart"in f?(f.selectionStart=p,f.selectionEnd=Math.min(m,f.value.length)):(m=(p=f.ownerDocument||document)&&p.defaultView||window,m.getSelection&&(m=m.getSelection(),l=f.textContent.length,N=Math.min(s.start,l),s=s.end===void 0?N:Math.min(s.end,l),!m.extend&&N>s&&(l=s,s=N,N=l),l=aa(f,N),o=aa(f,s),l&&o&&(m.rangeCount!==1||m.anchorNode!==l.node||m.anchorOffset!==l.offset||m.focusNode!==o.node||m.focusOffset!==o.offset)&&(p=p.createRange(),p.setStart(l.node,l.offset),m.removeAllRanges(),N>s?(m.addRange(p),m.extend(o.node,o.offset)):(p.setEnd(o.node,o.offset),m.addRange(p)))))),p=[],m=f;m=m.parentNode;)m.nodeType===1&&p.push({element:m,left:m.scrollLeft,top:m.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<p.length;f++)m=p[f],m.element.scrollLeft=m.left,m.element.scrollTop=m.top}Xr=!!go,yo=go=null,e.current=n,_=r;do try{for(f=e;_!==null;){var S=_.flags;if(S&36&&eh(f,_.alternate,_),S&128){p=void 0;var T=_.ref;if(T!==null){var A=_.stateNode;switch(_.tag){case 5:p=A;break;default:p=A}typeof T=="function"?T(p):T.current=p}}_=_.nextEffect}}catch(I){if(_===null)throw Error(y(330));lt(_,I),_=_.nextEffect}while(_!==null);_=null,Up(),P=i}else e.current=n;if(dt)dt=!1,nr=e,Wn=t;else for(_=r;_!==null;)t=_.nextEffect,_.nextEffect=null,_.flags&8&&(S=_,S.sibling=null,S.stateNode=null),_=t;if(r=e.pendingLanes,r===0&&(Ae=null),r===1?e===ys?rr++:(rr=0,ys=e):rr=0,n=n.stateNode,Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(nl,n,void 0,(n.current.flags&64)===64)}catch{}if(_e(e,te()),Ni)throw Ni=!1,e=hs,hs=null,e;return(P&8)!==0||Le(),null}function lh(){for(;_!==null;){var e=_.alternate;ii||ir===null||((_.flags&8)!==0?Ql(_,ir)&&(ii=!0):_.tag===13&&th(e,_)&&Ql(_,ir)&&(ii=!0));var t=_.flags;(t&256)!==0&&Jp(e,_),(t&512)===0||dt||(dt=!0,wr(97,function(){return gt(),null})),_=_.nextEffect}}function gt(){if(Wn!==90){var e=97<Wn?97:Wn;return Wn=90,At(e,uh)}return!1}function ah(e,t){ms.push(t,e),dt||(dt=!0,wr(97,function(){return gt(),null}))}function vf(e,t){gs.push(t,e),dt||(dt=!0,wr(97,function(){return gt(),null}))}function uh(){if(nr===null)return!1;var e=nr;if(nr=null,(P&48)!==0)throw Error(y(331));var t=P;P|=32;var n=gs;gs=[];for(var r=0;r<n.length;r+=2){var i=n[r],o=n[r+1],s=i.destroy;if(i.destroy=void 0,typeof s=="function")try{s()}catch(a){if(o===null)throw Error(y(330));lt(o,a)}}for(n=ms,ms=[],r=0;r<n.length;r+=2){i=n[r],o=n[r+1];try{var l=i.create;i.destroy=l()}catch(a){if(o===null)throw Error(y(330));lt(o,a)}}for(l=e.current.firstEffect;l!==null;)e=l.nextEffect,l.nextEffect=null,l.flags&8&&(l.sibling=null,l.stateNode=null),l=e;return P=t,Le(),!0}function Ya(e,t,n){t=hl(n,t),t=af(e,t,1),it(e,t),t=de(),e=Qi(e,1),e!==null&&(zi(e,1,t),_e(e,t))}function lt(e,t){if(e.tag===3)Ya(e,e,t);else for(var n=e.return;n!==null;){if(n.tag===3){Ya(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ae===null||!Ae.has(r))){e=hl(t,e);var i=uf(n,e,1);if(it(n,i),i=de(),n=Qi(n,1),n!==null)zi(n,1,i),_e(n,i);else if(typeof r.componentDidCatch=="function"&&(Ae===null||!Ae.has(r)))try{r.componentDidCatch(t,e)}catch{}break}}n=n.return}}function ch(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=de(),e.pingedLanes|=e.suspendedLanes&n,oe===e&&(ne&n)===n&&(X===4||X===3&&(ne&62914560)===ne&&500>te()-yl?sn(e,0):gl|=n),_e(e,t)}function fh(e,t){var n=e.stateNode;n!==null&&n.delete(t),t=0,t===0&&(t=e.mode,(t&2)===0?t=1:(t&4)===0?t=fn()===99?1:2:(Me===0&&(Me=Sn),t=Wt(62914560&~Me),t===0&&(t=4194304))),n=de(),e=Qi(e,t),e!==null&&(zi(e,t,n),_e(e,n))}var wf;wf=function(e,t,n){var r=t.lanes;if(e!==null)if(e.memoizedProps!==t.pendingProps||ue.current)Te=!0;else if((n&r)!==0)Te=(e.flags&16384)!==0;else{switch(Te=!1,t.tag){case 3:Ma(t),Eo();break;case 5:Na(t);break;case 1:ce(t.type)&&ei(t);break;case 4:ns(t,t.stateNode.containerInfo);break;case 10:r=t.memoizedProps.value;var i=t.type._context;U(mi,i._currentValue),i._currentValue=r;break;case 13:if(t.memoizedState!==null)return(n&t.child.childLanes)!==0?$a(e,t,n):(U(B,B.current&1),t=ze(e,t,n),t!==null?t.sibling:null);U(B,B.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&64)!==0){if(r)return Ua(e,t,n);t.flags|=64}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),U(B,B.current),r)break;return null;case 23:case 24:return t.lanes=0,_o(e,t,n)}return ze(e,t,n)}else Te=!1;switch(t.lanes=0,t.tag){case 2:if(r=t.type,e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,i=cn(t,re.current),nn(t,n),i=cl(null,t,r,e,i,n),t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0){if(t.tag=1,t.memoizedState=null,t.updateQueue=null,ce(r)){var o=!0;ei(t)}else o=!1;t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,sl(t);var s=r.getDerivedStateFromProps;typeof s=="function"&&vi(t,r,s,e),i.updater=qi,t.stateNode=i,i._reactInternals=t,ts(t,r,e,n),t=ss(null,t,r,!0,o,n)}else t.tag=0,ae(null,t,i,n),t=t.child;return t;case 16:i=t.elementType;e:{switch(e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,o=i._init,i=o(i._payload),t.type=i,o=t.tag=ph(i),e=Ie(i,e),o){case 0:t=os(null,t,i,e,n);break e;case 1:t=Fa(null,t,i,e,n);break e;case 11:t=Ra(null,t,i,e,n);break e;case 14:t=La(null,t,i,Ie(i.type,e),r,n);break e}throw Error(y(306,i,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ie(r,i),os(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ie(r,i),Fa(e,t,r,i,n);case 3:if(Ma(t),r=t.updateQueue,e===null||r===null)throw Error(y(282));if(r=t.pendingProps,i=t.memoizedState,i=i!==null?i.element:null,Hc(e,t),Sr(t,r,null,n),r=t.memoizedState.element,r===i)Eo(),t=ze(e,t,n);else{if(i=t.stateNode,(o=i.hydrate)&&(Je=tn(t.stateNode.containerInfo.firstChild),Ve=t,o=De=!0),o){if(e=i.mutableSourceEagerHydrationData,e!=null)for(i=0;i<e.length;i+=2)o=e[i],o._workInProgressVersionPrimary=e[i+1],rn.push(o);for(n=Gc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|1024,n=n.sibling}else ae(e,t,r,n),Eo();t=t.child}return t;case 5:return Na(t),e===null&&rs(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Xo(r,i)?s=null:o!==null&&Xo(r,o)&&(t.flags|=16),rf(e,t),ae(e,t,s,n),t.child;case 6:return e===null&&rs(t),null;case 13:return $a(e,t,n);case 4:return ns(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=wi(t,null,r,n):ae(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ie(r,i),Ra(e,t,r,i,n);case 7:return ae(e,t,t.pendingProps,n),t.child;case 8:return ae(e,t,t.pendingProps.children,n),t.child;case 12:return ae(e,t,t.pendingProps.children,n),t.child;case 10:e:{r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value;var l=t.type._context;if(U(mi,l._currentValue),l._currentValue=o,s!==null)if(l=s.value,o=ye(l,o)?0:(typeof r._calculateChangedBits=="function"?r._calculateChangedBits(l,o):1073741823)|0,o===0){if(s.children===i.children&&!ue.current){t=ze(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){s=l.child;for(var u=a.firstContext;u!==null;){if(u.context===r&&(u.observedBits&o)!==0){l.tag===1&&(u=rt(-1,n&-n),u.tag=2,it(l,u)),l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),Uc(l.return,n),a.lanes|=n;break}u=u.next}}else s=l.tag===10&&l.type===t.type?null:l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===t){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}ae(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,o=t.pendingProps,r=o.children,nn(t,n),i=Ee(i,o.unstable_observedBits),r=r(i),t.flags|=1,ae(e,t,r,n),t.child;case 14:return i=t.type,o=Ie(i,t.pendingProps),o=Ie(i.type,o),La(e,t,i,o,r,n);case 15:return nf(e,t,t.type,t.pendingProps,r,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ie(r,i),e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),t.tag=1,ce(r)?(e=!0,ei(t)):e=!1,nn(t,n),bc(t,r,i),ts(t,r,i,n),ss(null,t,r,!0,e,n);case 19:return Ua(e,t,n);case 23:return _o(e,t,n);case 24:return _o(e,t,n)}throw Error(y(156,t.tag))};function dh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function ve(e,t,n,r){return new dh(e,t,n,r)}function wl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ph(e){if(typeof e=="function")return wl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===$i)return 11;if(e===ji)return 14}return 2}function pt(e,t){var n=e.alternate;return n===null?(n=ve(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function oi(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")wl(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Ye:return ln(n.children,i,o,t);case Qu:s=8,i|=16;break;case Fs:s=8,i|=1;break;case Gn:return e=ve(12,n,t,i|8),e.elementType=Gn,e.type=Gn,e.lanes=o,e;case Qn:return e=ve(13,n,t,i),e.type=Qn,e.elementType=Qn,e.lanes=o,e;case si:return e=ve(19,n,t,i),e.elementType=si,e.lanes=o,e;case Bs:return Sl(n,i,o,t);case Ro:return e=ve(24,n,t,i),e.elementType=Ro,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ms:s=10;break e;case $s:s=9;break e;case $i:s=11;break e;case ji:s=14;break e;case js:s=16,r=null;break e;case Vs:s=22;break e}throw Error(y(130,e==null?e:typeof e,""))}return t=ve(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function ln(e,t,n,r){return e=ve(7,e,r,t),e.lanes=n,e}function Sl(e,t,n,r){return e=ve(23,e,r,t),e.elementType=Bs,e.lanes=n,e}function Io(e,t,n){return e=ve(6,e,null,t),e.lanes=n,e}function To(e,t,n){return t=ve(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function hh(e,t,n){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=ao(0),this.expirationTimes=ao(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ao(0),this.mutableSourceEagerHydrationData=null}function mh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_t,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Pi(e,t,n,r){var i=t.current,o=de(),s=ot(i);e:if(n){n=n._reactInternals;t:{if(jt(n)!==n||n.tag!==1)throw Error(y(170));var l=n;do{switch(l.tag){case 3:l=l.stateNode.context;break t;case 1:if(ce(l.type)){l=l.stateNode.__reactInternalMemoizedMergedChildContext;break t}}l=l.return}while(l!==null);throw Error(y(171))}if(n.tag===1){var a=n.type;if(ce(a)){n=Fc(n,a,l);break e}}n=l}else n=ft;return t.context===null?t.context=n:t.pendingContext=n,t=rt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),it(i,t),st(i,s,o),s}function No(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Xa(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function El(e,t){Xa(e,t),(e=e.alternate)&&Xa(e,t)}function gh(){return null}function _l(e,t,n){var r=n!=null&&n.hydrationOptions!=null&&n.hydrationOptions.mutableSources||null;if(n=new hh(e,t,n!=null&&n.hydrate===!0),t=ve(3,null,null,t===2?7:t===1?3:0),n.current=t,t.stateNode=n,sl(t),e[wn]=n.current,Ac(e.nodeType===8?e.parentNode:e),r)for(e=0;e<r.length;e++){t=r[e];var i=t._getVersion;i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i)}this._internalRoot=n}_l.prototype.render=function(e){Pi(e,this._internalRoot,null,null)};_l.prototype.unmount=function(){var e=this._internalRoot,t=e.containerInfo;Pi(null,e,null,function(){t[wn]=null})};function Rr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function yh(e,t){if(t||(t=e?e.nodeType===9?e.documentElement:e.firstChild:null,t=!(!t||t.nodeType!==1||!t.hasAttribute("data-reactroot"))),!t)for(var n;n=e.lastChild;)e.removeChild(n);return new _l(e,0,t?{hydrate:!0}:void 0)}function Ki(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o._internalRoot;if(typeof i=="function"){var l=i;i=function(){var u=No(s);l.call(u)}}Pi(t,s,e,i)}else{if(o=n._reactRootContainer=yh(n,r),s=o._internalRoot,typeof i=="function"){var a=i;i=function(){var u=No(s);a.call(u)}}pf(function(){Pi(t,s,e,i)})}return No(s)}uc=function(e){if(e.tag===13){var t=de();st(e,4,t),El(e,4)}};qs=function(e){if(e.tag===13){var t=de();st(e,67108864,t),El(e,67108864)}};cc=function(e){if(e.tag===13){var t=de(),n=ot(e);st(e,n,t),El(e,n)}};fc=function(e,t){return t()};Ho=function(e,t,n){switch(t){case"input":if(Fo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Wi(r);if(!i)throw Error(y(90));Yu(r),Fo(r,i)}}}break;case"textarea":Zu(e,n);break;case"select":t=n.value,t!=null&&Zt(e,!!n.multiple,t,!1)}};Hs=df;oc=function(e,t,n,r,i){var o=P;P|=4;try{return At(98,e.bind(null,t,n,r,i))}finally{P=o,P===0&&(_n(),Le())}};Ws=function(){(P&49)===0&&(rh(),gt())};sc=function(e,t){var n=P;P|=2;try{return e(t)}finally{P=n,P===0&&(_n(),Le())}};function Sf(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rr(t))throw Error(y(200));return mh(e,t,null,n)}var vh={Events:[Ar,Qt,Wi,rc,ic,gt,{current:!1}]},zn={findFiberByHostInstance:Ct,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},wh={bundleType:zn.bundleType,version:zn.version,rendererPackageName:zn.rendererPackageName,rendererConfig:zn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$t.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ac(e),e===null?null:e.stateNode},findFiberByHostInstance:zn.findFiberByHostInstance||gh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Qr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qr.isDisabled&&Qr.supportsFiber)try{nl=Qr.inject(wh),Pt=Qr}catch{}}ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vh;ke.createPortal=Sf;ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(y(188)):Error(y(268,Object.keys(e)));return e=ac(t),e=e===null?null:e.stateNode,e};ke.flushSync=function(e,t){var n=P;if((n&48)!==0)return e(t);P|=1;try{if(e)return At(99,e.bind(null,t))}finally{P=n,Le()}};ke.hydrate=function(e,t,n){if(!Rr(t))throw Error(y(200));return Ki(null,e,t,!0,n)};ke.render=function(e,t,n){if(!Rr(t))throw Error(y(200));return Ki(null,e,t,!1,n)};ke.unmountComponentAtNode=function(e){if(!Rr(e))throw Error(y(40));return e._reactRootContainer?(pf(function(){Ki(null,null,e,!1,function(){e._reactRootContainer=null,e[wn]=null})}),!0):!1};ke.unstable_batchedUpdates=df;ke.unstable_createPortal=function(e,t){return Sf(e,t,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)};ke.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Rr(n))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return Ki(e,t,n,!1,r)};ke.version="17.0.2";function Ef(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ef)}catch(e){console.error(e)}}Ef(),Wu.exports=ke;var Ky=Wu.exports,Sh={exports:{}},Lr={};/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eh=Fi.exports,_f=60103;Lr.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var Za=Symbol.for;_f=Za("react.element"),Lr.Fragment=Za("react.fragment")}var _h=Eh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,kh=Object.prototype.hasOwnProperty,Ch={key:!0,ref:!0,__self:!0,__source:!0};function kf(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)kh.call(t,r)&&!Ch.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:_f,type:e,key:o,ref:s,props:i,_owner:_h.current}}Lr.jsx=kf;Lr.jsxs=kf;Sh.exports=Lr;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Ih=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],l=e[n++],a=((i&7)<<18|(o&63)<<12|(s&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(a&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},Th={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,l=s?e[i+1]:0,a=i+2<e.length,u=a?e[i+2]:0,g=o>>2,v=(o&3)<<4|l>>4;let h=(l&15)<<2|u>>6,w=u&63;a||(w=64,s||(h=64)),r.push(n[g],n[v],n[h],n[w])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Cf(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Ih(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],l=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const v=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||l==null||u==null||v==null)throw Error();const h=o<<2|l>>4;if(r.push(h),u!==64){const w=l<<4&240|u>>2;if(r.push(w),v!==64){const C=u<<6&192|v;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Nh=function(e){const t=Cf(e);return Th.encodeByteArray(t,!0)},If=function(e){return Nh(e).replace(/\./g,"")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}function xh(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Tf(){return typeof indexedDB=="object"}function Nf(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function Ah(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh="FirebaseError";class kn extends Error{constructor(t,n,r){super(n);this.code=t,this.customData=r,this.name=Oh,Object.setPrototypeOf(this,kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yi.prototype.create)}}class Yi{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?Dh(o,r):"Error",l=`${this.serviceName}: ${s} (${i}).`;return new kn(i,l,r)}}function Dh(e,t){return e.replace(Rh,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Rh=/\{\$([^}]+)}/g;function xi(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(Ja(o)&&Ja(s)){if(!xi(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ja(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh=1e3,Fh=2,Mh=4*60*60*1e3,$h=.5;function eu(e,t=Lh,n=Fh){const r=t*Math.pow(n,e),i=Math.round($h*r*(Math.random()-.5)*2);return Math.min(Mh,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(e){return e&&e._delegate?e._delegate:e}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(e,t){return new Promise((n,r)=>{e.onsuccess=i=>{n(i.target.result)},e.onerror=i=>{var o;r(`${t}: ${(o=i.target.error)===null||o===void 0?void 0:o.message}`)}})}class tu{constructor(t){this._db=t,this.objectStoreNames=this._db.objectStoreNames}transaction(t,n){return new Pf(this._db.transaction.call(this._db,t,n))}createObjectStore(t,n){return new xf(this._db.createObjectStore(t,n))}close(){this._db.close()}}class Pf{constructor(t){this._transaction=t,this.complete=new Promise((n,r)=>{this._transaction.oncomplete=function(){n()},this._transaction.onerror=()=>{r(this._transaction.error)},this._transaction.onabort=()=>{r(this._transaction.error)}})}objectStore(t){return new xf(this._transaction.objectStore(t))}}class xf{constructor(t){this._store=t}index(t){return new nu(this._store.index(t))}createIndex(t,n,r){return new nu(this._store.createIndex(t,n,r))}get(t){const n=this._store.get(t);return qn(n,"Error reading from IndexedDB")}put(t,n){const r=this._store.put(t,n);return qn(r,"Error writing to IndexedDB")}delete(t){const n=this._store.delete(t);return qn(n,"Error deleting from IndexedDB")}clear(){const t=this._store.clear();return qn(t,"Error clearing IndexedDB object store")}}class nu{constructor(t){this._index=t}get(t){const n=this._index.get(t);return qn(n,"Error reading from IndexedDB")}}function Af(e,t,n){return new Promise((r,i)=>{try{const o=indexedDB.open(e,t);o.onsuccess=s=>{r(new tu(s.target.result))},o.onerror=s=>{var l;i(`Error opening indexedDB: ${(l=s.target.error)===null||l===void 0?void 0:l.message}`)},o.onupgradeneeded=s=>{n(new tu(o.result),s.oldVersion,s.newVersion,new Pf(o.transaction))}}catch(o){i(`Error opening indexedDB: ${o.message}`)}})}class We{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Ph;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(zh(t))try{this.getOrInitializeService({instanceIdentifier:Et})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Et){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Et){return this.instances.has(t)}getOptions(t=Et){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Vh(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Et){return this.component?this.component.multipleInstances?t:Et:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Vh(e){return e===Et?void 0:e}function zh(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new jh(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var M;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(M||(M={}));const Uh={debug:M.DEBUG,verbose:M.VERBOSE,info:M.INFO,warn:M.WARN,error:M.ERROR,silent:M.SILENT},Hh=M.INFO,Wh={[M.DEBUG]:"log",[M.VERBOSE]:"log",[M.INFO]:"info",[M.WARN]:"warn",[M.ERROR]:"error"},bh=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Wh[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Cl{constructor(t){this.name=t,this._logLevel=Hh,this._logHandler=bh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in M))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Uh[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,M.DEBUG,...t),this._logHandler(this,M.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,M.VERBOSE,...t),this._logHandler(this,M.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,M.INFO,...t),this._logHandler(this,M.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,M.WARN,...t),this._logHandler(this,M.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,M.ERROR,...t),this._logHandler(this,M.ERROR,...t)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Gh(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Gh(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ws="@firebase/app",ru="0.7.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il=new Cl("@firebase/app"),Qh="@firebase/app-compat",Kh="@firebase/analytics-compat",Yh="@firebase/analytics",Xh="@firebase/app-check-compat",Zh="@firebase/app-check",Jh="@firebase/auth",em="@firebase/auth-compat",tm="@firebase/database",nm="@firebase/database-compat",rm="@firebase/functions",im="@firebase/functions-compat",om="@firebase/installations",sm="@firebase/installations-compat",lm="@firebase/messaging",am="@firebase/messaging-compat",um="@firebase/performance",cm="@firebase/performance-compat",fm="@firebase/remote-config",dm="@firebase/remote-config-compat",pm="@firebase/storage",hm="@firebase/storage-compat",mm="@firebase/firestore",gm="@firebase/firestore-compat",ym="firebase",vm="9.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Of="[DEFAULT]",wm={[ws]:"fire-core",[Qh]:"fire-core-compat",[Yh]:"fire-analytics",[Kh]:"fire-analytics-compat",[Zh]:"fire-app-check",[Xh]:"fire-app-check-compat",[Jh]:"fire-auth",[em]:"fire-auth-compat",[tm]:"fire-rtdb",[nm]:"fire-rtdb-compat",[rm]:"fire-fn",[im]:"fire-fn-compat",[om]:"fire-iid",[sm]:"fire-iid-compat",[lm]:"fire-fcm",[am]:"fire-fcm-compat",[um]:"fire-perf",[cm]:"fire-perf-compat",[fm]:"fire-rc",[dm]:"fire-rc-compat",[pm]:"fire-gcs",[hm]:"fire-gcs-compat",[mm]:"fire-fst",[gm]:"fire-fst-compat","fire-js":"fire-js",[ym]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai=new Map,Ss=new Map;function Sm(e,t){try{e.container.addComponent(t)}catch(n){Il.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ht(e){const t=e.name;if(Ss.has(t))return Il.debug(`There were multiple attempts to register component ${t}.`),!1;Ss.set(t,e);for(const n of Ai.values())Sm(n,e);return!0}function Fr(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Em={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Dt=new Yi("app","Firebase",Em);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new We("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Dt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km=vm;function Yy(e,t={}){typeof t!="object"&&(t={name:t});const n=Object.assign({name:Of,automaticDataCollectionEnabled:!1},t),r=n.name;if(typeof r!="string"||!r)throw Dt.create("bad-app-name",{appName:String(r)});const i=Ai.get(r);if(i){if(xi(e,i.options)&&xi(n,i.config))return i;throw Dt.create("duplicate-app",{appName:r})}const o=new Bh(r);for(const l of Ss.values())o.addComponent(l);const s=new _m(e,n,o);return Ai.set(r,s),s}function Df(e=Of){const t=Ai.get(e);if(!t)throw Dt.create("no-app",{appName:e});return t}function Re(e,t,n){var r;let i=(r=wm[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const l=[`Unable to register library "${i}" with version "${t}":`];o&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&l.push("and"),s&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Il.warn(l.join(" "));return}ht(new We(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm="firebase-heartbeat-database",Im=1,Cr="firebase-heartbeat-store";let Po=null;function Rf(){return Po||(Po=Af(Cm,Im,(e,t)=>{switch(t){case 0:e.createObjectStore(Cr)}}).catch(e=>{throw Dt.create("storage-open",{originalErrorMessage:e.message})})),Po}async function Tm(e){try{return(await Rf()).transaction(Cr).objectStore(Cr).get(Lf(e))}catch(t){throw Dt.create("storage-get",{originalErrorMessage:t.message})}}async function iu(e,t){try{const r=(await Rf()).transaction(Cr,"readwrite");return await r.objectStore(Cr).put(t,Lf(e)),r.complete}catch(n){throw Dt.create("storage-set",{originalErrorMessage:n.message})}}function Lf(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm=1024,Pm=30*24*60*60*1e3;class xm{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Om(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ou();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=Pm}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ou(),{heartbeatsToSend:n,unsentEntries:r}=Am(this._heartbeatsCache.heartbeats),i=If(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ou(){return new Date().toISOString().substring(0,10)}function Am(e,t=Nm){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),su(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),su(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Om{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Tf()?Nf().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Tm(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return iu(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return iu(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function su(e){return If(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dm(e){ht(new We("platform-logger",t=>new qh(t),"PRIVATE")),ht(new We("heartbeat",t=>new xm(t),"PRIVATE")),Re(ws,ru,e),Re(ws,ru,"esm2017"),Re("fire-js","")}Dm("");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ge.UNAUTHENTICATED=new ge(null),ge.GOOGLE_CREDENTIALS=new ge("google-credentials-uid"),ge.FIRST_PARTY=new ge("first-party-uid"),ge.MOCK_USER=new ge("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cn="9.6.9";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn=new Cl("@firebase/firestore");function Oi(e,...t){if(pn.logLevel<=M.DEBUG){const n=t.map(Nl);pn.debug(`Firestore (${Cn}): ${e}`,...n)}}function Tl(e,...t){if(pn.logLevel<=M.ERROR){const n=t.map(Nl);pn.error(`Firestore (${Cn}): ${e}`,...n)}}function Rm(e,...t){if(pn.logLevel<=M.WARN){const n=t.map(Nl);pn.warn(`Firestore (${Cn}): ${e}`,...n)}}function Nl(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(e="Unexpected state"){const t=`FIRESTORE (${Cn}) INTERNAL ASSERTION FAILED: `+e;throw Tl(t),new Error(t)}function be(e,t){e||Rt()}function Pl(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu="ok",Lm="cancelled",or="unknown",F="invalid-argument",Fm="deadline-exceeded",Mm="not-found",$m="permission-denied",Es="unauthenticated",jm="resource-exhausted",hn="failed-precondition",Vm="aborted",zm="out-of-range",Ff="unimplemented",Bm="internal",Um="unavailable";class O extends kn{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Wm{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(ge.UNAUTHENTICATED))}shutdown(){}}class bm{constructor(t){this.auth=null,t.onInit(n=>{this.auth=n})}getToken(){return this.auth?this.auth.getToken().then(t=>t?(be(typeof t.accessToken=="string"),new Hm(t.accessToken,new ge(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(t,n){}shutdown(){}}class qm{constructor(t,n,r){this.type="FirstParty",this.user=ge.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=t.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class Gm{constructor(t,n,r){this.t=t,this.i=n,this.o=r}getToken(){return Promise.resolve(new qm(this.t,this.i,this.o))}start(t,n){t.enqueueRetryable(()=>n(ge.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Qm{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Km{constructor(t){this.u=t,this.appCheck=null,t.onInit(n=>{this.appCheck=n})}getToken(){return this.appCheck?this.appCheck.getToken().then(t=>t?(be(typeof t.token=="string"),new Qm(t.token)):null):Promise.resolve(null)}invalidateToken(){}start(t,n){}shutdown(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(t,n,r,i,o,s,l,a){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=l,this.useFetchStreams=a}}class mn{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new mn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof mn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(t,n,r){n===void 0?n=0:n>t.length&&Rt(),r===void 0?r=t.length-n:r>t.length-n&&Rt(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Ir.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Ir?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const o=t.get(i),s=n.get(i);if(o<s)return-1;if(o>s)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class ie extends Ir{construct(t,n,r){return new ie(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new O(F,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ie(n)}static emptyPath(){return new ie([])}}const Xm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ne extends Ir{construct(t,n,r){return new Ne(t,n,r)}static isValidIdentifier(t){return Xm.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ne.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ne(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const o=()=>{if(r.length===0)throw new O(F,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let s=!1;for(;i<t.length;){const l=t[i];if(l==="\\"){if(i+1===t.length)throw new O(F,"Path has trailing escape character: "+t);const a=t[i+1];if(a!=="\\"&&a!=="."&&a!=="`")throw new O(F,"Path has invalid escape sequence: "+t);r+=a,i+=2}else l==="`"?(s=!s,i++):l!=="."||s?(r+=l,i++):(o(),i++)}if(o(),s)throw new O(F,"Unterminated ` in path: "+t);return new Ne(n)}static emptyPath(){return new Ne([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(t){this.path=t}static fromPath(t){return new Be(ie.fromString(t))}static fromName(t){return new Be(ie.fromString(t).popFirst(5))}static empty(){return new Be(ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&ie.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return ie.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Be(new ie(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zm(e,t,n){if(!n)throw new O(F,`Function ${e}() cannot be called with an empty ${t}.`)}function au(e){if(Be.isDocumentKey(e))throw new O(F,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Jm(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":Rt()}function eg(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new O(F,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Jm(e);throw new O(F,`Expected type '${t.name}', but it was: ${n}`)}}return e}function tg(e,t){if(t<=0)throw new O(F,`Function ${e}() requires a positive number, but it was: ${t}.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mf(e){return e==null}function uu(e){return e===0&&1/e==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var cu,R;function fu(e){if(e===void 0)return Tl("RPC_ERROR","HTTP error has no status"),or;switch(e){case 200:return lu;case 400:return hn;case 401:return Es;case 403:return $m;case 404:return Mm;case 409:return Vm;case 416:return zm;case 429:return jm;case 499:return Lm;case 500:return or;case 501:return Ff;case 503:return Um;case 504:return Fm;default:return e>=200&&e<300?lu:e>=400&&e<500?hn:e>=500&&e<600?Bm:or}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(R=cu||(cu={}))[R.OK=0]="OK",R[R.CANCELLED=1]="CANCELLED",R[R.UNKNOWN=2]="UNKNOWN",R[R.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",R[R.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",R[R.NOT_FOUND=5]="NOT_FOUND",R[R.ALREADY_EXISTS=6]="ALREADY_EXISTS",R[R.PERMISSION_DENIED=7]="PERMISSION_DENIED",R[R.UNAUTHENTICATED=16]="UNAUTHENTICATED",R[R.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",R[R.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",R[R.ABORTED=10]="ABORTED",R[R.OUT_OF_RANGE=11]="OUT_OF_RANGE",R[R.UNIMPLEMENTED=12]="UNIMPLEMENTED",R[R.INTERNAL=13]="INTERNAL",R[R.UNAVAILABLE=14]="UNAVAILABLE",R[R.DATA_LOSS=15]="DATA_LOSS";class rg extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.h=n+"://"+t.host,this.l="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}m(t,n,r,i,o){const s=this.p(t,n);Oi("RestConnection","Sending: ",s,r);const l={};return this.g(l,i,o),this.v(t,s,l,r).then(a=>(Oi("RestConnection","Received: ",a),a),a=>{throw Rm("RestConnection",`${t} failed with error: `,a,"url: ",s,"request:",r),a})}T(t,n,r,i,o){return this.m(t,n,r,i,o)}g(t,n,r){t["X-Goog-Api-Client"]="gl-js/ fire/"+Cn,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,o)=>t[o]=i),r&&r.headers.forEach((i,o)=>t[o]=i)}p(t,n){const r=ng[t];return`${this.h}/v1/${n}:${r}`}}{constructor(t,n){super(t),this.I=n}A(t,n){throw new Error("Not supported by FetchConnection")}async v(t,n,r,i){const o=JSON.stringify(i);let s;try{s=await this.I(n,{method:"POST",headers:r,body:o})}catch(l){throw new O(fu(l.status),"Request failed with error: "+l.statusText)}if(!s.ok)throw new O(fu(s.status),"Request failed with error: "+s.statusText);return s.json()}}function Tr(e,t){return e<t?-1:e>t?1:0}function ig(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new O(F,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new O(F,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new O(F,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new O(F,"Timestamp seconds out of range: "+t)}static now(){return at.fromMillis(Date.now())}static fromDate(t){return at.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new at(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Tr(this.nanoseconds,t.nanoseconds):Tr(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(t){this.timestamp=t}static fromTimestamp(t){return new $e(t)}static min(){return new $e(new at(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function xl(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new qe(n)}static fromUint8Array(t){const n=function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i}(t);return new qe(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Tr(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}qe.EMPTY_BYTE_STRING=new qe("");const og=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Nr(e){if(be(!!e),typeof e=="string"){let t=0;const n=og.exec(e);if(be(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:fe(e.seconds),nanos:fe(e.nanos)}}function fe(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function _s(e){return typeof e=="string"?qe.fromBase64String(e):qe.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function jf(e){const t=e.mapValue.fields.__previous_value__;return $f(t)?jf(t):t}function ks(e){const t=Nr(e.mapValue.fields.__local_write_time__.timestampValue);return new at(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cs(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?$f(e)?4:function(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(e)?9:10:Rt()}function Is(e,t){if(e===t)return!0;const n=Cs(e);if(n!==Cs(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return ks(e).isEqual(ks(t));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=Nr(r.timestampValue),s=Nr(i.timestampValue);return o.seconds===s.seconds&&o.nanos===s.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(r,i){return _s(r.bytesValue).isEqual(_s(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(r,i){return fe(r.geoPointValue.latitude)===fe(i.geoPointValue.latitude)&&fe(r.geoPointValue.longitude)===fe(i.geoPointValue.longitude)}(e,t);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return fe(r.integerValue)===fe(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=fe(r.doubleValue),s=fe(i.doubleValue);return o===s?uu(o)===uu(s):isNaN(o)&&isNaN(s)}return!1}(e,t);case 9:return ig(e.arrayValue.values||[],t.arrayValue.values||[],Is);case 10:return function(r,i){const o=r.mapValue.fields||{},s=i.mapValue.fields||{};if(du(o)!==du(s))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(s[l]===void 0||!Is(o[l],s[l])))return!1;return!0}(e,t);default:return Rt()}}function pu(e){return!!e&&"nullValue"in e}function hu(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function xo(e){return!!e&&"mapValue"in e}function sr(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return xl(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=sr(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=sr(e.arrayValue.values[n]);return t}return Object.assign({},e)}class je{constructor(t){this.value=t}static empty(){return new je({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!xo(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=sr(n)}setAll(t){let n=Ne.emptyPath(),r={},i=[];t.forEach((s,l)=>{if(!n.isImmediateParentOf(l)){const a=this.getFieldsMap(n);this.applyChanges(a,r,i),r={},i=[],n=l.popLast()}s?r[l.lastSegment()]=sr(s):i.push(l.lastSegment())});const o=this.getFieldsMap(n);this.applyChanges(o,r,i)}delete(t){const n=this.field(t.popLast());xo(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Is(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];xo(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){xl(n,(i,o)=>t[i]=o);for(const i of r)delete t[i]}clone(){return new je(sr(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(t,n,r,i,o,s){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.data=o,this.documentState=s}static newInvalidDocument(t){return new Ke(t,0,$e.min(),$e.min(),je.empty(),0)}static newFoundDocument(t,n,r){return new Ke(t,1,n,$e.min(),r,0)}static newNoDocument(t,n){return new Ke(t,2,n,$e.min(),je.empty(),0)}static newUnknownDocument(t,n){return new Ke(t,3,n,$e.min(),je.empty(),2)}convertToFoundDocument(t,n){return this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=je.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=je.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Ke&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Ke(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(t,n=null,r=[],i=[],o=null,s=null,l=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=s,this.endAt=l,this.P=null}}function mu(e,t=null,n=[],r=[],i=null,o=null,s=null){return new sg(e,t,n,r,i,o,s)}class gu{constructor(t,n){this.position=t,this.inclusive=n}}class lr{constructor(t,n="asc"){this.field=t,this.dir=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(t,n=null,r=[],i=[],o=null,s="F",l=null,a=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=s,this.startAt=l,this.endAt=a,this.$=null,this.S=null,this.startAt,this.endAt}}function yu(e){return!Mf(e.limit)&&e.limitType==="L"}function Vf(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function zf(e){for(const t of e.filters)if(t.N())return t.field;return null}function vu(e){const t=Pl(e);if(t.$===null){t.$=[];const n=zf(t),r=Vf(t);if(n!==null&&r===null)n.isKeyField()||t.$.push(new lr(n)),t.$.push(new lr(Ne.keyField(),"asc"));else{let i=!1;for(const o of t.explicitOrderBy)t.$.push(o),o.field.isKeyField()&&(i=!0);if(!i){const o=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.$.push(new lr(Ne.keyField(),o))}}}return t.$}function lg(e){const t=Pl(e);if(!t.S)if(t.limitType==="F")t.S=mu(t.path,t.collectionGroup,vu(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const o of vu(t)){const s=o.dir==="desc"?"asc":"desc";n.push(new lr(o.field,s))}const r=t.endAt?new gu(t.endAt.position,!t.endAt.inclusive):null,i=t.startAt?new gu(t.startAt.position,!t.startAt.inclusive):null;t.S=mu(t.path,t.collectionGroup,n,t.filters,t.limit,r,i)}return t.S}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),ug=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class cg{constructor(t,n){this.databaseId=t,this.F=n}}function fg(e){return be(!!e),$e.fromTimestamp(function(t){const n=Nr(t);return new at(n.seconds,n.nanos)}(e))}function dg(e,t){return function(n){return new ie(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function pg(e,t){const n=function(i){const o=ie.fromString(i);return be(Bf(o)),o}(t);if(n.get(1)!==e.databaseId.projectId)throw new O(F,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new O(F,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Be((be((r=n).length>4&&r.get(4)==="documents"),r.popFirst(5)));var r}function wu(e,t){return dg(e.databaseId,t)}function hg(e,t){const n={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(n.parent=wu(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=wu(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(a){if(a.length===0)return;const u=a.map(g=>function(v){if(v.op==="=="){if(hu(v.value))return{unaryFilter:{field:Ut(v.field),op:"IS_NAN"}};if(pu(v.value))return{unaryFilter:{field:Ut(v.field),op:"IS_NULL"}}}else if(v.op==="!="){if(hu(v.value))return{unaryFilter:{field:Ut(v.field),op:"IS_NOT_NAN"}};if(pu(v.value))return{unaryFilter:{field:Ut(v.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ut(v.field),op:gg(v.op),value:v.value}}}(g));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(t.filters);i&&(n.structuredQuery.where=i);const o=function(a){if(a.length!==0)return a.map(u=>function(g){return{field:Ut(g.field),direction:mg(g.dir)}}(u))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const s=function(a,u){return a.F||Mf(u)?u:{value:u}}(e,t.limit);var l;return s!==null&&(n.structuredQuery.limit=s),t.startAt&&(n.structuredQuery.startAt={before:(l=t.startAt).inclusive,values:l.position}),t.endAt&&(n.structuredQuery.endAt=function(a){return{before:!a.inclusive,values:a.position}}(t.endAt)),n}function mg(e){return ag[e]}function gg(e){return ug[e]}function Ut(e){return{fieldPath:e.canonicalString()}}function Bf(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yg(e){return new cg(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.K=r,this.q=i,this.J=!1}X(){if(this.J)throw new O(hn,"The client has already been terminated.")}m(t,n,r){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.K.m(t,n,r,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===Es&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new O(or,i.toString())})}T(t,n,r){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.K.T(t,n,r,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===Es&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new O(or,i.toString())})}terminate(){this.J=!0}}async function wg(e,t){const n=Pl(e),r=hg(n.q,lg(t));return(await n.T("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter(i=>!!i.document).map(i=>function(o,s,l){const a=pg(o,s.name),u=fg(s.updateTime),g=new je({mapValue:{fields:s.fields}}),v=Ke.newFoundDocument(a,u,g);return l&&v.setHasCommittedMutations(),l?v.setHasCommittedMutations():v}(n.q,i.document,void 0))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar=new Map;function Sg(e){if(e._terminated)throw new O(hn,"The client has already been terminated.");if(!ar.has(e)){Oi("ComponentProvider","Initializing Datastore");const o=function(a){return new rg(a,fetch.bind(null))}((t=e._databaseId,n=e.app.options.appId||"",r=e._persistenceKey,i=e._freezeSettings(),new Ym(t,n,r,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams))),s=yg(e._databaseId),l=function(a,u,g,v){return new vg(a,u,g,v)}(e._authCredentials,e._appCheckCredentials,o,s);ar.set(e,l)}var t,n,r,i;/**
* @license
* Copyright 2018 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return ar.get(e)}class Su{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new O(F,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new O(F,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(r,i,o,s){if(i===!0&&s===!0)throw new O(F,`${r} and ${o} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(t,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Su({}),this._settingsFrozen=!1,t instanceof mn?this._databaseId=t:(this._app=t,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new O(F,'"projectId" not provided in firebase.initializeApp.');return new mn(i.options.projectId)}(t))}get app(){if(!this._app)throw new O(hn,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new O(hn,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Su(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Wm;switch(n.type){case"gapi":const r=n.client;return be(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new Gm(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new O(F,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=ar.get(t);n&&(Oi("ComponentProvider","Removing Datastore"),ar.delete(t),n.terminate())}(this),Promise.resolve()}}function Xy(e=Df()){return Fr(e,"firestore/lite").getImmediate()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new an(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new In(this.firestore,t,this._key)}}class Tn{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Tn(this.firestore,t,this._query)}}class an extends Tn{constructor(t,n,r){super(t,n,new Al(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new In(this.firestore,null,new Be(t))}withConverter(t){return new an(this.firestore,t,this._path)}}function Zy(e,t,...n){if(e=kl(e),Zm("collection","path",t),e instanceof Uf){const r=ie.fromString(t,...n);return au(r),new an(e,null,r)}{if(!(e instanceof In||e instanceof an))throw new O(F,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(ie.fromString(t,...n));return au(r),new an(e.firestore,null,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new O(F,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ne(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Di(qe.fromBase64String(t))}catch(n){throw new O(F,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Di(qe.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new O(F,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new O(F,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Tr(this._lat,t._lat)||Tr(this._long,t._long)}}const _g=new RegExp("[~\\*/\\[\\]]");function kg(e,t,n){if(t.search(_g)>=0)throw Eu(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Hf(...t.split("."))._internalPath}catch{throw Eu(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Eu(e,t,n,r,i){const o=r&&!r.isEmpty(),s=i!==void 0;let l=`Function ${t}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let a="";return(o||s)&&(a+=" (found",o&&(a+=` in field ${r}`),s&&(a+=` in document ${i}`),a+=")"),new O(F,l+e+a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(t,n,r,i,o){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new In(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Wf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(bf("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Wf extends Cg{data(){return super.data()}}class Ig{constructor(t,n){this._docs=n,this.query=t}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(t,n){this._docs.forEach(t,n)}}function bf(e,t){return typeof t=="string"?kg(e,t):t instanceof Hf?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{}function Jy(e,...t){for(const n of t)e=n._apply(e);return e}class Tg extends qf{constructor(t,n){super(),this.dt=t,this._t=n,this.type="orderBy"}_apply(t){const n=function(r,i,o){if(r.startAt!==null)throw new O(F,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new O(F,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const s=new lr(i,o);return function(l,a){if(Vf(l)===null){const u=zf(l);u!==null&&Pg(l,u,a.field)}}(r,s),s}(t._query,this.dt,this._t);return new Tn(t.firestore,t.converter,function(r,i){const o=r.explicitOrderBy.concat([i]);return new Al(r.path,r.collectionGroup,o,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(t._query,n))}}function e0(e,t="asc"){const n=t,r=bf("orderBy",e);return new Tg(r,n)}class Ng extends qf{constructor(t,n,r){super(),this.type=t,this.gt=n,this.vt=r}_apply(t){return new Tn(t.firestore,t.converter,function(n,r,i){return new Al(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),r,i,n.startAt,n.endAt)}(t._query,this.gt,this.vt))}}function t0(e){return tg("limit",e),new Ng("limit",e,"F")}function Pg(e,t,n){if(!n.isEqual(t))throw new O(F,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class xg extends class{convertValue(t,n="none"){switch(Cs(t)){case 0:return null;case 1:return t.booleanValue;case 2:return fe(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(_s(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw Rt()}}convertObject(t,n){const r={};return xl(t.fields,(i,o)=>{r[i]=this.convertValue(o,n)}),r}convertGeoPoint(t){return new Eg(fe(t.latitude),fe(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=jf(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ks(t));default:return null}}convertTimestamp(t){const n=Nr(t);return new at(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=ie.fromString(t);be(Bf(r));const i=new mn(r.get(1),r.get(3)),o=new Be(r.popFirst(5));return i.isEqual(n)||Tl(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),o}}{constructor(t){super(),this.firestore=t}convertBytes(t){return new Di(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new In(this.firestore,null,n)}}function n0(e){(function(r){if(yu(r)&&r.explicitOrderBy.length===0)throw new O(Ff,"limitToLast() queries require specifying at least one orderBy() clause")})((e=eg(e,Tn))._query);const t=Sg(e.firestore),n=new xg(e.firestore);return wg(t,e._query).then(r=>{const i=r.map(o=>new Wf(e.firestore,n,o.key,o,e.converter));return yu(e._query)&&i.reverse(),new Ig(e,i)})}(function(e){Cn=e})(`${km}_lite`),ht(new We("firestore/lite",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=new Uf(n,new bm(e.getProvider("auth-internal")),new Km(e.getProvider("app-check-internal")));return t&&r._setSettings(t),r},"PUBLIC")),Re("firestore-lite","3.4.6",""),Re("firestore-lite","3.4.6","esm2017");var Ag="firebase",Og="9.6.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Re(Ag,Og,"app");const Gf="@firebase/installations",Ol="0.5.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf=1e4,Kf=`w:${Ol}`,Yf="FIS_v2",Dg="https://firebaseinstallations.googleapis.com/v1",Rg=60*60*1e3,Lg="installations",Fg="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Lt=new Yi(Lg,Fg,Mg);function Xf(e){return e instanceof kn&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zf({projectId:e}){return`${Dg}/projects/${e}/installations`}function Jf(e){return{token:e.token,requestStatus:2,expiresIn:jg(e.expiresIn),creationTime:Date.now()}}async function ed(e,t){const r=(await t.json()).error;return Lt.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function td({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function $g(e,{refreshToken:t}){const n=td(e);return n.append("Authorization",Vg(t)),n}async function nd(e){const t=await e();return t.status>=500&&t.status<600?e():t}function jg(e){return Number(e.replace("s","000"))}function Vg(e){return`${Yf} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zg({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Zf(e),i=td(e),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={fid:n,authVersion:Yf,appId:e.appId,sdkVersion:Kf},l={method:"POST",headers:i,body:JSON.stringify(s)},a=await nd(()=>fetch(r,l));if(a.ok){const u=await a.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Jf(u.authToken)}}else throw await ed("Create Installation",a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bg(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug=/^[cdef][\w-]{21}$/,Ts="";function Hg(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Wg(e);return Ug.test(n)?n:Ts}catch{return Ts}}function Wg(e){return Bg(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id=new Map;function od(e,t){const n=Xi(e);sd(n,t),bg(n,t)}function sd(e,t){const n=id.get(e);if(!!n)for(const r of n)r(t)}function bg(e,t){const n=qg();n&&n.postMessage({key:e,fid:t}),Gg()}let Nt=null;function qg(){return!Nt&&"BroadcastChannel"in self&&(Nt=new BroadcastChannel("[Firebase] FID Change"),Nt.onmessage=e=>{sd(e.data.key,e.data.fid)}),Nt}function Gg(){id.size===0&&Nt&&(Nt.close(),Nt=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg="firebase-installations-database",Kg=1,Ft="firebase-installations-store";let Ao=null;function Dl(){return Ao||(Ao=Af(Qg,Kg,(e,t)=>{switch(t){case 0:e.createObjectStore(Ft)}})),Ao}async function Ri(e,t){const n=Xi(e),i=(await Dl()).transaction(Ft,"readwrite"),o=i.objectStore(Ft),s=await o.get(n);return await o.put(t,n),await i.complete,(!s||s.fid!==t.fid)&&od(e,t.fid),t}async function ld(e){const t=Xi(e),r=(await Dl()).transaction(Ft,"readwrite");await r.objectStore(Ft).delete(t),await r.complete}async function Zi(e,t){const n=Xi(e),i=(await Dl()).transaction(Ft,"readwrite"),o=i.objectStore(Ft),s=await o.get(n),l=t(s);return l===void 0?await o.delete(n):await o.put(l,n),await i.complete,l&&(!s||s.fid!==l.fid)&&od(e,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rl(e){let t;const n=await Zi(e.appConfig,r=>{const i=Yg(r),o=Xg(e,i);return t=o.registrationPromise,o.installationEntry});return n.fid===Ts?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Yg(e){const t=e||{fid:Hg(),registrationStatus:0};return ad(t)}function Xg(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Lt.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Zg(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Jg(e)}:{installationEntry:t}}async function Zg(e,t){try{const n=await zg(e,t);return Ri(e.appConfig,n)}catch(n){throw Xf(n)&&n.customData.serverCode===409?await ld(e.appConfig):await Ri(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Jg(e){let t=await _u(e.appConfig);for(;t.registrationStatus===1;)await rd(100),t=await _u(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Rl(e);return r||n}return t}function _u(e){return Zi(e,t=>{if(!t)throw Lt.create("installation-not-found");return ad(t)})}function ad(e){return ey(e)?{fid:e.fid,registrationStatus:0}:e}function ey(e){return e.registrationStatus===1&&e.registrationTime+Qf<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ty({appConfig:e,heartbeatServiceProvider:t},n){const r=ny(e,n),i=$g(e,n),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={installation:{sdkVersion:Kf,appId:e.appId}},l={method:"POST",headers:i,body:JSON.stringify(s)},a=await nd(()=>fetch(r,l));if(a.ok){const u=await a.json();return Jf(u)}else throw await ed("Generate Auth Token",a)}function ny(e,{fid:t}){return`${Zf(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ll(e,t=!1){let n;const r=await Zi(e.appConfig,o=>{if(!ud(o))throw Lt.create("not-registered");const s=o.authToken;if(!t&&oy(s))return o;if(s.requestStatus===1)return n=ry(e,t),o;{if(!navigator.onLine)throw Lt.create("app-offline");const l=ly(o);return n=iy(e,l),l}});return n?await n:r.authToken}async function ry(e,t){let n=await ku(e.appConfig);for(;n.authToken.requestStatus===1;)await rd(100),n=await ku(e.appConfig);const r=n.authToken;return r.requestStatus===0?Ll(e,t):r}function ku(e){return Zi(e,t=>{if(!ud(t))throw Lt.create("not-registered");const n=t.authToken;return ay(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function iy(e,t){try{const n=await ty(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Ri(e.appConfig,r),n}catch(n){if(Xf(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await ld(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Ri(e.appConfig,r)}throw n}}function ud(e){return e!==void 0&&e.registrationStatus===2}function oy(e){return e.requestStatus===2&&!sy(e)}function sy(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Rg}function ly(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function ay(e){return e.requestStatus===1&&e.requestTime+Qf<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uy(e){const t=e,{installationEntry:n,registrationPromise:r}=await Rl(t);return r?r.catch(console.error):Ll(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cy(e,t=!1){const n=e;return await fy(n),(await Ll(n,t)).token}async function fy(e){const{registrationPromise:t}=await Rl(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dy(e){if(!e||!e.options)throw Oo("App Configuration");if(!e.name)throw Oo("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Oo(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Oo(e){return Lt.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cd="installations",py="installations-internal",hy=e=>{const t=e.getProvider("app").getImmediate(),n=dy(t),r=Fr(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},my=e=>{const t=e.getProvider("app").getImmediate(),n=Fr(t,cd).getImmediate();return{getId:()=>uy(n),getToken:i=>cy(n,i)}};function gy(){ht(new We(cd,hy,"PUBLIC")),ht(new We(py,my,"PRIVATE"))}gy();Re(Gf,Ol);Re(Gf,Ol,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Li="analytics",yy="firebase_id",vy="origin",wy=60*1e3,Sy="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",fd="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe=new Cl("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dd(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function Ey(e,t){const n=document.createElement("script");n.src=`${fd}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}function _y(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function ky(e,t,n,r,i,o){const s=r[i];try{if(s)await t[s];else{const a=(await dd(n)).find(u=>u.measurementId===i);a&&await t[a.appId]}}catch(l){pe.error(l)}e("config",i,o)}async function Cy(e,t,n,r,i){try{let o=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const l=await dd(n);for(const a of s){const u=l.find(v=>v.measurementId===a),g=u&&t[u.appId];if(g)o.push(g);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),e("event",r,i||{})}catch(o){pe.error(o)}}function Iy(e,t,n,r){async function i(o,s,l){try{o==="event"?await Cy(e,t,n,s,l):o==="config"?await ky(e,t,n,r,s,l):e("set",s)}catch(a){pe.error(a)}}return i}function Ty(e,t,n,r,i){let o=function(...s){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=Iy(o,e,t,n),{gtagCore:o,wrappedGtag:window[i]}}function Ny(){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(fd))return t;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Py={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},Se=new Yi("analytics","Analytics",Py);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy=30,Ay=1e3;class Oy{constructor(t={},n=Ay){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const pd=new Oy;function Dy(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Ry(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:Dy(r)},o=Sy.replace("{app-id}",n),s=await fetch(o,i);if(s.status!==200&&s.status!==304){let l="";try{const a=await s.json();((t=a.error)===null||t===void 0?void 0:t.message)&&(l=a.error.message)}catch{}throw Se.create("config-fetch-failed",{httpStatus:s.status,responseMessage:l})}return s.json()}async function Ly(e,t=pd,n){const{appId:r,apiKey:i,measurementId:o}=e.options;if(!r)throw Se.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw Se.create("no-api-key")}const s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new $y;return setTimeout(async()=>{l.abort()},n!==void 0?n:wy),hd({appId:r,apiKey:i,measurementId:o},s,l,t)}async function hd(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=pd){const{appId:o,measurementId:s}=e;try{await Fy(r,t)}catch(l){if(s)return pe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${l.message}]`),{appId:o,measurementId:s};throw l}try{const l=await Ry(e);return i.deleteThrottleMetadata(o),l}catch(l){if(!My(l)){if(i.deleteThrottleMetadata(o),s)return pe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${l.message}]`),{appId:o,measurementId:s};throw l}const a=Number(l.customData.httpStatus)===503?eu(n,i.intervalMillis,xy):eu(n,i.intervalMillis),u={throttleEndTimeMillis:Date.now()+a,backoffCount:n+1};return i.setThrottleMetadata(o,u),pe.debug(`Calling attemptFetch again in ${a} millis`),hd(e,u,r,i)}}function Fy(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),o=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(o),r(Se.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function My(e){if(!(e instanceof kn)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class $y{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jy(){if(Tf())try{await Nf()}catch(e){return pe.warn(Se.create("indexeddb-unavailable",{errorInfo:e}).message),!1}else return pe.warn(Se.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Vy(e,t,n,r,i,o,s){var l;const a=Ly(e);a.then(w=>{n[w.measurementId]=w.appId,e.options.measurementId&&w.measurementId!==e.options.measurementId&&pe.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${w.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(w=>pe.error(w)),t.push(a);const u=jy().then(w=>{if(w)return r.getId()}),[g,v]=await Promise.all([a,u]);Ny()||Ey(o,g.measurementId),i("js",new Date);const h=(l=s==null?void 0:s.config)!==null&&l!==void 0?l:{};return h[vy]="firebase",h.update=!0,v!=null&&(h[yy]=v),i("config",g.measurementId,h),g.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(t){this.app=t}_delete(){return delete ur[this.app.options.appId],Promise.resolve()}}let ur={},Cu=[];const Iu={};let Do="dataLayer",By="gtag",Tu,md,Nu=!1;function Uy(){const e=[];if(xh()&&e.push("This is a browser extension environment."),Ah()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Se.create("invalid-analytics-context",{errorInfo:t});pe.warn(n.message)}}function Hy(e,t,n){Uy();const r=e.options.appId;if(!r)throw Se.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)pe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Se.create("no-api-key");if(ur[r]!=null)throw Se.create("already-exists",{id:r});if(!Nu){_y(Do);const{wrappedGtag:o,gtagCore:s}=Ty(ur,Cu,Iu,Do,By);md=o,Tu=s,Nu=!0}return ur[r]=Vy(e,Cu,Iu,t,Tu,Do,n),new zy(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wy(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const o=await t,s=Object.assign(Object.assign({},r),{send_to:o});e("event",n,s)}}function r0(e=Df()){e=kl(e);const t=Fr(e,Li);return t.isInitialized()?t.getImmediate():by(e)}function by(e,t={}){const n=Fr(e,Li);if(n.isInitialized()){const i=n.getImmediate();if(xi(t,n.getOptions()))return i;throw Se.create("already-initialized")}return n.initialize({options:t})}function qy(e,t,n,r){e=kl(e),Wy(md,ur[e.app.options.appId],t,n,r).catch(i=>pe.error(i))}const Pu="@firebase/analytics",xu="0.7.6";function Gy(){ht(new We(Li,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return Hy(r,i,n)},"PUBLIC")),ht(new We("analytics-internal",e,"PRIVATE")),Re(Pu,xu),Re(Pu,xu,"esm2017");function e(t){try{const n=t.getProvider(Li).getImmediate();return{logEvent:(r,i,o)=>qy(n,r,i,o)}}catch(n){throw Se.create("interop-component-reg-failed",{reason:n})}}}Gy();export{Ky as R,t0 as a,n0 as b,Qy as c,Zy as f,r0 as g,Yy as i,Sh as j,Xy as o,Fi as r,e0 as s,Jy as t};
