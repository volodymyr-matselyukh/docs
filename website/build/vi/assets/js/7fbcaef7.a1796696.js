"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8949],{22424:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=e(85893),s=e(11151),i=e(77229);const l={id:"skeleton",title:"Skeleton and JavaScript Architecture",sidebar_label:"Ki\u1ebfn tr\xfac c\u1ee7a Contract"},a=void 0,c={id:"tutorials/nfts/js/skeleton",title:"Skeleton and JavaScript Architecture",description:"Trong ch\u1ee7 \u0111\u1ec1 n\xe0y, b\u1ea1n s\u1ebd t\xecm hi\u1ec3u v\u1ec1 ki\u1ebfn tr\xfac c\u01a1 b\u1ea3n \u0111\u1eb1ng sau m\u1ed9t NFT contract m\xe0 b\u1ea1n s\u1ebd develop khi tham gia serie \"T\u1eeb Zero \u0111\u1ebfn Hero\" n\xe0y. You'll discover the contract's layout and you'll see how the JavaScript files are structured in order to build a feature-complete smart contract.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/3.tutorials/nfts/js/1-skeleton.md",sourceDirName:"3.tutorials/nfts/js",slug:"/tutorials/nfts/js/skeleton",permalink:"/vi/tutorials/nfts/js/skeleton",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/nfts/js/1-skeleton.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1705914809e3,sidebarPosition:1,frontMatter:{id:"skeleton",title:"Skeleton and JavaScript Architecture",sidebar_label:"Ki\u1ebfn tr\xfac c\u1ee7a Contract"},sidebar:"tutorials",previous:{title:"Contract \u0111\xe3 \u0111\u01b0\u1ee3c deploy s\u1eb5n",permalink:"/vi/tutorials/nfts/js/predeployed-contract"},next:{title:"Minting",permalink:"/vi/tutorials/nfts/js/minting"}},o={},d=[{value:"Gi\u1edbi thi\u1ec7u",id:"gi\u1edbi-thi\u1ec7u",level:2},{value:"C\u1ea5u tr\xfac file",id:"c\u1ea5u-tr\xfac-file",level:2},{value:"C\xe1c file source",id:"c\xe1c-file-source",level:3},{value:"<code>approval.ts</code>",id:"approvalts",level:2},{value:"<code>enumeration.ts</code>",id:"enumerationts",level:2},{value:"<code>metadata.ts</code>",id:"metadatats",level:2},{value:"<code>mint.ts</code>",id:"mintts",level:2},{value:"<code>nft_core.ts</code>",id:"nft_corets",level:2},{value:"<code>royalty.ts</code>",id:"royaltyts",level:2},{value:"<code>index.ts</code>",id:"indexts",level:2},{value:"Build b\u1ed9 khung n\xe0y",id:"build-b\u1ed9-khung-n\xe0y",level:2},{value:"K\u1ebft lu\u1eadn",id:"k\u1ebft-lu\u1eadn",level:2}];function h(t){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Trong ch\u1ee7 \u0111\u1ec1 n\xe0y, b\u1ea1n s\u1ebd t\xecm hi\u1ec3u v\u1ec1 ki\u1ebfn tr\xfac c\u01a1 b\u1ea3n \u0111\u1eb1ng sau m\u1ed9t NFT contract m\xe0 b\u1ea1n s\u1ebd develop khi tham gia serie ",(0,r.jsx)(n.em,{children:'"T\u1eeb Zero \u0111\u1ebfn Hero"'})," n\xe0y. You'll discover the contract's layout and you'll see how the JavaScript files are structured in order to build a feature-complete smart contract."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"gi\u1edbi-thi\u1ec7u",children:"Gi\u1edbi thi\u1ec7u"}),"\n",(0,r.jsx)(n.p,{children:"H\u01b0\u1edbng d\u1eabn n\xe0y tr\xecnh b\xe0y b\u1ed9 khung m\xe3 ngu\u1ed3n cho NFT smart contract v\xe0 c\u1ea5u tr\xfac file c\u1ee7a n\xf3. You'll find how all the functions are laid out as well as the missing JS code that needs to be filled in. Once every file and function has been covered, you'll go through the process of building the mock-up contract to confirm that everything is working correctly."}),"\n",(0,r.jsx)(n.h2,{id:"c\u1ea5u-tr\xfac-file",children:"C\u1ea5u tr\xfac file"}),"\n",(0,r.jsxs)(n.p,{children:["Following a regular ",(0,r.jsx)(n.a,{href:"https://www.javascript.com/",children:"JavaScript"})," project, the file structure for this smart contract has:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"package.json"})," file to define the packages and scripts used in the project."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"src"})," folder where all the JavaScript source files are stored"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"build"})," folder where the compiled ",(0,r.jsx)(n.code,{children:"wasm"})," will output to."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"c\xe1c-file-source",children:"C\xe1c file source"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"File"}),(0,r.jsx)(n.th,{children:"M\xf4 t\u1ea3"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#approvalts",children:"approval.ts"})}),(0,r.jsx)(n.td,{children:"Has the internal functions that controls the access and transfers of non-fungible tokens."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#enumerationts",children:"enumeration.ts"})}),(0,r.jsx)(n.td,{children:"Contains the internal methods to query for NFT tokens and their owners."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#indexts",children:"index.ts"})}),(0,r.jsx)(n.td,{children:"Holds the exposed smart contract functions."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#metadatats",children:"metadata.ts"})}),(0,r.jsx)(n.td,{children:"Defines the token and metadata structures."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#mintts",children:"mint.ts"})}),(0,r.jsx)(n.td,{children:"Contains the internal token minting logic."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#nft_corets",children:"nft_core.ts"})}),(0,r.jsx)(n.td,{children:"Has the internal core logic that allows you to transfer NFTs between users."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#royaltyts",children:"royalty.ts"})}),(0,r.jsx)(n.td,{children:"Contains the internal payout-related functions."})]})]})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"nft-tutorial-js\n\u2514\u2500\u2500 src\n    market-contract\n    nft-contract\n    \u251c\u2500\u2500 approval.ts\n    \u251c\u2500\u2500 enumeration.ts\n    \u251c\u2500\u2500 index.ts\n    \u251c\u2500\u2500 metadata.ts\n    \u251c\u2500\u2500 mint.ts\n    \u251c\u2500\u2500 nft_core.ts\n    \u2514\u2500\u2500 royalty.ts\n"})}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.mdxAdmonitionTitle,{children:["H\xe3y kh\xe1m ph\xe1 code trong ",(0,r.jsx)(n.a,{href:"https://github.com/near-examples/nft-tutorial-js/tree/1.skeleton",children:"GitHub repository"}),". :::"]}),(0,r.jsx)(n.hr,{}),(0,r.jsx)(n.h2,{id:"approvalts",children:(0,r.jsx)(n.code,{children:"approval.ts"})}),(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u0110o\u1ea1n n\xe0y cho ph\xe9p m\u1ecdi ng\u01b0\u1eddi approve cho c\xe1c t\xe0i kho\u1ea3n kh\xe1c thay m\u1eb7t h\u1ecd transfer c\xe1c NFT."}),"\n"]}),(0,r.jsxs)(n.p,{children:["This file contains the internal logic that complies with the standard's ",(0,r.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/ApprovalManagement",children:"approvals management"})," extension. D\u01b0\u1edbi \u0111\xe2y l\xe0 b\u1ea3ng li\u1ec7t k\xea c\xe1c method v\xe0 function c\u1ee7a ch\xfang:"]}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Method"}),(0,r.jsx)(n.th,{children:"M\xf4 t\u1ea3"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"internalNftApprove"})}),(0,r.jsxs)(n.td,{children:["Approve m\u1ed9t account ID quy\u1ec1n transfer token d\u01b0\u1edbi danh ngh\u0129a c\u1ee7a b\u1ea1n. Called during ",(0,r.jsx)(n.strong,{children:"nft_approve"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"internalNftIsApproved"})}),(0,r.jsxs)(n.td,{children:["Ki\u1ec3m tra xem account nh\u1eadp v\xe0o c\xf3 quy\u1ec1n truy c\u1eadp \u0111\u1ec3 approve token ID hay kh\xf4ng. Called during ",(0,r.jsx)(n.strong,{children:"nft_is_approved"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"internalNftRevoke"})}),(0,r.jsxs)(n.td,{children:["Thu h\u1ed3i quy\u1ec1n c\u1ee7a m\u1ed9t account c\u1ee5 th\u1ec3 trong vi\u1ec7c transfer token thay b\u1ea1n. Called during ",(0,r.jsx)(n.strong,{children:"nft_revoke"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"internalNftRevokeAll"})}),(0,r.jsxs)(n.td,{children:["Thu h\u1ed3i quy\u1ec1n c\u1ee7a t\u1ea5t c\u1ea3 c\xe1c account trong vi\u1ec7c transfer token thay b\u1ea1n. Called during ",(0,r.jsx)(n.strong,{children:"nft_revoke_all"}),"."]})]})]})]}),(0,r.jsx)(i.Ey,{language:"js",start:"9",end:"69",url:"https://github.com/near-examples/nft-tutorial-js/blob/1.skeleton/src/nft-contract/approval.ts"}),(0,r.jsxs)(n.p,{children:["You'll learn more about these functions in the ",(0,r.jsx)(n.a,{href:"/tutorials/nfts/js/approvals",children:"approvals section"})," of the Zero to Hero series."]}),(0,r.jsx)(n.hr,{}),(0,r.jsx)(n.h2,{id:"enumerationts",children:(0,r.jsx)(n.code,{children:"enumeration.ts"})}),(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["This file provides the internal functions needed to view information about NFTs, and follows the standard's ",(0,r.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Enumeration",children:"enumeration"})," extension."]}),"\n"]}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Method"}),(0,r.jsx)(n.th,{children:"M\xf4 t\u1ea3"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"internalNftTotalSupply"})}),(0,r.jsxs)(n.td,{children:["Tr\u1ea3 v\u1ec1 t\u1ed5ng s\u1ed1 NFT \u0111\u01b0\u1ee3c l\u01b0u tr\u1eef tr\xean contract. Called during ",(0,r.jsx)(n.strong,{children:"nft_total_supply"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"internalNftTokens"})}),(0,r.jsxs)(n.td,{children:["Tr\u1ea3 v\u1ec1 danh s\xe1ch ph\xe2n trang c\u1ee7a c\xe1c NFT l\u01b0u tr\u1eef tr\xean contract b\u1ea5t k\u1ec3 ch\u1ee7 s\u1edf h\u1eefu c\u1ee7a ch\xfang l\xe0 ai. Called during ",(0,r.jsx)(n.strong,{children:"nft_tokens"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"internalNftSupplyForOwner"})}),(0,r.jsxs)(n.td,{children:["Cho ph\xe9p b\u1ea1n xem t\u1ed5ng s\u1ed1 NFT \u0111\u01b0\u1ee3c s\u1edf h\u1eefu b\u1edfi m\u1ed9t ng\u01b0\u1eddi d\xf9ng nh\u1ea5t \u0111\u1ecbnh. Called during ",(0,r.jsx)(n.strong,{children:"nft_supply_for_owner"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"internalNftTokensForOwner"})}),(0,r.jsxs)(n.td,{children:["Tr\u1ea3 v\u1ec1 m\u1ed9t danh s\xe1ch NFT \u0111\u01b0\u1ee3c ph\xe2n trang, thu\u1ed9c v\u1ec1 s\u1edf h\u1eefu c\u1ee7a m\u1ed9t ng\u01b0\u1eddi d\xf9ng nh\u1ea5t \u0111\u1ecbnh. Called during ",(0,r.jsx)(n.strong,{children:"nft_tokens_for_owner"}),"."]})]})]})]}),(0,r.jsx)(i.Ey,{language:"js",start:"8",end:"62",url:"https://github.com/near-examples/nft-tutorial-js/blob/1.skeleton/src/nft-contract/enumeration.ts"}),(0,r.jsxs)(n.p,{children:["B\u1ea1n c\xf3 th\u1ec3 t\xecm hi\u1ec3u th\xeam v\u1ec1 c\xe1c function n\xe0y trong ",(0,r.jsx)(n.a,{href:"/tutorials/nfts/js/enumeration",children:"enumeration section"})," c\u1ee7a serie h\u01b0\u1edbng d\u1eabn."]}),(0,r.jsx)(n.hr,{}),(0,r.jsx)(n.h2,{id:"metadatats",children:(0,r.jsx)(n.code,{children:"metadata.ts"})}),(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["File n\xe0y \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 theo d\xf5i th\xf4ng tin \u0111\u01b0\u1ee3c l\u01b0u tr\u1eef cho c\xe1c token v\xe0 metadata. In addition, you can define a function to view the contract's metadata which is part of the standard's ",(0,r.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Metadata",children:"metadata"})," extension."]}),"\n"]}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"T\xean"}),(0,r.jsx)(n.th,{children:"M\xf4 t\u1ea3"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"TokenMetadata"})}),(0,r.jsx)(n.td,{children:"Structure n\xe0y \u0111\u1ecbnh ngh\u0129a metadata c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c ch\u1ee9a trong m\u1ed7i token. (title, description, media, v.v."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Token"})}),(0,r.jsx)(n.td,{children:"Structure n\xe0y li\u1ec7t k\xea nh\u1eefng th\xf4ng tin s\u1ebd \u0111\u01b0\u1ee3c l\u01b0u tr\u1eef trong contract cho m\u1ed7i token."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"JsonToken"})}),(0,r.jsx)(n.td,{children:"Khi truy v\u1ea5n th\xf4ng tin v\u1ec1 NFT th\xf4ng qua c\xe1c view call, th\xf4ng tin tr\u1ea3 v\u1ec1 \u0111\u01b0\u1ee3c l\u01b0u tr\u1eef trong JSON token n\xe0y."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"internalNftMetadata"})}),(0,r.jsxs)(n.td,{children:["Function n\xe0y cho ph\xe9p user query metadata b\xean trong contact. Called during ",(0,r.jsx)(n.strong,{children:"nft_metadata"}),"."]})]})]})]}),(0,r.jsx)(i.Ey,{language:"js",start:"12",end:"46",url:"https://github.com/near-examples/nft-tutorial-js/blob/1.skeleton/src/nft-contract/metadata.ts"}),(0,r.jsxs)(n.p,{children:["B\u1ea1n c\xf3 th\u1ec3 t\xecm hi\u1ec3u th\xeam v\u1ec1 c\xe1c function n\xe0y trong ",(0,r.jsx)(n.a,{href:"/tutorials/nfts/js/minting",children:"minting section"})," c\u1ee7a serie h\u01b0\u1edbng d\u1eabn."]}),(0,r.jsx)(n.hr,{}),(0,r.jsx)(n.h2,{id:"mintts",children:(0,r.jsx)(n.code,{children:"mint.ts"})}),(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Contains the internal token minting logic."}),"\n"]}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Method"}),(0,r.jsx)(n.th,{children:"M\xf4 t\u1ea3"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"internalNftMint"})}),(0,r.jsxs)(n.td,{children:["Function n\xe0y s\u1ebd mint m\u1ed9t non-fungible token. Called during ",(0,r.jsx)(n.strong,{children:"nft_mint"}),"."]})]})})]}),(0,r.jsx)(i.Ey,{language:"js",start:"7",end:"23",url:"https://github.com/near-examples/nft-tutorial-js/blob/1.skeleton/src/nft-contract/mint.ts"}),(0,r.jsx)(n.hr,{}),(0,r.jsx)(n.h2,{id:"nft_corets",children:(0,r.jsx)(n.code,{children:"nft_core.ts"})}),(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Logic ch\xednh cho ph\xe9p b\u1ea1n transfer c\xe1c NFT gi\u1eefa nh\u1eefng user."}),"\n"]}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Method"}),(0,r.jsx)(n.th,{children:"M\xf4 t\u1ea3"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"internalNftTransfer"})}),(0,r.jsxs)(n.td,{children:["Transfer m\u1ed9t NFT \u0111\u1ebfn m\u1ed9t receiver ID. Called during ",(0,r.jsx)(n.strong,{children:"nft_transfer"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"internalNftTransferCall"})}),(0,r.jsxs)(n.td,{children:["Transfer m\u1ed9t NFT \u0111\u1ebfn m\u1ed9t receiver v\xe0 call m\u1ed9t function trong contract c\u1ee7a receiver ID. Function tr\u1ea3 v\u1ec1 ",(0,r.jsx)(n.code,{children:"true"})," n\u1ebfu token \u0111\xe3 \u0111\u01b0\u1ee3c transfer t\u1eeb account c\u1ee7a sender. Called during ",(0,r.jsx)(n.strong,{children:"nft_transfer_call"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"internalNftToken"})}),(0,r.jsxs)(n.td,{children:["Cho ph\xe9p c\xe1c user query th\xf4ng tin c\u1ee7a m\u1ed9t NFT c\u1ee5 th\u1ec3. Called during ",(0,r.jsx)(n.strong,{children:"nft_token"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"internalNftResolveTransfer"})}),(0,r.jsxs)(n.td,{children:["When you start the ",(0,r.jsx)(n.code,{children:"nft_transfer_call"})," and transfer an NFT, the standard dictates that you should also call a method on the receiver's contract. N\u1ebfu receiver c\u1ea7n b\u1ea1n tr\u1ea3 v\u1ec1 NFT cho sender (theo gi\xe1 tr\u1ecb tr\u1ea3 v\u1ec1 c\u1ee7a ph\u01b0\u01a1ng th\u1ee9c ",(0,r.jsx)(n.code,{children:"nft_on_transfer"}),"), h\xe0m n\xe0y cho ph\xe9p b\u1ea1n th\u1ef1c thi logic \u0111\xf3. Called during ",(0,r.jsx)(n.strong,{children:"nft_resolve_transfer"}),"."]})]})]})]}),(0,r.jsx)(i.Ey,{language:"js",start:"10",end:"85",url:"https://github.com/near-examples/nft-tutorial-js/blob/1.skeleton/src/nft-contract/nft_core.ts"}),(0,r.jsxs)(n.p,{children:["B\u1ea1n c\xf3 th\u1ec3 t\xecm hi\u1ec3u th\xeam v\u1ec1 c\xe1c function n\xe0y trong ",(0,r.jsx)(n.a,{href:"/tutorials/nfts/js/minting",children:"minting section"})," c\u1ee7a serie h\u01b0\u1edbng d\u1eabn."]}),(0,r.jsx)(n.hr,{}),(0,r.jsx)(n.h2,{id:"royaltyts",children:(0,r.jsx)(n.code,{children:"royalty.ts"})}),(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Contains the internal payout-related functions."}),"\n"]}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Method"}),(0,r.jsx)(n.th,{children:"M\xf4 t\u1ea3"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"internalNftPayout"})}),(0,r.jsxs)(n.td,{children:["This internal method calculates the payout for a given token. Called during ",(0,r.jsx)(n.strong,{children:"nft_payout"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"internalNftTransferPayout"})}),(0,r.jsxs)(n.td,{children:["Internal method to transfer the token to the receiver ID and return the payout object that should be paid for a given balance. Called during ",(0,r.jsx)(n.strong,{children:"nft_transfer_payout"}),"."]})]})]})]}),(0,r.jsx)(i.Ey,{language:"js",start:"7",end:"45",url:"https://github.com/near-examples/nft-tutorial-js/blob/1.skeleton/src/nft-contract/royalty.ts"}),(0,r.jsxs)(n.p,{children:["B\u1ea1n c\xf3 th\u1ec3 t\xecm hi\u1ec3u th\xeam v\u1ec1 c\xe1c function n\xe0y trong ",(0,r.jsx)(n.a,{href:"/tutorials/nfts/js/royalty",children:"royalty section"})," c\u1ee7a serie h\u01b0\u1edbng d\u1eabn."]}),(0,r.jsx)(n.hr,{}),(0,r.jsx)(n.h2,{id:"indexts",children:(0,r.jsx)(n.code,{children:"index.ts"})}),(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"This file outlines the smart contract class and what information it stores and keeps track of. In addition, it exposes all public facing methods that are callable by the user."}),"\n"]}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Method"}),(0,r.jsx)(n.th,{children:"M\xf4 t\u1ea3"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"init"})}),(0,r.jsx)(n.td,{children:"Constructor function used to initialize the contract with some metadata and default state."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"nft_mint"})}),(0,r.jsx)(n.td,{children:"Calls the internal mint function to mint an NFT."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"nft_token"})}),(0,r.jsx)(n.td,{children:"Calls the internal function to query for info on a specific NFT"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"nft_transfer"})}),(0,r.jsx)(n.td,{children:"Calls the internal function to transfer an NFT"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"nft_transfer_call"})}),(0,r.jsxs)(n.td,{children:["Calls the internal function to transfer an NFT and call ",(0,r.jsx)(n.code,{children:"nft_on_transfer"})," on the receiver's contract"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"nft_resolve_transfer"})}),(0,r.jsx)(n.td,{children:"Calls the internal function to resolve the transfer call promise."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"nft_is_approved"})}),(0,r.jsx)(n.td,{children:"Calls the internal function to check whether someone is approved for an NFT"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"nft_approve"})}),(0,r.jsx)(n.td,{children:"Calls the internal function to approve someone to transfer your NFT"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"nft_payout"})}),(0,r.jsx)(n.td,{children:"Calls the internal function to query for the payout object for an NFT"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"nft_transfer_payout"})}),(0,r.jsx)(n.td,{children:"Calls the internal function to transfer an NFT and return the payout object."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"nft_revoke"})}),(0,r.jsx)(n.td,{children:"Calls the internal function to revoke someone access to transfer your NFT"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"nft_revoke_all"})}),(0,r.jsx)(n.td,{children:"Calls the internal function to revoke everyone's access to transfer your NFT"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"nft_total_supply"})}),(0,r.jsx)(n.td,{children:"Calls the internal function to query the total supply of NFTs on the contract."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"nft_tokens"})}),(0,r.jsx)(n.td,{children:"Calls the internal function to paginate through NFTs on the contract"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"nft_tokens_for_owner"})}),(0,r.jsx)(n.td,{children:"Calls the internal function to paginate through NFTs for a given owner"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"nft_supply_for_owner"})}),(0,r.jsx)(n.td,{children:"Calls the internal function to query for the total number of NFTs owned by someone."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"nft_metadata"})}),(0,r.jsx)(n.td,{children:"Calls the internal function to query for the contract's metadata"})]})]})]}),(0,r.jsx)(i.Ey,{language:"js",start:"16",end:"157",url:"https://github.com/near-examples/nft-tutorial-js/blob/1.skeleton/src/nft-contract/index.ts"}),(0,r.jsxs)(n.p,{children:["B\u1ea1n c\xf3 th\u1ec3 t\xecm hi\u1ec3u th\xeam v\u1ec1 c\xe1c function n\xe0y trong ",(0,r.jsx)(n.a,{href:"/tutorials/nfts/js/minting",children:"minting section"})," c\u1ee7a serie h\u01b0\u1edbng d\u1eabn."]}),(0,r.jsx)(n.hr,{}),(0,r.jsx)(n.h2,{id:"build-b\u1ed9-khung-n\xe0y",children:"Build b\u1ed9 khung n\xe0y"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"N\u1ebfu b\u1ea1n ch\u01b0a clone repository ch\xednh, h\xe3y m\u1edf m\u1ed9t terminal v\xe0 ch\u1ea1y c\xe2u l\u1ec7nh:"}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"git clone https://github.com/near-examples/nft-tutorial-js/\n"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Next, switch to the ",(0,r.jsx)(n.code,{children:"1.skeleton"})," branch."]}),"\n",(0,r.jsxs)(n.li,{children:["Install the dependencies (including the JS SDK): ",(0,r.jsx)(n.code,{children:"yarn"})]}),"\n",(0,r.jsxs)(n.li,{children:["Build the contract with ",(0,r.jsx)(n.code,{children:"yarn build"}),":"]}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"git clone https://github.com/near-examples/nft-tutorial-js/\ncd nft-tutorial-js\ngit checkout 1.skeleton\nyarn && yarn build\n"})}),(0,r.jsxs)(n.p,{children:["Once this finishes, the ",(0,r.jsx)(n.code,{children:"nft-tutorial-js/build"})," directory should contain the ",(0,r.jsx)(n.code,{children:"nft.wasm"})," smart contract!"]}),(0,r.jsx)(n.p,{children:"Building the skeleton is useful to validate that everything works properly and that you'll be able to compile improved versions of this NFT contract in the upcoming tutorials."}),(0,r.jsx)(n.hr,{}),(0,r.jsx)(n.h2,{id:"k\u1ebft-lu\u1eadn",children:"K\u1ebft lu\u1eadn"}),(0,r.jsxs)(n.p,{children:["B\u1ea1n \u0111\xe3 xem b\u1ed1 c\u1ee5c c\u1ee7a NFT smart contract n\xe0y v\xe0 c\xe1ch t\u1ea5t c\u1ea3 c\xe1c function \u0111\u01b0\u1ee3c b\u1ed1 tr\xed qua c\xe1c source file kh\xe1c nhau. S\u1eed d\u1ee5ng ",(0,r.jsx)(n.code,{children:"yarn"}),", b\u1ea1n \u0111\xe3 c\xf3 th\u1ec3 compile contract, v\xe0 b\u1ea1n s\u1ebd b\u1eaft \u0111\u1ea7u b\u1ed5 sung th\xeam cho skeleton n\xe0y trong ",(0,r.jsx)(n.a,{href:"/tutorials/nfts/js/minting",children:"Minting tutorial"})," ti\u1ebfp theo."]}),(0,r.jsx)(n.admonition,{title:"Versioning for this article At the time of this writing, this example works with the following versions:",type:"note",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["near-sdk-js: ",(0,r.jsx)(n.code,{children:"0.4.0-5"})]}),"\n",(0,r.jsxs)(n.li,{children:["NFT standard: ",(0,r.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Core",children:"NEP171"}),", version ",(0,r.jsx)(n.code,{children:"1.0.0"})]}),"\n"]})})]})]})}function u(t={}){const{wrapper:n}={...(0,s.a)(),...t.components};return n?(0,r.jsx)(n,{...t,children:(0,r.jsx)(h,{...t})}):h(t)}},85162:(t,n,e)=>{e.d(n,{Z:()=>l});e(67294);var r=e(36905);const s={tabItem:"tabItem_Ymn6"};var i=e(85893);function l(t){var n=t.children,e=t.hidden,l=t.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,l),hidden:e,children:n})}},74866:(t,n,e)=>{e.d(n,{Z:()=>k});var r=e(67294),s=e(36905),i=e(12466),l=e(16550),a=e(20469),c=e(91980),o=e(67392),d=e(50012);function h(t){var n,e;return null!=(n=null==(e=r.Children.toArray(t).filter((function(t){return"\n"!==t})).map((function(t){if(!t||(0,r.isValidElement)(t)&&((n=t.props)&&"object"==typeof n&&"value"in n))return t;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:e.filter(Boolean))?n:[]}function u(t){var n=t.values,e=t.children;return(0,r.useMemo)((function(){var t=null!=n?n:function(t){return h(t).map((function(t){var n=t.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(e);return function(t){var n=(0,o.l)(t,(function(t,n){return t.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(t),t}),[n,e])}function j(t){var n=t.value;return t.tabValues.some((function(t){return t.value===n}))}function x(t){var n=t.queryString,e=void 0!==n&&n,s=t.groupId,i=(0,l.k6)(),a=function(t){var n=t.queryString,e=void 0!==n&&n,r=t.groupId;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:e,groupId:s});return[(0,c._X)(a),(0,r.useCallback)((function(t){if(a){var n=new URLSearchParams(i.location.search);n.set(a,t),i.replace(Object.assign({},i.location,{search:n.toString()}))}}),[a,i])]}function f(t){var n,e,s,i,l=t.defaultValue,c=t.queryString,o=void 0!==c&&c,h=t.groupId,f=u(t),p=(0,r.useState)((function(){return function(t){var n,e=t.defaultValue,r=t.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!j({value:e,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+e+'" but none of its children has the corresponding value. Available values are: '+r.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return e}var s=null!=(n=r.find((function(t){return t.default})))?n:r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:l,tabValues:f})})),g=p[0],m=p[1],v=x({queryString:o,groupId:h}),b=v[0],y=v[1],k=(n=function(t){return t?"docusaurus.tab."+t:null}({groupId:h}.groupId),e=(0,d.Nk)(n),s=e[0],i=e[1],[s,(0,r.useCallback)((function(t){n&&i.set(t)}),[n,i])]),T=k[0],N=k[1],_=function(){var t=null!=b?b:T;return j({value:t,tabValues:f})?t:null}();return(0,a.Z)((function(){_&&m(_)}),[_]),{selectedValue:g,selectValue:(0,r.useCallback)((function(t){if(!j({value:t,tabValues:f}))throw new Error("Can't select invalid tab value="+t);m(t),y(t),N(t)}),[y,N,f]),tabValues:f}}var p=e(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=e(85893);function v(t){var n=t.className,e=t.block,r=t.selectedValue,l=t.selectValue,a=t.tabValues,c=[],o=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(t){var n=t.currentTarget,e=c.indexOf(n),s=a[e].value;s!==r&&(o(n),l(s))},h=function(t){var n,e=null;switch(t.key){case"Enter":d(t);break;case"ArrowRight":var r,s=c.indexOf(t.currentTarget)+1;e=null!=(r=c[s])?r:c[0];break;case"ArrowLeft":var i,l=c.indexOf(t.currentTarget)-1;e=null!=(i=c[l])?i:c[c.length-1]}null==(n=e)||n.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":e},n),children:a.map((function(t){var n=t.value,e=t.label,i=t.attributes;return(0,m.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(t){return c.push(t)},onKeyDown:h,onClick:d},i,{className:(0,s.Z)("tabs__item",g.tabItem,null==i?void 0:i.className,{"tabs__item--active":r===n}),children:null!=e?e:n}),n)}))})}function b(t){var n=t.lazy,e=t.children,s=t.selectedValue,i=(Array.isArray(e)?e:[e]).filter(Boolean);if(n){var l=i.find((function(t){return t.props.value===s}));return l?(0,r.cloneElement)(l,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:i.map((function(t,n){return(0,r.cloneElement)(t,{key:n,hidden:t.props.value!==s})}))})}function y(t){var n=f(t);return(0,m.jsxs)("div",{className:(0,s.Z)("tabs-container",g.tabList),children:[(0,m.jsx)(v,Object.assign({},t,n)),(0,m.jsx)(b,Object.assign({},t,n))]})}function k(t){var n=(0,p.Z)();return(0,m.jsx)(y,Object.assign({},t,{children:h(t.children)}),String(n))}},77229:(t,n,e)=>{e.d(n,{Ey:()=>d,O2:()=>c,SQ:()=>o});e(67294);var r=e(74866),s=e(85162),i=e(95665),l=e.n(i),a=e(85893);function c(t){var n=t.children;return Array.isArray(n)||(n=[n]),(0,a.jsx)(r.Z,{className:"language-tabs",groupId:"code-tabs",children:n.map((function(t,n){return(0,a.jsx)(s.Z,{value:t.props.value,label:t.props.value,children:t})}))})}function o(t){var n=t.children,e=t.language;return Array.isArray(n)||(n=[n]),n=n.map((function(t){return function(t,n){var e=t.props,r=(e.children,e.url),s=e.start,i=e.end,l=e.fname;if(t.type===d)return d({url:r,start:s,end:i,language:n,fname:l});return t}(t,e)})),1==n.length?(0,a.jsx)(s.Z,{value:0,label:n[0].props.fname,children:n[0]}):(0,a.jsx)(r.Z,{className:"file-tabs",children:n.map((function(t,n){return(0,a.jsx)(s.Z,{value:n,label:t.props.fname,children:t})}))})}function d(t){var n=t.url,e=t.start,r=t.end,s=t.language,i=t.fname,c=n+"#";return e&&r&&(c+="L"+e+"-L"+r+"#"),(0,a.jsx)(l(),{language:s,fname:i,children:c})}}}]);