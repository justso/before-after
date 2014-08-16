/*jslint es5:true, white:false */
/*globals _, C, W, ROOT, Global, Modernizr, jQuery,
    Glob:true, Main:true, */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
'use strict';
var Glob = new Global('Glob');
var Main = (function ($, M, G) { // IIFE
    'use strict';
    var name = 'Main',
        self = Object.create({':': name}),
        Df, body;

    Df = { // DEFAULTS
        inits: function () {
            ROOT.loaded($);
            Main = self;
            body = $('body');
            self.inited = true;

            this.pic = $(this.pic);
            this.img = this.pic.find('img');
            this.lab = $('h1.label');
            abscent(this.pic);

            C.log('loaded', name, self, '\nDf', this);
        },
        pic: '.pwrap',
        list: [
            '_main',
            'argentina-1 australia-1',
            'bangladesh-1 bangladesh-2 bulgaria-1',
            'chile-1',
            'germany-1 greece-1',
            'india-1 india-2 india-3 indonesia-1 israel-1 italy-1',
            'kenya-1',
            'morocco-1',
            'pakistan-1 philipines-1 philipines-2',
            'romania-1',
            'serbia-1 serbia-2 srilanka-1',
            'uk-1 ukraine-1 us-1 us-2',
            'vietnam-1'
            ].join(' ').split(' ')
    };
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    /// HELPERS

    function undef() {
        return (typeof arguments[0] === 'undefined');
    }
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    /// INTERNAL

    function abscent(ele) {
        var me, my;

        me = $(ele).wrap('<div>');
        my = me.parent();

        me.css({ // force a definite size
            height: me.outerHeight(),
            width: me.outerWidth(),
        }).addClass('centa');
        my.addClass('cwrap');
    }

    function _deal(rev) {
        if (rev) {
            Df.list.push(Df.list.shift());
        } else {
            Df.list.unshift(Df.list.pop());
        }
        return Df.list[0];
    }

    function pickle(bool) {
        var nu = _deal(bool);

        Df.img.attr('src', 'export/' + nu + '.jpg');
        Df.lab.text(nulab(nu));
    }

    function nulab(nom) {
        nom = nom.replace(/[\-\_\d]/g, '');
        nom = nom.split('');
        nom[0] = nom[0].toUpperCase();
        return nom.join('');
    }

    function toggleAuto(play) {
        play = undef(play) ? !Df.timer : Boolean(play);
        play = (play << 1) + Boolean(Df.timer);

        if (play === 1) {
            Df.timer = W.clearInterval(Df.timer);
            body.removeClass('playing');
        } else if (play === 2) {
            Df.timer = W.setInterval(pickle, 999);
            body.addClass('playing');
        }
    }

    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

    function bindAuto() {
        body.on('click', function (evt) {
            toggleAuto();
        });
    }

    function bindWheel() {
        body.on('mousewheel', _.debounce(function (evt) {
            var dir = (evt.originalEvent.deltaY > 0);
            toggleAuto(0);
            pickle(dir)
        }, 99, {
            leading:false,
            trailing:false
        }));
    }

    function bindings() {
        bindAuto();
        bindWheel();
    }

    function _init() {
        if (self.inited) {
            return null;
        }
        Df.inits();
        bindings();

        return self;
    }

    $.extend(self, {
        _: function (str) {
            return str ? Df[str] : Df;
        },
        init: _init,
        tog: toggleAuto,
    });

    return $.Deferred().done(self.init);
}(jQuery, Modernizr, Glob));

$(Main.resolve);

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/*




 */
