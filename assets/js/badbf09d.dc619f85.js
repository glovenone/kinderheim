"use strict";(self.webpackChunkkinderheim=self.webpackChunkkinderheim||[]).push([[4173],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=r.createContext({}),l=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=l(e.components);return r.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,m=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=l(a),u=n,g=h["".concat(m,".").concat(u)]||h[u]||c[u]||i;return a?r.createElement(g,o(o({ref:t},p),{},{components:a})):r.createElement(g,o({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4233:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return m},default:function(){return u},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),o=["components"],s={},m="Stream processing",l={unversionedId:"programming/stream-processing",id:"programming/stream-processing",title:"Stream processing",description:"ksqlDB is neat.",source:"@site/docs/programming/stream-processing.md",sourceDirName:"programming",slug:"/programming/stream-processing",permalink:"/kinderheim/programming/stream-processing",draft:!1,editUrl:"https://github.com/ecioran/kinderheim/docs/programming/stream-processing.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"State machines",permalink:"/kinderheim/programming/state-machines"},next:{title:"Structured programming",permalink:"/kinderheim/programming/structured-programming"}},p={},c=[{value:"Links",id:"links",level:2}],h={toc:c};function u(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"stream-processing"},"Stream processing"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://ksqldb.io/"},"ksqlDB")," is neat."),(0,i.kt)("h2",{id:"links"},"Links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/logrange/logrange"},"Logrange")," - High performance data aggregating storage."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Netflix/mantis"},"Mantis")," - Platform that makes it easy for developers to build realtime, cost-effective, operations-focused applications."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://ksqldb.io/"},"ksqlDB")," - Event streaming database purpose-built for stream processing applications. (",(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=21589670"},"HN"),") (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/confluentinc/ksql"},"Code"),") (",(0,i.kt)("a",{parentName:"li",href:"https://www.confluent.io/blog/announcing-ksqldb-0-24-0/"},"0.24.0 release"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://arxiv.org/pdf/1910.09579.pdf"},"Transparent Synchronous Dataflow (2019)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.fluvio.io/"},"Fluvio")," - Programmable data streaming platform. (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/infinyon/fluvio"},"Code"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/gazette/core"},"Gazette")," - Makes it easy to build platforms that flexibly mix SQL, batch, and millisecond-latency streaming processing paradigms. (",(0,i.kt)("a",{parentName:"li",href:"https://gazette.readthedocs.io/en/latest/"},"Docs"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://flink.apache.org/"},"Apache Flink")," - Stateful Computations over Data Streams. (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/flink"},"Code"),") (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ververica/flink-sql-cookbook"},"Apache Flink SQL Cookbook"),") (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/flink-web"},"Web Code"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://noti.st/morsapaes/9TGu0S/introduction-to-stream-processing-with-apache-flink"},"Introduction to Stream Processing with Apache Flink (2020)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.amazon.com/Storm-Applied-Strategies-real-time-processing/dp/1617291897"},"Storm Applied: Strategies for real-time event processing")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://jmtd.net/log/template_haskell/streamgraph/"},"Template Haskell and Stream-processing programs (2020)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://materialize.io/eventual-consistency-isnt-for-streaming/"},"Eventual Consistency isn\u2019t for Streaming (2020)")," (",(0,i.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=23832149"},"HN"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/hazelcast/hazelcast-jet"},"Hazelcast Jet")," - Open-Source Distributed Stream and Batch Processing. (",(0,i.kt)("a",{parentName:"li",href:"https://jet-start.sh/"},"Web"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://manzanit0.github.io/computing/2019/05/29/wtf-are-streams.html"},"WTF are streams? (2019)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Jeffail/benthos"},"Benthos")," - Stream processor for mundane tasks written in Go. (",(0,i.kt)("a",{parentName:"li",href:"https://www.benthos.dev/"},"Web"),") (",(0,i.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/golang/comments/rs6nbz/benthos_the_awesome_open_source_stream_processor/"},"Reddit"),") (",(0,i.kt)("a",{parentName:"li",href:"https://pca.st/1ontjq2t"},"Data streaming and Benthos"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://aws.amazon.com/kinesis/"},"Amazon Kinesis")," - Process & Analyze Streaming Data ."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/bufferapp/kiner"},"Kiner")," - Python AWS Kinesis Producer with error handling and thread support."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://makingsmallercircles.com/articles/modern-distributed-data-architecture-with-event-streams-stream-processing-and-derived-data/"},"Modern Distributed Data Architecture with Event Streams, Stream Processing and Derived Data (2020)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/samza"},"Apache Samza")," - Distributed stream processing framework."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/marceloboeira/voik"},"Voik")," - Experimental distributed streaming platform."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://scattered-thoughts.net/writing/internal-consistency-in-streaming-systems/"},"Internal consistency in streaming systems (2021)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.confluent.io/blog/ksqldb-streaming-sql-the-query-your-database-cant-answer/"},"Are We There Yet? The Query Your Database Can't Answer (2021)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://heron.incubator.apache.org/"},"Apache Heron")," - Real time, distributed, fault-tolerant stream processing engine. (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-heron"},"Code"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://programming-journal.org/2022/6/2/"},"The Art of the Meta Stream Protocol: Torrents of Streams")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/rlink-rs/rlink-rs"},"rlink-rs")," - High-performance Stream Processing Framework. An alternative to Apache Flink."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=-A8EOb5lzxM"},"Architecting a Boring Stream Processing Tool With Ashley Jeffs of Benthos (2021)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/langhuihui/monibuca"},"Monibuca")," - Modularized, Extensible framework for building Streaming Server."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/aler9/rtsp-simple-server"},"rtsp-simple-server")," - Ready-to-use RTSP / RTMP / HLS server and proxy that allows to read, publish and proxy video and audio streams."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://griffin.apache.org/"},"Apache Griffin")," - Big Data Quality Solution For Batch and Streaming. (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/griffin"},"Code"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/mcorbin/mirabelle"},"Mirabelle")," - Stream processing engine for monitoring."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kleenexlang.org/"},"Kleenex")," - Programming language for stream processing of data in a regular domain. (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/diku-kmc/kleenexlang"},"Code"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/vertexclique/callysto"},"Callysto")," - Stream processing framework."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/vmware/database-stream-processor"},"Database Stream Processor")," - Streaming and Incremental Computation Framework."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/ConduitIO/conduit"},"Conduit")," - Data Integration for Production Data Stores."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/streamxhub/streamx"},"StreamX")," - Make stream processing easier."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://debezium.io/"},"Debezium")," - Change data capture for a variety of databases. (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/debezium/debezium"},"Web"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/tigrisdata/tigris"},"Tigris")," - Modern, scalable backend for building real-time websites and apps. (",(0,i.kt)("a",{parentName:"li",href:"https://www.tigrisdata.com/"},"Web"),")")))}u.isMDXComponent=!0}}]);