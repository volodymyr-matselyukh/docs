"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7863],{91790:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=n(85893),i=n(11151);const s={title:"Future of Pagoda Services",authors:["ewiner"],slug:"2024-08-13-pagoda-services",tags:["updates"],hide_table_of_contents:!1},a=void 0,o={permalink:"/ko/blog/2024-08-13-pagoda-services",source:"@site/../blog/2024-08-13.md",title:"Future of Pagoda Services",description:"As the NEAR ecosystem continues to decentralize, Pagoda will cease operations within the next six months and decentralize its functions into NEAR ecosystem teams and committees.  This document describes the transition plan for each of the services, activities, and tools that Pagoda develops or operates.",date:"2024-08-13T00:00:00.000Z",tags:[{inline:!0,label:"updates",permalink:"/ko/blog/tags/updates"}],readingTime:2.705,hasTruncateMarker:!0,authors:[{name:"Eric Winer",title:"CTO & Managing Director, Pagoda",url:"https://github.com/ewiner",imageURL:"https://github.com/ewiner.png",key:"ewiner"}],frontMatter:{title:"Future of Pagoda Services",authors:["ewiner"],slug:"2024-08-13-pagoda-services",tags:["updates"],hide_table_of_contents:!1},unlisted:!1,nextItem:{title:"An update on the near.org / RPC outage on July 11, 2024",permalink:"/ko/blog/2024-07-11-near-org-outage"}},c={authorsImageUrls:[void 0]},l=[{value:"Critical NEAR Services",id:"critical-near-services",level:3},{value:"A Note About near.org RPC",id:"a-note-about-nearorg-rpc",level:4},{value:"Chain Abstraction Services",id:"chain-abstraction-services",level:3},{value:"Pagoda Operations &amp; Ecosystem Services",id:"pagoda-operations--ecosystem-services",level:3},{value:"Open-Source Libraries",id:"open-source-libraries",level:3},{value:"Deprecated Services",id:"deprecated-services",level:3}];function d(e){const t={a:"a",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"As the NEAR ecosystem continues to decentralize, Pagoda will cease operations within the next six months and decentralize its functions into NEAR ecosystem teams and committees.  This document describes the transition plan for each of the services, activities, and tools that Pagoda develops or operates."}),"\n",(0,r.jsx)(t.h3,{id:"critical-near-services",children:"Critical NEAR Services"}),"\n",(0,r.jsx)(t.p,{children:"The critical services below will continue to be operated and maintained by Pagoda until they are smoothly transitioned to new operators in the NEAR ecosystem during the second half of 2024:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://docs.near.org/api/rpc/providers",children:"near.org RPC"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://docs.near.org/concepts/advanced/near-lake-framework",children:"NEAR Lake"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://docs.near.org/build/data-infrastructure/big-query",children:"BigQuery Public Dataset"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://near-nodes.io/intro/node-data-snapshots",children:"Node Snapshots"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://near-nodes.io/rpc/state-sync",children:"State Sync"})}),"\n",(0,r.jsxs)(t.li,{children:["Undocumented but critical services:","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"KitWallet Indexer API"}),"\n",(0,r.jsx)(t.li,{children:"near-cli Testnet Faucet"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Each transition will be independently planned and communicated on its own timeline and this page will be updated accordingly."}),"\n",(0,r.jsxs)(t.p,{children:["The NEAR ",(0,r.jsx)(t.a,{href:"https://dev.near.org/infrastructure-committee.near/widget/near-prpsls-bos.components.pages.app?page=about",children:"Infrastructure Committee"})," will manage this transition process by soliciting proposals from the community for continued operation of these services, then will select, fund, and oversee the new operator."]}),"\n",(0,r.jsx)(t.h4,{id:"a-note-about-nearorg-rpc",children:"A Note About near.org RPC"}),"\n",(0,r.jsxs)(t.p,{children:["The Infrastructure Committee feels that Pagoda's fully-subsidized near.org RPC service is getting in the way of decentralization efforts and is preventing high-quality commercial RPC offerings from gaining traction. If a NEAR core team continues to support a free-to-use near.org RPC service, it will be required to gradually lower its rate limits over the coming months to prevent abuse. More details on this plan will be communicated by the end of September 2024. In light of this proposed change, ",(0,r.jsx)(t.strong,{children:"high-traffic near.org RPC users should start making plans to switch to other RPC providers"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"chain-abstraction-services",children:"Chain Abstraction Services"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://docs.near.org/concepts/abstraction/chain-signatures",children:"Chain Signatures"}),", ",(0,r.jsx)(t.a,{href:"https://docs.near.org/build/chain-abstraction/multichain-gas-relayer/overview",children:"Multichain Gas Relayer"}),", and ",(0,r.jsx)(t.a,{href:"https://docs.near.org/build/chain-abstraction/fastauth-sdk",children:"FastAuth"})," will continue to be developed by Pagoda, then will be taken over by the new Chain Abstraction / Multichain spinout from Pagoda and Proximity. More information will be shared in September or October 2024."]}),"\n",(0,r.jsx)(t.h3,{id:"pagoda-operations--ecosystem-services",children:"Pagoda Operations & Ecosystem Services"}),"\n",(0,r.jsx)(t.p,{children:"Pagoda\u2019s ecosystem services will transition as follows:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://dev.near.org/infrastructure-committee.near/widget/near-prpsls-bos.components.pages.app?page=about",children:"Infrastructure Committee"})," administration, the recently rebooted Security Assessment Program, and management of the ",(0,r.jsx)(t.a,{href:"http://near.org",children:"near.org"})," website will move under the purview of NEAR Foundation."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://hackenproof.com/company/near/programs",children:"Bug bounty"})," triage will be transitioned to the protocol team at NEAR One."]}),"\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.a,{href:"https://help.near.org/",children:"NEAR Helpdesk"})," will be turned into self-service documentation."]}),"\n",(0,r.jsx)(t.li,{children:"Pagoda's informal technical / smart contract advisory services for other ecosystem companies will wind down over the next few months."}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"open-source-libraries",children:"Open-Source Libraries"}),"\n",(0,r.jsx)(t.p,{children:"These open-source libraries and tools will be developed by Pagoda until they reach a logical completion or stopping point:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/near/pagoda-relayer-rs",children:"Pagoda Metatransaction Relayer"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/near/chain-hosted-ui",children:"Chain Hosted UI"})}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://t.me/neardev/53280",children:"Modularization and Refactor"})," of near-api-js"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Once active development by Pagoda has ceased, it doesn't mean these tools have to languish. We encourage the NEAR community to continue this work. If you need funding to do so, you can submit proposals to ",(0,r.jsx)(t.a,{href:"https://dev.near.org/devhub.near/widget/app",children:"DevHub"})," or the ",(0,r.jsx)(t.a,{href:"https://dev.near.org/infrastructure-committee.near/widget/near-prpsls-bos.components.pages.app?page=about",children:"Infrastructure Committee"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"deprecated-services",children:"Deprecated Services"}),"\n",(0,r.jsx)(t.p,{children:"Between now and February 2025, Pagoda's development work will slow down or stop on the following products and services:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://docs.near.org/build/data-infrastructure/query-api/intro",children:"QueryAPI"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://docs.near.org/pagoda/rpc/api",children:"Enhanced API"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://docs.near.org/pagoda/alerts/intro",children:"Alerts & Triggers"})}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"These are open-source services and we encourage the community to continue with their development and operation. If we can't identify new operators quickly, we will encourage remaining users of these services to switch to alternative solutions, then communicate a timeline for these services to be turned off."})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var r=n(67294);const i={},s=r.createContext(i);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);