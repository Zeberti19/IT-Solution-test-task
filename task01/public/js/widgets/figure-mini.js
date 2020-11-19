'use strict';
class FigureMiniWidget {

    constructor() {}

    draw(svg,label){
        return '<figure class="figure-mini">' +
        '<div class="figure-mini__icon">' +
            svg +
        '</div>' +
        '<figcaption class="figure-mini__text">' + label + '</figcaption>' +
        '</figure>'
    }
}
