"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[3146],{90244:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>h,contentTitle:()=>m,default:()=>f,frontMatter:()=>d,metadata:()=>u,toc:()=>y});var t=a(87462),s=(a(67294),a(3905)),o=a(26389),i=a(94891),p=(a(75190),a(47507)),l=a(24310),r=a(63303),c=(a(75035),a(85162));const d={id:"v-1-waas-common-get-supported-chains",title:"\u67e5\u8be2\u7cfb\u7edf\u652f\u6301\u94fe",description:"\u67e5\u8be2\u7cfb\u7edf\u652f\u6301\u94fe",sidebar_label:"\u67e5\u8be2\u7cfb\u7edf\u652f\u6301\u94fe",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Common APIs"],operationId:"/v1/waas/common/get_supported_chains",responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{code:{type:"integer",example:200},msg:{type:"string",example:""},data:{type:"array",items:{required:["chainName","chainSymbol"],type:"object",properties:{chainName:{type:"string",description:"\u94fe\u5168\u540d",example:"Near"},chainSymbol:{type:"string",description:"\u94fe\u540d\u79f0 \u7b80\u79f0 \u94fe\u6807\u8bc6 \u5177\u6709\u552f\u4e00\u6027",example:"NEAR"}}}},success:{type:"boolean"}}}}}}},description:"\u67e5\u8be2\u7cfb\u7edf\u652f\u6301\u94fe",method:"post",path:"/v1/waas/common/get_supported_chains",servers:[{url:"https://api-sandbox.sinohope.com/"}],info:{title:"Sinohope Full Custody WaaS API",version:"0.0.1",description:"# \u8fd4\u56de\u503c\u8bf4\u660e\n## \u7edf\u4e00\u8fd4\u56de\u503c\n| \u4ee3\u7801 | \u8bf4\u660e |\n| :-- |:---------------|\n| code | \u72b6\u6001\u8fd4\u56de\u4ee3\u7801\uff08\u6210\u529f\u8fd4\u56de200\uff09 |\n| msg | \u72b6\u6001\u8fd4\u56de\u63cf\u8ff0 |\n| data | \u54cd\u5e94\u7684\u6570\u636e |\n| success | \u8bf7\u6c42\u662f\u5426\u6210\u529f\uff08\u6210\u529f\u8fd4\u56detrue\uff0c\u5931\u8d25\u8fd4\u56defalse\uff09 |\n\n# \u5e38\u89c1\u9519\u8bef\u7801\u5b9a\u4e49\n\n\u5f53Sinohope WaaS \u670d\u52a1\u53d1\u751f\u9519\u8bef\u7684\u65f6\u5019\uff0c\u4f1a\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u7edf\u4e00\u683c\u5f0f\u7684\u6570\u636e\n\n\n- `200`: Successful response. Refer to each API for the detailed response data.\n- `400`: Return Bad Request.\n- `401`: Unauthorized. Either API details are missing or invalid\n- `403`: Forbidden - You do not have access to the requested resource.\n- `415`: Unsupported media type. You need to use application/json.\n- `500`: Exchange/Sinohope internal error.\n\n## \u7cfb\u7edf\u5c42\u9762\u9519\u8bef\n| \u9519\u8bef\u7801 | \u63cf\u8ff0 |\n| :-- |:---------------|\n| 1001 | \u672a\u77e5\u5f02\u5e38\uff0c\u8bf7\u8054\u7cfb Sinohope \u5ba2\u670d |\n| 1002 | \u91cd\u590d\u7684\u8bf7\u6c42 |\n| 1004 | APIKey \u9519\u8bef |\n| 1005 | \u9a8c\u7b7e\u5931\u8d25 |\n| 1006 | IP \u8c03\u7528\u9891\u7387\u53d7\u9650 |\n\n## \u53c2\u6570\u5c42\u9762\u9519\u8bef\n| \u9519\u8bef\u7801 | \u63cf\u8ff0 |\n| :-- |:---------------|\n| 2001 | \u5e01\u79cd\u6682\u4e0d\u652f\u6301 |\n| 2002 | \u94fe\u6682\u4e0d\u652f\u6301 |\n| 2003 | \u8f93\u5165\u5730\u5740\u65e0\u6548 |\n| 2004 | \u4ea4\u6613\u8bb0\u5f55\u4e0d\u5b58\u5728 |\n| 2005 | \u65e0\u6743\u9650 |\n| 2006 | \u8f6c\u8d26\u4fe1\u606f\u5f02\u5e38 \uff08kyt\u6821\u9a8c\u4e0d\u901a\u8fc7\uff09 |\n| 2007 | \u77ff\u5de5\u8d39\u8fc7\u4f4e |\n| 2008 | To\u5730\u5740\u975e\u5185\u90e8\u5730\u5740 \uff08\u8f6c\u8d26\u4fdd\u62a4\uff09 |\n| 2009 | \u4f59\u989d\u4e0d\u8db3\u4ee5\u652f\u4ed8\u8f6c\u8d26\u6570\u91cf\u548cGas\u8d39 |\n| 2010 | gas\u4e0d\u8db3 \uff08token\u8f6c\u8d26\uff09 |\n| 2011 | \u53ef\u7528\u4f59\u989d\u4e0d\u8db3 \uff08token\u8f6c\u8d26\uff09 |\n\n## \u4e1a\u52a1\u5c42\u9762\u9519\u8bef\n| \u9519\u8bef\u7801 | \u63cf\u8ff0 |\n| :-- |:---------------|\n| 4001 | \u7ec4\u4ea4\u6613\u5931\u8d25 |\n| 4002 | \u5e7f\u64ad\u5931\u8d25 |\n| 4003 | \u4e0d\u652f\u6301\u52a0\u901f\u7684\u5e01\u79cd |\n| 4004 | \u52a0\u901f\u4ea4\u6613\u5df2\u4e0a\u94fe\u6216nonce\u5df2\u88ab\u5360\u7528 |\n| 4005 | \u53d6\u6d88\u4ea4\u6613\u5df2\u4e0a\u94fe\u6216nonce\u5df2\u88ab\u5360\u7528 |\n| 4006 | TSSNode \u672a\u7ed1\u5b9a |\n| 4007 | TSSNode \u672aDKG |\n| 4008 | \u540c\u4e00\u91d1\u5e93\u4e0d\u80fd\u591f\u540c\u65f6\u53d1\u8d77\u521b\u5efa\u94b1\u5305\u64cd\u4f5c |\n| 4009 | \u540c\u4e00\u91d1\u5e93\u4e0b\u94b1\u5305\u540d\u79f0\u4e0d\u80fd\u76f8\u540c |\n| 4010 | \u521b\u5efa\u94b1\u5305\u6570\u91cf\u548c\u81ea\u5b9a\u4e49\u94b1\u5305list\u4e0d\u4e00\u81f4 |\n| 4011 | \u94b1\u5305\u6570\u91cf\u9650\u989d |\n\n# \u6570\u636e\u5b57\u5178\n## \u4ea4\u6613\u624b\u7eed\u8d39\u8d39\u7387\u7b49\u7ea7\n| \u5b57\u5178\u7801 | \u63cf\u8ff0 |\n| :-- |:---------------|\n| LOW | \u4f4e |\n| MIDDLE | \u4e2d |\n| HIGH | \u9ad8 |\n\n## \u4ea4\u6613\u72b6\u6001\n| \u5b57\u5178\u7801 | \u63cf\u8ff0 |\n| :-- |:---------------|\n| 21 | \u5df2\u7b7e\u540d\u5f85\u4e0a\u94fe |\n| 2 | \u4ea4\u6613\u4e0a\u94fe\u4e2d |\n| 4 | \u5e7f\u64ad\u5931\u8d25 |\n| 5 | \u4ea4\u6613\u4e0a\u94fe\u5931\u8d25 |\n| 6 | \u5e7f\u64ad\u7f51\u7edc\u8d85\u65f6 |\n| 10 | \u4ea4\u6613\u4e0a\u94fe\u6210\u529f |\n| 11 | \u4ea4\u6613\u94fe\u4e0a\u56de\u6eda |\n\n"},postman:{name:"\u67e5\u8be2\u7cfb\u7edf\u652f\u6301\u94fe",description:{type:"text/plain"},url:{path:["v1","waas","common","get_supported_chains"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"POST"}},sidebar_class_name:"post api-method",info_path:"docs/develop/full-custody-waas-api/sinohope-full-custody-waas-api",custom_edit_url:null},m=void 0,u={unversionedId:"develop/full-custody-waas-api/v-1-waas-common-get-supported-chains",id:"develop/full-custody-waas-api/v-1-waas-common-get-supported-chains",title:"\u67e5\u8be2\u7cfb\u7edf\u652f\u6301\u94fe",description:"\u67e5\u8be2\u7cfb\u7edf\u652f\u6301\u94fe",source:"@site/docs/develop/full-custody-waas-api/v-1-waas-common-get-supported-chains.api.mdx",sourceDirName:"develop/full-custody-waas-api",slug:"/develop/full-custody-waas-api/v-1-waas-common-get-supported-chains",permalink:"/docs/develop/full-custody-waas-api/v-1-waas-common-get-supported-chains",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"v-1-waas-common-get-supported-chains",title:"\u67e5\u8be2\u7cfb\u7edf\u652f\u6301\u94fe",description:"\u67e5\u8be2\u7cfb\u7edf\u652f\u6301\u94fe",sidebar_label:"\u67e5\u8be2\u7cfb\u7edf\u652f\u6301\u94fe",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Common APIs"],operationId:"/v1/waas/common/get_supported_chains",responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{code:{type:"integer",example:200},msg:{type:"string",example:""},data:{type:"array",items:{required:["chainName","chainSymbol"],type:"object",properties:{chainName:{type:"string",description:"\u94fe\u5168\u540d",example:"Near"},chainSymbol:{type:"string",description:"\u94fe\u540d\u79f0 \u7b80\u79f0 \u94fe\u6807\u8bc6 \u5177\u6709\u552f\u4e00\u6027",example:"NEAR"}}}},success:{type:"boolean"}}}}}}},description:"\u67e5\u8be2\u7cfb\u7edf\u652f\u6301\u94fe",method:"post",path:"/v1/waas/common/get_supported_chains",servers:[{url:"https://api-sandbox.sinohope.com/"}],info:{title:"Sinohope Full Custody WaaS API",version:"0.0.1",description:"# \u8fd4\u56de\u503c\u8bf4\u660e\n## \u7edf\u4e00\u8fd4\u56de\u503c\n| \u4ee3\u7801 | \u8bf4\u660e |\n| :-- |:---------------|\n| code | \u72b6\u6001\u8fd4\u56de\u4ee3\u7801\uff08\u6210\u529f\u8fd4\u56de200\uff09 |\n| msg | \u72b6\u6001\u8fd4\u56de\u63cf\u8ff0 |\n| data | \u54cd\u5e94\u7684\u6570\u636e |\n| success | \u8bf7\u6c42\u662f\u5426\u6210\u529f\uff08\u6210\u529f\u8fd4\u56detrue\uff0c\u5931\u8d25\u8fd4\u56defalse\uff09 |\n\n# \u5e38\u89c1\u9519\u8bef\u7801\u5b9a\u4e49\n\n\u5f53Sinohope WaaS \u670d\u52a1\u53d1\u751f\u9519\u8bef\u7684\u65f6\u5019\uff0c\u4f1a\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u7edf\u4e00\u683c\u5f0f\u7684\u6570\u636e\n\n\n- `200`: Successful response. Refer to each API for the detailed response data.\n- `400`: Return Bad Request.\n- `401`: Unauthorized. Either API details are missing or invalid\n- `403`: Forbidden - You do not have access to the requested resource.\n- `415`: Unsupported media type. You need to use application/json.\n- `500`: Exchange/Sinohope internal error.\n\n## \u7cfb\u7edf\u5c42\u9762\u9519\u8bef\n| \u9519\u8bef\u7801 | \u63cf\u8ff0 |\n| :-- |:---------------|\n| 1001 | \u672a\u77e5\u5f02\u5e38\uff0c\u8bf7\u8054\u7cfb Sinohope \u5ba2\u670d |\n| 1002 | \u91cd\u590d\u7684\u8bf7\u6c42 |\n| 1004 | APIKey \u9519\u8bef |\n| 1005 | \u9a8c\u7b7e\u5931\u8d25 |\n| 1006 | IP \u8c03\u7528\u9891\u7387\u53d7\u9650 |\n\n## \u53c2\u6570\u5c42\u9762\u9519\u8bef\n| \u9519\u8bef\u7801 | \u63cf\u8ff0 |\n| :-- |:---------------|\n| 2001 | \u5e01\u79cd\u6682\u4e0d\u652f\u6301 |\n| 2002 | \u94fe\u6682\u4e0d\u652f\u6301 |\n| 2003 | \u8f93\u5165\u5730\u5740\u65e0\u6548 |\n| 2004 | \u4ea4\u6613\u8bb0\u5f55\u4e0d\u5b58\u5728 |\n| 2005 | \u65e0\u6743\u9650 |\n| 2006 | \u8f6c\u8d26\u4fe1\u606f\u5f02\u5e38 \uff08kyt\u6821\u9a8c\u4e0d\u901a\u8fc7\uff09 |\n| 2007 | \u77ff\u5de5\u8d39\u8fc7\u4f4e |\n| 2008 | To\u5730\u5740\u975e\u5185\u90e8\u5730\u5740 \uff08\u8f6c\u8d26\u4fdd\u62a4\uff09 |\n| 2009 | \u4f59\u989d\u4e0d\u8db3\u4ee5\u652f\u4ed8\u8f6c\u8d26\u6570\u91cf\u548cGas\u8d39 |\n| 2010 | gas\u4e0d\u8db3 \uff08token\u8f6c\u8d26\uff09 |\n| 2011 | \u53ef\u7528\u4f59\u989d\u4e0d\u8db3 \uff08token\u8f6c\u8d26\uff09 |\n\n## \u4e1a\u52a1\u5c42\u9762\u9519\u8bef\n| \u9519\u8bef\u7801 | \u63cf\u8ff0 |\n| :-- |:---------------|\n| 4001 | \u7ec4\u4ea4\u6613\u5931\u8d25 |\n| 4002 | \u5e7f\u64ad\u5931\u8d25 |\n| 4003 | \u4e0d\u652f\u6301\u52a0\u901f\u7684\u5e01\u79cd |\n| 4004 | \u52a0\u901f\u4ea4\u6613\u5df2\u4e0a\u94fe\u6216nonce\u5df2\u88ab\u5360\u7528 |\n| 4005 | \u53d6\u6d88\u4ea4\u6613\u5df2\u4e0a\u94fe\u6216nonce\u5df2\u88ab\u5360\u7528 |\n| 4006 | TSSNode \u672a\u7ed1\u5b9a |\n| 4007 | TSSNode \u672aDKG |\n| 4008 | \u540c\u4e00\u91d1\u5e93\u4e0d\u80fd\u591f\u540c\u65f6\u53d1\u8d77\u521b\u5efa\u94b1\u5305\u64cd\u4f5c |\n| 4009 | \u540c\u4e00\u91d1\u5e93\u4e0b\u94b1\u5305\u540d\u79f0\u4e0d\u80fd\u76f8\u540c |\n| 4010 | \u521b\u5efa\u94b1\u5305\u6570\u91cf\u548c\u81ea\u5b9a\u4e49\u94b1\u5305list\u4e0d\u4e00\u81f4 |\n| 4011 | \u94b1\u5305\u6570\u91cf\u9650\u989d |\n\n# \u6570\u636e\u5b57\u5178\n## \u4ea4\u6613\u624b\u7eed\u8d39\u8d39\u7387\u7b49\u7ea7\n| \u5b57\u5178\u7801 | \u63cf\u8ff0 |\n| :-- |:---------------|\n| LOW | \u4f4e |\n| MIDDLE | \u4e2d |\n| HIGH | \u9ad8 |\n\n## \u4ea4\u6613\u72b6\u6001\n| \u5b57\u5178\u7801 | \u63cf\u8ff0 |\n| :-- |:---------------|\n| 21 | \u5df2\u7b7e\u540d\u5f85\u4e0a\u94fe |\n| 2 | \u4ea4\u6613\u4e0a\u94fe\u4e2d |\n| 4 | \u5e7f\u64ad\u5931\u8d25 |\n| 5 | \u4ea4\u6613\u4e0a\u94fe\u5931\u8d25 |\n| 6 | \u5e7f\u64ad\u7f51\u7edc\u8d85\u65f6 |\n| 10 | \u4ea4\u6613\u4e0a\u94fe\u6210\u529f |\n| 11 | \u4ea4\u6613\u94fe\u4e0a\u56de\u6eda |\n\n"},postman:{name:"\u67e5\u8be2\u7cfb\u7edf\u652f\u6301\u94fe",description:{type:"text/plain"},url:{path:["v1","waas","common","get_supported_chains"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"POST"}},sidebar_class_name:"post api-method",info_path:"docs/develop/full-custody-waas-api/sinohope-full-custody-waas-api",custom_edit_url:null},sidebar:"fullCustodyApiSidebar",previous:{title:"\u67e5\u8be2\u94fe\u652f\u6301\u7684\u5e01\u79cd\u5217\u8868",permalink:"/docs/develop/full-custody-waas-api/v-1-waas-common-get-supported-coins"},next:{title:"\u91d1\u5e93\u5217\u8868",permalink:"/docs/develop/full-custody-waas-api/v-1-waas-common-get-vaults"}},h={},y=[{value:"\u67e5\u8be2\u7cfb\u7edf\u652f\u6301\u94fe",id:"\u67e5\u8be2\u7cfb\u7edf\u652f\u6301\u94fe",level:2}],g={toc:y},v="wrapper";function f(e){let{components:n,...a}=e;return(0,s.kt)(v,(0,t.Z)({},g,a,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"\u67e5\u8be2\u7cfb\u7edf\u652f\u6301\u94fe"},"\u67e5\u8be2\u7cfb\u7edf\u652f\u6301\u94fe"),(0,s.kt)("p",null,"\u67e5\u8be2\u7cfb\u7edf\u652f\u6301\u94fe"),(0,s.kt)("div",null,(0,s.kt)(o.Z,{mdxType:"ApiTabs"},(0,s.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"successful operation")),(0,s.kt)("div",null,(0,s.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(r.Z,{mdxType:"SchemaTabs"},(0,s.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"code",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",example:200},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"msg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:""},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"data"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(l.Z,{collapsible:!1,name:"chainName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u94fe\u5168\u540d",example:"Near"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"chainSymbol",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u94fe\u540d\u79f0 \u7b80\u79f0 \u94fe\u6807\u8bc6 \u5177\u6709\u552f\u4e00\u6027",example:"NEAR"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(l.Z,{collapsible:!1,name:"success",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"})))),(0,s.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(p.Z,{responseExample:'{\n  "code": 200,\n  "msg": "",\n  "data": [\n    {\n      "chainName": "Near",\n      "chainSymbol": "NEAR"\n    }\n  ],\n  "success": true\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);