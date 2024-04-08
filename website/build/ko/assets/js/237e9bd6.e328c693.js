"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7382],{66101:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var a=t(85893),r=t(11151),s=t(74866),c=t(85162),o=t(77229);const i={id:"quickstart",title:"Hello Contract",sidebar_label:"Quickstart \u2728"},l=void 0,d={id:"develop/contracts/quickstart",title:"Hello Contract",description:"NEAR accounts can host programs known as smart contracts. Smart contracts can store data, and expose methods so other users and contracts interact with them.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/2.develop/contracts/quickstart.md",sourceDirName:"2.develop/contracts",slug:"/develop/contracts/quickstart",permalink:"/ko/develop/contracts/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/contracts/quickstart.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1711465748e3,frontMatter:{id:"quickstart",title:"Hello Contract",sidebar_label:"Quickstart \u2728"},sidebar:"build",previous:{title:"What is a Contract?",permalink:"/ko/develop/contracts/whatisacontract"},next:{title:"\ubaa8\ub4c8, \uc790\ub8cc\ud615 \ubc0f \uad6c\uc870",permalink:"/ko/develop/contracts/basics"}},h={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Creating the Contract",id:"creating-the-contract",level:2},{value:"The Contract",id:"the-contract",level:2},{value:"Build and Test",id:"build-and-test",level:2},{value:"Create a Testnet Account",id:"create-a-testnet-account",level:2},{value:"Deploy the Contract",id:"deploy-the-contract",level:2},{value:"Interacting with the Contract",id:"interacting-with-the-contract",level:2},{value:"Get Greeting",id:"get-greeting",level:3},{value:"Set Greeting",id:"set-greeting",level:3},{value:"Moving Forward",id:"moving-forward",level:2}];function g(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/ko/concepts/protocol/account-model",children:"NEAR accounts"})," can host programs known as smart contracts. Smart contracts can ",(0,a.jsx)(n.strong,{children:"store data"}),", and ",(0,a.jsx)(n.strong,{children:"expose methods"})," so other users and contracts interact with them."]}),"\n",(0,a.jsxs)(n.p,{children:["In this quickstart tutorial, we will guide you in creating your first smart contract in the NEAR ",(0,a.jsx)(n.strong,{children:"testnet"})," that stores and retrieves a greeting."]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(s.Z,{groupId:"code-tabs",children:[(0,a.jsxs)(c.Z,{value:"\ud83c\udf10 JavaScript",children:[(0,a.jsx)(n.p,{children:"Before starting, make sure you have the following installed:"}),(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://nodejs.org/en/download",children:"Node.js"}),", to use our scaffolding tool."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/tools/near-cli#installation",children:"NEAR CLI"}),", to deploy and interact with the contract."]}),"\n"]}),(0,a.jsx)(n.admonition,{title:"Easy Install",type:"tip",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"NEAR-CLI:"})," Install ",(0,a.jsx)(n.code,{children:"near-cli"})," tools using"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"npm i -g near-cli\n"})}),"\n"]}),"\n"]})})]}),(0,a.jsxs)(c.Z,{value:"\ud83e\udd80 Rust",children:[(0,a.jsx)(n.p,{children:"Before starting, make sure you have the following installed:"}),(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/tools/near-cli-rs",children:"NEAR CLI-RS"}),", to deploy and interact with the contract."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://github.com/near/cargo-near",children:"cargo-near"}),", to easily create testnet accounts."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://www.Rust-lang.org/tools/install",children:"Rust"}),", to create Rust contracts."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://nodejs.org/en/download",children:"Node.js"}),"(Optional), to install the tools."]}),"\n"]}),(0,a.jsxs)(n.admonition,{title:"Easy Install",type:"tip",children:[(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"NEAR-CLI-RS:"})," Install both ",(0,a.jsx)(n.code,{children:"near-cli-rs"})," and ",(0,a.jsx)(n.code,{children:"cargo-near"})," tools using"]}),"\n"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Using node\nnpm i -g near-cli-rs cargo-near\n\n# Using macOS, Linux, WSL\ncurl --proto '=https' --tlsv1.2 -LsSf https://github.com/near/near-cli-rs/releases/latest/download/near-cli-rs-installer.sh | sh\ncurl --proto '=https' --tlsv1.2 -LsSf https://github.com/near/cargo-near/releases/latest/download/cargo-near-installer.sh | sh\n"})})]})]})]}),"\n",(0,a.jsxs)(n.admonition,{title:"Testnet Account",type:"info",children:[(0,a.jsxs)(n.p,{children:["There is no need to have a ",(0,a.jsx)(n.code,{children:"testnet"})," account to follow this tutorial."]}),(0,a.jsxs)(n.p,{children:["However, if you want to create one, you can do so through ",(0,a.jsx)(n.a,{href:"https://testnet.mynearwallet.com",children:"a wallet"}),", and use it from the ",(0,a.jsx)(n.code,{children:"near-cli"})," by invoking ",(0,a.jsx)(n.code,{children:"near login"}),"."]})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"creating-the-contract",children:"Creating the Contract"}),"\n",(0,a.jsxs)(s.Z,{groupId:"code-tabs",children:[(0,a.jsxs)(c.Z,{value:"\ud83c\udf10 JavaScript",children:[(0,a.jsxs)(n.p,{children:["Create a smart contract by running our ",(0,a.jsx)(n.code,{children:"create-near-app"})," scaffolding tool and following the interactive menu."]}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["What do you want to build? \u203a ",(0,a.jsx)(n.code,{children:"A Near Smart Contract"})]}),"\n",(0,a.jsxs)(n.li,{children:["Select a smart contract template for your project \u203a ",(0,a.jsx)(n.code,{children:"JS/TS Contract"})]}),"\n",(0,a.jsxs)(n.li,{children:["Name your project \u203a ",(0,a.jsx)(n.code,{children:"hello-near"})]}),"\n"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"  npx create-near-app@latest\n"})}),(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.img,{alt:"img",src:t(85553).Z+"",width:"868",height:"604"}),"\n",(0,a.jsx)(n.em,{children:"create-near-app in action"})]}),(0,a.jsx)(n.p,{children:"The resulting folder structure will change slightly depending on the chosen language. Here is the general structure you can expect to see:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\u251c\u2500\u2500 sandbox-ts      # sanbox testing\n\u2502   \u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500  \u2514\u2500\u2500 main.ava.ts\n\u2502   \u251c\u2500\u2500 ava.config.cjs\n\u2502   \u2514\u2500\u2500 package.json\n\u251c\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 contract.ts # contract's code\n\u251c\u2500\u2500 package.json    # package manager\n\u251c\u2500\u2500 README.md\n\u2514\u2500\u2500 tsconfig.json\n"})})]}),(0,a.jsxs)(c.Z,{value:"\ud83e\udd80 Rust",children:[(0,a.jsxs)(n.p,{children:["Create a smart contract by running our ",(0,a.jsx)(n.code,{children:"near"})," Rust CLI tool and following the interactive menu."]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"  cargo near new <project_name>\n"})}),(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.img,{alt:"img",src:t(71134).Z+"",width:"868",height:"604"}),"\n",(0,a.jsx)(n.em,{children:"create-near-app in action"})]}),(0,a.jsx)(n.p,{children:"The resulting folder structure will change slightly depending on the chosen language. Here is the general structure you can expect to see:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\u251c\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 lib.rs # contract's code\n\u251c\u2500\u2500 test \n\u2502   \u2514\u2500\u2500 test_basics.rs # testing code\n\u251c\u2500\u2500 Cargo.toml # package manager\n\u251c\u2500\u2500 README.md\n\u2514\u2500\u2500 rust-toolchain.toml\n"})})]})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"the-contract",children:"The Contract"}),"\n",(0,a.jsxs)(n.p,{children:["Your new smart contract stores a ",(0,a.jsx)(n.code,{children:"greeting: string"})," attribute in their state, and exposes two methods to interact with it (",(0,a.jsx)(n.code,{children:"set_greeting"}),", ",(0,a.jsx)(n.code,{children:"get_greeting"}),")."]}),"\n",(0,a.jsxs)(o.O2,{children:[(0,a.jsx)(o.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:(0,a.jsx)(o.Ey,{fname:"index.js",url:"https://github.com/near-examples/hello-near-examples/blob/main/contract-ts/src/contract.ts",start:"4",end:"18"})}),(0,a.jsx)(o.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,a.jsx)(o.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/hello-near-examples/blob/main/contract-rs/src/lib.rs",start:"6",end:"35"})})]}),"\n",(0,a.jsx)(n.p,{children:"There are 3 important things to notice:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["The ",(0,a.jsx)(n.code,{children:"get_greeting"})," method is a ",(0,a.jsx)(n.a,{href:"/ko/develop/contracts/anatomy#public-methods",children:(0,a.jsx)(n.code,{children:"view"})})," method, meaning it only reads from the contract and can be called for free by anyone."]}),"\n",(0,a.jsxs)(n.li,{children:["By default, the contract is initialized with the ",(0,a.jsx)(n.code,{children:"greeting"})," attribute set to ",(0,a.jsx)(n.code,{children:'"Hello"'}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["The ",(0,a.jsx)(n.code,{children:"set_greeting"})," method is a ",(0,a.jsx)(n.a,{href:"/ko/develop/contracts/anatomy#public-methods",children:(0,a.jsx)(n.code,{children:"change"})})," method, meaning it modifies the contract's state and requires a user to sign a transaction in order to be executed."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"build-and-test",children:"Build and Test"}),"\n",(0,a.jsx)(n.p,{children:"Building and testing the contract is as simple as running two commands."}),"\n",(0,a.jsxs)(o.O2,{children:[(0,a.jsx)(o.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm run build\nnpm run test\n\n# Expected:\n# returns the default greeting \u2705\n# changes the greeting \u2705\n"})})}),(0,a.jsx)(o.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cargo build\ncargo test\n\n# Expected:\n# Passed \u2705 gets default greeting\n# Passed \u2705 changes the greeting\n"})})})]}),"\n",(0,a.jsxs)(i,{children:[(0,a.jsx)("summary",{children:" Failing tests? "}),(0,a.jsxs)(n.p,{children:["If the tests are failing, make sure that you are using ",(0,a.jsx)(n.code,{children:"node v16"})," and the ",(0,a.jsx)(n.code,{children:"toolchain v1.69"})," in ",(0,a.jsx)(n.code,{children:"rust"}),". You can always use"]}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"nvm use 16"})," to switch to ",(0,a.jsx)(n.code,{children:"node v16"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"rustup default 1.68"})," to switch to ",(0,a.jsx)(n.code,{children:"toolchain v1.69"})]}),"\n"]})]}),"\n",(0,a.jsxs)(n.p,{children:["In the background, these commands are calling the build tools for each language and invoking the ",(0,a.jsx)(n.a,{href:"/ko/develop/testing/integration-test",children:"Sandbox"})," tests from the ",(0,a.jsx)(n.code,{children:"sandbox-ts/rs"})," directory."]}),"\n",(0,a.jsx)(n.admonition,{title:"Sandbox",type:"tip",children:(0,a.jsx)(n.p,{children:"Testing the contracts within a Sandbox allows you to understand how the contract will behave once deployed to the network while having total control over the testing environment."})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"create-a-testnet-account",children:"Create a Testnet Account"}),"\n",(0,a.jsx)(n.p,{children:"Now that we know the contract is passing the tests, let's create a testnet account in which to deploy the contract."}),"\n",(0,a.jsxs)(n.p,{children:["While there are different ways to create accounts in NEAR, in this quickstart we will use the ",(0,a.jsx)(n.code,{children:"cargo-near"})," tool to create a new random ",(0,a.jsx)(n.a,{href:"/concepts/protocol/account-id",children:(0,a.jsx)(n.code,{children:"named account"})}),"."]}),"\n",(0,a.jsxs)(s.Z,{groupId:"code-tabs",children:[(0,a.jsxs)(c.Z,{value:"\ud83c\udf10 JavaScript",children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Create a new testnet account\n# Replace <created-account> with a custom name\nnear create-account <created-account> --useFaucet\n"})}),(0,a.jsxs)(i,{children:[(0,a.jsx)("summary",{children:" Example Result "}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'> near create-account lovely-event.testnet --useFaucet\n# Console response\nNew account "lovely-event.testnet" created successfully. # Response\n'})})]})]}),(0,a.jsxs)(c.Z,{value:"\ud83e\udd80 Rust",children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Create a new testnet account with a random name\ncargo-near near create-dev-account use-random-account-id autogenerate-new-keypair save-to-legacy-keychain network-config testnet create\n\n# Create a new testnet account\n# Replace <lovely-event.testnet> with a custom name\ncargo-near near create-dev-account use-specific-account-id lovely-event.testnet autogenerate-new-keypair save-to-keychain network-config testnet create\n"})}),(0,a.jsxs)(i,{children:[(0,a.jsx)("summary",{children:" Example Result "}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'# If you want to create account with a random name\n> cargo-near near create-dev-account use-random-account-id autogenerate-new-keypair save-to-legacy-keychain network-config testnet create\n\nNew account "lovely-event.testnet" created successfully. # Response\n\n# If you want to create account with a custom name\n> cargo-near near create-dev-account use-specific-account-id lovely-event.testnet autogenerate-new-keypair save-to-keychain network-config testnet create\n\nNew account "lovely-event.testnet" created successfully. # Response\n'})})]})]})]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["Here we are creating a random account since we do not care about the account's name. Remember that you can create a named account through any wallet (i.e. ",(0,a.jsx)(n.a,{href:"https://testnet.mynearwallet.com",children:"MyNearWallet"}),") and then use it from the ",(0,a.jsx)(n.code,{children:"near-cli"})," by invoking ",(0,a.jsx)(n.code,{children:"near login"}),"."]})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"deploy-the-contract",children:"Deploy the Contract"}),"\n",(0,a.jsx)(n.p,{children:"Having our account created, we can now deploy the contract into it:"}),"\n",(0,a.jsxs)(o.O2,{children:[(0,a.jsx)(o.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"near deploy <created-account> build/release/hello.wasm\n"})})}),(0,a.jsx)(o.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"near contract deploy <created-account> use-file ./target/wasm32-unknown-unknown/release/contract_rs.wasm without-init-call network-config testnet sign-with-keychain send\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Congrats"}),"! your contract now lives in the NEAR testnet network."]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"interacting-with-the-contract",children:"Interacting with the Contract"}),"\n",(0,a.jsxs)(n.p,{children:["To interact with your deployed smart contract, you can call its methods using the ",(0,a.jsx)(n.code,{children:"near-cli"})," or ",(0,a.jsx)(n.code,{children:"near-cli-rs"})," tools."]}),"\n",(0,a.jsx)(n.h3,{id:"get-greeting",children:"Get Greeting"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"get_greeting"})," method is a ",(0,a.jsx)(n.a,{href:"/ko/develop/contracts/anatomy#public-methods",children:(0,a.jsx)(n.code,{children:"view"})})," method, meaning it only reads from the contract's state, and can thus be called for ",(0,a.jsx)(n.strong,{children:"free"}),"."]}),"\n",(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(c.Z,{value:"near-cli",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'> near view <created-account> get_greeting\n\n"Hello" # Response\n'})})}),(0,a.jsx)(c.Z,{value:"near-cli-rs",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'> near contract call-function as-read-only <created-account> get_greeting json-args {} network-config testnet now\n\n"Hello" # Response\n'})})})]}),"\n",(0,a.jsx)(n.h3,{id:"set-greeting",children:"Set Greeting"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"set_greeting"})," method is a ",(0,a.jsx)(n.a,{href:"/ko/develop/contracts/anatomy#public-methods",children:(0,a.jsx)(n.code,{children:"change"})})," method, meaning it modifies the contract's state, and thus requires a user to sign a transaction in order to be executed."]}),"\n",(0,a.jsxs)(s.Z,{children:[(0,a.jsxs)(c.Z,{value:"near-cli",children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'> near call <created-account> set_greeting \'{"greeting": "Hola"}\' --accountId <created-account>\n\nLog: Saving greeting "Hola" # Response\n'})}),(0,a.jsxs)(n.p,{children:["In this case we are asking the account that stores the contract to call its own contract's method (",(0,a.jsx)(n.code,{children:"--accountId <created-account>"}),")."]})]}),(0,a.jsxs)(c.Z,{value:"near-cli-rs",children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"> near contract call-function as-transaction <created-account> set_greeting json-args '{\"greeting\": \"Hola\"}' prepaid-gas '100.0 Tgas' attached-deposit '0 NEAR' sign-as <created-account> network-config testnet sign-with-keychain send\n\nLog: Saving greeting \"Hola\" # Response\n"})}),(0,a.jsxs)(n.p,{children:["In this case, we are asking the account that stores the contract to call its own contract's method (",(0,a.jsx)(n.code,{children:"sign-as <created-account>"}),")."]})]})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"moving-forward",children:"Moving Forward"}),"\n",(0,a.jsx)(n.p,{children:"That's it for the quickstart tutorial. You have now seen a fully functional contract with a minimal user interface and testing."}),"\n",(0,a.jsxs)(n.p,{children:["Go ahead and check other ",(0,a.jsx)(n.a,{href:"/tutorials/examples/guest-book",children:"examples"})," or proceed straight to the ",(0,a.jsx)(n.a,{href:"/ko/develop/contracts/anatomy",children:"Develop section"})," to know how to write your own contract."]}),"\n",(0,a.jsxs)(n.p,{children:["If you have any questions, do not hesitate to join us on ",(0,a.jsx)(n.a,{href:"https://near.chat",children:"Discord"}),". We regularly host Office Hours, in which you can join our voice channel and ask questions."]}),"\n",(0,a.jsx)(n.p,{children:"Happy coding! \ud83d\ude80"}),"\n",(0,a.jsxs)(n.admonition,{title:"Versioning for this article",type:"note",children:[(0,a.jsx)(n.p,{children:"At the time of this writing, this example works with the following versions:"}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["near-cli: ",(0,a.jsx)(n.code,{children:"4.0.13"})]}),"\n",(0,a.jsxs)(n.li,{children:["node: ",(0,a.jsx)(n.code,{children:"18.19.1"})]}),"\n",(0,a.jsxs)(n.li,{children:["rustc: ",(0,a.jsx)(n.code,{children:"1.77.0"})]}),"\n",(0,a.jsxs)(n.li,{children:["near-cli-rs: ",(0,a.jsx)(n.code,{children:"0.8.1"})]}),"\n",(0,a.jsxs)(n.li,{children:["cargo-near: ",(0,a.jsx)(n.code,{children:"0.6.1"})]}),"\n"]})]})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(g,{...e})}):g(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>c});t(67294);var a=t(36905);const r={tabItem:"tabItem_Ymn6"};var s=t(85893);function c(e){var n=e.children,t=e.hidden,c=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,c),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>y});var a=t(67294),r=t(36905),s=t(12466),c=t(16550),o=t(20469),i=t(91980),l=t(67392),d=t(50012);function h(e){var n,t;return null!=(n=null==(t=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function u(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:function(e){return h(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,l.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function g(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function p(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId,s=(0,c.k6)(),o=function(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:r});return[(0,i._X)(o),(0,a.useCallback)((function(e){if(o){var n=new URLSearchParams(s.location.search);n.set(o,e),s.replace(Object.assign({},s.location,{search:n.toString()}))}}),[o,s])]}function x(e){var n,t,r,s,c=e.defaultValue,i=e.queryString,l=void 0!==i&&i,h=e.groupId,x=u(e),j=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:c,tabValues:x})})),m=j[0],v=j[1],f=p({queryString:l,groupId:h}),b=f[0],w=f[1],y=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:h}.groupId),t=(0,d.Nk)(n),r=t[0],s=t[1],[r,(0,a.useCallback)((function(e){n&&s.set(e)}),[n,s])]),k=y[0],N=y[1],I=function(){var e=null!=b?b:k;return g({value:e,tabValues:x})?e:null}();return(0,o.Z)((function(){I&&v(I)}),[I]),{selectedValue:m,selectValue:(0,a.useCallback)((function(e){if(!g({value:e,tabValues:x}))throw new Error("Can't select invalid tab value="+e);v(e),w(e),N(e)}),[w,N,x]),tabValues:x}}var j=t(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(85893);function f(e){var n=e.className,t=e.block,a=e.selectedValue,c=e.selectValue,o=e.tabValues,i=[],l=(0,s.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,t=i.indexOf(n),r=o[t].value;r!==a&&(l(n),c(r))},h=function(e){var n,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=i.indexOf(e.currentTarget)+1;t=null!=(a=i[r])?a:i[0];break;case"ArrowLeft":var s,c=i.indexOf(e.currentTarget)-1;t=null!=(s=i[c])?s:i[i.length-1]}null==(n=t)||n.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:o.map((function(e){var n=e.value,t=e.label,s=e.attributes;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:function(e){return i.push(e)},onKeyDown:h,onClick:d},s,{className:(0,r.Z)("tabs__item",m.tabItem,null==s?void 0:s.className,{"tabs__item--active":a===n}),children:null!=t?t:n}),n)}))})}function b(e){var n=e.lazy,t=e.children,r=e.selectedValue,s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var c=s.find((function(e){return e.props.value===r}));return c?(0,a.cloneElement)(c,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})}))})}function w(e){var n=x(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",m.tabList),children:[(0,v.jsx)(f,Object.assign({},e,n)),(0,v.jsx)(b,Object.assign({},e,n))]})}function y(e){var n=(0,j.Z)();return(0,v.jsx)(w,Object.assign({},e,{children:h(e.children)}),String(n))}},77229:(e,n,t)=>{t.d(n,{Ey:()=>d,O2:()=>i,SQ:()=>l});t(67294);var a=t(74866),r=t(85162),s=t(95665),c=t.n(s),o=t(85893);function i(e){var n=e.children;return Array.isArray(n)||(n=[n]),(0,o.jsx)(a.Z,{className:"language-tabs",groupId:"code-tabs",children:n.map((function(e,n){return(0,o.jsx)(r.Z,{value:e.props.value,label:e.props.value,children:e})}))})}function l(e){var n=e.children,t=e.language;return Array.isArray(n)||(n=[n]),n=n.map((function(e){return function(e,n){var t=e.props,a=(t.children,t.url),r=t.start,s=t.end,c=t.fname;if(e.type===d)return d({url:a,start:r,end:s,language:n,fname:c});return e}(e,t)})),1==n.length?(0,o.jsx)(r.Z,{value:0,label:n[0].props.fname,children:n[0]}):(0,o.jsx)(a.Z,{className:"file-tabs",children:n.map((function(e,n){return(0,o.jsx)(r.Z,{value:n,label:e.props.fname,children:e})}))})}function d(e){var n=e.url,t=e.start,a=e.end,r=e.language,s=e.fname,i=n+"#";return t&&a&&(i+="L"+t+"-L"+a+"#"),(0,o.jsx)(c(),{language:r,fname:s,children:i})}},71134:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/hello-near-rs-133661298b01d21abdea4b47d224658f.gif"},85553:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/hello-near-ts-8f1c5c5f2390b1d4552e8c07de22e3f8.gif"}}]);