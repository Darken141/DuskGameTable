(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,a,t){e.exports=t(19)},16:function(e,a,t){},17:function(e,a,t){},19:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(7),c=t.n(s),i=(t(16),t(1)),m=t(2),r=t(4),u=t(3),o=t(5),b=t(8),g=t.n(b),d=t(9),p=t.n(d),h=function(e){var a=e.table;return l.a.createElement("div",{className:"pa4"},l.a.createElement("div",{className:"overflow-auto shadow-3"},l.a.createElement("table",{className:"f8 w-100 mw10",cellSpacing:"0"},l.a.createElement("thead",null,l.a.createElement("tr",{className:"stripe-dark"},l.a.createElement("th",{className:"fw6 tl pa3 bg-navy white bb b--lightest-blue"},"Game"),l.a.createElement("th",{className:"fw6 tl pa3 bg-navy white bb b--lightest-blue"},"min. Buyin"),l.a.createElement("th",{className:"fw6 tl pa3 bg-navy white bb b--lightest-blue"},"Games running"),l.a.createElement("th",{className:"fw6 tl pa3 bg-navy white bb b--lightest-blue"},"Seats available"),l.a.createElement("th",{className:"fw6 tl pa3 bg-navy white bb b--lightest-blue"},"Waiting"))),l.a.createElement("tbody",{className:"lh-copy white"},l.a.createElement("tr",{className:"stripe-dark"},l.a.createElement("td",{className:"pa3"},a[0].name),l.a.createElement("td",{className:"pa3"},a[0].buyin),l.a.createElement("td",{className:"pa3"},a[0].gamerunning),l.a.createElement("td",{className:"pa3"},a[0].seatsavailable),l.a.createElement("td",{className:"pa3"},a[0].waiting)),l.a.createElement("tr",{className:"stripe-dark"},l.a.createElement("td",{className:"pa3"},a[1].name),l.a.createElement("td",{className:"pa3"},a[1].buyin),l.a.createElement("td",{className:"pa3"},a[1].gamerunning),l.a.createElement("td",{className:"pa3"},a[1].seatsavailable),l.a.createElement("td",{className:"pa3"},a[1].waiting)),l.a.createElement("tr",{className:"stripe-dark"},l.a.createElement("td",{className:"pa3"},a[2].name),l.a.createElement("td",{className:"pa3"},a[2].buyin),l.a.createElement("td",{className:"pa3"},a[2].gamerunning),l.a.createElement("td",{className:"pa3"},a[2].seatsavailable),l.a.createElement("td",{className:"pa3"},a[2].waiting)),l.a.createElement("tr",{className:"stripe-dark"},l.a.createElement("td",{className:"pa3"},a[3].name),l.a.createElement("td",{className:"pa3"},a[3].buyin),l.a.createElement("td",{className:"pa3"},a[3].gamerunning),l.a.createElement("td",{className:"pa3"},a[3].seatsavailable),l.a.createElement("td",{className:"pa3"},a[3].waiting)),l.a.createElement("tr",{className:"stripe-dark"},l.a.createElement("td",{className:"pa3"},a[4].name),l.a.createElement("td",{className:"pa3"},a[4].buyin),l.a.createElement("td",{className:"pa3"},a[4].gamerunning),l.a.createElement("td",{className:"pa3"},a[4].seatsavailable),l.a.createElement("td",{className:"pa3"},a[4].waiting)),l.a.createElement("tr",{className:"stripe-dark"},l.a.createElement("td",{className:"pa3"},a[5].name),l.a.createElement("td",{className:"pa3"},a[5].buyin),l.a.createElement("td",{className:"pa3"},a[5].gamerunning),l.a.createElement("td",{className:"pa3"},a[5].seatsavailable),l.a.createElement("td",{className:"pa3"},a[5].waiting))))))},f=function(e){function a(){var e;return Object(i.a)(this,a),(e=Object(r.a)(this,Object(u.a)(a).call(this))).loadGames=function(){fetch("https://mighty-castle-66787.herokuapp.com/",{method:"get"}).then(function(e){return e.json()}).then(function(a){a&&e.setState({table:a})})},e.handlePlusGameClick=function(a){e.setState({gamerunning:e.state.table[a-1].gamerunning++}),fetch("https://mighty-castle-66787.herokuapp.com/change-game",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:a,gamerunning:e.state.table[a-1].gamerunning})}).then(function(e){return e.json()}).then(function(e){console.log(e)})},e.handleMinusGameClick=function(a){e.setState({gamerunning:e.state.table[a-1].gamerunning--}),fetch("https://mighty-castle-66787.herokuapp.com/change-game",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:a,gamerunning:e.state.table[a-1].gamerunning})}).then(function(e){return e.json()}).then(function(e){console.log(e)})},e.handlePlusSeatsClick=function(a){e.setState({seatsavailable:e.state.table[a-1].seatsavailable++}),fetch("https://mighty-castle-66787.herokuapp.com/change-seats",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:a,seatsavailable:e.state.table[a-1].seatsavailable})}).then(function(e){return e.json()}).then(function(e){console.log(e)})},e.handleMinusSeatsClick=function(a){e.setState({seatsavailable:e.state.table[a-1].seatsavailable--}),fetch("https://mighty-castle-66787.herokuapp.com/change-seats",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:a,seatsavailable:e.state.table[a-1].seatsavailable})}).then(function(e){return e.json()}).then(function(e){console.log(e)})},e.handlePlusWaitingClick=function(a){e.setState({waiting:e.state.table[a-1].waiting++}),fetch("https://mighty-castle-66787.herokuapp.com/change-waiting",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:a,waiting:e.state.table[a-1].waiting})}).then(function(e){return e.json()}).then(function(e){console.log(e)})},e.handleMinusWaitingClick=function(a){e.setState({waiting:e.state.table[a-1].waiting--}),fetch("https://mighty-castle-66787.herokuapp.com/change-waiting",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:a,waiting:e.state.table[a-1].waiting})}).then(function(e){return e.json()}).then(function(e){console.log(e)})},e.state={table:[{id:"",name:"",buyin:"",gamerunning:0,seatsavailable:0,waiting:0},{id:"",name:"",buyin:"",gamerunning:0,seatsavailable:0,waiting:0},{id:"",name:"",buyin:"",gamerunning:0,seatsavailable:0,waiting:0},{id:"",name:"",buyin:"",gamerunning:0,seatsavailable:0,waiting:0},{id:"",name:"",buyin:"",gamerunning:0,seatsavailable:0,waiting:0},{id:"",name:"",buyin:"",gamerunning:0,seatsavailable:0,waiting:0}]},e}return Object(o.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this,a=this.state.table;return l.a.createElement("div",null,l.a.createElement("button",{onClick:this.loadGames,className:"f6 input-reset grow no-underline br-pill ph3 pv2 mb2 dib white bg-black"},"refresh"),l.a.createElement("h1",{className:"white"},"Admin dashboard"),l.a.createElement("div",{className:"pa4"},l.a.createElement("div",{className:"overflow-auto shadow-3"},l.a.createElement("table",{className:"f8 w-100 mw10",cellSpacing:"0"},l.a.createElement("thead",null,l.a.createElement("tr",{className:"stripe-dark"},l.a.createElement("th",{className:"fw6 tl pa3 bg-navy white bb b--lightest-blue"},"Game"),l.a.createElement("th",{className:"fw6 tl pa3 bg-navy white bb b--lightest-blue"},"min. Buy-in"),l.a.createElement("th",{className:"fw6 tl pa3 bg-navy white bb b--lightest-blue"},"Games running"),l.a.createElement("th",{className:"fw6 tl pa3 bg-navy white bb b--lightest-blue"},"Seats available"),l.a.createElement("th",{className:"fw6 tl pa3 bg-navy white bb b--lightest-blue"},"Waiting"))),l.a.createElement("tbody",{className:"lh-copy white"},l.a.createElement("tr",{className:"stripe-dark"},l.a.createElement("td",{className:"pa3"},a[0].name),l.a.createElement("td",{className:"pa3"},a[0].buyin),l.a.createElement("td",{className:"pa3"},l.a.createElement("button",{onClick:function(){return e.handleMinusGameClick(1)},className:"ma3"},l.a.createElement("i",{className:"fas fa-minus"})),a[0].gamerunning,l.a.createElement("button",{onClick:function(){return e.handlePlusGameClick(1)},className:"ma3"},l.a.createElement("i",{className:"fas fa-plus"}))),l.a.createElement("td",{className:"pa3"},l.a.createElement("button",{onClick:function(){return e.handleMinusSeatsClick(1)},className:"ma3"},l.a.createElement("i",{className:"fas fa-minus"})),a[0].seatsavailable,l.a.createElement("button",{onClick:function(){return e.handlePlusSeatsClick(1)},className:"ma3"},l.a.createElement("i",{className:"fas fa-plus"}))),l.a.createElement("td",{className:"pa3"},l.a.createElement("button",{onClick:function(){return e.handleMinusWaitingClick(1)},className:"ma3"},l.a.createElement("i",{className:"fas fa-minus"})),a[0].waiting,l.a.createElement("button",{onClick:function(){return e.handlePlusWaitingClick(1)},className:"ma3"},l.a.createElement("i",{className:"fas fa-plus"})))),l.a.createElement("tr",{className:"stripe-dark"},l.a.createElement("td",{className:"pa3"},a[1].name),l.a.createElement("td",{className:"pa3"},a[1].buyin),l.a.createElement("td",{className:"pa3"},l.a.createElement("button",{onClick:function(){return e.handleMinusGameClick(2)},className:"ma3"},l.a.createElement("i",{className:"fas fa-minus"})),a[1].gamerunning,l.a.createElement("button",{onClick:function(){return e.handlePlusGameClick(2)},className:"ma3"},l.a.createElement("i",{className:"fas fa-plus"}))),l.a.createElement("td",{className:"pa3"},l.a.createElement("button",{onClick:function(){return e.handleMinusSeatsClick(2)},className:"ma3"},l.a.createElement("i",{className:"fas fa-minus"})),a[1].seatsavailable,l.a.createElement("button",{onClick:function(){return e.handlePlusSeatsClick(2)},className:"ma3"},l.a.createElement("i",{className:"fas fa-plus"}))),l.a.createElement("td",{className:"pa3"},l.a.createElement("button",{onClick:function(){return e.handleMinusWaitingClick(2)},className:"ma3"},l.a.createElement("i",{className:"fas fa-minus"})),a[1].waiting,l.a.createElement("button",{onClick:function(){return e.handlePlusWaitingClick(2)},className:"ma3"},l.a.createElement("i",{className:"fas fa-plus"})))),l.a.createElement("tr",{className:"stripe-dark"},l.a.createElement("td",{className:"pa3"},a[2].name),l.a.createElement("td",{className:"pa3"},a[2].buyin),l.a.createElement("td",{className:"pa3"},l.a.createElement("button",{onClick:function(){return e.handleMinusGameClick(3)},className:"ma3"},l.a.createElement("i",{className:"fas fa-minus"})),a[2].gamerunning,l.a.createElement("button",{onClick:function(){return e.handlePlusGameClick(3)},className:"ma3"},l.a.createElement("i",{className:"fas fa-plus"}))),l.a.createElement("td",{className:"pa3"},l.a.createElement("button",{onClick:function(){return e.handleMinusSeatsClick(3)},className:"ma3"},l.a.createElement("i",{className:"fas fa-minus"})),a[2].seatsavailable,l.a.createElement("button",{onClick:function(){return e.handlePlusSeatsClick(3)},className:"ma3"},l.a.createElement("i",{className:"fas fa-plus"}))),l.a.createElement("td",{className:"pa3"},l.a.createElement("button",{onClick:function(){return e.handleMinusWaitingClick(3)},className:"ma3"},l.a.createElement("i",{className:"fas fa-minus"})),a[2].waiting,l.a.createElement("button",{onClick:function(){return e.handlePlusWaitingClick(3)},className:"ma3"},l.a.createElement("i",{className:"fas fa-plus"})))),l.a.createElement("tr",{className:"stripe-dark"},l.a.createElement("td",{className:"pa3"},a[3].name),l.a.createElement("td",{className:"pa3"},a[3].buyin),l.a.createElement("td",{className:"pa3"},l.a.createElement("button",{onClick:function(){return e.handleMinusGameClick(4)},className:"ma3"},l.a.createElement("i",{className:"fas fa-minus"})),a[3].gamerunning,l.a.createElement("button",{onClick:function(){return e.handlePlusGameClick(4)},className:"ma3"},l.a.createElement("i",{className:"fas fa-plus"}))),l.a.createElement("td",{className:"pa3"},l.a.createElement("button",{onClick:function(){return e.handleMinusSeatsClick(4)},className:"ma3"},l.a.createElement("i",{className:"fas fa-minus"})),a[3].seatsavailable,l.a.createElement("button",{onClick:function(){return e.handlePlusSeatsClick(4)},className:"ma3"},l.a.createElement("i",{className:"fas fa-plus"}))),l.a.createElement("td",{className:"pa3"},l.a.createElement("button",{onClick:function(){return e.handleMinusWaitingClick(4)},className:"ma3"},l.a.createElement("i",{className:"fas fa-minus"})),a[3].waiting,l.a.createElement("button",{onClick:function(){return e.handlePlusWaitingClick(4)},className:"ma3"},l.a.createElement("i",{className:"fas fa-plus"})))),l.a.createElement("tr",{className:"stripe-dark"},l.a.createElement("td",{className:"pa3"},a[4].name),l.a.createElement("td",{className:"pa3"},a[4].buyin),l.a.createElement("td",{className:"pa3"},l.a.createElement("button",{onClick:function(){return e.handleMinusGameClick(5)},className:"ma3"},l.a.createElement("i",{className:"fas fa-minus"})),a[4].gamerunning,l.a.createElement("button",{onClick:function(){return e.handlePlusGameClick(5)},className:"ma3"},l.a.createElement("i",{className:"fas fa-plus"}))),l.a.createElement("td",{className:"pa3"},l.a.createElement("button",{onClick:function(){return e.handleMinusSeatsClick(5)},className:"ma3"},l.a.createElement("i",{className:"fas fa-minus"})),a[4].seatsavailable,l.a.createElement("button",{onClick:function(){return e.handlePlusSeatsClick(5)},className:"ma3"},l.a.createElement("i",{className:"fas fa-plus"}))),l.a.createElement("td",{className:"pa3"},l.a.createElement("button",{onClick:function(){return e.handleMinusWaitingClick(5)},className:"ma3"},l.a.createElement("i",{className:"fas fa-minus"})),a[4].waiting,l.a.createElement("button",{onClick:function(){return e.handlePlusWaitingClick(5)},className:"ma3"},l.a.createElement("i",{className:"fas fa-plus"})))),l.a.createElement("tr",{className:"stripe-dark"},l.a.createElement("td",{className:"pa3"},a[5].name),l.a.createElement("td",{className:"pa3"},a[5].buyin),l.a.createElement("td",{className:"pa3"},l.a.createElement("button",{onClick:function(){return e.handleMinusGameClick(6)},className:"ma3"},l.a.createElement("i",{className:"fas fa-minus"})),a[5].gamerunning,l.a.createElement("button",{onClick:function(){return e.handlePlusGameClick(6)},className:"ma3"},l.a.createElement("i",{className:"fas fa-plus"}))),l.a.createElement("td",{className:"pa3"},l.a.createElement("button",{onClick:function(){return e.handleMinusSeatsClick(6)},className:"ma3"},l.a.createElement("i",{className:"fas fa-minus"})),a[5].seatsavailable,l.a.createElement("button",{onClick:function(){return e.handlePlusSeatsClick(6)},className:"ma3"},l.a.createElement("i",{className:"fas fa-plus"}))),l.a.createElement("td",{className:"pa3"},l.a.createElement("button",{onClick:function(){return e.handleMinusWaitingClick(6)},className:"ma3"},l.a.createElement("i",{className:"fas fa-minus"})),a[5].waiting,l.a.createElement("button",{onClick:function(){return e.handlePlusWaitingClick(6)},className:"ma3"},l.a.createElement("i",{className:"fas fa-plus"})))))))))}}]),a}(l.a.Component),E=(t(17),{particles:{number:{value:30,density:{enable:!0,value_area:200}}}}),N=function(e){function a(){var e;return Object(i.a)(this,a),(e=Object(r.a)(this,Object(u.a)(a).call(this))).handleLogIn=function(){e.state.isLogginIn?e.setState({isLogginIn:!1}):e.setState({isLogginIn:!0})},e.loadTable=function(){setInterval(function(){fetch("https://mighty-castle-66787.herokuapp.com/",{method:"get"}).then(function(e){return e.json()}).then(function(a){a&&e.setState({game:a}),console.log(a)})},1e3)},e.state={isLogginIn:!1,game:[{id:"",name:"",buyin:"",gamerunning:0,seatsavailable:0,waiting:0},{id:"",name:"",buyin:"",gamerunning:0,seatsavailable:0,waiting:0},{id:"",name:"",buyin:"",gamerunning:0,seatsavailable:0,waiting:0},{id:"",name:"",buyin:"",gamerunning:0,seatsavailable:0,waiting:0},{id:"",name:"",buyin:"",gamerunning:0,seatsavailable:0,waiting:0},{id:"",name:"",buyin:"",gamerunning:0,seatsavailable:0,waiting:0}]},e}return Object(o.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{onLoad:this.loadTable,className:"App"},l.a.createElement(p.a,{className:"particles",params:E}),this.state.isLogginIn?l.a.createElement("div",null,l.a.createElement("button",{onClick:this.handleLogIn,className:"btn-login f6 input-reset grow no-underline br-pill ph3 pv2 mb2 dib white bg-black"},"Log out"),l.a.createElement(f,null)):l.a.createElement("div",null,l.a.createElement("img",{onClick:this.handleLogIn,className:"logo pt4",src:g.a,alt:"DuskTillDawn-Logo"}),l.a.createElement(h,{table:this.state.game})))}}]),a}(l.a.Component);t(18),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t.p+"static/media/DuskLogo.4fa4780b.png"}},[[10,1,2]]]);
//# sourceMappingURL=main.c0d6abd5.chunk.js.map