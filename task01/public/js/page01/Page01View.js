'use strict';
class Page01View {

    constructor() {}

    _drawService(data){
        return '<div class="service-container">' +
            '<div class="service-container__header-container">' +
            '<h2 class="service-container__header">' + data.name + '</h2>' +
            '<p>' + data.description + '</p>' +
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
            '<figure class="figure-mini">' +
            '<div class="figure-mini__icon">' +
            '<svg version="1.2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" overflow="visible" preserveAspectRatio="none" viewBox="0 0 34 34" xml:space="preserve" y="0px" x="0px" id="Layer_1_1605195849713" width="16" height="16"><g transform="translate(1, 1)"><style type="text/css">\t.st0_1605195849713{fill:#2A2C2B;}</style><g>\t<path d="M16,0C9.2,0,3.8,5.5,3.8,12.3c0,3.6,1.4,5.6,3.8,8.8l7.6,10.5c0.2,0.3,0.5,0.4,0.8,0.4s0.6-0.2,0.8-0.4   l7.6-10.5c2.4-3.3,3.8-5.2,3.8-8.8C28.3,5.5,22.8,0,16,0z M22.8,19.9L16,29.3l-6.8-9.4c-2.3-3.1-3.4-4.7-3.4-7.6   C5.8,6.6,10.3,2,16,2s10.3,4.6,10.3,10.3C26.3,15.2,25.1,16.8,22.8,19.9z" class="st0_1605195849713" vector-effect="non-scaling-stroke" style="fill: rgb(122, 124, 123);"/>\t<path d="M16,6.3c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S19.3,6.3,16,6.3z M16,16.3c-2.2,0-4-1.8-4-4s1.8-4,4-4   s4,1.8,4,4S18.2,16.3,16,16.3z" class="st0_1605195849713" vector-effect="non-scaling-stroke" style="fill: rgb(122, 124, 123);"/></g></g></svg>' +
            '</div>' +
            '<figcaption class="figure-mini__text">Stuttgart-Mitte</figcaption>' +
            '</figure>' +
            '<figure class="figure-mini">' +
            '<div class="figure-mini__icon">' +
            '<svg version="1.2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" overflow="visible" preserveAspectRatio="none" viewBox="0 0 34 34" xml:space="preserve" y="0px" x="0px" id="Layer_1_1605195849712" width="16" height="16"><g transform="translate(1, 1)"><style type="text/css">\t.st0_1605195849712{fill:#2A2C2B;}</style><path d="M30,10.7C30,10.6,30,10.6,30,10.7c0-0.2-0.1-0.3-0.1-0.4c0,0,0,0,0,0l-4.6-8c-0.1-0.2-0.4-0.4-0.6-0.5  c-0.3-0.1-0.5,0-0.8,0.1l-2.7,1.5l-0.7-1.2C20.5,2,20.2,1.9,20,1.8c-0.3-0.1-0.5,0-0.8,0.1L5.9,9.6c0,0-0.1,0.1-0.1,0.1  C4.7,9.5,4,8.6,4,7.5c0-1.2,1-2.3,2.3-2.3H10c0.6,0,1-0.4,1-1s-0.4-1-1-1H6.2C3.9,3.2,2,5.1,2,7.5c0,0.1,0,0.3,0,0.4  C2,8,2,8.1,2,8.2v17.2c0,2.7,2.2,4.9,4.9,4.9H29c0.6,0,1-0.4,1-1L30,10.7C30,10.7,30,10.7,30,10.7z M24,4.1l3.3,5.6h-2.4l-2.7-4.6  L24,4.1z M19.4,4.1l3.2,5.6h-13L19.4,4.1z M6.9,28.2c-1.6,0-2.9-1.3-2.9-2.9V11.1c0.7,0.4,1.4,0.7,2.3,0.7H28v4.5h-6  c-2.2,0-4,1.8-4,4s1.8,4,4,4h6v4H6.9z M28,18.2v4h-6c-1.1,0-2-0.9-2-2s0.9-2,2-2H28z" class="st0_1605195849712" vector-effect="non-scaling-stroke" style="fill: rgb(122, 124, 123);"/></g></svg>' +
            '</div>' +
            '<figcaption class="figure-mini__text">450,- € Basis</figcaption>' +
            '</figure>' +
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
        console.log(html);

        document.getElementById('services').innerHTML=html;
    }
}
