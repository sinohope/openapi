"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[4127],{34985:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>u,metadata:()=>s,toc:()=>p});var l=a(87462),n=(a(67294),a(3905));const u={},o="Full Custody WaaS \u5feb\u901f\u5165\u95e8",s={unversionedId:"develop/full-custody-waas-api/quick-start/qs-1-custody",id:"develop/full-custody-waas-api/quick-start/qs-1-custody",title:"Full Custody WaaS \u5feb\u901f\u5165\u95e8",description:"\u57fa\u4e8e\u6574\u4f53\u7684\u5f00\u653e\u5e73\u53f0\u4ecb\u7ecd\uff0c\u672c\u6559\u7a0b\u5c06\u4e3b\u8981\u4ecb\u7ecdFull Custody WaaS API\u7684\u96c6\u6210\u548c\u4f7f\u7528\u3002",source:"@site/i18n/zh-Hant/docusaurus-plugin-content-docs/current/develop/full-custody-waas-api/quick-start/qs-1-custody.md",sourceDirName:"develop/full-custody-waas-api/quick-start",slug:"/develop/full-custody-waas-api/quick-start/qs-1-custody",permalink:"/zh-Hant/docs/develop/full-custody-waas-api/quick-start/qs-1-custody",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"fullCustodyApiSidebar",next:{title:"Full Custody WaaS API",permalink:"/zh-Hant/docs/category/full-custody-waas-api"}},i={},p=[{value:"\u521b\u5efa\u91d1\u5e93",id:"\u521b\u5efa\u91d1\u5e93",level:3},{value:"\u521b\u5efa\u5e76\u914d\u7f6eAPI Key",id:"\u521b\u5efa\u5e76\u914d\u7f6eapi-key",level:3},{value:"\u57fa\u4e8eSDK\u5f00\u53d1\u96c6\u6210",id:"\u57fa\u4e8esdk\u5f00\u53d1\u96c6\u6210",level:3}],r={toc:p},d="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,l.Z)({},r,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"full-custody-waas-\u5feb\u901f\u5165\u95e8"},"Full Custody WaaS \u5feb\u901f\u5165\u95e8"),(0,n.kt)("p",null,"\u57fa\u4e8e\u6574\u4f53\u7684",(0,n.kt)("a",{parentName:"p",href:"/docs/develop/get-started/quick-start.md"},"\u5f00\u653e\u5e73\u53f0\u4ecb\u7ecd"),"\uff0c\u672c\u6559\u7a0b\u5c06\u4e3b\u8981\u4ecb\u7ecdFull Custody WaaS API\u7684\u96c6\u6210\u548c\u4f7f\u7528\u3002"),(0,n.kt)("p",null,"\u672c\u6559\u7a0b\u4e3b\u8981\u6d89\u53ca\u4ee5\u4e0b\u4e8b\u9879\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u521b\u5efa\u91d1\u5e93"),(0,n.kt)("li",{parentName:"ul"},"\u521b\u5efa\u5e76\u914d\u7f6eAPI Key"),(0,n.kt)("li",{parentName:"ul"},"\u57fa\u4e8eSDK\u5f00\u53d1\u96c6\u6210")),(0,n.kt)("h3",{id:"\u521b\u5efa\u91d1\u5e93"},"\u521b\u5efa\u91d1\u5e93"),(0,n.kt)("p",null,"\u5728 WaaS \u670d\u52a1\u4e2d\uff0c\u91d1\u5e93\u9700\u8981\u5728Web console\u7ba1\u7406\u754c\u9762\u4eba\u5de5\u521b\u5efa\uff0c\u4e4b\u540e\uff0c\u94b1\u5305\u3001\u94fe\u4e0a\u5730\u5740 \u5747\u9700\u901a\u8fc7API\u5b8c\u6210\u521b\u5efa\u3002"),(0,n.kt)("p",null,"\u5728 \u201cwaas\u94b1\u5305\u201d\u754c\u9762\uff0c\u901a\u8fc7\u201c\u521b\u5efa\u91d1\u5e93\u201d \u529f\u80fd\u5373\u53ef\u5b8c\u6210\u91d1\u5e93\u521b\u5efa\u3002"),(0,n.kt)("p",null,"\u5728\u94b1\u5305\u3001\u5730\u5740\u7684\u5e94\u7528\u6a21\u5f0f\u65b9\u9762\uff0c\u6709\u4e24\u79cd\u6a21\u5f0f\u53ef\u4f9b\u60a8\u53c2\u8003\uff0c\u5177\u4f53\u5e94\u8be5\u7ed3\u5408\u60a8\u7684\u4e1a\u52a1\u800c\u5b9a\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u4e3a\u60a8\u7684\u6bcf\u4e2a\u4e1a\u52a1/\u7ec8\u7aef\u7528\u6237 \u5206\u914d\u4e00\u4e2a\u591a\u94fe\u94b1\u5305\uff1b\u5728\u8fd9\u79cd\u6a21\u5f0f\u4e0b\uff0c\u5bf9\u94fe\u4e0a\u5730\u5740\u7684\u7ba1\u7406\u5c06\u4f1a\u66f4\u52a0\u96c6\u4e2d\uff0c\u4e1a\u52a1/\u7ec8\u7aef\u7528\u6237 \u4e4b\u95f4\u53ef\u4ee5\u6709\u8f83\u6e05\u6670\u7684\u5212\u5206\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u53ea\u4f7f\u7528\u4e00\u4e2a\u591a\u94fe\u94b1\u5305\uff0c\u5728\u8be5\u94b1\u5305\u4e0b\u6309\u9700\u521b\u5efa\u5e76\u4e3a\u4e1a\u52a1/\u7ec8\u7aef\u7528\u6237 \u5206\u914d\u94fe\u4e0a\u5730\u5740\u3002\u6b64\u79cd\u6a21\u5f0f\u4e0b\uff0c\u76f4\u63a5\u7ba1\u7406\u6700\u7ec8\u7684\u94fe\u4e0a\u5730\u5740\uff0c\u66f4\u63a5\u8fd1\u4e8e\u4f20\u7edf\u7684\u5730\u5740\u7ba1\u7406\u65b9\u5f0f\u3002")),(0,n.kt)("h3",{id:"\u521b\u5efa\u5e76\u914d\u7f6eapi-key"},"\u521b\u5efa\u5e76\u914d\u7f6eAPI Key"),(0,n.kt)("p",null,"\u5f53\u524d\uff0c\u9700\u8981\u5bf9\u6bcf\u4e2a\u91d1\u5e93\u8fdb\u884c\u72ec\u7acb\u914d\u7f6e\uff0c\u5305\u62ec API Key\u8bbe\u7f6e\u3001\u56de\u8c03\u8bbe\u7f6e\u3001\u9ad8\u7ea7\u529f\u80fd\u5f00\u5173\u8bbe\u7f6e \u7b49\u3002"),(0,n.kt)("p",null,"\u60a8\u9700\u8981\u521b\u5efa\u4e00\u5bf9 ECDSA \u5bc6\u94a5\u5bf9\u7528\u4e8eWaaS API\u8bf7\u6c42\u9274\u6743\u3002\u60a8\u53ef\u901a\u8fc7 Sinohope \u5b98\u65b9SDK\uff0c\u6216\u8005\u5982\u4e0bjava \u793a\u4f8b\u6765\u521b\u5efa\u60a8\u7684\u5bc6\u94a5\u5bf9\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'import org.nhex.sinohope.sign.api.ECDSA;\n\nECDSA ecdsa = new ECDSA(SECP256R1);\nKeyPair keyPair = ecdsa.generateKeyPair();\nString publicKey = Hex.toHexString(keyPair.getPublic().getEncoded());\nString privateKey = Hex.toHexString(keyPair.getPrivate().getEncoded());\nSystem.out.println("publicKey = " + publicKey);\nSystem.out.println("privateKey = " + privateKey);\n')),(0,n.kt)("p",null,"\u5176\u4e2d\uff0c\u79c1\u94a5 ",(0,n.kt)("inlineCode",{parentName:"p"},"privateKey"),"\u7531\u60a8\u81ea\u5df1\u59a5\u5584\u4fdd\u7ba1\u5e76\u914d\u7f6e\u5230\u60a8\u7684\u4e1a\u52a1\u7cfb\u7edf\u4e2d\uff0c\u4ee3\u8868\u60a8\u7684\u8eab\u4efd\uff0c\u7528\u4e8e\u505aAPI\u8bf7\u6c42\u7b7e\u540d\uff1b\u516c\u94a5",(0,n.kt)("inlineCode",{parentName:"p"},"publicKey")," \u5373 API Key\uff0c\u9700\u8981\u60a8\u901a\u8fc7Sinohope web console\u7ba1\u7406\u754c\u9762\uff0c\u914d\u7f6e\u5230\u60a8\u7684\u91d1\u5e93\u4e2d\uff0c\u4ece\u800c\u7ed1\u5b9a\u5176API\u8bbf\u95ee\u6743\u9650\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u5173\u4e8e\u63a5\u53e3\u8bf7\u6c42\u7b7e\u540d\u53ca\u9a8c\u7b7e\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003\u201c",(0,n.kt)("a",{parentName:"p",href:"/docs/develop/get-started/general"},"API \u8ba4\u8bc1"),"\u201d \u7ae0\u8282\u3002")),(0,n.kt)("h3",{id:"\u57fa\u4e8esdk\u5f00\u53d1\u96c6\u6210"},"\u57fa\u4e8eSDK\u5f00\u53d1\u96c6\u6210"),(0,n.kt)("p",null,"Sinohope\u5c06\u63d0\u4f9b\u591a\u79cd\u8bed\u8a00\u7684SDK\uff0c\u65b9\u4fbf\u5f00\u53d1\u8005\u96c6\u6210WaaS\u529f\u80fd\u3002SDK \u4e3b\u8981\u63d0\u4f9b\u4ee5\u4e0b\u529f\u80fd\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7edf\u4e00\u5c01\u88c5\u63a5\u53e3\u8bf7\u6c42\u7b7e\u540d\u5904\u7406\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u5c01\u88c5API\u63a5\u53e3\uff0c\u65b9\u4fbf\u5f00\u53d1\u8005\u4ee5\u65b9\u6cd5\u8c03\u7528\u7684\u65b9\u5f0f\u5b8c\u6210\u5bf9WaaS API\u7684\u8bf7\u6c42\u3002")),(0,n.kt)("p",null,"\u5f53\u524d\u63d0\u4f9b\u7684SDK\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://github.com/sinohope/sinohope-java-api"},"java sdk"),"\u3002"),(0,n.kt)("p",null,"JS\u3001Golang \u7b49\u5f00\u53d1\u8bed\u8a00\u7684SDK \u6b63\u5728\u8fdb\u884c\u4e2d\uff0c\u656c\u8bf7\u671f\u5f85\u3002"))}c.isMDXComponent=!0}}]);