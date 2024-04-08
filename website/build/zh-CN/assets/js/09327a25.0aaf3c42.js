"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3254],{11408:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=n(85893),s=n(11151),l=n(77229);const i={id:"skeleton",title:"Skeleton and JavaScript Architecture",sidebar_label:"Contract Architecture"},o=void 0,a={id:"tutorials/nfts/js/skeleton",title:"Skeleton and JavaScript Architecture",description:"In this article, you'll learn about the basic architecture behind the NFT contract that you'll develop while following this \"Zero to Hero\" series. You'll discover the contract's layout and you'll see how the JavaScript files are structured in order to build a feature-complete smart contract.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/3.tutorials/nfts/js/1-skeleton.md",sourceDirName:"3.tutorials/nfts/js",slug:"/tutorials/nfts/js/skeleton",permalink:"/zh-CN/tutorials/nfts/js/skeleton",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/nfts/js/1-skeleton.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1705914809e3,sidebarPosition:1,frontMatter:{id:"skeleton",title:"Skeleton and JavaScript Architecture",sidebar_label:"Contract Architecture"},sidebar:"tutorials",previous:{title:"Pre-deployed Contract",permalink:"/zh-CN/tutorials/nfts/js/predeployed-contract"},next:{title:"Minting",permalink:"/zh-CN/tutorials/nfts/js/minting"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"File structure",id:"file-structure",level:2},{value:"Source files",id:"source-files",level:3},{value:"<code>approval.ts</code>",id:"approvalts",level:2},{value:"<code>enumeration.ts</code>",id:"enumerationts",level:2},{value:"<code>metadata.ts</code>",id:"metadatats",level:2},{value:"<code>mint.ts</code>",id:"mintts",level:2},{value:"<code>nft_core.ts</code>",id:"nft_corets",level:2},{value:"<code>royalty.ts</code>",id:"royaltyts",level:2},{value:"<code>index.ts</code>",id:"indexts",level:2},{value:"Building the skeleton",id:"building-the-skeleton",level:2},{value:"Conclusion",id:"conclusion",level:2}];function h(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["In this article, you'll learn about the basic architecture behind the NFT contract that you'll develop while following this ",(0,r.jsx)(t.em,{children:'"Zero to Hero"'})," series. You'll discover the contract's layout and you'll see how the JavaScript files are structured in order to build a feature-complete smart contract."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(t.p,{children:"This tutorial presents the code skeleton for the NFT smart contract and its file structure. You'll find how all the functions are laid out as well as the missing JS code that needs to be filled in. Once every file and function has been covered, you'll go through the process of building the mock-up contract to confirm that everything is working correctly."}),"\n",(0,r.jsx)(t.h2,{id:"file-structure",children:"File structure"}),"\n",(0,r.jsxs)(t.p,{children:["Following a regular ",(0,r.jsx)(t.a,{href:"https://www.javascript.com/",children:"JavaScript"})," project, the file structure for this smart contract has:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"package.json"})," file to define the packages and scripts used in the project."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"src"})," folder where all the JavaScript source files are stored"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"build"})," folder where the compiled ",(0,r.jsx)(t.code,{children:"wasm"})," will output to."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"source-files",children:"Source files"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"File"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#approvalts",children:"approval.ts"})}),(0,r.jsx)(t.td,{children:"Has the internal functions that controls the access and transfers of non-fungible tokens."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#enumerationts",children:"enumeration.ts"})}),(0,r.jsx)(t.td,{children:"Contains the internal methods to query for NFT tokens and their owners."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#indexts",children:"index.ts"})}),(0,r.jsx)(t.td,{children:"Holds the exposed smart contract functions."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#metadatats",children:"metadata.ts"})}),(0,r.jsx)(t.td,{children:"Defines the token and metadata structures."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#mintts",children:"mint.ts"})}),(0,r.jsx)(t.td,{children:"Contains the internal token minting logic."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#nft_corets",children:"nft_core.ts"})}),(0,r.jsx)(t.td,{children:"Has the internal core logic that allows you to transfer NFTs between users."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#royaltyts",children:"royalty.ts"})}),(0,r.jsx)(t.td,{children:"Contains the internal payout-related functions."})]})]})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"nft-tutorial-js\n\u2514\u2500\u2500 src\n    market-contract\n    nft-contract\n    \u251c\u2500\u2500 approval.ts\n    \u251c\u2500\u2500 enumeration.ts\n    \u251c\u2500\u2500 index.ts\n    \u251c\u2500\u2500 metadata.ts\n    \u251c\u2500\u2500 mint.ts\n    \u251c\u2500\u2500 nft_core.ts\n    \u2514\u2500\u2500 royalty.ts\n"})}),"\n",(0,r.jsxs)(t.admonition,{type:"tip",children:[(0,r.jsxs)(t.mdxAdmonitionTitle,{children:["Explore the code in our ",(0,r.jsx)(t.a,{href:"https://github.com/near-examples/nft-tutorial-js/tree/1.skeleton",children:"GitHub repository"}),". :::"]}),(0,r.jsx)(t.hr,{}),(0,r.jsx)(t.h2,{id:"approvalts",children:(0,r.jsx)(t.code,{children:"approval.ts"})}),(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"This allows people to approve other accounts to transfer NFTs on their behalf."}),"\n"]}),(0,r.jsxs)(t.p,{children:["This file contains the internal logic that complies with the standard's ",(0,r.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/ApprovalManagement",children:"approvals management"})," extension. Here is a breakdown of the methods and their functions:"]}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Method"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"internalNftApprove"})}),(0,r.jsxs)(t.td,{children:["Approves an account ID to transfer a token on your behalf. Called during ",(0,r.jsx)(t.strong,{children:"nft_approve"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"internalNftIsApproved"})}),(0,r.jsxs)(t.td,{children:["Checks if the input account has access to approve the token ID. Called during ",(0,r.jsx)(t.strong,{children:"nft_is_approved"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"internalNftRevoke"})}),(0,r.jsxs)(t.td,{children:["Revokes a specific account from transferring the token on your behalf. Called during ",(0,r.jsx)(t.strong,{children:"nft_revoke"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"internalNftRevokeAll"})}),(0,r.jsxs)(t.td,{children:["Revokes all accounts from transferring the token on your behalf. Called during ",(0,r.jsx)(t.strong,{children:"nft_revoke_all"}),"."]})]})]})]}),(0,r.jsx)(l.Ey,{language:"js",start:"9",end:"69",url:"https://github.com/near-examples/nft-tutorial-js/blob/1.skeleton/src/nft-contract/approval.ts"}),(0,r.jsxs)(t.p,{children:["You'll learn more about these functions in the ",(0,r.jsx)(t.a,{href:"/tutorials/nfts/js/approvals",children:"approvals section"})," of the Zero to Hero series."]}),(0,r.jsx)(t.hr,{}),(0,r.jsx)(t.h2,{id:"enumerationts",children:(0,r.jsx)(t.code,{children:"enumeration.ts"})}),(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["This file provides the internal functions needed to view information about NFTs, and follows the standard's ",(0,r.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Enumeration",children:"enumeration"})," extension."]}),"\n"]}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Method"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"internalNftTotalSupply"})}),(0,r.jsxs)(t.td,{children:["Returns the total amount of NFTs stored on the contract. Called during ",(0,r.jsx)(t.strong,{children:"nft_total_supply"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"internalNftTokens"})}),(0,r.jsxs)(t.td,{children:["Returns a paginated list of NFTs stored on the contract regardless of their owner. Called during ",(0,r.jsx)(t.strong,{children:"nft_tokens"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"internalNftSupplyForOwner"})}),(0,r.jsxs)(t.td,{children:["Allows you view the total number of NFTs owned by any given user. Called during ",(0,r.jsx)(t.strong,{children:"nft_supply_for_owner"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"internalNftTokensForOwner"})}),(0,r.jsxs)(t.td,{children:["Returns a paginated list of NFTs owned by any given user. Called during ",(0,r.jsx)(t.strong,{children:"nft_tokens_for_owner"}),"."]})]})]})]}),(0,r.jsx)(l.Ey,{language:"js",start:"8",end:"62",url:"https://github.com/near-examples/nft-tutorial-js/blob/1.skeleton/src/nft-contract/enumeration.ts"}),(0,r.jsxs)(t.p,{children:["You'll learn more about these functions in the ",(0,r.jsx)(t.a,{href:"/tutorials/nfts/js/enumeration",children:"enumeration section"})," of the tutorial series."]}),(0,r.jsx)(t.hr,{}),(0,r.jsx)(t.h2,{id:"metadatats",children:(0,r.jsx)(t.code,{children:"metadata.ts"})}),(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["This file is used to keep track of the information to be stored for tokens, and metadata. In addition, you can define a function to view the contract's metadata which is part of the standard's ",(0,r.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Metadata",children:"metadata"})," extension."]}),"\n"]}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"TokenMetadata"})}),(0,r.jsx)(t.td,{children:"This structure defines the metadata that can be stored for each token. (title, description, media, etc."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Token"})}),(0,r.jsx)(t.td,{children:"This structure outlines what information will be stored on the contract for each token."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"JsonToken"})}),(0,r.jsx)(t.td,{children:"When querying information about NFTs through view calls, the return information is stored in this JSON token."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"internalNftMetadata"})}),(0,r.jsxs)(t.td,{children:["This function allows users to query for the contact's internal metadata. Called during ",(0,r.jsx)(t.strong,{children:"nft_metadata"}),"."]})]})]})]}),(0,r.jsx)(l.Ey,{language:"js",start:"12",end:"46",url:"https://github.com/near-examples/nft-tutorial-js/blob/1.skeleton/src/nft-contract/metadata.ts"}),(0,r.jsxs)(t.p,{children:["You'll learn more about these functions in the ",(0,r.jsx)(t.a,{href:"/tutorials/nfts/js/minting",children:"minting section"})," of the tutorial series."]}),(0,r.jsx)(t.hr,{}),(0,r.jsx)(t.h2,{id:"mintts",children:(0,r.jsx)(t.code,{children:"mint.ts"})}),(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Contains the internal token minting logic."}),"\n"]}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Method"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"internalNftMint"})}),(0,r.jsxs)(t.td,{children:["This function mints a non-fungible token. Called during ",(0,r.jsx)(t.strong,{children:"nft_mint"}),"."]})]})})]}),(0,r.jsx)(l.Ey,{language:"js",start:"7",end:"23",url:"https://github.com/near-examples/nft-tutorial-js/blob/1.skeleton/src/nft-contract/mint.ts"}),(0,r.jsx)(t.hr,{}),(0,r.jsx)(t.h2,{id:"nft_corets",children:(0,r.jsx)(t.code,{children:"nft_core.ts"})}),(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Core logic that allows you to transfer NFTs between users."}),"\n"]}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Method"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"internalNftTransfer"})}),(0,r.jsxs)(t.td,{children:["Transfers an NFT to a receiver ID. Called during ",(0,r.jsx)(t.strong,{children:"nft_transfer"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"internalNftTransferCall"})}),(0,r.jsxs)(t.td,{children:["Transfers an NFT to a receiver and calls a function on the receiver ID's contract. The function returns ",(0,r.jsx)(t.code,{children:"true"})," if the token was transferred from the sender's account. Called during ",(0,r.jsx)(t.strong,{children:"nft_transfer_call"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"internalNftToken"})}),(0,r.jsxs)(t.td,{children:["Allows users to query for the information about a specific NFT. Called during ",(0,r.jsx)(t.strong,{children:"nft_token"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"internalNftResolveTransfer"})}),(0,r.jsxs)(t.td,{children:["When you start the ",(0,r.jsx)(t.code,{children:"nft_transfer_call"})," and transfer an NFT, the standard dictates that you should also call a method on the receiver's contract. If the receiver needs you to return the NFT to the sender (as per the return value of the ",(0,r.jsx)(t.code,{children:"nft_on_transfer"})," method), this function allows you to execute that logic. Called during ",(0,r.jsx)(t.strong,{children:"nft_resolve_transfer"}),"."]})]})]})]}),(0,r.jsx)(l.Ey,{language:"js",start:"10",end:"85",url:"https://github.com/near-examples/nft-tutorial-js/blob/1.skeleton/src/nft-contract/nft_core.ts"}),(0,r.jsxs)(t.p,{children:["You'll learn more about these functions in the ",(0,r.jsx)(t.a,{href:"/tutorials/nfts/js/minting",children:"minting section"})," of the tutorial series."]}),(0,r.jsx)(t.hr,{}),(0,r.jsx)(t.h2,{id:"royaltyts",children:(0,r.jsx)(t.code,{children:"royalty.ts"})}),(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Contains the internal payout-related functions."}),"\n"]}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Method"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"internalNftPayout"})}),(0,r.jsxs)(t.td,{children:["This internal method calculates the payout for a given token. Called during ",(0,r.jsx)(t.strong,{children:"nft_payout"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"internalNftTransferPayout"})}),(0,r.jsxs)(t.td,{children:["Internal method to transfer the token to the receiver ID and return the payout object that should be paid for a given balance. Called during ",(0,r.jsx)(t.strong,{children:"nft_transfer_payout"}),"."]})]})]})]}),(0,r.jsx)(l.Ey,{language:"js",start:"7",end:"45",url:"https://github.com/near-examples/nft-tutorial-js/blob/1.skeleton/src/nft-contract/royalty.ts"}),(0,r.jsxs)(t.p,{children:["You'll learn more about these functions in the ",(0,r.jsx)(t.a,{href:"/tutorials/nfts/js/royalty",children:"royalty section"})," of the tutorial series."]}),(0,r.jsx)(t.hr,{}),(0,r.jsx)(t.h2,{id:"indexts",children:(0,r.jsx)(t.code,{children:"index.ts"})}),(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"This file outlines the smart contract class and what information it stores and keeps track of. In addition, it exposes all public facing methods that are callable by the user."}),"\n"]}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Method"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"init"})}),(0,r.jsx)(t.td,{children:"Constructor function used to initialize the contract with some metadata and default state."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_mint"})}),(0,r.jsx)(t.td,{children:"Calls the internal mint function to mint an NFT."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_token"})}),(0,r.jsx)(t.td,{children:"Calls the internal function to query for info on a specific NFT"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_transfer"})}),(0,r.jsx)(t.td,{children:"Calls the internal function to transfer an NFT"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_transfer_call"})}),(0,r.jsxs)(t.td,{children:["Calls the internal function to transfer an NFT and call ",(0,r.jsx)(t.code,{children:"nft_on_transfer"})," on the receiver's contract"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_resolve_transfer"})}),(0,r.jsx)(t.td,{children:"Calls the internal function to resolve the transfer call promise."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_is_approved"})}),(0,r.jsx)(t.td,{children:"Calls the internal function to check whether someone is approved for an NFT"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_approve"})}),(0,r.jsx)(t.td,{children:"Calls the internal function to approve someone to transfer your NFT"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_payout"})}),(0,r.jsx)(t.td,{children:"Calls the internal function to query for the payout object for an NFT"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_transfer_payout"})}),(0,r.jsx)(t.td,{children:"Calls the internal function to transfer an NFT and return the payout object."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_revoke"})}),(0,r.jsx)(t.td,{children:"Calls the internal function to revoke someone access to transfer your NFT"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_revoke_all"})}),(0,r.jsx)(t.td,{children:"Calls the internal function to revoke everyone's access to transfer your NFT"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_total_supply"})}),(0,r.jsx)(t.td,{children:"Calls the internal function to query the total supply of NFTs on the contract."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_tokens"})}),(0,r.jsx)(t.td,{children:"Calls the internal function to paginate through NFTs on the contract"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_tokens_for_owner"})}),(0,r.jsx)(t.td,{children:"Calls the internal function to paginate through NFTs for a given owner"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_supply_for_owner"})}),(0,r.jsx)(t.td,{children:"Calls the internal function to query for the total number of NFTs owned by someone."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"nft_metadata"})}),(0,r.jsx)(t.td,{children:"Calls the internal function to query for the contract's metadata"})]})]})]}),(0,r.jsx)(l.Ey,{language:"js",start:"16",end:"157",url:"https://github.com/near-examples/nft-tutorial-js/blob/1.skeleton/src/nft-contract/index.ts"}),(0,r.jsxs)(t.p,{children:["You'll learn more about these functions in the ",(0,r.jsx)(t.a,{href:"/tutorials/nfts/js/minting",children:"minting section"})," of the tutorial series."]}),(0,r.jsx)(t.hr,{}),(0,r.jsx)(t.h2,{id:"building-the-skeleton",children:"Building the skeleton"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"If you haven't cloned the main repository yet, open a terminal and run:"}),"\n"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"git clone https://github.com/near-examples/nft-tutorial-js/\n"})}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Next, switch to the ",(0,r.jsx)(t.code,{children:"1.skeleton"})," branch."]}),"\n",(0,r.jsxs)(t.li,{children:["Install the dependencies (including the JS SDK): ",(0,r.jsx)(t.code,{children:"yarn"})]}),"\n",(0,r.jsxs)(t.li,{children:["Build the contract with ",(0,r.jsx)(t.code,{children:"yarn build"}),":"]}),"\n"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"git clone https://github.com/near-examples/nft-tutorial-js/\ncd nft-tutorial-js\ngit checkout 1.skeleton\nyarn && yarn build\n"})}),(0,r.jsxs)(t.p,{children:["Once this finishes, the ",(0,r.jsx)(t.code,{children:"nft-tutorial-js/build"})," directory should contain the ",(0,r.jsx)(t.code,{children:"nft.wasm"})," smart contract!"]}),(0,r.jsx)(t.p,{children:"Building the skeleton is useful to validate that everything works properly and that you'll be able to compile improved versions of this NFT contract in the upcoming tutorials."}),(0,r.jsx)(t.hr,{}),(0,r.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),(0,r.jsxs)(t.p,{children:["You've seen the layout of this NFT smart contract, and how all the functions are laid out across the different source files. Using ",(0,r.jsx)(t.code,{children:"yarn"}),", you've been able to compile the contract, and you'll start fleshing out this skeleton in the next ",(0,r.jsx)(t.a,{href:"/tutorials/nfts/js/minting",children:"Minting tutorial"}),"."]}),(0,r.jsx)(t.admonition,{title:"Versioning for this article At the time of this writing, this example works with the following versions:",type:"note",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["near-sdk-js: ",(0,r.jsx)(t.code,{children:"0.4.0-5"})]}),"\n",(0,r.jsxs)(t.li,{children:["NFT standard: ",(0,r.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Core",children:"NEP171"}),", version ",(0,r.jsx)(t.code,{children:"1.0.0"})]}),"\n"]})})]})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>i});n(67294);var r=n(36905);const s={tabItem:"tabItem_Ymn6"};var l=n(85893);function i(e){var t=e.children,n=e.hidden,i=e.className;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,i),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(67294),s=n(36905),l=n(12466),i=n(16550),o=n(20469),a=n(91980),c=n(67392),d=n(50012);function h(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function u(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:function(e){return h(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function j(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function x(e){var t=e.queryString,n=void 0!==t&&t,s=e.groupId,l=(0,i.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:s});return[(0,a._X)(o),(0,r.useCallback)((function(e){if(o){var t=new URLSearchParams(l.location.search);t.set(o,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[o,l])]}function f(e){var t,n,s,l,i=e.defaultValue,a=e.queryString,c=void 0!==a&&a,h=e.groupId,f=u(e),p=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!j({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var s=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:i,tabValues:f})})),m=p[0],g=p[1],b=x({queryString:c,groupId:h}),v=b[0],y=b[1],k=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:h}.groupId),n=(0,d.Nk)(t),s=n[0],l=n[1],[s,(0,r.useCallback)((function(e){t&&l.set(e)}),[t,l])]),T=k[0],w=k[1],N=function(){var e=null!=v?v:T;return j({value:e,tabValues:f})?e:null}();return(0,o.Z)((function(){N&&g(N)}),[N]),{selectedValue:m,selectValue:(0,r.useCallback)((function(e){if(!j({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);g(e),y(e),w(e)}),[y,w,f]),tabValues:f}}var p=n(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(85893);function b(e){var t=e.className,n=e.block,r=e.selectedValue,i=e.selectValue,o=e.tabValues,a=[],c=(0,l.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=a.indexOf(t),s=o[n].value;s!==r&&(c(t),i(s))},h=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,s=a.indexOf(e.currentTarget)+1;n=null!=(r=a[s])?r:a[0];break;case"ArrowLeft":var l,i=a.indexOf(e.currentTarget)-1;n=null!=(l=a[i])?l:a[a.length-1]}null==(t=n)||t.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:o.map((function(e){var t=e.value,n=e.label,l=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return a.push(e)},onKeyDown:h,onClick:d},l,{className:(0,s.Z)("tabs__item",m.tabItem,null==l?void 0:l.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function v(e){var t=e.lazy,n=e.children,s=e.selectedValue,l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var i=l.find((function(e){return e.props.value===s}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})}))})}function y(e){var t=f(e);return(0,g.jsxs)("div",{className:(0,s.Z)("tabs-container",m.tabList),children:[(0,g.jsx)(b,Object.assign({},e,t)),(0,g.jsx)(v,Object.assign({},e,t))]})}function k(e){var t=(0,p.Z)();return(0,g.jsx)(y,Object.assign({},e,{children:h(e.children)}),String(t))}},77229:(e,t,n)=>{n.d(t,{Ey:()=>d,O2:()=>a,SQ:()=>c});n(67294);var r=n(74866),s=n(85162),l=n(95665),i=n.n(l),o=n(85893);function a(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,o.jsx)(r.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,o.jsx)(s.Z,{value:e.props.value,label:e.props.value,children:e})}))})}function c(e){var t=e.children,n=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,r=(n.children,n.url),s=n.start,l=n.end,i=n.fname;if(e.type===d)return d({url:r,start:s,end:l,language:t,fname:i});return e}(e,n)})),1==t.length?(0,o.jsx)(s.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,o.jsx)(r.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,o.jsx)(s.Z,{value:t,label:e.props.fname,children:e})}))})}function d(e){var t=e.url,n=e.start,r=e.end,s=e.language,l=e.fname,a=t+"#";return n&&r&&(a+="L"+n+"-L"+r+"#"),(0,o.jsx)(i(),{language:s,fname:l,children:a})}}}]);