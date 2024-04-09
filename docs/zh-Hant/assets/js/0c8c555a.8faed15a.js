"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[8878],{38521:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>u,frontMatter:()=>p,metadata:()=>d,toc:()=>k});var l=a(87462),n=(a(67294),a(3905));const p={sidebar_position:2},i="General",d={unversionedId:"develop/get-started/general",id:"develop/get-started/general",title:"General",description:"\u672f\u8bed\u5b9a\u4e49",source:"@site/i18n/zh-Hant/docusaurus-plugin-content-docs/current/develop/get-started/general.md",sourceDirName:"develop/get-started",slug:"/develop/get-started/general",permalink:"/zh-Hant/docs/develop/get-started/general",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"getStartedSidebar",previous:{title:"Quick Start",permalink:"/zh-Hant/docs/develop/get-started/quick-start"},next:{title:"\u7cfb\u7edf\u652f\u6301\u7684\u516c\u94fe\u53ca\u5e01\u79cd",permalink:"/zh-Hant/docs/develop/get-started/supported-coins"}},r={},k=[{value:"\u672f\u8bed\u5b9a\u4e49",id:"\u672f\u8bed\u5b9a\u4e49",level:2},{value:"sinoId",id:"sinoid",level:3},{value:"requestId",id:"requestid",level:3},{value:"chainSymbol\u7684\u89c4\u5219",id:"chainsymbol\u7684\u89c4\u5219",level:3},{value:"assetId\u7684\u89c4\u5219",id:"assetid\u7684\u89c4\u5219",level:3},{value:"API \u8ba4\u8bc1",id:"api-\u8ba4\u8bc1",level:2},{value:"\u8bf7\u6c42\u5934",id:"\u8bf7\u6c42\u5934",level:3},{value:"\u7b7e\u540d\u6784\u9020",id:"\u7b7e\u540d\u6784\u9020",level:3},{value:"\u5404\u90e8\u5206\u6570\u636e\u89e3\u91ca",id:"\u5404\u90e8\u5206\u6570\u636e\u89e3\u91ca",level:3},{value:"DATA",id:"data",level:4},{value:"PATH",id:"path",level:4},{value:"TIMESTAMP",id:"timestamp",level:4},{value:"VERSION",id:"version",level:4},{value:"PUBLICKEY",id:"publickey",level:4},{value:"\u8bf7\u6c42\u793a\u4f8b",id:"\u8bf7\u6c42\u793a\u4f8b",level:3},{value:"GET\u8bf7\u6c42\uff1a",id:"get\u8bf7\u6c42",level:4},{value:"POST\u8bf7\u6c42\uff1a",id:"post\u8bf7\u6c42",level:4},{value:"\u65e0\u9700\u8bf7\u6c42\u53c2\u6570\u7684POST\u8bf7\u6c42\u7684\u5f85\u7b7e\u540d\u6570\u636e\u793a\u4f8b",id:"\u65e0\u9700\u8bf7\u6c42\u53c2\u6570\u7684post\u8bf7\u6c42\u7684\u5f85\u7b7e\u540d\u6570\u636e\u793a\u4f8b",level:4},{value:"\u9644\u52a0\u4fe1\u606f",id:"\u9644\u52a0\u4fe1\u606f",level:2},{value:"\u5f00\u53d1\u8054\u8c03\u5de5\u5177",id:"\u5f00\u53d1\u8054\u8c03\u5de5\u5177",level:3},{value:"\u7b7e\u540d\u7b97\u6cd5",id:"\u7b7e\u540d\u7b97\u6cd5",level:3}],o={toc:k},m="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,l.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"general"},"General"),(0,n.kt)("h2",{id:"\u672f\u8bed\u5b9a\u4e49"},"\u672f\u8bed\u5b9a\u4e49"),(0,n.kt)("h3",{id:"sinoid"},"sinoId"),(0,n.kt)("p",null,"\u5bf9\u4e8e\u6d89\u53ca\u5230MPC\u79c1\u94a5\u5206\u7247\u7684\u4e1a\u52a1\uff0c\u5305\u62ec\u5f00\u53d1\u8005\u8bf7\u6c42\u7684\u4ea4\u6613\u53ca\u7b7e\u540d\u7c7b\u4e1a\u52a1\uff08\u5982\u53d1\u8d77\u4ea4\u6613\u3001\u53d1\u8d77\u7b7e\u540d\u7b49\uff09\uff0cSinohope\u5747\u4f1a\u7ed9\u8be5\u4e1a\u52a1\u4ea7\u751f\u4e00\u4e2a\u552f\u4e00\u6807\u8bc6\uff0c\u5373 sinoId\u3002"),(0,n.kt)("h3",{id:"requestid"},"requestId"),(0,n.kt)("p",null,"\u5bf9\u4e8e\u9700\u8981\u5b9e\u73b0\u5e42\u7b49\u5904\u7406\u7684\u8bf7\u6c42\uff08\u5982\u53d1\u8d77\u8f6c\u8d26\uff09\uff0c\u8bf7\u6c42\u65b9\u9700\u8981\u4e3aAPI\u8bf7\u6c42\u63d0\u4f9b\u4e00\u4e2a\u552f\u4e00\u6807\u8bc6\uff0c\u5373 requestId\u3002requestId \u5e94\u5b9e\u73b0\u5168\u5c40\u552f\u4e00\u6027\uff0c\u5e76\u786e\u4fdd\u5bf9\u591a\u6b21\u63d0\u4ea4\u7684\u540c\u4e00\u4e2a\u4e1a\u52a1\u8bf7\u6c42\u4f7f\u7528\u540c\u4e00\u4e2arequestId\u3002",(0,n.kt)("strong",{parentName:"p"},"\u5141\u8bb8\u7684\u6700\u5927\u957f\u5ea6\u4e3a 120 \u4e2aASCII\u5b57\u7b26\u3002"),"\n\u5efa\u8bae\u4f7f\u7528 UUID \u6216\u96ea\u82b1\u7b97\u6cd5\u751f\u6210 requestId\u3002"),(0,n.kt)("h3",{id:"chainsymbol\u7684\u89c4\u5219"},"chainSymbol\u7684\u89c4\u5219"),(0,n.kt)("p",null,"1\u3001chainSymbol\u662f\u94fe\u914d\u7f6e\u7684\u552f\u4e00\u6807\u8bc6\uff1b"),(0,n.kt)("p",null,"2\u3001\u533a\u5206\u6d4b\u8bd5\u7f51\u548c\u6b63\u5f0f\u7f51\uff1b"),(0,n.kt)("p",null,"3\u3001\u4f7f\u7528\u5927\u5199\u5b57\u6bcd\u547d\u540d\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u4f8b\u5982\uff1a "),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"\u4e3b\u7f51\u4f7f\u7528\u5e38\u89c1\u7b80\u79f0\uff0c\u5982",(0,n.kt)("inlineCode",{parentName:"li"},"ETH"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"BTC")," \u5206\u522b\u662f ",(0,n.kt)("inlineCode",{parentName:"li"},"Ethereum \u4e3b\u7f51"),"/ ",(0,n.kt)("inlineCode",{parentName:"li"},"Bitcoin\u4e3b\u7f51")),(0,n.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u6709\u7279\u5b9a\u540d\u5b57\u7684\u6d4b\u8bd5\u7f51\u4f7f\u7528\u5176\u6d4b\u8bd5\u7f51\u540d\u5b57\uff0c\u5982\u7528",(0,n.kt)("inlineCode",{parentName:"li"},"GOERLI")," \u8868\u793a",(0,n.kt)("inlineCode",{parentName:"li"},"ETH Goerli \u6d4b\u8bd5\u7f51")),(0,n.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u65e0\u7279\u5b9a\u540d\u5b57\u7684\u6d4b\u8bd5\u7f51\uff0c\u4f7f\u7528",(0,n.kt)("inlineCode",{parentName:"li"},"_TEST"),"\u52a0\u4ee5\u533a\u5206\uff0c\u5982 ",(0,n.kt)("inlineCode",{parentName:"li"},"BTC_TEST")," \u8868\u793a ",(0,n.kt)("inlineCode",{parentName:"li"},"Bitcoin testnet3\u6d4b\u8bd5\u7f51")),(0,n.kt)("li",{parentName:"ul"},"\u6ce8\u610f\uff1a\u7cfb\u7edf\u652f\u6301\u7684\u94fe\uff0c\u4ee5",(0,n.kt)("inlineCode",{parentName:"li"},"/v1/waas/common/get_supported_chains"),"\u63a5\u53e3\u8fd4\u56de\u503c\u4e3a\u51c6"))),(0,n.kt)("h3",{id:"assetid\u7684\u89c4\u5219"},"assetId\u7684\u89c4\u5219"),(0,n.kt)("p",null,"1\u3001assetId\u662f\u8d44\u4ea7\uff08\u5e01\u79cd\uff09\u7684\u552f\u4e00\u6807\u8bc6\uff1b"),(0,n.kt)("p",null,"2\u3001\u547d\u540d\u65b9\u5f0f\u524d\u5e01(coin)\u540e\u94fe(chain)\uff0c\u4e2d\u95f4\u4ee5\u4e0b\u5212\u7ebf\u5206\u9694\uff1b"),(0,n.kt)("p",null,"3\u3001\u4f7f\u7528\u5927\u5199\u5b57\u6bcd\u547d\u540d\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u4f8b\u5982\uff1aUSDT_GOERLI \u662f ETH Goerli \u6d4b\u8bd5\u7f51\u4e0a\u7684\u7684\u4e00\u4e2a USDT \u5e01\u79cd")),(0,n.kt)("h1",{id:"api-signature"},"API Signature"),(0,n.kt)("h2",{id:"api-\u8ba4\u8bc1"},"API \u8ba4\u8bc1"),(0,n.kt)("p",null,"\u4e3a\u4e86\u52a0\u5f3a API \u5b89\u5168\uff0cSinohope \u8981\u6c42\u5f00\u53d1\u8005\u5bf9\u6240\u8c03\u7528\u7684 API \u8bf7\u6c42\u8fdb\u884c\u692d\u5706\u66f2\u7ebf\u7b7e\u540d\uff0cSinohope API \u670d\u52a1\u5668\u5c06\u4f1a\u6839\u636e\u6536\u5230\u7684\u8bf7\u6c42\u548c\u7b7e\u540d\u8fdb\u884c\u6709\u6548\u6027\u6821\u9a8c\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u82e5\u60a8\u672a\u4f7f\u7528Sinohope\u63d0\u4f9b\u7684 SDK\uff0c\u6216\u8005\u6682\u65e0\u60a8\u8981\u4f7f\u7528\u7684\u5f00\u53d1\u8bed\u8a00\u7684SDK\uff0c\u5219\u60a8\u9700\u8981\u81ea\u884c\u5b8c\u6210\u63a5\u53e3\u8bf7\u6c42\u6784\u9020\uff0c\u6b64\u65f6\uff0c\u60a8\u5c06\u9700\u8981\u4e86\u89e3Sinohope API\u8ba4\u8bc1\u7684\u5b9e\u73b0\u7ec6\u8282\u3002\u82e5\u60a8\u4f7f\u7528\u4e86SDK\u505a\u96c6\u6210\u5f00\u53d1\uff0c\u5219\u672c\u7ae0\u8282\u53ef\u8df3\u8fc7\uff01")),(0,n.kt)("p",null,"\u6ce8\u610f\u4e8b\u9879\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Sinohope POST\u63a5\u53e3\u4ec5\u652f\u6301JSON\u6570\u636e\u683c\u5f0f\u3002")),(0,n.kt)("h3",{id:"\u8bf7\u6c42\u5934"},"\u8bf7\u6c42\u5934"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"BIZ-API-KEY"),": \u60a8\u7684\u516c\u94a5\u5b57\u7b26\u4e32"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"BIZ-API-SIGNATURE"),": \u6570\u636e\u7b7e\u540d\u5b57\u7b26\u4e32\uff0c\u4e3a ECDSA\u7b7e\u540d\u7ed3\u679c\u6309 ",(0,n.kt)("inlineCode",{parentName:"li"},"ASN.1 DER"),"\u683c\u5f0f\u5316\u540e\u7684\u5b57\u8282\u6570\u7ec4\u7684 HEX\u7f16\u7801\u5b57\u7b26\u4e32"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"BIZ-API-NONCE"),": \u53c2\u4e0e\u6784\u6210\u7b7e\u540d\u6570\u636e\u7684 timestamp")),(0,n.kt)("p",null,"Sinohope\u5c06\u6309\u7167\u4e0a\u8ff0\u8bf7\u6c42\u5934\u53ca\u60a8\u7684\u8bf7\u6c42\u6570\u636e\u8fdb\u884c\u7b7e\u540d\u9a8c\u8bc1\uff0c\u4ece\u800c\u9a8c\u8bc1\u60a8\u7684\u8bf7\u6c42\u5408\u6cd5\u6027\u3002"),(0,n.kt)("h3",{id:"\u7b7e\u540d\u6784\u9020"},"\u7b7e\u540d\u6784\u9020"),(0,n.kt)("p",null,"\u5f85\u7b7e\u540d\u6570\u636e\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"key"),(0,n.kt)("th",{parentName:"tr",align:null},"value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"data"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u53c2\u6570\u6240\u7ec4\u6210\u7684\u5b57\u7b26\u4e32\u503c\uff0c\u8be6\u89c1\u4e0b\u6587 ",(0,n.kt)("inlineCode",{parentName:"td"},"DATA")," \u90e8\u5206\u7684\u5177\u4f53\u8bf4\u660e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"path"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42URL\u7684 ",(0,n.kt)("inlineCode",{parentName:"td"},"PATH")," \u90e8\u5206\uff0c\u8be6\u89c1\u4e0b\u6587 ",(0,n.kt)("inlineCode",{parentName:"td"},"PATH")," \u90e8\u5206\u7684\u5177\u4f53\u8bf4\u660e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8bbf\u95ee API\u65f6\u95f4\u6233\uff0c\u8be6\u89c1 ",(0,n.kt)("inlineCode",{parentName:"td"},"TIMESTAMP")," \u90e8\u5206\u7684\u5177\u4f53\u8bf4\u660e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"version"),(0,n.kt)("td",{parentName:"tr",align:null},"\u56fa\u5b9a\u503c",(0,n.kt)("inlineCode",{parentName:"td"},"1.0.0")," \u8be6\u89c1 ",(0,n.kt)("inlineCode",{parentName:"td"},"VERSION")," \u90e8\u5206\u7684\u5177\u4f53\u8bf4\u660e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},'""\uff08\u957f\u5ea6\u4e3a 0 \u7684\u5b57\u7b26\u4e32\uff09'),(0,n.kt)("td",{parentName:"tr",align:null},"\u516c\u94a5\u5b57\u7b26\u4e32 \u8be6\u89c1 ",(0,n.kt)("inlineCode",{parentName:"td"},"PUBLICKEY")," \u90e8\u5206\u7684\u5177\u4f53\u8bf4\u660e")))),(0,n.kt)("p",null,"\u5b57\u7b26\u4e32\u62fc\u63a5\u89c4\u5219\uff1a"),(0,n.kt)("p",null,"\u5bf9\u4e8e\u4e0a\u8ff0\u7684\u952e\u503c\u5bf9\uff0c\u6309 key \u7684\u5b57\u6bcd\u5e8f\u5347\u5e8f\u6392\u5e8f\u540e\uff0c\u5c06\u6240\u6709 ",(0,n.kt)("inlineCode",{parentName:"p"},"key")," ",(0,n.kt)("inlineCode",{parentName:"p"},"value")," \u76f4\u63a5\u62fc\u63a5\u8d77\u6765\uff08\u4e2d\u95f4\u6ca1\u6709\u8fde\u63a5\u7b26\uff0c\u5176\u4e2d\u6700\u540e\u7684 \u516c\u94a5\u5b57\u7b26\u4e32\u6ca1\u6709 key\u5b57\u6bb5\uff09\u5f62\u6210\u6700\u7ec8\u7684\u5f85\u7b7e\u540d\u6570\u636e\u5b57\u7b26\u4e32\uff0c",(0,n.kt)("strong",{parentName:"p"},"\u5c06\u5f85\u7b7e\u540d\u6570\u636e\u5b57\u7b26\u4e32\u6309UTF8\u7f16\u7801\u4e3a\u5b57\u8282\u6570\u7ec4"),"\u4e4b\u540e\uff0c\u4f7f\u7528\u60a8\u672c\u5730\u751f\u6210\u7684\u79c1\u94a5\uff08privateKey\uff09\uff0c\u5bf9\u6570\u636e\u4f7f\u7528\u79c1\u94a5\u8fdb\u884c\nECDSA \u7b7e\u540d\uff08\u5177\u4f53\u7b97\u6cd5\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"SHA256withECDSA"),"\uff09\uff0c\u7b7e\u540d\u7ed3\u679c\u6309 ",(0,n.kt)("inlineCode",{parentName:"p"},"ASN.1 DER")," \u683c\u5f0f\u5316\u5e76\u7f16\u7801\u4e3a Hex \u5b57\u7b26\u4e32, \u5373\u751f\u6210\u4e86\u7528\u4e8e\u5411 API \u670d\u52a1\u5668\u8fdb\u884c\u9a8c\u8bc1\u7684\u6700\u7ec8\u7b7e\u540d \uff08\u53ef\u53c2\u8003 Sinohope \u4f8b\u7a0b\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://github.com/sinohope/sinohope-java-api"},"https://github.com/sinohope/sinohope-java-api"),"\uff09\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u6ce8\u610f\u4e8b\u9879"),"\uff1a\u62fc\u63a5\u7684\u5b57\u7b26\u4e32\u4e2d\uff0c",(0,n.kt)("inlineCode",{parentName:"p"},"key"),"\u5bf9\u5e94\u7684\u5b57\u7b26\u4e32\u662f\u5fc5\u4e0d\u53ef\u5c11\u7684\u3002\u5bf9\u4e8e\u65e0\u8bf7\u6c42\u53c2\u6570\u7684\u63a5\u53e3\uff0c\u62fc\u63a5\u51fa\u6765\u7684\u5b57\u7b26\u4e32\u5c06\u4f1a\u4ee5\u5b57\u7b26\u4e32 ",(0,n.kt)("inlineCode",{parentName:"p"},"datapath")," \u5f00\u5934\u3002"),(0,n.kt)("p",null,"\u5404\u90e8\u5206\u6570\u636e\u5177\u4f53\u89e3\u91ca\uff0c\u89c1\u63a5\u4e0b\u6765\u7684\u7ae0\u8282\u3002"),(0,n.kt)("h3",{id:"\u5404\u90e8\u5206\u6570\u636e\u89e3\u91ca"},"\u5404\u90e8\u5206\u6570\u636e\u89e3\u91ca"),(0,n.kt)("h4",{id:"data"},"DATA"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u662f",(0,n.kt)("inlineCode",{parentName:"li"},"GET"),"\u8bf7\u6c42\uff1a")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},"https://api.develop.sinohope.com/v1/test?key=key&value=value\n")),(0,n.kt)("p",null,"\u5219\u5148\u5c06\u53c2\u6570 key \u6309\u7167\u5b57\u6bcd\u6392\u5e8f\uff0c\u7136\u540e\u8fdb\u884c url \u53c2\u6570\u5316\uff0c\u5373\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"key=key\nvalue=value\n")),(0,n.kt)("p",null,"\u56e0\u4e3a k \u5728\u5b57\u6bcd\u8868\u4e2d\u7684\u6392\u5e8f\u5728 v \u4e4b\u524d\uff0c\u6240\u4ee5 key \u8981\u653e\u5728 value \u4e4b\u524d\uff0c\u7136\u540e\u4f7f\u7528 & \u8fdb\u884c\u8fde\u63a5\uff0c\u5373\uff1a ",(0,n.kt)("inlineCode",{parentName:"p"},"key=key&value=value")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u662f",(0,n.kt)("inlineCode",{parentName:"li"},"POST"),"\u8bf7\u6c42\uff1a")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'{\n  "key": "key",\n  "value": "value"\n}\n')),(0,n.kt)("p",null,"\u5219\u5c06body\u6574\u4f53\u53c2\u6570\u5f53\u505aString\u5b57\u7b26\u4e32\u6765\u5904\u7406\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u5bf9\u4e8e\u65e0\u8bf7\u6c42\u53c2\u6570\u7684\u63a5\u53e3\uff0c\u4e0d\u5e94\u63d0\u4f9bbody\uff0c\u56e0\u6b64\u62fc\u63a5\u7684\u5b57\u7b26\u4e32\u4e2d\u5c06\u53ea\u6709",(0,n.kt)("inlineCode",{parentName:"strong"},"data"),"\uff0c\u5176\u540e\u7d27\u8ddf ",(0,n.kt)("inlineCode",{parentName:"strong"},"path"),"\u3002")),(0,n.kt)("h4",{id:"path"},"PATH"),(0,n.kt)("p",null,"\u8bf7\u6c42URL\u7684PATH\u90e8\u5206\uff0c \u4f8b\u5982",(0,n.kt)("a",{parentName:"p",href:"https://api.develop.sinohope.com/v1/test/"},"https://api.develop.sinohope.com/v1/test/")," \u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"/v1/test/")),(0,n.kt)("h4",{id:"timestamp"},"TIMESTAMP"),(0,n.kt)("p",null,"\u8bbf\u95ee API \u65f6\u7684 UNIX EPOCH \u65f6\u95f4\u6233 (\u7cbe\u786e\u5230\u6beb\u79d2)"),(0,n.kt)("h4",{id:"version"},"VERSION"),(0,n.kt)("p",null,"\u56fa\u5b9a\u503c",(0,n.kt)("inlineCode",{parentName:"p"},"1.0.0")),(0,n.kt)("h4",{id:"publickey"},"PUBLICKEY"),(0,n.kt)("p",null,"\u60a8\u672c\u5730\u83b7\u53d6\u7684\u516c\u94a5\uff0c\u6309 ",(0,n.kt)("inlineCode",{parentName:"p"},"X.509")," \u683c\u5f0f\u5e8f\u5217\u5316\u540e\u7684\u5b57\u8282\u6570\u7ec4\u518d\u6309 HEX \u7f16\u7801\u540e\u7684\u5b57\u7b26\u4e32\u3002"),(0,n.kt)("p",null,"Java\u4e2d\u83b7\u53d6\u516c\u79c1\u94a5\u4ee3\u7801\u793a\u4f8b ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/sinohope/sinohope-java-api#generate-key-pair"},"https://github.com/sinohope/sinohope-java-api#generate-key-pair")),(0,n.kt)("h3",{id:"\u8bf7\u6c42\u793a\u4f8b"},"\u8bf7\u6c42\u793a\u4f8b"),(0,n.kt)("p",null,"\u672c\u793a\u4f8b\u4f7f\u7528\u5982\u4e0b\u5bc6\u94a5\u5bf9\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"publicKey: ",(0,n.kt)("inlineCode",{parentName:"li"},"3056301006072a8648ce3d020106052b8104000a03420004d8caf9385ee3f28df77eab42a0da4b8dc9462a8ad39dbb224c2802cc377df9dc09ac23d04748b40c2897d91bbd7fe859476c6f6fe9b2aa82607e8a48f9b7ac0d")),(0,n.kt)("li",{parentName:"ul"},"privateKey: ",(0,n.kt)("inlineCode",{parentName:"li"},"30818d020100301006072a8648ce3d020106052b8104000a04763074020101042049888755bcb8bead7efd451426692cebd00c2aba9fad62a6f753343085a7c060a00706052b8104000aa14403420004d8caf9385ee3f28df77eab42a0da4b8dc9462a8ad39dbb224c2802cc377df9dc09ac23d04748b40c2897d91bbd7fe859476c6f6fe9b2aa82607e8a48f9b7ac0d"))),(0,n.kt)("h4",{id:"get\u8bf7\u6c42"},"GET\u8bf7\u6c42\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Method"),(0,n.kt)("th",{parentName:"tr",align:"left"},"URL"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"GET"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://api.develop.sinohope.com/v1/test?key=key&value=value"},"https://api.develop.sinohope.com/v1/test?key=key&value=value"))))),(0,n.kt)("p",null,"\u53c2\u6570\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"key"),(0,n.kt)("td",{parentName:"tr",align:"left"},"key")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"value"),(0,n.kt)("td",{parentName:"tr",align:"left"},"value")))),(0,n.kt)("p",null,"\u5047\u8bbe\u65f6\u95f4\u6233\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"1692614885094"),"\uff0c\u5219\u5f85\u7b7e\u540d\u6570\u636e\u4e3a\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},"datakey=key&value=valuepath/v1/testtimestamp1692614885094version1.0.03056301006072a8648ce3d020106052b8104000a03420004d8caf9385ee3f28df77eab42a0da4b8dc9462a8ad39dbb224c2802cc377df9dc09ac23d04748b40c2897d91bbd7fe859476c6f6fe9b2aa82607e8a48f9b7ac0d\n")),(0,n.kt)("p",null,"\u4f7f\u7528\u793a\u4f8b\u7684\u79c1\u94a5\uff0c\u5bf9\u4e0a\u8ff0\u6570\u636e\u7b7e\u540d\uff0c\u4e00\u4e2a\u53ef\u80fd\u7684\u7ed3\u679c\u4e3a\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"304402205db4c34ade2295f81bc2aa1be535a75cf4557dd9ad079d6804f2bc06c06c94ff0220380b75060f7a1abac6625a99cb684aaecc3135f99fc97333d1f99bccad6724d4\n")),(0,n.kt)("p",null,"\u4f7f\u7528\u793a\u4f8b\u7684\u516c\u94a5\u3001\u5f85\u7b7e\u6570\u636e\uff0c\u5e94\u8be5\u80fd\u9a8c\u8bc1\u4e0a\u8ff0\u7b7e\u540d\u7ed3\u679c\u4e3a\u201c\u6709\u6548\u201d\u3002"),(0,n.kt)("h4",{id:"post\u8bf7\u6c42"},"POST\u8bf7\u6c42\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Method"),(0,n.kt)("th",{parentName:"tr",align:"left"},"URL"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"POST"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://api.develop.sinohope.com/v1/test"},"https://api.develop.sinohope.com/v1/test"))))),(0,n.kt)("p",null,"\u53c2\u6570\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'{\n  "key": "key",\n  "value": "value"\n}\n')),(0,n.kt)("p",null,"\u5047\u8bbe\u65f6\u95f4\u6233\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"1692614885153"),"\uff0c\u5219\u5f85\u7b7e\u540d\u6570\u636e\u4e3a\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'data{"key":"key","value":"value"}path/v1/testtimestamp1692614885153version1.0.03056301006072a8648ce3d020106052b8104000a03420004d8caf9385ee3f28df77eab42a0da4b8dc9462a8ad39dbb224c2802cc377df9dc09ac23d04748b40c2897d91bbd7fe859476c6f6fe9b2aa82607e8a48f9b7ac0d\n')),(0,n.kt)("p",null,"\u4f7f\u7528\u793a\u4f8b\u7684\u79c1\u94a5\uff0c\u5bf9\u4e0a\u8ff0\u6570\u636e\u7b7e\u540d\uff0c\u4e00\u4e2a\u53ef\u80fd\u7684\u7ed3\u679c\u4e3a\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"30440220439fb1cb1860d7621ab37db48a7c29ee488c182c7bddd25276b2bc97a35560190220764a04dee91b1d9fcf784c5ae24ab0c19443b2823adfa4ef06e0b63ed4563cf9\n")),(0,n.kt)("p",null,"\u4f7f\u7528\u793a\u4f8b\u7684\u516c\u94a5\u3001\u5f85\u7b7e\u6570\u636e\uff0c\u5e94\u8be5\u80fd\u9a8c\u8bc1\u4e0a\u8ff0\u7b7e\u540d\u7ed3\u679c\u4e3a\u201c\u6709\u6548\u201d\u3002"),(0,n.kt)("h4",{id:"\u65e0\u9700\u8bf7\u6c42\u53c2\u6570\u7684post\u8bf7\u6c42\u7684\u5f85\u7b7e\u540d\u6570\u636e\u793a\u4f8b"},"\u65e0\u9700\u8bf7\u6c42\u53c2\u6570\u7684POST\u8bf7\u6c42\u7684\u5f85\u7b7e\u540d\u6570\u636e\u793a\u4f8b"),(0,n.kt)("p",null,"\u65e0\u9700\u8bf7\u6c42\u53c2\u6570\u7684POST\u8bf7\u6c42\u7684\u5f85\u7b7e\u540d\u6570\u636e\uff0c\u5c06\u662f\u5982\u4e0b\u5f62\u5f0f\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"datapath/v1/waas/common/get_vaultstimestamp1692614885153version1.0.03056301006072a8648ce3d020106052b8104000a03420004d8caf9385ee3f28df77eab42a0da4b8dc9462a8ad39dbb224c2802cc377df9dc09ac23d04748b40c2897d91bbd7fe859476c6f6fe9b2aa82607e8a48f9b7ac0d\n")),(0,n.kt)("h2",{id:"\u9644\u52a0\u4fe1\u606f"},"\u9644\u52a0\u4fe1\u606f"),(0,n.kt)("h3",{id:"\u5f00\u53d1\u8054\u8c03\u5de5\u5177"},"\u5f00\u53d1\u8054\u8c03\u5de5\u5177"),(0,n.kt)("p",null,"\u5bf9\u4e8e\u6682\u672a\u63d0\u4f9b SDK \u7684\u4e00\u4e9b\u5f00\u53d1\u8bed\u8a00\uff0cSinohope\u4e5f\u63d0\u4f9b\u4e86\u5bc6\u94a5\u751f\u6210\u3001\u7b7e\u540d\u3001\u9a8c\u7b7e \u76f8\u5173\u7684\u4e00\u4e9b\u4ee3\u7801\u7247\u6bb5\u548c\u793a\u4f8b\uff0c\u60a8\u53ef\u5230github\u4ed3\u5e93 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/sinohope/sinohope-waas-code-demo"},"sinohope-waas-code-demo")," \u67e5\u8be2\u3002\n\u5176\u4e2d\uff0c\u5728 ",(0,n.kt)("inlineCode",{parentName:"p"},"golang")," \u76ee\u5f55\u4e0b\u63d0\u4f9b\u4e86\u4e00\u4e2a\u793a\u4f8b\u670d\u52a1\uff0c\u5176\u53ef\u4ee5\u4f5c\u4e3a\u4e00\u4e2a\u56de\u8c03\u793a\u4f8b\u670d\u52a1\uff0c\u540c\u65f6\u53ef\u7528\u6765\u505a\u63a5\u53e3\u8bf7\u6c42\u9a8c\u7b7e\u8054\u8c03\u3002"),(0,n.kt)("h3",{id:"\u7b7e\u540d\u7b97\u6cd5"},"\u7b7e\u540d\u7b97\u6cd5"),(0,n.kt)("p",null,"Sinohope \u4f7f\u7528\u57fa\u4e8eP-256\u66f2\u7ebf\uff08\u53c8\u540dprime256v1\u6216secp256r1\uff09\u548c\u7b97\u6cd5\u4e3aSHA256withECDSA\u7684 ECDSA \u7b7e\u540d\u65b9\u6848\u8fdb\u884c\u9a8c\u8bc1\uff0c\u89c1\u4e0a\u8ff0 demo\uff0c\u5982\u60a8\u5728\u64cd\u4f5c\u8fc7\u7a0b\u4e2d\u9047\u5230\u4efb\u4f55\u95ee\u9898\uff0c\u8bf7\u901a\u8fc7",(0,n.kt)("a",{parentName:"p",href:"mailto:bd@newhuotech.com"},"bd@newhuotech.com"),"\u8054\u7cfbSinohope\u5de5\u4f5c\u4eba\u5458\u534f\u52a9\u60a8\u4e00\u8d77\u6392\u67e5\u548c\u89e3\u51b3\u3002"))}u.isMDXComponent=!0}}]);