"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1258],{71118:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>a});var r=s(85893),i=s(11151);const c={id:"best-practices",title:"\ubaa8\ubc94 \uc0ac\ub840"},d="\ubaa8\ubc94 \uc0ac\ub840",t={id:"sdk/rust/best-practices",title:"\ubaa8\ubc94 \uc0ac\ub840",description:"\uc624\ubc84\ud50c\ub85c\uc6b0 \uac80\uc0ac \uc0ac\uc6a9",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/sdk/rust/best-practices.md",sourceDirName:"sdk/rust",slug:"/sdk/rust/best-practices",permalink:"/ko/sdk/rust/best-practices",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/rust/best-practices.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595,formattedLastUpdatedAt:"2024\ub144 1\uc6d4 11\uc77c",frontMatter:{id:"best-practices",title:"\ubaa8\ubc94 \uc0ac\ub840"},sidebar:"tools",previous:{title:"\ub2e8\uc704 \ud14c\uc2a4\ud2b8(Unit Test)",permalink:"/ko/sdk/rust/testing/unit-tests"},next:{title:"\ucee8\ud2b8\ub799\ud2b8 \ud06c\uae30 \ucd95\uc18c",permalink:"/ko/sdk/rust/contract-size"}},l={},a=[{value:"\uc624\ubc84\ud50c\ub85c\uc6b0 \uac80\uc0ac \uc0ac\uc6a9",id:"\uc624\ubc84\ud50c\ub85c\uc6b0-\uac80\uc0ac-\uc0ac\uc6a9",level:2},{value:"\ucd08\uae30\uc5d0 <code>require!</code> \uc0ac\uc6a9",id:"\ucd08\uae30\uc5d0-require-\uc0ac\uc6a9",level:2},{value:"<code>log!</code> \uc0ac\uc6a9",id:"log-\uc0ac\uc6a9",level:2},{value:"<code>Promise</code> \ubc18\ud658",id:"promise-\ubc18\ud658",level:2},{value:"<code>near-sdk</code>\ub85c\ubd80\ud130\uc758 \ud06c\ub808\uc774\ud2b8 \uc7ac\uc0ac\uc6a9",id:"near-sdk\ub85c\ubd80\ud130\uc758-\ud06c\ub808\uc774\ud2b8-\uc7ac\uc0ac\uc6a9",level:2},{value:"<code>std::panic!</code> vs <code>env::panic</code>",id:"stdpanic-vs-envpanic",level:2},{value:"\uc791\uc5c5 \uacf5\uac04(Workspace) \uc0ac\uc6a9",id:"\uc791\uc5c5-\uacf5\uac04workspace-\uc0ac\uc6a9",level:2}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\ubaa8\ubc94-\uc0ac\ub840",children:"\ubaa8\ubc94 \uc0ac\ub840"}),"\n",(0,r.jsx)(n.h2,{id:"\uc624\ubc84\ud50c\ub85c\uc6b0-\uac80\uc0ac-\uc0ac\uc6a9",children:"\uc624\ubc84\ud50c\ub85c\uc6b0 \uac80\uc0ac \uc0ac\uc6a9"}),"\n",(0,r.jsxs)(n.p,{children:["\uc77c\ubc18\uc801\uc73c\ub85c \uc815\uc218 \uc624\ubc84\ud50c\ub85c\uc6b0\uc5d0 \ub300\ud574\uc11c\ub294 \ud328\ub2c9\ud558\ub294 \uac83\uc774 \ub3c4\uc6c0\uc774 \ub429\ub2c8\ub2e4. \uc774\ub97c \ud65c\uc131\ud654\ud558\ub824\uba74 ",(0,r.jsx)(n.code,{children:"Cargo.toml"})," \ud30c\uc77c\uc5d0 \ub2e4\uc74c\uc744 \ucd94\uac00\ud558\uc138\uc694."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-toml",children:"[profile.release]\noverflow-checks = true\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"\ucd08\uae30\uc5d0-require-\uc0ac\uc6a9",children:["\ucd08\uae30\uc5d0 ",(0,r.jsx)(n.code,{children:"require!"})," \uc0ac\uc6a9"]}),"\n",(0,r.jsxs)(n.p,{children:["\uc870\uce58\ub97c \ucde8\ud558\uae30 \uc804\uc5d0, ",(0,r.jsx)(n.code,{children:"require!"}),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc785\ub825, \ucee8\ud14d\uc2a4\ud2b8, \uc0c1\ud0dc \ubc0f \uc561\uc138\uc2a4\ub97c \uac80\uc99d\ud558\uc138\uc694. \ud328\ub2c9 \uc0c1\ud0dc\uac00 \ube60\ub97c\uc218\ub85d, \ubc1c\uc2e0\uc790\ub97c \uc704\ud574 \ub354 \ub9ce\uc740 ",(0,r.jsx)(n.a,{href:"https://docs.near.org/concepts/basics/transactions/gas",children:"\uac00\uc2a4"}),"\ub97c \uc808\uc57d\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'#[near_bindgen]\nimpl Contract {\n    pub fn set_fee(&mut self, new_fee: Fee) {\n        require!(env::predecessor_account_id() == self.owner_id, "Owner\'s method");\n        new_fee.assert_valid();\n        self.internal_set_fee(new_fee);\n    }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\ucc38\uace0"}),": \ud328\ub2c9 \uba54\uc2dc\uc9c0\uc5d0\uc11c \ub514\ubc84\uadf8 \uc815\ubcf4\ub97c \uc6d0\ud558\uac70\ub098 ",(0,r.jsx)(n.code,{children:"4.0.0-pre.2"})," \uc804 SDK \ubc84\uc804\uc744 \uc0ac\uc6a9 \uc911\uc778 \uacbd\uc6b0, Rust\uc758 ",(0,r.jsx)(n.code,{children:"assert!"})," \ub9e4\ud06c\ub85c\ub97c ",(0,r.jsx)(n.code,{children:"require!"})," \ub300\uc2e0 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'#[near_bindgen]\nimpl Contract {\n    pub fn set_fee(&mut self, new_fee: Fee) {\n        assert_eq!(env::predecessor_account_id(), self.owner_id, "Owner\'s method");\n        new_fee.assert_valid();\n        self.internal_set_fee(new_fee);\n    }\n}\n'})}),"\n",(0,r.jsxs)(n.h2,{id:"log-\uc0ac\uc6a9",children:[(0,r.jsx)(n.code,{children:"log!"})," \uc0ac\uc6a9"]}),"\n",(0,r.jsx)(n.p,{children:"\ub514\ubc84\uae45 \ubc0f \uc0ac\uc6a9\uc790 \uc54c\ub9bc\uc744 \uc704\ud574 \ub85c\uae45\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.p,{children:"\ud615\uc2dd\ud654\ub41c \uba54\uc2dc\uc9c0\uac00 \ud544\uc694\ud55c \uacbd\uc6b0, \ub2e4\uc74c \ub9e4\ud06c\ub85c\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'log!("Transferred {} tokens from {} to {}", amount, sender_id, receiver_id);\n'})}),"\n",(0,r.jsx)(n.p,{children:"\uc774\ub294 \ub2e4\uc74c \uba54\uc2dc\uc9c0\uc640 \ub3d9\uc77c\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'env::log_str(format!("Transferred {} tokens from {} to {}", amount, sender_id, receiver_id).as_ref());\n'})}),"\n",(0,r.jsxs)(n.h2,{id:"promise-\ubc18\ud658",children:[(0,r.jsx)(n.code,{children:"Promise"})," \ubc18\ud658"]}),"\n",(0,r.jsxs)(n.p,{children:["\uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c(Cross-Contract Call)\uc744 \uc218\ud589\ud558\ub294 \uacbd\uc6b0, \uba54\uc11c\ub4dc\uac00 \uc0c8\ub85c \uc0dd\uc131\ub41c ",(0,r.jsx)(n.code,{children:"Promise"}),"\ub97c \ubc18\ud658\ud558\ub3c4\ub85d \ud558\uace0 \uc2f6\uc744 \uac83\uc785\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 \ud638\ucd9c\uc790(\uc608: near-cli \ub610\ub294 near-api-js \ud638\ucd9c)\ub294 Promise\uc758 \uacb0\uacfc\ub97c \uc989\uc2dc \ubc18\ud658\ud558\ub294 \ub300\uc2e0 \uae30\ub2e4\ub9b4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ud55c \uc5b4\ub5a4 \uc774\uc720\ub85c Promise\uac00 \uc2e4\ud328\ud558\ub294 \uacbd\uc6b0, Promise\ub97c \ubc18\ud658\ud558\uba74 \ud638\ucd9c\uc790\uc5d0\uac8c \uc2e4\ud328\uc5d0 \ub300\ud574 \uc54c\ub9ac\uace0, NEAR \uc775\uc2a4\ud50c\ub85c\ub7ec \ubc0f \uae30\ud0c0 \ub3c4\uad6c\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc804\uccb4 \ud2b8\ub79c\uc7ad\uc158 \uccb4\uc778\uc744 \uc2e4\ud328\ub85c \ud45c\uc2dc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub807\uac8c \ud558\uba74 \uccb4\uc778\uc758 \uccab \ubc88\uc9f8 \ub610\ub294 \ucc98\uc74c \uba87 \uac1c\uc758 \ud2b8\ub79c\uc7ad\uc158\uc774 \uc131\uacf5\ud558\uc9c0\ub9cc, \ud6c4\uc18d \ud2b8\ub79c\uc7ad\uc158\uc774 \uc2e4\ud328\ud560 \ub54c \uae0d\uc815 \uc624\ub958(false-positives)\ub97c \ubc29\uc9c0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.p,{children:"\uc608\ub97c \ub4e4\uc5b4"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"#[near_bindgen]\nimpl Contract {\n    pub fn withdraw_100(&mut self, receiver_id: AccountId) -> Promise {\n        Promise::new(receiver_id).transfer(100)\n    }\n}\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"near-sdk\ub85c\ubd80\ud130\uc758-\ud06c\ub808\uc774\ud2b8-\uc7ac\uc0ac\uc6a9",children:[(0,r.jsx)(n.code,{children:"near-sdk"}),"\ub85c\ubd80\ud130\uc758 \ud06c\ub808\uc774\ud2b8 \uc7ac\uc0ac\uc6a9"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"near-sdk"}),"\ub294 \ub2e4\uc74c \ud06c\ub808\uc774\ud2b8\ub97c \ub2e4\uc2dc \ub0b4\ubcf4\ub0c5\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"borsh"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"base64"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"bs58"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"serde"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"serde_json"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\uac00\uc7a5 \uc77c\ubc18\uc801\uc778 \ud06c\ub808\uc774\ud2b8\uc5d0\ub294 \ub0b4\ubd80 \uc0c1\ud0dc \uc9c1\ub82c\ud654 \ubc0f \uc678\ubd80 JSON \uc9c1\ub82c\ud654\ub97c \uc704\ud55c ",(0,r.jsx)(n.code,{children:"serde"}),"\uc5d0 \ud544\uc694\ud55c ",(0,r.jsx)(n.code,{children:"borsh"}),"\uac00 \ud3ec\ud568\ub429\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"serde::Serialize"})," \uad6c\uc870\uccb4\ub97c \ud45c\uc2dc\ud560 \ub54c, serde\uac00 \uc62c\ubc14\ub978 \uae30\ubcf8 \ud06c\ub808\uc774\ud2b8\ub97c \uac00\ub9ac\ud0a4\ub3c4\ub85d ",(0,r.jsx)(n.code,{children:'#[serde(crate = "near_sdk::serde")]'}),"\ub97c \uc0ac\uc6a9\ud574\uc57c \ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'/// Import `borsh` from `near_sdk` crate \nuse near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};\n/// Import `serde` from `near_sdk` crate \nuse near_sdk::serde::{Serialize, Deserialize};\n\n/// Main contract structure serialized with Borsh\n#[near_bindgen]\n#[derive(BorshDeserialize, BorshSerialize, PanicOnDefault)]\npub struct Contract {\n    pub pair: Pair,\n}\n\n/// Implements both `serde` and `borsh` serialization.\n/// `serde` is typically useful when returning a struct in JSON format for a frontend.\n#[derive(Serialize, Deserialize, BorshDeserialize, BorshSerialize)]\n#[serde(crate = "near_sdk::serde")]\npub struct Pair {\n    pub a: u32,\n    pub b: u32,\n}\n\n#[near_bindgen]\nimpl Contract {\n    #[init]\n    pub fn new(pair: Pair) -> Self {\n        Self {\n            pair,\n        }\n    }\n\n    pub fn get_pair(self) -> Pair {\n        self.pair\n    }\n}\n'})}),"\n",(0,r.jsxs)(n.h2,{id:"stdpanic-vs-envpanic",children:[(0,r.jsx)(n.code,{children:"std::panic!"})," vs ",(0,r.jsx)(n.code,{children:"env::panic"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"std::panic!"}),"\uc740 \ud604\uc7ac \uc2a4\ub808\ub4dc\ub97c \ud328\ub2c9 \uc0c1\ud0dc\ub85c \ub9cc\ub4ed\ub2c8\ub2e4. \uc774\ub294 \ub0b4\ubd80\uc801\uc73c\ub85c ",(0,r.jsx)(n.code,{children:"format!"}),"\uc744 \uc0ac\uc6a9\ud558\ubbc0\ub85c, \uc778\uc790\ub97c \ucde8\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. SDK\ub294 \ud328\ub2c9 \ud6c4\ud06c\ub97c \uc124\uc815\ud558\uc5ec, ",(0,r.jsx)(n.code,{children:"panic!"}),"\uc73c\ub85c\ubd80\ud130 \uc0dd\uc131\ub41c ",(0,r.jsx)(n.code,{children:"PanicInfo"}),"\ub97c \ubb38\uc790\uc5f4\ub85c \ubcc0\ud658\ud558\uace0, \ub0b4\ubd80\uc801\uc73c\ub85c ",(0,r.jsx)(n.code,{children:"env::panic"}),"\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc774\ub97c \ub7f0\ud0c0\uc784\uc5d0 \ubcf4\uace0\ud569\ub2c8\ub2e4. \uc774\ub294 \ud328\ub2c9\uc774 \ubc1c\uc0dd\ud55c \uc18c\uc2a4 \ucf54\ub4dc\uc758 \uc904 \ubc88\ud638\uc640 \uac19\uc740 \ucd94\uac00 \ub514\ubc84\uae45 \uc815\ubcf4\ub97c \uc81c\uacf5\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"env::panic"}),"\uc740 \ud638\uc2a4\ud2b8 \uba54\uc11c\ub4dc\ub97c \uc9c1\uc811 \ud638\ucd9c\ud558\uc5ec \ucee8\ud2b8\ub799\ud2b8\ub97c \ud328\ub2c9 \uc0c1\ud0dc\ub85c \ub9cc\ub4ed\ub2c8\ub2e4. \uc774\ub294 \uc804\ub2ec\ub41c \uba54\uc2dc\uc9c0\ub97c \uc81c\uc678\ud558\uace0 \ub2e4\ub978 \ucd94\uac00 \ub514\ubc84\uae45 \uc815\ubcf4\ub97c \uc81c\uacf5\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\uc791\uc5c5-\uacf5\uac04workspace-\uc0ac\uc6a9",children:"\uc791\uc5c5 \uacf5\uac04(Workspace) \uc0ac\uc6a9"}),"\n",(0,r.jsxs)(n.p,{children:["\uc791\uc5c5 \uacf5\uac04\uc744 \uc0ac\uc6a9\ud558\uba74, \uc6cc\ud06c\ud50c\ub85c\uc6b0\ub97c \uc790\ub3d9\ud654\ud558\uace0 \uc0cc\ub4dc\ubc15\uc2a4 \ub610\ub294 \ud14c\uc2a4\ud2b8\ub137 \ud658\uacbd\uc5d0\uc11c \uc5ec\ub7ec \ucee8\ud2b8\ub799\ud2b8 \ubc0f \uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c\uc5d0 \ub300\ud55c \ud14c\uc2a4\ud2b8\ub97c \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,r.jsx)(n.a,{href:"https://github.com/near/workspaces-rs",children:"workspaces-rs"})," \ub610\ub294 ",(0,r.jsx)(n.a,{href:"https://github.com/near/workspaces-js",children:"workspaces-js"}),"\uc5d0 \ub300\ud574 \ub354 \uc54c\uc544\ubcf4\uc138\uc694."]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>t,a:()=>d});var r=s(67294);const i={},c=r.createContext(i);function d(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);