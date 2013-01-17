(function (win, doc, exports) {
    var TabContents = Global.view.Elm.extend({

        init: function(selector){
            this._super(selector);
            this._tabContentItems = [];
            this._index = 0;
            this._setUp();
        },

        _setUp: function () {
            var elm  = this.elm,
                elms = elm.querySelectorAll('div'),
                tabContentItems = this._tabContentItems,
                items;

            if (NodeList.prototype.isPrototypeOf(elms)) {
                items = [].slice.call(elms);
                items = [].filter.call(items, function (el) {
                    return el.parentNode === elm;
                });
            }
            else if (Array.isArray(elms)) {
                items = elms;
            }
            else {
                items = [elms];
            }

            items.forEach(function (item) {
                var tabContent = new Global.view.TabContent(item);
                tabContentItems.push(tabContent);
            });

            //Select index of `0` item by default.
            this.select(0);
        },

        select: function (index) {
            var tabContent = null;

            this._index = index;
            tabContent = this.getAt(index);

            if (!tabContent) {
                throw new Error('argument of index(' + index + ') is not exist in the items.');
            }

            this.each(function (item) {
                item.hide();
            }, this);
            tabContent.show();
        },

        getAt: function (index) {
            return this._tabContentItems[index] || null;
        },

        each: function (func, context) {
            this._tabContentItems.forEach(func, this);
        }
    });

    // export
    exports.Global.view.TabContents = TabContents;
}(window, document, window));
