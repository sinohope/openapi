"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[8871],{52991:(e,t,n)=>{n.d(t,{Z:()=>y});var o=n(67294),c=n(86010),i=n(53438),r=n(39960),a=n(13919),s=n(95999);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function d(e){let{href:t,children:n}=e;return o.createElement(r.Z,{href:t,className:(0,c.Z)("card padding--lg",l.cardContainer)},n)}function p(e){let{href:t,icon:n,title:i,description:r}=e;return o.createElement(d,{href:t},o.createElement("h2",{className:(0,c.Z)("text--truncate",l.cardTitle),title:i},n," ",i),r&&o.createElement("p",{className:(0,c.Z)("text--truncate",l.cardDescription),title:r},r))}function u(e){let{item:t}=e;const n=(0,i.Wl)(t);return n?o.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const n=(0,a.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,i.xz)(t.docId??void 0);return o.createElement(p,{href:t.href,icon:n,title:t.label,description:c?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return o.createElement(m,{item:t});case"category":return o.createElement(u,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const n=(0,i.jA)();return o.createElement(y,{items:n.items,className:t})}function y(e){const{items:t,className:n}=e;if(!t)return o.createElement(g,e);const r=(0,i.MN)(t);return o.createElement("section",{className:(0,c.Z)("row",n)},r.map(((e,t)=>o.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},o.createElement(h,{item:e})))))}},13815:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(87462),c=(n(67294),n(3905)),i=n(52991),r=n(53438);const a={id:"e-custody-exchange",title:"E-Custody->Exchange",description:"E-Custody->Exchange",custom_edit_url:null},s=void 0,l={unversionedId:"develop/openloop-api/e-custody-exchange",id:"develop/openloop-api/e-custody-exchange",title:"E-Custody->Exchange",description:"E-Custody->Exchange",source:"@site/docs/develop/openloop-api/e-custody-exchange.tag.mdx",sourceDirName:"develop/openloop-api",slug:"/develop/openloop-api/e-custody-exchange",permalink:"/docs/develop/openloop-api/e-custody-exchange",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"e-custody-exchange",title:"E-Custody->Exchange",description:"E-Custody->Exchange",custom_edit_url:null},sidebar:"openLoopApiSidebar",previous:{title:"/internal/v1/mpc/join",permalink:"/docs/develop/openloop-api/internal-v-1-mpc-join"},next:{title:"/internal/v1/mpc/signature/result",permalink:"/docs/develop/openloop-api/internal-v-1-mpc-signature-result"}},d={},p=[],u={toc:p},m="wrapper";function h(e){let{components:t,...n}=e;return(0,c.kt)(m,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"The mpc custody service (which is run by the exchange) calls Exchange's business system internally"),(0,c.kt)(i.Z,{items:(0,r.jA)().items,mdxType:"DocCardList"}))}h.isMDXComponent=!0}}]);