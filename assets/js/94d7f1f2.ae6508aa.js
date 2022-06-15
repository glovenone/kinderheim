"use strict";(self.webpackChunkkinderheim=self.webpackChunkkinderheim||[]).push([[2566],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return f}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),p=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(u.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),s=p(t),f=o,m=s["".concat(u,".").concat(f)]||s[f]||d[f]||c;return t?n.createElement(m,i(i({ref:r},l),{},{components:t})):n.createElement(m,i({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,i=new Array(c);i[0]=s;var a={};for(var u in r)hasOwnProperty.call(r,u)&&(a[u]=r[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var p=2;p<c;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},8463:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return d}});var n=t(7462),o=t(3366),c=(t(7294),t(3905)),i=["components"],a={},u="Code",p={unversionedId:"code/code",id:"code/code",title:"Code",description:"GPG",source:"@site/docs/code/code.md",sourceDirName:"code",slug:"/code/",permalink:"/kinderheim/code/",draft:!1,editUrl:"https://github.com/ecioran/kinderheim/docs/code/code.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Cloudflare workers",permalink:"/kinderheim/cloud-computing/serverless-computing/cloudflare-workers"},next:{title:"CMD Explain",permalink:"/kinderheim/code/cmd-explain"}},l={},d=[{value:"GPG",id:"gpg",level:2}],s={toc:d};function f(e){var r=e.components,t=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"code"},"Code"),(0,c.kt)("h2",{id:"gpg"},"GPG"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"# decrypt GPG message https://howchoo.com/security/how-to-send-and-receive-encrypted-messages-using-gpg\ngpg --decrypt msg.gpg\n")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"# generate random hex\nopenssl rand -hex 16\n")))}f.isMDXComponent=!0}}]);