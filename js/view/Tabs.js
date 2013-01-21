(function (win, doc, exports) {
    var Tabs = Global.view.Elm.extend({

        init: function(selector){
            this._super(selector);
            this.tabArr = [];
        },

        /**
         * add tab class
         */
        add: function(tabArr){
            var me = this,
                isArray = tabArr instanceof Array;

            if(isArray){
                this.addArry(tabArr);
            }else{
                this.tabArr.push(tabArr);
            }
        },

        /**
         * add tab class from array
         */
        addArry: function(array){
            var me = this,
                length = array.length,
                i = 0;

            for(; i < length; i++){
                this.tabArr.push(array[i]);
            }
        }
    });

    // export
    exports.Global.view.Tabs = Tabs;
}(window, document, window));