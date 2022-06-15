"use strict";(self.webpackChunkkinderheim=self.webpackChunkkinderheim||[]).push([[6955],{3905:function(t,e,a){a.d(e,{Zo:function(){return s},kt:function(){return h}});var r=a(7294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,i=function(t,e){if(null==t)return{};var a,r,i={},n=Object.keys(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var p=r.createContext({}),m=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},s=function(t){var e=m(t.components);return r.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,i=t.mdxType,n=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),u=m(a),h=i,f=u["".concat(p,".").concat(h)]||u[h]||c[h]||n;return a?r.createElement(f,l(l({ref:e},s),{},{components:a})):r.createElement(f,l({ref:e},s))}));function h(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var n=a.length,l=new Array(n);l[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:i,l[1]=o;for(var m=2;m<n;m++)l[m]=a[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7502:function(t,e,a){a.r(e),a.d(e,{assets:function(){return s},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return c}});var r=a(7462),i=a(3366),n=(a(7294),a(3905)),l=["components"],o={title:"TLA+"},p="[TLA+](https://en.wikipedia.org/wiki/TLA%2B)",m={unversionedId:"computer-science/formal-verification/tla",id:"computer-science/formal-verification/tla",title:"TLA+",description:"Notes",source:"@site/docs/computer-science/formal-verification/tla.md",sourceDirName:"computer-science/formal-verification",slug:"/computer-science/formal-verification/tla",permalink:"/kinderheim/computer-science/formal-verification/tla",draft:!1,editUrl:"https://github.com/ecioran/kinderheim/docs/computer-science/formal-verification/tla.md",tags:[],version:"current",frontMatter:{title:"TLA+"},sidebar:"tutorialSidebar",previous:{title:"Formal verification",permalink:"/kinderheim/computer-science/formal-verification/"},next:{title:"Parsing",permalink:"/kinderheim/computer-science/parsing"}},s={},c=[{value:"Notes",id:"notes",level:2},{value:"Links",id:"links",level:2}],u={toc:c};function h(t){var e=t.components,a=(0,i.Z)(t,l);return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"tla"},(0,n.kt)("a",{parentName:"h1",href:"https://en.wikipedia.org/wiki/TLA%2B"},"TLA+")),(0,n.kt)("h2",{id:"notes"},"Notes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/trupill/status/1460559265412825090"},"Alloy is a better starting point to teach formal modelling than TLA+."))),(0,n.kt)("h2",{id:"links"},"Links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tlaplus/tlapm"},"TLA+ Proof Manager")," - General-purpose formal specification language that is particularly useful for describing concurrent and distributed systems. (",(0,n.kt)("a",{parentName:"li",href:"https://tla.msr-inria.inria.fr/tlaps/content/Home.html"},"Web"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learntla.com/introduction/"},"TLA+ guide")," (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=19661329"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/spacejam/tla-rust"},"tla+rust")," - Writing correct lock-free and distributed stateful systems in Rust, assisted by TLA+."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://lamport.azurewebsites.net/tla/practical-tla.html?back-link=learning.html"},"Practical TLA+ by Hillel Wayne (2018)")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Apress/practical-tla-plus"},"Code"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=qYDcbcOVurc"},"Using TLA+ for fun and profit in the development of Elasticsearch - Yannick Welsch (2019)")," (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=21003470"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://blog.acolyer.org/2019/11/29/tla-model-checking-made-symbolic/"},"TLA+ model checking made symbolic (2019)")," (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=21662484"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/1912.10633"},"The TLA+ Toolbox (2019)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/lemmy/BlockingQueue"},"BlockingQueue"),' - Tutorial-style talk "Weeks of debugging can save you hours of TLA+".'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/informalsystems/apalache"},"APALACHE")," - Symbolic model checker for TLA+. (",(0,n.kt)("a",{parentName:"li",href:"https://apalache.informal.systems/"},"Web"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://hal.archives-ouvertes.fr/hal-02280888/document"},"TLA+ Model Checking Made Symbolic (2019)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tlaplus/Examples"},"TLA+ Examples")," - Collection of TLA+ specifications of varying complexities."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://probablydance.com/2020/10/31/using-tla-in-the-real-world-to-understand-a-glibc-bug/"},"Using TLA+ in the Real World to Understand a Glibc Bug (2020)")," (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=24958504"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://buttondown.email/hillelwayne/archive/safety-and-liveness-properties/"},"Safety and Liveness Properties (2020)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=UVHnuxWZkvk"},"TLA+ at Microsoft to build planetary-scale systems (2020)")," (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=25426030"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://conf.tlapl.us/home/"},"TLA+ Community Event & Conference")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.philipzucker.com/Modelling_TLA_in_z3py/"},"Modeling TLA+ in Z3Py (2020)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=wjsI0lTSjIo"},"Weeks of Debugging Can Save You Hours of TLA+ (2020)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tlaplus/CommunityModules"},"TLA+ Community Modules")," - TLA+ snippets, operators, and modules contributed and curated by the TLA+ community."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tlaplus/tlaplus"},"TLC")," - Explicit state model checker for specifications written in TLA+."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://lamport.azurewebsites.net/tla/tla.html"},"The TLA+ Home Page")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.hillelwayne.com/post/action-properties/"},"TLA+ Action Properties (2021)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=26385075"},"HN: TLA+ (2021)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/afonsonf/tlaplus-graph-explorer"},"TLA+ Graph Explorer")," - Static web application to explore and animate a TLA+ state graph."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tlaplus/DrTLAPlus"},"Dr. TLA+ Series")," - Learn an algorithm and protocol, study a specification."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tlaplus/PlusPy"},"PlusPy")," - Python interpreter for TLA+ specifications."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://buttondown.email/hillelwayne/archive/scaffolding-tla/"},"Scaffolding TLA+ (2021)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.hillelwayne.com/post/refinement/"},"Specification Refinement (2021)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/hwayne/tlacli"},"tlacli")," - CLI tool for TLA+."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://emptysqua.re/blog/interactive-tla-plus/"},"Current and Future Tools for Interactive TLA+ (2021)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://conf.tlapl.us/2021/"},"TLA+ Conf 2021")," (",(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/playlist?list=PLWLcqZLzY8u9kzmWgs3HPRm3Cw85LTpD2"},"Videos"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://lamport.azurewebsites.net/tla/tutorial/home.html"},"PlusCal Tutorial")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.hillelwayne.com/post/tla-adt/"},"Using Abstract Data Types in TLA+ (2021)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=30193431"},"Ask HN: Do you use TLA+? (2022)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/will62794/tlaplus_animation"},"TLA+ Animation Module")," - TLA+ module for animating TLC traces."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/will62794/tlaplus_repl"},"TLA+ REPL")," - Simple REPL for the TLA+ language, using the TLC model checker."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/will62794/tla-web"},"TLA+ Web UI Prototype")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/gabrielamafra/tla-transmutation"},"TLA+ Transmutation")," - Elixir code generation from TLA+ specifications."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/informalsystems/tla-apalache-workshop"},"Thinking about protocols with TLA+ and Apalache")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Azure/azure-cosmos-tla"},"Azure Cosmos TLA+ specifications")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://lamport.azurewebsites.net/video/video2-script.pdf"},"State Machines in TLA+")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tweag/pirouette"},"Pirouette")," - Semi-automatic code extraction tool. It extracts a TLA+ specification from a Plutus Mealy Machine."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/pingcap/tla-plus"},"TLA+ in TiDB")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/talex5/tla"},"Dockerfile for building the TLA+ tools")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/informalsystems/modelator-py"},"modelator-py")," - Utilities for the TLA+ ecosystem and model-based testing using TLA+."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/eras/tlsd"},"TLA Sequence Diagram")," - Generate (message) sequence diagrams from TLA+ state traces."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/fpaxos/fpaxos-tlaplus"},"TLA+ Specification of Flexible Paxos")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://tla.msr-inria.inria.fr/kuppe/2019conf/06%20-%20William%20Schultz%20-%20Strangeloop%20TLA+%20Conference%202019%20Talk.pdf"},"Fixing a MongoDB Replication Protocol Bug with TLA+ (2019)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://lamport.azurewebsites.net/video/videos.html"},"TLA+ Video Course (2021)"))))}h.isMDXComponent=!0}}]);