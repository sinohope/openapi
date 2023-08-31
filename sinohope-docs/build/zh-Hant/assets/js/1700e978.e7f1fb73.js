"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[5081],{41564:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>f,frontMatter:()=>c,metadata:()=>h,toc:()=>y});var a=n(87462),s=(n(67294),n(3905)),i=n(26389),r=n(94891),o=(n(75190),n(47507)),d=n(24310),p=n(63303),l=(n(75035),n(85162));const c={id:"internal-v-1-mpc-start",title:"/internal/v1/mpc/start",description:"Notify the exchange's mpc key share custody service to initiates an mpc signing",sidebar_label:"/internal/v1/mpc/start",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Exchange->E-Custody"],description:"Notify the exchange's mpc key share custody service to initiates an mpc signing",requestBody:{required:!0,content:{"application/json":{schema:{type:"object",properties:{requestId:{type:"string",description:"The unique identifier of this request"},userId:{type:"string",description:"A data needed for initiating an mpc signing"},cmrkPK:{type:"string",description:"The public key to identifies an mpc key share"},path:{type:"string",description:'The path to derive the "from" account.'},mpcType:{type:"string",description:'MPC business type, currently it should be "sign"'},network:{type:"string",description:"Chain identifier"},cryptography:{type:"string",description:'Either "ecdsa-secp256k1" or "eddsa-ed25519", determined by the network',example:"ecdsa-secp256k1"},message:{type:"string",description:"The message (unsigned transaction hash) to be signed"},timeToLive:{type:"number",description:"The total TTL of this mpc business"},transactionId:{type:"string",description:"Unique identifier for the related transaction"}},required:["requestId","userId","cmrkPK","path","mpcType","network","cryptography","message","timeToLive","transactionId"]}}}},responses:{200:{description:"Successful response",content:{"application/json":{schema:{type:"object",properties:{status:{type:"boolean",description:"Status of the request, False/True (failed/success)"},failedReason:{type:"string",nullable:!0,description:"The failed reason if the status is False"}},required:["status"]}}}}},method:"post",path:"/internal/v1/mpc/start",securitySchemes:{ApiKeyAuth:{type:"apiKey",in:"header",name:"BIZ-API-KEY",description:"This API key is given to you by Sinohope when onboarding your exchange."},ApiNonce:{type:"apiKey",in:"header",name:"BIZ-API-NONCE",description:"A nonce value (timestamp) that is included in the data to be signed."},ApiSig:{type:"apiKey",in:"header",name:"BIZ-API-SIGNATURE",description:"signature of the request information(nonce,path,body) using the secret_key which is provided by Sinohope when onboarding your exchange."}},jsonRequestBodyExample:{requestId:"string",userId:"string",cmrkPK:"string",path:"string",mpcType:"string",network:"string",cryptography:"ecdsa-secp256k1",message:"string",timeToLive:0,transactionId:"string"},info:{title:"OpenLoop API",version:"0.9.12",description:'# Changelog\n\nChanges log, dates are displayed in UTC, shows in a reverse order.\n\n### v0.9.12\n> 2023/06/28 by Darlzan\n\n- `/collateral/v1/settlement/tx/build` : update the response.\n\n### v0.9.11\n> 2023/06/16 by Darlzan\n\n- E-custody `/internal/v1/mpc/start` : add fields `transactionId`.\n\n### v0.9.10\n> 2023/06/14 by Darlzan\n\n- `/collateral/v1/settlement/address` : new added api.\n- `/collateral/v1/settlement/finish` : new added api.\n\n### v0.9.9\n> 2023/06/06 by Darlzan\n\n- `/collateral/v1/settlement/tx/build` : add fields `cryptography` in the response.\n- `/collateral/v1/settlement/tx/broadcast` : update single fields `signature` to object type fields `signatures`, in order to adapt to the UTXO transactions.\n\n### v0.9.8\n> 2023/06/01 by Darlzan\n\n- `/exchange/v1/mpc/pubkey` :contains two public keys, ecdsa-secp256k1 public key and eddsa-ed25519 public key.\n- `/exchange/v1/settlement/confirm` : add fields `approved`.\n\n### v0.9.7\n> 2023/05/30 by Darlzan\n\n- `/exchange/v1/deposit` : new added.\n- `/collateral/v1/deposit/balance` : new added.\n- `/exchange/v1/withdrawable`: change the type of the fields `amount` in response data from `number` to `string`.\n\n### v0.9.6\n> 2023/05/30 by Darlzan\n\n- `/exchange/v1/settlement/network` : change fields name `perferedNetwork` to `settlementNetwork`\n\n### v0.9.5\n> 2023/05/26 by Darlzan\n\n- `/exchange/v1/mpc/join` and `/internal/v1/mpc/join`: add fields `roomId`, `partyId`, `partyIds`.\n- `/exchange/v1/settlement/list` and `/collateral/v1/settlement`: fix typo, `assetid` -> `assetId`.\n- add some examples, fix some descriptions.\n\n### v0.9.4\n> 2023/05/18 by Darlzan\n\n- `/exchange/v1/settlement/network`: The settlement network should be specified for a currency, so change the field `assetId` to `currency`.\n- Added new apis in the Exchange: `/exchange/v1/transaction/status` and `/exchange/v1/withdrawable`.\n- `/collateral/v1/settlement/tx/build` : add feild `replacedTxId`.\n- `/internal/v1/mpc/signature/result` and `/collateral/v1/settlement/tx/broadcast`: modify the fields about signature.\n- modify the description of `/collateral/v1/transactions`.\n\n### v0.9.3\n> 2023/05/12 by Darlzan\n\n- `/exchange/v1/address` : add request feild `settlementNetwork`.\n- `/collateral/v1/settlement/tx/build` : remove feilds `network`, `address` in request, they should be determined by the settlement details.\n- add security section for all "Exchange->Custody" apis.\n\n### v0.9.2\n> 2023/05/04 by Darlzan\n\n- add apis related to mpc business\n\n### v0.9.1\n> 2023/03/24 by Kevin\n\nSecond working version.\n### v0.9.0\n> 2023/03/12 by Kevin\n\nFirst version\n\n# Glossary\n\nRoles: User U, Exchange E, Custodian Platform C.\n\nMain Exchange Account: Abbreviated as MEA. It is an account opened by user U on exchange E, usually identified by an API key.\n\nCollateral Vault Account: Abbreviated as CVA. When user U needs to map assets to exchange E, a CVA is created on custodian platform C. CVA is one-to-one mapped with MEA. The unique ID of CVA is collateralId.\n\n\n# Main Steps\n\n## Initiate\n\n![](./images/setup_cva_share.png)\n\n![](./images/setup_seq.png)\n\n## Deposit\n\n![](./images/deposit.png)\n\n## Settlement\n\n![](./images/settlement.png)\n\n## Withdrawal\n\n![](./images/withdraw.png)\n\n# Response code definition\n\nCommonly, for all APIs, the HTTP status codes should use those registered by IANA.\nSee: <https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml>\n\nIn OpenLoop, we should use a few well defined HTTP status codes as follow:\n\n- `200`: Successful response. Refer to each API for the detailed response data.\n- `400`: Return Bad Request.\n- `401`: Unauthorized. Either API details are missing or invalid\n- `403`: Forbidden - You do not have access to the requested resource.\n- `415`: Unsupported media type. You need to use application/json.\n- `500`: Exchange/SinoHope internal error.\n'},postman:{name:"/internal/v1/mpc/start",description:{content:"Notify the exchange's mpc key share custody service to initiates an mpc signing",type:"text/plain"},url:{path:["internal","v1","mpc","start"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/develop/openloop-api/openloop-api",custom_edit_url:null},m=void 0,h={unversionedId:"develop/openloop-api/internal-v-1-mpc-start",id:"develop/openloop-api/internal-v-1-mpc-start",title:"/internal/v1/mpc/start",description:"Notify the exchange's mpc key share custody service to initiates an mpc signing",source:"@site/i18n/zh-Hant/docusaurus-plugin-content-docs/current/develop/openloop-api/internal-v-1-mpc-start.api.mdx",sourceDirName:"develop/openloop-api",slug:"/develop/openloop-api/internal-v-1-mpc-start",permalink:"/zh-Hant/docs/develop/openloop-api/internal-v-1-mpc-start",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"internal-v-1-mpc-start",title:"/internal/v1/mpc/start",description:"Notify the exchange's mpc key share custody service to initiates an mpc signing",sidebar_label:"/internal/v1/mpc/start",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Exchange->E-Custody"],description:"Notify the exchange's mpc key share custody service to initiates an mpc signing",requestBody:{required:!0,content:{"application/json":{schema:{type:"object",properties:{requestId:{type:"string",description:"The unique identifier of this request"},userId:{type:"string",description:"A data needed for initiating an mpc signing"},cmrkPK:{type:"string",description:"The public key to identifies an mpc key share"},path:{type:"string",description:'The path to derive the "from" account.'},mpcType:{type:"string",description:'MPC business type, currently it should be "sign"'},network:{type:"string",description:"Chain identifier"},cryptography:{type:"string",description:'Either "ecdsa-secp256k1" or "eddsa-ed25519", determined by the network',example:"ecdsa-secp256k1"},message:{type:"string",description:"The message (unsigned transaction hash) to be signed"},timeToLive:{type:"number",description:"The total TTL of this mpc business"},transactionId:{type:"string",description:"Unique identifier for the related transaction"}},required:["requestId","userId","cmrkPK","path","mpcType","network","cryptography","message","timeToLive","transactionId"]}}}},responses:{200:{description:"Successful response",content:{"application/json":{schema:{type:"object",properties:{status:{type:"boolean",description:"Status of the request, False/True (failed/success)"},failedReason:{type:"string",nullable:!0,description:"The failed reason if the status is False"}},required:["status"]}}}}},method:"post",path:"/internal/v1/mpc/start",securitySchemes:{ApiKeyAuth:{type:"apiKey",in:"header",name:"BIZ-API-KEY",description:"This API key is given to you by Sinohope when onboarding your exchange."},ApiNonce:{type:"apiKey",in:"header",name:"BIZ-API-NONCE",description:"A nonce value (timestamp) that is included in the data to be signed."},ApiSig:{type:"apiKey",in:"header",name:"BIZ-API-SIGNATURE",description:"signature of the request information(nonce,path,body) using the secret_key which is provided by Sinohope when onboarding your exchange."}},jsonRequestBodyExample:{requestId:"string",userId:"string",cmrkPK:"string",path:"string",mpcType:"string",network:"string",cryptography:"ecdsa-secp256k1",message:"string",timeToLive:0,transactionId:"string"},info:{title:"OpenLoop API",version:"0.9.12",description:'# Changelog\n\nChanges log, dates are displayed in UTC, shows in a reverse order.\n\n### v0.9.12\n> 2023/06/28 by Darlzan\n\n- `/collateral/v1/settlement/tx/build` : update the response.\n\n### v0.9.11\n> 2023/06/16 by Darlzan\n\n- E-custody `/internal/v1/mpc/start` : add fields `transactionId`.\n\n### v0.9.10\n> 2023/06/14 by Darlzan\n\n- `/collateral/v1/settlement/address` : new added api.\n- `/collateral/v1/settlement/finish` : new added api.\n\n### v0.9.9\n> 2023/06/06 by Darlzan\n\n- `/collateral/v1/settlement/tx/build` : add fields `cryptography` in the response.\n- `/collateral/v1/settlement/tx/broadcast` : update single fields `signature` to object type fields `signatures`, in order to adapt to the UTXO transactions.\n\n### v0.9.8\n> 2023/06/01 by Darlzan\n\n- `/exchange/v1/mpc/pubkey` :contains two public keys, ecdsa-secp256k1 public key and eddsa-ed25519 public key.\n- `/exchange/v1/settlement/confirm` : add fields `approved`.\n\n### v0.9.7\n> 2023/05/30 by Darlzan\n\n- `/exchange/v1/deposit` : new added.\n- `/collateral/v1/deposit/balance` : new added.\n- `/exchange/v1/withdrawable`: change the type of the fields `amount` in response data from `number` to `string`.\n\n### v0.9.6\n> 2023/05/30 by Darlzan\n\n- `/exchange/v1/settlement/network` : change fields name `perferedNetwork` to `settlementNetwork`\n\n### v0.9.5\n> 2023/05/26 by Darlzan\n\n- `/exchange/v1/mpc/join` and `/internal/v1/mpc/join`: add fields `roomId`, `partyId`, `partyIds`.\n- `/exchange/v1/settlement/list` and `/collateral/v1/settlement`: fix typo, `assetid` -> `assetId`.\n- add some examples, fix some descriptions.\n\n### v0.9.4\n> 2023/05/18 by Darlzan\n\n- `/exchange/v1/settlement/network`: The settlement network should be specified for a currency, so change the field `assetId` to `currency`.\n- Added new apis in the Exchange: `/exchange/v1/transaction/status` and `/exchange/v1/withdrawable`.\n- `/collateral/v1/settlement/tx/build` : add feild `replacedTxId`.\n- `/internal/v1/mpc/signature/result` and `/collateral/v1/settlement/tx/broadcast`: modify the fields about signature.\n- modify the description of `/collateral/v1/transactions`.\n\n### v0.9.3\n> 2023/05/12 by Darlzan\n\n- `/exchange/v1/address` : add request feild `settlementNetwork`.\n- `/collateral/v1/settlement/tx/build` : remove feilds `network`, `address` in request, they should be determined by the settlement details.\n- add security section for all "Exchange->Custody" apis.\n\n### v0.9.2\n> 2023/05/04 by Darlzan\n\n- add apis related to mpc business\n\n### v0.9.1\n> 2023/03/24 by Kevin\n\nSecond working version.\n### v0.9.0\n> 2023/03/12 by Kevin\n\nFirst version\n\n# Glossary\n\nRoles: User U, Exchange E, Custodian Platform C.\n\nMain Exchange Account: Abbreviated as MEA. It is an account opened by user U on exchange E, usually identified by an API key.\n\nCollateral Vault Account: Abbreviated as CVA. When user U needs to map assets to exchange E, a CVA is created on custodian platform C. CVA is one-to-one mapped with MEA. The unique ID of CVA is collateralId.\n\n\n# Main Steps\n\n## Initiate\n\n![](./images/setup_cva_share.png)\n\n![](./images/setup_seq.png)\n\n## Deposit\n\n![](./images/deposit.png)\n\n## Settlement\n\n![](./images/settlement.png)\n\n## Withdrawal\n\n![](./images/withdraw.png)\n\n# Response code definition\n\nCommonly, for all APIs, the HTTP status codes should use those registered by IANA.\nSee: <https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml>\n\nIn OpenLoop, we should use a few well defined HTTP status codes as follow:\n\n- `200`: Successful response. Refer to each API for the detailed response data.\n- `400`: Return Bad Request.\n- `401`: Unauthorized. Either API details are missing or invalid\n- `403`: Forbidden - You do not have access to the requested resource.\n- `415`: Unsupported media type. You need to use application/json.\n- `500`: Exchange/SinoHope internal error.\n'},postman:{name:"/internal/v1/mpc/start",description:{content:"Notify the exchange's mpc key share custody service to initiates an mpc signing",type:"text/plain"},url:{path:["internal","v1","mpc","start"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/develop/openloop-api/openloop-api",custom_edit_url:null},sidebar:"openLoopApiSidebar",previous:{title:"Exchange->E-Custody",permalink:"/zh-Hant/docs/develop/openloop-api/exchange-e-custody"},next:{title:"/internal/v1/mpc/join",permalink:"/zh-Hant/docs/develop/openloop-api/internal-v-1-mpc-join"}},u={},y=[{value:"/internal/v1/mpc/start",id:"internalv1mpcstart",level:2}],g={toc:y},v="wrapper";function f(e){let{components:t,...n}=e;return(0,s.kt)(v,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"internalv1mpcstart"},"/internal/v1/mpc/start"),(0,s.kt)("p",null,"Notify the exchange's mpc key share custody service to initiates an mpc signing"),(0,s.kt)(r.Z,{mdxType:"MimeTabs"},(0,s.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"requestId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The unique identifier of this request"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"userId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"A data needed for initiating an mpc signing"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"cmrkPK",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The public key to identifies an mpc key share"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"path",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:'The path to derive the "from" account.'},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"mpcType",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:'MPC business type, currently it should be "sign"'},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"network",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Chain identifier"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"cryptography",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:'Either "ecdsa-secp256k1" or "eddsa-ed25519", determined by the network',example:"ecdsa-secp256k1"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"message",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The message (unsigned transaction hash) to be signed"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"timeToLive",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The total TTL of this mpc business"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"transactionId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Unique identifier for the related transaction"},mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)(i.Z,{mdxType:"ApiTabs"},(0,s.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Successful response")),(0,s.kt)("div",null,(0,s.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"status",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"Status of the request, False/True (failed/success)"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"failedReason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0,description:"The failed reason if the status is False"},mdxType:"SchemaItem"})))),(0,s.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(o.Z,{responseExample:'{\n  "status": true,\n  "failedReason": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);