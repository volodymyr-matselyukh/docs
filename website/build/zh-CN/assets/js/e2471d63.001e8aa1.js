"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6018],{47963:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(85893),a=n(11151),o=n(77229);const i={id:"upgrade-contract",title:"Upgrading the Contract",sidebar_label:"Upgrade a Contract"},s=void 0,l={id:"tutorials/nfts/js/upgrade-contract",title:"Upgrading the Contract",description:"In this tutorial, you'll build off the work you previously did to implement the minting functionality on a skeleton smart contract. You got to the point where NFTs could be minted, however, the wallet had no way of displaying the tokens since your contract didn't implement the method that the wallet was trying to call.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/3.tutorials/nfts/js/2-upgrade.md",sourceDirName:"3.tutorials/nfts/js",slug:"/tutorials/nfts/js/upgrade-contract",permalink:"/zh-CN/tutorials/nfts/js/upgrade-contract",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/nfts/js/2-upgrade.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1705914809e3,sidebarPosition:2,frontMatter:{id:"upgrade-contract",title:"Upgrading the Contract",sidebar_label:"Upgrade a Contract"},sidebar:"tutorials",previous:{title:"Minting",permalink:"/zh-CN/tutorials/nfts/js/minting"},next:{title:"Enumeration",permalink:"/zh-CN/tutorials/nfts/js/enumeration"}},c={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Upgrading contracts overview",id:"upgrading-contracts",level:2},{value:"Modifications to our contract",id:"modifications-to-contract",level:2},{value:"Redeploying the contract",id:"redeploying-contract",level:2},{value:"Viewing NFTs in the wallet",id:"viewing-nfts-in-wallet",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components},{Details:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["In this tutorial, you'll build off the work you previously did to implement the ",(0,r.jsx)(t.a,{href:"/tutorials/nfts/js/minting",children:"minting functionality"})," on a skeleton smart contract. You got to the point where NFTs could be minted, however, the wallet had no way of displaying the tokens since your contract didn't implement the method that the wallet was trying to call."]}),"\n",(0,r.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsxs)(t.p,{children:["Today you'll learn about deploying patch fixes to smart contracts and you'll use that knowledge to implement the ",(0,r.jsx)(t.code,{children:"nft_tokens_for_owner"})," function on the contract you deployed in the previous tutorial."]}),"\n",(0,r.jsx)(t.h2,{id:"upgrading-contracts",children:"Upgrading contracts overview"}),"\n",(0,r.jsx)(t.p,{children:"Upgrading contracts, when done right, can be an immensely powerful tool. If done wrong, it can lead to a lot of headaches. It's important to distinguish between the code and state of a smart contract. When a contract is deployed on top of an existing contract, the only thing that changes is the code. The state will remain the same and that's where a lot of developer's issues come to fruition."}),"\n",(0,r.jsx)(t.p,{children:"The NEAR Runtime will read the serialized state from disk and it will attempt to load it using the current contract code. When your code changes, it might not be able to figure out how to do this."}),"\n",(0,r.jsxs)(t.p,{children:["You need to strategically upgrade your contracts and make sure that the runtime will be able to read your current state with the new contract code. For more information about upgrading contracts and some best practices, see the NEAR SDK's ",(0,r.jsx)(t.a,{href:"/sdk/rust/building/prototyping",children:"upgrading contracts"})," write-up."]}),"\n",(0,r.jsx)(t.h2,{id:"modifications-to-contract",children:"Modifications to our contract"}),"\n",(0,r.jsxs)(t.p,{children:["In order for the wallet to properly display your NFTs, you need to implement the ",(0,r.jsx)(t.code,{children:"nft_tokens_for_owner"})," method. This will allow anyone to query for a paginated list of NFTs owned by a given account ID."]}),"\n",(0,r.jsxs)(t.p,{children:["To accomplish this, let's break it down into some smaller subtasks. First, you need to get access to a list of all token IDs owned by a user. This information can be found in the ",(0,r.jsx)(t.code,{children:"tokensPerOwner"})," data structure. Now that you have a set of token IDs, you need to convert them into ",(0,r.jsx)(t.code,{children:"JsonToken"})," objects as that's what you'll be returning from the function."]}),"\n",(0,r.jsxs)(t.p,{children:["Luckily, you wrote a function ",(0,r.jsx)(t.code,{children:"nft_token"})," which takes a token ID and returns a ",(0,r.jsx)(t.code,{children:"JsonToken"})," in the ",(0,r.jsx)(t.code,{children:"nft_core.ts"})," file. As you can guess, in order to get a list of ",(0,r.jsx)(t.code,{children:"JsonToken"})," objects, you would need to iterate through the token IDs owned by the user and then convert each token ID into a ",(0,r.jsx)(t.code,{children:"JsonToken"})," and store that in a list."]}),"\n",(0,r.jsxs)(t.p,{children:["As for the pagination, you can use some basic JavaScript to get that done. Let's move over to the ",(0,r.jsx)(t.code,{children:"enumeration.ts"})," file and implement that logic:"]}),"\n",(0,r.jsx)(o.Ey,{language:"js",start:"47",end:"82",url:"https://github.com/near-examples/nft-tutorial-js/blob/2.minting/src/nft-contract/enumeration.ts"}),"\n",(0,r.jsx)(t.h2,{id:"redeploying-contract",children:"Redeploying the contract"}),"\n",(0,r.jsxs)(t.p,{children:["Now that you've implemented the necessary logic for ",(0,r.jsx)(t.code,{children:"nft_tokens_for_owner"}),", it's time to build and re-deploy the contract to your account. Using the build script, deploy the contract as you did in the previous tutorial:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"yarn build && near deploy --wasmFile build/nft.wasm --accountId $NFT_CONTRACT_ID\n"})}),"\n",(0,r.jsxs)(t.p,{children:["This should output a warning saying that the account has a deployed contract and will ask if you'd like to proceed. Simply type ",(0,r.jsx)(t.code,{children:"y"})," and hit enter."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"This account already has a deployed contract [ AKJK7sCysrWrFZ976YVBnm6yzmJuKLzdAyssfzK9yLsa ]. Do you want to proceed? (y/n)\n"})}),"\n",(0,r.jsx)(t.p,{children:"Once the contract has been redeployed, let's test and see if the state migrated correctly by running a simple view function:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"near view $NFT_CONTRACT_ID nft_metadata\n"})}),"\n",(0,r.jsx)(t.p,{children:"This should return an output similar to the following:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"{ spec: 'nft-1.0.0', name: 'NFT Tutorial Contract', symbol: 'GOTEAM' }\n"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Go team!"})," At this point, you can now test and see if the new function you wrote works correctly. Let's query for the list of tokens that you own:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'near view $NFT_CONTRACT_ID nft_tokens_for_owner \'{"account_id": "\'$NFT_CONTRACT_ID\'", "limit": 5}\'\n'})}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:"Example response: "}),(0,r.jsx)("p",{children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"[\n  {\n    token_id: 'token-1',\n    owner_id: 'goteam.examples.testnet',\n    metadata: {\n      title: 'My Non Fungible Team Token',\n      description: 'The Team Most Certainly Goes :)',\n      media: 'https://bafybeiftczwrtyr3k7a2k4vutd3amkwsmaqyhrdzlhvpt33dyjivufqusq.ipfs.dweb.link/goteam-gif.gif'\n    }\n  }\n]\n"})})})]}),"\n",(0,r.jsx)(t.h2,{id:"viewing-nfts-in-wallet",children:"Viewing NFTs in the wallet"}),"\n",(0,r.jsxs)(t.p,{children:["Now that your contract implements the necessary functions that the wallet uses to display NFTs, you should be able to see your tokens on display in the ",(0,r.jsx)(t.a,{href:"https://testnet.mynearwallet.com//?tab=collectibles",children:"collectibles tab"}),"."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"filled-nft-in-wallet",src:n(95044).Z+"",width:"635",height:"432"})}),"\n",(0,r.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,r.jsxs)(t.p,{children:["In this tutorial, you learned about the basics of ",(0,r.jsx)(t.a,{href:"#upgrading-contracts",children:"upgrading contracts"}),". Then, you implemented the necessary ",(0,r.jsx)(t.a,{href:"#modifications-to-contract",children:"modifications to your smart contract"})," and ",(0,r.jsx)(t.a,{href:"#redeploying-contract",children:"redeployed it"}),". Finally you navigated to the wallet collectibles tab and ",(0,r.jsx)(t.a,{href:"#viewing-nfts-in-wallet",children:"viewed your NFTs"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["In the ",(0,r.jsx)(t.a,{href:"/tutorials/nfts/js/enumeration",children:"next tutorial"}),", you'll implement the remaining functions needed to complete the ",(0,r.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Enumeration",children:"enumeration"})," standard."]}),"\n",(0,r.jsxs)(t.admonition,{title:"Versioning for this article",type:"note",children:[(0,r.jsx)(t.p,{children:"At the time of this writing, this example works with the following versions:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["near-cli: ",(0,r.jsx)(t.code,{children:"3.0.0"})]}),"\n",(0,r.jsxs)(t.li,{children:["NFT standard: ",(0,r.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Core",children:"NEP171"}),", version ",(0,r.jsx)(t.code,{children:"1.0.0"})]}),"\n"]})]})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>i});n(67294);var r=n(36905);const a={tabItem:"tabItem_Ymn6"};var o=n(85893);function i(e){var t=e.children,n=e.hidden,i=e.className;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,i),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>x});var r=n(67294),a=n(36905),o=n(12466),i=n(16550),s=n(20469),l=n(91980),c=n(67392),u=n(50012);function d(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,o=(0,i.k6)(),s=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:a});return[(0,l._X)(s),(0,r.useCallback)((function(e){if(s){var t=new URLSearchParams(o.location.search);t.set(s,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[s,o])]}function m(e){var t,n,a,o,i=e.defaultValue,l=e.queryString,c=void 0!==l&&l,d=e.groupId,m=h(e),g=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:m})})),b=g[0],y=g[1],v=f({queryString:c,groupId:d}),w=v[0],j=v[1],x=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,u.Nk)(t),a=n[0],o=n[1],[a,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),k=x[0],T=x[1],N=function(){var e=null!=w?w:k;return p({value:e,tabValues:m})?e:null}();return(0,s.Z)((function(){N&&y(N)}),[N]),{selectedValue:b,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);y(e),j(e),T(e)}),[j,T,m]),tabValues:m}}var g=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=n(85893);function v(e){var t=e.className,n=e.block,r=e.selectedValue,i=e.selectValue,s=e.tabValues,l=[],c=(0,o.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,n=l.indexOf(t),a=s[n].value;a!==r&&(c(t),i(a))},d=function(e){var t,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var r,a=l.indexOf(e.currentTarget)+1;n=null!=(r=l[a])?r:l[0];break;case"ArrowLeft":var o,i=l.indexOf(e.currentTarget)-1;n=null!=(o=l[i])?o:l[l.length-1]}null==(t=n)||t.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:s.map((function(e){var t=e.value,n=e.label,o=e.attributes;return(0,y.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return l.push(e)},onKeyDown:d,onClick:u},o,{className:(0,a.Z)("tabs__item",b.tabItem,null==o?void 0:o.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function w(e){var t=e.lazy,n=e.children,a=e.selectedValue,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var i=o.find((function(e){return e.props.value===a}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:o.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})}))})}function j(e){var t=m(e);return(0,y.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,y.jsx)(v,Object.assign({},e,t)),(0,y.jsx)(w,Object.assign({},e,t))]})}function x(e){var t=(0,g.Z)();return(0,y.jsx)(j,Object.assign({},e,{children:d(e.children)}),String(t))}},77229:(e,t,n)=>{n.d(t,{Ey:()=>u,O2:()=>l,SQ:()=>c});n(67294);var r=n(74866),a=n(85162),o=n(95665),i=n.n(o),s=n(85893);function l(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,s.jsx)(r.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,s.jsx)(a.Z,{value:e.props.value,label:e.props.value,children:e})}))})}function c(e){var t=e.children,n=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,r=(n.children,n.url),a=n.start,o=n.end,i=n.fname;if(e.type===u)return u({url:r,start:a,end:o,language:t,fname:i});return e}(e,n)})),1==t.length?(0,s.jsx)(a.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,s.jsx)(r.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,s.jsx)(a.Z,{value:t,label:e.props.fname,children:e})}))})}function u(e){var t=e.url,n=e.start,r=e.end,a=e.language,o=e.fname,l=t+"#";return n&&r&&(l+="L"+n+"-L"+r+"#"),(0,s.jsx)(i(),{language:a,fname:o,children:l})}},95044:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/filled-nft-in-wallet-e661209d2dbff2bb2551db943ecfc43b.png"}}]);