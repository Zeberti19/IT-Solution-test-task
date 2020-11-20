'use strict';
//TODO сделать рефакторинг
class Nav01Widget {

    _selectors={};

    _svg={};

    constructor(id = null)
    {
        if (!id) id='nav01-widget-' + Math.random()*1000;
        this._selectors.id=id;
        //
        this._selectors.btnOpenId=this._selectors.id + '__nav__btn-open';
        this._selectors.btnOpenContainer='nav__btn-open-container';
        this._selectors.btnOpenCls='nav__btn-open';
        this._selectors.item='nav__item';
        this._selectors.item_main='nav__item_main';
        this._selectors.itemSvg='nav__item-svg';
        this._selectors.itemSvg_closed='nav__item-svg_closed';
        this._selectors.itemHeader='nav__item-header';
        this._selectors.items_children='nav__items_children';
        this._selectors.itemHeaderText='nav__item-header-text';
        this._selectors.nav='nav';
        this._selectors.navMenu='nav__menu';
        //
        this._svg.arrowSvg='<svg version="1.2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" overflow="visible" preserveAspectRatio="none" viewBox="0 0 34 34" xml:space="preserve" y="0px" x="0px" id="Layer_1_1605199411491" width="32" height="32"><g transform="translate(1, 1)"><style type="text/css">	.st0_1605199411491{fill:#2A2C2B;}</style><g>	<path d="M13.5,22c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l4.3-4.3l-4.3-4.3c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5,5   c0.4,0.4,0.4,1,0,1.4l-5,5C14,21.9,13.8,22,13.5,22z" class="st0_1605199411491" vector-effect="non-scaling-stroke"/></g></g></svg>';
        this._svg.burger='<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\t viewBox="0 0 250.579 250.579" style="enable-background:new 0 0 250.579 250.579;" xml:space="preserve"><g id="Menu">\t<path style="fill-rule:evenodd;clip-rule:evenodd;" d="M22.373,76.068h205.832c12.356,0,22.374-10.017,22.374-22.373\t\tc0-12.356-10.017-22.373-22.374-22.373H22.373C10.017,31.323,0,41.339,0,53.696C0,66.052,10.017,76.068,22.373,76.068z\t\t M228.205,102.916H22.373C10.017,102.916,0,112.933,0,125.289c0,12.357,10.017,22.373,22.373,22.373h205.832\t\tc12.356,0,22.374-10.016,22.374-22.373C250.579,112.933,240.561,102.916,228.205,102.916z M228.205,174.51H22.373\t\tC10.017,174.51,0,184.526,0,196.883c0,12.356,10.017,22.373,22.373,22.373h205.832c12.356,0,22.374-10.017,22.374-22.373\t\tC250.579,184.526,240.561,174.51,228.205,174.51z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>';
        this._svg.cross='<svg version="1.2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" overflow="visible" preserveAspectRatio="none" viewBox="0 0 34 34" xml:space="preserve" y="0px" x="0px" id="Layer_1_1605199411492" width="32" height="32"><g transform="translate(1, 1)"><style type="text/css">	.st0_1605199411492{fill:#2A2C2B;}</style><path d="M17.4,16l7.3-7.3c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0L16,14.6L8.7,7.3c-0.4-0.4-1-0.4-1.4,0  c-0.4,0.4-0.4,1,0,1.4l7.3,7.3l-7.3,7.3c-0.4,0.4-0.4,1,0,1.4C7.5,24.9,7.7,25,8,25c0.3,0,0.5-0.1,0.7-0.3l7.3-7.3l7.3,7.3  c0.2,0.2,0.5,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L17.4,16z" class="st0_1605199411492" vector-effect="non-scaling-stroke"/></g></svg>';
    }

    init(){
        const items = document.getElementById(this._selectors.id)
            .getElementsByClassName(this._selectors.itemHeaderText);
        let self=this;
        for( let n=0; n<items.length; n++ )
        {
            items[n].onclick=function(){ self._toggleChildren(this); };
        }
        document.getElementById(this._selectors.btnOpenId).onclick=function(){ self._toggleNav(this) };
    }

    /**
     * Отображает/скрывает навигатационную панель
     *
     * @private
     */
    _toggleNav(element){
        const navMenu=document.getElementById(this._selectors.id).getElementsByClassName(this._selectors.navMenu)[0];
        if (!navMenu.style.display || 'none' === navMenu.style.display)
        {
            navMenu.style.display='block';
            element.innerHTML=this._svg.cross;
        }
        else
        {
            navMenu.style.display='none';
            element.innerHTML=this._svg.burger;
        }
    }

