"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[9671],{52991:(e,t,a)=>{a.d(t,{Z:()=>w});var c=a(67294),n=a(86010),i=a(53438),r=a(39960),s=a(13919),o=a(95999);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function d(e){let{href:t,children:a}=e;return c.createElement(r.Z,{href:t,className:(0,n.Z)("card padding--lg",l.cardContainer)},a)}function p(e){let{href:t,icon:a,title:i,description:r}=e;return c.createElement(d,{href:t},c.createElement("h2",{className:(0,n.Z)("text--truncate",l.cardTitle),title:i},a," ",i),r&&c.createElement("p",{className:(0,n.Z)("text--truncate",l.cardDescription),title:r},r))}function m(e){let{item:t}=e;const a=(0,i.Wl)(t);return a?c.createElement(p,{href:a,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function u(e){let{item:t}=e;const a=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,i.xz)(t.docId??void 0);return c.createElement(p,{href:t.href,icon:a,title:t.label,description:n?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return c.createElement(u,{item:t});case"category":return c.createElement(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const a=(0,i.jA)();return c.createElement(w,{items:a.items,className:t})}function w(e){const{items:t,className:a}=e;if(!t)return c.createElement(h,e);const r=(0,i.MN)(t);return c.createElement("section",{className:(0,n.Z)("row",a)},r.map(((e,t)=>c.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},c.createElement(f,{item:e})))))}},67359:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var c=a(87462),n=(a(67294),a(3905)),i=a(52991),r=a(53438);const s={id:"mpc-node-ap-is",title:"MPC Node APIs",description:"MPC Node APIs",custom_edit_url:null},o=void 0,l={unversionedId:"develop/mpc-waas-api/mpc-node-ap-is",id:"develop/mpc-waas-api/mpc-node-ap-is",title:"MPC Node APIs",description:"MPC Node APIs",source:"@site/docs/develop/mpc-waas-api/mpc-node-ap-is.tag.mdx",sourceDirName:"develop/mpc-waas-api",slug:"/develop/mpc-waas-api/mpc-node-ap-is",permalink:"/docs/develop/mpc-waas-api/mpc-node-ap-is",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"mpc-node-ap-is",title:"MPC Node APIs",description:"MPC Node APIs",custom_edit_url:null},sidebar:"mpcApiSidebar",previous:{title:"\u66f4\u65b0\u94b1\u5305\u5c5e\u6027\uff08\u9ad8\u7ea7\u529f\u80fd\u5f00\u542f\u3001\u5173\u95ed\uff09",permalink:"/docs/develop/mpc-waas-api/v-1-waas-mpc-wallet-advance-update-wallet"},next:{title:"\u67e5\u8be2mpc\u534f\u8bae\u6267\u884c\u8bb0\u5f55",permalink:"/docs/develop/mpc-waas-api/v-1-waas-mpc-mpcnode-list-mpc-requests"}},d={},p=[],m={toc:p},u="wrapper";function f(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,c.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u67e5\u8be2mpc\u534f\u8bae\u6267\u884c\u4fe1\u606f\u4ee5\u53ca\u60a8\u7684MPC Node\u5728\u7ebf\u72b6\u6001"),(0,n.kt)(i.Z,{items:(0,r.jA)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);