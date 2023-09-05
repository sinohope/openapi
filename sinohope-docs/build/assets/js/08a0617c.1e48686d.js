"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[7693],{97882:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>g,contentTitle:()=>m,default:()=>x,frontMatter:()=>c,metadata:()=>u,toc:()=>h});var t=a(87462),s=(a(67294),a(3905)),i=a(26389),o=a(94891),p=(a(75190),a(47507)),d=a(24310),r=a(63303),l=(a(75035),a(85162));const c={id:"\u751f\u6210\u94fe\u5730\u5740",title:"\u751f\u6210\u94fe\u5730\u5740",description:"\u751f\u6210\u94fe\u5730\u5740",sidebar_label:"\u751f\u6210\u94fe\u5730\u5740",hide_title:!0,hide_table_of_contents:!0,api:{tags:["\u8d26\u6237&\u5730\u5740"],"x-codeSamples":[{lang:"python",label:"python",source:'request(\n  "POST",\n  "/v1/waas/mpc/wallet/generate_chain_addresses/",\n  {\n    "requestId": "413497079388421",\n    "vaultId": "450632968208222",\n    "walletId": "413497079388421",\n    "count": 1,\n    "chainSymbol": "ETH"\n  },\n  api_key, host\n)\n'},{lang:"go",label:"go",source:'Request("POST", "/v1/waas/mpc/wallet/generate_chain_addresses/", map[string]string{\n    "requestId": "413497079388421",\n    "vaultId": "450632968208222",\n    "walletId": "413497079388421",\n    "count": 1,\n    "chainSymbol": "ETH"\n})\n'}],requestBody:{content:{"application/json":{schema:{required:["vaultId","chainSymbol","walletId","requestId"],type:"object",properties:{requestId:{type:"string",description:"\u4e1a\u52a1\u552f\u4e00\u503c",example:"413497079388421"},vaultId:{type:"string",description:"\u91d1\u5e93id",example:"450632968208222"},walletId:{type:"string",description:"\u94b1\u5305id",example:"413497079388421"},count:{type:"integer",description:"\u521b\u5efa\u591a\u5c11\u4e2a\u3002\u9ed8\u8ba4\u503c\u4e3a 1\uff0c\u6700\u5927\u503c 50\u3002",example:1},chainSymbol:{type:"string",description:"\u94fe\u540d\u79f0 \u7b80\u79f0 \u94fe\u6807\u8bc6 \u5177\u6709\u552f\u4e00\u6027",example:"ETH"}}}}},required:!1},responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{code:{type:"integer",example:200},msg:{type:"string",example:""},data:{type:"array",items:{type:"object",description:"\u5730\u5740\u4fe1\u606f",properties:{id:{type:"string",description:"\u5730\u5740id",example:"11368"},address:{type:"string",description:"\u94fe\u5730\u5740",example:"4b1613e2501b770463a12e397b34d9cac0d9497c"},hdPath:{type:"string",description:"\u5730\u5740\u5bf9\u5e94\u7684path",example:"m/1/1/60/0"},encoding:{type:"integer",description:"\u94fe\u5730\u5740\n\u5730\u5740\u7c7b\u578b\uff08\u4f8b\uff1aBTC\u94fe\uff1aLegacy\uff08P2PKH\uff09\u683c\u5f0f\uff1a0\uff0cNative SegWit\uff08Bech32\uff09\u683c\u5f0f\uff1a2\uff09",example:0},pubkey:{type:"string",description:"\u516c\u94a5",example:"021855d461cf75ac6579d32a2af92d0dc26f0f0736ac766f8ad7894407ab360ffb"}},title:"addressInfo"}},success:{type:"boolean"}}}}}}},"x-codegen-request-body-name":"root",description:"\u751f\u6210\u94fe\u5730\u5740",extensions:[{key:"x-codegen-request-body-name",value:"root"}],method:"post",path:"/v1/waas/mpc/wallet/generate_chain_addresses",servers:[{url:"https://api.sinohope.com/"},{url:"https://api-sandbox.sinohope.com/"}],jsonRequestBodyExample:{requestId:"413497079388421",vaultId:"450632968208222",walletId:"413497079388421",count:1,chainSymbol:"ETH"},info:{title:"Sinohope WaaS API",version:"0.9.1",description:"# \u53c2\u6570\u53ca\u8fd4\u56de\u503c\u901a\u7528\u8bf4\u660e\n## \u7edf\u4e00\u7684\u8fd4\u56de\u503c\u7ed3\u6784\n| \u4ee3\u7801 | \u8bf4\u660e |\n| :-- |:---------------|\n| code | \u72b6\u6001\u8fd4\u56de\u4ee3\u7801\uff08\u6210\u529f\u8fd4\u56de200\uff09 |\n| msg | \u72b6\u6001\u8fd4\u56de\u63cf\u8ff0 |\n| data | \u54cd\u5e94\u7684\u6570\u636e |\n| success | \u8bf7\u6c42\u662f\u5426\u6210\u529f\uff08\u6210\u529f\u8fd4\u56detrue\uff0c\u5931\u8d25\u8fd4\u56defalse\uff09 |\n\n## \u5e38\u89c1\u9519\u8bef\u7801\u5b9a\u4e49\n\n\u5f53Sinohope WaaS \u670d\u52a1\u53d1\u751f\u9519\u8bef\u7684\u65f6\u5019\uff0c\u4f1a\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u7edf\u4e00\u683c\u5f0f\u7684\u6570\u636e\n\n- `200`: Successful response. Refer to each API for the detailed response data.\n- `400`: Return Bad Request.\n- `401`: Unauthorized. Either API details are missing or invalid\n- `403`: Forbidden - You do not have access to the requested resource.\n- `415`: Unsupported media type. You need to use application/json.\n- `500`: Exchange/Sinohope internal error.\n\n### \u7cfb\u7edf\u5c42\u9762\u9519\u8bef\n| \u9519\u8bef\u7801 | \u63cf\u8ff0 |\n| :-- |:---------------|\n| 1001 | \u672a\u77e5\u5f02\u5e38\uff0c\u8bf7\u8054\u7cfb Sinohope \u5ba2\u670d |\n| 1002 | \u91cd\u590d\u7684\u8bf7\u6c42 |\n| 1004 | Invalid API Key |\n| 1005 | \u9a8c\u7b7e\u5931\u8d25 |\n| 1006 | IP \u8c03\u7528\u9891\u7387\u53d7\u9650 |\n| 1007 | \u65e0\u63a5\u53e3\u6743\u9650 |\n| 1008 | \u65e0\u6548\u7684ip\u5730\u5740 |\n| 1009 | \u7b7e\u540d\u8bf7\u6c42\u5934\u4e0d\u80fd\u4e3a\u7a7a |\n| 1010 | \u65f6\u95f4\u6233\u8bf7\u6c42\u5934\u4e0d\u80fd\u4e3a\u7a7a |\n| 1011 | \u8bf7\u6c42\u670d\u52a1\u63a5\u53e3\u5f02\u5e38 |\n| 1012 | \u65e0\u6548\u7684\u4e1a\u52a1\u8bf7\u6c42\uff0c\u8bf7\u68c0\u67e5\u662f\u5426\u6709\u5bf9\u5e94\u4e1a\u52a1\u8bf7\u6c42\u5934 |\n| 1013 | \u7b7e\u540d\u5931\u8d25 |\n| 1014 | \u4e0d\u652f\u6301\u7684\u8bf7\u6c42\u7c7b\u578b(\u4ec5\u652f\u6301GET\u3001POST) |\n| 1015 | \u7f3a\u5c11\u7b7e\u540d\u53c2\u6570 |\n\n### \u53c2\u6570\u5c42\u9762\u9519\u8bef\n| \u9519\u8bef\u7801 | \u63cf\u8ff0 |\n| :-- |:---------------|\n| 2001 | \u5e01\u79cd\u6682\u4e0d\u652f\u6301 |\n| 2002 | \u94fe\u6682\u4e0d\u652f\u6301 |\n| 2003 | \u8f93\u5165\u5730\u5740\u65e0\u6548 |\n| 2004 | \u4ea4\u6613\u8bb0\u5f55\u4e0d\u5b58\u5728 |\n| 2005 | \u65e0\u6743\u9650 |\n| 2006 | \u8f6c\u8d26\u4fe1\u606f\u5f02\u5e38 \uff08kyt\u6821\u9a8c\u4e0d\u901a\u8fc7\uff09 |\n| 2007 | \u77ff\u5de5\u8d39\u8fc7\u4f4e |\n| 2008 | To\u5730\u5740\u975e\u5185\u90e8\u5730\u5740 \uff08\u8f6c\u8d26\u4fdd\u62a4\uff09 |\n| 2009 | \u4f59\u989d\u4e0d\u8db3\u4ee5\u652f\u4ed8\u8f6c\u8d26\u6570\u91cf\u548cGas\u8d39 |\n| 2010 | gas\u4e0d\u8db3 \uff08token\u8f6c\u8d26\uff09 |\n| 2011 | \u53ef\u7528\u4f59\u989d\u4e0d\u8db3 \uff08token\u8f6c\u8d26\uff09 |\n| 2012 | \u540d\u79f0\u4e2d\u4e0d\u80fd\u5305\u542b\u53cd\u659c\u6760 |\n| 2013 | \u672a\u627e\u5230path\u5bf9\u5e94\u5730\u5740 |\n| 2097 | \u9875\u9875\u6570\u9519\u8bef pageIndex >=1 |\n| 2098 | \u5206\u9875\u6570\u91cf\u9519\u8bef pageSize <=50 |\n| 2099 | \u5fc5\u987b\u53c2\u6570\u7f3a\u5931 |\n| 2100 | pageSize\u5fc5\u987b\u5927\u4e8e0 |\n| 2101 | \u6307\u5b9a\u7684\u94b1\u5305\u4e0d\u5b58\u5728 |\n| 2102 | \u6307\u5b9a\u7684\u8d44\u4ea7\u4e0d\u5b58\u5728 |\n| 2103 | \u6307\u5b9a\u7684\u94fe\u6807\u8bc6\u4e0d\u5b58\u5728 |\n| 2104 | \u6307\u5b9a\u7684\u91d1\u5e93\u4e0d\u5b58\u5728 |\n| 2105 | page size exceeds maximum limit(50) |\n| 2106 | \u751f\u6210\u94fe\u5730\u5740\u5355\u5b50\u6700\u5927\u4e2a\u6570\u8d85\u9650\uff0850\uff09 |\n| 2107 | pageIndex\u6700\u5c0f\u4e3a1 |\n| 2108 | \u53c2\u6570\u7c7b\u578b\u9519\u8bef |\n| 2109 | advancedEnabled must be 0 or 1 |\n| 2110 | algorithmType must be 0 or 1 |\n| 2111 | requestId total cannot be greater than 50 |\n| 2112 | sinoId total cannot be greater than 50 |\n| 2113 | signAlgorithm must in 'personal_sign\u3001signTypedData\u3001 eth_signTypedData_v3\u3001eth_signTypedData_v4' |\n| 2114 | The length of requestId is too long, the maximum is 120 |\n| 2115 | message \u683c\u5f0f\u9519\u8bef\uff0c\u6216\u8005signAlgorithm\u53c2\u6570\u9519\u8bef |\n| 2116 | \u94b1\u5305\u4e0e\u7ec4\u7ec7\u4fe1\u606f\u4e0d\u5339\u914d |\n| 2117 | \u94b1\u5305\u4e0e\u91d1\u5e93\u4fe1\u606f\u4e0d\u5339\u914d |\n| 2118 | \u91d1\u5e93\u4e0e\u7ec4\u7ec7\u4fe1\u606f\u4e0d\u5339\u914d |\n\n### \u4e1a\u52a1\u5c42\u9762\u9519\u8bef\n| \u9519\u8bef\u7801 | \u63cf\u8ff0 |\n| :-- |:---------------|\n| 4001 | \u7ec4\u4ea4\u6613\u5931\u8d25 |\n| 4002 | \u5e7f\u64ad\u5931\u8d25 |\n| 4003 | \u4e0d\u652f\u6301\u52a0\u901f\u7684\u5e01\u79cd |\n| 4004 | \u52a0\u901f\u4ea4\u6613\u5df2\u4e0a\u94fe\u6216nonce\u5df2\u88ab\u5360\u7528 |\n| 4005 | \u53d6\u6d88\u4ea4\u6613\u5df2\u4e0a\u94fe\u6216nonce\u5df2\u88ab\u5360\u7528 |\n| 4006 | MPC Node \u672a\u7ed1\u5b9a |\n| 4007 | MPC Node \u672aDKG |\n| 4008 | \u540c\u4e00\u91d1\u5e93\u4e0d\u80fd\u591f\u540c\u65f6\u53d1\u8d77\u521b\u5efa\u94b1\u5305\u64cd\u4f5c |\n| 4009 | \u540c\u4e00\u91d1\u5e93\u4e0b\u94b1\u5305\u540d\u79f0\u4e0d\u80fd\u76f8\u540c |\n| 4010 | \u521b\u5efa\u94b1\u5305\u6570\u91cf\u548c\u81ea\u5b9a\u4e49\u94b1\u5305list\u4e0d\u4e00\u81f4 |\n| 4011 | \u94b1\u5305\u6570\u91cf\u9650\u989d |\n\n## \u6570\u636e\u5b57\u5178\n### \u4ea4\u6613\u624b\u7eed\u8d39\u8d39\u7387\u7b49\u7ea7\n| \u5b57\u5178\u7801 | \u63cf\u8ff0 |\n| :-- |:---------------|\n| LOW | \u4f4e |\n| MIDDLE | \u4e2d |\n| HIGH | \u9ad8 |\n\n### \u4ea4\u6613\u72b6\u6001\n| \u5b57\u5178\u7801 | \u63cf\u8ff0 |\n| :-- |:---------------|\n| 0 | \u4ea4\u6613\u5f85\u4e8c\u6b21\u786e\u8ba4 |\n| 1 | \u4ea4\u6613\u5f85\u7b7e\u540d |\n| 2 | \u4ea4\u6613\u4e0a\u94fe\u4e2d |\n| 4 | \u5e7f\u64ad\u5931\u8d25 |\n| 5 | \u4ea4\u6613\u4e0a\u94fe\u5931\u8d25 |\n| 6 | \u5e7f\u64ad\u7f51\u7edc\u8d85\u65f6 |\n| 10 | \u4ea4\u6613\u4e0a\u94fe\u6210\u529f |\n| 11 | \u4ea4\u6613\u94fe\u4e0a\u56de\u6eda |\n| 13 | \u4ea4\u6613\u62d2\u7edd |\n\n\n## \u6587\u6863\u53d8\u66f4\u8bb0\u5f55\n\n| Version | Log           | Date       | Modifier |\n| ---- | ------------- | ---------- | ------ |\n| v0.9.0 | first version | 2023-08-04 | Owen  |\n| v0.9.1 | add new sections,and fix some apis | 2023-08-22 | Owen  |"},postman:{name:"\u751f\u6210\u94fe\u5730\u5740",description:{type:"text/plain"},url:{path:["v1","waas","mpc","wallet","generate_chain_addresses"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/develop/mpc-waas-api/sinohope-waas-api",custom_edit_url:null},m=void 0,u={unversionedId:"develop/mpc-waas-api/\u751f\u6210\u94fe\u5730\u5740",id:"develop/mpc-waas-api/\u751f\u6210\u94fe\u5730\u5740",title:"\u751f\u6210\u94fe\u5730\u5740",description:"\u751f\u6210\u94fe\u5730\u5740",source:"@site/docs/develop/mpc-waas-api/\u751f\u6210\u94fe\u5730\u5740.api.mdx",sourceDirName:"develop/mpc-waas-api",slug:"/develop/mpc-waas-api/\u751f\u6210\u94fe\u5730\u5740",permalink:"/docs/develop/mpc-waas-api/\u751f\u6210\u94fe\u5730\u5740",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"\u751f\u6210\u94fe\u5730\u5740",title:"\u751f\u6210\u94fe\u5730\u5740",description:"\u751f\u6210\u94fe\u5730\u5740",sidebar_label:"\u751f\u6210\u94fe\u5730\u5740",hide_title:!0,hide_table_of_contents:!0,api:{tags:["\u8d26\u6237&\u5730\u5740"],"x-codeSamples":[{lang:"python",label:"python",source:'request(\n  "POST",\n  "/v1/waas/mpc/wallet/generate_chain_addresses/",\n  {\n    "requestId": "413497079388421",\n    "vaultId": "450632968208222",\n    "walletId": "413497079388421",\n    "count": 1,\n    "chainSymbol": "ETH"\n  },\n  api_key, host\n)\n'},{lang:"go",label:"go",source:'Request("POST", "/v1/waas/mpc/wallet/generate_chain_addresses/", map[string]string{\n    "requestId": "413497079388421",\n    "vaultId": "450632968208222",\n    "walletId": "413497079388421",\n    "count": 1,\n    "chainSymbol": "ETH"\n})\n'}],requestBody:{content:{"application/json":{schema:{required:["vaultId","chainSymbol","walletId","requestId"],type:"object",properties:{requestId:{type:"string",description:"\u4e1a\u52a1\u552f\u4e00\u503c",example:"413497079388421"},vaultId:{type:"string",description:"\u91d1\u5e93id",example:"450632968208222"},walletId:{type:"string",description:"\u94b1\u5305id",example:"413497079388421"},count:{type:"integer",description:"\u521b\u5efa\u591a\u5c11\u4e2a\u3002\u9ed8\u8ba4\u503c\u4e3a 1\uff0c\u6700\u5927\u503c 50\u3002",example:1},chainSymbol:{type:"string",description:"\u94fe\u540d\u79f0 \u7b80\u79f0 \u94fe\u6807\u8bc6 \u5177\u6709\u552f\u4e00\u6027",example:"ETH"}}}}},required:!1},responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{code:{type:"integer",example:200},msg:{type:"string",example:""},data:{type:"array",items:{type:"object",description:"\u5730\u5740\u4fe1\u606f",properties:{id:{type:"string",description:"\u5730\u5740id",example:"11368"},address:{type:"string",description:"\u94fe\u5730\u5740",example:"4b1613e2501b770463a12e397b34d9cac0d9497c"},hdPath:{type:"string",description:"\u5730\u5740\u5bf9\u5e94\u7684path",example:"m/1/1/60/0"},encoding:{type:"integer",description:"\u94fe\u5730\u5740\n\u5730\u5740\u7c7b\u578b\uff08\u4f8b\uff1aBTC\u94fe\uff1aLegacy\uff08P2PKH\uff09\u683c\u5f0f\uff1a0\uff0cNative SegWit\uff08Bech32\uff09\u683c\u5f0f\uff1a2\uff09",example:0},pubkey:{type:"string",description:"\u516c\u94a5",example:"021855d461cf75ac6579d32a2af92d0dc26f0f0736ac766f8ad7894407ab360ffb"}},title:"addressInfo"}},success:{type:"boolean"}}}}}}},"x-codegen-request-body-name":"root",description:"\u751f\u6210\u94fe\u5730\u5740",extensions:[{key:"x-codegen-request-body-name",value:"root"}],method:"post",path:"/v1/waas/mpc/wallet/generate_chain_addresses",servers:[{url:"https://api.sinohope.com/"},{url:"https://api-sandbox.sinohope.com/"}],jsonRequestBodyExample:{requestId:"413497079388421",vaultId:"450632968208222",walletId:"413497079388421",count:1,chainSymbol:"ETH"},info:{title:"Sinohope WaaS API",version:"0.9.1",description:"# \u53c2\u6570\u53ca\u8fd4\u56de\u503c\u901a\u7528\u8bf4\u660e\n## \u7edf\u4e00\u7684\u8fd4\u56de\u503c\u7ed3\u6784\n| \u4ee3\u7801 | \u8bf4\u660e |\n| :-- |:---------------|\n| code | \u72b6\u6001\u8fd4\u56de\u4ee3\u7801\uff08\u6210\u529f\u8fd4\u56de200\uff09 |\n| msg | \u72b6\u6001\u8fd4\u56de\u63cf\u8ff0 |\n| data | \u54cd\u5e94\u7684\u6570\u636e |\n| success | \u8bf7\u6c42\u662f\u5426\u6210\u529f\uff08\u6210\u529f\u8fd4\u56detrue\uff0c\u5931\u8d25\u8fd4\u56defalse\uff09 |\n\n## \u5e38\u89c1\u9519\u8bef\u7801\u5b9a\u4e49\n\n\u5f53Sinohope WaaS \u670d\u52a1\u53d1\u751f\u9519\u8bef\u7684\u65f6\u5019\uff0c\u4f1a\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u7edf\u4e00\u683c\u5f0f\u7684\u6570\u636e\n\n- `200`: Successful response. Refer to each API for the detailed response data.\n- `400`: Return Bad Request.\n- `401`: Unauthorized. Either API details are missing or invalid\n- `403`: Forbidden - You do not have access to the requested resource.\n- `415`: Unsupported media type. You need to use application/json.\n- `500`: Exchange/Sinohope internal error.\n\n### \u7cfb\u7edf\u5c42\u9762\u9519\u8bef\n| \u9519\u8bef\u7801 | \u63cf\u8ff0 |\n| :-- |:---------------|\n| 1001 | \u672a\u77e5\u5f02\u5e38\uff0c\u8bf7\u8054\u7cfb Sinohope \u5ba2\u670d |\n| 1002 | \u91cd\u590d\u7684\u8bf7\u6c42 |\n| 1004 | Invalid API Key |\n| 1005 | \u9a8c\u7b7e\u5931\u8d25 |\n| 1006 | IP \u8c03\u7528\u9891\u7387\u53d7\u9650 |\n| 1007 | \u65e0\u63a5\u53e3\u6743\u9650 |\n| 1008 | \u65e0\u6548\u7684ip\u5730\u5740 |\n| 1009 | \u7b7e\u540d\u8bf7\u6c42\u5934\u4e0d\u80fd\u4e3a\u7a7a |\n| 1010 | \u65f6\u95f4\u6233\u8bf7\u6c42\u5934\u4e0d\u80fd\u4e3a\u7a7a |\n| 1011 | \u8bf7\u6c42\u670d\u52a1\u63a5\u53e3\u5f02\u5e38 |\n| 1012 | \u65e0\u6548\u7684\u4e1a\u52a1\u8bf7\u6c42\uff0c\u8bf7\u68c0\u67e5\u662f\u5426\u6709\u5bf9\u5e94\u4e1a\u52a1\u8bf7\u6c42\u5934 |\n| 1013 | \u7b7e\u540d\u5931\u8d25 |\n| 1014 | \u4e0d\u652f\u6301\u7684\u8bf7\u6c42\u7c7b\u578b(\u4ec5\u652f\u6301GET\u3001POST) |\n| 1015 | \u7f3a\u5c11\u7b7e\u540d\u53c2\u6570 |\n\n### \u53c2\u6570\u5c42\u9762\u9519\u8bef\n| \u9519\u8bef\u7801 | \u63cf\u8ff0 |\n| :-- |:---------------|\n| 2001 | \u5e01\u79cd\u6682\u4e0d\u652f\u6301 |\n| 2002 | \u94fe\u6682\u4e0d\u652f\u6301 |\n| 2003 | \u8f93\u5165\u5730\u5740\u65e0\u6548 |\n| 2004 | \u4ea4\u6613\u8bb0\u5f55\u4e0d\u5b58\u5728 |\n| 2005 | \u65e0\u6743\u9650 |\n| 2006 | \u8f6c\u8d26\u4fe1\u606f\u5f02\u5e38 \uff08kyt\u6821\u9a8c\u4e0d\u901a\u8fc7\uff09 |\n| 2007 | \u77ff\u5de5\u8d39\u8fc7\u4f4e |\n| 2008 | To\u5730\u5740\u975e\u5185\u90e8\u5730\u5740 \uff08\u8f6c\u8d26\u4fdd\u62a4\uff09 |\n| 2009 | \u4f59\u989d\u4e0d\u8db3\u4ee5\u652f\u4ed8\u8f6c\u8d26\u6570\u91cf\u548cGas\u8d39 |\n| 2010 | gas\u4e0d\u8db3 \uff08token\u8f6c\u8d26\uff09 |\n| 2011 | \u53ef\u7528\u4f59\u989d\u4e0d\u8db3 \uff08token\u8f6c\u8d26\uff09 |\n| 2012 | \u540d\u79f0\u4e2d\u4e0d\u80fd\u5305\u542b\u53cd\u659c\u6760\\ |\n| 2013 | \u672a\u627e\u5230path\u5bf9\u5e94\u5730\u5740 |\n| 2097 | \u9875\u9875\u6570\u9519\u8bef pageIndex >=1 |\n| 2098 | \u5206\u9875\u6570\u91cf\u9519\u8bef pageSize <=50 |\n| 2099 | \u5fc5\u987b\u53c2\u6570\u7f3a\u5931 |\n| 2100 | pageSize\u5fc5\u987b\u5927\u4e8e0 |\n| 2101 | \u6307\u5b9a\u7684\u94b1\u5305\u4e0d\u5b58\u5728 |\n| 2102 | \u6307\u5b9a\u7684\u8d44\u4ea7\u4e0d\u5b58\u5728 |\n| 2103 | \u6307\u5b9a\u7684\u94fe\u6807\u8bc6\u4e0d\u5b58\u5728 |\n| 2104 | \u6307\u5b9a\u7684\u91d1\u5e93\u4e0d\u5b58\u5728 |\n| 2105 | page size exceeds maximum limit(50) |\n| 2106 | \u751f\u6210\u94fe\u5730\u5740\u5355\u5b50\u6700\u5927\u4e2a\u6570\u8d85\u9650\uff0850\uff09 |\n| 2107 | pageIndex\u6700\u5c0f\u4e3a1 |\n| 2108 | \u53c2\u6570\u7c7b\u578b\u9519\u8bef |\n| 2109 | advancedEnabled must be 0 or 1 |\n| 2110 | algorithmType must be 0 or 1 |\n| 2111 | requestId total cannot be greater than 50 |\n| 2112 | sinoId total cannot be greater than 50 |\n| 2113 | signAlgorithm must in 'personal_sign\u3001signTypedData\u3001 eth_signTypedData_v3\u3001eth_signTypedData_v4' |\n| 2114 | The length of requestId is too long, the maximum is 120 |\n| 2115 | message \u683c\u5f0f\u9519\u8bef\uff0c\u6216\u8005signAlgorithm\u53c2\u6570\u9519\u8bef |\n| 2116 | \u94b1\u5305\u4e0e\u7ec4\u7ec7\u4fe1\u606f\u4e0d\u5339\u914d |\n| 2117 | \u94b1\u5305\u4e0e\u91d1\u5e93\u4fe1\u606f\u4e0d\u5339\u914d |\n| 2118 | \u91d1\u5e93\u4e0e\u7ec4\u7ec7\u4fe1\u606f\u4e0d\u5339\u914d |\n\n### \u4e1a\u52a1\u5c42\u9762\u9519\u8bef\n| \u9519\u8bef\u7801 | \u63cf\u8ff0 |\n| :-- |:---------------|\n| 4001 | \u7ec4\u4ea4\u6613\u5931\u8d25 |\n| 4002 | \u5e7f\u64ad\u5931\u8d25 |\n| 4003 | \u4e0d\u652f\u6301\u52a0\u901f\u7684\u5e01\u79cd |\n| 4004 | \u52a0\u901f\u4ea4\u6613\u5df2\u4e0a\u94fe\u6216nonce\u5df2\u88ab\u5360\u7528 |\n| 4005 | \u53d6\u6d88\u4ea4\u6613\u5df2\u4e0a\u94fe\u6216nonce\u5df2\u88ab\u5360\u7528 |\n| 4006 | MPC Node \u672a\u7ed1\u5b9a |\n| 4007 | MPC Node \u672aDKG |\n| 4008 | \u540c\u4e00\u91d1\u5e93\u4e0d\u80fd\u591f\u540c\u65f6\u53d1\u8d77\u521b\u5efa\u94b1\u5305\u64cd\u4f5c |\n| 4009 | \u540c\u4e00\u91d1\u5e93\u4e0b\u94b1\u5305\u540d\u79f0\u4e0d\u80fd\u76f8\u540c |\n| 4010 | \u521b\u5efa\u94b1\u5305\u6570\u91cf\u548c\u81ea\u5b9a\u4e49\u94b1\u5305list\u4e0d\u4e00\u81f4 |\n| 4011 | \u94b1\u5305\u6570\u91cf\u9650\u989d |\n\n## \u6570\u636e\u5b57\u5178\n### \u4ea4\u6613\u624b\u7eed\u8d39\u8d39\u7387\u7b49\u7ea7\n| \u5b57\u5178\u7801 | \u63cf\u8ff0 |\n| :-- |:---------------|\n| LOW | \u4f4e |\n| MIDDLE | \u4e2d |\n| HIGH | \u9ad8 |\n\n### \u4ea4\u6613\u72b6\u6001\n| \u5b57\u5178\u7801 | \u63cf\u8ff0 |\n| :-- |:---------------|\n| 0 | \u4ea4\u6613\u5f85\u4e8c\u6b21\u786e\u8ba4 |\n| 1 | \u4ea4\u6613\u5f85\u7b7e\u540d |\n| 2 | \u4ea4\u6613\u4e0a\u94fe\u4e2d |\n| 4 | \u5e7f\u64ad\u5931\u8d25 |\n| 5 | \u4ea4\u6613\u4e0a\u94fe\u5931\u8d25 |\n| 6 | \u5e7f\u64ad\u7f51\u7edc\u8d85\u65f6 |\n| 10 | \u4ea4\u6613\u4e0a\u94fe\u6210\u529f |\n| 11 | \u4ea4\u6613\u94fe\u4e0a\u56de\u6eda |\n| 13 | \u4ea4\u6613\u62d2\u7edd |\n\n\n## \u6587\u6863\u53d8\u66f4\u8bb0\u5f55\n\n| Version | Log           | Date       | Modifier |\n| ---- | ------------- | ---------- | ------ |\n| v0.9.0 | first version | 2023-08-04 | Owen  |\n| v0.9.1 | add new sections,and fix some apis | 2023-08-22 | Owen  |"},postman:{name:"\u751f\u6210\u94fe\u5730\u5740",description:{type:"text/plain"},url:{path:["v1","waas","mpc","wallet","generate_chain_addresses"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/develop/mpc-waas-api/sinohope-waas-api",custom_edit_url:null},sidebar:"mpcApiSidebar",previous:{title:"\u67e5\u8be2\u94fe\u5730\u5740",permalink:"/docs/develop/mpc-waas-api/\u67e5\u8be2\u94fe\u5730\u5740"},next:{title:"\u67e5\u8be2\u94b1\u5305\u5217\u8868",permalink:"/docs/develop/mpc-waas-api/\u67e5\u8be2\u94b1\u5305\u5217\u8868"}},g={},h=[{value:"\u751f\u6210\u94fe\u5730\u5740",id:"\u751f\u6210\u94fe\u5730\u5740",level:2}],y={toc:h},b="wrapper";function x(e){let{components:n,...a}=e;return(0,s.kt)(b,(0,t.Z)({},y,a,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"\u751f\u6210\u94fe\u5730\u5740"},"\u751f\u6210\u94fe\u5730\u5740"),(0,s.kt)("p",null,"\u751f\u6210\u94fe\u5730\u5740"),(0,s.kt)(o.Z,{mdxType:"MimeTabs"},(0,s.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"requestId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u4e1a\u52a1\u552f\u4e00\u503c",example:"413497079388421"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"vaultId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u91d1\u5e93id",example:"450632968208222"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"walletId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u94b1\u5305id",example:"413497079388421"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"count",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"\u521b\u5efa\u591a\u5c11\u4e2a\u3002\u9ed8\u8ba4\u503c\u4e3a 1\uff0c\u6700\u5927\u503c 50\u3002",example:1},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"chainSymbol",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u94fe\u540d\u79f0 \u7b80\u79f0 \u94fe\u6807\u8bc6 \u5177\u6709\u552f\u4e00\u6027",example:"ETH"},mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)(i.Z,{mdxType:"ApiTabs"},(0,s.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"successful operation")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(r.Z,{mdxType:"SchemaTabs"},(0,s.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"code",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",example:200},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"msg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:""},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"data"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(d.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u5730\u5740id",example:"11368"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"address",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u94fe\u5730\u5740",example:"4b1613e2501b770463a12e397b34d9cac0d9497c"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"hdPath",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u5730\u5740\u5bf9\u5e94\u7684path",example:"m/1/1/60/0"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"encoding",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"\u94fe\u5730\u5740\n\u5730\u5740\u7c7b\u578b\uff08\u4f8b\uff1aBTC\u94fe\uff1aLegacy\uff08P2PKH\uff09\u683c\u5f0f\uff1a0\uff0cNative SegWit\uff08Bech32\uff09\u683c\u5f0f\uff1a2\uff09",example:0},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"pubkey",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u516c\u94a5",example:"021855d461cf75ac6579d32a2af92d0dc26f0f0736ac766f8ad7894407ab360ffb"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(d.Z,{collapsible:!1,name:"success",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"})))),(0,s.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(p.Z,{responseExample:'{\n  "code": 200,\n  "msg": "",\n  "data": [\n    {\n      "id": "11368",\n      "address": "4b1613e2501b770463a12e397b34d9cac0d9497c",\n      "hdPath": "m/1/1/60/0",\n      "encoding": 0,\n      "pubkey": "021855d461cf75ac6579d32a2af92d0dc26f0f0736ac766f8ad7894407ab360ffb"\n    }\n  ],\n  "success": true\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}x.isMDXComponent=!0}}]);