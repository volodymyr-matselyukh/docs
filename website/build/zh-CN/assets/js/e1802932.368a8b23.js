"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3677],{64870:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=s(85893),n=s(11151);const i={sidebar_position:3,sidebar_label:"Statistics Dashboard",title:"RPC Statistics"},r=void 0,o={id:"pagoda/rpc/stats",title:"RPC Statistics",description:"Please be advised that these tools and services will be discontinued soon.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/pagoda/rpc/stats.md",sourceDirName:"pagoda/rpc",slug:"/pagoda/rpc/stats",permalink:"/zh-CN/pagoda/rpc/stats",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/pagoda/rpc/stats.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1712954223e3,sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Statistics Dashboard",title:"RPC Statistics"},sidebar:"pagoda",previous:{title:"Setup",permalink:"/zh-CN/pagoda/rpc/setup"},next:{title:"NEAR Enhanced API",permalink:"/zh-CN/pagoda/rpc/api"}},d={},c=[{value:"Set a Time Period",id:"set-a-time-period",level:2},{value:"Requests breakdowns",id:"requests-breakdowns",level:2},{value:"Network Status",id:"network-status",level:2}];function l(e){const t={a:"a",admonition:"admonition",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.admonition,{type:"warning",children:(0,a.jsx)(t.p,{children:"Please be advised that these tools and services will be discontinued soon."})}),"\n",(0,a.jsxs)(t.p,{children:["Inspect your RPC Usage in the ",(0,a.jsx)(t.a,{href:"https://console.pagoda.co/apis?tab=statistics",children:"Statistics Tab"}),":"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:s(15732).Z+"",width:"668",height:"404"})}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsx)(t.p,{children:"Data defaults to the last 30 days.\nCurrently the statistics page show the usage data across all projects and API keys within an organization set on Pagoda Console."})}),"\n",(0,a.jsx)(t.p,{children:"Aggregated key metrics available at the top of the dashboard are"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Total Request Volume"}),"\n",(0,a.jsx)(t.li,{children:"Request Success Rate"}),"\n",(0,a.jsx)(t.li,{children:"Total failed request"}),"\n",(0,a.jsx)(t.li,{children:"Average Latency"}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"set-a-time-period",children:"Set a Time Period"}),"\n",(0,a.jsx)(t.p,{children:"Data is sent with UTC time to the browser and the browser adjusts to the user\u2019s timezon."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Last 15 Minutes is the last complete 15 minutes. This updates every few seconds."}),"\n",(0,a.jsx)(t.li,{children:"Last 1 Hour is the last fully completed hour; from 00 to 59 minutes and 59 seconds."}),"\n",(0,a.jsx)(t.li,{children:"Last 24 Hours is the last fully completed 24 consecutive hours."}),"\n",(0,a.jsx)(t.li,{children:"Last 7 Days is the previous 7 days from the current time. Each data point groups one hour\u2019s worth of data. The most recent hour is partial data for the current hour and updates every few seconds."}),"\n",(0,a.jsx)(t.li,{children:"Last 30 Days is the previous 30 days from the current time. Each data point groups one hour\u2019s worth of data. The most recent hour is partial data for the current hour and updates every few seconds."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"requests-breakdowns",children:"Requests breakdowns"}),"\n",(0,a.jsx)(t.p,{children:"Multiple breakdowns are available in the statistics page"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:s(93824).Z+"",width:"668",height:"391"})}),"\n",(0,a.jsx)(t.p,{children:"Requests can be broken down by"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Requests Methods"}),"\n",(0,a.jsx)(t.li,{children:"Requests Status"}),"\n",(0,a.jsx)(t.li,{children:"Aggregated status display breakdown by requests methods"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"We are working to include more detailed breakdown by each requests and more interactive dashboard that enable clickthrough from the charts"}),"\n",(0,a.jsx)(t.h2,{id:"network-status",children:"Network Status"}),"\n",(0,a.jsxs)(t.p,{children:["Check the ",(0,a.jsx)(t.a,{href:"https://status.pagoda.co/",children:"Pagoda Status page"})," for the latest service information across all networks and subscribe to updates based on your service choice and needs."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:s(97091).Z+"",width:"904",height:"922"})})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},15732:(e,t,s)=>{s.d(t,{Z:()=>a});const a=s.p+"assets/images/stats1-62ec8d2a12bc3c49aed6f2a552df67b6.png"},93824:(e,t,s)=>{s.d(t,{Z:()=>a});const a=s.p+"assets/images/stats2-9d5419af1dc18d2b604515898cfac691.png"},97091:(e,t,s)=>{s.d(t,{Z:()=>a});const a=s.p+"assets/images/stats3-e268753c797d4f741120f93a26a4750c.png"},11151:(e,t,s)=>{s.d(t,{Z:()=>o,a:()=>r});var a=s(67294);const n={},i=a.createContext(n);function r(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);