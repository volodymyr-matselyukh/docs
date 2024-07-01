"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9372],{97656:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>f,frontMatter:()=>l,metadata:()=>h,toc:()=>p});var a=n(85893),s=n(11151),r=n(71183);const i=n.p+"assets/images/teaching--jeheycell.near--artcultureac-2d9983a17041c734d5c6e47dc4c879cb.jpeg",o=n.p+"assets/images/creating account with text--seanpineda.near--_seanpineda-fff4a4afb35af8251a82af2524f98234.png",c=n.p+"assets/medias/erasing-subaccount-chalkboard--iambon.near--JohnreyBona-8d0cdfe27b736ffe13588ce9fbc5bcde.mp4",l={sidebar_position:3,sidebar_label:"Add basic code, create a subaccount, and call methods",title:"Alter the smart contract, learning about basics of development"},d="Modifying the contract",h={id:"tutorials/crosswords/basics/add-functions-call",title:"Alter the smart contract, learning about basics of development",description:"This section will modify the smart contract skeleton from the previous section. This tutorial will start by writing a contract in a somewhat useless way in order to learn the basics. Once we've got a solid understanding, we'll iterate until we have a crossword puzzle.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/3.tutorials/crosswords/01-basics/02-add-functions-call.md",sourceDirName:"3.tutorials/crosswords/01-basics",slug:"/tutorials/crosswords/basics/add-functions-call",permalink:"/vi/tutorials/crosswords/basics/add-functions-call",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/crosswords/01-basics/02-add-functions-call.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1718378911e3,sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Add basic code, create a subaccount, and call methods",title:"Alter the smart contract, learning about basics of development"},sidebar:"tutorials",previous:{title:"Set up Rust and a contract skeleton",permalink:"/vi/tutorials/crosswords/basics/set-up-skeleton"},next:{title:"Hash the solution, unit tests, and an init method",permalink:"/vi/tutorials/crosswords/basics/hashing-and-unit-tests"}},u={},p=[{value:"Add a const, a field, and functions",id:"add-a-const-a-field-and-functions",level:2},{value:"Building and deploying",id:"building-and-deploying",level:2},{value:"Build the contract",id:"build-the-contract",level:3},{value:"Create a subaccount",id:"create-a-subaccount",level:3},{value:"What&#39;s a codehash?",id:"whats-a-codehash",level:4},{value:"Deploy the contract",id:"deploy-the-contract",level:3},{value:"Call the contract methods (interact!)",id:"call-the-contract-methods-interact",level:3},{value:"Reset the account&#39;s contract and state",id:"reset-the-accounts-contract-and-state",level:2},{value:"Wrapping up",id:"wrapping-up",level:2}];function g(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"modifying-the-contract",children:"Modifying the contract"}),"\n",(0,a.jsx)(t.p,{children:"This section will modify the smart contract skeleton from the previous section. This tutorial will start by writing a contract in a somewhat useless way in order to learn the basics. Once we've got a solid understanding, we'll iterate until we have a crossword puzzle."}),"\n",(0,a.jsx)(t.h2,{id:"add-a-const-a-field-and-functions",children:"Add a const, a field, and functions"}),"\n",(0,a.jsx)(t.p,{children:"Let's modify the contract to be:"}),"\n",(0,a.jsx)(r.Ey,{language:"rust",start:"1",end:"28",url:"https://github.com/near-examples/crossword-snippets/blob/master/src/lib.rs"}),"\n",(0,a.jsx)(t.p,{children:"We've done a few things here:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Set a constant for the puzzle number."}),"\n",(0,a.jsxs)(t.li,{children:["Added the field ",(0,a.jsx)(t.code,{children:"crossword_solution"})," to our main struct."]}),"\n",(0,a.jsx)(t.li,{children:"Implemented three functions: one that's view-only and two that are mutable, meaning they have the ability to change state."}),"\n",(0,a.jsxs)(t.li,{children:["Used logging, which required the import of ",(0,a.jsx)(t.code,{children:"env"})," from our ",(0,a.jsx)(t.code,{children:"near_sdk"})," crate."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Before moving on, let's talk about these changes and how to think about them, beginning with the constant:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",children:"const PUZZLE_NUMBER: u8 = 1;\n"})}),"\n",(0,a.jsxs)(t.p,{children:["This is an in-memory value, meaning that when the smart contract is spun up and executed in the virtual machine, the value ",(0,a.jsx)(t.code,{children:"1"})," is contained in the contract code. This differs from the next change, where a field is added to the struct containing the ",(0,a.jsx)(t.code,{children:"#[near]"})," macro. The field ",(0,a.jsx)(t.code,{children:"crossword_solution"})," has the type of ",(0,a.jsx)(t.code,{children:"String"})," and, like any other fields added to this struct, the value will live in ",(0,a.jsx)(t.strong,{children:"persistent storage"}),'. With NEAR, storage is "paid for" via the native NEAR token (\u24c3). It is not "state rent" but storage staking, paid once, and returned when storage is deleted. This helps incentivize users to keep their state clean, allowing for a more healthy chain. Read more about ',(0,a.jsx)(t.a,{href:"https://docs.near.org/concepts/storage/storage-staking",children:"storage staking here"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"Let's now look at the three new functions:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",children:"pub fn get_puzzle_number(&self) -> u8 {\n    PUZZLE_NUMBER\n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["As is covered in the ",(0,a.jsx)(t.a,{href:"/vi/build/smart-contracts/anatomy/functions",children:"function section of these docs"}),', a "view-only" function will have open parenthesis around ',(0,a.jsx)(t.code,{children:"&self"}),' while "change methods" or mutable functions will have ',(0,a.jsx)(t.code,{children:"&mut self"}),". In the function above, the ",(0,a.jsx)(t.code,{children:"PUZZLE_NUMBER"})," is returned. A user may call this method using the proper RPC endpoint without signing any transaction, since it's read-only. Think of it like a GET request, but using RPC endpoints that are ",(0,a.jsx)(t.a,{href:"https://docs.near.org/api/rpc/contracts#call-a-contract-function",children:"documented here"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"Mutable functions, on the other hand, require a signed transaction. The first example is a typical approach where the user supplies a parameter that's assigned to a field:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",children:"pub fn set_solution(&mut self, solution: String) {\n    self.crossword_solution = solution;\n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The next time the smart contract is called, the contract's field ",(0,a.jsx)(t.code,{children:"crossword_solution"})," will have changed."]}),"\n",(0,a.jsx)(t.p,{children:"The second example is provided for demonstration purposes:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",children:'pub fn guess_solution(&mut self, solution: String) {\n    if solution == self.crossword_solution {\n        env::log_str("You guessed right!")\n    } else {\n        env::log_str("Try again.")\n    }\n}\n'})}),"\n",(0,a.jsx)(t.p,{children:"Notice how we're not saving anything to state and only logging? Why does this need to be mutable?"}),"\n",(0,a.jsxs)(t.p,{children:["Well, logging is ultimately captured inside blocks added to the blockchain. (More accurately, transactions are contained in chunks and chunks are contained in blocks. More info in the ",(0,a.jsx)(t.a,{href:"https://nomicon.io/Architecture.html?highlight=chunk#blockchain-layer-concepts",children:"Nomicon spec"}),".) So while it is not changing the data in the fields of the struct, it does cost some amount of gas to log, requiring a signed transaction by an account that pays for this gas."]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"building-and-deploying",children:"Building and deploying"}),"\n",(0,a.jsx)(t.p,{children:"Here's what we'll want to do:"}),"\n",(0,a.jsxs)("figure",{children:[(0,a.jsx)("img",{src:i,alt:"Teacher shows chalkboard with instructions on how to properly deploy a smart contract. 1. Build smart contract. 2. Create a subaccount (or delete and recreate if it exists) 3. Deploy to subaccount. 4. Interact. Art created by jeheycell.near"}),(0,a.jsxs)("figcaption",{className:"full-width",children:["Art by ",(0,a.jsx)("a",{href:"https://twitter.com/artcultureac",target:"_blank",children:"jeheycell.near"})]})]}),"\n",(0,a.jsx)(t.h3,{id:"build-the-contract",children:"Build the contract"}),"\n",(0,a.jsxs)(t.p,{children:["To build the contract, we'll be using ",(0,a.jsx)(t.a,{href:"https://github.com/near/cargo-near",children:(0,a.jsx)(t.code,{children:"cargo-near"})}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Install ",(0,a.jsx)(t.code,{children:"cargo-near"})," first:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"cargo install cargo-near\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Run the following commands and expect to see the compiled Wasm file copied to the ",(0,a.jsx)(t.code,{children:"target/near"})," folder."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"cd contract\ncargo near build\n"})}),"\n",(0,a.jsx)(t.h3,{id:"create-a-subaccount",children:"Create a subaccount"}),"\n",(0,a.jsx)(t.p,{children:"If you've followed from the previous section, you have NEAR CLI installed and a full-access key on your machine. While developing, it's a best practice to create a subaccount and deploy the contract to it. This makes it easy to quickly delete and recreate the subaccount, which wipes the state swiftly and starts from scratch. Let's use NEAR CLI to create a subaccount and fund with 1 NEAR:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"near account create-account fund-myself crossword.friend.testnet '1 NEAR' autogenerate-new-keypair save-to-legacy-keychain sign-as friend.testnet network-config testnet sign-with-legacy-keychain send\n"})}),"\n",(0,a.jsxs)(t.p,{children:["If you look again in your home directory's ",(0,a.jsx)(t.code,{children:".near-credentials"}),", you'll see a new key for the subaccount with its own key pair. This new account is, for all intents and purposes, completely distinct from the account that created it. It might as well be ",(0,a.jsx)(t.code,{children:"alice.testnet"}),", as it has, by default, no special relationship with the parent account. To be clear, ",(0,a.jsx)(t.code,{children:"friend.testnet"})," cannot delete or deploy to ",(0,a.jsx)(t.code,{children:"crossword.friend.testnet"})," unless it's done in a single transaction using Batch Actions, which we'll cover later."]}),"\n",(0,a.jsxs)(t.admonition,{type:"info",children:[(0,a.jsxs)(t.mdxAdmonitionTitle,{children:["Subaccount nesting It's possible to have the account ",(0,a.jsx)(t.code,{children:"another.crossword.friend.testnet"}),", but this account must be created by ",(0,a.jsx)(t.code,{children:"crossword.friend.testnet"}),"."]}),(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"friend.testnet"})," ",(0,a.jsx)(t.strong,{children:"cannot"})," create ",(0,a.jsx)(t.code,{children:"another.crossword.friend.testnet"}),' because accounts may only create a subaccount that\'s "one level deeper."']}),(0,a.jsxs)(t.p,{children:["See this visualization where two keys belonging to ",(0,a.jsx)(t.code,{children:"mike.near"})," are able to create ",(0,a.jsx)(t.code,{children:"new.mike.near"}),". We'll get into concepts around access keys later."]}),(0,a.jsxs)("figure",{children:[(0,a.jsx)("img",{src:o,alt:"Depiction of create account where two figures put together a subaccount. Art created by seanpineda.near"}),(0,a.jsxs)("figcaption",{className:"full-width",children:["Art by ",(0,a.jsx)("a",{href:"https://twitter.com/_seanpineda",target:"_blank",children:"seanpineda.near"})]})]})]}),"\n",(0,a.jsxs)(t.p,{children:["We won't get into top-level accounts or implicit accounts, but you may read more ",(0,a.jsx)(t.a,{href:"https://docs.near.org/docs/concepts/account",children:"about that here"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Now that we have a key pair for our subaccount, we can deploy the contract to ",(0,a.jsx)(t.code,{children:"testnet"})," and interact with it!"]}),"\n",(0,a.jsx)(t.h4,{id:"whats-a-codehash",children:"What's a codehash?"}),"\n",(0,a.jsx)(t.p,{children:"We're almost ready to deploy the smart contract to the account, but first let's take a look at the account we're going to deploy to. Remember, this is the subaccount we created earlier. To view the state easily with NEAR CLI, you may run this command:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"near account view-account-summary crossword.friend.testnet network-config testnet now\n"})}),"\n",(0,a.jsx)(t.p,{children:"What you'll see is something like this:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"------------------------------------------------------------------------------------------\n crossword.friend.testnet         At block #167331831\n                                  (Evjnf29LuqFE7FUf97VQZzNfnUgPFLNyyiUk9qr4Wjri)\n------------------------------------------------------------------------------------------\n Native account balance           10.01 NEAR\n------------------------------------------------------------------------------------------\n Validator stake                  0 NEAR\n------------------------------------------------------------------------------------------\n Storage used by the account      182 B\n------------------------------------------------------------------------------------------\n Contract (SHA-256 checksum hex)  No contract code\n------------------------------------------------------------------------------------------\n Access keys                      1 full access keys and 0 function-call-only access keys\n------------------------------------------------------------------------------------------\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Note the ",(0,a.jsx)(t.code,{children:"Contract"})," SHA-256 checksum is missing. This indicates that there is no contract deployed to this account."]}),"\n",(0,a.jsx)(t.p,{children:"Let's deploy the contract (to the subaccount we created) and then check this again."}),"\n",(0,a.jsx)(t.h3,{id:"deploy-the-contract",children:"Deploy the contract"}),"\n",(0,a.jsxs)(t.p,{children:["Ensure that in your command line application, you're in the directory that contains the ",(0,a.jsx)(t.code,{children:"Cargo.toml"})," file, then run:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"cargo near deploy crossword.friend.testnet without-init-call network-config testnet sign-with-legacy-keychain send\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Congratulations, you've deployed the smart contract! Note that NEAR CLI will output a link to ",(0,a.jsx)(t.a,{href:"https://nearblocks.io/",children:"NEAR Explorer"})," where you can inspect details of the transaction."]}),"\n",(0,a.jsxs)(t.p,{children:["Lastly, let's run this command again and notice that the ",(0,a.jsx)(t.code,{children:"Contract"})," has a SHA-256 checksum. This is the hash of the smart contract deployed to the account."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"near account view-account-summary crossword.friend.testnet network-config testnet now\n"})}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["Deploying a contract is often done on the command line. While it may be ",(0,a.jsx)(t.em,{children:"technically"})," possible to deploy via a frontend, the CLI is likely the best approach. If you're aiming to use a factory model, (where a smart contract deploys contract code to a subaccount) this isn't covered in the tutorial, but you may reference the ",(0,a.jsx)(t.a,{href:"https://github.com/near-daos/sputnik-dao-contract",children:"contracts in SputnikDAO"}),"."]})}),"\n",(0,a.jsx)(t.h3,{id:"call-the-contract-methods-interact",children:"Call the contract methods (interact!)"}),"\n",(0,a.jsx)(t.p,{children:"Let's first call the method that's view-only:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"near contract call-function as-read-only crossword.friend.testnet get_puzzle_number json-args {} network-config testnet now\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Your command prompt will show the result is ",(0,a.jsx)(t.code,{children:"1"}),". Since this method doesn't take any arguments, we don't pass any."]}),"\n",(0,a.jsx)(t.p,{children:"Next, we'll add a crossword solution as a string (later we'll do this in a better way) argument:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"near contract call-function as-transaction crossword.friend.testnet set_solution json-args '{\"solution\": \"near nomicon ref finance\"}' prepaid-gas '100.0 Tgas' attached-deposit '0 NEAR' sign-as friend.testnet network-config testnet sign-with-legacy-keychain send\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Note that we used NEAR CLI's ",(0,a.jsxs)(t.a,{href:"https://docs.near.org/docs/tools/near-cli#near-view",children:[(0,a.jsx)(t.code,{children:"view"})," command"]}),", and didn't include an ",(0,a.jsx)(t.code,{children:"--accountId"})," flag. As mentioned earlier, this is because we are not signing a transaction. This second method uses the NEAR CLI ",(0,a.jsxs)(t.a,{href:"https://docs.near.org/docs/tools/near-cli#near-call",children:[(0,a.jsx)(t.code,{children:"call"})," command"]})," which does sign a transaction and requires the user to specify a NEAR account that will sign it, using the credentials files we looked at."]}),"\n",(0,a.jsx)(t.p,{children:"The last method we have will check the argument against what is stored in state and write a log about whether the crossword solution is correct or incorrect."}),"\n",(0,a.jsx)(t.p,{children:"Correct:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"near contract call-function as-transaction crossword.friend.testnet guess_solution json-args '{\"solution\": \"near nomicon ref finance\"}' prepaid-gas '100.0 Tgas' attached-deposit '0 NEAR' sign-as friend.testnet network-config testnet sign-with-legacy-keychain send\n"})}),"\n",(0,a.jsx)(t.p,{children:"You'll see something like this:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Command line shows log for successful solution guess",src:n(64887).Z+"",width:"2018",height:"354"})}),"\n",(0,a.jsx)(t.p,{children:"Notice the log we wrote is output as well as a link to NEAR Explorer."}),"\n",(0,a.jsx)(t.p,{children:"Incorrect:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"near contract call-function as-transaction crossword.friend.testnet guess_solution json-args '{\"solution\": \"wrong answers here\"}' prepaid-gas '100.0 Tgas' attached-deposit '0 NEAR' sign-as friend.testnet network-config testnet sign-with-legacy-keychain send\n"})}),"\n",(0,a.jsx)(t.p,{children:"As you can imagine, the above command will show something similar, except the logs will indicate that you've given the wrong solution."}),"\n",(0,a.jsx)(t.h2,{id:"reset-the-accounts-contract-and-state",children:"Reset the account's contract and state"}),"\n",(0,a.jsxs)(t.p,{children:["We'll be iterating on this smart contract during this tutorial, and in some cases it's best to start fresh with the NEAR subaccount we created. The pattern to follow is to ",(0,a.jsx)(t.strong,{children:"delete"})," the account (sending all remaining testnet \u24c3 to a recipient) and then ",(0,a.jsx)(t.strong,{children:"create the account"})," again."]}),"\n",(0,a.jsxs)("video",{autoPlay:!0,controls:!0,loop:!0,children:[(0,a.jsx)("source",{src:c,type:"video/mp4"}),(0,a.jsx)(t.p,{children:"Sorry, your browser doesn't support embedded videos."})]}),"\n",(0,a.jsx)("figure",{children:(0,a.jsxs)("figcaption",{children:["Deleting a recreating a subaccount will clear the state and give us a fresh start.",(0,a.jsx)("br",{}),"Animation by ",(0,a.jsx)("a",{href:"https://twitter.com/JohnreyBona",target:"_blank",children:"iambon.near"})]})}),"\n",(0,a.jsx)(t.p,{children:"Using NEAR CLI, the commands will look like this:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"near account delete-account crossword.friend.testnet beneficiary friend.testnet network-config testnet sign-with-legacy-keychain send\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"near account create-account fund-myself crossword.friend.testnet '1 NEAR' autogenerate-new-keypair save-to-legacy-keychain sign-as friend.testnet network-config testnet sign-with-legacy-keychain send\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The first command deletes ",(0,a.jsx)(t.code,{children:"crossword.friend.testnet"})," and sends the rest of its NEAR to ",(0,a.jsx)(t.code,{children:"friend.testnet"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"wrapping-up",children:"Wrapping up"}),"\n",(0,a.jsx)(t.p,{children:"So far, we're writing a simplified version of smart contract and approaching the crossword puzzle in a novice way. Remember that blockchain is an open ledger, meaning everyone can see the state of smart contracts and transactions taking place."}),"\n",(0,a.jsxs)(t.admonition,{type:"info",children:[(0,a.jsxs)(t.mdxAdmonitionTitle,{children:["How would you do that? You may hit an RPC endpoint corresponding to ",(0,a.jsx)(t.code,{children:"view_state"})," and see for yourself. Note: this quick example serves as demonstration purposes, but note that the string being returned is Borsh-serialized and contains more info than just the letters."]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'    curl -d \'{"jsonrpc": "2.0", "method": "query", "id": "see-state", "params": {"request_type": "view_state", "finality": "final", "account_id": "crossword.friend.testnet", "prefix_base64": ""}}\' -H \'Content-Type: application/json\' https://rpc.testnet.near.org\n'})}),(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Screenshot of a terminal screen showing a curl request to an RPC endpoint that returns state of a smart contract",src:n(47214).Z+"",width:"2176",height:"590"})}),(0,a.jsxs)(t.p,{children:["More on this RPC endpoint in the ",(0,a.jsx)(t.a,{href:"https://docs.near.org/docs/api/rpc/contracts#view-contract-state",children:"NEAR docs"}),". :::"]}),(0,a.jsxs)(t.p,{children:["In this section, we saved the crossword solution as plain text, which is likely not a great idea if we want to hide the solution to players of this crossword puzzle. Even though we don't have a function called ",(0,a.jsx)(t.code,{children:"show_solution"})," that returns the struct's ",(0,a.jsx)(t.code,{children:"crossword_solution"})," field, the value is stored transparently in state. We won't get into viewing contract state at this moment, but know it's rather easy ",(0,a.jsx)(t.a,{href:"https://docs.near.org/docs/api/rpc/contracts#view-contract-state",children:"and documented here"}),"."]}),(0,a.jsx)(t.p,{children:"The next section will explore hiding the answer from end users playing the crossword puzzle."})]})]})}function f(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(g,{...e})}):g(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>i});n(67294);var a=n(36905);const s={tabItem:"tabItem_Ymn6"};var r=n(85893);function i(e){var t=e.children,n=e.hidden,i=e.className;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(s.tabItem,i),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(67294),s=n(36905),r=n(12466),i=n(16550),o=n(20469),c=n(91980),l=n(67392),d=n(50012);function h(e){var t,n;return null!=(t=null==(n=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function u(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:function(e){return h(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,l.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function g(e){var t=e.queryString,n=void 0!==t&&t,s=e.groupId,r=(0,i.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:s});return[(0,c._X)(o),(0,a.useCallback)((function(e){if(o){var t=new URLSearchParams(r.location.search);t.set(o,e),r.replace(Object.assign({},r.location,{search:t.toString()}))}}),[o,r])]}function f(e){var t,n,s,r,i=e.defaultValue,c=e.queryString,l=void 0!==c&&c,h=e.groupId,f=u(e),m=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var s=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:i,tabValues:f})})),b=m[0],w=m[1],x=g({queryString:l,groupId:h}),j=x[0],y=x[1],v=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:h}.groupId),n=(0,d.Nk)(t),s=n[0],r=n[1],[s,(0,a.useCallback)((function(e){t&&r.set(e)}),[t,r])]),k=v[0],N=v[1],A=function(){var e=null!=j?j:k;return p({value:e,tabValues:f})?e:null}();return(0,o.Z)((function(){A&&w(A)}),[A]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!p({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);w(e),y(e),N(e)}),[y,N,f]),tabValues:f}}var m=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var w=n(85893);function x(e){var t=e.className,n=e.block,a=e.selectedValue,i=e.selectValue,o=e.tabValues,c=[],l=(0,r.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=c.indexOf(t),s=o[n].value;s!==a&&(l(t),i(s))},h=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,s=c.indexOf(e.currentTarget)+1;n=null!=(a=c[s])?a:c[0];break;case"ArrowLeft":var r,i=c.indexOf(e.currentTarget)-1;n=null!=(r=c[i])?r:c[c.length-1]}null==(t=n)||t.focus()};return(0,w.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:o.map((function(e){var t=e.value,n=e.label,r=e.attributes;return(0,w.jsx)("li",Object.assign({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:function(e){return c.push(e)},onKeyDown:h,onClick:d},r,{className:(0,s.Z)("tabs__item",b.tabItem,null==r?void 0:r.className,{"tabs__item--active":a===t}),children:null!=n?n:t}),t)}))})}function j(e){var t=e.lazy,n=e.children,s=e.selectedValue,r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var i=r.find((function(e){return e.props.value===s}));return i?(0,a.cloneElement)(i,{className:"margin-top--md"}):null}return(0,w.jsx)("div",{className:"margin-top--md",children:r.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==s})}))})}function y(e){var t=f(e);return(0,w.jsxs)("div",{className:(0,s.Z)("tabs-container",b.tabList),children:[(0,w.jsx)(x,Object.assign({},t,e)),(0,w.jsx)(j,Object.assign({},t,e))]})}function v(e){var t=(0,m.Z)();return(0,w.jsx)(y,Object.assign({},e,{children:h(e.children)}),String(t))}},71183:(e,t,n)=>{n.d(t,{O2:()=>g,Ey:()=>m,SQ:()=>f});var a=n(67294),s=n(74866),r=n(85162),i=n(74165),o=n(15861),c=n(1841),l=n.n(c),d=n(85893);function h(){return(h=(0,o.Z)((0,i.Z)().mark((function e(t,n,a){var s,r,o,c;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((r=localStorage.getItem(t+"-until"))&&r>Date.now())){e.next=5;break}s=localStorage.getItem(t),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(t);case 8:return e.next=10,e.sent.text();case 10:s=e.sent,localStorage.setItem(t,s),localStorage.setItem(t+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return o=s.split("\n"),n=n?Number(n)-1:0,a=a?Number(a):o.length,o=o.slice(n,a),c=o.reduce((function(e,t){if(0===t.length)return e;var n=t.match(/^\s+/);return n?Math.min(e,n[0].length):0}),1/0),e.abrupt("return",o.map((function(e){return e.slice(c)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const u=function(e){var t=e.url,n=e.start,s=e.end,r=e.language,i=e.fname,o=e.metastring,c=(0,a.useState)("Loading..."),u=c[0],p=c[1];return(0,a.useEffect)((function(){var e=function(e){var t=e.slice(e.indexOf("https")).split("#"),n=t[0],a=(t[1],new URL(n).pathname.split("/").slice(1)),s=a[0],r=a[1];return a[2],"https://raw.githubusercontent.com/"+s+"/"+r+"/"+a[3]+"/"+a.slice(4).join("/")}(t),a=function(e,t,n){return h.apply(this,arguments)}(e,n,s);a.then((function(e){return p(e)}))})),(0,d.jsxs)("div",{fname:i,children:[(0,d.jsx)(l(),{language:r,metastring:o+" showLineNumbers",children:u}),(0,d.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,d.jsx)("a",{href:t,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var p={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function g(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,d.jsx)(s.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,d.jsx)(r.Z,{value:e.props.value,label:p[e.props.value],children:e})}))})}function f(e){var t=e.children,n=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,a=(n.children,n.url),s=n.start,r=n.end,i=n.fname;if(e.type===m)return m({url:a,start:s,end:r,language:t,fname:i});return e}(e,n)})),1==t.length?(0,d.jsx)(r.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,d.jsx)(s.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,d.jsx)(r.Z,{value:t,label:e.props.fname,children:e})}))})}function m(e){var t=e.url,n=e.start,a=e.end,s=e.language,r=e.fname,i=e.metastring;return u({url:t,start:n,end:a,language:s,fname:r,metastring:i})}},64887:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cli-guess-solution-69ba10e77171f71a0eccb80730687f5e.png"},47214:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rpc-api-view-state-47b18cb2be5020cc96f4616d99eb888d.png"}}]);