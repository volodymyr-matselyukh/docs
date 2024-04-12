"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[454],{2814:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var r=s(85893),i=s(11151);const t={id:"using-iframes",title:"Using IFrames"},a="Iframes",o={id:"tutorials/near-components/using-iframes",title:"Using IFrames",description:"In this tutorial you'll learn how to use the iframe VM tag and the Iframe resizer library, so you can embed external HTML or use custom DOM elements when building NEAR components.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/3.tutorials/near-components/iframes.md",sourceDirName:"3.tutorials/near-components",slug:"/tutorials/near-components/using-iframes",permalink:"/vi/tutorials/near-components/using-iframes",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/near-components/iframes.md",tags:[],version:"current",frontMatter:{id:"using-iframes",title:"Using IFrames"},sidebar:"tutorials",previous:{title:"Design Components",permalink:"/vi/tutorials/near-components/ds-components"},next:{title:"Push Notifications",permalink:"/vi/tutorials/near-components/push-notifications"}},c={},d=[{value:"Using IFrames on NEAR VM",id:"using-iframes-on-near-vm",level:2},{value:"Properties",id:"properties",level:3},{value:"Events",id:"events",level:3},{value:"Example",id:"example",level:3},{value:"Iframe Resizer",id:"iframe-resizer",level:2},{value:"Basic Example",id:"basic-example",level:3},{value:"<code>srcDoc</code> Example",id:"srcdoc-example",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"iframes",children:"Iframes"}),"\n",(0,r.jsxs)(n.p,{children:["In this tutorial you'll learn ",(0,r.jsx)(n.a,{href:"#using-iframes-on-bos-vm",children:"how to use"})," the ",(0,r.jsx)(n.code,{children:"iframe"})," VM tag and the ",(0,r.jsx)(n.a,{href:"#iframe-resizer",children:"Iframe resizer"})," library, so you can embed external HTML or use custom DOM elements when building NEAR components.\nYou can use it along the rest of approved VM tags to simplify your component development."]}),"\n",(0,r.jsx)(n.h2,{id:"using-iframes-on-near-vm",children:"Using IFrames on NEAR VM"}),"\n",(0,r.jsxs)(n.p,{children:["Iframes can be used to embed external HTML or to use custom DOM\nelements, for example ",(0,r.jsx)(n.code,{children:"canvas"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"iframe"})," tag takes the following properties: ",(0,r.jsx)(n.code,{children:"className"}),", ",(0,r.jsx)(n.code,{children:"style"}),", ",(0,r.jsx)(n.code,{children:"src"}),",\n",(0,r.jsx)(n.code,{children:"srcDoc"}),", ",(0,r.jsx)(n.code,{children:"title"}),", ",(0,r.jsx)(n.code,{children:"message"}),", and ",(0,r.jsx)(n.code,{children:"onMessage"}),". The iframe has a sandbox property\nset to ",(0,r.jsx)(n.code,{children:'sandbox="allow-scripts"'}),", which only allows scripts."]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"message"})," and ",(0,r.jsx)(n.code,{children:"onMessage"})," are used to communicate with this iframe\ninstance."]})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"param"}),(0,r.jsx)(n.th,{children:"description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"message"})}),(0,r.jsxs)(n.td,{children:["it's passed to the iframe every time the deep equal is different, or the iframe is recreated. The message is passed using ",(0,r.jsx)(n.code,{children:'contentWindow.postMessage(message, "*")'})," on the iframe."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"onMessage(data)"})}),(0,r.jsxs)(n.td,{children:["it's called when the iframe passes a message to ",(0,r.jsx)(n.code,{children:"window.top"}),". Only ",(0,r.jsx)(n.code,{children:"event.data"})," is passed to the ",(0,r.jsx)(n.code,{children:"onMessage"})]})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"events",children:"Events"}),"\n",(0,r.jsxs)(n.p,{children:["The VM exposes the following ",(0,r.jsx)(n.code,{children:"<iframe>"})," events:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"onLoad()"}),": support for ",(0,r.jsx)(n.code,{children:"onLoad"})," event without any event info"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"<iframe onLoad={() => { console.log('iframe loaded') }}>\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"onResized()"}),": support for ",(0,r.jsx)(n.code,{children:"onResized"})," ",(0,r.jsx)(n.a,{href:"#iframe-resizer",children:"Iframe Resizer"})," event with an object only containing the new ",(0,r.jsx)(n.code,{children:"width"})," and ",(0,r.jsx)(n.code,{children:"height"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"<iframe iframeResizer={{\n   onResized: ({width, height}) => { console.log('iframe resized', width, height) },\n}}>\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(n.p,{children:["The following example demonstrates how you can use an iframe to call\n",(0,r.jsx)(n.code,{children:"eval"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'State.init({\n  text: `"b" + "a" + +"a" + "a"`,\n});\n\nconst code = `\n<div>Expression: <pre id="exp" /></div>\n<div>Results: <pre id="res" /></div>\n\n<script>\n    window.top.postMessage("loaded", "*");\n    window.addEventListener("message", (event) => {\n        const data = event.data\n        document.getElementById("exp").innerHTML = JSON.stringify(data);\n        try {\n            const result = eval(data.exp);\n            document.getElementById("res").innerHTML = result;\n            event.source.postMessage(result, "*");\n        } catch (e) {\n            // ignore\n        }\n    }, false);\n<\/script>\n`;\n\nreturn (\n  <div>\n    <input\n      value={state.text || ""}\n      onChange={(e) => State.update({ text: e.target.value })}\n    />\n    Iframes below\n    <div className="d-flex">\n      <iframe\n        className="w-50 border"\n        srcDoc={code}\n        message={{ exp: state.text || "" }}\n        onMessage={(res1) => State.update({ res1 })}\n      />\n      <iframe\n        className="w-50 border"\n        srcDoc={code}\n        message={{ exp: (state.text || "") + " + \' banana\'" }}\n        onMessage={(res2) => State.update({ res2 })}\n      />\n    </div>\n    Result:{" "}\n    <pre>\n      res1 = {JSON.stringify(state.res1)}\n      res2 = {JSON.stringify(state.res2)}\n    </pre>\n  </div>\n);\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://user-images.githubusercontent.com/470453/216140589-801a49e8-9ff1-4b76-9019-499b375989cc.png",alt:"iframes"})}),"\n",(0,r.jsx)(n.h2,{id:"iframe-resizer",children:"Iframe Resizer"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/davidjbradshaw/iframe-resizer",children:"Iframe Resizer"})," is a critical library for rendering responsive iframes. This library automatically resizes the ",(0,r.jsx)(n.code,{children:"iframe"})," to match the child content size to avoid scrollbars on the ",(0,r.jsx)(n.code,{children:"iframe"})," itself."]}),"\n",(0,r.jsxs)(n.admonition,{title:"don't forget",type:"caution",children:[(0,r.jsxs)(n.p,{children:["The child page rendered by the ",(0,r.jsx)(n.code,{children:"iframe"})," ",(0,r.jsx)(n.strong,{children:"must include"})," this script in order for the resizing to work:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.6/iframeResizer.contentWindow.js"><\/script>\n'})})]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["NEAR VM uses the React flavor of ",(0,r.jsx)(n.a,{href:"https://github.com/davidjbradshaw/iframe-resizer-react",children:"this plugin"}),"."]})}),"\n",(0,r.jsx)(n.h3,{id:"basic-example",children:"Basic Example"}),"\n",(0,r.jsx)(n.p,{children:"You can use the Iframe resizer library like this:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'return (\n  <div>\n    <iframe\n      iframeResizer\n      src="https://davidjbradshaw.com/iframe-resizer/example/frame.content.html"\n    />\n  </div>\n);\n'})}),"\n",(0,r.jsx)(n.p,{children:"If you need to pass in options to override the default behavior:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'return (\n  <div>\n    <iframe\n      iframeResizer={{ log: true }}\n      src="https://davidjbradshaw.com/iframe-resizer/example/frame.content.html"\n    />\n  </div>\n);\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://user-images.githubusercontent.com/1475067/231292519-51f571c6-5f7b-4076-a1bb-91fd8a99c775.png",alt:"iframe resizer"})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["You can check ",(0,r.jsx)(n.a,{href:"https://near.org/near/widget/ComponentDetailsPage?src=calebjacob.near/widget/IframeResizerTest",children:"this example"})," to see a complete component using Iframe Resizer."]})}),"\n",(0,r.jsxs)(n.h3,{id:"srcdoc-example",children:[(0,r.jsx)(n.code,{children:"srcDoc"})," Example"]}),"\n",(0,r.jsxs)(n.p,{children:["An example of a valid ",(0,r.jsx)(n.code,{children:"srcDoc"})," for a secure Iframe using ",(0,r.jsx)(n.code,{children:"iframeResizer"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const code = `\n<script>\n// ...your code...\n\n// define message handler\nconst handleMessage = (m) => {\n  console.log(\'received message\', m)\n  document.getElementById("messageText").innerHTML = m;\n};\n\n// finally, configure iframe resizer options before importing the script\nwindow.iFrameResizer = {\n    onMessage: handleMessage\n  }\n<\/script>\n<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.6/iframeResizer.contentWindow.js"><\/script>\n<p id="messageText">loading...</p>\n`;\n\nreturn (\n  <div>\n    <iframe\n      iframeResizer\n      className="w-100"\n      srcDoc={code}\n      message="my message"\n    />\n  </div>\n);\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>a});var r=s(67294);const i={},t=r.createContext(i);function a(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);