(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],[,,,,,,,,,,,,,function(t,e,a){},function(t,e,a){},,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var s=a(1),n=a.n(s),c=a(8),i=a.n(c),r=(a(13),a(3)),o=a(4),u=a(2),d=a(6),l=a(5),b=(a(14),a(0)),j=function(t){Object(d.a)(a,t);var e=Object(l.a)(a);function a(t){var s;return Object(r.a)(this,a),(s=e.call(this,t)).state={tasksCount:0},s.addItem=s.addItem.bind(Object(u.a)(s)),s}return Object(o.a)(a,[{key:"addItem",value:function(t){if(""!==this._inputElement.value){var e={text:this._inputElement.value,id:this.state.tasksCount,key:Date.now()};this.props.addTask(e),this.setState.tasksCount++,this._inputElement.value=""}t.preventDefault()}},{key:"render",value:function(){var t=this;return Object(b.jsx)("div",{className:"submit-form-container",children:Object(b.jsxs)("form",{onSubmit:this.addItem,children:[Object(b.jsx)("input",{className:"input",type:"text",placeholder:"Add a task",ref:function(e){return t._inputElement=e}}),Object(b.jsx)("button",{className:"submit-button",type:"submit",children:"Add"})]})})}}]),a}(n.a.Component),k=(a(16),function(t){Object(d.a)(a,t);var e=Object(l.a)(a);function a(t){var s;return Object(r.a)(this,a),(s=e.call(this,t)).removeTask=s.removeTask.bind(Object(u.a)(s)),s.markDone=s.markDone.bind(Object(u.a)(s)),s.state={backgroundColor:" "},s}return Object(o.a)(a,[{key:"removeTask",value:function(){this.props.removeTask(this.props.id)}},{key:"markDone",value:function(){" "===this.state.backgroundColor?this.setState({backgroundColor:"rgb(144, 238, 144, 0.5)"}):this.setState({backgroundColor:" "})}},{key:"render",value:function(){return Object(b.jsx)("div",{className:"task-container",children:Object(b.jsxs)("div",{className:"task-container-background",style:{backgroundColor:this.state.backgroundColor},children:[Object(b.jsx)("div",{className:"task-title",children:Object(b.jsx)("h2",{className:"task-term",children:this.props.text})}),Object(b.jsxs)("div",{className:"task-buttons",children:[Object(b.jsx)("button",{className:"done-button",onClick:this.markDone,children:"+"}),Object(b.jsx)("button",{className:"delete-button",onClick:this.removeTask,children:"-"})]})]})})}}]),a}(n.a.Component)),h=(a(17),function(t){Object(d.a)(a,t);var e=Object(l.a)(a);function a(){return Object(r.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var t=this;return Object(b.jsx)("div",{className:"tasks-lists-container",children:Object(b.jsx)("div",{className:"tasks-list",children:this.props.tasks.map((function(e){return Object(b.jsx)(k,{text:e.text,id:e.id,removeTask:t.props.removeTask},e.key)}))})})}}]),a}(n.a.Component)),m=(a(18),function(t){Object(d.a)(a,t);var e=Object(l.a)(a);function a(t){var s;return Object(r.a)(this,a),(s=e.call(this,t)).state={tasks:[]},s.addTask=s.addTask.bind(Object(u.a)(s)),s.removeTask=s.removeTask.bind(Object(u.a)(s)),s}return Object(o.a)(a,[{key:"addTask",value:function(t){this.setState((function(e){return{tasks:e.tasks.concat(t)}}))}},{key:"removeTask",value:function(t){var e=this.state.tasks.filter((function(e){return e.id!==t}));this.setState({tasks:e})}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("header",{children:Object(b.jsx)("h1",{children:"To Do list"})}),Object(b.jsx)(j,{addTask:this.addTask}),Object(b.jsx)(h,{tasks:this.state.tasks,removeTask:this.removeTask})]})}}]),a}(n.a.Component)),v=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,20)).then((function(e){var a=e.getCLS,s=e.getFID,n=e.getFCP,c=e.getLCP,i=e.getTTFB;a(t),s(t),n(t),c(t),i(t)}))};i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root")),v()}],[[19,1,2]]]);
//# sourceMappingURL=main.75048375.chunk.js.map