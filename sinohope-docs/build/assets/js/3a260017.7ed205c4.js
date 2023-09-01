"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[4335],{10365:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>b,frontMatter:()=>c,metadata:()=>h,toc:()=>y});var a=n(87462),s=(n(67294),n(3905)),i=n(26389),o=n(94891),r=(n(75190),n(47507)),l=n(24310),d=n(63303),p=(n(75035),n(85162));const c={id:"internal-v-1-mpc-signature-result",title:"/internal/v1/mpc/signature/result",description:"Notify the signature result to the exchange",sidebar_label:"/internal/v1/mpc/signature/result",hide_title:!0,hide_table_of_contents:!0,api:{tags:["E-Custody->Exchange"],description:"Notify the signature result to the exchange",requestBody:{required:!0,content:{"application/json":{schema:{type:"object",properties:{requestId:{type:"string",description:"The request id that this result related to"},signature:{type:"string",example:"3e7badaf020a3975a6783ec2f7f44efe4e79731227b1b85367ae1da8fe01c144533469a705baa61468b267f107e075844c7b520366e985b42ecfb6884f730d4300",description:'The final signature, it\'s concatenated directly by the r, s, v value, as "r||s||v", and formatted in hexadecimal.'}},required:["requestId","signature"]}}}},responses:{200:{description:"Successful response",content:{"application/json":{schema:{type:"object",properties:{status:{type:"boolean",description:"Status of the request, False/True (failed/success)"},failedReason:{type:"string",nullable:!0,description:"The failed reason if the status is False"}},required:["status"]}}}}},method:"post",path:"/internal/v1/mpc/signature/result",securitySchemes:{ApiKeyAuth:{type:"apiKey",in:"header",name:"BIZ-API-KEY",description:"This API key is given to you by Sinohope when onboarding your exchange."},ApiNonce:{type:"apiKey",in:"header",name:"BIZ-API-NONCE",description:"A nonce value (timestamp) that is included in the data to be signed."},ApiSig:{type:"apiKey",in:"header",name:"BIZ-API-SIGNATURE",description:"signature of the request information(nonce,path,body) using the secret_key which is provided by Sinohope when onboarding your exchange."}},jsonRequestBodyExample:{requestId:"string",signature:"3e7badaf020a3975a6783ec2f7f44efe4e79731227b1b85367ae1da8fe01c144533469a705baa61468b267f107e075844c7b520366e985b42ecfb6884f730d4300"},info:{title:"OpenLoop API",version:"0.9.12",description:'\n\n# Response code definition\n\nCommonly, for all APIs, the HTTP status codes should use those registered by IANA.\nSee: <https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml>\n\nIn OpenLoop, we should use a few well defined HTTP status codes as follow:\n\n- `200`: Successful response. Refer to each API for the detailed response data.\n- `400`: Return Bad Request.\n- `401`: Unauthorized. Either API details are missing or invalid\n- `403`: Forbidden - You do not have access to the requested resource.\n- `415`: Unsupported media type. You need to use application/json.\n- `500`: Exchange/SinoHope internal error.\n\n# Changelog\n\nChanges log, dates are displayed in UTC, shows in a reverse order.\n\n* v0.9.12\n> 2023/06/28 by Darlzan\n\n- `/collateral/v1/settlement/tx/build` : update the response.\n\n* v0.9.11\n> 2023/06/16 by Darlzan\n\n- E-custody `/internal/v1/mpc/start` : add fields `transactionId`.\n\n* v0.9.10\n> 2023/06/14 by Darlzan\n\n- `/collateral/v1/settlement/address` : new added api.\n- `/collateral/v1/settlement/finish` : new added api.\n\n* v0.9.9\n> 2023/06/06 by Darlzan\n\n- `/collateral/v1/settlement/tx/build` : add fields `cryptography` in the response.\n- `/collateral/v1/settlement/tx/broadcast` : update single fields `signature` to object type fields `signatures`, in order to adapt to the UTXO transactions.\n\n* v0.9.8\n> 2023/06/01 by Darlzan\n\n- `/exchange/v1/mpc/pubkey` :contains two public keys, ecdsa-secp256k1 public key and eddsa-ed25519 public key.\n- `/exchange/v1/settlement/confirm` : add fields `approved`.\n\n* v0.9.7\n> 2023/05/30 by Darlzan\n\n- `/exchange/v1/deposit` : new added.\n- `/collateral/v1/deposit/balance` : new added.\n- `/exchange/v1/withdrawable`: change the type of the fields `amount` in response data from `number` to `string`.\n\n* v0.9.6\n> 2023/05/30 by Darlzan\n\n- `/exchange/v1/settlement/network` : change fields name `perferedNetwork` to `settlementNetwork`\n\n* v0.9.5\n> 2023/05/26 by Darlzan\n\n- `/exchange/v1/mpc/join` and `/internal/v1/mpc/join`: add fields `roomId`, `partyId`, `partyIds`.\n- `/exchange/v1/settlement/list` and `/collateral/v1/settlement`: fix typo, `assetid` -> `assetId`.\n- add some examples, fix some descriptions.\n\n* v0.9.4\n> 2023/05/18 by Darlzan\n\n- `/exchange/v1/settlement/network`: The settlement network should be specified for a currency, so change the field `assetId` to `currency`.\n- Added new apis in the Exchange: `/exchange/v1/transaction/status` and `/exchange/v1/withdrawable`.\n- `/collateral/v1/settlement/tx/build` : add feild `replacedTxId`.\n- `/internal/v1/mpc/signature/result` and `/collateral/v1/settlement/tx/broadcast`: modify the fields about signature.\n- modify the description of `/collateral/v1/transactions`.\n\n* v0.9.3\n> 2023/05/12 by Darlzan\n\n- `/exchange/v1/address` : add request feild `settlementNetwork`.\n- `/collateral/v1/settlement/tx/build` : remove feilds `network`, `address` in request, they should be determined by the settlement details.\n- add security section for all "Exchange->Custody" apis.\n\n* v0.9.2\n> 2023/05/04 by Darlzan\n\n- add apis related to mpc business\n\n* v0.9.1\n> 2023/03/24 by Kevin\n\nSecond working version.\n* v0.9.0\n> 2023/03/12 by Kevin\n\nFirst version'},postman:{name:"/internal/v1/mpc/signature/result",description:{content:"Notify the signature result to the exchange",type:"text/plain"},url:{path:["internal","v1","mpc","signature","result"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/develop/openloop-api/openloop-api",custom_edit_url:null},u=void 0,h={unversionedId:"develop/openloop-api/internal-v-1-mpc-signature-result",id:"develop/openloop-api/internal-v-1-mpc-signature-result",title:"/internal/v1/mpc/signature/result",description:"Notify the signature result to the exchange",source:"@site/docs/develop/openloop-api/internal-v-1-mpc-signature-result.api.mdx",sourceDirName:"develop/openloop-api",slug:"/develop/openloop-api/internal-v-1-mpc-signature-result",permalink:"/docs/develop/openloop-api/internal-v-1-mpc-signature-result",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"internal-v-1-mpc-signature-result",title:"/internal/v1/mpc/signature/result",description:"Notify the signature result to the exchange",sidebar_label:"/internal/v1/mpc/signature/result",hide_title:!0,hide_table_of_contents:!0,api:{tags:["E-Custody->Exchange"],description:"Notify the signature result to the exchange",requestBody:{required:!0,content:{"application/json":{schema:{type:"object",properties:{requestId:{type:"string",description:"The request id that this result related to"},signature:{type:"string",example:"3e7badaf020a3975a6783ec2f7f44efe4e79731227b1b85367ae1da8fe01c144533469a705baa61468b267f107e075844c7b520366e985b42ecfb6884f730d4300",description:'The final signature, it\'s concatenated directly by the r, s, v value, as "r||s||v", and formatted in hexadecimal.'}},required:["requestId","signature"]}}}},responses:{200:{description:"Successful response",content:{"application/json":{schema:{type:"object",properties:{status:{type:"boolean",description:"Status of the request, False/True (failed/success)"},failedReason:{type:"string",nullable:!0,description:"The failed reason if the status is False"}},required:["status"]}}}}},method:"post",path:"/internal/v1/mpc/signature/result",securitySchemes:{ApiKeyAuth:{type:"apiKey",in:"header",name:"BIZ-API-KEY",description:"This API key is given to you by Sinohope when onboarding your exchange."},ApiNonce:{type:"apiKey",in:"header",name:"BIZ-API-NONCE",description:"A nonce value (timestamp) that is included in the data to be signed."},ApiSig:{type:"apiKey",in:"header",name:"BIZ-API-SIGNATURE",description:"signature of the request information(nonce,path,body) using the secret_key which is provided by Sinohope when onboarding your exchange."}},jsonRequestBodyExample:{requestId:"string",signature:"3e7badaf020a3975a6783ec2f7f44efe4e79731227b1b85367ae1da8fe01c144533469a705baa61468b267f107e075844c7b520366e985b42ecfb6884f730d4300"},info:{title:"OpenLoop API",version:"0.9.12",description:'\n\n# Response code definition\n\nCommonly, for all APIs, the HTTP status codes should use those registered by IANA.\nSee: <https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml>\n\nIn OpenLoop, we should use a few well defined HTTP status codes as follow:\n\n- `200`: Successful response. Refer to each API for the detailed response data.\n- `400`: Return Bad Request.\n- `401`: Unauthorized. Either API details are missing or invalid\n- `403`: Forbidden - You do not have access to the requested resource.\n- `415`: Unsupported media type. You need to use application/json.\n- `500`: Exchange/SinoHope internal error.\n\n# Changelog\n\nChanges log, dates are displayed in UTC, shows in a reverse order.\n\n* v0.9.12\n> 2023/06/28 by Darlzan\n\n- `/collateral/v1/settlement/tx/build` : update the response.\n\n* v0.9.11\n> 2023/06/16 by Darlzan\n\n- E-custody `/internal/v1/mpc/start` : add fields `transactionId`.\n\n* v0.9.10\n> 2023/06/14 by Darlzan\n\n- `/collateral/v1/settlement/address` : new added api.\n- `/collateral/v1/settlement/finish` : new added api.\n\n* v0.9.9\n> 2023/06/06 by Darlzan\n\n- `/collateral/v1/settlement/tx/build` : add fields `cryptography` in the response.\n- `/collateral/v1/settlement/tx/broadcast` : update single fields `signature` to object type fields `signatures`, in order to adapt to the UTXO transactions.\n\n* v0.9.8\n> 2023/06/01 by Darlzan\n\n- `/exchange/v1/mpc/pubkey` :contains two public keys, ecdsa-secp256k1 public key and eddsa-ed25519 public key.\n- `/exchange/v1/settlement/confirm` : add fields `approved`.\n\n* v0.9.7\n> 2023/05/30 by Darlzan\n\n- `/exchange/v1/deposit` : new added.\n- `/collateral/v1/deposit/balance` : new added.\n- `/exchange/v1/withdrawable`: change the type of the fields `amount` in response data from `number` to `string`.\n\n* v0.9.6\n> 2023/05/30 by Darlzan\n\n- `/exchange/v1/settlement/network` : change fields name `perferedNetwork` to `settlementNetwork`\n\n* v0.9.5\n> 2023/05/26 by Darlzan\n\n- `/exchange/v1/mpc/join` and `/internal/v1/mpc/join`: add fields `roomId`, `partyId`, `partyIds`.\n- `/exchange/v1/settlement/list` and `/collateral/v1/settlement`: fix typo, `assetid` -> `assetId`.\n- add some examples, fix some descriptions.\n\n* v0.9.4\n> 2023/05/18 by Darlzan\n\n- `/exchange/v1/settlement/network`: The settlement network should be specified for a currency, so change the field `assetId` to `currency`.\n- Added new apis in the Exchange: `/exchange/v1/transaction/status` and `/exchange/v1/withdrawable`.\n- `/collateral/v1/settlement/tx/build` : add feild `replacedTxId`.\n- `/internal/v1/mpc/signature/result` and `/collateral/v1/settlement/tx/broadcast`: modify the fields about signature.\n- modify the description of `/collateral/v1/transactions`.\n\n* v0.9.3\n> 2023/05/12 by Darlzan\n\n- `/exchange/v1/address` : add request feild `settlementNetwork`.\n- `/collateral/v1/settlement/tx/build` : remove feilds `network`, `address` in request, they should be determined by the settlement details.\n- add security section for all "Exchange->Custody" apis.\n\n* v0.9.2\n> 2023/05/04 by Darlzan\n\n- add apis related to mpc business\n\n* v0.9.1\n> 2023/03/24 by Kevin\n\nSecond working version.\n* v0.9.0\n> 2023/03/12 by Kevin\n\nFirst version'},postman:{name:"/internal/v1/mpc/signature/result",description:{content:"Notify the signature result to the exchange",type:"text/plain"},url:{path:["internal","v1","mpc","signature","result"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/develop/openloop-api/openloop-api",custom_edit_url:null},sidebar:"openLoopApiSidebar",previous:{title:"E-Custody->Exchange",permalink:"/docs/develop/openloop-api/e-custody-exchange"}},m={},y=[{value:"/internal/v1/mpc/signature/result",id:"internalv1mpcsignatureresult",level:2}],g={toc:y},f="wrapper";function b(e){let{components:t,...n}=e;return(0,s.kt)(f,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"internalv1mpcsignatureresult"},"/internal/v1/mpc/signature/result"),(0,s.kt)("p",null,"Notify the signature result to the exchange"),(0,s.kt)(o.Z,{mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"requestId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The request id that this result related to"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"signature",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"3e7badaf020a3975a6783ec2f7f44efe4e79731227b1b85367ae1da8fe01c144533469a705baa61468b267f107e075844c7b520366e985b42ecfb6884f730d4300",description:'The final signature, it\'s concatenated directly by the r, s, v value, as "r||s||v", and formatted in hexadecimal.'},mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)(i.Z,{mdxType:"ApiTabs"},(0,s.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Successful response")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.Z,{mdxType:"SchemaTabs"},(0,s.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"status",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"Status of the request, False/True (failed/success)"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"failedReason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0,description:"The failed reason if the status is False"},mdxType:"SchemaItem"})))),(0,s.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(r.Z,{responseExample:'{\n  "status": true,\n  "failedReason": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);