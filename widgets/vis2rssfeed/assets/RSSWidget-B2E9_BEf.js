import{o as e}from"./rolldown-runtime-BCiCTKAo.js";import{M as t,P as n,j as r,n as i}from"./_virtual_mf___mfe_internal__vis2rssfeedWidgets__mf_owner__24892487459508__loadShare__shared-DtIxgQdF.js";import{n as a,t as o}from"./rss-QcwCy3xb.js";import{n as s,r as c,t as l}from"./ejs.min-DnqkSKY3.js";r(),n();var u=e(l(),1),d=class e extends a{static getWidgetInfo(){return{id:`tplRSSWidget`,visSet:`rssfeed`,visSetLabel:`setlabel`,visName:`RSSFeed Widget`,visAttrs:[{name:`common`,fields:[{name:`oid`,type:`id`,label:`widget_oid`},{name:`template`,type:`custom`,label:`widget_template`,default:`
<!--
 available variables:
 widgetid      ->  id of the widget 
 rss.meta      ->  all meta informations of an feed, details see Meta Helper widget 
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
<p><%- rss.meta.title %> </p>
<% rss.articles.forEach(function(item){ %>
    <div class="article">
    <p><small><%- vis.formatDate(item.pubdate || item.date, "TT.MM.JJJJ SS:mm") %></small></p>    
    <h3><%- item.title %></h3>
    <p><%- item.description %></p>
    <div style="clear:both;"></div>
</div>
<% }); %> 
        `,component:(e,t,n,r)=>i(c,{field:e,data:t,onDataChange:n,props:r})},{name:`max`,type:`number`,default:5,min:1,max:9999,step:1,label:`widget_maxarticles`},{name:`filter`,type:`text`,default:``,label:`widget_filter`}]}],visDefaultStyle:{width:300,height:300},visPrev:``}}propertiesUpdate(){}componentDidMount(){super.componentDidMount(),this.propertiesUpdate()}getWidgetInfo(){return e.getWidgetInfo()}onRxDataChanged(){this.propertiesUpdate()}onRxStyleChanged(){}onStateUpdated(e,t){}checkHighlite(e,t,n){return n=n===void 0?`;`:n,t.split(n).reduce((t,n)=>n===``?t:t||e.toLowerCase().indexOf(n.toLowerCase())>=0,!1)}escapeHTML(e){let t=document.createElement(`textarea`);return t.textContent=e,t.innerHTML}renderWidgetBody(e){super.renderWidgetBody(e);let t=JSON.parse(this.getPropertyValue(`oid`)||JSON.stringify(o)),n=e.widget.data,r=n.template,a=n.filter?n.filter:``,c=n.max?n.max:999;c=c>0?c:1,t&&t.articles&&t.articles.length>c&&(t.articles=t.articles.slice(0,c)),a!==``&&(t.articles=t.articles.filter(e=>this.checkHighlite(e.title+e.description+e.categories.toString(),a)));let l=``;try{l=t.meta===void 0?u.default.render(`
        No Object ID set
        `,{}):u.default.render(r,{rss:t,widgetid:e.id,style:e.style})}catch(e){l=this.escapeHTML(e instanceof Error?e.message:String(e)).replace(/(?:\r\n|\r|\n)/g,`<br>`),l=l.replace(/ /gm,`&nbsp;`),l=`<code style="color:red;">${l}</code>`}return this.renderScrollableContent(i(s,{html:l}))}};d.propTypes={systemConfig:t.object,socket:t.object,themeType:t.string,style:t.object,data:t.object};export{d as default};