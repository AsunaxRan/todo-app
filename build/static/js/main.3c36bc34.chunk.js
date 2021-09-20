(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){},29:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),r=c(15),i=c.n(r),s=c(4),o=c(3),l=c(7),d=c(17),u="ADD_TODO",j="UPDATE_TODO",b="DELETE_TODO",O="DELETE_ALL_TODOS",f="TOGGLE_TODO",h="TOGGLE_ALL_TODOS",p="TOGGLE_VIEW_MODE_TODO",v=function(e,t){switch(t.type){case u:var c=[Object(o.a)(Object(o.a)({},t.payload),{},{id:Object(d.a)()})].concat(Object(l.a)(e));return c.sort((function(e,t){return new Date(e.dueDate)-new Date(t.dueDate)})),c;case j:var a=e.map((function(e){return e.id===t.payload.id?t.payload:e}));return a.sort((function(e,t){return new Date(e.dueDate)-new Date(t.dueDate)})),a;case b:return e.filter((function(e){return e.id!==t.payload}));case O:return e.filter((function(e){return!e.checked}));case f:return e.map((function(e){return e.id===t.payload?Object(o.a)(Object(o.a)({},e),{},{checked:!e.checked}):e}));case h:return e.some((function(e){return!e.checked}))?e.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{checked:!0})})):e.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{checked:!1})}));case p:return e.map((function(e){return e.id===t.payload?Object(o.a)(Object(o.a)({},e),{},{inViewMode:!e.inViewMode}):e}));default:return e}},m=c(2),x=Object(a.createContext)(),w=function(e){var t=Object(a.useReducer)(v,{},(function(){var e=localStorage.getItem("todos");return e?JSON.parse(e):[]})),c=Object(s.a)(t,2),n=c[0],r=c[1];return Object(a.useEffect)((function(){Array.isArray(n)&&localStorage.setItem("todos",JSON.stringify(n))}),[n]),Object(m.jsx)(x.Provider,{value:{state:n,dispatch:r},children:e.children})},g=c(14),N=c(6),_=c(8),y=c.n(_),D=(c(24),["className","as"]),k=Object(a.forwardRef)((function(e,t){var c=e.className,a=e.as,n=Object(N.a)(e,D),r=y()(c,"input");return"textarea"===a?Object(m.jsx)("textarea",Object(o.a)(Object(o.a)({},n),{},{className:r,ref:t})):Object(m.jsx)("input",Object(o.a)(Object(o.a)({},n),{},{className:r,ref:t}))}));k.displayName="Input",k.defaultProps={as:"input"};var C=k,S=c(9),T=(c(25),["variant","disabled","className","as","onClick"]),E=Object(a.forwardRef)((function(e,t){var c=e.variant,a=e.disabled,n=e.className,r=e.as,i=e.onClick,s=Object(N.a)(e,T),l=r,d=y()(n,"btn",Object(S.a)({},"btn--".concat(c),!0)),u=function(e){if(!a)return i?i(e):void 0;e.preventDefault()};return Object(m.jsx)(l,Object(o.a)(Object(o.a)({},s),{},{ref:t,className:d,disabled:a,onClick:function(){return u()}}))}));E.defaultProps={variant:"primary",disabled:!1,as:"button"};var L=E,z=(c(26),["options","className"]),P=Object(a.forwardRef)((function(e,t){var c=e.options,a=e.className,n=Object(N.a)(e,z),r=y()("input",a);return Object(m.jsx)("select",Object(o.a)(Object(o.a)({},n),{},{className:r,ref:t,children:c.map((function(e){var t=e.value,c=e.label;return Object(m.jsx)("option",{value:t,children:c},t)}))}))}));P.displayName="Select";var V=P,A=[{value:"Low",label:"Low"},{value:"Normal",label:"Normal"},{value:"High",label:"High"}],B=(c(27),["prefix","suffix"]),H=Object(a.forwardRef)((function(e,t){var c=e.prefix,a=e.suffix,n=Object(N.a)(e,B);return Object(m.jsx)("div",{className:"input-group",children:Object(m.jsxs)("label",{className:"input-group__wrapper",children:[c&&Object(m.jsx)("span",{className:"input-group__addon input-group__addon--prefix",children:c}),Object(m.jsx)(C,Object(o.a)(Object(o.a)({},n),{},{className:"input-group__input",ref:t})),a&&Object(m.jsx)("span",{className:"input-group__addon input-group__addon--suffix",children:a})]})})}));H.displayName="InputGroup";var M=H,G=["size","color"],R=["size","color"],I=["size","color"],F=function(e){var t=e.size,c=e.color,a=Object(N.a)(e,G);return Object(m.jsx)("svg",Object(o.a)(Object(o.a)({stroke:c,fill:c,viewBox:"0 0 512 512",height:t,width:t,xmlns:"http://www.w3.org/2000/svg"},a),{},{children:Object(m.jsx)("path",{d:"M17.47 250.9C88.82 328.1 158 397.6 224.5 485.5c72.3-143.8 146.3-288.1 268.4-444.37L460 26.06C356.9 135.4 276.8 238.9 207.2 361.9c-48.4-43.6-126.62-105.3-174.38-137z"})}))};F.defaultProps={size:"1em",color:"currentColor"};var J=function(e){var t=e.size,c=e.color,a=Object(N.a)(e,R);return Object(m.jsx)("svg",Object(o.a)(Object(o.a)({viewBox:"64 64 896 896",focusable:"false",width:t,height:t,fill:c,"aria-hidden":"true"},a),{},{children:Object(m.jsx)("path",{d:"M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"})}))};J.defaultProps={size:"1em",color:"currentColor"};var q=function(e){var t=e.size,c=e.color,a=Object(N.a)(e,I);return Object(m.jsxs)("svg",{enableBackground:"new 0 0 24 24",height:t,width:t,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[Object(m.jsx)("path",{d:"m23.908 12.331-3.963-8.587c-.489-1.059-1.558-1.744-2.725-1.744h-10.44c-1.167 0-2.236.685-2.724 1.743l-3.964 8.588c-.061.131-.092.274-.092.419v6.25c0 1.654 1.346 3 3 3h18c1.654 0 3-1.346 3-3v-6.25c0-.145-.031-.288-.092-.419z",fill:c}),Object(m.jsx)("path",{d:"m5.184 3.438c.181-.418.577-.688 1.01-.688h11.613c.432 0 .829.27 1.01.689l3.808 8.798h-2.29c-.866 0-1.615.594-1.864 1.479l-1.193 4.239c-.036.126-.142.211-.266.211h-10.024c-.123 0-.23-.085-.266-.212l-1.193-4.238c-.249-.885-.998-1.479-1.864-1.479h-2.29z",fill:"#f5f5f5"}),Object(m.jsx)("path",{d:"m21.25 22h-18.5c-1.517 0-2.75-1.233-2.75-2.75v-6.5c0-.106.022-.211.066-.308l4.5-10c.121-.269.389-.442.684-.442h13.5c.295 0 .563.173.684.442l4.5 10c.044.097.066.202.066.308v6.5c0 1.517-1.233 2.75-2.75 2.75zm-19.75-9.089v6.339c0 .689.561 1.25 1.25 1.25h18.5c.689 0 1.25-.561 1.25-1.25v-6.339l-4.235-9.411h-12.53z"}),Object(m.jsx)("path",Object(o.a)({d:"m16.506 18.5h-9.012c-.778 0-1.452-.501-1.676-1.247l-1.073-3.574c-.031-.106-.129-.179-.239-.179h-3.756c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h3.756c.778 0 1.452.501 1.676 1.247l1.073 3.574c.032.106.13.179.239.179h9.012c.109 0 .208-.073.239-.179l1.073-3.574c.224-.746.897-1.247 1.676-1.247h3.756c.414 0 .75.336.75.75s-.336.75-.75.75h-3.756c-.109 0-.208.073-.239.179l-1.073 3.574c-.224.746-.898 1.247-1.676 1.247z"},a))]})};q.defaultProps={size:"5em",color:"#2196f3"};var W=c(16),U=(c(28),function(e){return new Date(e).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"}).split(" ").join(" ")}),K=(c(29),["value","onChange"]),Q=Object(a.forwardRef)((function(e,t){var c=e.value,n=e.onChange,r=Object(N.a)(e,K),i=Object(a.useState)(!1),l=Object(s.a)(i,2),d=l[0],u=l[1],j=Object(a.useState)(c),b=Object(s.a)(j,2),O=b[0],f=b[1];return Object(m.jsxs)("div",{className:"date-picker",children:[Object(m.jsx)(M,{suffix:Object(m.jsx)(J,{}),type:"text",value:U(O),onChange:function(e){return e.preventDefault()},readOnly:!0,ref:t,onClick:function(){return u(!d)}}),d&&Object(m.jsx)("div",{className:"date-picker__calendar-wrapper",children:Object(m.jsx)(W.a,Object(o.a)(Object(o.a)({},r),{},{value:O,onChange:function(e){if(f(e),u(!1),n)return n(e)}}))})]})}));Q.displayName="DatePicker",Q.defaultProps={value:new Date};var X=Q,Y=(c(32),function(e){var t,c=e.context,n=e.defaultValues,r=n.id,i=n.title,l=n.description,d=n.dueDate,b=n.priority,O=Object(a.useContext)(x).dispatch,f=Object(a.useState)({}),h=Object(s.a)(f,2),p=h[0],v=h[1],w="update"===c,N=Object(g.b)(),_=N.register,D=N.formState,k=D.errors,S=D.isSubmitSuccessful,T=N.handleSubmit,E=N.control,z=N.reset;return Object(a.useEffect)((function(){S&&z(w?p:{title:"",description:"",priority:"Normal",dueDate:new Date})}),[z,p,S]),Object(m.jsxs)("form",{className:"todo-form",onSubmit:T((function(e){var t;O(w?(t=Object(o.a)(Object(o.a)({},e),{},{id:r}),{type:j,payload:t}):function(e){return{type:u,payload:e}}(e)),v(e)})),children:[Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)(C,Object(o.a)(Object(o.a)({placeholder:"Add new task",defaultValue:i},_("title",{required:!0})),{},{className:k.title&&"input--invalid"})),"required"===(null===(t=k.title)||void 0===t?void 0:t.type)&&Object(m.jsx)("div",{className:"text-danger fs-sm",children:"This field is required!"})]}),Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("div",{className:"fw-bold",children:"Description"}),Object(m.jsx)(C,Object(o.a)({defaultValue:l,as:"textarea",rows:4},_("description")))]}),Object(m.jsxs)("div",{className:"todo-form__group",children:[Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("div",{className:"fw-bold",children:"Due Date"}),Object(m.jsx)(g.a,{name:"dueDate",control:E,defaultValue:new Date(d),render:function(e){var t=e.field;return Object(m.jsx)(X,Object(o.a)(Object(o.a)({},t),{},{minDate:new Date}))}})]}),Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("div",{className:"fw-bold",children:"Priority"}),Object(m.jsx)(V,Object(o.a)({options:A,defaultValue:b},_("priority")))]})]}),Object(m.jsx)(L,{type:"submit",variant:"success",className:y()("w-100",{"mt-4":w,"mt-5":!w}),children:w?"Update":"Add"})]})});Y.defaultProps={context:"add",defaultValues:{title:"",description:"",priority:"Normal",dueDate:new Date}};var Z=Y,$=(c(33),["message"]),ee=function(e){var t=e.message,c=Object(N.a)(e,$);return Object(m.jsxs)("div",Object(o.a)(Object(o.a)({className:"empty"},c),{},{children:[Object(m.jsx)(q,{}),t&&Object(m.jsx)("div",{className:"mt-1",children:t})]}))};ee.defaultProps={message:"Empty data"};var te=ee,ce=(c(34),["label","checked","className","disabled","onChange"]),ae=function(e){var t=e.label,c=e.checked,a=e.className,n=e.disabled,r=e.onChange,i=Object(N.a)(e,ce);return Object(m.jsxs)("label",{className:y()("checkbox",a,{"checkbox--checked":c}),children:[Object(m.jsxs)("span",{className:"checkbox__wrapper",children:[Object(m.jsx)("input",Object(o.a)(Object(o.a)({type:"checkbox",disabled:n},i),{},{className:"checkbox__input",defaultChecked:c,onChange:function(e){if(!n)return r?r(e):void 0;e.preventDefault()}})),Object(m.jsx)("span",{className:"checkbox__inner"})]}),Object(m.jsx)("span",{className:"checkbox__label",children:t&&t})]})};ae.defaultProps={disabled:!1};var ne=ae,re=(c(35),function(e){var t=e.id,c=e.title,n=e.description,r=e.priority,i=e.dueDate,s=e.checked,o=e.inViewMode,l=Object(a.useContext)(x).dispatch;return Object(m.jsxs)("div",{className:"todo",children:[Object(m.jsxs)("div",{className:"todo__main",children:[Object(m.jsx)("div",{className:"todo__checkbox",children:Object(m.jsx)(ne,{checked:s,onChange:function(){return l(function(e){return{type:f,payload:e}}(t))}})}),Object(m.jsx)("div",{className:"todo__content",children:c}),Object(m.jsxs)("div",{className:"todo__actions",children:[Object(m.jsx)(L,{variant:"info",onClick:function(){return l(function(e){return{type:p,payload:e}}(t))},children:"Detail"}),Object(m.jsx)(L,{variant:"danger",onClick:function(){return l(function(e){return{type:b,payload:e}}(t))},children:"Remove"})]})]}),o&&Object(m.jsx)("div",{className:"todo__detail",children:Object(m.jsx)(Z,{context:"update",defaultValues:{id:t,title:c,description:n,priority:r,dueDate:i}})})]})});re.defaultProps={title:"",description:"",priority:"Normal",dueDate:new Date,checked:!1,inViewMode:!1};var ie=re,se=function(e){var t=e.todos;return t.length?t.map((function(e){return Object(m.jsx)(ie,Object(o.a)({},e),e.id)})):Object(m.jsx)(te,{})};se.defaultProps={todos:[]};var oe=se;c(36);var le=function(e,t){var c=Object(a.useState)(e),n=Object(s.a)(c,2),r=n[0],i=n[1];return Object(a.useEffect)((function(){var c=setTimeout((function(){i(e)}),t);return function(){clearTimeout(c)}}),[e,t]),r},de=["onSearch","value"],ue=function(e){var t=e.onSearch,c=e.value,n=Object(N.a)(e,de),r=Object(a.useState)(c),i=Object(s.a)(r,2),l=i[0],d=i[1],u=le(l,400);return Object(a.useEffect)((function(){t&&t(u)}),[u]),Object(m.jsx)(C,Object(o.a)(Object(o.a)({},n),{},{value:l,onChange:function(e){return d(e.target.value)}}))};ue.defaultProps={value:""};var je=ue;function be(e){var t,c,a,n,r,i,s,o,l;return e=null===(l=e=null===(o=e=null===(s=e=null===(i=e=null===(r=e=null===(n=e=null===(a=e=null===(c=e=null===(t=e)||void 0===t?void 0:t.replace(/\xe0|\xe1|\u1ea1|\u1ea3|\xe3|\xe2|\u1ea7|\u1ea5|\u1ead|\u1ea9|\u1eab|\u0103|\u1eb1|\u1eaf|\u1eb7|\u1eb3|\u1eb5/g,"a"))||void 0===c?void 0:c.replace(/\xe8|\xe9|\u1eb9|\u1ebb|\u1ebd|\xea|\u1ec1|\u1ebf|\u1ec7|\u1ec3|\u1ec5/g,"e"))||void 0===a?void 0:a.replace(/\xec|\xed|\u1ecb|\u1ec9|\u0129/g,"i"))||void 0===n?void 0:n.replace(/\xf2|\xf3|\u1ecd|\u1ecf|\xf5|\xf4|\u1ed3|\u1ed1|\u1ed9|\u1ed5|\u1ed7|\u01a1|\u1edd|\u1edb|\u1ee3|\u1edf|\u1ee1/g,"o"))||void 0===r?void 0:r.replace(/\xf9|\xfa|\u1ee5|\u1ee7|\u0169|\u01b0|\u1eeb|\u1ee9|\u1ef1|\u1eed|\u1eef/g,"u"))||void 0===i?void 0:i.replace(/\u1ef3|\xfd|\u1ef5|\u1ef7|\u1ef9/g,"y"))||void 0===s?void 0:s.replace(/\u0111/g,"d"))||void 0===o?void 0:o.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g,""))||void 0===l?void 0:l.replace(/\u02C6|\u0306|\u031B/g,"")}var Oe=function(){var e=Object(a.useState)({width:window?window.innerWidth:void 0,height:window?window.innerHeight:void 0}),t=Object(s.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){function e(){n({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),c},fe=function(e){var t=Object(a.useContext)(x),c=t.state,n=t.dispatch,r=Object(a.useState)(""),i=Object(s.a)(r,2),o=i[0],l=i[1],d=Object(a.useState)([]),u=Object(s.a)(d,2),j=u[0],b=u[1],f=Object(a.useState)(!1),p=Object(s.a)(f,2),v=p[0],w=p[1],g=Oe().width;return Object(a.useEffect)((function(){var e=be(o.toLowerCase().trim());b(c.filter((function(t){var c=t.title,a=t.description,n=be(c.toLowerCase().trim()),r=be(a.toLowerCase().trim());return n.includes(e)||r.includes(e)})))}),[c,o]),Object(m.jsx)("div",{className:"screen",children:Object(m.jsx)("div",{className:"screen__container",children:Object(m.jsxs)("div",{className:"screen__row",children:[Object(m.jsxs)("div",{className:y()("panel panel--left",{show:v}),children:[Object(m.jsxs)("div",{className:"mb-5 panel__title",children:[Object(m.jsx)("span",{children:"New Task"}),g<992&&Object(m.jsx)(L,{variant:"info",onClick:function(){return w(!1)},children:"Todo List"})]}),Object(m.jsx)(Z,{})]}),Object(m.jsxs)("div",{className:"panel panel--right",id:"panel-right",children:[Object(m.jsxs)("div",{className:"mb-5 panel__title",children:[g<992&&Object(m.jsx)(L,{variant:"primary",onClick:function(){return w(!0)},children:"Add Todo"}),Object(m.jsx)("span",{children:"Todo List"})]}),Object(m.jsx)(je,{value:o,onSearch:function(e){l(e)},className:"mb-3",placeholder:"Search..."}),Object(m.jsx)(oe,{todos:j}),Object(m.jsxs)("div",{className:y()("bulk",{"bulk--show":c.some((function(e){return e.checked}))}),children:[Object(m.jsx)("div",{children:"Bulk Action:"}),Object(m.jsxs)("div",{children:[Object(m.jsx)(L,{variant:"primary",onClick:function(){return n({type:h})},className:"me-2",children:"Toggle All"}),Object(m.jsx)(L,{variant:"danger",onClick:function(){return n({type:O})},disabled:!c.some((function(e){return e.checked})),children:"Remove"})]})]})]})]})})})};var he=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(w,{children:Object(m.jsx)(fe,{})})})},pe=(c(37),c(38),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,40)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),r(e),i(e)}))});i.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(he,{})}),document.getElementById("root")),pe()}},[[39,1,2]]]);
//# sourceMappingURL=main.3c36bc34.chunk.js.map