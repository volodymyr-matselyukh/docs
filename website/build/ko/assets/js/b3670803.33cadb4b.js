"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2402],{83054:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=t(85893),r=t(11151);const i={},c=void 0,s={id:"build/primitives/linkdrop/bos/create-function-call-drop",title:"create-function-call-drop",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/2.build/5.primitives/linkdrop/bos/create-function-call-drop.md",sourceDirName:"2.build/5.primitives/linkdrop/bos",slug:"/build/primitives/linkdrop/bos/create-function-call-drop",permalink:"/ko/build/primitives/linkdrop/bos/create-function-call-drop",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/5.primitives/linkdrop/bos/create-function-call-drop.md",tags:[],version:"current",frontMatter:{}},a={},d=[];function l(n){const e={code:"code",pre:"pre",...(0,r.a)(),...n.components};return(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",children:'const accountId = context.accountId ?? props.accountId;\nconst keypomContract = "v2.keypom.near";\nconst nftContract = "nft.primitives.near";\nconst nftTokenId = "1";\nconst dropAmount = "10000000000000000000000";\n\nNear.call([\n  {\n    contractName: keypomContract,\n    methodName: "create_drop",\n    args: {\n      public_keys: state.publicKeys,\n      deposit_per_use: dropAmount,\n      fcData: {\n        // 2D array of function calls. In this case, there is 1 function call to make for a key use\n        // By default, if only one array of methods is present, this array of function calls will be used for all key uses\n        methods: [\n          // Array of functions for Key use 1. \n            [{\n              receiverId: nftContract,\n              methodName: "nft_mint",\n              args: JSON.stringify({\n              // Change this token_id if it already exists -> check explorer transaction\n                  token_id: nftTokenId,\n                  metadata: {\n                    title: "My NFT drop",\n                    description: "",\n                    media: "",\n                  }\n              }),\n              accountIdField: "receiver_id",\n              // Attached deposit for when the receiver makes this function call\n              attachedDeposit: "10000000000000000000000"\n            }]\n        ]\n      }\n    },\n    deposit: "23000000000000000000000", // state.publicKeys.length * dropAmount + 3000000000000000000000,\n    gas: "100000000000000",\n  },\n]);\n'})})}function u(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(l,{...n})}):l(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>s,a:()=>c});var o=t(67294);const r={},i=o.createContext(r);function c(n){const e=o.useContext(i);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),o.createElement(i.Provider,{value:e},n.children)}}}]);