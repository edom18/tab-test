(function (win, doc, exports) {

    'use strict';

    /**
     * @constructor
     */
    function Tab(config) {
        this.config = config;
        this.switchInit.apply(this, [config]);
        this.init.apply(this, arguments);
    }
    
    /*! -----------------------------------------
        PIBLIC
    --------------------------------------------- */
    Tab.prototype = {

        /**
         * initialize
         */
        init: function () {
        },

        /**
         * switch init
         */
        switchInit: function(args){
            if (args instanceof Node){
                this.generateElement(args);
            }else{
                this.setUpElement(args);
            }
        },

        /**
         * create Element Class
         */
        generateElement: function(element){
            var me = this;

            me.elm = new Global.view.Element(element); 
        },

        /**
         * setup Element
         * @param {Object} config element config
         * @param {String} config.selector element selector
         * @param {String} config.text element text
         * @param {Function} config.hander click handler
         */
        setUpElement: function(config){
            var me = this,
                elm = me.initElement(config);

            elm.addHandler(config.handler);
            me.elm = elm;
        },

        /**
         * set Element
         */
        initElement: function(config){
            var me = this,
                elm = new Global.view.Element(config.selector); 
 
            elm.text(config.text);

            return elm;
        }/*,

        text: function(text){
            this.elm.text(text);
        },

        handler: function(fn){
            this.elm.addHandler(fn);
        }*/
    };
    
    /*! -----------------------------------------
        PRIVATE
    --------------------------------------------- */


    /*! -----------------------------------------
        EXPORTS
    --------------------------------------------- */
    exports.Global.view.Tab = Tab;

}(window, document, window));