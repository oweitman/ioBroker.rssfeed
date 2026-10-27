import{o as e}from"./rolldown-runtime-BCiCTKAo.js";import{M as t,P as n,j as r,n as i}from"./_virtual_mf___mfe_internal__vis2rssfeedWidgets__mf_owner__24892487459508__loadShare__shared-DtIxgQdF.js";import{n as a,t as o}from"./rss-QcwCy3xb.js";import{n as s,r as c,t as l}from"./ejs.min-DnqkSKY3.js";r(),n();var u=e(l(),1),d=class e extends a{static getWidgetInfo(){return{id:`tplRSSMultiWidget`,visSet:`rssfeed`,visName:`RSSFeed Multi Widget`,visAttrs:[{name:`common`,fields:[{name:`feedcount`,type:`number`,default:1,min:1,max:Number.MAX_VALUE,step:1,label:`multi_feedcount`,onChange:async(e,t,n)=>{let{count:r}=t;for(let e=0;e<=r;e++)t[`g_feeds-${e}`]=!0;n(t)}},{name:`template`,type:`custom`,label:`widget_template`,default:`
<!--
 available variables:
 widgetid      ->  id of the widget 
 rss.articles  ->  all articles as array, details see Article Helper widget 
 style         ->  all style settings for the widget
 
 all variables are read only
-->

<style> 
#<%- widgetid %> img {
    width: 100%;
    max-width: 100%;
    height: auto;
    box-sizing: border-box;
}
#<%- widgetid %> img.rssfeed  {
    width: auto;
    height: auto;
}
</style> 
<% rss.articles.forEach(function(item){ %>
    <p><%- item.meta_name || item.meta_title || '' %></p>
    <p><small><%- vis.formatDate(item.pubdate || item.date, "TT.MM.JJJJ SS:mm") %></small></p>
    <h3><%- item.title %></h3>
    <p><%- item.description %></p>
    <div style="clear:both;" />
<% }); %>
                `,component:(e,t,n,r)=>i(c,{field:e,data:t,onDataChange:n,props:r})},{name:`dpcount`,type:`number`,default:1,min:1,max:Number.MAX_VALUE,step:1,label:`multi_dpcount`,onChange:async(e,t,n)=>{let{dpcount:r}=t;for(let e=0;e<=r;e++)t[`g_datapoints-${e}`]=!0;n(t)}}]},{name:`feeds`,label:`multi_feedsgroup`,indexFrom:1,indexTo:`feedcount`,onChange:async(e,t,n)=>{n(t)},fields:[{name:`feed-oid`,type:`id`,label:`multi_oid`},{name:`feed-name`,type:`text`,label:`multi_name`},{name:`feed-maxarticles`,type:`number`,default:10,min:1,max:Number.MAX_VALUE,step:1,label:`multi_maxarticles`},{name:`feed-filter`,type:`text`,label:`multi_filter`}]},{name:`datapoints`,label:`multi_datapointsgroup`,indexFrom:1,indexTo:`dpcount`,onChange:async(e,t,n)=>{n(t)},fields:[{name:`datapoint_oid`,label:`multi_datapoints_oid`,type:`text`}]}],visDefaultStyle:{width:300,height:260},visPrev:``}}propertiesUpdate(){}componentDidMount(){super.componentDidMount(),this.propertiesUpdate()}getWidgetInfo(){return e.getWidgetInfo()}onRxDataChanged(){this.propertiesUpdate()}onRxStyleChanged(){}onStateUpdated(e,t){}checkFilter(e,t,n){return n=n===void 0?`;`:n,t.split(n).reduce((t,n)=>n===``?t:t||e.toLowerCase().indexOf(n.toLowerCase())>=0,!1)}escapeHTML(e){let t=document.createElement(`textarea`);return t.textContent=e,t.innerHTML}renderWidgetBody(e){super.renderWidgetBody(e);let t=e.widget.data.template,n=Object.keys(this.state.data).filter(e=>/g_feeds-(\d+)/gm.test(e)),r=[];r=n.length>0?n.reduce((e,t)=>{var n;if(t===`g_feeds-0`)return e;let r=(n=/g_feeds-(\d+)/.exec(t))==null?void 0:n[1];if(!r)return e;let i=JSON.parse(this.state.values[`${this.state.data[`feed-oid${r}`]}.val`]||JSON.stringify(o));if(!Object.prototype.hasOwnProperty.call(i,`articles`))return e;let a=this.state.data[`feed-maxarticles${r}`]||999,s=this.state.data[`feed-filter${r}`],c=this.state.data[`feed-name${r}`];return s&&(i.articles=i.articles.filter(e=>this.checkFilter(e.title+e.description+e.categories.toString(),s))),i!=null&&i.articles&&i.articles.length>a&&(i.articles=i.articles.slice(0,a)),i.articles=i.articles.map(e=>({title:e.title,description:e.description,categories:e.categories,date:e.date,link:e.link,meta_description:i.meta.description,meta_name:c,meta_title:i.meta.title})),e.concat(i.articles)},[]):JSON.parse(JSON.stringify(o)).articles,r.sort((e,t)=>new Date(t.date).getTime()-new Date(e.date).getTime());let a=``;try{a=r.length===0?u.default.render(`
        No Object ID set
        `,{}):u.default.render(t,{rss:{articles:r},widgetid:e.id,style:e.style})}catch(e){a=this.escapeHTML(e instanceof Error?e.message:String(e)).replace(/(?:\r\n|\r|\n)/g,`<br>`),a=a.replace(/ /gm,`&nbsp;`),a=`<code style="color:red;">${a}</code>`}return this.renderScrollableContent(i(s,{style:{width:`100%`,height:`100%`,position:`relative`},html:a}))}};d.propTypes={systemConfig:t.object,socket:t.object,themeType:t.string,style:t.object,data:t.object};export{d as default};