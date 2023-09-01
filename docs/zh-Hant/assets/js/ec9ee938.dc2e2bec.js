"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[6005],{48345:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>b,frontMatter:()=>p,metadata:()=>m,toc:()=>h});var a=n(87462),i=(n(67294),n(3905)),o=n(26389),s=n(94891),l=(n(75190),n(47507)),r=n(24310),d=n(63303),c=(n(75035),n(85162));const p={id:"collateral-v-1-deposit-balance",title:"/collateral/v1/deposit/balance",description:"Query the deposit balance details.",sidebar_label:"/collateral/v1/deposit/balance",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Exchange->Custody"],description:"Query the deposit balance details.",security:[{ApiKeyAuth:[],ApiNonce:[],ApiSig:[]}],requestBody:{required:!0,content:{"application/json":{schema:{type:"object",properties:{collateralId:{type:"string",description:"Unique identifier for the CVA account",example:"411136872665588",title:"CollateralId"},currency:{type:"string",description:"Currency identifier defined by the exchange",example:"USDT",title:"Currency"}},required:["collateralId","currency"]}}}},responses:{200:{description:"Successful response",content:{"application/json":{schema:{type:"object",properties:{collateralId:{type:"string",description:"Unique identifier for the CVA account",example:"411136872665588",title:"CollateralId"},currency:{type:"string",description:"Currency identifier defined by the exchange",example:"USDT",title:"Currency"},totalAmount:{type:"string",description:"total deposit balance of the currency",example:"36870000"},details:{type:"array",items:{type:"object",properties:{network:{type:"string",description:"Chain identifier defined by the exchange",example:"ETH",title:"Network"},assetId:{type:"string",description:"Asset identifier defined by Sinohope (different asset identifiers for the same currency on different chains, e.g., USDT_ETH, USDT_TRON)",example:"USDT_ETH",title:"AssetId"},amount:{type:"string",description:"the deposit amount(origin value, not converted acording to the decimals)",example:"36870000"}},required:["network","assetId","amount"]}}},required:["collateralId","currency","totalAmount","details"]}}}}},method:"post",path:"/collateral/v1/deposit/balance",securitySchemes:{ApiKeyAuth:{type:"apiKey",in:"header",name:"BIZ-API-KEY",description:"This API key is given to you by Sinohope when onboarding your exchange."},ApiNonce:{type:"apiKey",in:"header",name:"BIZ-API-NONCE",description:"A nonce value (timestamp) that is included in the data to be signed."},ApiSig:{type:"apiKey",in:"header",name:"BIZ-API-SIGNATURE",description:"signature of the request information(nonce,path,body) using the secret_key which is provided by Sinohope when onboarding your exchange."}},jsonRequestBodyExample:{collateralId:"411136872665588",currency:"USDT"},info:{title:"OpenLoop API",version:"0.9.12",description:'\n\n# Response code definition\n\nCommonly, for all APIs, the HTTP status codes should use those registered by IANA.\nSee: <https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml>\n\nIn OpenLoop, we should use a few well defined HTTP status codes as follow:\n\n- `200`: Successful response. Refer to each API for the detailed response data.\n- `400`: Return Bad Request.\n- `401`: Unauthorized. Either API details are missing or invalid\n- `403`: Forbidden - You do not have access to the requested resource.\n- `415`: Unsupported media type. You need to use application/json.\n- `500`: Exchange/SinoHope internal error.\n\n# Changelog\n\nChanges log, dates are displayed in UTC, shows in a reverse order.\n\n* v0.9.12\n> 2023/06/28 by Darlzan\n\n- `/collateral/v1/settlement/tx/build` : update the response.\n\n* v0.9.11\n> 2023/06/16 by Darlzan\n\n- E-custody `/internal/v1/mpc/start` : add fields `transactionId`.\n\n* v0.9.10\n> 2023/06/14 by Darlzan\n\n- `/collateral/v1/settlement/address` : new added api.\n- `/collateral/v1/settlement/finish` : new added api.\n\n* v0.9.9\n> 2023/06/06 by Darlzan\n\n- `/collateral/v1/settlement/tx/build` : add fields `cryptography` in the response.\n- `/collateral/v1/settlement/tx/broadcast` : update single fields `signature` to object type fields `signatures`, in order to adapt to the UTXO transactions.\n\n* v0.9.8\n> 2023/06/01 by Darlzan\n\n- `/exchange/v1/mpc/pubkey` :contains two public keys, ecdsa-secp256k1 public key and eddsa-ed25519 public key.\n- `/exchange/v1/settlement/confirm` : add fields `approved`.\n\n* v0.9.7\n> 2023/05/30 by Darlzan\n\n- `/exchange/v1/deposit` : new added.\n- `/collateral/v1/deposit/balance` : new added.\n- `/exchange/v1/withdrawable`: change the type of the fields `amount` in response data from `number` to `string`.\n\n* v0.9.6\n> 2023/05/30 by Darlzan\n\n- `/exchange/v1/settlement/network` : change fields name `perferedNetwork` to `settlementNetwork`\n\n* v0.9.5\n> 2023/05/26 by Darlzan\n\n- `/exchange/v1/mpc/join` and `/internal/v1/mpc/join`: add fields `roomId`, `partyId`, `partyIds`.\n- `/exchange/v1/settlement/list` and `/collateral/v1/settlement`: fix typo, `assetid` -> `assetId`.\n- add some examples, fix some descriptions.\n\n* v0.9.4\n> 2023/05/18 by Darlzan\n\n- `/exchange/v1/settlement/network`: The settlement network should be specified for a currency, so change the field `assetId` to `currency`.\n- Added new apis in the Exchange: `/exchange/v1/transaction/status` and `/exchange/v1/withdrawable`.\n- `/collateral/v1/settlement/tx/build` : add feild `replacedTxId`.\n- `/internal/v1/mpc/signature/result` and `/collateral/v1/settlement/tx/broadcast`: modify the fields about signature.\n- modify the description of `/collateral/v1/transactions`.\n\n* v0.9.3\n> 2023/05/12 by Darlzan\n\n- `/exchange/v1/address` : add request feild `settlementNetwork`.\n- `/collateral/v1/settlement/tx/build` : remove feilds `network`, `address` in request, they should be determined by the settlement details.\n- add security section for all "Exchange->Custody" apis.\n\n* v0.9.2\n> 2023/05/04 by Darlzan\n\n- add apis related to mpc business\n\n* v0.9.1\n> 2023/03/24 by Kevin\n\nSecond working version.\n* v0.9.0\n> 2023/03/12 by Kevin\n\nFirst version'},postman:{name:"/collateral/v1/deposit/balance",description:{content:"Query the deposit balance details.",type:"text/plain"},url:{path:["collateral","v1","deposit","balance"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"apikey",apikey:[{type:"any",value:"BIZ-API-KEY",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"post api-method",info_path:"docs/develop/openloop-api/openloop-api",custom_edit_url:null},u=void 0,m={unversionedId:"develop/openloop-api/collateral-v-1-deposit-balance",id:"develop/openloop-api/collateral-v-1-deposit-balance",title:"/collateral/v1/deposit/balance",description:"Query the deposit balance details.",source:"@site/i18n/zh-Hant/docusaurus-plugin-content-docs/current/develop/openloop-api/collateral-v-1-deposit-balance.api.mdx",sourceDirName:"develop/openloop-api",slug:"/develop/openloop-api/collateral-v-1-deposit-balance",permalink:"/zh-Hant/docs/develop/openloop-api/collateral-v-1-deposit-balance",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"collateral-v-1-deposit-balance",title:"/collateral/v1/deposit/balance",description:"Query the deposit balance details.",sidebar_label:"/collateral/v1/deposit/balance",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Exchange->Custody"],description:"Query the deposit balance details.",security:[{ApiKeyAuth:[],ApiNonce:[],ApiSig:[]}],requestBody:{required:!0,content:{"application/json":{schema:{type:"object",properties:{collateralId:{type:"string",description:"Unique identifier for the CVA account",example:"411136872665588",title:"CollateralId"},currency:{type:"string",description:"Currency identifier defined by the exchange",example:"USDT",title:"Currency"}},required:["collateralId","currency"]}}}},responses:{200:{description:"Successful response",content:{"application/json":{schema:{type:"object",properties:{collateralId:{type:"string",description:"Unique identifier for the CVA account",example:"411136872665588",title:"CollateralId"},currency:{type:"string",description:"Currency identifier defined by the exchange",example:"USDT",title:"Currency"},totalAmount:{type:"string",description:"total deposit balance of the currency",example:"36870000"},details:{type:"array",items:{type:"object",properties:{network:{type:"string",description:"Chain identifier defined by the exchange",example:"ETH",title:"Network"},assetId:{type:"string",description:"Asset identifier defined by Sinohope (different asset identifiers for the same currency on different chains, e.g., USDT_ETH, USDT_TRON)",example:"USDT_ETH",title:"AssetId"},amount:{type:"string",description:"the deposit amount(origin value, not converted acording to the decimals)",example:"36870000"}},required:["network","assetId","amount"]}}},required:["collateralId","currency","totalAmount","details"]}}}}},method:"post",path:"/collateral/v1/deposit/balance",securitySchemes:{ApiKeyAuth:{type:"apiKey",in:"header",name:"BIZ-API-KEY",description:"This API key is given to you by Sinohope when onboarding your exchange."},ApiNonce:{type:"apiKey",in:"header",name:"BIZ-API-NONCE",description:"A nonce value (timestamp) that is included in the data to be signed."},ApiSig:{type:"apiKey",in:"header",name:"BIZ-API-SIGNATURE",description:"signature of the request information(nonce,path,body) using the secret_key which is provided by Sinohope when onboarding your exchange."}},jsonRequestBodyExample:{collateralId:"411136872665588",currency:"USDT"},info:{title:"OpenLoop API",version:"0.9.12",description:'\n\n# Response code definition\n\nCommonly, for all APIs, the HTTP status codes should use those registered by IANA.\nSee: <https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml>\n\nIn OpenLoop, we should use a few well defined HTTP status codes as follow:\n\n- `200`: Successful response. Refer to each API for the detailed response data.\n- `400`: Return Bad Request.\n- `401`: Unauthorized. Either API details are missing or invalid\n- `403`: Forbidden - You do not have access to the requested resource.\n- `415`: Unsupported media type. You need to use application/json.\n- `500`: Exchange/SinoHope internal error.\n\n# Changelog\n\nChanges log, dates are displayed in UTC, shows in a reverse order.\n\n* v0.9.12\n> 2023/06/28 by Darlzan\n\n- `/collateral/v1/settlement/tx/build` : update the response.\n\n* v0.9.11\n> 2023/06/16 by Darlzan\n\n- E-custody `/internal/v1/mpc/start` : add fields `transactionId`.\n\n* v0.9.10\n> 2023/06/14 by Darlzan\n\n- `/collateral/v1/settlement/address` : new added api.\n- `/collateral/v1/settlement/finish` : new added api.\n\n* v0.9.9\n> 2023/06/06 by Darlzan\n\n- `/collateral/v1/settlement/tx/build` : add fields `cryptography` in the response.\n- `/collateral/v1/settlement/tx/broadcast` : update single fields `signature` to object type fields `signatures`, in order to adapt to the UTXO transactions.\n\n* v0.9.8\n> 2023/06/01 by Darlzan\n\n- `/exchange/v1/mpc/pubkey` :contains two public keys, ecdsa-secp256k1 public key and eddsa-ed25519 public key.\n- `/exchange/v1/settlement/confirm` : add fields `approved`.\n\n* v0.9.7\n> 2023/05/30 by Darlzan\n\n- `/exchange/v1/deposit` : new added.\n- `/collateral/v1/deposit/balance` : new added.\n- `/exchange/v1/withdrawable`: change the type of the fields `amount` in response data from `number` to `string`.\n\n* v0.9.6\n> 2023/05/30 by Darlzan\n\n- `/exchange/v1/settlement/network` : change fields name `perferedNetwork` to `settlementNetwork`\n\n* v0.9.5\n> 2023/05/26 by Darlzan\n\n- `/exchange/v1/mpc/join` and `/internal/v1/mpc/join`: add fields `roomId`, `partyId`, `partyIds`.\n- `/exchange/v1/settlement/list` and `/collateral/v1/settlement`: fix typo, `assetid` -> `assetId`.\n- add some examples, fix some descriptions.\n\n* v0.9.4\n> 2023/05/18 by Darlzan\n\n- `/exchange/v1/settlement/network`: The settlement network should be specified for a currency, so change the field `assetId` to `currency`.\n- Added new apis in the Exchange: `/exchange/v1/transaction/status` and `/exchange/v1/withdrawable`.\n- `/collateral/v1/settlement/tx/build` : add feild `replacedTxId`.\n- `/internal/v1/mpc/signature/result` and `/collateral/v1/settlement/tx/broadcast`: modify the fields about signature.\n- modify the description of `/collateral/v1/transactions`.\n\n* v0.9.3\n> 2023/05/12 by Darlzan\n\n- `/exchange/v1/address` : add request feild `settlementNetwork`.\n- `/collateral/v1/settlement/tx/build` : remove feilds `network`, `address` in request, they should be determined by the settlement details.\n- add security section for all "Exchange->Custody" apis.\n\n* v0.9.2\n> 2023/05/04 by Darlzan\n\n- add apis related to mpc business\n\n* v0.9.1\n> 2023/03/24 by Kevin\n\nSecond working version.\n* v0.9.0\n> 2023/03/12 by Kevin\n\nFirst version'},postman:{name:"/collateral/v1/deposit/balance",description:{content:"Query the deposit balance details.",type:"text/plain"},url:{path:["collateral","v1","deposit","balance"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"apikey",apikey:[{type:"any",value:"BIZ-API-KEY",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"post api-method",info_path:"docs/develop/openloop-api/openloop-api",custom_edit_url:null},sidebar:"openLoopApiSidebar",previous:{title:"/collateral/v1/transactions",permalink:"/zh-Hant/docs/develop/openloop-api/collateral-v-1-transactions"},next:{title:"Exchange->E-Custody",permalink:"/zh-Hant/docs/develop/openloop-api/exchange-e-custody"}},y={},h=[{value:"/collateral/v1/deposit/balance",id:"collateralv1depositbalance",level:2}],v={toc:h},f="wrapper";function b(e){let{components:t,...n}=e;return(0,i.kt)(f,(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"collateralv1depositbalance"},"/collateral/v1/deposit/balance"),(0,i.kt)("p",null,"Query the deposit balance details."),(0,i.kt)(s.Z,{mdxType:"MimeTabs"},(0,i.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(r.Z,{collapsible:!1,name:"collateralId",required:!0,schemaName:"CollateralId",qualifierMessage:void 0,schema:{type:"string",description:"Unique identifier for the CVA account",example:"411136872665588",title:"CollateralId"},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"currency",required:!0,schemaName:"Currency",qualifierMessage:void 0,schema:{type:"string",description:"Currency identifier defined by the exchange",example:"USDT",title:"Currency"},mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)(o.Z,{mdxType:"ApiTabs"},(0,i.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Successful response")),(0,i.kt)("div",null,(0,i.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(d.Z,{mdxType:"SchemaTabs"},(0,i.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(r.Z,{collapsible:!1,name:"collateralId",required:!0,schemaName:"CollateralId",qualifierMessage:void 0,schema:{type:"string",description:"Unique identifier for the CVA account",example:"411136872665588",title:"CollateralId"},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"currency",required:!0,schemaName:"Currency",qualifierMessage:void 0,schema:{type:"string",description:"Currency identifier defined by the exchange",example:"USDT",title:"Currency"},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"totalAmount",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"total deposit balance of the currency",example:"36870000"},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"details"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(r.Z,{collapsible:!1,name:"network",required:!0,schemaName:"Network",qualifierMessage:void 0,schema:{type:"string",description:"Chain identifier defined by the exchange",example:"ETH",title:"Network"},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"assetId",required:!0,schemaName:"AssetId",qualifierMessage:void 0,schema:{type:"string",description:"Asset identifier defined by Sinohope (different asset identifiers for the same currency on different chains, e.g., USDT_ETH, USDT_TRON)",example:"USDT_ETH",title:"AssetId"},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"amount",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"the deposit amount(origin value, not converted acording to the decimals)",example:"36870000"},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,i.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(l.Z,{responseExample:'{\n  "collateralId": "411136872665588",\n  "currency": "USDT",\n  "totalAmount": "36870000",\n  "details": [\n    {\n      "network": "ETH",\n      "assetId": "USDT_ETH",\n      "amount": "36870000"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);