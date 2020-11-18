'use strict';
class Page01Controller {

    /**
     *
     * @type {Page01Model}
     */
    Model = null;
    /**
     *
     * @type {Page01View}
     */
    View = null;

    constructor() {
        this.Model=new Page01Model();
        this.View=new Page01View();
    }

    pageLoaded(){
        this.View.drawServices(this.Model.getServiceData());
    }
}

window.onload=function() {
    window.PageController = new Page01Controller();
    window.PageController.pageLoaded();
};
