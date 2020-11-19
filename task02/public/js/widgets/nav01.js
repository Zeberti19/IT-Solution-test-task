'use strict';
//TODO сделать рефакторинг
class Nav01Widget {

    _HtmlSelectors={};

    _arrowSvg='<svg version="1.2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" overflow="visible" preserveAspectRatio="none" viewBox="0 0 34 34" xml:space="preserve" y="0px" x="0px" id="Layer_1_1605199411491" width="32" height="32"><g transform="translate(1, 1)"><style type="text/css">	.st0_1605199411491{fill:#2A2C2B;}</style><g>	<path d="M13.5,22c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l4.3-4.3l-4.3-4.3c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5,5   c0.4,0.4,0.4,1,0,1.4l-5,5C14,21.9,13.8,22,13.5,22z" class="st0_1605199411491" vector-effect="non-scaling-stroke"/></g></g></svg>';

    constructor(id = null)
    {
        if (!id) id='nav01-widget-' + Math.random()*1000;
        this._HtmlSelectors.id=id;
        //
        this._HtmlSelectors.item='nav__item';
        this._HtmlSelectors.item_main='nav__item_main';
        this._HtmlSelectors.itemSvg='nav__item-svg';
        this._HtmlSelectors.itemSvg_closed='nav__item-svg_closed';
        this._HtmlSelectors.itemHeader='nav__item-header';
        this._HtmlSelectors.items_children='nav__items_children';
        this._HtmlSelectors.itemHeaderText='nav__item-header-text';
    }

    init(){
        const items = document.getElementById(this._HtmlSelectors.id)
            .getElementsByClassName(this._HtmlSelectors.itemHeaderText);
        let self=this;
        for( let n=0; n<items.length; n++ )
        {
            items[n].onclick=function(){ self._toggleChildren(this); };
        }
    }

    /**
     * Скрываем все дочерние пункты меню во всем навигаторе
     *
     * @private
     */
    _hideItemsChildrenAll(){
        let elements = document.getElementById(this._HtmlSelectors.id)
            .getElementsByClassName(this._HtmlSelectors.items_children);
        for(let n=0; n<elements.length; n++)
        {
            elements[n].style.display='none';
            this._setItemOpen(elements[n].parentElement, false);
        }
    }

    _setItemOpen(item, open = true){
        console.log('_setItemOpen');
        console.log(item);
        let svgContainer = false;
        if (item.children && item.children.length>1)
        {
            svgContainer = item.getElementsByClassName(this._HtmlSelectors.itemSvg)[0];
            if (open)
            {
                svgContainer.classList.remove(this._HtmlSelectors.itemSvg_closed);
            }
            else
            {
                svgContainer.classList.add(this._HtmlSelectors.itemSvg_closed);
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
            if (item.classList.contains(this._HtmlSelectors.item_main)) break;
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
            console.log('_toggleChildren hide');
            let item = itemsChildren.parentElement.parentElement;
            console.log(itemsChildren.parentElement,);
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
        const selectors = this._HtmlSelectors;
        let itemMainClass = isMain? ' ' +  selectors.item_main : '';
        let html='';
        let itemSvg=(data.children && data.children.length) ?
            '<div class="' + selectors.itemSvg + ' ' + selectors.itemSvg_closed + '">' + this._arrowSvg + '</div>'
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
        const selectors = this._HtmlSelectors;

        let html = '<nav id="' + selectors.id + '" class="nav">';
        for (let n=0; n<data.length; n++)
        {
            html += this._drawItem(data[n], true);
        }
        html +='</nav>';

        return html;
    }
}
