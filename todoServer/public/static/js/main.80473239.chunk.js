(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{179:function(e,t,n){e.exports=n(399)},184:function(e,t,n){},191:function(e,t,n){},399:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(7),l=n.n(r),i=(n(184),n(400),n(51)),c=(n(187),n(9)),d=n(175),s=(n(189),n(64)),m=(n(191),n(192),n(174)),u=(n(401),n(65)),p=(n(196),n(119)),f=(n(398),n(173)),h=(n(74),n(20)),E=(n(207),n(120)),k=n(87),y=n(159),b=n(176),g=n(160),w=n(177),v=n(161),C=n.n(v),S=n(162),x=n.n(S),O=new function e(t){Object(k.a)(this,e),this.SendRequst=function(e,t,n,a){return C.a.request({method:e,url:t,params:n,data:a})},this.error_handler=t||function(){}},T={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},D={wrapperCol:{span:14,offset:4}},I=function(e){function t(e){var n;return Object(k.a)(this,t),(n=Object(b.a)(this,Object(g.a)(t).call(this,e))).getTodo=function(e){var t=n.props.completed;O.SendRequst("get","/todo/list").then(function(e){var a=e.data||[];n.setState({todos:a.filter(function(e){return e.completed==t}).map(function(e){return e.content=e.text,e})})})},n.newTodo=function(e){n.setState({record:null}),n.drawOpen()},n.handleSubmit=function(e){n.drawClose();var t=n.props.form.getFieldsValue(),a=n.state.record;a?O.SendRequst("post","/todo/edit",{completed:!1,text:t.content,id:a.id,remark:t.remark}).then(function(e){n.getTodo()}):O.SendRequst("post","/todo/add",{completed:!1,text:t.content,id:x.a.v1(),remark:t.remark}).then(function(e){n.getTodo()}),console.log("\u53d1\u8bf7\u6c42\uff01",{completed:!1,text:t.content,id:"",remark:t.remark})},n.setDone=function(e){E.a.confirm({title:"\u63d0\u793a",centered:!0,content:"\u786e\u5b9a\u8981\u6807\u8bb0\u4e3a\u5b8c\u6210\u72b6\u6001\u5417\uff1f",onOk:function(){O.SendRequst("post","todo/complete",{id:e.id}).then(function(e){n.getTodo()})}})},n.drawOpen=function(e){n.setState({drawerVisiable:!0})},n.drawClose=function(e){n.setState({drawerVisiable:!1})},n.state={drawerVisiable:!1,record:null,todos:[]},n}return Object(w.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){this.getTodo()}},{key:"componentDidUpdate",value:function(e){this.props.completed!=e.completed&&this.getTodo()}},{key:"openEdit",value:function(e){this.drawOpen(),this.setState({record:e})}},{key:"handleDelete",value:function(e){var t=this;E.a.confirm({title:"\u63d0\u793a",centered:!0,content:"\u786e\u5b9a\u8981\u5220\u9664\u8be5\u4ee3\u529e\u9879\u5417\uff1f",onOk:function(){console.log("\u5220\u9664"),O.SendRequst("delete","/todo/del",{id:e.id}).then(function(e){t.getTodo()})}})}},{key:"render",value:function(){var e=this,t=this.state.todos,n=[{title:"\u5185\u5bb9",dataIndex:"content",key:"content"},{title:"\u5907\u6ce8",dataIndex:"remark",key:"remark"},{title:"\u5b8c\u6210\u72b6\u6001",dataIndex:"completed",key:"completed",render:function(e){return e?"\u5df2\u5b8c\u6210":"\u672a\u5b8c\u6210"}},{title:"\u521b\u5efa\u65f6\u95f4",dataIndex:"timeStamp",key:"timeStamp",render:function(e){return new Date(e).toString().split(" ").slice(1,5).join(" ")}},{title:"\u64cd\u4f5c",align:"center",render:function(t,n){return e.props.completed?o.a.createElement("div",null,o.a.createElement(h.a,{onClick:function(){e.handleDelete(n)}},"\u5220\u9664")):o.a.createElement("div",null,o.a.createElement(h.a,{onClick:function(){e.setDone(n)}}," ","\u8bbe\u4e3a\u5df2\u5b8c\u6210"),o.a.createElement(h.a,{onClick:function(){e.openEdit(n)}},"\u7f16\u8f91"),o.a.createElement(h.a,{onClick:function(){e.handleDelete(n)}},"\u5220\u9664"))}}],a=this.props.form.getFieldDecorator,r=this.state,l=r.record,i=r.drawerVisiable;return o.a.createElement("div",null,o.a.createElement("div",{className:"toolbar"},o.a.createElement(h.a,{type:"primary",onClick:this.newTodo},"\u65b0\u5efaTodo")),o.a.createElement(f.a,{dataSource:t,columns:n,pagination:!1,rowKey:function(e){return e.id}}),o.a.createElement(m.a,{width:"400px",title:l?"\u7f16\u8f91ToDo":"\u65b0\u5efaTodo",placement:"right",closable:!0,onClose:this.drawClose,visible:i,destroyOnClose:!0},o.a.createElement(u.a,T,o.a.createElement(u.a.Item,{label:"\u5185\u5bb9"},a("content",{initialValue:l?l.content:"",rules:[{required:!0,message:"\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a"}]})(o.a.createElement(p.a,{placeholder:"\u8bf7\u8f93\u5165\u5185\u5bb9"}))),o.a.createElement(u.a.Item,{label:"\u5907\u6ce8"},a("remark",{initialValue:l?l.remark:""})(o.a.createElement(p.a.TextArea,null))),o.a.createElement(u.a.Item,D,o.a.createElement("div",{className:"button-bar-right"},o.a.createElement(h.a,{type:"primary",style:{marginRight:"10px"},onClick:this.handleSubmit},"\u786e\u5b9a"),o.a.createElement(h.a,{type:"gray",onClick:this.drawClose},"\u53d6\u6d88"))))))}}]),t}(a.Component),j=u.a.create()(I),q=s.a.Content,R=s.a.Header,V=s.a.Sider;var H=function(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),n=t[0],r=t[1];return o.a.createElement("div",null,o.a.createElement(s.a,{style:{minHeight:"100vh"}},o.a.createElement(R,{style:{backgroundColor:"#40a9ff6b"}},o.a.createElement("div",{className:"header-title"},"\u5907\u5fd8\u5f55")),o.a.createElement(s.a,{style:{minHeight:"100vh"}},o.a.createElement(V,{width:200,style:{background:"#fff"}},o.a.createElement(i.a,{theme:"light",defaultSelectedKeys:["1"],mode:"inline"},o.a.createElement(i.a.Item,{key:"1",onClick:function(){r(!1)}},o.a.createElement(c.a,{type:"pie-chart"}),o.a.createElement("span",null,"\u5f85\u5b8c\u6210")),o.a.createElement(i.a.Item,{key:"2",onClick:function(){r(!0)}},o.a.createElement(c.a,{type:"desktop"}),o.a.createElement("span",null,"\u5df2\u5b8c\u6210")))),o.a.createElement(q,null,o.a.createElement(j,{completed:n})))))};l.a.render(o.a.createElement(H,null),document.getElementById("root"))}},[[179,1,2]]]);
//# sourceMappingURL=main.80473239.chunk.js.map