(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b5bd2370"],{"7b49":function(s,t,a){"use strict";var e=a("bbc8"),i=a.n(e);i.a},bbc8:function(s,t,a){},c6f7:function(s,t,a){"use strict";a.r(t);var e=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"login"},[a("div",{staticClass:"container"},[s._m(0),a("div",{staticClass:"login-body"},[a("form",{staticClass:"login-box",attrs:{action:""}},[a("div",{staticClass:"box-container"},[s._m(1),a("input",{directives:[{name:"model",rawName:"v-model",value:s.username,expression:"username"}],attrs:{type:"text",placeholder:"邮箱/手机号码/小米ID"},domProps:{value:s.username},on:{input:function(t){t.target.composing||(s.username=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:s.password,expression:"password"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:s.password},on:{input:function(t){t.target.composing||(s.password=t.target.value)}}}),a("input",{attrs:{type:"button",value:"登录"},on:{click:s.login}}),a("div",{staticClass:"body-info"},[a("div",{staticClass:"left-info",on:{click:s.register}},[a("a",{attrs:{href:""}},[s._v("手机短信登录/注册")])]),s._m(2)])])])]),s._m(3)])])},i=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"login-header"},[a("div",{staticClass:"login-logo"})])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"login-type"},[a("span",{staticClass:"byAccount"},[s._v("账号登录")]),a("span",{staticClass:"byQRcode"},[s._v("扫码登录")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"right-info"},[a("a",{attrs:{href:""}},[s._v("立即注册")]),a("span",[s._v("|")]),a("a",{attrs:{href:""}},[s._v("忘记密码")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"login-footer"},[a("div",{staticClass:"login-link-box"},[a("a",{attrs:{href:"javascript:;"}},[s._v("简体")]),a("span",[s._v("|")]),a("a",{attrs:{href:"javascript:;"}},[s._v("繁体")]),a("span",[s._v("|")]),a("a",{attrs:{href:"javascript:;"}},[s._v("English")]),a("span",[s._v("|")]),a("a",{attrs:{href:"javascript:;"}},[s._v("常见问题")]),a("span",[s._v("|")]),a("a",{attrs:{href:"javascript:;"}},[s._v("隐私政策")])]),a("div",{staticClass:"login-copyright"},[a("span",[s._v("小米公司版权所有-京ICP备10046444-京公网安备11010802020134号-京ICP证110507号")])])])}],n={name:"login",data:function(){return{username:"",password:"",userId:"",res:{}}},methods:{login:function(){var s=this,t=this.username,a=this.password;this.axios.post("/user/login",{username:t,password:a}).then((function(t){s.res=t,s.$cookie.set("userId",t.id,{expires:"Session"}),s.$store.dispatch("saveUserName",t.username),s.$router.push({name:"index",params:{from:"login"}})}))},register:function(){var s=this;this.axios.post("/user/register",{username:"dusqi",password:"123456",email:"dusiqi@12.cn"}).then((function(){s.$message.success("注册成功")}))}}},r=n,o=(a("7b49"),a("2877")),c=Object(o["a"])(r,e,i,!1,null,null,null);t["default"]=c.exports}}]);