"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[5242],{52991:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(67294),a=n(86010),i=n(53438),c=n(39960),l=n(13919),o=n(95999);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function d(e){let{href:t,children:n}=e;return r.createElement(c.Z,{href:t,className:(0,a.Z)("card padding--lg",s.cardContainer)},n)}function u(e){let{href:t,icon:n,title:i,description:c}=e;return r.createElement(d,{href:t},r.createElement("h2",{className:(0,a.Z)("text--truncate",s.cardTitle),title:i},n," ",i),c&&r.createElement("p",{className:(0,a.Z)("text--truncate",s.cardDescription),title:c},c))}function m(e){let{item:t}=e;const n=(0,i.Wl)(t);return n?r.createElement(u,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const n=(0,l.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.xz)(t.docId??void 0);return r.createElement(u,{href:t.href,icon:n,title:t.label,description:a?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(p,{item:t});case"category":return r.createElement(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const n=(0,i.jA)();return r.createElement(y,{items:n.items,className:t})}function y(e){const{items:t,className:n}=e;if(!t)return r.createElement(h,e);const c=(0,i.MN)(t);return r.createElement("section",{className:(0,a.Z)("row",n)},c.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(f,{item:e})))))}},98992:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=n(87462),a=(n(67294),n(3905)),i=n(52991),c=n(53438);const l={id:"\u4ea4\u6613",title:"\u4ea4\u6613",description:"\u4ea4\u6613",custom_edit_url:null},o=void 0,s={unversionedId:"develop/full-custody-waas-api/\u4ea4\u6613",id:"develop/full-custody-waas-api/\u4ea4\u6613",title:"\u4ea4\u6613",description:"\u4ea4\u6613",source:"@site/i18n/zh-Hant/docusaurus-plugin-content-docs/current/develop/full-custody-waas-api/\u4ea4\u6613.tag.mdx",sourceDirName:"develop/full-custody-waas-api",slug:"/develop/full-custody-waas-api/\u4ea4\u6613",permalink:"/zh-Hant/docs/develop/full-custody-waas-api/\u4ea4\u6613",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"\u4ea4\u6613",title:"\u4ea4\u6613",description:"\u4ea4\u6613",custom_edit_url:null},sidebar:"fullCustodyApiSidebar",previous:{title:"\u751f\u6210\u94fe\u5730\u5740",permalink:"/zh-Hant/docs/develop/full-custody-waas-api/\u751f\u6210\u94fe\u5730\u5740"},next:{title:"\u4ea4\u6613\u5217\u8868",permalink:"/zh-Hant/docs/develop/full-custody-waas-api/\u4ea4\u6613\u5217\u8868"}},d={},u=[],m={toc:u},p="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u521b\u5efa\u53ca\u67e5\u8be2\u4ea4\u6613\u4fe1\u606f\uff0c\u521b\u5efa\u79bb\u7ebf\u7b7e\u540d"),(0,a.kt)(i.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);