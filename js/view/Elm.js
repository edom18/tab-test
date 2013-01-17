(function (win, doc, exports) {
    var Elm = Class.extend({

        init: function(selector){
        	this.elm = this.cacheElement(selector);	
        },
        
        /**
         * cache element
         */
        cacheElement: function(selector){
            var elm;

            if (typeof selector === 'string') {
                elm = doc.querySelector(selector);
            }
            else if (Node.prototype.isPrototypeOf(selector)) {
                elm = selector;
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
            var elm = this.elm;
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
            var elm = this.elm,
                bub = config.bub || false;

            elm.addEventListener(config.name, config.fn, bub);
        }
    });

    // export
    exports.Global.view.Elm = Elm;
}(window, document, window));
