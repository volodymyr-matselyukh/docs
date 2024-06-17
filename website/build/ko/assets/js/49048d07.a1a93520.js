"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6318],{65846:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var n=r(85893),s=r(11151),a=r(71183);const i={sidebar_position:2,sidebar_label:"Rust \ubc0f \ucee8\ud2b8\ub799\ud2b8 \ubf08\ub300 \uc124\uc815",title:"Rust\ub97c \uc124\uc815\ud558\uace0, NEAR \ud14c\uc2a4\ud2b8\ub137 \uacc4\uc815\uacfc NEAR CLI\ub97c \uc124\uc815\ud558\uba70, \uae30\ubcf8\uc801\uc778 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \ubf08\ub300\ub97c \uc900\ube44\ud558\uc138\uc694"},l="\uc2dc\uc791\ud558\uae30",u={id:"tutorials/crosswords/basics/set-up-skeleton",title:"Rust\ub97c \uc124\uc815\ud558\uace0, NEAR \ud14c\uc2a4\ud2b8\ub137 \uacc4\uc815\uacfc NEAR CLI\ub97c \uc124\uc815\ud558\uba70, \uae30\ubcf8\uc801\uc778 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \ubf08\ub300\ub97c \uc900\ube44\ud558\uc138\uc694",description:"\uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc5d0\uc11c\ub294 \ud14c\uc2a4\ud2b8\ub137 \uacc4\uc815\uc744 \ub9cc\ub4e4\uace0, NEAR CLI\ub97c \uc0ac\uc6a9\ud558\uc5ec \ucef4\ud4e8\ud130 \ud30c\uc77c \uc2dc\uc2a4\ud15c\uc5d0 \ud0a4\ub97c \ucd94\uac00\ud558\uace0 Rust \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc758 \uae30\ubcf8 \ubf08\ub300\ub97c \uc124\uc815\ud569\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/3.tutorials/crosswords/01-basics/01-set-up-skeleton.md",sourceDirName:"3.tutorials/crosswords/01-basics",slug:"/tutorials/crosswords/basics/set-up-skeleton",permalink:"/ko/tutorials/crosswords/basics/set-up-skeleton",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/crosswords/01-basics/01-set-up-skeleton.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1718378911e3,sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Rust \ubc0f \ucee8\ud2b8\ub799\ud2b8 \ubf08\ub300 \uc124\uc815",title:"Rust\ub97c \uc124\uc815\ud558\uace0, NEAR \ud14c\uc2a4\ud2b8\ub137 \uacc4\uc815\uacfc NEAR CLI\ub97c \uc124\uc815\ud558\uba70, \uae30\ubcf8\uc801\uc778 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \ubf08\ub300\ub97c \uc900\ube44\ud558\uc138\uc694"},sidebar:"tutorials",previous:{title:"\uc2ed\uc790\ub9d0\ud480\uc774 \uac8c\uc784 \uac1c\uc694",permalink:"/ko/tutorials/crosswords/basics/overview"},next:{title:"\uae30\ubcf8 \ucf54\ub4dc \ucd94\uac00, \ud558\uc704 \uacc4\uc815 \uc0dd\uc131 \ubc0f \uba54\uc11c\ub4dc \ud638\ucd9c",permalink:"/ko/tutorials/crosswords/basics/add-functions-call"}},o={},c=[{value:"\ud14c\uc2a4\ud2b8\ub137 \uacc4\uc815 \uc5bb\uae30",id:"\ud14c\uc2a4\ud2b8\ub137-\uacc4\uc815-\uc5bb\uae30",level:2},{value:"\ucef4\ud4e8\ud130\uc5d0\uc11c \uc0c8 \ud0a4 \ub9cc\ub4e4\uae30",id:"\ucef4\ud4e8\ud130\uc5d0\uc11c-\uc0c8-\ud0a4-\ub9cc\ub4e4\uae30",level:2},{value:"Rust \uc124\uc815",id:"rust-\uc124\uc815",level:2},{value:"<code>rustup</code>\uc744 \uc0ac\uc6a9\ud558\uc5ec Rust \uc124\uce58",id:"rustup\uc744-\uc0ac\uc6a9\ud558\uc5ec-rust-\uc124\uce58",level:3},{value:"Wasm \ud234\uccb4\uc778 \ucd94\uac00",id:"wasm-\ud234\uccb4\uc778-\ucd94\uac00",level:3},{value:"Rust \uc791\uc131\uc744 \uc2dc\uc791\ud558\uc138\uc694!",id:"rust-\uc791\uc131\uc744-\uc2dc\uc791\ud558\uc138\uc694",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"\uc2dc\uc791\ud558\uae30",children:"\uc2dc\uc791\ud558\uae30"}),"\n",(0,n.jsx)(t.p,{children:"\uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc5d0\uc11c\ub294 \ud14c\uc2a4\ud2b8\ub137 \uacc4\uc815\uc744 \ub9cc\ub4e4\uace0, NEAR CLI\ub97c \uc0ac\uc6a9\ud558\uc5ec \ucef4\ud4e8\ud130 \ud30c\uc77c \uc2dc\uc2a4\ud15c\uc5d0 \ud0a4\ub97c \ucd94\uac00\ud558\uace0 Rust \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc758 \uae30\ubcf8 \ubf08\ub300\ub97c \uc124\uc815\ud569\ub2c8\ub2e4."}),"\n",(0,n.jsx)(t.h2,{id:"\ud14c\uc2a4\ud2b8\ub137-\uacc4\uc815-\uc5bb\uae30",children:"\ud14c\uc2a4\ud2b8\ub137 \uacc4\uc815 \uc5bb\uae30"}),"\n",(0,n.jsxs)(t.p,{children:["Visit ",(0,n.jsx)(t.a,{href:"https://testnet.mynearwallet.com/",children:"NEAR Wallet for testnet"})," and register for a free account. \uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc758 \ubaa9\uc801\uc0c1, \uc6d0\ud558\ub294 \uacbd\uc6b0 2\ub2e8\uacc4 \uc778\uc99d\uc744 \ucd94\uac00\ud558\ub294 \uc635\uc158\uc744 \uac74\ub108\ub6f8 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,n.jsx)(t.admonition,{title:"\ubc29\uae08 \ubb34\uc2a8 \uc77c\uc774 \uc77c\uc5b4\ub0ac\ub098\uc694?",type:"note",children:(0,n.jsx)(t.p,{children:"NEAR \ud14c\uc2a4\ud2b8\ub137 \uacc4\uc815\uc744 \uc0dd\uc131\ud558\uba74 \uac1c\uc778 \ud0a4\uac00 \uc0dd\uc131\ub418\uc5b4 \ube0c\ub77c\uc6b0\uc800\uc758 \ub85c\uceec \uc2a4\ud1a0\ub9ac\uc9c0\uc5d0 \uc800\uc7a5\ub429\ub2c8\ub2e4. \uac1c\ubc1c\uc790 \ub3c4\uad6c\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc774\ub97c \uac80\uc0ac\ud558\uace0 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."})}),"\n",(0,n.jsx)(t.h2,{id:"\ucef4\ud4e8\ud130\uc5d0\uc11c-\uc0c8-\ud0a4-\ub9cc\ub4e4\uae30",children:"\ucef4\ud4e8\ud130\uc5d0\uc11c \uc0c8 \ud0a4 \ub9cc\ub4e4\uae30"}),"\n",(0,n.jsxs)(t.p,{children:["\uba85\ub839\uc904 \uc778\ud130\ud398\uc774\uc2a4(CLI) \ub3c4\uad6c\ub97c \uc0ac\uc6a9\ud558\uc5ec \ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud558\ub824\uace0 \ud558\uc9c0\ub9cc, \ud604\uc7ac \uac1c\uc778 \ud0a4\ub294 \ube0c\ub77c\uc6b0\uc800\uc5d0\ub9cc \uc874\uc7ac\ud569\ub2c8\ub2e4. \ub2e4\uc74c\uc73c\ub85c \ud14c\uc2a4\ud2b8\ub137 \uacc4\uc815\uc5d0 \uc0c8 \ud0a4\ub97c ",(0,n.jsx)(t.em,{children:"\ucd94\uac00"})," \ud558\uace0 \uc774\ub97c JSON \ud30c\uc77c\ub85c \ucef4\ud4e8\ud130\uc5d0 \ub85c\uceec\ub85c \uc800\uc7a5\ud569\ub2c8\ub2e4. (NEAR \uacc4\uc815 \ub0b4\uc5d0\ub294 \uc5ec\ub7ec \uac1c\uc758 \ud0a4\ub97c \uac00\uc9c8 \uc218 \uc788\uc73c\uba70 \uc774\ub294 \ub9e4\uc6b0 \uac15\ub825\ud569\ub2c8\ub2e4!)"]}),"\n",(0,n.jsxs)(t.p,{children:["NEAR CLI\ub97c \uc124\uce58\ud574 \ubd05\uc2dc\ub2e4. (",(0,n.jsx)(t.a,{href:"https://nodejs.org/",children:"NodeJS"})," \ubc84\uc804\uc774 12 \uc774\uc0c1\uc778\uc9c0 \ud655\uc778\ud558\uc138\uc694.)"]}),"\n",(0,n.jsx)(t.p,{children:"npm install -g near-cli"}),"\n",(0,n.jsx)(t.p,{children:"\uc774\uc81c \ub2e4\uc74c\uc744 \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,n.jsx)(t.p,{children:"near"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://docs.near.org/tools/near-cli",children:"\uc5ec\uae30"}),"\uc5d0\uc11c, \ub2e4\ub8e8\uace0 \uc788\ub294 \ub2e4\uc591\ud55c \uba85\ub839\uc5d0 \uc790\uc138\ud788 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,n.jsx)(t.p,{children:'\ub2e4\uc74c \uba85\ub839\uc73c\ub85c "\ub85c\uadf8\uc778"\ud558\uc5ec \uc2dc\uc791\ud558\uaca0\uc2b5\ub2c8\ub2e4.'}),"\n",(0,n.jsx)(t.p,{children:"near login"}),"\n",(0,n.jsxs)(t.p,{children:["\uc774\ub807\uac8c \ud558\uba74, ",(0,n.jsx)(t.strong,{children:"\uc804\uccb4 \uc561\uc138\uc2a4"}),' \ud0a4 \uc0dd\uc131\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub294 NEAR \uc9c0\uac11\uc73c\ub85c \ub2e4\uc2dc \uc774\ub3d9\ud569\ub2c8\ub2e4. \ub098\uc911\uc5d0 \uc804\uccb4 \uc561\uc138\uc2a4 \ubc0f \ud568\uc218 \ud638\ucd9c \uc561\uc138\uc2a4 \ud0a4\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. "\ubc30\ud3ec"\uc640 \uac19\uc740 \uac15\ub825\ud55c \uc791\uc5c5\uc5d0\ub294 \uc804\uccb4 \uc561\uc138\uc2a4 \ud0a4\uac00 \ud544\uc694\ud569\ub2c8\ub2e4. \ub85c\uadf8\uc778 \uba85\ub839\uc758 \uc9c0\uce68\uc5d0 \ub530\ub77c \ud558\ub4dc \ub4dc\ub77c\uc774\ube0c\uc5d0 \ud0a4\ub97c \ub9cc\ub4ed\ub2c8\ub2e4. \uc774\uac83\uc740 \uc6b4\uc601 \uccb4\uc81c\uc758 \ud648 \ub514\ub809\ud1a0\ub9ac\uc5d0 \uc704\uce58\ud55c ',(0,n.jsx)(t.code,{children:".near-credentials"}),"\ub77c\ub294 \ud3f4\ub354\uc5d0 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,n.jsxs)(t.admonition,{type:"note",children:[(0,n.jsxs)(t.mdxAdmonitionTitle,{children:["\ud0a4\ub294 \uc5b4\ub5bb\uac8c \ucd94\uac00\ub418\uc5c8\ub098\uc694? ",(0,n.jsx)(t.code,{children:"near login"}),'\ub97c \uce58\uba74, NEAR CLI\uac00 \uac1c\uc778 \ud0a4\uc640 \uacf5\uac1c \ud0a4\uc758 \ud0a4 \uc30d\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4. NEAR CLI\ub294 \uac1c\uc778 \ud0a4\ub97c JSON \ud30c\uc77c\uc5d0 \ubcf4\uad00\ud558\uace0, \uacf5\uac1c \ud0a4\ub97c URL \ub9e4\uac1c\ubcc0\uc218\ub85c NEAR \uc9c0\uac11\uc5d0 \ubcf4\ub0c5\ub2c8\ub2e4. URL\uc740 \uae38\uace0, NEAR \uc9c0\uac11 \uacc4\uc815\uc5d0 "\uc804\uccb4 \uc561\uc138\uc2a4 \ud0a4\ub97c \ucd94\uac00"\ud558\ub3c4\ub85d \uc9c0\uc2dc\ud558\ub294 \uae30\ud0c0 \uc815\ubcf4\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uc6b0\ub9ac \ube0c\ub77c\uc6b0\uc800\uc758 \ub85c\uceec \uc2a4\ud1a0\ub9ac\uc9c0\uc5d0\ub294 \ub2e4\ub978 \ud0a4\ub97c \ucd94\uac00\ud558\ub294 \uac83\uc744 \ud3ec\ud568\ud558\uc5ec \uc5ec\ub7ec \uc791\uc5c5\uc744 \uc218\ud589\ud560 \uc218 \uc788\ub294 \ud0a4(\uacc4\uc815\uc774 \ub9cc\ub4e4\uc5b4\uc9c8 \ub54c \uc0dd\uc131\ub428)\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub294 URL \ub9e4\uac1c\ubcc0\uc218\uc5d0\uc11c \uacf5\uac1c \ud0a4\ub97c \uac00\uc838\uc640 \uc774\ub97c \uc778\uc218\ub85c \uc0ac\uc6a9\ud558\uc5ec, \ud14c\uc2a4\ud2b8\ub137 \uacc4\uc815\uc5d0 \ucd94\uac00 \ud0a4\ub97c \ub9cc\ub4e4\uc5c8\uc2b5\ub2c8\ub2e4! :::']}),(0,n.jsxs)(t.p,{children:["You can see the keys associated with your account by running the following command, replacing ",(0,n.jsx)(t.code,{children:"friend.testnet"})," with your account name:"]}),(0,n.jsx)(t.p,{children:"near keys friend.testnet"}),(0,n.jsx)(t.h2,{id:"rust-\uc124\uc815",children:"Rust \uc124\uc815"}),(0,n.jsxs)(t.p,{children:["Rust\ub97c \uc2dc\uc791\ud558\uae30 \uc704\ud55c \ud6cc\ub96d\ud55c \ub9ac\uc18c\uc2a4\uc778 ",(0,n.jsx)(t.a,{href:"https://doc.rust-lang.org/stable/book",children:"\uc628\ub77c\uc778 Rust Book"}),"\uc744 \ud65c\uc6a9\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \ube14\ub85d\uccb4\uc778 \uac1c\ubc1c\uacfc \uad00\ub828\ud558\uc5ec \uace0\ub824\ud574\uc57c\ud560 \uc8fc\uc694 \ud56d\ubaa9\uc774 \uc874\uc7ac\ud569\ub2c8\ub2e4. \uc989, \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub294 \uae30\uc220\uc801\uc73c\ub85c ",(0,n.jsx)(t.a,{href:"https://learning-rust.github.io/docs/cargo-crates-and-basic-project-structure/#crate",children:"\ubc14\uc774\ub108\ub9ac\uac00 \uc544\ub2c8\ub77c \ub77c\uc774\ube0c\ub7ec\ub9ac"}),"\uc785\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \uc9c0\uae08\uc740 Rust Book\uc5d0\uc11c \uc77c\ubc18\uc801\uc73c\ub85c \ubc1c\uacac\ub418\ub294 \uc77c\ubd80 \uba85\ub839\uc744 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc744 \uac83\uc774\ub77c\ub294 \uc810\ub9cc \uc54c\uace0 \uc788\uc5b4\ub3c4 \uc88b\uc2b5\ub2c8\ub2e4."]}),(0,n.jsx)(t.admonition,{title:"\uc6b0\ub9ac\ub294 \ucee8\ud2b8\ub799\ud2b8 \uac1c\ubc1c\uc5d0\uc11c \ub2e4\uc74c\uc744 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc744 \uac83\uc785\ub2c8\ub2e4.",type:"caution"})]}),"\n",(0,n.jsx)(t.p,{children:"\ub300\uc2e0 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \uad6c\ucd95\ud558\uace0 \ud14c\uc2a4\ud2b8\ub97c \uc2e4\ud589\ud558\ub294 \ud589\uc704\ub97c \ubc18\ubcf5\ud560 \uac83\uc785\ub2c8\ub2e4."}),"\n",(0,n.jsxs)(t.h3,{id:"rustup\uc744-\uc0ac\uc6a9\ud558\uc5ec-rust-\uc124\uce58",children:[(0,n.jsx)(t.code,{children:"rustup"}),"\uc744 \uc0ac\uc6a9\ud558\uc5ec Rust \uc124\uce58"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://rustup.rs/#",children:"Rustup \uc0ac\uc774\ud2b8"}),"\uc758 \uc9c0\uce68\uc744 \ucc38\uc870\ud558\uc138\uc694. OS X \ub610\ub294 Unix\uc758 \uacbd\uc6b0 \ub2e4\uc74c\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,n.jsxs)(t.p,{children:["curl --proto '=https' --tlsv1.2 -sSf ",(0,n.jsx)(t.a,{href:"https://sh.rustup.rs",children:"https://sh.rustup.rs"})," | sh"]}),"\n",(0,n.jsxs)(t.p,{children:["(",(0,n.jsx)(t.a,{href:"https://www.rust-lang.org/tools/install",children:"Rust \uc124\uce58 \uac00\uc774\ub4dc"}),"\uc5d0\uc11c \uac00\uc838\uc654\uc2b5\ub2c8\ub2e4.)"]}),"\n",(0,n.jsx)(t.h3,{id:"wasm-\ud234\uccb4\uc778-\ucd94\uac00",children:"Wasm \ud234\uccb4\uc778 \ucd94\uac00"}),"\n",(0,n.jsx)(t.p,{children:"\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub294 WebAssembly(Wasm)\ub85c \ucef4\ud30c\uc77c\ub418\ubbc0\ub85c, Rust\uc6a9 \ud234\uccb4\uc778\uc744 \ucd94\uac00\ud569\ub2c8\ub2e4."}),"\n",(0,n.jsx)(t.p,{children:"rustup target add wasm32-unknown-unknown"}),"\n",(0,n.jsxs)(t.p,{children:["(\ub300\uc0c1 \ubc0f \ud234\uccb4\uc778\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \uc815\ubcf4\ub294 ",(0,n.jsx)(t.a,{href:"https://doc.rust-lang.org/edition-guide/rust-2018/platform-and-target-support/webassembly-support.html",children:"\uc5ec\uae30"}),"\uc788\uc2b5\ub2c8\ub2e4.)"]}),"\n",(0,n.jsx)(t.h2,{id:"rust-\uc791\uc131\uc744-\uc2dc\uc791\ud558\uc138\uc694",children:"Rust \uc791\uc131\uc744 \uc2dc\uc791\ud558\uc138\uc694!"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://github.com/near/boilerplate-template-rs",children:"\uc5ec\uae30"}),"\uc5d0 \ubcf5\uc81c\ud558\uac70\ub098 \ub2e4\uc6b4\ub85c\ub4dc\ud558\ub294 \ub370 \uc720\uc6a9\ud55c \uae30\ubcf8 \ub808\ud37c\uc9c0\ud1a0\ub9ac\uac00 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,n.jsxs)(t.p,{children:["\uac00\uc7a5 \uba3c\uc800 \ud560 \uc77c\uc740 ",(0,n.jsx)(t.code,{children:"Cargo.toml"}),"\uc5d0\uc11c \ub9e4\ub2c8\ud398\uc2a4\ud2b8 \ud30c\uc77c\uc744 \uc218\uc815\ud558\ub294 \uac83\uc785\ub2c8\ub2e4:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-diff",children:'[package]\n-  name = "rust-template"\n+  name = "my-crossword"\nversion = "0.1.0"\n- authors = ["Near Inc <hello@near.org>"]\n+ authors = ["NEAR Friend <friend@example.com>"]\nedition = "2018"\n'})}),"\n",(0,n.jsxs)(t.p,{children:["\uc5ec\uae30\uc5d0\uc11c ",(0,n.jsx)(t.code,{children:"name"}),"\uc744 \ubcc0\uacbd\ud558\uba74, \ube4c\ub4dc \uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc2e4\ud589\ud55c \ud6c4 \ucef4\ud30c\uc77c\ub41c Wasm \ud30c\uc77c\uc758 \uc774\ub984\uc774 \ubcc0\uacbd\ub429\ub2c8\ub2e4. (OS X \ubc0f Linux\uc6a9\uc73c\ub85c\ub294 ",(0,n.jsx)(t.code,{children:"build.sh"}),", Windows\uc6a9\uc73c\ub85c\ub294 ",(0,n.jsx)(t.code,{children:"build.bat"}),") (OS X \ubc0f Linux\uc6a9\uc73c\ub85c\ub294 ",(0,n.jsx)(t.code,{children:"build.sh"}),", Windows\uc6a9\uc73c\ub85c\ub294 ",(0,n.jsx)(t.code,{children:"build.bat"}),") \ube4c\ub4dc \uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc2e4\ud589\ud55c \ud6c4, ",(0,n.jsx)(t.code,{children:"res/my_crossword.wasm"})," \ub0b4\uc5d0\uc11c \ucef4\ud30c\uc77c\ub41c Wasm \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,n.jsxs)(t.p,{children:["\uc774\uc81c ",(0,n.jsx)(t.code,{children:"src/lib.rs"})," \ub0b4 \uba54\uc778 \ud30c\uc77c\uc744 \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4:"]}),"\n",(0,n.jsx)(a.Ey,{language:"rust",start:"8",end:"44",url:"https://github.com/near/boilerplate-template-rs/blob/f1edeead98a9ec12c3f6db311f62025305f57874/contract/src/lib.rs"}),"\n",(0,n.jsx)(t.p,{children:"As you can see, this is a stub that's ready to be filled in. Let's pause and point out a few items:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Note the ",(0,n.jsxs)(t.a,{href:"/sdk/rust/contract-structure/near-bindgen",children:[(0,n.jsx)(t.strong,{children:"near"})," macro"]})," is above the struct and the impl"]}),"\n",(0,n.jsxs)(t.li,{children:["\uc5ec\uae30\uc11c \uae30\ubcf8 \uad6c\uc870\uccb4\ub294 ",(0,n.jsx)(t.code,{children:"Contract"}),"\uc774\uc9c0\ub9cc, \ub2e4\ub978 \uc608\uc5d0\uc11c\ub294 ",(0,n.jsx)(t.code,{children:"Counter"}),"\uc774\uac70\ub098 \ub2e4\ub978 \uac83\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub294 \uc21c\uc804\ud788 \uc791\uc131\uc790\uc758 \ub9c8\uc74c\uc774\uc9c0\ub9cc, \uc774\uc804 \ud56d\ubaa9\uc758 \ub9c1\ud06c\uc5d0\uc11c \ub354 \ub9ce\uc740 \uc815\ubcf4\ub97c \uc5bb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,n.jsxs)(t.li,{children:["\"Borsh\"\ub77c\ub294 \ub2e8\uc5b4\ub97c \ubcf4\uace0 \uadf8\uac83\uc774 \ubb34\uc5c7\uc744 \uc758\ubbf8\ud558\ub294\uc9c0 \uad81\uae08\ud560 \uac83\uc785\ub2c8\ub2e4. \uc774\uac83\uc740 \ubc14\uc774\ub108\ub9ac \uc9c1\ub82c \ubcc0\ud658\uae30\uc785\ub2c8\ub2e4. Eventually, we'll want to save data as ones and zeroes to validators' hard drives, and do it efficiently. We use Borsh for this, as is explained ",(0,n.jsx)(t.a,{href:"https://borsh.io",children:"on this website"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Next, let's modify this contract little by little\u2026"})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},85162:(e,t,r)=>{r.d(t,{Z:()=>i});r(67294);var n=r(36905);const s={tabItem:"tabItem_Ymn6"};var a=r(85893);function i(e){var t=e.children,r=e.hidden,i=e.className;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.Z)(s.tabItem,i),hidden:r,children:t})}},74866:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(67294),s=r(36905),a=r(12466),i=r(16550),l=r(20469),u=r(91980),o=r(67392),c=r(50012);function d(e){var t,r;return null!=(t=null==(r=n.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,n.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?t:[]}function h(e){var t=e.values,r=e.children;return(0,n.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(r);return function(e){var t=(0,o.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,r=void 0!==t&&t,s=e.groupId,a=(0,i.k6)(),l=function(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:r,groupId:s});return[(0,u._X)(l),(0,n.useCallback)((function(e){if(l){var t=new URLSearchParams(a.location.search);t.set(l,e),a.replace(Object.assign({},a.location,{search:t.toString()}))}}),[l,a])]}function m(e){var t,r,s,a,i=e.defaultValue,u=e.queryString,o=void 0!==u&&u,d=e.groupId,m=h(e),b=(0,n.useState)((function(){return function(e){var t,r=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var s=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:i,tabValues:m})})),x=b[0],v=b[1],g=f({queryString:o,groupId:d}),j=g[0],w=g[1],y=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),r=(0,c.Nk)(t),s=r[0],a=r[1],[s,(0,n.useCallback)((function(e){t&&a.set(e)}),[t,a])]),R=y[0],k=y[1],N=function(){var e=null!=j?j:R;return p({value:e,tabValues:m})?e:null}();return(0,l.Z)((function(){N&&v(N)}),[N]),{selectedValue:x,selectValue:(0,n.useCallback)((function(e){if(!p({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);v(e),w(e),k(e)}),[w,k,m]),tabValues:m}}var b=r(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(85893);function g(e){var t=e.className,r=e.block,n=e.selectedValue,i=e.selectValue,l=e.tabValues,u=[],o=(0,a.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,r=u.indexOf(t),s=l[r].value;s!==n&&(o(t),i(s))},d=function(e){var t,r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var n,s=u.indexOf(e.currentTarget)+1;r=null!=(n=u[s])?n:u[0];break;case"ArrowLeft":var a,i=u.indexOf(e.currentTarget)-1;r=null!=(a=u[i])?a:u[u.length-1]}null==(t=r)||t.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},t),children:l.map((function(e){var t=e.value,r=e.label,a=e.attributes;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:function(e){return u.push(e)},onKeyDown:d,onClick:c},a,{className:(0,s.Z)("tabs__item",x.tabItem,null==a?void 0:a.className,{"tabs__item--active":n===t}),children:null!=r?r:t}),t)}))})}function j(e){var t=e.lazy,r=e.children,s=e.selectedValue,a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){var i=a.find((function(e){return e.props.value===s}));return i?(0,n.cloneElement)(i,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})}))})}function w(e){var t=m(e);return(0,v.jsxs)("div",{className:(0,s.Z)("tabs-container",x.tabList),children:[(0,v.jsx)(g,Object.assign({},t,e)),(0,v.jsx)(j,Object.assign({},t,e))]})}function y(e){var t=(0,b.Z)();return(0,v.jsx)(w,Object.assign({},e,{children:d(e.children)}),String(t))}},71183:(e,t,r)=>{r.d(t,{O2:()=>f,Ey:()=>b,SQ:()=>m});var n=r(67294),s=r(74866),a=r(85162),i=r(74165),l=r(15861),u=r(1841),o=r.n(u),c=r(85893);function d(){return(d=(0,l.Z)((0,i.Z)().mark((function e(t,r,n){var s,a,l,u;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((a=localStorage.getItem(t+"-until"))&&a>Date.now())){e.next=5;break}s=localStorage.getItem(t),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(t);case 8:return e.next=10,e.sent.text();case 10:s=e.sent,localStorage.setItem(t,s),localStorage.setItem(t+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return l=s.split("\n"),r=r?Number(r)-1:0,n=n?Number(n):l.length,l=l.slice(r,n),u=l.reduce((function(e,t){if(0===t.length)return e;var r=t.match(/^\s+/);return r?Math.min(e,r[0].length):0}),1/0),e.abrupt("return",l.map((function(e){return e.slice(u)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const h=function(e){var t=e.url,r=e.start,s=e.end,a=e.language,i=e.fname,l=e.metastring,u=(0,n.useState)("Loading..."),h=u[0],p=u[1];return(0,n.useEffect)((function(){var e=function(e){var t=e.slice(e.indexOf("https")).split("#"),r=t[0],n=(t[1],new URL(r).pathname.split("/").slice(1)),s=n[0],a=n[1];return n[2],"https://raw.githubusercontent.com/"+s+"/"+a+"/"+n[3]+"/"+n.slice(4).join("/")}(t),n=function(e,t,r){return d.apply(this,arguments)}(e,r,s);n.then((function(e){return p(e)}))})),(0,c.jsxs)("div",{fname:i,children:[(0,c.jsx)(o(),{language:a,metastring:l+" showLineNumbers",children:h}),(0,c.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,c.jsx)("a",{href:t,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var p={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function f(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,c.jsx)(s.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,c.jsx)(a.Z,{value:e.props.value,label:p[e.props.value],children:e})}))})}function m(e){var t=e.children,r=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var r=e.props,n=(r.children,r.url),s=r.start,a=r.end,i=r.fname;if(e.type===b)return b({url:n,start:s,end:a,language:t,fname:i});return e}(e,r)})),1==t.length?(0,c.jsx)(a.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,c.jsx)(s.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,c.jsx)(a.Z,{value:t,label:e.props.fname,children:e})}))})}function b(e){var t=e.url,r=e.start,n=e.end,s=e.language,a=e.fname,i=e.metastring;return h({url:t,start:r,end:n,language:s,fname:a,metastring:i})}}}]);