(this["webpackJsonpcurrency-exchange"]=this["webpackJsonpcurrency-exchange"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(5),u=n.n(r),o=n(6),l=n(1),s=(n(12),function(e){var t=e.currencyoptions,n=e.SelectedCurrency,a=e.onChangeCurrency,r=e.amount,u=e.onChangeAmount;return c.a.createElement("div",null,c.a.createElement("input",{type:"number",className:"input",value:r,onChange:u,min:"0"}),c.a.createElement("select",{value:n,onChange:a},t.map((function(e){return c.a.createElement("option",{key:e,value:e},e)}))))}),i="https://api.exchangeratesapi.io/latest";var m=function(){var e,t,n=Object(a.useState)([]),r=Object(l.a)(n,2),u=r[0],m=r[1],b=Object(a.useState)(),f=Object(l.a)(b,2),h=f[0],j=f[1],y=Object(a.useState)(),p=Object(l.a)(y,2),O=p[0],g=p[1],v=Object(a.useState)(),C=Object(l.a)(v,2),E=C[0],d=C[1],S=Object(a.useState)(1),k=Object(l.a)(S,2),x=k[0],A=k[1],w=Object(a.useState)(!0),J=Object(l.a)(w,2),N=J[0],q=J[1];return N?(t=x,e=x*E):(e=x,t=x/E),Object(a.useEffect)((function(){fetch(i).then((function(e){return e.json()})).then((function(e){var t=Object.keys(e.rates)[0];m([e.base].concat(Object(o.a)(Object.keys(e.rates)))),j(e.base),g(t),d(e.rates[t])}))}),[]),Object(a.useEffect)((function(){null!=h&&null!=O&&fetch("".concat(i,"?base=").concat(h,"&symbols=").concat(O)).then((function(e){return e.json()})).then((function(e){return d(e.rates[O])}))}),[h,O]),c.a.createElement("div",null,c.a.createElement("h1",null,"Currency Convertor"),c.a.createElement(s,{currencyoptions:u,SelectedCurrency:h,onChangeCurrency:function(e){return j(e.target.value)},amount:t,onChangeAmount:function(e){A(e.target.value),q(!0)}}),c.a.createElement("div",{className:"equals"},"="),c.a.createElement(s,{currencyoptions:u,SelectedCurrency:O,onChangeCurrency:function(e){return g(e.target.value)},amount:e,onChangeAmount:function(e){A(e.target.value),q(!1)}}))};u.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m,null)),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.547cf8a1.chunk.js.map