(this["webpackJsonpmy-react-app"]=this["webpackJsonpmy-react-app"]||[]).push([[0],{37:function(e,t,a){},52:function(e,t,a){e.exports=a.p+"static/media/websitelondon3.3672edfe.jpg"},53:function(e,t,a){e.exports=a.p+"static/media/resize1.c63351e0.jpg"},54:function(e,t,a){e.exports=a.p+"static/media/resize2.2.090f4594.jpg"},55:function(e,t,a){e.exports=a.p+"static/media/resize3.1.83ab997c.jpg"},63:function(e,t,a){e.exports=a(78)},68:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),l=a.n(o),c=(a(68),a(22)),i=a(23),s=a(34),u=a(33);n.Component,a(37);var d=a(1),f=a(2),m=a(4),v=a.n(m),b=r.a.createContext({});b.Consumer,b.Provider;function p(e,t){var a=Object(n.useContext)(b);return e||a[t]||t}var h=r.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.fluid,o=e.as,l=void 0===o?"div":o,c=e.className,i=Object(f.a)(e,["bsPrefix","fluid","as","className"]),s=p(a,"container"),u="string"===typeof n?"-"+n:"-fluid";return r.a.createElement(l,Object(d.a)({ref:t},i,{className:v()(c,n?""+s+u:s)}))}));h.displayName="Container",h.defaultProps={fluid:!1};var g=h,O=function(e){return r.a.createElement(g,null,e.children)},y=(a(43),a(24)),j=a(10),E=a(47);function x(e,t){var a,n=void 0===t?{}:t,o=n.displayName,l=void 0===o?(a=e)[0].toUpperCase()+Object(E.a)(a).slice(1):o,c=n.Component,i=n.defaultProps,s=r.a.forwardRef((function(t,a){var n=t.className,o=t.bsPrefix,l=t.as,i=void 0===l?c||"div":l,s=Object(f.a)(t,["className","bsPrefix","as"]),u=p(o,e);return r.a.createElement(i,Object(d.a)({ref:a,className:v()(n,u)},s))}));return s.defaultProps=i,s.displayName=l,s}var w=r.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,o=e.as,l=Object(f.a)(e,["bsPrefix","className","as"]);a=p(a,"navbar-brand");var c=o||(l.href?"a":"span");return r.a.createElement(c,Object(d.a)({},l,{ref:t,className:v()(n,a)}))}));w.displayName="NavbarBrand";var N=w,C=a(20),P=a(27),k=a(13);var I,R=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];e.apply(this,n),t.apply(this,n)}}),null)};function S(e){e.offsetHeight}var T={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function M(e,t){var a=t["offset"+e[0].toUpperCase()+e.slice(1)],n=T[e];return a+parseInt(Object(C.a)(t,n[0]),10)+parseInt(Object(C.a)(t,n[1]),10)}var K=((I={})[k.c]="collapse",I[k.d]="collapsing",I[k.b]="collapsing",I[k.a]="collapse show",I),D={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:M},A=r.a.forwardRef((function(e,t){var a=e.onEnter,o=e.onEntering,l=e.onEntered,c=e.onExit,i=e.onExiting,s=e.className,u=e.children,m=e.dimension,b=void 0===m?"height":m,p=e.getDimensionValue,h=void 0===p?M:p,g=Object(f.a)(e,["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"]),O="function"===typeof b?b():b,y=Object(n.useMemo)((function(){return R((function(e){e.style[O]="0"}),a)}),[O,a]),j=Object(n.useMemo)((function(){return R((function(e){var t="scroll"+O[0].toUpperCase()+O.slice(1);e.style[O]=e[t]+"px"}),o)}),[O,o]),E=Object(n.useMemo)((function(){return R((function(e){e.style[O]=null}),l)}),[O,l]),x=Object(n.useMemo)((function(){return R((function(e){e.style[O]=h(O,e)+"px",S(e)}),c)}),[c,h,O]),w=Object(n.useMemo)((function(){return R((function(e){e.style[O]=null}),i)}),[O,i]);return r.a.createElement(k.e,Object(d.a)({ref:t,addEndListener:P.a},g,{"aria-expanded":g.role?g.in:null,onEnter:y,onEntering:j,onEntered:E,onExit:x,onExiting:w}),(function(e,t){return r.a.cloneElement(u,Object(d.a)({},t,{className:v()(s,u.props.className,K[e],"width"===O&&"width")}))}))}));A.defaultProps=D;var L=A,F=r.a.createContext(null);F.displayName="NavbarContext";var B=F,H=r.a.forwardRef((function(e,t){var a=e.children,n=e.bsPrefix,o=Object(f.a)(e,["children","bsPrefix"]);return n=p(n,"navbar-collapse"),r.a.createElement(B.Consumer,null,(function(e){return r.a.createElement(L,Object(d.a)({in:!(!e||!e.expanded)},o),r.a.createElement("div",{ref:t,className:n},a))}))}));H.displayName="NavbarCollapse";var z=H,q=a(6),J=r.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,l=e.children,c=e.label,i=e.as,s=void 0===i?"button":i,u=e.onClick,m=Object(f.a)(e,["bsPrefix","className","children","label","as","onClick"]);a=p(a,"navbar-toggler");var b=Object(n.useContext)(B)||{},h=b.onToggle,g=b.expanded,O=Object(q.a)((function(e){u&&u(e),h&&h()}));return"button"===s&&(m.type="button"),r.a.createElement(s,Object(d.a)({},m,{ref:t,onClick:O,"aria-label":c,className:v()(o,a,!g&&"collapsed")}),l||r.a.createElement("span",{className:a+"-icon"}))}));J.displayName="NavbarToggle",J.defaultProps={label:"Toggle navigation"};var U=J,V=r.a.createContext(null),W=function(e,t){return void 0===t&&(t=null),null!=e?String(e):t||null},$=V,_=x("navbar-text",{Component:"span"}),X=r.a.forwardRef((function(e,t){var a=Object(j.a)(e,{expanded:"onToggle"}),o=a.bsPrefix,l=a.expand,c=a.variant,i=a.bg,s=a.fixed,u=a.sticky,m=a.className,b=a.children,h=a.as,g=void 0===h?"nav":h,O=a.expanded,y=a.onToggle,E=a.onSelect,x=a.collapseOnSelect,w=Object(f.a)(a,["bsPrefix","expand","variant","bg","fixed","sticky","className","children","as","expanded","onToggle","onSelect","collapseOnSelect"]),N=p(o,"navbar"),C=Object(n.useCallback)((function(){E&&E.apply(void 0,arguments),x&&O&&y&&y(!1)}),[E,x,O,y]);void 0===w.role&&"nav"!==g&&(w.role="navigation");var P=N+"-expand";"string"===typeof l&&(P=P+"-"+l);var k=Object(n.useMemo)((function(){return{onToggle:function(){return y&&y(!O)},bsPrefix:N,expanded:!!O}}),[N,O,y]);return r.a.createElement(B.Provider,{value:k},r.a.createElement($.Provider,{value:C},r.a.createElement(g,Object(d.a)({ref:t},w,{className:v()(m,N,l&&P,c&&N+"-"+c,i&&"bg-"+i,u&&"sticky-"+u,s&&"fixed-"+s)}),b)))}));X.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},X.displayName="Navbar",X.Brand=N,X.Toggle=U,X.Collapse=z,X.Text=_;var G=X,Q=(a(73),r.a.createContext(null));Q.displayName="CardContext";var Y=Q,Z=a(19),ee=a(28),te=a(11),ae=r.a.createContext(null);ae.displayName="NavContext";var ne=ae,re=r.a.createContext(null),oe=function(){},le=r.a.forwardRef((function(e,t){var a,o,l=e.as,c=void 0===l?"ul":l,i=e.onSelect,s=e.activeKey,u=e.role,m=e.onKeyDown,v=Object(f.a)(e,["as","onSelect","activeKey","role","onKeyDown"]),b=Object(ee.a)(),p=Object(n.useRef)(!1),h=Object(n.useContext)($),g=Object(n.useContext)(re);g&&(u=u||"tablist",s=g.activeKey,a=g.getControlledId,o=g.getControllerId);var O=Object(n.useRef)(null),y=function(e){var t=O.current;if(!t)return null;var a=Object(Z.a)(t,"[data-rb-event-key]:not(.disabled)"),n=t.querySelector(".active");if(!n)return null;var r=a.indexOf(n);if(-1===r)return null;var o=r+e;return o>=a.length&&(o=0),o<0&&(o=a.length-1),a[o]},j=function(e,t){null!=e&&(i&&i(e,t),h&&h(e,t))};Object(n.useEffect)((function(){if(O.current&&p.current){var e=O.current.querySelector("[data-rb-event-key].active");e&&e.focus()}p.current=!1}));var E=Object(te.a)(t,O);return r.a.createElement($.Provider,{value:j},r.a.createElement(ne.Provider,{value:{role:u,activeKey:W(s),getControlledId:a||oe,getControllerId:o||oe}},r.a.createElement(c,Object(d.a)({},v,{onKeyDown:function(e){var t;switch(m&&m(e),e.key){case"ArrowLeft":case"ArrowUp":t=y(-1);break;case"ArrowRight":case"ArrowDown":t=y(1);break;default:return}t&&(e.preventDefault(),j(t.dataset.rbEventKey,e),p.current=!0,b())},ref:E,role:u}))))})),ce=r.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,o=e.children,l=e.as,c=void 0===l?"div":l,i=Object(f.a)(e,["bsPrefix","className","children","as"]);return a=p(a,"nav-item"),r.a.createElement(c,Object(d.a)({},i,{ref:t,className:v()(n,a)}),o)}));ce.displayName="NavItem";var ie=ce;function se(e){return!e||"#"===e.trim()}var ue=r.a.forwardRef((function(e,t){var a=e.as,n=void 0===a?"a":a,o=e.disabled,l=e.onKeyDown,c=Object(f.a)(e,["as","disabled","onKeyDown"]),i=function(e){var t=c.href,a=c.onClick;(o||se(t))&&e.preventDefault(),o?e.stopPropagation():a&&a(e)};return se(c.href)&&(c.role=c.role||"button",c.href=c.href||"#"),o&&(c.tabIndex=-1,c["aria-disabled"]=!0),r.a.createElement(n,Object(d.a)({ref:t},c,{onClick:i,onKeyDown:R((function(e){" "===e.key&&(e.preventDefault(),i(e))}),l)}))}));ue.displayName="SafeAnchor";var de=ue,fe=(a(38),r.a.forwardRef((function(e,t){var a=e.active,o=e.className,l=e.eventKey,c=e.onSelect,i=e.onClick,s=e.as,u=Object(f.a)(e,["active","className","eventKey","onSelect","onClick","as"]),m=W(l,u.href),b=Object(n.useContext)($),p=Object(n.useContext)(ne),h=a;if(p){u.role||"tablist"!==p.role||(u.role="tab");var g=p.getControllerId(m),O=p.getControlledId(m);u["data-rb-event-key"]=m,u.id=g||u.id,u["aria-controls"]=O||u["aria-controls"],h=null==a&&null!=m?p.activeKey===m:a}"tab"===u.role&&(u.tabIndex=h?u.tabIndex:-1,u["aria-selected"]=h);var y=Object(q.a)((function(e){i&&i(e),null!=m&&(c&&c(m,e),b&&b(m,e))}));return r.a.createElement(s,Object(d.a)({},u,{ref:t,onClick:y,className:v()(o,h&&"active")}))})));fe.defaultProps={disabled:!1};var me=fe,ve={disabled:!1,as:de},be=r.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.disabled,o=e.className,l=e.href,c=e.eventKey,i=e.onSelect,s=e.as,u=Object(f.a)(e,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return a=p(a,"nav-link"),r.a.createElement(me,Object(d.a)({},u,{href:l,ref:t,eventKey:c,as:s,disabled:n,onSelect:i,className:v()(o,a,n&&"disabled")}))}));be.displayName="NavLink",be.defaultProps=ve;var pe=be,he=r.a.forwardRef((function(e,t){var a,o,l,c=Object(j.a)(e,{activeKey:"onSelect"}),i=c.as,s=void 0===i?"div":i,u=c.bsPrefix,m=c.variant,b=c.fill,h=c.justify,g=c.navbar,O=c.className,y=c.children,E=c.activeKey,x=Object(f.a)(c,["as","bsPrefix","variant","fill","justify","navbar","className","children","activeKey"]),w=p(u,"nav"),N=!1,C=Object(n.useContext)(B),P=Object(n.useContext)(Y);return C?(o=C.bsPrefix,N=null==g||g):P&&(l=P.cardHeaderBsPrefix),r.a.createElement(le,Object(d.a)({as:s,ref:t,activeKey:E,className:v()(O,(a={},a[w]=!N,a[o+"-nav"]=N,a[l+"-"+m]=!!l,a[w+"-"+m]=!!m,a[w+"-fill"]=b,a[w+"-justified"]=h,a))},x),y)}));he.displayName="Nav",he.defaultProps={justify:!1,fill:!1},he.Item=ie,he.Link=pe;var ge=he,Oe=a(3),ye=a.n(Oe),je=a(60),Ee={as:de,disabled:!1},xe=r.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,l=e.children,c=e.eventKey,i=e.disabled,s=e.href,u=e.onClick,m=e.onSelect,b=e.active,h=e.as,g=Object(f.a)(e,["bsPrefix","className","children","eventKey","disabled","href","onClick","onSelect","active","as"]),O=p(a,"dropdown-item"),y=Object(n.useContext)($),j=(Object(n.useContext)(ne)||{}).activeKey,E=W(c||null,s),x=null==b&&null!=E?W(j)===E:b,w=Object(q.a)((function(e){i||(u&&u(e),y&&y(E,e),m&&m(E,e))}));return r.a.createElement(h,Object(d.a)({},g,{ref:t,href:s,disabled:i,className:v()(o,O,x&&"active",i&&"disabled"),onClick:w}),l)}));xe.displayName="DropdownItem",xe.defaultProps=Ee;var we=xe,Ne=a(30);a(17);function Ce(e,t){return e}var Pe=a(35);function ke(e){var t=window.getComputedStyle(e);return{top:parseFloat(t.marginTop)||0,right:parseFloat(t.marginRight)||0,bottom:parseFloat(t.marginBottom)||0,left:parseFloat(t.marginLeft)||0}}var Ie=r.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,l=e.alignRight,c=e.rootCloseEvent,i=e.flip,s=e.show,u=e.renderOnMount,m=e.as,b=void 0===m?"div":m,h=e.popperConfig,g=Object(f.a)(e,["bsPrefix","className","alignRight","rootCloseEvent","flip","show","renderOnMount","as","popperConfig"]),O=Object(n.useContext)(B),y=p(a,"dropdown-menu"),j=function(){var e=Object(n.useRef)(null),t=Object(n.useRef)(null);return[Object(n.useCallback)((function(a){a&&(Object(Pe.a)(a,"popover")||Object(Pe.a)(a,"dropdown-menu"))&&(t.current=ke(a),a.style.margin="0",e.current=a)}),[]),[Object(n.useMemo)((function(){return{name:"offset",options:{offset:function(e){var a=e.placement;if(!t.current)return[0,0];var n=t.current,r=n.top,o=n.left,l=n.bottom,c=n.right;switch(a.split("-")[0]){case"top":return[0,l];case"left":return[0,c];case"bottom":return[0,r];case"right":return[0,o];default:return[0,0]}}}}}),[t]),Object(n.useMemo)((function(){return{name:"popoverArrowMargins",enabled:!0,phase:"main",requiresIfExists:["arrow"],effect:function(t){var a=t.state;if(e.current&&a.elements.arrow&&Object(Pe.a)(e.current,"popover")&&a.modifiersData["arrow#persistent"]){var n=ke(a.elements.arrow),r=n.top,o=n.right,l=r||o;return a.modifiersData["arrow#persistent"].padding={top:l,left:l,right:l,bottom:l},a.elements.arrow.style.margin="0",function(){a.elements.arrow&&(a.elements.arrow.style.margin="")}}}}}),[])]]}(),E=j[0],x=j[1],w=Object(Ne.b)({flip:i,rootCloseEvent:c,show:s,alignEnd:l,usePopper:!O,popperConfig:Object(d.a)({},h,{modifiers:x.concat((null==h?void 0:h.modifiers)||[])})}),N=w.hasShown,C=w.placement,P=w.show,k=w.alignEnd,I=w.close,R=w.props;return R.ref=Object(te.a)(E,Object(te.a)(Ce(t),R.ref)),N||u?("string"!==typeof b&&(R.show=P,R.close=I,R.alignRight=k),C&&(g.style=Object(d.a)({},g.style,{},R.style),g["x-placement"]=C),r.a.createElement(b,Object(d.a)({},g,R,{className:v()(o,y,P&&"show",k&&y+"-right")}))):null}));Ie.displayName="DropdownMenu",Ie.defaultProps={alignRight:!1,flip:!0};var Re=Ie,Se=(a(75),a(32)),Te=r.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.variant,o=e.size,l=e.active,c=e.className,i=e.block,s=e.type,u=e.as,m=Object(f.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),b=p(a,"btn"),h=v()(c,b,l&&"active",b+"-"+n,i&&b+"-block",o&&b+"-"+o);if(m.href)return r.a.createElement(de,Object(d.a)({},m,{as:u,ref:t,className:v()(h,m.disabled&&"disabled")}));t&&(m.ref=t),s?m.type=s:u||(m.type="button");var g=u||"button";return r.a.createElement(g,Object(d.a)({},m,{className:h}))}));Te.displayName="Button",Te.defaultProps={variant:"primary",active:!1,disabled:!1};var Me=Te,Ke=r.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.split,o=e.className,l=e.children,c=e.childBsPrefix,i=e.as,s=void 0===i?Me:i,u=Object(f.a)(e,["bsPrefix","split","className","children","childBsPrefix","as"]),m=p(a,"dropdown-toggle");void 0!==c&&(u.bsPrefix=c);var b=Object(Se.b)(),h=b[0],g=b[1].toggle;return h.ref=Object(te.a)(h.ref,Ce(t)),r.a.createElement(s,Object(d.a)({onClick:g,className:v()(o,m,n&&m+"-split")},h,u),l)}));Ke.displayName="DropdownToggle";var De=Ke,Ae=x("dropdown-header",{defaultProps:{role:"heading"}}),Le=x("dropdown-divider",{defaultProps:{role:"separator"}}),Fe=x("dropdown-item-text",{Component:"span"}),Be=r.a.forwardRef((function(e,t){var a=Object(j.a)(e,{show:"onToggle"}),o=a.bsPrefix,l=a.drop,c=a.show,i=a.className,s=a.alignRight,u=a.onSelect,m=a.onToggle,b=a.focusFirstItemOnShow,h=a.as,g=void 0===h?"div":h,O=(a.navbar,Object(f.a)(a,["bsPrefix","drop","show","className","alignRight","onSelect","onToggle","focusFirstItemOnShow","as","navbar"])),y=Object(n.useContext)($),E=p(o,"dropdown"),x=Object(q.a)((function(e,t,a){void 0===a&&(a=t.type),t.currentTarget===document&&(a="rootClose"),m&&m(e,t,{source:a})})),w=Object(q.a)((function(e,t){y&&y(e,t),u&&u(e,t),x(!1,t,"select")}));return r.a.createElement($.Provider,{value:w},r.a.createElement(je.a,{drop:l,show:c,alignEnd:s,onToggle:x,focusFirstItemOnShow:b,itemSelector:"."+E+"-item:not(.disabled):not(:disabled)"},(function(e){var a=e.props;return r.a.createElement(g,Object(d.a)({},O,a,{ref:t,className:v()(i,c&&"show",(!l||"down"===l)&&E,"up"===l&&"dropup","right"===l&&"dropright","left"===l&&"dropleft")}))})))}));Be.displayName="Dropdown",Be.defaultProps={navbar:!1},Be.Divider=Le,Be.Header=Ae,Be.Item=we,Be.ItemText=Fe,Be.Menu=Re,Be.Toggle=De;var He=Be,ze={id:ye.a.any,onClick:ye.a.func,title:ye.a.node.isRequired,disabled:ye.a.bool,active:ye.a.bool,menuRole:ye.a.string,renderMenuOnMount:ye.a.bool,rootCloseEvent:ye.a.string,bsPrefix:ye.a.string},qe=r.a.forwardRef((function(e,t){var a=e.id,n=e.title,o=e.children,l=e.bsPrefix,c=e.rootCloseEvent,i=e.menuRole,s=e.disabled,u=e.active,m=e.renderMenuOnMount,v=Object(f.a)(e,["id","title","children","bsPrefix","rootCloseEvent","menuRole","disabled","active","renderMenuOnMount"]);return r.a.createElement(He,Object(d.a)({ref:t},v,{as:ie}),r.a.createElement(He.Toggle,{id:a,eventKey:null,active:u,disabled:s,childBsPrefix:l,as:pe},n),r.a.createElement(He.Menu,{role:i,renderOnMount:m,rootCloseEvent:c},o))}));qe.displayName="NavDropdown",qe.propTypes=ze,qe.Item=He.Item,qe.ItemText=He.ItemText,qe.Divider=He.Divider,qe.Header=He.Header;var Je=qe,Ue=a(25);function Ve(){var e=Object(y.a)(["\n\n"]);return Ve=function(){return e},e}var We=Ue.a.div(Ve()),$e=function(){return r.a.createElement(We,null,r.a.createElement(G,{expand:"lg"},r.a.createElement(G.Brand,{href:"/"}," Home "),r.a.createElement(G.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(G.Collapse,{id:"basic-navbar-nav"},r.a.createElement(ge,{className:"navBar"},r.a.createElement(ge.Item,null,r.a.createElement(pe,{href:"/"}," Home ")," "),r.a.createElement(ge.Item,null,r.a.createElement(pe,{href:"/travel"}," Travel ")," "),r.a.createElement(ge.Item,null,r.a.createElement(pe,{href:"/street"}," Street ")," "),r.a.createElement(ge.Item,null,r.a.createElement(pe,{href:"/weddings"}," Weddings ")," "),r.a.createElement(ge.Item,null,r.a.createElement(pe,{href:"https://www.instagram.com/rob_mcconkey/?hl=en",target:"_blank"}," Instagram ")," "),r.a.createElement(Je,{title:"Blog",id:"basic-nav-dropdown"},r.a.createElement(Je.Item,{href:"#action/3.1"},"Canterbury"),r.a.createElement(Je.Item,{href:"#action/3.2"},"London Mews"),r.a.createElement(Je.Item,{href:"#action/3.3"},"London Underground"))))))},_e=function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Enjoy the website. Please let me know if there are any images you would like to purchase. For enquiries please email",r.a.createElement("a",{href:"mailto:robmcconkeyphotos@gmail.com"}," robmcconkeyphotos@gmail.com ")))},Xe=function(){return r.a.createElement("div",null,r.a.createElement("p",null," Hey there - welcome to the street page "))},Ge=function(){return r.a.createElement("div",null,r.a.createElement("div",{ClassName:".myNavbar"}),r.a.createElement("h2",null," Hey there - welcome to the travel page "))},Qe=a(5),Ye=a(7),Ze=a(9),et=a(8),tt=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).history=Object(Ze.a)(t.props),t}return Object(Ye.a)(t,e),t.prototype.render=function(){return r.a.createElement(Qe.b,{history:this.history,children:this.props.children})},t}(r.a.Component);r.a.Component;var at=function(e,t){return"function"===typeof e?e(t):e},nt=function(e,t){return"string"===typeof e?Object(Ze.c)(e,null,null,t):e},rt=function(e){return e},ot=r.a.forwardRef;"undefined"===typeof ot&&(ot=rt);var lt=ot((function(e,t){var a=e.innerRef,n=e.navigate,o=e.onClick,l=Object(f.a)(e,["innerRef","navigate","onClick"]),c=l.target,i=Object(d.a)({},l,{onClick:function(e){try{o&&o(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||c&&"_self"!==c||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),n())}});return i.ref=rt!==ot&&t||a,r.a.createElement("a",i)}));var ct=ot((function(e,t){var a=e.component,n=void 0===a?lt:a,o=e.replace,l=e.to,c=e.innerRef,i=Object(f.a)(e,["component","replace","to","innerRef"]);return r.a.createElement(Qe.d.Consumer,null,(function(e){e||Object(et.a)(!1);var a=e.history,s=nt(at(l,e.location),e.location),u=s?a.createHref(s):"",f=Object(d.a)({},i,{href:u,navigate:function(){var t=at(l,e.location);(o?a.replace:a.push)(t)}});return rt!==ot?f.ref=t||c:f.innerRef=c,r.a.createElement(n,f)}))})),it=function(e){return e},st=r.a.forwardRef;"undefined"===typeof st&&(st=it);st((function(e,t){var a=e["aria-current"],n=void 0===a?"page":a,o=e.activeClassName,l=void 0===o?"active":o,c=e.activeStyle,i=e.className,s=e.exact,u=e.isActive,m=e.location,v=e.sensitive,b=e.strict,p=e.style,h=e.to,g=e.innerRef,O=Object(f.a)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return r.a.createElement(Qe.d.Consumer,null,(function(e){e||Object(et.a)(!1);var a=m||e.location,o=nt(at(h,a),a),f=o.pathname,y=f&&f.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),j=y?Object(Qe.e)(a.pathname,{path:y,exact:s,sensitive:v,strict:b}):null,E=!!(u?u(j,a):j),x=E?function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter((function(e){return e})).join(" ")}(i,l):i,w=E?Object(d.a)({},p,{},c):p,N=Object(d.a)({"aria-current":E&&n||null,className:x,style:w,to:o},O);return it!==st?N.ref=t||g:N.innerRef=g,r.a.createElement(ct,N)}))}));var ut=r.a.forwardRef((function(e,t){var a,n=e.as,o=void 0===n?"div":n,l=e.className,c=e.fluid,i=e.bsPrefix,s=Object(f.a)(e,["as","className","fluid","bsPrefix"]),u=((a={})[i=p(i,"jumbotron")]=!0,a[i+"-fluid"]=c,a);return r.a.createElement(o,Object(d.a)({ref:t},s,{className:v()(l,u)}))}));ut.defaultProps={fluid:!1},ut.displayName="Jumbotron";var dt=ut,ft=a(52),mt=a.n(ft);function vt(){var e=Object(y.a)(["\n.Jumbo {\nbackground: url(",") no-repeat fixed bottom;\nbackground-size: cover;\ncolor: #F0F8FF;\nheight: 200px;\nposition: relative;\nz-index: -5;\n}\n\n.overlay {\n  background-colour:#000;\n  opacity: 0.3;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom:0;\n  right:0;\n  z-index: -4;\n}\n"]);return vt=function(){return e},e}var bt=Ue.a.div(vt(),mt.a),pt=function(){return r.a.createElement(bt,null,r.a.createElement(dt,{fluid:!0,className:"Jumbo"},r.a.createElement("div",{classname:"overlay"}),r.a.createElement(g,null,r.a.createElement("h1",null," Rob McConkey "))))},ht=a(56),gt=a(57),Ot=x("carousel-caption"),yt=x("carousel-item");function jt(e,t){var a=0;return r.a.Children.map(e,(function(e){return r.a.isValidElement(e)?t(e,a++):e}))}var Et={bsPrefix:ye.a.string,as:ye.a.elementType,slide:ye.a.bool,fade:ye.a.bool,controls:ye.a.bool,indicators:ye.a.bool,activeIndex:ye.a.number,onSelect:ye.a.func,onSlide:ye.a.func,onSlid:ye.a.func,interval:ye.a.number,keyboard:ye.a.bool,pause:ye.a.oneOf(["hover",!1]),wrap:ye.a.bool,touch:ye.a.bool,prevIcon:ye.a.node,prevLabel:ye.a.string,nextIcon:ye.a.node,nextLabel:ye.a.string},xt={slide:!0,fade:!1,controls:!0,indicators:!0,defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:r.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:r.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};var wt=r.a.forwardRef((function(e,t){var a=Object(j.a)(e,{activeIndex:"onSelect"}),o=a.as,l=void 0===o?"div":o,c=a.bsPrefix,i=a.slide,s=a.fade,u=a.controls,m=a.indicators,b=a.activeIndex,h=a.onSelect,g=a.onSlide,O=a.onSlid,y=a.interval,E=a.keyboard,x=a.onKeyDown,w=a.pause,N=a.onMouseOver,C=a.onMouseOut,I=a.wrap,R=a.touch,T=a.onTouchStart,M=a.onTouchMove,K=a.onTouchEnd,D=a.prevIcon,A=a.prevLabel,L=a.nextIcon,F=a.nextLabel,B=a.className,H=a.children,z=Object(f.a)(a,["as","bsPrefix","slide","fade","controls","indicators","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","className","children"]),J=p(c,"carousel"),U=Object(n.useRef)(null),V=Object(n.useState)("next"),W=V[0],$=V[1],_=Object(n.useState)(!1),X=_[0],G=_[1],Q=Object(n.useState)(b||0),Y=Q[0],Z=Q[1];X||b===Y||(U.current?($(U.current),U.current=null):$((b||0)>Y?"next":"prev"),i&&G(!0),Z(b||0));var ee=r.a.Children.toArray(H).filter(r.a.isValidElement).length,te=Object(n.useCallback)((function(e){if(!X){var t=Y-1;if(t<0){if(!I)return;t=ee-1}U.current="prev",h&&h(t,e)}}),[X,Y,h,I,ee]),ae=Object(q.a)((function(e){if(!X){var t=Y+1;if(t>=ee){if(!I)return;t=0}U.current="next",h&&h(t,e)}})),ne=Object(n.useRef)();Object(n.useImperativeHandle)(t,(function(){return{element:ne.current,prev:te,next:ae}}));var re=Object(q.a)((function(){!document.hidden&&function(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;var t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(ne.current)&&ae()})),oe="next"===W?"left":"right";Object(ht.a)((function(){i||(g&&g(Y,oe),O&&O(Y,oe))}),[Y]);var le=J+"-item-"+W,ce=J+"-item-"+oe,ie=Object(n.useCallback)((function(e){S(e),g&&g(Y,oe)}),[g,Y,oe]),se=Object(n.useCallback)((function(){G(!1),O&&O(Y,oe)}),[O,Y,oe]),ue=Object(n.useCallback)((function(e){if(E&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void te(e);case"ArrowRight":return e.preventDefault(),void ae(e)}x&&x(e)}),[E,x,te,ae]),fe=Object(n.useState)(!1),me=fe[0],ve=fe[1],be=Object(n.useCallback)((function(e){"hover"===w&&ve(!0),N&&N(e)}),[w,N]),pe=Object(n.useCallback)((function(e){ve(!1),C&&C(e)}),[C]),he=Object(n.useRef)(0),ge=Object(n.useRef)(0),Oe=Object(n.useState)(!1),ye=Oe[0],je=Oe[1],Ee=Object(gt.a)(),xe=Object(n.useCallback)((function(e){he.current=e.touches[0].clientX,ge.current=0,R&&je(!0),T&&T(e)}),[R,T]),we=Object(n.useCallback)((function(e){e.touches&&e.touches.length>1?ge.current=0:ge.current=e.touches[0].clientX-he.current,M&&M(e)}),[M]),Ne=Object(n.useCallback)((function(e){if(R){var t=ge.current;if(Math.abs(t)<=40)return;t>0?te(e):ae(e)}Ee.set((function(){je(!1)}),y||void 0),K&&K(e)}),[R,te,ae,Ee,y,K]),Ce=null!=y&&!me&&!ye&&!X,Pe=Object(n.useRef)();Object(n.useEffect)((function(){if(Ce)return Pe.current=window.setInterval(document.visibilityState?re:ae,y||void 0),function(){null!==Pe.current&&clearInterval(Pe.current)}}),[Ce,ae,y,re]);var ke=Object(n.useMemo)((function(){return m&&Array.from({length:ee},(function(e,t){return function(e){h&&h(t,e)}}))}),[m,ee,h]);return r.a.createElement(l,Object(d.a)({ref:ne},z,{onKeyDown:ue,onMouseOver:be,onMouseOut:pe,onTouchStart:xe,onTouchMove:we,onTouchEnd:Ne,className:v()(B,J,i&&"slide",s&&J+"-fade")}),m&&r.a.createElement("ol",{className:J+"-indicators"},jt(H,(function(e,t){return r.a.createElement("li",{key:t,className:t===Y?"active":void 0,onClick:ke?ke[t]:void 0})}))),r.a.createElement("div",{className:J+"-inner"},jt(H,(function(e,t){var a=t===Y;return i?r.a.createElement(k.e,{in:a,onEnter:a?ie:void 0,onEntered:a?se:void 0,addEndListener:P.a},(function(t){return r.a.cloneElement(e,{className:v()(e.props.className,a&&"entered"!==t&&le,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&ce)})})):r.a.cloneElement(e,{className:v()(e.props.className,a&&"active")})}))),u&&r.a.createElement(r.a.Fragment,null,(I||0!==b)&&r.a.createElement(de,{className:J+"-control-prev",onClick:te},D,A&&r.a.createElement("span",{className:"sr-only"},A)),(I||b!==ee-1)&&r.a.createElement(de,{className:J+"-control-next",onClick:ae},L,F&&r.a.createElement("span",{className:"sr-only"},F))))}));wt.displayName="Carousel",wt.propTypes=Et,wt.defaultProps=xt,wt.Caption=Ot,wt.Item=yt;var Nt=wt,Ct=a(53),Pt=a.n(Ct),kt=a(54),It=a.n(kt),Rt=a(55),St=a.n(Rt);var Tt=function(){return r.a.createElement(Nt,null,r.a.createElement(Nt.Item,null,r.a.createElement("img",{className:"",src:Pt.a,alt:"First slide"}),r.a.createElement(Nt.Caption,null)),r.a.createElement(Nt.Item,null,r.a.createElement("img",{className:"",src:It.a,alt:"second slide"}),r.a.createElement(Nt.Caption,null)),r.a.createElement(Nt.Item,null,r.a.createElement("img",{className:"",src:St.a,alt:"Third slide"}),r.a.createElement(Nt.Caption,null)))};console.log(Xe);var Mt=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null,r.a.createElement($e,null),r.a.createElement(pt,null),r.a.createElement(Tt,null),r.a.createElement(tt,null,r.a.createElement(Qe.c,null,r.a.createElement(Qe.a,{path:"/home",component:_e}),r.a.createElement(Qe.a,{path:"/street",component:Xe}),r.a.createElement(Qe.a,{path:"/travel",component:Ge})))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Mt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[63,1,2]]]);
//# sourceMappingURL=main.dc7911fd.chunk.js.map