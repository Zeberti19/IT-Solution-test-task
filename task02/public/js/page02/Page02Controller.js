'use strict';
class Page02Controller {

    /**
     *
     * @type {Page02Model}
     */
    Model = null;
    /**
     *
     * @type {Page02View}
     */
    View = null;

    constructor() {
        this.Model=new Page02Model();
        this.View=new Page02View();
    }

    pageLoaded(){
        this.View.drawNav(this.Model.getNavData());
    }
}

window.onload=function() {
    window.PageController = new Page02Controller();
    window.PageController.pageLoaded();
};
