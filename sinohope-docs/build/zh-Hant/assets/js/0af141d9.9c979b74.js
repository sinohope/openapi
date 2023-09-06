"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[2870],{72226:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>y,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>m,toc:()=>h});var n=a(87462),t=(a(67294),a(3905)),o=a(26389),d=a(94891),i=(a(75190),a(47507)),l=a(24310),p=a(63303),r=(a(75035),a(85162));const c={id:"v-1-waas-custody-is-valid-address",title:"\u68c0\u67e5\u5e01\u79cd\u5730\u5740\u662f\u5426\u6b63\u786e",description:"\u68c0\u67e5\u5e01\u79cd\u5730\u5740\u662f\u5426\u6b63\u786e",sidebar_label:"\u68c0\u67e5\u5e01\u79cd\u5730\u5740\u662f\u5426\u6b63\u786e",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Account&address APIs"],operationId:"/v1/waas/custody/is_valid_address",requestBody:{content:{"application/json":{schema:{required:["address","assetId"],type:"object",properties:{assetId:{type:"string",description:"\u5e01\u79cd\u4ee3\u53f7 \u5e01\u6807\u8bc6 \u5177\u6709\u552f\u4e00\u6027",example:"USDT_ETH"},address:{type:"string",description:"\u5730\u5740",example:"0x67d0F791D950CdC25Ac44bA249328022f4df93b6"}}}}},required:!1},responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{code:{type:"integer",example:200},msg:{type:"string",example:""},data:{type:"object",properties:{isValid:{type:"boolean",description:"\u68c0\u67e5\u7ed3\u679c",example:!0}}},success:{type:"boolean"}}}}}}},"x-codegen-request-body-name":"root",description:"\u68c0\u67e5\u5e01\u79cd\u5730\u5740\u662f\u5426\u6b63\u786e",extensions:[{key:"x-codegen-request-body-name",value:"root"}],method:"post",path:"/v1/waas/custody/is_valid_address",servers:[{url:"https://api-sandbox.sinohope.com/"}],jsonRequestBodyExample:{assetId:"USDT_ETH",address:"0x67d0F791D950CdC25Ac44bA249328022f4df93b6"},info:{title:"Sinohope Full Custody WaaS API",version:"0.0.1",description:"# \u8fd4\u56de\u503c\u8bf4\u660e\n## \u7edf\u4e00\u8fd4\u56de\u503c\n| \u4ee3\u7801 | \u8bf4\u660e |\n| :-- |:---------------|\n| code | \u72b6\u6001\u8fd4\u56de\u4ee3\u7801\uff08\u6210\u529f\u8fd4\u56de200\uff09 |\n| msg | \u72b6\u6001\u8fd4\u56de\u63cf\u8ff0 |\n| data | \u54cd\u5e94\u7684\u6570\u636e |\n| success | \u8bf7\u6c42\u662f\u5426\u6210\u529f\uff08\u6210\u529f\u8fd4\u56detrue\uff0c\u5931\u8d25\u8fd4\u56defalse\uff09 |\n\n# \u5e38\u89c1\u9519\u8bef\u7801\u5b9a\u4e49\n\n\u5f53Sinohope WaaS \u670d\u52a1\u53d1\u751f\u9519\u8bef\u7684\u65f6\u5019\uff0c\u4f1a\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u7edf\u4e00\u683c\u5f0f\u7684\u6570\u636e\n\n\n- `200`: Successful response. Refer to each API for the detailed response data.\n- `400`: Return Bad Request.\n- `401`: Unauthorized. Either API details are missing or invalid\n- `403`: Forbidden - You do not have access to the requested resource.\n- `415`: Unsupported media type. You need to use application/json.\n- `500`: Exchange/Sinohope internal error.\n\n## \u7cfb\u7edf\u5c42\u9762\u9519\u8bef\n| \u9519\u8bef\u7801 | \u63cf\u8ff0 |\n| :-- |:---------------|\n| 1001 | \u672a\u77e5\u5f02\u5e38\uff0c\u8bf7\u8054\u7cfb Sinohope \u5ba2\u670d |\n| 1002 | \u91cd\u590d\u7684\u8bf7\u6c42 |\n| 1004 | APIKey \u9519\u8bef |\n| 1005 | \u9a8c\u7b7e\u5931\u8d25 |\n| 1006 | IP \u8c03\u7528\u9891\u7387\u53d7\u9650 |\n\n## \u53c2\u6570\u5c42\u9762\u9519\u8bef\n| \u9519\u8bef\u7801 | \u63cf\u8ff0 |\n| :-- |:---------------|\n| 2001 | \u5e01\u79cd\u6682\u4e0d\u652f\u6301 |\n| 2002 | \u94fe\u6682\u4e0d\u652f\u6301 |\n| 2003 | \u8f93\u5165\u5730\u5740\u65e0\u6548 |\n| 2004 | \u4ea4\u6613\u8bb0\u5f55\u4e0d\u5b58\u5728 |\n| 2005 | \u65e0\u6743\u9650 |\n| 2006 | \u8f6c\u8d26\u4fe1\u606f\u5f02\u5e38 \uff08kyt\u6821\u9a8c\u4e0d\u901a\u8fc7\uff09 |\n| 2007 | \u77ff\u5de5\u8d39\u8fc7\u4f4e |\n| 2008 | To\u5730\u5740\u975e\u5185\u90e8\u5730\u5740 \uff08\u8f6c\u8d26\u4fdd\u62a4\uff09 |\n| 2009 | \u4f59\u989d\u4e0d\u8db3\u4ee5\u652f\u4ed8\u8f6c\u8d26\u6570\u91cf\u548cGas\u8d39 |\n| 2010 | gas\u4e0d\u8db3 \uff08token\u8f6c\u8d26\uff09 |\n| 2011 | \u53ef\u7528\u4f59\u989d\u4e0d\u8db3 \uff08token\u8f6c\u8d26\uff09 |\n\n## \u4e1a\u52a1\u5c42\u9762\u9519\u8bef\n| \u9519\u8bef\u7801 | \u63cf\u8ff0 |\n| :-- |:---------------|\n| 4001 | \u7ec4\u4ea4\u6613\u5931\u8d25 |\n| 4002 | \u5e7f\u64ad\u5931\u8d25 |\n| 4003 | \u4e0d\u652f\u6301\u52a0\u901f\u7684\u5e01\u79cd |\n| 4004 | \u52a0\u901f\u4ea4\u6613\u5df2\u4e0a\u94fe\u6216nonce\u5df2\u88ab\u5360\u7528 |\n| 4005 | \u53d6\u6d88\u4ea4\u6613\u5df2\u4e0a\u94fe\u6216nonce\u5df2\u88ab\u5360\u7528 |\n| 4006 | TSSNode \u672a\u7ed1\u5b9a |\n| 4007 | TSSNode \u672aDKG |\n| 4008 | \u540c\u4e00\u91d1\u5e93\u4e0d\u80fd\u591f\u540c\u65f6\u53d1\u8d77\u521b\u5efa\u94b1\u5305\u64cd\u4f5c |\n| 4009 | \u540c\u4e00\u91d1\u5e93\u4e0b\u94b1\u5305\u540d\u79f0\u4e0d\u80fd\u76f8\u540c |\n| 4010 | \u521b\u5efa\u94b1\u5305\u6570\u91cf\u548c\u81ea\u5b9a\u4e49\u94b1\u5305list\u4e0d\u4e00\u81f4 |\n| 4011 | \u94b1\u5305\u6570\u91cf\u9650\u989d |\n\n# \u6570\u636e\u5b57\u5178\n## \u4ea4\u6613\u624b\u7eed\u8d39\u8d39\u7387\u7b49\u7ea7\n| \u5b57\u5178\u7801 | \u63cf\u8ff0 |\n| :-- |:---------------|\n| LOW | \u4f4e |\n| MIDDLE | \u4e2d |\n| HIGH | \u9ad8 |\n\n## \u4ea4\u6613\u72b6\u6001\n| \u5b57\u5178\u7801 | \u63cf\u8ff0 |\n| :-- |:---------------|\n| 21 | \u5df2\u7b7e\u540d\u5f85\u4e0a\u94fe |\n| 2 | \u4ea4\u6613\u4e0a\u94fe\u4e2d |\n| 4 | \u5e7f\u64ad\u5931\u8d25 |\n| 5 | \u4ea4\u6613\u4e0a\u94fe\u5931\u8d25 |\n| 6 | \u5e7f\u64ad\u7f51\u7edc\u8d85\u65f6 |\n| 10 | \u4ea4\u6613\u4e0a\u94fe\u6210\u529f |\n| 11 | \u4ea4\u6613\u94fe\u4e0a\u56de\u6eda |\n\n"},postman:{name:"\u68c0\u67e5\u5e01\u79cd\u5730\u5740\u662f\u5426\u6b63\u786e",description:{type:"text/plain"},url:{path:["v1","waas","custody","is_valid_address"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/develop/full-custody-waas-api/sinohope-full-custody-waas-api",custom_edit_url:null},u=void 0,m={unversionedId:"develop/full-custody-waas-api/v-1-waas-custody-is-valid-address",id:"develop/full-custody-waas-api/v-1-waas-custody-is-valid-address",title:"\u68c0\u67e5\u5e01\u79cd\u5730\u5740\u662f\u5426\u6b63\u786e",description:"\u68c0\u67e5\u5e01\u79cd\u5730\u5740\u662f\u5426\u6b63\u786e",source:"@site/i18n/zh-Hant/docusaurus-plugin-content-docs/current/develop/full-custody-waas-api/v-1-waas-custody-is-valid-address.api.mdx",sourceDirName:"develop/full-custody-waas-api",slug:"/develop/full-custody-waas-api/v-1-waas-custody-is-valid-address",permalink:"/zh-Hant/docs/develop/full-custody-waas-api/v-1-waas-custody-is-valid-address",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"v-1-waas-custody-is-valid-address",title:"\u68c0\u67e5\u5e01\u79cd\u5730\u5740\u662f\u5426\u6b63\u786e",description:"\u68c0\u67e5\u5e01\u79cd\u5730\u5740\u662f\u5426\u6b63\u786e",sidebar_label:"\u68c0\u67e5\u5e01\u79cd\u5730\u5740\u662f\u5426\u6b63\u786e",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Account&address APIs"],operationId:"/v1/waas/custody/is_valid_address",requestBody:{content:{"application/json":{schema:{required:["address","assetId"],type:"object",properties:{assetId:{type:"string",description:"\u5e01\u79cd\u4ee3\u53f7 \u5e01\u6807\u8bc6 \u5177\u6709\u552f\u4e00\u6027",example:"USDT_ETH"},address:{type:"string",description:"\u5730\u5740",example:"0x67d0F791D950CdC25Ac44bA249328022f4df93b6"}}}}},required:!1},responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{code:{type:"integer",example:200},msg:{type:"string",example:""},data:{type:"object",properties:{isValid:{type:"boolean",description:"\u68c0\u67e5\u7ed3\u679c",example:!0}}},success:{type:"boolean"}}}}}}},"x-codegen-request-body-name":"root",description:"\u68c0\u67e5\u5e01\u79cd\u5730\u5740\u662f\u5426\u6b63\u786e",extensions:[{key:"x-codegen-request-body-name",value:"root"}],method:"post",path:"/v1/waas/custody/is_valid_address",servers:[{url:"https://api-sandbox.sinohope.com/"}],jsonRequestBodyExample:{assetId:"USDT_ETH",address:"0x67d0F791D950CdC25Ac44bA249328022f4df93b6"},info:{title:"Sinohope Full Custody WaaS API",version:"0.0.1",description:"# \u8fd4\u56de\u503c\u8bf4\u660e\n## \u7edf\u4e00\u8fd4\u56de\u503c\n| \u4ee3\u7801 | \u8bf4\u660e |\n| :-- |:---------------|\n| code | \u72b6\u6001\u8fd4\u56de\u4ee3\u7801\uff08\u6210\u529f\u8fd4\u56de200\uff09 |\n| msg | \u72b6\u6001\u8fd4\u56de\u63cf\u8ff0 |\n| data | \u54cd\u5e94\u7684\u6570\u636e |\n| success | \u8bf7\u6c42\u662f\u5426\u6210\u529f\uff08\u6210\u529f\u8fd4\u56detrue\uff0c\u5931\u8d25\u8fd4\u56defalse\uff09 |\n\n# \u5e38\u89c1\u9519\u8bef\u7801\u5b9a\u4e49\n\n\u5f53Sinohope WaaS \u670d\u52a1\u53d1\u751f\u9519\u8bef\u7684\u65f6\u5019\uff0c\u4f1a\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u7edf\u4e00\u683c\u5f0f\u7684\u6570\u636e\n\n\n- `200`: Successful response. Refer to each API for the detailed response data.\n- `400`: Return Bad Request.\n- `401`: Unauthorized. Either API details are missing or invalid\n- `403`: Forbidden - You do not have access to the requested resource.\n- `415`: Unsupported media type. You need to use application/json.\n- `500`: Exchange/Sinohope internal error.\n\n## \u7cfb\u7edf\u5c42\u9762\u9519\u8bef\n| \u9519\u8bef\u7801 | \u63cf\u8ff0 |\n| :-- |:---------------|\n| 1001 | \u672a\u77e5\u5f02\u5e38\uff0c\u8bf7\u8054\u7cfb Sinohope \u5ba2\u670d |\n| 1002 | \u91cd\u590d\u7684\u8bf7\u6c42 |\n| 1004 | APIKey \u9519\u8bef |\n| 1005 | \u9a8c\u7b7e\u5931\u8d25 |\n| 1006 | IP \u8c03\u7528\u9891\u7387\u53d7\u9650 |\n\n## \u53c2\u6570\u5c42\u9762\u9519\u8bef\n| \u9519\u8bef\u7801 | \u63cf\u8ff0 |\n| :-- |:---------------|\n| 2001 | \u5e01\u79cd\u6682\u4e0d\u652f\u6301 |\n| 2002 | \u94fe\u6682\u4e0d\u652f\u6301 |\n| 2003 | \u8f93\u5165\u5730\u5740\u65e0\u6548 |\n| 2004 | \u4ea4\u6613\u8bb0\u5f55\u4e0d\u5b58\u5728 |\n| 2005 | \u65e0\u6743\u9650 |\n| 2006 | \u8f6c\u8d26\u4fe1\u606f\u5f02\u5e38 \uff08kyt\u6821\u9a8c\u4e0d\u901a\u8fc7\uff09 |\n| 2007 | \u77ff\u5de5\u8d39\u8fc7\u4f4e |\n| 2008 | To\u5730\u5740\u975e\u5185\u90e8\u5730\u5740 \uff08\u8f6c\u8d26\u4fdd\u62a4\uff09 |\n| 2009 | \u4f59\u989d\u4e0d\u8db3\u4ee5\u652f\u4ed8\u8f6c\u8d26\u6570\u91cf\u548cGas\u8d39 |\n| 2010 | gas\u4e0d\u8db3 \uff08token\u8f6c\u8d26\uff09 |\n| 2011 | \u53ef\u7528\u4f59\u989d\u4e0d\u8db3 \uff08token\u8f6c\u8d26\uff09 |\n\n## \u4e1a\u52a1\u5c42\u9762\u9519\u8bef\n| \u9519\u8bef\u7801 | \u63cf\u8ff0 |\n| :-- |:---------------|\n| 4001 | \u7ec4\u4ea4\u6613\u5931\u8d25 |\n| 4002 | \u5e7f\u64ad\u5931\u8d25 |\n| 4003 | \u4e0d\u652f\u6301\u52a0\u901f\u7684\u5e01\u79cd |\n| 4004 | \u52a0\u901f\u4ea4\u6613\u5df2\u4e0a\u94fe\u6216nonce\u5df2\u88ab\u5360\u7528 |\n| 4005 | \u53d6\u6d88\u4ea4\u6613\u5df2\u4e0a\u94fe\u6216nonce\u5df2\u88ab\u5360\u7528 |\n| 4006 | TSSNode \u672a\u7ed1\u5b9a |\n| 4007 | TSSNode \u672aDKG |\n| 4008 | \u540c\u4e00\u91d1\u5e93\u4e0d\u80fd\u591f\u540c\u65f6\u53d1\u8d77\u521b\u5efa\u94b1\u5305\u64cd\u4f5c |\n| 4009 | \u540c\u4e00\u91d1\u5e93\u4e0b\u94b1\u5305\u540d\u79f0\u4e0d\u80fd\u76f8\u540c |\n| 4010 | \u521b\u5efa\u94b1\u5305\u6570\u91cf\u548c\u81ea\u5b9a\u4e49\u94b1\u5305list\u4e0d\u4e00\u81f4 |\n| 4011 | \u94b1\u5305\u6570\u91cf\u9650\u989d |\n\n# \u6570\u636e\u5b57\u5178\n## \u4ea4\u6613\u624b\u7eed\u8d39\u8d39\u7387\u7b49\u7ea7\n| \u5b57\u5178\u7801 | \u63cf\u8ff0 |\n| :-- |:---------------|\n| LOW | \u4f4e |\n| MIDDLE | \u4e2d |\n| HIGH | \u9ad8 |\n\n## \u4ea4\u6613\u72b6\u6001\n| \u5b57\u5178\u7801 | \u63cf\u8ff0 |\n| :-- |:---------------|\n| 21 | \u5df2\u7b7e\u540d\u5f85\u4e0a\u94fe |\n| 2 | \u4ea4\u6613\u4e0a\u94fe\u4e2d |\n| 4 | \u5e7f\u64ad\u5931\u8d25 |\n| 5 | \u4ea4\u6613\u4e0a\u94fe\u5931\u8d25 |\n| 6 | \u5e7f\u64ad\u7f51\u7edc\u8d85\u65f6 |\n| 10 | \u4ea4\u6613\u4e0a\u94fe\u6210\u529f |\n| 11 | \u4ea4\u6613\u94fe\u4e0a\u56de\u6eda |\n\n"},postman:{name:"\u68c0\u67e5\u5e01\u79cd\u5730\u5740\u662f\u5426\u6b63\u786e",description:{type:"text/plain"},url:{path:["v1","waas","custody","is_valid_address"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/develop/full-custody-waas-api/sinohope-full-custody-waas-api",custom_edit_url:null},sidebar:"fullCustodyApiSidebar",previous:{title:"\u521b\u5efa\u94b1\u5305",permalink:"/zh-Hant/docs/develop/full-custody-waas-api/v-1-waas-custody-create-wallets"},next:{title:"\u751f\u6210\u94fe\u5730\u5740",permalink:"/zh-Hant/docs/develop/full-custody-waas-api/v-1-waas-custody-wallet-generate-chain-addresses"}},y={},h=[{value:"\u68c0\u67e5\u5e01\u79cd\u5730\u5740\u662f\u5426\u6b63\u786e",id:"\u68c0\u67e5\u5e01\u79cd\u5730\u5740\u662f\u5426\u6b63\u786e",level:2}],v={toc:h},b="wrapper";function f(e){let{components:s,...a}=e;return(0,t.kt)(b,(0,n.Z)({},v,a,{components:s,mdxType:"MDXLayout"}),(0,t.kt)("h2",{id:"\u68c0\u67e5\u5e01\u79cd\u5730\u5740\u662f\u5426\u6b63\u786e"},"\u68c0\u67e5\u5e01\u79cd\u5730\u5740\u662f\u5426\u6b63\u786e"),(0,t.kt)("p",null,"\u68c0\u67e5\u5e01\u79cd\u5730\u5740\u662f\u5426\u6b63\u786e"),(0,t.kt)(d.Z,{mdxType:"MimeTabs"},(0,t.kt)(r.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,t.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{textAlign:"left"}},(0,t.kt)("strong",null,"Request Body")),(0,t.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.kt)("ul",{style:{marginLeft:"1rem"}},(0,t.kt)(l.Z,{collapsible:!1,name:"assetId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u5e01\u79cd\u4ee3\u53f7 \u5e01\u6807\u8bc6 \u5177\u6709\u552f\u4e00\u6027",example:"USDT_ETH"},mdxType:"SchemaItem"}),(0,t.kt)(l.Z,{collapsible:!1,name:"address",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u5730\u5740",example:"0x67d0F791D950CdC25Ac44bA249328022f4df93b6"},mdxType:"SchemaItem"}))))),(0,t.kt)("div",null,(0,t.kt)(o.Z,{mdxType:"ApiTabs"},(0,t.kt)(r.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,t.kt)("div",null,(0,t.kt)("p",null,"successful operation")),(0,t.kt)("div",null,(0,t.kt)(d.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,t.kt)(r.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,t.kt)(p.Z,{mdxType:"SchemaTabs"},(0,t.kt)(r.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,t.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{textAlign:"left"}},(0,t.kt)("strong",null,"Schema")),(0,t.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.kt)("ul",{style:{marginLeft:"1rem"}},(0,t.kt)(l.Z,{collapsible:!1,name:"code",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",example:200},mdxType:"SchemaItem"}),(0,t.kt)(l.Z,{collapsible:!1,name:"msg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:""},mdxType:"SchemaItem"}),(0,t.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{}},(0,t.kt)("summary",{style:{}},(0,t.kt)("strong",null,"data"),(0,t.kt)("span",{style:{opacity:"0.6"}}," object")),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(l.Z,{collapsible:!1,name:"isValid",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"\u68c0\u67e5\u7ed3\u679c",example:!0},mdxType:"SchemaItem"})))),(0,t.kt)(l.Z,{collapsible:!1,name:"success",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"})))),(0,t.kt)(r.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,t.kt)(i.Z,{responseExample:'{\n  "code": 200,\n  "msg": "",\n  "data": {\n    "isValid": true\n  },\n  "success": true\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);