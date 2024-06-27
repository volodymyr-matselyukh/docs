"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2477],{15709:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=t(85893),a=t(11151),s=t(71183);const i=t.p+"assets/images/boop-base64-encode-57f1146336e8a4514a80fb207a64c1e3.gif",o={sidebar_position:6,sidebar_label:"Base64 params, wrap up",title:"Using base64-encoded arguments when we create a new crossword puzzle"},l="Final modifications",c={id:"tutorials/crosswords/intermediate/base64vecu8",title:"Using base64-encoded arguments when we create a new crossword puzzle",description:"Let's modify our new_puzzle method a bit, and demonstrate how a smart contract author might use base64-encoded arguments.",source:"@site/../docs/3.tutorials/crosswords/03-intermediate/05-base64vecu8.md",sourceDirName:"3.tutorials/crosswords/03-intermediate",slug:"/tutorials/crosswords/intermediate/base64vecu8",permalink:"/tutorials/crosswords/intermediate/base64vecu8",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/crosswords/03-intermediate/05-base64vecu8.md",tags:[],version:"current",lastUpdatedBy:"Dami\xe1n Parrino",lastUpdatedAt:171949546e4,sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"Base64 params, wrap up",title:"Using base64-encoded arguments when we create a new crossword puzzle"},sidebar:"tutorials",previous:{title:"Cross-contract calls, etc.",permalink:"/tutorials/crosswords/intermediate/cross-contract-calls"},next:{title:"Posts Indexer",permalink:"/tutorials/near-components/indexer-tutorials/posts-indexer"}},u={},d=[{value:"Wrapping up",id:"wrapping-up",level:2}];function g(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"final-modifications",children:"Final modifications"}),"\n","\n",(0,r.jsxs)(n.p,{children:["Let's modify our ",(0,r.jsx)(n.code,{children:"new_puzzle"})," method a bit, and demonstrate how a smart contract author might use base64-encoded arguments."]}),"\n",(0,r.jsxs)(n.p,{children:["In the previous chapter we had a fairly long NEAR CLI command that called the ",(0,r.jsx)(n.code,{children:"new_puzzle"}),", providing it the parameters for all the clues. Having these lengthy parameters on the CLI might get cumbersome. There may be issues needing to escape single or double quotes, and each operating system may wish for a different format on the Terminal or Command Prompt."]}),"\n",(0,r.jsxs)(n.p,{children:["We're going to send all the arguments as a base64-encoded string, and make this a bit simpler. For this, we're going to use ",(0,r.jsxs)(n.a,{href:"https://docs.rs/near-sdk/latest/near_sdk/json_types/struct.Base64VecU8.html",children:[(0,r.jsx)(n.code,{children:"Base64VecU8"})," from the SDK"]}),"."]}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsxs)(n.mdxAdmonitionTitle,{children:[(0,r.jsx)(n.code,{children:"Base64VecU8"})," is great for binary payloads"]}),(0,r.jsxs)(n.p,{children:["What we're doing makes sense, but it's worth noting that it's perhaps more common to use ",(0,r.jsx)(n.code,{children:"Base64VecU8"})," when sending binary parameters."]}),(0,r.jsxs)(n.p,{children:["Read more ",(0,r.jsx)(n.a,{href:"/sdk/rust/contract-interface/serialization-interface#base64vecu8",children:"about it here"}),"."]})]}),"\n",(0,r.jsx)(n.p,{children:"First we'll set up a struct for the arguments we're expecting:"}),"\n",(0,r.jsx)(s.Ey,{language:"rust",start:"103",end:"108",url:"https://github.com/near-examples/crossword-tutorial-chapter-3/blob/master/contract/src/lib.rs"}),"\n",(0,r.jsxs)(n.p,{children:["Then we modify our ",(0,r.jsx)(n.code,{children:"new_puzzle"})," method like so:"]}),"\n",(0,r.jsx)(s.Ey,{language:"rust",start:"281",end:"289",url:"https://github.com/near-examples/crossword-tutorial-chapter-3/blob/master/contract/src/lib.rs"}),"\n",(0,r.jsxs)(n.p,{children:["We can take our original arguments and base64 encode them, using whatever method you prefer. There are plenty of online tool, Terminal commands, and open source applications like ",(0,r.jsx)(n.a,{href:"https://boop.okat.best",children:"Boop"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"We'll copy this:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'{\n  "answer_pk": "ed25519:7PkKPmVUXcupA5oU8d6TbgyMwzFe8tPV6eV1KGwgo9xg",\n  "dimensions": {\n   "x": 11,\n   "y": 10\n  },\n  "answers": [\n   {\n     "num": 1,\n     "start": {\n       "x": 0,\n       "y": 1\n     },\n     "direction": "Across",\n     "length": 12,\n     "clue": "NEAR transactions are more ______ instead of atomic."\n   },\n   {\n     "num": 2,\n     "start": {\n       "x": 6,\n       "y": 0\n     },\n     "direction": "Down",\n     "length": 7,\n     "clue": "In a smart contract, when performing an Action, you use this in Rust."\n   },\n   {\n     "num": 3,\n     "start": {\n       "x": 9,\n       "y": 0\n     },\n     "direction": "Down",\n     "length": 6,\n     "clue": "In docs.rs when you search for the near-sdk crate, these items a considered a what: collections, env, json_types."\n   },\n   {\n     "num": 4,\n     "start": {\n       "x": 1,\n       "y": 1\n     },\n     "direction": "Down",\n     "length": 10,\n     "clue": "A series of words that can deterministically generate a private key."\n   },\n   {\n     "num": 5,\n     "start": {\n       "x": 1,\n       "y": 3\n     },\n     "direction": "Across",\n     "length": 3,\n     "clue": "When doing high-level cross-contract calls, we import this that ends in _contract. When calling ourselves in a callback, it is convention to call it THIS_self."\n   },\n   {\n     "num": 6,\n     "start": {\n       "x": 0,\n       "y": 8\n     },\n     "direction": "Across",\n     "length": 8,\n     "clue": "Use this to determine the execution outcome of a cross-contract call or Action."\n   },\n   {\n     "num": 7,\n     "start": {\n       "x": 4,\n       "y": 6\n     },\n     "direction": "Across",\n     "length": 4,\n     "clue": "You chain this syntax onto a promise in order to schedule a callback afterward."\n   }\n  ]\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"and base64 encode it:"}),"\n",(0,r.jsx)("figure",{children:(0,r.jsx)("img",{src:i,alt:"Animated gif of parameters getting base64 encoded with the program Boop",width:"600"})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.p,{children:"Now we can build and run the new crossword puzzle contract as we have before:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cargo near build\n\nexport NEAR_ACCT=crossword.friend.testnet\nexport PARENT_ACCT=friend.testnet\n\nnear account delete-account $NEAR_ACCT beneficiary $PARENT_ACCT network-config testnet sign-with-legacy-keychain send\n\nnear account create-account fund-myself $NEAR_ACCT '1 NEAR' autogenerate-new-keypair save-to-legacy-keychain sign-as $PARENT_ACCT network-config testnet sign-with-legacy-keychain send\n\ncargo near deploy $NEAR_ACCT with-init-call new json-args '{\"owner_id\": \"'$NEAR_ACCT'\", \"creator_account\": \"testnet\"}' prepaid-gas '100.0 Tgas' attached-deposit '0 NEAR' network-config testnet sign-with-legacy-keychain send\n\nnear contract call-function as-transaction $NEAR_ACCT new_puzzle json-args '{\n  \"args\": \"ewogICJhbnN3ZXJfcGsiOiAiZWQyNTUxOTo3UGtLUG1WVVhjdXBBNW9VOGQ2VGJneU13ekZlOHRQVjZlVjFLR3dnbzl4ZyIsCiAgImRpbWVuc2lvbnMiOiB7CiAgICJ4IjogMTEsCiAgICJ5IjogMTAKICB9LAogICJhbnN3ZXJzIjogWwogICB7CiAgICAgIm51bSI6IDEsCiAgICAgInN0YXJ0IjogewogICAgICAgIngiOiAwLAogICAgICAgInkiOiAxCiAgICAgfSwKICAgICAiZGlyZWN0aW9uIjogIkFjcm9zcyIsCiAgICAgImxlbmd0aCI6IDEyLAogICAgICJjbHVlIjogIk5FQVIgdHJhbnNhY3Rpb25zIGFyZSBtb3JlIF9fX19fXyBpbnN0ZWFkIG9mIGF0b21pYy4iCiAgIH0sCiAgIHsKICAgICAibnVtIjogMiwKICAgICAic3RhcnQiOiB7CiAgICAgICAieCI6IDYsCiAgICAgICAieSI6IDAKICAgICB9LAogICAgICJkaXJlY3Rpb24iOiAiRG93biIsCiAgICAgImxlbmd0aCI6IDcsCiAgICAgImNsdWUiOiAiSW4gYSBzbWFydCBjb250cmFjdCwgd2hlbiBwZXJmb3JtaW5nIGFuIEFjdGlvbiwgeW91IHVzZSB0aGlzIGluIFJ1c3QuIgogICB9LAogICB7CiAgICAgIm51bSI6IDMsCiAgICAgInN0YXJ0IjogewogICAgICAgIngiOiA5LAogICAgICAgInkiOiAwCiAgICAgfSwKICAgICAiZGlyZWN0aW9uIjogIkRvd24iLAogICAgICJsZW5ndGgiOiA2LAogICAgICJjbHVlIjogIkluIGRvY3MucnMgd2hlbiB5b3Ugc2VhcmNoIGZvciB0aGUgbmVhci1zZGsgY3JhdGUsIHRoZXNlIGl0ZW1zIGEgY29uc2lkZXJlZCBhIHdoYXQ6IGNvbGxlY3Rpb25zLCBlbnYsIGpzb25fdHlwZXMuIgogICB9LAogICB7CiAgICAgIm51bSI6IDQsCiAgICAgInN0YXJ0IjogewogICAgICAgIngiOiAxLAogICAgICAgInkiOiAxCiAgICAgfSwKICAgICAiZGlyZWN0aW9uIjogIkRvd24iLAogICAgICJsZW5ndGgiOiAxMCwKICAgICAiY2x1ZSI6ICJBIHNlcmllcyBvZiB3b3JkcyB0aGF0IGNhbiBkZXRlcm1pbmlzdGljYWxseSBnZW5lcmF0ZSBhIHByaXZhdGUga2V5LiIKICAgfSwKICAgewogICAgICJudW0iOiA1LAogICAgICJzdGFydCI6IHsKICAgICAgICJ4IjogMSwKICAgICAgICJ5IjogMwogICAgIH0sCiAgICAgImRpcmVjdGlvbiI6ICJBY3Jvc3MiLAogICAgICJsZW5ndGgiOiAzLAogICAgICJjbHVlIjogIldoZW4gZG9pbmcgaGlnaC1sZXZlbCBjcm9zcy1jb250cmFjdCBjYWxscywgd2UgaW1wb3J0IHRoaXMgdGhhdCBlbmRzIGluIF9jb250cmFjdC4gV2hlbiBjYWxsaW5nIG91cnNlbHZlcyBpbiBhIGNhbGxiYWNrLCBpdCBpcyBjb252ZW50aW9uIHRvIGNhbGwgaXQgVEhJU19zZWxmLiIKICAgfSwKICAgewogICAgICJudW0iOiA2LAogICAgICJzdGFydCI6IHsKICAgICAgICJ4IjogMCwKICAgICAgICJ5IjogOAogICAgIH0sCiAgICAgImRpcmVjdGlvbiI6ICJBY3Jvc3MiLAogICAgICJsZW5ndGgiOiA4LAogICAgICJjbHVlIjogIlVzZSB0aGlzIHRvIGRldGVybWluZSB0aGUgZXhlY3V0aW9uIG91dGNvbWUgb2YgYSBjcm9zcy1jb250cmFjdCBjYWxsIG9yIEFjdGlvbi4iCiAgIH0sCiAgIHsKICAgICAibnVtIjogNywKICAgICAic3RhcnQiOiB7CiAgICAgICAieCI6IDQsCiAgICAgICAieSI6IDYKICAgICB9LAogICAgICJkaXJlY3Rpb24iOiAiQWNyb3NzIiwKICAgICAibGVuZ3RoIjogNCwKICAgICAiY2x1ZSI6ICJZb3UgY2hhaW4gdGhpcyBzeW50YXggb250byBhIHByb21pc2UgaW4gb3JkZXIgdG8gc2NoZWR1bGUgYSBjYWxsYmFjayBhZnRlcndhcmQuIgogICB9CiAgXQp9\"\n}' prepaid-gas '100.0 Tgas' attached-deposit '0 NEAR' sign-as $NEAR_ACCT network-config testnet sign-with-legacy-keychain send\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Back at the project root (not in the ",(0,r.jsx)(n.code,{children:"contract"})," directory) we can run our app and see the new crossword puzzle:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"CONTRACT_NAME=crossword.friend.testnet npm run start\n"})}),"\n",(0,r.jsx)(n.h2,{id:"wrapping-up",children:"Wrapping up"}),"\n",(0,r.jsx)(n.p,{children:"Once you understand cross-contract calls and callbacks and where the logic should go, you can build just about anything on NEAR."}),"\n",(0,r.jsxs)(n.p,{children:["This might be a good time for a reminder that this crossword puzzle, which checks permissions to methods based on a public key, is a bit unusual. It's more common to have simple collections or mappings for allowed users, or utilize the ",(0,r.jsx)(n.code,{children:"owner_id"})," field we set up. The account and access key system in NEAR is quite powerful, and hopefully this tutorial helps stretch the limits of what's possible, like the seamless onboarding we have with the crossword puzzle."]}),"\n",(0,r.jsx)(n.p,{children:"Again, the final code for this chapter:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/near-examples/crossword-tutorial-chapter-3",children:"https://github.com/near-examples/crossword-tutorial-chapter-3"})}),"\n",(0,r.jsx)(n.p,{children:"Happy hacking!"})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>i});t(67294);var r=t(36905);const a={tabItem:"tabItem_Ymn6"};var s=t(85893);function i(e){var n=e.children,t=e.hidden,i=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,i),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>v});var r=t(67294),a=t(36905),s=t(12466),i=t(16550),o=t(20469),l=t(91980),c=t(67392),u=t(50012);function d(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function g(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,c.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function h(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function I(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,s=(0,i.k6)(),o=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:a});return[(0,l._X)(o),(0,r.useCallback)((function(e){if(o){var n=new URLSearchParams(s.location.search);n.set(o,e),s.replace(Object.assign({},s.location,{search:n.toString()}))}}),[o,s])]}function p(e){var n,t,a,s,i=e.defaultValue,l=e.queryString,c=void 0!==l&&l,d=e.groupId,p=g(e),m=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:p})})),b=m[0],A=m[1],C=I({queryString:c,groupId:d}),f=C[0],w=C[1],v=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),t=(0,u.Nk)(n),a=t[0],s=t[1],[a,(0,r.useCallback)((function(e){n&&s.set(e)}),[n,s])]),j=v[0],x=v[1],y=function(){var e=null!=f?f:j;return h({value:e,tabValues:p})?e:null}();return(0,o.Z)((function(){y&&A(y)}),[y]),{selectedValue:b,selectValue:(0,r.useCallback)((function(e){if(!h({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);A(e),w(e),x(e)}),[w,x,p]),tabValues:p}}var m=t(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var A=t(85893);function C(e){var n=e.className,t=e.block,r=e.selectedValue,i=e.selectValue,o=e.tabValues,l=[],c=(0,s.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,t=l.indexOf(n),a=o[t].value;a!==r&&(c(n),i(a))},d=function(e){var n,t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var r,a=l.indexOf(e.currentTarget)+1;t=null!=(r=l[a])?r:l[0];break;case"ArrowLeft":var s,i=l.indexOf(e.currentTarget)-1;t=null!=(s=l[i])?s:l[l.length-1]}null==(n=t)||n.focus()};return(0,A.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:o.map((function(e){var n=e.value,t=e.label,s=e.attributes;return(0,A.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return l.push(e)},onKeyDown:d,onClick:u},s,{className:(0,a.Z)("tabs__item",b.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function f(e){var n=e.lazy,t=e.children,a=e.selectedValue,s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var i=s.find((function(e){return e.props.value===a}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return(0,A.jsx)("div",{className:"margin-top--md",children:s.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function w(e){var n=p(e);return(0,A.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,A.jsx)(C,Object.assign({},n,e)),(0,A.jsx)(f,Object.assign({},n,e))]})}function v(e){var n=(0,m.Z)();return(0,A.jsx)(w,Object.assign({},e,{children:d(e.children)}),String(n))}},71183:(e,n,t)=>{t.d(n,{O2:()=>I,Ey:()=>m,SQ:()=>p});var r=t(67294),a=t(74866),s=t(85162),i=t(74165),o=t(15861),l=t(1841),c=t.n(l),u=t(85893);function d(){return(d=(0,o.Z)((0,i.Z)().mark((function e(n,t,r){var a,s,o,l;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((s=localStorage.getItem(n+"-until"))&&s>Date.now())){e.next=5;break}a=localStorage.getItem(n),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(n);case 8:return e.next=10,e.sent.text();case 10:a=e.sent,localStorage.setItem(n,a),localStorage.setItem(n+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return o=a.split("\n"),t=t?Number(t)-1:0,r=r?Number(r):o.length,o=o.slice(t,r),l=o.reduce((function(e,n){if(0===n.length)return e;var t=n.match(/^\s+/);return t?Math.min(e,t[0].length):0}),1/0),e.abrupt("return",o.map((function(e){return e.slice(l)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const g=function(e){var n=e.url,t=e.start,a=e.end,s=e.language,i=e.fname,o=e.metastring,l=(0,r.useState)("Loading..."),g=l[0],h=l[1];return(0,r.useEffect)((function(){var e=function(e){var n=e.slice(e.indexOf("https")).split("#"),t=n[0],r=(n[1],new URL(t).pathname.split("/").slice(1)),a=r[0],s=r[1];return r[2],"https://raw.githubusercontent.com/"+a+"/"+s+"/"+r[3]+"/"+r.slice(4).join("/")}(n),r=function(e,n,t){return d.apply(this,arguments)}(e,t,a);r.then((function(e){return h(e)}))})),(0,u.jsxs)("div",{fname:i,children:[(0,u.jsx)(c(),{language:s,metastring:o+" showLineNumbers",children:g}),(0,u.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,u.jsx)("a",{href:n,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var h={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function I(e){var n=e.children;return Array.isArray(n)||(n=[n]),(0,u.jsx)(a.Z,{className:"language-tabs",groupId:"code-tabs",children:n.map((function(e,n){return(0,u.jsx)(s.Z,{value:e.props.value,label:h[e.props.value],children:e})}))})}function p(e){var n=e.children,t=e.language;return Array.isArray(n)||(n=[n]),n=n.map((function(e){return function(e,n){var t=e.props,r=(t.children,t.url),a=t.start,s=t.end,i=t.fname;if(e.type===m)return m({url:r,start:a,end:s,language:n,fname:i});return e}(e,t)})),1==n.length?(0,u.jsx)(s.Z,{value:0,label:n[0].props.fname,children:n[0]}):(0,u.jsx)(a.Z,{className:"file-tabs",children:n.map((function(e,n){return(0,u.jsx)(s.Z,{value:n,label:e.props.fname,children:e})}))})}function m(e){var n=e.url,t=e.start,r=e.end,a=e.language,s=e.fname,i=e.metastring;return g({url:n,start:t,end:r,language:a,fname:s,metastring:i})}}}]);