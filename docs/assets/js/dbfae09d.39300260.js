"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[462],{40748:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>r,contentTitle:()=>n,default:()=>u,frontMatter:()=>p,metadata:()=>i,toc:()=>s});var l=t(87462),o=(t(67294),t(3905));const p={},n="MPC WaaS \u5feb\u901f\u5165\u95e8",i={unversionedId:"develop/mpc-waas-api/quick-start/qs-1-waas",id:"develop/mpc-waas-api/quick-start/qs-1-waas",title:"MPC WaaS \u5feb\u901f\u5165\u95e8",description:"\u57fa\u4e8e\u6574\u4f53\u7684\u5f00\u653e\u5e73\u53f0\u4ecb\u7ecd\uff0c\u672c\u6559\u7a0b\u5c06\u4e3b\u8981\u4ecb\u7ecdMPC WaaS API\u7684\u96c6\u6210\u548c\u4f7f\u7528\u3002",source:"@site/docs/develop/mpc-waas-api/quick-start/qs-1-waas.md",sourceDirName:"develop/mpc-waas-api/quick-start",slug:"/develop/mpc-waas-api/quick-start/qs-1-waas",permalink:"/docs/develop/mpc-waas-api/quick-start/qs-1-waas",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"mpcApiSidebar",next:{title:"MPC Node \u4f7f\u7528\u6307\u5357",permalink:"/docs/develop/mpc-waas-api/quick-start/qs-2-node"}},r={},s=[{value:"\u90e8\u7f72\u5e76\u914d\u7f6eMPC Node",id:"\u90e8\u7f72\u5e76\u914d\u7f6empc-node",level:3},{value:"\u521b\u5efa\u91d1\u5e93",id:"\u521b\u5efa\u91d1\u5e93",level:3},{value:"\u521b\u5efa\u5e76\u914d\u7f6eAPI Key",id:"\u521b\u5efa\u5e76\u914d\u7f6eapi-key",level:3},{value:"\u57fa\u4e8eSDK\u5f00\u53d1\u96c6\u6210",id:"\u57fa\u4e8esdk\u5f00\u53d1\u96c6\u6210",level:3}],k={toc:s},d="wrapper";function u(e){let{components:a,...t}=e;return(0,o.kt)(d,(0,l.Z)({},k,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mpc-waas-\u5feb\u901f\u5165\u95e8"},"MPC WaaS \u5feb\u901f\u5165\u95e8"),(0,o.kt)("p",null,"\u57fa\u4e8e\u6574\u4f53\u7684",(0,o.kt)("a",{parentName:"p",href:"/docs/develop/get-started/quick-start"},"\u5f00\u653e\u5e73\u53f0\u4ecb\u7ecd"),"\uff0c\u672c\u6559\u7a0b\u5c06\u4e3b\u8981\u4ecb\u7ecdMPC WaaS API\u7684\u96c6\u6210\u548c\u4f7f\u7528\u3002"),(0,o.kt)("p",null,"\u672c\u6559\u7a0b\u4e3b\u8981\u6d89\u53ca\u4ee5\u4e0b\u4e8b\u9879\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u90e8\u7f72\u5e76\u914d\u7f6eMPC Node"),(0,o.kt)("li",{parentName:"ul"},"\u521b\u5efa\u91d1\u5e93"),(0,o.kt)("li",{parentName:"ul"},"\u521b\u5efa\u5e76\u914d\u7f6eAPI Key"),(0,o.kt)("li",{parentName:"ul"},"\u57fa\u4e8eSDK\u5f00\u53d1\u96c6\u6210")),(0,o.kt)("h3",{id:"\u90e8\u7f72\u5e76\u914d\u7f6empc-node"},"\u90e8\u7f72\u5e76\u914d\u7f6eMPC Node"),(0,o.kt)("p",null,"Sinohope\u4f7f\u7528 MPC-TSS \u6280\u672f\u63d0\u4f9b WaaS \u670d\u52a1\uff0c\u5e76\u91c7\u7528 3-3 \u7684\u9608\u503c\u7b7e\u540d\u8bbe\u7f6e\uff0c\u5e73\u53f0\u6301\u67092\u7247\u79c1\u94a5\u5206\u7247\uff0c\u7528\u6237\u6301\u67091\u7247\u79c1\u94a5\u5206\u7247\u3002"),(0,o.kt)("p",null,"Sinohope\u63d0\u4f9b MPC Node\u8f6f\u4ef6\uff0c\u7531\u5ba2\u6237\u90e8\u7f72\u8fd0\u884c\uff0c\u7528\u4e8e\u7ba1\u7406\u5c5e\u4e8e\u7528\u6237\u7684\u79c1\u94a5\u5206\u7247\u3002\u8981\u914d\u7f6e MPC Node\uff0c\u4e3b\u8981\u6709\u4ee5\u4e0b\u4e8b\u9879\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u51c6\u5907\uff1a\u5f00\u901aSinohope WaaS \u8d26\u53f7\uff1b\u51c6\u5907\u597d\u90e8\u7f72\u73af\u5883\uff0c\u83b7\u53d6\u5e76\u9a8c\u8bc1 MPC Node \u5b89\u88c5\u5305\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\u521d\u59cb\u5316\u8282\u70b9\uff0c\u751f\u6210\u8282\u70b9\u7684 Node ID \u548c \u90e8\u7f72\u56de\u8c03\u670d\u52a1\u6240\u9700\u7684\u8282\u70b9\u516c\u94a5\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\uff08\u6309\u9700\uff09\u90e8\u7f72\u53ca\u914d\u7f6e\u60a8\u7684\u56de\u8c03\u670d\u52a1\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\u7ed1\u5b9aMPC Node\uff0c\u767b\u5f55 web console \u914d\u7f6e MPC Node\uff0c\u5c06\u60a8\u7684 Node ID \u4e0e\u60a8\u7684\u7ec4\u7ec7\u8d26\u53f7\u7ed1\u5b9a\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\u542f\u52a8MPC Node\uff0c\u8282\u70b9\u5c06\u6301\u7eed\u8fd0\u884c\uff0c\u5e76\u81ea\u52a8\u6309\u9700\u9a71\u52a8MPC\u534f\u8bae\u7684\u8fd0\u884c\uff0c\u5176\u4e2d\uff0c\u7a0d\u7b49\u7247\u523b\u5c06\u53ef\u5b8c\u6210DKG\uff0c\u4e4b\u540e\u5728 Web Console MPC Node\u7ba1\u7406\u754c\u9762\u5c06\u770b\u5230 \u201ckey share \u72b6\u6001\u201d\u4e3a\u201c\u5df2\u751f\u6210\u201d\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u2757\ufe0f\u2757\ufe0f\u91cd\u8981\uff1a\u5b89\u5168\u59a5\u5584\u5907\u4efd MPC Node \u672c\u5730\u6570\u636e\u5e93\u6587\u4ef6\uff01")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u8be6\u89c1 ",(0,o.kt)("a",{parentName:"p",href:"qs-2-node"},"MPC Node\u4f7f\u7528\u6307\u5357")," \u7ae0\u8282\u3002")),(0,o.kt)("h3",{id:"\u521b\u5efa\u91d1\u5e93"},"\u521b\u5efa\u91d1\u5e93"),(0,o.kt)("p",null,"\u5728 WaaS\u670d\u52a1\u4e2d\uff0c\u91d1\u5e93\u9700\u8981\u5728Web console\u7ba1\u7406\u754c\u9762\u4eba\u5de5\u521b\u5efa\uff0c\u4e4b\u540e\uff0c\u94b1\u5305\u3001\u94fe\u4e0a\u5730\u5740 \u5747\u9700\u901a\u8fc7API\u5b8c\u6210\u521b\u5efa\u3002"),(0,o.kt)("p",null,"\u5728 \u201cwaas\u94b1\u5305\u201d\u754c\u9762\uff0c\u901a\u8fc7\u201c\u521b\u5efa\u91d1\u5e93\u201d \u529f\u80fd\u5373\u53ef\u5b8c\u6210\u91d1\u5e93\u521b\u5efa\u3002"),(0,o.kt)("p",null,"\u5728\u94b1\u5305\u3001\u5730\u5740\u7684\u5e94\u7528\u6a21\u5f0f\u65b9\u9762\uff0c\u6709\u4e24\u79cd\u6a21\u5f0f\u53ef\u4f9b\u60a8\u53c2\u8003\uff0c\u5177\u4f53\u5e94\u8be5\u7ed3\u5408\u60a8\u7684\u4e1a\u52a1\u800c\u5b9a\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u4e3a\u60a8\u7684\u6bcf\u4e2a\u4e1a\u52a1/\u7ec8\u7aef\u7528\u6237 \u5206\u914d\u4e00\u4e2a\u591a\u94fe\u94b1\u5305\uff1b\u5728\u8fd9\u79cd\u6a21\u5f0f\u4e0b\uff0c\u5bf9\u94fe\u4e0a\u5730\u5740\u7684\u7ba1\u7406\u5c06\u4f1a\u66f4\u52a0\u96c6\u4e2d\uff0c\u4e1a\u52a1/\u7ec8\u7aef\u7528\u6237 \u4e4b\u95f4\u53ef\u4ee5\u6709\u8f83\u6e05\u6670\u7684\u5212\u5206\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u53ea\u4f7f\u7528\u4e00\u4e2a\u591a\u94fe\u94b1\u5305\uff0c\u5728\u8be5\u94b1\u5305\u4e0b\u6309\u9700\u521b\u5efa\u5e76\u4e3a\u4e1a\u52a1/\u7ec8\u7aef\u7528\u6237 \u5206\u914d\u94fe\u4e0a\u5730\u5740\u3002\u6b64\u79cd\u6a21\u5f0f\u4e0b\uff0c\u76f4\u63a5\u7ba1\u7406\u6700\u7ec8\u7684\u94fe\u4e0a\u5730\u5740\uff0c\u66f4\u63a5\u8fd1\u4e8e\u4f20\u7edf\u7684\u5730\u5740\u7ba1\u7406\u65b9\u5f0f\u3002")),(0,o.kt)("h3",{id:"\u521b\u5efa\u5e76\u914d\u7f6eapi-key"},"\u521b\u5efa\u5e76\u914d\u7f6eAPI Key"),(0,o.kt)("p",null,"\u5f53\u524d\uff0c\u9700\u8981\u5bf9\u6bcf\u4e2a\u91d1\u5e93\u8fdb\u884c\u72ec\u7acb\u914d\u7f6e\uff0c\u5305\u62ec API Key\u8bbe\u7f6e\u3001\u56de\u8c03\u8bbe\u7f6e\u3001\u9ad8\u7ea7\u529f\u80fd\u5f00\u5173\u8bbe\u7f6e \u7b49\u3002"),(0,o.kt)("p",null,"\u60a8\u9700\u8981\u521b\u5efa\u4e00\u5bf9 ECDSA \u5bc6\u94a5\u5bf9\u7528\u4e8eWaaS API\u8bf7\u6c42\u9274\u6743\u3002\u60a8\u53ef\u901a\u8fc7 Sinohope \u5b98\u65b9SDK\uff0c\u6216\u8005\u5982\u4e0bjava \u793a\u4f8b\u6765\u521b\u5efa\u60a8\u7684\u5bc6\u94a5\u5bf9\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import org.nhex.sinohope.sign.api.ECDSA;\n\nECDSA ecdsa = new ECDSA(SECP256R1);\nKeyPair keyPair = ecdsa.generateKeyPair();\nString publicKey = Hex.toHexString(keyPair.getPublic().getEncoded());\nString privateKey = Hex.toHexString(keyPair.getPrivate().getEncoded());\nSystem.out.println("publicKey = " + publicKey);\nSystem.out.println("privateKey = " + privateKey);\n')),(0,o.kt)("p",null,"\u5176\u4e2d\uff0c\u79c1\u94a5 ",(0,o.kt)("inlineCode",{parentName:"p"},"privateKey"),"\u7531\u60a8\u81ea\u5df1\u59a5\u5584\u4fdd\u7ba1\u5e76\u914d\u7f6e\u5230\u60a8\u7684\u4e1a\u52a1\u7cfb\u7edf\u4e2d\uff0c\u4ee3\u8868\u60a8\u7684\u8eab\u4efd\uff0c\u7528\u4e8e\u505aAPI\u8bf7\u6c42\u7b7e\u540d\uff1b\u516c\u94a5",(0,o.kt)("inlineCode",{parentName:"p"},"publicKey")," \u5373 API Key\uff0c\u9700\u8981\u60a8\u901a\u8fc7Sinohope web console\u7ba1\u7406\u754c\u9762\uff0c\u914d\u7f6e\u5230\u60a8\u7684\u91d1\u5e93\u4e2d\uff0c\u4ece\u800c\u7ed1\u5b9a\u5176API\u8bbf\u95ee\u6743\u9650\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5173\u4e8e\u63a5\u53e3\u8bf7\u6c42\u7b7e\u540d\u53ca\u9a8c\u7b7e\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003\u201c",(0,o.kt)("a",{parentName:"p",href:"/docs/develop/get-started/general"},"API \u8ba4\u8bc1"),"\u201d \u7ae0\u8282\u3002")),(0,o.kt)("h3",{id:"\u57fa\u4e8esdk\u5f00\u53d1\u96c6\u6210"},"\u57fa\u4e8eSDK\u5f00\u53d1\u96c6\u6210"),(0,o.kt)("p",null,"Sinohope\u5c06\u63d0\u4f9b\u591a\u79cd\u8bed\u8a00\u7684SDK\uff0c\u65b9\u4fbf\u5f00\u53d1\u8005\u96c6\u6210WaaS\u529f\u80fd\u3002SDK \u4e3b\u8981\u63d0\u4f9b\u4ee5\u4e0b\u529f\u80fd\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u7edf\u4e00\u5c01\u88c5\u63a5\u53e3\u8bf7\u6c42\u7b7e\u540d\u5904\u7406\uff1b"),(0,o.kt)("li",{parentName:"ul"},"\u5c01\u88c5API\u63a5\u53e3\uff0c\u65b9\u4fbf\u5f00\u53d1\u8005\u4ee5\u65b9\u6cd5\u8c03\u7528\u7684\u65b9\u5f0f\u5b8c\u6210\u5bf9WaaS API\u7684\u8bf7\u6c42\u3002")),(0,o.kt)("p",null,"\u5f53\u524d\u63d0\u4f9b\u7684SDK\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sinohope/sinohope-java-api"},"java sdk"),"\uff0c",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sinohope/golang-sdk"},"golang sdk"),"\uff0c",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sinohope/js-sdk"},"JS sdk"),"\u3002"))}u.isMDXComponent=!0}}]);