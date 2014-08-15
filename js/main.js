/*jslint es5:true, white:false */
/*globals _, C, W, Globs, Util, jQuery,
        ROOT, */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

var Main = (function ($) { // IIFE
    'use strict';
    var name = 'Main',
        self = Object.create({':':name}),
        Df;

    Df = { // DEFAULTS
        inits: function () {
            ROOT.loaded();
            Main = self;
            self.inited = true;

            this.pic = $(this.pic);
            abscent(this.pic);

            C.log('loaded', name, self, '\nDf', this);
        },
        pic: '.pwrap',
    };
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    /// INTERNAL

    function abscent(ele) {
        var me = $(ele).wrap('<div>');
        var my = me.parent();

        me.css({ // force a definite size
            height: me.outerHeight(),
            width: me.outerWidth(),
        }).addClass('centa');
        my.addClass('cwrap');
    }

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

    return $.Deferred().done(self.init);
}(jQuery));

$(Main.resolve);

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/*




 */
