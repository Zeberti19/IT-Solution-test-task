'use strict';
class Page01View {

    constructor() {}

    _drawService(data){
        const FigureWidget = new FigureMiniWidget();
        let actions = '';
        for(let n=0; n<data.actions.length;n++)
        {
            actions += FigureWidget.draw(data.actions[n].actionSvg, data.actions[n].actionName);
        }
        return '<div class="service-container">' +
            '<div class="service-container__header-container">' +
            '<h2 class="service-container__header">' + HtmlHelper.encode(data.name) + '</h2>' +
            '<p class="service-container__description">' + HtmlHelper.encode(data.description) + '</p>' +
            '</div>' +
            '<div class="service-container__icons-container">' +
            '<div class="service-container__icon-container_big">' +
            '<div class="service-container__icon-background">' +
            data.iconBackgroundSvg +
            '</div>' +
            '<div class="service-container__icon-image">' +
            data.iconSvg +
            '</div>' +
            '</div>' +
            '<div class="service-container__actions">' +
            actions +
            '</div>' +
            '</div>' +
            '</div>';
    }

    drawServices(data){
        let html='';
        for(let n=0; n<data.length;n++)
        {
            html+=this._drawService(data[n]);
        }

        document.getElementById('services').innerHTML=html;
    }
}
