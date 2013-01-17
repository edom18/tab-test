(function (win, doc, exports) {

    'use strict';

    /**
     * @constructor
     */
    function Tabs(selector) {
        this.setUpTabs.apply(this, [selector]);
        this.init.apply(this, arguments);
    }
    
    /*! -----------------------------------------
        PIBLIC
    --------------------------------------------- */
    Tabs.prototype = {

        /**
         * initialize
         */
        init: function () {
        },

        /**
         * setup tabs
         */
        setUpTabs: function(selector){
            var me = this,
                tabSelector = me.getTabSelector(selector), 
                tabsElm = doc.querySelectorAll(tabSelector),
                tabClasses = me.initTabs(tabsElm);

            me.tabClasses = tabClasses;
        },

        /**
         * set tab
         */
        initTabs: function(tabs){
            var i = 0,
                length = tabs.length,
                list = [];

            for(; i < length; i++){
                list.push(new Global.view.Tab(tabs[i]));
            }

            return list;
        },

        /**
         * get tabs selector
         */
        getTabSelector: function(selector){
            var child = ' ul li';
            return selector + child;
        },

        /**
         * get tab class
         * @param {Number} index index of tabs
         */
        getTab: function(index){
            return this.tabClasses[index];
        }
    };
    
    /*! -----------------------------------------
        PRIVATE
    --------------------------------------------- */


    /*! -----------------------------------------
        EXPORTS
    --------------------------------------------- */
    exports.Global.view.Tabs = Tabs;

}(window, document, window));