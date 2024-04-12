"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1174],{62058:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=n(85893),a=n(11151);const r={sidebar_position:4},o="Deploying Contracts",c={id:"sdk/js/promises/deploy-contract",title:"Deploying Contracts",description:"You might want your smart contract to deploy subsequent smart contract code for a few reasons:",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/sdk/js/promises/deploy-contract.md",sourceDirName:"sdk/js/promises",slug:"/sdk/js/promises/deploy-contract",permalink:"/vi/sdk/js/promises/deploy-contract",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/js/promises/deploy-contract.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595e3,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tools",previous:{title:"Creating Accounts",permalink:"/vi/sdk/js/promises/create-account"},next:{title:"Basic Instructions",permalink:"/vi/sdk/js/building/basics"}},i={},d=[];function l(e){const t={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"deploying-contracts",children:"Deploying Contracts"}),"\n",(0,s.jsx)(t.p,{children:"You might want your smart contract to deploy subsequent smart contract code for a few reasons:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The contract acts as a Factory, a pattern where a parent contract creates many child contracts (",(0,s.jsx)(t.a,{href:"https://www.mintbase.xyz/",children:"Mintbase"})," does this to create a new NFT store for ",(0,s.jsx)(t.a,{href:"https://docs.mintbase.xyz/creating/store/deploy-fee",children:"anyone who wants one"}),"; ",(0,s.jsx)(t.a,{href:"https://near.org/bridge/",children:"Rainbow Bridge"})," does this to deploy separate Fungible Token contracts for ",(0,s.jsx)(t.a,{href:"https://github.com/aurora-is-near/rainbow-token-connector/blob/ce7640da144f000e0a93b6d9373bbc2514e37f3b/bridge-token-factory/src/lib.rs#L311-L341",children:"each bridged token"}),")"]}),"\n",(0,s.jsxs)(t.li,{children:["The contract ",(0,s.jsx)(t.a,{href:"/vi/build/smart-contracts/release/upgrade#programmatic-update",children:"updates its own code"})," (calls ",(0,s.jsx)(t.code,{children:"deploy"})," on itself)."]}),"\n",(0,s.jsxs)(t.li,{children:['You could implement a "contract per user" system that creates app-specific subaccounts for users (',(0,s.jsx)(t.code,{children:"your-app.user1.near"}),", ",(0,s.jsx)(t.code,{children:"your-app.user2.near"}),", etc) and deploys the same contract to each. This is currently prohibitively expensive due to NEAR's ",(0,s.jsx)(t.a,{href:"https://docs.near.org/concepts/storage/storage-staking",children:"storage fees"}),', but that may be optimized in the future. If it is, this sort of "sharded app design" may become the more scalable, user-centric approach to contract standards and app mechanics. An early experiment with this paradigm was called ',(0,s.jsx)(t.a,{href:"https://github.com/metanear",children:"Meta NEAR"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"If your goal is to deploy to a subaccount of your main contract like Mintbase or the Rainbow Bridge, you will also need to create the account. So, combining concepts from the last few pages, here's what you need:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'import { includeBytes, NearPromise, near } from "near-sdk-js";\n\nconst CODE = includeBytes("./res/contract.wasm");\n\nNearPromise.new("subaccount.example.near")\n  .createAccount()\n  .addFullAccessKey(near.signerAccountPk())\n  .transfer(BigInt(3_000_000_000_000_000_000_000_000)) // 3e24yN, 3N\n  .deployContract(CODE);\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Here's what a full contract might look like, showing a na\xefve way to pass ",(0,s.jsx)(t.code,{children:"code"})," as an argument rather than hard-coding it with ",(0,s.jsx)(t.code,{children:"includeBytes"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'import { NearPromise, near, validateAccountId } from "near-sdk-js";\n\nconst INITIAL_BALANCE = BigInt(3_000_000_000_000_000_000_000_000); // 3e24yN, 3N\n\n@NearBindgen({})\nexport class Contract {\n  @call({ privateFunction: true })\n  createAccount({ prefix, code }) {\n    const subAccountId = `${prefix}.${near.currentAccountId()}`;\n    validateAccountId(subAccountId);\n    NearPromise.new(subAccountId)\n        .createAccount()\n        .addFullAccessKey(near.signerAccountPk())\n        .transfer(INITIAL_BALANCE)\n        .deployContract(code);\n  }\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Why is this a na\xefve approach? It could run into issues because of the 4MB transaction size limit \u2013 the function above would deserialize and heap-allocate a whole contract. For many situations, the ",(0,s.jsx)(t.code,{children:"includeBytes"})," approach is preferable. If you really need to attach compiled Wasm as an argument, you might be able to copy the approach ",(0,s.jsx)(t.a,{href:"https://github.com/near-daos/sputnik-dao-contract/blob/a8fc9a8c1cbde37610e56e1efda8e5971e79b845/sputnikdao2/src/types.rs#L74-L142",children:"used by Sputnik DAO v2"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>o});var s=n(67294);const a={},r=s.createContext(a);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);