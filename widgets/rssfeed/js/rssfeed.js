/*
    ioBroker.vis rssfeed Widget-Set

    version: "0.0.1"

    Copyright 2020 oweitman oweitman@gmx.de
*/
'use strict';

// add translations for edit mode
$.get( 'adapter/rssfeed/words.js', function(script) {
    let translation = script.substring(script.indexOf('{'), script.length);
    translation = translation.substring(0, translation.lastIndexOf(';'));
    $.extend(systemDictionary, JSON.parse(translation));
});

// this code can be placed directly in rssfeed.html
vis.binds['rssfeed'] = {
    version: '0.0.1',
    showVersion: function () {
        if (vis.binds['rssfeed'].version) {
            console.log('Version rssfeed: ' + vis.binds['rssfeed'].version);
            vis.binds['rssfeed'].version = null;
        }
    },
	
    rssfeedwidget: {
        createWidget: function (widgetID, view, data, style) {
            
            var $div = $('#' + widgetID);
            // if nothing found => wait
            if (!$div.length) {
                return setTimeout(function () {
                    vis.binds["rssfeed"].rssfeedwidget.createWidget(widgetID, view, data, style);
                }, 100);
            }
            var rss  = data.rss_oid ? JSON.parse(vis.states.attr(data.rss_oid + '.val')) : {};            
            var template  = data.template ? data.template : '';
			var maxarticles = data.maxarticles ? data.maxarticles : 999;
			maxarticles = maxarticles > 0 ? maxarticles : 1;
			if (rss && rss.articles && rss.articles.length > maxarticles) rss.articles = rss.articles.slice(0,maxarticles);
            
            function onChange(e, newVal, oldVal) {
                if (newVal) vis.binds["rssfeed"].rssfeedwidget.createWidget(widgetID, view, data, style);
            }

            if (data.rss_oid ) {
                if (1 || !vis.editMode) {
                    vis.binds["rssfeed"].bindStates($div,[data.rss_oid],onChange);                    
                }
            }
			
			var text = ejs.render(template, rss);            
            $('#' + widgetID).html(text);
        },    
    },
    metahelper: {
        createWidget: function (widgetID, view, data, style) {
            
            var $div = $('#' + widgetID);
            // if nothing found => wait
            if (!$div.length) {
                return setTimeout(function () {
                    vis.binds["rssfeed"].metahelper.createWidget(widgetID, view, data, style);
                }, 100);
            }
            var rss  = data.rss_oid ? JSON.parse(vis.states.attr(data.rss_oid + '.val')) : {};
            
            function onChange(e, newVal, oldVal) {
                if (newVal) vis.binds["rssfeed"].metahelper.createWidget(widgetID, view, data, style);
            }

            if (data.rss_oid ) {
                if (1 || !vis.editMode) {
                    vis.binds["rssfeed"].bindStates($div,[data.rss_oid],onChange);                    
                }
            }
			
			var text = '';

            text += '<style> \n';
            text += '#'+widgetID + ' .rssfeed th {\n';
            text += '   white-space: nowrap;\n';
            text += '   text-align: left;\n';
            text += '   vertical-align: top;\n';			
            text += '} \n';
            text += '</style> \n';
			
			text += '<table class="rssfeed attributes">';
			text += '<tr><th>meta.title</th><td>'+rss.meta.title+'</td></tr>';
			text += '<tr><th>meta.description</th><td>'+rss.meta.description+'</td></tr>';
			text += '<tr><th>meta.link</th><td>'+rss.meta.link+'</td></tr>';
			text += '<tr><th>meta.xmlurl</th><td>'+rss.meta.xmlurl+'</td></tr>';
			text += '<tr><th>meta.date</th><td>'+rss.meta.date+'</td></tr>';
			text += '<tr><th>meta.pubdate</th><td>'+rss.meta.pubdate+'</td></tr>';
			text += '<tr><th>meta.author</th><td>'+rss.meta.author+'</td></tr>';
			text += '<tr><th>meta.language</th><td>'+rss.meta.language+'</td></tr>';
			text += '<tr><th>meta.image.url</th><td>'+rss.meta.image.url+'</td></tr>';
			text += '<tr><th>meta.image.title</th><td>'+rss.meta.image.title+'</td></tr>';
			text += '<tr><th>meta.favicon</th><td>'+rss.meta.favicon+'</td></tr>';
			text += '<tr><th>meta.copyright</th><td>'+rss.meta.copyright+'</td></tr>';
			text += '<tr><th>meta.generator</th><td>'+rss.meta.generator+'</td></tr>';
			text += '<tr><th>meta.categories</th><td>'+rss.meta.categories.toString()+'</td></tr>';
			text += '</table>';
			
            $('#' + widgetID).html(text);
        },    
    },
    articlehelper: {
        createWidget: function (widgetID, view, data, style) {
            
            var $div = $('#' + widgetID);
            // if nothing found => wait
            if (!$div.length) {
                return setTimeout(function () {
                    vis.binds["rssfeed"].articlehelper.createWidget(widgetID, view, data, style);
                }, 100);
            }
            var rss  = data.rss_oid ? JSON.parse(vis.states.attr(data.rss_oid + '.val')) : {};
			var prefix = data.prefix ? data.prefix : 'item';
			var article = data.article ? data.article : 1;
            article = article > 0 ? article : 1;
						
            function onChange(e, newVal, oldVal) {
                if (newVal) vis.binds["rssfeed"].articlehelper.createWidget(widgetID, view, data, style);
            }

            if (data.rss_oid ) {
                if (1 || !vis.editMode) {
                    vis.binds["rssfeed"].bindStates($div,[data.rss_oid],onChange);                    
                }
            }
			
			
			
			var item = rss.articles[article-1];
			
			var text = '';
			
			if (item) {

				text += '<style> \n';
				text += '#'+widgetID + ' .rssfeed th {\n';
				text += '   white-space: nowrap;\n';
				text += '   text-align: left;\n';
				text += '   vertical-align: top;\n';
				text += '} \n';
				text += '</style> \n';
				
				text += '<table class="rssfeed attributes">';
				text += '<tr><th>'+prefix+'.title</th><td>'+item.title+'</td></tr>';
				text += '<tr><th>'+prefix+'.description</th><td>'+item.description+'</td></tr>';
				text += '<tr><th>'+prefix+'.summary</th><td>'+item.summary+'</td></tr>';
				text += '<tr><th>'+prefix+'.link</th><td>'+item.link+'</td></tr>';
				text += '<tr><th>'+prefix+'.origlink</th><td>'+item.origlink+'</td></tr>';
				text += '<tr><th>'+prefix+'.permalink</th><td>'+item.permalink+'</td></tr>';
				text += '<tr><th>'+prefix+'.date</th><td>'+item.date+'</td></tr>';
				text += '<tr><th>'+prefix+'.pubdate</th><td>'+item.pubdate+'</td></tr>';
				text += '<tr><th>'+prefix+'.author</th><td>'+item.author+'</td></tr>';
				text += '<tr><th>'+prefix+'.guid</th><td>'+item.guid+'</td></tr>';
				text += '<tr><th>'+prefix+'.comments</th><td>'+item.comments+'</td></tr>';
				text += '<tr><th>'+prefix+'.image.url</th><td>'+item.image.url+'</td></tr>';
				text += '<tr><th>'+prefix+'.image.title</th><td>'+item.image.title+'</td></tr>';
				text += '<tr><th>'+prefix+'.categories</th><td>'+item.categories+'</td></tr>';
				text += '<tr><th>'+prefix+'.source</th><td>'+JSON.stringify(item.source)+'</td></tr>';
				text += '<tr><th>'+prefix+'.enclosures</th><td>'+JSON.stringify(item.enclosures)+'</td></tr>';
				text += '</table>';
			} else {
				text += '<table class="rssfeed attributes">';
				text += '<tr><th>No Data. End of List of '+ rss.articles.length +' Articles</th></tr>';
				text += '</table>';				
			}
			
			
            $('#' + widgetID).html(text);
        },    
    },
    bindStates: function(elem,bound,change_callback) {
        var $div = $(elem);
        var boundstates = $div.data('bound');
        if (boundstates) {
            for (var i = 0; i < boundstates.bound.length; i++) {
                vis.states.unbind(boundstates.bound[i], boundstates.change_callback);
            }
        }
        $div.data('bound', null);
        $div.data('bindHandler', null);
        for (var i=0;i<bound.length;i++) {
            bound[i]=bound[i]+'.val';
            vis.states.bind(bound[i] , change_callback);            
        }
        $div.data('bound', {bound,change_callback});
        $div.data('bindHandler', change_callback);
        
    },
	
	
};

vis.binds['rssfeed'].showVersion();