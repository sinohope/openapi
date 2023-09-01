"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[9351],{54622:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>g,contentTitle:()=>l,default:()=>k,frontMatter:()=>m,metadata:()=>y,toc:()=>u});var s=i(87462),n=(i(67294),i(3905)),a=i(26389),r=i(94891),o=(i(75190),i(47507)),p=i(24310),d=i(63303),c=(i(75035),i(85162));const m={id:"\u4ea4\u6613\u53d6\u6d88",title:"\u4ea4\u6613\u53d6\u6d88",description:"\u4ea4\u6613\u53d6\u6d88",sidebar_label:"\u4ea4\u6613\u53d6\u6d88",hide_title:!0,hide_table_of_contents:!0,api:{tags:["\u4ea4\u6613"],requestBody:{content:{"application/json":{schema:{required:["assetId","chainSymbol","requestId"],type:"object",properties:{requestId:{type:"string",description:"\u8bf7\u6c42\u65b9\u7684requestId",default:"64534,24342"},chainSymbol:{type:"string",description:"\u94fe\u6807\u8bc6",default:"ETH"},assetId:{type:"string",description:"\u8d44\u4ea7id",default:"USDC_ETH"}}}}},required:!1},responses:{200:{description:"successful operation",content:{"*/*":{schema:{type:"object",properties:{code:{type:"integer",description:""},msg:{type:"string",description:""},data:{type:"object",properties:{requestId:{type:"string",description:"\u63d0\u5e01\u8bf7\u6c42id"},sinoId:{type:"integer",description:"SinoHope\u7684\u8ba2\u5355\u552f\u4e00\u6807\u8bc6"},network:{type:"string",description:"\u7f51\u7edc"},txType:{type:"string",description:"\u4ea4\u6613\u7c7b\u578b"},hasToBeSigned:{type:"string",description:"\u7b7e\u540d\u524d\u4fe1\u606f"},data:{type:"object",properties:{asset:{type:"string",description:"\u8d44\u4ea7id"},decimal:{type:"integer",description:"\u7cbe\u5ea6"},currentTime:{type:"integer",description:"\u5f53\u524d\u65f6\u95f4"},expireTime:{type:"integer",description:"\u6709\u6548\u65f6\u95f4"},expireBlockHeight:{type:"integer",description:"\u4ea4\u6613\u6709\u6548\u9ad8\u5ea6"},referBlockHeight:{type:"integer",description:"refer \u9ad8\u5ea6"},from:{type:"string",description:"from\u5730\u5740"},fromTag:{type:"string",description:"from\u5730\u5740tag"},to:{type:"string",description:"to\u5730\u5740"},toTag:{type:"string",description:"to\u5730\u5740tag"},amount:{type:"string",description:"\u91d1\u989d\uff1a\u6700\u5c0f\u7cbe\u5ea6\u7684\u6574\u6570\u503c \u4f8b\u5982\uff1a1230000000000000000"},fee:{type:"string",description:"\u624b\u7eed\u8d39"},txType:{type:"integer",description:"\u4ea4\u6613\u7c7b\u578b"},feeAsset:{type:"string",description:"\u624b\u7eed\u8d39\u8d44\u4ea7"},feePrice:{type:"string",description:"\u624b\u7eed\u8d39Price"},feeStep:{type:"string",description:"\u624b\u7eed\u8d39Step"},chainId:{type:"string",description:"\u94feid"},nonce:{type:"string",description:"\u4ea4\u6613nonce"},vin:{type:"array",description:"utxo input",items:{type:"object",properties:{id:{type:"integer",description:"\u4ea4\u6613id"},hash:{type:"string",description:"\u4ea4\u6613hash"},voutIndex:{type:"string",description:"\u4ea4\u6613index"},address:{type:"string",description:"\u4ea4\u6613\u5730\u5740"},amount:{type:"string",description:"\u4ea4\u6613\u91d1\u989d"},asset:{type:"string",description:"\u4ea4\u6613\u8d44\u4ea7"}}}},vout:{type:"array",description:"\u4ea4\u6613output",items:{type:"object",properties:{asset:{type:"string",description:"\u4ea4\u6613\u8d44\u4ea7"},address:{type:"string",description:"\u4ea4\u6613\u5730\u5740"},amount:{type:"string",description:"\u4ea4\u6613\u91d1\u989d"}}}},funName:{type:"string",description:""},params:{type:"array",description:"",items:{type:"string"}}},description:"\u7b7e\u540d\u4ea4\u6613\u4fe1\u606f"},suffixPath:{type:"string",description:"hdpath"},cryptography:{type:"string",description:""}},description:""},success:{type:"boolean",description:""},requestId:{type:"string",description:""}},description:""}}}}},"x-codegen-request-body-name":"root",description:"\u4ea4\u6613\u53d6\u6d88",extensions:[{key:"x-codegen-request-body-name",value:"root"}],method:"post",path:"/v1/waas/custody/transaction/cancel_transaction",servers:[{url:"/"}],jsonRequestBodyExample:{requestId:"64534,24342",chainSymbol:"ETH",assetId:"USDC_ETH"},info:{title:"Sinohope Full Custody WaaS API",version:"0.0.1",description:"# \u8fd4\u56de\u503c\u8bf4\u660e\n## \u7edf\u4e00\u8fd4\u56de\u503c\n| \u4ee3\u7801 | \u8bf4\u660e |\n| :-- |:---------------|\n| code | \u72b6\u6001\u8fd4\u56de\u4ee3\u7801\uff08\u6210\u529f\u8fd4\u56de200\uff09 |\n| msg | \u72b6\u6001\u8fd4\u56de\u63cf\u8ff0 |\n| data | \u54cd\u5e94\u7684\u6570\u636e |\n| success | \u8bf7\u6c42\u662f\u5426\u6210\u529f\uff08\u6210\u529f\u8fd4\u56detrue\uff0c\u5931\u8d25\u8fd4\u56defalse\uff09 |\n\n# \u5e38\u89c1\u9519\u8bef\u7801\u5b9a\u4e49\n\n\u5f53Sinohope WaaS \u670d\u52a1\u53d1\u751f\u9519\u8bef\u7684\u65f6\u5019\uff0c\u4f1a\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u7edf\u4e00\u683c\u5f0f\u7684\u6570\u636e\n\n\n- `200`: Successful response. Refer to each API for the detailed response data.\n- `400`: Return Bad Request.\n- `401`: Unauthorized. Either API details are missing or invalid\n- `403`: Forbidden - You do not have access to the requested resource.\n- `415`: Unsupported media type. You need to use application/json.\n- `500`: Exchange/Sinohope internal error.\n\n## \u7cfb\u7edf\u5c42\u9762\u9519\u8bef\n| \u9519\u8bef\u7801 | \u63cf\u8ff0 |\n| :-- |:---------------|\n| 1001 | \u672a\u77e5\u5f02\u5e38\uff0c\u8bf7\u8054\u7cfb Sinohope \u5ba2\u670d |\n| 1002 | \u91cd\u590d\u7684\u8bf7\u6c42 |\n| 1004 | APIKey \u9519\u8bef |\n| 1005 | \u9a8c\u7b7e\u5931\u8d25 |\n| 1006 | IP \u8c03\u7528\u9891\u7387\u53d7\u9650 |\n\n## \u53c2\u6570\u5c42\u9762\u9519\u8bef\n| \u9519\u8bef\u7801 | \u63cf\u8ff0 |\n| :-- |:---------------|\n| 2001 | \u5e01\u79cd\u6682\u4e0d\u652f\u6301 |\n| 2002 | \u94fe\u6682\u4e0d\u652f\u6301 |\n| 2003 | \u8f93\u5165\u5730\u5740\u65e0\u6548 |\n| 2004 | \u4ea4\u6613\u8bb0\u5f55\u4e0d\u5b58\u5728 |\n| 2005 | \u65e0\u6743\u9650 |\n| 2006 | \u8f6c\u8d26\u4fe1\u606f\u5f02\u5e38 \uff08kyt\u6821\u9a8c\u4e0d\u901a\u8fc7\uff09 |\n| 2007 | \u77ff\u5de5\u8d39\u8fc7\u4f4e |\n| 2008 | To\u5730\u5740\u975e\u5185\u90e8\u5730\u5740 \uff08\u8f6c\u8d26\u4fdd\u62a4\uff09 |\n| 2009 | \u4f59\u989d\u4e0d\u8db3\u4ee5\u652f\u4ed8\u8f6c\u8d26\u6570\u91cf\u548cGas\u8d39 |\n| 2010 | gas\u4e0d\u8db3 \uff08token\u8f6c\u8d26\uff09 |\n| 2011 | \u53ef\u7528\u4f59\u989d\u4e0d\u8db3 \uff08token\u8f6c\u8d26\uff09 |\n\n## \u4e1a\u52a1\u5c42\u9762\u9519\u8bef\n| \u9519\u8bef\u7801 | \u63cf\u8ff0 |\n| :-- |:---------------|\n| 4001 | \u7ec4\u4ea4\u6613\u5931\u8d25 |\n| 4002 | \u5e7f\u64ad\u5931\u8d25 |\n| 4003 | \u4e0d\u652f\u6301\u52a0\u901f\u7684\u5e01\u79cd |\n| 4004 | \u52a0\u901f\u4ea4\u6613\u5df2\u4e0a\u94fe\u6216nonce\u5df2\u88ab\u5360\u7528 |\n| 4005 | \u53d6\u6d88\u4ea4\u6613\u5df2\u4e0a\u94fe\u6216nonce\u5df2\u88ab\u5360\u7528 |\n| 4006 | TSSNode \u672a\u7ed1\u5b9a |\n| 4007 | TSSNode \u672aDKG |\n| 4008 | \u540c\u4e00\u91d1\u5e93\u4e0d\u80fd\u591f\u540c\u65f6\u53d1\u8d77\u521b\u5efa\u94b1\u5305\u64cd\u4f5c |\n| 4009 | \u540c\u4e00\u91d1\u5e93\u4e0b\u94b1\u5305\u540d\u79f0\u4e0d\u80fd\u76f8\u540c |\n| 4010 | \u521b\u5efa\u94b1\u5305\u6570\u91cf\u548c\u81ea\u5b9a\u4e49\u94b1\u5305list\u4e0d\u4e00\u81f4 |\n| 4011 | \u94b1\u5305\u6570\u91cf\u9650\u989d |\n\n# \u6570\u636e\u5b57\u5178\n## \u4ea4\u6613\u624b\u7eed\u8d39\u8d39\u7387\u7b49\u7ea7\n| \u5b57\u5178\u7801 | \u63cf\u8ff0 |\n| :-- |:---------------|\n| LOW | \u4f4e |\n| MIDDLE | \u4e2d |\n| HIGH | \u9ad8 |\n\n## \u4ea4\u6613\u72b6\u6001\n| \u5b57\u5178\u7801 | \u63cf\u8ff0 |\n| :-- |:---------------|\n| 21 | \u5df2\u7b7e\u540d\u5f85\u4e0a\u94fe |\n| 2 | \u4ea4\u6613\u4e0a\u94fe\u4e2d |\n| 4 | \u5e7f\u64ad\u5931\u8d25 |\n| 5 | \u4ea4\u6613\u4e0a\u94fe\u5931\u8d25 |\n| 6 | \u5e7f\u64ad\u7f51\u7edc\u8d85\u65f6 |\n| 10 | \u4ea4\u6613\u4e0a\u94fe\u6210\u529f |\n| 11 | \u4ea4\u6613\u94fe\u4e0a\u56de\u6eda |\n\n"},postman:{name:"\u4ea4\u6613\u53d6\u6d88",description:{type:"text/plain"},url:{path:["v1","waas","custody","transaction","cancel_transaction"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"*/*"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/develop/full-custody-waas-api/sinohope-full-custody-waas-api",custom_edit_url:null},l=void 0,y={unversionedId:"develop/full-custody-waas-api/\u4ea4\u6613\u53d6\u6d88",id:"develop/full-custody-waas-api/\u4ea4\u6613\u53d6\u6d88",title:"\u4ea4\u6613\u53d6\u6d88",description:"\u4ea4\u6613\u53d6\u6d88",source:"@site/i18n/zh-Hant/docusaurus-plugin-content-docs/current/develop/full-custody-waas-api/\u4ea4\u6613\u53d6\u6d88.api.mdx",sourceDirName:"develop/full-custody-waas-api",slug:"/develop/full-custody-waas-api/\u4ea4\u6613\u53d6\u6d88",permalink:"/zh-Hant/docs/develop/full-custody-waas-api/\u4ea4\u6613\u53d6\u6d88",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"\u4ea4\u6613\u53d6\u6d88",title:"\u4ea4\u6613\u53d6\u6d88",description:"\u4ea4\u6613\u53d6\u6d88",sidebar_label:"\u4ea4\u6613\u53d6\u6d88",hide_title:!0,hide_table_of_contents:!0,api:{tags:["\u4ea4\u6613"],requestBody:{content:{"application/json":{schema:{required:["assetId","chainSymbol","requestId"],type:"object",properties:{requestId:{type:"string",description:"\u8bf7\u6c42\u65b9\u7684requestId",default:"64534,24342"},chainSymbol:{type:"string",description:"\u94fe\u6807\u8bc6",default:"ETH"},assetId:{type:"string",description:"\u8d44\u4ea7id",default:"USDC_ETH"}}}}},required:!1},responses:{200:{description:"successful operation",content:{"*/*":{schema:{type:"object",properties:{code:{type:"integer",description:""},msg:{type:"string",description:""},data:{type:"object",properties:{requestId:{type:"string",description:"\u63d0\u5e01\u8bf7\u6c42id"},sinoId:{type:"integer",description:"SinoHope\u7684\u8ba2\u5355\u552f\u4e00\u6807\u8bc6"},network:{type:"string",description:"\u7f51\u7edc"},txType:{type:"string",description:"\u4ea4\u6613\u7c7b\u578b"},hasToBeSigned:{type:"string",description:"\u7b7e\u540d\u524d\u4fe1\u606f"},data:{type:"object",properties:{asset:{type:"string",description:"\u8d44\u4ea7id"},decimal:{type:"integer",description:"\u7cbe\u5ea6"},currentTime:{type:"integer",description:"\u5f53\u524d\u65f6\u95f4"},expireTime:{type:"integer",description:"\u6709\u6548\u65f6\u95f4"},expireBlockHeight:{type:"integer",description:"\u4ea4\u6613\u6709\u6548\u9ad8\u5ea6"},referBlockHeight:{type:"integer",description:"refer \u9ad8\u5ea6"},from:{type:"string",description:"from\u5730\u5740"},fromTag:{type:"string",description:"from\u5730\u5740tag"},to:{type:"string",description:"to\u5730\u5740"},toTag:{type:"string",description:"to\u5730\u5740tag"},amount:{type:"string",description:"\u91d1\u989d\uff1a\u6700\u5c0f\u7cbe\u5ea6\u7684\u6574\u6570\u503c \u4f8b\u5982\uff1a1230000000000000000"},fee:{type:"string",description:"\u624b\u7eed\u8d39"},txType:{type:"integer",description:"\u4ea4\u6613\u7c7b\u578b"},feeAsset:{type:"string",description:"\u624b\u7eed\u8d39\u8d44\u4ea7"},feePrice:{type:"string",description:"\u624b\u7eed\u8d39Price"},feeStep:{type:"string",description:"\u624b\u7eed\u8d39Step"},chainId:{type:"string",description:"\u94feid"},nonce:{type:"string",description:"\u4ea4\u6613nonce"},vin:{type:"array",description:"utxo input",items:{type:"object",properties:{id:{type:"integer",description:"\u4ea4\u6613id"},hash:{type:"string",description:"\u4ea4\u6613hash"},voutIndex:{type:"string",description:"\u4ea4\u6613index"},address:{type:"string",description:"\u4ea4\u6613\u5730\u5740"},amount:{type:"string",description:"\u4ea4\u6613\u91d1\u989d"},asset:{type:"string",description:"\u4ea4\u6613\u8d44\u4ea7"}}}},vout:{type:"array",description:"\u4ea4\u6613output",items:{type:"object",properties:{asset:{type:"string",description:"\u4ea4\u6613\u8d44\u4ea7"},address:{type:"string",description:"\u4ea4\u6613\u5730\u5740"},amount:{type:"string",description:"\u4ea4\u6613\u91d1\u989d"}}}},funName:{type:"string",description:""},params:{type:"array",description:"",items:{type:"string"}}},description:"\u7b7e\u540d\u4ea4\u6613\u4fe1\u606f"},suffixPath:{type:"string",description:"hdpath"},cryptography:{type:"string",description:""}},description:""},success:{type:"boolean",description:""},requestId:{type:"string",description:""}},description:""}}}}},"x-codegen-request-body-name":"root",description:"\u4ea4\u6613\u53d6\u6d88",extensions:[{key:"x-codegen-request-body-name",value:"root"}],method:"post",path:"/v1/waas/custody/transaction/cancel_transaction",servers:[{url:"/"}],jsonRequestBodyExample:{requestId:"64534,24342",chainSymbol:"ETH",assetId:"USDC_ETH"},info:{title:"Sinohope Full Custody WaaS API",version:"0.0.1",description:"# \u8fd4\u56de\u503c\u8bf4\u660e\n## \u7edf\u4e00\u8fd4\u56de\u503c\n| \u4ee3\u7801 | \u8bf4\u660e |\n| :-- |:---------------|\n| code | \u72b6\u6001\u8fd4\u56de\u4ee3\u7801\uff08\u6210\u529f\u8fd4\u56de200\uff09 |\n| msg | \u72b6\u6001\u8fd4\u56de\u63cf\u8ff0 |\n| data | \u54cd\u5e94\u7684\u6570\u636e |\n| success | \u8bf7\u6c42\u662f\u5426\u6210\u529f\uff08\u6210\u529f\u8fd4\u56detrue\uff0c\u5931\u8d25\u8fd4\u56defalse\uff09 |\n\n# \u5e38\u89c1\u9519\u8bef\u7801\u5b9a\u4e49\n\n\u5f53Sinohope WaaS \u670d\u52a1\u53d1\u751f\u9519\u8bef\u7684\u65f6\u5019\uff0c\u4f1a\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u7edf\u4e00\u683c\u5f0f\u7684\u6570\u636e\n\n\n- `200`: Successful response. Refer to each API for the detailed response data.\n- `400`: Return Bad Request.\n- `401`: Unauthorized. Either API details are missing or invalid\n- `403`: Forbidden - You do not have access to the requested resource.\n- `415`: Unsupported media type. You need to use application/json.\n- `500`: Exchange/Sinohope internal error.\n\n## \u7cfb\u7edf\u5c42\u9762\u9519\u8bef\n| \u9519\u8bef\u7801 | \u63cf\u8ff0 |\n| :-- |:---------------|\n| 1001 | \u672a\u77e5\u5f02\u5e38\uff0c\u8bf7\u8054\u7cfb Sinohope \u5ba2\u670d |\n| 1002 | \u91cd\u590d\u7684\u8bf7\u6c42 |\n| 1004 | APIKey \u9519\u8bef |\n| 1005 | \u9a8c\u7b7e\u5931\u8d25 |\n| 1006 | IP \u8c03\u7528\u9891\u7387\u53d7\u9650 |\n\n## \u53c2\u6570\u5c42\u9762\u9519\u8bef\n| \u9519\u8bef\u7801 | \u63cf\u8ff0 |\n| :-- |:---------------|\n| 2001 | \u5e01\u79cd\u6682\u4e0d\u652f\u6301 |\n| 2002 | \u94fe\u6682\u4e0d\u652f\u6301 |\n| 2003 | \u8f93\u5165\u5730\u5740\u65e0\u6548 |\n| 2004 | \u4ea4\u6613\u8bb0\u5f55\u4e0d\u5b58\u5728 |\n| 2005 | \u65e0\u6743\u9650 |\n| 2006 | \u8f6c\u8d26\u4fe1\u606f\u5f02\u5e38 \uff08kyt\u6821\u9a8c\u4e0d\u901a\u8fc7\uff09 |\n| 2007 | \u77ff\u5de5\u8d39\u8fc7\u4f4e |\n| 2008 | To\u5730\u5740\u975e\u5185\u90e8\u5730\u5740 \uff08\u8f6c\u8d26\u4fdd\u62a4\uff09 |\n| 2009 | \u4f59\u989d\u4e0d\u8db3\u4ee5\u652f\u4ed8\u8f6c\u8d26\u6570\u91cf\u548cGas\u8d39 |\n| 2010 | gas\u4e0d\u8db3 \uff08token\u8f6c\u8d26\uff09 |\n| 2011 | \u53ef\u7528\u4f59\u989d\u4e0d\u8db3 \uff08token\u8f6c\u8d26\uff09 |\n\n## \u4e1a\u52a1\u5c42\u9762\u9519\u8bef\n| \u9519\u8bef\u7801 | \u63cf\u8ff0 |\n| :-- |:---------------|\n| 4001 | \u7ec4\u4ea4\u6613\u5931\u8d25 |\n| 4002 | \u5e7f\u64ad\u5931\u8d25 |\n| 4003 | \u4e0d\u652f\u6301\u52a0\u901f\u7684\u5e01\u79cd |\n| 4004 | \u52a0\u901f\u4ea4\u6613\u5df2\u4e0a\u94fe\u6216nonce\u5df2\u88ab\u5360\u7528 |\n| 4005 | \u53d6\u6d88\u4ea4\u6613\u5df2\u4e0a\u94fe\u6216nonce\u5df2\u88ab\u5360\u7528 |\n| 4006 | TSSNode \u672a\u7ed1\u5b9a |\n| 4007 | TSSNode \u672aDKG |\n| 4008 | \u540c\u4e00\u91d1\u5e93\u4e0d\u80fd\u591f\u540c\u65f6\u53d1\u8d77\u521b\u5efa\u94b1\u5305\u64cd\u4f5c |\n| 4009 | \u540c\u4e00\u91d1\u5e93\u4e0b\u94b1\u5305\u540d\u79f0\u4e0d\u80fd\u76f8\u540c |\n| 4010 | \u521b\u5efa\u94b1\u5305\u6570\u91cf\u548c\u81ea\u5b9a\u4e49\u94b1\u5305list\u4e0d\u4e00\u81f4 |\n| 4011 | \u94b1\u5305\u6570\u91cf\u9650\u989d |\n\n# \u6570\u636e\u5b57\u5178\n## \u4ea4\u6613\u624b\u7eed\u8d39\u8d39\u7387\u7b49\u7ea7\n| \u5b57\u5178\u7801 | \u63cf\u8ff0 |\n| :-- |:---------------|\n| LOW | \u4f4e |\n| MIDDLE | \u4e2d |\n| HIGH | \u9ad8 |\n\n## \u4ea4\u6613\u72b6\u6001\n| \u5b57\u5178\u7801 | \u63cf\u8ff0 |\n| :-- |:---------------|\n| 21 | \u5df2\u7b7e\u540d\u5f85\u4e0a\u94fe |\n| 2 | \u4ea4\u6613\u4e0a\u94fe\u4e2d |\n| 4 | \u5e7f\u64ad\u5931\u8d25 |\n| 5 | \u4ea4\u6613\u4e0a\u94fe\u5931\u8d25 |\n| 6 | \u5e7f\u64ad\u7f51\u7edc\u8d85\u65f6 |\n| 10 | \u4ea4\u6613\u4e0a\u94fe\u6210\u529f |\n| 11 | \u4ea4\u6613\u94fe\u4e0a\u56de\u6eda |\n\n"},postman:{name:"\u4ea4\u6613\u53d6\u6d88",description:{type:"text/plain"},url:{path:["v1","waas","custody","transaction","cancel_transaction"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"*/*"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/develop/full-custody-waas-api/sinohope-full-custody-waas-api",custom_edit_url:null},sidebar:"fullCustodyApiSidebar",previous:{title:"\u4ea4\u6613\u5217\u8868",permalink:"/zh-Hant/docs/develop/full-custody-waas-api/\u4ea4\u6613\u5217\u8868"},next:{title:"\u53d1\u8d77\u63d0\u5e01\u4ea4\u6613",permalink:"/zh-Hant/docs/develop/full-custody-waas-api/\u53d1\u8d77\u63d0\u5e01\u4ea4\u6613"}},g={},u=[{value:"\u4ea4\u6613\u53d6\u6d88",id:"\u4ea4\u6613\u53d6\u6d88",level:2}],h={toc:u},f="wrapper";function k(e){let{components:t,...i}=e;return(0,n.kt)(f,(0,s.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u4ea4\u6613\u53d6\u6d88"},"\u4ea4\u6613\u53d6\u6d88"),(0,n.kt)("p",null,"\u4ea4\u6613\u53d6\u6d88"),(0,n.kt)(r.Z,{mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Request Body")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!1,name:"requestId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u8bf7\u6c42\u65b9\u7684requestId",default:"64534,24342"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"chainSymbol",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u94fe\u6807\u8bc6",default:"ETH"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"assetId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u8d44\u4ea7id",default:"USDC_ETH"},mdxType:"SchemaItem"}))))),(0,n.kt)("div",null,(0,n.kt)(a.Z,{mdxType:"ApiTabs"},(0,n.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"successful operation")),(0,n.kt)("div",null,(0,n.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,n.kt)(d.Z,{mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!1,name:"code",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:""},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"msg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:""},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"data"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!1,name:"requestId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u63d0\u5e01\u8bf7\u6c42id"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"sinoId",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"SinoHope\u7684\u8ba2\u5355\u552f\u4e00\u6807\u8bc6"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"network",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u7f51\u7edc"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"txType",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u4ea4\u6613\u7c7b\u578b"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"hasToBeSigned",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u7b7e\u540d\u524d\u4fe1\u606f"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"data"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"\u7b7e\u540d\u4ea4\u6613\u4fe1\u606f")),(0,n.kt)(p.Z,{collapsible:!1,name:"asset",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u8d44\u4ea7id"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"decimal",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"\u7cbe\u5ea6"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"currentTime",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"\u5f53\u524d\u65f6\u95f4"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"expireTime",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"\u6709\u6548\u65f6\u95f4"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"expireBlockHeight",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"\u4ea4\u6613\u6709\u6548\u9ad8\u5ea6"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"referBlockHeight",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"refer \u9ad8\u5ea6"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"from",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"from\u5730\u5740"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"fromTag",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"from\u5730\u5740tag"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"to",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"to\u5730\u5740"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"toTag",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"to\u5730\u5740tag"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"amount",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u91d1\u989d\uff1a\u6700\u5c0f\u7cbe\u5ea6\u7684\u6574\u6570\u503c \u4f8b\u5982\uff1a1230000000000000000"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"fee",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u624b\u7eed\u8d39"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"txType",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"\u4ea4\u6613\u7c7b\u578b"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"feeAsset",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u624b\u7eed\u8d39\u8d44\u4ea7"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"feePrice",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u624b\u7eed\u8d39Price"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"feeStep",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u624b\u7eed\u8d39Step"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"chainId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u94feid"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"nonce",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u4ea4\u6613nonce"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"vin"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"utxo input")),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,n.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"\u4ea4\u6613id"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"hash",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u4ea4\u6613hash"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"voutIndex",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u4ea4\u6613index"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"address",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u4ea4\u6613\u5730\u5740"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"amount",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u4ea4\u6613\u91d1\u989d"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"asset",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u4ea4\u6613\u8d44\u4ea7"},mdxType:"SchemaItem"}),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,n.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"vout"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"\u4ea4\u6613output")),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,n.kt)(p.Z,{collapsible:!1,name:"asset",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u4ea4\u6613\u8d44\u4ea7"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"address",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u4ea4\u6613\u5730\u5740"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"amount",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u4ea4\u6613\u91d1\u989d"},mdxType:"SchemaItem"}),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,n.kt)(p.Z,{collapsible:!1,name:"funName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:""},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"params",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",description:"",items:{type:"string"}},mdxType:"SchemaItem"})))),(0,n.kt)(p.Z,{collapsible:!1,name:"suffixPath",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"hdpath"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"cryptography",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:""},mdxType:"SchemaItem"})))),(0,n.kt)(p.Z,{collapsible:!1,name:"success",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:""},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"requestId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:""},mdxType:"SchemaItem"})))),(0,n.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(o.Z,{responseExample:'{\n  "code": 0,\n  "msg": "string",\n  "data": {\n    "requestId": "string",\n    "sinoId": 0,\n    "network": "string",\n    "txType": "string",\n    "hasToBeSigned": "string",\n    "data": {\n      "asset": "string",\n      "decimal": 0,\n      "currentTime": 0,\n      "expireTime": 0,\n      "expireBlockHeight": 0,\n      "referBlockHeight": 0,\n      "from": "string",\n      "fromTag": "string",\n      "to": "string",\n      "toTag": "string",\n      "amount": "string",\n      "fee": "string",\n      "txType": 0,\n      "feeAsset": "string",\n      "feePrice": "string",\n      "feeStep": "string",\n      "chainId": "string",\n      "nonce": "string",\n      "vin": [\n        {\n          "id": 0,\n          "hash": "string",\n          "voutIndex": "string",\n          "address": "string",\n          "amount": "string",\n          "asset": "string"\n        }\n      ],\n      "vout": [\n        {\n          "asset": "string",\n          "address": "string",\n          "amount": "string"\n        }\n      ],\n      "funName": "string",\n      "params": [\n        "string"\n      ]\n    },\n    "suffixPath": "string",\n    "cryptography": "string"\n  },\n  "success": true,\n  "requestId": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);