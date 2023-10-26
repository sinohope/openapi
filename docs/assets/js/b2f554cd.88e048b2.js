"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[1477],{30010:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/2023-07/mpc-aa/mpc-aa","metadata":{"permalink":"/blog/2023-07/mpc-aa/mpc-aa","source":"@site/blog/2023-07/mpc-aa/mpc-aa.md","title":"MPC+AA for the Mass Adoption","description":"Vitalik represents the core community of Ethereum, but the development of the Crypto industry needs more independent thinking and objective voices.","date":"2023-07-01T08:00:00.000Z","formattedDate":"July 1, 2023","tags":[{"label":"view","permalink":"/blog/tags/view"}],"readingTime":8.55,"hasTruncateMarker":false,"authors":[{"name":"Kevin He","title":"Developer of Sinohope","url":"https://github.com/kevinho","imageURL":"https://github.com/kevinho.png","key":"kevinhe"}],"frontMatter":{"title":"MPC+AA for the Mass Adoption","date":"2023-07-01T08:00","authors":["kevinhe"],"tags":["view"]}},"content":"Vitalik represents the core community of Ethereum, but the development of the Crypto industry needs more independent thinking and objective voices.\\n\\n\\n# Recap of the MPC and AA Debate\\n\\nRecently, a major discussion on the direction of Crypto wallet technology has been reignited by negative comments made by Ethereum founder Vitalik Buterin about MPC EOA wallets. The debate was sparked by Vitalik\'s response to a community AMA question about MPC wallets, where he pointed out that MPC EOA wallets have a fundamental law that they \\"cannot revoke keys\\". \\n\\n![debates](./debates.png)\\n\\nThis sparked much debate on Twitter, with key members of notable teams such as Coinbase, Zengo, and Slowmist participating.\\nThis article won\'t repeat the principles and comparisons of MPC and AA (short for Account Abstraction, Ethereum\'s latest plan for smart contract wallet development). Those interested can refer to this article: [Seedless Self-Custody: On MPC and Smart Contract Wallets](https://medium.com/1kxnetwork/wallets-91c7c3457578) to understand. The core advantage of MPC is that it solves the single point problem of private keys, while AA\'s core advantage is its programmability.\\n\\nAfter summarizing this discussion, the following conclusions can be drawn:\\n\\n1. The Ethereum core community, represented by Vitalik, consistently thinks from a fully decentralized and full-onchain perspective. Therefore, their view on MPC wallets is understandable.\\n2. Although MPC keys can not be \\"cryptographically\\" revoked, this does not affect the security construction and large-scale application of MPC wallets.\\n3. Some in the community didn\'t understand the intent Vitalik was trying to express, while others were deliberately avoiding the presuppositions of decentralization that Vitalik implied.\\n4. It is encouraging to see some teams adopting a more open mindset, striving to promote the integration of MPC and AA, rather than just a battle of technical ideologies.\\n5. While there are many who are passionate about discussing technology, few truly care about user needs.\\n\\nThe largest regret in this whole discussion is the lack of consideration and analysis for the essential needs of users. In my opinion, technology is a means, and satisfying and surpassing user needs is the goal. Solving more user problems, rather than discussing technical philosophies, is the foundation for large-scale applications.\\n\\nThe purpose of this article is to make up for this shortcoming, focusing on the discussion of real user needs: scenarios, pain points, solutions, values, etc., with the hope of bringing some new perspectives and thoughts to this discussion.\\n\\n# Demand for Crypto Wallets\\n\\nI believe that the development of the Crypto industry in the next decade must achieve Mass Adoption and must provide services for users on the scale of billions.\\nBased on this vision, we need to solve two core issues: 1) Where do the users come from? 2) Where does the money come from?\\n\\nThe next wave of potential scale users are certainly not tech geeks who can\'t understand symmetric and asymmetric encryption technology and are likely unable to properly secure their own mnemonic phrases.\\n\\nThe next wave of potential scaled assets will likely come from the existing financial system\'s asset mapping, which will involve corporate users, who have vastly different needs and scenarios from individual users.\\n\\nBelow are two major types of user intent and their requirements/pain points in high-frequency scenarios:\\n\\n\\n| User Type        | User Willingness                                             | Example of Application Scenario      | Core Demand                                                  | User Pain Point                                              |\\n| ---------------- | ------------------------------------------------------------ | ------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |\\n| Corporate Users  | Most have no desire to invest much in Crypto R&D resources Are more inclined to do efficient and simple service integration | Quantitative trading fund management | Asset security Rich and easy-to-use functionality Approval process/rule engine Regulatory license | Capital can\'t be lost Control of fund flow direction No need for teams to build their own wallets Hope for improvement in the inefficient cold wallet solution |\\n| Individual Users | Most hope to have the user experience of Web2  Being able to explore the innovative applications of Web3 | Web3 games                           | Asset security Easy to use                                   | Unwilling to take on too much encryption technology burden Hope for improvement in the anti-humanity of wallet mnemonic phrases Decentralized wallets can be integrated with a complete set of security solutions by default |\\n\\nA widely accepted phrase in the Crypto industry is: \\"Not your keys, not your coins\\". From this, we can deduce that decentralized custody is crucial\u3002\\n\\nIn fact, this kind of deduction doesn\'t take into account the actual user scenarios and implementation difficulties, it\'s essentially empty talk about decentralization. The a16z crypto column article \\"[Wallet Security: The \u2018Non-Custodial\u2019 Fallacy](https://a16zcrypto.com/posts/article/wallet-security-non-custodial-fallacy/)\\" analyzes and explains from the perspective of the generation, storage, and use of keys throughout their entire lifecycle, stating that custody and non-custody are not simply black and white.\\n\\nIn summary, according to our team\'s conclusions, the core needs of users can be summarized as the following triangle relationship:\\n\\n![trilemma](./trialemma.png)\\n\\nThis is almost an impossible triangle, and only by deeply combining user scenarios and core needs to make trade-offs can we achieve all three in the product.\\n\\n# How to Satisfy the Above Requirements\\n\\nBased on the description of user intentions and demands above, we can summarize users\' needs in two sentences:\\n\\nUsers want asset security, but we cannot expect every user to have full-stack security knowledge and skills.\\n\\nUsers want control over their assets, not the need to personally control every aspect of product technology.\\n\\nHaving worked in the Crypto industry for many years, and as a senior user of new energy vehicles, I believe that there is a certain similarity between the current Crypto wallet industry and the new energy vehicle industry. To help readers understand, the following table compares the two industries, just for fun ^_^.\\n\\n\\n| Industry            | Existing Product                                             | So-called \\"Ultimate\\" Solution | User Migration Pain Points                                   | Best PMF                        |\\n| ------------------- | ------------------------------------------------------------ | ----------------------------- | ------------------------------------------------------------ | ------------------------------- |\\n| New Energy Vehicles | Traditional gasoline cars:  Not environmentally friendly* Lagging in intelligence Slow landing of autonomous driving | Pure electric                 | Pure electric cars have range anxiety Pure electric cars are expensive | Range-Extended Electric Vehicle |\\n| Crypto Wallets      | Single-signature wallets:  Poor security Inconvenient use   On-chain multisig:  Simple functionality Poor universality | AA Wallets                    | It takes years for AA wallets to truly land in the Ethereum ecosystem AA wallets are expensive to create and use It is expected that more than 60% of existing crypto assets will not be able to support AA wallets in the foreseeable future | ?\\n\\nUser needs are right in front of us, and the development of the industry should follow its objective laws. So, as entrepreneurs, how do we solve this problem and provide a product that meets or even exceeds user expectations?\\n\\nWe believe that, for the present and several years to come, the MPC wallet solution based on MPC-TSS + TEE Trusted Computing Technology has clear advantages in terms of security, multi-chain universality, usage cost, privacy, scalability, and other dimensions, making it the best PMF.\\n\\n> This can be compared to the highly praised extended-range electric technology products on the Chinese new energy market, such as the Ideal Auto L Series.\\nWe believe that the MPC wallet based on the above technology can meet the near-impossible triangle mentioned earlier:\\n\\n![points](./points.png)\\n\\nAt the same time, because an AA wallet needs one or more EOA addresses as controllers, and the single point problem of the private keys of EOA addresses can be well solved by MPC technology, we believe that MPC + AA is the ultimate solution.\\n\\n# About Sinohope\\n\\nSinohope (https://www.sinohope.com/) is an MPC self-hosted platform under the New Huo Technology Holdings Limited (stock code: 1611.HK, \u201cNew Huo Tech\u201d). The core team has managed the world\'s largest exchange asset custody system and has been responsible for developing several globally renowned high-performance blockchain technology platforms. The team is committed to creating a new generation of secure and compliant self-hosted platforms, allowing users to fully control and recover their private keys, ensuring the security of underlying assets while reducing user operation thresholds.\\n\\nIn the past six months, Sinohope has signed contracts with more than 100 B-side customers, and we welcome friends to cooperate in the following directions:\\n1. Exchanges, which can connect to our OpenLoop, increasing institutional customer trading volume, with currently signed customers having assets exceeding 5 billion USD\\n2. Market makers and trading funds, which do not need to deposit funds into centralized exchanges to trade mapped assets\\n3. OTC businesses\\n4. Companies holding digital assets that need multisig processes\\n5. Project parties or funds that need enterprise-level internal collaboration, approval, financial and taxation systems, etc.\\n\\nThe Sinohope product technology panorama is as follows. We welcome pioneers in the crypto industry to download, try, and give valuable suggestions: https://www.sinohope.com/zh-HK/download\\n\\n![overviews](./overviews.png)\\n\\n# Conclusion\\n\\nThis article reviews the so-called debate between MPC and AA technologies. As authors, we analyze from the perspective of user needs and usage scenarios, combine user intentions and industry development directions, and see that the MPC wallet based on MPC-TSS + TEE Trusted Computing Technology is the best choice to match the market now and for a long period in the future. At the same time, we believe that MPC and AA are not antagonistic, but can be integrated and promote each other.\\n\\nIn our opinion, the rapid large-scale adoption of MPC wallets and their derivative services (such as waas) will help to solve the stubborn problem that has plagued the industry for many years - the single point failure problem brought about by the loss of private keys. It will help to solve the two core problems of the next wave of industry development: the sources of users and funds, and it will help to popularize blockchain technology to a user scale of 1 billion.\\n\\nMost of the views in the article are from colleagues and peers, and the Sinohope product is built on the outstanding work of pioneers in the Crypto and MPC technology fields, for which we give thanks. Due to the limited knowledge of the author, there may be many errors in the text, and we welcome readers to correct them.\\n\\n# References\\nSeedless Self-Custody: On MPC and Smart Contract Wallets\uff1ahttps://medium.com/1kxnetwork/wallets-91c7c3457578\\n\\nWallet Security: The \u2018Non-Custodial\u2019 Fallacy\uff1ahttps://a16zcrypto.com/posts/article/wallet-security-non-custodial-fallacy/\\n\\nRecord of Li Xiang\'s 2023 Spring Media Sharing Meeting: https://www.dongchedi.com/article/7206154196855489061\\n\\nBlockchain Ecosystem TVL Comparison: https://coinmarketcap.com/charts/"}]}')}}]);