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
    createWidget: function (widgetID, view, data, style) {
        var $div = $('#' + widgetID);
        // if nothing found => wait
        if (!$div.length) {
            return setTimeout(function () {
                vis.binds['rssfeed'].createWidget(widgetID, view, data, style);
            }, 100);
        }

        var text = '';
        text += 'OID: ' + data.oid + '</div><br>';
        text += 'OID value: <span class="myset-value">' + vis.states[data.oid + '.val'] + '</span><br>';
        text += 'Color: <span style="color: ' + data.myColor + '">' + data.myColor + '</span><br>';
        text += 'extraAttr: ' + data.extraAttr + '<br>';
        text += 'Browser instance: ' + vis.instance + '<br>';
        text += 'htmlText: <textarea readonly style="width:100%">' + (data.htmlText || '') + '</textarea><br>';

		$("#" + widgetID).html(text);

		function onChange (e, newVal, oldVal) {
			$div.find('.template-value').html(newVal);
		}

		// subscribe on updates of value
		if (data.oid) {
			vis.states.bind(data.oid + '.val', onChange);
			$div.data('bound', [data.oid + '.val']); //remember bound state that vis can release if didnt needed
			$div.data('bindHandler', onChange);      //remember onchange handler to release bound states
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