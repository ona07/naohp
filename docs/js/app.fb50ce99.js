(function(){"use strict";var e={8520:function(e,t,n){var o=n(5130),r=n(6768);const a={class:"app"};function s(e,t,n,s,i,c){const u=(0,r.g2)("sidebar"),l=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)("div",a,[(0,r.bF)(u),(0,r.bF)(l,null,{default:(0,r.k6)((({Component:e})=>[(0,r.bF)(o.eB,{name:"fade",mode:"out-in"},{default:(0,r.k6)((()=>[((0,r.uX)(),(0,r.Wv)((0,r.$y)(e)))])),_:2},1024)])),_:1})])}var i=n(4232);const c={class:"sidebar"};function u(e,t,n,o,a,s){const u=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("aside",c,[(0,r.bF)(u,{to:"/",onMouseover:s.handleMouseOver,onMouseout:s.handleMouseOut,class:(0,i.C4)(s.linkClass("home"))},{default:(0,r.k6)((()=>t[0]||(t[0]=[(0,r.eW)("Home")]))),_:1},8,["onMouseover","onMouseout","class"]),(0,r.bF)(u,{to:"/about",onMouseover:s.handleMouseOver,onMouseout:s.handleMouseOut,class:(0,i.C4)(s.linkClass("about"))},{default:(0,r.k6)((()=>t[1]||(t[1]=[(0,r.eW)("About")]))),_:1},8,["onMouseover","onMouseout","class"])])}var l={name:"MySidebar",data(){return{activeLink:null}},methods:{handleMouseOver(e){this.activeLink=e.target.textContent.toLowerCase()},handleMouseOut(){this.activeLink=null},linkClass(e){return{link:!0,active:this.activeLink===e}}}},d=n(1241);const p=(0,d.A)(l,[["render",u],["__scopeId","data-v-625a7084"]]);var v=p,h={name:"App",components:{Sidebar:v}};const f=(0,d.A)(h,[["render",s]]);var k=f,m=n(1387);const b={refs:"canvas",class:"home"};function L(e,t,n,o,a,s){return(0,r.uX)(),(0,r.CE)("div",b)}var y=n(9944),C=n.n(y),E={name:"MyProfile",methods:{createSketch(e){let t,n;e.preload=()=>{const t="https://fonts.gstatic.com/ea/notosansjapanese/v6/NotoSansJP-Bold.otf";n=e.loadFont(t)},e.setup=()=>{e.createCanvas(window.innerWidth,window.innerHeight,e.WEBGL),e.noStroke(),t=[],t[0]=e.createVector(0,-100,0),t[1]=e.createVector(-50,50,50),t[2]=e.createVector(50,50,50),t[3]=e.createVector(-50,-50,-50),t[4]=e.createVector(50,-50,-50),e.textFont(n)},e.draw=()=>{e.background(0),e.lights();const n=e.map(e.mouseX,0,e.width,-e.PI,e.PI);e.rotateY(n),t[0]=e.createVector(e.mouseX-window.innerWidth/2,0,0),t[1]=e.createVector(0,e.mouseY-window.innerHeight/2,0),t[3]=e.createVector(0,e.mouseY-window.innerHeight/2,0),e.beginShape(e.TRIANGLE_STRIP);for(let o=0;o<t.length;o++){const n=t[o];e.vertex(n.x,n.y,n.z)}e.endShape(),e.fill(255),e.textSize(30),e.textAlign(e.CENTER,e.CENTER),e.text("Nao Kokubo",0,0)}}},mounted(){this.sketch=new(C())(this.createSketch,this.$refs.canvas)},beforeUnmounted(){this.sketch.remove()}};const g=(0,d.A)(E,[["render",L]]);var w=g;const O={class:"page"},_={class:"about"},M={class:"contents"},x={class:"me"},S={class:"list"},X=["href"],A={class:"history"},T={class:"skills"},j={class:"list"},I={class:"skill-list"},F={class:"interns"},P={class:"intern-container"},H=["href"],N={class:"project-position"},V=["href"];function R(e,t,n,o,a,s){return(0,r.uX)(),(0,r.CE)("div",O,[(0,r.Lk)("div",_,[t[8]||(t[8]=(0,r.Lk)("h1",{class:"title"},"ABOUT",-1)),(0,r.Lk)("div",M,[(0,r.Lk)("div",x,[t[1]||(t[1]=(0,r.Lk)("h2",null,"ME",-1)),(0,r.Lk)("div",S,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(a.me,((e,t)=>((0,r.uX)(),(0,r.CE)("p",{key:t},(0,i.v_)(e.item)+" : "+(0,i.v_)(e.value),1)))),128)),(0,r.Lk)("p",null,[t[0]||(t[0]=(0,r.eW)("Github : ")),(0,r.Lk)("a",{href:a.github,target:"_blank"},(0,i.v_)(a.github),9,X)])])]),(0,r.Lk)("div",A,[t[2]||(t[2]=(0,r.Lk)("h2",null,"HISTORY",-1)),(0,r.Lk)("ul",null,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(a.workExperience,((e,t)=>((0,r.uX)(),(0,r.CE)("li",{key:t},(0,i.v_)(e.period)+" "+(0,i.v_)(e.position)+" "+(0,i.v_)(e.company),1)))),128))])]),(0,r.Lk)("div",T,[t[4]||(t[4]=(0,r.Lk)("h2",null,"SKILLS",-1)),(0,r.Lk)("div",j,[t[3]||(t[3]=(0,r.Lk)("h4",{class:"skill-subtitle"},"LANGUAGE/TOOL/etc...",-1)),(0,r.Lk)("div",I,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(a.skills,((e,t)=>((0,r.uX)(),(0,r.CE)("span",{key:t,class:"skill"},(0,i.v_)(e),1)))),128))])])]),(0,r.Lk)("div",F,[t[6]||(t[6]=(0,r.Lk)("h2",null,"INTERNS",-1)),(0,r.Lk)("div",P,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(a.interns,((e,n)=>((0,r.uX)(),(0,r.CE)("div",{key:n,class:"project-box"},[(0,r.Lk)("a",{class:"project-position",href:e.companyLink,target:"_blank"},(0,i.v_)(e.company),9,H),(0,r.Lk)("span",N," ("+(0,i.v_)(e.period)+")",1),t[5]||(t[5]=(0,r.Lk)("br",null,null,-1)),(0,r.Lk)("a",{class:"project-name",href:e.article,target:"_blank"},(0,i.v_)(e.name),9,V)])))),128))])]),t[7]||(t[7]=(0,r.Lk)("div",{class:"others"},[(0,r.Lk)("h2",null,"OTHERS")],-1))])])])}var W={name:"MyAbout",data(){return{me:[{item:"Name",value:"小久保　尚"},{item:"Age",value:"19"},{item:"University",value:"公立はこだて未来大学"},{item:"E-mail",value:"b1022096@fun.ac.jp"}],github:"https://github.com/ona07",workExperience:[{period:"2004.01.29",position:"",company:"誕生"},{period:"",position:"",company:""}],skills:["Japanese","FastAPI","Python","HTML","Javascript","CSS","Vue.js","Processing","C","R","Blender","analysis (mathematical)","Practical English Proficiency Test Level 4"],projects:[{frame:"高度ICT演習",team:"fun-i-con",position:"backend",link:"https://www.fun.ac.jp/advanced-ict"},{frame:"いさりびwith",team:"商品開発チーム",position:"subleader & web developer"}],interns:[{company:"CosstyHD (株)ECOTEC",name:"建設会社でDXインターンシップ",period:"2023/03/13~2023/03/16",article:"https://note.com/crosstyhd_dx/n/n304c759e42e8"},{company:"CosstyHD (株)ECOTEC",name:"建設会社でDXインターンシップ",period:"2023/03/13~2023/03/16",article:"https://note.com/crosstyhd_dx/n/n304c759e42e8"}]}}};const K=(0,d.A)(W,[["render",R]]);var B=K;const G=[{path:"/",component:w},{path:"/About",component:B}],D=(0,m.aE)({history:(0,m.LA)("/naohp/"),routes:G});var U=D;(0,o.Ef)(k).use(U).mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,a){if(!o){var s=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],a=e[l][2];for(var i=!0,c=0;c<o.length;c++)(!1&a||s>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(i=!1,a<s&&(s=a));if(i){e.splice(l--,1);var u=r();void 0!==u&&(t=u)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[o,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,s=o[0],i=o[1],c=o[2],u=0;if(s.some((function(t){return 0!==e[t]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(c)var l=c(n)}for(t&&t(o);u<s.length;u++)a=s[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(l)},o=self["webpackChunknaohp"]=self["webpackChunknaohp"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(8520)}));o=n.O(o)})();
//# sourceMappingURL=app.fb50ce99.js.map