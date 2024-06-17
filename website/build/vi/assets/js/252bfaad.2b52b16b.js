"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5720],{27655:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=t(85893),a=t(11151),i=t(71183);const o={id:"enumeration",title:"Enumeration",sidebar_label:"Enumeration"},c=void 0,s={id:"tutorials/nfts/js/enumeration",title:"Enumeration",description:"Trong c\xe1c h\u01b0\u1edbng d\u1eabn tr\u01b0\u1edbc, b\u1ea1n \u0111\xe3 xem x\xe9t c\xe1c c\xe1ch t\xedch h\u1ee3p ch\u1ee9c n\u0103ng mint v\xe0o m\u1ed9t skeleton smart contract. \u0110\u1ec3 NFT c\u1ee7a b\u1ea1n hi\u1ec3n th\u1ecb trong v\xed, b\u1ea1n c\u0169ng ph\u1ea3i deploy m\u1ed9t b\u1ea3n v\xe1 l\u1ed7i \u0111\xe3 \u0111\u01b0\u1ee3c implement m\u1ed9t trong c\xe1c enumeration method. In this tutorial, you'll expand on and finish the rest of the enumeration methods as per the standard Now you'll extend the NFT smart contract and add a couple of enumeration methods that can be used to return the contract's state.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/3.tutorials/nfts/js/3-enumeration.md",sourceDirName:"3.tutorials/nfts/js",slug:"/tutorials/nfts/js/enumeration",permalink:"/vi/tutorials/nfts/js/enumeration",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/nfts/js/3-enumeration.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1712567569e3,sidebarPosition:3,frontMatter:{id:"enumeration",title:"Enumeration",sidebar_label:"Enumeration"},sidebar:"tutorials",previous:{title:"Upgrade m\u1ed9t Contract",permalink:"/vi/tutorials/nfts/js/upgrade-contract"},next:{title:"Core",permalink:"/vi/tutorials/nfts/js/core"}},l={},u=[{value:"Gi\u1edbi thi\u1ec7u",id:"gi\u1edbi-thi\u1ec7u",level:2},{value:"C\xe1c s\u1eeda \u0111\u1ed5i v\u1edbi contract",id:"c\xe1c-s\u1eeda-\u0111\u1ed5i-v\u1edbi-contract",level:2},{value:"NFT Total Supply",id:"nft-total-supply",level:3},{value:"NFT Tokens",id:"nft-tokens",level:3},{value:"NFT Supply For Owner",id:"nft-supply-for-owner",level:3},{value:"Redeploy contract",id:"redeploying-contract",level:2},{value:"C\xe1c token enumerating",id:"c\xe1c-token-enumerating",level:2},{value:"C\xe1c token NFT",id:"c\xe1c-token-nft",level:3},{value:"C\xe1c token theo owner",id:"c\xe1c-token-theo-owner",level:3},{value:"T\u1ed5ng k\u1ebft",id:"t\u1ed5ng-k\u1ebft",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Trong c\xe1c h\u01b0\u1edbng d\u1eabn tr\u01b0\u1edbc, b\u1ea1n \u0111\xe3 xem x\xe9t c\xe1c c\xe1ch t\xedch h\u1ee3p ch\u1ee9c n\u0103ng mint v\xe0o m\u1ed9t skeleton smart contract. \u0110\u1ec3 NFT c\u1ee7a b\u1ea1n hi\u1ec3n th\u1ecb trong v\xed, b\u1ea1n c\u0169ng ph\u1ea3i deploy m\u1ed9t b\u1ea3n v\xe1 l\u1ed7i \u0111\xe3 \u0111\u01b0\u1ee3c implement m\u1ed9t trong c\xe1c enumeration method. In this tutorial, you'll expand on and finish the rest of the enumeration methods as per the ",(0,r.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Enumeration",children:"standard"})," Now you'll extend the NFT smart contract and add a couple of enumeration methods that can be used to return the contract's state."]}),"\n",(0,r.jsx)(n.h2,{id:"gi\u1edbi-thi\u1ec7u",children:"Gi\u1edbi thi\u1ec7u"}),"\n",(0,r.jsxs)(n.p,{children:["Nh\u01b0 \u0111\xe3 \u0111\u1ec1 c\u1eadp trong h\u01b0\u1edbng d\u1eabn ",(0,r.jsx)(n.a,{href:"/tutorials/nfts/js/upgrade-contract/",children:"Upgrade m\u1ed9t Contract"}),", b\u1ea1n c\xf3 th\u1ec3 deploy c\xe1c b\u1ea3n v\xe1 v\xe0 s\u1eeda l\u1ed7i cho c\xe1c smart contract. L\u1ea7n n\xe0y, b\u1ea1n s\u1ebd d\xf9ng ki\u1ebfn th\u1ee9c \u0111\xf3 \u0111\u1ec3 implement c\xe1c enumeration function ",(0,r.jsx)(n.code,{children:"nft_total_supply"}),", ",(0,r.jsx)(n.code,{children:"nft_tokens"})," v\xe0 ",(0,r.jsx)(n.code,{children:"nft_supply_for_owner"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["\u0110\u1ec3 b\u1eaft \u0111\u1ea7u, b\u1ea1n c\xf3 th\u1ec3 switch sang branch ",(0,r.jsx)(n.code,{children:"2.minting"})," t\u1eeb ",(0,r.jsx)(n.a,{href:"https://github.com/near-examples/nft-tutorial/",children:"GitHub repository"})," c\u1ee7a ch\xfang t\xf4i, ho\u1eb7c ti\u1ebfp t\u1ee5c v\u1edbi ph\u1ea7n h\u01b0\u1edbng d\u1eabn b\xean tr\xean. N\u1ebfu b\u1ea1n ch\u01b0a clone, h\xe3y tham kh\u1ea3o ",(0,r.jsx)(n.a,{href:"/tutorials/nfts/js/skeleton#building-the-skeleton",children:"Ki\u1ebfn tr\xfac c\u1ee7a Contract"})," \u0111\u1ec3 check out repository."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git checkout 2.minting\n"})}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.mdxAdmonitionTitle,{children:["N\u1ebfu b\u1ea1n mu\u1ed1n xem code ho\xe0n ch\u1ec9nh c\u1ee7a ph\u1ea7n h\u01b0\u1edbng d\u1eabn ",(0,r.jsx)(n.em,{children:"Enumeration"})," n\xe0y, b\u1ea1n c\xf3 th\u1ec3 \u0111\u1ebfn branch ",(0,r.jsx)(n.code,{children:"3.enumeration"}),". :::"]}),(0,r.jsx)(n.h2,{id:"c\xe1c-s\u1eeda-\u0111\u1ed5i-v\u1edbi-contract",children:"C\xe1c s\u1eeda \u0111\u1ed5i v\u1edbi contract"}),(0,r.jsxs)(n.p,{children:["Let's start by opening the  ",(0,r.jsx)(n.code,{children:"src/enumeration.ts"})," file and locating the empty ",(0,r.jsx)(n.code,{children:"internalNftTotalSupply"})," function."]}),(0,r.jsx)(n.h3,{id:"nft-total-supply",children:"NFT Total Supply"}),(0,r.jsxs)(n.p,{children:["Function n\xe0y s\u1ebd tr\u1ea3 v\u1ec1 t\u1ed5ng s\u1ed1 c\xe1c NFT \u0111\u01b0\u1ee3c l\u01b0u tr\u1eef tr\xean contract. You can easily achieve this functionality by simply returning the length of the ",(0,r.jsx)(n.code,{children:"nftMetadataById"})," data structure."]}),(0,r.jsx)(i.Ey,{language:"js",start:"8",end:"16",url:"https://github.com/near-examples/nft-tutorial-js/blob/3.enumeration/src/nft-contract/enumeration.ts"}),(0,r.jsx)(n.h3,{id:"nft-tokens",children:"NFT Tokens"}),(0,r.jsxs)(n.p,{children:["This function should return a paginated list of ",(0,r.jsx)(n.code,{children:"JsonTokens"})," that are stored on the contract regardless of their owners. If the user provides a ",(0,r.jsx)(n.code,{children:"from_index"})," parameter, you should use that as the starting point for which to start iterating through tokens; otherwise it should start from the beginning. Likewise, if the user provides a ",(0,r.jsx)(n.code,{children:"limit"})," parameter, the function shall stop after reaching either the limit or the end of the list."]}),(0,r.jsx)(i.Ey,{language:"js",start:"18",end:"43",url:"https://github.com/near-examples/nft-tutorial-js/blob/3.enumeration/src/nft-contract/enumeration.ts"}),(0,r.jsx)(n.h3,{id:"nft-supply-for-owner",children:"NFT Supply For Owner"}),(0,r.jsxs)(n.p,{children:["Function n\xe0y s\u1ebd t\xecm ki\u1ebfm t\u1ea5t c\u1ea3 c\xe1c non-fungible token c\u1ee7a owner do ng\u01b0\u1eddi d\xf9ng x\xe1c \u0111\u1ecbnh v\xe0 tr\u1ea3 v\u1ec1 \u0111\u1ed9 d\xe0i c\u1ee7a t\u1eadp h\u1ee3p k\u1ebft qu\u1ea3. If there isn't a set of tokens for the provided Account ID, then the function shall return ",(0,r.jsx)(n.code,{children:"0"}),"."]}),(0,r.jsx)(i.Ey,{language:"js",start:"45",end:"62",url:"https://github.com/near-examples/nft-tutorial-js/blob/3.enumeration/src/nft-contract/enumeration.ts"}),(0,r.jsx)(n.p,{children:"Ti\u1ebfp theo, b\u1ea1n c\xf3 th\u1ec3 s\u1eed d\u1ee5ng CLI \u0111\u1ec3 truy v\u1ea5n c\xe1c method m\u1edbi n\xe0y v\xe0 x\xe1c nh\u1eadn r\u1eb1ng ch\xfang ho\u1ea1t \u0111\u1ed9ng ch\xednh x\xe1c."}),(0,r.jsx)(n.h2,{id:"redeploying-contract",children:"Redeploy contract"}),(0,r.jsxs)(n.p,{children:["Gi\u1edd \u0111\xe2y b\u1ea1n \u0111\xe3 implement xong ph\u1ea7n logic c\u1ea7n thi\u1ebft cho ",(0,r.jsx)(n.code,{children:"nft_tokens_for_owner"}),", gi\u1edd l\xe0 l\xfac build v\xe0 deploy l\u1ea1i contract cho account c\u1ee7a b\u1ea1n. D\xf9ng build script, deploy contract theo c\xe1ch b\u1ea1n \u0111\xe3 l\xe0m trong c\xe1c ph\u1ea7n h\u01b0\u1edbng d\u1eabn tr\u01b0\u1edbc:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn build && near deploy --wasmFile build/nft.wasm --accountId $NFT_CONTRACT_ID\n"})}),(0,r.jsxs)(n.p,{children:["L\xfac n\xe0y s\u1ebd c\xf3 m\u1ed9t c\u1ea3nh b\xe1o n\xf3i r\u1eb1ng t\xe0i kho\u1ea3n \u0111\xe3 c\xf3 m\u1ed9t contract \u0111\xe3 \u0111\u01b0\u1ee3c deploy v\xe0 s\u1ebd h\u1ecfi b\u1ea1n c\xf3 mu\u1ed1n ti\u1ebfp t\u1ee5c hay kh\xf4ng. \u0110\u01a1n gi\u1ea3n h\xe3y g\xf5 ",(0,r.jsx)(n.code,{children:"y"})," v\xe0 \u1ea5n enter."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"This account already has a deployed contract [ AKJK7sCysrWrFZ976YVBnm6yzmJuKLzdAyssfzK9yLsa ]. Do you want to proceed? (y/n)\n"})}),(0,r.jsx)(n.h2,{id:"c\xe1c-token-enumerating",children:"C\xe1c token enumerating"}),(0,r.jsx)(n.p,{children:"Khi contract c\u1eadp nh\u1eadt \u0111\xe3 \u0111\u01b0\u1ee3c deploy l\u1ea1i, b\u1ea1n c\xf3 th\u1ec3 ki\u1ec3m tra v\xe0 xem li\u1ec7u c\xe1c function m\u1edbi n\xe0y c\xf3 ho\u1ea1t \u0111\u1ed9ng nh\u01b0 mong \u0111\u1ee3i hay kh\xf4ng."}),(0,r.jsx)(n.h3,{id:"c\xe1c-token-nft",children:"C\xe1c token NFT"}),(0,r.jsx)(n.p,{children:"H\xe3y query m\u1ed9t list c\u1ee7a non-fungible token tr\xean contract. S\u1eed d\u1ee5ng l\u1ec7nh sau \u0111\u1ec3 truy v\u1ea5n th\xf4ng tin c\u1ee7a t\u1ed1i \u0111a 50 NFT b\u1eaft \u0111\u1ea7u t\u1eeb item th\u1ee9 10:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'near view $NFT_CONTRACT_ID nft_tokens \'{"from_index": "10", "limit": 50}\'\n'})}),(0,r.jsx)(n.p,{children:"C\xe2u l\u1ec7nh n\xe0y s\u1ebd tr\u1ea3 v\u1ec1 m\u1ed9t ouput ki\u1ec3u nh\u01b0 sau:"}),(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"V\xed d\u1ee5 v\u1ec1 response nh\u1eadn \u0111\u01b0\u1ee3c: "}),(0,r.jsx)("p",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:"[]\n"})})})]}),(0,r.jsx)(n.h3,{id:"c\xe1c-token-theo-owner",children:"C\xe1c token theo owner"}),(0,r.jsxs)(n.p,{children:["\u0110\u1ec3 l\u1ea5y t\u1ed5ng s\u1ed1 l\u01b0\u1ee3ng NFT s\u1edf h\u1eefu b\u1edfi account ",(0,r.jsx)(n.code,{children:"goteam.testnet"}),", h\xe3y call function ",(0,r.jsx)(n.code,{children:"nft_supply_for_owner"})," v\xe0 set parameter ",(0,r.jsx)(n.code,{children:"account_id"}),":"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'near view $NFT_CONTRACT_ID nft_supply_for_owner \'{"account_id": "goteam.testnet"}\'\n'})}),(0,r.jsx)(n.p,{children:"N\xf3 s\u1ebd tr\u1ea3 v\u1ec1 m\u1ed9t output trong gi\u1ed1ng nh\u01b0 sau:"}),(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"V\xed d\u1ee5 v\u1ec1 response nh\u1eadn \u0111\u01b0\u1ee3c: "}),(0,r.jsx)("p",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:"0\n"})})})]}),(0,r.jsx)(n.h2,{id:"t\u1ed5ng-k\u1ebft",children:"T\u1ed5ng k\u1ebft"}),(0,r.jsxs)(n.p,{children:["Trong h\u01b0\u1edbng d\u1eabn n\xe0y, b\u1ea1n \u0111\xe3 th\xeam hai ",(0,r.jsx)(n.a,{href:"/tutorials/nfts/js/enumeration#modifications-to-the-contract",children:"enumeration function m\u1edbi"}),", v\xe0 b\xe2y gi\u1edd b\u1ea1n \u0111\xe3 c\xf3 NFT smart contract c\u01a1 b\u1ea3n v\u1edbi mint v\xe0 enumeration method. Sau khi implement c\xe1c s\u1eeda \u0111\u1ed5i n\xe0y, b\u1ea1n deploy l\u1ea1i smart contract v\xe0 test c\xe1c function b\u1eb1ng CLI."]}),(0,r.jsxs)(n.p,{children:["Trong ",(0,r.jsx)(n.a,{href:"/tutorials/nfts/js/core",children:"h\u01b0\u1edbng d\u1eabn k\u1ebf ti\u1ebfp"}),", b\u1ea1n s\u1ebd implement c\xe1c core function c\u1ea7n thi\u1ebft \u0111\u1ec3 cho ph\xe9p c\xe1c user c\xf3 th\u1ec3 transfer c\xe1c token \u0111\xe3 \u0111\u01b0\u1ee3c mint ra."]}),(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsxs)(n.mdxAdmonitionTitle,{children:["H\xe3y nh\u1edb N\u1ebfu b\u1ea1n mu\u1ed1n xem code ho\xe0n ch\u1ec9nh c\u1ee7a h\u01b0\u1edbng d\u1eabn n\xe0y, b\u1ea1n c\xf3 th\u1ec3 checkout branch ",(0,r.jsx)(n.code,{children:"3.enumeration"}),". :::"]}),(0,r.jsxs)(n.admonition,{title:"Versioning for this article",type:"note",children:[(0,r.jsx)(n.p,{children:"At the time of this writing, this example works with the following versions:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["near-cli: ",(0,r.jsx)(n.code,{children:"3.0.0"})]}),"\n",(0,r.jsxs)(n.li,{children:["NFT standard: ",(0,r.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Core",children:"NEP171"}),", version ",(0,r.jsx)(n.code,{children:"1.0.0"})]}),"\n",(0,r.jsxs)(n.li,{children:["Enumeration standard: ",(0,r.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Enumeration",children:"NEP181"}),", version ",(0,r.jsx)(n.code,{children:"1.0.0"})]}),"\n"]})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>o});t(67294);var r=t(36905);const a={tabItem:"tabItem_Ymn6"};var i=t(85893);function o(e){var n=e.children,t=e.hidden,o=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,o),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>k});var r=t(67294),a=t(36905),i=t(12466),o=t(16550),c=t(20469),s=t(91980),l=t(67392),u=t(50012);function d(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,l.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function m(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function p(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,i=(0,o.k6)(),c=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:a});return[(0,s._X)(c),(0,r.useCallback)((function(e){if(c){var n=new URLSearchParams(i.location.search);n.set(c,e),i.replace(Object.assign({},i.location,{search:n.toString()}))}}),[c,i])]}function f(e){var n,t,a,i,o=e.defaultValue,s=e.queryString,l=void 0!==s&&s,d=e.groupId,f=h(e),g=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:f})})),v=g[0],b=g[1],x=p({queryString:l,groupId:d}),j=x[0],y=x[1],k=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),t=(0,u.Nk)(n),a=t[0],i=t[1],[a,(0,r.useCallback)((function(e){n&&i.set(e)}),[n,i])]),T=k[0],w=k[1],N=function(){var e=null!=j?j:T;return m({value:e,tabValues:f})?e:null}();return(0,c.Z)((function(){N&&b(N)}),[N]),{selectedValue:v,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);b(e),y(e),w(e)}),[y,w,f]),tabValues:f}}var g=t(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(85893);function x(e){var n=e.className,t=e.block,r=e.selectedValue,o=e.selectValue,c=e.tabValues,s=[],l=(0,i.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,t=s.indexOf(n),a=c[t].value;a!==r&&(l(n),o(a))},d=function(e){var n,t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var r,a=s.indexOf(e.currentTarget)+1;t=null!=(r=s[a])?r:s[0];break;case"ArrowLeft":var i,o=s.indexOf(e.currentTarget)-1;t=null!=(i=s[o])?i:s[s.length-1]}null==(n=t)||n.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:c.map((function(e){var n=e.value,t=e.label,i=e.attributes;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return s.push(e)},onKeyDown:d,onClick:u},i,{className:(0,a.Z)("tabs__item",v.tabItem,null==i?void 0:i.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function j(e){var n=e.lazy,t=e.children,a=e.selectedValue,i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var o=i.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function y(e){var n=f(e);return(0,b.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,b.jsx)(x,Object.assign({},n,e)),(0,b.jsx)(j,Object.assign({},n,e))]})}function k(e){var n=(0,g.Z)();return(0,b.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(n))}},71183:(e,n,t)=>{t.d(n,{O2:()=>p,Ey:()=>g,SQ:()=>f});var r=t(67294),a=t(74866),i=t(85162),o=t(74165),c=t(15861),s=t(1841),l=t.n(s),u=t(85893);function d(){return(d=(0,c.Z)((0,o.Z)().mark((function e(n,t,r){var a,i,c,s;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((i=localStorage.getItem(n+"-until"))&&i>Date.now())){e.next=5;break}a=localStorage.getItem(n),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(n);case 8:return e.next=10,e.sent.text();case 10:a=e.sent,localStorage.setItem(n,a),localStorage.setItem(n+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return c=a.split("\n"),t=t?Number(t)-1:0,r=r?Number(r):c.length,c=c.slice(t,r),s=c.reduce((function(e,n){if(0===n.length)return e;var t=n.match(/^\s+/);return t?Math.min(e,t[0].length):0}),1/0),e.abrupt("return",c.map((function(e){return e.slice(s)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const h=function(e){var n=e.url,t=e.start,a=e.end,i=e.language,o=e.fname,c=e.metastring,s=(0,r.useState)("Loading..."),h=s[0],m=s[1];return(0,r.useEffect)((function(){var e=function(e){var n=e.slice(e.indexOf("https")).split("#"),t=n[0],r=(n[1],new URL(t).pathname.split("/").slice(1)),a=r[0],i=r[1];return r[2],"https://raw.githubusercontent.com/"+a+"/"+i+"/"+r[3]+"/"+r.slice(4).join("/")}(n),r=function(e,n,t){return d.apply(this,arguments)}(e,t,a);r.then((function(e){return m(e)}))})),(0,u.jsxs)("div",{fname:o,children:[(0,u.jsx)(l(),{language:i,metastring:c+" showLineNumbers",children:h}),(0,u.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,u.jsx)("a",{href:n,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var m={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function p(e){var n=e.children;return Array.isArray(n)||(n=[n]),(0,u.jsx)(a.Z,{className:"language-tabs",groupId:"code-tabs",children:n.map((function(e,n){return(0,u.jsx)(i.Z,{value:e.props.value,label:m[e.props.value],children:e})}))})}function f(e){var n=e.children,t=e.language;return Array.isArray(n)||(n=[n]),n=n.map((function(e){return function(e,n){var t=e.props,r=(t.children,t.url),a=t.start,i=t.end,o=t.fname;if(e.type===g)return g({url:r,start:a,end:i,language:n,fname:o});return e}(e,t)})),1==n.length?(0,u.jsx)(i.Z,{value:0,label:n[0].props.fname,children:n[0]}):(0,u.jsx)(a.Z,{className:"file-tabs",children:n.map((function(e,n){return(0,u.jsx)(i.Z,{value:n,label:e.props.fname,children:e})}))})}function g(e){var n=e.url,t=e.start,r=e.end,a=e.language,i=e.fname,o=e.metastring;return h({url:n,start:t,end:r,language:a,fname:i,metastring:o})}}}]);