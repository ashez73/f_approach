(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(33)},23:function(e,t,a){},25:function(e,t,a){},29:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(4),l=a.n(o),c=(a(23),a(5)),s=a(6),d=a(12),m=a(13),i=a(16),u=a(14),h=a(17),g=(a(25),a(3)),E=function(e){var t=e.state,a=e.listManageMethods;return 0===t.list.length?r.a.createElement("h2",null,"Database empty! Add your first record!"):r.a.createElement(r.a.Fragment,null,r.a.createElement(g.i,{style:{textAlign:"left"}},t.list.map(function(e){return r.a.createElement(g.j,{className:"justify-content-between ",style:e!==t.recStore?{backgroundColor:"white"}:{backgroundColor:"#f8f8f8"},key:e},r.a.createElement("span",{style:{textTransform:"uppercase"}},"entry no. ",e),r.a.createElement(g.c,{size:"sm",style:{float:"right"}},r.a.createElement(g.b,{color:"primary",onClick:function(t){return a(t,e)}},"Read"),r.a.createElement(g.b,{color:"primary",style:{backgroundColor:"#1ea3eb"},onClick:function(t){return a(t,e)}},"Update"),r.a.createElement(g.b,{color:"dark",onClick:function(t){return a(t,e)}},"Delete")))})))},p=function(){return r.a.createElement("header",{className:"fixed-top border-bottom border-white bg-primary text-white",style:{padding:"15px"}},r.a.createElement("p",{className:"lead font-weight-bold"},"SKYGATE challenge"),r.a.createElement("p",null,"CRUD form manager integrated with IndexedDB"))},b=function(e){var t=e.state,a=e.showForm;return 0===t.addNewVis?null:r.a.createElement("div",null,r.a.createElement(g.b,{color:"primary",type:"button",style:{margin:"20px"},onClick:function(){return a("add")}},"Add New Record"))},f=(a(29),function(e){var t=e.state,a=e.setInput;return parseInt(t.wheels)>4?r.a.createElement(r.a.Fragment,null,r.a.createElement(g.h,null,"Is your Ford road legal?"),r.a.createElement(g.f,{className:"mgr",check:!0},r.a.createElement(g.h,{check:!0},r.a.createElement(g.g,{onChange:a,type:"radio",value:"yes",checked:"yes"===t.legal,name:"legal",required:!0,disabled:"read"===t.mode}),"YES")),r.a.createElement(g.f,{check:!0},r.a.createElement(g.h,{check:!0},r.a.createElement(g.g,{onChange:a,type:"radio",value:"no",checked:"no"===t.legal,name:"legal",required:!0,disabled:"read"===t.mode}),"NO"))):null}),y=function(e){var t=e.state,a=e.setInput;return"Ford"===t.model?r.a.createElement(r.a.Fragment,null,r.a.createElement(g.f,{className:"mgr"},r.a.createElement(g.h,{for:"color"},"What color is your Ford?"),r.a.createElement(g.g,{onChange:a,type:"text",name:"color",placeholder:"Yout Ford's color",value:t.color,required:!0,disabled:"read"===t.mode})),r.a.createElement(g.f,{className:"mgr"},r.a.createElement(g.h,{for:"wheels"},"How many wheels on your Ford?"),r.a.createElement(g.g,{onChange:a,type:"number",name:"wheels",placeholder:"Number of wheels",value:t.wheels,required:!0,disabled:"read"===t.mode})),r.a.createElement(f,{state:t,setInput:a})):"Toyota"===t.model?r.a.createElement(r.a.Fragment,null,r.a.createElement(g.h,null,"Has your Toyota been recalled?"),r.a.createElement(g.f,{className:"mgr",check:!0},r.a.createElement(g.h,{check:!0},r.a.createElement(g.g,{onChange:a,type:"radio",value:"yes",checked:"yes"===t.recalled,name:"recalled",required:!0,disabled:"read"===t.mode}),"YES")),r.a.createElement(g.f,{check:!0},r.a.createElement(g.h,{check:!0},r.a.createElement(g.g,{onChange:a,type:"radio",value:"no",checked:"no"===t.recalled,name:"recalled",required:!0,disabled:"read"===t.mode}),"NO"))):null},w=function(e){var t=e.state,a=e.setInput;return"yes"===t.ownsCar?r.a.createElement(r.a.Fragment,null,r.a.createElement(g.f,{className:"mgr"},r.a.createElement(g.h,{for:"companyName"},"What is your car's model?"),r.a.createElement(g.g,{disabled:"read"===t.mode,onChange:a,type:"text",name:"model",placeholder:"Car's model",value:t.model,required:!0})),r.a.createElement(y,{state:t,setInput:a})):null},v=function(e){var t=e.state,a=e.setInput,n=e.processSubmit;return r.a.createElement("div",null,r.a.createElement("h5",null,"mode: ",r.a.createElement(g.a,{color:"secondary"},t.mode)),r.a.createElement(g.e,{style:{textAlign:"left"},onSubmit:function(e){return n(e,t.mode)}},r.a.createElement(g.h,null,"Do you own a car?"),r.a.createElement(g.f,{check:!0}," ",r.a.createElement(g.h,{check:!0},r.a.createElement(g.g,{onChange:a,type:"radio",disabled:"read"===t.mode,value:"yes",checked:"yes"===t.ownsCar,name:"ownsCar",required:!0}),"YES")),r.a.createElement(g.f,{check:!0},r.a.createElement(g.h,{check:!0},r.a.createElement(g.g,{onChange:a,type:"radio",disabled:"read"===t.mode,value:"no",checked:"no"===t.ownsCar,name:"ownsCar",required:!0}),"NO")),r.a.createElement(w,{state:t,setInput:a}),r.a.createElement(g.f,{className:"mgr"},r.a.createElement(g.h,{for:"building"},"What year was your building built?"),r.a.createElement(g.g,{onChange:a,type:"number",name:"buildingBuilt",placeholder:"Enter number",value:t.buildingBuilt,required:!0,disabled:"read"===t.mode})),r.a.createElement(g.f,null,r.a.createElement(g.h,{for:"companyName"},"Company name"),r.a.createElement(g.g,{type:"text",name:"companyName",placeholder:"Company name",value:t.companyName,required:!0,disabled:"read"===t.mode,onChange:a})),r.a.createElement("div",{style:{textAlign:"center"}},t.subVis?r.a.createElement(g.b,{color:"primary"},"Submit"):null)))},S=function(e){var t=e.state,a=e.showForm,n=e.listManageMethods,o=e.setInput,l=e.processSubmit,c=e.mydb;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,null),r.a.createElement("main",null,r.a.createElement(g.d,{style:{marginTop:"160px"}},r.a.createElement("h5",null,"DATABASE: ",c[0]," v.",c[2]),r.a.createElement("h6",null,"STORE: ",c[1]),r.a.createElement(E,{state:t,listManageMethods:n}),t.formVis?r.a.createElement(v,{setInput:o,state:t,processSubmit:l}):null,r.a.createElement(b,{state:t,showForm:a}))))};"indexedDB"in window||console.log("This browser doesn't support IndexedDB"),function(){var e=(window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB).open("db-name",1);e.onupgradeneeded=function(){e.result.createObjectStore("objectStoreName",{autoIncrement:!0})}}();var N=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).getList=function(){var e=indexedDB.open("db-name",1);e.onsuccess=function(){var t=e.result.transaction("objectStoreName","readwrite").objectStore("objectStoreName"),n=t.get(16),r=t.getAllKeys();n.onsuccess=function(){a.setState({response:n.result})},r.onsuccess=function(){a.setState({list:r.result})}}},a.addRecord=function(e,t){var n={};n.ownsCar=a.state.ownsCar,n.buildingBuilt=a.state.buildingBuilt,n.companyName=a.state.companyName,"yes"===a.state.ownsCar&&(n.model=a.state.model,"Toyota"===a.state.model?n.recalled=a.state.recalled:"Ford"===a.state.model&&(n.color=a.state.color,n.wheels=a.state.wheels,parseInt(a.state.wheels)>4&&(n.legal=a.state.legal)));var r=indexedDB.open("db-name",1);r.onsuccess=function(){var e=r.result.transaction("objectStoreName","readwrite").objectStore("objectStoreName");("add"===t?e.add(n):e.put(n,a.state.recStore)).onsuccess=function(){alert("RECORD ADDED/UPDATED"),a.setState({formVis:0,addNewVis:1,mode:"none"});var t=e.getAllKeys();t.onsuccess=function(){a.setState({list:t.result})}}}},a.readRecord=function(e,t,n){var r="read"===n?0:1,o=t,l=indexedDB.open("db-name",1);l.onsuccess=function(){var e=l.result.transaction("objectStoreName").objectStore("objectStoreName").get(o);e.onsuccess=function(){alert("RECORD RETRIEVED"),a.setState(Object(s.a)({formVis:1,addNewVis:1,subVis:r,mode:n},e.result))}}},a.purgeState=function(){console.log("PURGING");var e=Object(s.a)({},a.state);console.log(e);var t=0;for(var n in e)t>=6&&(e[n]=""),t++;return e},a.showForm=function(e){console.log("WAS CLICKED",e),a.setState(Object(s.a)({formVis:1,addNewVis:0,mode:"add",subVis:1},a.purgeState())),a.setState({mode:"add",subVis:1,addNewVis:0,formVis:1})},a.listManageMethods=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;console.log("ATTEMPTING TO CHANGE:",e.target.innerHTML),"Delete"===e.target.innerHTML?a.deleteRecord(t):"Update"===e.target.innerHTML?(a.setState({recStore:t}),a.readRecord(e,t,"update")):(a.setState({recStore:t}),a.readRecord(e,t,"read"))},a.setInput=function(e){console.log(e.target.name,e.target.value),a.setState(Object(c.a)({},e.target.name,e.target.value))},a.processSubmit=function(e,t){e.preventDefault(),console.log("ATTEMPTING TO ADD"),a.addRecord(e,t)},a.state={recStore:"",list:[],addNewVis:1,formVis:0,subVis:1,mode:"none",ownsCar:"",buildingBuilt:"",companyName:"",model:"",color:"",wheels:"",legal:"",recalled:""},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getList()}},{key:"deleteRecord",value:function(e){var t=this,a=indexedDB.open("db-name",1);a.onsuccess=function(){var n=a.result.transaction("objectStoreName","readwrite").objectStore("objectStoreName");n.delete(e).onsuccess=function(){var e=n.getAllKeys();e.onsuccess=function(){t.setState({list:e.result})}}}}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(S,{state:this.state,mydb:["sky","store",1],showForm:this.showForm,readRecord:this.readRecord,updateRecord:this.updateRecord,deleteRecord:this.deleteRecord,createRecord:this.creareRecord,setInput:this.setInput,processSubmit:this.processSubmit,listManageMethods:this.listManageMethods}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(31);l.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,2,1]]]);
//# sourceMappingURL=main.31dcb6c5.chunk.js.map