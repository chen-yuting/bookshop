(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-394d0467"],{"059b":function(t,e,a){"use strict";var i=a("826b"),s=a.n(i);s.a},"05a7":function(t,e,a){"use strict";var i=a("2c3f"),s=a.n(i);s.a},"1a37":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"store-home"},[a("search-bar"),a("flap-card",{attrs:{data:t.random}}),a("scroll",{ref:"scroll",attrs:{top:t.scrollTop},on:{onScroll:t.onScroll}},[a("div",{staticClass:"banner-wrapper"},[a("div",{staticClass:"banner-img",style:{backgroundImage:"url('"+t.banner+"')"}})]),a("guess-you-like",{attrs:{data:t.guessYouLike}}),a("recommend",{staticClass:"recommend",attrs:{data:t.recommend}}),a("featured",{staticClass:"featured",attrs:{data:t.featured,titleText:t.$t("home.featured"),btnText:t.$t("home.seeAll")}}),t._l(t.categoryList,(function(t,e){return a("div",{key:e,staticClass:"category-list-wrapper"},[a("category-book",{attrs:{data:t}})],1)})),a("category",{staticClass:"category",attrs:{data:t.categories}})],2)],1)},s=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"search-bar",class:{"hide-title":!t.titleVisible,"hide-shadow":!t.shadowVisible}},[a("transition",{attrs:{name:"title-move"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.titleVisible,expression:"titleVisible"}],staticClass:"search-bar-title-wrapper"},[a("div",{staticClass:"title-text-wrapper"},[a("span",{staticClass:"title-text title"},[t._v(t._s(t.$t("home.title")))])]),a("div",{staticClass:"title-icon-shake-wrapper",on:{click:function(e){return t.showFlapCard()}}},[a("span",{staticClass:"icon-shake icon"})])])]),a("div",{staticClass:"title-icon-back-wrapper",class:{"hide-title":!t.titleVisible},on:{click:function(e){return t.back()}}},[a("span",{staticClass:"icon-back icon"})]),a("div",{staticClass:"search-bar-input-wrapper",class:{"hide-title":!t.titleVisible}},[a("div",{staticClass:"search-bar-blank",class:{"hide-title":!t.titleVisible}}),a("div",{staticClass:"search-bar-input"},[a("span",{staticClass:"icon-search icon"}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],staticClass:"input",attrs:{type:"text",placeholder:t.$t("home.hint")},domProps:{value:t.searchText},on:{click:function(e){return t.showHotSearch()},keyup:function(e){return e.type.indexOf("key")||13===e.keyCode?e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:t.search():null},input:function(e){e.target.composing||(t.searchText=e.target.value)}}})])])],1),a("hot-search-list",{directives:[{name:"show",rawName:"v-show",value:t.hotSearchVisible,expression:"hotSearchVisible"}],ref:"hotSearchList"})],1)},n=[],o=a("ac0d"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"hot-search-move"}},[a("scroll",{ref:"scroll",staticClass:"hot-search-wrapper",attrs:{top:52},on:{onScroll:t.onScroll}},[a("hot-search",{attrs:{label:t.$t("home.hotSearch"),btn:t.$t("home.change"),hotSearch:t.searchList.hotSearch}}),a("div",{staticClass:"line"}),a("hot-search",{attrs:{label:t.$t("home.historySearch"),btn:t.$t("home.clear"),hotSearch:t.searchList.historySearch}})],1)],1)},l=[],h=a("6701"),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"hot-search-title"},[a("span",{staticClass:"label"},[t._v(t._s(t.label))]),a("span",{staticClass:"btn"},[t._v(t._s(t.btn))])]),a("div",{staticClass:"hot-search-list"},t._l(t.hotSearch,(function(e,i){return a("div",{key:i,staticClass:"hot-search-item"},[a("div",{staticClass:"icon-wrapper"},[1===e.type?a("span",{staticClass:"icon-book icon"}):t._e(),2===e.type?a("span",{staticClass:"icon-search icon"}):t._e()]),a("div",{staticClass:"hot-search-text-wrapper"},[a("div",{ref:"searchText",refInFor:!0,staticClass:"text"},[t._v(t._s(e.text))]),e.num?a("div",{staticClass:"num"},[t._v(t._s(e.num)+"人搜索")]):t._e()])])})),0)])},d=[],f=(a("ac6a"),a("f3e2"),a("fa7d")),m={props:{label:String,btn:String,hotSearch:Array},mounted:function(){this.$refs.searchText.forEach((function(t){t.style.width=window.innerWidth-Object(f["b"])(20)-Object(f["b"])(40)+"px"}))}},p=m,v=(a("7192"),a("2877")),b=Object(v["a"])(p,u,d,!1,null,"67585240",null),g=b.exports,C={mixins:[o["b"]],components:{Scroll:h["a"],HotSearch:g},data:function(){return{searchList:{hotSearch:[{type:1,text:"Self-Reported Population Health",num:"1.8万"},{type:1,text:"Library and Information Sciences",num:"1.1万"},{type:1,text:"Global Business Strategy",num:"1.3万"},{type:1,text:"Corporate Data Quality",num:"1.0万"},{type:1,text:"Verrechnungspreise",num:"3.9万"}],historySearch:[{type:2,text:"Computer Science"},{type:1,text:"Building the Infrastructure for Cloud Security"},{type:2,text:"ePub"},{type:2,text:"api"},{type:2,text:"Vue.js"},{type:2,text:"Nginx"},{type:2,text:"Java"},{type:2,text:"hdfs"},{type:2,text:"vuejs"},{type:2,text:"es6"},{type:2,text:"Intel"},{type:1,text:"Pro Git"},{type:2,text:"imooc"},{type:2,text:"Education"},{type:2,text:"Springer"},{type:2,text:"Environment"}]}}},methods:{onScroll:function(t){this.setHotSearchOffsetY(t)},reset:function(){this.$refs.scroll.scrollTo(0,0)}}},y=C,w=(a("cee6"),Object(v["a"])(y,c,l,!1,null,"f7a8ce1c",null)),k=w.exports,x={mixins:[o["b"]],components:{HotSearchList:k},data:function(){return{searchText:"",titleVisible:!0,shadowVisible:!1,hotSearchVisible:!1}},watch:{offsetY:function(t){t>0?(this.hideTitle(),this.showShadow()):(this.showTitle(),this.hideShadow())},hotSearchOffsetY:function(t){t>0?this.showShadow():this.hideShadow()}},methods:{showFlapCard:function(){this.setFlapCardVisible(!0)},hideTitle:function(){this.titleVisible=!1},showTitle:function(){this.titleVisible=!0},hideShadow:function(){this.shadowVisible=!1},showShadow:function(){this.shadowVisible=!0},hideHotSearch:function(){this.hotSearchVisible=!1},showHotSearch:function(){var t=this;this.hideShadow(),this.hideTitle(),this.hotSearchVisible=!0,this.$nextTick((function(){t.$refs.hotSearchList.reset()}))},search:function(){this.$router.push({path:"/store/list",query:{keyword:this.searchText}})},back:function(){this.offsetY>0?(this.hideTitle(),this.showShadow()):(this.showTitle(),this.hideShadow()),this.hotSearchVisible?this.hideHotSearch():this.$router.push("/store/shelf")}}},_=x,S=(a("2a20"),Object(v["a"])(_,r,n,!1,null,"7bee8a34",null)),$=S.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.flapCardVisible,expression:"flapCardVisible"}],staticClass:"flap-card-wrapper"},[a("div",{staticClass:"flap-card-bg",class:{animation:t.runFlapCardAnimation}},[t._l(t.flapCardList,(function(e,i){return a("div",{key:i,staticClass:"flap-card",style:{zIndex:e.zIndex}},[a("div",{staticClass:"flap-card-circle"},[a("div",{ref:"left",refInFor:!0,staticClass:"flap-card-semi-circle flap-card-semi-circle-left",style:t.semiCircleStyle(e,"left")}),a("div",{ref:"right",refInFor:!0,staticClass:"flap-card-semi-circle flap-card-semi-circle-right",style:t.semiCircleStyle(e,"right")})])])})),a("div",{staticClass:"point-wrapper"},t._l(t.pointList,(function(e,i){return a("div",{key:i,staticClass:"point",class:{animation:t.runPointAnimation}})})),0)],2),a("div",{directives:[{name:"show",rawName:"v-show",value:t.runBookCardAnimation,expression:"runBookCardAnimation"}],staticClass:"book-card",class:{animation:t.runBookCardAnimation}},[a("div",{staticClass:"book-card-wrapper"},[a("div",{staticClass:"img-wrapper"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.data?t.data.cover:"",expression:"data?data.cover:''"}],staticClass:"img"})]),a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"title"},[t._v(t._s(t.data?t.data.title:""))]),a("div",{staticClass:"author sub-title-medium"},[t._v(t._s(t.data?t.data.author:""))]),a("div",{staticClass:"category"},[t._v(t._s(t.categoryText()))])]),a("div",{staticClass:"read-btn",on:{click:function(e){return e.stopPropagation(),t.showBookDetail(t.data)}}},[t._v(t._s(t.$t("home.readNow")))])])]),a("div",{staticClass:"close-btn-wrapper",on:{click:function(e){return t.close()}}},[a("span",{staticClass:"icon-close"})])])},A=[],L=a("da6f"),V={mixins:[o["b"]],props:{data:Object},data:function(){return{front:0,back:1,runFlapCardAnimation:!1,runPointAnimation:!1,runBookCardAnimation:!1,pointList:[],flapCardList:L["g"]}},watch:{flapCardVisible:function(t){t&&this.runAnimation()}},created:function(){for(var t=0;t<18;t++)this.pointList.push({})},methods:{close:function(){this.setFlapCardVisible(!1),this.stopFlapCardAnimation()},semiCircleStyle:function(t,e){return{backgroundColor:"rgb(".concat(t.r,",").concat(t.g,",").concat(t.b),backgroundSize:t.backgroundSize,backgroundImage:"left"==e?t.imgLeft:t.imgRight}},rotate:function(t,e){var a,i=this.flapCardList[t];a="front"==e?this.$refs.right[t]:this.$refs.left[t],a.style.transform="rotateY(".concat(i.rotateDegree,"deg)"),a.style.backgroundColor="rgb(".concat(i.r,",").concat(i._g,",").concat(i.b)},flapCardRotate:function(){var t=this.flapCardList[this.front],e=this.flapCardList[this.back];t.rotateDegree+=10,t._g-=5,e.rotateDegree-=10,e.rotateDegree<90&&(e._g+=5),90==t.rotateDegree&&90==e.rotateDegree&&(e.zIndex+=2),this.rotate(this.front,"front"),this.rotate(this.back,"back"),180==t.rotateDegree&&0==e.rotateDegree&&this.next()},next:function(){var t=this,e=this.flapCardList[this.front],a=this.flapCardList[this.back];e.rotateDegree=0,a.rotateDegree=0,e._g=e.g,a._g=a.g,this.rotate(this.front,"front"),this.rotate(this.back,"back"),this.front++,this.back++;var i=this.flapCardList.length;this.front>=i&&(this.front=0),this.back>=i&&(this.back=0),this.flapCardList.forEach((function(e,a){e.zIndex=100-(a-t.front+i)%i})),this.prepare()},prepare:function(){var t=this.flapCardList[this.back];t.rotateDegree=180,t._g=t.g-45,this.rotate(this.back,"back")},startFlapCardAnimation:function(){var t=this;this.prepare(),this.task=setInterval((function(){t.flapCardRotate()}),25)},stopFlapCardAnimation:function(){this.task&&clearInterval(this.task),this.timeout1&&clearTimeout(this.timeout1),this.timeout2&&clearTimeout(this.timeout2),this.reset()},reset:function(){var t=this;this.front=0,this.back=1,this.flapCardList.forEach((function(e,a){e.zIndex=100-a,e._g=e.g,e.rotateDegree=0,t.rotate(a,"front"),t.rotate(a,"back")})),this.runBookCardAnimation=!1,this.runFlapCardAnimation=!1,this.runPointAnimation=!1},runAnimation:function(){var t=this;this.runFlapCardAnimation=!0,this.timeout1=setTimeout((function(){t.startFlapCardAnimation(),t.startPointAnimation()}),300),this.timeout2=setTimeout((function(){t.stopAnimation(),t.runBookCardAnimation=!0}),2500)},stopAnimation:function(){this.runFlapCardAnimation=!1,this.task&&clearInterval(this.task)},startPointAnimation:function(){var t=this;this.runPointAnimation=!0,setTimeout((function(){t.runPointAnimation=!1}),750)},categoryText:function(){return this.data?Object(L["d"])(this.data.category,this):""}}},F=V,O=(a("6208"),Object(v["a"])(F,T,A,!1,null,"09a6936b",null)),j=O.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"guess-you-like"},[a("title-view",{attrs:{label:t.$t("home.guessYouLike"),btn:t.$t("home.change")},on:{onClick:function(e){return t.change()}}}),a("div",{staticClass:"guess-you-like-list"},t._l(t.showData,(function(e,i){return a("div",{key:i,staticClass:"guess-you-like-item",on:{click:function(a){return t.showBookDetail(e)}}},[a("div",{staticClass:"img-wrapper"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.cover,expression:"item.cover"}],key:e.cover,staticClass:"img"})]),a("div",{staticClass:"content-wrapper"},[a("div",{ref:"title",refInFor:!0,staticClass:"title title-big"},[t._v(t._s(e.title))]),a("div",{ref:"author",refInFor:!0,staticClass:"author sub-title"},[t._v(t._s(e.author))]),a("div",{ref:"result",refInFor:!0,staticClass:"result third-title"},[t._v(t._s(t.resultText(e)))])])])})),0)],1)},z=[],B=(a("a481"),a("8c8f")),D={mixins:[o["b"]],components:{TitleView:B["a"]},props:{data:Array},watch:{data:function(t){this.total=t.length/3}},computed:{width:function(){return window.innerWidth-Object(f["b"])(20)-Object(f["b"])(60)+"px"},showData:function(){return this.data?[this.data[this.index],this.data[this.index+this.total],this.data[this.index+2*this.total]]:[]}},data:function(){return{index:0,total:0}},methods:{change:function(){this.index+1>=this.total?this.index=0:this.index++},resultText:function(t){if(t&&t.type&&t.result)switch(t.type){case 1:return this.$t("home.sameAuthor").replace("$1",t.result);case 2:return this.$t("home.sameReader").replace("$1",t.result);case 3:return this.$t("home.readPercent").replace("$1",t.percent).replace("$2",t.result)}},resize:function(){var t=this;this.$nextTick((function(){t.$refs.title.forEach((function(e){e.style.width=t.width})),t.$refs.author.forEach((function(e){e.style.width=t.width})),t.$refs.result.forEach((function(e){e.style.width=t.width}))}))}}},E=D,N=(a("c5bf"),Object(v["a"])(E,I,z,!1,null,"3f766254",null)),P=N.exports,Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"recommend"},[a("title-view",{attrs:{label:t.$t("home.recommend"),btn:t.$t("home.seeAll")}}),a("div",{staticClass:"recommend-list"},t._l(t.data,(function(e,i){return a("div",{key:i,staticClass:"recommend-item",on:{click:function(a){return t.showBookDetail(e)}}},[a("div",{staticClass:"img-wrapper"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.cover,expression:"item.cover"}],staticClass:"img"})]),a("div",{staticClass:"content-wrapper"},[a("div",{ref:"title",refInFor:!0,staticClass:"title title-medium"},[t._v(t._s(e.title))]),a("div",{ref:"num",refInFor:!0,staticClass:"num sub-title"},[t._v("\n          "+t._s(t.$t("home.readers").replace("$1",e.readers))+"\n        ")])])])})),0)],1)},H=[],R={mixins:[o["b"]],components:{TitleView:B["a"]},props:{data:Array}},K=R,q=(a("05a7"),Object(v["a"])(K,Y,H,!1,null,"7a242ee5",null)),G=q.exports,J=a("cbe5"),M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"category-book"},[a("title-view",{attrs:{label:t.categoryText(t.data.category),btn:t.$t("home.seeAll")},on:{onClick:function(e){return t.showBookCategory()}}}),a("div",{staticClass:"category-book-list"},t._l(t.data.list,(function(e,i){return a("div",{key:i,staticClass:"category-book-item",on:{click:function(a){return t.showBookDetail(e)}}},[a("div",{staticClass:"img-wrapper"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.cover,expression:"item.cover"}],staticClass:"img"})]),a("div",{staticClass:"content-wrapper"},[a("div",{ref:"title",refInFor:!0,staticClass:"title title-small"},[t._v(t._s(e.title))]),a("div",{ref:"author",refInFor:!0,staticClass:"num sub-title-tiny"},[t._v(t._s(e.author))])])])})),0)],1)},W=[],Q={mixins:[o["b"]],components:{TitleView:B["a"]},props:{data:Object},methods:{showBookCategory:function(){console.log(this.data),this.$router.push({path:"/store/list",query:{category:Object(L["h"])(this.data.category),categoryText:this.categoryText(this.data.category)}})},categoryText:function(t){return Object(L["d"])(t,this)}}},U=Q,X=(a("37e1"),Object(v["a"])(U,M,W,!1,null,"94acf98a",null)),Z=X.exports,tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"category"},[a("title-view",{attrs:{label:t.$t("home.category"),btn:t.$t("home.seeAll")},on:{onClick:t.showBookList}}),a("div",{staticClass:"category-list"},t._l(t.data,(function(e,i){return a("div",{key:i,staticClass:"category-item-wrapper",on:{click:function(a){return t.showBookCategory(e)}}},[a("div",{staticClass:"category-item"},[a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"title title-medium"},[t._v(t._s(t.categoryText(e.category)))]),a("div",{staticClass:"num sub-title-tiny"},[t._v(t._s(e.num+" "+t.$t("home.books")))])]),a("div",{staticClass:"img-wrapper"},[a("div",{staticClass:"img-group"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.img1,expression:"item.img1"}],staticClass:"img"}),a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.img2,expression:"item.img2"}],staticClass:"img2"})])])])])})),0)],1)},et=[],at={components:{TitleView:B["a"]},props:{data:Array},methods:{showBookCategory:function(t){this.$router.push({path:"/store/list",query:{category:Object(L["h"])(t.category),categoryText:this.categoryText(t.category)}})},categoryText:function(t){return Object(L["d"])(t,this)},showBookList:function(){this.$router.push("/store/list")}}},it=at,st=(a("5e8b"),Object(v["a"])(it,tt,et,!1,null,"39a3234e",null)),rt=st.exports,nt=a("b067"),ot={mixins:[o["b"]],components:{SearchBar:$,Scroll:h["a"],FlapCard:j,GuessYouLike:P,Recommend:G,Featured:J["a"],CategoryBook:Z,Category:rt},data:function(){return{scrollTop:94,random:null,banner:"",guessYouLike:null,recommend:null,featured:null,categoryList:null,categories:null}},mounted:function(){var t=this;Object(nt["d"])().then((function(e){if(e&&200==e.status){var a=e.data,i=Math.floor(Math.random()*a.random.length);t.random=a.random[i],t.banner=a.banner,t.guessYouLike=a.guessYouLike,t.recommend=a.recommend,t.featured=a.featured,t.categoryList=a.categoryList,t.categories=a.categories}}))},methods:{onScroll:function(t){this.setOffsetY(t),this.scrollTop=t>0?52:94,this.$refs.scroll.refresh()}}},ct=ot,lt=(a("059b"),Object(v["a"])(ct,i,s,!1,null,"0c5685ad",null));e["default"]=lt.exports},"1f45":function(t,e,a){},"2a20":function(t,e,a){"use strict";var i=a("518e"),s=a.n(i);s.a},"2c3f":function(t,e,a){},"37e1":function(t,e,a){"use strict";var i=a("9890"),s=a.n(i);s.a},"518e":function(t,e,a){},"5e8b":function(t,e,a){"use strict";var i=a("61d7"),s=a.n(i);s.a},"61d7":function(t,e,a){},6208:function(t,e,a){"use strict";var i=a("7ff3"),s=a.n(i);s.a},"6c3f":function(t,e,a){},7192:function(t,e,a){"use strict";var i=a("6c3f"),s=a.n(i);s.a},"7ff3":function(t,e,a){},"826b":function(t,e,a){},9890:function(t,e,a){},c480:function(t,e,a){},c5bf:function(t,e,a){"use strict";var i=a("1f45"),s=a.n(i);s.a},cee6:function(t,e,a){"use strict";var i=a("c480"),s=a.n(i);s.a}}]);
//# sourceMappingURL=chunk-394d0467.bcba698a.js.map