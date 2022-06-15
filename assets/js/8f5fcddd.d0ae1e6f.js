"use strict";(self.webpackChunkkinderheim=self.webpackChunkkinderheim||[]).push([[2],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return h}});var a=r(7294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function m(t,e){if(null==t)return{};var r,a,i=function(t,e){if(null==t)return{};var r,a,i={},n=Object.keys(t);for(a=0;a<n.length;a++)r=n[a],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(a=0;a<n.length;a++)r=n[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var s=a.createContext({}),l=function(t){var e=a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},p=function(t){var e=l(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var r=t.components,i=t.mdxType,n=t.originalType,s=t.parentName,p=m(t,["components","mdxType","originalType","parentName"]),c=l(r),h=i,k=c["".concat(s,".").concat(h)]||c[h]||u[h]||n;return r?a.createElement(k,o(o({ref:e},p),{},{components:r})):a.createElement(k,o({ref:e},p))}));function h(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var n=r.length,o=new Array(n);o[0]=c;var m={};for(var s in e)hasOwnProperty.call(e,s)&&(m[s]=e[s]);m.originalType=t,m.mdxType="string"==typeof t?t:i,o[1]=m;for(var l=2;l<n;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},8028:function(t,e,r){r.r(e),r.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return m},metadata:function(){return l},toc:function(){return u}});var a=r(7462),i=r(3366),n=(r(7294),r(3905)),o=["components"],m={title:"MQTT"},s="[MQTT](http://mqtt.org/)",l={unversionedId:"distributed-systems/message-queue/mqtt",id:"distributed-systems/message-queue/mqtt",title:"MQTT",description:"Transport layer protocol between embedded devices and services.",source:"@site/docs/distributed-systems/message-queue/mqtt.md",sourceDirName:"distributed-systems/message-queue",slug:"/distributed-systems/message-queue/mqtt",permalink:"/kinderheim/distributed-systems/message-queue/mqtt",draft:!1,editUrl:"https://github.com/ecioran/kinderheim/docs/distributed-systems/message-queue/mqtt.md",tags:[],version:"current",frontMatter:{title:"MQTT"},sidebar:"tutorialSidebar",previous:{title:"Message queue",permalink:"/kinderheim/distributed-systems/message-queue/"},next:{title:"ZeroMQ",permalink:"/kinderheim/distributed-systems/message-queue/zeromq"}},p={},u=[{value:"Links",id:"links",level:2}],c={toc:u};function h(t){var e=t.components,r=(0,i.Z)(t,o);return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"mqtt"},(0,n.kt)("a",{parentName:"h1",href:"http://mqtt.org/"},"MQTT")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Transport layer protocol between embedded devices and services.")),(0,n.kt)("h2",{id:"links"},"Links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://codepr.github.io/posts/sol-mqtt-broker/"},"Sol - An MQTT broker from scratch")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tekjar/rumq"},"rumq")," - MQTT ecosystem in rust."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/1technophile/OpenMQTTGateway"},"OpenMQTTGateway")," - MQTT gateway for ESP8266, ESP32, Sonoff RF Bridge or Arduino with bidirectional 433mhz/315mhz/868mhz, Infrared communications, BLE, beacons detection, mi flora / mi jia compatibility, SMS & LORA."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/inuits/mqttgateway"},"MQTTGateway for Prometheus")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://hassamuddin.com/blog/rust-mqtt/overview/"},"Writing an aysnchronous MQTT Broker in Rust (2020)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.rtautomation.com/mqtt/whats-wrong-with-mqtt/"},"What's Wrong with MQTT? (2018)")," (",(0,n.kt)("a",{parentName:"li",href:"https://lobste.rs/s/lwofpb/what_s_wrong_with_mqtt"},"Lobsters"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/rbaron/deskmate"},"deskmate")," - Hackable & portable MQTT-powered mini dashboard and control center."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://michael.stapelberg.ch/posts/2021-01-10-mqtt-introduction/"},"A quick introduction to MQTT for IOT (2021)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://jurian.slui.mn/posts/smqttt-or-secure-mqtt-over-traefik/"},"Secure your MQTT server with authentication and encryption (2021)")," (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=25988196"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://michael.stapelberg.ch/posts/2021-03-13-smart-intercom-backpack/"},"Make your intercom smarter with an MQTT backpack (2021)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/ntex-rs/ntex-mqtt"},"MQTT Client/Server framework")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/thomasnordquist/MQTT-Explorer"},"MQTT Explorer")," - All-round MQTT client that provides a structured topic overview. (",(0,n.kt)("a",{parentName:"li",href:"https://mqtt-explorer.com/"},"Web"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2106.12684"},"A Pure HTTP/3 Alternative to MQTT-over-QUIC in Resource-Constrained IoT (2021)")," (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=27650879"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/sh0rez/promqtt"},"Promqtt")," - Prometheus \u27f7 MQTT Bridge."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/jpmens/msoak"},"msoak")," - MQTT subscribe to multiple servers / topics simultaneously."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/jdiamond/MQTT.ts"},"MQTT.ts")," - MQTT in TypeScript for Deno, Node.js, and browsers."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/mainflux/mproxy"},"mProxy")," - MQTT proxy."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/novastone-media/MQTT-Client-Framework"},"MQTT-Client-Framework")," - iOS, macOS, tvOS native ObjectiveC MQTT Client Framework."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://mosquitto.org/"},"Mosquitto")," - Open source MQTT broker. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/eclipse/mosquitto"},"Code"),") (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=28695346"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/at-wat/mqtt-go"},"mqtt-go")," - Yet another Go MQTT 3.1.1 client library."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/alttch/psrt"},"PubSubRT")," - Pub/sub real-time telemetry protocol, optimized for industrial needs: providing low latency, dealing with slow channels and large payloads."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/quartiq/miniconf"},"MiniConf")," - Minimal settings configuration over MQTT."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/jpmens/mqttwarn"},"mqttwarn")," - Subscribe to MQTT topics (with wildcards) and notify pluggable services."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/quartiq/minimq"},"MiniMQ")," - Minimal no_std MQTT v5.0 client implementation."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/fabaff/mqtt-panel"},"mqtt-panel")," - Web interface for MQTT."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/emqx/CocoaMQTT"},"CocoaMQTT")," - MQTT 5.0 Client Library for iOS and macOS written in Swift."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/eclipse/paho.mqtt.python"},"Eclipse Paho MQTT Python Client")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/cotonic/cotonic"},"Cotonic")," - Provides tools to make it possible for these components to cooperate by providing an MQTT publish/subscribe bus."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/fhmq/hmq"},"Free and High Performance MQTT Broker")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/inovex/mqtt-stresser"},"MQTT Stresser")," - Load testing tool to stress MQTT message broker."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/hikhvar/mqtt2prometheus"},"MQTT2Prometheus")," - MQTT to Prometheus gateway."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/00imvj00/mqttrs"},"Mqttrs")," - Rust crate (library) to write MQTT protocol clients and servers."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/moscajs/aedes"},"Aedes")," - Barebone MQTT broker that can run on any stream server, the node way."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/mochi-co/mqtt"},"Mochi MQTT")," - Embeddable lightweight, high-performance Go MQTT Server (broker) for IoT and PubSub."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/smartrent/jackalope"},"Jackalope")," - Opinionated MQTT client library based on Tortoise MQTT."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/jiejieTop/mqttclient"},"mqttclient")," - High-performance, high-stability, cross-platform MQTT client."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/bschwind/mqtt-broker"},"MQTT Broker")," - Tokio-based MQTT v5 broker written in pure Rust."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/EdJoPaTo/mqttui"},"MQTT TUI")," - Subscribe to a MQTT Topic or publish something quickly from the terminal."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://blog.cloudflare.com/announcing-pubsub-programmable-mqtt-messaging/"},"Cloudflare Pub/Sub: Programmable MQTT Message Brokers (2022)")," (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=31353452"},"HN"),") (",(0,n.kt)("a",{parentName:"li",href:"https://developers.cloudflare.com/pub-sub/"},"Doc"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/fdisotto/esp32-mqtt"},"Control Esp32 from a web panel over MQTT protocol")," (",(0,n.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=31490108"},"HN"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/swift-server-community/mqtt-nio"},"MQTT NIO")," - Swift NIO MQTT v3.1.1 and v5.0 Client."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/LiamBindle/MQTT-C"},"MQTT-C")," - Portable MQTT C client for embedded systems and PCs alike."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/dustin/mqttd"},"mqttd")," - Complete MQTT v5 broker.")))}h.isMDXComponent=!0}}]);