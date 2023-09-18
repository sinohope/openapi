"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[2957],{49476:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));const l={sidebar_position:2},r="General",o={unversionedId:"develop/get-started/general",id:"develop/get-started/general",title:"General",description:"Terminology",source:"@site/docs/develop/get-started/general.md",sourceDirName:"develop/get-started",slug:"/develop/get-started/general",permalink:"/docs/develop/get-started/general",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"getStartedSidebar",previous:{title:"Quick Start",permalink:"/docs/develop/get-started/quick-start"},next:{title:"Supported Blockchains and Coins",permalink:"/docs/develop/get-started/supported-coins"}},s={},d=[{value:"Terminology",id:"terminology",level:2},{value:"sinoId",id:"sinoid",level:3},{value:"requestId",id:"requestid",level:3},{value:"Rules for chainSymbol",id:"rules-for-chainsymbol",level:3},{value:"Rules for assetId",id:"rules-for-assetid",level:3},{value:"API Authentication",id:"api-authentication",level:2},{value:"Request Headers",id:"request-headers",level:3},{value:"Signature Construction",id:"signature-construction",level:3},{value:"Explanations of Each Part of Data",id:"explanations-of-each-part-of-data",level:3},{value:"DATA",id:"data",level:4},{value:"PATH",id:"path",level:4},{value:"TIMESTAMP",id:"timestamp",level:4},{value:"VERSION",id:"version",level:4},{value:"PUBLICKEY",id:"publickey",level:4},{value:"Request Example",id:"request-example",level:3},{value:"GET Request:",id:"get-request",level:4},{value:"POST Request:",id:"post-request",level:4},{value:"Additional Information",id:"additional-information",level:3},{value:"DEMO Library",id:"demo-library",level:4},{value:"Signature Algorithm",id:"signature-algorithm",level:4}],p={toc:d},u="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"general"},"General"),(0,i.kt)("h2",{id:"terminology"},"Terminology"),(0,i.kt)("h3",{id:"sinoid"},"sinoId"),(0,i.kt)("p",null,"For businesses involving MPC private key shares, including developer-requested transactions and signature-related operations (such as initiating transactions, initiating signatures, etc.), Sinohope will generate a unique identifier for each business, called sinoId."),(0,i.kt)("h3",{id:"requestid"},"requestId"),(0,i.kt)("p",null,"For requests that need to implement idempotency (such as initiating a transfer), the requester needs to provide a unique identifier for the API request, called ",(0,i.kt)("inlineCode",{parentName:"p"},"requestId"),". The requestId should be globally unique and ensure that the same requestId is used for multiple submissions of the same business request. ",(0,i.kt)("strong",{parentName:"p"},"The maximum allowed length is 120 ASCII characters."),"\nIt is recommended to use UUID or snowflake algorithm to generate a requestId."),(0,i.kt)("h3",{id:"rules-for-chainsymbol"},"Rules for chainSymbol"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"chainSymbol is the unique identifier for a blockchain;"),(0,i.kt)("li",{parentName:"ol"},"Distinguish between testnets and mainnets; "),(0,i.kt)("li",{parentName:"ol"},"Use uppercase letters for naming.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"For example:"),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"Mainnets use common abbreviations, such as ",(0,i.kt)("inlineCode",{parentName:"li"},"ETH"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"BTC")," for ",(0,i.kt)("inlineCode",{parentName:"li"},"Ethereum Mainnet"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"Bitcoin Mainnet")," respectively"),(0,i.kt)("li",{parentName:"ul"},"For testnets with specific names, use their testnet names, such as ",(0,i.kt)("inlineCode",{parentName:"li"},"GOERLI")," for ",(0,i.kt)("inlineCode",{parentName:"li"},"ETH Goerli Testnet"),"  "),(0,i.kt)("li",{parentName:"ul"},"For testnets without specific names, use ",(0,i.kt)("inlineCode",{parentName:"li"},"_TEST")," to distinguish, such as ",(0,i.kt)("inlineCode",{parentName:"li"},"BTC_TEST")," for ",(0,i.kt)("inlineCode",{parentName:"li"},"Bitcoin testnet3 Testnet")),(0,i.kt)("li",{parentName:"ul"},"Note: The chains supported by the system are subject to the ",(0,i.kt)("inlineCode",{parentName:"li"},"/v1/waas/common/get_supported_chains")," interface"))),(0,i.kt)("h3",{id:"rules-for-assetid"},"Rules for assetId"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"assetId is the unique identifier for a asset;"),(0,i.kt)("li",{parentName:"ol"},"Named as coin first then chain, separated by underscores; "),(0,i.kt)("li",{parentName:"ol"},"Use uppercase letters.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"For example: ",(0,i.kt)("inlineCode",{parentName:"p"},"USDT_GOERLI")," represents the USDT coin on the ETH Goerli testnet")),(0,i.kt)("h1",{id:"api-signature"},"API Signature"),(0,i.kt)("h2",{id:"api-authentication"},"API Authentication"),(0,i.kt)("p",null,"To strengthen API security, Sinohope requires developers to sign API requests with elliptic curve signatures. Sinohope API servers will verify the validity of requests and signatures."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"If you do not use the SDK provided by Sinohope, or if there is no SDK available for the programming language you want to use, you will need to construct the interface request yourself. In this case, you will need to understand the implementation details of Sinohope API authentication. If you use the SDK for integration development, you can skip this section!")),(0,i.kt)("p",null,"Notes:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Sinohope POST interfaces only support JSON data format.")),(0,i.kt)("h3",{id:"request-headers"},"Request Headers"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BIZ-API-KEY"),": Your public key string"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BIZ-API-SIGNATURE"),": Data signature string, HEX encoded string of the byte array formatted according to ",(0,i.kt)("inlineCode",{parentName:"li"},"ASN.1 DER")," after ECDSA signature "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BIZ-API-NONCE"),": timestamp involved in the composition of signed data")),(0,i.kt)("p",null,"Sinohope will verify your request validity by verifying your signature based on the above request headers and your request data."),(0,i.kt)("h3",{id:"signature-construction"},"Signature Construction"),(0,i.kt)("p",null,"Data to be signed:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"key"),(0,i.kt)("th",{parentName:"tr",align:null},"value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"data"),(0,i.kt)("td",{parentName:"tr",align:null},"String value composed of request parameters, see ",(0,i.kt)("inlineCode",{parentName:"td"},"DATA")," section below for details")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"path"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"PATH")," part of the request URL, see ",(0,i.kt)("inlineCode",{parentName:"td"},"PATH")," section below for details")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,i.kt)("td",{parentName:"tr",align:null},"API access UNIX EPOCH timestamp (accurate to milliseconds), see ",(0,i.kt)("inlineCode",{parentName:"td"},"TIMESTAMP")," section below for details")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"version"),(0,i.kt)("td",{parentName:"tr",align:null},"Fixed value ",(0,i.kt)("inlineCode",{parentName:"td"},"1.0.0"),", see ",(0,i.kt)("inlineCode",{parentName:"td"},"VERSION")," section below for details")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},'"" (empty string)'),(0,i.kt)("td",{parentName:"tr",align:null},"Public key string, see ",(0,i.kt)("inlineCode",{parentName:"td"},"PUBLICKEY")," section below for details")))),(0,i.kt)("p",null,"String concatenation rules:"),(0,i.kt)("p",null,"Sort the above key-value pairs in ascending order of the alphabet of the keys, then directly concatenate all ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," (no delimiter between them, with the public key string having no key field) to form the final string to be signed, ",(0,i.kt)("strong",{parentName:"p"},"encode the string to be signed as a byte array in UTF8"),", and then use the private key (privateKey) generated locally to perform ECDSA signature on the data (the specific algorithm is ",(0,i.kt)("inlineCode",{parentName:"p"},"SHA256withECDSA"),"), output the signature using ",(0,i.kt)("inlineCode",{parentName:"p"},"ASN.1 DER")," format, and then encode the byte array to a HEX string, then you will get the final signature string (see Sinohope demo: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/sinohope/sinohope-java-api"},"https://github.com/sinohope/sinohope-java-api"),")."),(0,i.kt)("p",null,"See the following sections for detailed explanations of each part of the data."),(0,i.kt)("h3",{id:"explanations-of-each-part-of-data"},"Explanations of Each Part of Data"),(0,i.kt)("h4",{id:"data"},"DATA"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For ",(0,i.kt)("inlineCode",{parentName:"li"},"GET")," request:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"https://api.develop.sinohope.com/v1/test?key=key&value=value\n")),(0,i.kt)("p",null,"First sort the parameters by key alphabetically, then url encode them, i.e.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"key=key\nvalue=value\n")),(0,i.kt)("p",null,"Since k comes before v alphabetically, key should be placed before value, then connect them with &, i.e.: ",(0,i.kt)("inlineCode",{parentName:"p"},"key=key&value=value")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For ",(0,i.kt)("inlineCode",{parentName:"li"},"POST")," request:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'{\n  "key": "key",\n  "value": "value"\n}\n')),(0,i.kt)("p",null,"Treat the entire body parameter as a String."),(0,i.kt)("h4",{id:"path"},"PATH"),(0,i.kt)("p",null,"The PATH part of the request URL, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/test/")," for ",(0,i.kt)("a",{parentName:"p",href:"https://api.develop.sinohope.com/v1/test/"},"https://api.develop.sinohope.com/v1/test/")),(0,i.kt)("h4",{id:"timestamp"},"TIMESTAMP"),(0,i.kt)("p",null,"UNIX EPOCH timestamp (accurate to milliseconds) when accessing API  "),(0,i.kt)("h4",{id:"version"},"VERSION"),(0,i.kt)("p",null,"Fixed value ",(0,i.kt)("inlineCode",{parentName:"p"},"1.0.0")),(0,i.kt)("h4",{id:"publickey"},"PUBLICKEY"),(0,i.kt)("p",null,"Your locally acquired public key, HEX encoded string after serializing to bytes array according to ",(0,i.kt)("inlineCode",{parentName:"p"},"X.509")," format."),(0,i.kt)("p",null,"Java code example for generating public and private keys: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/sinohope/sinohope-java-api#generate-key-pair"},"https://github.com/sinohope/sinohope-java-api#generate-key-pair")),(0,i.kt)("h3",{id:"request-example"},"Request Example"),(0,i.kt)("p",null,"This example uses the following key pair:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"publicKey: ",(0,i.kt)("inlineCode",{parentName:"li"},"3056301006072a8648ce3d020106052b8104000a03420004d8caf9385ee3f28df77eab42a0da4b8dc9462a8ad39dbb224c2802cc377df9dc09ac23d04748b40c2897d91bbd7fe859476c6f6fe9b2aa82607e8a48f9b7ac0d")),(0,i.kt)("li",{parentName:"ul"},"privateKey: ",(0,i.kt)("inlineCode",{parentName:"li"},"30818d020100301006072a8648ce3d020106052b8104000a04763074020101042049888755bcb8bead7efd451426692cebd00c2aba9fad62a6f753343085a7c060a00706052b8104000aa14403420004d8caf9385ee3f28df77eab42a0da4b8dc9462a8ad39dbb224c2802cc377df9dc09ac23d04748b40c2897d91bbd7fe859476c6f6fe9b2aa82607e8a48f9b7ac0d"))),(0,i.kt)("h4",{id:"get-request"},"GET Request:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Method"),(0,i.kt)("th",{parentName:"tr",align:"left"},"URL"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"GET"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://api.develop.sinohope.com/v1/test?key=key&value=value"},"https://api.develop.sinohope.com/v1/test?key=key&value=value"))))),(0,i.kt)("p",null,"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"key"),(0,i.kt)("td",{parentName:"tr",align:"left"},"key")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"value"),(0,i.kt)("td",{parentName:"tr",align:"left"},"value")))),(0,i.kt)("p",null,"Assuming timestamp is ",(0,i.kt)("inlineCode",{parentName:"p"},"1692614885094"),", data to be signed is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"datakey=key&value=valuepath/v1/testtimestamp1692614885094version1.0.03056301006072a8648ce3d020106052b8104000a03420004d8caf9385ee3f28df77eab42a0da4b8dc9462a8ad39dbb224c2802cc377df9dc09ac23d04748b40c2897d91bbd7fe859476c6f6fe9b2aa82607e8a48f9b7ac0d\n")),(0,i.kt)("p",null,"Signing the above data with the example private key, one possible result is: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"304402205db4c34ade2295f81bc2aa1be535a75cf4557dd9ad079d6804f2bc06c06c94ff0220380b75060f7a1abac6625a99cb684aaecc3135f99fc97333d1f99bccad6724d4\n")),(0,i.kt)("p",null,'The above signature result should be verifiable as "valid" using the example public key and data to be signed.'),(0,i.kt)("h4",{id:"post-request"},"POST Request:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Method"),(0,i.kt)("th",{parentName:"tr",align:"left"},"URL"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"POST"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://api.develop.sinohope.com/v1/test"},"https://api.develop.sinohope.com/v1/test"))))),(0,i.kt)("p",null,"Parameters: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'{\n  "key": "key",\n  "value": "value"\n} \n')),(0,i.kt)("p",null,"Assuming timestamp is ",(0,i.kt)("inlineCode",{parentName:"p"},"1692614885153"),", data to be signed is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'data{"key":"key","value":"value"}path/v1/testtimestamp1692614885153version1.0.03056301006072a8648ce3d020106052b8104000a03420004d8caf9385ee3f28df77eab42a0da4b8dc9462a8ad39dbb224c2802cc377df9dc09ac23d04748b40c2897d91bbd7fe859476c6f6fe9b2aa82607e8a48f9b7ac0d\n')),(0,i.kt)("p",null,"Signing the above data with the example private key, one possible result is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"30440220439fb1cb1860d7621ab37db48a7c29ee488c182c7bddd25276b2bc97a35560190220764a04dee91b1d9fcf784c5ae24ab0c19443b2823adfa4ef06e0b63ed4563cf9\n")),(0,i.kt)("p",null,'The above signature result should be verifiable as "valid" using the example public key and data to be signed.'),(0,i.kt)("h3",{id:"additional-information"},"Additional Information"),(0,i.kt)("h4",{id:"demo-library"},"DEMO Library"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sinohope/sinohope-java-api"},"https://github.com/sinohope/sinohope-java-api")),(0,i.kt)("h4",{id:"signature-algorithm"},"Signature Algorithm"),(0,i.kt)("p",null,"Sinohope uses the ECDSA signature scheme based on the P-256 curve (also known as prime256v1 or secp256r1) and SHA256withECDSA algorithm for verification, see the demo above. If you encounter any problems during operation, please contact Sinohope staff at ",(0,i.kt)("a",{parentName:"p",href:"mailto:bd@newhuotech.com"},"bd@newhuotech.com")," to assist you in troubleshooting and resolving them together."))}m.isMDXComponent=!0}}]);