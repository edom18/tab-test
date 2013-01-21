(function (win, doc, exports) {
    var Tab = Global.view.Elm.extend({

        init: function(conf){
            this.config = conf;
            this.setUpElement(conf);
        },

        /**
         * setup Element
         * @param {Object} config element config
         * @param {String} config.selector element selector
         * @param {Function} config.hander click handler
         */
        setUpElement: function(config){
            var me = this;
            this.elm = me.cacheElement(config.selector);
            this.addHandler(config.handler);
        },
    });

    // export
    exports.Global.view.Tab = Tab;
}(window, document, window));