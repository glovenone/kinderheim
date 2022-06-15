"use strict";(self.webpackChunkkinderheim=self.webpackChunkkinderheim||[]).push([[9383],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=l(r),h=a,f=u["".concat(s,".").concat(h)]||u[h]||p[h]||o;return r?n.createElement(f,c(c({ref:t},m),{},{components:r})):n.createElement(f,c({ref:t},m))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7636:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),c=["components"],i={},s="Concurrency",l={unversionedId:"programming/concurrency",id:"programming/concurrency",title:"Concurrency",description:"Concurrency is the composition of independently executing computations. Real-Time Interrupt-driven Concurrency is a great read.",source:"@site/docs/programming/concurrency.md",sourceDirName:"programming",slug:"/programming/concurrency",permalink:"/kinderheim/programming/concurrency",draft:!1,editUrl:"https://github.com/ecioran/kinderheim/docs/programming/concurrency.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Competitive programming",permalink:"/kinderheim/programming/competitive-programming"},next:{title:"Constraint programming",permalink:"/kinderheim/programming/constraint-programming"}},m={},p=[{value:"Links",id:"links",level:2}],u={toc:p};function h(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"concurrency"},"Concurrency"),(0,o.kt)("p",null,"Concurrency is the composition of independently executing computations. ",(0,o.kt)("a",{parentName:"p",href:"https://rtic.rs/1/book/en/"},"Real-Time Interrupt-driven Concurrency")," is a great read."),(0,o.kt)("h2",{id:"links"},"Links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://deadlockempire.github.io/"},"The Deadlock Empire")," - Interactive exercises."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://250bpm.com/blog:137"},"Structured Concurrency")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.cs.cmu.edu/~rwh/papers/prob-conc/paper.pdf"},"A Separation Logic for Concurrent Randomized Programs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://kcsrk.info/ocaml/multicore/2016/06/11/lock-free/"},"Lock-free programming for the masses (2016)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/NHDaly/CspExamples.jl"},"CspExamples.jl"),' - Julia implementations for the Example problems in Hoare\'s 1978 paper, "Communicating Sequential Processes".'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://lucumr.pocoo.org/2020/1/1/async-pressure/"},"I'm not feeling the async pressure (2020)")," (",(0,o.kt)("a",{parentName:"li",href:"https://lobste.rs/s/xylmdn/i_m_not_feeling_async_pressure"},"Lobsters"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://joeduffyblog.com/2010/01/03/a-brief-retrospective-on-transactional-memory/"},"A (brief) retrospective on transactional memory (2010)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://begriffs.com/posts/2020-03-23-concurrent-programming.html?hn=1"},"Concurrent programming, with examples (2020)")," (",(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=22672128"},"HN"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://arxiv.org/pdf/1909.05951.pdf"},"Deterministic Parallel Fixpoint Computation (2019)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://sites.google.com/a/athaydes.com/renato-athaydes/posts/fearlessconcurrencyhowclojurerustponyerlanganddartletyouachievethat"},"Fearless concurrency: how Clojure, Rust, Pony, Erlang and Dart let you achieve that. (2019)")," (",(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=19241427"},"HN"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://travisdowns.github.io/blog/2020/07/06/concurrency-costs.html"},"A Concurrency Cost Hierarchy (2020)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://lwn.net/SubscriberLink/827180/a1c1305686bfea67/"},"Lockless Algorithms for Mere Mortals")," (",(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=23983508"},"HN"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://ericniebler.com/2020/11/08/structured-concurrency/"},"Structured Concurrency (2020)")," (",(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=25032133"},"HN"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/oreillymedia/why-concurrency-is-hard-f93104cad54b"},"Why Concurrency Is Hard (2020)")," (",(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=25024901"},"HN"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/smarr/SOMns"},"SOMns")," - Dynamic, class-based, object-oriented language in the tradition of Smalltalk and Self. Newspeak for Concurrency Research."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://concurrencykit.org/"},"Concurrency Kit")," - Concurrency primitives, safe memory reclamation mechanisms and non-blocking data structures for the research, design and implementation of high performance concurrent systems. (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/concurrencykit/ck"},"Code"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://rethinkdb.com/blog/lock-free-vs-wait-free-concurrency"},"Lock-free vs. wait-free concurrency (2010)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://matklad.github.io/2021/04/26/concurrent-expression-problem.html"},"Concurrent Expression Problem (2021)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.gotw.ca/publications/concurrency-ddj.htm"},"The Free Lunch Is Over: A Fundamental Turn Toward Concurrency in Software (2005)")," (",(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=27649343"},"HN"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://oleb.net/2021/structured-concurrency/"},"What is structured concurrency? (2021)")," (",(0,o.kt)("a",{parentName:"li",href:"https://lobste.rs/s/hsivmm/what_is_structured_concurrency"},"Lobsters"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/anthezium/CS510-Advanced-Topics-in-Concurrency"},"Advanced Topics in Concurrency Course (2020)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://syndicate-lang.org/"},"Syndicated Actors for Conversational Concurrency")," (",(0,o.kt)("a",{parentName:"li",href:"https://lobste.rs/s/bghtup/syndicated_actors_for_conversational"},"Lobsters"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.cs.nott.ac.uk/~pszgmh/con.pdf"},"Concepts of Concurrency (1997)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://inside.java/2021/11/30/on-parallelism-and-concurrency/"},"On parallelism and concurrency (2021)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cp.kaist.ac.kr/"},"KAIST Concurrency and Parallelism Laboratory")," (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/kaist-cp"},"GitHub"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://deepu.tech/concurrency-in-modern-languages/"},"Concurrency in modern programming languages")," (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/deepu105/concurrency-benchmarks"},"Code"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://usingcsp.com/"},"Communicating Sequential Processes (CSP) (1978)")," (",(0,o.kt)("a",{parentName:"li",href:"https://www.cs.cmu.edu/~crary/819-f09/Hoare78.pdf"},"PDF"),") (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/thomas11/csp"},"Go Code"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://verdagon.dev/blog/seamless-fearless-structured-concurrency"},"Seamless, Fearless, and Structured Concurrency (2022)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/ProgrammingLanguages/comments/swxb61/resources_on_concurrent_pl_semantics/"},"Resources on concurrent PL semantics? (2022)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/kaist-cp/cs431"},"KAIST CS431: Concurrent Programming")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://250bpm.com/blog:71/"},"Structured Concurrency")," (",(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=30720980"},"HN"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://fsantanna.github.io/structured-concurrency.html"},"Structured (Synchronous) Concurrency")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.cs.cornell.edu/andru/papers/gallifrey-types/"},"A Flexible Type System for Fearless Concurrency (2022)")," (",(0,o.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/ProgrammingLanguages/comments/tyiztq/a_flexible_type_system_for_fearless_concurrency/"},"Reddit"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://aws.amazon.com/blogs/architecture/exponential-backoff-and-jitter/"},"Exponential Backoff And Jitter (2022)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://newsletter.papersyoumightlove.pl/archive/fearless-concurrency-at-a-discount/"},"Fearless concurrency at a discount? (2022)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://danluu.com/concurrency-bugs/"},"Notes on concurrency bugs (2016)")," (",(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=31514822"},"HN"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://hakibenita.com/django-concurrency"},"Handling Concurrency Without Locks (2022)")," (",(0,o.kt)("a",{parentName:"li",href:"https://lobste.rs/s/abr8ls/handling_concurrency_without_locks"},"Lobsters"),")")))}h.isMDXComponent=!0}}]);