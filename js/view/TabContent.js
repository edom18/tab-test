(function (win, doc, exports) {
    var TabContent = Global.view.Elm.extend({
        init: function(selector){
            this._super(selector);
            this.addCls('tabContent');
        }
    });

    // export
    exports.Global.view.TabContent = TabContent;
}(window, document, window));
