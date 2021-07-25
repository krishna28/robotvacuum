(this.webpackJsonprobot_vacuum=this.webpackJsonprobot_vacuum||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(5),i=a.n(s),l=(a(11),a(2)),r=(a(12),a(13),a(6)),o=a.n(r),d=a(3),u=function e(t){Object(d.a)(this,e),this.value=t,this.prev=null,this.next=null},j={NORTH:"NORTH",SOUTH:"SOUTH",EAST:"EAST",WEST:"WEST"},b=new function e(){var t=this;Object(d.a)(this,e),this.push=function(e){var a=new u(e);return t.head?(t.tail.next=a,a.prev=t.tail,a.next=t.head,t.tail=a,t.head.prev=t.tail):(t.head=a,t.tail=a),t.length++,a},this.find=function(e){if(t.head)for(var a=t.head,c=0;c<t.length;c++){if(a.value===e)return a;a=a.next}},this.head=null,this.tail=null,this.length=0};b.push(j.NORTH),b.push(j.EAST),b.push(j.SOUTH),b.push(j.WEST);var h=b,O=a(0);var f=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),a=t[0],s=t[1],i=Object(c.useState)(""),r=Object(l.a)(i,2),d=r[0],u=r[1],b=Object(c.useRef)(),f=Object(c.useRef)(),m=Object(c.useRef)();Object(c.useEffect)((function(){o.a.AutoInit()}));var v=Object(c.useState)(0),x=Object(l.a)(v,2),p=x[0],N=x[1],T=Object(c.useState)(j.NORTH),g=Object(l.a)(T,2),S=g[0],w=g[1],E=Object(c.useState)(h.head),k=Object(l.a)(E,2),H=k[0],R=k[1];return Object(O.jsx)(n.a.Fragment,{children:Object(O.jsxs)("div",{className:"container-fluid",children:[Object(O.jsx)("div",{className:"row",children:Object(O.jsx)("nav",{children:Object(O.jsx)("div",{className:"nav-wrapper",children:Object(O.jsx)("a",{href:"#!",className:"brand-logo",children:"Robot Vacuum"})})})}),Object(O.jsxs)("div",{className:"row",children:[Object(O.jsxs)("div",{className:"col s6",children:[Object(O.jsxs)("div",{className:"row",children:[Object(O.jsxs)("div",{className:"input-field col s12 m4",children:[Object(O.jsx)("i",{className:"material-icons prefix",children:"X"}),Object(O.jsx)("input",{type:"number","data-testid":"x",ref:b,min:"0",max:"5",placeholder:"x-coordinate"})]}),Object(O.jsxs)("div",{className:"input-field col s12 m4",children:[Object(O.jsx)("i",{className:"material-icons prefix",children:"Y"}),Object(O.jsx)("input",{type:"number",id:"y","data-testid":"y",className:"validate",ref:f,min:"0",max:"5",placeholder:"y-coordinate"})]}),Object(O.jsx)("div",{className:"input-field col s12 m4",children:Object(O.jsxs)("select",{name:"face",ref:m,children:[Object(O.jsx)("option",{value:j.NORTH,children:j.NORTH}),Object(O.jsx)("option",{value:j.SOUTH,children:j.SOUTH}),Object(O.jsx)("option",{value:j.EAST,children:j.EAST}),Object(O.jsx)("option",{value:j.WEST,children:j.WEST})]})}),Object(O.jsx)("button",{className:"waves-effect waves-light btn-small margin",id:"place","data-testid":"place",onClick:function(e){e.preventDefault();var t=b.current.value,a=f.current.value,c=m.current.value;if(!t||!a||!c||t<0||a<0||t>5||a>5)return!1;s(t),u(a),w(c);var n=h.find(c);switch(n&&R(n),c){case j.NORTH:N(0);break;case j.EAST:N(90);break;case j.SOUTH:N(180);break;case j.WEST:N(-90);break;default:N(0)}},children:"Place"})]}),Object(O.jsxs)("div",{className:"row",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("button",{className:"waves-effect waves-light btn-small margin",id:"move","data-testid":"move",onClick:function(){if(""===a)return!1;switch(H.value){case j.NORTH:u((function(e){return e>4?e:+e+1}));break;case j.EAST:s((function(e){return e>4?e:+e+1}));break;case j.SOUTH:u((function(e){return e<1?e:+e-1}));break;case j.WEST:s((function(e){return e<1?e:+e-1}));break;default:console.warn("Not a valid option")}},children:"Move"}),Object(O.jsx)("button",{className:"waves-effect waves-light btn-small margin",id:"left","data-testid":"left",onClick:function(){if(""===a)return!1;N((function(e){return e-90})),R((function(e){var t=e?e.prev:h.head;return w(t.value),t}))},children:"Left"}),Object(O.jsx)("button",{className:"waves-effect waves-light btn-small margin",id:"right","data-testid":"right",onClick:function(){if(""===a)return!1;N((function(e){return e+90})),R((function(e){var t=e?e.next:h.head;return w(t.value),t}))},children:"Right"}),Object(O.jsx)("button",{className:"waves-effect waves-light btn-small margin",id:"report","data-testid":"generateReport",onClick:function(){console.log("Output: ",a,d,H.value)},children:"Report"})]}),Object(O.jsxs)("div",{className:"collection",children:[Object(O.jsxs)("a",{href:"#!",className:"collection-item",children:[Object(O.jsx)("span",{className:"badge",children:a}),"X"]}),Object(O.jsxs)("a",{href:"#!",className:"collection-item",children:[Object(O.jsx)("span",{className:"badge",children:d}),"Y"]}),Object(O.jsxs)("a",{href:"#!",className:"collection-item",children:[Object(O.jsx)("span",{className:"badge",children:S}),"Face"]})]})]}),Object(O.jsxs)("h6",{children:["Output: ",a,",",d,",",S]})]}),Object(O.jsx)("div",{className:"col s6",children:Object(O.jsx)("div",{className:"Main-container",children:Object(O.jsx)("div",{style:{position:"absolute",bottom:0,transform:"translate(".concat(90*a,"px,").concat(90*-d,"px)")},children:Object(O.jsx)("i",{className:"fas fa-robot fa-2x Icon-color",style:{transform:"rotate(".concat(p,"deg)")}})})})})]})]})})},m=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),s(e),i(e)}))};i.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(f,{})}),document.getElementById("root")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.7cac960c.chunk.js.map