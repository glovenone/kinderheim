"use strict";(self.webpackChunkkinderheim=self.webpackChunkkinderheim||[]).push([[9594],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),h=s(a),u=o,c=h["".concat(l,".").concat(u)]||h[u]||d[u]||r;return a?n.createElement(c,i(i({ref:t},p),{},{components:a})):n.createElement(c,i({ref:t},p))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=h;var m={};for(var l in t)hasOwnProperty.call(t,l)&&(m[l]=t[l]);m.originalType=e,m.mdxType="string"==typeof e?e:o,i[1]=m;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4485:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return m},metadata:function(){return s},toc:function(){return d}});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),i=["components"],m={title:"DynamoDB"},l="[DynamoDB](https://aws.amazon.com/dynamodb)",s={unversionedId:"databases/dynamodb",id:"databases/dynamodb",title:"DynamoDB",description:"NoSQL Data Modeling with Amazon DynamoDB is good intro talk. DonutDB looks nice.",source:"@site/docs/databases/dynamodb.md",sourceDirName:"databases",slug:"/databases/dynamodb",permalink:"/kinderheim/databases/dynamodb",draft:!1,editUrl:"https://github.com/ecioran/kinderheim/docs/databases/dynamodb.md",tags:[],version:"current",frontMatter:{title:"DynamoDB"},sidebar:"tutorialSidebar",previous:{title:"DuckDB",permalink:"/kinderheim/databases/duckdb"},next:{title:"EdgeDB",permalink:"/kinderheim/databases/edgedb"}},p={},d=[{value:"OSS DynamoDB apps",id:"oss-dynamodb-apps",level:2},{value:"Notes",id:"notes",level:2},{value:"Links",id:"links",level:2}],h={toc:d};function u(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dynamodb"},(0,r.kt)("a",{parentName:"h1",href:"https://aws.amazon.com/dynamodb"},"DynamoDB")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=h7mH2Bxkc6k"},"NoSQL Data Modeling with Amazon DynamoDB")," is good intro talk. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/psanford/donutdb"},"DonutDB")," looks nice."),(0,r.kt)("h2",{id:"oss-dynamodb-apps"},"OSS DynamoDB apps"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/alexdebrie/dynamodb-instagram"},"DynamoDB Instagram")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/deeheber/note-service-next-generation"},"Note Service (Next Generation)")," - GraphQL CRUD API built using AWS AppSync, Lambda, DynamoDB, CDK, Typescript.")),(0,r.kt)("h2",{id:"notes"},"Notes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Each item has a unique primary key and any number of attributes."),(0,r.kt)("li",{parentName:"ul"},"Scanning for an item means looking through ",(0,r.kt)("strong",{parentName:"li"},"every item in a table")," thus it is less efficient than query search."),(0,r.kt)("li",{parentName:"ul"},"Table is a collection of items, and each item is a collection of attributes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://twitter.com/danielrhodes/status/1466645623814328324"},"DynamoDB will burn you in so many ways. It\u2019s only fine if you have very predictably sized objects and non-spiky workloads."))),(0,r.kt)("h2",{id:"links"},"Links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf"},"Dynamo: Amazon\u2019s Highly Available Key-value Store (2007)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gist.github.com/jlafon/d8f91086e3d00c4bff3b"},"Intro to Dynamo")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/alexdebrie/awesome-dynamodb"},"Awesome DynamoDB")," - List of resources for learning about modeling, operating, and using Amazon DynamoDB."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.alexdebrie.com/posts/dynamodb-no-bad-queries/"},"SQL, NoSQL, and Scale: How DynamoDB scales where relational databases don't (2020)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/glassechidna/dynamo"},"dynamo")," - Dead-simple AWS DynamoDB CLI."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://acloud.guru/series/serverlessconf-nyc-2019/view/dynamodb-best-practices"},"Using (and Ignoring) DynamoDB Best Practices with Serverless | Alex DeBrie (2019)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.twitch.tv/videos/544223958"},"Build with DynamoDB - Single-Table Design Pros and Cons (2020)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/stevearc/dql"},"DQL")," - SQL-ish language for DynamoDB."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.dynamodbbook.com/"},"The DynamoDB Book: Data Modeling with NoSQL and DynamoDB")," (",(0,r.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=23193093"},"HN"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.swyx.io/writing/dynamodb-book/"},"5 Things I Learned from The DynamoDB Book (2020)")," (",(0,r.kt)("a",{parentName:"li",href:"https://twitter.com/swyx/status/1247585165766832128"},"Twitter"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.trek10.com/blog/the-ten-rules-for-data-modeling-with-dynamodb"},"Rules for Data Modeling with DynamoDB (2020)")," (",(0,r.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=22813908"},"HN"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dynobase.dev/"},"Dynobase")," - Professional GUI Client for DynamoDB."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/softprops/dynomite"},"dynomite")," - Make your rust types fit DynamoDB and visa versa."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/pynamodb/PynamoDB"},"PynamoDB")," - Pythonic interface to Amazon's DynamoDB."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dev.to/prozz/introduction-to-the-gold-stack-5b66"},"Introducing the GoLD Stack: Go + Lambda + DynamoDB (2020)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/developing-koan/modeling-graph-relationships-in-dynamodb-c06141612a70"},"Modeling Graph Relationships in DynamoDB (2020)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=HaEPXoXVf2k"},"Amazon DynamoDB Deep Dive: Advanced Design Patterns for DynamoDB (2018)")," (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dideler/notes/blob/master/nosql-patterns.md"},"Notes on NoSQL patterns"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://consulting.0x4447.com/articles/how_to/how-to-understand-dynamodb.html"},"How to understand DynamoDB")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.dynamodbguide.com/"},"DynamoDB, explained")," - Primer on the DynamoDB NoSQL database."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/codetalkio/patterns-serverless-rust"},"Patterns: Serverless Rust + GraphQL + DynamoDB on AWS Lambda")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://codetalk.io/posts/2020-03-19-Live-Migration-of-DynamoDB-Tables.html"},"Live Migration of DynamoDB Tables (2020)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/floydspace/dynamodb-migrations-tool"},"dynamit-cli")," - DynamoDB Migrations Tool CLI."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/HENNGE/aiodynamo"},"AsyncIO DynamoDB")," - Asynchronous, fast, pythonic DynamoDB Client. (",(0,r.kt)("a",{parentName:"li",href:"https://aiodynamo.readthedocs.io/en/latest/"},"Docs"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/best-practices.html"},"Best Practices for Designing and Architecting with DynamoDB")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/akkoro/rotary"},"Rotary")," - ORM-like query library for DynamoDB."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/awslabs/dynein"},"dynein")," - DynamoDB CLI written in Rust."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/flogy/graphql-ttl-transformer"},"graphql-ttl-transformer")," - Enable DynamoDB's time-to-live feature to auto-delete old entries in your AWS Amplify API."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://fauna.com/blog/comparing-fauna-and-dynamodb"},"Comparing Fauna and DynamoDB: Architecture and Pricing (2020)")," (",(0,r.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=25363056"},"HN"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/leerob/nextjs-aws-dynamodb"},"Next.js + AWS DynamoDB")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/freshollie/jest-dynalite"},"jest-dynalite")," - Jest preset to run Dynalite (DynamoDB local) per test runner."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/sensedeep/dynamodb-onetable"},"DynamoDB OneTable")," - Access and management for one table designs with NodeJS."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/dabit3/dynamodb-documentclient-cheat-sheet"},"DynamoDB JavaScript DocumentClient cheat sheet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/playlist?list=PL_EDAAla3DXWshFxx1R5P5MNaER84zHsU"},"DynamoDB sessions at AWS re:Invent 2020")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/99x/serverless-dynamodb-local"},"Serverless DynamoDB Local Plugin")," - Allows to run DynamoDB locally for serverless."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?app=desktop&v=KYy8X8t4MB8"},"Fundamentals of Amazon DynamoDB Single Table Design (2020)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dynobase.dev/dynamodb-best-practices/"},"DynamoDB Best Practices")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.sensedeep.com/blog/posts/2021/dynamodb-checklist.html"},"DynamoDB Checklist (2021)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dev.to/jbszczepaniak/dynamodb-with-go-1-setup-1nnm"},"DynamoDB with Go")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/awsdocs/amazon-dynamodb-developer-guide"},"Amazon DynamoDB Developer Guide")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.twitch.tv/videos/984733547"},"Amazon DynamoDB data modeling with NoSQL Workbench with Gunnar and Samaneh (2021)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://acloudguru.com/blog/engineering/you-should-always-use-dynamodb-global-tables-now"},"You should always use DynamoDB global tables now (2021)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/nerd-for-tech/asynchronous-api-with-dynamodb-streams-4117776f2fa4"},"Asynchronous API with DynamoDB Streams (2021)")," (",(0,r.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=27232637"},"HN"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/dineshsonachalam/Lucid-Dynamodb"},"LucidDyanamoDB")," - Simple Python wrapper to AWS DynamoDB. (",(0,r.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=27334430"},"HN"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/a-h/ddbimport"},"ddbimport")," - Import CSV data into DynamoDB."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/a-h/hde"},"Event Sourced Database in DynamoDB / TypeScript")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://adamrackis.dev/dynamo-introduction/"},"The What, Why and How of DynamoDB (2021)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-relational-modeling.html"},"Best Practices for Modeling Relational Data in DynamoDB")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=yvBR71D0nAQ"},"Amazon DynamoDB Under the Hood: How We Built a Hyper-Scale Database (2018)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/serverless-components/aws-dynamodb"},"AWS DynamoDB Component")," - Easily provision AWS DynamoDB tables using Serverless Components."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/edasque/DynamoDBtoCSV"},"AWS DynamoDBtoCSV")," - Dump DynamoDB data into a CSV file."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/kocisov/dynm"},"dynm")," - Utility for easier interaction with DynamoDB."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/raiden-rs/raiden-dynamo"},"raiden-dynamo")," - DynamoDB library for Rust."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/alexdebrie/lambda-dynamodb-workshop"},"DynamoDB + Lambda Workshop")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/matrus2/dynamodb-stream-elasticsearch"},"DynamoDB --\x3e Stream --\x3e Elasticsearch")," - Missing blueprint for AWS Lambda. Reads stream from AWS DynamoDB and writes it to ElasticSearch."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/aws-samples/aws-dynamodb-examples"},"DynamoDB Examples")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/psanford/donutdb"},"DonutDB")," - SQL database implemented on DynamoDB and SQLite."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/cirello-io/dynamolock"},"DynamoDB Lock Client for Go")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/pgspider/dynamodb_fdw"},"DynamoDB Foreign Data Wrapper for PostgreSQL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/blogs/aws/new-dynamodb-table-class-save-up-to-60-in-your-dynamodb-costs/"},"New DynamoDB Table Class \u2013 Save Up To 60% in Your DynamoDB Costs (2021)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/mifi/dynamodump"},"dynamodump")," - Node CLI for backing up and restoring schema+data from DynamoDB tables."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/vsouza/go-gin-boilerplate"},"Starter project with Go, Gin and DynamoDB")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/kaihendry/go-web-dynamo-starter"},"Go DynamoDB Web App Starter")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/kaihendry/local-audio"},"How to develop an AWS hosted DynamoDB Web application locally")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/typedorm/typedorm"},"TypeDORM")," - Strongly typed ORM for DynamoDB - Built with the single-table-design pattern in mind."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/sam-goodwin/typesafe-dynamodb"},"typesafe-dynamodb")," - TypeSafe type definitions for the AWS DynamoDB API."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/mockersf/serde_dynamodb"},"serde_dynamodb")," - Talk with dynamodb using your existing structs thanks to serde."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/blogs/aws/happy-birthday-dynamodb/"},"Happy 10th Birthday, DynamoDB (2022)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/aws-samples/serverless-typescript-demo"},"Serverless Typescript Demo")," - Simple serverless application built in Typescript and uses Node.js 14 runtime."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/jakejscott/dynamodb-stream-indexer"},"Serverless search for DynamoDB")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=h7mH2Bxkc6k"},"Alex DeBrie: NoSQL Data Modeling with Amazon DynamoDB (2022)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/oieduardorabelo/cdk-lambda-private-subnet-dynamodb-vpc-endpoint"},"AWS Lambda in Private Subnet connecting to DynamoDB with VPC Endpoint")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SystemFw/dynosaur"},"Dynosaur")," - Declarative bidirectional codecs for DynamoDb AttributeValue, SDK 2."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Netflix/dynomite"},"Dynomite")," - Inspired by Dynamo whitepaper, is a thin, distributed dynamo layer for different storage engines and protocols."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://crates.io/crates/dynamodb_lock"},"dynamodb_lock")," - Distributed lock backed by DynamoDB."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/aws-samples/amazon-dynamodb-design-patterns"},"Amazon DynamoDB Design Patterns")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.stedi.com/blog/how-to-ensure-cross-region-data-integrity-with-amazon-dynamodb-global-tables"},"How to ensure cross-region data integrity with Amazon DynamoDB global tables (2022)"))))}u.isMDXComponent=!0}}]);