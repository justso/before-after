/*jslint es5:true, white:false */
/*globals _, C, W, Globs, Util, jQuery,
        ROOT, */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
var Load = $.Deferred();

var Main = (function ($) { // IIFE
    'use strict';
    var name = 'Main',
        self = Object.create({':':name}),
        Df;

    Df = { // DEFAULTS
        inits: function () {
            ROOT.loaded();
            Main = self;
            self.inited = true
            this.pic = $(this.pic);
            C.log('loaded', name, self, '\nDf', this);
        },
        pic: '.photo',
    };
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    /// INTERNAL

    function _init() {
        if (self.inited) {
            return null;
        }
        Df.inits();

        return self;
    }

    $.extend(self, {
        _: function (str) {
            return str ? Df[str] : Df;
        },
        init: _init,
    });

    return Load.done(self.init);
}(jQuery));
    $(Main.resolve);

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/*




 */
