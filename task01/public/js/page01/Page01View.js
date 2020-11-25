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
        const html = '<div class="service-container">' +
                    '<div class="service-container__header-container">' +
                        '<h2 class="service-container__header">' + HtmlHelper.encode(data.name) + '</h2>' +
                        '<p class="service-container__description">' + HtmlHelper.encode(data.description) + '</p>' +
                    '</div>' +
                    '<div class="service-container__icons-container">' +
                        '<div class="service-container__icon-container_big" style="background-color: ' + HtmlHelper.encode(data.iconBackgroundColor) + '">' +
                            data.iconSvg +
                        '</div>' +
                    '</div>' +
                    '<div class="service-container__actions">' +
                        actions +
                    '</div>' +
                '</div>';

        return html;
    }

    drawServices(data){
        let html='';
        for(let n=0; n<data.length;n++)
        {
            html+=this._drawService(data[n]);
        }

        document.querySelector('#services').innerHTML=html;
    }
}
