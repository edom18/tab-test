(function (win, doc, exports) {

    'use strict';

    /**
     * @constructor
     */
    function Element(selector) {
        this.elm = this.switchInit.apply(this, [selector]);
        this.init.apply(this, arguments);
    }
    
    /*! -----------------------------------------
        PIBLIC
    --------------------------------------------- */
    Element.prototype = {

        /**
         * initialize
         */
        init: function () {
            var me = this;

        },

        /**
         * switch init
         */
        switchInit: function(args){
            if (args instanceof Node){
                return args;
            }else{
                this.cacheElement(args);
            }
        },

        /**
         * cache element
         */
        cacheElement: function(selector){
            var elm;

            if(selector){
                elm = doc.querySelectorAll(selector);
            }
            return elm;
        },

        /**
         * show
         */
        show: function(){
            this.setStyle('display', 'block');
        },

        /**
         * hide
         */
        hide: function(){
            this.setStyle('display', 'none');
        },

        /**
         * set style
         */
        setStyle: function(key, value){
            var i = 0,
                length,
                elm = this.elm;

            if(!elm){
                return;
            }

            if(!elm.length){
              elm.style[key] = value;
              return;
            }

            length = elm.length;
            for(; i < length; i++){
                elm[i].style[key] = value;
            }
        },

        /**
         * add css class
         */
        addCls: function(value){
            this.addAttr('class', value);
        },

        /**
         * set attribute
         */
        addAttr: function(key, value){
            var i = 0,
                length,
                elm = this.elm;

            if(!elm){
                return;
            }

            if(!elm.length){
                elm.setAttribute(key, value);
                return;
            }

            length = elm.length;
            for(; i < length; i++){
                elm[i].setAttribute(key, value);
            }
        },

        /**
         * remove css class
         */
        removeCls: function(value){
            this.removeAttr('class', value);
        },

        /**
         * remove attribute
         */
        removeAttr: function(key, value){
            var i = 0,
                length,
                elm = this.elm;

            if(!elm){
                return;
            }

            if(!elm.length){
                elm.removeAttribute(key, value);
                return;
            }

            length = elm.length;
            for(; i < length; i++){
                elm[i].removeAttribute(key, value);
            }
        },

        /**
         * set text
         */
        text: function(text){
            var elm = this.elm[0];
            elm.innerText = text; 
        },

        /**
         * add click handler
         */
        addHandler: function(handler){
            var config = {
                name: 'click',
                fn : handler,
                bub: false
            };

            this.addEvent(config);
        },

        /**
         * add event
         * @param {Object} config configation of event
         * @param {Object} config.name event name
         * @param {Object} config.fn event function
         * @param {Object} config.bub bubbling flagment
         */
        addEvent: function(config) {
            var elm = this.elm[0],
                bub = config.bub || false;

            elm.addEventListener(config.name, config.fn, bub);
        }

    };
    
    /*! -----------------------------------------
        PRIVATE
    --------------------------------------------- */


    /*! -----------------------------------------
        EXPORTS
    --------------------------------------------- */
    exports.Global.view.Element = Element;

}(window, document, window));
