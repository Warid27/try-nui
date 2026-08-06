(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var Cr=typeof self<"u"?self:{};function Wf(t,e){e:{for(var n=["CLOSURE_FLAGS"],i=Cr,r=0;r<n.length;r++)if((i=i[n[r]])==null){n=null;break e}n=i}return(t=n&&n[t])!=null?t:e}function vt(t,e){t=t.split(".");for(var n,i=Cr;t.length&&(n=t.shift());)t.length||e===void 0?i=i[n]&&i[n]!==Object.prototype[n]?i[n]:i[n]={}:i[n]=e}function ar(){throw Error("Invalid UTF8")}function ju(t,e){return e=String.fromCharCode.apply(null,e),t==null?e:t+e}var xl,Xg,wa=void 0,$g=typeof TextDecoder<"u",qg=typeof TextEncoder<"u";function Xf(t){if(qg)t=(Xg||(Xg=new TextEncoder)).encode(t);else{let n=0,i=new Uint8Array(3*t.length);for(let r=0;r<t.length;r++){var e=t.charCodeAt(r);if(e<128)i[n++]=e;else{if(e<2048)i[n++]=e>>6|192;else{if(e>=55296&&e<=57343){if(e<=56319&&r<t.length){let s=t.charCodeAt(++r);if(s>=56320&&s<=57343){e=1024*(e-55296)+s-56320+65536,i[n++]=e>>18|240,i[n++]=e>>12&63|128,i[n++]=e>>6&63|128,i[n++]=63&e|128;continue}r--}e=65533}i[n++]=e>>12|224,i[n++]=e>>6&63|128}i[n++]=63&e|128}}t=n===i.length?i:i.subarray(0,n)}return t}function $f(t){Cr.setTimeout(()=>{throw t},0)}var Yg=Wf(610401301,!1),Zu=Wf(748402147,!0);function Ju(){var t=Cr.navigator;return t&&(t=t.userAgent)?t:""}var oc,Qu=Cr.navigator;function zo(t){return zo[" "](t),t}oc=Qu&&Qu.userAgentData||null,zo[" "]=function(){};var qf={},Ks=null;function Kg(t){var e=t.length,n=3*e/4;n%3?n=Math.floor(n):"=.".indexOf(t[e-1])!=-1&&(n="=.".indexOf(t[e-2])!=-1?n-2:n-1);var i=new Uint8Array(n),r=0;return function(s,a){function o(c){for(;l<s.length;){let u=s.charAt(l++),h=Ks[u];if(h!=null)return h;if(!/^[\s\xa0]*$/.test(u))throw Error("Unknown base64 encoding at char: "+u)}return c}Yf();for(var l=0;;){let c=o(-1),u=o(0),h=o(64),d=o(64);if(d===64&&c===-1)break;a(c<<2|u>>4),h!=64&&(a(u<<4&240|h>>2),d!=64&&a(h<<6&192|d))}}(t,function(s){i[r++]=s}),r!==n?i.subarray(0,r):i}function Yf(){if(!Ks){Ks={};var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"];for(let n=0;n<5;n++){let i=t.concat(e[n].split(""));qf[n]=i;for(let r=0;r<i.length;r++){let s=i[r];Ks[s]===void 0&&(Ks[s]=r)}}}}var jg=typeof Uint8Array<"u",Kf=!(!(Yg&&oc&&oc.brands.length>0)&&(Ju().indexOf("Trident")!=-1||Ju().indexOf("MSIE")!=-1))&&typeof btoa=="function",eh=/[-_.]/g,Zg={"-":"+",_:"/",".":"="};function Jg(t){return Zg[t]||""}function jf(t){if(!Kf)return Kg(t);t=eh.test(t)?t.replace(eh,Jg):t,t=atob(t);var e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}function zc(t){return jg&&t!=null&&t instanceof Uint8Array}var ms={};function Pr(){return Qg||(Qg=new Qn(null,ms))}function Gc(t){Zf(ms);var e=t.g;return(e=e==null||zc(e)?e:typeof e=="string"?jf(e):null)==null?e:t.g=e}var Qg,Qn=class{h(){return new Uint8Array(Gc(this)||0)}constructor(t,e){if(Zf(e),this.g=t,t!=null&&t.length===0)throw Error("ByteString should be constructed with non-empty values")}};function Zf(t){if(t!==ms)throw Error("illegal external caller")}function Jf(t,e){t.__closure__error__context__984382||(t.__closure__error__context__984382={}),t.__closure__error__context__984382.severity=e}var e0=void 0;function na(t){return Jf(t=Error(t),"warning"),t}function gs(t,e){if(t!=null){var n=e0??(e0={}),i=n[t]||0;i>=e||(n[t]=i+1,Jf(t=Error(),"incident"),$f(t))}}function Dr(){return typeof BigInt=="function"}var Ls=typeof Symbol=="function"&&typeof Symbol()=="symbol";function ri(t,e,n=!1){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?n&&Symbol.for&&t?Symbol.for(t):t!=null?Symbol(t):Symbol():e}var Qi,t0=ri("jas",void 0,!0),th=ri(void 0,"0di"),Hs=ri(void 0,"1oa"),Sn=ri(void 0,Symbol()),n0=ri(void 0,"0ub"),i0=ri(void 0,"0ubs"),lc=ri(void 0,"0ubsb"),r0=ri(void 0,"0actk"),_s=ri("m_m","kb",!0),nh=ri(),Qf={Va:{value:0,configurable:!0,writable:!0,enumerable:!1}},ep=Object.defineProperties,me=Ls?t0:"Va",ih=[];function ca(t,e){Ls||me in t||ep(t,Qf),t[me]|=e}function Bt(t,e){Ls||me in t||ep(t,Qf),t[me]=e}function ua(t){return ca(t,34),t}function ia(t){return ca(t,8192),t}Bt(ih,7),Qi=Object.freeze(ih);var vs={};function pn(t,e){return e===void 0?t.h!==Lr&&!!(2&t.A[me]):!!(2&e)&&t.h!==Lr}var Lr={};function Go(t,e){if(t!=null){if(typeof t=="string")t=t?new Qn(t,ms):Pr();else if(t.constructor!==Qn)if(zc(t))t=t.length?new Qn(new Uint8Array(t),ms):Pr();else{if(!e)throw Error();t=void 0}}return t}class rh{constructor(e,n,i){this.g=e,this.h=n,this.j=i}next(){var e=this.g.next();return e.done||(e.value=this.h.call(this.j,e.value)),e}[Symbol.iterator](){return this}}var s0=Object.freeze({});function tp(t,e,n){var i,r=128&e?0:-1,s=t.length;(i=!!s)&&(i=(i=t[s-1])!=null&&typeof i=="object"&&i.constructor===Object);var a=s+(i?-1:0);for(e=128&e?1:0;e<a;e++)n(e-r,t[e]);if(i){t=t[s-1];for(let o in t)!isNaN(o)&&n(+o,t[o])}}var np={};function Is(t){return 128&t?np:void 0}function Ho(t){return t.ib=!0,t}var a0=Ho(t=>typeof t=="number"),sh=Ho(t=>typeof t=="string"),o0=Ho(t=>typeof t=="boolean"),Vo=typeof Cr.BigInt=="function"&&typeof Cr.BigInt(0)=="bigint";function Ft(t){var e=t;if(sh(e)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(e))throw Error(String(e))}else if(a0(e)&&!Number.isSafeInteger(e))throw Error(String(e));return Vo?BigInt(t):t=o0(t)?t?"1":"0":sh(t)?t.trim()||"0":String(t)}var cc=Ho(t=>Vo?t>=c0&&t<=h0:t[0]==="-"?ah(t,l0):ah(t,u0)),l0=Number.MIN_SAFE_INTEGER.toString(),c0=Vo?BigInt(Number.MIN_SAFE_INTEGER):void 0,u0=Number.MAX_SAFE_INTEGER.toString(),h0=Vo?BigInt(Number.MAX_SAFE_INTEGER):void 0;function ah(t,e){if(t.length>e.length)return!1;if(t.length<e.length||t===e)return!0;for(let n=0;n<t.length;n++){let i=t[n],r=e[n];if(i>r)return!1;if(i<r)return!0}}var ip,d0=typeof Uint8Array.prototype.slice=="function",Qe=0,ht=0;function uc(t){var e=t>>>0;Qe=e,ht=(t-e)/4294967296>>>0}function Ur(t){if(t<0){uc(-t);let[e,n]=Wc(Qe,ht);Qe=e>>>0,ht=n>>>0}else uc(t)}function Hc(t){var e=ip||(ip=new DataView(new ArrayBuffer(8)));e.setFloat32(0,+t,!0),ht=0,Qe=e.getUint32(0,!0)}function rp(t,e){var n=4294967296*e+(t>>>0);return Number.isSafeInteger(n)?n:xs(t,e)}function f0(t,e){return Ft(Dr()?BigInt.asUintN(64,(BigInt(e>>>0)<<BigInt(32))+BigInt(t>>>0)):xs(t,e))}function sp(t,e){return Dr()?Ft(BigInt.asIntN(64,(BigInt.asUintN(32,BigInt(e))<<BigInt(32))+BigInt.asUintN(32,BigInt(t)))):Ft(Vc(t,e))}function xs(t,e){if(t>>>=0,(e>>>=0)<=2097151)var n=""+(4294967296*e+t);else Dr()?n=""+(BigInt(e)<<BigInt(32)|BigInt(t)):(t=(16777215&t)+6777216*(n=16777215&(t>>>24|e<<8))+6710656*(e=e>>16&65535),n+=8147497*e,e*=2,t>=1e7&&(n+=t/1e7>>>0,t%=1e7),n>=1e7&&(e+=n/1e7>>>0,n%=1e7),n=e+oh(n)+oh(t));return n}function oh(t){return t=String(t),"0000000".slice(t.length)+t}function Vc(t,e){if(2147483648&e)if(Dr())t=""+(BigInt(0|e)<<BigInt(32)|BigInt(t>>>0));else{let[n,i]=Wc(t,e);t="-"+xs(n,i)}else t=xs(t,e);return t}function ha(t){if(t.length<16)Ur(Number(t));else if(Dr())t=BigInt(t),Qe=Number(t&BigInt(4294967295))>>>0,ht=Number(t>>BigInt(32)&BigInt(4294967295));else{let e=+(t[0]==="-");ht=Qe=0;let n=t.length;for(let i=e,r=(n-e)%6+e;r<=n;i=r,r+=6){let s=Number(t.slice(i,r));ht*=1e6,(Qe=1e6*Qe+s)>=4294967296&&(ht+=Math.trunc(Qe/4294967296),ht>>>=0,Qe>>>=0)}if(e){let[i,r]=Wc(Qe,ht);Qe=i,ht=r}}}function Wc(t,e){return e=~e,t?t=1+~t:e+=1,[t,e]}function Dn(t){return Array.prototype.slice.call(t)}var Ar=typeof BigInt=="function"?BigInt.asIntN:void 0,hc=typeof BigInt=="function"?BigInt.asUintN:void 0,ei=Number.isSafeInteger,da=Number.isFinite,Ki=Math.trunc,p0=Ft(0);function ap(t){if(typeof t!="number")throw Error(`Value of float/double field must be a number, found ${typeof t}: ${t}`);return t}function Gn(t){return t==null||typeof t=="number"?t:t==="NaN"||t==="Infinity"||t==="-Infinity"?Number(t):void 0}function go(t){if(typeof t!="boolean"){var e=typeof t;throw Error(`Expected boolean but got ${e!="object"?e:t?Array.isArray(t)?"array":e:"null"}: ${t}`)}return t}var m0=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Ds(t){switch(typeof t){case"bigint":return!0;case"number":return da(t);case"string":return m0.test(t);default:return!1}}function Ei(t){if(t!=null){if(!da(t))throw na("enum");t|=0}return t}function Nr(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return da(t)?0|t:void 0}function op(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return da(t)?t>>>0:void 0}function lp(t,e){if(e??(e=1024),!Ds(t))throw na("int64");var n=typeof t;switch(e){case 512:switch(n){case"string":return _o(t);case"bigint":return String(Ar(64,t));default:return dp(t)}case 1024:switch(n){case"string":return fp(t);case"bigint":return Ft(Ar(64,t));default:return pp(t)}case 0:switch(n){case"string":return _o(t);case"bigint":return Ft(Ar(64,t));default:return Wo(t)}default:return function(i,r=`unexpected value ${i}!`){throw Error(r)}(e,"Unknown format requested type for int64")}}function cp(t){var e=t.length;return(t[0]==="-"?e<20||e===20&&t<="-9223372036854775808":e<19||e===19&&t<="9223372036854775807")?t:(ha(t),Vc(Qe,ht))}function up(t){if(t[0]==="-")var e=!1;else e=(e=t.length)<20||e===20&&t<="18446744073709551615";return e?t:(ha(t),xs(Qe,ht))}function Wo(t){if(t=Ki(t),!ei(t)){Ur(t);var e=Qe,n=ht;(t=2147483648&n)&&(n=~n>>>0,(e=1+~e>>>0)==0&&(n=n+1>>>0)),t=typeof(e=rp(e,n))=="number"?t?-e:e:t?"-"+e:e}return t}function hp(t){return(t=Ki(t))>=0&&ei(t)||(Ur(t),t=rp(Qe,ht)),t}function dp(t){return t=Ki(t),ei(t)?t=String(t):(Ur(t),t=Vc(Qe,ht)),t}function _o(t){var e=Ki(Number(t));return ei(e)?String(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),cp(t))}function fp(t){var e=Ki(Number(t));return ei(e)?Ft(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),Dr()?Ft(Ar(64,BigInt(t))):Ft(cp(t)))}function pp(t){return ei(t)?Ft(Wo(t)):Ft(dp(t))}function vo(t){var e=typeof t;return t==null?t:e==="bigint"?Ft(Ar(64,t)):Ds(t)?e==="string"?fp(t):pp(t):void 0}function Xc(t){if(t==null)return t;var e=typeof t;if(e==="bigint")return String(Ar(64,t));if(Ds(t)){if(e==="string")return _o(t);if(e==="number")return Wo(t)}}function mp(t){if(t==null||typeof t=="string"||t instanceof Qn)return t}function gp(t){if(typeof t!="string")throw Error();return t}function xi(t){if(t!=null&&typeof t!="string")throw Error();return t}function jt(t){return t==null||typeof t=="string"?t:void 0}function $c(t,e,n,i){return t!=null&&t[_s]===vs?t:Array.isArray(t)?((i=(n=0|t[me])|32&i|2&i)!==n&&Bt(t,i),new e(t)):(n?2&i?((t=e[th])||(ua((t=new e).A),t=e[th]=t),e=t):e=new e:e=void 0,e)}function g0(t,e,n){return(t=e?lp(t,1024):vo(t))==null?n?p0:void 0:t}function _0(t){return t}var v0={},x0=function(){try{return zo(new class extends Map{constructor(){super()}}),!1}catch{return!0}}();class Sl{constructor(){this.g=new Map}get(e){return this.g.get(e)}set(e,n){return this.g.set(e,n),this.size=this.g.size,this}delete(e){return e=this.g.delete(e),this.size=this.g.size,e}clear(){this.g.clear(),this.size=this.g.size}has(e){return this.g.has(e)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(e,n){return this.g.forEach(e,n)}[Symbol.iterator](){return this.entries()}}var S0=x0?(Object.setPrototypeOf(Sl.prototype,Map.prototype),Object.defineProperties(Sl.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),Sl):class extends Map{constructor(){super()}};function lh(t){return t}function Ml(t){if(2&t.M)throw Error("Cannot mutate an immutable Map")}var M0,Ai=class extends S0{constructor(t,e,n=lh,i=lh){super(),this.M=0|t[me],this.N=e,this.ba=n,this.na=this.N?E0:i;for(let r=0;r<t.length;r++){let s=t[r],a=n(s[0],!1,!0),o=s[1];e?o===void 0&&(o=null):o=i(s[1],!1,!0,void 0,void 0,this.M),super.set(a,o)}}ea(t){return ia(Array.from(super.entries(),t))}clear(){Ml(this),super.clear()}delete(t){return Ml(this),super.delete(this.ba(t,!0,!1))}entries(){if(this.N){var t=super.keys();t=new rh(t,y0,this)}else t=super.entries();return t}values(){if(this.N){var t=super.keys();t=new rh(t,Ai.prototype.get,this)}else t=super.values();return t}forEach(t,e){this.N?super.forEach((n,i,r)=>{t.call(e,r.get(i),i,r)}):super.forEach(t,e)}set(t,e){return Ml(this),(t=this.ba(t,!0,!1))==null?this:e==null?(super.delete(t),this):super.set(t,this.na(e,!0,!0,this.N,!1,this.M))}gb(t){var e=this.ba(t[0],!1,!0);t=t[1],t=this.N?t===void 0?null:t:this.na(t,!1,!0,void 0,!1,this.M),super.set(e,t)}has(t){return super.has(this.ba(t,!1,!1))}get(t){t=this.ba(t,!1,!1);var e=super.get(t);if(e!==void 0){var n=this.N;return n?((n=this.na(e,!1,!0,n,this.Fa,this.M))!==e&&super.set(t,n),n):e}}[Symbol.iterator](){return this.entries()}};function E0(t,e,n,i,r,s){return t=$c(t,i,n,s),r&&(t=Yc(t)),t}function y0(t){return[t,this.get(t)]}function ch(){return M0||(M0=new Ai(ua([]),void 0,void 0,void 0,v0))}function Xo(t){return Sn?t[Sn]:void 0}function xo(t,e){for(let n in t)!isNaN(n)&&e(t,+n,t[n])}Ai.prototype.toJSON=void 0;var A0,T0,dc=class{},b0={cb:!0};function w0(t,e){e<100||gs(i0,1)}function $o(t,e,n,i){var r=i!==void 0;i=!!i;var s,a=Sn;!r&&Ls&&a&&(s=t[a])&&xo(s,w0),a=[];var o=t.length;s=4294967295;var l=!1,c=!!(64&e),u=c?128&e?0:-1:void 0;if(!(1&e)){var h=o&&t[o-1];h!=null&&typeof h=="object"&&h.constructor===Object?s=--o:h=void 0,!c||128&e||r||(l=!0,s=_0(s-u,u,t,h,void 0)+u)}e=void 0;for(var d=0;d<o;d++){let m=t[d];if(m!=null&&(m=n(m,i))!=null)if(c&&d>=s){let g=d-u;(e??(e={}))[g]=m}else a[d]=m}if(h)for(let m in h){if((o=h[m])==null||(o=n(o,i))==null)continue;let g;d=+m,c&&!Number.isNaN(d)&&(g=d+u)<s?a[g]=o:(e??(e={}))[m]=o}return e&&(l?a.push(e):a[s]=e),r&&Sn&&(t=Xo(t))&&t instanceof dc&&(a[Sn]=function(m){var g=new dc;return xo(m,(x,p,f)=>{g[p]=Dn(f)}),g.ka=m.ka,g}(t)),a}function R0(t){return t[0]=ra(t[0]),t[1]=ra(t[1]),t}function ra(t){switch(typeof t){case"number":return Number.isFinite(t)?t:""+t;case"bigint":return cc(t)?Number(t):""+t;case"boolean":return t?1:0;case"object":if(Array.isArray(t)){var e=0|t[me];return t.length===0&&1&e?void 0:$o(t,e,ra)}if(t!=null&&t[_s]===vs)return _p(t);if(t instanceof Qn){if((e=t.g)==null)t="";else if(typeof e=="string")t=e;else{if(Kf){for(var n="",i=0,r=e.length-10240;i<r;)n+=String.fromCharCode.apply(null,e.subarray(i,i+=10240));n+=String.fromCharCode.apply(null,i?e.subarray(i):e),e=btoa(n)}else{n===void 0&&(n=0),Yf(),n=qf[n],i=Array(Math.floor(e.length/3)),r=n[64]||"";let c=0,u=0;for(;c<e.length-2;c+=3){var s=e[c],a=e[c+1],o=e[c+2],l=n[s>>2];s=n[(3&s)<<4|a>>4],a=n[(15&a)<<2|o>>6],o=n[63&o],i[u++]=l+s+a+o}switch(l=0,o=r,e.length-c){case 2:o=n[(15&(l=e[c+1]))<<2]||r;case 1:e=e[c],i[u]=n[e>>2]+n[(3&e)<<4|l>>4]+o+r}e=i.join("")}t=t.g=e}return t}return t instanceof Ai?t=t.size!==0?t.ea(R0):void 0:void 0}return t}function _p(t){return $o(t=t.A,0|t[me],ra)}function Tr(t,e){return vp(t,e[0],e[1])}function vp(t,e,n,i=0){if(t==null){var r=32;n?(t=[n],r|=128):t=[],e&&(r=-16760833&r|(1023&e)<<14)}else{if(!Array.isArray(t))throw Error("narr");if(r=0|t[me],Zu&&1&r)throw Error("rfarr");if(2048&r&&!(2&r)&&function(){if(Zu)throw Error("carr");gs(r0,5)}(),256&r)throw Error("farr");if(64&r)return(r|i)!==r&&Bt(t,r|i),t;if(n&&(r|=128,n!==t[0]))throw Error("mid");e:{r|=64;var s=(n=t).length;if(s){var a=s-1;let l=n[a];if(l!=null&&typeof l=="object"&&l.constructor===Object){if((a-=e=128&r?0:-1)>=1024)throw Error("pvtlmt");for(var o in l)(s=+o)<a&&(n[s+e]=l[o],delete l[o]);r=-16760833&r|(1023&a)<<14;break e}}if(e){if((o=Math.max(e,s-(128&r?0:-1)))>1024)throw Error("spvt");r=-16760833&r|(1023&o)<<14}}}return Bt(t,64|r|i),t}function C0(t,e){if(typeof t!="object")return t;if(Array.isArray(t)){var n=0|t[me];return t.length===0&&1&n?void 0:uh(t,n,e)}if(t!=null&&t[_s]===vs)return hh(t);if(t instanceof Ai){if(2&(e=t.M))return t;if(!t.size)return;if(n=ua(t.ea()),t.N)for(t=0;t<n.length;t++){let i=n[t],r=i[1];r=r==null||typeof r!="object"?void 0:r!=null&&r[_s]===vs?hh(r):Array.isArray(r)?uh(r,0|r[me],!!(32&e)):void 0,i[1]=r}return n}return t instanceof Qn?t:void 0}function uh(t,e,n){return 2&e||(!n||4096&e||16&e?t=Us(t,e,!1,n&&!(16&e)):(ca(t,34),4&e&&Object.freeze(t))),t}function qc(t,e,n){return t=new t.constructor(e),n&&(t.h=Lr),t.m=Lr,t}function hh(t){var e=t.A,n=0|e[me];return pn(t,n)?t:Kc(t,e,n)?qc(t,e):Us(e,n)}function Us(t,e,n,i){return i??(i=!!(34&e)),t=$o(t,e,C0,i),i=32,n&&(i|=2),Bt(t,e=16769217&e|i),t}function Yc(t){var e=t.A,n=0|e[me];return pn(t,n)?Kc(t,e,n)?qc(t,e,!0):new t.constructor(Us(e,n,!1)):t}function Ns(t){if(t.h!==Lr)return!1;var e=t.A;return ca(e=Us(e,0|e[me]),2048),t.A=e,t.h=void 0,t.m=void 0,!0}function Fr(t){if(!Ns(t)&&pn(t,0|t.A[me]))throw Error()}function er(t,e){e===void 0&&(e=0|t[me]),32&e&&!(4096&e)&&Bt(t,4096|e)}function Kc(t,e,n){return!!(2&n)||!(!(32&n)||4096&n)&&(Bt(e,2|n),t.h=Lr,!0)}var xp=Ft(0),Di={};function Tt(t,e,n,i){if((e=Ti(t.A,e,void 0,i))!==null||n&&t.m!==Lr)return e}function Ti(t,e,n,i){if(e===-1)return null;var r=e+(n?0:-1),s=t.length-1;if(!(s<1+(n?0:-1))){if(r>=s){var a=t[s];if(a!=null&&typeof a=="object"&&a.constructor===Object){n=a[e];var o=!0}else{if(r!==s)return;n=a}}else n=t[r];if(i&&n!=null){if((i=i(n))==null)return i;if(!Object.is(i,n))return o?a[e]=i:t[r]=i,i}return n}}function De(t,e,n,i){Fr(t);var r=t.A;return Lt(r,0|r[me],e,n,i),t}function Lt(t,e,n,i,r){var s=n+(r?0:-1),a=t.length-1;if(a>=1+(r?0:-1)&&s>=a){let o=t[a];if(o!=null&&typeof o=="object"&&o.constructor===Object)return o[n]=i,e}return s<=a?(t[s]=i,e):(i!==void 0&&(n>=(a=(e??(e=0|t[me]))>>14&1023||536870912)?i!=null&&(t[a+(r?0:-1)]={[n]:i}):t[s]=i),e)}function Sp(t,e,n,i){var r=t.A;return bp(r,0|r[me],e,t=Ap(t,i)===n?n:-1)!==void 0}function _r(){return s0===void 0?2:4}function vr(t,e,n,i,r){var s=t.A,a=0|s[me];i=pn(t,a)?1:i,r=!!r||i===3,i===2&&Ns(t)&&(a=0|(s=t.A)[me]);var o=(t=jc(s,e))===Qi?7:0|t[me],l=Zc(o,a),c=!(4&l);if(c){4&l&&(t=Dn(t),o=0,l=Wi(l,a),a=Lt(s,a,e,t));let u=0,h=0;for(;u<t.length;u++){let d=n(t[u]);d!=null&&(t[h++]=d)}h<u&&(t.length=h),n=-513&l|4,l=n&=-1025,l&=-4097}return l!==o&&(Bt(t,l),2&l&&Object.freeze(t)),Mp(t,l,s,a,e,i,c,r)}function Mp(t,e,n,i,r,s,a,o){var l=e;return s===1||s===4&&(2&e||!(16&e)&&32&i)?Vi(e)||((e|=!t.length||a&&!(4096&e)||32&i&&!(4096&e||16&e)?2:256)!==l&&Bt(t,e),Object.freeze(t)):(s===2&&Vi(e)&&(t=Dn(t),l=0,e=Wi(e,i),i=Lt(n,i,r,t)),Vi(e)||(o||(e|=16),e!==l&&Bt(t,e))),2&e||!(4096&e||16&e)||er(n,i),t}function jc(t,e,n){return t=Ti(t,e,n),Array.isArray(t)?t:Qi}function Zc(t,e){return 2&e&&(t|=2),1|t}function Vi(t){return!!(2&t)&&!!(4&t)||!!(256&t)}function Ep(t){return Go(t,!0)}function yp(t){t=Dn(t);for(let e=0;e<t.length;e++){let n=t[e]=Dn(t[e]);Array.isArray(n[1])&&(n[1]=ua(n[1]))}return ia(t)}function fa(t,e,n,i){Fr(t),Lt(t=t.A,0|t[me],e,(i==="0"?Number(n)===0:n===i)?void 0:n)}function tr(t,e,n){if(2&e)throw Error();var i=Is(e),r=jc(t,n,i),s=r===Qi?7:0|r[me],a=Zc(s,e);return(2&a||Vi(a)||16&a)&&(a===s||Vi(a)||Bt(r,a),r=Dn(r),s=0,a=Wi(a,e),Lt(t,e,n,r,i)),(a&=-13)!==s&&Bt(r,a),r}function Ap(t,e){return Qc(Jc(t=t.A),t,void 0,e)}function Jc(t){if(Ls)return t[Hs]??(t[Hs]=new Map);if(Hs in t)return t[Hs];var e=new Map;return Object.defineProperty(t,Hs,{value:e}),e}function Tp(t,e,n,i,r){var s=Jc(t),a=Qc(s,t,e,n,r);return a!==i&&(a&&(e=Lt(t,e,a,void 0,r)),s.set(n,i)),e}function Qc(t,e,n,i,r){var s=t.get(i);if(s!=null)return s;s=0;for(let a=0;a<i.length;a++){let o=i[a];Ti(e,o,r)!=null&&(s!==0&&(n=Lt(e,n,s,void 0,r)),s=o)}return t.set(i,s),s}function eu(t,e,n){var i=0|t[me],r=Is(i),s=Ti(t,n,r);if(s!=null&&s[_s]===vs){if(!pn(s))return Ns(s),s.A;var a=s.A}else Array.isArray(s)&&(a=s);if(a){let o=0|a[me];2&o&&(a=Us(a,o))}return(a=Tr(a,e))!==s&&Lt(t,i,n,a,r),a}function bp(t,e,n,i,r){var s=!1;if((i=Ti(t,i,r,a=>{var o=$c(a,n,!1,e);return s=o!==a&&o!=null,o}))!=null)return s&&!pn(i)&&er(t,e),i}function rt(t,e,n,i){var r=t.A,s=0|r[me];if((e=bp(r,s,e,n,i))==null)return e;if(!pn(t,s=0|r[me])){let a=Yc(e);a!==e&&(Ns(t)&&(s=0|(r=t.A)[me]),er(r,s=Lt(r,s,n,e=a,i)))}return e}function wp(t,e,n,i,r,s,a,o){var l=pn(t,n);s=l?1:s,a=!!a||s===3,l=o&&!l,(s===2||l)&&Ns(t)&&(n=0|(e=t.A)[me]);var c=(t=jc(e,r))===Qi?7:0|t[me],u=Zc(c,n);if(o=!(4&u)){var h=t,d=n;let m=!!(2&u);m&&(d|=2);let g=!m,x=!0,p=0,f=0;for(;p<h.length;p++){let A=$c(h[p],i,!1,d);if(A instanceof i){if(!m){let M=pn(A);g&&(g=!M),x&&(x=M)}h[f++]=A}}f<p&&(h.length=f),u|=4,u=x?-4097&u:4096|u,u=g?8|u:-9&u}if(u!==c&&(Bt(t,u),2&u&&Object.freeze(t)),l&&!(8&u||!t.length&&(s===1||s===4&&(2&u||!(16&u)&&32&n)))){for(Vi(u)&&(t=Dn(t),u=Wi(u,n),n=Lt(e,n,r,t)),i=t,l=u,c=0;c<i.length;c++)(h=i[c])!==(u=Yc(h))&&(i[c]=u);l|=8,Bt(t,u=l=i.length?4096|l:-4097&l)}return Mp(t,u,e,n,r,s,o,a)}function bi(t,e,n){var i=t.A;return wp(t,i,0|i[me],e,n,_r(),!1,!0)}function Rp(t){return t==null&&(t=void 0),t}function Ae(t,e,n,i,r){return De(t,n,i=Rp(i),r),i&&!pn(i)&&er(t.A),t}function ti(t,e,n,i){e:{var r=i=Rp(i);Fr(t);let s=t.A,a=0|s[me];if(r==null){let o=Jc(s);if(Qc(o,s,a,n)!==e)break e;o.set(n,0)}else a=Tp(s,a,n,e);Lt(s,a,e,r)}return i&&!pn(i)&&er(t.A),t}function fc(t,e,n){Fr(t);var i=t.A,r=0|i[me];if(n==null)return Lt(i,r,e),t;var s=n===Qi?7:0|n[me],a=s,o=Vi(s),l=o||Object.isFrozen(n),c=!0,u=!0;for(let d=0;d<n.length;d++){var h=n[d];o||(h=pn(h),c&&(c=!h),u&&(u=h))}return o||(s=c?13:5,s=u?-4097&s:4096|s),l&&s===a||(n=Dn(n),a=0,s=Wi(s,r)),s!==a&&Bt(n,s),r=Lt(i,r,e,n),2&s||!(4096&s||16&s)||er(i,r),t}function Wi(t,e){return-273&(2&e?2|t:-3&t)}function sa(t,e,n,i){var r=i;Fr(t),t=wp(t,i=t.A,0|i[me],n,e,2,!0),r=r??new n,t.push(r),e=n=t===Qi?7:0|t[me],(r=pn(r))?(n&=-9,t.length===1&&(n&=-4097)):n|=4096,n!==e&&Bt(t,n),r||er(i)}function Ln(t,e,n){return Nr(Tt(t,e,n))}function Pt(t,e){return Tt(t,e,void 0,Gn)??0}function dh(t,e,n){return rt(t,e,n=Ap(t,xu)===n?n:-1,void 0)}function pc(t,e){fa(t,3,e==null?e:go(e),!1)}function ni(t,e,n){if(n!=null){if(typeof n!="number"||!da(n))throw na("int32");n|=0}De(t,e,n)}function El(t,e,n){return De(t,e,n==null?n:lp(n))}function lo(t,e,n){return De(t,e,n==null?n:function(i){if(!Ds(i))throw na("uint64");switch(typeof i){case"string":var r=Ki(Number(i));return ei(r)&&r>=0?i=Ft(r):((r=i.indexOf("."))!==-1&&(i=i.substring(0,r)),i=Dr()?Ft(hc(64,BigInt(i))):Ft(up(i))),i;case"bigint":return Ft(hc(64,i));default:return ei(i)?i=Ft(hp(i)):((i=Ki(i))>=0&&ei(i)?i=String(i):(Ur(i),i=xs(Qe,ht)),i=Ft(i)),i}}(n))}function ye(t,e,n){De(t,e,n==null?n:ap(n))}function os(t,e,n){fa(t,e,n==null?n:ap(n),0)}function Mn(t,e,n){fa(t,e,xi(n),"")}function So(t,e,n){{Fr(t);let a=t.A,o=0|a[me];if(n==null)Lt(a,o,e);else{var i=t=n===Qi?7:0|n[me],r=Vi(t),s=r||Object.isFrozen(n);for(r||(t=0),s||(n=Dn(n),i=0,t=Wi(t,o),s=!1),t|=5,t|=(4&t?512&t?512:1024&t?1024:0:void 0)??1024,r=0;r<n.length;r++){let l=n[r],c=gp(l);Object.is(l,c)||(s&&(n=Dn(n),i=0,t=Wi(t,o),s=!1),n[r]=c)}t!==i&&(s&&(n=Dn(n),t=Wi(t,o)),Bt(n,t)),Lt(a,o,e,n)}}}function qo(t,e,n){Fr(t),vr(t,e,jt,2,!0).push(gp(n))}var Br=class{constructor(t,e,n){if(this.buffer=t,n&&!e)throw Error();this.g=e}};function Yo(t,e){if(typeof t=="string")return new Br(jf(t),e);if(Array.isArray(t))return new Br(new Uint8Array(t),e);if(t.constructor===Uint8Array)return new Br(t,!1);if(t.constructor===ArrayBuffer)return t=new Uint8Array(t),new Br(t,!1);if(t.constructor===Qn)return e=Gc(t)||new Uint8Array(0),new Br(e,!0,t);if(t instanceof Uint8Array)return t=t.constructor===Uint8Array?t:new Uint8Array(t.buffer,t.byteOffset,t.byteLength),new Br(t,!1);throw Error()}function tu(t,e){var n=0,i=0,r=0,s=t.h,a=t.g;do{var o=s[a++];n|=(127&o)<<r,r+=7}while(r<32&&128&o);if(r>32)for(i|=(127&o)>>4,r=3;r<32&&128&o;r+=7)i|=(127&(o=s[a++]))<<r;if(br(t,a),!(128&o))return e(n>>>0,i>>>0);throw Error()}function nu(t){for(var e=0,n=t.g,i=n+10,r=t.h;n<i;){let s=r[n++];if(e|=s,!(128&s))return br(t,n),!!(127&e)}throw Error()}function wi(t){var e=t.h,n=t.g,i=e[n++],r=127&i;if(128&i&&(r|=(127&(i=e[n++]))<<7,128&i&&(r|=(127&(i=e[n++]))<<14,128&i&&(r|=(127&(i=e[n++]))<<21,128&i&&(r|=(i=e[n++])<<28,128&i&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++])))))throw Error();return br(t,n),r}function ii(t){return wi(t)>>>0}function Mo(t){return tu(t,sp)}function mc(t){var e=t.h,n=t.g,i=e[n],r=e[n+1],s=e[n+2];return e=e[n+3],br(t,t.g+4),(i|r<<8|s<<16|e<<24)>>>0}function Eo(t){var e=mc(t);t=2*(e>>31)+1;var n=e>>>23&255;return e&=8388607,n==255?e?NaN:t*(1/0):n==0?1401298464324817e-60*t*e:t*Math.pow(2,n-150)*(e+8388608)}function P0(t){return wi(t)}function br(t,e){if(t.g=e,e>t.j)throw Error()}function Cp(t,e){if(e<0)throw Error();var n=t.g;if((e=n+e)>t.j)throw Error();return t.g=e,n}function Pp(t,e){if(e==0)return Pr();var n=Cp(t,e);return t.fa&&t.o?n=t.h.subarray(n,n+e):(t=t.h,n=n===(e=n+e)?new Uint8Array(0):d0?t.slice(n,e):new Uint8Array(t.subarray(n,e))),n.length==0?Pr():new Qn(n,ms)}var L0=class{constructor(t,e,n,i){this.h=null,this.o=!1,this.g=this.j=this.m=0,this.init(t,e,n,i)}init(t,e,n,{fa:i=!1,ma:r=!1}={}){this.fa=i,this.ma=r,t&&(t=Yo(t,this.ma),this.h=t.buffer,this.o=t.g,this.m=e||0,this.j=n!==void 0?this.m+n:this.h.length,this.g=this.m)}clear(){this.h=null,this.o=!1,this.g=this.j=this.m=0,this.fa=!1}},fh=[],Ss=0;function Lp(t,e,n,i){if(yo.length){let r=yo.pop();return r.v(i),r.g.init(t,e,n,i),r}return new I0(t,e,n,i)}function Ip(t){t.g.clear(),t.j=-1,t.h=-1,yo.length<100&&yo.push(t)}function Dp(t){var e=t.g;if(e.g==e.j)return!1;t.m=t.g.g;var n=ii(t.g);if(e=n>>>3,!((n&=7)>=0&&n<=5)||e<1)throw Error();return t.j=e,t.h=n,!0}function co(t){try{switch(t.h){case 0:t.h!=0?co(t):nu(t.g);break;case 1:var e=t.g;br(e,e.g+8);break;case 2:if(t.h!=2)co(t);else{var n=ii(t.g),i=t.g;br(i,i.g+n)}break;case 5:var r=t.g;br(r,r.g+4);break;case 3:Up();let s=t.j;try{for(;;){if(!Dp(t))throw Error();if(t.h==4){if(t.j!=s)throw Error();break}co(t)}}catch(a){throw a instanceof RangeError?new SyntaxError:a}finally{Ss>0&&Ss--}break;default:throw Error()}}catch(s){throw s instanceof RangeError?new SyntaxError:s}}function Up(){if(Ss>=100)throw new SyntaxError;Ss++}function pa(t,e,n){var i=t.g.j,r=ii(t.g),s=(r=t.g.g+r)-i;if(s<=0&&(t.g.j=r,n(e,t,void 0,void 0,void 0),s=r-t.g.g),s)throw Error();return t.g.g=r,t.g.j=i,e}function iu(t){var e=ii(t.g),n=Cp(t=t.g,e);if(t=t.h,$g){var i,r=t;(i=xl)||(i=xl=new TextDecoder("utf-8",{fatal:!0})),e=n+e,r=n===0&&e===r.length?r:r.subarray(n,e);try{var s=i.decode(r)}catch(o){if(wa===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),wa=!0}catch{wa=!1}}throw!wa&&(xl=void 0),o}}else{e=(s=n)+e,n=[];let o,l=null;for(;s<e;){var a=t[s++];a<128?n.push(a):a<224?s>=e?ar():(o=t[s++],a<194||(192&o)!=128?(s--,ar()):n.push((31&a)<<6|63&o)):a<240?s>=e-1?ar():(o=t[s++],(192&o)!=128||a===224&&o<160||a===237&&o>=160||(192&(i=t[s++]))!=128?(s--,ar()):n.push((15&a)<<12|(63&o)<<6|63&i)):a<=244?s>=e-2?ar():(o=t[s++],(192&o)!=128||o-144+(a<<28)>>30||(192&(i=t[s++]))!=128||(192&(r=t[s++]))!=128?(s--,ar()):(a=(7&a)<<18|(63&o)<<12|(63&i)<<6|63&r,a-=65536,n.push(55296+(a>>10&1023),56320+(1023&a)))):ar(),n.length>=8192&&(l=ju(l,n),n.length=0)}s=ju(l,n)}return s}function ru(t){var e=ii(t.g);return Pp(t.g,e)}function ma(t,e,n){var i=ii(t.g);for(i=t.g.g+i;t.g.g<i;)n.push(e(t.g))}var I0=class{constructor(t,e,n,i){if(fh.length){let r=fh.pop();r.init(t,e,n,i),t=r}else t=new L0(t,e,n,i);this.g=t,this.m=this.g.g,this.h=this.j=-1,this.v(i)}v({ra:t=!1}={}){this.ra=t}},yo=[];function D0(t){return new Ao(4294967295&t,Math.floor(t/4294967296))}function ph(t){return t?/^\d+$/.test(t)?(ha(t),new Ao(Qe,ht)):null:U0||(U0=new Ao(0,0))}var U0,Ao=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};function N0(t){return new To(4294967295&t,Math.floor(t/4294967296))}function Np(t){return t?/^-?\d+$/.test(t)?(ha(t),new To(Qe,ht)):null:F0||(F0=new To(0,0))}var F0,mh,gh,_h,yl,vh,Vs,Ra,To=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};function Fp(t,e,n){return typeof BigInt64Array<"u"?(Vs||(Vs=new BigInt64Array(1),Ra=new Uint32Array(Vs.buffer),Vs[0]=BigInt(1),vh=Ra[0]===1),Vs[0]=t,new e(Ra[t=vh?0:1],Ra[1-t])):(yl||(mh=BigInt(Number.MIN_SAFE_INTEGER),gh=BigInt(Number.MAX_SAFE_INTEGER),_h=BigInt(4294967295),yl=BigInt(32)),t>=mh&&t<=gh?n(Number(t)):(t=BigInt.asUintN(64,t),new e(Number(t&_h),Number(t>>yl))))}function yi(t,e,n){for(;n>0||e>127;)t.g.push(127&e|128),e=(e>>>7|n<<25)>>>0,n>>>=7;t.g.push(e)}function Fs(t,e){for(;e>127;)t.g.push(127&e|128),e>>>=7;t.g.push(e)}function ga(t,e){if(e>=0)Fs(t,e);else{for(let n=0;n<9;n++)t.g.push(127&e|128),e>>=7;t.g.push(1)}}function O0(t,e){ha(e),function(n){var i=ht>>31;n(Qe<<1^i,(ht<<1|Qe>>>31)^i)}((n,i)=>{yi(t,n>>>0,i>>>0)})}function aa(t,e){t.g.push(e>>>0&255),t.g.push(e>>>8&255),t.g.push(e>>>16&255),t.g.push(e>>>24&255)}var B0=class{constructor(){this.g=[]}length(){return this.g.length}end(){var t=this.g;return this.g=[],t}};function Ms(t,e){e.length!==0&&(t.j.push(e),t.h+=e.length)}function an(t,e,n){Fs(t.g,8*e+n)}function su(t,e){return an(t,e,2),e=t.g.end(),Ms(t,e),e.push(t.h),e}function au(t,e){var n=e.pop();for(n=t.h+t.g.length()-n;n>127;)e.push(127&n|128),n>>>=7,t.h++;e.push(n),t.h++}function Op(t,e,n){if(n!=null)switch(an(t,e,0),typeof n){case"number":t=t.g,Ur(n),yi(t,Qe,ht);break;case"bigint":n=Fp(n,To,N0),yi(t.g,n.h,n.g);break;default:n=Np(n),yi(t.g,n.h,n.g)}}function _a(t,e,n){an(t,e,2),Fs(t.g,n.length),Ms(t,t.g.end()),Ms(t,n)}function bo(t,e,n,i){n!=null&&(e=su(t,e),i(n,t),au(t,e))}var k0=class{constructor(){this.j=[],this.h=0,this.g=new B0}};function Bp(t){typeof t=="string"&&Np(t)}function Nn(){var t=class{constructor(){throw Error()}};return Object.setPrototypeOf(t,t.prototype),t}var ou=Nn(),kp=Nn(),lu=Nn(),Ko=Nn(),cu=Nn(),jo=Nn(),z0=Nn(),G0=Nn(),Zo=Nn(),H0=Nn(),Jo=Nn(),uu=Nn();function si(t,e,n){var i=t.A;Sn&&Sn in i&&(i=i[Sn])&&delete i[e.g],e.h?e.o(t,e.h,e.g,n,e.j):e.o(t,e.g,n,e.j)}var le=class{constructor(t,e){this.A=vp(t,e,void 0,2048)}toJSON(){return _p(this)}o(){var r;var t=R_,e=this.A,n=t.g,i=Sn;if(Ls&&i&&((r=e[i])==null?void 0:r[n])!=null&&gs(n0,3),e=t.g,nh&&Sn&&nh===void 0&&(i=(n=this.A)[Sn])&&(i=i.ka))try{i(n,e,b0)}catch(s){$f(s)}return t.h?t.m(this,t.h,t.g,t.j):t.m(this,t.g,t.defaultValue,t.j)}clone(){var t=this.A,e=0|t[me];return Kc(this,t,e)?qc(this,t,!0):new this.constructor(Us(t,e,!1))}};le.prototype[_s]=vs,le.prototype.toString=function(){return this.A.toString()};var Os=class{constructor(t,e,n){this.g=t,this.h=e,t=ou,this.j=!!t&&n===t||!1}};function Qo(t,e){return new Os(t,e,ou)}function zp(t,e,n,i,r){bo(t,n,Wp(e,i),r)}var Gp,Hp,V0=Qo(function(t,e,n,i,r){return t.h===2&&(pa(t,eu(e,i,n),r),!0)},zp),W0=Qo(function(t,e,n,i,r){return t.h===2&&(pa(t,eu(e,i,n),r),!0)},zp),el=Symbol(),tl=Symbol(),gc=Symbol(),xh=Symbol(),Sh=Symbol();function Or(t,e,n,i){var r=i[t];if(r)return r;(r={}).Ea=i,r.ca=function(h){switch(typeof h){case"boolean":return A0||(A0=[0,void 0,!0]);case"number":return h>0?void 0:h===0?T0||(T0=[0,void 0]):[-h,void 0];case"string":return[0,h];case"object":return h}}(i[0]);var s=i[1],a=1;s&&s.constructor===Object&&(r.ia=s,typeof(s=i[++a])=="function"&&(r.wa=!0,Gp??(Gp=s),Hp??(Hp=i[a+1]),s=i[a+=2]));for(var o={};s&&Array.isArray(s)&&s.length&&typeof s[0]=="number"&&s[0]>0;){for(var l=0;l<s.length;l++)o[s[l]]=s;s=i[++a]}for(l=1;s!==void 0;){let h;typeof s=="number"&&(l+=s,s=i[++a]);var c=void 0;if(s instanceof Os?h=s:(h=V0,a--),h==null?void 0:h.j){s=i[++a],c=i;var u=a;typeof s=="function"&&(s=s(),c[u]=s),c=s}for(u=l+1,typeof(s=i[++a])=="number"&&s<0&&(u-=s,s=i[++a]);l<u;l++){let d=o[l];c?n(r,l,h,c,d):e(r,l,h,d)}}return i[t]=r}function Vp(t){return Array.isArray(t)?t[0]instanceof Os?t:[W0,t]:[t,void 0]}function Wp(t,e){return t instanceof le?t.A:Array.isArray(t)?Tr(t,e):void 0}function hu(t,e,n,i){var r=n.g;t[e]=i?(s,a,o)=>r(s,a,o,i):r}function du(t,e,n,i,r){var s,a,o=n.g;t[e]=(l,c,u)=>o(l,c,u,a||(a=Or(tl,hu,du,i).ca),s||(s=fu(i)),r)}function fu(t){var e=t[gc];if(e!=null)return e;var n=Or(tl,hu,du,t);return e=n.wa?(i,r)=>Gp(i,r,n):(i,r)=>{e:{Up();try{for(;Dp(r)&&r.h!=4;){let d=r.j,m=n[d];if(m==null){let g=n.ia;if(g){let x=g[d];if(x){let p=$0(x);p!=null&&(m=n[d]=p)}}}if(m==null||!m(r,i,d)){var s=r;let g=s.m;if(co(s),s.ra)var a=void 0;else{let x=s.g.g-g;s.g.g=g,a=Pp(s.g,x)}s=void 0;var o=i,l=d,c=a;c&&((s=o[Sn]??(o[Sn]=new dc))[l]??(s[l]=[])).push(c)}}let h=Xo(i);h&&(h.ka=n.Ea[Sh]);var u=!0;break e}catch(h){throw h instanceof RangeError?new SyntaxError:h}finally{Ss>0&&Ss--}u=void 0}return u},t[gc]=e,t[Sh]=X0.bind(t),e}function X0(t,e,n,i){var r=this[tl],s=this[gc],a=Tr(void 0,r.ca),o=Xo(t);if(o){var l=!1,c=r.ia;if(c){if(r=(u,h,d)=>{if(d.length!==0)if(c[h])for(let m of d){u=Lp(m);try{l=!0,s(a,u)}finally{Ip(u)}}else i==null||i(t,h,d)},e==null)xo(o,r);else if(o!=null){let u=o[e];u&&r(o,e,u)}if(l){let u=0|t[me];if(2&u&&2048&u&&!(n!=null&&n.cb))throw Error();let h=Is(u),d=(m,g)=>{if(Ti(t,m,h)!=null){if((n==null?void 0:n.lb)===1)return;throw Error()}g!=null&&(u=Lt(t,u,m,g,h)),delete o[m]};e==null?tp(a,0|a[me],(m,g)=>{d(m,g)}):d(e,Ti(a,e,h))}}}}function $0(t){var e=(t=Vp(t))[0].g;if(t=t[1]){let n=fu(t),i=Or(tl,hu,du,t).ca;return(r,s,a)=>e(r,s,a,i,n)}return e}function nl(t,e,n){t[e]=n.h}function il(t,e,n,i){var r,s,a=n.h;t[e]=(o,l,c)=>a(o,l,c,s||(s=Or(el,nl,il,i).ca),r||(r=Xp(i)))}function Xp(t){var e=t[xh];if(!e){let n=Or(el,nl,il,t);e=(i,r)=>$p(i,r,n),t[xh]=e}return e}function $p(t,e,n){tp(t,0|t[me],(i,r)=>{if(r!=null){var s=function(a,o){var l=a[o];if(l)return l;if((l=a.ia)&&(l=l[o])){var c=(l=Vp(l))[0].h;if(l=l[1]){let u=Xp(l),h=Or(el,nl,il,l).ca;l=a.wa?Hp(h,u):(d,m,g)=>c(d,m,g,h,u)}else l=c;return a[o]=l}}(n,i);s?s(e,r,i):i<500||gs(lc,3)}}),(t=Xo(t))&&xo(t,(i,r,s)=>{for(Ms(e,e.g.end()),i=0;i<s.length;i++)Ms(e,Gc(s[i])||new Uint8Array(0))})}var q0=Ft(0);function Ci(t,e,n){if(Array.isArray(e)){var i=0|e[me];if(4&i)return e;for(var r=0,s=0;r<e.length;r++){let a=t(e[r]);a!=null&&(e[s++]=a)}return s<r&&(e.length=s),t=1|i,n&&(t=-1537&t|4),t!==i&&Bt(e,t),n&&2&t&&Object.freeze(e),e}}var qp=(t,e)=>{var n=new k0;$p(t.A,n,Or(el,nl,il,e)),Ms(n,n.g.end()),t=new Uint8Array(n.h);var i=(e=n.j).length,r=0;for(let s=0;s<i;s++){let a=e[s];t.set(a,r),r+=a.length}return n.j=[t],t};function Dt(t,e,n){return new Os(t,e,n)}function Pi(t,e,n){return new Os(t,e,n)}function Vt(t,e,n){Lt(t,0|t[me],e,n,Is(0|t[me]))}var Y0=Qo(function(t,e,n,i,r){if(t.h!==2)return!1;if(t=Dn(t=pa(t,Tr([void 0,void 0],i),r)),r=Is(i=0|e[me]),2&i)throw Error();var s=Ti(e,n,r);if(s instanceof Ai)2&s.M?((s=s.ea()).push(t),Lt(e,i,n,s,r)):s.gb(t);else if(Array.isArray(s)){var a=0|s[me];8192&a||Bt(s,a|=8192),2&a&&Lt(e,i,n,s=yp(s),r),s.push(t)}else Lt(e,i,n,ia([t]),r);return!0},function(t,e,n,i,r){if(e instanceof Ai)e.forEach((s,a)=>{bo(t,n,Tr([a,s],i),r)});else if(Array.isArray(e)){for(let s=0;s<e.length;s++){let a=e[s];Array.isArray(a)&&bo(t,n,Tr(a,i),r)}ia(e)}});function Yp(t,e,n){(e=Gn(e))!=null&&(an(t,n,5),t=t.g,Hc(e),aa(t,Qe))}function pu(t,e,n){(e=Xc(e))!=null&&(Bp(e),Op(t,n,e))}function Kp(t,e,n){(e=Nr(e))!=null&&e!=null&&(an(t,n,0),ga(t.g,e))}function jp(t,e,n){(e=e==null||typeof e=="boolean"?e:typeof e=="number"?!!e:void 0)!=null&&(an(t,n,0),t.g.g.push(e?1:0))}function Zp(t,e,n){(e=jt(e))!=null&&_a(t,n,Xf(e))}function Jp(t,e,n,i,r){bo(t,n,Wp(e,i),r)}function mu(t,e,n){(e=mp(e))!=null&&_a(t,n,Yo(e,!0).buffer)}function Qp(t,e,n){(e=op(e))!=null&&e!=null&&(an(t,n,0),Fs(t.g,e))}function em(t,e,n){(e=Nr(e))!=null&&(e=parseInt(e,10),an(t,n,0),ga(t.g,e))}function tm(t,e,n){return(t.h===5||t.h===2)&&(e=tr(e,0|e[me],n),t.h==2?ma(t,Eo,e):e.push(Eo(t.g)),!0)}function nm(t,e,n){return t.h===0&&(Vt(e,n,Mo(t.g)),!0)}function im(t,e,n){return(t.h===0||t.h===2)&&(e=tr(e,0|e[me],n),t.h==2?ma(t,wi,e):e.push(wi(t.g)),!0)}function rm(t,e,n){return t.h===2&&(Vt(e,n,(t=ru(t))===Pr()?void 0:t),!0)}var Mh=Dt(function(t,e,n){if(t.h!==1)return!1;var i=t.g;t=mc(i);var r=mc(i);i=2*(r>>31)+1;var s=r>>>20&2047;return t=4294967296*(1048575&r)+t,Vt(e,n,s==2047?t?NaN:i*(1/0):s==0?5e-324*i*t:i*Math.pow(2,s-1075)*(t+4503599627370496)),!0},function(t,e,n){(e=Gn(e))!=null&&(an(t,n,1),t=t.g,(n=ip||(ip=new DataView(new ArrayBuffer(8)))).setFloat64(0,+e,!0),Qe=n.getUint32(0,!0),ht=n.getUint32(4,!0),aa(t,Qe),aa(t,ht))},H0),bt=Dt(function(t,e,n){return t.h===5&&(Vt(e,n,Eo(t.g)),!0)},Yp,Zo),K0=Pi(tm,function(t,e,n){if((e=Ci(Gn,e,!0))!=null)for(let a=0;a<e.length;a++){var i=t,r=n,s=e[a];s!=null&&(an(i,r,5),i=i.g,Hc(s),aa(i,Qe))}},Zo),gu=Pi(tm,function(t,e,n){if((e=Ci(Gn,e,!0))!=null&&e.length){an(t,n,2),Fs(t.g,4*e.length);for(let i=0;i<e.length;i++)n=t.g,Hc(e[i]),aa(n,Qe)}},Zo),sm=Dt(function(t,e,n){return t.h===5&&(Vt(e,n,(t=Eo(t.g))===0?void 0:t),!0)},Yp,Zo),Ws=Dt(function(t,e,n){return nm(t,e,n)},pu,jo),_t=Dt(function(t,e,n){return nm(t,e,n)},pu,jo),j0=Pi(function(t,e,n){return t.h!==0&&t.h!==2?t=!1:(e=tr(e,0|e[me],n),t.h==2?ma(t,Mo,e):e.push(Mo(t.g)),t=!0),t},function(t,e,n){if((e=Ci(Xc,e,!1))!=null)for(let i=0;i<e.length;i++)Op(t,n,e[i])},jo),uo=Dt(function(t,e,n){return t.h!==0?e=!1:(Vt(e,n,(t=Mo(t.g))===q0?void 0:t),e=!0),e},pu,jo),wo=Dt(function(t,e,n){return t.h!==0?t=!1:(Vt(e,n,tu(t.g,f0)),t=!0),t},function(t,e,n){if(e=function(i){if(i==null)return i;var r=typeof i;if(r==="bigint")return String(hc(64,i));if(Ds(i)){if(r==="string")return r=Ki(Number(i)),ei(r)&&r>=0?i=String(r):((r=i.indexOf("."))!==-1&&(i=i.substring(0,r)),i=up(i)),i;if(r==="number")return hp(i)}}(e),e!=null&&(typeof e=="string"&&ph(e),e!=null))switch(an(t,n,0),typeof e){case"number":t=t.g,Ur(e),yi(t,Qe,ht);break;case"bigint":n=Fp(e,Ao,D0),yi(t.g,n.h,n.g);break;default:n=ph(e),yi(t.g,n.h,n.g)}},z0),je=Dt(function(t,e,n){return t.h===0&&(Vt(e,n,wi(t.g)),!0)},Kp,Ko),Eh=Pi(im,function(t,e,n){if((e=Ci(Nr,e,!0))!=null)for(let a=0;a<e.length;a++){var i=t,r=n,s=e[a];s!=null&&(an(i,r,0),ga(i.g,s))}},Ko),Bs=Pi(im,function(t,e,n){if((e=Ci(Nr,e,!0))!=null&&e.length){n=su(t,n);for(let i=0;i<e.length;i++)ga(t.g,e[i]);au(t,n)}},Ko),xr=Dt(function(t,e,n){return t.h===0&&(Vt(e,n,(t=wi(t.g))===0?void 0:t),!0)},Kp,Ko),Ue=Dt(function(t,e,n){return t.h===0&&(Vt(e,n,nu(t.g)),!0)},jp,kp),Xi=Dt(function(t,e,n){return t.h===0&&(Vt(e,n,(t=nu(t.g))===!1?void 0:t),!0)},jp,kp),Yt=Pi(function(t,e,n){return t.h===2&&(t=iu(t),tr(e,0|e[me],n).push(t),!0)},function(t,e,n){if((e=Ci(jt,e,!0))!=null)for(let a=0;a<e.length;a++){var i=t,r=n,s=e[a];s!=null&&_a(i,r,Xf(s))}},lu),gi=Dt(function(t,e,n){return t.h===2&&(Vt(e,n,(t=iu(t))===""?void 0:t),!0)},Zp,lu),ne=Dt(function(t,e,n){return t.h===2&&(Vt(e,n,iu(t)),!0)},Zp,lu),mt=function(t,e,n=ou){return new Os(t,e,n)}(function(t,e,n,i,r){return t.h===2&&(i=Tr(void 0,i),tr(e,0|e[me],n).push(i),pa(t,i,r),!0)},function(t,e,n,i,r){if(Array.isArray(e)){for(let s=0;s<e.length;s++)Jp(t,e[s],n,i,r);1&(t=0|e[me])||Bt(e,1|t)}}),qe=Qo(function(t,e,n,i,r,s){if(t.h!==2)return!1;var a=0|e[me];return Tp(e,a,s,n,Is(a)),pa(t,e=eu(e,i,n),r),!0},Jp),us=Dt(function(t,e,n){return t.h===2&&(Vt(e,n,ru(t)),!0)},mu,Jo),am=Pi(function(t,e,n){return t.h===2&&(t=ru(t),tr(e,0|e[me],n).push(t),!0)},function(t,e,n){if((e=Ci(mp,e,!1))!=null)for(let a=0;a<e.length;a++){var i=t,r=n,s=e[a];s!=null&&_a(i,r,Yo(s,!0).buffer)}},Jo),om=Dt(function(t,e,n){return t.h===0&&(Vt(e,n,ii(t.g)),!0)},Qp,cu),Z0=Pi(function(t,e,n){return(t.h===0||t.h===2)&&(e=tr(e,0|e[me],n),t.h==2?ma(t,ii,e):e.push(ii(t.g)),!0)},function(t,e,n){if((e=Ci(op,e,!0))!=null)for(let a=0;a<e.length;a++){var i=t,r=n,s=e[a];s!=null&&(an(i,r,0),Fs(i.g,s))}},cu),J0=Dt(function(t,e,n){return t.h===0&&(Vt(e,n,(t=ii(t.g))===0?void 0:t),!0)},Qp,cu),_e=Dt(function(t,e,n){return t.h===0&&(Vt(e,n,wi(t.g)),!0)},em,uu),ho=Dt(function(t,e,n){return t.h===0&&(Vt(e,n,(t=wi(t.g))===0?void 0:t),!0)},em,uu),Q0=Dt(function(t,e,n){return t.h!==0?t=!1:(Vt(e,n,function(i){return tu(i,(r,s)=>{var a=-(1&r);return sp(r=(r>>>1|s<<31)^a,s>>>1^a)})}(t.g)),t=!0),t},function(t,e,n){if((e=Xc(e))!=null&&(Bp(e),e!=null))switch(an(t,n,0),typeof e){case"number":t=t.g,e=(n=e)<0,uc(n=2*Math.abs(n)),n=Qe;let i=ht;e&&(n==0?i==0?i=n=4294967295:(i--,n=4294967295):n--),yi(t,Qe=n,ht=i);break;case"bigint":t=t.g,e=e<<BigInt(1)^e>>BigInt(63),Qe=Number(BigInt.asUintN(32,e)),ht=Number(BigInt.asUintN(32,e>>BigInt(32))),yi(t,Qe,ht);break;default:O0(t.g,e)}},G0);class e_{constructor(e,n){var i=yn;this.g=e,this.h=n,this.m=rt,this.o=Ae,this.defaultValue=void 0,this.j=i.jb!=null?np:void 0}register(){zo(this)}}function ai(t,e){return new e_(t,e)}function nr(t,e){return(n,i)=>{e:{let s={ma:!0};i&&Object.assign(s,i),n=Lp(n,void 0,void 0,s);try{let a=new t,o=a.A;fu(e)(o,n);var r=a;break e}catch(a){throw a instanceof RangeError?new SyntaxError:a}finally{Ip(n)}r=void 0}return r}}function _u(t){return e=>qp(e,t)}function va(t){return function(){return qp(this,t)}}var t_=[0,us,am,Ue,ne],n_=[0,gi,[0,ho,[0,uo,xr],ho,-1,[0,_e],ho,-1],Dt(rm,mu,Jo)],Al,yh=class extends le{constructor(t){super(t)}},Ah=[0,gi,Dt(rm,function(t,e,n){if(e!=null){if(e instanceof le){let i=e.mb;return void(i?(e=i(e),e!=null&&_a(t,n,Yo(e,!0).buffer)):gs(lc,3))}if(Array.isArray(e))return void gs(lc,3)}mu(t,e,n)},Jo)],i_=[0,1,[0,12,je,10,Ue],[0,7,[0,je,-1]]],Th=globalThis.trustedTypes,r_=class{constructor(t){this.g=t}toString(){return this.g+""}};function bh(t){var e;return Al===void 0&&(Al=function(){var n=null;if(!Th)return n;try{let i=r=>r;n=Th.createPolicy("goog#html",{createHTML:i,createScript:i,createScriptURL:i})}catch{}return n}()),t=(e=Al)?e.createScriptURL(t):t,new r_(t)}function Ca(t,...e){if(e.length===0)return bh(t[0]);var n=t[0];for(let i=0;i<e.length;i++)n+=encodeURIComponent(e[i])+t[i+1];return bh(n)}var lm=[0,je,_e,Ue,-1,Bs,_e,-1,Ue,-1],cm=[0,_e,-1,Ue],vu=class extends le{constructor(t){super(t)}},um=[0,Ue,ne,Ue,_e,-1,Pi(function(t,e,n){return(t.h===0||t.h===2)&&(e=tr(e,0|e[me],n),t.h==2?ma(t,P0,e):e.push(wi(t.g)),!0)},function(t,e,n){if((e=Ci(Nr,e,!0))!=null&&e.length){n=su(t,n);for(let i=0;i<e.length;i++)ga(t.g,e[i]);au(t,n)}},uu),ne,-1,[0,Ue,-1],_e,Ue,-1,cm],hm=[0,3,Ue,-1,2,[0,[2],je,qe,[0,om]],[0,_e,Ue,_e,Ue,_e,4,[0,Ue,ne,-1,Ue]],[0,[3,4],ne,-1,qe,[0,je],qe,[0,_e,-1]],[0]],dm=[0,ne,-2],wh=class extends le{constructor(t){super(t)}},fm=[0],s_=class extends le{constructor(t){super(t)}},pm=[0,je,Ue,1,Ue,-4],yn=class extends le{constructor(t){super(t,2)}},zt={};zt[336783863]=[0,ne,Ue,-1,je,[0,[1,2,3,4,5,6,7,8,9],qe,fm,qe,um,qe,dm,qe,pm,qe,lm,qe,[0,ne,-2],qe,[0,ne,_e],qe,hm,qe,cm],[0,ne],Ue,[0,[1,3],[2,4],qe,[0,Bs],-1,qe,[0,Yt],-1,mt,[0,ne,-1]],ne];var Rh=[0,uo,-1,Xi,-3,uo,Bs,gi,xr,uo,-1,Xi,xr,Xi,-2,gi];function xt(t,e){qo(t,3,e)}function Ze(t,e){qo(t,4,e)}var mn=class extends le{constructor(t){super(t,500)}v(t){return Ae(this,0,7,t)}},Js=[-1,{}],Ch=[0,ne,1,Js],Ph=[0,ne,Yt,Js];function Fn(t,e){sa(t,1,mn,e)}function Mt(t,e){qo(t,10,e)}function at(t,e){qo(t,15,e)}var An=class extends le{constructor(t){super(t,500)}v(t){return Ae(this,0,1001,t)}},mm=[-500,mt,[-500,gi,-1,Yt,-3,[-2,zt,Ue],mt,Ah,xr,-1,Ch,Ph,mt,[0,gi,Xi],gi,Rh,xr,Yt,987,Yt],4,mt,[-500,ne,-1,[-1,{}],998,ne],mt,[-500,ne,Yt,-1,[-2,{},Ue],997,Yt,-1],xr,mt,[-500,ne,Yt,Js,998,Yt],Yt,xr,Ch,Ph,mt,[0,gi,-1,Js],Yt,-2,Rh,gi,-1,Xi,[0,Xi,J0],978,Js,mt,Ah];An.prototype.g=va(mm);var a_=nr(An,mm),o_=class extends le{constructor(t){super(t)}},gm=class extends le{constructor(t){super(t)}g(){return bi(this,o_,1)}},_m=[0,mt,[0,je,bt,ne,-1]],rl=nr(gm,_m),l_=class extends le{constructor(t){super(t)}},c_=class extends le{constructor(t){super(t)}},Tl=class extends le{constructor(t){super(t)}j(){return rt(this,l_,2)}g(){return bi(this,c_,5)}},vm=nr(class extends le{constructor(t){super(t)}},[0,Yt,Bs,gu,[0,_e,[0,je,-3],[0,bt,-3],[0,je,-1,[0,mt,[0,je,-2]]],mt,[0,bt,-1,ne,bt]],ne,-1,_t,mt,[0,je,bt],Yt,_t]),xm=class extends le{constructor(t){super(t)}},hs=nr(class extends le{constructor(t){super(t)}},[0,mt,[0,bt,-4]]),Sm=class extends le{constructor(t){super(t)}},xa=nr(class extends le{constructor(t){super(t)}},[0,mt,[0,bt,-4]]),u_=class extends le{constructor(t){super(t)}},h_=[0,je,-1,gu,_e],Mm=class extends le{constructor(t){super(t)}};Mm.prototype.g=va([0,bt,-4,_t]);var d_=class extends le{constructor(t){super(t)}},f_=nr(class extends le{constructor(t){super(t)}},[0,mt,[0,1,je,ne,_m],_t]),Lh=class extends le{constructor(t){super(t)}},p_=class extends le{constructor(t){super(t)}g(){var t=Tt(this,1,void 0,Ep);return t??Pr()}},m_=class extends le{constructor(t){super(t)}},xu=[1,2],g_=nr(class extends le{constructor(t){super(t)}},[0,mt,[0,xu,qe,[0,gu],qe,[0,us],je,ne],_t]),Su=class extends le{constructor(t){super(t)}},Em=[0,ne,je,bt,Yt,-1],Ih=class extends le{constructor(t){super(t)}},__=[0,Ue,-1],Ro=class extends le{constructor(t){super(t)}g(){return Sp(this,vu,2,wr)}},wr=[1,2,3,4,5,6],Co=class extends le{constructor(t){super(t)}g(){return Tt(this,1,void 0,Ep)!=null}j(){return jt(Tt(this,2))!=null}},Et=class extends le{constructor(t){super(t)}},ym=[0,us,ne,[0,je,_t,-1],[0,wo,_t]],It=[0,ym,Ue,[0,wr,qe,pm,qe,um,qe,lm,qe,fm,qe,dm,qe,hm],_e],v_=_u(It),sl=class extends le{constructor(t){super(t)}},Mu=[0,It,bt,-1,je],x_=ai(502141897,sl);zt[502141897]=Mu;var S_=nr(class extends le{constructor(t){super(t)}},[0,[0,_e,-1,K0,Z0],h_]),Am=class extends le{constructor(t){super(t)}},Tm=class extends le{constructor(t){super(t)}},_c=[0,It,bt,[0,It],Ue],M_=ai(508968150,Tm);zt[508968150]=[0,It,Mu,_c,bt,[0,[0,ym]]],zt[508968149]=_c;var kr=class extends le{constructor(t){super(t)}j(){return rt(this,Su,2)}g(){De(this,2)}},bm=[0,It,Em];zt[478825465]=bm;var E_=class extends le{constructor(t){super(t)}},wm=class extends le{constructor(t){super(t)}},Eu=class extends le{constructor(t){super(t)}},yu=class extends le{constructor(t){super(t)}},Rm=class extends le{constructor(t){super(t)}},Dh=[0,It,[0,It],bm,-1],Cm=[0,It,bt,je],Au=[0,It,bt],Pm=[0,It,Cm,Au,bt],y_=ai(479097054,Rm);zt[479097054]=[0,It,Pm,Dh],zt[463370452]=Dh,zt[464864288]=Cm;var A_=ai(462713202,yu);zt[462713202]=Pm,zt[474472470]=Au;var T_=class extends le{constructor(t){super(t)}},Lm=class extends le{constructor(t){super(t)}},Im=class extends le{constructor(t){super(t)}},Dm=class extends le{constructor(t){super(t)}},Tu=[0,It,bt,-1,je],vc=[0,It,bt,Ue];Dm.prototype.g=va([0,It,Au,[0,It],Mu,_c,Tu,vc]);var Um=class extends le{constructor(t){super(t)}},b_=ai(456383383,Um);zt[456383383]=[0,It,Em];var Nm=class extends le{constructor(t){super(t)}},w_=ai(476348187,Nm);zt[476348187]=[0,It,__];var Fm=class extends le{constructor(t){super(t)}},Uh=class extends le{constructor(t){super(t)}},Om=[0,_e,-1],R_=ai(458105876,class extends le{constructor(t){super(t)}g(){var t=this.A,e=0|t[me],n=pn(this,e);return t=function(i,r,s,a){var o=Uh;!a&&Ns(i)&&(s=0|(r=i.A)[me]);var l=Ti(r,2);if(i=!1,l==null){if(a)return ch();l=[]}else if(l.constructor===Ai){if(!(2&l.M)||a)return l;l=l.ea()}else Array.isArray(l)?i=!!(2&l[me]):l=[];if(a){if(!l.length)return ch();i||(i=!0,ua(l))}else i&&(i=!1,ia(l),l=yp(l));return!i&&32&s&&ca(l,32),s=Lt(r,s,2,a=new Ai(l,o,g0,void 0)),i||er(r,s),a}(this,t,e,n),!n&&Uh&&(t.Fa=!0),t}});zt[458105876]=[0,Om,Y0,[!0,_t,[0,ne,-1,Yt]],[0,Bs,Ue,_e],Ue];var bu=class extends le{constructor(t){super(t)}},Bm=ai(458105758,bu);zt[458105758]=[0,It,ne,Om];var C_=class extends le{constructor(t){super(t)}},P_=class extends le{constructor(t){super(t)}},L_=class extends le{constructor(t){super(t)}},I_=_u([0,mt,[0,ho,mt,[0,sm,-1],Xi]]),bl=class extends le{constructor(t){super(t)}},Nh=[0,sm,-1,Xi],D_=class extends le{constructor(t){super(t)}},km=class extends le{constructor(t){super(t)}},xc=[1,2];km.prototype.g=va([0,xc,qe,Nh,qe,[0,mt,Nh]]);var zm=class extends le{constructor(t){super(t)}},U_=ai(443442058,zm);zt[443442058]=[0,It,ne,je,bt,Yt,-1,Ue,bt],zt[514774813]=Tu;var Gm=class extends le{constructor(t){super(t)}},N_=ai(516587230,Gm);function Sc(t,e){return e=e?e.clone():new Su,t.displayNamesLocale!==void 0?De(e,1,xi(t.displayNamesLocale)):t.displayNamesLocale===void 0&&De(e,1),t.maxResults!==void 0?ni(e,2,t.maxResults):"maxResults"in t&&De(e,2),t.scoreThreshold!==void 0?ye(e,3,t.scoreThreshold):"scoreThreshold"in t&&De(e,3),t.categoryAllowlist!==void 0?So(e,4,t.categoryAllowlist):"categoryAllowlist"in t&&De(e,4),t.categoryDenylist!==void 0?So(e,5,t.categoryDenylist):"categoryDenylist"in t&&De(e,5),e}function Hm(t){var e=Number(t);return Number.isSafeInteger(e)?e:String(t)}function wu(t,e=-1,n=""){return{categories:t.map(i=>({index:Ln(i,1)??0??-1,score:Pt(i,2)??0,categoryName:jt(Tt(i,3))??""??"",displayName:jt(Tt(i,4))??""??""})),headIndex:e,headName:n}}function F_(t){var e={classifications:bi(t,d_,1).map(n=>{var i;return wu(((i=rt(n,gm,4))==null?void 0:i.g())??[],Ln(n,2)??0,jt(Tt(n,3))??"")})};return function(n){return n==null?n:typeof n=="bigint"?(cc(n)?n=Number(n):(n=Ar(64,n),n=cc(n)?Number(n):String(n)),n):Ds(n)?typeof n=="number"?Wo(n):_o(n):void 0}(Tt(t,2,void 0,vo))!=null&&(e.timestampMs=Hm(Tt(t,2,void 0,vo)??xp)),e}function Vm(t){var a,o;var e=vr(t,3,Gn,_r()),n=vr(t,2,Nr,_r()),i=vr(t,1,jt,_r()),r=vr(t,9,jt,_r()),s={categories:[],keypoints:[]};for(let l=0;l<e.length;l++)s.categories.push({score:e[l],index:n[l]??-1,categoryName:i[l]??"",displayName:r[l]??""});if((e=(a=rt(t,Tl,4))==null?void 0:a.j())&&(s.boundingBox={originX:Ln(e,1,Di)??0,originY:Ln(e,2,Di)??0,width:Ln(e,3,Di)??0,height:Ln(e,4,Di)??0,angle:0}),(o=rt(t,Tl,4))==null?void 0:o.g().length)for(let l of rt(t,Tl,4).g())s.keypoints.push({x:Tt(l,1,Di,Gn)??0,y:Tt(l,2,Di,Gn)??0,score:Tt(l,4,Di,Gn)??0,label:jt(Tt(l,3,Di))??""});return s}function al(t){var e=[];for(let n of bi(t,Sm,1))e.push({x:Pt(n,1)??0,y:Pt(n,2)??0,z:Pt(n,3)??0,visibility:Pt(n,4)??0});return e}function Qs(t){var e=[];for(let n of bi(t,xm,1))e.push({x:Pt(n,1)??0,y:Pt(n,2)??0,z:Pt(n,3)??0,visibility:Pt(n,4)??0});return e}function Fh(t){return Array.from(t,e=>e>127?e-256:e)}function Oh(t,e){if(t.length!==e.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${t.length} vs. ${e.length}).`);var n=0,i=0,r=0;for(let s=0;s<t.length;s++)n+=t[s]*e[s],i+=t[s]*t[s],r+=e[s]*e[s];if(i<=0||r<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return n/Math.sqrt(i*r)}zt[516587230]=[0,It,Tu,vc,bt],zt[518928384]=vc;var Pa,O_=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function Wm(t){if(t)return!0;if(Pa===void 0)try{await WebAssembly.instantiate(O_),Pa=!0}catch{Pa=!1}return Pa}async function La(t,e,n){return{wasmLoaderPath:`${e}/${t}_${n=`wasm${n?"_module":""}${await Wm(n)?"":"_nosimd"}_internal`}.js`,wasmBinaryPath:`${e}/${t}_${n}.wasm`}}var ss=class{};function Bh(t){return De(new Mc,1,Ei(t))}ss.forVisionTasks=function(t,e=!1){return La("vision",t??Ca``,e)},ss.forTextTasks=function(t,e=!1){return La("text",t??Ca``,e)},ss.forGenAiTasks=function(t,e=!1){return La("genai",t??Ca``,e)},ss.forAudioTasks=function(t,e=!1){return La("audio",t??Ca``,e)},ss.isSimdSupported=function(t=!1){return Wm(t)};var Mc=class extends le{constructor(t){super(t)}},B_=class extends le{constructor(t){super(t)}},kh=[0,_e,2,wo,-2,_t,mt,[0,_e,_t]],k_=class extends le{constructor(t){super(t)}},z_=class extends le{constructor(t){super(t)}};function Ec(t,e){return De(t,1,Ei(e))}function yc(t,e){return De(t,2,Ei(e))}var Ac=class extends le{constructor(t){super(t)}},Po=[3,4,5,6,7],G_=class extends le{constructor(t){super(t)}},Xm=class extends le{constructor(t){super(t)}};Xm.prototype.g=va([0,[0,_e,ne,-3,_e],[0,Po,_e,-1,qe,[0,_e,ne,wo],qe,kh,qe,[0,1,kh],qe,[0,_e],qe,[0,_e,ne,wo]]]);var H_=class{constructor(){this.g=typeof AbortController<"u"}async send(t,e,n){var i=this.g?new AbortController:void 0,r=i&&t.la>0?setTimeout(()=>{i.abort()},t.la):void 0;try{let s=await fetch(t.url,{method:t.bb,headers:{...t.ab},...t.body&&{body:t.body},...t.withCredentials&&{credentials:"include"},signal:t.la&&i?i.signal:null});s.status===200?e==null||e(await s.text()):n==null||n(s.status)}catch(s){(s==null?void 0:s.name)==="AbortError"?n==null||n(408):n==null||n(400)}finally{clearTimeout(r)}}},V_=class extends le{constructor(t){super(t,37)}},zh=[-4,{},i_,_e,n_],Gh=[0,ne,_e,1,ne,-1,_e,1,_e,1,_t],Hh=[0,_e,ne,-2],Vh=[0,ne,_e],Wh=[0,ne,_e],Xh=[0,Ue,-3],$h=[0,_e,ne,-1,_t,je,-1,ne,-5,mt,[0,ne,-4],-1,Ue,[0,Ue,-3],_e],W_=class extends le{constructor(t){super(t,19)}},X_=_u([-19,{},[0,_e,1,[0,ne,-6,_t,je,ne,-1,_t],1,[0,ne,1,ne,-5],ne,-1,[0,_e,ne,-8],[0,ne,-3],[0,ne,_e,ne,-2],[0,ne,-1,_e,ne,-1,_e,ne,-1,[0,mt,[0,ne,-1],Ue,ne,-5],[0,_e,Ue,je,-2]],_t,[0,ne,-3,_t,je,ne,-1],[0,_e,ne,-1],[0,ne,-9],[0,ne,-6,_e,ne,1,ne,Ue,_e,-1,Ue,ne,-2,_e,ne,_e,ne,je,-1],1,[0,_e],1,[0,ne,-4],1,Gh,[0,[1,2,3,4,5,6],qe,Gh,qe,Vh,qe,Wh,qe,[0,_e],qe,$h,qe,Hh],Vh,Wh,$h,[0,[0,_e,ne,-1,_t,je,-1,ne,-4,mt,[0,ne,-4],-1,1,Xh],[0,_e,ne,-1,_t,je,-1,ne,-4,Xh]],Hh,[0,ne,[0,je,-3,_e],_e,-2,[0,je,-1],Ue],4,[0,ne,_e,ne,-1,_t,_e,ne,-1,_e,je,-1]],_e,mt,[-37,{},Ws,ne,mt,[0,ne,-1],us,1,us,[0,Yt,-1,Eh,j0,-1],ne,[0,je,ne,-1],Ue,je,_t,ne,-1,Q0,t_,Ws,us,_e,Eh,_t,-1,[0,_e,-1],ne,Ue,ne,Bs,ne,-1,Mh,1,Mh,zh,Ue,[0,_e,[0,bt,je,-2],[0,bt]],[0,_e,_t]],Ws,am,ne,-1,Ws,_e,-1,[0,Ue,-1,_e,Ue],[0,_t,-1,ne],[0,Ws,Ue,_t],_t,1,om,1,zh]),$_=class{constructor(t){this.h=[],this.m=new H_,this.j=t??"",this.g=setInterval(()=>{this.flush()},6e4)}close(){this.g!==void 0&&(clearInterval(this.g),this.g=void 0),this.flush()}flush(t,e){if(this.error)e==null||e("net-send-failed");else if(this.h.length===0)t==null||t();else{var n=this.h;this.h=[],n=function(i){var r=new W_;return fc(r=De(r,2,Ei(1786)),3,i)}(n),n=X_(n),this.m.send({url:"https://odml.pa.googleapis.com/v1/log",bb:"POST",la:1e4,body:n,hb:2,ab:{"Content-Type":"application/x-protobuf","x-goog-api-key":this.j},withCredentials:!1},()=>{t==null||t()},i=>{this.error=Error(`Logging failed with HTTP error: ${i}`),this.h=[],this.g!==void 0&&(clearInterval(this.g),this.g=void 0),e==null||e("net-send-failed",i)})}}};class qh{constructor(){this.aa=this.U=this.X=this.R=this.V=this.T=this.P=0}}function Tc(t,e){var n=new Xm;n=Ae(n,0,1,t.B),n=Ae(n,0,2,e),e=De(e=new V_,6,Go(n=n.g(),!1)),(t=t.l).error||t.h.push(e)}function Yh(t,e){var n={P:e.P-t.j.P,T:e.T-t.j.T,V:e.V-t.j.V,R:e.R-t.j.R,X:e.X-t.j.X,U:e.U,aa:e.aa},i=yc(Ec(new Ac,t.C),1);n=$m(t,n),Tc(t,i=ti(i,4,Po,n)),t.j=e}function $m(t,e){var n=new B_;return t=lo(t=El(t=De(n,1,Ei(t.D)),7,e.R),5,e.U),t=lo(t,6,e.aa),e.V>0&&lo(t,4,e.X/e.V),e.P!==0&&(n=El(n=Bh(3),2,e.P),sa(t,8,Mc,n)),e.T!==0&&(e=El(n=Bh(4),2,e.T),sa(t,8,Mc,e)),t}var q_=class{constructor(t,e,n){this.u=performance.now(),this.m=performance.now(),this.h=new Map,this.o=0,this.g=new qh,this.j=new qh,this.l=new $_(n),this.C=function(i){switch(i){case"AudioClassifier":return 4;case"AudioEmbedder":return 5;case"TextClassifier":return 6;case"TextEmbedder":return 7;case"GestureRecognizer":return 8;case"HandDetector":return 9;case"HandLandmarker":return 10;case"ImageClassifier":return 11;case"ImageEmbedder":return 12;case"ImageSegmenter":return 13;case"ObjectDetector":return 14;case"FaceDetector":return 15;case"FaceLandmarker":return 16;case"InteractiveSegmenter":case"InteractiveSegmenterLegacy":return 18;case"HolisticLandmarker":return 20;case"LlmInference":return 21;case"LanguageDetector":return 22;case"PoseLandmarker":return 23;default:return 0}}(t),this.D=function(i){switch(i){case"IMAGE":return 11;case"VIDEO":return 12;case"LIVE_STREAM":return 13;case"AUDIO_CLIPS":return 14;case"AUDIO_STREAM":return 15;default:return 10}}(e),t=new G_,typeof window>"u"?e=0:(e=navigator.userAgent,e=/Android/i.test(e)?1:/iPhone|iPad|iPod/i.test(e)?2:/Windows/i.test(e)?5:/Macintosh/i.test(e)?4:/Linux/i.test(e)?3:0),t=De(t,1,Ei(e)),t=De(t,2,xi("")),t=De(t,3,xi("")),t=De(t,4,xi("1.0.1")),t=De(t,5,xi("")),this.B=De(t,6,Ei(4))}ya(){var t=new z_;t=lo(t=De(t,1,Ei(this.D)),3,performance.now()-this.u),Tc(this,t=ti(yc(Ec(new Ac,this.C),0),3,Po,t)),this.m=performance.now()}za(t){var e=this.h.get(t);if(e!==void 0&&(this.h.delete(t),t=performance.now()-e,++this.g.V,this.g.X+=t,this.g.U=Math.max(this.g.U,t),this.o=Math.max(this.o,t),performance.now()>this.m+3e4)){for(let[n,i]of this.h.entries())t=n,i<e&&(this.g.R++,this.h.delete(t));e={...this.g,aa:performance.now()-this.m},this.g.U=0,this.m=performance.now(),Yh(this,e)}}xa(){var t={...this.g,R:this.g.R+this.h.size,U:this.o,aa:performance.now()-this.u};Yh(this,t);var e=new k_;e=Ae(e,0,2,t=$m(this,t)),Tc(this,e=ti(t=yc(Ec(new Ac,this.C),2),5,Po,e))}close(){var t=this.l;typeof t.close=="function"?t.close():t.flush()}};function Ru(){var t=navigator;return typeof OffscreenCanvas<"u"&&(!function(e=navigator){return(e=e.userAgent).includes("Safari")&&!e.includes("Chrome")}(t)||!!((t=t.userAgent.match(/Version\/([\d]+).*Safari/))&&t.length>=1&&Number(t[1])>=17))}async function Kh(t){if(typeof importScripts!="function"){let e=document.createElement("script");return e.src=t.toString(),e.crossOrigin="anonymous",new Promise((n,i)=>{e.addEventListener("load",()=>{n()},!1),e.addEventListener("error",r=>{i(r)},!1),document.body.appendChild(e)})}try{importScripts(t.toString())}catch(e){if(!(e instanceof TypeError))throw e;{let n=self.import;n?await n(t.toString()):await import(t.toString())}}}function Cu(t){return t.videoWidth!==void 0?[t.videoWidth,t.videoHeight]:t.naturalWidth!==void 0?[t.naturalWidth,t.naturalHeight]:t.displayWidth!==void 0?[t.displayWidth,t.displayHeight]:[t.width,t.height]}function Me(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),n(e=t.i.stringToNewUTF8(e)),t.i._free(e)}function qm(t,e,n){if(!t.i.canvas)throw Error("No OpenGL canvas configured.");if(n?t.i._bindTextureToStream(n):t.i._bindTextureToCanvas(),!(n=t.i.canvas.getContext("webgl2")||t.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,e),t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);var[i,r]=Cu(e);return!t.j||i===t.i.canvas.width&&r===t.i.canvas.height||(t.i.canvas.width=i,t.i.canvas.height=r),[i,r]}function jh(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");var i=new Uint32Array(e.length);for(let r=0;r<e.length;r++)i[r]=t.i.stringToNewUTF8(e[r]);e=t.i._malloc(4*i.length),t.i.HEAPU32.set(i,e>>2),n(e);for(let r of i)t.i._free(r);t.i._free(e)}function Yn(t,e,n){t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=n}function zi(t,e,n){var i=[];t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=(r,s,a)=>{s?(n(i,a),i=[]):i.push(r)}}var Ym=class{constructor(t,e){this.j=!0,this.i=t,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",e!==void 0?this.i.canvas=e:Ru()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(t){var e=await(await fetch(t)).arrayBuffer();t=!(t.endsWith(".pbtxt")||t.endsWith(".textproto")),this.setGraph(new Uint8Array(e),t)}setGraphFromString(t){this.setGraph(new TextEncoder().encode(t),!1)}setGraph(t,e){var n=t.length,i=this.i._malloc(n);this.i.HEAPU8.set(t,i),e?this.i._changeBinaryGraph(n,i):this.i._changeTextGraph(n,i),this.i._free(i)}configureAudio(t,e,n,i,r){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),Me(this,i||"input_audio",s=>{Me(this,r=r||"audio_header",a=>{this.i._configureAudio(s,a,t,e??0,n)})})}setAutoResizeCanvas(t){this.j=t}setAutoRenderToScreen(t){this.i._setAutoRenderToScreen(t)}setGpuBufferVerticalFlip(t){this.i.gpuOriginForWebTexturesIsBottomLeft=t}ja(t){Yn(this,"__graph_config__",e=>{t(e)}),Me(this,"__graph_config__",e=>{this.i._getGraphConfig(e,void 0)}),delete this.i.simpleListeners.__graph_config__}attachErrorListener(t){this.i.errorListener=t}attachEmptyPacketListener(t,e){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[t]=e}addAudioToStream(t,e,n){this.addAudioToStreamWithShape(t,0,0,e,n)}addAudioToStreamWithShape(t,e,n,i,r){var s=4*t.length;this.h!==s&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(s),this.h=s),this.i.HEAPF32.set(t,this.g/4),Me(this,i,a=>{this.i._addAudioToInputStream(this.g,e,n,a,r)})}addGpuBufferToStream(t,e,n){Me(this,e,i=>{var[r,s]=qm(this,t,i);this.i._addBoundTextureToStream(i,r,s,n)})}addBoolToStream(t,e,n){Me(this,e,i=>{this.i._addBoolToInputStream(t,i,n)})}addDoubleToStream(t,e,n){Me(this,e,i=>{this.i._addDoubleToInputStream(t,i,n)})}addFloatToStream(t,e,n){Me(this,e,i=>{this.i._addFloatToInputStream(t,i,n)})}addIntToStream(t,e,n){Me(this,e,i=>{this.i._addIntToInputStream(t,i,n)})}addUintToStream(t,e,n){Me(this,e,i=>{this.i._addUintToInputStream(t,i,n)})}addStringToStream(t,e,n){Me(this,e,i=>{Me(this,t,r=>{this.i._addStringToInputStream(r,i,n)})})}addStringRecordToStream(t,e,n){Me(this,e,i=>{jh(this,Object.keys(t),r=>{jh(this,Object.values(t),s=>{this.i._addFlatHashMapToInputStream(r,s,Object.keys(t).length,i,n)})})})}addProtoToStream(t,e,n,i){Me(this,n,r=>{Me(this,e,s=>{var a=this.i._malloc(t.length);this.i.HEAPU8.set(t,a),this.i._addProtoToInputStream(a,t.length,s,r,i),this.i._free(a)})})}addEmptyPacketToStream(t,e){Me(this,t,n=>{this.i._addEmptyPacketToInputStream(n,e)})}addBoolVectorToStream(t,e,n){Me(this,e,i=>{var r=this.i._allocateBoolVector(t.length);if(!r)throw Error("Unable to allocate new bool vector on heap.");for(let s of t)this.i._addBoolVectorEntry(r,s);this.i._addBoolVectorToInputStream(r,i,n)})}addDoubleVectorToStream(t,e,n){Me(this,e,i=>{var r=this.i._allocateDoubleVector(t.length);if(!r)throw Error("Unable to allocate new double vector on heap.");for(let s of t)this.i._addDoubleVectorEntry(r,s);this.i._addDoubleVectorToInputStream(r,i,n)})}addFloatVectorToStream(t,e,n){Me(this,e,i=>{var r=this.i._allocateFloatVector(t.length);if(!r)throw Error("Unable to allocate new float vector on heap.");for(let s of t)this.i._addFloatVectorEntry(r,s);this.i._addFloatVectorToInputStream(r,i,n)})}addIntVectorToStream(t,e,n){Me(this,e,i=>{var r=this.i._allocateIntVector(t.length);if(!r)throw Error("Unable to allocate new int vector on heap.");for(let s of t)this.i._addIntVectorEntry(r,s);this.i._addIntVectorToInputStream(r,i,n)})}addUintVectorToStream(t,e,n){Me(this,e,i=>{var r=this.i._allocateUintVector(t.length);if(!r)throw Error("Unable to allocate new unsigned int vector on heap.");for(let s of t)this.i._addUintVectorEntry(r,s);this.i._addUintVectorToInputStream(r,i,n)})}addStringVectorToStream(t,e,n){Me(this,e,i=>{var r=this.i._allocateStringVector(t.length);if(!r)throw Error("Unable to allocate new string vector on heap.");for(let s of t)Me(this,s,a=>{this.i._addStringVectorEntry(r,a)});this.i._addStringVectorToInputStream(r,i,n)})}addBoolToInputSidePacket(t,e){Me(this,e,n=>{this.i._addBoolToInputSidePacket(t,n)})}addDoubleToInputSidePacket(t,e){Me(this,e,n=>{this.i._addDoubleToInputSidePacket(t,n)})}addFloatToInputSidePacket(t,e){Me(this,e,n=>{this.i._addFloatToInputSidePacket(t,n)})}addIntToInputSidePacket(t,e){Me(this,e,n=>{this.i._addIntToInputSidePacket(t,n)})}addUintToInputSidePacket(t,e){Me(this,e,n=>{this.i._addUintToInputSidePacket(t,n)})}addStringToInputSidePacket(t,e){Me(this,e,n=>{Me(this,t,i=>{this.i._addStringToInputSidePacket(i,n)})})}addProtoToInputSidePacket(t,e,n){Me(this,n,i=>{Me(this,e,r=>{var s=this.i._malloc(t.length);this.i.HEAPU8.set(t,s),this.i._addProtoToInputSidePacket(s,t.length,r,i),this.i._free(s)})})}addBoolVectorToInputSidePacket(t,e){Me(this,e,n=>{var i=this.i._allocateBoolVector(t.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(let r of t)this.i._addBoolVectorEntry(i,r);this.i._addBoolVectorToInputSidePacket(i,n)})}addDoubleVectorToInputSidePacket(t,e){Me(this,e,n=>{var i=this.i._allocateDoubleVector(t.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(let r of t)this.i._addDoubleVectorEntry(i,r);this.i._addDoubleVectorToInputSidePacket(i,n)})}addFloatVectorToInputSidePacket(t,e){Me(this,e,n=>{var i=this.i._allocateFloatVector(t.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(let r of t)this.i._addFloatVectorEntry(i,r);this.i._addFloatVectorToInputSidePacket(i,n)})}addIntVectorToInputSidePacket(t,e){Me(this,e,n=>{var i=this.i._allocateIntVector(t.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(let r of t)this.i._addIntVectorEntry(i,r);this.i._addIntVectorToInputSidePacket(i,n)})}addUintVectorToInputSidePacket(t,e){Me(this,e,n=>{var i=this.i._allocateUintVector(t.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(let r of t)this.i._addUintVectorEntry(i,r);this.i._addUintVectorToInputSidePacket(i,n)})}addStringVectorToInputSidePacket(t,e){Me(this,e,n=>{var i=this.i._allocateStringVector(t.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(let r of t)Me(this,r,s=>{this.i._addStringVectorEntry(i,s)});this.i._addStringVectorToInputSidePacket(i,n)})}attachBoolListener(t,e){Yn(this,t,e),Me(this,t,n=>{this.i._attachBoolListener(n)})}attachBoolVectorListener(t,e){zi(this,t,e),Me(this,t,n=>{this.i._attachBoolVectorListener(n)})}attachIntListener(t,e){Yn(this,t,e),Me(this,t,n=>{this.i._attachIntListener(n)})}attachIntVectorListener(t,e){zi(this,t,e),Me(this,t,n=>{this.i._attachIntVectorListener(n)})}attachUintListener(t,e){Yn(this,t,e),Me(this,t,n=>{this.i._attachUintListener(n)})}attachUintVectorListener(t,e){zi(this,t,e),Me(this,t,n=>{this.i._attachUintVectorListener(n)})}attachDoubleListener(t,e){Yn(this,t,e),Me(this,t,n=>{this.i._attachDoubleListener(n)})}attachDoubleVectorListener(t,e){zi(this,t,e),Me(this,t,n=>{this.i._attachDoubleVectorListener(n)})}attachFloatListener(t,e){Yn(this,t,e),Me(this,t,n=>{this.i._attachFloatListener(n)})}attachFloatVectorListener(t,e){zi(this,t,e),Me(this,t,n=>{this.i._attachFloatVectorListener(n)})}attachStringListener(t,e){Yn(this,t,e),Me(this,t,n=>{this.i._attachStringListener(n)})}attachStringVectorListener(t,e){zi(this,t,e),Me(this,t,n=>{this.i._attachStringVectorListener(n)})}attachProtoListener(t,e,n){Yn(this,t,e),Me(this,t,i=>{this.i._attachProtoListener(i,n||!1)})}attachProtoVectorListener(t,e,n){zi(this,t,e),Me(this,t,i=>{this.i._attachProtoVectorListener(i,n||!1)})}attachAudioListener(t,e,n){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),Yn(this,t,(i,r)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),e(i,r)}),Me(this,t,i=>{this.i._attachAudioListener(i,n||!1)})}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}};function Km(t){return class extends t{get pa(){return this.i}Sa(){if(typeof this.pa._mediapipeLoggerGetEncodedApiKey=="function"){let e=this.pa._mediapipeLoggerGetEncodedApiKey();return this.pa._decodeBase64(e)}}}}function jm(t){return class extends t{Za(){this.i._registerModelResourcesGraphService()}}}var Y_=Km(jm(Ym)),K_=class extends Y_{};async function j_(t,e,n,i){return t=await(async(r,s,a,o,l)=>{if(s&&await Kh(s),!self.ModuleFactory||a&&(await Kh(a),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&l&&((s=self.Module).locateFile=l.locateFile,l.mainScriptUrlOrBlob&&(s.mainScriptUrlOrBlob=l.mainScriptUrlOrBlob)),l=await self.ModuleFactory(self.Module||l),self.ModuleFactory=self.Module=void 0,new r(l,o)})(t,n.wasmLoaderPath,n.assetLoaderPath,e,{locateFile:r=>r.endsWith(".wasm")?n.wasmBinaryPath.toString():n.assetBinaryPath&&r.endsWith(".data")?n.assetBinaryPath.toString():r}),function(r,s){s=s.runningMode??"";var a=r.g.Sa();r.m=new q_(r.C(),s,a)}(t,i),await t.v(i),t}async function fo(t,e,n,i){return j_(t,e,n,i)}function wl(t,e){var n=rt(t.baseOptions,Co,1)||new Co;typeof e=="string"?(De(n,2,xi(e)),De(n,1)):e instanceof Uint8Array&&(De(n,1,Go(e,!1)),De(n,2)),Ae(t.baseOptions,0,1,n)}function Zh(t){try{let e=t.K.length;if(e===1)throw Error(t.K[0].message);if(e>1)throw Error("Encountered multiple errors: "+t.K.map(n=>n.message).join(", "))}finally{t.K=[]}}function de(t,e){t.I=Math.max(t.I,e)}function ol(t,e){t.D=new mn,Mn(t.D,2,"PassThroughCalculator"),xt(t.D,"free_memory"),Ze(t.D,"free_memory_unused_out"),Mt(e,"free_memory"),Fn(e,t.D)}function Es(t,e){xt(t.D,e),Ze(t.D,e+"_unused_out")}function ll(t){t.g.addBoolToStream(!0,"free_memory",t.I)}var Lo=class{constructor(t){this.g=t,this.K=[],this.I=0,this.g.setAutoRenderToScreen(!1)}j(t,e=!0){var n,i,r,s,a,o;if(e){let l=t.baseOptions||{};if((n=t.baseOptions)!=null&&n.modelAssetBuffer&&((i=t.baseOptions)!=null&&i.modelAssetPath))throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!((r=rt(this.baseOptions,Co,1))!=null&&r.g()||(s=rt(this.baseOptions,Co,1))!=null&&s.j()||(a=t.baseOptions)!=null&&a.modelAssetBuffer||(o=t.baseOptions)!=null&&o.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if(function(c,u){var h=rt(c.baseOptions,Ro,3);if(!h){var d=h=new Ro,m=new wh;ti(d,4,wr,m)}"delegate"in u&&(u.delegate==="GPU"?(u=h,d=new vu,ti(u,2,wr,d)):(u=h,d=new wh,ti(u,4,wr,d))),Ae(c.baseOptions,0,3,h)}(this,l),l.modelAssetPath)return fetch(l.modelAssetPath.toString()).then(c=>{if(c.ok)return c.arrayBuffer();throw Error(`Failed to fetch model: ${l.modelAssetPath} (${c.status})`)}).then(c=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(c),!0,!1,!1),wl(this,"/model.dat"),this.o(),this.L()});if(l.modelAssetBuffer instanceof Uint8Array)wl(this,l.modelAssetBuffer);else if(l.modelAssetBuffer)return async function(c){for(var u=[],h=0;;){let{done:d,value:m}=await c.read();if(d)break;u.push(m),h+=m.length}if(u.length===0)return new Uint8Array(0);if(u.length===1)return u[0];c=new Uint8Array(h),h=0;for(let d of u)c.set(d,h),h+=d.length;return c}(l.modelAssetBuffer).then(c=>{wl(this,c),this.o(),this.L()})}return this.o(),this.L(),Promise.resolve()}L(){}ja(){var t;if(this.g.ja(e=>{t=a_(e)}),!t)throw Error("Failed to retrieve CalculatorGraphConfig");return t}setGraph(t,e){var n;this.g.attachErrorListener((i,r)=>{this.K.push(Error(r))}),this.g.Za(),this.g.setGraph(t,e),(n=this.m)==null||n.ya(),this.D=void 0,Zh(this)}finishProcessing(t){this.g.finishProcessing(),Zh(this),this.m&&t!==void 0&&this.m.za(t)}close(){var t,e;this.D=void 0,(t=this.m)==null||t.xa(),(e=this.m)==null||e.close(),this.g.closeGraph()}};function $i(t,e){if(!t)throw Error(`Unable to obtain required WebGL resource: ${e}`);return t}Lo.prototype.close=Lo.prototype.close;class Z_{constructor(e,n,i,r){this.g=e,this.h=n,this.m=i,this.j=r}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.j)}}function Jh(t,e,n){var i=t.g;if(n=$i(i.createShader(n),"Failed to create WebGL shader"),i.shaderSource(n,e),i.compileShader(n),!i.getShaderParameter(n,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(n)}`);return i.attachShader(t.h,n),n}function Qh(t,e){var n=t.g,i=$i(n.createVertexArray(),"Failed to create vertex array");n.bindVertexArray(i);var r=$i(n.createBuffer(),"Failed to create buffer");n.bindBuffer(n.ARRAY_BUFFER,r),n.enableVertexAttribArray(t.F),n.vertexAttribPointer(t.F,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);var s=$i(n.createBuffer(),"Failed to create buffer");return n.bindBuffer(n.ARRAY_BUFFER,s),n.enableVertexAttribArray(t.K),n.vertexAttribPointer(t.K,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(e?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new Z_(n,i,r,s)}function Pu(t,e){if(t.g){if(e!==t.g)throw Error("Cannot change GL context once initialized")}else t.g=e}function J_(t,e,n,i){return Pu(t,e),t.h||(t.m(),t.I()),n?(t.l||(t.l=Qh(t,!0)),n=t.l):(t.D||(t.D=Qh(t,!1)),n=t.D),e.useProgram(t.h),n.bind(),t.j(),t=i(),n.g.bindVertexArray(null),t}function Zm(t,e,n){return Pu(t,e),t=$i(e.createTexture(),"Failed to create texture"),e.bindTexture(e.TEXTURE_2D,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,n??e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,n??e.LINEAR),e.bindTexture(e.TEXTURE_2D,null),t}function Jm(t,e,n){Pu(t,e),t.C||(t.C=$i(e.createFramebuffer(),"Failed to create framebuffe.")),e.bindFramebuffer(e.FRAMEBUFFER,t.C),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0)}function Q_(t){var e;(e=t.g)==null||e.bindFramebuffer(t.g.FRAMEBUFFER,null)}var Lu=class{B(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){var t=this.g;if(this.h=$i(t.createProgram(),"Failed to create WebGL program"),this.da=Jh(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,t.VERTEX_SHADER),this.Z=Jh(this,this.B(),t.FRAGMENT_SHADER),t.linkProgram(this.h),!t.getProgramParameter(this.h,t.LINK_STATUS))throw Error(`Error during program linking: ${t.getProgramInfoLog(this.h)}`);this.F=t.getAttribLocation(this.h,"aVertex"),this.K=t.getAttribLocation(this.h,"aTex")}I(){}j(){}close(){if(this.h){let t=this.g;t.deleteProgram(this.h),t.deleteShader(this.da),t.deleteShader(this.Z)}this.C&&this.g.deleteFramebuffer(this.C),this.D&&this.D.close(),this.l&&this.l.close()}};function _i(t,e){switch(e){case 0:return t.g.find(n=>n instanceof Uint8Array);case 1:return t.g.find(n=>n instanceof Float32Array);case 2:return t.g.find(n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture);default:throw Error(`Type is not supported: ${e}`)}}function bc(t){var e=_i(t,1);if(!e){if(e=_i(t,0))e=new Float32Array(e).map(i=>i/255);else{e=new Float32Array(t.width*t.height);let i=ys(t);var n=Iu(t);if(Jm(n,i,Qm(t)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){n=new Float32Array(t.width*t.height*4),i.readPixels(0,0,t.width,t.height,i.RGBA,i.FLOAT,n);for(let r=0,s=0;r<e.length;++r,s+=4)e[r]=n[s]}else i.readPixels(0,0,t.width,t.height,i.RED,i.FLOAT,e)}t.g.push(e)}return e}function Qm(t){var e=_i(t,2);if(!e){let n=ys(t);e=tg(t);let i=bc(t),r=eg(t);n.texImage2D(n.TEXTURE_2D,0,r,t.width,t.height,0,n.RED,n.FLOAT,i),wc(t)}return e}function ys(t){if(!t.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return t.h||(t.h=$i(t.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),t.h}function eg(t){if(t=ys(t),!Ia)if(t.getExtension("EXT_color_buffer_float")&&t.getExtension("OES_texture_float_linear")&&t.getExtension("EXT_float_blend"))Ia=t.R32F;else{if(!t.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");Ia=t.R16F}return Ia}function Iu(t){return t.j||(t.j=new Lu),t.j}function tg(t){var e=ys(t);e.viewport(0,0,t.width,t.height),e.activeTexture(e.TEXTURE0);var n=_i(t,2);return n||(n=Zm(Iu(t),e,t.m?e.LINEAR:e.NEAREST),t.g.push(n),t.o=!0),e.bindTexture(e.TEXTURE_2D,n),n}function wc(t){t.h.bindTexture(t.h.TEXTURE_2D,null)}var Ia,kt=class{constructor(t,e,n,i,r,s,a){this.g=t,this.m=e,this.o=n,this.canvas=i,this.j=r,this.width=s,this.height=a,this.o&&--ed===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Ua(){return!!_i(this,0)}ua(){return!!_i(this,1)}W(){return!!_i(this,2)}ta(){return(e=_i(t=this,0))||(e=bc(t),e=new Uint8Array(e.map(n=>Math.round(255*n))),t.g.push(e)),e;var t,e}sa(){return bc(this)}S(){return Qm(this)}clone(){var t=[];for(let e of this.g){let n;if(e instanceof Uint8Array)n=new Uint8Array(e);else if(e instanceof Float32Array)n=new Float32Array(e);else{if(!(e instanceof WebGLTexture))throw Error(`Type is not supported: ${e}`);{let i=ys(this),r=Iu(this);i.activeTexture(i.TEXTURE1),n=Zm(r,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,n);let s=eg(this);i.texImage2D(i.TEXTURE_2D,0,s,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),Jm(r,i,n),J_(r,i,!1,()=>{tg(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),wc(this)}),Q_(r),wc(this)}}t.push(n)}return new kt(t,this.m,this.W(),this.canvas,this.j,this.width,this.height)}close(){this.o&&ys(this).deleteTexture(_i(this,2)),ed=-1}};kt.prototype.close=kt.prototype.close,kt.prototype.clone=kt.prototype.clone,kt.prototype.getAsWebGLTexture=kt.prototype.S,kt.prototype.getAsFloat32Array=kt.prototype.sa,kt.prototype.getAsUint8Array=kt.prototype.ta,kt.prototype.hasWebGLTexture=kt.prototype.W,kt.prototype.hasFloat32Array=kt.prototype.ua,kt.prototype.hasUint8Array=kt.prototype.Ua;var ed=250;function Hn(...t){return t.map(([e,n])=>({start:e,end:n}))}var td,e1=jm((td=Km(Ym),class extends td{get oa(){return this.i}Da(t,e,n){Me(this,e,i=>{var[r,s]=qm(this,t,i);this.oa._addBoundTextureAsImageToStream(i,r,s,n)})}ga(t,e){Yn(this,t,e),Me(this,t,n=>{this.oa._attachImageListener(n)})}ha(t,e){zi(this,t,e),Me(this,t,n=>{this.oa._attachImageVectorListener(n)})}})),Vn=class extends e1{};async function tt(t,e,n){return fo(t,n.canvas??(Ru()?void 0:document.createElement("canvas")),e,n)}function ng(t,e,n,i){var a;if(t.m&&i!==void 0)if((a=rt(t.baseOptions,Ro,3))!=null&&a.g()){var r=t.m;++r.g.T,r.h.set(i,performance.now())}else++(r=t.m).g.P,r.h.set(i,performance.now());if(t.qa){if(r=new Mm,n==null?void 0:n.regionOfInterest){if(!t.Ca)throw Error("This task doesn't support region-of-interest.");var s=n.regionOfInterest;if(s.left>=s.right||s.top>=s.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(s.left<0||s.top<0||s.right>1||s.bottom>1)throw Error("Expected RectF values to be in [0,1].");ye(r,1,(s.left+s.right)/2),ye(r,2,(s.top+s.bottom)/2),ye(r,4,s.right-s.left),ye(r,3,s.bottom-s.top)}else ye(r,1,.5),ye(r,2,.5),ye(r,4,1),ye(r,3,1);if(n!=null&&n.rotationDegrees){if((n==null?void 0:n.rotationDegrees)%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(ye(r,5,-Math.PI*n.rotationDegrees/180),(n==null?void 0:n.rotationDegrees)%180!=0){let[o,l]=Cu(e);n=Pt(r,3)*l/o,s=Pt(r,4)*o/l,ye(r,4,n),ye(r,3,s)}}t.g.addProtoToStream(r.g(),"mediapipe.NormalizedRect",t.qa,i)}t.g.Da(e,t.Ba,i??performance.now()),t.finishProcessing(i)}function Wn(t,e,n){if(t.J)throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");ng(t,e,n,t.I+1)}function oi(t,e,n,i){if(!t.J)throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");ng(t,e,n,i)}function As(t,e,n,i){var r=e.data,s=e.width,a=s*(e=e.height);if((r instanceof Uint8Array||r instanceof Float32Array)&&r.length!==a)throw Error("Unsupported channel count: "+r.length/a);return t=new kt([r],n,!1,t.g.i.canvas,t.da,s,e),i?t.clone():t}var En=class extends Lo{constructor(t,e,n,i){super(t),this.g=t,this.Ba=e,this.qa=n,this.Ca=i,this.da=new Lu,this.J=!1}j(t,e=!0){if("runningMode"in t){var n=this.J=!!t.runningMode&&t.runningMode!=="IMAGE";De(this.baseOptions,2,n==null?n:go(n))}if(t.canvas!==void 0&&this.g.i.canvas!==t.canvas)throw Error("You must create a new task to reset the canvas.");return super.j(t,e)}close(){this.da.close(),super.close()}};En.prototype.close=En.prototype.close;var bn=class extends En{constructor(t,e){super(new Vn(t,e),"image_in","norm_rect_in",!1),this.l={detections:[]},Ae(t=this.h=new sl,0,1,e=new Et),ye(this.h,2,.5),ye(this.h,3,.3)}C(){return"FaceDetector"}get baseOptions(){return rt(this.h,Et,1)}set baseOptions(t){Ae(this.h,0,1,t)}v(t){return"minDetectionConfidence"in t&&ye(this.h,2,t.minDetectionConfidence??.5),"minSuppressionThreshold"in t&&ye(this.h,3,t.minSuppressionThreshold??.3),this.j(t)}G(t,e){return this.l={detections:[]},Wn(this,t,e),this.l}H(t,e,n){return this.l={detections:[]},oi(this,t,n,e),this.l}o(){var t=new An;Mt(t,"image_in"),Mt(t,"norm_rect_in"),at(t,"detections");var e=new yn;si(e,x_,this.h);var n=new mn;Mn(n,2,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),xt(n,"IMAGE:image_in"),xt(n,"NORM_RECT:norm_rect_in"),Ze(n,"DETECTIONS:detections"),n.v(e),Fn(t,n),this.g.attachProtoVectorListener("detections",(i,r)=>{for(let s of i)i=vm(s),this.l.detections.push(Vm(i));de(this,r)}),this.g.attachEmptyPacketListener("detections",i=>{de(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};bn.prototype.detectForVideo=bn.prototype.H,bn.prototype.detect=bn.prototype.G,bn.prototype.setOptions=bn.prototype.v,bn.createFromModelPath=async function(t,e){return tt(bn,t,{baseOptions:{modelAssetPath:e}})},bn.createFromModelBuffer=function(t,e){return tt(bn,t,{baseOptions:{modelAssetBuffer:e}})},bn.createFromOptions=function(t,e){return tt(bn,t,e)};var Du=Hn([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),Uu=Hn([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),Nu=Hn([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),ig=Hn([474,475],[475,476],[476,477],[477,474]),Fu=Hn([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),Ou=Hn([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),rg=Hn([469,470],[470,471],[471,472],[472,469]),Bu=Hn([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),sg=[...Du,...Uu,...Nu,...Fu,...Ou,...Bu],ag=Hn([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function nd(t){t.l={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var it=class extends En{constructor(t,e){super(new Vn(t,e),"image_in","norm_rect",!1),this.l={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,Ae(t=this.h=new Tm,0,1,e=new Et),this.B=new Am,Ae(this.h,0,3,this.B),this.u=new sl,Ae(this.h,0,2,this.u),ni(this.u,4,1),ye(this.u,2,.5),ye(this.B,2,.5),ye(this.h,4,.5)}C(){return"FaceLandmarker"}get baseOptions(){return rt(this.h,Et,1)}set baseOptions(t){Ae(this.h,0,1,t)}v(t){return"numFaces"in t&&ni(this.u,4,t.numFaces??1),"minFaceDetectionConfidence"in t&&ye(this.u,2,t.minFaceDetectionConfidence??.5),"minTrackingConfidence"in t&&ye(this.h,4,t.minTrackingConfidence??.5),"minFacePresenceConfidence"in t&&ye(this.B,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in t&&(this.outputFacialTransformationMatrixes=!!t.outputFacialTransformationMatrixes),this.j(t)}G(t,e){return nd(this),Wn(this,t,e),this.l}H(t,e,n){return nd(this),oi(this,t,n,e),this.l}o(){var t=new An;Mt(t,"image_in"),Mt(t,"norm_rect"),at(t,"face_landmarks");var e=new yn;si(e,M_,this.h);var n=new mn;Mn(n,2,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),xt(n,"IMAGE:image_in"),xt(n,"NORM_RECT:norm_rect"),Ze(n,"NORM_LANDMARKS:face_landmarks"),n.v(e),Fn(t,n),this.g.attachProtoVectorListener("face_landmarks",(i,r)=>{for(let s of i)i=xa(s),this.l.faceLandmarks.push(al(i));de(this,r)}),this.g.attachEmptyPacketListener("face_landmarks",i=>{de(this,i)}),this.outputFaceBlendshapes&&(at(t,"blendshapes"),Ze(n,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",(i,r)=>{if(this.outputFaceBlendshapes)for(let s of i)i=rl(s),this.l.faceBlendshapes.push(wu(i.g()??[]));de(this,r)}),this.g.attachEmptyPacketListener("blendshapes",i=>{de(this,i)})),this.outputFacialTransformationMatrixes&&(at(t,"face_geometry"),Ze(n,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",(i,r)=>{if(this.outputFacialTransformationMatrixes)for(let s of i)(i=rt(i=S_(s),u_,2))&&this.l.facialTransformationMatrixes.push({rows:Ln(i,1)??0??0,columns:Ln(i,2)??0??0,data:vr(i,3,Gn,_r()).slice()??[]});de(this,r)}),this.g.attachEmptyPacketListener("face_geometry",i=>{de(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};it.prototype.detectForVideo=it.prototype.H,it.prototype.detect=it.prototype.G,it.prototype.setOptions=it.prototype.v,it.createFromModelPath=function(t,e){return tt(it,t,{baseOptions:{modelAssetPath:e}})},it.createFromModelBuffer=function(t,e){return tt(it,t,{baseOptions:{modelAssetBuffer:e}})},it.createFromOptions=function(t,e){return tt(it,t,e)},it.FACE_LANDMARKS_LIPS=Du,vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LIPS",it.FACE_LANDMARKS_LIPS),it.FACE_LANDMARKS_LEFT_EYE=Uu,vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LEFT_EYE",it.FACE_LANDMARKS_LEFT_EYE),it.FACE_LANDMARKS_LEFT_EYEBROW=Nu,vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LEFT_EYEBROW",it.FACE_LANDMARKS_LEFT_EYEBROW),it.FACE_LANDMARKS_LEFT_IRIS=ig,vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LEFT_IRIS",it.FACE_LANDMARKS_LEFT_IRIS),it.FACE_LANDMARKS_RIGHT_EYE=Fu,vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_RIGHT_EYE",it.FACE_LANDMARKS_RIGHT_EYE),it.FACE_LANDMARKS_RIGHT_EYEBROW=Ou,vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_RIGHT_EYEBROW",it.FACE_LANDMARKS_RIGHT_EYEBROW),it.FACE_LANDMARKS_RIGHT_IRIS=rg,vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_RIGHT_IRIS",it.FACE_LANDMARKS_RIGHT_IRIS),it.FACE_LANDMARKS_FACE_OVAL=Bu,vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_FACE_OVAL",it.FACE_LANDMARKS_FACE_OVAL),it.FACE_LANDMARKS_CONTOURS=sg,vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_CONTOURS",it.FACE_LANDMARKS_CONTOURS),it.FACE_LANDMARKS_TESSELATION=ag,vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_TESSELATION",it.FACE_LANDMARKS_TESSELATION);var ku=Hn([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function id(t){t.gestures=[],t.landmarks=[],t.worldLandmarks=[],t.handedness=[]}function rd(t){return t.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:t.gestures,landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handedness:t.handedness,handednesses:t.handedness}}function sd(t,e=!0){var n=[];for(let r of t){var i=rl(r);t=[];for(let s of i.g())i=e&&Ln(s,1)!=null?Ln(s,1)??0:-1,t.push({score:Pt(s,2)??0,index:i,categoryName:jt(Tt(s,3))??""??"",displayName:jt(Tt(s,4))??""??""});n.push(t)}return n}var Qt=class extends En{constructor(t,e){super(new Vn(t,e),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ae(t=this.l=new Rm,0,1,e=new Et),this.u=new yu,Ae(this.l,0,2,this.u),this.F=new Eu,Ae(this.u,0,3,this.F),this.B=new wm,Ae(this.u,0,2,this.B),this.h=new E_,Ae(this.l,0,3,this.h),ye(this.B,2,.5),ye(this.u,4,.5),ye(this.F,2,.5)}C(){return"GestureRecognizer"}get baseOptions(){return rt(this.l,Et,1)}set baseOptions(t){Ae(this.l,0,1,t)}v(t){var r,s,a,o;if(ni(this.B,3,t.numHands??1),"minHandDetectionConfidence"in t&&ye(this.B,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&ye(this.u,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&ye(this.F,2,t.minHandPresenceConfidence??.5),t.cannedGesturesClassifierOptions){var e=new kr,n=e,i=Sc(t.cannedGesturesClassifierOptions,(r=rt(this.h,kr,3))==null?void 0:r.j());Ae(n,0,2,i),Ae(this.h,0,3,e)}else t.cannedGesturesClassifierOptions===void 0&&((s=rt(this.h,kr,3))==null||s.g());return t.customGesturesClassifierOptions?(Ae(n=e=new kr,0,2,i=Sc(t.customGesturesClassifierOptions,(a=rt(this.h,kr,4))==null?void 0:a.j())),Ae(this.h,0,4,e)):t.customGesturesClassifierOptions===void 0&&((o=rt(this.h,kr,4))==null||o.g()),this.j(t)}Xa(t,e){return id(this),Wn(this,t,e),rd(this)}Ya(t,e,n){return id(this),oi(this,t,n,e),rd(this)}o(){var t=new An;Mt(t,"image_in"),Mt(t,"norm_rect"),at(t,"hand_gestures"),at(t,"hand_landmarks"),at(t,"world_hand_landmarks"),at(t,"handedness");var e=new yn;si(e,y_,this.l);var n=new mn;Mn(n,2,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),xt(n,"IMAGE:image_in"),xt(n,"NORM_RECT:norm_rect"),Ze(n,"HAND_GESTURES:hand_gestures"),Ze(n,"LANDMARKS:hand_landmarks"),Ze(n,"WORLD_LANDMARKS:world_hand_landmarks"),Ze(n,"HANDEDNESS:handedness"),n.v(e),Fn(t,n),this.g.attachProtoVectorListener("hand_landmarks",(i,r)=>{for(let s of i){i=xa(s);let a=[];for(let o of bi(i,Sm,1))a.push({x:Pt(o,1)??0,y:Pt(o,2)??0,z:Pt(o,3)??0,visibility:Pt(o,4)??0});this.landmarks.push(a)}de(this,r)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{de(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,r)=>{for(let s of i){i=hs(s);let a=[];for(let o of bi(i,xm,1))a.push({x:Pt(o,1)??0,y:Pt(o,2)??0,z:Pt(o,3)??0,visibility:Pt(o,4)??0});this.worldLandmarks.push(a)}de(this,r)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{de(this,i)}),this.g.attachProtoVectorListener("hand_gestures",(i,r)=>{this.gestures.push(...sd(i,!1)),de(this,r)}),this.g.attachEmptyPacketListener("hand_gestures",i=>{de(this,i)}),this.g.attachProtoVectorListener("handedness",(i,r)=>{this.handedness.push(...sd(i)),de(this,r)}),this.g.attachEmptyPacketListener("handedness",i=>{de(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};function ad(t){return{landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handednesses:t.handedness,handedness:t.handedness}}Qt.prototype.recognizeForVideo=Qt.prototype.Ya,Qt.prototype.recognize=Qt.prototype.Xa,Qt.prototype.setOptions=Qt.prototype.v,Qt.createFromModelPath=function(t,e){return tt(Qt,t,{baseOptions:{modelAssetPath:e}})},Qt.createFromModelBuffer=function(t,e){return tt(Qt,t,{baseOptions:{modelAssetBuffer:e}})},Qt.createFromOptions=function(t,e){return tt(Qt,t,e)},Qt.HAND_CONNECTIONS=ku,vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$gesture_recognizer$gesture_recognizer.GestureRecognizer.HAND_CONNECTIONS",Qt.HAND_CONNECTIONS);var on=class extends En{constructor(t,e){super(new Vn(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ae(t=this.h=new yu,0,1,e=new Et),this.u=new Eu,Ae(this.h,0,3,this.u),this.l=new wm,Ae(this.h,0,2,this.l),ni(this.l,3,1),ye(this.l,2,.5),ye(this.u,2,.5),ye(this.h,4,.5)}C(){return"HandLandmarker"}get baseOptions(){return rt(this.h,Et,1)}set baseOptions(t){Ae(this.h,0,1,t)}v(t){return"numHands"in t&&ni(this.l,3,t.numHands??1),"minHandDetectionConfidence"in t&&ye(this.l,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&ye(this.h,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&ye(this.u,2,t.minHandPresenceConfidence??.5),this.j(t)}G(t,e){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Wn(this,t,e),ad(this)}H(t,e,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],oi(this,t,n,e),ad(this)}o(){var t=new An;Mt(t,"image_in"),Mt(t,"norm_rect"),at(t,"hand_landmarks"),at(t,"world_hand_landmarks"),at(t,"handedness");var e=new yn;si(e,A_,this.h);var n=new mn;Mn(n,2,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),xt(n,"IMAGE:image_in"),xt(n,"NORM_RECT:norm_rect"),Ze(n,"LANDMARKS:hand_landmarks"),Ze(n,"WORLD_LANDMARKS:world_hand_landmarks"),Ze(n,"HANDEDNESS:handedness"),n.v(e),Fn(t,n),this.g.attachProtoVectorListener("hand_landmarks",(i,r)=>{for(let s of i)i=xa(s),this.landmarks.push(al(i));de(this,r)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{de(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,r)=>{for(let s of i)i=hs(s),this.worldLandmarks.push(Qs(i));de(this,r)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{de(this,i)}),this.g.attachProtoVectorListener("handedness",(i,r)=>{var s=this.handedness,a=s.push,o=[];for(let l of i){i=rl(l);let c=[];for(let u of i.g())c.push({score:Pt(u,2)??0,index:Ln(u,1)??0??-1,categoryName:jt(Tt(u,3))??""??"",displayName:jt(Tt(u,4))??""??""});o.push(c)}a.call(s,...o),de(this,r)}),this.g.attachEmptyPacketListener("handedness",i=>{de(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};on.prototype.detectForVideo=on.prototype.H,on.prototype.detect=on.prototype.G,on.prototype.setOptions=on.prototype.v,on.createFromModelPath=function(t,e){return tt(on,t,{baseOptions:{modelAssetPath:e}})},on.createFromModelBuffer=function(t,e){return tt(on,t,{baseOptions:{modelAssetBuffer:e}})},on.createFromOptions=function(t,e){return tt(on,t,e)},on.HAND_CONNECTIONS=ku,vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$hand_landmarker$hand_landmarker.HandLandmarker.HAND_CONNECTIONS",on.HAND_CONNECTIONS);var og=Hn([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function od(t){t.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function ld(t){try{if(!t.F)return t.h;t.F(t.h)}finally{ll(t)}}function Da(t,e){t=xa(t),e.push(al(t))}var We=class extends En{constructor(t,e){super(new Vn(t,e),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,Ae(t=this.l=new Dm,0,1,e=new Et),this.Y=new Eu,Ae(this.l,0,2,this.Y),this.Aa=new T_,Ae(this.l,0,3,this.Aa),this.u=new sl,Ae(this.l,0,4,this.u),this.O=new Am,Ae(this.l,0,5,this.O),this.B=new Lm,Ae(this.l,0,6,this.B),this.Z=new Im,Ae(this.l,0,7,this.Z),ye(this.u,2,.5),ye(this.u,3,.3),ye(this.O,2,.5),ye(this.B,2,.5),ye(this.B,3,.3),ye(this.Z,2,.5),ye(this.Y,2,.5)}C(){return"HolisticLandmarker"}get baseOptions(){return rt(this.l,Et,1)}set baseOptions(t){Ae(this.l,0,1,t)}v(t){return"minFaceDetectionConfidence"in t&&ye(this.u,2,t.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in t&&ye(this.u,3,t.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in t&&ye(this.O,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"minPoseDetectionConfidence"in t&&ye(this.B,2,t.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in t&&ye(this.B,3,t.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in t&&ye(this.Z,2,t.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in t&&(this.outputPoseSegmentationMasks=!!t.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in t&&ye(this.Y,2,t.minHandLandmarksConfidence??.5),this.j(t)}G(t,e,n){var i=typeof e!="function"?e:{};return this.F=typeof e=="function"?e:n,od(this),Wn(this,t,i),ld(this)}H(t,e,n,i){var r=typeof n!="function"?n:{};return this.F=typeof n=="function"?n:i,od(this),oi(this,t,r,e),ld(this)}o(){var t=new An;Mt(t,"input_frames_image"),at(t,"pose_landmarks"),at(t,"pose_world_landmarks"),at(t,"face_landmarks"),at(t,"left_hand_landmarks"),at(t,"left_hand_world_landmarks"),at(t,"right_hand_landmarks"),at(t,"right_hand_world_landmarks");var e=new yn,n=new yh;Mn(n,1,"type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),function(r,s){if(s!=null)if(Array.isArray(s))De(r,2,$o(s,0,ra));else{if(!(typeof s=="string"||s instanceof Qn||zc(s)))throw Error("invalid value in Any.value field: "+s+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");fa(r,2,Go(s,!1),Pr())}}(n,this.l.g());var i=new mn;Mn(i,2,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),sa(i,8,yh,n),xt(i,"IMAGE:input_frames_image"),Ze(i,"POSE_LANDMARKS:pose_landmarks"),Ze(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),Ze(i,"FACE_LANDMARKS:face_landmarks"),Ze(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),Ze(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),Ze(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),Ze(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.v(e),Fn(t,i),ol(this,t),this.g.attachProtoListener("pose_landmarks",(r,s)=>{Da(r,this.h.poseLandmarks),de(this,s)}),this.g.attachEmptyPacketListener("pose_landmarks",r=>{de(this,r)}),this.g.attachProtoListener("pose_world_landmarks",(r,s)=>{var a=this.h.poseWorldLandmarks;r=hs(r),a.push(Qs(r)),de(this,s)}),this.g.attachEmptyPacketListener("pose_world_landmarks",r=>{de(this,r)}),this.outputPoseSegmentationMasks&&(Ze(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),Es(this,"pose_segmentation_mask"),this.g.ga("pose_segmentation_mask",(r,s)=>{this.h.poseSegmentationMasks=[As(this,r,!0,!this.F)],de(this,s)}),this.g.attachEmptyPacketListener("pose_segmentation_mask",r=>{this.h.poseSegmentationMasks=[],de(this,r)})),this.g.attachProtoListener("face_landmarks",(r,s)=>{Da(r,this.h.faceLandmarks),de(this,s)}),this.g.attachEmptyPacketListener("face_landmarks",r=>{de(this,r)}),this.outputFaceBlendshapes&&(at(t,"extra_blendshapes"),Ze(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",(r,s)=>{var a=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(r=rl(r),a.push(wu(r.g()??[]))),de(this,s)}),this.g.attachEmptyPacketListener("extra_blendshapes",r=>{de(this,r)})),this.g.attachProtoListener("left_hand_landmarks",(r,s)=>{Da(r,this.h.leftHandLandmarks),de(this,s)}),this.g.attachEmptyPacketListener("left_hand_landmarks",r=>{de(this,r)}),this.g.attachProtoListener("left_hand_world_landmarks",(r,s)=>{var a=this.h.leftHandWorldLandmarks;r=hs(r),a.push(Qs(r)),de(this,s)}),this.g.attachEmptyPacketListener("left_hand_world_landmarks",r=>{de(this,r)}),this.g.attachProtoListener("right_hand_landmarks",(r,s)=>{Da(r,this.h.rightHandLandmarks),de(this,s)}),this.g.attachEmptyPacketListener("right_hand_landmarks",r=>{de(this,r)}),this.g.attachProtoListener("right_hand_world_landmarks",(r,s)=>{var a=this.h.rightHandWorldLandmarks;r=hs(r),a.push(Qs(r)),de(this,s)}),this.g.attachEmptyPacketListener("right_hand_world_landmarks",r=>{de(this,r)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};We.prototype.detectForVideo=We.prototype.H,We.prototype.detect=We.prototype.G,We.prototype.setOptions=We.prototype.v,We.createFromModelPath=function(t,e){return tt(We,t,{baseOptions:{modelAssetPath:e}})},We.createFromModelBuffer=function(t,e){return tt(We,t,{baseOptions:{modelAssetBuffer:e}})},We.createFromOptions=function(t,e){return tt(We,t,e)},We.HAND_CONNECTIONS=ku,vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.HAND_CONNECTIONS",We.HAND_CONNECTIONS),We.POSE_CONNECTIONS=og,vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.POSE_CONNECTIONS",We.POSE_CONNECTIONS),We.FACE_LANDMARKS_LIPS=Du,vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LIPS",We.FACE_LANDMARKS_LIPS),We.FACE_LANDMARKS_LEFT_EYE=Uu,vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LEFT_EYE",We.FACE_LANDMARKS_LEFT_EYE),We.FACE_LANDMARKS_LEFT_EYEBROW=Nu,vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LEFT_EYEBROW",We.FACE_LANDMARKS_LEFT_EYEBROW),We.FACE_LANDMARKS_LEFT_IRIS=ig,vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LEFT_IRIS",We.FACE_LANDMARKS_LEFT_IRIS),We.FACE_LANDMARKS_RIGHT_EYE=Fu,vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_RIGHT_EYE",We.FACE_LANDMARKS_RIGHT_EYE),We.FACE_LANDMARKS_RIGHT_EYEBROW=Ou,vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_RIGHT_EYEBROW",We.FACE_LANDMARKS_RIGHT_EYEBROW),We.FACE_LANDMARKS_RIGHT_IRIS=rg,vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_RIGHT_IRIS",We.FACE_LANDMARKS_RIGHT_IRIS),We.FACE_LANDMARKS_FACE_OVAL=Bu,vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_FACE_OVAL",We.FACE_LANDMARKS_FACE_OVAL),We.FACE_LANDMARKS_CONTOURS=sg,vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_CONTOURS",We.FACE_LANDMARKS_CONTOURS),We.FACE_LANDMARKS_TESSELATION=ag,vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_TESSELATION",We.FACE_LANDMARKS_TESSELATION);var wn=class extends En{constructor(t,e){super(new Vn(t,e),"input_image","norm_rect",!0),this.l={classifications:[]},Ae(t=this.h=new Um,0,1,e=new Et)}C(){return"ImageClassifier"}get baseOptions(){return rt(this.h,Et,1)}set baseOptions(t){Ae(this.h,0,1,t)}v(t){return Ae(this.h,0,2,Sc(t,rt(this.h,Su,2))),this.j(t)}Ga(t,e){return this.l={classifications:[]},Wn(this,t,e),this.l}Ha(t,e,n){return this.l={classifications:[]},oi(this,t,n,e),this.l}o(){var t=new An;Mt(t,"input_image"),Mt(t,"norm_rect"),at(t,"classifications");var e=new yn;si(e,b_,this.h);var n=new mn;Mn(n,2,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),xt(n,"IMAGE:input_image"),xt(n,"NORM_RECT:norm_rect"),Ze(n,"CLASSIFICATIONS:classifications"),n.v(e),Fn(t,n),this.g.attachProtoListener("classifications",(i,r)=>{this.l=F_(f_(i)),de(this,r)}),this.g.attachEmptyPacketListener("classifications",i=>{de(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};wn.prototype.classifyForVideo=wn.prototype.Ha,wn.prototype.classify=wn.prototype.Ga,wn.prototype.setOptions=wn.prototype.v,wn.createFromModelPath=function(t,e){return tt(wn,t,{baseOptions:{modelAssetPath:e}})},wn.createFromModelBuffer=function(t,e){return tt(wn,t,{baseOptions:{modelAssetBuffer:e}})},wn.createFromOptions=function(t,e){return tt(wn,t,e)};var _n=class extends En{constructor(t,e){super(new Vn(t,e),"image_in","norm_rect",!0),this.h=new Nm,this.embeddings={embeddings:[]},Ae(t=this.h,0,1,e=new Et)}C(){return"ImageEmbedder"}get baseOptions(){return rt(this.h,Et,1)}set baseOptions(t){Ae(this.h,0,1,t)}v(t){var e=this.h,n=rt(this.h,Ih,2);if(n=n?n.clone():new Ih,t.l2Normalize!==void 0){var i=t.l2Normalize;De(n,1,i==null?i:go(i))}else"l2Normalize"in t&&De(n,1);return t.quantize!==void 0?De(n,2,(i=t.quantize)==null?i:go(i)):"quantize"in t&&De(n,2),Ae(e,0,2,n),this.j(t)}Na(t,e){return Wn(this,t,e),this.embeddings}Oa(t,e,n){return oi(this,t,n,e),this.embeddings}o(){var t=new An;Mt(t,"image_in"),Mt(t,"norm_rect"),at(t,"embeddings_out");var e=new yn;si(e,w_,this.h);var n=new mn;Mn(n,2,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),xt(n,"IMAGE:image_in"),xt(n,"NORM_RECT:norm_rect"),Ze(n,"EMBEDDINGS:embeddings_out"),n.v(e),Fn(t,n),this.g.attachProtoListener("embeddings_out",(i,r)=>{i=g_(i),this.embeddings=function(s){return{embeddings:bi(s,m_,1).map(a=>{var l,c;var o={headIndex:Ln(a,3)??0??-1,headName:jt(Tt(a,4))??""??""};if(Sp(a,Lh,1,xu))a=vr(a=dh(a,Lh,1),1,Gn,_r()),o.floatEmbedding=a.slice();else{let u=new Uint8Array(0);o.quantizedEmbedding=((c=(l=dh(a,p_,2))==null?void 0:l.g())==null?void 0:c.h())??u}return o}),timestampMs:Hm(Tt(s,2,void 0,vo)??xp)}}(i),de(this,r)}),this.g.attachEmptyPacketListener("embeddings_out",i=>{de(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};_n.cosineSimilarity=function(t,e){if(t.floatEmbedding&&e.floatEmbedding)t=Oh(t.floatEmbedding,e.floatEmbedding);else{if(!t.quantizedEmbedding||!e.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");t=Oh(Fh(t.quantizedEmbedding),Fh(e.quantizedEmbedding))}return t},_n.prototype.embedForVideo=_n.prototype.Oa,_n.prototype.embed=_n.prototype.Na,_n.prototype.setOptions=_n.prototype.v,_n.createFromModelPath=function(t,e){return tt(_n,t,{baseOptions:{modelAssetPath:e}})},_n.createFromModelBuffer=function(t,e){return tt(_n,t,{baseOptions:{modelAssetBuffer:e}})},_n.createFromOptions=function(t,e){return tt(_n,t,e)};var Rc=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){var t,e;(t=this.confidenceMasks)==null||t.forEach(n=>{n.close()}),(e=this.categoryMask)==null||e.close()}};function t1(t){var n,i;var e=function(r){return bi(r,mn,1)}(t.ja()).filter(r=>(jt(Tt(r,1))??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator"));if(t.u=[],e.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");e.length===1&&(((i=(n=rt(e[0],yn,7))==null?void 0:n.o())==null?void 0:i.g())??new Map).forEach((r,s)=>{t.u[Number(s)]=jt(Tt(r,1))??""})}function cd(t){t.categoryMask=void 0,t.confidenceMasks=void 0,t.qualityScores=void 0}function ud(t){try{let e=new Rc(t.confidenceMasks,t.categoryMask,t.qualityScores);if(!t.l)return e;t.l(e)}finally{ll(t)}}Rc.prototype.close=Rc.prototype.close;var ln=class extends En{constructor(t,e){super(new Vn(t,e),"image_in","norm_rect",!1),this.u=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new bu,this.B=new Fm,Ae(this.h,0,3,this.B),Ae(t=this.h,0,1,e=new Et)}C(){return"ImageSegmenter"}get baseOptions(){return rt(this.h,Et,1)}set baseOptions(t){Ae(this.h,0,1,t)}v(t){return t.displayNamesLocale!==void 0?De(this.h,2,xi(t.displayNamesLocale)):"displayNamesLocale"in t&&De(this.h,2),"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.j(t)}L(){t1(this)}segment(t,e,n){var i=typeof e!="function"?e:{};return this.l=typeof e=="function"?e:n,cd(this),Wn(this,t,i),ud(this)}eb(t,e,n,i){var r=typeof n!="function"?n:{};return this.l=typeof n=="function"?n:i,cd(this),oi(this,t,r,e),ud(this)}Ra(){return this.u}o(){var t=new An;Mt(t,"image_in"),Mt(t,"norm_rect");var e=new yn;si(e,Bm,this.h);var n=new mn;Mn(n,2,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),xt(n,"IMAGE:image_in"),xt(n,"NORM_RECT:norm_rect"),n.v(e),Fn(t,n),ol(this,t),this.outputConfidenceMasks&&(at(t,"confidence_masks"),Ze(n,"CONFIDENCE_MASKS:confidence_masks"),Es(this,"confidence_masks"),this.g.ha("confidence_masks",(i,r)=>{this.confidenceMasks=i.map(s=>As(this,s,!0,!this.l)),de(this,r)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],de(this,i)})),this.outputCategoryMask&&(at(t,"category_mask"),Ze(n,"CATEGORY_MASK:category_mask"),Es(this,"category_mask"),this.g.ga("category_mask",(i,r)=>{this.categoryMask=As(this,i,!1,!this.l),de(this,r)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,de(this,i)})),at(t,"quality_scores"),Ze(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,r)=>{this.qualityScores=i,de(this,r)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,de(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};ln.prototype.getLabels=ln.prototype.Ra,ln.prototype.segmentForVideo=ln.prototype.eb,ln.prototype.segment=ln.prototype.segment,ln.prototype.setOptions=ln.prototype.v,ln.createFromModelPath=function(t,e){return tt(ln,t,{baseOptions:{modelAssetPath:e}})},ln.createFromModelBuffer=function(t,e){return tt(ln,t,{baseOptions:{modelAssetBuffer:e}})},ln.createFromOptions=function(t,e){return tt(ln,t,e)};var n1={0:0,1:1,2:2,3:3};function Rl(){return Ru()?void 0:document.createElement("canvas")}var cn=class extends Lo{constructor(t,e){super(new K_(t,e)),this.u=new Lu,this.delegate="CPU",this.h=0,this.baseOptions=new Et,this.B=this.l=0}C(){return"InteractiveSegmenter"}get i(){return this.g.i}v(t){var e;return this.delegate=((e=t.baseOptions)==null?void 0:e.delegate)??"CPU",super.j(t)}fb(t){if(this.h===0)throw Error("Segmenter is not initialized.");var e;if(this.l!==0&&(this.i._free(this.l),this.l=0),!(e=typeof ImageData<"u"&&t instanceof ImageData))if(typeof t!="object"||t===null)e=!1;else{e=t.data;var n=t.width,i=t.height;e=Number.isInteger(n)&&n>0&&Number.isInteger(i)&&i>0&&(e instanceof Uint8ClampedArray||e instanceof Uint8Array)}if(e)e=t.width,n=t.height,t=t.data;else{if([e,n]=Cu(t),typeof OffscreenCanvas<"u")i=new OffscreenCanvas(e,n);else{if(typeof document>"u")throw Error("Canvas is not supported in this environment.");i=document.createElement("canvas")}if(i.width=e,i.height=n,!(i=i.getContext("2d")))throw Error("Canvas 2D context is not supported in this environment.");i.drawImage(t,0,0),t=i.getImageData(0,0,e,n).data}if(!t)throw Error("Unsupported image source or failed to extract image pixels.");i=function({Wa:s,width:a,height:o}){if(a<=0||o<=0)throw Error(`Invalid image dimensions: ${a}x${o}. Dimensions must be positive.`);if(s%(a*o)!==0)throw Error(`Invalid image dimensions or pixel data length. Pixel data length ${s} is not a multiple of the number of pixels (${a*o}).`);if((s/=a*o)!==4&&s!==3&&s!==1)throw Error(`Invalid image dimensions or pixel data length. Calculated channels: ${s}. Expected 1, 3, or 4.`);return s}({Wa:t.length,width:e,height:n});var r=this.i._malloc(t.length);if(this.i.HEAPU8.set(t,r),this.l=r,!this.i._interactive_segmenter_set_image(this.h,r,e,n,i))throw Error("Failed to set image on native engine.")}segment(t){var u;if(this.h===0)throw Error("Segmenter is not initialized.");var e=function(h){h=h.map(({isCompleted:m,brushMode:g,point:x})=>{g=n1[g]??0,x=x.map(({x:f,y:A})=>{var M=new C_;return os(M,1,f),os(M,2,A),M});var p=new P_;return pc(p,m),fa(p,1,Ei(g),0),fc(p,2,x),p});var d=new L_;return fc(d,1,h),I_(d)}(t);t=this.i._malloc(e.length),this.i.HEAPU8.set(e,t);var n=this.i._malloc(12),i=n+4,r=n+8,s=0,a=this.B++;try{if(this.m)if(this.delegate==="GPU"){var o=this.m;++o.g.T,o.h.set(a,performance.now())}else{var l=this.m;++l.g.P,l.h.set(a,performance.now())}if((s=this.i._interactive_segmenter_segment(this.h,t,e.length,n,i,r))===0)throw Error("Segmentation failed.");(u=this.m)==null||u.za(a);let h=this.i.HEAPU32[n/4],d=this.i.HEAPU32[i/4],m=new Float32Array(this.i.HEAPU8.buffer,s,this.i.HEAPU32[r/4]/4);var c=new Float32Array(m);if(o=h*d,(c instanceof Uint8Array||c instanceof Float32Array)&&c.length!==o)throw Error("Unsupported channel count: "+c.length/o);return new kt([c],!0,!1,this.g.i.canvas??void 0,this.u,h,d)}finally{t!==0&&this.i._free(t),n!==0&&this.i._free(n),s!==0&&this.i._free(s)}}o(){var n,i;this.h!==0&&((n=this.m)==null||n.xa(),this.i._interactive_segmenter_close(this.h),this.h=0),this.l!==0&&(this.i._free(this.l),this.l=0);var t=new Ro;if(this.delegate==="GPU"){var e=new vu;ti(t,2,wr,e)}else ni(e=new s_,1,4),ti(t,1,wr,e);if(Ae(this.baseOptions,0,3,t),t=v_(this.baseOptions),e=this.i._malloc(t.length),this.i.HEAPU8.set(t,e),this.h=this.i._interactive_segmenter_create(e,t.length),this.i._free(e),this.h===0)throw Error("Failed to create native InteractiveSegmenter engine.");(i=this.m)==null||i.ya()}close(){this.h!==0&&(this.i._interactive_segmenter_close(this.h),this.h=0),this.l!==0&&(this.i._free(this.l),this.l=0),this.u.close(),super.close()}};cn.prototype.close=cn.prototype.close,cn.prototype.segment=cn.prototype.segment,cn.prototype.setImage=cn.prototype.fb,cn.prototype.setOptions=cn.prototype.v,cn.createFromModelPath=function(t,e){return fo(cn,Rl(),t,{baseOptions:{modelAssetPath:e}})},cn.createFromModelBuffer=function(t,e){return fo(cn,Rl(),t,{baseOptions:{modelAssetBuffer:e}})},cn.createFromOptions=function(t,e){var n=e.canvas??Rl();return fo(cn,n,t,e)};var Cc=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){var t,e;(t=this.confidenceMasks)==null||t.forEach(n=>{n.close()}),(e=this.categoryMask)==null||e.close()}};Cc.prototype.close=Cc.prototype.close;var qn=class extends En{constructor(t,e){super(new Vn(t,e),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new bu,this.u=new Fm,Ae(this.h,0,3,this.u),Ae(t=this.h,0,1,e=new Et)}C(){return"InteractiveSegmenterLegacy"}get baseOptions(){return rt(this.h,Et,1)}set baseOptions(t){Ae(this.h,0,1,t)}v(t){return"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.j(t)}segment(t,e,n,i){var r=typeof n!="function"?n:{};if(this.l=typeof n=="function"?n:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.I+1,i=new km,e.keypoint&&e.scribble)throw Error("Cannot provide both keypoint and scribble.");if(e.keypoint){var s=new bl;pc(s,!0),os(s,1,e.keypoint.x),os(s,2,e.keypoint.y),ti(i,1,xc,s)}else{if(!e.scribble)throw Error("Must provide either a keypoint or a scribble.");{let o=new D_;for(s of e.scribble)pc(e=new bl,!0),os(e,1,s.x),os(e,2,s.y),sa(o,1,bl,e);ti(i,2,xc,o)}}this.g.addProtoToStream(i.g(),"mediapipe.tasks.vision.interactive_segmenter_legacy.proto.RegionOfInterest","roi_in",n),Wn(this,t,r);e:{try{let o=new Cc(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.l){var a=o;break e}this.l(o)}finally{ll(this)}a=void 0}return a}o(){var t=new An;Mt(t,"image_in"),Mt(t,"roi_in"),Mt(t,"norm_rect_in");var e=new yn;si(e,Bm,this.h);var n=new mn;Mn(n,2,"mediapipe.tasks.vision.interactive_segmenter_legacy.InteractiveSegmenterGraphV2"),xt(n,"IMAGE:image_in"),xt(n,"ROI:roi_in"),xt(n,"NORM_RECT:norm_rect_in"),n.v(e),Fn(t,n),ol(this,t),this.outputConfidenceMasks&&(at(t,"confidence_masks"),Ze(n,"CONFIDENCE_MASKS:confidence_masks"),Es(this,"confidence_masks"),this.g.ha("confidence_masks",(i,r)=>{this.confidenceMasks=i.map(s=>As(this,s,!0,!this.l)),de(this,r)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],de(this,i)})),this.outputCategoryMask&&(at(t,"category_mask"),Ze(n,"CATEGORY_MASK:category_mask"),Es(this,"category_mask"),this.g.ga("category_mask",(i,r)=>{this.categoryMask=As(this,i,!1,!this.l),de(this,r)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,de(this,i)})),at(t,"quality_scores"),Ze(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,r)=>{this.qualityScores=i,de(this,r)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,de(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};qn.prototype.segment=qn.prototype.segment,qn.prototype.setOptions=qn.prototype.v,qn.createFromModelPath=function(t,e){return tt(qn,t,{baseOptions:{modelAssetPath:e}})},qn.createFromModelBuffer=function(t,e){return tt(qn,t,{baseOptions:{modelAssetBuffer:e}})},qn.createFromOptions=function(t,e){return tt(qn,t,e)};var Rn=class extends En{constructor(t,e){super(new Vn(t,e),"input_frame_gpu","norm_rect",!1),this.l={detections:[]},Ae(t=this.h=new zm,0,1,e=new Et)}C(){return"ObjectDetector"}get baseOptions(){return rt(this.h,Et,1)}set baseOptions(t){Ae(this.h,0,1,t)}v(t){return t.displayNamesLocale!==void 0?De(this.h,2,xi(t.displayNamesLocale)):"displayNamesLocale"in t&&De(this.h,2),t.maxResults!==void 0?ni(this.h,3,t.maxResults):"maxResults"in t&&De(this.h,3),t.scoreThreshold!==void 0?ye(this.h,4,t.scoreThreshold):"scoreThreshold"in t&&De(this.h,4),t.categoryAllowlist!==void 0?So(this.h,5,t.categoryAllowlist):"categoryAllowlist"in t&&De(this.h,5),t.categoryDenylist!==void 0?So(this.h,6,t.categoryDenylist):"categoryDenylist"in t&&De(this.h,6),this.j(t)}G(t,e){return this.l={detections:[]},Wn(this,t,e),this.l}H(t,e,n){return this.l={detections:[]},oi(this,t,n,e),this.l}o(){var t=new An;Mt(t,"input_frame_gpu"),Mt(t,"norm_rect"),at(t,"detections");var e=new yn;si(e,U_,this.h);var n=new mn;Mn(n,2,"mediapipe.tasks.vision.ObjectDetectorGraph"),xt(n,"IMAGE:input_frame_gpu"),xt(n,"NORM_RECT:norm_rect"),Ze(n,"DETECTIONS:detections"),n.v(e),Fn(t,n),this.g.attachProtoVectorListener("detections",(i,r)=>{for(let s of i)i=vm(s),this.l.detections.push(Vm(i));de(this,r)}),this.g.attachEmptyPacketListener("detections",i=>{de(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Rn.prototype.detectForVideo=Rn.prototype.H,Rn.prototype.detect=Rn.prototype.G,Rn.prototype.setOptions=Rn.prototype.v,Rn.createFromModelPath=async function(t,e){return tt(Rn,t,{baseOptions:{modelAssetPath:e}})},Rn.createFromModelBuffer=function(t,e){return tt(Rn,t,{baseOptions:{modelAssetBuffer:e}})},Rn.createFromOptions=function(t,e){return tt(Rn,t,e)};var Pc=class{constructor(t,e,n){this.landmarks=t,this.worldLandmarks=e,this.segmentationMasks=n}close(){var t;(t=this.segmentationMasks)==null||t.forEach(e=>{e.close()})}};function hd(t){t.landmarks=[],t.worldLandmarks=[],t.segmentationMasks=void 0}function dd(t){try{let e=new Pc(t.landmarks,t.worldLandmarks,t.segmentationMasks);if(!t.u)return e;t.u(e)}finally{ll(t)}}Pc.prototype.close=Pc.prototype.close;var un=class extends En{constructor(t,e){super(new Vn(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,Ae(t=this.h=new Gm,0,1,e=new Et),this.B=new Im,Ae(this.h,0,3,this.B),this.l=new Lm,Ae(this.h,0,2,this.l),ni(this.l,4,1),ye(this.l,2,.5),ye(this.B,2,.5),ye(this.h,4,.5)}C(){return"PoseLandmarker"}get baseOptions(){return rt(this.h,Et,1)}set baseOptions(t){Ae(this.h,0,1,t)}v(t){return"numPoses"in t&&ni(this.l,4,t.numPoses??1),"minPoseDetectionConfidence"in t&&ye(this.l,2,t.minPoseDetectionConfidence??.5),"minTrackingConfidence"in t&&ye(this.h,4,t.minTrackingConfidence??.5),"minPosePresenceConfidence"in t&&ye(this.B,2,t.minPosePresenceConfidence??.5),"outputSegmentationMasks"in t&&(this.outputSegmentationMasks=t.outputSegmentationMasks??!1),this.j(t)}G(t,e,n){var i=typeof e!="function"?e:{};return this.u=typeof e=="function"?e:n,hd(this),Wn(this,t,i),dd(this)}H(t,e,n,i){var r=typeof n!="function"?n:{};return this.u=typeof n=="function"?n:i,hd(this),oi(this,t,r,e),dd(this)}o(){var t=new An;Mt(t,"image_in"),Mt(t,"norm_rect"),at(t,"normalized_landmarks"),at(t,"world_landmarks"),at(t,"segmentation_masks");var e=new yn;si(e,N_,this.h);var n=new mn;Mn(n,2,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),xt(n,"IMAGE:image_in"),xt(n,"NORM_RECT:norm_rect"),Ze(n,"NORM_LANDMARKS:normalized_landmarks"),Ze(n,"WORLD_LANDMARKS:world_landmarks"),n.v(e),Fn(t,n),ol(this,t),this.g.attachProtoVectorListener("normalized_landmarks",(i,r)=>{this.landmarks=[];for(let s of i)i=xa(s),this.landmarks.push(al(i));de(this,r)}),this.g.attachEmptyPacketListener("normalized_landmarks",i=>{this.landmarks=[],de(this,i)}),this.g.attachProtoVectorListener("world_landmarks",(i,r)=>{this.worldLandmarks=[];for(let s of i)i=hs(s),this.worldLandmarks.push(Qs(i));de(this,r)}),this.g.attachEmptyPacketListener("world_landmarks",i=>{this.worldLandmarks=[],de(this,i)}),this.outputSegmentationMasks&&(Ze(n,"SEGMENTATION_MASK:segmentation_masks"),Es(this,"segmentation_masks"),this.g.ha("segmentation_masks",(i,r)=>{this.segmentationMasks=i.map(s=>As(this,s,!0,!this.u)),de(this,r)}),this.g.attachEmptyPacketListener("segmentation_masks",i=>{this.segmentationMasks=[],de(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};un.prototype.detectForVideo=un.prototype.H,un.prototype.detect=un.prototype.G,un.prototype.setOptions=un.prototype.v,un.createFromModelPath=function(t,e){return tt(un,t,{baseOptions:{modelAssetPath:e}})},un.createFromModelBuffer=function(t,e){return tt(un,t,{baseOptions:{modelAssetBuffer:e}})},un.createFromOptions=function(t,e){return tt(un,t,e)},un.POSE_CONNECTIONS=og,vt("module$exports$google3$third_party$mediapipe$tasks$web$vision$pose_landmarker$pose_landmarker.PoseLandmarker.POSE_CONNECTIONS",un.POSE_CONNECTIONS);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zu="165",i1=0,fd=1,r1=2,lg=1,s1=2,mi=3,ji=0,hn=1,vi=2,qi=0,ds=1,Lc=2,pd=3,md=4,a1=5,mr=100,o1=101,l1=102,c1=103,u1=104,h1=200,d1=201,f1=202,p1=203,Ic=204,Dc=205,m1=206,g1=207,_1=208,v1=209,x1=210,S1=211,M1=212,E1=213,y1=214,A1=0,T1=1,b1=2,Io=3,w1=4,R1=5,C1=6,P1=7,cg=0,L1=1,I1=2,Yi=0,D1=1,U1=2,N1=3,F1=4,O1=5,B1=6,k1=7,ug=300,Ts=301,bs=302,Uc=303,Nc=304,cl=306,Fc=1e3,Sr=1001,Oc=1002,In=1003,z1=1004,Ua=1005,zn=1006,Cl=1007,Mr=1008,Zi=1009,G1=1010,H1=1011,Do=1012,hg=1013,ws=1014,Hi=1015,ul=1016,dg=1017,fg=1018,Rs=1020,V1=35902,W1=1021,X1=1022,Jn=1023,$1=1024,q1=1025,fs=1026,Cs=1027,Y1=1028,pg=1029,K1=1030,mg=1031,gg=1033,Pl=33776,Ll=33777,Il=33778,Dl=33779,gd=35840,_d=35841,vd=35842,xd=35843,Sd=36196,Md=37492,Ed=37496,yd=37808,Ad=37809,Td=37810,bd=37811,wd=37812,Rd=37813,Cd=37814,Pd=37815,Ld=37816,Id=37817,Dd=37818,Ud=37819,Nd=37820,Fd=37821,Ul=36492,Od=36494,Bd=36495,j1=36283,kd=36284,zd=36285,Gd=36286,Z1=3200,J1=3201,Q1=0,ev=1,Gi="",Kn="srgb",ir="srgb-linear",Gu="display-p3",hl="display-p3-linear",Uo="linear",gt="srgb",No="rec709",Fo="p3",zr=7680,Hd=519,tv=512,nv=513,iv=514,_g=515,rv=516,sv=517,av=518,ov=519,Vd=35044,Wd="300 es",Si=2e3,Oo=2001;class ks{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Xd=1234567;const ea=Math.PI/180,oa=180/Math.PI;function zs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[t&255]+Zt[t>>8&255]+Zt[t>>16&255]+Zt[t>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[n&63|128]+Zt[n>>8&255]+"-"+Zt[n>>16&255]+Zt[n>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function sn(t,e,n){return Math.max(e,Math.min(n,t))}function Hu(t,e){return(t%e+e)%e}function lv(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function cv(t,e,n){return t!==e?(n-t)/(e-t):0}function ta(t,e,n){return(1-n)*t+n*e}function uv(t,e,n,i){return ta(t,e,1-Math.exp(-n*i))}function hv(t,e=1){return e-Math.abs(Hu(t,e*2)-e)}function dv(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function fv(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function pv(t,e){return t+Math.floor(Math.random()*(e-t+1))}function mv(t,e){return t+Math.random()*(e-t)}function gv(t){return t*(.5-Math.random())}function _v(t){t!==void 0&&(Xd=t);let e=Xd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vv(t){return t*ea}function xv(t){return t*oa}function Sv(t){return(t&t-1)===0&&t!==0}function Mv(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Ev(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function yv(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),c=s((e+i)/2),u=a((e+i)/2),h=s((e-i)/2),d=a((e-i)/2),m=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":t.set(o*u,l*h,l*d,o*c);break;case"YZY":t.set(l*d,o*u,l*h,o*c);break;case"ZXZ":t.set(l*h,l*d,o*u,o*c);break;case"XZX":t.set(o*u,l*g,l*m,o*c);break;case"YXY":t.set(l*m,o*u,l*g,o*c);break;case"ZYZ":t.set(l*g,l*m,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function as(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function nn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const ci={DEG2RAD:ea,RAD2DEG:oa,generateUUID:zs,clamp:sn,euclideanModulo:Hu,mapLinear:lv,inverseLerp:cv,lerp:ta,damp:uv,pingpong:hv,smoothstep:dv,smootherstep:fv,randInt:pv,randFloat:mv,randFloatSpread:gv,seededRandom:_v,degToRad:vv,radToDeg:xv,isPowerOfTwo:Sv,ceilPowerOfTwo:Mv,floorPowerOfTwo:Ev,setQuaternionFromProperEuler:yv,normalize:nn,denormalize:as};class lt{constructor(e=0,n=0){lt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(e,n,i,r,s,a,o,l,c){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],m=i[5],g=i[8],x=r[0],p=r[3],f=r[6],A=r[1],M=r[4],T=r[7],B=r[2],C=r[5],b=r[8];return s[0]=a*x+o*A+l*B,s[3]=a*p+o*M+l*C,s[6]=a*f+o*T+l*b,s[1]=c*x+u*A+h*B,s[4]=c*p+u*M+h*C,s[7]=c*f+u*T+h*b,s[2]=d*x+m*A+g*B,s[5]=d*p+m*M+g*C,s[8]=d*f+m*T+g*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return n*a*u-n*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,m=c*s-a*l,g=n*h+i*d+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=h*x,e[1]=(r*c-u*i)*x,e[2]=(o*i-r*a)*x,e[3]=d*x,e[4]=(u*n-r*l)*x,e[5]=(r*s-o*n)*x,e[6]=m*x,e[7]=(i*l-c*n)*x,e[8]=(a*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Nl.makeScale(e,n)),this}rotate(e){return this.premultiply(Nl.makeRotation(-e)),this}translate(e,n){return this.premultiply(Nl.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Nl=new Oe;function vg(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Bo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Av(){const t=Bo("canvas");return t.style.display="block",t}const $d={};function xg(t){t in $d||($d[t]=!0,console.warn(t))}function Tv(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const qd=new Oe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Yd=new Oe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Na={[ir]:{transfer:Uo,primaries:No,toReference:t=>t,fromReference:t=>t},[Kn]:{transfer:gt,primaries:No,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[hl]:{transfer:Uo,primaries:Fo,toReference:t=>t.applyMatrix3(Yd),fromReference:t=>t.applyMatrix3(qd)},[Gu]:{transfer:gt,primaries:Fo,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Yd),fromReference:t=>t.applyMatrix3(qd).convertLinearToSRGB()}},bv=new Set([ir,hl]),ut={enabled:!0,_workingColorSpace:ir,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!bv.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Na[e].toReference,r=Na[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Na[t].primaries},getTransfer:function(t){return t===Gi?Uo:Na[t].transfer}};function ps(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Fl(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Gr;class wv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Gr===void 0&&(Gr=Bo("canvas")),Gr.width=e.width,Gr.height=e.height;const i=Gr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Gr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Bo("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ps(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ps(n[i]/255)*255):n[i]=ps(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Rv=0;class Sg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rv++}),this.uuid=zs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ol(r[a].image)):s.push(Ol(r[a]))}else s=Ol(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Ol(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?wv.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cv=0;class dn extends ks{constructor(e=dn.DEFAULT_IMAGE,n=dn.DEFAULT_MAPPING,i=Sr,r=Sr,s=zn,a=Mr,o=Jn,l=Zi,c=dn.DEFAULT_ANISOTROPY,u=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cv++}),this.uuid=zs(),this.name="",this.source=new Sg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ug)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fc:e.x=e.x-Math.floor(e.x);break;case Sr:e.x=e.x<0?0:1;break;case Oc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fc:e.y=e.y-Math.floor(e.y);break;case Sr:e.y=e.y<0?0:1;break;case Oc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=ug;dn.DEFAULT_ANISOTROPY=1;class Kt{constructor(e=0,n=0,i=0,r=1){Kt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],m=l[5],g=l[9],x=l[2],p=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const M=(c+1)/2,T=(m+1)/2,B=(f+1)/2,C=(u+d)/4,b=(h+x)/4,F=(g+p)/4;return M>T&&M>B?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=C/i,s=b/i):T>B?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=C/r,s=F/r):B<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(B),i=b/s,r=F/s),this.set(i,r,s,n),this}let A=Math.sqrt((p-g)*(p-g)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(A)<.001&&(A=1),this.x=(p-g)/A,this.y=(h-x)/A,this.z=(d-u)/A,this.w=Math.acos((c+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Pv extends ks{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Kt(0,0,e,n),this.scissorTest=!1,this.viewport=new Kt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new dn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Sg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ir extends Pv{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Mg extends dn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=In,this.minFilter=In,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Lv extends dn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=In,this.minFilter=In,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const d=s[a+0],m=s[a+1],g=s[a+2],x=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h;return}if(o===1){e[n+0]=d,e[n+1]=m,e[n+2]=g,e[n+3]=x;return}if(h!==x||l!==d||c!==m||u!==g){let p=1-o;const f=l*d+c*m+u*g+h*x,A=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){const B=Math.sqrt(M),C=Math.atan2(B,f*A);p=Math.sin(p*C)/B,o=Math.sin(o*C)/B}const T=o*A;if(l=l*p+d*T,c=c*p+m*T,u=u*p+g*T,h=h*p+x*T,p===1-o){const B=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=B,c*=B,u*=B,h*=B}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[a],d=s[a+1],m=s[a+2],g=s[a+3];return e[n]=o*g+u*h+l*m-c*d,e[n+1]=l*g+u*d+c*h-o*m,e[n+2]=c*g+u*m+o*d-l*h,e[n+3]=u*g-o*h-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),h=o(s/2),d=l(i/2),m=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h-d*m*g;break;case"YXZ":this._x=d*u*h+c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h+d*m*g;break;case"ZXY":this._x=d*u*h-c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h-d*m*g;break;case"ZYX":this._x=d*u*h-c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h+d*m*g;break;case"YZX":this._x=d*u*h+c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h-d*m*g;break;case"XZY":this._x=d*u*h-c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],u=n[6],h=n[10],d=i+o+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>h){const m=2*Math.sqrt(1+i-o-h);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-i-h);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(sn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=a*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,n=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Kd.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Kd.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+l*c+a*h-o*u,this.y=i+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Bl.copy(this).projectOnVector(e),this.sub(Bl)}reflect(e){return this.sub(Bl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bl=new N,Kd=new Sa;class Ma{constructor(e=new N(1/0,1/0,1/0),n=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(On.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(On.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=On.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,On):On.fromBufferAttribute(s,a),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fa.copy(i.boundingBox)),Fa.applyMatrix4(e.matrixWorld),this.union(Fa)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xs),Oa.subVectors(this.max,Xs),Hr.subVectors(e.a,Xs),Vr.subVectors(e.b,Xs),Wr.subVectors(e.c,Xs),Ui.subVectors(Vr,Hr),Ni.subVectors(Wr,Vr),or.subVectors(Hr,Wr);let n=[0,-Ui.z,Ui.y,0,-Ni.z,Ni.y,0,-or.z,or.y,Ui.z,0,-Ui.x,Ni.z,0,-Ni.x,or.z,0,-or.x,-Ui.y,Ui.x,0,-Ni.y,Ni.x,0,-or.y,or.x,0];return!kl(n,Hr,Vr,Wr,Oa)||(n=[1,0,0,0,1,0,0,0,1],!kl(n,Hr,Vr,Wr,Oa))?!1:(Ba.crossVectors(Ui,Ni),n=[Ba.x,Ba.y,Ba.z],kl(n,Hr,Vr,Wr,Oa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ui=[new N,new N,new N,new N,new N,new N,new N,new N],On=new N,Fa=new Ma,Hr=new N,Vr=new N,Wr=new N,Ui=new N,Ni=new N,or=new N,Xs=new N,Oa=new N,Ba=new N,lr=new N;function kl(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){lr.fromArray(t,s);const o=r.x*Math.abs(lr.x)+r.y*Math.abs(lr.y)+r.z*Math.abs(lr.z),l=e.dot(lr),c=n.dot(lr),u=i.dot(lr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Iv=new Ma,$s=new N,zl=new N;class dl{constructor(e=new N,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Iv.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$s.subVectors(e,this.center);const n=$s.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector($s,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($s.copy(e.center).add(zl)),this.expandByPoint($s.copy(e.center).sub(zl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hi=new N,Gl=new N,ka=new N,Fi=new N,Hl=new N,za=new N,Vl=new N;class Eg{constructor(e=new N,n=new N(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=hi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,n),hi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Gl.copy(e).add(n).multiplyScalar(.5),ka.copy(n).sub(e).normalize(),Fi.copy(this.origin).sub(Gl);const s=e.distanceTo(n)*.5,a=-this.direction.dot(ka),o=Fi.dot(this.direction),l=-Fi.dot(ka),c=Fi.lengthSq(),u=Math.abs(1-a*a);let h,d,m,g;if(u>0)if(h=a*l-o,d=a*o-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const x=1/u;h*=x,d*=x,m=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Gl).addScaledVector(ka,d),m}intersectSphere(e,n){hi.subVectors(e.center,this.origin);const i=hi.dot(this.direction),r=hi.dot(hi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,n,i,r,s){Hl.subVectors(n,e),za.subVectors(i,e),Vl.crossVectors(Hl,za);let a=this.direction.dot(Vl),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Fi.subVectors(this.origin,e);const l=o*this.direction.dot(za.crossVectors(Fi,za));if(l<0)return null;const c=o*this.direction.dot(Hl.cross(Fi));if(c<0||l+c>a)return null;const u=-o*Fi.dot(Vl);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ot{constructor(e,n,i,r,s,a,o,l,c,u,h,d,m,g,x,p){Ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,u,h,d,m,g,x,p)}set(e,n,i,r,s,a,o,l,c,u,h,d,m,g,x,p){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=m,f[7]=g,f[11]=x,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ot().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Xr.setFromMatrixColumn(e,0).length(),s=1/Xr.setFromMatrixColumn(e,1).length(),a=1/Xr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,m=a*h,g=o*u,x=o*h;n[0]=l*u,n[4]=-l*h,n[8]=c,n[1]=m+g*c,n[5]=d-x*c,n[9]=-o*l,n[2]=x-d*c,n[6]=g+m*c,n[10]=a*l}else if(e.order==="YXZ"){const d=l*u,m=l*h,g=c*u,x=c*h;n[0]=d+x*o,n[4]=g*o-m,n[8]=a*c,n[1]=a*h,n[5]=a*u,n[9]=-o,n[2]=m*o-g,n[6]=x+d*o,n[10]=a*l}else if(e.order==="ZXY"){const d=l*u,m=l*h,g=c*u,x=c*h;n[0]=d-x*o,n[4]=-a*h,n[8]=g+m*o,n[1]=m+g*o,n[5]=a*u,n[9]=x-d*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const d=a*u,m=a*h,g=o*u,x=o*h;n[0]=l*u,n[4]=g*c-m,n[8]=d*c+x,n[1]=l*h,n[5]=x*c+d,n[9]=m*c-g,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,g=o*l,x=o*c;n[0]=l*u,n[4]=x-d*h,n[8]=g*h+m,n[1]=h,n[5]=a*u,n[9]=-o*u,n[2]=-c*u,n[6]=m*h+g,n[10]=d-x*h}else if(e.order==="XZY"){const d=a*l,m=a*c,g=o*l,x=o*c;n[0]=l*u,n[4]=-h,n[8]=c*u,n[1]=d*h+x,n[5]=a*u,n[9]=m*h-g,n[2]=g*h-m,n[6]=o*u,n[10]=x*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dv,e,Uv)}lookAt(e,n,i){const r=this.elements;return vn.subVectors(e,n),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Oi.crossVectors(i,vn),Oi.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Oi.crossVectors(i,vn)),Oi.normalize(),Ga.crossVectors(vn,Oi),r[0]=Oi.x,r[4]=Ga.x,r[8]=vn.x,r[1]=Oi.y,r[5]=Ga.y,r[9]=vn.y,r[2]=Oi.z,r[6]=Ga.z,r[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],m=i[13],g=i[2],x=i[6],p=i[10],f=i[14],A=i[3],M=i[7],T=i[11],B=i[15],C=r[0],b=r[4],F=r[8],E=r[12],S=r[1],P=r[5],V=r[9],k=r[13],q=r[2],$=r[6],W=r[10],K=r[14],z=r[3],fe=r[7],ve=r[11],Se=r[15];return s[0]=a*C+o*S+l*q+c*z,s[4]=a*b+o*P+l*$+c*fe,s[8]=a*F+o*V+l*W+c*ve,s[12]=a*E+o*k+l*K+c*Se,s[1]=u*C+h*S+d*q+m*z,s[5]=u*b+h*P+d*$+m*fe,s[9]=u*F+h*V+d*W+m*ve,s[13]=u*E+h*k+d*K+m*Se,s[2]=g*C+x*S+p*q+f*z,s[6]=g*b+x*P+p*$+f*fe,s[10]=g*F+x*V+p*W+f*ve,s[14]=g*E+x*k+p*K+f*Se,s[3]=A*C+M*S+T*q+B*z,s[7]=A*b+M*P+T*$+B*fe,s[11]=A*F+M*V+T*W+B*ve,s[15]=A*E+M*k+T*K+B*Se,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],m=e[14],g=e[3],x=e[7],p=e[11],f=e[15];return g*(+s*l*h-r*c*h-s*o*d+i*c*d+r*o*m-i*l*m)+x*(+n*l*m-n*c*d+s*a*d-r*a*m+r*c*u-s*l*u)+p*(+n*c*h-n*o*m-s*a*h+i*a*m+s*o*u-i*c*u)+f*(-r*o*u-n*l*h+n*o*d+r*a*h-i*a*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],m=e[11],g=e[12],x=e[13],p=e[14],f=e[15],A=h*p*c-x*d*c+x*l*m-o*p*m-h*l*f+o*d*f,M=g*d*c-u*p*c-g*l*m+a*p*m+u*l*f-a*d*f,T=u*x*c-g*h*c+g*o*m-a*x*m-u*o*f+a*h*f,B=g*h*l-u*x*l-g*o*d+a*x*d+u*o*p-a*h*p,C=n*A+i*M+r*T+s*B;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/C;return e[0]=A*b,e[1]=(x*d*s-h*p*s-x*r*m+i*p*m+h*r*f-i*d*f)*b,e[2]=(o*p*s-x*l*s+x*r*c-i*p*c-o*r*f+i*l*f)*b,e[3]=(h*l*s-o*d*s-h*r*c+i*d*c+o*r*m-i*l*m)*b,e[4]=M*b,e[5]=(u*p*s-g*d*s+g*r*m-n*p*m-u*r*f+n*d*f)*b,e[6]=(g*l*s-a*p*s-g*r*c+n*p*c+a*r*f-n*l*f)*b,e[7]=(a*d*s-u*l*s+u*r*c-n*d*c-a*r*m+n*l*m)*b,e[8]=T*b,e[9]=(g*h*s-u*x*s-g*i*m+n*x*m+u*i*f-n*h*f)*b,e[10]=(a*x*s-g*o*s+g*i*c-n*x*c-a*i*f+n*o*f)*b,e[11]=(u*o*s-a*h*s-u*i*c+n*h*c+a*i*m-n*o*m)*b,e[12]=B*b,e[13]=(u*x*r-g*h*r+g*i*d-n*x*d-u*i*p+n*h*p)*b,e[14]=(g*o*r-a*x*r-g*i*l+n*x*l+a*i*p-n*o*p)*b,e[15]=(a*h*r-u*o*r+u*i*l-n*h*l-a*i*d+n*o*d)*b,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,u=a+a,h=o+o,d=s*c,m=s*u,g=s*h,x=a*u,p=a*h,f=o*h,A=l*c,M=l*u,T=l*h,B=i.x,C=i.y,b=i.z;return r[0]=(1-(x+f))*B,r[1]=(m+T)*B,r[2]=(g-M)*B,r[3]=0,r[4]=(m-T)*C,r[5]=(1-(d+f))*C,r[6]=(p+A)*C,r[7]=0,r[8]=(g+M)*b,r[9]=(p-A)*b,r[10]=(1-(d+x))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Xr.set(r[0],r[1],r[2]).length();const a=Xr.set(r[4],r[5],r[6]).length(),o=Xr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Bn.copy(this);const c=1/s,u=1/a,h=1/o;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=u,Bn.elements[5]*=u,Bn.elements[6]*=u,Bn.elements[8]*=h,Bn.elements[9]*=h,Bn.elements[10]*=h,n.setFromRotationMatrix(Bn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=Si){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let m,g;if(o===Si)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Oo)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=Si){const l=this.elements,c=1/(n-e),u=1/(i-r),h=1/(a-s),d=(n+e)*c,m=(i+r)*u;let g,x;if(o===Si)g=(a+s)*h,x=-2*h;else if(o===Oo)g=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Xr=new N,Bn=new Ot,Dv=new N(0,0,0),Uv=new N(1,1,1),Oi=new N,Ga=new N,vn=new N,jd=new Ot,Zd=new Sa;class Ri{constructor(e=0,n=0,i=0,r=Ri.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(sn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-sn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return jd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jd,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Zd.setFromEuler(this),this.setFromQuaternion(Zd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ri.DEFAULT_ORDER="XYZ";class yg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Nv=0;const Jd=new N,$r=new Sa,di=new Ot,Ha=new N,qs=new N,Fv=new N,Ov=new Sa,Qd=new N(1,0,0),ef=new N(0,1,0),tf=new N(0,0,1),nf={type:"added"},Bv={type:"removed"},qr={type:"childadded",child:null},Wl={type:"childremoved",child:null};class fn extends ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nv++}),this.uuid=zs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fn.DEFAULT_UP.clone();const e=new N,n=new Ri,i=new Sa,r=new N(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ot},normalMatrix:{value:new Oe}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return $r.setFromAxisAngle(e,n),this.quaternion.multiply($r),this}rotateOnWorldAxis(e,n){return $r.setFromAxisAngle(e,n),this.quaternion.premultiply($r),this}rotateX(e){return this.rotateOnAxis(Qd,e)}rotateY(e){return this.rotateOnAxis(ef,e)}rotateZ(e){return this.rotateOnAxis(tf,e)}translateOnAxis(e,n){return Jd.copy(e).applyQuaternion(this.quaternion),this.position.add(Jd.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Qd,e)}translateY(e){return this.translateOnAxis(ef,e)}translateZ(e){return this.translateOnAxis(tf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ha.copy(e):Ha.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(qs,Ha,this.up):di.lookAt(Ha,qs,this.up),this.quaternion.setFromRotationMatrix(di),r&&(di.extractRotation(r.matrixWorld),$r.setFromRotationMatrix(di),this.quaternion.premultiply($r.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(nf),qr.child=e,this.dispatchEvent(qr),qr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Bv),Wl.child=e,this.dispatchEvent(Wl),Wl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(nf),qr.child=e,this.dispatchEvent(qr),qr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,e,Fv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,Ov,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}fn.DEFAULT_UP=new N(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const kn=new N,fi=new N,Xl=new N,pi=new N,Yr=new N,Kr=new N,rf=new N,$l=new N,ql=new N,Yl=new N;class Zn{constructor(e=new N,n=new N,i=new N){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),kn.subVectors(e,n),r.cross(kn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){kn.subVectors(r,n),fi.subVectors(i,n),Xl.subVectors(e,n);const a=kn.dot(kn),o=kn.dot(fi),l=kn.dot(Xl),c=fi.dot(fi),u=fi.dot(Xl),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,m=(c*l-o*u)*d,g=(a*u-o*l)*d;return s.set(1-m-g,g,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,pi.x),l.addScaledVector(a,pi.y),l.addScaledVector(o,pi.z),l)}static isFrontFacing(e,n,i,r){return kn.subVectors(i,n),fi.subVectors(e,n),kn.cross(fi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),kn.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Zn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Zn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Yr.subVectors(r,i),Kr.subVectors(s,i),$l.subVectors(e,i);const l=Yr.dot($l),c=Kr.dot($l);if(l<=0&&c<=0)return n.copy(i);ql.subVectors(e,r);const u=Yr.dot(ql),h=Kr.dot(ql);if(u>=0&&h<=u)return n.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),n.copy(i).addScaledVector(Yr,a);Yl.subVectors(e,s);const m=Yr.dot(Yl),g=Kr.dot(Yl);if(g>=0&&m<=g)return n.copy(s);const x=m*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),n.copy(i).addScaledVector(Kr,o);const p=u*g-m*h;if(p<=0&&h-u>=0&&m-g>=0)return rf.subVectors(s,r),o=(h-u)/(h-u+(m-g)),n.copy(r).addScaledVector(rf,o);const f=1/(p+x+d);return a=x*f,o=d*f,n.copy(i).addScaledVector(Yr,a).addScaledVector(Kr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ag={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},Va={h:0,s:0,l:0};function Kl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class et{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=ut.workingColorSpace){return this.r=e,this.g=n,this.b=i,ut.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=ut.workingColorSpace){if(e=Hu(e,1),n=sn(n,0,1),i=sn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Kl(a,s,e+1/3),this.g=Kl(a,s,e),this.b=Kl(a,s,e-1/3)}return ut.toWorkingColorSpace(this,r),this}setStyle(e,n=Kn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Kn){const i=Ag[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ps(e.r),this.g=ps(e.g),this.b=ps(e.b),this}copyLinearToSRGB(e){return this.r=Fl(e.r),this.g=Fl(e.g),this.b=Fl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kn){return ut.fromWorkingColorSpace(Jt.copy(this),e),Math.round(sn(Jt.r*255,0,255))*65536+Math.round(sn(Jt.g*255,0,255))*256+Math.round(sn(Jt.b*255,0,255))}getHexString(e=Kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ut.workingColorSpace){ut.fromWorkingColorSpace(Jt.copy(this),n);const i=Jt.r,r=Jt.g,s=Jt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=ut.workingColorSpace){return ut.fromWorkingColorSpace(Jt.copy(this),n),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=Kn){ut.fromWorkingColorSpace(Jt.copy(this),e);const n=Jt.r,i=Jt.g,r=Jt.b;return e!==Kn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Bi),this.setHSL(Bi.h+e,Bi.s+n,Bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Bi),e.getHSL(Va);const i=ta(Bi.h,Va.h,n),r=ta(Bi.s,Va.s,n),s=ta(Bi.l,Va.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new et;et.NAMES=Ag;let kv=0;class Ea extends ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kv++}),this.uuid=zs(),this.name="",this.type="Material",this.blending=ds,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ic,this.blendDst=Dc,this.blendEquation=mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=Io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zr,this.stencilZFail=zr,this.stencilZPass=zr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(i.blending=this.blending),this.side!==ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ic&&(i.blendSrc=this.blendSrc),this.blendDst!==Dc&&(i.blendDst=this.blendDst),this.blendEquation!==mr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Io&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==zr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==zr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Tg extends Ea{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=cg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nt=new N,Wa=new lt;class Un{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Vd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return xg("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Wa.fromBufferAttribute(this,n),Wa.applyMatrix3(e),this.setXY(n,Wa.x,Wa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix3(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix4(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyNormalMatrix(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.transformDirection(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=as(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=nn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=as(n,this.array)),n}setX(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=as(n,this.array)),n}setY(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=as(n,this.array)),n}setZ(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=as(n,this.array)),n}setW(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array),r=nn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array),r=nn(r,this.array),s=nn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vd&&(e.usage=this.usage),e}}class bg extends Un{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class wg extends Un{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Rr extends Un{constructor(e,n,i){super(new Float32Array(e),n,i)}}let zv=0;const Cn=new Ot,jl=new fn,jr=new N,xn=new Ma,Ys=new Ma,$t=new N;class Li extends ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zv++}),this.uuid=zs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vg(e)?wg:bg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Oe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,n,i){return Cn.makeTranslation(e,n,i),this.applyMatrix4(Cn),this}scale(e,n,i){return Cn.makeScale(e,n,i),this.applyMatrix4(Cn),this}lookAt(e){return jl.lookAt(e),jl.updateMatrix(),this.applyMatrix4(jl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jr).negate(),this.translate(jr.x,jr.y,jr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Rr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ma);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];xn.setFromBufferAttribute(s),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Ys.setFromBufferAttribute(o),this.morphTargetsRelative?($t.addVectors(xn.min,Ys.min),xn.expandByPoint($t),$t.addVectors(xn.max,Ys.max),xn.expandByPoint($t)):(xn.expandByPoint(Ys.min),xn.expandByPoint(Ys.max))}xn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)$t.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared($t));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)$t.fromBufferAttribute(o,c),l&&(jr.fromBufferAttribute(e,c),$t.add(jr)),r=Math.max(r,i.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Un(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let F=0;F<i.count;F++)o[F]=new N,l[F]=new N;const c=new N,u=new N,h=new N,d=new lt,m=new lt,g=new lt,x=new N,p=new N;function f(F,E,S){c.fromBufferAttribute(i,F),u.fromBufferAttribute(i,E),h.fromBufferAttribute(i,S),d.fromBufferAttribute(s,F),m.fromBufferAttribute(s,E),g.fromBufferAttribute(s,S),u.sub(c),h.sub(c),m.sub(d),g.sub(d);const P=1/(m.x*g.y-g.x*m.y);isFinite(P)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-m.y).multiplyScalar(P),p.copy(h).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(P),o[F].add(x),o[E].add(x),o[S].add(x),l[F].add(p),l[E].add(p),l[S].add(p))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let F=0,E=A.length;F<E;++F){const S=A[F],P=S.start,V=S.count;for(let k=P,q=P+V;k<q;k+=3)f(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const M=new N,T=new N,B=new N,C=new N;function b(F){B.fromBufferAttribute(r,F),C.copy(B);const E=o[F];M.copy(E),M.sub(B.multiplyScalar(B.dot(E))).normalize(),T.crossVectors(C,E);const P=T.dot(l[F])<0?-1:1;a.setXYZW(F,M.x,M.y,M.z,P)}for(let F=0,E=A.length;F<E;++F){const S=A[F],P=S.start,V=S.count;for(let k=P,q=P+V;k<q;k+=3)b(e.getX(k+0)),b(e.getX(k+1)),b(e.getX(k+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Un(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new N,s=new N,a=new N,o=new N,l=new N,c=new N,u=new N,h=new N;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),x=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,x),a.fromBufferAttribute(n,p),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)$t.fromBufferAttribute(e,n),$t.normalize(),e.setXYZ(n,$t.x,$t.y,$t.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let m=0,g=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?m=l[x]*o.data.stride+o.offset:m=l[x]*u;for(let f=0;f<u;f++)d[g++]=c[m++]}return new Un(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Li,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],m=e(d,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sf=new Ot,cr=new Eg,Xa=new dl,af=new N,Zr=new N,Jr=new N,Qr=new N,Zl=new N,$a=new N,qa=new lt,Ya=new lt,Ka=new lt,of=new N,lf=new N,cf=new N,ja=new N,Za=new N;class Mi extends fn{constructor(e=new Li,n=new Tg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){$a.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(Zl.fromBufferAttribute(h,e),a?$a.addScaledVector(Zl,u):$a.addScaledVector(Zl.sub(n),u))}n.add($a)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xa.copy(i.boundingSphere),Xa.applyMatrix4(s),cr.copy(e.ray).recast(e.near),!(Xa.containsPoint(cr.origin)===!1&&(cr.intersectSphere(Xa,af)===null||cr.origin.distanceToSquared(af)>(e.far-e.near)**2))&&(sf.copy(s).invert(),cr.copy(e.ray).applyMatrix4(sf),!(i.boundingBox!==null&&cr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,cr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){const p=d[g],f=a[p.materialIndex],A=Math.max(p.start,m.start),M=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let T=A,B=M;T<B;T+=3){const C=o.getX(T),b=o.getX(T+1),F=o.getX(T+2);r=Ja(this,f,e,i,c,u,h,C,b,F),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const g=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let p=g,f=x;p<f;p+=3){const A=o.getX(p),M=o.getX(p+1),T=o.getX(p+2);r=Ja(this,a,e,i,c,u,h,A,M,T),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){const p=d[g],f=a[p.materialIndex],A=Math.max(p.start,m.start),M=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let T=A,B=M;T<B;T+=3){const C=T,b=T+1,F=T+2;r=Ja(this,f,e,i,c,u,h,C,b,F),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const g=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=g,f=x;p<f;p+=3){const A=p,M=p+1,T=p+2;r=Ja(this,a,e,i,c,u,h,A,M,T),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function Gv(t,e,n,i,r,s,a,o){let l;if(e.side===hn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===ji,o),l===null)return null;Za.copy(o),Za.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Za);return c<n.near||c>n.far?null:{distance:c,point:Za.clone(),object:t}}function Ja(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Zr),t.getVertexPosition(l,Jr),t.getVertexPosition(c,Qr);const u=Gv(t,e,n,i,Zr,Jr,Qr,ja);if(u){r&&(qa.fromBufferAttribute(r,o),Ya.fromBufferAttribute(r,l),Ka.fromBufferAttribute(r,c),u.uv=Zn.getInterpolation(ja,Zr,Jr,Qr,qa,Ya,Ka,new lt)),s&&(qa.fromBufferAttribute(s,o),Ya.fromBufferAttribute(s,l),Ka.fromBufferAttribute(s,c),u.uv1=Zn.getInterpolation(ja,Zr,Jr,Qr,qa,Ya,Ka,new lt)),a&&(of.fromBufferAttribute(a,o),lf.fromBufferAttribute(a,l),cf.fromBufferAttribute(a,c),u.normal=Zn.getInterpolation(ja,Zr,Jr,Qr,of,lf,cf,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new N,materialIndex:0};Zn.getNormal(Zr,Jr,Qr,h.normal),u.face=h}return u}class ya extends Li{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,m=0;g("z","y","x",-1,-1,i,n,e,a,s,0),g("z","y","x",1,-1,i,n,-e,a,s,1),g("x","z","y",1,1,e,i,n,r,a,2),g("x","z","y",1,-1,e,i,-n,r,a,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Rr(c,3)),this.setAttribute("normal",new Rr(u,3)),this.setAttribute("uv",new Rr(h,2));function g(x,p,f,A,M,T,B,C,b,F,E){const S=T/b,P=B/F,V=T/2,k=B/2,q=C/2,$=b+1,W=F+1;let K=0,z=0;const fe=new N;for(let ve=0;ve<W;ve++){const Se=ve*P-k;for(let Ye=0;Ye<$;Ye++){const dt=Ye*S-V;fe[x]=dt*A,fe[p]=Se*M,fe[f]=q,c.push(fe.x,fe.y,fe.z),fe[x]=0,fe[p]=0,fe[f]=C>0?1:-1,u.push(fe.x,fe.y,fe.z),h.push(Ye/b),h.push(1-ve/F),K+=1}}for(let ve=0;ve<F;ve++)for(let Se=0;Se<b;Se++){const Ye=d+Se+$*ve,dt=d+Se+$*(ve+1),H=d+(Se+1)+$*(ve+1),J=d+(Se+1)+$*ve;l.push(Ye,dt,J),l.push(dt,H,J),z+=6}o.addGroup(m,z,E),m+=z,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ya(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ps(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function rn(t){const e={};for(let n=0;n<t.length;n++){const i=Ps(t[n]);for(const r in i)e[r]=i[r]}return e}function Hv(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Rg(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}const Vv={clone:Ps,merge:rn};var Wv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ji extends Ea{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wv,this.fragmentShader=Xv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ps(e.uniforms),this.uniformsGroups=Hv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Cg extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=Si}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ki=new N,uf=new lt,hf=new lt;class Pn extends Cg{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=oa*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ea*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return oa*2*Math.atan(Math.tan(ea*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ki.x,ki.y).multiplyScalar(-e/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ki.x,ki.y).multiplyScalar(-e/ki.z)}getViewSize(e,n){return this.getViewBounds(e,uf,hf),n.subVectors(hf,uf)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ea*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const es=-90,ts=1;class $v extends fn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Pn(es,ts,e,n);r.layers=this.layers,this.add(r);const s=new Pn(es,ts,e,n);s.layers=this.layers,this.add(s);const a=new Pn(es,ts,e,n);a.layers=this.layers,this.add(a);const o=new Pn(es,ts,e,n);o.layers=this.layers,this.add(o);const l=new Pn(es,ts,e,n);l.layers=this.layers,this.add(l);const c=new Pn(es,ts,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===Si)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Oo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(h,d,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Pg extends dn{constructor(e,n,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Ts,super(e,n,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qv extends Ir{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Pg(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:zn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ya(5,5,5),s=new Ji({name:"CubemapFromEquirect",uniforms:Ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:qi});s.uniforms.tEquirect.value=n;const a=new Mi(r,s),o=n.minFilter;return n.minFilter===Mr&&(n.minFilter=zn),new $v(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const Jl=new N,Yv=new N,Kv=new Oe;class fr{constructor(e=new N(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Jl.subVectors(i,n).cross(Yv.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Jl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Kv.getNormalMatrix(e),r=this.coplanarPoint(Jl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ur=new dl,Qa=new N;class Lg{constructor(e=new fr,n=new fr,i=new fr,r=new fr,s=new fr,a=new fr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Si){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],m=r[8],g=r[9],x=r[10],p=r[11],f=r[12],A=r[13],M=r[14],T=r[15];if(i[0].setComponents(l-s,d-c,p-m,T-f).normalize(),i[1].setComponents(l+s,d+c,p+m,T+f).normalize(),i[2].setComponents(l+a,d+u,p+g,T+A).normalize(),i[3].setComponents(l-a,d-u,p-g,T-A).normalize(),i[4].setComponents(l-o,d-h,p-x,T-M).normalize(),n===Si)i[5].setComponents(l+o,d+h,p+x,T+M).normalize();else if(n===Oo)i[5].setComponents(o,h,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ur)}intersectsSprite(e){return ur.center.set(0,0,0),ur.radius=.7071067811865476,ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(ur)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Qa.x=r.normal.x>0?e.max.x:e.min.x,Qa.y=r.normal.y>0?e.max.y:e.min.y,Qa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Qa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ig(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function jv(t){const e=new WeakMap;function n(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l._updateRange,d=l.updateRanges;if(t.bindBuffer(c,o),h.count===-1&&d.length===0&&t.bufferSubData(c,0,u),d.length!==0){for(let m=0,g=d.length;m<g;m++){const x=d[m];t.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}h.count!==-1&&(t.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class fl extends Li{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,h=e/o,d=n/l,m=[],g=[],x=[],p=[];for(let f=0;f<u;f++){const A=f*d-a;for(let M=0;M<c;M++){const T=M*h-s;g.push(T,-A,0),x.push(0,0,1),p.push(M/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let A=0;A<o;A++){const M=A+c*f,T=A+c*(f+1),B=A+1+c*(f+1),C=A+1+c*f;m.push(M,T,C),m.push(T,B,C)}this.setIndex(m),this.setAttribute("position",new Rr(g,3)),this.setAttribute("normal",new Rr(x,3)),this.setAttribute("uv",new Rr(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fl(e.width,e.height,e.widthSegments,e.heightSegments)}}var Zv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Qv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,e2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,t2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,n2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,i2=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,r2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,s2=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,a2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,o2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,l2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,c2=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,u2=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,h2=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,d2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,f2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,p2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,m2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,g2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,v2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,x2=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,S2=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,M2=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,E2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,y2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,A2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,T2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,b2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,w2="gl_FragColor = linearToOutputTexel( gl_FragColor );",R2=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,C2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,P2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,L2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,I2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,D2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,U2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,N2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,F2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,O2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,B2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,k2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,z2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,G2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,H2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,V2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,W2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,X2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,q2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Y2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,K2=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,j2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Z2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,J2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Q2=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ex=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ix=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ax=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ox=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ux=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,fx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,px=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_x=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Sx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ex=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ax=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,bx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Px=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ix=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,Dx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ux=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Nx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Fx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ox=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Bx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Xx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$x=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Kx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,i3=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,r3=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,s3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,a3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,o3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l3=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,c3=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,u3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,h3=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,m3=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,v3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,M3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,T3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,b3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,w3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,R3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,C3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:Zv,alphahash_pars_fragment:Jv,alphamap_fragment:Qv,alphamap_pars_fragment:e2,alphatest_fragment:t2,alphatest_pars_fragment:n2,aomap_fragment:i2,aomap_pars_fragment:r2,batching_pars_vertex:s2,batching_vertex:a2,begin_vertex:o2,beginnormal_vertex:l2,bsdfs:c2,iridescence_fragment:u2,bumpmap_pars_fragment:h2,clipping_planes_fragment:d2,clipping_planes_pars_fragment:f2,clipping_planes_pars_vertex:p2,clipping_planes_vertex:m2,color_fragment:g2,color_pars_fragment:_2,color_pars_vertex:v2,color_vertex:x2,common:S2,cube_uv_reflection_fragment:M2,defaultnormal_vertex:E2,displacementmap_pars_vertex:y2,displacementmap_vertex:A2,emissivemap_fragment:T2,emissivemap_pars_fragment:b2,colorspace_fragment:w2,colorspace_pars_fragment:R2,envmap_fragment:C2,envmap_common_pars_fragment:P2,envmap_pars_fragment:L2,envmap_pars_vertex:I2,envmap_physical_pars_fragment:V2,envmap_vertex:D2,fog_vertex:U2,fog_pars_vertex:N2,fog_fragment:F2,fog_pars_fragment:O2,gradientmap_pars_fragment:B2,lightmap_pars_fragment:k2,lights_lambert_fragment:z2,lights_lambert_pars_fragment:G2,lights_pars_begin:H2,lights_toon_fragment:W2,lights_toon_pars_fragment:X2,lights_phong_fragment:$2,lights_phong_pars_fragment:q2,lights_physical_fragment:Y2,lights_physical_pars_fragment:K2,lights_fragment_begin:j2,lights_fragment_maps:Z2,lights_fragment_end:J2,logdepthbuf_fragment:Q2,logdepthbuf_pars_fragment:ex,logdepthbuf_pars_vertex:tx,logdepthbuf_vertex:nx,map_fragment:ix,map_pars_fragment:rx,map_particle_fragment:sx,map_particle_pars_fragment:ax,metalnessmap_fragment:ox,metalnessmap_pars_fragment:lx,morphinstance_vertex:cx,morphcolor_vertex:ux,morphnormal_vertex:hx,morphtarget_pars_vertex:dx,morphtarget_vertex:fx,normal_fragment_begin:px,normal_fragment_maps:mx,normal_pars_fragment:gx,normal_pars_vertex:_x,normal_vertex:vx,normalmap_pars_fragment:xx,clearcoat_normal_fragment_begin:Sx,clearcoat_normal_fragment_maps:Mx,clearcoat_pars_fragment:Ex,iridescence_pars_fragment:yx,opaque_fragment:Ax,packing:Tx,premultiplied_alpha_fragment:bx,project_vertex:wx,dithering_fragment:Rx,dithering_pars_fragment:Cx,roughnessmap_fragment:Px,roughnessmap_pars_fragment:Lx,shadowmap_pars_fragment:Ix,shadowmap_pars_vertex:Dx,shadowmap_vertex:Ux,shadowmask_pars_fragment:Nx,skinbase_vertex:Fx,skinning_pars_vertex:Ox,skinning_vertex:Bx,skinnormal_vertex:kx,specularmap_fragment:zx,specularmap_pars_fragment:Gx,tonemapping_fragment:Hx,tonemapping_pars_fragment:Vx,transmission_fragment:Wx,transmission_pars_fragment:Xx,uv_pars_fragment:$x,uv_pars_vertex:qx,uv_vertex:Yx,worldpos_vertex:Kx,background_vert:jx,background_frag:Zx,backgroundCube_vert:Jx,backgroundCube_frag:Qx,cube_vert:e3,cube_frag:t3,depth_vert:n3,depth_frag:i3,distanceRGBA_vert:r3,distanceRGBA_frag:s3,equirect_vert:a3,equirect_frag:o3,linedashed_vert:l3,linedashed_frag:c3,meshbasic_vert:u3,meshbasic_frag:h3,meshlambert_vert:d3,meshlambert_frag:f3,meshmatcap_vert:p3,meshmatcap_frag:m3,meshnormal_vert:g3,meshnormal_frag:_3,meshphong_vert:v3,meshphong_frag:x3,meshphysical_vert:S3,meshphysical_frag:M3,meshtoon_vert:E3,meshtoon_frag:y3,points_vert:A3,points_frag:T3,shadow_vert:b3,shadow_frag:w3,sprite_vert:R3,sprite_frag:C3},re={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},jn={basic:{uniforms:rn([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:rn([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new et(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:rn([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:rn([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:rn([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new et(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:rn([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:rn([re.points,re.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:rn([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:rn([re.common,re.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:rn([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:rn([re.sprite,re.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:rn([re.common,re.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:rn([re.lights,re.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};jn.physical={uniforms:rn([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const eo={r:0,b:0,g:0},hr=new Ri,P3=new Ot;function L3(t,e,n,i,r,s,a){const o=new et(0);let l=s===!0?0:1,c,u,h=null,d=0,m=null;function g(A){let M=A.isScene===!0?A.background:null;return M&&M.isTexture&&(M=(A.backgroundBlurriness>0?n:e).get(M)),M}function x(A){let M=!1;const T=g(A);T===null?f(o,l):T&&T.isColor&&(f(T,1),M=!0);const B=t.xr.getEnvironmentBlendMode();B==="additive"?i.buffers.color.setClear(0,0,0,1,a):B==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function p(A,M){const T=g(M);T&&(T.isCubeTexture||T.mapping===cl)?(u===void 0&&(u=new Mi(new ya(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:Ps(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(B,C,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),hr.copy(M.backgroundRotation),hr.x*=-1,hr.y*=-1,hr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(P3.makeRotationFromEuler(hr)),u.material.toneMapped=ut.getTransfer(T.colorSpace)!==gt,(h!==T||d!==T.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,h=T,d=T.version,m=t.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Mi(new fl(2,2),new Ji({name:"BackgroundMaterial",uniforms:Ps(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ut.getTransfer(T.colorSpace)!==gt,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||d!==T.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,h=T,d=T.version,m=t.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function f(A,M){A.getRGB(eo,Rg(t)),i.buffers.color.setClear(eo.r,eo.g,eo.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(A,M=1){o.set(A),l=M,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,f(o,l)},render:x,addToRenderList:p}}function I3(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(S,P,V,k,q){let $=!1;const W=h(k,V,P);s!==W&&(s=W,c(s.object)),$=m(S,k,V,q),$&&g(S,k,V,q),q!==null&&e.update(q,t.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,T(S,P,V,k),q!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function u(S){return t.deleteVertexArray(S)}function h(S,P,V){const k=V.wireframe===!0;let q=i[S.id];q===void 0&&(q={},i[S.id]=q);let $=q[P.id];$===void 0&&($={},q[P.id]=$);let W=$[k];return W===void 0&&(W=d(l()),$[k]=W),W}function d(S){const P=[],V=[],k=[];for(let q=0;q<n;q++)P[q]=0,V[q]=0,k[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:V,attributeDivisors:k,object:S,attributes:{},index:null}}function m(S,P,V,k){const q=s.attributes,$=P.attributes;let W=0;const K=V.getAttributes();for(const z in K)if(K[z].location>=0){const ve=q[z];let Se=$[z];if(Se===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(Se=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(Se=S.instanceColor)),ve===void 0||ve.attribute!==Se||Se&&ve.data!==Se.data)return!0;W++}return s.attributesNum!==W||s.index!==k}function g(S,P,V,k){const q={},$=P.attributes;let W=0;const K=V.getAttributes();for(const z in K)if(K[z].location>=0){let ve=$[z];ve===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(ve=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(ve=S.instanceColor));const Se={};Se.attribute=ve,ve&&ve.data&&(Se.data=ve.data),q[z]=Se,W++}s.attributes=q,s.attributesNum=W,s.index=k}function x(){const S=s.newAttributes;for(let P=0,V=S.length;P<V;P++)S[P]=0}function p(S){f(S,0)}function f(S,P){const V=s.newAttributes,k=s.enabledAttributes,q=s.attributeDivisors;V[S]=1,k[S]===0&&(t.enableVertexAttribArray(S),k[S]=1),q[S]!==P&&(t.vertexAttribDivisor(S,P),q[S]=P)}function A(){const S=s.newAttributes,P=s.enabledAttributes;for(let V=0,k=P.length;V<k;V++)P[V]!==S[V]&&(t.disableVertexAttribArray(V),P[V]=0)}function M(S,P,V,k,q,$,W){W===!0?t.vertexAttribIPointer(S,P,V,q,$):t.vertexAttribPointer(S,P,V,k,q,$)}function T(S,P,V,k){x();const q=k.attributes,$=V.getAttributes(),W=P.defaultAttributeValues;for(const K in $){const z=$[K];if(z.location>=0){let fe=q[K];if(fe===void 0&&(K==="instanceMatrix"&&S.instanceMatrix&&(fe=S.instanceMatrix),K==="instanceColor"&&S.instanceColor&&(fe=S.instanceColor)),fe!==void 0){const ve=fe.normalized,Se=fe.itemSize,Ye=e.get(fe);if(Ye===void 0)continue;const dt=Ye.buffer,H=Ye.type,J=Ye.bytesPerElement,ge=H===t.INT||H===t.UNSIGNED_INT||fe.gpuType===hg;if(fe.isInterleavedBufferAttribute){const oe=fe.data,Ge=oe.stride,Be=fe.offset;if(oe.isInstancedInterleavedBuffer){for(let Je=0;Je<z.locationSize;Je++)f(z.location+Je,oe.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Je=0;Je<z.locationSize;Je++)p(z.location+Je);t.bindBuffer(t.ARRAY_BUFFER,dt);for(let Je=0;Je<z.locationSize;Je++)M(z.location+Je,Se/z.locationSize,H,ve,Ge*J,(Be+Se/z.locationSize*Je)*J,ge)}else{if(fe.isInstancedBufferAttribute){for(let oe=0;oe<z.locationSize;oe++)f(z.location+oe,fe.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let oe=0;oe<z.locationSize;oe++)p(z.location+oe);t.bindBuffer(t.ARRAY_BUFFER,dt);for(let oe=0;oe<z.locationSize;oe++)M(z.location+oe,Se/z.locationSize,H,ve,Se*J,Se/z.locationSize*oe*J,ge)}}else if(W!==void 0){const ve=W[K];if(ve!==void 0)switch(ve.length){case 2:t.vertexAttrib2fv(z.location,ve);break;case 3:t.vertexAttrib3fv(z.location,ve);break;case 4:t.vertexAttrib4fv(z.location,ve);break;default:t.vertexAttrib1fv(z.location,ve)}}}}A()}function B(){F();for(const S in i){const P=i[S];for(const V in P){const k=P[V];for(const q in k)u(k[q].object),delete k[q];delete P[V]}delete i[S]}}function C(S){if(i[S.id]===void 0)return;const P=i[S.id];for(const V in P){const k=P[V];for(const q in k)u(k[q].object),delete k[q];delete P[V]}delete i[S.id]}function b(S){for(const P in i){const V=i[P];if(V[S.id]===void 0)continue;const k=V[S.id];for(const q in k)u(k[q].object),delete k[q];delete V[S.id]}}function F(){E(),a=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:F,resetDefaultState:E,dispose:B,releaseStatesOfGeometry:C,releaseStatesOfProgram:b,initAttributes:x,enableAttribute:p,disableUnusedAttributes:A}}function D3(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function a(c,u,h){h!==0&&(t.drawArraysInstanced(i,c,u,h),n.update(u,i,h))}function o(c,u,h){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<h;m++)this.render(c[m],u[m]);else{d.multiDrawArraysWEBGL(i,c,0,u,0,h);let m=0;for(let g=0;g<h;g++)m+=u[g];n.update(m,i,1)}}function l(c,u,h,d){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)a(c[g],u[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x];for(let x=0;x<d.length;x++)n.update(g,i,d[x])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function U3(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==Jn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const b=C===ul&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Zi&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Hi&&!b)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),f=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),A=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=m>0,B=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:f,maxVaryings:A,maxFragmentUniforms:M,vertexTextures:T,maxSamples:B}}function N3(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new fr,o=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||i!==0||r;return r=d,i=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=u(h,d,0)},this.setState=function(h,d,m){const g=h.clippingPlanes,x=h.clipIntersection,p=h.clipShadows,f=t.get(h);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{const A=s?0:i,M=A*4;let T=f.clippingState||null;l.value=T,T=u(g,d,M,m);for(let B=0;B!==M;++B)T[B]=n[B];f.clippingState=T,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,m,g){const x=h!==null?h.length:0;let p=null;if(x!==0){if(p=l.value,g!==!0||p===null){const f=m+x*4,A=d.matrixWorldInverse;o.getNormalMatrix(A),(p===null||p.length<f)&&(p=new Float32Array(f));for(let M=0,T=m;M!==x;++M,T+=4)a.copy(h[M]).applyMatrix4(A,o),a.normal.toArray(p,T),p[T+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function F3(t){let e=new WeakMap;function n(a,o){return o===Uc?a.mapping=Ts:o===Nc&&(a.mapping=bs),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Uc||o===Nc)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new qv(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class O3 extends Cg{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ls=4,df=[.125,.215,.35,.446,.526,.582],gr=20,Ql=new O3,ff=new et;let ec=null,tc=0,nc=0,ic=!1;const pr=(1+Math.sqrt(5))/2,ns=1/pr,pf=[new N(-pr,ns,0),new N(pr,ns,0),new N(-ns,0,pr),new N(ns,0,pr),new N(0,pr,-ns),new N(0,pr,ns),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class mf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){ec=this._renderer.getRenderTarget(),tc=this._renderer.getActiveCubeFace(),nc=this._renderer.getActiveMipmapLevel(),ic=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_f(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ec,tc,nc),this._renderer.xr.enabled=ic,e.scissorTest=!1,to(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ts||e.mapping===bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ec=this._renderer.getRenderTarget(),tc=this._renderer.getActiveCubeFace(),nc=this._renderer.getActiveMipmapLevel(),ic=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:ul,format:Jn,colorSpace:ir,depthBuffer:!1},r=gf(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gf(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=B3(s)),this._blurMaterial=k3(s,e,n)}return r}_compileMaterial(e){const n=new Mi(this._lodPlanes[0],e);this._renderer.compile(n,Ql)}_sceneToCubeUV(e,n,i,r){const o=new Pn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(ff),u.toneMapping=Yi,u.autoClear=!1;const m=new Tg({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),g=new Mi(new ya,m);let x=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(ff),x=!0);for(let f=0;f<6;f++){const A=f%3;A===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):A===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const M=this._cubeSize;to(r,A*M,f>2?M:0,M,M),u.setRenderTarget(r),x&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ts||e.mapping===bs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=vf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_f());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Mi(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;to(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Ql)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=pf[(r-s-1)%pf.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Mi(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*gr-1),x=s/g,p=isFinite(s)?1+Math.floor(u*x):gr;p>gr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${gr}`);const f=[];let A=0;for(let b=0;b<gr;++b){const F=b/x,E=Math.exp(-F*F/2);f.push(E),b===0?A+=E:b<p&&(A+=2*E)}for(let b=0;b<f.length;b++)f[b]=f[b]/A;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-i;const T=this._sizeLods[r],B=3*T*(r>M-ls?r-M+ls:0),C=4*(this._cubeSize-T);to(n,B,C,3*T,2*T),l.setRenderTarget(n),l.render(h,Ql)}}function B3(t){const e=[],n=[],i=[];let r=t;const s=t-ls+1+df.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-ls?l=df[a-t+ls-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,x=3,p=2,f=1,A=new Float32Array(x*g*m),M=new Float32Array(p*g*m),T=new Float32Array(f*g*m);for(let C=0;C<m;C++){const b=C%3*2/3-1,F=C>2?0:-1,E=[b,F,0,b+2/3,F,0,b+2/3,F+1,0,b,F,0,b+2/3,F+1,0,b,F+1,0];A.set(E,x*g*C),M.set(d,p*g*C);const S=[C,C,C,C,C,C];T.set(S,f*g*C)}const B=new Li;B.setAttribute("position",new Un(A,x)),B.setAttribute("uv",new Un(M,p)),B.setAttribute("faceIndex",new Un(T,f)),e.push(B),r>ls&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function gf(t,e,n){const i=new Ir(t,e,n);return i.texture.mapping=cl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function to(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function k3(t,e,n){const i=new Float32Array(gr),r=new N(0,1,0);return new Ji({name:"SphericalGaussianBlur",defines:{n:gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Vu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function _f(){return new Ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function vf(){return new Ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Vu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function z3(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Uc||l===Nc,u=l===Ts||l===bs;if(c||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return n===null&&(n=new mf(t)),h=c?n.fromEquirectangular(o,h):n.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const m=o.image;return c&&m&&m.height>0||u&&m&&r(m)?(n===null&&(n=new mf(t)),h=c?n.fromEquirectangular(o):n.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function G3(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&xg("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function H3(t,e,n,i){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const x=d.morphAttributes[g];for(let p=0,f=x.length;p<f;p++)e.remove(x[p])}d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],t.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const x=m[g];for(let p=0,f=x.length;p<f;p++)e.update(x[p],t.ARRAY_BUFFER)}}function c(h){const d=[],m=h.index,g=h.attributes.position;let x=0;if(m!==null){const A=m.array;x=m.version;for(let M=0,T=A.length;M<T;M+=3){const B=A[M+0],C=A[M+1],b=A[M+2];d.push(B,C,C,b,b,B)}}else if(g!==void 0){const A=g.array;x=g.version;for(let M=0,T=A.length/3-1;M<T;M+=3){const B=M+0,C=M+1,b=M+2;d.push(B,C,C,b,b,B)}}else return;const p=new(vg(d)?wg:bg)(d,1);p.version=x;const f=s.get(h);f&&e.remove(f),s.set(h,p)}function u(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function V3(t,e,n){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,m){t.drawElements(i,m,s,d*a),n.update(m,i,1)}function c(d,m,g){g!==0&&(t.drawElementsInstanced(i,m,s,d*a,g),n.update(m,i,g))}function u(d,m,g){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let p=0;p<g;p++)this.render(d[p]/a,m[p]);else{x.multiDrawElementsWEBGL(i,m,0,s,d,0,g);let p=0;for(let f=0;f<g;f++)p+=m[f];n.update(p,i,1)}}function h(d,m,g,x){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<d.length;f++)c(d[f]/a,m[f],x[f]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,d,0,x,0,g);let f=0;for(let A=0;A<g;A++)f+=m[A];for(let A=0;A<x.length;A++)n.update(f,i,x[A])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function W3(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function X3(t,e,n){const i=new WeakMap,r=new Kt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let S=function(){F.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var m=S;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let T=0;g===!0&&(T=1),x===!0&&(T=2),p===!0&&(T=3);let B=o.attributes.position.count*T,C=1;B>e.maxTextureSize&&(C=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const b=new Float32Array(B*C*4*h),F=new Mg(b,B,C,h);F.type=Hi,F.needsUpdate=!0;const E=T*4;for(let P=0;P<h;P++){const V=f[P],k=A[P],q=M[P],$=B*C*4*P;for(let W=0;W<V.count;W++){const K=W*E;g===!0&&(r.fromBufferAttribute(V,W),b[$+K+0]=r.x,b[$+K+1]=r.y,b[$+K+2]=r.z,b[$+K+3]=0),x===!0&&(r.fromBufferAttribute(k,W),b[$+K+4]=r.x,b[$+K+5]=r.y,b[$+K+6]=r.z,b[$+K+7]=0),p===!0&&(r.fromBufferAttribute(q,W),b[$+K+8]=r.x,b[$+K+9]=r.y,b[$+K+10]=r.z,b[$+K+11]=q.itemSize===4?r.w:1)}}d={count:h,texture:F,size:new lt(B,C)},i.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const x=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function $3(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class Dg extends dn{constructor(e,n,i,r,s,a,o,l,c,u=fs){if(u!==fs&&u!==Cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===fs&&(i=ws),i===void 0&&u===Cs&&(i=Rs),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:In,this.minFilter=l!==void 0?l:In,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Ug=new dn,Ng=new Dg(1,1);Ng.compareFunction=_g;const Fg=new Mg,Og=new Lv,Bg=new Pg,xf=[],Sf=[],Mf=new Float32Array(16),Ef=new Float32Array(9),yf=new Float32Array(4);function Gs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=xf[r];if(s===void 0&&(s=new Float32Array(r),xf[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Gt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ht(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function pl(t,e){let n=Sf[e];n===void 0&&(n=new Int32Array(e),Sf[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function q3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Y3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Gt(n,e))return;t.uniform2fv(this.addr,e),Ht(n,e)}}function K3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Gt(n,e))return;t.uniform3fv(this.addr,e),Ht(n,e)}}function j3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Gt(n,e))return;t.uniform4fv(this.addr,e),Ht(n,e)}}function Z3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Gt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ht(n,e)}else{if(Gt(n,i))return;yf.set(i),t.uniformMatrix2fv(this.addr,!1,yf),Ht(n,i)}}function J3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Gt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ht(n,e)}else{if(Gt(n,i))return;Ef.set(i),t.uniformMatrix3fv(this.addr,!1,Ef),Ht(n,i)}}function Q3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Gt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ht(n,e)}else{if(Gt(n,i))return;Mf.set(i),t.uniformMatrix4fv(this.addr,!1,Mf),Ht(n,i)}}function eS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function tS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Gt(n,e))return;t.uniform2iv(this.addr,e),Ht(n,e)}}function nS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Gt(n,e))return;t.uniform3iv(this.addr,e),Ht(n,e)}}function iS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Gt(n,e))return;t.uniform4iv(this.addr,e),Ht(n,e)}}function rS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function sS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Gt(n,e))return;t.uniform2uiv(this.addr,e),Ht(n,e)}}function aS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Gt(n,e))return;t.uniform3uiv(this.addr,e),Ht(n,e)}}function oS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Gt(n,e))return;t.uniform4uiv(this.addr,e),Ht(n,e)}}function lS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?Ng:Ug;n.setTexture2D(e||s,r)}function cS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Og,r)}function uS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Bg,r)}function hS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Fg,r)}function dS(t){switch(t){case 5126:return q3;case 35664:return Y3;case 35665:return K3;case 35666:return j3;case 35674:return Z3;case 35675:return J3;case 35676:return Q3;case 5124:case 35670:return eS;case 35667:case 35671:return tS;case 35668:case 35672:return nS;case 35669:case 35673:return iS;case 5125:return rS;case 36294:return sS;case 36295:return aS;case 36296:return oS;case 35678:case 36198:case 36298:case 36306:case 35682:return lS;case 35679:case 36299:case 36307:return cS;case 35680:case 36300:case 36308:case 36293:return uS;case 36289:case 36303:case 36311:case 36292:return hS}}function fS(t,e){t.uniform1fv(this.addr,e)}function pS(t,e){const n=Gs(e,this.size,2);t.uniform2fv(this.addr,n)}function mS(t,e){const n=Gs(e,this.size,3);t.uniform3fv(this.addr,n)}function gS(t,e){const n=Gs(e,this.size,4);t.uniform4fv(this.addr,n)}function _S(t,e){const n=Gs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function vS(t,e){const n=Gs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function xS(t,e){const n=Gs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function SS(t,e){t.uniform1iv(this.addr,e)}function MS(t,e){t.uniform2iv(this.addr,e)}function ES(t,e){t.uniform3iv(this.addr,e)}function yS(t,e){t.uniform4iv(this.addr,e)}function AS(t,e){t.uniform1uiv(this.addr,e)}function TS(t,e){t.uniform2uiv(this.addr,e)}function bS(t,e){t.uniform3uiv(this.addr,e)}function wS(t,e){t.uniform4uiv(this.addr,e)}function RS(t,e,n){const i=this.cache,r=e.length,s=pl(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||Ug,s[a])}function CS(t,e,n){const i=this.cache,r=e.length,s=pl(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Og,s[a])}function PS(t,e,n){const i=this.cache,r=e.length,s=pl(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Bg,s[a])}function LS(t,e,n){const i=this.cache,r=e.length,s=pl(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Fg,s[a])}function IS(t){switch(t){case 5126:return fS;case 35664:return pS;case 35665:return mS;case 35666:return gS;case 35674:return _S;case 35675:return vS;case 35676:return xS;case 5124:case 35670:return SS;case 35667:case 35671:return MS;case 35668:case 35672:return ES;case 35669:case 35673:return yS;case 5125:return AS;case 36294:return TS;case 36295:return bS;case 36296:return wS;case 35678:case 36198:case 36298:case 36306:case 35682:return RS;case 35679:case 36299:case 36307:return CS;case 35680:case 36300:case 36308:case 36293:return PS;case 36289:case 36303:case 36311:case 36292:return LS}}class DS{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=dS(n.type)}}class US{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=IS(n.type)}}class NS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const rc=/(\w+)(\])?(\[|\.)?/g;function Af(t,e){t.seq.push(e),t.map[e.id]=e}function FS(t,e,n){const i=t.name,r=i.length;for(rc.lastIndex=0;;){const s=rc.exec(i),a=rc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Af(n,c===void 0?new DS(o,t,e):new US(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new NS(o),Af(n,h)),n=h}}}class po{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);FS(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Tf(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const OS=37297;let BS=0;function kS(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function zS(t){const e=ut.getPrimaries(ut.workingColorSpace),n=ut.getPrimaries(t);let i;switch(e===n?i="":e===Fo&&n===No?i="LinearDisplayP3ToLinearSRGB":e===No&&n===Fo&&(i="LinearSRGBToLinearDisplayP3"),t){case ir:case hl:return[i,"LinearTransferOETF"];case Kn:case Gu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function bf(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+kS(t.getShaderSource(e),a)}else return r}function GS(t,e){const n=zS(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function HS(t,e){let n;switch(e){case D1:n="Linear";break;case U1:n="Reinhard";break;case N1:n="OptimizedCineon";break;case F1:n="ACESFilmic";break;case B1:n="AgX";break;case k1:n="Neutral";break;case O1:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function VS(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(js).join(`
`)}function WS(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function XS(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function js(t){return t!==""}function wf(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rf(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $S=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bc(t){return t.replace($S,YS)}const qS=new Map;function YS(t,e){let n=Fe[e];if(n===void 0){const i=qS.get(e);if(i!==void 0)n=Fe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Bc(n)}const KS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cf(t){return t.replace(KS,jS)}function jS(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Pf(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ZS(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===lg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===s1?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===mi&&(e="SHADOWMAP_TYPE_VSM"),e}function JS(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ts:case bs:e="ENVMAP_TYPE_CUBE";break;case cl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function QS(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case bs:e="ENVMAP_MODE_REFRACTION";break}return e}function eM(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case cg:e="ENVMAP_BLENDING_MULTIPLY";break;case L1:e="ENVMAP_BLENDING_MIX";break;case I1:e="ENVMAP_BLENDING_ADD";break}return e}function tM(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function nM(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=ZS(n),c=JS(n),u=QS(n),h=eM(n),d=tM(n),m=VS(n),g=WS(s),x=r.createProgram();let p,f,A=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(js).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(js).join(`
`),f.length>0&&(f+=`
`)):(p=[Pf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(js).join(`
`),f=[Pf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Yi?"#define TONE_MAPPING":"",n.toneMapping!==Yi?Fe.tonemapping_pars_fragment:"",n.toneMapping!==Yi?HS("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,GS("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(js).join(`
`)),a=Bc(a),a=wf(a,n),a=Rf(a,n),o=Bc(o),o=wf(o,n),o=Rf(o,n),a=Cf(a),o=Cf(o),n.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",n.glslVersion===Wd?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Wd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=A+p+a,T=A+f+o,B=Tf(r,r.VERTEX_SHADER,M),C=Tf(r,r.FRAGMENT_SHADER,T);r.attachShader(x,B),r.attachShader(x,C),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function b(P){if(t.debug.checkShaderErrors){const V=r.getProgramInfoLog(x).trim(),k=r.getShaderInfoLog(B).trim(),q=r.getShaderInfoLog(C).trim();let $=!0,W=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,B,C);else{const K=bf(r,B,"vertex"),z=bf(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+V+`
`+K+`
`+z)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(k===""||q==="")&&(W=!1);W&&(P.diagnostics={runnable:$,programLog:V,vertexShader:{log:k,prefix:p},fragmentShader:{log:q,prefix:f}})}r.deleteShader(B),r.deleteShader(C),F=new po(r,x),E=XS(r,x)}let F;this.getUniforms=function(){return F===void 0&&b(this),F};let E;this.getAttributes=function(){return E===void 0&&b(this),E};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(x,OS)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=BS++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=B,this.fragmentShader=C,this}let iM=0;class rM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new sM(e),n.set(e,i)),i}}class sM{constructor(e){this.id=iM++,this.code=e,this.usedTimes=0}}function aM(t,e,n,i,r,s,a){const o=new yg,l=new rM,c=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return c.add(E),E===0?"uv":`uv${E}`}function p(E,S,P,V,k){const q=V.fog,$=k.geometry,W=E.isMeshStandardMaterial?V.environment:null,K=(E.isMeshStandardMaterial?n:e).get(E.envMap||W),z=K&&K.mapping===cl?K.image.height:null,fe=g[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const ve=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Se=ve!==void 0?ve.length:0;let Ye=0;$.morphAttributes.position!==void 0&&(Ye=1),$.morphAttributes.normal!==void 0&&(Ye=2),$.morphAttributes.color!==void 0&&(Ye=3);let dt,H,J,ge;if(fe){const ft=jn[fe];dt=ft.vertexShader,H=ft.fragmentShader}else dt=E.vertexShader,H=E.fragmentShader,l.update(E),J=l.getVertexShaderID(E),ge=l.getFragmentShaderID(E);const oe=t.getRenderTarget(),Ge=k.isInstancedMesh===!0,Be=k.isBatchedMesh===!0,Je=!!E.map,R=!!E.matcap,Ke=!!K,Xe=!!E.aoMap,St=!!E.lightMap,Re=!!E.bumpMap,nt=!!E.normalMap,He=!!E.displacementMap,Ne=!!E.emissiveMap,Ut=!!E.metalnessMap,y=!!E.roughnessMap,_=E.anisotropy>0,O=E.clearcoat>0,Y=E.dispersion>0,j=E.iridescence>0,Z=E.sheen>0,be=E.transmission>0,se=_&&!!E.anisotropyMap,ae=O&&!!E.clearcoatMap,ke=O&&!!E.clearcoatNormalMap,Q=O&&!!E.clearcoatRoughnessMap,Ee=j&&!!E.iridescenceMap,Ve=j&&!!E.iridescenceThicknessMap,Le=Z&&!!E.sheenColorMap,ce=Z&&!!E.sheenRoughnessMap,ze=!!E.specularMap,$e=!!E.specularColorMap,wt=!!E.specularIntensityMap,w=be&&!!E.transmissionMap,ue=be&&!!E.thicknessMap,G=!!E.gradientMap,X=!!E.alphaMap,ie=E.alphaTest>0,Ie=!!E.alphaHash,st=!!E.extensions;let Rt=Yi;E.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Rt=t.toneMapping);const Wt={shaderID:fe,shaderType:E.type,shaderName:E.name,vertexShader:dt,fragmentShader:H,defines:E.defines,customVertexShaderID:J,customFragmentShaderID:ge,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Be,batchingColor:Be&&k._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&k.instanceColor!==null,instancingMorph:Ge&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:oe===null?t.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:ir,alphaToCoverage:!!E.alphaToCoverage,map:Je,matcap:R,envMap:Ke,envMapMode:Ke&&K.mapping,envMapCubeUVHeight:z,aoMap:Xe,lightMap:St,bumpMap:Re,normalMap:nt,displacementMap:d&&He,emissiveMap:Ne,normalMapObjectSpace:nt&&E.normalMapType===ev,normalMapTangentSpace:nt&&E.normalMapType===Q1,metalnessMap:Ut,roughnessMap:y,anisotropy:_,anisotropyMap:se,clearcoat:O,clearcoatMap:ae,clearcoatNormalMap:ke,clearcoatRoughnessMap:Q,dispersion:Y,iridescence:j,iridescenceMap:Ee,iridescenceThicknessMap:Ve,sheen:Z,sheenColorMap:Le,sheenRoughnessMap:ce,specularMap:ze,specularColorMap:$e,specularIntensityMap:wt,transmission:be,transmissionMap:w,thicknessMap:ue,gradientMap:G,opaque:E.transparent===!1&&E.blending===ds&&E.alphaToCoverage===!1,alphaMap:X,alphaTest:ie,alphaHash:Ie,combine:E.combine,mapUv:Je&&x(E.map.channel),aoMapUv:Xe&&x(E.aoMap.channel),lightMapUv:St&&x(E.lightMap.channel),bumpMapUv:Re&&x(E.bumpMap.channel),normalMapUv:nt&&x(E.normalMap.channel),displacementMapUv:He&&x(E.displacementMap.channel),emissiveMapUv:Ne&&x(E.emissiveMap.channel),metalnessMapUv:Ut&&x(E.metalnessMap.channel),roughnessMapUv:y&&x(E.roughnessMap.channel),anisotropyMapUv:se&&x(E.anisotropyMap.channel),clearcoatMapUv:ae&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:ke&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ve&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:ce&&x(E.sheenRoughnessMap.channel),specularMapUv:ze&&x(E.specularMap.channel),specularColorMapUv:$e&&x(E.specularColorMap.channel),specularIntensityMapUv:wt&&x(E.specularIntensityMap.channel),transmissionMapUv:w&&x(E.transmissionMap.channel),thicknessMapUv:ue&&x(E.thicknessMap.channel),alphaMapUv:X&&x(E.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(nt||_),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!$.attributes.uv&&(Je||X),fog:!!q,useFog:E.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:k.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Ye,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:Rt,decodeVideoTexture:Je&&E.map.isVideoTexture===!0&&ut.getTransfer(E.map.colorSpace)===gt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===vi,flipSided:E.side===hn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:st&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:st&&E.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Wt.vertexUv1s=c.has(1),Wt.vertexUv2s=c.has(2),Wt.vertexUv3s=c.has(3),c.clear(),Wt}function f(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const P in E.defines)S.push(P),S.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(A(S,E),M(S,E),S.push(t.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function A(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function M(E,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.doubleSided&&o.enable(10),S.flipSided&&o.enable(11),S.useDepthPacking&&o.enable(12),S.dithering&&o.enable(13),S.transmission&&o.enable(14),S.sheen&&o.enable(15),S.opaque&&o.enable(16),S.pointsUvs&&o.enable(17),S.decodeVideoTexture&&o.enable(18),S.alphaToCoverage&&o.enable(19),E.push(o.mask)}function T(E){const S=g[E.type];let P;if(S){const V=jn[S];P=Vv.clone(V.uniforms)}else P=E.uniforms;return P}function B(E,S){let P;for(let V=0,k=u.length;V<k;V++){const q=u[V];if(q.cacheKey===S){P=q,++P.usedTimes;break}}return P===void 0&&(P=new nM(t,S,E,s),u.push(P)),P}function C(E){if(--E.usedTimes===0){const S=u.indexOf(E);u[S]=u[u.length-1],u.pop(),E.destroy()}}function b(E){l.remove(E)}function F(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:T,acquireProgram:B,releaseProgram:C,releaseShaderCache:b,programs:u,dispose:F}}function oM(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function lM(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Lf(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function If(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(h,d,m,g,x,p){let f=t[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:m,groupOrder:g,renderOrder:h.renderOrder,z:x,group:p},t[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=x,f.group=p),e++,f}function o(h,d,m,g,x,p){const f=a(h,d,m,g,x,p);m.transmission>0?i.push(f):m.transparent===!0?r.push(f):n.push(f)}function l(h,d,m,g,x,p){const f=a(h,d,m,g,x,p);m.transmission>0?i.unshift(f):m.transparent===!0?r.unshift(f):n.unshift(f)}function c(h,d){n.length>1&&n.sort(h||lM),i.length>1&&i.sort(d||Lf),r.length>1&&r.sort(d||Lf)}function u(){for(let h=e,d=t.length;h<d;h++){const m=t[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function cM(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new If,t.set(i,[a])):r>=s.length?(a=new If,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function uM(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new N,color:new et};break;case"SpotLight":n={position:new N,direction:new N,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new N,color:new et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new N,skyColor:new et,groundColor:new et};break;case"RectAreaLight":n={color:new et,position:new N,halfWidth:new N,halfHeight:new N};break}return t[e.id]=n,n}}}function hM(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let dM=0;function fM(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function pM(t){const e=new uM,n=hM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const r=new N,s=new Ot,a=new Ot;function o(c){let u=0,h=0,d=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let m=0,g=0,x=0,p=0,f=0,A=0,M=0,T=0,B=0,C=0,b=0;c.sort(fM);for(let E=0,S=c.length;E<S;E++){const P=c[E],V=P.color,k=P.intensity,q=P.distance,$=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=V.r*k,h+=V.g*k,d+=V.b*k;else if(P.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(P.sh.coefficients[W],k);b++}else if(P.isDirectionalLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const K=P.shadow,z=n.get(P);z.shadowBias=K.bias,z.shadowNormalBias=K.normalBias,z.shadowRadius=K.radius,z.shadowMapSize=K.mapSize,i.directionalShadow[m]=z,i.directionalShadowMap[m]=$,i.directionalShadowMatrix[m]=P.shadow.matrix,A++}i.directional[m]=W,m++}else if(P.isSpotLight){const W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(V).multiplyScalar(k),W.distance=q,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,i.spot[x]=W;const K=P.shadow;if(P.map&&(i.spotLightMap[B]=P.map,B++,K.updateMatrices(P),P.castShadow&&C++),i.spotLightMatrix[x]=K.matrix,P.castShadow){const z=n.get(P);z.shadowBias=K.bias,z.shadowNormalBias=K.normalBias,z.shadowRadius=K.radius,z.shadowMapSize=K.mapSize,i.spotShadow[x]=z,i.spotShadowMap[x]=$,T++}x++}else if(P.isRectAreaLight){const W=e.get(P);W.color.copy(V).multiplyScalar(k),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),i.rectArea[p]=W,p++}else if(P.isPointLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const K=P.shadow,z=n.get(P);z.shadowBias=K.bias,z.shadowNormalBias=K.normalBias,z.shadowRadius=K.radius,z.shadowMapSize=K.mapSize,z.shadowCameraNear=K.camera.near,z.shadowCameraFar=K.camera.far,i.pointShadow[g]=z,i.pointShadowMap[g]=$,i.pointShadowMatrix[g]=P.shadow.matrix,M++}i.point[g]=W,g++}else if(P.isHemisphereLight){const W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(k),W.groundColor.copy(P.groundColor).multiplyScalar(k),i.hemi[f]=W,f++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const F=i.hash;(F.directionalLength!==m||F.pointLength!==g||F.spotLength!==x||F.rectAreaLength!==p||F.hemiLength!==f||F.numDirectionalShadows!==A||F.numPointShadows!==M||F.numSpotShadows!==T||F.numSpotMaps!==B||F.numLightProbes!==b)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=p,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=T+B-C,i.spotLightMap.length=B,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=b,F.directionalLength=m,F.pointLength=g,F.spotLength=x,F.rectAreaLength=p,F.hemiLength=f,F.numDirectionalShadows=A,F.numPointShadows=M,F.numSpotShadows=T,F.numSpotMaps=B,F.numLightProbes=b,i.version=dM++)}function l(c,u){let h=0,d=0,m=0,g=0,x=0;const p=u.matrixWorldInverse;for(let f=0,A=c.length;f<A;f++){const M=c[f];if(M.isDirectionalLight){const T=i.directional[h];T.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(p),h++}else if(M.isSpotLight){const T=i.spot[m];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(p),m++}else if(M.isRectAreaLight){const T=i.rectArea[g];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(p),a.identity(),s.copy(M.matrixWorld),s.premultiply(p),a.extractRotation(s),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const T=i.point[d];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){const T=i.hemi[x];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(p),x++}}}return{setup:o,setupView:l,state:i}}function Df(t){const e=new pM(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function a(u){i.push(u)}function o(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function mM(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Df(t),e.set(r,[o])):s>=a.length?(o=new Df(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class gM extends Ea{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Z1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _M extends Ea{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function SM(t,e,n){let i=new Lg;const r=new lt,s=new lt,a=new Kt,o=new gM({depthPacking:J1}),l=new _M,c={},u=n.maxTextureSize,h={[ji]:hn,[hn]:ji,[vi]:vi},d=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:vM,fragmentShader:xM}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new Li;g.setAttribute("position",new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Mi(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lg;let f=this.type;this.render=function(C,b,F){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const E=t.getRenderTarget(),S=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),V=t.state;V.setBlending(qi),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const k=f!==mi&&this.type===mi,q=f===mi&&this.type!==mi;for(let $=0,W=C.length;$<W;$++){const K=C[$],z=K.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const fe=z.getFrameExtents();if(r.multiply(fe),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/fe.x),r.x=s.x*fe.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/fe.y),r.y=s.y*fe.y,z.mapSize.y=s.y)),z.map===null||k===!0||q===!0){const Se=this.type!==mi?{minFilter:In,magFilter:In}:{};z.map!==null&&z.map.dispose(),z.map=new Ir(r.x,r.y,Se),z.map.texture.name=K.name+".shadowMap",z.camera.updateProjectionMatrix()}t.setRenderTarget(z.map),t.clear();const ve=z.getViewportCount();for(let Se=0;Se<ve;Se++){const Ye=z.getViewport(Se);a.set(s.x*Ye.x,s.y*Ye.y,s.x*Ye.z,s.y*Ye.w),V.viewport(a),z.updateMatrices(K,Se),i=z.getFrustum(),T(b,F,z.camera,K,this.type)}z.isPointLightShadow!==!0&&this.type===mi&&A(z,F),z.needsUpdate=!1}f=this.type,p.needsUpdate=!1,t.setRenderTarget(E,S,P)};function A(C,b){const F=e.update(x);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ir(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(b,null,F,d,x,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(b,null,F,m,x,null)}function M(C,b,F,E){let S=null;const P=F.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)S=P;else if(S=F.isPointLight===!0?l:o,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const V=S.uuid,k=b.uuid;let q=c[V];q===void 0&&(q={},c[V]=q);let $=q[k];$===void 0&&($=S.clone(),q[k]=$,b.addEventListener("dispose",B)),S=$}if(S.visible=b.visible,S.wireframe=b.wireframe,E===mi?S.side=b.shadowSide!==null?b.shadowSide:b.side:S.side=b.shadowSide!==null?b.shadowSide:h[b.side],S.alphaMap=b.alphaMap,S.alphaTest=b.alphaTest,S.map=b.map,S.clipShadows=b.clipShadows,S.clippingPlanes=b.clippingPlanes,S.clipIntersection=b.clipIntersection,S.displacementMap=b.displacementMap,S.displacementScale=b.displacementScale,S.displacementBias=b.displacementBias,S.wireframeLinewidth=b.wireframeLinewidth,S.linewidth=b.linewidth,F.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const V=t.properties.get(S);V.light=F}return S}function T(C,b,F,E,S){if(C.visible===!1)return;if(C.layers.test(b.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===mi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,C.matrixWorld);const k=e.update(C),q=C.material;if(Array.isArray(q)){const $=k.groups;for(let W=0,K=$.length;W<K;W++){const z=$[W],fe=q[z.materialIndex];if(fe&&fe.visible){const ve=M(C,fe,E,S);C.onBeforeShadow(t,C,b,F,k,ve,z),t.renderBufferDirect(F,null,k,ve,C,z),C.onAfterShadow(t,C,b,F,k,ve,z)}}}else if(q.visible){const $=M(C,q,E,S);C.onBeforeShadow(t,C,b,F,k,$,null),t.renderBufferDirect(F,null,k,$,C,null),C.onAfterShadow(t,C,b,F,k,$,null)}}const V=C.children;for(let k=0,q=V.length;k<q;k++)T(V[k],b,F,E,S)}function B(C){C.target.removeEventListener("dispose",B);for(const F in c){const E=c[F],S=C.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}function MM(t){function e(){let w=!1;const ue=new Kt;let G=null;const X=new Kt(0,0,0,0);return{setMask:function(ie){G!==ie&&!w&&(t.colorMask(ie,ie,ie,ie),G=ie)},setLocked:function(ie){w=ie},setClear:function(ie,Ie,st,Rt,Wt){Wt===!0&&(ie*=Rt,Ie*=Rt,st*=Rt),ue.set(ie,Ie,st,Rt),X.equals(ue)===!1&&(t.clearColor(ie,Ie,st,Rt),X.copy(ue))},reset:function(){w=!1,G=null,X.set(-1,0,0,0)}}}function n(){let w=!1,ue=null,G=null,X=null;return{setTest:function(ie){ie?ge(t.DEPTH_TEST):oe(t.DEPTH_TEST)},setMask:function(ie){ue!==ie&&!w&&(t.depthMask(ie),ue=ie)},setFunc:function(ie){if(G!==ie){switch(ie){case A1:t.depthFunc(t.NEVER);break;case T1:t.depthFunc(t.ALWAYS);break;case b1:t.depthFunc(t.LESS);break;case Io:t.depthFunc(t.LEQUAL);break;case w1:t.depthFunc(t.EQUAL);break;case R1:t.depthFunc(t.GEQUAL);break;case C1:t.depthFunc(t.GREATER);break;case P1:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}G=ie}},setLocked:function(ie){w=ie},setClear:function(ie){X!==ie&&(t.clearDepth(ie),X=ie)},reset:function(){w=!1,ue=null,G=null,X=null}}}function i(){let w=!1,ue=null,G=null,X=null,ie=null,Ie=null,st=null,Rt=null,Wt=null;return{setTest:function(ft){w||(ft?ge(t.STENCIL_TEST):oe(t.STENCIL_TEST))},setMask:function(ft){ue!==ft&&!w&&(t.stencilMask(ft),ue=ft)},setFunc:function(ft,Xn,$n){(G!==ft||X!==Xn||ie!==$n)&&(t.stencilFunc(ft,Xn,$n),G=ft,X=Xn,ie=$n)},setOp:function(ft,Xn,$n){(Ie!==ft||st!==Xn||Rt!==$n)&&(t.stencilOp(ft,Xn,$n),Ie=ft,st=Xn,Rt=$n)},setLocked:function(ft){w=ft},setClear:function(ft){Wt!==ft&&(t.clearStencil(ft),Wt=ft)},reset:function(){w=!1,ue=null,G=null,X=null,ie=null,Ie=null,st=null,Rt=null,Wt=null}}}const r=new e,s=new n,a=new i,o=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,d=[],m=null,g=!1,x=null,p=null,f=null,A=null,M=null,T=null,B=null,C=new et(0,0,0),b=0,F=!1,E=null,S=null,P=null,V=null,k=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,W=0;const K=t.getParameter(t.VERSION);K.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(K)[1]),$=W>=1):K.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),$=W>=2);let z=null,fe={};const ve=t.getParameter(t.SCISSOR_BOX),Se=t.getParameter(t.VIEWPORT),Ye=new Kt().fromArray(ve),dt=new Kt().fromArray(Se);function H(w,ue,G,X){const ie=new Uint8Array(4),Ie=t.createTexture();t.bindTexture(w,Ie),t.texParameteri(w,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(w,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let st=0;st<G;st++)w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY?t.texImage3D(ue,0,t.RGBA,1,1,X,0,t.RGBA,t.UNSIGNED_BYTE,ie):t.texImage2D(ue+st,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ie);return Ie}const J={};J[t.TEXTURE_2D]=H(t.TEXTURE_2D,t.TEXTURE_2D,1),J[t.TEXTURE_CUBE_MAP]=H(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[t.TEXTURE_2D_ARRAY]=H(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),J[t.TEXTURE_3D]=H(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),ge(t.DEPTH_TEST),s.setFunc(Io),Re(!1),nt(fd),ge(t.CULL_FACE),Xe(qi);function ge(w){c[w]!==!0&&(t.enable(w),c[w]=!0)}function oe(w){c[w]!==!1&&(t.disable(w),c[w]=!1)}function Ge(w,ue){return u[w]!==ue?(t.bindFramebuffer(w,ue),u[w]=ue,w===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=ue),w===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=ue),!0):!1}function Be(w,ue){let G=d,X=!1;if(w){G=h.get(ue),G===void 0&&(G=[],h.set(ue,G));const ie=w.textures;if(G.length!==ie.length||G[0]!==t.COLOR_ATTACHMENT0){for(let Ie=0,st=ie.length;Ie<st;Ie++)G[Ie]=t.COLOR_ATTACHMENT0+Ie;G.length=ie.length,X=!0}}else G[0]!==t.BACK&&(G[0]=t.BACK,X=!0);X&&t.drawBuffers(G)}function Je(w){return m!==w?(t.useProgram(w),m=w,!0):!1}const R={[mr]:t.FUNC_ADD,[o1]:t.FUNC_SUBTRACT,[l1]:t.FUNC_REVERSE_SUBTRACT};R[c1]=t.MIN,R[u1]=t.MAX;const Ke={[h1]:t.ZERO,[d1]:t.ONE,[f1]:t.SRC_COLOR,[Ic]:t.SRC_ALPHA,[x1]:t.SRC_ALPHA_SATURATE,[_1]:t.DST_COLOR,[m1]:t.DST_ALPHA,[p1]:t.ONE_MINUS_SRC_COLOR,[Dc]:t.ONE_MINUS_SRC_ALPHA,[v1]:t.ONE_MINUS_DST_COLOR,[g1]:t.ONE_MINUS_DST_ALPHA,[S1]:t.CONSTANT_COLOR,[M1]:t.ONE_MINUS_CONSTANT_COLOR,[E1]:t.CONSTANT_ALPHA,[y1]:t.ONE_MINUS_CONSTANT_ALPHA};function Xe(w,ue,G,X,ie,Ie,st,Rt,Wt,ft){if(w===qi){g===!0&&(oe(t.BLEND),g=!1);return}if(g===!1&&(ge(t.BLEND),g=!0),w!==a1){if(w!==x||ft!==F){if((p!==mr||M!==mr)&&(t.blendEquation(t.FUNC_ADD),p=mr,M=mr),ft)switch(w){case ds:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Lc:t.blendFunc(t.ONE,t.ONE);break;case pd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case md:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}else switch(w){case ds:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Lc:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case pd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case md:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}f=null,A=null,T=null,B=null,C.set(0,0,0),b=0,x=w,F=ft}return}ie=ie||ue,Ie=Ie||G,st=st||X,(ue!==p||ie!==M)&&(t.blendEquationSeparate(R[ue],R[ie]),p=ue,M=ie),(G!==f||X!==A||Ie!==T||st!==B)&&(t.blendFuncSeparate(Ke[G],Ke[X],Ke[Ie],Ke[st]),f=G,A=X,T=Ie,B=st),(Rt.equals(C)===!1||Wt!==b)&&(t.blendColor(Rt.r,Rt.g,Rt.b,Wt),C.copy(Rt),b=Wt),x=w,F=!1}function St(w,ue){w.side===vi?oe(t.CULL_FACE):ge(t.CULL_FACE);let G=w.side===hn;ue&&(G=!G),Re(G),w.blending===ds&&w.transparent===!1?Xe(qi):Xe(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),s.setFunc(w.depthFunc),s.setTest(w.depthTest),s.setMask(w.depthWrite),r.setMask(w.colorWrite);const X=w.stencilWrite;a.setTest(X),X&&(a.setMask(w.stencilWriteMask),a.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),a.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),Ne(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?ge(t.SAMPLE_ALPHA_TO_COVERAGE):oe(t.SAMPLE_ALPHA_TO_COVERAGE)}function Re(w){E!==w&&(w?t.frontFace(t.CW):t.frontFace(t.CCW),E=w)}function nt(w){w!==i1?(ge(t.CULL_FACE),w!==S&&(w===fd?t.cullFace(t.BACK):w===r1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):oe(t.CULL_FACE),S=w}function He(w){w!==P&&($&&t.lineWidth(w),P=w)}function Ne(w,ue,G){w?(ge(t.POLYGON_OFFSET_FILL),(V!==ue||k!==G)&&(t.polygonOffset(ue,G),V=ue,k=G)):oe(t.POLYGON_OFFSET_FILL)}function Ut(w){w?ge(t.SCISSOR_TEST):oe(t.SCISSOR_TEST)}function y(w){w===void 0&&(w=t.TEXTURE0+q-1),z!==w&&(t.activeTexture(w),z=w)}function _(w,ue,G){G===void 0&&(z===null?G=t.TEXTURE0+q-1:G=z);let X=fe[G];X===void 0&&(X={type:void 0,texture:void 0},fe[G]=X),(X.type!==w||X.texture!==ue)&&(z!==G&&(t.activeTexture(G),z=G),t.bindTexture(w,ue||J[w]),X.type=w,X.texture=ue)}function O(){const w=fe[z];w!==void 0&&w.type!==void 0&&(t.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function Y(){try{t.compressedTexImage2D.apply(t,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function j(){try{t.compressedTexImage3D.apply(t,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Z(){try{t.texSubImage2D.apply(t,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function be(){try{t.texSubImage3D.apply(t,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function se(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ae(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ke(){try{t.texStorage2D.apply(t,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Q(){try{t.texStorage3D.apply(t,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Ee(){try{t.texImage2D.apply(t,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Ve(){try{t.texImage3D.apply(t,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Le(w){Ye.equals(w)===!1&&(t.scissor(w.x,w.y,w.z,w.w),Ye.copy(w))}function ce(w){dt.equals(w)===!1&&(t.viewport(w.x,w.y,w.z,w.w),dt.copy(w))}function ze(w,ue){let G=l.get(ue);G===void 0&&(G=new WeakMap,l.set(ue,G));let X=G.get(w);X===void 0&&(X=t.getUniformBlockIndex(ue,w.name),G.set(w,X))}function $e(w,ue){const X=l.get(ue).get(w);o.get(ue)!==X&&(t.uniformBlockBinding(ue,X,w.__bindingPointIndex),o.set(ue,X))}function wt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},z=null,fe={},u={},h=new WeakMap,d=[],m=null,g=!1,x=null,p=null,f=null,A=null,M=null,T=null,B=null,C=new et(0,0,0),b=0,F=!1,E=null,S=null,P=null,V=null,k=null,Ye.set(0,0,t.canvas.width,t.canvas.height),dt.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:ge,disable:oe,bindFramebuffer:Ge,drawBuffers:Be,useProgram:Je,setBlending:Xe,setMaterial:St,setFlipSided:Re,setCullFace:nt,setLineWidth:He,setPolygonOffset:Ne,setScissorTest:Ut,activeTexture:y,bindTexture:_,unbindTexture:O,compressedTexImage2D:Y,compressedTexImage3D:j,texImage2D:Ee,texImage3D:Ve,updateUBOMapping:ze,uniformBlockBinding:$e,texStorage2D:ke,texStorage3D:Q,texSubImage2D:Z,texSubImage3D:be,compressedTexSubImage2D:se,compressedTexSubImage3D:ae,scissor:Le,viewport:ce,reset:wt}}function EM(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new lt,u=new WeakMap;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(y,_){return m?new OffscreenCanvas(y,_):Bo("canvas")}function x(y,_,O){let Y=1;const j=Ut(y);if((j.width>O||j.height>O)&&(Y=O/Math.max(j.width,j.height)),Y<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const Z=Math.floor(Y*j.width),be=Math.floor(Y*j.height);h===void 0&&(h=g(Z,be));const se=_?g(Z,be):h;return se.width=Z,se.height=be,se.getContext("2d").drawImage(y,0,0,Z,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+Z+"x"+be+")."),se}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),y;return y}function p(y){return y.generateMipmaps&&y.minFilter!==In&&y.minFilter!==zn}function f(y){t.generateMipmap(y)}function A(y,_,O,Y,j=!1){if(y!==null){if(t[y]!==void 0)return t[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let Z=_;if(_===t.RED&&(O===t.FLOAT&&(Z=t.R32F),O===t.HALF_FLOAT&&(Z=t.R16F),O===t.UNSIGNED_BYTE&&(Z=t.R8)),_===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&(Z=t.R8UI),O===t.UNSIGNED_SHORT&&(Z=t.R16UI),O===t.UNSIGNED_INT&&(Z=t.R32UI),O===t.BYTE&&(Z=t.R8I),O===t.SHORT&&(Z=t.R16I),O===t.INT&&(Z=t.R32I)),_===t.RG&&(O===t.FLOAT&&(Z=t.RG32F),O===t.HALF_FLOAT&&(Z=t.RG16F),O===t.UNSIGNED_BYTE&&(Z=t.RG8)),_===t.RG_INTEGER&&(O===t.UNSIGNED_BYTE&&(Z=t.RG8UI),O===t.UNSIGNED_SHORT&&(Z=t.RG16UI),O===t.UNSIGNED_INT&&(Z=t.RG32UI),O===t.BYTE&&(Z=t.RG8I),O===t.SHORT&&(Z=t.RG16I),O===t.INT&&(Z=t.RG32I)),_===t.RGB&&O===t.UNSIGNED_INT_5_9_9_9_REV&&(Z=t.RGB9_E5),_===t.RGBA){const be=j?Uo:ut.getTransfer(Y);O===t.FLOAT&&(Z=t.RGBA32F),O===t.HALF_FLOAT&&(Z=t.RGBA16F),O===t.UNSIGNED_BYTE&&(Z=be===gt?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT_4_4_4_4&&(Z=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&(Z=t.RGB5_A1)}return(Z===t.R16F||Z===t.R32F||Z===t.RG16F||Z===t.RG32F||Z===t.RGBA16F||Z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function M(y,_){let O;return y?_===null||_===ws||_===Rs?O=t.DEPTH24_STENCIL8:_===Hi?O=t.DEPTH32F_STENCIL8:_===Do&&(O=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ws||_===Rs?O=t.DEPTH_COMPONENT24:_===Hi?O=t.DEPTH_COMPONENT32F:_===Do&&(O=t.DEPTH_COMPONENT16),O}function T(y,_){return p(y)===!0||y.isFramebufferTexture&&y.minFilter!==In&&y.minFilter!==zn?Math.log2(Math.max(_.width,_.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?_.mipmaps.length:1}function B(y){const _=y.target;_.removeEventListener("dispose",B),b(_),_.isVideoTexture&&u.delete(_)}function C(y){const _=y.target;_.removeEventListener("dispose",C),E(_)}function b(y){const _=i.get(y);if(_.__webglInit===void 0)return;const O=y.source,Y=d.get(O);if(Y){const j=Y[_.__cacheKey];j.usedTimes--,j.usedTimes===0&&F(y),Object.keys(Y).length===0&&d.delete(O)}i.remove(y)}function F(y){const _=i.get(y);t.deleteTexture(_.__webglTexture);const O=y.source,Y=d.get(O);delete Y[_.__cacheKey],a.memory.textures--}function E(y){const _=i.get(y);if(y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(_.__webglFramebuffer[Y]))for(let j=0;j<_.__webglFramebuffer[Y].length;j++)t.deleteFramebuffer(_.__webglFramebuffer[Y][j]);else t.deleteFramebuffer(_.__webglFramebuffer[Y]);_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer[Y])}else{if(Array.isArray(_.__webglFramebuffer))for(let Y=0;Y<_.__webglFramebuffer.length;Y++)t.deleteFramebuffer(_.__webglFramebuffer[Y]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&t.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Y=0;Y<_.__webglColorRenderbuffer.length;Y++)_.__webglColorRenderbuffer[Y]&&t.deleteRenderbuffer(_.__webglColorRenderbuffer[Y]);_.__webglDepthRenderbuffer&&t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const O=y.textures;for(let Y=0,j=O.length;Y<j;Y++){const Z=i.get(O[Y]);Z.__webglTexture&&(t.deleteTexture(Z.__webglTexture),a.memory.textures--),i.remove(O[Y])}i.remove(y)}let S=0;function P(){S=0}function V(){const y=S;return y>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),S+=1,y}function k(y){const _=[];return _.push(y.wrapS),_.push(y.wrapT),_.push(y.wrapR||0),_.push(y.magFilter),_.push(y.minFilter),_.push(y.anisotropy),_.push(y.internalFormat),_.push(y.format),_.push(y.type),_.push(y.generateMipmaps),_.push(y.premultiplyAlpha),_.push(y.flipY),_.push(y.unpackAlignment),_.push(y.colorSpace),_.join()}function q(y,_){const O=i.get(y);if(y.isVideoTexture&&He(y),y.isRenderTargetTexture===!1&&y.version>0&&O.__version!==y.version){const Y=y.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{dt(O,y,_);return}}n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+_)}function $(y,_){const O=i.get(y);if(y.version>0&&O.__version!==y.version){dt(O,y,_);return}n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+_)}function W(y,_){const O=i.get(y);if(y.version>0&&O.__version!==y.version){dt(O,y,_);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+_)}function K(y,_){const O=i.get(y);if(y.version>0&&O.__version!==y.version){H(O,y,_);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+_)}const z={[Fc]:t.REPEAT,[Sr]:t.CLAMP_TO_EDGE,[Oc]:t.MIRRORED_REPEAT},fe={[In]:t.NEAREST,[z1]:t.NEAREST_MIPMAP_NEAREST,[Ua]:t.NEAREST_MIPMAP_LINEAR,[zn]:t.LINEAR,[Cl]:t.LINEAR_MIPMAP_NEAREST,[Mr]:t.LINEAR_MIPMAP_LINEAR},ve={[tv]:t.NEVER,[ov]:t.ALWAYS,[nv]:t.LESS,[_g]:t.LEQUAL,[iv]:t.EQUAL,[av]:t.GEQUAL,[rv]:t.GREATER,[sv]:t.NOTEQUAL};function Se(y,_){if(_.type===Hi&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===zn||_.magFilter===Cl||_.magFilter===Ua||_.magFilter===Mr||_.minFilter===zn||_.minFilter===Cl||_.minFilter===Ua||_.minFilter===Mr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(y,t.TEXTURE_WRAP_S,z[_.wrapS]),t.texParameteri(y,t.TEXTURE_WRAP_T,z[_.wrapT]),(y===t.TEXTURE_3D||y===t.TEXTURE_2D_ARRAY)&&t.texParameteri(y,t.TEXTURE_WRAP_R,z[_.wrapR]),t.texParameteri(y,t.TEXTURE_MAG_FILTER,fe[_.magFilter]),t.texParameteri(y,t.TEXTURE_MIN_FILTER,fe[_.minFilter]),_.compareFunction&&(t.texParameteri(y,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(y,t.TEXTURE_COMPARE_FUNC,ve[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===In||_.minFilter!==Ua&&_.minFilter!==Mr||_.type===Hi&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");t.texParameterf(y,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Ye(y,_){let O=!1;y.__webglInit===void 0&&(y.__webglInit=!0,_.addEventListener("dispose",B));const Y=_.source;let j=d.get(Y);j===void 0&&(j={},d.set(Y,j));const Z=k(_);if(Z!==y.__cacheKey){j[Z]===void 0&&(j[Z]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,O=!0),j[Z].usedTimes++;const be=j[y.__cacheKey];be!==void 0&&(j[y.__cacheKey].usedTimes--,be.usedTimes===0&&F(_)),y.__cacheKey=Z,y.__webglTexture=j[Z].texture}return O}function dt(y,_,O){let Y=t.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Y=t.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Y=t.TEXTURE_3D);const j=Ye(y,_),Z=_.source;n.bindTexture(Y,y.__webglTexture,t.TEXTURE0+O);const be=i.get(Z);if(Z.version!==be.__version||j===!0){n.activeTexture(t.TEXTURE0+O);const se=ut.getPrimaries(ut.workingColorSpace),ae=_.colorSpace===Gi?null:ut.getPrimaries(_.colorSpace),ke=_.colorSpace===Gi||se===ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let Q=x(_.image,!1,r.maxTextureSize);Q=Ne(_,Q);const Ee=s.convert(_.format,_.colorSpace),Ve=s.convert(_.type);let Le=A(_.internalFormat,Ee,Ve,_.colorSpace,_.isVideoTexture);Se(Y,_);let ce;const ze=_.mipmaps,$e=_.isVideoTexture!==!0,wt=be.__version===void 0||j===!0,w=Z.dataReady,ue=T(_,Q);if(_.isDepthTexture)Le=M(_.format===Cs,_.type),wt&&($e?n.texStorage2D(t.TEXTURE_2D,1,Le,Q.width,Q.height):n.texImage2D(t.TEXTURE_2D,0,Le,Q.width,Q.height,0,Ee,Ve,null));else if(_.isDataTexture)if(ze.length>0){$e&&wt&&n.texStorage2D(t.TEXTURE_2D,ue,Le,ze[0].width,ze[0].height);for(let G=0,X=ze.length;G<X;G++)ce=ze[G],$e?w&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,ce.width,ce.height,Ee,Ve,ce.data):n.texImage2D(t.TEXTURE_2D,G,Le,ce.width,ce.height,0,Ee,Ve,ce.data);_.generateMipmaps=!1}else $e?(wt&&n.texStorage2D(t.TEXTURE_2D,ue,Le,Q.width,Q.height),w&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Q.width,Q.height,Ee,Ve,Q.data)):n.texImage2D(t.TEXTURE_2D,0,Le,Q.width,Q.height,0,Ee,Ve,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){$e&&wt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,Le,ze[0].width,ze[0].height,Q.depth);for(let G=0,X=ze.length;G<X;G++)if(ce=ze[G],_.format!==Jn)if(Ee!==null)if($e){if(w)if(_.layerUpdates.size>0){for(const ie of _.layerUpdates){const Ie=ce.width*ce.height;n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,ie,ce.width,ce.height,1,Ee,ce.data.slice(Ie*ie,Ie*(ie+1)),0,0)}_.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,0,ce.width,ce.height,Q.depth,Ee,ce.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,G,Le,ce.width,ce.height,Q.depth,0,ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?w&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,0,ce.width,ce.height,Q.depth,Ee,Ve,ce.data):n.texImage3D(t.TEXTURE_2D_ARRAY,G,Le,ce.width,ce.height,Q.depth,0,Ee,Ve,ce.data)}else{$e&&wt&&n.texStorage2D(t.TEXTURE_2D,ue,Le,ze[0].width,ze[0].height);for(let G=0,X=ze.length;G<X;G++)ce=ze[G],_.format!==Jn?Ee!==null?$e?w&&n.compressedTexSubImage2D(t.TEXTURE_2D,G,0,0,ce.width,ce.height,Ee,ce.data):n.compressedTexImage2D(t.TEXTURE_2D,G,Le,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?w&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,ce.width,ce.height,Ee,Ve,ce.data):n.texImage2D(t.TEXTURE_2D,G,Le,ce.width,ce.height,0,Ee,Ve,ce.data)}else if(_.isDataArrayTexture)if($e){if(wt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,Le,Q.width,Q.height,Q.depth),w)if(_.layerUpdates.size>0){let G;switch(Ve){case t.UNSIGNED_BYTE:switch(Ee){case t.ALPHA:G=1;break;case t.LUMINANCE:G=1;break;case t.LUMINANCE_ALPHA:G=2;break;case t.RGB:G=3;break;case t.RGBA:G=4;break;default:throw new Error(`Unknown texel size for format ${Ee}.`)}break;case t.UNSIGNED_SHORT_4_4_4_4:case t.UNSIGNED_SHORT_5_5_5_1:case t.UNSIGNED_SHORT_5_6_5:G=1;break;default:throw new Error(`Unknown texel size for type ${Ve}.`)}const X=Q.width*Q.height*G;for(const ie of _.layerUpdates)n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ie,Q.width,Q.height,1,Ee,Ve,Q.data.slice(X*ie,X*(ie+1)));_.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,Ee,Ve,Q.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Le,Q.width,Q.height,Q.depth,0,Ee,Ve,Q.data);else if(_.isData3DTexture)$e?(wt&&n.texStorage3D(t.TEXTURE_3D,ue,Le,Q.width,Q.height,Q.depth),w&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,Ee,Ve,Q.data)):n.texImage3D(t.TEXTURE_3D,0,Le,Q.width,Q.height,Q.depth,0,Ee,Ve,Q.data);else if(_.isFramebufferTexture){if(wt)if($e)n.texStorage2D(t.TEXTURE_2D,ue,Le,Q.width,Q.height);else{let G=Q.width,X=Q.height;for(let ie=0;ie<ue;ie++)n.texImage2D(t.TEXTURE_2D,ie,Le,G,X,0,Ee,Ve,null),G>>=1,X>>=1}}else if(ze.length>0){if($e&&wt){const G=Ut(ze[0]);n.texStorage2D(t.TEXTURE_2D,ue,Le,G.width,G.height)}for(let G=0,X=ze.length;G<X;G++)ce=ze[G],$e?w&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,Ee,Ve,ce):n.texImage2D(t.TEXTURE_2D,G,Le,Ee,Ve,ce);_.generateMipmaps=!1}else if($e){if(wt){const G=Ut(Q);n.texStorage2D(t.TEXTURE_2D,ue,Le,G.width,G.height)}w&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ee,Ve,Q)}else n.texImage2D(t.TEXTURE_2D,0,Le,Ee,Ve,Q);p(_)&&f(Y),be.__version=Z.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function H(y,_,O){if(_.image.length!==6)return;const Y=Ye(y,_),j=_.source;n.bindTexture(t.TEXTURE_CUBE_MAP,y.__webglTexture,t.TEXTURE0+O);const Z=i.get(j);if(j.version!==Z.__version||Y===!0){n.activeTexture(t.TEXTURE0+O);const be=ut.getPrimaries(ut.workingColorSpace),se=_.colorSpace===Gi?null:ut.getPrimaries(_.colorSpace),ae=_.colorSpace===Gi||be===se?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);const ke=_.isCompressedTexture||_.image[0].isCompressedTexture,Q=_.image[0]&&_.image[0].isDataTexture,Ee=[];for(let X=0;X<6;X++)!ke&&!Q?Ee[X]=x(_.image[X],!0,r.maxCubemapSize):Ee[X]=Q?_.image[X].image:_.image[X],Ee[X]=Ne(_,Ee[X]);const Ve=Ee[0],Le=s.convert(_.format,_.colorSpace),ce=s.convert(_.type),ze=A(_.internalFormat,Le,ce,_.colorSpace),$e=_.isVideoTexture!==!0,wt=Z.__version===void 0||Y===!0,w=j.dataReady;let ue=T(_,Ve);Se(t.TEXTURE_CUBE_MAP,_);let G;if(ke){$e&&wt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ue,ze,Ve.width,Ve.height);for(let X=0;X<6;X++){G=Ee[X].mipmaps;for(let ie=0;ie<G.length;ie++){const Ie=G[ie];_.format!==Jn?Le!==null?$e?w&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie,0,0,Ie.width,Ie.height,Le,Ie.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie,ze,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?w&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie,0,0,Ie.width,Ie.height,Le,ce,Ie.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie,ze,Ie.width,Ie.height,0,Le,ce,Ie.data)}}}else{if(G=_.mipmaps,$e&&wt){G.length>0&&ue++;const X=Ut(Ee[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ue,ze,X.width,X.height)}for(let X=0;X<6;X++)if(Q){$e?w&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Ee[X].width,Ee[X].height,Le,ce,Ee[X].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,ze,Ee[X].width,Ee[X].height,0,Le,ce,Ee[X].data);for(let ie=0;ie<G.length;ie++){const st=G[ie].image[X].image;$e?w&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie+1,0,0,st.width,st.height,Le,ce,st.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie+1,ze,st.width,st.height,0,Le,ce,st.data)}}else{$e?w&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Le,ce,Ee[X]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,ze,Le,ce,Ee[X]);for(let ie=0;ie<G.length;ie++){const Ie=G[ie];$e?w&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie+1,0,0,Le,ce,Ie.image[X]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie+1,ze,Le,ce,Ie.image[X])}}}p(_)&&f(t.TEXTURE_CUBE_MAP),Z.__version=j.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function J(y,_,O,Y,j,Z){const be=s.convert(O.format,O.colorSpace),se=s.convert(O.type),ae=A(O.internalFormat,be,se,O.colorSpace);if(!i.get(_).__hasExternalTextures){const Q=Math.max(1,_.width>>Z),Ee=Math.max(1,_.height>>Z);j===t.TEXTURE_3D||j===t.TEXTURE_2D_ARRAY?n.texImage3D(j,Z,ae,Q,Ee,_.depth,0,be,se,null):n.texImage2D(j,Z,ae,Q,Ee,0,be,se,null)}n.bindFramebuffer(t.FRAMEBUFFER,y),nt(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Y,j,i.get(O).__webglTexture,0,Re(_)):(j===t.TEXTURE_2D||j>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Y,j,i.get(O).__webglTexture,Z),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ge(y,_,O){if(t.bindRenderbuffer(t.RENDERBUFFER,y),_.depthBuffer){const Y=_.depthTexture,j=Y&&Y.isDepthTexture?Y.type:null,Z=M(_.stencilBuffer,j),be=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,se=Re(_);nt(_)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,se,Z,_.width,_.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,se,Z,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,Z,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,be,t.RENDERBUFFER,y)}else{const Y=_.textures;for(let j=0;j<Y.length;j++){const Z=Y[j],be=s.convert(Z.format,Z.colorSpace),se=s.convert(Z.type),ae=A(Z.internalFormat,be,se,Z.colorSpace),ke=Re(_);O&&nt(_)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ke,ae,_.width,_.height):nt(_)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ke,ae,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,ae,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function oe(y,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,y),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),q(_.depthTexture,0);const Y=i.get(_.depthTexture).__webglTexture,j=Re(_);if(_.depthTexture.format===fs)nt(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Y,0,j):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Y,0);else if(_.depthTexture.format===Cs)nt(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Y,0,j):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Ge(y){const _=i.get(y),O=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!_.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");oe(_.__webglFramebuffer,y)}else if(O){_.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[Y]),_.__webglDepthbuffer[Y]=t.createRenderbuffer(),ge(_.__webglDepthbuffer[Y],y,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=t.createRenderbuffer(),ge(_.__webglDepthbuffer,y,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Be(y,_,O){const Y=i.get(y);_!==void 0&&J(Y.__webglFramebuffer,y,y.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&Ge(y)}function Je(y){const _=y.texture,O=i.get(y),Y=i.get(_);y.addEventListener("dispose",C);const j=y.textures,Z=y.isWebGLCubeRenderTarget===!0,be=j.length>1;if(be||(Y.__webglTexture===void 0&&(Y.__webglTexture=t.createTexture()),Y.__version=_.version,a.memory.textures++),Z){O.__webglFramebuffer=[];for(let se=0;se<6;se++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[se]=[];for(let ae=0;ae<_.mipmaps.length;ae++)O.__webglFramebuffer[se][ae]=t.createFramebuffer()}else O.__webglFramebuffer[se]=t.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let se=0;se<_.mipmaps.length;se++)O.__webglFramebuffer[se]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(be)for(let se=0,ae=j.length;se<ae;se++){const ke=i.get(j[se]);ke.__webglTexture===void 0&&(ke.__webglTexture=t.createTexture(),a.memory.textures++)}if(y.samples>0&&nt(y)===!1){O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let se=0;se<j.length;se++){const ae=j[se];O.__webglColorRenderbuffer[se]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[se]);const ke=s.convert(ae.format,ae.colorSpace),Q=s.convert(ae.type),Ee=A(ae.internalFormat,ke,Q,ae.colorSpace,y.isXRRenderTarget===!0),Ve=Re(y);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ve,Ee,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+se,t.RENDERBUFFER,O.__webglColorRenderbuffer[se])}t.bindRenderbuffer(t.RENDERBUFFER,null),y.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),ge(O.__webglDepthRenderbuffer,y,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Z){n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture),Se(t.TEXTURE_CUBE_MAP,_);for(let se=0;se<6;se++)if(_.mipmaps&&_.mipmaps.length>0)for(let ae=0;ae<_.mipmaps.length;ae++)J(O.__webglFramebuffer[se][ae],y,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+se,ae);else J(O.__webglFramebuffer[se],y,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);p(_)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(be){for(let se=0,ae=j.length;se<ae;se++){const ke=j[se],Q=i.get(ke);n.bindTexture(t.TEXTURE_2D,Q.__webglTexture),Se(t.TEXTURE_2D,ke),J(O.__webglFramebuffer,y,ke,t.COLOR_ATTACHMENT0+se,t.TEXTURE_2D,0),p(ke)&&f(t.TEXTURE_2D)}n.unbindTexture()}else{let se=t.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(se=y.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(se,Y.__webglTexture),Se(se,_),_.mipmaps&&_.mipmaps.length>0)for(let ae=0;ae<_.mipmaps.length;ae++)J(O.__webglFramebuffer[ae],y,_,t.COLOR_ATTACHMENT0,se,ae);else J(O.__webglFramebuffer,y,_,t.COLOR_ATTACHMENT0,se,0);p(_)&&f(se),n.unbindTexture()}y.depthBuffer&&Ge(y)}function R(y){const _=y.textures;for(let O=0,Y=_.length;O<Y;O++){const j=_[O];if(p(j)){const Z=y.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,be=i.get(j).__webglTexture;n.bindTexture(Z,be),f(Z),n.unbindTexture()}}}const Ke=[],Xe=[];function St(y){if(y.samples>0){if(nt(y)===!1){const _=y.textures,O=y.width,Y=y.height;let j=t.COLOR_BUFFER_BIT;const Z=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,be=i.get(y),se=_.length>1;if(se)for(let ae=0;ae<_.length;ae++)n.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let ae=0;ae<_.length;ae++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(j|=t.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(j|=t.STENCIL_BUFFER_BIT)),se){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,be.__webglColorRenderbuffer[ae]);const ke=i.get(_[ae]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ke,0)}t.blitFramebuffer(0,0,O,Y,0,0,O,Y,j,t.NEAREST),l===!0&&(Ke.length=0,Xe.length=0,Ke.push(t.COLOR_ATTACHMENT0+ae),y.depthBuffer&&y.resolveDepthBuffer===!1&&(Ke.push(Z),Xe.push(Z),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Xe)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ke))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),se)for(let ae=0;ae<_.length;ae++){n.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.RENDERBUFFER,be.__webglColorRenderbuffer[ae]);const ke=i.get(_[ae]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.TEXTURE_2D,ke,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const _=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_])}}}function Re(y){return Math.min(r.maxSamples,y.samples)}function nt(y){const _=i.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function He(y){const _=a.render.frame;u.get(y)!==_&&(u.set(y,_),y.update())}function Ne(y,_){const O=y.colorSpace,Y=y.format,j=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||O!==ir&&O!==Gi&&(ut.getTransfer(O)===gt?(Y!==Jn||j!==Zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),_}function Ut(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=P,this.setTexture2D=q,this.setTexture2DArray=$,this.setTexture3D=W,this.setTextureCube=K,this.rebindTextures=Be,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=R,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=J,this.useMultisampledRTT=nt}function yM(t,e){function n(i,r=Gi){let s;const a=ut.getTransfer(r);if(i===Zi)return t.UNSIGNED_BYTE;if(i===dg)return t.UNSIGNED_SHORT_4_4_4_4;if(i===fg)return t.UNSIGNED_SHORT_5_5_5_1;if(i===V1)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===G1)return t.BYTE;if(i===H1)return t.SHORT;if(i===Do)return t.UNSIGNED_SHORT;if(i===hg)return t.INT;if(i===ws)return t.UNSIGNED_INT;if(i===Hi)return t.FLOAT;if(i===ul)return t.HALF_FLOAT;if(i===W1)return t.ALPHA;if(i===X1)return t.RGB;if(i===Jn)return t.RGBA;if(i===$1)return t.LUMINANCE;if(i===q1)return t.LUMINANCE_ALPHA;if(i===fs)return t.DEPTH_COMPONENT;if(i===Cs)return t.DEPTH_STENCIL;if(i===Y1)return t.RED;if(i===pg)return t.RED_INTEGER;if(i===K1)return t.RG;if(i===mg)return t.RG_INTEGER;if(i===gg)return t.RGBA_INTEGER;if(i===Pl||i===Ll||i===Il||i===Dl)if(a===gt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Pl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ll)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Il)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Dl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Pl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ll)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Il)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Dl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===gd||i===_d||i===vd||i===xd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===gd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_d)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===vd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Sd||i===Md||i===Ed)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Sd||i===Md)return a===gt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ed)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===yd||i===Ad||i===Td||i===bd||i===wd||i===Rd||i===Cd||i===Pd||i===Ld||i===Id||i===Dd||i===Ud||i===Nd||i===Fd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===yd)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ad)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Td)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===bd)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===wd)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Rd)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Cd)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Pd)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ld)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Id)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Dd)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ud)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Nd)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fd)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ul||i===Od||i===Bd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ul)return a===gt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Od)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Bd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===j1||i===kd||i===zd||i===Gd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ul)return s.COMPRESSED_RED_RGTC1_EXT;if(i===kd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===zd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Gd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Rs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class AM extends Pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class no extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const TM={type:"move"};class sc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new no,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new no,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new no,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const p=n.getJointPose(x,i),f=this._getHandJoint(c,x);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(TM)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new no;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const bM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class RM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new dn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ji({vertexShader:bM,fragmentShader:wM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Mi(new fl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class CM extends ks{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,m=null,g=null;const x=new RM,p=n.getContextAttributes();let f=null,A=null;const M=[],T=[],B=new lt;let C=null;const b=new Pn;b.layers.enable(1),b.viewport=new Kt;const F=new Pn;F.layers.enable(2),F.viewport=new Kt;const E=[b,F],S=new AM;S.layers.enable(1),S.layers.enable(2);let P=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let J=M[H];return J===void 0&&(J=new sc,M[H]=J),J.getTargetRaySpace()},this.getControllerGrip=function(H){let J=M[H];return J===void 0&&(J=new sc,M[H]=J),J.getGripSpace()},this.getHand=function(H){let J=M[H];return J===void 0&&(J=new sc,M[H]=J),J.getHandSpace()};function k(H){const J=T.indexOf(H.inputSource);if(J===-1)return;const ge=M[J];ge!==void 0&&(ge.update(H.inputSource,H.frame,c||a),ge.dispatchEvent({type:H.type,data:H.inputSource}))}function q(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",$);for(let H=0;H<M.length;H++){const J=T[H];J!==null&&(T[H]=null,M[H].disconnect(J))}P=null,V=null,x.reset(),e.setRenderTarget(f),m=null,d=null,h=null,r=null,A=null,dt.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(B.width,B.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",q),r.addEventListener("inputsourceschange",$),p.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(B),r.renderState.layers===void 0){const J={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,J),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),A=new Ir(m.framebufferWidth,m.framebufferHeight,{format:Jn,type:Zi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let J=null,ge=null,oe=null;p.depth&&(oe=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,J=p.stencil?Cs:fs,ge=p.stencil?Rs:ws);const Ge={colorFormat:n.RGBA8,depthFormat:oe,scaleFactor:s};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(Ge),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),A=new Ir(d.textureWidth,d.textureHeight,{format:Jn,type:Zi,depthTexture:new Dg(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),dt.setContext(r),dt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function $(H){for(let J=0;J<H.removed.length;J++){const ge=H.removed[J],oe=T.indexOf(ge);oe>=0&&(T[oe]=null,M[oe].disconnect(ge))}for(let J=0;J<H.added.length;J++){const ge=H.added[J];let oe=T.indexOf(ge);if(oe===-1){for(let Be=0;Be<M.length;Be++)if(Be>=T.length){T.push(ge),oe=Be;break}else if(T[Be]===null){T[Be]=ge,oe=Be;break}if(oe===-1)break}const Ge=M[oe];Ge&&Ge.connect(ge)}}const W=new N,K=new N;function z(H,J,ge){W.setFromMatrixPosition(J.matrixWorld),K.setFromMatrixPosition(ge.matrixWorld);const oe=W.distanceTo(K),Ge=J.projectionMatrix.elements,Be=ge.projectionMatrix.elements,Je=Ge[14]/(Ge[10]-1),R=Ge[14]/(Ge[10]+1),Ke=(Ge[9]+1)/Ge[5],Xe=(Ge[9]-1)/Ge[5],St=(Ge[8]-1)/Ge[0],Re=(Be[8]+1)/Be[0],nt=Je*St,He=Je*Re,Ne=oe/(-St+Re),Ut=Ne*-St;J.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Ut),H.translateZ(Ne),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const y=Je+Ne,_=R+Ne,O=nt-Ut,Y=He+(oe-Ut),j=Ke*R/_*y,Z=Xe*R/_*y;H.projectionMatrix.makePerspective(O,Y,j,Z,y,_),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function fe(H,J){J===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(J.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;x.texture!==null&&(H.near=x.depthNear,H.far=x.depthFar),S.near=F.near=b.near=H.near,S.far=F.far=b.far=H.far,(P!==S.near||V!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,V=S.far,b.near=P,b.far=V,F.near=P,F.far=V,b.updateProjectionMatrix(),F.updateProjectionMatrix(),H.updateProjectionMatrix());const J=H.parent,ge=S.cameras;fe(S,J);for(let oe=0;oe<ge.length;oe++)fe(ge[oe],J);ge.length===2?z(S,b,F):S.projectionMatrix.copy(b.projectionMatrix),ve(H,S,J)};function ve(H,J,ge){ge===null?H.matrix.copy(J.matrixWorld):(H.matrix.copy(ge.matrixWorld),H.matrix.invert(),H.matrix.multiply(J.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(J.projectionMatrix),H.projectionMatrixInverse.copy(J.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=oa*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(H){l=H,d!==null&&(d.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let Se=null;function Ye(H,J){if(u=J.getViewerPose(c||a),g=J,u!==null){const ge=u.views;m!==null&&(e.setRenderTargetFramebuffer(A,m.framebuffer),e.setRenderTarget(A));let oe=!1;ge.length!==S.cameras.length&&(S.cameras.length=0,oe=!0);for(let Be=0;Be<ge.length;Be++){const Je=ge[Be];let R=null;if(m!==null)R=m.getViewport(Je);else{const Xe=h.getViewSubImage(d,Je);R=Xe.viewport,Be===0&&(e.setRenderTargetTextures(A,Xe.colorTexture,d.ignoreDepthValues?void 0:Xe.depthStencilTexture),e.setRenderTarget(A))}let Ke=E[Be];Ke===void 0&&(Ke=new Pn,Ke.layers.enable(Be),Ke.viewport=new Kt,E[Be]=Ke),Ke.matrix.fromArray(Je.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(Je.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(R.x,R.y,R.width,R.height),Be===0&&(S.matrix.copy(Ke.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),oe===!0&&S.cameras.push(Ke)}const Ge=r.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")){const Be=h.getDepthInformation(ge[0]);Be&&Be.isValid&&Be.texture&&x.init(e,Be,r.renderState)}}for(let ge=0;ge<M.length;ge++){const oe=T[ge],Ge=M[ge];oe!==null&&Ge!==void 0&&Ge.update(oe,J,c||a)}Se&&Se(H,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),g=null}const dt=new Ig;dt.setAnimationLoop(Ye),this.setAnimationLoop=function(H){Se=H},this.dispose=function(){}}}const dr=new Ri,PM=new Ot;function LM(t,e){function n(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,Rg(t)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,A,M,T){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),h(p,f)):f.isMeshPhongMaterial?(s(p,f),u(p,f)):f.isMeshStandardMaterial?(s(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,T)):f.isMeshMatcapMaterial?(s(p,f),g(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),x(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,A,M):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,n(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,n(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===hn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,n(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===hn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,n(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,n(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const A=e.get(f),M=A.envMap,T=A.envMapRotation;M&&(p.envMap.value=M,dr.copy(T),dr.x*=-1,dr.y*=-1,dr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),p.envMapRotation.value.setFromMatrix4(PM.makeRotationFromEuler(dr)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,n(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,A,M){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*A,p.scale.value=M*.5,f.map&&(p.map.value=f.map,n(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,n(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,A){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===hn&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=A.texture,p.transmissionSamplerSize.value.set(A.width,A.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function x(p,f){const A=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(A.matrixWorld),p.nearDistance.value=A.shadow.camera.near,p.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function IM(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,M){const T=M.program;i.uniformBlockBinding(A,T)}function c(A,M){let T=r[A.id];T===void 0&&(g(A),T=u(A),r[A.id]=T,A.addEventListener("dispose",p));const B=M.program;i.updateUBOMapping(A,B);const C=e.render.frame;s[A.id]!==C&&(d(A),s[A.id]=C)}function u(A){const M=h();A.__bindingPointIndex=M;const T=t.createBuffer(),B=A.__size,C=A.usage;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,B,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,M,T),T}function h(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){const M=r[A.id],T=A.uniforms,B=A.__cache;t.bindBuffer(t.UNIFORM_BUFFER,M);for(let C=0,b=T.length;C<b;C++){const F=Array.isArray(T[C])?T[C]:[T[C]];for(let E=0,S=F.length;E<S;E++){const P=F[E];if(m(P,C,E,B)===!0){const V=P.__offset,k=Array.isArray(P.value)?P.value:[P.value];let q=0;for(let $=0;$<k.length;$++){const W=k[$],K=x(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,t.bufferSubData(t.UNIFORM_BUFFER,V+q,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,q),q+=K.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,V,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(A,M,T,B){const C=A.value,b=M+"_"+T;if(B[b]===void 0)return typeof C=="number"||typeof C=="boolean"?B[b]=C:B[b]=C.clone(),!0;{const F=B[b];if(typeof C=="number"||typeof C=="boolean"){if(F!==C)return B[b]=C,!0}else if(F.equals(C)===!1)return F.copy(C),!0}return!1}function g(A){const M=A.uniforms;let T=0;const B=16;for(let b=0,F=M.length;b<F;b++){const E=Array.isArray(M[b])?M[b]:[M[b]];for(let S=0,P=E.length;S<P;S++){const V=E[S],k=Array.isArray(V.value)?V.value:[V.value];for(let q=0,$=k.length;q<$;q++){const W=k[q],K=x(W),z=T%B;z!==0&&B-z<K.boundary&&(T+=B-z),V.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=T,T+=K.storage}}}const C=T%B;return C>0&&(T+=B-C),A.__size=T,A.__cache={},this}function x(A){const M={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(M.boundary=4,M.storage=4):A.isVector2?(M.boundary=8,M.storage=8):A.isVector3||A.isColor?(M.boundary=16,M.storage=12):A.isVector4?(M.boundary=16,M.storage=16):A.isMatrix3?(M.boundary=48,M.storage=48):A.isMatrix4?(M.boundary=64,M.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),M}function p(A){const M=A.target;M.removeEventListener("dispose",p);const T=a.indexOf(M.__bindingPointIndex);a.splice(T,1),t.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function f(){for(const A in r)t.deleteBuffer(r[A]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}class DM{constructor(e={}){const{canvas:n=Av(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const m=new Uint32Array(4),g=new Int32Array(4);let x=null,p=null;const f=[],A=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kn,this.toneMapping=Yi,this.toneMappingExposure=1;const M=this;let T=!1,B=0,C=0,b=null,F=-1,E=null;const S=new Kt,P=new Kt;let V=null;const k=new et(0);let q=0,$=n.width,W=n.height,K=1,z=null,fe=null;const ve=new Kt(0,0,$,W),Se=new Kt(0,0,$,W);let Ye=!1;const dt=new Lg;let H=!1,J=!1;const ge=new Ot,oe=new N,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function Je(){return b===null?K:1}let R=i;function Ke(v,L){return n.getContext(v,L)}try{const v={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${zu}`),n.addEventListener("webglcontextlost",ue,!1),n.addEventListener("webglcontextrestored",G,!1),n.addEventListener("webglcontextcreationerror",X,!1),R===null){const L="webgl2";if(R=Ke(L,v),R===null)throw Ke(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Xe,St,Re,nt,He,Ne,Ut,y,_,O,Y,j,Z,be,se,ae,ke,Q,Ee,Ve,Le,ce,ze,$e;function wt(){Xe=new G3(R),Xe.init(),ce=new yM(R,Xe),St=new U3(R,Xe,e,ce),Re=new MM(R),nt=new W3(R),He=new oM,Ne=new EM(R,Xe,Re,He,St,ce,nt),Ut=new F3(M),y=new z3(M),_=new jv(R),ze=new I3(R,_),O=new H3(R,_,nt,ze),Y=new $3(R,O,_,nt),Ee=new X3(R,St,Ne),ae=new N3(He),j=new aM(M,Ut,y,Xe,St,ze,ae),Z=new LM(M,He),be=new cM,se=new mM(Xe),Q=new L3(M,Ut,y,Re,Y,d,l),ke=new SM(M,Y,St),$e=new IM(R,nt,St,Re),Ve=new D3(R,Xe,nt),Le=new V3(R,Xe,nt),nt.programs=j.programs,M.capabilities=St,M.extensions=Xe,M.properties=He,M.renderLists=be,M.shadowMap=ke,M.state=Re,M.info=nt}wt();const w=new CM(M,R);this.xr=w,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const v=Xe.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Xe.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(v){v!==void 0&&(K=v,this.setSize($,W,!1))},this.getSize=function(v){return v.set($,W)},this.setSize=function(v,L,D=!0){if(w.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=v,W=L,n.width=Math.floor(v*K),n.height=Math.floor(L*K),D===!0&&(n.style.width=v+"px",n.style.height=L+"px"),this.setViewport(0,0,v,L)},this.getDrawingBufferSize=function(v){return v.set($*K,W*K).floor()},this.setDrawingBufferSize=function(v,L,D){$=v,W=L,K=D,n.width=Math.floor(v*D),n.height=Math.floor(L*D),this.setViewport(0,0,v,L)},this.getCurrentViewport=function(v){return v.copy(S)},this.getViewport=function(v){return v.copy(ve)},this.setViewport=function(v,L,D,U){v.isVector4?ve.set(v.x,v.y,v.z,v.w):ve.set(v,L,D,U),Re.viewport(S.copy(ve).multiplyScalar(K).round())},this.getScissor=function(v){return v.copy(Se)},this.setScissor=function(v,L,D,U){v.isVector4?Se.set(v.x,v.y,v.z,v.w):Se.set(v,L,D,U),Re.scissor(P.copy(Se).multiplyScalar(K).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(v){Re.setScissorTest(Ye=v)},this.setOpaqueSort=function(v){z=v},this.setTransparentSort=function(v){fe=v},this.getClearColor=function(v){return v.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor.apply(Q,arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha.apply(Q,arguments)},this.clear=function(v=!0,L=!0,D=!0){let U=0;if(v){let I=!1;if(b!==null){const te=b.texture.format;I=te===gg||te===mg||te===pg}if(I){const te=b.texture.type,he=te===Zi||te===ws||te===Do||te===Rs||te===dg||te===fg,pe=Q.getClearColor(),xe=Q.getClearAlpha(),Ce=pe.r,Pe=pe.g,we=pe.b;he?(m[0]=Ce,m[1]=Pe,m[2]=we,m[3]=xe,R.clearBufferuiv(R.COLOR,0,m)):(g[0]=Ce,g[1]=Pe,g[2]=we,g[3]=xe,R.clearBufferiv(R.COLOR,0,g))}else U|=R.COLOR_BUFFER_BIT}L&&(U|=R.DEPTH_BUFFER_BIT),D&&(U|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ue,!1),n.removeEventListener("webglcontextrestored",G,!1),n.removeEventListener("webglcontextcreationerror",X,!1),be.dispose(),se.dispose(),He.dispose(),Ut.dispose(),y.dispose(),Y.dispose(),ze.dispose(),$e.dispose(),j.dispose(),w.dispose(),w.removeEventListener("sessionstart",Xn),w.removeEventListener("sessionend",$n),rr.stop()};function ue(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function G(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const v=nt.autoReset,L=ke.enabled,D=ke.autoUpdate,U=ke.needsUpdate,I=ke.type;wt(),nt.autoReset=v,ke.enabled=L,ke.autoUpdate=D,ke.needsUpdate=U,ke.type=I}function X(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function ie(v){const L=v.target;L.removeEventListener("dispose",ie),Ie(L)}function Ie(v){st(v),He.remove(v)}function st(v){const L=He.get(v).programs;L!==void 0&&(L.forEach(function(D){j.releaseProgram(D)}),v.isShaderMaterial&&j.releaseShaderCache(v))}this.renderBufferDirect=function(v,L,D,U,I,te){L===null&&(L=Ge);const he=I.isMesh&&I.matrixWorld.determinant()<0,pe=Gg(v,L,D,U,I);Re.setMaterial(U,he);let xe=D.index,Ce=1;if(U.wireframe===!0){if(xe=O.getWireframeAttribute(D),xe===void 0)return;Ce=2}const Pe=D.drawRange,we=D.attributes.position;let ot=Pe.start*Ce,yt=(Pe.start+Pe.count)*Ce;te!==null&&(ot=Math.max(ot,te.start*Ce),yt=Math.min(yt,(te.start+te.count)*Ce)),xe!==null?(ot=Math.max(ot,0),yt=Math.min(yt,xe.count)):we!=null&&(ot=Math.max(ot,0),yt=Math.min(yt,we.count));const At=yt-ot;if(At<0||At===1/0)return;ze.setup(I,U,pe,D,xe);let gn,ct=Ve;if(xe!==null&&(gn=_.get(xe),ct=Le,ct.setIndex(gn)),I.isMesh)U.wireframe===!0?(Re.setLineWidth(U.wireframeLinewidth*Je()),ct.setMode(R.LINES)):ct.setMode(R.TRIANGLES);else if(I.isLine){let Te=U.linewidth;Te===void 0&&(Te=1),Re.setLineWidth(Te*Je()),I.isLineSegments?ct.setMode(R.LINES):I.isLineLoop?ct.setMode(R.LINE_LOOP):ct.setMode(R.LINE_STRIP)}else I.isPoints?ct.setMode(R.POINTS):I.isSprite&&ct.setMode(R.TRIANGLES);if(I.isBatchedMesh)I._multiDrawInstances!==null?ct.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances):ct.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else if(I.isInstancedMesh)ct.renderInstances(ot,At,I.count);else if(D.isInstancedBufferGeometry){const Te=D._maxInstanceCount!==void 0?D._maxInstanceCount:1/0,tn=Math.min(D.instanceCount,Te);ct.renderInstances(ot,At,tn)}else ct.render(ot,At)};function Rt(v,L,D){v.transparent===!0&&v.side===vi&&v.forceSinglePass===!1?(v.side=hn,v.needsUpdate=!0,Ta(v,L,D),v.side=ji,v.needsUpdate=!0,Ta(v,L,D),v.side=vi):Ta(v,L,D)}this.compile=function(v,L,D=null){D===null&&(D=v),p=se.get(D),p.init(L),A.push(p),D.traverseVisible(function(I){I.isLight&&I.layers.test(L.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),v!==D&&v.traverseVisible(function(I){I.isLight&&I.layers.test(L.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),p.setupLights();const U=new Set;return v.traverse(function(I){const te=I.material;if(te)if(Array.isArray(te))for(let he=0;he<te.length;he++){const pe=te[he];Rt(pe,D,I),U.add(pe)}else Rt(te,D,I),U.add(te)}),A.pop(),p=null,U},this.compileAsync=function(v,L,D=null){const U=this.compile(v,L,D);return new Promise(I=>{function te(){if(U.forEach(function(he){He.get(he).currentProgram.isReady()&&U.delete(he)}),U.size===0){I(v);return}setTimeout(te,10)}Xe.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let Wt=null;function ft(v){Wt&&Wt(v)}function Xn(){rr.stop()}function $n(){rr.start()}const rr=new Ig;rr.setAnimationLoop(ft),typeof self<"u"&&rr.setContext(self),this.setAnimationLoop=function(v){Wt=v,w.setAnimationLoop(v),v===null?rr.stop():rr.start()},w.addEventListener("sessionstart",Xn),w.addEventListener("sessionend",$n),this.render=function(v,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),w.enabled===!0&&w.isPresenting===!0&&(w.cameraAutoUpdate===!0&&w.updateCamera(L),L=w.getCamera()),v.isScene===!0&&v.onBeforeRender(M,v,L,b),p=se.get(v,A.length),p.init(L),A.push(p),ge.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),dt.setFromProjectionMatrix(ge),J=this.localClippingEnabled,H=ae.init(this.clippingPlanes,J),x=be.get(v,f.length),x.init(),f.push(x),w.enabled===!0&&w.isPresenting===!0){const te=M.xr.getDepthSensingMesh();te!==null&&ml(te,L,-1/0,M.sortObjects)}ml(v,L,0,M.sortObjects),x.finish(),M.sortObjects===!0&&x.sort(z,fe),Be=w.enabled===!1||w.isPresenting===!1||w.hasDepthSensing()===!1,Be&&Q.addToRenderList(x,v),this.info.render.frame++,H===!0&&ae.beginShadows();const D=p.state.shadowsArray;ke.render(D,v,L),H===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const U=x.opaque,I=x.transmissive;if(p.setupLights(),L.isArrayCamera){const te=L.cameras;if(I.length>0)for(let he=0,pe=te.length;he<pe;he++){const xe=te[he];Xu(U,I,v,xe)}Be&&Q.render(v);for(let he=0,pe=te.length;he<pe;he++){const xe=te[he];Wu(x,v,xe,xe.viewport)}}else I.length>0&&Xu(U,I,v,L),Be&&Q.render(v),Wu(x,v,L);b!==null&&(Ne.updateMultisampleRenderTarget(b),Ne.updateRenderTargetMipmap(b)),v.isScene===!0&&v.onAfterRender(M,v,L),ze.resetDefaultState(),F=-1,E=null,A.pop(),A.length>0?(p=A[A.length-1],H===!0&&ae.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function ml(v,L,D,U){if(v.visible===!1)return;if(v.layers.test(L.layers)){if(v.isGroup)D=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(L);else if(v.isLight)p.pushLight(v),v.castShadow&&p.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||dt.intersectsSprite(v)){U&&oe.setFromMatrixPosition(v.matrixWorld).applyMatrix4(ge);const he=Y.update(v),pe=v.material;pe.visible&&x.push(v,he,pe,D,oe.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||dt.intersectsObject(v))){const he=Y.update(v),pe=v.material;if(U&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),oe.copy(v.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),oe.copy(he.boundingSphere.center)),oe.applyMatrix4(v.matrixWorld).applyMatrix4(ge)),Array.isArray(pe)){const xe=he.groups;for(let Ce=0,Pe=xe.length;Ce<Pe;Ce++){const we=xe[Ce],ot=pe[we.materialIndex];ot&&ot.visible&&x.push(v,he,ot,D,oe.z,we)}}else pe.visible&&x.push(v,he,pe,D,oe.z,null)}}const te=v.children;for(let he=0,pe=te.length;he<pe;he++)ml(te[he],L,D,U)}function Wu(v,L,D,U){const I=v.opaque,te=v.transmissive,he=v.transparent;p.setupLightsView(D),H===!0&&ae.setGlobalState(M.clippingPlanes,D),U&&Re.viewport(S.copy(U)),I.length>0&&Aa(I,L,D),te.length>0&&Aa(te,L,D),he.length>0&&Aa(he,L,D),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function Xu(v,L,D,U){if((D.isScene===!0?D.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[U.id]===void 0&&(p.state.transmissionRenderTarget[U.id]=new Ir(1,1,{generateMipmaps:!0,type:Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float")?ul:Zi,minFilter:Mr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace}));const te=p.state.transmissionRenderTarget[U.id],he=U.viewport||S;te.setSize(he.z,he.w);const pe=M.getRenderTarget();M.setRenderTarget(te),M.getClearColor(k),q=M.getClearAlpha(),q<1&&M.setClearColor(16777215,.5),Be?Q.render(D):M.clear();const xe=M.toneMapping;M.toneMapping=Yi;const Ce=U.viewport;if(U.viewport!==void 0&&(U.viewport=void 0),p.setupLightsView(U),H===!0&&ae.setGlobalState(M.clippingPlanes,U),Aa(v,D,U),Ne.updateMultisampleRenderTarget(te),Ne.updateRenderTargetMipmap(te),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let we=0,ot=L.length;we<ot;we++){const yt=L[we],At=yt.object,gn=yt.geometry,ct=yt.material,Te=yt.group;if(ct.side===vi&&At.layers.test(U.layers)){const tn=ct.side;ct.side=hn,ct.needsUpdate=!0,$u(At,D,U,gn,ct,Te),ct.side=tn,ct.needsUpdate=!0,Pe=!0}}Pe===!0&&(Ne.updateMultisampleRenderTarget(te),Ne.updateRenderTargetMipmap(te))}M.setRenderTarget(pe),M.setClearColor(k,q),Ce!==void 0&&(U.viewport=Ce),M.toneMapping=xe}function Aa(v,L,D){const U=L.isScene===!0?L.overrideMaterial:null;for(let I=0,te=v.length;I<te;I++){const he=v[I],pe=he.object,xe=he.geometry,Ce=U===null?he.material:U,Pe=he.group;pe.layers.test(D.layers)&&$u(pe,L,D,xe,Ce,Pe)}}function $u(v,L,D,U,I,te){v.onBeforeRender(M,L,D,U,I,te),v.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),I.onBeforeRender(M,L,D,U,v,te),I.transparent===!0&&I.side===vi&&I.forceSinglePass===!1?(I.side=hn,I.needsUpdate=!0,M.renderBufferDirect(D,L,U,I,v,te),I.side=ji,I.needsUpdate=!0,M.renderBufferDirect(D,L,U,I,v,te),I.side=vi):M.renderBufferDirect(D,L,U,I,v,te),v.onAfterRender(M,L,D,U,I,te)}function Ta(v,L,D){L.isScene!==!0&&(L=Ge);const U=He.get(v),I=p.state.lights,te=p.state.shadowsArray,he=I.state.version,pe=j.getParameters(v,I.state,te,L,D),xe=j.getProgramCacheKey(pe);let Ce=U.programs;U.environment=v.isMeshStandardMaterial?L.environment:null,U.fog=L.fog,U.envMap=(v.isMeshStandardMaterial?y:Ut).get(v.envMap||U.environment),U.envMapRotation=U.environment!==null&&v.envMap===null?L.environmentRotation:v.envMapRotation,Ce===void 0&&(v.addEventListener("dispose",ie),Ce=new Map,U.programs=Ce);let Pe=Ce.get(xe);if(Pe!==void 0){if(U.currentProgram===Pe&&U.lightsStateVersion===he)return Yu(v,pe),Pe}else pe.uniforms=j.getUniforms(v),v.onBuild(D,pe,M),v.onBeforeCompile(pe,M),Pe=j.acquireProgram(pe,xe),Ce.set(xe,Pe),U.uniforms=pe.uniforms;const we=U.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(we.clippingPlanes=ae.uniform),Yu(v,pe),U.needsLights=Vg(v),U.lightsStateVersion=he,U.needsLights&&(we.ambientLightColor.value=I.state.ambient,we.lightProbe.value=I.state.probe,we.directionalLights.value=I.state.directional,we.directionalLightShadows.value=I.state.directionalShadow,we.spotLights.value=I.state.spot,we.spotLightShadows.value=I.state.spotShadow,we.rectAreaLights.value=I.state.rectArea,we.ltc_1.value=I.state.rectAreaLTC1,we.ltc_2.value=I.state.rectAreaLTC2,we.pointLights.value=I.state.point,we.pointLightShadows.value=I.state.pointShadow,we.hemisphereLights.value=I.state.hemi,we.directionalShadowMap.value=I.state.directionalShadowMap,we.directionalShadowMatrix.value=I.state.directionalShadowMatrix,we.spotShadowMap.value=I.state.spotShadowMap,we.spotLightMatrix.value=I.state.spotLightMatrix,we.spotLightMap.value=I.state.spotLightMap,we.pointShadowMap.value=I.state.pointShadowMap,we.pointShadowMatrix.value=I.state.pointShadowMatrix),U.currentProgram=Pe,U.uniformsList=null,Pe}function qu(v){if(v.uniformsList===null){const L=v.currentProgram.getUniforms();v.uniformsList=po.seqWithValue(L.seq,v.uniforms)}return v.uniformsList}function Yu(v,L){const D=He.get(v);D.outputColorSpace=L.outputColorSpace,D.batching=L.batching,D.batchingColor=L.batchingColor,D.instancing=L.instancing,D.instancingColor=L.instancingColor,D.instancingMorph=L.instancingMorph,D.skinning=L.skinning,D.morphTargets=L.morphTargets,D.morphNormals=L.morphNormals,D.morphColors=L.morphColors,D.morphTargetsCount=L.morphTargetsCount,D.numClippingPlanes=L.numClippingPlanes,D.numIntersection=L.numClipIntersection,D.vertexAlphas=L.vertexAlphas,D.vertexTangents=L.vertexTangents,D.toneMapping=L.toneMapping}function Gg(v,L,D,U,I){L.isScene!==!0&&(L=Ge),Ne.resetTextureUnits();const te=L.fog,he=U.isMeshStandardMaterial?L.environment:null,pe=b===null?M.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:ir,xe=(U.isMeshStandardMaterial?y:Ut).get(U.envMap||he),Ce=U.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,Pe=!!D.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),we=!!D.morphAttributes.position,ot=!!D.morphAttributes.normal,yt=!!D.morphAttributes.color;let At=Yi;U.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(At=M.toneMapping);const gn=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,ct=gn!==void 0?gn.length:0,Te=He.get(U),tn=p.state.lights;if(H===!0&&(J===!0||v!==E)){const Tn=v===E&&U.id===F;ae.setState(U,v,Tn)}let pt=!1;U.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==tn.state.version||Te.outputColorSpace!==pe||I.isBatchedMesh&&Te.batching===!1||!I.isBatchedMesh&&Te.batching===!0||I.isBatchedMesh&&Te.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Te.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Te.instancing===!1||!I.isInstancedMesh&&Te.instancing===!0||I.isSkinnedMesh&&Te.skinning===!1||!I.isSkinnedMesh&&Te.skinning===!0||I.isInstancedMesh&&Te.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Te.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Te.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Te.instancingMorph===!1&&I.morphTexture!==null||Te.envMap!==xe||U.fog===!0&&Te.fog!==te||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==ae.numPlanes||Te.numIntersection!==ae.numIntersection)||Te.vertexAlphas!==Ce||Te.vertexTangents!==Pe||Te.morphTargets!==we||Te.morphNormals!==ot||Te.morphColors!==yt||Te.toneMapping!==At||Te.morphTargetsCount!==ct)&&(pt=!0):(pt=!0,Te.__version=U.version);let li=Te.currentProgram;pt===!0&&(li=Ta(U,L,I));let ba=!1,sr=!1,gl=!1;const Xt=li.getUniforms(),Ii=Te.uniforms;if(Re.useProgram(li.program)&&(ba=!0,sr=!0,gl=!0),U.id!==F&&(F=U.id,sr=!0),ba||E!==v){Xt.setValue(R,"projectionMatrix",v.projectionMatrix),Xt.setValue(R,"viewMatrix",v.matrixWorldInverse);const Tn=Xt.map.cameraPosition;Tn!==void 0&&Tn.setValue(R,oe.setFromMatrixPosition(v.matrixWorld)),St.logarithmicDepthBuffer&&Xt.setValue(R,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&Xt.setValue(R,"isOrthographic",v.isOrthographicCamera===!0),E!==v&&(E=v,sr=!0,gl=!0)}if(I.isSkinnedMesh){Xt.setOptional(R,I,"bindMatrix"),Xt.setOptional(R,I,"bindMatrixInverse");const Tn=I.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),Xt.setValue(R,"boneTexture",Tn.boneTexture,Ne))}I.isBatchedMesh&&(Xt.setOptional(R,I,"batchingTexture"),Xt.setValue(R,"batchingTexture",I._matricesTexture,Ne),Xt.setOptional(R,I,"batchingColorTexture"),I._colorsTexture!==null&&Xt.setValue(R,"batchingColorTexture",I._colorsTexture,Ne));const _l=D.morphAttributes;if((_l.position!==void 0||_l.normal!==void 0||_l.color!==void 0)&&Ee.update(I,D,li),(sr||Te.receiveShadow!==I.receiveShadow)&&(Te.receiveShadow=I.receiveShadow,Xt.setValue(R,"receiveShadow",I.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(Ii.envMap.value=xe,Ii.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),U.isMeshStandardMaterial&&U.envMap===null&&L.environment!==null&&(Ii.envMapIntensity.value=L.environmentIntensity),sr&&(Xt.setValue(R,"toneMappingExposure",M.toneMappingExposure),Te.needsLights&&Hg(Ii,gl),te&&U.fog===!0&&Z.refreshFogUniforms(Ii,te),Z.refreshMaterialUniforms(Ii,U,K,W,p.state.transmissionRenderTarget[v.id]),po.upload(R,qu(Te),Ii,Ne)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(po.upload(R,qu(Te),Ii,Ne),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&Xt.setValue(R,"center",I.center),Xt.setValue(R,"modelViewMatrix",I.modelViewMatrix),Xt.setValue(R,"normalMatrix",I.normalMatrix),Xt.setValue(R,"modelMatrix",I.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const Tn=U.uniformsGroups;for(let vl=0,Wg=Tn.length;vl<Wg;vl++){const Ku=Tn[vl];$e.update(Ku,li),$e.bind(Ku,li)}}return li}function Hg(v,L){v.ambientLightColor.needsUpdate=L,v.lightProbe.needsUpdate=L,v.directionalLights.needsUpdate=L,v.directionalLightShadows.needsUpdate=L,v.pointLights.needsUpdate=L,v.pointLightShadows.needsUpdate=L,v.spotLights.needsUpdate=L,v.spotLightShadows.needsUpdate=L,v.rectAreaLights.needsUpdate=L,v.hemisphereLights.needsUpdate=L}function Vg(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(v,L,D){He.get(v.texture).__webglTexture=L,He.get(v.depthTexture).__webglTexture=D;const U=He.get(v);U.__hasExternalTextures=!0,U.__autoAllocateDepthBuffer=D===void 0,U.__autoAllocateDepthBuffer||Xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,L){const D=He.get(v);D.__webglFramebuffer=L,D.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(v,L=0,D=0){b=v,B=L,C=D;let U=!0,I=null,te=!1,he=!1;if(v){const xe=He.get(v);xe.__useDefaultFramebuffer!==void 0?(Re.bindFramebuffer(R.FRAMEBUFFER,null),U=!1):xe.__webglFramebuffer===void 0?Ne.setupRenderTarget(v):xe.__hasExternalTextures&&Ne.rebindTextures(v,He.get(v.texture).__webglTexture,He.get(v.depthTexture).__webglTexture);const Ce=v.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(he=!0);const Pe=He.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Pe[L])?I=Pe[L][D]:I=Pe[L],te=!0):v.samples>0&&Ne.useMultisampledRTT(v)===!1?I=He.get(v).__webglMultisampledFramebuffer:Array.isArray(Pe)?I=Pe[D]:I=Pe,S.copy(v.viewport),P.copy(v.scissor),V=v.scissorTest}else S.copy(ve).multiplyScalar(K).floor(),P.copy(Se).multiplyScalar(K).floor(),V=Ye;if(Re.bindFramebuffer(R.FRAMEBUFFER,I)&&U&&Re.drawBuffers(v,I),Re.viewport(S),Re.scissor(P),Re.setScissorTest(V),te){const xe=He.get(v.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+L,xe.__webglTexture,D)}else if(he){const xe=He.get(v.texture),Ce=L||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,xe.__webglTexture,D||0,Ce)}F=-1},this.readRenderTargetPixels=function(v,L,D,U,I,te,he){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=He.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&he!==void 0&&(pe=pe[he]),pe){Re.bindFramebuffer(R.FRAMEBUFFER,pe);try{const xe=v.texture,Ce=xe.format,Pe=xe.type;if(!St.textureFormatReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!St.textureTypeReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=v.width-U&&D>=0&&D<=v.height-I&&R.readPixels(L,D,U,I,ce.convert(Ce),ce.convert(Pe),te)}finally{const xe=b!==null?He.get(b).__webglFramebuffer:null;Re.bindFramebuffer(R.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(v,L,D,U,I,te,he){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=He.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&he!==void 0&&(pe=pe[he]),pe){Re.bindFramebuffer(R.FRAMEBUFFER,pe);try{const xe=v.texture,Ce=xe.format,Pe=xe.type;if(!St.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!St.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=v.width-U&&D>=0&&D<=v.height-I){const we=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,we),R.bufferData(R.PIXEL_PACK_BUFFER,te.byteLength,R.STREAM_READ),R.readPixels(L,D,U,I,ce.convert(Ce),ce.convert(Pe),0),R.flush();const ot=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);await Tv(R,ot,4);try{R.bindBuffer(R.PIXEL_PACK_BUFFER,we),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,te)}finally{R.deleteBuffer(we),R.deleteSync(ot)}return te}}finally{const xe=b!==null?He.get(b).__webglFramebuffer:null;Re.bindFramebuffer(R.FRAMEBUFFER,xe)}}},this.copyFramebufferToTexture=function(v,L=null,D=0){v.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,v=arguments[1]);const U=Math.pow(2,-D),I=Math.floor(v.image.width*U),te=Math.floor(v.image.height*U),he=L!==null?L.x:0,pe=L!==null?L.y:0;Ne.setTexture2D(v,0),R.copyTexSubImage2D(R.TEXTURE_2D,D,0,0,he,pe,I,te),Re.unbindTexture()},this.copyTextureToTexture=function(v,L,D=null,U=null,I=0){v.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),U=arguments[0]||null,v=arguments[1],L=arguments[2],I=arguments[3]||0,D=null);let te,he,pe,xe,Ce,Pe;D!==null?(te=D.max.x-D.min.x,he=D.max.y-D.min.y,pe=D.min.x,xe=D.min.y):(te=v.image.width,he=v.image.height,pe=0,xe=0),U!==null?(Ce=U.x,Pe=U.y):(Ce=0,Pe=0);const we=ce.convert(L.format),ot=ce.convert(L.type);Ne.setTexture2D(L,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,L.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,L.unpackAlignment);const yt=R.getParameter(R.UNPACK_ROW_LENGTH),At=R.getParameter(R.UNPACK_IMAGE_HEIGHT),gn=R.getParameter(R.UNPACK_SKIP_PIXELS),ct=R.getParameter(R.UNPACK_SKIP_ROWS),Te=R.getParameter(R.UNPACK_SKIP_IMAGES),tn=v.isCompressedTexture?v.mipmaps[I]:v.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,tn.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,tn.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,pe),R.pixelStorei(R.UNPACK_SKIP_ROWS,xe),v.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,I,Ce,Pe,te,he,we,ot,tn.data):v.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,I,Ce,Pe,tn.width,tn.height,we,tn.data):R.texSubImage2D(R.TEXTURE_2D,I,Ce,Pe,we,ot,tn),R.pixelStorei(R.UNPACK_ROW_LENGTH,yt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,At),R.pixelStorei(R.UNPACK_SKIP_PIXELS,gn),R.pixelStorei(R.UNPACK_SKIP_ROWS,ct),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Te),I===0&&L.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),Re.unbindTexture()},this.copyTextureToTexture3D=function(v,L,D=null,U=null,I=0){v.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),D=arguments[0]||null,U=arguments[1]||null,v=arguments[2],L=arguments[3],I=arguments[4]||0);let te,he,pe,xe,Ce,Pe,we,ot,yt;const At=v.isCompressedTexture?v.mipmaps[I]:v.image;D!==null?(te=D.max.x-D.min.x,he=D.max.y-D.min.y,pe=D.max.z-D.min.z,xe=D.min.x,Ce=D.min.y,Pe=D.min.z):(te=At.width,he=At.height,pe=At.depth,xe=0,Ce=0,Pe=0),U!==null?(we=U.x,ot=U.y,yt=U.z):(we=0,ot=0,yt=0);const gn=ce.convert(L.format),ct=ce.convert(L.type);let Te;if(L.isData3DTexture)Ne.setTexture3D(L,0),Te=R.TEXTURE_3D;else if(L.isDataArrayTexture||L.isCompressedArrayTexture)Ne.setTexture2DArray(L,0),Te=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,L.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,L.unpackAlignment);const tn=R.getParameter(R.UNPACK_ROW_LENGTH),pt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),li=R.getParameter(R.UNPACK_SKIP_PIXELS),ba=R.getParameter(R.UNPACK_SKIP_ROWS),sr=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,At.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,At.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,xe),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ce),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Pe),v.isDataTexture||v.isData3DTexture?R.texSubImage3D(Te,I,we,ot,yt,te,he,pe,gn,ct,At.data):L.isCompressedArrayTexture?R.compressedTexSubImage3D(Te,I,we,ot,yt,te,he,pe,gn,At.data):R.texSubImage3D(Te,I,we,ot,yt,te,he,pe,gn,ct,At),R.pixelStorei(R.UNPACK_ROW_LENGTH,tn),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,pt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,li),R.pixelStorei(R.UNPACK_SKIP_ROWS,ba),R.pixelStorei(R.UNPACK_SKIP_IMAGES,sr),I===0&&L.generateMipmaps&&R.generateMipmap(Te),Re.unbindTexture()},this.initRenderTarget=function(v){He.get(v).__webglFramebuffer===void 0&&Ne.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Ne.setTextureCube(v,0):v.isData3DTexture?Ne.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Ne.setTexture2DArray(v,0):Ne.setTexture2D(v,0),Re.unbindTexture()},this.resetState=function(){B=0,C=0,b=null,Re.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Gu?"display-p3":"srgb",n.unpackColorSpace=ut.workingColorSpace===hl?"display-p3":"srgb"}}class UM extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ri,this.environmentIntensity=1,this.environmentRotation=new Ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class kg extends Ea{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Uf=new Ot,kc=new Eg,io=new dl,ro=new N;class NM extends fn{constructor(e=new Li,n=new kg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),io.copy(i.boundingSphere),io.applyMatrix4(r),io.radius+=s,e.ray.intersectsSphere(io)===!1)return;Uf.copy(r).invert(),kc.copy(e.ray).applyMatrix4(Uf);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=d,x=m;g<x;g++){const p=c.getX(g);ro.fromBufferAttribute(h,p),Nf(ro,p,l,r,e,n,this)}}else{const d=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let g=d,x=m;g<x;g++)ro.fromBufferAttribute(h,g),Nf(ro,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Nf(t,e,n,i,r,s,a){const o=kc.distanceSqToPoint(t);if(o<n){const l=new N;kc.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zu);const Zs=document.getElementById("webcam"),FM=document.getElementById("webgl-canvas"),en=document.getElementById("debug-canvas"),is=document.getElementById("debug-panel"),Ff=document.getElementById("debug-toggle"),rs=document.getElementById("gesture-guide"),so=document.getElementById("loading"),ao=document.getElementById("error-toast"),Of=document.getElementById("fps-value"),Bf=document.getElementById("gesture-value"),kf=document.getElementById("confidence-value"),zf=document.getElementById("handedness-value"),ac=document.getElementById("handpos-value"),Gf=document.getElementById("targetpos-value"),qt=en.getContext("2d"),Ct={particleCount:1500,particleRadius:5,particleSize:.05,cameraZ:10,fov:60,bgColor:657935,pinchThreshold:.05,lerpSpeed:.08,returnSpeed:.03,expandForce:.06,contractForce:.04,particleColors:[new et(65535),new et(16711935),new et(65345)],wasmUrl:"https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@1.0.1/wasm",modelUrl:"https://storage.googleapis.com/mediapipe-models/gesture_recognizer/gesture_recognizer/float16/1/gesture_recognizer.task"},ee={gestureRecognizer:null,isRunning:!1,debugVisible:!0,currentGesture:"None",currentConfidence:0,currentHandedness:"--",handPosition:{x:0,y:0},targetPosition:{x:0,y:0},hasHand:!1,frameCount:0,fpsLastTime:performance.now(),currentFps:0,currentScale:1,targetScale:1,pinchFrozen:!1,pinchPulseTime:0,pinchFlashOpacity:0,attractPoint:new N(0,0,0)};function OM(t){console.error("[NUI]",t),ao&&(ao.textContent=t,ao.classList.add("visible"),setTimeout(()=>{ao.classList.remove("visible")},5e3))}function Hf(){so&&(so.style.opacity="0",so.style.pointerEvents="none",setTimeout(()=>{so.style.display="none"},500))}async function BM(){if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)throw new Error("Camera requires HTTPS. Your browser blocked access on insecure context.");try{const t=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:640,height:480}});return Zs.srcObject=t,new Promise((e,n)=>{Zs.onloadeddata=()=>{Zs.play(),e()},Zs.onerror=()=>n(new Error("Failed to load webcam video stream")),setTimeout(()=>n(new Error("Webcam initialization timed out")),1e4)})}catch(t){throw t.name==="NotAllowedError"||t.name==="PermissionDeniedError"?new Error("Camera permission denied. Please allow camera access and reload."):t.name==="NotFoundError"||t.name==="DevicesNotFoundError"?new Error("No camera found. Please connect a webcam and reload."):new Error(`Camera error: ${t.message}`)}}async function kM(){try{console.log("[NUI] Loading WASM from:",Ct.wasmUrl);const t=await ss.forVisionTasks(Ct.wasmUrl);console.log("[NUI] WASM loaded, creating GestureRecognizer...");const e=await Qt.createFromOptions(t,{baseOptions:{modelAssetPath:Ct.modelUrl,delegate:"GPU"},runningMode:"VIDEO",numHands:2});return console.log("[NUI] GestureRecognizer created successfully"),e}catch(t){const e=t instanceof Error?t.message:String(t);throw console.error("[NUI] MediaPipe init error:",t),new Error(`MediaPipe init failed: ${e}`)}}let mo,la,cs,Er,ko,yr,oo;function zM(){cs=new DM({canvas:FM,antialias:!0,alpha:!0}),cs.setSize(window.innerWidth,window.innerHeight),cs.setPixelRatio(Math.min(window.devicePixelRatio,2)),cs.setClearColor(Ct.bgColor,1),la=new Pn(Ct.fov,window.innerWidth/window.innerHeight,.1,100),la.position.z=Ct.cameraZ,mo=new UM,mo.background=new et(Ct.bgColor),Er=new Li;const t=new Float32Array(Ct.particleCount*3),e=new Float32Array(Ct.particleCount*3);yr=new Float32Array(Ct.particleCount*3),oo=new Float32Array(Ct.particleCount*3);for(let i=0;i<Ct.particleCount;i++){const r=i*3,s=Math.random()*Math.PI*2,a=Math.acos(2*Math.random()-1),o=Ct.particleRadius*Math.cbrt(Math.random()),l=o*Math.sin(a)*Math.cos(s),c=o*Math.sin(a)*Math.sin(s),u=o*Math.cos(a);t[r]=l,t[r+1]=c,t[r+2]=u,yr[r]=l,yr[r+1]=c,yr[r+2]=u,oo[r]=0,oo[r+1]=0,oo[r+2]=0;const h=Ct.particleColors[Math.floor(Math.random()*Ct.particleColors.length)];e[r]=h.r,e[r+1]=h.g,e[r+2]=h.b}Er.setAttribute("position",new Un(t,3)),Er.setAttribute("color",new Un(e,3));const n=new kg({size:Ct.particleSize,vertexColors:!0,blending:Lc,transparent:!0,opacity:.9,sizeAttenuation:!0});ko=new NM(Er,n),mo.add(ko)}function GM(t){if(!t||t.length===0)return!1;const e=t[0];if(!e||e.length<9)return!1;const n=e[4],i=e[8],r=n.x-i.x,s=n.y-i.y;return Math.sqrt(r*r+s*s)<Ct.pinchThreshold}function HM(){if(!Er)return;const t=Er.attributes.position.array;let e="idle";if(ee.pinchFrozen?e="pinch":ee.currentGesture==="Open_Palm"&&ee.hasHand?e="attract":ee.currentGesture==="Pointing_Up"&&ee.hasHand&&(e="rise"),e==="attract"?ee.targetScale=ci.lerp(ee.targetScale,1.3,.02):e==="repel"?ee.targetScale=ci.lerp(ee.targetScale,.6,.02):e==="rise"?ee.targetScale=ci.lerp(ee.targetScale,1.15,.02):e==="pinch"?ee.targetScale=ci.lerp(ee.targetScale,1,.03):ee.targetScale=ci.lerp(ee.targetScale,1,Ct.returnSpeed),ee.currentScale=ci.lerp(ee.currentScale,ee.targetScale,.1),ee.pinchFrozen){const n=(performance.now()-ee.pinchPulseTime)/1e3;if(n<.5){const i=Math.sin(n*Math.PI*8)*.15;ee.currentScale+=i}else ee.pinchFrozen=!1,ee.pinchFlashOpacity=0}for(let n=0;n<Ct.particleCount;n++){const i=n*3;let r=t[i],s=t[i+1],a=t[i+2];const o=yr[i],l=yr[i+1],c=yr[i+2];let u,h,d;if(e==="attract")u=o*1.2+ee.attractPoint.x*.3,h=l*1.2+ee.attractPoint.y*.3,d=c*1.2;else if(e==="repel"){const g=r-ee.attractPoint.x,x=s-ee.attractPoint.y,p=Math.sqrt(g*g+x*x)+.01,f=Math.min(1/p,2);u=o*.3+g*f*.2,h=l*.3+x*f*.2,d=c*.3}else e==="rise"?(u=o,h=l+2,d=c):(u=o,h=l,d=c);if(e!=="pinch"){const m=e==="idle"?Ct.returnSpeed:Ct.lerpSpeed;t[i]=ci.lerp(r,u,m),t[i+1]=ci.lerp(s,h,m),t[i+2]=ci.lerp(a,d,m)}}ko.scale.setScalar(ee.currentScale),Er.attributes.position.needsUpdate=!0,ko.rotation.y+=.001}function VM(){ee.pinchFrozen||(ee.pinchFrozen=!0,ee.pinchPulseTime=performance.now(),ee.pinchFlashOpacity=1)}function Vf(t){if(!en||!qt)return;const e=en.width,n=en.height;if(qt.clearRect(0,0,e,n),!t||t.length===0)return;const i=Qt.HAND_CONNECTIONS;for(let r=0;r<t.length;r++){const s=t[r];if(!s)continue;const a=r%2===0;qt.strokeStyle=a?"#00ffff":"#ff00ff",qt.fillStyle=a?"#ff00ff":"#00ffff",qt.shadowColor=qt.strokeStyle,qt.shadowBlur=6;for(const o of i){const l=s[o.start],c=s[o.end];!l||!c||(qt.beginPath(),qt.moveTo(l.x*e,l.y*n),qt.lineTo(c.x*e,c.y*n),qt.stroke())}qt.shadowColor=qt.fillStyle,qt.shadowBlur=8;for(let o=0;o<s.length;o++){const l=s[o],c=l.x*e,u=l.y*n,h=o===4||o===8?5:3;qt.beginPath(),qt.arc(c,u,h,0,Math.PI*2),qt.fill()}}qt.shadowBlur=0}function WM(){if(!ee.debugVisible)return;const t=performance.now();ee.frameCount++;const e=t-ee.fpsLastTime;e>=500&&(ee.currentFps=Math.round(ee.frameCount/e*1e3),ee.frameCount=0,ee.fpsLastTime=t,Of&&(Of.textContent=ee.currentFps));let n="Idle";ee.pinchFrozen?n="Pinch":ee.currentGesture==="Open_Palm"?n="Open Palm":ee.currentGesture==="Thumb_Up"?n="Thumb Up":ee.currentGesture==="Thumb_Down"?n="Thumb Down":ee.currentGesture==="Victory"?n="Victory":ee.currentGesture==="Pointing_Up"?n="Pointing Up":ee.currentGesture==="ILoveYou"&&(n="I Love You"),Bf&&(Bf.textContent=n),kf&&(kf.textContent=ee.hasHand?`${Math.round(ee.currentConfidence*100)}%`:"--"),zf&&(zf.textContent=ee.hasHand?ee.currentHandedness:"--"),ac&&(ee.hasHand?ac.textContent=`X: ${ee.handPosition.x.toFixed(2)}, Y: ${ee.handPosition.y.toFixed(2)}`:ac.textContent="--"),Gf&&(Gf.textContent=`X: ${ee.targetPosition.x.toFixed(1)}, Y: ${ee.targetPosition.y.toFixed(1)}`)}function XM(){Ff&&Ff.addEventListener("click",()=>{ee.debugVisible=!ee.debugVisible;const t="hidden";ee.debugVisible?(is==null||is.classList.remove(t),en==null||en.classList.remove(t),rs==null||rs.classList.remove(t)):(is==null||is.classList.add(t),en==null||en.classList.add(t),rs==null||rs.classList.add(t))})}function $M(){const t=window.innerWidth,e=window.innerHeight;la.aspect=t/e,la.updateProjectionMatrix(),cs.setSize(t,e),en&&(en.width=t,en.height=e)}function qM(){if(!(!ee.gestureRecognizer||!ee.isRunning))try{const t=ee.gestureRecognizer.recognizeForVideo(Zs,performance.now()),e=t.landmarks,n=t.gestures,i=t.handedness,r=e?e.length:0;if(r===0){ee.currentGesture="None",ee.currentConfidence=0,ee.currentHandedness="--",ee.hasHand=!1,ee.handPosition.x=0,ee.handPosition.y=0,ee.targetPosition.x=0,ee.targetPosition.y=0,ee.attractPoint.set(0,0,0),Vf([]);return}if(n&&n.length>0&&n[0].length>0){const h=n[0][0];ee.currentGesture=h.categoryName,ee.currentConfidence=h.score}else ee.currentGesture="None",ee.currentConfidence=0;const s=[];if(i)for(let h=0;h<i.length;h++)i[h]&&i[h].length>0&&s.push(i[h][0].categoryName);ee.currentHandedness=s.length>0?s.join(", "):"--";let a=0,o=0;for(let h=0;h<r;h++)a+=e[h][0].x,o+=e[h][0].y;a/=r,o/=r,ee.hasHand=!0,ee.handPosition.x=a,ee.handPosition.y=o;const l=(1-a)*10-5,c=-(o*10-5);ee.targetPosition.x=l,ee.targetPosition.y=c,ee.attractPoint.set(l,c,0);let u=!1;for(let h=0;h<r;h++)if(GM([e[h]])){u=!0;break}u&&VM(),Vf(e)}catch(t){console.warn("[NUI] Frame recognition error:",t.message)}}function zg(){requestAnimationFrame(zg),qM(),HM(),cs.render(mo,la),WM()}async function YM(){try{zM(),en&&(en.width=window.innerWidth,en.height=window.innerHeight),await BM(),ee.gestureRecognizer=await kM(),XM(),window.addEventListener("resize",$M),ee.isRunning=!0,Hf(),zg()}catch(t){OM(t.message),Hf()}}YM();
