"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3726],{60533:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var s=r(85893),n=r(11151);const a={sidebar_position:3,sidebar_label:"Seed phrase logic",title:"Implementing the seed phrase logic from the necessary libraries"},o="Seed phrase and key derivation",i={id:"tutorials/crosswords/intermediate/use-seed-phrase",title:"Implementing the seed phrase logic from the necessary libraries",description:"There are two separate things we'll want to do:",source:"@site/../docs/3.tutorials/crosswords/03-intermediate/02-use-seed-phrase.md",sourceDirName:"3.tutorials/crosswords/03-intermediate",slug:"/tutorials/crosswords/intermediate/use-seed-phrase",permalink:"/tutorials/crosswords/intermediate/use-seed-phrase",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/crosswords/03-intermediate/02-use-seed-phrase.md",tags:[],version:"current",lastUpdatedBy:"Dami\xe1n Parrino",lastUpdatedAt:171949546e4,sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Seed phrase logic",title:"Implementing the seed phrase logic from the necessary libraries"},sidebar:"tutorials",previous:{title:"Solution as seed phrase",permalink:"/tutorials/crosswords/intermediate/access-key-solution"},next:{title:"Linkdrop contract",permalink:"/tutorials/crosswords/intermediate/linkdrop"}},d={},c=[{value:"near-seed-phrase library",id:"near-seed-phrase-library",level:2},{value:"Generate random seed phrase for new account creation (if the winner doesn&#39;t already have an account)",id:"generate-random-seed-phrase-for-new-account-creation-if-the-winner-doesnt-already-have-an-account",level:2},{value:"Parse solution as seed phrase",id:"parse-solution-as-seed-phrase",level:2},{value:"Key stores",id:"key-stores",level:3}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"seed-phrase-and-key-derivation",children:"Seed phrase and key derivation"}),"\n",(0,s.jsx)(t.p,{children:"There are two separate things we'll want to do:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Create a random seed phrase"}),' for the user when they visit the crossword puzzle. This will be used if they win and don\'t have a NEAR account and wish to create one. They can then paste this seed phrase into NEAR Wallet afterward to import their account (which is basically like "logging in" and is currently possible at ',(0,s.jsx)(t.a,{href:"https://testnet.mynearwallet.com/recover-seed-phrase",children:"https://testnet.mynearwallet.com/recover-seed-phrase"}),")."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Turn the crossword solution into a key pair"}),", instead of just hashing it."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"near-seed-phrase-library",children:"near-seed-phrase library"}),"\n",(0,s.jsxs)(t.p,{children:["We can add the ",(0,s.jsx)(t.code,{children:"near-seed-phrase"})," package to our project with:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npm install near-seed-phrase --save\n"})}),"\n",(0,s.jsxs)(t.admonition,{title:"Code snippets for this chapter",type:"note",children:[(0,s.jsx)(t.p,{children:"At this point in the tutorial, it's more difficult to share code snippets that are both meaningful and meant to be copy/pasted into a project."}),(0,s.jsxs)(t.p,{children:["The snippets provided might differ slightly from the implementation of the ",(0,s.jsx)(t.a,{href:"https://github.com/near-examples/crossword-tutorial-chapter-3",children:"completed code for chapter 3"}),", which might be the best place to look for the functioning code."]})]}),"\n",(0,s.jsx)(t.h2,{id:"generate-random-seed-phrase-for-new-account-creation-if-the-winner-doesnt-already-have-an-account",children:"Generate random seed phrase for new account creation (if the winner doesn't already have an account)"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"import { generateSeedPhrase } from 'near-seed-phrase';\n\n// Create a random key in here\nlet seedPhrase = generateSeedPhrase(); // generateSeedPhrase() returns an object {seedPhrase, publicKey, secretKey}\nlocalStorage.setItem('playerKeyPair', JSON.stringify(seedPhrase));\n"})}),"\n",(0,s.jsx)(t.h2,{id:"parse-solution-as-seed-phrase",children:"Parse solution as seed phrase"}),"\n",(0,s.jsx)(t.p,{children:"(This security measure prevents front-running.)"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"import { parseSeedPhrase } from 'near-seed-phrase';\n// Get the seed phrase from the completed puzzle.\n// The original puzzle creator would have already called this same function with the same inputs and would have\n// already called `AddKey` on this contract to add the key related to this seed phrase. Here, using this deterministic\n// function, the front-end will automatically generate that same key based on the inputs from the winner.\nconst seedPhrase = parseSolutionSeedPhrase(data, gridData); // returns a string of space-separated words\n// Get the public and private key derived from the seed phrase\nconst {secretKey, publicKey} = parseSeedPhrase(seedPhrase);\n\n// Set up the account and connection, acting on behalf of the crossword account\nconst keyStore = new nearAPI.keyStores.InMemoryKeyStore(); // Another type of key\nconst keyPair = nearAPI.utils.key_pair.KeyPair.fromString(secretKey);\nawait keyStore.setKey(nearConfig.networkId, nearConfig.contractName, keyPair);\nnearConfig.keyStore = keyStore;\nconst near = await nearAPI.connect(nearConfig);\nconst crosswordAccount = await near.account(nearConfig.contractName);\n\n// Call the submit_solution method using the discovered function-call access key\nlet transaction = await crosswordAccount.functionCall(\u2026);\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The last line should look familiar. We did something similar in the last chapter, except we used the ",(0,s.jsx)(t.code,{children:"WalletConnection"}),"'s account to do the function call."]}),"\n",(0,s.jsxs)(t.p,{children:["This time we're using an ",(0,s.jsx)(t.code,{children:"InMemoryKeyStore"})," instead of the browser, as you can see toward the middle of the snippet."]}),"\n",(0,s.jsx)(t.h3,{id:"key-stores",children:"Key stores"}),"\n",(0,s.jsxs)(t.p,{children:["We have now used almost all the key stores available in ",(0,s.jsx)(t.code,{children:"near-api-js"}),":"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"UnencryptedFileSystemKeyStore"})," \u2014 early on, when we used the NEAR CLI command ",(0,s.jsx)(t.code,{children:"near login"}),", this created a file in our operating system's home directory containing a private, full-access key to our account."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"BrowserLocalStorageKeyStore"})," \u2014 in the last chapter, when the user first logs in, the function-call access key is saved in the browser's local storage."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"InMemoryKeyStore"})," \u2014 for this chapter, we'll simply use the computer's memory to store the private key derived from the crossword solution."]}),"\n"]}),"\n",(0,s.jsxs)(t.admonition,{title:"You can have multiple key stores",type:"tip",children:[(0,s.jsxs)(t.p,{children:["Technically, there's another type of key store called the ",(0,s.jsx)(t.code,{children:"MergeKeyStore"}),"."]}),(0,s.jsxs)(t.p,{children:["Say you want to look for private keys in various directories. You can essentially have a list of ",(0,s.jsx)(t.code,{children:"UnencryptedFileSystemKeyStore"})," key stores that look in different places."]}),(0,s.jsxs)(t.p,{children:["Use the ",(0,s.jsx)(t.code,{children:"MergeKeyStore"})," when you might want to look for a private key in more than one place."]})]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>o});var s=r(67294);const n={},a=s.createContext(n);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);