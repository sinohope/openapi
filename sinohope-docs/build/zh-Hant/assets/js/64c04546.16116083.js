"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[6591],{42572:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>m,default:()=>y,frontMatter:()=>p,metadata:()=>u,toc:()=>f});var a=t(87462),i=(t(67294),t(3905)),o=t(26389),s=t(94891),r=(t(75190),t(47507)),c=t(24310),d=t(63303),l=(t(75035),t(85162));const p={id:"v-1-call-back-transaction-notify",title:"\u4ea4\u6613\u901a\u77e5",description:"\u4ea4\u6613\u4e0a\u94fe\u6210\u529f\u540e\uff0c\u63a8\u9001\u786e\u8ba4\u6570\u53d8\u5316",sidebar_label:"\u4ea4\u6613\u901a\u77e5",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Callback APIs"],operationId:"/v1/call_back/transaction/notify","x-codeSamples":[{lang:"python",label:"python",source:'request(\n  "POST",\n  "/v1/call_back/transaction/notify/",\n  {\n    "requestType": 1,\n    "requestId": "413497079388421",\n    "requestDetail": "{\n      "txHash":"my7EznNDoHwCyLZiXV3PDxzoGhHiuY3Btc5Rof9FDnZzXTpxpqxXzdiujNBUigbEjgiDPiSWqj1p3eY1bJ3WNdZ",\n      "nonce":"nonce",\n      "blockHash":"\u5757hash",\n      "blockHeight":"\u5757\u9ad8\u5ea6",\n      "confirmed_number":6,\n      "walletId": "52321312",\n      "chainSymbol": "ETH",\n      "assetId": "USDC_ETH",\n      "from": "0xc429aeda8bf786cf092224dddadbc0813f9f230b",\n      "to": "0x546A62c54F50D57D30478C8C275360f20239A23E",\n      "toTag": "32143",\n      "amount": "1200000000000000",\n      "fee": "1000000",\n      "gasPrice": "13250000",\n      "gasLimit": "21000"\n    }"\n  },\n  api_key, host\n)\n'},{lang:"go",label:"go",source:'Request("POST", "/v1/call_back/transaction/notify/", map[string]string{\n    "requestType": 1,\n    "requestId": "413497079388421",\n    "requestDetail": "{\n      "txHash":"my7EznNDoHwCyLZiXV3PDxzoGhHiuY3Btc5Rof9FDnZzXTpxpqxXzdiujNBUigbEjgiDPiSWqj1p3eY1bJ3WNdZ",\n      "nonce":"nonce",\n      "blockHash":"\u5757hash",\n      "blockHeight":"\u5757\u9ad8\u5ea6",\n      "confirmed_number":6,\n      "walletId": "52321312",\n      "chainSymbol": "ETH",\n      "assetId": "USDC_ETH",\n      "from": "0xc429aeda8bf786cf092224dddadbc0813f9f230b",\n      "to": "0x546A62c54F50D57D30478C8C275360f20239A23E",\n      "toTag": "32143",\n      "amount": "1200000000000000",\n      "fee": "1000000",\n      "gasPrice": "13250000",\n      "gasLimit": "21000"\n    }"\n}) \n'}],description:"\u4ea4\u6613\u4e0a\u94fe\u6210\u529f\u540e\uff0c\u63a8\u9001\u786e\u8ba4\u6570\u53d8\u5316",requestBody:{content:{"application/json":{schema:{required:["requestDetail","requestId","requestType"],type:"object",properties:{requestType:{type:"integer",description:"\u56de\u8c03\u8bf7\u6c42\u7c7b\u578b (\u5145\u503c\uff1a1\uff0c\u63d0\u73b0\uff1a2)",example:1},requestId:{type:"string",description:"\u8bf7\u6c42\u7684\u552f\u4e00id,\u591a\u6b21\u8c03\u7528\u4e0d\u53d8",example:"413497079388421"},requestDetail:{type:"string",description:"\u56de\u8c03\u8bf7\u6c42\u7684\u8be6\u7ec6\u4fe1\u606f\uff1b\u6bcf\u79cd\u7c7b\u578b\u7684\u56de\u8c03\u8bf7\u6c42\u5bf9\u5e94\u4e8e\u4e0d\u540c\u7684requestDetail\u7ed3\u6784\uff1b\u683c\u5f0f\u4e3a\u5e8f\u5217\u5316\u7684 JSON \u5b57\u7b26\u4e32",example:{txHash:"my7EznNDoHwCyLZiXV3PDxzoGhHiuY3Btc5Rof9FDnZzXTpxpqxXzdiujNBUigbEjgiDPiSWqj1p3eY1bJ3WNdZ",nonce:"nonce",blockHash:"\u5757hash",blockHeight:"\u5757\u9ad8\u5ea6",confirmed_number:6,walletId:"52321312",chainSymbol:"ETH",assetId:"USDC_ETH",from:"0xc429aeda8bf786cf092224dddadbc0813f9f230b",to:"0x546A62c54F50D57D30478C8C275360f20239A23E",toTag:"32143",amount:"1200000000000000",fee:"1000000",gasPrice:"13250000",gasLimit:"21000"}},extraInfo:{type:"string",description:"\u4e0e\u56de\u8c03\u8bf7\u6c42\u76f8\u5173\u7684\u5176\u4ed6\u4fe1\u606f\uff1b\u6bcf\u79cd\u7c7b\u578b\u7684\u56de\u8c03\u8bf7\u6c42\u5bf9\u5e94\u4e8e\u4e0d\u540c\u7684extra_info\u7ed3\u6784\uff1b\u683c\u5f0f\u4e3a\u5e8f\u5217\u5316 JSON \u5b57\u7b26\u4e32"}}}}},required:!1},responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{code:{type:"integer",example:200},requestId:{type:"string",description:"\u8bf7\u6c42\u7684\u552f\u4e00id,\u591a\u6b21\u8c03\u7528\u4e0d\u53d8",example:"431431431431431"},message:{type:"string",description:"\u9519\u8bef\u4fe1\u606f",example:""}}}}}}},"x-codegen-request-body-name":"root",extensions:[{key:"x-codegen-request-body-name",value:"root"}],method:"post",path:"/v1/call_back/transaction/notify",servers:[{url:"https://your.callback.url/"}],jsonRequestBodyExample:{requestType:1,requestId:"413497079388421",requestDetail:{txHash:"my7EznNDoHwCyLZiXV3PDxzoGhHiuY3Btc5Rof9FDnZzXTpxpqxXzdiujNBUigbEjgiDPiSWqj1p3eY1bJ3WNdZ",nonce:"nonce",blockHash:"\u5757hash",blockHeight:"\u5757\u9ad8\u5ea6",confirmed_number:6,walletId:"52321312",chainSymbol:"ETH",assetId:"USDC_ETH",from:"0xc429aeda8bf786cf092224dddadbc0813f9f230b",to:"0x546A62c54F50D57D30478C8C275360f20239A23E",toTag:"32143",amount:"1200000000000000",fee:"1000000",gasPrice:"13250000",gasLimit:"21000"},extraInfo:"string"},info:{title:"Sinohope WaaS API",version:"0.9.2",description:"# Common Descriptions of Parameters and Return Values \n\n## Unified Return Value Structure\n\n| Name | Description | \n| :-- | :-- |\n| code | Status code (200 for success) |\n| msg | Status description |\n| data | Response data |\n| success | Whether the request succeeded (true for success, false for failure) |\n\n## Common Error Code Definitions\n\nWhen an error occurs in Sinohope WaaS services, uniformly formatted data will be returned to the client:\n\n- `200`: Successful response. Refer to each API for the detailed response data.\n- `400`: Bad Request.\n- `401`: Unauthorized. Either API details are missing or invalid.\n- `403`: Forbidden - You do not have access to the requested resource.\n- `415`: Unsupported media type. You need to use application/json. \n- `500`: Sinohope internal error.\n\n### System Level Errors\n\n| Error Code | Description |\n| :-- | :-- |\n| 1001 | Unknown exception, please contact Sinohope customer service |\n| 1002 | Duplicate request |\n| 1004 | Invalid API Key |\n| 1005 | Signature verification failed |  \n| 1006 | IP call frequency restricted |\n| 1007 | No permission of the current API |\n| 1008 | Invalid IP address |\n| 1009 | Signature in the request header cannot be empty |\n| 1010 | Timestamp in the request header cannot be empty |\n| 1011 | Internal call exception |\n| 1012 | Invalid request, please check if there are missing headers |\n| 1013 | Signature failure |\n| 1014 | Unsupported request type (only GET and POST supported) |\n| 1015 | Missing signature parameter |\n\n### Parameter Level Errors\n\n| Error Code | Description |\n| :-- | :-- |\n| 2001 | The asset is not supported |\n| 2002 | The chain is not supported |\n| 2003 | Invalid input address |\n| 2004 | Transaction record does not exist |\n| 2005 | No permission |\n| 2006 | Abnormal transfer information (kyt check failed) | \n| 2007 | Miner fee too low |\n| 2008 | The to address is not an internal address (transfer protection) |\n| 2009 | Insufficient balance to pay transfer amount and gas fee |\n| 2010 | Insufficient gas (token transfer) | \n| 2011 | Insufficient available balance (token transfer) |\n| 2012 | Name cannot contain backslash  |\n| 2013 | Address not found for given path |\n| 2097 | Invalid pageIndex, require pageIndex >=1 |  \n| 2098 | Invalid pageSize, require pageSize <=50 and >=1 |\n| 2099 | Missing required parameter |\n| 2100 | pageSize must be greater than 0 |\n| 2101 | Specified wallet does not exist |\n| 2102 | Specified asset does not exist |\n| 2103 | Specified chainSymbol does not exist |\n| 2104 | Specified vault does not exist |\n| 2105 | Page size exceeds maximum limit (50) |\n| 2106 | The maximum number of single chain address subscriptions exceeds the limit (50) |\n| 2107 | pageIndex minimum is 1 |\n| 2108 | Parameter type error |\n| 2109 | advancedEnabled must be 0 or 1 |\n| 2110 | algorithmType must be 0 or 1 |\n| 2111 | Must be less then 50 requestIds in one query |\n| 2112 | Must be less then 50 sinoIds in one query |\n| 2113 | signAlgorithm must be one of 'personal_sign, signTypedData, eth_signTypedData_v3, eth_signTypedData_v4' | \n| 2114 | The length of requestId is too long, the maximum is 120 |\n| 2115 | Incorrect message format, or incorrect signAlgorithm parameter |\n| 2116 | Wallet and organization information do not match |\n| 2117 | Wallet and vault information do not match |\n| 2118 | Vault and organization information do not match |\n\n\n### Business Level Errors\n\n| Error Code | Description |  \n| :-- | :-- |\n| 4001 | Build transaction failed |\n| 4002 | Broadcast failed |\n| 4003 | The transaction of current asset can not be accelerated |\n| 4004 | The transaction to be accelerated has been contained in blockchain or the nonce has been occupied |\n| 4005 | The transaction to be canceled has been contained in blockchain or the nonce has been occupied | \n| 4006 | MPC Node not set |\n| 4007 | DKG not done |  \n| 4008 | Cannot initiate wallet creation operation on the same vault at the same time |\n| 4009 | Wallet names cannot be the same under the same vault |\n| 4010 | The value of the count parameter does not match the length of walletInfos array |\n| 4011 | Wallet quantity limit |\n\n## Data Dictionary \n\n### Transaction Fee Rate Levels\n\n| Code | Description |\n| :-- | :-- |\n| LOW | Low |\n| MIDDLE | Medium |\n| HIGH | High |\n\n### Transaction Status  \n\n| Code | Description |\n| :-- | :-- |\n| 0 | Transaction pending on secondary confirmation |\n| 1 | Transaction pending on signature |\n| 2 | Transaction pending | \n| 4 | Broadcast failed |\n| 5 | Transaction failed on blockchain |\n| 6 | Broadcast timeout |\n| 10 | Transaction success |\n| 11 | Transaction has been rollback |\n| 13 | Transaction has rejected |\n\n\n## Changelog\n\n| Version | Log | Date | Modifier |\n|-|-|-|-|\n| v0.9.0 | First version | 2023-08-04 | Owen |\n| v0.9.1 | Added new sections, fixed some APIs | 2023-08-22 | Owen |  \n| v0.9.2 | Quite many changes about transaction information, SO PLEASE JUST IGNORE THE OLD VERSIONS | 2023-09-05 | Owen |"},postman:{name:"\u4ea4\u6613\u901a\u77e5",description:{content:"\u4ea4\u6613\u4e0a\u94fe\u6210\u529f\u540e\uff0c\u63a8\u9001\u786e\u8ba4\u6570\u53d8\u5316",type:"text/plain"},url:{path:["v1","call_back","transaction","notify"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/develop/mpc-waas-api/sinohope-waas-api",custom_edit_url:null},m=void 0,u={unversionedId:"develop/mpc-waas-api/v-1-call-back-transaction-notify",id:"develop/mpc-waas-api/v-1-call-back-transaction-notify",title:"\u4ea4\u6613\u901a\u77e5",description:"\u4ea4\u6613\u4e0a\u94fe\u6210\u529f\u540e\uff0c\u63a8\u9001\u786e\u8ba4\u6570\u53d8\u5316",source:"@site/i18n/zh-Hant/docusaurus-plugin-content-docs/current/develop/mpc-waas-api/v-1-call-back-transaction-notify.api.mdx",sourceDirName:"develop/mpc-waas-api",slug:"/develop/mpc-waas-api/v-1-call-back-transaction-notify",permalink:"/zh-Hant/docs/develop/mpc-waas-api/v-1-call-back-transaction-notify",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"v-1-call-back-transaction-notify",title:"\u4ea4\u6613\u901a\u77e5",description:"\u4ea4\u6613\u4e0a\u94fe\u6210\u529f\u540e\uff0c\u63a8\u9001\u786e\u8ba4\u6570\u53d8\u5316",sidebar_label:"\u4ea4\u6613\u901a\u77e5",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Callback APIs"],operationId:"/v1/call_back/transaction/notify","x-codeSamples":[{lang:"python",label:"python",source:'request(\n  "POST",\n  "/v1/call_back/transaction/notify/",\n  {\n    "requestType": 1,\n    "requestId": "413497079388421",\n    "requestDetail": "{\n      "txHash":"my7EznNDoHwCyLZiXV3PDxzoGhHiuY3Btc5Rof9FDnZzXTpxpqxXzdiujNBUigbEjgiDPiSWqj1p3eY1bJ3WNdZ",\n      "nonce":"nonce",\n      "blockHash":"\u5757hash",\n      "blockHeight":"\u5757\u9ad8\u5ea6",\n      "confirmed_number":6,\n      "walletId": "52321312",\n      "chainSymbol": "ETH",\n      "assetId": "USDC_ETH",\n      "from": "0xc429aeda8bf786cf092224dddadbc0813f9f230b",\n      "to": "0x546A62c54F50D57D30478C8C275360f20239A23E",\n      "toTag": "32143",\n      "amount": "1200000000000000",\n      "fee": "1000000",\n      "gasPrice": "13250000",\n      "gasLimit": "21000"\n    }"\n  },\n  api_key, host\n)\n'},{lang:"go",label:"go",source:'Request("POST", "/v1/call_back/transaction/notify/", map[string]string{\n    "requestType": 1,\n    "requestId": "413497079388421",\n    "requestDetail": "{\n      "txHash":"my7EznNDoHwCyLZiXV3PDxzoGhHiuY3Btc5Rof9FDnZzXTpxpqxXzdiujNBUigbEjgiDPiSWqj1p3eY1bJ3WNdZ",\n      "nonce":"nonce",\n      "blockHash":"\u5757hash",\n      "blockHeight":"\u5757\u9ad8\u5ea6",\n      "confirmed_number":6,\n      "walletId": "52321312",\n      "chainSymbol": "ETH",\n      "assetId": "USDC_ETH",\n      "from": "0xc429aeda8bf786cf092224dddadbc0813f9f230b",\n      "to": "0x546A62c54F50D57D30478C8C275360f20239A23E",\n      "toTag": "32143",\n      "amount": "1200000000000000",\n      "fee": "1000000",\n      "gasPrice": "13250000",\n      "gasLimit": "21000"\n    }"\n}) \n'}],description:"\u4ea4\u6613\u4e0a\u94fe\u6210\u529f\u540e\uff0c\u63a8\u9001\u786e\u8ba4\u6570\u53d8\u5316",requestBody:{content:{"application/json":{schema:{required:["requestDetail","requestId","requestType"],type:"object",properties:{requestType:{type:"integer",description:"\u56de\u8c03\u8bf7\u6c42\u7c7b\u578b (\u5145\u503c\uff1a1\uff0c\u63d0\u73b0\uff1a2)",example:1},requestId:{type:"string",description:"\u8bf7\u6c42\u7684\u552f\u4e00id,\u591a\u6b21\u8c03\u7528\u4e0d\u53d8",example:"413497079388421"},requestDetail:{type:"string",description:"\u56de\u8c03\u8bf7\u6c42\u7684\u8be6\u7ec6\u4fe1\u606f\uff1b\u6bcf\u79cd\u7c7b\u578b\u7684\u56de\u8c03\u8bf7\u6c42\u5bf9\u5e94\u4e8e\u4e0d\u540c\u7684requestDetail\u7ed3\u6784\uff1b\u683c\u5f0f\u4e3a\u5e8f\u5217\u5316\u7684 JSON \u5b57\u7b26\u4e32",example:{txHash:"my7EznNDoHwCyLZiXV3PDxzoGhHiuY3Btc5Rof9FDnZzXTpxpqxXzdiujNBUigbEjgiDPiSWqj1p3eY1bJ3WNdZ",nonce:"nonce",blockHash:"\u5757hash",blockHeight:"\u5757\u9ad8\u5ea6",confirmed_number:6,walletId:"52321312",chainSymbol:"ETH",assetId:"USDC_ETH",from:"0xc429aeda8bf786cf092224dddadbc0813f9f230b",to:"0x546A62c54F50D57D30478C8C275360f20239A23E",toTag:"32143",amount:"1200000000000000",fee:"1000000",gasPrice:"13250000",gasLimit:"21000"}},extraInfo:{type:"string",description:"\u4e0e\u56de\u8c03\u8bf7\u6c42\u76f8\u5173\u7684\u5176\u4ed6\u4fe1\u606f\uff1b\u6bcf\u79cd\u7c7b\u578b\u7684\u56de\u8c03\u8bf7\u6c42\u5bf9\u5e94\u4e8e\u4e0d\u540c\u7684extra_info\u7ed3\u6784\uff1b\u683c\u5f0f\u4e3a\u5e8f\u5217\u5316 JSON \u5b57\u7b26\u4e32"}}}}},required:!1},responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{code:{type:"integer",example:200},requestId:{type:"string",description:"\u8bf7\u6c42\u7684\u552f\u4e00id,\u591a\u6b21\u8c03\u7528\u4e0d\u53d8",example:"431431431431431"},message:{type:"string",description:"\u9519\u8bef\u4fe1\u606f",example:""}}}}}}},"x-codegen-request-body-name":"root",extensions:[{key:"x-codegen-request-body-name",value:"root"}],method:"post",path:"/v1/call_back/transaction/notify",servers:[{url:"https://your.callback.url/"}],jsonRequestBodyExample:{requestType:1,requestId:"413497079388421",requestDetail:{txHash:"my7EznNDoHwCyLZiXV3PDxzoGhHiuY3Btc5Rof9FDnZzXTpxpqxXzdiujNBUigbEjgiDPiSWqj1p3eY1bJ3WNdZ",nonce:"nonce",blockHash:"\u5757hash",blockHeight:"\u5757\u9ad8\u5ea6",confirmed_number:6,walletId:"52321312",chainSymbol:"ETH",assetId:"USDC_ETH",from:"0xc429aeda8bf786cf092224dddadbc0813f9f230b",to:"0x546A62c54F50D57D30478C8C275360f20239A23E",toTag:"32143",amount:"1200000000000000",fee:"1000000",gasPrice:"13250000",gasLimit:"21000"},extraInfo:"string"},info:{title:"Sinohope WaaS API",version:"0.9.2",description:"# Common Descriptions of Parameters and Return Values \n\n## Unified Return Value Structure\n\n| Name | Description | \n| :-- | :-- |\n| code | Status code (200 for success) |\n| msg | Status description |\n| data | Response data |\n| success | Whether the request succeeded (true for success, false for failure) |\n\n## Common Error Code Definitions\n\nWhen an error occurs in Sinohope WaaS services, uniformly formatted data will be returned to the client:\n\n- `200`: Successful response. Refer to each API for the detailed response data.\n- `400`: Bad Request.\n- `401`: Unauthorized. Either API details are missing or invalid.\n- `403`: Forbidden - You do not have access to the requested resource.\n- `415`: Unsupported media type. You need to use application/json. \n- `500`: Sinohope internal error.\n\n### System Level Errors\n\n| Error Code | Description |\n| :-- | :-- |\n| 1001 | Unknown exception, please contact Sinohope customer service |\n| 1002 | Duplicate request |\n| 1004 | Invalid API Key |\n| 1005 | Signature verification failed |  \n| 1006 | IP call frequency restricted |\n| 1007 | No permission of the current API |\n| 1008 | Invalid IP address |\n| 1009 | Signature in the request header cannot be empty |\n| 1010 | Timestamp in the request header cannot be empty |\n| 1011 | Internal call exception |\n| 1012 | Invalid request, please check if there are missing headers |\n| 1013 | Signature failure |\n| 1014 | Unsupported request type (only GET and POST supported) |\n| 1015 | Missing signature parameter |\n\n### Parameter Level Errors\n\n| Error Code | Description |\n| :-- | :-- |\n| 2001 | The asset is not supported |\n| 2002 | The chain is not supported |\n| 2003 | Invalid input address |\n| 2004 | Transaction record does not exist |\n| 2005 | No permission |\n| 2006 | Abnormal transfer information (kyt check failed) | \n| 2007 | Miner fee too low |\n| 2008 | The to address is not an internal address (transfer protection) |\n| 2009 | Insufficient balance to pay transfer amount and gas fee |\n| 2010 | Insufficient gas (token transfer) | \n| 2011 | Insufficient available balance (token transfer) |\n| 2012 | Name cannot contain backslash \\ |\n| 2013 | Address not found for given path |\n| 2097 | Invalid pageIndex, require pageIndex >=1 |  \n| 2098 | Invalid pageSize, require pageSize <=50 and >=1 |\n| 2099 | Missing required parameter |\n| 2100 | pageSize must be greater than 0 |\n| 2101 | Specified wallet does not exist |\n| 2102 | Specified asset does not exist |\n| 2103 | Specified chainSymbol does not exist |\n| 2104 | Specified vault does not exist |\n| 2105 | Page size exceeds maximum limit (50) |\n| 2106 | The maximum number of single chain address subscriptions exceeds the limit (50) |\n| 2107 | pageIndex minimum is 1 |\n| 2108 | Parameter type error |\n| 2109 | advancedEnabled must be 0 or 1 |\n| 2110 | algorithmType must be 0 or 1 |\n| 2111 | Must be less then 50 requestIds in one query |\n| 2112 | Must be less then 50 sinoIds in one query |\n| 2113 | signAlgorithm must be one of 'personal_sign, signTypedData, eth_signTypedData_v3, eth_signTypedData_v4' | \n| 2114 | The length of requestId is too long, the maximum is 120 |\n| 2115 | Incorrect message format, or incorrect signAlgorithm parameter |\n| 2116 | Wallet and organization information do not match |\n| 2117 | Wallet and vault information do not match |\n| 2118 | Vault and organization information do not match |\n\n\n### Business Level Errors\n\n| Error Code | Description |  \n| :-- | :-- |\n| 4001 | Build transaction failed |\n| 4002 | Broadcast failed |\n| 4003 | The transaction of current asset can not be accelerated |\n| 4004 | The transaction to be accelerated has been contained in blockchain or the nonce has been occupied |\n| 4005 | The transaction to be canceled has been contained in blockchain or the nonce has been occupied | \n| 4006 | MPC Node not set |\n| 4007 | DKG not done |  \n| 4008 | Cannot initiate wallet creation operation on the same vault at the same time |\n| 4009 | Wallet names cannot be the same under the same vault |\n| 4010 | The value of the count parameter does not match the length of walletInfos array |\n| 4011 | Wallet quantity limit |\n\n## Data Dictionary \n\n### Transaction Fee Rate Levels\n\n| Code | Description |\n| :-- | :-- |\n| LOW | Low |\n| MIDDLE | Medium |\n| HIGH | High |\n\n### Transaction Status  \n\n| Code | Description |\n| :-- | :-- |\n| 0 | Transaction pending on secondary confirmation |\n| 1 | Transaction pending on signature |\n| 2 | Transaction pending | \n| 4 | Broadcast failed |\n| 5 | Transaction failed on blockchain |\n| 6 | Broadcast timeout |\n| 10 | Transaction success |\n| 11 | Transaction has been rollback |\n| 13 | Transaction has rejected |\n\n\n## Changelog\n\n| Version | Log | Date | Modifier |\n|-|-|-|-|\n| v0.9.0 | First version | 2023-08-04 | Owen |\n| v0.9.1 | Added new sections, fixed some APIs | 2023-08-22 | Owen |  \n| v0.9.2 | Quite many changes about transaction information, SO PLEASE JUST IGNORE THE OLD VERSIONS | 2023-09-05 | Owen |"},postman:{name:"\u4ea4\u6613\u901a\u77e5",description:{content:"\u4ea4\u6613\u4e0a\u94fe\u6210\u529f\u540e\uff0c\u63a8\u9001\u786e\u8ba4\u6570\u53d8\u5316",type:"text/plain"},url:{path:["v1","call_back","transaction","notify"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/develop/mpc-waas-api/sinohope-waas-api",custom_edit_url:null},sidebar:"mpcApiSidebar",previous:{title:"Callback APIs",permalink:"/zh-Hant/docs/develop/mpc-waas-api/callback-ap-is"},next:{title:"\u63d0\u73b0\u4e8c\u6b21\u786e\u8ba4",permalink:"/zh-Hant/docs/develop/mpc-waas-api/v-1-call-back-withdrawal-confirm"}},h={},f=[{value:"\u4ea4\u6613\u901a\u77e5",id:"\u4ea4\u6613\u901a\u77e5",level:2}],b={toc:f},g="wrapper";function y(e){let{components:n,...t}=e;return(0,i.kt)(g,(0,a.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u4ea4\u6613\u901a\u77e5"},"\u4ea4\u6613\u901a\u77e5"),(0,i.kt)("p",null,"\u4ea4\u6613\u4e0a\u94fe\u6210\u529f\u540e\uff0c\u63a8\u9001\u786e\u8ba4\u6570\u53d8\u5316"),(0,i.kt)(s.Z,{mdxType:"MimeTabs"},(0,i.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(c.Z,{collapsible:!1,name:"requestType",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"\u56de\u8c03\u8bf7\u6c42\u7c7b\u578b (\u5145\u503c\uff1a1\uff0c\u63d0\u73b0\uff1a2)",example:1},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"requestId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u8bf7\u6c42\u7684\u552f\u4e00id,\u591a\u6b21\u8c03\u7528\u4e0d\u53d8",example:"413497079388421"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"requestDetail",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u56de\u8c03\u8bf7\u6c42\u7684\u8be6\u7ec6\u4fe1\u606f\uff1b\u6bcf\u79cd\u7c7b\u578b\u7684\u56de\u8c03\u8bf7\u6c42\u5bf9\u5e94\u4e8e\u4e0d\u540c\u7684requestDetail\u7ed3\u6784\uff1b\u683c\u5f0f\u4e3a\u5e8f\u5217\u5316\u7684 JSON \u5b57\u7b26\u4e32",example:{txHash:"my7EznNDoHwCyLZiXV3PDxzoGhHiuY3Btc5Rof9FDnZzXTpxpqxXzdiujNBUigbEjgiDPiSWqj1p3eY1bJ3WNdZ",nonce:"nonce",blockHash:"\u5757hash",blockHeight:"\u5757\u9ad8\u5ea6",confirmed_number:6,walletId:"52321312",chainSymbol:"ETH",assetId:"USDC_ETH",from:"0xc429aeda8bf786cf092224dddadbc0813f9f230b",to:"0x546A62c54F50D57D30478C8C275360f20239A23E",toTag:"32143",amount:"1200000000000000",fee:"1000000",gasPrice:"13250000",gasLimit:"21000"}},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"extraInfo",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u4e0e\u56de\u8c03\u8bf7\u6c42\u76f8\u5173\u7684\u5176\u4ed6\u4fe1\u606f\uff1b\u6bcf\u79cd\u7c7b\u578b\u7684\u56de\u8c03\u8bf7\u6c42\u5bf9\u5e94\u4e8e\u4e0d\u540c\u7684extra_info\u7ed3\u6784\uff1b\u683c\u5f0f\u4e3a\u5e8f\u5217\u5316 JSON \u5b57\u7b26\u4e32"},mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)(o.Z,{mdxType:"ApiTabs"},(0,i.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"successful operation")),(0,i.kt)("div",null,(0,i.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(d.Z,{mdxType:"SchemaTabs"},(0,i.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(c.Z,{collapsible:!1,name:"code",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",example:200},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"requestId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u8bf7\u6c42\u7684\u552f\u4e00id,\u591a\u6b21\u8c03\u7528\u4e0d\u53d8",example:"431431431431431"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u9519\u8bef\u4fe1\u606f",example:""},mdxType:"SchemaItem"})))),(0,i.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(r.Z,{responseExample:'{\n  "code": 200,\n  "requestId": "431431431431431",\n  "message": ""\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}y.isMDXComponent=!0}}]);