'use strict';
class Page02View {

    constructor() {}

    drawNav(data){
        const Nav01=new Nav01Widget('nav01' );
        document.getElementById('main-content').innerHTML=Nav01.draw(data);
        Nav01.init();
    }
}
