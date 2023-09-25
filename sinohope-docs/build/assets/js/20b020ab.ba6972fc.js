"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[6668],{25571:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>m,default:()=>y,frontMatter:()=>p,metadata:()=>h,toc:()=>g});var t=a(87462),s=(a(67294),a(3905)),i=a(26389),o=a(94891),r=(a(75190),a(47507)),d=a(24310),c=a(63303),l=(a(75035),a(85162));const p={id:"v-1-waas-mpc-web-3-sign-message",title:"\u6309\u5df2\u77e5\u7684\u89c4\u8303\u7b7e\u540d\u6d88\u606f\uff08EIP-191\u3001 EIP-712\uff09",description:"\u6309\u5df2\u77e5\u7684\u89c4\u8303\u7b7e\u540d\u6d88\u606f\uff08EIP-191\u3001 EIP-712\uff09",sidebar_label:"\u6309\u5df2\u77e5\u7684\u89c4\u8303\u7b7e\u540d\u6d88\u606f\uff08EIP-191\u3001 EIP-712\uff09",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Transaction APIs"],operationId:"/v1/waas/mpc/web3/sign_message","x-codeSamples":[{lang:"python",label:"python",source:'request(\n  "POST",\n  "/v1/waas/mpc/web3/sign_message/",\n  {\n    "requestId": "4242342,324234",\n    "chainSymbol": "ETH",\n    "hdPath": "m/1/1/60/0",\n    "signAlgorithm": "personal_sign",\n    "message": "232313c429aeda8bf786cf092224dddadbc0813f9f230b"\n  },\n  api_key, host\n)\n'},{lang:"go",label:"go",source:'Request("POST", "/v1/waas/mpc/web3/sign_message/", map[string]string{\n    "requestId": "4242342,324234",\n    "chainSymbol": "ETH",\n    "hdPath": "m/1/1/60/0",\n    "signAlgorithm": "personal_sign",\n    "message": "232313c429aeda8bf786cf092224dddadbc0813f9f230b"\n})\n'}],requestBody:{content:{"application/json":{schema:{required:["chainSymbol","hdPath","message","requestId","signAlgorithm"],type:"object",properties:{requestId:{type:"string",description:"\u8bf7\u6c42\u65b9\u4ea4\u6613\u7684requestId",example:"4242342,324234"},chainSymbol:{type:"string",description:"\u94fe",example:"ETH"},hdPath:{type:"string",description:"bip32\u3001bip44\u7684\u63a8\u5bfc\u8def\u5f84",example:"m/1/1/60/0"},signAlgorithm:{type:"string",description:"\u652f\u6301\u7b7e\u540d\u7b97\u6cd5: \uff08personal_sign\u3001signTypedData\u3001eth_signTypedData_v3\u3001eth_signTypedData_v4\uff09",example:"personal_sign"},message:{type:"string",description:"\u5f85\u7b7e\u540d\u7684\u5b57\u7b26\u4e32\u4fe1\u606f",example:"232313c429aeda8bf786cf092224dddadbc0813f9f230b"}}}}},required:!1},responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{code:{type:"integer",example:200},msg:{type:"string",example:""},data:{type:"object",properties:{sinoId:{type:"integer",description:"sinoId",example:2},messageHash:{type:"string",description:"\u7b7e\u540d\u4fe1\u606f\uff0c\u5f85\u7b7e\u540d\u7684\u6d88\u606fhash",example:"0x88665533e51d1939c18289e2a13c72a0348843f1ea97806d0902e4f4340595b9"}}},success:{type:"boolean"}},description:""}}}}},"x-codegen-request-body-name":"root",description:"\u6309\u5df2\u77e5\u7684\u89c4\u8303\u7b7e\u540d\u6d88\u606f\uff08EIP-191\u3001 EIP-712\uff09",extensions:[{key:"x-codegen-request-body-name",value:"root"}],method:"post",path:"/v1/waas/mpc/web3/sign_message",servers:[{url:"https://api.sinohope.com/"},{url:"https://api-sandbox.sinohope.com/"}],jsonRequestBodyExample:{requestId:"4242342,324234",chainSymbol:"ETH",hdPath:"m/1/1/60/0",signAlgorithm:"personal_sign",message:"232313c429aeda8bf786cf092224dddadbc0813f9f230b"},info:{title:"Sinohope WaaS API",version:"0.9.3",description:"# Common Descriptions of Parameters and Return Values \n\n## Unified Return Value Structure\n\n| Name | Description | \n| :-- | :-- |\n| code | Status code (200 for success) |\n| msg | Status description |\n| data | Response data |\n| success | Whether the request succeeded (true for success, false for failure) |\n\n## Common Error Code Definitions\n\nWhen an error occurs in Sinohope WaaS services, uniformly formatted data will be returned to the client:\n\n- `200`: Successful response. Refer to each API for the detailed response data.\n- `400`: Bad Request.\n- `401`: Unauthorized. Either API details are missing or invalid.\n- `403`: Forbidden - You do not have access to the requested resource.\n- `415`: Unsupported media type. You need to use application/json. \n- `500`: Sinohope internal error.\n\n### System Level Errors\n\n| Error Code | Description |\n| :-- | :-- |\n| 1001 | Unknown exception, please contact Sinohope customer service |\n| 1002 | Duplicate request |\n| 1004 | Invalid API Key |\n| 1005 | Signature verification failed |  \n| 1006 | IP call frequency restricted |\n| 1007 | No permission of the current API |\n| 1008 | Invalid IP address |\n| 1009 | Signature in the request header cannot be empty |\n| 1010 | Timestamp in the request header cannot be empty |\n| 1011 | Internal call exception |\n| 1012 | Invalid request, please check if there are missing headers |\n| 1013 | Signature failure |\n| 1014 | Unsupported request type (only GET and POST supported) |\n| 1015 | Missing signature parameter |\n\n### Parameter Level Errors\n\n| Error Code | Description |\n| :-- | :-- |\n| 2001 | The asset is not supported |\n| 2002 | The chain is not supported |\n| 2003 | Invalid input address |\n| 2004 | Transaction record does not exist |\n| 2005 | No permission |\n| 2006 | Abnormal transfer information (kyt check failed) | \n| 2007 | Miner fee too low |\n| 2008 | The to address is not an internal address (transfer protection) |\n| 2009 | Insufficient balance to pay transfer amount and gas fee |\n| 2010 | Insufficient gas (token transfer) | \n| 2011 | Insufficient available balance (token transfer) |\n| 2012 | Name cannot contain backslash  |\n| 2013 | Address not found for given path |\n| 2014 | Not enough gas |\n| 2015 | invalid input assetID |\n| 2020 | No token information |\n| 2097 | Invalid pageIndex, require pageIndex >=1 |  \n| 2098 | Invalid pageSize, require pageSize <=50 and >=1 |\n| 2099 | Missing required parameter |\n| 2101 | Specified wallet does not exist |\n| 2102 | Specified asset does not exist |\n| 2103 | Specified chainSymbol does not exist |\n| 2104 | Specified vault does not exist |\n| 2106 | The maximum number of single chain address subscriptions exceeds the limit (50) |\n| 2108 | Parameter type error |\n| 2109 | advancedEnabled must be 0 or 1 |\n| 2110 | algorithmType must be 0 or 1 |\n| 2111 | Must be less then 50 requestIds in one query |\n| 2112 | Must be less then 50 sinoIds in one query |\n| 2113 | signAlgorithm must be one of 'personal_sign, signTypedData, eth_signTypedData_v3, eth_signTypedData_v4' | \n| 2114 | The length of requestId is too long, the maximum is 120 |\n| 2115 | Incorrect message format, or incorrect signAlgorithm parameter |\n| 2116 | Wallet and organization information do not match |\n| 2117 | Wallet and vault information do not match |\n| 2118 | Vault and organization information do not match |\n| 2119 | Current chain does not support self-transfer |\n| 2120 | Chain information organization is not configured |\n| 2121 | chainSymbol does not match with chain |\n| 2122 | Wallet address information not found |\n| 2123 | The whitelist address verification fails |\n| 2124 | Transaction insertion into the database failed |\n\n\n### Business Level Errors\n\n| Error Code | Description |  \n| :-- | :-- |\n| 4001 | Build transaction failed |\n| 4002 | Broadcast failed |\n| 4003 | The transaction of current asset can not be accelerated |\n| 4004 | The transaction to be accelerated has been contained in blockchain or the nonce has been occupied |\n| 4005 | The transaction to be canceled has been contained in blockchain or the nonce has been occupied | \n| 4006 | MPC Node not set |\n| 4007 | DKG not done |  \n| 4008 | Cannot initiate wallet creation operation on the same vault at the same time |\n| 4009 | Wallet names cannot be the same under the same vault |\n| 4010 | The value of the count parameter does not match the length of walletInfos array |\n| 4011 | Wallet quantity limit |\n| 4014 | writing to mq failed |\n| 4015 | Transaction insertion into the database failed |\n| 4017 | The cancelled deal does not exist |\n| 4018 | The accelerated transaction status is no longer padding and the transaction cannot be accelerated |\n| 4019 | The deal accelerated by this transaction does not exist |\n\n## Data Dictionary \n\n### Transaction Fee Rate Levels\n\n| Code | Description |\n| :-- | :-- |\n| LOW | Low |\n| MIDDLE | Medium |\n| HIGH | High |\n\n### Transaction Status  \n\n| Code | Description |\n| :-- | :-- |\n| 0 | Transaction pending on secondary confirmation |\n| 1 | Transaction pending on signature |\n| 2 | Transaction pending | \n| 4 | Broadcast failed |\n| 5 | Transaction failed on blockchain |\n| 6 | Broadcast timeout |\n| 10 | Transaction success |\n| 11 | Transaction has been rollback |\n| 13 | Transaction has rejected |\n\n\n## Changelog\n\n| Version | Log | Date | Modifier |\n|-|-|-|-|\n| v0.9.0 | First version | 2023-08-04 | Owen |\n| v0.9.1 | Added new sections, fixed some APIs | 2023-08-22 | Owen |  \n| v0.9.2 | Quite many changes about transaction information, SO PLEASE JUST IGNORE THE OLD VERSIONS | 2023-09-05 | Owen |\n| v0.9.3 | Updates the request parameters of interfaces `/v1/call_back/transaction/notify` and `/v1/call_back/withdrawal/confirm` | 2023-09-05 | Owen |"},postman:{name:"\u6309\u5df2\u77e5\u7684\u89c4\u8303\u7b7e\u540d\u6d88\u606f\uff08EIP-191\u3001 EIP-712\uff09",description:{type:"text/plain"},url:{path:["v1","waas","mpc","web3","sign_message"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/develop/mpc-waas-api/sinohope-waas-api",custom_edit_url:null},m=void 0,h={unversionedId:"develop/mpc-waas-api/v-1-waas-mpc-web-3-sign-message",id:"develop/mpc-waas-api/v-1-waas-mpc-web-3-sign-message",title:"\u6309\u5df2\u77e5\u7684\u89c4\u8303\u7b7e\u540d\u6d88\u606f\uff08EIP-191\u3001 EIP-712\uff09",description:"\u6309\u5df2\u77e5\u7684\u89c4\u8303\u7b7e\u540d\u6d88\u606f\uff08EIP-191\u3001 EIP-712\uff09",source:"@site/docs/develop/mpc-waas-api/v-1-waas-mpc-web-3-sign-message.api.mdx",sourceDirName:"develop/mpc-waas-api",slug:"/develop/mpc-waas-api/v-1-waas-mpc-web-3-sign-message",permalink:"/docs/develop/mpc-waas-api/v-1-waas-mpc-web-3-sign-message",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"v-1-waas-mpc-web-3-sign-message",title:"\u6309\u5df2\u77e5\u7684\u89c4\u8303\u7b7e\u540d\u6d88\u606f\uff08EIP-191\u3001 EIP-712\uff09",description:"\u6309\u5df2\u77e5\u7684\u89c4\u8303\u7b7e\u540d\u6d88\u606f\uff08EIP-191\u3001 EIP-712\uff09",sidebar_label:"\u6309\u5df2\u77e5\u7684\u89c4\u8303\u7b7e\u540d\u6d88\u606f\uff08EIP-191\u3001 EIP-712\uff09",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Transaction APIs"],operationId:"/v1/waas/mpc/web3/sign_message","x-codeSamples":[{lang:"python",label:"python",source:'request(\n  "POST",\n  "/v1/waas/mpc/web3/sign_message/",\n  {\n    "requestId": "4242342,324234",\n    "chainSymbol": "ETH",\n    "hdPath": "m/1/1/60/0",\n    "signAlgorithm": "personal_sign",\n    "message": "232313c429aeda8bf786cf092224dddadbc0813f9f230b"\n  },\n  api_key, host\n)\n'},{lang:"go",label:"go",source:'Request("POST", "/v1/waas/mpc/web3/sign_message/", map[string]string{\n    "requestId": "4242342,324234",\n    "chainSymbol": "ETH",\n    "hdPath": "m/1/1/60/0",\n    "signAlgorithm": "personal_sign",\n    "message": "232313c429aeda8bf786cf092224dddadbc0813f9f230b"\n})\n'}],requestBody:{content:{"application/json":{schema:{required:["chainSymbol","hdPath","message","requestId","signAlgorithm"],type:"object",properties:{requestId:{type:"string",description:"\u8bf7\u6c42\u65b9\u4ea4\u6613\u7684requestId",example:"4242342,324234"},chainSymbol:{type:"string",description:"\u94fe",example:"ETH"},hdPath:{type:"string",description:"bip32\u3001bip44\u7684\u63a8\u5bfc\u8def\u5f84",example:"m/1/1/60/0"},signAlgorithm:{type:"string",description:"\u652f\u6301\u7b7e\u540d\u7b97\u6cd5: \uff08personal_sign\u3001signTypedData\u3001eth_signTypedData_v3\u3001eth_signTypedData_v4\uff09",example:"personal_sign"},message:{type:"string",description:"\u5f85\u7b7e\u540d\u7684\u5b57\u7b26\u4e32\u4fe1\u606f",example:"232313c429aeda8bf786cf092224dddadbc0813f9f230b"}}}}},required:!1},responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{code:{type:"integer",example:200},msg:{type:"string",example:""},data:{type:"object",properties:{sinoId:{type:"integer",description:"sinoId",example:2},messageHash:{type:"string",description:"\u7b7e\u540d\u4fe1\u606f\uff0c\u5f85\u7b7e\u540d\u7684\u6d88\u606fhash",example:"0x88665533e51d1939c18289e2a13c72a0348843f1ea97806d0902e4f4340595b9"}}},success:{type:"boolean"}},description:""}}}}},"x-codegen-request-body-name":"root",description:"\u6309\u5df2\u77e5\u7684\u89c4\u8303\u7b7e\u540d\u6d88\u606f\uff08EIP-191\u3001 EIP-712\uff09",extensions:[{key:"x-codegen-request-body-name",value:"root"}],method:"post",path:"/v1/waas/mpc/web3/sign_message",servers:[{url:"https://api.sinohope.com/"},{url:"https://api-sandbox.sinohope.com/"}],jsonRequestBodyExample:{requestId:"4242342,324234",chainSymbol:"ETH",hdPath:"m/1/1/60/0",signAlgorithm:"personal_sign",message:"232313c429aeda8bf786cf092224dddadbc0813f9f230b"},info:{title:"Sinohope WaaS API",version:"0.9.3",description:"# Common Descriptions of Parameters and Return Values \n\n## Unified Return Value Structure\n\n| Name | Description | \n| :-- | :-- |\n| code | Status code (200 for success) |\n| msg | Status description |\n| data | Response data |\n| success | Whether the request succeeded (true for success, false for failure) |\n\n## Common Error Code Definitions\n\nWhen an error occurs in Sinohope WaaS services, uniformly formatted data will be returned to the client:\n\n- `200`: Successful response. Refer to each API for the detailed response data.\n- `400`: Bad Request.\n- `401`: Unauthorized. Either API details are missing or invalid.\n- `403`: Forbidden - You do not have access to the requested resource.\n- `415`: Unsupported media type. You need to use application/json. \n- `500`: Sinohope internal error.\n\n### System Level Errors\n\n| Error Code | Description |\n| :-- | :-- |\n| 1001 | Unknown exception, please contact Sinohope customer service |\n| 1002 | Duplicate request |\n| 1004 | Invalid API Key |\n| 1005 | Signature verification failed |  \n| 1006 | IP call frequency restricted |\n| 1007 | No permission of the current API |\n| 1008 | Invalid IP address |\n| 1009 | Signature in the request header cannot be empty |\n| 1010 | Timestamp in the request header cannot be empty |\n| 1011 | Internal call exception |\n| 1012 | Invalid request, please check if there are missing headers |\n| 1013 | Signature failure |\n| 1014 | Unsupported request type (only GET and POST supported) |\n| 1015 | Missing signature parameter |\n\n### Parameter Level Errors\n\n| Error Code | Description |\n| :-- | :-- |\n| 2001 | The asset is not supported |\n| 2002 | The chain is not supported |\n| 2003 | Invalid input address |\n| 2004 | Transaction record does not exist |\n| 2005 | No permission |\n| 2006 | Abnormal transfer information (kyt check failed) | \n| 2007 | Miner fee too low |\n| 2008 | The to address is not an internal address (transfer protection) |\n| 2009 | Insufficient balance to pay transfer amount and gas fee |\n| 2010 | Insufficient gas (token transfer) | \n| 2011 | Insufficient available balance (token transfer) |\n| 2012 | Name cannot contain backslash \\ |\n| 2013 | Address not found for given path |\n| 2014 | Not enough gas |\n| 2015 | invalid input assetID |\n| 2020 | No token information |\n| 2097 | Invalid pageIndex, require pageIndex >=1 |  \n| 2098 | Invalid pageSize, require pageSize <=50 and >=1 |\n| 2099 | Missing required parameter |\n| 2101 | Specified wallet does not exist |\n| 2102 | Specified asset does not exist |\n| 2103 | Specified chainSymbol does not exist |\n| 2104 | Specified vault does not exist |\n| 2106 | The maximum number of single chain address subscriptions exceeds the limit (50) |\n| 2108 | Parameter type error |\n| 2109 | advancedEnabled must be 0 or 1 |\n| 2110 | algorithmType must be 0 or 1 |\n| 2111 | Must be less then 50 requestIds in one query |\n| 2112 | Must be less then 50 sinoIds in one query |\n| 2113 | signAlgorithm must be one of 'personal_sign, signTypedData, eth_signTypedData_v3, eth_signTypedData_v4' | \n| 2114 | The length of requestId is too long, the maximum is 120 |\n| 2115 | Incorrect message format, or incorrect signAlgorithm parameter |\n| 2116 | Wallet and organization information do not match |\n| 2117 | Wallet and vault information do not match |\n| 2118 | Vault and organization information do not match |\n| 2119 | Current chain does not support self-transfer |\n| 2120 | Chain information organization is not configured |\n| 2121 | chainSymbol does not match with chain |\n| 2122 | Wallet address information not found |\n| 2123 | The whitelist address verification fails |\n| 2124 | Transaction insertion into the database failed |\n\n\n### Business Level Errors\n\n| Error Code | Description |  \n| :-- | :-- |\n| 4001 | Build transaction failed |\n| 4002 | Broadcast failed |\n| 4003 | The transaction of current asset can not be accelerated |\n| 4004 | The transaction to be accelerated has been contained in blockchain or the nonce has been occupied |\n| 4005 | The transaction to be canceled has been contained in blockchain or the nonce has been occupied | \n| 4006 | MPC Node not set |\n| 4007 | DKG not done |  \n| 4008 | Cannot initiate wallet creation operation on the same vault at the same time |\n| 4009 | Wallet names cannot be the same under the same vault |\n| 4010 | The value of the count parameter does not match the length of walletInfos array |\n| 4011 | Wallet quantity limit |\n| 4014 | writing to mq failed |\n| 4015 | Transaction insertion into the database failed |\n| 4017 | The cancelled deal does not exist |\n| 4018 | The accelerated transaction status is no longer padding and the transaction cannot be accelerated |\n| 4019 | The deal accelerated by this transaction does not exist |\n\n## Data Dictionary \n\n### Transaction Fee Rate Levels\n\n| Code | Description |\n| :-- | :-- |\n| LOW | Low |\n| MIDDLE | Medium |\n| HIGH | High |\n\n### Transaction Status  \n\n| Code | Description |\n| :-- | :-- |\n| 0 | Transaction pending on secondary confirmation |\n| 1 | Transaction pending on signature |\n| 2 | Transaction pending | \n| 4 | Broadcast failed |\n| 5 | Transaction failed on blockchain |\n| 6 | Broadcast timeout |\n| 10 | Transaction success |\n| 11 | Transaction has been rollback |\n| 13 | Transaction has rejected |\n\n\n## Changelog\n\n| Version | Log | Date | Modifier |\n|-|-|-|-|\n| v0.9.0 | First version | 2023-08-04 | Owen |\n| v0.9.1 | Added new sections, fixed some APIs | 2023-08-22 | Owen |  \n| v0.9.2 | Quite many changes about transaction information, SO PLEASE JUST IGNORE THE OLD VERSIONS | 2023-09-05 | Owen |\n| v0.9.3 | Updates the request parameters of interfaces `/v1/call_back/transaction/notify` and `/v1/call_back/withdrawal/confirm` | 2023-09-05 | Owen |"},postman:{name:"\u6309\u5df2\u77e5\u7684\u89c4\u8303\u7b7e\u540d\u6d88\u606f\uff08EIP-191\u3001 EIP-712\uff09",description:{type:"text/plain"},url:{path:["v1","waas","mpc","web3","sign_message"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/develop/mpc-waas-api/sinohope-waas-api",custom_edit_url:null},sidebar:"mpcApiSidebar",previous:{title:"\u6839\u636etxHash\u67e5\u8be2\u4ea4\u6613\u5217\u8868",permalink:"/docs/develop/mpc-waas-api/v-1-waas-mpc-transaction-transactions-by-tx-hash"},next:{title:"Advanced APIs",permalink:"/docs/develop/mpc-waas-api/advanced-ap-is"}},u={},g=[{value:"\u6309\u5df2\u77e5\u7684\u89c4\u8303\u7b7e\u540d\u6d88\u606f\uff08EIP-191\u3001 EIP-712\uff09",id:"\u6309\u5df2\u77e5\u7684\u89c4\u8303\u7b7e\u540d\u6d88\u606feip-191-eip-712",level:2}],f={toc:g},b="wrapper";function y(e){let{components:n,...a}=e;return(0,s.kt)(b,(0,t.Z)({},f,a,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"\u6309\u5df2\u77e5\u7684\u89c4\u8303\u7b7e\u540d\u6d88\u606feip-191-eip-712"},"\u6309\u5df2\u77e5\u7684\u89c4\u8303\u7b7e\u540d\u6d88\u606f\uff08EIP-191\u3001 EIP-712\uff09"),(0,s.kt)("p",null,"\u6309\u5df2\u77e5\u7684\u89c4\u8303\u7b7e\u540d\u6d88\u606f\uff08EIP-191\u3001 EIP-712\uff09"),(0,s.kt)(o.Z,{mdxType:"MimeTabs"},(0,s.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"requestId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u8bf7\u6c42\u65b9\u4ea4\u6613\u7684requestId",example:"4242342,324234"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"chainSymbol",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u94fe",example:"ETH"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"hdPath",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"bip32\u3001bip44\u7684\u63a8\u5bfc\u8def\u5f84",example:"m/1/1/60/0"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"signAlgorithm",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u652f\u6301\u7b7e\u540d\u7b97\u6cd5: \uff08personal_sign\u3001signTypedData\u3001eth_signTypedData_v3\u3001eth_signTypedData_v4\uff09",example:"personal_sign"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"message",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u5f85\u7b7e\u540d\u7684\u5b57\u7b26\u4e32\u4fe1\u606f",example:"232313c429aeda8bf786cf092224dddadbc0813f9f230b"},mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)(i.Z,{mdxType:"ApiTabs"},(0,s.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"successful operation")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{mdxType:"SchemaTabs"},(0,s.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"code",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",example:200},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"msg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:""},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"data"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"sinoId",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"sinoId",example:2},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"messageHash",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u7b7e\u540d\u4fe1\u606f\uff0c\u5f85\u7b7e\u540d\u7684\u6d88\u606fhash",example:"0x88665533e51d1939c18289e2a13c72a0348843f1ea97806d0902e4f4340595b9"},mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{collapsible:!1,name:"success",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"})))),(0,s.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(r.Z,{responseExample:'{\n  "code": 200,\n  "msg": "",\n  "data": {\n    "sinoId": 2,\n    "messageHash": "0x88665533e51d1939c18289e2a13c72a0348843f1ea97806d0902e4f4340595b9"\n  },\n  "success": true\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}y.isMDXComponent=!0}}]);