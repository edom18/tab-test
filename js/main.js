(function (win, doc) {

    'use strict';

    // document ready
    docReady(function(){
        var conf1 = {
                selector: '.nav-tabs ul li:nth-child(1)',
                handler : function(){console.log('tap1');}
            },
            conf2 = {
                selector: '.nav-tabs ul li:nth-child(2)',
                handler : function(){console.log('tap2');}
            },
            conf3 = {
                selector: '.nav-tabs ul li:nth-child(3)',
                handler : function(){console.log('tap3');}
            },
            tab1 = new Global.view.Tab(conf1),
            tab2 = new Global.view.Tab(conf2),
            tab3 = new Global.view.Tab(conf3),
            tabs = new Global.view.Tabs('.nav-tabs');

        tabs.add([tab1,tab2,tab3]);
    });

    function docReady(handler){
        win.addEventListener('load', handler);
    }

}(window, document));