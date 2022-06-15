"use strict";(self.webpackChunkkinderheim=self.webpackChunkkinderheim||[]).push([[6774],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),p=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=p(e.components);return a.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},h=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(t),m=n,k=h["".concat(s,".").concat(m)]||h[m]||u[m]||o;return t?a.createElement(k,i(i({ref:r},c),{},{components:t})):a.createElement(k,i({ref:r},c))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=h;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},1613:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=t(7462),n=t(3366),o=(t(7294),t(3905)),i=["components"],l={title:"Web workers"},s="[Web workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)",p={unversionedId:"web/web-workers",id:"web/web-workers",title:"Web workers",description:"Partytown & web-worker lib are useful.",source:"@site/docs/web/web-workers.md",sourceDirName:"web",slug:"/web/web-workers",permalink:"/kinderheim/web/web-workers",draft:!1,editUrl:"https://github.com/ecioran/kinderheim/docs/web/web-workers.md",tags:[],version:"current",frontMatter:{title:"Web workers"},sidebar:"tutorialSidebar",previous:{title:"Web scraping",permalink:"/kinderheim/web/web-scraping"},next:{title:"WebAssembly",permalink:"/kinderheim/web/webassembly"}},c={},u=[{value:"Links",id:"links",level:2}],h={toc:u};function m(e){var r=e.components,t=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},h,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"web-workers"},(0,o.kt)("a",{parentName:"h1",href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers"},"Web workers")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/BuilderIO/partytown"},"Partytown")," & ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/developit/web-worker"},"web-worker lib")," are useful."),(0,o.kt)("h2",{id:"links"},"Links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://surma.dev/things/when-workers/"},"When should you be using Web Workers? (2019)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/GoogleChromeLabs/comlink"},"Comlink")," - Makes WebWorkers enjoyable. Tiny library, that removes the mental barrier of thinking about postMessage and hides the fact that you are working with workers."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://web.dev/module-workers/"},"Threading the web with module workers (2019)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/andywer/threads.js"},"Threads.js")," - Make web workers & worker threads as simple as a function call. (",(0,o.kt)("a",{parentName:"li",href:"https://threads.js.org/"},"Web"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://about.sourcegraph.com/blog/felix-becker-fully-type-safe-web-workers-with-zero-boilerplate"},"Fully type-safe Web Workers with zero boilerplate")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/developit/web-worker"},"web-worker")," - Consistent Web Workers in browser and Node."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/developit/workerize-loader"},"workerize-loader")," - A webpack loader that moves a module and its dependencies into a Web Worker, automatically reflecting exported functions as asynchronous proxies."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/calvinmetcalf/catiline"},"Catiline.js")," - JavaScript library to take the pain out of web workers. (",(0,o.kt)("a",{parentName:"li",href:"http://catilinejs.com/"},"Web"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.smashingmagazine.com/2021/06/web-workers-2021/"},"The State Of Web Workers In 2021")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/mitschabaude/esbuild-plugin-inline-worker"},"esbuild-plugin-inline-worker")," - Esbuild loader for inline Web Workers."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/BuilderIO/partytown"},"Partytown")," - Relocate resource intensive 3rd-party scripts off of the main thread and into a web worker. (",(0,o.kt)("a",{parentName:"li",href:"https://partytown.vercel.app/"},"Web"),") (",(0,o.kt)("a",{parentName:"li",href:"https://dev.to/adamdbradley/introducing-partytown-run-third-party-scripts-from-a-web-worker-2cnp"},"Article"),") (",(0,o.kt)("a",{parentName:"li",href:"https://lobste.rs/s/4q31mo/partytown_run_third_party_scripts_from"},"Lobsters"),") (",(0,o.kt)("a",{parentName:"li",href:"https://partytown.builder.io/"},"Docs"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/astoilkov/main-thread-scheduling"},"main-thread-scheduling")," - Consistently responsive apps while staying on the main thread."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ampproject/cdn-worker"},"AMP CDN Worker")," - Source code for the web worker that powers the AMP project's CDN server. This web worker runs on Cloudflare Workers."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dai-shi/react-hooks-worker"},"react-hooks-worker")," - React custom hooks for web workers."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"},"Web Workers API")," (",(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=29427959"},"HN"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/developit/preact-worker-demo"},"Full Preact app rendering in a Web Worker")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/pshihn/workly"},"Workly")," - Simple way to move a stand-alone function/class to a worker thread."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://yoyo-code.com/how-to-stop-synchronous-web-worker/"},"How to stop synchronous code in a web worker? (2022)"))))}m.isMDXComponent=!0}}]);