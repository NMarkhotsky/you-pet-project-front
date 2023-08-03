import{G as E,r as P,H as _,s as j,j as f,I as k}from"./index-682bfae7.js";var I={},h={linear:function(e,n,a,r){var t=a-n;return t*e/r+n},easeInQuad:function(e,n,a,r){var t=a-n;return t*(e/=r)*e+n},easeOutQuad:function(e,n,a,r){var t=a-n;return-t*(e/=r)*(e-2)+n},easeInOutQuad:function(e,n,a,r){var t=a-n;return(e/=r/2)<1?t/2*e*e+n:-t/2*(--e*(e-2)-1)+n},easeInCubic:function(e,n,a,r){var t=a-n;return t*(e/=r)*e*e+n},easeOutCubic:function(e,n,a,r){var t=a-n;return t*((e=e/r-1)*e*e+1)+n},easeInOutCubic:function(e,n,a,r){var t=a-n;return(e/=r/2)<1?t/2*e*e*e+n:t/2*((e-=2)*e*e+2)+n},easeInQuart:function(e,n,a,r){var t=a-n;return t*(e/=r)*e*e*e+n},easeOutQuart:function(e,n,a,r){var t=a-n;return-t*((e=e/r-1)*e*e*e-1)+n},easeInOutQuart:function(e,n,a,r){var t=a-n;return(e/=r/2)<1?t/2*e*e*e*e+n:-t/2*((e-=2)*e*e*e-2)+n},easeInQuint:function(e,n,a,r){var t=a-n;return t*(e/=r)*e*e*e*e+n},easeOutQuint:function(e,n,a,r){var t=a-n;return t*((e=e/r-1)*e*e*e*e+1)+n},easeInOutQuint:function(e,n,a,r){var t=a-n;return(e/=r/2)<1?t/2*e*e*e*e*e+n:t/2*((e-=2)*e*e*e*e+2)+n},easeInSine:function(e,n,a,r){var t=a-n;return-t*Math.cos(e/r*(Math.PI/2))+t+n},easeOutSine:function(e,n,a,r){var t=a-n;return t*Math.sin(e/r*(Math.PI/2))+n},easeInOutSine:function(e,n,a,r){var t=a-n;return-t/2*(Math.cos(Math.PI*e/r)-1)+n},easeInExpo:function(e,n,a,r){var t=a-n;return e==0?n:t*Math.pow(2,10*(e/r-1))+n},easeOutExpo:function(e,n,a,r){var t=a-n;return e==r?n+t:t*(-Math.pow(2,-10*e/r)+1)+n},easeInOutExpo:function(e,n,a,r){var t=a-n;return e===0?n:e===r?n+t:(e/=r/2)<1?t/2*Math.pow(2,10*(e-1))+n:t/2*(-Math.pow(2,-10*--e)+2)+n},easeInCirc:function(e,n,a,r){var t=a-n;return-t*(Math.sqrt(1-(e/=r)*e)-1)+n},easeOutCirc:function(e,n,a,r){var t=a-n;return t*Math.sqrt(1-(e=e/r-1)*e)+n},easeInOutCirc:function(e,n,a,r){var t=a-n;return(e/=r/2)<1?-t/2*(Math.sqrt(1-e*e)-1)+n:t/2*(Math.sqrt(1-(e-=2)*e)+1)+n},easeInElastic:function(e,n,a,r){var t=a-n,i,o,s;return s=1.70158,o=0,i=t,e===0?n:(e/=r)===1?n+t:(o||(o=r*.3),i<Math.abs(t)?(i=t,s=o/4):s=o/(2*Math.PI)*Math.asin(t/i),-(i*Math.pow(2,10*(e-=1))*Math.sin((e*r-s)*(2*Math.PI)/o))+n)},easeOutElastic:function(e,n,a,r){var t=a-n,i,o,s;return s=1.70158,o=0,i=t,e===0?n:(e/=r)===1?n+t:(o||(o=r*.3),i<Math.abs(t)?(i=t,s=o/4):s=o/(2*Math.PI)*Math.asin(t/i),i*Math.pow(2,-10*e)*Math.sin((e*r-s)*(2*Math.PI)/o)+t+n)},easeInOutElastic:function(e,n,a,r){var t=a-n,i,o,s;return s=1.70158,o=0,i=t,e===0?n:(e/=r/2)===2?n+t:(o||(o=r*(.3*1.5)),i<Math.abs(t)?(i=t,s=o/4):s=o/(2*Math.PI)*Math.asin(t/i),e<1?-.5*(i*Math.pow(2,10*(e-=1))*Math.sin((e*r-s)*(2*Math.PI)/o))+n:i*Math.pow(2,-10*(e-=1))*Math.sin((e*r-s)*(2*Math.PI)/o)*.5+t+n)},easeInBack:function(e,n,a,r,t){var i=a-n;return t===void 0&&(t=1.70158),i*(e/=r)*e*((t+1)*e-t)+n},easeOutBack:function(e,n,a,r,t){var i=a-n;return t===void 0&&(t=1.70158),i*((e=e/r-1)*e*((t+1)*e+t)+1)+n},easeInOutBack:function(e,n,a,r,t){var i=a-n;return t===void 0&&(t=1.70158),(e/=r/2)<1?i/2*(e*e*(((t*=1.525)+1)*e-t))+n:i/2*((e-=2)*e*(((t*=1.525)+1)*e+t)+2)+n},easeInBounce:function(e,n,a,r){var t=a-n,i;return i=h.easeOutBounce(r-e,0,t,r),t-i+n},easeOutBounce:function(e,n,a,r){var t=a-n;return(e/=r)<1/2.75?t*(7.5625*e*e)+n:e<2/2.75?t*(7.5625*(e-=1.5/2.75)*e+.75)+n:e<2.5/2.75?t*(7.5625*(e-=2.25/2.75)*e+.9375)+n:t*(7.5625*(e-=2.625/2.75)*e+.984375)+n},easeInOutBounce:function(e,n,a,r){var t=a-n,i;return e<r/2?(i=h.easeInBounce(e*2,0,t,r),i*.5+n):(i=h.easeOutBounce(e*2-r,0,t,r),i*.5+t*.5+n)}},x=h,u=typeof window<"u"?window:{screen:{},navigator:{}},l=(u.matchMedia||function(){return{matches:!1}}).bind(u),g=!1,T={get passive(){return g=!0}},S=function(){};u.addEventListener&&u.addEventListener("p",S,T);u.removeEventListener&&u.removeEventListener("p",S,!1);var C=g,d="ontouchstart"in u,Q="TouchEvent"in u,B=d||Q&&l("(any-pointer: coarse)").matches;(u.navigator.maxTouchPoints||0)>0;var M=u.navigator.userAgent||"",F=l("(pointer: coarse)").matches&&/iPad|Macintosh/.test(M)&&Math.min(u.screen.width||0,u.screen.height||0)>=768;(l("(pointer: coarse)").matches||!l("(pointer: fine)").matches&&d)&&/Windows.*Firefox/.test(M);l("(any-pointer: fine)").matches||l("(any-hover: hover)").matches;const b=Object.freeze(Object.defineProperty({__proto__:null,supportsPassiveEvents:C},Symbol.toStringTag,{value:"Module"})),q=E(b);/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var O=Object.getOwnPropertySymbols,U=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;function L(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function H(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var n={},a=0;a<10;a++)n["_"+String.fromCharCode(a)]=a;var r=Object.getOwnPropertyNames(n).map(function(i){return n[i]});if(r.join("")!=="0123456789")return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach(function(i){t[i]=i}),Object.keys(Object.assign({},t)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var D=H()?Object.assign:function(e,n){for(var a,r=L(e),t,i=1;i<arguments.length;i++){a=Object(arguments[i]);for(var o in a)U.call(a,o)&&(r[o]=a[o]);if(O){t=O(a);for(var s=0;s<t.length;s++)A.call(a,t[s])&&(r[t[s]]=a[t[s]])}}return r};Object.defineProperty(I,"__esModule",{value:!0});var N=function(){function e(n,a){for(var r=0;r<a.length;r++){var t=a[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(n,a,r){return a&&e(n.prototype,a),r&&e(n,r),n}}(),R=P,v=p(R),W=_,c=p(W),Y=x,V=p(Y),m=q,$=D,y=p($);function p(e){return e&&e.__esModule?e:{default:e}}function G(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function z(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n&&(typeof n=="object"||typeof n=="function")?n:e}function J(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var w=function(e){J(n,e);function n(a){G(this,n);var r=z(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,a));return r.state={show:!1},r.data={startValue:0,currentTime:0,startTime:null,rafId:null},r.handleClick=r.handleClick.bind(r),r.handleScroll=r.handleScroll.bind(r),r.scrollStep=r.scrollStep.bind(r),r.stopScrolling=r.stopScrolling.bind(r),r}return N(n,[{key:"shouldComponentUpdate",value:function(r,t){return t.show!==this.state.show}},{key:"componentDidMount",value:function(){this.handleScroll(),window.addEventListener("scroll",this.handleScroll),window.addEventListener("wheel",this.stopScrolling,m.supportsPassiveEvents?{passive:!0}:!1),window.addEventListener("touchstart",this.stopScrolling,m.supportsPassiveEvents?{passive:!0}:!1)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("wheel",this.stopScrolling,!1),window.removeEventListener("touchstart",this.stopScrolling,!1)}},{key:"notifyOnShow",value:function(){this.props.onShow&&typeof this.props.onShow=="function"&&this.props.onShow()}},{key:"notifyOnHide",value:function(){this.props.onHide&&typeof this.props.onHide=="function"&&this.props.onHide()}},{key:"handleScroll",value:function(){window.pageYOffset>this.props.showUnder?this.state.show||(this.setState({show:!0}),this.notifyOnShow()):this.state.show&&(this.setState({show:!1}),this.notifyOnHide())}},{key:"handleClick",value:function(){this.stopScrolling(),this.data.startValue=window.pageYOffset,this.data.currentTime=0,this.data.startTime=null,this.data.rafId=window.requestAnimationFrame(this.scrollStep)}},{key:"scrollStep",value:function(r){this.data.startTime||(this.data.startTime=r),this.data.currentTime=r-this.data.startTime;var t=V.default[this.props.easing](this.data.currentTime,this.data.startValue,this.props.topPosition,this.props.duration);window.pageYOffset<=this.props.topPosition?this.stopScrolling():(window.scrollTo(window.pageYOffset,t),this.data.rafId=window.requestAnimationFrame(this.scrollStep))}},{key:"stopScrolling",value:function(){window.cancelAnimationFrame(this.data.rafId)}},{key:"render",value:function(){var r=this.props.style,t=v.default.createElement("div",{style:r,onClick:this.handleClick},this.props.children),i=(0,y.default)({},n.defaultProps.style);return i=(0,y.default)(i,r),i.opacity=this.state.show?1:0,i.visibility=this.state.show?"visible":"hidden",i.transitionProperty="opacity, visibility",v.default.cloneElement(t,{style:i})}}]),n}(v.default.Component),K=I.default=w;w.defaultProps={duration:250,easing:"easeOutCubic",style:{position:"fixed",bottom:50,right:30,cursor:"pointer",transitionDuration:"0.2s",transitionTimingFunction:"linear",transitionDelay:"0s"},topPosition:0};w.propTypes={topPosition:c.default.number,showUnder:c.default.number.isRequired,easing:c.default.oneOf(["linear","easeInQuad","easeOutQuad","easeInOutQuad","easeInCubic","easeOutCubic","easeInOutCubic","easeInQuart","easeOutQuart","easeInOutQuart","easeInQuint","easeOutQuint","easeInOutQuint","easeInSine","easeOutSine","easeInOutSine","easeInExpo","easeOutExpo","easeInOutExpo","easeInCirc","easeOutCirc","easeInOutCirc","easeInElastic","easeOutElastic","easeInOutElastic","easeInBack","easeOutBack","easeInOutBack","easeInBounce","easeOutBounce","easeInOutBounce"]),duration:c.default.number,style:c.default.object,onShow:c.default.func,onHide:c.default.func};const X=j.div`
  background: ${e=>e.theme.colors.blueGradient};
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(90deg);
`,ee=()=>f.jsx("div",{children:f.jsx(K,{showUnder:160,children:f.jsx(X,{children:f.jsx(k,{iconName:"icon-arrow-left",width:"24px",height:"24px",stroke:"#FFFFFF"})})})});export{ee as S};