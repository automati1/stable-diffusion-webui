import{S as j,i as q,s as y,e as g,a as B,t as F,b as d,d as S,f as D,g as m,l as I,h as K,x as T,n as E,F as L,P as O,c as h,m as k,j as v,k as C,o as w,R as P,T as R,I as U,O as V,U as z,V as A,L as G,K as H}from"./index.4395ab38.js";function J(s){let e,t,a,i,c,r,f;return{c(){e=g("label"),t=g("input"),a=B(),i=g("span"),c=F(s[2]),t.disabled=s[1],t.checked=s[0],d(t,"type","checkbox"),d(t,"name","test"),d(t,"class","gr-check-radio gr-checkbox"),d(i,"class","ml-2"),d(e,"class","flex items-center text-gray-700 text-sm space-x-2 rounded-lg cursor-pointer dark:bg-transparent "),S(e,"!cursor-not-allowed",s[1])},m(u,l){D(u,e,l),m(e,t),m(e,a),m(e,i),m(i,c),r||(f=I(t,"change",s[4]),r=!0)},p(u,[l]){l&2&&(t.disabled=u[1]),l&1&&(t.checked=u[0]),l&4&&K(c,u[2]),l&2&&S(e,"!cursor-not-allowed",u[1])},i:T,o:T,d(u){u&&E(e),r=!1,f()}}}function M(s,e,t){let{value:a}=e,{disabled:i=!1}=e,{label:c}=e;const r=L();function f(l){t(0,a=l.currentTarget.checked),r("change",a)}const u=l=>f(l);return s.$$set=l=>{"value"in l&&t(0,a=l.value),"disabled"in l&&t(1,i=l.disabled),"label"in l&&t(2,c=l.label)},[a,i,c,f,u]}class N extends j{constructor(e){super(),q(this,e,M,J,y,{value:0,disabled:1,label:2})}}function Q(s){let e,t,a,i,c;const r=[s[6]];let f={};for(let n=0;n<r.length;n+=1)f=P(f,r[n]);e=new R({props:f});function u(n){s[7](n)}let l={label:s[3],disabled:s[4]==="static"};return s[0]!==void 0&&(l.value=s[0]),a=new N({props:l}),U.push(()=>V(a,"value",u)),a.$on("change",s[8]),{c(){h(e.$$.fragment),t=B(),h(a.$$.fragment)},m(n,b){k(e,n,b),D(n,t,b),k(a,n,b),c=!0},p(n,b){const o=b&64?z(r,[A(n[6])]):{};e.$set(o);const _={};b&8&&(_.label=n[3]),b&16&&(_.disabled=n[4]==="static"),!i&&b&1&&(i=!0,_.value=n[0],G(()=>i=!1)),a.$set(_)},i(n){c||(v(e.$$.fragment,n),v(a.$$.fragment,n),c=!0)},o(n){C(e.$$.fragment,n),C(a.$$.fragment,n),c=!1},d(n){w(e,n),n&&E(t),w(a,n)}}}function W(s){let e,t;return e=new O({props:{visible:s[2],elem_id:s[1],disable:typeof s[5].container=="boolean"&&!s[5].container,$$slots:{default:[Q]},$$scope:{ctx:s}}}),{c(){h(e.$$.fragment)},m(a,i){k(e,a,i),t=!0},p(a,[i]){const c={};i&4&&(c.visible=a[2]),i&2&&(c.elem_id=a[1]),i&32&&(c.disable=typeof a[5].container=="boolean"&&!a[5].container),i&601&&(c.$$scope={dirty:i,ctx:a}),e.$set(c)},i(a){t||(v(e.$$.fragment,a),t=!0)},o(a){C(e.$$.fragment,a),t=!1},d(a){w(e,a)}}}function X(s,e,t){let{elem_id:a=""}=e,{visible:i=!0}=e,{value:c=!1}=e,{label:r="Checkbox"}=e,{mode:f}=e,{style:u={}}=e,{loading_status:l}=e;function n(o){c=o,t(0,c)}function b(o){H.call(this,s,o)}return s.$$set=o=>{"elem_id"in o&&t(1,a=o.elem_id),"visible"in o&&t(2,i=o.visible),"value"in o&&t(0,c=o.value),"label"in o&&t(3,r=o.label),"mode"in o&&t(4,f=o.mode),"style"in o&&t(5,u=o.style),"loading_status"in o&&t(6,l=o.loading_status)},[c,a,i,r,f,u,l,n,b]}class Y extends j{constructor(e){super(),q(this,e,X,W,y,{elem_id:1,visible:2,value:0,label:3,mode:4,style:5,loading_status:6})}}var p=Y;const x=["static","dynamic"],$=s=>({type:"boolean",description:"checked status",example_data:s.value??!0});export{p as Component,$ as document,x as modes};
//# sourceMappingURL=index.7ccc1ccb.js.map
