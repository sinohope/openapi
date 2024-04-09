"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[5605],{84081:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>f,contentTitle:()=>m,default:()=>b,frontMatter:()=>l,metadata:()=>u,toc:()=>h});var n=t(87462),i=(t(67294),t(3905)),s=t(26389),o=t(94891),r=(t(75190),t(47507)),c=t(24310),d=t(63303),p=(t(75035),t(85162));const l={id:"v-1-waas-mpc-transaction-fee",title:"Estimate transaction fee",description:"Estimate transaction fee",sidebar_label:"Estimate transaction fee",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Transaction APIs"],operationId:"/v1/waas/mpc/transaction/fee","x-codeSamples":[{lang:"python",label:"python",source:'request(\n  "POST",\n  "/v1/waas/mpc/transaction/fee",\n  {\n    "chainSymbol": "GOERLI",\n    "operationType": "TRANSFER",\n    "from": "0xcec96d6b9a0ba75f1dcb882454ad582f273b2842",\n    "to": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",\n    "assetId": "ETH_GOERLI",\n    "amount" : "123"\n  },\n  api_key, host\n)\n'},{lang:"go",label:"go",source:'Request("POST", "/v1/waas/mpc/transaction/fee", map[string]string{\n    "chainSymbol": "GOERLI",\n    "operationType": "TRANSFER",\n    "from": "0xcec96d6b9a0ba75f1dcb882454ad582f273b2842",\n    "to": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",\n    "assetId": "ETH_GOERLI",\n    "amount" : "123"\n})\n'}],security:[{"BIZ-API-KEY":[],"BIZ-API-NONCE":[],"BIZ-API-SIGNATURE":[]}],requestBody:{content:{"application/json":{schema:{required:["operationType","chainSymbol","from","to"],type:"object",properties:{operationType:{type:"string",description:"Transaction type, required TRANSFER: Transfer CONTRACT_CALL: web3 contract call",example:"CONTRACT_CALL"},from:{type:"string",description:"from address",example:"0xcec96d6b9a0ba75f1dcb882454ad582f273b2842"},to:{type:"string",description:"to address, required, if it is a contract call, fill in the contract address",example:"0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad"},assetId:{type:"string",description:"Asset id, required if the transaction type is TRANSFER.",example:"ETH_GOERLI"},chainSymbol:{type:"string",description:"Chain Identification",example:"GOERLI"},amount:{type:"string",description:"Transfer amount, if the chain belongs to btc like, the amount must be provided.",example:"123"},inputData:{type:"string",description:"If the transaction type is CONTRACT_CALL contract call, inputData is required.",example:"0xf86407850271d94900825208943fc91a3afd70395cd496c647d5a6cc9d4b2b7fad80802da0a635c2bf652f4eb9980c27544320376759c22ad70b7d67c21adc1fcfd5b11eeca0068a8a2610c3e36940368172d6a80dc7eac3f090e616aec23c27eccaf581e550"}}}}},required:!1},responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{code:{type:"integer",example:200},msg:{type:"string",example:""},data:{required:["transactionFee"],type:"object",properties:{transactionFee:{required:["slowFee","averageFee","fastFee"],type:"object",properties:{slowFee:{type:"string",description:"Low transaction fees",example:"200"},averageFee:{type:"string",description:"Mid-range transaction fee",example:"1111"},fastFee:{type:"string",description:"High-end transaction fees",example:"2222"},feePerByte:{type:"string",description:"The cost per byte is returned by btc like chain.",example:"1111"}}},gasFee:{type:"object",description:"Estimated cost details for ETH and EVM compatible chains",properties:{slow:{type:"object",properties:{gasPrice:{type:"string",description:"gasPrice"},gasLimit:{type:"string",description:"gasLimit"}}},average:{type:"object",properties:{gasPrice:{type:"string",description:"gasPrice"},gasLimit:{type:"string",description:"gasLimit"}}},fast:{type:"object",properties:{gasPrice:{type:"string",description:"gasPrice"},gasLimit:{type:"string",description:"gasLimit"}}}}}}},success:{type:"boolean"}},description:""}}}}},"x-codegen-request-body-name":"root",description:"Estimate transaction fee",extensions:[{key:"x-codegen-request-body-name",value:"root"}],method:"post",path:"/v1/waas/mpc/transaction/fee",servers:[{url:"https://api.sinohope.com/"},{url:"https://api-sandbox.sinohope.com/"}],securitySchemes:{"BIZ-API-KEY":{type:"apiKey",in:"header",name:"BIZ-API-KEY",description:"Your API-KEY(public key)."},"BIZ-API-NONCE":{type:"apiKey",in:"header",name:"BIZ-API-NONCE",description:"A nonce value (timestamp) that is included in the data to be signed."},"BIZ-API-SIGNATURE":{type:"apiKey",in:"header",name:"BIZ-API-SIGNATURE",description:"signature of the request information(nonce,path,body) using your api private key."}},jsonRequestBodyExample:{operationType:"CONTRACT_CALL",from:"0xcec96d6b9a0ba75f1dcb882454ad582f273b2842",to:"0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",assetId:"ETH_GOERLI",chainSymbol:"GOERLI",amount:"123",inputData:"0xf86407850271d94900825208943fc91a3afd70395cd496c647d5a6cc9d4b2b7fad80802da0a635c2bf652f4eb9980c27544320376759c22ad70b7d67c21adc1fcfd5b11eeca0068a8a2610c3e36940368172d6a80dc7eac3f090e616aec23c27eccaf581e550"},info:{title:"Sinohope WaaS API",version:"0.9.5",description:"# Common Descriptions of Parameters and Return Values \n\n## Unified Return Value Structure\n\n| Name | Description | \n| :-- | :-- |\n| code | Status code (200 for success) |\n| msg | Status description |\n| data | Response data |\n| success | Whether the request succeeded (true for success, false for failure) |\n\n## Common Error Code Definitions\n\nWhen an error occurs in Sinohope WaaS services, uniformly formatted data will be returned to the client:\n\n- `200`: Successful response. Refer to each API for the detailed response data.\n- `400`: Bad Request.\n- `401`: Unauthorized. Either API details are missing or invalid.\n- `403`: Forbidden. You do not have access to the requested resource.\n- `415`: Unsupported media type. You need to use application/json. \n- `500`: Sinohope internal error.\n\n### System Level Errors\n\n| Error Code | Description |\n| :-- | :-- |\n| 1001 | Unknown exception, please contact Sinohope customer service |\n| 1002 | Duplicate request |\n| 1004 | Invalid API Key |\n| 1005 | Signature verification failed |  \n| 1006 | IP call frequency restricted |\n| 1007 | No permission of the current API |\n| 1008 | Invalid IP address |\n| 1009 | Signature in the request header cannot be empty |\n| 1010 | Timestamp in the request header cannot be empty |\n| 1011 | Internal call exception |\n| 1012 | Invalid request, please check if there are missing headers |\n| 1013 | Signature failure |\n| 1014 | Unsupported request type (only GET and POST supported) |\n| 1015 | Missing signature parameter |\n\n### Parameter Level Errors\n\n| Error Code | Description |\n| :-- | :-- |\n| 2001 | The asset is not supported |\n| 2002 | The chain is not supported |\n| 2003 | Invalid input address |\n| 2004 | Transaction record does not exist |\n| 2005 | No permission |\n| 2006 | Abnormal transfer information (kyt check failed) | \n| 2007 | Miner fee too low |\n| 2008 | The to address is not an internal address (transfer protection) |\n| 2009 | Insufficient balance to pay transfer amount and gas fee |\n| 2010 | Insufficient gas (token transfer) | \n| 2011 | Insufficient available balance (token transfer) |\n| 2012 | Name cannot contain backslash  |\n| 2013 | Address not found for given path |\n| 2014 | Not enough gas |\n| 2015 | Invalid input assetID |\n| 2020 | No token information |\n| 2097 | Invalid pageIndex, require pageIndex >=1 |  \n| 2098 | Invalid pageSize, require pageSize <=50 and >=1 |\n| 2099 | Missing required parameter |\n| 2101 | Specified wallet does not exist |\n| 2102 | Specified asset does not exist |\n| 2103 | Specified chainSymbol does not exist |\n| 2104 | Specified vault does not exist |\n| 2106 | The maximum number of single chain address subscriptions exceeds the limit (50) |\n| 2108 | Parameter type error |\n| 2109 | AdvancedEnabled must be 0 or 1 |\n| 2110 | algorithmType must be 0 or 1 |\n| 2111 | Must be less then 50 requestIds in one query |\n| 2112 | Must be less then 50 sinoIds in one query |\n| 2113 | signAlgorithm must be one of 'personal_sign, signTypedData, eth_signTypedData_v3, eth_signTypedData_v4' | \n| 2114 | The length of requestId is too long, the maximum is 120 |\n| 2115 | Incorrect message format, or incorrect signAlgorithm parameter |\n| 2116 | Wallet and organization information do not match |\n| 2117 | Wallet and vault information do not match |\n| 2118 | Vault and organization information do not match |\n| 2119 | Current chain does not support self-transfer |\n| 2120 | Chain information organization is not configured |\n| 2121 | chainSymbol does not match with chain |\n| 2122 | Wallet address information not found |\n| 2123 | The whitelist address verification fails |\n| 2124 | Transaction insertion into the database failed |\n\n\n### Business Level Errors\n\n| Error Code | Description |  \n| :-- | :-- |\n| 4001 | Build transaction failed |\n| 4002 | Broadcast failed |\n| 4003 | The transaction of current asset can not be accelerated |\n| 4004 | The transaction to be accelerated has been contained in blockchain or the nonce has been occupied |\n| 4005 | The transaction to be canceled has been contained in blockchain or the nonce has been occupied | \n| 4006 | MPC Node not set |\n| 4007 | DKG not done |  \n| 4008 | Cannot initiate wallet creation operation on the same vault at the same time |\n| 4009 | Wallet names cannot be the same under the same vault |\n| 4010 | The value of the count parameter does not match the length of walletInfos array |\n| 4011 | Wallet quantity limit |\n| 4014 | Writing to mq failed |\n| 4015 | Transaction insertion into the database failed |\n| 4017 | The cancelled deal does not exist |\n| 4018 | The accelerated transaction status is no longer padding and the transaction cannot be accelerated |\n| 4019 | The deal accelerated by this transaction does not exist |\n\n## Data Dictionary \n\n### Transaction Fee Rate Levels\n\n| Code | Description |\n| :-- | :-- |\n| LOW | Low |\n| MIDDLE | Medium |\n| HIGH | High |\n\n### Transaction Status  \n\n| Code | Description |\n| :-- | :-- |\n| 0 | Transaction pending on secondary confirmation |\n| 1 | Transaction pending on signature |\n| 2 | Transaction pending | \n| 4 | Broadcast failed |\n| 5 | Transaction failed on blockchain |\n| 6 | Broadcast timeout |\n| 10 | Transaction success |\n| 11 | Transaction has been rollback |\n| 13 | Transaction has rejected |\n\n\n## Changelog\n\n| Version | Log | Date | Modifier |\n|-|-|-|-|\n| v0.9.0 | First version | 2023-08-04 | Owen |\n| v0.9.1 | Added new sections, fixed some APIs | 2023-08-22 | Owen |  \n| v0.9.2 | Quite many changes about transaction information, SO PLEASE JUST IGNORE THE OLD VERSIONS | 2023-09-05 | Owen |\n| v0.9.3 | Updates the request parameters of interfaces `/v1/call_back/transaction/notify` and `/v1/call_back/withdrawal/confirm` | 2023-09-05 | Owen |\n| v0.9.4 | Cumulative updates: <br/>1. Add api `/v1/waas/mpc/transaction/fee`. <br/> 2. Fix: Correct the response feild `sinoId` of api `/v1/waas/mpc/web3/sign_message` from `integer` to `string`, and the request params `chainSymbol` of apis `/v1/waas/mpc/transaction/cancel_transaction` and `/v1/waas/mpc/transaction/speedup_transaction` is modified from `required` to `non-required`. | 2023-12-25 | Shihan, etc. |\n| v0.9.5 | Added new interfaces `/v1/waas/mpc/web3/sign_result`| 2024-01-10 | wd |  "},postman:{name:"Estimate transaction fee",description:{type:"text/plain"},url:{path:["v1","waas","mpc","transaction","fee"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"apikey",apikey:[{type:"any",value:"BIZ-API-KEY",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"post api-method",info_path:"docs/develop/mpc-waas-api/sinohope-waas-api",custom_edit_url:null},m=void 0,u={unversionedId:"develop/mpc-waas-api/v-1-waas-mpc-transaction-fee",id:"develop/mpc-waas-api/v-1-waas-mpc-transaction-fee",title:"Estimate transaction fee",description:"Estimate transaction fee",source:"@site/docs/develop/mpc-waas-api/v-1-waas-mpc-transaction-fee.api.mdx",sourceDirName:"develop/mpc-waas-api",slug:"/develop/mpc-waas-api/v-1-waas-mpc-transaction-fee",permalink:"/docs/develop/mpc-waas-api/v-1-waas-mpc-transaction-fee",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"v-1-waas-mpc-transaction-fee",title:"Estimate transaction fee",description:"Estimate transaction fee",sidebar_label:"Estimate transaction fee",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Transaction APIs"],operationId:"/v1/waas/mpc/transaction/fee","x-codeSamples":[{lang:"python",label:"python",source:'request(\n  "POST",\n  "/v1/waas/mpc/transaction/fee",\n  {\n    "chainSymbol": "GOERLI",\n    "operationType": "TRANSFER",\n    "from": "0xcec96d6b9a0ba75f1dcb882454ad582f273b2842",\n    "to": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",\n    "assetId": "ETH_GOERLI",\n    "amount" : "123"\n  },\n  api_key, host\n)\n'},{lang:"go",label:"go",source:'Request("POST", "/v1/waas/mpc/transaction/fee", map[string]string{\n    "chainSymbol": "GOERLI",\n    "operationType": "TRANSFER",\n    "from": "0xcec96d6b9a0ba75f1dcb882454ad582f273b2842",\n    "to": "0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",\n    "assetId": "ETH_GOERLI",\n    "amount" : "123"\n})\n'}],security:[{"BIZ-API-KEY":[],"BIZ-API-NONCE":[],"BIZ-API-SIGNATURE":[]}],requestBody:{content:{"application/json":{schema:{required:["operationType","chainSymbol","from","to"],type:"object",properties:{operationType:{type:"string",description:"Transaction type, required TRANSFER: Transfer CONTRACT_CALL: web3 contract call",example:"CONTRACT_CALL"},from:{type:"string",description:"from address",example:"0xcec96d6b9a0ba75f1dcb882454ad582f273b2842"},to:{type:"string",description:"to address, required, if it is a contract call, fill in the contract address",example:"0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad"},assetId:{type:"string",description:"Asset id, required if the transaction type is TRANSFER.",example:"ETH_GOERLI"},chainSymbol:{type:"string",description:"Chain Identification",example:"GOERLI"},amount:{type:"string",description:"Transfer amount, if the chain belongs to btc like, the amount must be provided.",example:"123"},inputData:{type:"string",description:"If the transaction type is CONTRACT_CALL contract call, inputData is required.",example:"0xf86407850271d94900825208943fc91a3afd70395cd496c647d5a6cc9d4b2b7fad80802da0a635c2bf652f4eb9980c27544320376759c22ad70b7d67c21adc1fcfd5b11eeca0068a8a2610c3e36940368172d6a80dc7eac3f090e616aec23c27eccaf581e550"}}}}},required:!1},responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{code:{type:"integer",example:200},msg:{type:"string",example:""},data:{required:["transactionFee"],type:"object",properties:{transactionFee:{required:["slowFee","averageFee","fastFee"],type:"object",properties:{slowFee:{type:"string",description:"Low transaction fees",example:"200"},averageFee:{type:"string",description:"Mid-range transaction fee",example:"1111"},fastFee:{type:"string",description:"High-end transaction fees",example:"2222"},feePerByte:{type:"string",description:"The cost per byte is returned by btc like chain.",example:"1111"}}},gasFee:{type:"object",description:"Estimated cost details for ETH and EVM compatible chains",properties:{slow:{type:"object",properties:{gasPrice:{type:"string",description:"gasPrice"},gasLimit:{type:"string",description:"gasLimit"}}},average:{type:"object",properties:{gasPrice:{type:"string",description:"gasPrice"},gasLimit:{type:"string",description:"gasLimit"}}},fast:{type:"object",properties:{gasPrice:{type:"string",description:"gasPrice"},gasLimit:{type:"string",description:"gasLimit"}}}}}}},success:{type:"boolean"}},description:""}}}}},"x-codegen-request-body-name":"root",description:"Estimate transaction fee",extensions:[{key:"x-codegen-request-body-name",value:"root"}],method:"post",path:"/v1/waas/mpc/transaction/fee",servers:[{url:"https://api.sinohope.com/"},{url:"https://api-sandbox.sinohope.com/"}],securitySchemes:{"BIZ-API-KEY":{type:"apiKey",in:"header",name:"BIZ-API-KEY",description:"Your API-KEY(public key)."},"BIZ-API-NONCE":{type:"apiKey",in:"header",name:"BIZ-API-NONCE",description:"A nonce value (timestamp) that is included in the data to be signed."},"BIZ-API-SIGNATURE":{type:"apiKey",in:"header",name:"BIZ-API-SIGNATURE",description:"signature of the request information(nonce,path,body) using your api private key."}},jsonRequestBodyExample:{operationType:"CONTRACT_CALL",from:"0xcec96d6b9a0ba75f1dcb882454ad582f273b2842",to:"0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",assetId:"ETH_GOERLI",chainSymbol:"GOERLI",amount:"123",inputData:"0xf86407850271d94900825208943fc91a3afd70395cd496c647d5a6cc9d4b2b7fad80802da0a635c2bf652f4eb9980c27544320376759c22ad70b7d67c21adc1fcfd5b11eeca0068a8a2610c3e36940368172d6a80dc7eac3f090e616aec23c27eccaf581e550"},info:{title:"Sinohope WaaS API",version:"0.9.5",description:"# Common Descriptions of Parameters and Return Values \n\n## Unified Return Value Structure\n\n| Name | Description | \n| :-- | :-- |\n| code | Status code (200 for success) |\n| msg | Status description |\n| data | Response data |\n| success | Whether the request succeeded (true for success, false for failure) |\n\n## Common Error Code Definitions\n\nWhen an error occurs in Sinohope WaaS services, uniformly formatted data will be returned to the client:\n\n- `200`: Successful response. Refer to each API for the detailed response data.\n- `400`: Bad Request.\n- `401`: Unauthorized. Either API details are missing or invalid.\n- `403`: Forbidden. You do not have access to the requested resource.\n- `415`: Unsupported media type. You need to use application/json. \n- `500`: Sinohope internal error.\n\n### System Level Errors\n\n| Error Code | Description |\n| :-- | :-- |\n| 1001 | Unknown exception, please contact Sinohope customer service |\n| 1002 | Duplicate request |\n| 1004 | Invalid API Key |\n| 1005 | Signature verification failed |  \n| 1006 | IP call frequency restricted |\n| 1007 | No permission of the current API |\n| 1008 | Invalid IP address |\n| 1009 | Signature in the request header cannot be empty |\n| 1010 | Timestamp in the request header cannot be empty |\n| 1011 | Internal call exception |\n| 1012 | Invalid request, please check if there are missing headers |\n| 1013 | Signature failure |\n| 1014 | Unsupported request type (only GET and POST supported) |\n| 1015 | Missing signature parameter |\n\n### Parameter Level Errors\n\n| Error Code | Description |\n| :-- | :-- |\n| 2001 | The asset is not supported |\n| 2002 | The chain is not supported |\n| 2003 | Invalid input address |\n| 2004 | Transaction record does not exist |\n| 2005 | No permission |\n| 2006 | Abnormal transfer information (kyt check failed) | \n| 2007 | Miner fee too low |\n| 2008 | The to address is not an internal address (transfer protection) |\n| 2009 | Insufficient balance to pay transfer amount and gas fee |\n| 2010 | Insufficient gas (token transfer) | \n| 2011 | Insufficient available balance (token transfer) |\n| 2012 | Name cannot contain backslash \\ |\n| 2013 | Address not found for given path |\n| 2014 | Not enough gas |\n| 2015 | Invalid input assetID |\n| 2020 | No token information |\n| 2097 | Invalid pageIndex, require pageIndex >=1 |  \n| 2098 | Invalid pageSize, require pageSize <=50 and >=1 |\n| 2099 | Missing required parameter |\n| 2101 | Specified wallet does not exist |\n| 2102 | Specified asset does not exist |\n| 2103 | Specified chainSymbol does not exist |\n| 2104 | Specified vault does not exist |\n| 2106 | The maximum number of single chain address subscriptions exceeds the limit (50) |\n| 2108 | Parameter type error |\n| 2109 | AdvancedEnabled must be 0 or 1 |\n| 2110 | algorithmType must be 0 or 1 |\n| 2111 | Must be less then 50 requestIds in one query |\n| 2112 | Must be less then 50 sinoIds in one query |\n| 2113 | signAlgorithm must be one of 'personal_sign, signTypedData, eth_signTypedData_v3, eth_signTypedData_v4' | \n| 2114 | The length of requestId is too long, the maximum is 120 |\n| 2115 | Incorrect message format, or incorrect signAlgorithm parameter |\n| 2116 | Wallet and organization information do not match |\n| 2117 | Wallet and vault information do not match |\n| 2118 | Vault and organization information do not match |\n| 2119 | Current chain does not support self-transfer |\n| 2120 | Chain information organization is not configured |\n| 2121 | chainSymbol does not match with chain |\n| 2122 | Wallet address information not found |\n| 2123 | The whitelist address verification fails |\n| 2124 | Transaction insertion into the database failed |\n\n\n### Business Level Errors\n\n| Error Code | Description |  \n| :-- | :-- |\n| 4001 | Build transaction failed |\n| 4002 | Broadcast failed |\n| 4003 | The transaction of current asset can not be accelerated |\n| 4004 | The transaction to be accelerated has been contained in blockchain or the nonce has been occupied |\n| 4005 | The transaction to be canceled has been contained in blockchain or the nonce has been occupied | \n| 4006 | MPC Node not set |\n| 4007 | DKG not done |  \n| 4008 | Cannot initiate wallet creation operation on the same vault at the same time |\n| 4009 | Wallet names cannot be the same under the same vault |\n| 4010 | The value of the count parameter does not match the length of walletInfos array |\n| 4011 | Wallet quantity limit |\n| 4014 | Writing to mq failed |\n| 4015 | Transaction insertion into the database failed |\n| 4017 | The cancelled deal does not exist |\n| 4018 | The accelerated transaction status is no longer padding and the transaction cannot be accelerated |\n| 4019 | The deal accelerated by this transaction does not exist |\n\n## Data Dictionary \n\n### Transaction Fee Rate Levels\n\n| Code | Description |\n| :-- | :-- |\n| LOW | Low |\n| MIDDLE | Medium |\n| HIGH | High |\n\n### Transaction Status  \n\n| Code | Description |\n| :-- | :-- |\n| 0 | Transaction pending on secondary confirmation |\n| 1 | Transaction pending on signature |\n| 2 | Transaction pending | \n| 4 | Broadcast failed |\n| 5 | Transaction failed on blockchain |\n| 6 | Broadcast timeout |\n| 10 | Transaction success |\n| 11 | Transaction has been rollback |\n| 13 | Transaction has rejected |\n\n\n## Changelog\n\n| Version | Log | Date | Modifier |\n|-|-|-|-|\n| v0.9.0 | First version | 2023-08-04 | Owen |\n| v0.9.1 | Added new sections, fixed some APIs | 2023-08-22 | Owen |  \n| v0.9.2 | Quite many changes about transaction information, SO PLEASE JUST IGNORE THE OLD VERSIONS | 2023-09-05 | Owen |\n| v0.9.3 | Updates the request parameters of interfaces `/v1/call_back/transaction/notify` and `/v1/call_back/withdrawal/confirm` | 2023-09-05 | Owen |\n| v0.9.4 | Cumulative updates: <br/>1. Add api `/v1/waas/mpc/transaction/fee`. <br/> 2. Fix: Correct the response feild `sinoId` of api `/v1/waas/mpc/web3/sign_message` from `integer` to `string`, and the request params `chainSymbol` of apis `/v1/waas/mpc/transaction/cancel_transaction` and `/v1/waas/mpc/transaction/speedup_transaction` is modified from `required` to `non-required`. | 2023-12-25 | Shihan, etc. |\n| v0.9.5 | Added new interfaces `/v1/waas/mpc/web3/sign_result`| 2024-01-10 | wd |  "},postman:{name:"Estimate transaction fee",description:{type:"text/plain"},url:{path:["v1","waas","mpc","transaction","fee"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"apikey",apikey:[{type:"any",value:"BIZ-API-KEY",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"post api-method",info_path:"docs/develop/mpc-waas-api/sinohope-waas-api",custom_edit_url:null},sidebar:"mpcApiSidebar",previous:{title:"Transaction APIs",permalink:"/docs/develop/mpc-waas-api/transaction-ap-is"},next:{title:"Initiate a transfer transaction",permalink:"/docs/develop/mpc-waas-api/v-1-waas-mpc-transaction-create-transfer"}},f={},h=[{value:"Estimate transaction fee",id:"estimate-transaction-fee",level:2}],y={toc:h},g="wrapper";function b(e){let{components:a,...t}=e;return(0,i.kt)(g,(0,n.Z)({},y,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"estimate-transaction-fee"},"Estimate transaction fee"),(0,i.kt)("p",null,"Estimate transaction fee"),(0,i.kt)(o.Z,{mdxType:"MimeTabs"},(0,i.kt)(p.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(c.Z,{collapsible:!1,name:"operationType",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Transaction type, required TRANSFER: Transfer CONTRACT_CALL: web3 contract call",example:"CONTRACT_CALL"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"from",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"from address",example:"0xcec96d6b9a0ba75f1dcb882454ad582f273b2842"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"to",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"to address, required, if it is a contract call, fill in the contract address",example:"0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"assetId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Asset id, required if the transaction type is TRANSFER.",example:"ETH_GOERLI"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"chainSymbol",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Chain Identification",example:"GOERLI"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"amount",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Transfer amount, if the chain belongs to btc like, the amount must be provided.",example:"123"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"inputData",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"If the transaction type is CONTRACT_CALL contract call, inputData is required.",example:"0xf86407850271d94900825208943fc91a3afd70395cd496c647d5a6cc9d4b2b7fad80802da0a635c2bf652f4eb9980c27544320376759c22ad70b7d67c21adc1fcfd5b11eeca0068a8a2610c3e36940368172d6a80dc7eac3f090e616aec23c27eccaf581e550"},mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)(s.Z,{mdxType:"ApiTabs"},(0,i.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"successful operation")),(0,i.kt)("div",null,(0,i.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(d.Z,{mdxType:"SchemaTabs"},(0,i.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(c.Z,{collapsible:!1,name:"code",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",example:200},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"msg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:""},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"data"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"transactionFee"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(c.Z,{collapsible:!1,name:"slowFee",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Low transaction fees",example:"200"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"averageFee",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Mid-range transaction fee",example:"1111"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"fastFee",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"High-end transaction fees",example:"2222"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"feePerByte",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The cost per byte is returned by btc like chain.",example:"1111"},mdxType:"SchemaItem"})))),(0,i.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"gasFee"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"Estimated cost details for ETH and EVM compatible chains")),(0,i.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"slow"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(c.Z,{collapsible:!1,name:"gasPrice",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"gasPrice"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"gasLimit",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"gasLimit"},mdxType:"SchemaItem"})))),(0,i.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"average"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(c.Z,{collapsible:!1,name:"gasPrice",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"gasPrice"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"gasLimit",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"gasLimit"},mdxType:"SchemaItem"})))),(0,i.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"fast"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(c.Z,{collapsible:!1,name:"gasPrice",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"gasPrice"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"gasLimit",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"gasLimit"},mdxType:"SchemaItem"})))))))))),(0,i.kt)(c.Z,{collapsible:!1,name:"success",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"})))),(0,i.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(r.Z,{responseExample:'{\n  "code": 200,\n  "msg": "",\n  "data": {\n    "transactionFee": {\n      "slowFee": "200",\n      "averageFee": "1111",\n      "fastFee": "2222",\n      "feePerByte": "1111"\n    },\n    "gasFee": {\n      "slow": {\n        "gasPrice": "string",\n        "gasLimit": "string"\n      },\n      "average": {\n        "gasPrice": "string",\n        "gasLimit": "string"\n      },\n      "fast": {\n        "gasPrice": "string",\n        "gasLimit": "string"\n      }\n    }\n  },\n  "success": true\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);