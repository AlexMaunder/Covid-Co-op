(this["webpackJsonpcovid-co-op"]=this["webpackJsonpcovid-co-op"]||[]).push([[0],{278:function(e,t,a){e.exports=a(777)},282:function(e,t,a){},497:function(e,t,a){},498:function(e,t,a){},772:function(e,t,a){},773:function(e,t,a){},774:function(e,t,a){},775:function(e,t,a){},777:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(33),o=a.n(s),l=a(4),c=a(5),i=a(20),u=a(7),m=a(6),d=a(27),h=(a(282),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light static-top mb-5 shadow"},r.a.createElement(d.b,{to:"/",className:"navbar-brand"},"Covid Coop\u2695"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarResponsive"},r.a.createElement("ul",{className:"navbar-nav ml-auto "},r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.b,{to:"/",className:"nav-link"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.b,{to:"/sign-up",className:"nav-link"},"Sign up")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.b,{to:"/sign-in",className:"nav-link"},"Sign in")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.b,{to:"/order",className:"nav-link"},"Place order")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.b,{to:"/cart",className:"nav-link"},"View Cart")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.b,{to:"/profile",className:"nav-link"},"My Profile")))))}}]),a}(n.Component)),p=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"About page"))}}]),a}(n.Component),g=a(21),f=a.n(g),E=a(84),b=a(72),v={lat:-25.363,lng:134.211},w=Object(E.compose)(Object(E.withProps)({googleMapURL:"https://maps.googleapis.com/maps/api/js?key=".concat("AIzaSyBCB1kU1qZRdoMXme2dZbw5QoKadpQnrjM","&v=3.exp&libraries=geometry,drawing,places"),loadingElement:r.a.createElement("div",{style:{height:"100%"}}),containerElement:r.a.createElement("div",{style:{height:"600px"}}),mapElement:r.a.createElement("div",{style:{height:"100%"}})}),b.withScriptjs,b.withGoogleMap)((function(e){return r.a.createElement(b.GoogleMap,{defaultZoom:4,defaultCenter:v},e.isMarkerShown&&r.a.createElement("div",null,r.a.createElement(b.Marker,{position:{lat:-34.397,lng:150.144}}),r.a.createElement(b.Marker,{position:{lat:-34.497,lng:150.644}})))})),y="https://maps.googleapis.com/maps/api/geocode/".concat("json","?"),O=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={coordinates:{lat:null,lng:null},address:""},e._handleChange=e._handleChange.bind(Object(i.a)(e)),e._handleSubmit=e._handleSubmit.bind(Object(i.a)(e)),e}return Object(c.a)(a,[{key:"fetchGPS",value:function(e){var t=this;f.a.get("".concat(y,"key=").concat("AIzaSyBCB1kU1qZRdoMXme2dZbw5QoKadpQnrjM","&address=").concat(e)).then((function(e){t.setState({coordinates:e.data.results[0].geometry.location})}))}},{key:"_handleChange",value:function(e){this.setState({address:e.target.value})}},{key:"_handleSubmit",value:function(e){e.preventDefault(),this.fetchGPS(this.state.address)}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h2",null," convert address to gps "),r.a.createElement("form",{onSubmit:this._handleSubmit},r.a.createElement("input",{type:"text",placeholder:"address",onChange:this._handleChange}),r.a.createElement("button",null,"Submit")),r.a.createElement("div",{className:"output-display"},"Output Coordinates: ","Lat: ".concat(this.state.coordinates.lat,", Long: ").concat(this.state.coordinates.lng)))}}]),a}(n.Component),j=(a(497),{url:{API_URL:"https://covid-co-op.herokuapp.com",FRONT_END_URL:"https://joshjm.github.io/Covid-Co-op"}}),C=j.url.FRONT_END_URL,N=(j.url.API_URL,function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleClick=function(){f.a.delete("".concat(C,"/logout"),{withCredentials:!0}).then((function(e){n.handleLogout(),n.history.push("/")})).catch((function(e){return console.log(e)}))},n.state={isLoggedIn:!0,user:{}},n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Home page content"),this.props.loggedInStatus?r.a.createElement(d.b,{to:"/logout",onClick:this.handleClick},"Log Out"):null,r.a.createElement(w,{isMarkerShown:!0}),r.a.createElement(O,null))}}]),a}(n.Component)),S=a(70),_=(a(498),a(227),j.url.FRONT_END_URL,j.url.API_URL),k=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(S.a)({},a,r))},n.handleSubmit=function(e){e.preventDefault();var t=n.state,a={email:t.email,password:t.password,password_confirmation:t.password_confirmation,location:t.address};f.a.post(n.state.SERVER_URL,a,{withCredentials:!0}).then((function(e){console.log(e),console.log("flag"),"created"===e.data.status?(n.props.handleLogin(e.data),n.redirect()):n.setState({errors:e.data.errors})})).catch((function(e){return console.log("api errors:",e)}))},n.redirect=function(){n.props.history.push("/")},n.handleErrors=function(){return r.a.createElement("div",null,r.a.createElement("ul",null,n.state.errors.map((function(e){return r.a.createElement("li",{key:e},e)}))))},n.state={email:"test@test.com",password:"chicken",password_confirmation:"chicken",address:"",errors:"",SERVER_URL:"".concat(_,"/users")},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state;e.email,e.password,e.password_confirmation,e.address;return r.a.createElement("div",{className:"row justify-content-md-center"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"center"},"Sign Up"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"email"},"Email"),r.a.createElement("input",{className:"form-control",name:"email",type:"email",id:"email",placeholder:"Email",onChange:this.handleChange,value:this.state.email})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"password"},"Password"),r.a.createElement("input",{className:"form-control",type:"password",name:"password_confirmation",id:"password",placeholder:"Password",onChange:this.handleChange,value:this.state.password})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"password-confirmation"},"Confirm Password"),r.a.createElement("input",{className:"form-control",type:"password",name:"password",id:"password-confirmation",placeholder:"Password",onChange:this.handleChange,value:this.state.password_confirmation})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"address"},"Address"),r.a.createElement("input",{className:"form-control",type:"text",name:"address",id:"address",placeholder:"address",onChange:this.handleChange,value:this.state.address})),r.a.createElement("button",{type:"submit",id:"submit-btn",className:"btn btn-primary"},"Submit")),r.a.createElement("div",null,this.state.errors?this.handleErrors():null)))))}}]),a}(n.Component),R=(a(772),j.url.FRONT_END_URL,j.url.API_URL),L=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(S.a)({},a,r))},n.handleSubmit=function(e){e.preventDefault();var t=n.state,a={email:t.email,password:t.password};f.a.post(n.state.SERVER_URL,{user:a},{withCredentials:!0}).then((function(e){e.data.logged_in?(n.props.handleLogin(e.data),n.redirect()):n.setState({errors:e.data.errors})})).catch((function(e){return console.log("api errors:",e)}))},n.redirect=function(){n.props.history.push("/")},n.handleErrors=function(){return r.a.createElement("div",null,r.a.createElement("ul",null,n.state.errors.map((function(e){return r.a.createElement("li",{key:e},e)}))))},n.state={email:"",password:"",errors:"",SERVER_URL:"".concat(R,"/login")},n}return Object(c.a)(a,[{key:"componentWillMount",value:function(){return this.props.loggedInStatus?this.redirect():null}},{key:"render",value:function(){var e=this.state;e.email,e.password;return r.a.createElement("div",{className:"row justify-content-md-center"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"center"},"Sign In"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"email"},"Email"),r.a.createElement("input",{className:"form-control",name:"email",type:"email",id:"email",placeholder:"Email",value:this.state.email,onChange:this.handleChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"password"},"Password"),r.a.createElement("input",{className:"form-control",name:"password",type:"password",id:"password",placeholder:"Password",value:this.state.password,onChange:this.handleChange})),r.a.createElement("button",{type:"submit",id:"submit-btn",className:"btn btn-primary"},"Sign In"))))))}}]),a}(n.Component),U=a(8),P=(a(773),j.url.FRONT_END_URL,j.url.API_URL),I=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(S.a)({},a,r))},n.handleSubmit=function(e){e.preventDefault();var t=n.state,a={email:t.email,password:t.password,password_confirmation:t.password_confirmation,location:t.location};f.a.patch("".concat(P,"/users/").concat(n.props.user.id,".json"),a,{withCredentials:!0}).then((function(e){console.log(e),n.setState({isChange:!0}),n.props.handleLogin(e.data)})).catch((function(e){return console.log("api errors:",e)}))},n.redirect=function(){n.props.history.push("/")},n.handleErrors=function(){return r.a.createElement("div",null,r.a.createElement("ul",null,n.state.errors.map((function(e){return r.a.createElement("li",{key:e},e)}))))},n.state={email:"",password:"",password_confirmation:"",location:"",errors:"",isChange:!1,SERVER_URL:P},n.redirect=n.redirect.bind(Object(i.a)(n)),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.setState({email:this.props.user.email,location:this.props.user.location})}},{key:"render",value:function(){var e=this.state;e.email,e.password,e.password_confirmation,e.location;return this.state.isChange?r.a.createElement(U.a,{to:"/"}):r.a.createElement("div",{class:"row justify-content-md-center"},r.a.createElement("div",{class:"col-md-6"},r.a.createElement("div",{class:"card"},r.a.createElement("div",{class:"card-body"},r.a.createElement("h2",{class:"center"},"Update User Details"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"email"},"Email"),r.a.createElement("input",{class:"form-control",name:"email",type:"email",id:"email",placeholder:"Email",onChange:this.handleChange,value:this.state.email})),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"password"},"Password"),r.a.createElement("input",{class:"form-control",type:"password",name:"password_confirmation",id:"password",placeholder:"Password",onChange:this.handleChange,value:this.state.password})),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"password-confirmation"},"Confirm Password"),r.a.createElement("input",{class:"form-control",type:"password",name:"password",id:"password-confirmation",placeholder:"Password",onChange:this.handleChange,value:this.state.password_confirmation})),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"location"},"location"),r.a.createElement("input",{class:"form-control",type:"text",name:"location",id:"location",placeholder:"location",onChange:this.handleChange,value:this.state.location})),r.a.createElement("button",{type:"submit",id:"submit-btn",class:"btn btn-primary"},"Submit")),r.a.createElement("div",null,this.state.errors?this.handleErrors():null)))))}}]),a}(n.Component),D=a(277),M=a.n(D),x=(a(774),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).showProducts=e.showProducts.bind(Object(i.a)(e)),e.matchUser=e.matchUser.bind(Object(i.a)(e)),e}return Object(c.a)(a,[{key:"matchUser",value:function(e){return this.props.users.length>0?this.props.users[M.a.findIndex(this.props.users,{id:e})].name:""}},{key:"showProducts",value:function(){var e=this;return this.props.products.length>0?this.props.products.map((function(t){return r.a.createElement("div",{key:t.id,className:"col-3 item"},r.a.createElement("img",{src:t.image_url,alt:t.name}),r.a.createElement("h3",null,t.name.slice(0,25)," ..."),r.a.createElement("p",null,"Category: ",t.category),r.a.createElement("p",null,"Quantity available: ",t.quantity),r.a.createElement("p",null,t.description.slice(0,30),"..."),r.a.createElement("p",null,"Provided by: ",r.a.createElement("a",{href:""},e.matchUser(t.user_id))),r.a.createElement("p",null,"Posted: ",Math.floor(Math.abs(new Date-new Date(t.created_at))/1e3/60/60/24)," days ago"))})):""}},{key:"render",value:function(){return r.a.createElement("div",{className:"row"},this.showProducts())}}]),a}(n.Component)),A=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).propsIn=e.propsIn.bind(Object(i.a)(e)),e}return Object(c.a)(a,[{key:"propsIn",value:function(){return this.props.users.length>0&&this.props.products.length>0?r.a.createElement(x,{users:this.props.users,products:this.props.products}):""}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Order page"),this.propsIn())}}]),a}(n.Component),T=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"This is your cart"))}}]),a}(n.Component),B=(a(775),j.url.FRONT_END_URL),F=j.url.API_URL,V=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).loginStatus=function(){f.a.get("".concat(B,"/logged_in"),{withCredentials:!0}).then((function(e){e.data.logged_in?n.handleLogin(e):n.handleLogout()})).catch((function(e){return console.log("api errors:",e)}))},n.handleLogin=function(e){n.setState({isLoggedIn:!0,user:e.user})},n.handleLogout=function(){n.setState({isLoggedIn:!1,user:{}})},n.state={PRODUCT_URL:"".concat(F,"/products"),USER_URL:"".concat(F,"/users"),isLoggedIn:!1,user:{},users:[],products:[]},n.fetchProducts=n.fetchProducts.bind(Object(i.a)(n)),n.fetchUsers=n.fetchUsers.bind(Object(i.a)(n)),n.fetchProducts(),n.fetchUsers(),n}return Object(c.a)(a,[{key:"fetchProducts",value:function(){var e=this;console.log(this.state.PRODUCT_URL),f.a.get(this.state.PRODUCT_URL).then((function(t){t.data?e.setState({products:t.data}):e.setState({errors:t.data.errors})}))}},{key:"fetchUsers",value:function(){var e=this;f.a.get(this.state.USER_URL).then((function(t){t.data?e.setState({users:t.data.users}):e.setState({errors:t.data.errors})}))}},{key:"componentDidMount",value:function(){this.loginStatus()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(d.a,null,r.a.createElement(h,null),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"body"},r.a.createElement(U.d,null,r.a.createElement(U.b,{exact:!0,path:"/about",component:p}),r.a.createElement(U.b,{exact:!0,path:"/sign-up",render:function(t){return r.a.createElement(k,Object.assign({},t,{handleLogin:e.handleLogin,loggedInStatus:e.state.isLoggedIn}))}}),r.a.createElement(U.b,{exact:!0,path:"/sign-in",render:function(t){return r.a.createElement(L,Object.assign({},t,{handleLogin:e.handleLogin,loggedInStatus:e.state.isLoggedIn}))}}),r.a.createElement(U.b,{exact:!0,path:"/order",render:function(t){return r.a.createElement(A,{users:e.state.users,products:e.state.products})}}),"      ",r.a.createElement(U.b,{exact:!0,path:"/cart",component:T}),r.a.createElement(U.b,{exact:!0,path:"/profile",render:function(t){return r.a.createElement(I,Object.assign({},t,{user:e.state.user,loggedInStatus:e.state.isLoggedIn}))}}),r.a.createElement(U.b,{exact:!0,path:"/",render:function(t){return r.a.createElement(N,Object.assign({},t,{handleLogout:e.handleLogout,loggedInStatus:e.state.isLoggedIn}))}}))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(776);o.a.render(r.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[278,1,2]]]);
//# sourceMappingURL=main.f4e3b62e.chunk.js.map