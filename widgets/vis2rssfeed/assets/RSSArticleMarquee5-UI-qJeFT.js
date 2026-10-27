import{a as e,o as t,t as n}from"./rolldown-runtime-BCiCTKAo.js";import{A as r,bt as i,gt as a,j as o,n as s,ot as c,r as l,t as u}from"./_virtual_mf___mfe_internal__vis2rssfeedWidgets__mf_owner__24892487459508__loadShare__shared-DtIxgQdF.js";import{n as d,t as f}from"./rss-QcwCy3xb.js";var p=n((t=>{function n(e){if(!e||typeof window>`u`)return;let t=document.createElement(`style`);return t.setAttribute(`type`,`text/css`),t.innerHTML=e,document.head.appendChild(t),e}Object.defineProperty(t,"__esModule",{value:!0});var i=(o(),e(r));function a(e){return e&&typeof e==`object`&&`default`in e?e:{default:e}}var s=a(i);n(`.rfm-marquee-container {
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  position: relative;
  width: var(--width);
  transform: var(--transform);
}
.rfm-marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.rfm-marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.rfm-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.rfm-overlay::before, .rfm-overlay::after {
  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
  pointer-events: none;
  touch-action: none;
}
.rfm-overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.rfm-overlay::before {
  left: 0;
  top: 0;
}

.rfm-marquee {
  flex: 0 0 auto;
  min-width: var(--min-width);
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.rfm-initial-child-container {
  flex: 0 0 auto;
  display: flex;
  min-width: auto;
  flex-direction: row;
  align-items: center;
}

.rfm-child {
  transform: var(--transform);
}`),t.default=i.forwardRef(function({style:e={},className:t=``,autoFill:n=!1,play:r=!0,pauseOnHover:a=!1,pauseOnClick:o=!1,direction:c=`left`,speed:l=50,delay:u=0,loop:d=0,gradient:f=!1,gradientColor:p=`white`,gradientWidth:m=200,onFinish:h,onCycleComplete:g,onMount:_,children:v},y){let[b,x]=i.useState(0),[S,C]=i.useState(0),[w,T]=i.useState(1),[E,D]=i.useState(!1),O=i.useRef(null),k=y||O,A=i.useRef(null),j=i.useCallback(()=>{if(A.current&&k.current){let e=k.current.getBoundingClientRect(),t=A.current.getBoundingClientRect(),r=e.width,i=t.width;(c===`up`||c===`down`)&&(r=e.height,i=t.height),T(n&&r&&i&&i<r?Math.ceil(r/i):1),x(r),C(i)}},[n,k,c]);i.useEffect(()=>{if(E&&(j(),A.current&&k.current)){let e=new ResizeObserver(()=>j());return e.observe(k.current),e.observe(A.current),()=>{e&&e.disconnect()}}},[j,k,E]),i.useEffect(()=>{j()},[j,v]),i.useEffect(()=>{D(!0)},[]),i.useEffect(()=>{typeof _==`function`&&_()},[]);let M=i.useMemo(()=>n?S*w/l:S<b?b/l:S/l,[n,b,S,w,l]),N=i.useMemo(()=>Object.assign(Object.assign({},e),{"--pause-on-hover":!r||a?`paused`:`running`,"--pause-on-click":!r||a&&!o||o?`paused`:`running`,"--width":c===`up`||c===`down`?`100vh`:`100%`,"--transform":c===`up`?`rotate(-90deg)`:c===`down`?`rotate(90deg)`:`none`}),[e,r,a,o,c]),P=i.useMemo(()=>({"--gradient-color":p,"--gradient-width":typeof m==`number`?`${m}px`:m}),[p,m]),F=i.useMemo(()=>({"--play":r?`running`:`paused`,"--direction":c===`left`?`normal`:`reverse`,"--duration":`${M}s`,"--delay":`${u}s`,"--iteration-count":d?`${d}`:`infinite`,"--min-width":n?`auto`:`100%`}),[r,c,M,u,d,n]),I=i.useMemo(()=>({"--transform":c===`up`?`rotate(90deg)`:c===`down`?`rotate(-90deg)`:`none`}),[c]),L=i.useCallback(e=>[...Array(Number.isFinite(e)&&e>=0?e:0)].map((e,t)=>s.default.createElement(i.Fragment,{key:t},i.Children.map(v,e=>s.default.createElement(`div`,{style:I,className:`rfm-child`},e)))),[I,v]);return E?s.default.createElement(`div`,{ref:k,style:N,className:`rfm-marquee-container `+t},f&&s.default.createElement(`div`,{style:P,className:`rfm-overlay`}),s.default.createElement(`div`,{className:`rfm-marquee`,style:F,onAnimationIteration:g,onAnimationEnd:h},s.default.createElement(`div`,{className:`rfm-initial-child-container`,ref:A},i.Children.map(v,e=>s.default.createElement(`div`,{style:I,className:`rfm-child`},e))),L(w-1)),s.default.createElement(`div`,{className:`rfm-marquee`,style:F},L(w))):null})}));o();var m=t(p(),1),h=m.default.default||m.default,g=window.vis,_=class e extends d{constructor(e){super(e),Object.assign(this.state,{showDialog:!1,iframeSrc:``})}static getWidgetInfo(){return{id:`tplRSSArticleMarquee5`,visSet:`rssfeed`,visName:`RSSFeed Article Marquee v5`,visAttrs:[{name:`common`,fields:[{name:`count`,type:`number`,default:1,min:1,max:Number.MAX_VALUE,step:1,label:`marquee_count`,onChange:async(e,t,n)=>{let{count:r}=t;for(let e=0;e<=r;e++)t[`g_feeds-${e}`]=!0;n(t)}},{name:`speed`,type:`number`,default:200,min:1,max:Number.MAX_VALUE,step:1,label:`marquee_speed`},{name:`divider`,type:`text`,default:`+++`,label:`marquee_divider`},{name:`pauseonhover`,type:`checkbox`,default:!0,label:`marquee_pauseonhover`},{name:`opentype`,type:`select`,options:[`none`,`link`,`popup`],default:`none`,label:`marquee_opentype`},{name:`withtime`,type:`checkbox`,default:!1,label:`marquee_withtime`},{name:`withdate`,type:`checkbox`,default:!1,label:`marquee_withdate`},{name:`withyear`,type:`checkbox`,default:!1,label:`marquee_withyear`},{name:`withname`,type:`checkbox`,default:!1,label:`marquee_withname`}]},{name:`feeds`,label:`marquee_feedsgroup`,indexFrom:1,indexTo:`count`,onChange:async(e,t,n)=>{n(t)},fields:[{name:`feed-oid`,type:`id`,label:`marquee_oid`},{name:`feed-name`,type:`text`,label:`marquee_name`},{name:`feed-maxarticles`,type:`number`,default:1,min:1,max:Number.MAX_VALUE,step:1,label:`marquee_maxarticles`},{name:`feed-filter`,type:`text`,label:`marquee_filter`}]}],visDefaultStyle:{width:300,height:26},visPrev:``}}propertiesUpdate(){}componentDidMount(){super.componentDidMount(),this.propertiesUpdate()}getWidgetInfo(){return e.getWidgetInfo()}onRxDataChanged(){this.propertiesUpdate()}onRxStyleChanged(){}onStateUpdated(e,t){}checkFilter(e,t,n){return n=n===void 0?`;`:n,t.split(n).reduce((t,n)=>n===``?t:t||e.toLowerCase().indexOf(n.toLowerCase())>=0,!1)}renderTitle(e,t){let n=[];return e.withDate&&n.push(g.formatDate(t.pubdate||t.date,`DD.MM.`)),e.withYear&&n.push(g.formatDate(t.pubdate||t.date,`YY`)),n=[n.join(``)],e.withTime&&n.push(g.formatDate(t.pubdate||t.date,`hh:mm`)),` ${e.divider} ${n.join(` `)} ${e.withName?`${t.meta_name||t.meta_title}: `:``} ${t.title} `}handleClick(e){this.setState({showDialog:!0}),this.setState({iframeSrc:e})}handleClose(){this.setState({showDialog:!1}),this.setState({iframeSrc:``})}renderWidgetBody(e){super.renderWidgetBody(e);let t={speed:this.state.rxData.speed||200,divider:this.state.rxData.divider||``,pauseonhover:this.state.rxData.pauseonhover?!0:this.state.rxData.pauseonhover,opentype:this.state.rxData.opentype,withTime:this.state.rxData.withtime?this.state.rxData.withtime:!1,withDate:this.state.rxData.withdate?this.state.rxData.withdate:!1,withYear:this.state.rxData.withyear?this.state.rxData.withyear:!1,withName:this.state.rxData.withname?this.state.rxData.withname:!1},n=Object.keys(this.state.data).filter(e=>/g_feeds-(\d+)/gm.test(e));n.length===0&&n.push(`g_feeds-1`);let r=n.reduce((e,t)=>{var n;if(t===`g_feeds-0`)return e;let r=(n=/g_feeds-(\d+)/.exec(t))==null?void 0:n[1];if(!r)return e;let i=JSON.parse(this.state.values[`${this.state.data[`feed-oid${r}`]}.val`]||JSON.stringify(f));if(!Object.prototype.hasOwnProperty.call(i,`articles`))return e;let a=this.state.data[`feed-maxarticles${r}`]||5,o=this.state.data[`feed-filter${r}`],s=this.state.data[`feed-name${r}`];return i&&i.articles&&i.articles.length>a&&(i.articles=i.articles.slice(0,a)),i.articles=i.articles.map(e=>({title:e.title,description:e.description,categories:e.categories,date:e.date,link:e.link,meta_description:i.meta.description,meta_name:s,meta_title:i.meta.title,key:t+e.title})),o&&(i.articles=i.articles.filter(e=>this.checkFilter(e.title+e.description+e.categories.toString(),o))),e.concat(i.articles)},[]);if(r.sort((e,t)=>new Date(t.date).getTime()-new Date(e.date).getTime()),t.opentype===`link`)return this.renderScrollableContent(s(h,{pauseOnHover:t.pauseonhover,speed:t.speed,children:s(`div`,{children:r.map(e=>s(i,{href:e.link,underline:`hover`,color:`inherit`,target:`_blank`,children:this.renderTitle(t,e)},e.title))})}));if(t.opentype===`popup`){let e=`dialog ${this.props.id}`,n=`iframe ${this.props.id}`;return this.renderScrollableContent(l(u,{children:[s(h,{pauseOnHover:t.pauseonhover,speed:t.speed,children:s(`div`,{children:r.map(e=>s(`span`,{style:{cursor:`pointer`},onClick:()=>{this.handleClick(e.link)},children:this.renderTitle(t,e)},e.key))})}),l(c,{className:e,PaperProps:{sx:{width:`90%`,height:`90%`,overflow:`hidden`,maxHeight:`inherit`,maxWidth:`inherit`}},open:this.state.showDialog,onClose:()=>{},children:[s(a,{"aria-label":`close`,onClick:()=>this.handleClose(),sx:e=>({position:`absolute`,right:8,top:8,color:`black`,backgroundColor:`red`})}),s(`iframe`,{className:n,src:this.state.iframeSrc,title:`popup`,style:{width:`100%`,height:`100%`}})]})]}))}return this.renderScrollableContent(s(h,{pauseOnHover:t.pauseonhover,speed:t.speed,children:s(`div`,{children:r.map(e=>s(`span`,{children:this.renderTitle(t,e)},e.key))})}))}};export{_ as default};