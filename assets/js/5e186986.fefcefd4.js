"use strict";(self.webpackChunkkinderheim=self.webpackChunkkinderheim||[]).push([[1036],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return u}});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),h=s(r),u=i,g=h["".concat(p,".").concat(u)]||h[u]||c[u]||o;return r?a.createElement(g,n(n({ref:t},m),{},{components:r})):a.createElement(g,n({ref:t},m))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,n=new Array(o);n[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,n[1]=l;for(var s=2;s<o;s++)n[s]=r[s];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},9595:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var a=r(7462),i=r(3366),o=(r(7294),r(3905)),n=["components"],l={},p="Verilog",s={unversionedId:"hardware/verilog",id:"hardware/verilog",title:"Verilog",description:"Links",source:"@site/docs/hardware/verilog.md",sourceDirName:"hardware",slug:"/hardware/verilog",permalink:"/kinderheim/hardware/verilog",draft:!1,editUrl:"https://github.com/ecioran/kinderheim/docs/hardware/verilog.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Raspberry Pi",permalink:"/kinderheim/hardware/raspberry-pi"},next:{title:"History",permalink:"/kinderheim/history/"}},m={},c=[{value:"Links",id:"links",level:2}],h={toc:c};function u(e){var t=e.components,r=(0,i.Z)(e,n);return(0,o.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"verilog"},"Verilog"),(0,o.kt)("h2",{id:"links"},"Links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://dl.acm.org/doi/abs/10.1145/3386337"},"Verilog HDL and its ancestors and descendants (2020)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ultraembedded/cores"},"Various HDL (Verilog) IP Cores")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ZipCPU/dblclockfft"},"Generic Piplined FFT Core Generator")," - Configurable C++ generator of pipelined Verilog FFT cores."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ZipCPU/wbuart32"},"Simple, basic, formally verified UART controller")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://symbiflow.github.io/"},"SymbiFlow")," - Open source toolchain for the development of FPGAs of multiple vendors. (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/SymbiFlow"},"GitHub"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/alexforencich/verilog-pcie"},"Verilog PCI Express Components")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/alexforencich/verilog-axi"},"Verilog AXI Components")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/verilator/verilator"},"Verilator")," - Fastest Verilog/SystemVerilog simulator. (",(0,o.kt)("a",{parentName:"li",href:"https://www.veripool.org/wiki/verilator"},"Web"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.yosyshq.com/"},"YosysHQ")," - Team maintaining Yosys and the related Open Source EDA projects. (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/YosysHQ"},"GitHub"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/YosysHQ/yosys"},"Yosys")," - Framework for Verilog RTL synthesis. (",(0,o.kt)("a",{parentName:"li",href:"http://www.clifford.at/yosys/"},"Web"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://iverilog.icarus.com/"},"Icarus Verilog")," - Verilog simulation and synthesis tool. (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/steveicarus/iverilog"},"Code"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Redcrafter/verilog2factorio"},"Factorio Verilog Compiler")," - Compile Verilog (a hardware description language) into Factorio blueprints. (",(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=26929370"},"HN"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/clash-lang/clash-compiler"},"Clash")," - Haskell to VHDL/Verilog/SystemVerilog compiler. (",(0,o.kt)("a",{parentName:"li",href:"https://clash-lang.org/"},"Web"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/zachjs/sv2v"},"sv2v")," - SystemVerilog to Verilog conversion."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tomverbeure.github.io/2020/08/08/CXXRTL-the-New-Yosys-Simulation-Backend.html"},"CXXRTL, a Yosys Simulation Backend (2020)")," (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tomverbeure/cxxrtl_eval"},"Code"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nickmqb/wyre"},"Wyre")," - Hardware definition language that compiles to Verilog."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/alexforencich/verilog-ethernet"},"Verilog Ethernet Components")," - Verilog Ethernet components for FPGA implementation."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://projectf.io/posts/verilog-sim-verilator-sdl/"},"Verilog Simulation with Verilator and SDL (2021)")," (",(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=28929994"},"HN"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/TimRudy/ice-chips-verilog"},"IceChips")," - Library of all common discrete logic devices in Verilog."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ericsonj/verilog-format"},"Verilog Format")," - Verilog formatter."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/vegaluisjose/vast"},"Verilog AST (VAST)")," - Rust library for building and manipulating Verilog ASTs."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/umarcor/osvb"},"Open Source Verification Bundle (OSVB)")," - Gathers the most popular open source verification Frameworks and Methodologies for VHDL and System Verilog: cocotb, OSVVM, SVUnit, UVVM, VUnit. (",(0,o.kt)("a",{parentName:"li",href:"https://umarcor.github.io/osvb/"},"Docs"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/1811.01721"},"Rethinking floating point for deep learning (2018)")," (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookresearch/deepfloat"},"Code"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/maikmerten/spu32"},"SPU32")," - Small Processing Unit 32: A compact RV32I CPU written in Verilog."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/verilog-to-routing/vtr-verilog-to-routing"},"Verilog to Routing (VTR)")," - Open Source CAD Flow for FPGA Research."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/asicguy/gplgpu"},"gplgpu")," - 2D/3D graphics engine in verilog."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dalance/svls"},"svls")," - SystemVerilog language server."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/tree-sitter/tree-sitter-verilog"},"Verilog grammar for tree-sitter")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/analogdevicesinc/hdl"},"HDL Reference Designs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/efabless/caravel"},"Caravel Harness")," - Standard SoC hardness with on chip resources to control and read/write operations from a user-dedicated space."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://danluu.com/why-hardware-development-is-hard/"},"Verilog Is Weird")," (",(0,o.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=30739866"},"HN"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dpretet/async_fifo"},"Asynchronous dual clock FIFO")," - Dual clock asynchronous FIFO written in verilog, tested with Icarus Verilog."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/alemuller/tree-sitter-vhdl"},"VHDL grammar for tree-sitter")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/IObundle/iob-cache"},"IOb-cache")," - High-performance configurable open-source Verilog cache."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/hughperkins/VeriGPU"},"VeriGPU")," - OpenSource GPU, in Verilog, loosely based on RISC-V ISA."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/htfab/asicle"},"Asicle")," - Wordle implemented in Verilog."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Lightelligence/rules_verilog"},"Verilog rules for Bazel")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/cocotb/cocotb"},"cocotb")," - Open source coroutine-based cosimulation testbench environment for verifying VHDL and SystemVerilog RTL using Python. (",(0,o.kt)("a",{parentName:"li",href:"https://www.cocotb.org/"},"Web"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/hughperkins/cpu-tutorial"},"Tutorial on building your own CPU, in Verilog")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/aolofsson/oh"},"OH!")," - Verilog library for ASIC and FPGA designers."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://aappleby.github.io/Metron/tutorial/"},"Metron C++ to Verilog Tutorial"))))}u.isMDXComponent=!0}}]);