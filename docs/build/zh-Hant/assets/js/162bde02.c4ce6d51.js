"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[4969],{52991:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(67294),a=n(86010),i=n(53438),c=n(39960),o=n(13919),s=n(95999);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function d(e){let{href:t,children:n}=e;return r.createElement(c.Z,{href:t,className:(0,a.Z)("card padding--lg",l.cardContainer)},n)}function m(e){let{href:t,icon:n,title:i,description:c}=e;return r.createElement(d,{href:t},r.createElement("h2",{className:(0,a.Z)("text--truncate",l.cardTitle),title:i},n," ",i),c&&r.createElement("p",{className:(0,a.Z)("text--truncate",l.cardDescription),title:c},c))}function p(e){let{item:t}=e;const n=(0,i.Wl)(t);return n?r.createElement(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function u(e){let{item:t}=e;const n=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.xz)(t.docId??void 0);return r.createElement(m,{href:t.href,icon:n,title:t.label,description:a?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(u,{item:t});case"category":return r.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const n=(0,i.jA)();return r.createElement(w,{items:n.items,className:t})}function w(e){const{items:t,className:n}=e;if(!t)return r.createElement(h,e);const c=(0,i.MN)(t);return r.createElement("section",{className:(0,a.Z)("row",n)},c.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(f,{item:e})))))}},98111:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var r=n(87462),a=(n(67294),n(3905)),i=n(52991),c=n(53438);const o={id:"\u8d26\u6237-\u5730\u5740",title:"\u8d26\u6237&\u5730\u5740",description:"\u8d26\u6237&\u5730\u5740",custom_edit_url:null},s=void 0,l={unversionedId:"develop/mpc-waas-api/\u8d26\u6237-\u5730\u5740",id:"develop/mpc-waas-api/\u8d26\u6237-\u5730\u5740",title:"\u8d26\u6237&\u5730\u5740",description:"\u8d26\u6237&\u5730\u5740",source:"@site/i18n/zh-Hant/docusaurus-plugin-content-docs/current/develop/mpc-waas-api/\u8d26\u6237-\u5730\u5740.tag.mdx",sourceDirName:"develop/mpc-waas-api",slug:"/develop/mpc-waas-api/\u8d26\u6237-\u5730\u5740",permalink:"/zh-Hant/docs/develop/mpc-waas-api/\u8d26\u6237-\u5730\u5740",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"\u8d26\u6237-\u5730\u5740",title:"\u8d26\u6237&\u5730\u5740",description:"\u8d26\u6237&\u5730\u5740",custom_edit_url:null},sidebar:"mpcApiSidebar",previous:{title:"\u91d1\u5e93\u5217\u8868",permalink:"/zh-Hant/docs/develop/mpc-waas-api/\u91d1\u5e93\u5217\u8868"},next:{title:"\u521b\u5efa\u94b1\u5305",permalink:"/zh-Hant/docs/develop/mpc-waas-api/\u521b\u5efa\u94b1\u5305"}},d={},m=[],p={toc:m},u="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u521b\u5efa\u3001\u7ba1\u7406\u3001\u67e5\u8be2\u94b1\u5305\u8d26\u6237\u4e0e\u5730\u5740\u4fe1\u606f"),(0,a.kt)(i.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);