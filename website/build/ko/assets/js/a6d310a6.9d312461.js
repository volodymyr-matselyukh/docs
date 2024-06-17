"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3250],{88539:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var i=a(85893),t=a(11151);const s={id:"query-data",title:"Accessing and Querying Historical data",sidebar_label:"Access & Query Historical data"},r=void 0,o={id:"build/data-infrastructure/query-api/query-data",title:"Accessing and Querying Historical data",description:"In this article, you'll find a high-level overview about the two most common use-cases for blockchain indexing, and how they can be solved using NEAR QueryAPI and BigQuery.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/2.build/6.data-infrastructure/query-api/query-data.md",sourceDirName:"2.build/6.data-infrastructure/query-api",slug:"/build/data-infrastructure/query-api/query-data",permalink:"/ko/build/data-infrastructure/query-api/query-data",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/6.data-infrastructure/query-api/query-data.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1718378911e3,frontMatter:{id:"query-data",title:"Accessing and Querying Historical data",sidebar_label:"Access & Query Historical data"},sidebar:"build",previous:{title:"Context object",permalink:"/ko/build/data-infrastructure/query-api/context-object"},next:{title:"Migrate from Lake framework",permalink:"/ko/build/data-infrastructure/query-api/migrate-from-near-lake"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"Analytics",id:"analytics",level:2},{value:"Analytics use cases",id:"analytics-use-cases",level:3},{value:"WebApps",id:"webapps",level:2},{value:"dApp use cases",id:"dapp-use-cases",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["In this article, you'll find a high-level overview about the two most common use-cases for blockchain indexing, and how they can be solved using NEAR ",(0,i.jsx)(n.a,{href:"/ko/build/data-infrastructure/query-api/intro",children:"QueryAPI"})," and ",(0,i.jsx)(n.a,{href:"big-query.md",children:"BigQuery"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"Building a blockchain indexer depends on the kind of historical blockchain data that you want to access and query. Let's consider these two most common blockchain indexing use cases:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["an indexer doing ",(0,i.jsx)(n.a,{href:"#analytics",children:"blockchain analytics"}),", reporting, business intelligence, and big-data queries."]}),"\n",(0,i.jsxs)(n.li,{children:["an indexer built as a backend for a ",(0,i.jsx)(n.a,{href:"#webapps",children:"web3 dApp"})," building interactive and responsive UIs, that tracks interactions over a specific smart contract."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Want to learn more about indexing? Check the ",(0,i.jsx)(n.a,{href:"../../1.concepts/3.advanced/indexers.md",children:"Introduction to Indexers"})," article."]})}),"\n",(0,i.jsx)(n.h2,{id:"analytics",children:"Analytics"}),"\n",(0,i.jsx)(n.p,{children:"When building a Blockchain analytics solution, you'll be creating queries to track NEAR assets, monitor transactions, or analyze on-chain events at a massive scale. Handling that huge amount of data in an optimal way so you can provide accurate results quickly requires a well designed solution."}),"\n",(0,i.jsxs)(n.p,{children:["Near ",(0,i.jsx)(n.a,{href:"big-query.md",children:"BigQuery solution"})," provides instant insights, and let you access Historical on-chain data and queries at scale. It also eliminates your need to store and process bulk NEAR protocol data; you can just query as little or as much data as you want."]}),"\n",(0,i.jsx)(n.p,{children:"BigQuery does not require prior experience with blockchain technology. As long as you have a general knowledge of SQL, you'll be able create queries and unlock insights about transactions, smart contract utilization, user engagement, trends, and much more."}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Learn more about BigQuery in ",(0,i.jsx)(n.a,{href:"big-query.md",children:"this article"}),"."]})}),"\n",(0,i.jsx)(n.h3,{id:"analytics-use-cases",children:"Analytics use cases"}),"\n",(0,i.jsxs)(n.p,{children:["Common Blockchain analytics use cases that can be managed with ",(0,i.jsx)(n.a,{href:"big-query.md",children:"BigQuery"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"create queries to track NEAR assets"}),"\n",(0,i.jsx)(n.li,{children:"monitor transactions"}),"\n",(0,i.jsx)(n.li,{children:"analyze on-chain events at a massive scale."}),"\n",(0,i.jsx)(n.li,{children:"use indexed data for data science tasks, including on-chain activities"}),"\n",(0,i.jsx)(n.li,{children:"identifying trends"}),"\n",(0,i.jsx)(n.li,{children:"feeding AI/ML pipelines for predictive analysis"}),"\n",(0,i.jsx)(n.li,{children:"use NEAR's indexed data for deep insights on user engagement"}),"\n",(0,i.jsx)(n.li,{children:"smart contract utilization"}),"\n",(0,i.jsx)(n.li,{children:"insights across tokens and NFT adoption."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"webapps",children:"WebApps"}),"\n",(0,i.jsx)(n.p,{children:"Building Web3 apps that handle historical blockchain data require dedicated solutions that manage the data and reduce the latency of requests, as it's not possible to scan the whole blockchain when a user makes a request.\nFor example, if your dApp needs to keep track of minted NFTs from a specific smart contract, you'll need to keep historical data related to that contract, the NFTs, and all the transactions in an optimized way so the dApp can provide fast responses to the user."}),"\n",(0,i.jsxs)(n.p,{children:["A simple solution for developers building dApps on ",(0,i.jsx)(n.a,{href:"/ko/build/web3-apps/what-is",children:"NEAR"})," is using ",(0,i.jsx)(n.a,{href:"/ko/build/data-infrastructure/query-api/intro",children:"QueryAPI"}),", a fully managed solution to build indexer functions, extract on-chain data, store it in a database, and be able to query it using GraphQL endpoints."]}),"\n",(0,i.jsxs)(n.p,{children:["In the NFT example, with QueryApi you can create an indexer that follow the activity of your ",(0,i.jsx)(n.code,{children:"my-nft-contract.near"})," smart contract, records all activities related to it (such as minting and transfers), and provides simple endpoints to communicate with your dApp, when your application needs to display all the minted NFTs, or the related transactions to a specific NFT."]}),"\n",(0,i.jsxs)(n.p,{children:["QueryApi can also reduce app development time, by letting you auto-generate ",(0,i.jsx)(n.a,{href:"/ko/build/data-infrastructure/query-api/index-functions#create-a-bos-component-from-query",children:"NEAR component code"})," straight from a GraphQL query. By creating the boilerplate code, you can use it to render a UI and publish your new NEAR component."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Learn more about QueryAPI in this ",(0,i.jsx)(n.a,{href:"/ko/build/data-infrastructure/query-api/intro",children:"Overview article"}),"."]})}),"\n",(0,i.jsx)(n.h3,{id:"dapp-use-cases",children:"dApp use cases"}),"\n",(0,i.jsx)(n.p,{children:"For a technical implementation deep-dive, check these QueryAPI tutorials:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/ko/tutorials/near-components/indexer-tutorials/nft-indexer",children:"NFTs Indexer"}),": an indexer that keeps track of newly minted NFT on Near blockchain."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../tutorial/indexer-tutorials/posts-indexer.md",children:"Posts Indexer"}),": this indexer keeps track of every new NEAR Social post found on the blockchain."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../tutorial/indexer-tutorials/feed-indexer.md",children:"Social Feed Indexer"}),": this indexer keeps track of new posts, comments, and likes on NEAR Social, so a social feed can be rendered quickly."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>o,a:()=>r});var i=a(67294);const t={},s=i.createContext(t);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);