'use strict';
class Nav01Widget {

    _HtmlSelectors={};

    constructor(id = null)
    {
        if (!id) id='nav01-widget-' + Math.random()*1000;
        this._HtmlSelectors.id=id;
        //
        this._HtmlSelectors.item='nav__item';
        this._HtmlSelectors.item_main='nav__item_main';
        this._HtmlSelectors.itemHeader='nav__item-header';
        this._HtmlSelectors.items_children='nav__items_children';
        this._HtmlSelectors.itemHeaderText='nav__item-header-text';
    }

    /**
     * Показывает все родительские пункты меню в КОМПАКТНОМ виде для указаного пункта меню
     *
     * @param item Пункт меню
     * @private
     */
    _showParentsByItem(item){
        console.log('_showParentsByItem');
        while(item)
        {
            console.log(item);
            //условие выхода - это когда мы дошли до первого уровня дерева
            if (item.classList.contains(this._HtmlSelectors.item_main)) break;
            console.log('не вышли');
            //
            let itemParent = item.parentElement;
            //показываем родительский блок с элементами меню, но ВСЕ элементы, кроме данного скрываем, чтобы не мешались
            itemParent.style.display='block';
            for(let n=0; n<itemParent.children.length; n++)
            {
                if (item === itemParent.children[n]) continue;
                itemParent.children[n].style.display='none';
            }
            //
            item = itemParent.parentElement;
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
        }
    }

    _toggleChildren(element){
        /**
         * Контейнер дочерних пунктов меню, который надо показать/скрыть
         */
        const itemsChildren=element.parentElement.nextSibling;
        console.log(itemsChildren);
        //если нет потомков, то ничего делать не надо
        if (!itemsChildren) return;
        //если "itemsChildren" невидимый, то показываем
        if (!itemsChildren.style.display || itemsChildren.style.display.match('none'))
        {
            //скрываем все элементы "items_children", чтобы потом показать только нужные
            this._hideItemsChildrenAll();
            //потом показываем  элемент "itemsChildren" и всех его потомков
            itemsChildren.style.display='block';
            for(let n=0; n<itemsChildren.children.length; n++)
            {
                itemsChildren.children[n].style.display='block';
            }
            //в завершении показываем все родительские пункты меню в компактном режиме
            this._showParentsByItem(itemsChildren.parentElement);
        }
        //если "itemsChildren" видимый, то скрываем
        else
        {
            let item = itemsChildren.parentElement.parentElement;
            console.log(item);
            //скрываем элемент "items_children", но показываем все соседние пункты меню (если они есть)
            for(let n=0; n<item.children.length; n++)
            {
                item.children[n].style.display='block';
            }
            itemsChildren.style.display='none';
        }
    }

    _drawItem(data, isMain=false){
        const selectors = this._HtmlSelectors;
        let itemMainClass = isMain? ' ' +  selectors.item_main : '';
        let html='';
        html += '<div class="' + selectors.item + itemMainClass + '" >';
        html += '<div class="' + selectors.itemHeader + '"><span class="' + selectors.itemHeaderText +'">' + data.name + '</span></div>';
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

    init(){
        const items = document.getElementById(this._HtmlSelectors.id)
            .getElementsByClassName(this._HtmlSelectors.itemHeaderText);
        let self=this;
        for( let n=0; n<items.length; n++ )
        {
            items[n].onclick=function(){ self._toggleChildren(this); };
        }
    }
}
