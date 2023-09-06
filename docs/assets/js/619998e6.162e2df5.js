"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[4248],{5004:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>h,contentTitle:()=>m,default:()=>b,frontMatter:()=>p,metadata:()=>u,toc:()=>v});var t=a(87462),s=(a(67294),a(3905)),o=a(26389),i=a(94891),r=(a(75190),a(47507)),l=a(24310),d=a(63303),c=(a(75035),a(85162));const p={id:"v-1-waas-mpc-wallet-advance-update-wallet",title:"\u66f4\u65b0\u94b1\u5305\u5c5e\u6027\uff08\u9ad8\u7ea7\u529f\u80fd\u5f00\u542f\u3001\u5173\u95ed\uff09",description:"\u66f4\u65b0\u94b1\u5305\u5c5e\u6027\uff08\u9ad8\u7ea7\u529f\u80fd\u5f00\u542f\u3001\u5173\u95ed\uff09",sidebar_label:"\u66f4\u65b0\u94b1\u5305\u5c5e\u6027\uff08\u9ad8\u7ea7\u529f\u80fd\u5f00\u542f\u3001\u5173\u95ed\uff09",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Advanced APIs"],operationId:"/v1/waas/mpc/wallet/advance/update_wallet","x-codeSamples":[{lang:"python",label:"python",source:'request(\n  "POST",\n  "/v1/waas/mpc/wallet/advance/update_wallet/",\n  {\n    "vaultId": "450632968208222",\n    "walletId": 413497079388421,\n    "advancedEnabled": 1\n  },\n  api_key, host\n)\n'},{lang:"go",label:"go",source:'Request("POST", "/v1/waas/mpc/wallet/advance/update_wallet/", map[string]string{\n    "vaultId": "450632968208222",\n    "walletId": 413497079388421,\n    "advancedEnabled": 1\n})\n'}],requestBody:{content:{"application/json":{schema:{required:["vaultId","advancedEnabled","walletId"],type:"object",properties:{vaultId:{type:"string",description:"\u91d1\u5e93id",example:"450632968208222"},walletId:{type:"string",description:"\u94b1\u5305id\n<p> \u5f53\u6307\u5b9a\u4e86\u4ee5\u540e\u5c31\u662f\u6839\u636e\u94b1\u5305\u5f00\u5173 <p/>",example:"413497079388421"},advancedEnabled:{type:"integer",description:"\u9ad8\u7ea7\u529f\u80fd\u5f00\u5173 (\u5173\uff1a0\uff0c\u5f00\uff1a1)\n<p> \u5f00\u4e86\u4ee5\u540e\u652f\u6301\u7684\u529f\u80fd: \u6839\u636e\u6307\u5b9a\u7684\u8def\u5f84\u521b\u5efa\u5730\u5740 ,\u539f\u59cb\u6570\u636e\u7b7e\u540d <p/>",example:1}}}}},required:!1},responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{code:{type:"integer",example:200},msg:{type:"string",example:""},data:{type:"object",properties:{updateWallet:{type:"boolean",description:"\u4fee\u6539\u7ed3\u679c",example:!0}}},success:{type:"boolean"}}}}}}},"x-codegen-request-body-name":"root",description:"\u66f4\u65b0\u94b1\u5305\u5c5e\u6027\uff08\u9ad8\u7ea7\u529f\u80fd\u5f00\u542f\u3001\u5173\u95ed\uff09",extensions:[{key:"x-codegen-request-body-name",value:"root"}],method:"post",path:"/v1/waas/mpc/wallet/advance/update_wallet",servers:[{url:"https://api.sinohope.com/"},{url:"https://api-sandbox.sinohope.com/"}],jsonRequestBodyExample:{vaultId:"450632968208222",walletId:"413497079388421",advancedEnabled:1},info:{title:"Sinohope WaaS API",version:"0.9.2",description:"# Common Descriptions of Parameters and Return Values \n\n## Unified Return Value Structure\n\n| Name | Description | \n| :-- | :-- |\n| code | Status code (200 for success) |\n| msg | Status description |\n| data | Response data |\n| success | Whether the request succeeded (true for success, false for failure) |\n\n## Common Error Code Definitions\n\nWhen an error occurs in Sinohope WaaS services, uniformly formatted data will be returned to the client:\n\n- `200`: Successful response. Refer to each API for the detailed response data.\n- `400`: Bad Request.\n- `401`: Unauthorized. Either API details are missing or invalid.\n- `403`: Forbidden - You do not have access to the requested resource.\n- `415`: Unsupported media type. You need to use application/json. \n- `500`: Sinohope internal error.\n\n### System Level Errors\n\n| Error Code | Description |\n| :-- | :-- |\n| 1001 | Unknown exception, please contact Sinohope customer service |\n| 1002 | Duplicate request |\n| 1004 | Invalid API Key |\n| 1005 | Signature verification failed |  \n| 1006 | IP call frequency restricted |\n| 1007 | No permission of the current API |\n| 1008 | Invalid IP address |\n| 1009 | Signature in the request header cannot be empty |\n| 1010 | Timestamp in the request header cannot be empty |\n| 1011 | Internal call exception |\n| 1012 | Invalid request, please check if there are missing headers |\n| 1013 | Signature failure |\n| 1014 | Unsupported request type (only GET and POST supported) |\n| 1015 | Missing signature parameter |\n\n### Parameter Level Errors\n\n| Error Code | Description |\n| :-- | :-- |\n| 2001 | The asset is not supported |\n| 2002 | The chain is not supported |\n| 2003 | Invalid input address |\n| 2004 | Transaction record does not exist |\n| 2005 | No permission |\n| 2006 | Abnormal transfer information (kyt check failed) | \n| 2007 | Miner fee too low |\n| 2008 | The to address is not an internal address (transfer protection) |\n| 2009 | Insufficient balance to pay transfer amount and gas fee |\n| 2010 | Insufficient gas (token transfer) | \n| 2011 | Insufficient available balance (token transfer) |\n| 2012 | Name cannot contain backslash  |\n| 2013 | Address not found for given path |\n| 2097 | Invalid pageIndex, require pageIndex >=1 |  \n| 2098 | Invalid pageSize, require pageSize <=50 and >=1 |\n| 2099 | Missing required parameter |\n| 2100 | pageSize must be greater than 0 |\n| 2101 | Specified wallet does not exist |\n| 2102 | Specified asset does not exist |\n| 2103 | Specified chainSymbol does not exist |\n| 2104 | Specified vault does not exist |\n| 2105 | Page size exceeds maximum limit (50) |\n| 2106 | The maximum number of single chain address subscriptions exceeds the limit (50) |\n| 2107 | pageIndex minimum is 1 |\n| 2108 | Parameter type error |\n| 2109 | advancedEnabled must be 0 or 1 |\n| 2110 | algorithmType must be 0 or 1 |\n| 2111 | Must be less then 50 requestIds in one query |\n| 2112 | Must be less then 50 sinoIds in one query |\n| 2113 | signAlgorithm must be one of 'personal_sign, signTypedData, eth_signTypedData_v3, eth_signTypedData_v4' | \n| 2114 | The length of requestId is too long, the maximum is 120 |\n| 2115 | Incorrect message format, or incorrect signAlgorithm parameter |\n| 2116 | Wallet and organization information do not match |\n| 2117 | Wallet and vault information do not match |\n| 2118 | Vault and organization information do not match |\n\n\n### Business Level Errors\n\n| Error Code | Description |  \n| :-- | :-- |\n| 4001 | Build transaction failed |\n| 4002 | Broadcast failed |\n| 4003 | The transaction of current asset can not be accelerated |\n| 4004 | The transaction to be accelerated has been contained in blockchain or the nonce has been occupied |\n| 4005 | The transaction to be canceled has been contained in blockchain or the nonce has been occupied | \n| 4006 | MPC Node not set |\n| 4007 | DKG not done |  \n| 4008 | Cannot initiate wallet creation operation on the same vault at the same time |\n| 4009 | Wallet names cannot be the same under the same vault |\n| 4010 | The value of the count parameter does not match the length of walletInfos array |\n| 4011 | Wallet quantity limit |\n\n## Data Dictionary \n\n### Transaction Fee Rate Levels\n\n| Code | Description |\n| :-- | :-- |\n| LOW | Low |\n| MIDDLE | Medium |\n| HIGH | High |\n\n### Transaction Status  \n\n| Code | Description |\n| :-- | :-- |\n| 0 | Transaction pending on secondary confirmation |\n| 1 | Transaction pending on signature |\n| 2 | Transaction pending | \n| 4 | Broadcast failed |\n| 5 | Transaction failed on blockchain |\n| 6 | Broadcast timeout |\n| 10 | Transaction success |\n| 11 | Transaction has been rollback |\n| 13 | Transaction has rejected |\n\n\n## Changelog\n\n| Version | Log | Date | Modifier |\n|-|-|-|-|\n| v0.9.0 | First version | 2023-08-04 | Owen |\n| v0.9.1 | Added new sections, fixed some APIs | 2023-08-22 | Owen |  \n| v0.9.2 | Quite many changes about transaction information, SO PLEASE JUST IGNORE THE OLD VERSIONS | 2023-09-05 | Owen |"},postman:{name:"\u66f4\u65b0\u94b1\u5305\u5c5e\u6027\uff08\u9ad8\u7ea7\u529f\u80fd\u5f00\u542f\u3001\u5173\u95ed\uff09",description:{type:"text/plain"},url:{path:["v1","waas","mpc","wallet","advance","update_wallet"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/develop/mpc-waas-api/sinohope-waas-api",custom_edit_url:null},m=void 0,u={unversionedId:"develop/mpc-waas-api/v-1-waas-mpc-wallet-advance-update-wallet",id:"develop/mpc-waas-api/v-1-waas-mpc-wallet-advance-update-wallet",title:"\u66f4\u65b0\u94b1\u5305\u5c5e\u6027\uff08\u9ad8\u7ea7\u529f\u80fd\u5f00\u542f\u3001\u5173\u95ed\uff09",description:"\u66f4\u65b0\u94b1\u5305\u5c5e\u6027\uff08\u9ad8\u7ea7\u529f\u80fd\u5f00\u542f\u3001\u5173\u95ed\uff09",source:"@site/docs/develop/mpc-waas-api/v-1-waas-mpc-wallet-advance-update-wallet.api.mdx",sourceDirName:"develop/mpc-waas-api",slug:"/develop/mpc-waas-api/v-1-waas-mpc-wallet-advance-update-wallet",permalink:"/docs/develop/mpc-waas-api/v-1-waas-mpc-wallet-advance-update-wallet",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"v-1-waas-mpc-wallet-advance-update-wallet",title:"\u66f4\u65b0\u94b1\u5305\u5c5e\u6027\uff08\u9ad8\u7ea7\u529f\u80fd\u5f00\u542f\u3001\u5173\u95ed\uff09",description:"\u66f4\u65b0\u94b1\u5305\u5c5e\u6027\uff08\u9ad8\u7ea7\u529f\u80fd\u5f00\u542f\u3001\u5173\u95ed\uff09",sidebar_label:"\u66f4\u65b0\u94b1\u5305\u5c5e\u6027\uff08\u9ad8\u7ea7\u529f\u80fd\u5f00\u542f\u3001\u5173\u95ed\uff09",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Advanced APIs"],operationId:"/v1/waas/mpc/wallet/advance/update_wallet","x-codeSamples":[{lang:"python",label:"python",source:'request(\n  "POST",\n  "/v1/waas/mpc/wallet/advance/update_wallet/",\n  {\n    "vaultId": "450632968208222",\n    "walletId": 413497079388421,\n    "advancedEnabled": 1\n  },\n  api_key, host\n)\n'},{lang:"go",label:"go",source:'Request("POST", "/v1/waas/mpc/wallet/advance/update_wallet/", map[string]string{\n    "vaultId": "450632968208222",\n    "walletId": 413497079388421,\n    "advancedEnabled": 1\n})\n'}],requestBody:{content:{"application/json":{schema:{required:["vaultId","advancedEnabled","walletId"],type:"object",properties:{vaultId:{type:"string",description:"\u91d1\u5e93id",example:"450632968208222"},walletId:{type:"string",description:"\u94b1\u5305id\n<p> \u5f53\u6307\u5b9a\u4e86\u4ee5\u540e\u5c31\u662f\u6839\u636e\u94b1\u5305\u5f00\u5173 <p/>",example:"413497079388421"},advancedEnabled:{type:"integer",description:"\u9ad8\u7ea7\u529f\u80fd\u5f00\u5173 (\u5173\uff1a0\uff0c\u5f00\uff1a1)\n<p> \u5f00\u4e86\u4ee5\u540e\u652f\u6301\u7684\u529f\u80fd: \u6839\u636e\u6307\u5b9a\u7684\u8def\u5f84\u521b\u5efa\u5730\u5740 ,\u539f\u59cb\u6570\u636e\u7b7e\u540d <p/>",example:1}}}}},required:!1},responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{code:{type:"integer",example:200},msg:{type:"string",example:""},data:{type:"object",properties:{updateWallet:{type:"boolean",description:"\u4fee\u6539\u7ed3\u679c",example:!0}}},success:{type:"boolean"}}}}}}},"x-codegen-request-body-name":"root",description:"\u66f4\u65b0\u94b1\u5305\u5c5e\u6027\uff08\u9ad8\u7ea7\u529f\u80fd\u5f00\u542f\u3001\u5173\u95ed\uff09",extensions:[{key:"x-codegen-request-body-name",value:"root"}],method:"post",path:"/v1/waas/mpc/wallet/advance/update_wallet",servers:[{url:"https://api.sinohope.com/"},{url:"https://api-sandbox.sinohope.com/"}],jsonRequestBodyExample:{vaultId:"450632968208222",walletId:"413497079388421",advancedEnabled:1},info:{title:"Sinohope WaaS API",version:"0.9.2",description:"# Common Descriptions of Parameters and Return Values \n\n## Unified Return Value Structure\n\n| Name | Description | \n| :-- | :-- |\n| code | Status code (200 for success) |\n| msg | Status description |\n| data | Response data |\n| success | Whether the request succeeded (true for success, false for failure) |\n\n## Common Error Code Definitions\n\nWhen an error occurs in Sinohope WaaS services, uniformly formatted data will be returned to the client:\n\n- `200`: Successful response. Refer to each API for the detailed response data.\n- `400`: Bad Request.\n- `401`: Unauthorized. Either API details are missing or invalid.\n- `403`: Forbidden - You do not have access to the requested resource.\n- `415`: Unsupported media type. You need to use application/json. \n- `500`: Sinohope internal error.\n\n### System Level Errors\n\n| Error Code | Description |\n| :-- | :-- |\n| 1001 | Unknown exception, please contact Sinohope customer service |\n| 1002 | Duplicate request |\n| 1004 | Invalid API Key |\n| 1005 | Signature verification failed |  \n| 1006 | IP call frequency restricted |\n| 1007 | No permission of the current API |\n| 1008 | Invalid IP address |\n| 1009 | Signature in the request header cannot be empty |\n| 1010 | Timestamp in the request header cannot be empty |\n| 1011 | Internal call exception |\n| 1012 | Invalid request, please check if there are missing headers |\n| 1013 | Signature failure |\n| 1014 | Unsupported request type (only GET and POST supported) |\n| 1015 | Missing signature parameter |\n\n### Parameter Level Errors\n\n| Error Code | Description |\n| :-- | :-- |\n| 2001 | The asset is not supported |\n| 2002 | The chain is not supported |\n| 2003 | Invalid input address |\n| 2004 | Transaction record does not exist |\n| 2005 | No permission |\n| 2006 | Abnormal transfer information (kyt check failed) | \n| 2007 | Miner fee too low |\n| 2008 | The to address is not an internal address (transfer protection) |\n| 2009 | Insufficient balance to pay transfer amount and gas fee |\n| 2010 | Insufficient gas (token transfer) | \n| 2011 | Insufficient available balance (token transfer) |\n| 2012 | Name cannot contain backslash \\ |\n| 2013 | Address not found for given path |\n| 2097 | Invalid pageIndex, require pageIndex >=1 |  \n| 2098 | Invalid pageSize, require pageSize <=50 and >=1 |\n| 2099 | Missing required parameter |\n| 2100 | pageSize must be greater than 0 |\n| 2101 | Specified wallet does not exist |\n| 2102 | Specified asset does not exist |\n| 2103 | Specified chainSymbol does not exist |\n| 2104 | Specified vault does not exist |\n| 2105 | Page size exceeds maximum limit (50) |\n| 2106 | The maximum number of single chain address subscriptions exceeds the limit (50) |\n| 2107 | pageIndex minimum is 1 |\n| 2108 | Parameter type error |\n| 2109 | advancedEnabled must be 0 or 1 |\n| 2110 | algorithmType must be 0 or 1 |\n| 2111 | Must be less then 50 requestIds in one query |\n| 2112 | Must be less then 50 sinoIds in one query |\n| 2113 | signAlgorithm must be one of 'personal_sign, signTypedData, eth_signTypedData_v3, eth_signTypedData_v4' | \n| 2114 | The length of requestId is too long, the maximum is 120 |\n| 2115 | Incorrect message format, or incorrect signAlgorithm parameter |\n| 2116 | Wallet and organization information do not match |\n| 2117 | Wallet and vault information do not match |\n| 2118 | Vault and organization information do not match |\n\n\n### Business Level Errors\n\n| Error Code | Description |  \n| :-- | :-- |\n| 4001 | Build transaction failed |\n| 4002 | Broadcast failed |\n| 4003 | The transaction of current asset can not be accelerated |\n| 4004 | The transaction to be accelerated has been contained in blockchain or the nonce has been occupied |\n| 4005 | The transaction to be canceled has been contained in blockchain or the nonce has been occupied | \n| 4006 | MPC Node not set |\n| 4007 | DKG not done |  \n| 4008 | Cannot initiate wallet creation operation on the same vault at the same time |\n| 4009 | Wallet names cannot be the same under the same vault |\n| 4010 | The value of the count parameter does not match the length of walletInfos array |\n| 4011 | Wallet quantity limit |\n\n## Data Dictionary \n\n### Transaction Fee Rate Levels\n\n| Code | Description |\n| :-- | :-- |\n| LOW | Low |\n| MIDDLE | Medium |\n| HIGH | High |\n\n### Transaction Status  \n\n| Code | Description |\n| :-- | :-- |\n| 0 | Transaction pending on secondary confirmation |\n| 1 | Transaction pending on signature |\n| 2 | Transaction pending | \n| 4 | Broadcast failed |\n| 5 | Transaction failed on blockchain |\n| 6 | Broadcast timeout |\n| 10 | Transaction success |\n| 11 | Transaction has been rollback |\n| 13 | Transaction has rejected |\n\n\n## Changelog\n\n| Version | Log | Date | Modifier |\n|-|-|-|-|\n| v0.9.0 | First version | 2023-08-04 | Owen |\n| v0.9.1 | Added new sections, fixed some APIs | 2023-08-22 | Owen |  \n| v0.9.2 | Quite many changes about transaction information, SO PLEASE JUST IGNORE THE OLD VERSIONS | 2023-09-05 | Owen |"},postman:{name:"\u66f4\u65b0\u94b1\u5305\u5c5e\u6027\uff08\u9ad8\u7ea7\u529f\u80fd\u5f00\u542f\u3001\u5173\u95ed\uff09",description:{type:"text/plain"},url:{path:["v1","waas","mpc","wallet","advance","update_wallet"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/develop/mpc-waas-api/sinohope-waas-api",custom_edit_url:null},sidebar:"mpcApiSidebar",previous:{title:"\u6839\u636e\u6307\u5b9a\u7684\u8def\u5f84\u521b\u5efa\u5730\u5740",permalink:"/docs/develop/mpc-waas-api/v-1-waas-mpc-wallet-advance-gen-address-by-path"},next:{title:"MPC Node APIs",permalink:"/docs/develop/mpc-waas-api/mpc-node-ap-is"}},h={},v=[{value:"\u66f4\u65b0\u94b1\u5305\u5c5e\u6027\uff08\u9ad8\u7ea7\u529f\u80fd\u5f00\u542f\u3001\u5173\u95ed\uff09",id:"\u66f4\u65b0\u94b1\u5305\u5c5e\u6027\u9ad8\u7ea7\u529f\u80fd\u5f00\u542f\u5173\u95ed",level:2}],g={toc:v},f="wrapper";function b(e){let{components:n,...a}=e;return(0,s.kt)(f,(0,t.Z)({},g,a,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"\u66f4\u65b0\u94b1\u5305\u5c5e\u6027\u9ad8\u7ea7\u529f\u80fd\u5f00\u542f\u5173\u95ed"},"\u66f4\u65b0\u94b1\u5305\u5c5e\u6027\uff08\u9ad8\u7ea7\u529f\u80fd\u5f00\u542f\u3001\u5173\u95ed\uff09"),(0,s.kt)("p",null,"\u66f4\u65b0\u94b1\u5305\u5c5e\u6027\uff08\u9ad8\u7ea7\u529f\u80fd\u5f00\u542f\u3001\u5173\u95ed\uff09"),(0,s.kt)(i.Z,{mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"vaultId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u91d1\u5e93id",example:"450632968208222"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"walletId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u94b1\u5305id\n<p> \u5f53\u6307\u5b9a\u4e86\u4ee5\u540e\u5c31\u662f\u6839\u636e\u94b1\u5305\u5f00\u5173 <p/>",example:"413497079388421"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"advancedEnabled",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"\u9ad8\u7ea7\u529f\u80fd\u5f00\u5173 (\u5173\uff1a0\uff0c\u5f00\uff1a1)\n<p> \u5f00\u4e86\u4ee5\u540e\u652f\u6301\u7684\u529f\u80fd: \u6839\u636e\u6307\u5b9a\u7684\u8def\u5f84\u521b\u5efa\u5730\u5740 ,\u539f\u59cb\u6570\u636e\u7b7e\u540d <p/>",example:1},mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)(o.Z,{mdxType:"ApiTabs"},(0,s.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"successful operation")),(0,s.kt)("div",null,(0,s.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.Z,{mdxType:"SchemaTabs"},(0,s.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"code",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",example:200},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"msg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:""},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"data"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"updateWallet",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"\u4fee\u6539\u7ed3\u679c",example:!0},mdxType:"SchemaItem"})))),(0,s.kt)(l.Z,{collapsible:!1,name:"success",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"})))),(0,s.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(r.Z,{responseExample:'{\n  "code": 200,\n  "msg": "",\n  "data": {\n    "updateWallet": true\n  },\n  "success": true\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);