    /**
     * Скрываем все дочерние пункты меню во всем навигаторе
     *
     * @private
     */
    _hideItemsChildrenAll(){
        let elements = document.getElementById(this._selectors.id)
            .getElementsByClassName(this._selectors.items_children);
        for(let n=0; n<elements.length; n++)
        {
            elements[n].style.display='none';
            this._setItemOpen(elements[n].parentElement, false);
        }
    }

    _setItemOpen(item, open = true){
        let svgContainer = false;
        if (item.children && item.children.length>1)
        {
            svgContainer = item.getElementsByClassName(this._selectors.itemSvg)[0];
            if (open)
            {
                svgContainer.classList.remove(this._selectors.itemSvg_closed);
            }
            else
            {
                svgContainer.classList.add(this._selectors.itemSvg_closed);
            }
        }
    }

    /**
     * Показывает все родительские пункты меню в КОМПАКТНОМ виде для указаного пункта меню
     *
     * @param item Пункт меню
     * @private
     */
    _showParentsByItem(item){
        while(item)
        {
            //условие выхода - это когда мы дошли до первого уровня дерева
            if (item.classList.contains(this._selectors.item_main)) break;
            //
            let itemChildren = item.parentElement;
            //показываем родительский блок с элементами меню, но ВСЕ элементы, кроме данного скрываем, чтобы не мешались
            itemChildren.style.display='block';
            this._setItemOpen(itemChildren.parentElement);
            for(let n=0; n<itemChildren.children.length; n++)
            {
                if (item === itemChildren.children[n]) continue;
                itemChildren.children[n].style.display='none';
                this._setItemOpen(itemChildren.children[n], false);
            }
            //
            item = itemChildren.parentElement;
        }
    }
    _toggleChildren(element){
        /**
         * Контейнер дочерних пунктов меню, который надо показать/скрыть
         */
        const itemsChildren=element.parentElement.nextSibling;
        //если нет потомков, то ничего делать не надо
        if (!itemsChildren) return;
        //если "itemsChildren" невидимый, то показываем
        if (!itemsChildren.style.display || itemsChildren.style.display.match('none'))
        {
            //скрываем все элементы "items_children", чтобы потом показать только нужные
            this._hideItemsChildrenAll();
            this._setItemOpen(itemsChildren.parentElement);
            //потом показываем  элемент "itemsChildren" и всех его потомков
            itemsChildren.style.display='block';
            for(let n=0; n<itemsChildren.children.length; n++)
            {
                itemsChildren.children[n].style.display='block';
                //this._setItemVisible(itemsChildren.children[n]);
            }
            //в завершении показываем все родительские пункты меню в компактном режиме
            this._showParentsByItem(itemsChildren.parentElement);
        }
        //если "itemsChildren" видимый, то скрываем
        else
        {
            let item = itemsChildren.parentElement.parentElement;
            this._setItemOpen(itemsChildren.parentElement, false);
            //скрываем элемент "items_children", но показываем все соседние пункты меню (если они есть)
            for(let n=0; n<item.children.length; n++)
            {
                item.children[n].style.display='block';
                console.log(item.children[n]);
                this._setItemOpen(item.children[n], false);
            }
            itemsChildren.style.display='none';
        }
    }

    _drawItem(data, isMain=false){
        const selectors = this._selectors;
        let itemMainClass = isMain? ' ' +  selectors.item_main : '';
        let html='';
        let itemSvg=(data.children && data.children.length) ?
            '<div class="' + selectors.itemSvg + ' ' + selectors.itemSvg_closed + '">' + this._svg.arrowSvg + '</div>'
            : '';
        html += '<div class="' + selectors.item + itemMainClass + '" >';
        html += '<div class="' + selectors.itemHeader + '">' +
            itemSvg + '<span class="' + selectors.itemHeaderText +'">' + HtmlHelper.encode( data.name ) + '</span>' +
            '</div>';
        if (data.children && data.children.length)
        {
            html += '<div class="' + selectors.items_children + '">';
            for( let n=0; n<data.children.length; n++)
                html += this._drawItem(data.children[n]);
            html += '</div>';
        }
        html += '</div>';

        return html;
    }

    draw(data){
        let html =
            '<div id="' +  this._selectors.id + '"' + ' class="' + this._selectors.nav + '">' +
                '<div id="' + this._selectors.btnOpenId +'" class="' + this._selectors.btnOpenCls +'">' +
                    this._svg.burger +
                '</div>' +
                '<nav class="' + this._selectors.navMenu + '">';
        for (let n=0; n<data.length; n++)
        {
            html += this._drawItem(data[n], true);
        }
        html +='</nav>' +
            '</div>';

        return html;
    }
}
