(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{14:function(t,e,s){},16:function(t,e,s){"use strict";s.r(e);var a=s(1),c=s.n(a),n=s(8),r=s.n(n),i=(s(14),s(9)),l=s(3),o=s(4),b=s(6),d=s(5),j=s(0),u=function(t){Object(b.a)(s,t);var e=Object(d.a)(s);function s(){return Object(l.a)(this,s),e.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){var t=this.props.styles,e=t.statistics,s=t.title,a=t.stats,c=this.props.state,n=c.good,r=c.neutral,i=c.bad,l=n+r+i,o=Math.floor(n/(l-r)*100);return Object(j.jsxs)("div",{className:e,children:[Object(j.jsx)("h2",{className:s,children:"Statistics"}),Object(j.jsxs)("div",{className:a,children:[Object(j.jsxs)("p",{children:["Good: ",n]}),Object(j.jsxs)("p",{children:["Neutral: ",r]}),Object(j.jsxs)("p",{children:["Bad: ",i]}),Object(j.jsxs)("p",{children:["Total: ",l]}),Object(j.jsxs)("p",{children:["Positive feedback: ",o||0,"%"]})]})]})}}]),s}(a.Component),h=s(2),O=s.n(h),f=function(t){Object(b.a)(s,t);var e=Object(d.a)(s);function s(){var t;Object(l.a)(this,s);for(var a=arguments.length,c=new Array(a),n=0;n<a;n++)c[n]=arguments[n];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0},t.handleFeadback=function(e){var s=e.currentTarget.name;t.setState((function(t){return Object(i.a)({},s,t[s]+1)}))},t}return Object(o.a)(s,[{key:"render",value:function(){var t=O.a.feadback,e=O.a.title,s=O.a.buttons,a=O.a.button;return Object(j.jsxs)("div",{className:t,children:[Object(j.jsx)("h2",{className:e,children:"Please leave feedback"}),Object(j.jsxs)("div",{className:s,children:[Object(j.jsx)("button",{name:"good",className:a,onClick:this.handleFeadback,children:"Good"}),Object(j.jsx)("button",{name:"neutral",className:a,onClick:this.handleFeadback,children:"Neutral"}),Object(j.jsx)("button",{name:"bad",className:a,onClick:this.handleFeadback,children:"Bad"})]}),Object(j.jsx)(u,{state:this.state,styles:O.a})]})}}]),s}(a.Component);var p=function(){return Object(j.jsx)(f,{})};r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root"))},2:function(t,e,s){t.exports={feadback:"styles_feadback__CTdY7",title:"styles_title__2unvm",buttons:"styles_buttons__3-YQk",button:"styles_button__1F4kx",statistics:"styles_statistics__3KB3g",stats:"styles_stats__6qE7w"}}},[[16,1,2]]]);
//# sourceMappingURL=main.470756dd.chunk.js.map