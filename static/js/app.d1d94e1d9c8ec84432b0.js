webpackJsonp([1],{"+BTi":function(e,n){},"/bpg":function(e,n){},"/qOy":function(e,n){},"2u0w":function(e,n){},"60D5":function(e,n,t){e.exports=t.p+"static/img/yangzheng.b0ee3f4.png"},"8mNY":function(e,n){},Dte2:function(e,n){},GXEp:function(e,n){},H3rH:function(e,n){},Iun5:function(e,n){},Mf0D:function(e,n){},NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});t("XPMo"),t("+BTi");var a=t("uEG6"),i=t.n(a),r=(t("8mNY"),t("YnkO")),o=t.n(r),s=(t("Iun5"),t("ttjG")),c=t.n(s),l=(t("Dte2"),t("q4le")),u=t.n(l),h=(t("isE6"),t("LR6y")),g=t.n(h),m=(t("jZDA"),t("91Nw")),v=t.n(m),d=(t("d7TW"),t("ajQY")),f=t.n(d),_=(t("Q6SQ"),t("LQMI")),p=t.n(_),y=(t("V5v9"),t("D8db")),S=t.n(y),C=(t("/bpg"),t("ACGT")),b=t.n(C),A=(t("Mf0D"),t("exT9")),E=t.n(A),P=(t("bwiK"),t("SExR")),w=t.n(P),I=(t("H3rH"),t("6mNG")),T=t.n(I),k=(t("cDSy"),t("e0Bm")),Y=t.n(k),Z=(t("GXEp"),t("mtrD")),x=t.n(Z),D=t("7+uW"),J={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var L=t("VU/8")({name:"App"},J,!1,function(e){t("heEK")},null,null).exports,R=t("/ocq"),M={data:function(){return{activeIndex:"1",menuData:[{path:"/yang",name:"yang",label:"Zheng Yang",url:"Yang/Yang"},{path:"/pub",name:"pub",label:"Publications",url:"Publications/Publications"},{path:"/working",name:"working",label:"Working",url:"Working/Working"},{path:"/services",name:"services",label:"Services",url:"Services/Services"},{path:"/cv",name:"cv",label:"CV",url:"CV/CV"}]}},methods:{handleSelect:function(e,n){console.log(e,n)},clickMenu:function(e){this.$route.path===e.path||"/yang"===this.$route.path&&"/"==e.path||this.$router.push(e.path)}}},N={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"bj"},[t("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":e.activeIndex,"active-text-color":"null",mode:"horizontal"},on:{select:e.handleSelect}},e._l(e.menuData,function(n){return t("el-menu-item",{key:n.label,attrs:{index:n.label},on:{click:function(t){return e.clickMenu(n)}}},[t("span",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[e._v(e._s(n.label))])])}),1)],1)},staticRenderFns:[]};var U=t("VU/8")(M,N,!1,function(e){t("RLwA")},"data-v-69003eb9",null).exports,O={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"aside"},[a("div",{staticClass:"author"},[a("img",{attrs:{src:t("60D5")}})]),e._v(" "),a("div",{attrs:{author_content:""}},[a("h3",{staticClass:"author_name"},[e._v("Zheng Yang")]),e._v(" "),a("p",{staticClass:"author_bio"},[e._v("Security Researcher")])]),e._v(" "),a("div",{staticClass:"author_urls"},[a("p",{staticClass:"flag"},[a("i",{staticClass:"el-icon-location"}),e._v(" Chongqing, China")]),e._v(" "),a("span",[a("i",{staticClass:"el-icon-message"}),e._v(" "),a("a",{attrs:{href:"youngzheng@swu.edu.cn"}},[e._v("Email")])])])])}]};var K=t("VU/8")(null,O,!1,function(e){t("o5B4")},"data-v-ba580786",null).exports,F=(t("VU/8")(null,null,!1,null,null,null).exports,{data:function(){return{}},components:{CommonHeader:U,CommonAside:K}}),B={render:function(){var e=this.$createElement,n=this._self._c||e;return n("el-container",{staticClass:"topcontainer"},[n("el-header",[n("common-header")],1),this._v(" "),n("el-container",{staticClass:"midcontainer"},[n("el-aside",[n("common-aside")],1),this._v(" "),n("el-main",[n("router-view")],1)],1),this._v(" "),n("el-footer",[n("common-footer")],1)],1)},staticRenderFns:[]};var H=t("VU/8")(F,B,!1,function(e){t("/qOy")},"data-v-6ee3c5d5",null).exports,V={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h1",[e._v("Homepage of Zheng Yang")]),e._v(" "),t("p",[e._v("I am professor for the research group "),t("b",[e._v('"Security & Privacy in Artificial-Intelligence and Cryptographic\n        Engineering (SPACE)"')]),e._v("at the College of Computer and Information Science, College of Software, Southwest University, China. ")]),e._v(" "),t("p",[e._v("Formally, I was "),t("b",[e._v("a post-doc researcher at the University of Helsinki")]),e._v(", and "),t("b",[e._v("the Singapore University of\n        Technology and Design.")]),e._v(" And I received "),t("b",[e._v("the Ph.D. degree")]),e._v(" from "),t("b",[e._v("Horst Goertz Institute for IT Security, Ruhr-University Bochum, in\n        2013.")])]),e._v(" "),t("p",[t("b",[e._v("My research focuses on Lightweight Cryptography, Cyber-Physical Security, Provable Security, Cryptographic\n        Protocols, Privacy Enhance Technology, Blockchain.")]),e._v(" I published our results in top or well-known venues\n        (marked with CORE ranking A* and A)for applied cryptography and security such as "),t("b",[e._v("Usenix Security, FSE, ESORICS, IEEE Euro\n        S&P, ACSAC, AsiaCCS, PKC, ACNS, CT-RSA, IEEE INFOCOM, IEEE TII, ACM TOSN, The Computer Journal, etc.")])]),e._v(" "),t("p",[t("b",[e._v("You can find further information on:")]),e._v(" "),t("a",{attrs:{href:"https://www.researchgate.net/profile/Zheng-Yang-6"}},[e._v("https://www.researchgate.net/profile/Zheng-Yang-6")]),t("br"),e._v(" "),t("b",[e._v("Consultation-hours: please contact me via email:")]),e._v(" "),t("a",{attrs:{href:"youngzheng@swu.edu.cn"}},[e._v("youngzheng@swu.edu.cn")])])])}]};var G=t("VU/8")(null,V,!1,function(e){t("2u0w")},null,null).exports,W={data:function(){new Array;return{items_2023:[{message:"Daniel Reijsbergen, Aung Maw, Zheng Yang, Tien Tuan Anh Dinh, and Jianying Zhou. TAP: Transparent and Privacy-Preserving Data Services. USENIX Security 2023, Anaheim, USA. flagship conference in Cybersecurity"}],items_2022:[{message:"Zheng Yang, Chao Yin*, Junming Ke, Tien Tuan Anh Dinh, and Jianying Zhou. “If You Can’t Beat Them, Pay Them: Bitcoin Protection Racket is Profitable.  ACSAC 2022, Austin, Texas, USA, 05-09 December, 2022."},{message:"Zheng Yang, Zhiting Bao, Chenglu Jin, Zhe Liu, Jianying Zhou. PLCrypto: A Symmetric Cryptographic Library for Programmable Logic Controllers. IACR Trans. Symmetric Cryptol. FSE 2022, Athens, Greece, 20-25 March, 2022."},{message:"Zheng Yang, Tien Tuan Anh Dinh, Chao Yin*, Yingying Yao, Dianshi Yang, Xiaolin Chang, and Jianying Zhou. LARP: A Lightweight Auto-Refreshing Pseudonym Protocol for V2X. SACMAT 2022, New York, USA, 06-08 June 2022.B"}],items_2021:[{message:"Zheng Yang, Chenglu Jin, Jianting Ning*, Zengpeng Li, Anh Dinh, Jianying Zhou. Group Time-based One-time Passwords and its Application to Efficient Privacy-Preserving Proof of Location. ACSAC 2021, Virtual Event, USA, 06-10 December, 2021."},{message:"Daniel Reijsbergen, Zheng Yang*, Aung Maw, Anh Dinh, Jianying Zhou. Transparent Electricity Pricing with Privacy. ESORICS 2021, Darmstadt, Germany on 04-08 October, 2021."},{message:"Zheng Yang, Chao Yin, Chenglu Jin, Jianting Ning and Jianying Zhou. Lightweight Delegated Authentication with Identity Fraud Detection for Cyber-physical Systems. ACM CPSS 2021, Hong Kong, China, 7 June 2021. "}],items_2020:[{message:"Zheng Yang, Chenglu Jin, Yangguang Tian, Junyu Lai, and Jianying Zhou. LiS: Lightweight Signature Schemes for Continuous Message Authentication in Cyber-Physical Systems. AsiaCCS 2020, Taipei, Taiwan, 05-09 October, 2020."}],items_2019:[{message:"Chenglu Jin, Zheng Yang*, Marten van Dijk, and Jianying Zhou. Proof of Aliveness. ACSAC 2019, San Juan, PR, US, 09-13 December, 2019. *The first two authors are sorted alphabetically and share the first authorship. One of the top security conferences in Computer Security."},{message:"Kimmo Järvinen, Helena Leppäkoski, Elena-Simona Lohan, Philipp Richter, Thomas Schneider, Oleksandr Tkachenko, Zheng Yang. PILOT: Practical Privacy-Preserving Indoor Localization using OuTsourcing. IEEE Euro S&P 2019, Stockholm, Sweden, 17-19 June, 2019. *Authors are sorted alphabetically and share the first authorship. Acceptance rate 20%, one of the top security conferences in Europe (See the CV of Prof. Thomas Schneider)"},{message:"Junming Ke, Pawel Szalachowski, Jianying Zhou, Qiuliang Xu, and Zheng Yang. IBWH: An Intermittent BlockWith holding Attack with Optimal Mining Reward Rate. ISC 2019, New York, USA, 16-18 September, 2019."}],items_2018:[{message:"Zheng Yang, Kimmo U. Järvinen. The Death and Rebirth of Privacy-Preserving Wifi Fingerprint Localization with Paillier Encryption. IEEE INFOCOM 2018, Honolulu, HI, USA, 15-19 April, 2018."},{message:"Zheng Yang, Yu Chen, Song Luo. Two-message Key Exchange with Strong Security from Ideal Lattices. CT-RSA 2018, San Francisco, USA, 16-20 April, 2018."},{message:"Kimmo Jarvinen, Agnes Kiss, Thomas Schneider, Oleksandr Tkachenko and Zheng Yang. Faster Privacy-Preserving Location Proximity Schemes. CANS 2018, Naples, Italy, 30 September-03 October, 2018. *Authors are sorted alphabetically and share the first authorship."},{message:"Zheng Yang, Kimmo U. Järvinen. Modeling Privacy in WiFi Fingerprinting Indoor Localization. In ProvSec 2018, Jeju, Korea, 25-28 October, 2018."},{message:"Yang, Zheng, Mohsin Khan, Wanping Liu, and Jun He. On Security Analysis of Generic Dynamic Authenticated Group Key Exchange. NordSec 2018, Oslo, Norway 28-30 November, 2018."},{message:"P. Richter, Zheng Yang, Oleksandr Tkachenko, Kimmo Jarvinen, Helena Leppäkoski, Thomas Schneider, E. S. Lohan. Received Signal Strength quantization for secure indoor positioning via fingerprinting. ICL-GNSS 2018, IEEE, 26-28 June 2018."}],items_2017:[{message:"Song Luo, Lu Yan, Jian Weng, and Zheng Yang. New Proof for BKP IBE Scheme and Improvement in the MIMC Setting. International Conference on Information Security Practice and Experience – INSPEC 2017, Melbourne, Australia, 13-15 December 2017. "}],items_2014:[{message:"Yong Li, Sven Schäge, Zheng Yang, Florian Kohlar and Joerg Schwenk. On the Security of the Pre-Shared Key Ciphersuites of TLS. PKC 2014, Buenos Aires, Argentina, 26-28 March, 2014. *The first three authors are sorted alphabetically and share the first authorship."},{message:"Yong Li*, Sven Schäge* and Zheng Yang*, Christopher Bader and Joerg Schwenk. New Modular Compilers for Authenticated Key Exchange. ACNS 2014, Lausanne, Switzerland, 10-13 June 2014. *The first three authors are sorted in lexicographical order and share the first authorship."}],items_2013:[{message:"Zheng Yang. Efficient eCK-secure authenticated key exchange protocols in the standard model. ICICS 2013, Beijing, China, 20-22 November 2013."},{message:"Yong Li and Zheng Yang. Strongly Secure One-round Group Authenticated Key Exchange in the Standard Model. CANS 2013, Paraty, Brazil, 20-22 November 2013. *The authors are sorted in lexicographical order and share the first authorship."},{message:"Zheng Yang. Modelling Simultaneous Mutual Authentication for Authenticated Key Exchange. FPS 2013, France, 21-22 October, 2013."}],items_2012:[{message:"Zheng Yang and Joerg Schwenk. Strongly authenticated key exchange protocol from bilinear groups without random oracles. ProvSec 2012, Chengdu, China, 26-28 September, 2012."}]}},methods:{}},z={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h1",[e._v("Publications")]),e._v(" "),t("div",[t("h1",[e._v("2023")]),e._v(" "),e._l(e.items_2023,function(n){return t("li",{key:n.message,attrs:{index:n.message}},[e._v("\n            "+e._s(n.message)+"\n        ")])})],2),e._v(" "),t("div",[t("h1",[e._v("2022")]),e._v(" "),e._l(e.items_2022,function(n){return t("li",{key:n.message,attrs:{index:n.message}},[e._v("\n            "+e._s(n.message)+"\n        ")])})],2),e._v(" "),t("div",[t("h1",[e._v("2021")]),e._v(" "),e._l(e.items_2021,function(n){return t("li",{key:n.message,attrs:{index:n.message}},[e._v("\n            "+e._s(n.message)+"\n        ")])})],2),e._v(" "),t("div",[t("h1",[e._v("2020")]),e._v(" "),e._l(e.items_2020,function(n){return t("li",{key:n.message,attrs:{index:n.message}},[e._v("\n            "+e._s(n.message)+"\n        ")])})],2),e._v(" "),t("div",[t("h1",[e._v("2019")]),e._v(" "),e._l(e.items_2019,function(n){return t("li",{key:n.message,attrs:{index:n.message}},[e._v("\n            "+e._s(n.message)+"\n        ")])})],2),e._v(" "),t("div",[t("h1",[e._v("2018")]),e._v(" "),e._l(e.items_2018,function(n){return t("li",{key:n.message,attrs:{index:n.message}},[e._v("\n            "+e._s(n.message)+"\n        ")])})],2),e._v(" "),t("div",[t("h1",[e._v("2017")]),e._v(" "),e._l(e.items_2017,function(n){return t("li",{key:n.message,attrs:{index:n.message}},[e._v("\n            "+e._s(n.message)+"\n        ")])})],2),e._v(" "),t("div",[t("h1",[e._v("2014")]),e._v(" "),e._l(e.items_2014,function(n){return t("li",{key:n.message,attrs:{index:n.message}},[e._v("\n            "+e._s(n.message)+"\n        ")])})],2),e._v(" "),t("div",[t("h1",[e._v("2013")]),e._v(" "),e._l(e.items_2013,function(n){return t("li",{key:n.message,attrs:{index:n.message}},[e._v("\n            "+e._s(n.message)+"\n        ")])})],2),e._v(" "),t("div",[t("h1",[e._v("2012")]),e._v(" "),e._l(e.items_2012,function(n){return t("li",{key:n.message,attrs:{index:n.message}},[e._v("\n            "+e._s(n.message)+"\n        ")])})],2)])},staticRenderFns:[]};var $=t("VU/8")(W,z,!1,function(e){t("TMNO")},"data-v-087479c6",null).exports,j={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",[n("h1",[this._v("Working")]),this._v(" "),[n("el-table",{staticStyle:{width:"100%","font-size":"18px"},attrs:{data:this.tableData}},[n("el-table-column",{attrs:{prop:"affiliation",label:"Affiliation",width:"450px"}}),this._v(" "),n("el-table-column",{attrs:{prop:"data",label:"Start -- End Date",width:"300px"}}),this._v(" "),n("el-table-column",{attrs:{prop:"position",label:"Position",width:"240px"}})],1)]],2)},staticRenderFns:[]};var q=t("VU/8")({data:function(){return{tableData:[{affiliation:"Southwest University",data:"2021/03 – Now",position:"Professor"},{affiliation:"Singapore University of Technology and Design",data:"2018/06 – 2021/04",position:"Research Fellow"},{affiliation:"University of Helsinki",data:"2017/03 – 2018/05",position:"Research Fellow"},{affiliation:"TU Darmstadt",data:"2017/10 – 2017/11",position:"Academic Visit"},{affiliation:"Chongqing University of Technology",data:"2014/07 – 2020/10",position:"Associate Professor"}]}}},j,!1,function(e){t("oIlN")},null,null).exports,X={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h1",[e._v("Services")]),e._v(" "),t("h2",[e._v("Conference Services")]),e._v(" "),t("ol",[t("li",[e._v("International Conference on "),t("b",[e._v("Cyberworlds")]),e._v(" 2016 "),t("b",[e._v("(Program Co-Chair)")]),e._v(", 2017 and 2018 "),t("b",[e._v("(Program Committee)")])]),e._v(" "),t("li",[t("b",[e._v("SIMUtools 2018:")]),e._v(" 11th EAI International Conference on Simulation Tools and Techniques,"),t("b",[e._v(" Program Committee")])]),e._v(" "),t("li",[t("b",[e._v("ACM CPSS 2019, 2020: ")]),e._v("Cyber-Physical System Security Workshop,"),t("b",[e._v(" Program Committee")])]),e._v(" "),t("li",[t("b",[e._v("AIoTS 2019: ")]),e._v("International workshop in Artificial Intelligence and Industrial Internet-of-Things Security,"),t("b",[e._v(" Publication Chair")])]),e._v(" "),t("li",[t("b",[e._v("ICICS 2019, 2020, 2021, 2022: ")]),e._v("International Conference on Information and Communications Security,"),t("b",[e._v(" Program Committee")])])]),e._v(" "),t("h2",[e._v("Reviewer for Journals")]),e._v(" "),t("ol",[t("li",[e._v("IEEE Transactions on Information Forensics and Security")]),e._v(" "),t("li",[e._v("IEEE Transactions on Dependable and Secure Computing")]),e._v(" "),t("li",[e._v("IEEE Transactions on Industrial Informatics")]),e._v(" "),t("li",[e._v("Designs, Codes and Cryptography")]),e._v(" "),t("li",[e._v("IEEE Transactions on Wireless Communications")]),e._v(" "),t("li",[e._v("Science China. Information Sciences")])]),e._v(" "),t("h2",[e._v("Guest Editor")]),e._v(" "),t("li",[e._v("Security and Communication Networks, special issue: "),t("b",{staticClass:"_min"},[e._v("Privacy-Enhancing Authentication and Computation for Human CPS and IoT, 2022")])])])}]};var Q=t("VU/8")({data:function(){return{}}},X,!1,function(e){t("UZjh")},null,null).exports,ee=t("VU/8")(null,null,!1,null,null,null).exports;D.default.use(R.a);var ne=[{path:"/",component:H,redirect:"Yang",children:[{path:"yang",component:G},{path:"pub",component:$},{path:"working",component:q},{path:"services",component:Q},{path:"cv",component:ee}]}],te=new R.a({routes:ne});t("tvR6");D.default.config.productionTip=!1,D.default.component(x.a.name,x.a),D.default.component(Y.a.name,Y.a),D.default.component(T.a.name,T.a),D.default.use(w.a),D.default.use(E.a),D.default.use(b.a),D.default.use(S.a),D.default.use(p.a),D.default.use(f.a),D.default.use(v.a),D.default.use(g.a),D.default.use(u.a),D.default.use(c.a),D.default.use(o.a),D.default.use(i.a),new D.default({el:"#app",router:te,components:{App:L},template:"<App/>"})},Q6SQ:function(e,n){},RLwA:function(e,n){},TMNO:function(e,n){},UZjh:function(e,n){},V5v9:function(e,n){},XPMo:function(e,n){},bwiK:function(e,n){},cDSy:function(e,n){},d7TW:function(e,n){},heEK:function(e,n){},isE6:function(e,n){},jZDA:function(e,n){},o5B4:function(e,n){},oIlN:function(e,n){},tvR6:function(e,n){}},["NHnr"]);
//# sourceMappingURL=app.d1d94e1d9c8ec84432b0.js.map