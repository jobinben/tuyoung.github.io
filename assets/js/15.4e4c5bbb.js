(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{380:function(t,e,i){},381:function(t,e,i){"use strict";i(380)},382:function(t,e,i){"use strict";var n={name:"TIcon",props:["name"]},o=(i(381),i(53)),r=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"t-icon"},[e("use",{attrs:{"xlink:href":"#i-"+this.name}})])}),[],!1,null,"a4d79d52",null);e.a=r.exports},387:function(t,e,i){},388:function(t,e,i){"use strict";i(387)},390:function(t,e,i){"use strict";var n={name:"TButton",components:{"t-icon":i(382).a},props:{icon:{type:String,default:""},type:{type:String,default:"default",validator:function(t){return-1!==["default","primary","success","info","warning","error"].indexOf(t)}},loading:{},iconPosition:{type:String,default:"left",validator:function(t){return"left"===t||"right"===t}}}},o=(i(388),i(53)),r=Object(o.a)(n,(function(){var t,e=this,i=e.$createElement,n=e._self._c||i;return n("button",{staticClass:"t-button",class:[(t={},t["icon-"+e.iconPosition]=!0,t),e.type],on:{click:function(t){return e.$emit("click")}}},[e.icon&&!e.loading?n("t-icon",{staticClass:"icon",attrs:{name:e.icon}}):e._e(),e._v(" "),e.loading?n("t-icon",{staticClass:"loading icon",attrs:{name:"loading"}}):e._e(),e._v(" "),n("div",{staticClass:"content"},[e._t("default")],2)],1)}),[],!1,null,"c289763a",null);e.a=r.exports},415:function(t,e,i){},419:function(t,e,i){"use strict";i(415)},422:function(t,e,i){"use strict";var n={name:"TPopover",props:{position:{type:String,default:"top",validator:function(t){return-1!==["top","bottom","left","right"].indexOf(t)}},trigger:{type:String,default:"click",validator:function(t){return-1!==["click","hover"].indexOf(t)}}},data:function(){return{visible:!1}},computed:{openEvent:function(){return"click"===this.trigger?"click":"mouseenter"},closeEvent:function(){return"click"===this.trigger?"click":"mouseleave"}},mounted:function(){this.addPopoverListeners()},beforeDestroy:function(){this.removePopoverListeners()},methods:{addPopoverListeners:function(){"click"===this.trigger?this.$refs.popover.addEventListener("click",this.onClick):(this.$refs.popover.addEventListener("mouseenter",this.open),this.$refs.popover.addEventListener("mouseleave",this.close))},removePopoverListeners:function(){"click"===this.trigger?this.$refs.popover.removeEventListener("click",this.onClick):(this.$refs.popover.removeEventListener("mouseenter",this.open),this.$refs.popover.removeEventListener("mouseleave",this.close))},positionContent:function(){var t=this.$refs,e=t.contentWrapper,i=t.triggerWrapper;document.body.appendChild(e);var n=i.getBoundingClientRect(),o=n.width,r=n.height,s=n.left,c=n.top,l=e.getBoundingClientRect().height,a={top:{left:s+window.scrollX,top:c+window.scrollY},bottom:{left:s+window.scrollX,top:c+window.scrollY+r},left:{left:s+window.scrollX,top:c+window.scrollY+(r-l)/2},right:{left:s+window.scrollX+o,top:c+window.scrollY+(r-l)/2}};e.style.left=a[this.position].left+"px",e.style.top=a[this.position].top+"px"},getRefs:function(t,e){return this.$refs[t]&&(this.$refs[t]===e.target||this.$refs[t].contains(e.target))},onClickDocument:function(t){!this.getRefs("popover",t)&&!this.getRefs("contentWrapper",t)&&this.close()},open:function(){var t=this;this.visible=!0,this.$nextTick((function(){t.positionContent(),document.addEventListener("click",t.onClickDocument)}))},close:function(){this.visible=!1,document.removeEventListener("click",this.onClickDocument)},onClick:function(t){if(this.$refs.triggerWrapper.contains(t.target)){if(this.visible)return void this.close();this.open()}}}},o=(i(419),i(53)),r=Object(o.a)(n,(function(){var t,e=this.$createElement,i=this._self._c||e;return i("div",{ref:"popover",staticClass:"popover"},[this.visible?i("div",{ref:"contentWrapper",staticClass:"content-wrapper",class:(t={},t["position-"+this.position]=!0,t)},[this._t("content")],2):this._e(),this._v(" "),i("span",{ref:"triggerWrapper",staticStyle:{display:"inline-block"}},[this._t("default")],2)])}),[],!1,null,"0c496d83",null);e.a=r.exports},522:function(t,e,i){"use strict";i.r(e);var n=i(422),o=i(390),r={components:{TPopover:n.a,TButton:o.a}},s=i(53),c=Object(s.a)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{padding:"1em"}},[i("t-popover",{attrs:{position:"top",trigger:"hover"}},[i("template",{slot:"content"},[i("div",[t._v("I am here!")])]),t._v(" "),i("t-button",[t._v("上面")])],2),t._v(" "),i("t-popover",{attrs:{position:"bottom",trigger:"hover"}},[i("template",{slot:"content"},[i("div",[t._v("I am here!")])]),t._v(" "),i("t-button",[t._v("下面")])],2),t._v(" "),i("t-popover",{attrs:{position:"left",trigger:"hover"}},[i("template",{slot:"content"},[i("div",[t._v("I am here!")])]),t._v(" "),i("t-button",[t._v("左边")])],2),t._v(" "),i("t-popover",{attrs:{position:"right",trigger:"hover"}},[i("template",{slot:"content"},[i("div",[t._v("I am here!")])]),t._v(" "),i("t-button",[t._v("右边")])],2)],1)}),[],!1,null,null,null);e.default=c.exports}}]);