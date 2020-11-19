'use strict';
class Page02View {

    _selectors={};

    constructor() {
        this._selectors.navigation='navigation';
    }

    drawNav(data){
        const Nav01=new Nav01Widget('nav01' );
        document.getElementById(this._selectors.navigation).innerHTML=Nav01.draw(data);
        Nav01.init();
    }
}
