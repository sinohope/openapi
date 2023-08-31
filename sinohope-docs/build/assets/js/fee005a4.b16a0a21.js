"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[5712],{26336:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>b,frontMatter:()=>m,metadata:()=>u,toc:()=>y});var a=n(87462),s=(n(67294),n(3905)),i=n(26389),o=n(94891),r=n(75190),d=n(47507),l=n(24310),p=n(63303),c=(n(75035),n(85162));const m={id:"exchange-v-1-settlement-status",title:"/exchange/v1/settlement/status",description:"Query the settlement progress from the exchange to CVA",sidebar_label:"/exchange/v1/settlement/status",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Custody->Exchange"],description:"Query the settlement progress from the exchange to CVA",parameters:[{name:"settlementId",in:"query",required:!0,schema:{type:"string"},description:"Unique identifier for a settlement batch"}],responses:{200:{description:"Successful response",content:{"application/json":{schema:{type:"object",properties:{data:{type:"array",description:"Asset list transferred from the exchange to CVA",items:{type:"object",properties:{assetId:{type:"string",description:"Asset identifier defined by Sinohope (different asset identifiers for the same currency on different chains, e.g., USDT_ETH, USDT_TRON)",example:"USDT_ETH"},status:{type:"string",description:"Settlement status, enumeration to be determined",example:"COMPLETED"},txHash:{type:"string",nullable:!0,description:"Transaction hash, if the transfer is completed",example:"0x1aa0a50ca9db654a7dc2788548b43d121a59463621485be35515063d4a1382b6"}},required:["assetId","status"],title:"assetTransStatusItem"}}}}}}}},method:"get",path:"/exchange/v1/settlement/status",securitySchemes:{ApiKeyAuth:{type:"apiKey",in:"header",name:"BIZ-API-KEY",description:"This API key is given to you by Sinohope when onboarding your exchange."},ApiNonce:{type:"apiKey",in:"header",name:"BIZ-API-NONCE",description:"A nonce value (timestamp) that is included in the data to be signed."},ApiSig:{type:"apiKey",in:"header",name:"BIZ-API-SIGNATURE",description:"signature of the request information(nonce,path,body) using the secret_key which is provided by Sinohope when onboarding your exchange."}},info:{title:"OpenLoop API",version:"0.9.12",description:'\n\n# Glossary\n\nRoles: User U, Exchange E, Custodian Platform C.\n\nMain Exchange Account: Abbreviated as MEA. It is an account opened by user U on exchange E, usually identified by an API key.\n\nCollateral Vault Account: Abbreviated as CVA. When user U needs to map assets to exchange E, a CVA is created on custodian platform C. CVA is one-to-one mapped with MEA. The unique ID of CVA is collateralId.\n\n\n# Main Steps\n\n## Initiate\n\n![](./images/setup_cva_share.png)\n\n![](./images/setup_seq.png)\n\n## Deposit\n\n![](./images/deposit.png)\n\n## Settlement\n\n![](./images/settlement.png)\n\n## Withdrawal\n\n![](./images/withdraw.png)\n\n# Response code definition\n\nCommonly, for all APIs, the HTTP status codes should use those registered by IANA.\nSee: <https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml>\n\nIn OpenLoop, we should use a few well defined HTTP status codes as follow:\n\n- `200`: Successful response. Refer to each API for the detailed response data.\n- `400`: Return Bad Request.\n- `401`: Unauthorized. Either API details are missing or invalid\n- `403`: Forbidden - You do not have access to the requested resource.\n- `415`: Unsupported media type. You need to use application/json.\n- `500`: Exchange/SinoHope internal error.\n\n# Changelog\n\nChanges log, dates are displayed in UTC, shows in a reverse order.\n\n* v0.9.12\n> 2023/06/28 by Darlzan\n\n- `/collateral/v1/settlement/tx/build` : update the response.\n\n* v0.9.11\n> 2023/06/16 by Darlzan\n\n- E-custody `/internal/v1/mpc/start` : add fields `transactionId`.\n\n* v0.9.10\n> 2023/06/14 by Darlzan\n\n- `/collateral/v1/settlement/address` : new added api.\n- `/collateral/v1/settlement/finish` : new added api.\n\n* v0.9.9\n> 2023/06/06 by Darlzan\n\n- `/collateral/v1/settlement/tx/build` : add fields `cryptography` in the response.\n- `/collateral/v1/settlement/tx/broadcast` : update single fields `signature` to object type fields `signatures`, in order to adapt to the UTXO transactions.\n\n* v0.9.8\n> 2023/06/01 by Darlzan\n\n- `/exchange/v1/mpc/pubkey` :contains two public keys, ecdsa-secp256k1 public key and eddsa-ed25519 public key.\n- `/exchange/v1/settlement/confirm` : add fields `approved`.\n\n* v0.9.7\n> 2023/05/30 by Darlzan\n\n- `/exchange/v1/deposit` : new added.\n- `/collateral/v1/deposit/balance` : new added.\n- `/exchange/v1/withdrawable`: change the type of the fields `amount` in response data from `number` to `string`.\n\n* v0.9.6\n> 2023/05/30 by Darlzan\n\n- `/exchange/v1/settlement/network` : change fields name `perferedNetwork` to `settlementNetwork`\n\n* v0.9.5\n> 2023/05/26 by Darlzan\n\n- `/exchange/v1/mpc/join` and `/internal/v1/mpc/join`: add fields `roomId`, `partyId`, `partyIds`.\n- `/exchange/v1/settlement/list` and `/collateral/v1/settlement`: fix typo, `assetid` -> `assetId`.\n- add some examples, fix some descriptions.\n\n* v0.9.4\n> 2023/05/18 by Darlzan\n\n- `/exchange/v1/settlement/network`: The settlement network should be specified for a currency, so change the field `assetId` to `currency`.\n- Added new apis in the Exchange: `/exchange/v1/transaction/status` and `/exchange/v1/withdrawable`.\n- `/collateral/v1/settlement/tx/build` : add feild `replacedTxId`.\n- `/internal/v1/mpc/signature/result` and `/collateral/v1/settlement/tx/broadcast`: modify the fields about signature.\n- modify the description of `/collateral/v1/transactions`.\n\n* v0.9.3\n> 2023/05/12 by Darlzan\n\n- `/exchange/v1/address` : add request feild `settlementNetwork`.\n- `/collateral/v1/settlement/tx/build` : remove feilds `network`, `address` in request, they should be determined by the settlement details.\n- add security section for all "Exchange->Custody" apis.\n\n* v0.9.2\n> 2023/05/04 by Darlzan\n\n- add apis related to mpc business\n\n* v0.9.1\n> 2023/03/24 by Kevin\n\nSecond working version.\n* v0.9.0\n> 2023/03/12 by Kevin\n\nFirst version'},postman:{name:"/exchange/v1/settlement/status",description:{content:"Query the settlement progress from the exchange to CVA",type:"text/plain"},url:{path:["exchange","v1","settlement","status"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) Unique identifier for a settlement batch",type:"text/plain"},key:"settlementId",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/develop/openloop-api/openloop-api",custom_edit_url:null},h=void 0,u={unversionedId:"develop/openloop-api/exchange-v-1-settlement-status",id:"develop/openloop-api/exchange-v-1-settlement-status",title:"/exchange/v1/settlement/status",description:"Query the settlement progress from the exchange to CVA",source:"@site/docs/develop/openloop-api/exchange-v-1-settlement-status.api.mdx",sourceDirName:"develop/openloop-api",slug:"/develop/openloop-api/exchange-v-1-settlement-status",permalink:"/docs/develop/openloop-api/exchange-v-1-settlement-status",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"exchange-v-1-settlement-status",title:"/exchange/v1/settlement/status",description:"Query the settlement progress from the exchange to CVA",sidebar_label:"/exchange/v1/settlement/status",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Custody->Exchange"],description:"Query the settlement progress from the exchange to CVA",parameters:[{name:"settlementId",in:"query",required:!0,schema:{type:"string"},description:"Unique identifier for a settlement batch"}],responses:{200:{description:"Successful response",content:{"application/json":{schema:{type:"object",properties:{data:{type:"array",description:"Asset list transferred from the exchange to CVA",items:{type:"object",properties:{assetId:{type:"string",description:"Asset identifier defined by Sinohope (different asset identifiers for the same currency on different chains, e.g., USDT_ETH, USDT_TRON)",example:"USDT_ETH"},status:{type:"string",description:"Settlement status, enumeration to be determined",example:"COMPLETED"},txHash:{type:"string",nullable:!0,description:"Transaction hash, if the transfer is completed",example:"0x1aa0a50ca9db654a7dc2788548b43d121a59463621485be35515063d4a1382b6"}},required:["assetId","status"],title:"assetTransStatusItem"}}}}}}}},method:"get",path:"/exchange/v1/settlement/status",securitySchemes:{ApiKeyAuth:{type:"apiKey",in:"header",name:"BIZ-API-KEY",description:"This API key is given to you by Sinohope when onboarding your exchange."},ApiNonce:{type:"apiKey",in:"header",name:"BIZ-API-NONCE",description:"A nonce value (timestamp) that is included in the data to be signed."},ApiSig:{type:"apiKey",in:"header",name:"BIZ-API-SIGNATURE",description:"signature of the request information(nonce,path,body) using the secret_key which is provided by Sinohope when onboarding your exchange."}},info:{title:"OpenLoop API",version:"0.9.12",description:'\n\n# Glossary\n\nRoles: User U, Exchange E, Custodian Platform C.\n\nMain Exchange Account: Abbreviated as MEA. It is an account opened by user U on exchange E, usually identified by an API key.\n\nCollateral Vault Account: Abbreviated as CVA. When user U needs to map assets to exchange E, a CVA is created on custodian platform C. CVA is one-to-one mapped with MEA. The unique ID of CVA is collateralId.\n\n\n# Main Steps\n\n## Initiate\n\n![](./images/setup_cva_share.png)\n\n![](./images/setup_seq.png)\n\n## Deposit\n\n![](./images/deposit.png)\n\n## Settlement\n\n![](./images/settlement.png)\n\n## Withdrawal\n\n![](./images/withdraw.png)\n\n# Response code definition\n\nCommonly, for all APIs, the HTTP status codes should use those registered by IANA.\nSee: <https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml>\n\nIn OpenLoop, we should use a few well defined HTTP status codes as follow:\n\n- `200`: Successful response. Refer to each API for the detailed response data.\n- `400`: Return Bad Request.\n- `401`: Unauthorized. Either API details are missing or invalid\n- `403`: Forbidden - You do not have access to the requested resource.\n- `415`: Unsupported media type. You need to use application/json.\n- `500`: Exchange/SinoHope internal error.\n\n# Changelog\n\nChanges log, dates are displayed in UTC, shows in a reverse order.\n\n* v0.9.12\n> 2023/06/28 by Darlzan\n\n- `/collateral/v1/settlement/tx/build` : update the response.\n\n* v0.9.11\n> 2023/06/16 by Darlzan\n\n- E-custody `/internal/v1/mpc/start` : add fields `transactionId`.\n\n* v0.9.10\n> 2023/06/14 by Darlzan\n\n- `/collateral/v1/settlement/address` : new added api.\n- `/collateral/v1/settlement/finish` : new added api.\n\n* v0.9.9\n> 2023/06/06 by Darlzan\n\n- `/collateral/v1/settlement/tx/build` : add fields `cryptography` in the response.\n- `/collateral/v1/settlement/tx/broadcast` : update single fields `signature` to object type fields `signatures`, in order to adapt to the UTXO transactions.\n\n* v0.9.8\n> 2023/06/01 by Darlzan\n\n- `/exchange/v1/mpc/pubkey` :contains two public keys, ecdsa-secp256k1 public key and eddsa-ed25519 public key.\n- `/exchange/v1/settlement/confirm` : add fields `approved`.\n\n* v0.9.7\n> 2023/05/30 by Darlzan\n\n- `/exchange/v1/deposit` : new added.\n- `/collateral/v1/deposit/balance` : new added.\n- `/exchange/v1/withdrawable`: change the type of the fields `amount` in response data from `number` to `string`.\n\n* v0.9.6\n> 2023/05/30 by Darlzan\n\n- `/exchange/v1/settlement/network` : change fields name `perferedNetwork` to `settlementNetwork`\n\n* v0.9.5\n> 2023/05/26 by Darlzan\n\n- `/exchange/v1/mpc/join` and `/internal/v1/mpc/join`: add fields `roomId`, `partyId`, `partyIds`.\n- `/exchange/v1/settlement/list` and `/collateral/v1/settlement`: fix typo, `assetid` -> `assetId`.\n- add some examples, fix some descriptions.\n\n* v0.9.4\n> 2023/05/18 by Darlzan\n\n- `/exchange/v1/settlement/network`: The settlement network should be specified for a currency, so change the field `assetId` to `currency`.\n- Added new apis in the Exchange: `/exchange/v1/transaction/status` and `/exchange/v1/withdrawable`.\n- `/collateral/v1/settlement/tx/build` : add feild `replacedTxId`.\n- `/internal/v1/mpc/signature/result` and `/collateral/v1/settlement/tx/broadcast`: modify the fields about signature.\n- modify the description of `/collateral/v1/transactions`.\n\n* v0.9.3\n> 2023/05/12 by Darlzan\n\n- `/exchange/v1/address` : add request feild `settlementNetwork`.\n- `/collateral/v1/settlement/tx/build` : remove feilds `network`, `address` in request, they should be determined by the settlement details.\n- add security section for all "Exchange->Custody" apis.\n\n* v0.9.2\n> 2023/05/04 by Darlzan\n\n- add apis related to mpc business\n\n* v0.9.1\n> 2023/03/24 by Kevin\n\nSecond working version.\n* v0.9.0\n> 2023/03/12 by Kevin\n\nFirst version'},postman:{name:"/exchange/v1/settlement/status",description:{content:"Query the settlement progress from the exchange to CVA",type:"text/plain"},url:{path:["exchange","v1","settlement","status"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) Unique identifier for a settlement batch",type:"text/plain"},key:"settlementId",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/develop/openloop-api/openloop-api",custom_edit_url:null},sidebar:"openLoopApiSidebar",previous:{title:"/exchange/v1/settlement/confirm",permalink:"/docs/develop/openloop-api/exchange-v-1-settlement-confirm"},next:{title:"/exchange/v1/settlement/finish",permalink:"/docs/develop/openloop-api/exchange-v-1-settlement-finish"}},g={},y=[{value:"/exchange/v1/settlement/status",id:"exchangev1settlementstatus",level:2}],v={toc:y},f="wrapper";function b(e){let{components:t,...n}=e;return(0,s.kt)(f,(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"exchangev1settlementstatus"},"/exchange/v1/settlement/status"),(0,s.kt)("p",null,"Query the settlement progress from the exchange to CVA"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Query Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(r.Z,{className:"paramsItem",param:{name:"settlementId",in:"query",required:!0,schema:{type:"string"},description:"Unique identifier for a settlement batch"},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(i.Z,{mdxType:"ApiTabs"},(0,s.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Successful response")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"data"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Asset list transferred from the exchange to CVA")),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(l.Z,{collapsible:!1,name:"assetId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Asset identifier defined by Sinohope (different asset identifiers for the same currency on different chains, e.g., USDT_ETH, USDT_TRON)",example:"USDT_ETH"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"status",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Settlement status, enumeration to be determined",example:"COMPLETED"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"txHash",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0,description:"Transaction hash, if the transfer is completed",example:"0x1aa0a50ca9db654a7dc2788548b43d121a59463621485be35515063d4a1382b6"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(d.Z,{responseExample:'{\n  "data": [\n    {\n      "assetId": "USDT_ETH",\n      "status": "COMPLETED",\n      "txHash": "0x1aa0a50ca9db654a7dc2788548b43d121a59463621485be35515063d4a1382b6"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);