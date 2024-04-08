"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6183],{27558:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var s=n(85893),i=n(11151);const a={id:"fastnear-api",title:"FastNEAR API",sidebar_label:"FastNEAR API"},o=void 0,r={id:"tools/fastnear-api",title:"FastNEAR API",description:"A fast RPC for the NEAR blockchain, based on Redis and LMDB.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/4.tools/fastnear-api.md",sourceDirName:"4.tools",slug:"/tools/fastnear-api",permalink:"/zh-CN/tools/fastnear-api",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/4.tools/fastnear-api.md",tags:[],version:"current",frontMatter:{id:"fastnear-api",title:"FastNEAR API",sidebar_label:"FastNEAR API"},sidebar:"tools",previous:{title:"Wallet Selector",permalink:"/zh-CN/tools/wallet-selector"},next:{title:"Explorers",permalink:"/zh-CN/tools/explorer"}},l={},c=[{value:"About FastNEAR",id:"about-fastnear",level:2},{value:"FastNEAR API",id:"fastnear-api",level:2},{value:"Supported APIs",id:"supported-apis",level:3},{value:"Public Key",id:"public-key",level:4},{value:"Account ID",id:"account-id",level:4},{value:"Token ID",id:"token-id",level:4}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["A fast RPC for the NEAR blockchain, based on ",(0,s.jsx)(t.a,{href:"https://redis.io/",children:"Redis"})," and ",(0,s.jsx)(t.a,{href:"https://www.symas.com/lmdb",children:"LMDB"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"about-fastnear",children:"About FastNEAR"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://github.com/fastnear/fast-near",children:"Fast-Near"})," aims to provide the fastest RPC implementation for NEAR Protocol using high-performance storage backends:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"in-memory storage in Redis."}),"\n",(0,s.jsx)(t.li,{children:"SSD optimized storage using LMDB."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["It is optimized for ",(0,s.jsx)(t.code,{children:"view"})," call performance and ease of deploy and scaling."]}),"\n",(0,s.jsx)(t.admonition,{title:"Note about data sync",type:"info",children:(0,s.jsxs)(t.p,{children:["FastNear doesn't sync with the NEAR blockchain on its own. Data needs to be loaded either from ",(0,s.jsx)(t.a,{href:"https://github.com/near/near-lake-indexer",children:"NEAR Lake"})," or from ",(0,s.jsx)(t.a,{href:"https://github.com/vgrichina/near-state-indexer",children:"Near State Indexer"}),"."]})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"fastnear-api",children:"FastNEAR API"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.a,{href:"https://github.com/fastnear/fastnear-api-server-rs",children:"FastNEAR API server"})," provides a low-latency RPC API for wallets and explorers."]}),"\n",(0,s.jsx)(t.h3,{id:"supported-apis",children:"Supported APIs"}),"\n",(0,s.jsx)(t.h4,{id:"public-key",children:"Public Key"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Public Key to Account ID mapping."}),"\n",(0,s.jsx)(t.li,{children:"Full Access Public Key to Account ID mapping."}),"\n",(0,s.jsx)(t.li,{children:"Any Public Key to Account ID mapping."}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"account-id",children:"Account ID"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Account ID to delegated staking pools (validators)."}),"\n",(0,s.jsx)(t.li,{children:"Account ID to fungible tokens (FT contracts)."}),"\n",(0,s.jsx)(t.li,{children:"Account ID to non-fungible tokens (NFT contracts)."}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"token-id",children:"Token ID"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Token ID to top 100 accounts by balance (for FT contracts)."}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{title:"V1 API",type:"tip",children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://github.com/fastnear/fastnear-api-server-rs?tab=readme-ov-file#api-v1",children:"Click here"})," to see the complete list of API endpoints and usage examples."]})})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var s=n(67294);const i={},a=s.createContext(i);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);