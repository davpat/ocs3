(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dea35b84"],{4385:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"fill-height"},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("Video",{attrs:{"video-id":"YiN1AdOjcfE"}})],1)],1)},r=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("youtube",{ref:"youtube",attrs:{"video-id":t.videoId,resize:"","fit-parent":""},on:{playing:t.playing}})},o=[],u={name:"Video",props:{videoId:{required:!0,type:String}},methods:{playVideo:function(){this.player.playVideo()},playing:function(){}},computed:{player:function(){return this.$refs.youtube.player},router:function(){return this.$router}}},s=u,c=n("2877"),l=Object(c["a"])(s,a,o,!1,null,"0fc089a0",null),f=l.exports,d={name:"MainPage",components:{Video:f}},v=d,p=n("6544"),g=n.n(p),h=n("a523"),y=(n("99af"),n("4160"),n("caad"),n("13d5"),n("4ec9"),n("b64b"),n("d3b7"),n("ac1f"),n("2532"),n("3ca3"),n("5319"),n("159b"),n("ddb0"),n("ade3")),b=n("5530"),x=(n("4b85"),n("2b0e")),w=n("d9f7"),j=n("80d2"),k=["sm","md","lg","xl"],m=["start","end","center"];function O(t,e){return k.reduce((function(n,i){return n[t+Object(j["n"])(i)]=e(),n}),{})}var C=function(t){return[].concat(m,["baseline","stretch"]).includes(t)},z=O("align",(function(){return{type:String,default:null,validator:C}})),S=function(t){return[].concat(m,["space-between","space-around"]).includes(t)},E=O("justify",(function(){return{type:String,default:null,validator:S}})),V=function(t){return[].concat(m,["space-between","space-around","stretch"]).includes(t)},I=O("alignContent",(function(){return{type:String,default:null,validator:V}})),M={align:Object.keys(z),justify:Object.keys(E),alignContent:Object.keys(I)},$={align:"align",justify:"justify",alignContent:"align-content"};function _(t,e,n){var i=$[t];if(null!=n){if(e){var r=e.replace(t,"");i+="-".concat(r)}return i+="-".concat(n),i.toLowerCase()}}var F=new Map,R=x["a"].extend({name:"v-row",functional:!0,props:Object(b["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:C}},z,{justify:{type:String,default:null,validator:S}},E,{alignContent:{type:String,default:null,validator:V}},I),render:function(t,e){var n=e.props,i=e.data,r=e.children,a="";for(var o in n)a+=String(n[o]);var u=F.get(a);return u||function(){var t,e;for(e in u=[],M)M[e].forEach((function(t){var i=n[t],r=_(e,t,i);r&&u.push(r)}));u.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(y["a"])(t,"align-".concat(n.align),n.align),Object(y["a"])(t,"justify-".concat(n.justify),n.justify),Object(y["a"])(t,"align-content-".concat(n.alignContent),n.alignContent),t)),F.set(a,u)}(),t(n.tag,Object(w["a"])(i,{staticClass:"row",class:u}),r)}}),B=Object(c["a"])(v,i,r,!1,null,null,null);e["default"]=B.exports;g()(B,{VContainer:h["a"],VRow:R})},"4ec9":function(t,e,n){"use strict";var i=n("6d61"),r=n("6566");t.exports=i("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),r)},6566:function(t,e,n){"use strict";var i=n("9bf2").f,r=n("7c73"),a=n("e2cc"),o=n("0366"),u=n("19aa"),s=n("2266"),c=n("7dd0"),l=n("2626"),f=n("83ab"),d=n("f183").fastKey,v=n("69f3"),p=v.set,g=v.getterFor;t.exports={getConstructor:function(t,e,n,c){var l=t((function(t,i){u(t,l,e),p(t,{type:e,index:r(null),first:void 0,last:void 0,size:0}),f||(t.size=0),void 0!=i&&s(i,t[c],t,n)})),v=g(e),h=function(t,e,n){var i,r,a=v(t),o=y(t,e);return o?o.value=n:(a.last=o={index:r=d(e,!0),key:e,value:n,previous:i=a.last,next:void 0,removed:!1},a.first||(a.first=o),i&&(i.next=o),f?a.size++:t.size++,"F"!==r&&(a.index[r]=o)),t},y=function(t,e){var n,i=v(t),r=d(e);if("F"!==r)return i.index[r];for(n=i.first;n;n=n.next)if(n.key==e)return n};return a(l.prototype,{clear:function(){var t=this,e=v(t),n=e.index,i=e.first;while(i)i.removed=!0,i.previous&&(i.previous=i.previous.next=void 0),delete n[i.index],i=i.next;e.first=e.last=void 0,f?e.size=0:t.size=0},delete:function(t){var e=this,n=v(e),i=y(e,t);if(i){var r=i.next,a=i.previous;delete n.index[i.index],i.removed=!0,a&&(a.next=r),r&&(r.previous=a),n.first==i&&(n.first=r),n.last==i&&(n.last=a),f?n.size--:e.size--}return!!i},forEach:function(t){var e,n=v(this),i=o(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:n.first){i(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!y(this,t)}}),a(l.prototype,n?{get:function(t){var e=y(this,t);return e&&e.value},set:function(t,e){return h(this,0===t?0:t,e)}}:{add:function(t){return h(this,t=0===t?0:t,t)}}),f&&i(l.prototype,"size",{get:function(){return v(this).size}}),l},setStrong:function(t,e,n){var i=e+" Iterator",r=g(e),a=g(i);c(t,e,(function(t,e){p(this,{type:i,target:t,state:r(t),kind:e,last:void 0})}),(function(){var t=a(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),l(e)}}},"6d61":function(t,e,n){"use strict";var i=n("23e7"),r=n("da84"),a=n("94ca"),o=n("6eeb"),u=n("f183"),s=n("2266"),c=n("19aa"),l=n("861d"),f=n("d039"),d=n("1c7e"),v=n("d44e"),p=n("7156");t.exports=function(t,e,n){var g=-1!==t.indexOf("Map"),h=-1!==t.indexOf("Weak"),y=g?"set":"add",b=r[t],x=b&&b.prototype,w=b,j={},k=function(t){var e=x[t];o(x,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(h&&!l(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return h&&!l(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(h&&!l(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})};if(a(t,"function"!=typeof b||!(h||x.forEach&&!f((function(){(new b).entries().next()})))))w=n.getConstructor(e,t,g,y),u.REQUIRED=!0;else if(a(t,!0)){var m=new w,O=m[y](h?{}:-0,1)!=m,C=f((function(){m.has(1)})),z=d((function(t){new b(t)})),S=!h&&f((function(){var t=new b,e=5;while(e--)t[y](e,e);return!t.has(-0)}));z||(w=e((function(e,n){c(e,w,t);var i=p(new b,e,w);return void 0!=n&&s(n,i[y],i,g),i})),w.prototype=x,x.constructor=w),(C||S)&&(k("delete"),k("has"),g&&k("get")),(S||O)&&k(y),h&&x.clear&&delete x.clear}return j[t]=w,i({global:!0,forced:w!=b},j),v(w,t),h||n.setStrong(w,t,g),w}}}]);
//# sourceMappingURL=chunk-dea35b84.2a48fac0.js.map