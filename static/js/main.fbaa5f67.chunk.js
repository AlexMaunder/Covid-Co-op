(this["webpackJsonpcovid-co-op"]=this["webpackJsonpcovid-co-op"]||[]).push([[0],{279:function(e,t,a){e.exports=a(778)},299:function(e,t,a){},498:function(e,t,a){},499:function(e,t,a){},773:function(e,t,a){},774:function(e,t,a){},775:function(e,t,a){},776:function(e,t,a){},778:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(33),l=a.n(s),o=a(4),c=a(5),i=a(20),u=a(7),m=a(6),d=a(16),h=a(22),p=a.n(h),g=(a(299),{url:{API_URL:"https://covid-co-op.herokuapp.com",FRONT_END_URL:"https://joshjm.github.io/Covid-Co-op"}}),v=(g.url.FRONT_END_URL,g.url.API_URL,function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light static-top mb-5 shadow"},r.a.createElement(d.b,{to:"/",className:"navbar-brand"},"Covid Coop\u2695"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarResponsive"},this.props.loggedInStatus?r.a.createElement("ul",{className:"navbar-nav ml-auto "},r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.b,{to:"/",className:"nav-link",onClick:this.props.handleLogout},"Click to log out ",this.props.userID.name)),r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.b,{to:"/",className:"nav-link"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.b,{to:"/order",className:"nav-link"},"Place order")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.b,{to:"/cart",className:"nav-link"},"View Cart")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.b,{to:"/profile",className:"nav-link"},"My Profile"))):r.a.createElement("ul",{className:"navbar-nav ml-auto "},r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.b,{to:"/",className:"nav-link"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.b,{to:"/sign-up",className:"nav-link"},"Sign up")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.b,{to:"/sign-in",className:"nav-link"},"Sign in")))))}}]),a}(n.Component)),E=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"About page"))}}]),a}(n.Component),b=a(84),f=a(72),w={lat:-25.363,lng:134.211},y=Object(b.compose)(Object(b.withProps)({googleMapURL:"https://maps.googleapis.com/maps/api/js?key=".concat("AIzaSyBCB1kU1qZRdoMXme2dZbw5QoKadpQnrjM","&v=3.exp&libraries=geometry,drawing,places"),loadingElement:r.a.createElement("div",{style:{height:"100%"}}),containerElement:r.a.createElement("div",{style:{height:"600px"}}),mapElement:r.a.createElement("div",{style:{height:"100%"}})}),f.withScriptjs,f.withGoogleMap)((function(e){return r.a.createElement(f.GoogleMap,{defaultZoom:4,defaultCenter:w},e.isMarkerShown&&r.a.createElement("div",null,r.a.createElement(f.Marker,{position:{lat:-34.397,lng:150.144}}),r.a.createElement(f.Marker,{position:{lat:-34.497,lng:150.644}})))})),O="https://maps.googleapis.com/maps/api/geocode/".concat("json","?"),j=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={coordinates:{lat:null,lng:null},address:""},e._handleChange=e._handleChange.bind(Object(i.a)(e)),e._handleSubmit=e._handleSubmit.bind(Object(i.a)(e)),e}return Object(c.a)(a,[{key:"fetchGPS",value:function(e){var t=this;p.a.get("".concat(O,"key=").concat("AIzaSyBCB1kU1qZRdoMXme2dZbw5QoKadpQnrjM","&address=").concat(e)).then((function(e){t.setState({coordinates:e.data.results[0].geometry.location})}))}},{key:"_handleChange",value:function(e){this.setState({address:e.target.value})}},{key:"_handleSubmit",value:function(e){e.preventDefault(),this.fetchGPS(this.state.address)}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h2",null," convert address to gps "),r.a.createElement("form",{onSubmit:this._handleSubmit},r.a.createElement("input",{type:"text",placeholder:"address",onChange:this._handleChange}),r.a.createElement("button",null,"Submit")),r.a.createElement("div",{className:"output-display"},"Output Coordinates: ","Lat: ".concat(this.state.coordinates.lat,", Long: ").concat(this.state.coordinates.lng)))}}]),a}(n.Component),C=(a(498),g.url.FRONT_END_URL,g.url.API_URL,function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={isLoggedIn:!0,user:{}},n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Home page content"),this.props.loggedInStatus?r.a.createElement(d.b,{to:"/logout",onClick:this.handleClick},"Log Out"):null,r.a.createElement(y,{isMarkerShown:!0}),r.a.createElement(j,null))}}]),a}(n.Component)),N=a(70),S=(a(499),a(227),g.url.FRONT_END_URL,g.url.API_URL),k=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(N.a)({},a,r))},n.handleSubmit=function(e){e.preventDefault();var t=n.state,a={email:t.email,password:t.password,password_confirmation:t.password_confirmation,location:t.address};p.a.post(S+"/users",a,{withCredentials:!0}).then((function(e){console.log(e),console.log("flag"),"created"===e.data.status?(n.props.handleLogin(e.data),n.redirect()):n.setState({errors:e.data.errors})})).catch((function(e){return console.log("api errors:",e)}))},n.redirect=function(){n.props.history.push("/")},n.handleErrors=function(){return r.a.createElement("div",null,r.a.createElement("ul",null,n.state.errors.map((function(e){return r.a.createElement("li",{key:e},e)}))))},n.state={email:"test@test.com",password:"chicken",password_confirmation:"chicken",address:"",errors:""},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state;e.email,e.password,e.password_confirmation,e.address;return r.a.createElement("div",{className:"row justify-content-md-center"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"center"},"Sign Up"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{className:"form-control",name:"email",type:"email",id:"email",placeholder:"Email",onChange:this.handleChange,value:this.state.email})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{className:"form-control",type:"password",name:"password_confirmation",id:"password",placeholder:"Password",onChange:this.handleChange,value:this.state.password})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,' confirmation">Confirm Password'),r.a.createElement("input",{className:"form-control",type:"password",name:"password",id:"password-confirmation",placeholder:"Password",onChange:this.handleChange,value:this.state.password_confirmation})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Address"),r.a.createElement("input",{className:"form-control",type:"text",name:"address",id:"address",placeholder:"address",onChange:this.handleChange,value:this.state.address})),r.a.createElement("button",{type:"submit",id:"submit-btn",className:"btn btn-primary"},"Submit")),r.a.createElement("div",null,this.state.errors?this.handleErrors():null)))))}}]),a}(n.Component),_=(a(773),g.url.FRONT_END_URL,g.url.API_URL),L=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(N.a)({},a,r))},n.handleSubmit=function(e){e.preventDefault();var t=n.state,a={email:t.email,password:t.password};p.a.post(_+"/login",{user:a},{withCredentials:!0}).then((function(e){e.data.logged_in?(n.props.handleLogin(e.data),n.redirect()):n.setState({errors:e.data.errors})})).catch((function(e){return console.log("api errors:",e)}))},n.redirect=function(){n.props.history.push("/")},n.handleErrors=function(){return r.a.createElement("div",null,r.a.createElement("ul",null,n.state.errors.map((function(e){return r.a.createElement("li",{key:e},e)}))))},n.state={email:"",password:"",errors:""},n}return Object(c.a)(a,[{key:"componentWillMount",value:function(){return this.props.loggedInStatus?this.redirect():null}},{key:"render",value:function(){var e=this.state;e.email,e.password;return r.a.createElement("div",{className:"row justify-content-md-center"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"center"},"Sign In"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{className:"form-control",name:"email",type:"email",id:"email",placeholder:"Email",value:this.state.email,onChange:this.handleChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{className:"form-control",name:"password",type:"password",id:"password",placeholder:"Password",value:this.state.password,onChange:this.handleChange})),r.a.createElement("button",{type:"submit",id:"submit-btn",className:"btn btn-primary"},"Sign In"))))))}}]),a}(n.Component),U=a(8),R=(a(774),g.url.FRONT_END_URL,g.url.API_URL),I=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(N.a)({},a,r))},n.handleSubmit=function(e){e.preventDefault();var t=n.state,a={email:t.email,password:t.password,password_confirmation:t.password_confirmation,location:t.location};p.a.patch("".concat(R,"/users/").concat(n.props.user.id,".json"),a,{withCredentials:!0}).then((function(e){console.log(e),n.setState({isChange:!0}),n.props.handleUserEdit(e.data),n.props.handleLogin(e.data)})).catch((function(e){return console.log("api errors:",e)}))},n.redirect=function(){n.props.history.push("/")},n.handleErrors=function(){return r.a.createElement("div",null,r.a.createElement("ul",null,n.state.errors.map((function(e){return r.a.createElement("li",{key:e},e)}))))},n.state={email:"",password:"",password_confirmation:"",location:"",errors:"",isChange:!1,SERVER_URL:R},n.redirect=n.redirect.bind(Object(i.a)(n)),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.setState({email:this.props.user.email,location:this.props.user.location})}},{key:"render",value:function(){var e=this.state;e.email,e.password,e.password_confirmation,e.location;return this.state.isChange?r.a.createElement(U.a,{to:"/"}):r.a.createElement("div",{class:"row justify-content-md-center"},r.a.createElement("div",{class:"col-md-6"},r.a.createElement("div",{class:"card"},r.a.createElement("div",{class:"card-body"},r.a.createElement("h2",{class:"center"},"Update User Details"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"email"},"Email"),r.a.createElement("input",{class:"form-control",name:"email",type:"email",id:"email",placeholder:"Email",onChange:this.handleChange,value:this.state.email})),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"password"},"Update Password"),r.a.createElement("input",{class:"form-control",type:"password",name:"password_confirmation",id:"password",placeholder:"Password",onChange:this.handleChange,value:this.state.password})),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"password-confirmation"},"Confirm Password"),r.a.createElement("input",{class:"form-control",type:"password",name:"password",id:"password-confirmation",placeholder:"Password",onChange:this.handleChange,value:this.state.password_confirmation})),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"location"},"Update Location"),r.a.createElement("input",{class:"form-control",type:"text",name:"location",id:"location",placeholder:"Location",onChange:this.handleChange,value:this.state.location})),r.a.createElement("button",{type:"submit",id:"submit-btn",class:"btn btn-primary"},"Submit")),r.a.createElement("div",null,this.state.errors?this.handleErrors():null)))))}}]),a}(n.Component),P=a(277),D=a.n(P),x=a(278),M=(a(775),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).handleChange=function(t){var a=t.target.value;e.setState({value:a})},e.state={value:""},e.showProducts=e.showProducts.bind(Object(i.a)(e)),e.matchUser=e.matchUser.bind(Object(i.a)(e)),e.handleClick=e.handleClick.bind(Object(i.a)(e)),e}return Object(c.a)(a,[{key:"matchUser",value:function(e){return this.props.users.length>0?this.props.users[D.a.findIndex(this.props.users,{id:e})].name:""}},{key:"handleClick",value:function(e){console.log("this is:",this)}},{key:"showProducts",value:function(e){var t=this;return e?e.map((function(e){return r.a.createElement("div",{key:e.id,className:"col-3 item"},r.a.createElement("img",{src:e.image_url,alt:e.name}),r.a.createElement("h3",null,e.name.slice(0,25)," ..."),r.a.createElement("p",null,"Category: ",e.category),r.a.createElement("p",null,"Quantity available: ",e.quantity),r.a.createElement("p",null,e.description.slice(0,30),"..."),r.a.createElement("p",null,"Provided by: ",r.a.createElement("a",{href:""},t.matchUser(e.user_id))),r.a.createElement("p",null,"Posted: ",Math.floor(Math.abs(new Date-new Date(e.created_at))/1e3/60/60/24)," days ago"),r.a.createElement("button",{type:"button",id:"submit-btn",className:"btn btn-success btn-sm",onClick:t.handleClick},"Add to Cart"))})):""}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"row"},r.a.createElement("span",{className:"search-heading"},"Search:")," ",r.a.createElement("input",{type:"text",value:this.state.value,onChange:this.handleChange})),r.a.createElement("div",{className:"row"},this.showProducts(),r.a.createElement(x.a,{value:this.state.value,data:this.props.products,renderResults:function(t){return e.showProducts(t)}})))}}]),a}(n.Component)),A=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).propsIn=e.propsIn.bind(Object(i.a)(e)),e}return Object(c.a)(a,[{key:"propsIn",value:function(){return this.props.users.length>0&&this.props.products.length>0?r.a.createElement(M,{users:this.props.users,products:this.props.products}):""}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Order page"),this.propsIn())}}]),a}(n.Component),T=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"This is your cart"))}}]),a}(n.Component),F=(a(776),g.url.FRONT_END_URL,g.url.API_URL),B=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).loginStatus=function(){p.a.get("".concat(F,"/logged_in"),{withCredentials:!0}).then((function(e){e.data.logged_in?n.handleLogin(e):n.handleLogout()})).catch((function(e){return console.log("api errors:",e)}))},n.handleLogin=function(e){n.setState({isLoggedIn:!0,user:e.user})},n.handleLogout=function(){p.a.delete("".concat(F,"/logout")).then(n.setState({isLoggedIn:!1,user:{}}))},n.handleUserEdit=function(e){n.setState({user:e})},n.state={PRODUCT_URL:"".concat(F,"/products"),USER_URL:"".concat(F,"/users"),isLoggedIn:!1,user:{},users:[],products:[]},n.fetchProducts=n.fetchProducts.bind(Object(i.a)(n)),n.fetchUsers=n.fetchUsers.bind(Object(i.a)(n)),n.fetchProducts(),n.fetchUsers(),n}return Object(c.a)(a,[{key:"fetchProducts",value:function(){var e=this;p.a.get(this.state.PRODUCT_URL).then((function(t){t.data?e.setState({products:t.data}):e.setState({errors:t.data.errors})}))}},{key:"fetchUsers",value:function(){var e=this;p.a.get(this.state.USER_URL).then((function(t){t.data?e.setState({users:t.data.users}):e.setState({errors:t.data.errors})}))}},{key:"componentDidMount",value:function(){this.loginStatus()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(d.a,null,r.a.createElement(v,{handleLogout:this.handleLogout,userID:this.state.user,loggedInStatus:this.state.isLoggedIn}),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"body"},r.a.createElement(U.d,null,r.a.createElement(U.b,{exact:!0,path:"/about",component:E}),r.a.createElement(U.b,{exact:!0,path:"/sign-up",render:function(t){return r.a.createElement(k,Object.assign({},t,{handleLogin:e.handleLogin,loggedInStatus:e.state.isLoggedIn}))}}),r.a.createElement(U.b,{exact:!0,path:"/sign-in",render:function(t){return r.a.createElement(L,Object.assign({},t,{handleLogin:e.handleLogin,loggedInStatus:e.state.isLoggedIn}))}}),r.a.createElement(U.b,{exact:!0,path:"/order",render:function(t){return r.a.createElement(A,{users:e.state.users,products:e.state.products})}}),"      ",r.a.createElement(U.b,{exact:!0,path:"/cart",component:T}),r.a.createElement(U.b,{exact:!0,path:"/profile",render:function(t){return r.a.createElement(I,Object.assign({},t,{user:e.state.user,loggedInStatus:e.state.isLoggedIn,handleUserEdit:e.handleUserEdit}))}}),r.a.createElement(U.b,{exact:!0,path:"/",render:function(t){return r.a.createElement(C,Object.assign({},t,{handleLogout:e.handleLogout,loggedInStatus:e.state.isLoggedIn}))}}))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(777);l.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[279,1,2]]]);
//# sourceMappingURL=main.fbaa5f67.chunk.js.map