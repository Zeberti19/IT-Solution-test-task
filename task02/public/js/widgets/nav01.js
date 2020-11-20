'use strict';
//TODO сделать рефакторинг
class Nav01Widget {

    _isMobile = null;

    _eventHandlers={};

    _selectors={};

    _svg={};

    constructor(id = null)
    {
        if (!id) id='nav01-widget-' + Math.random()*1000;
        const self = this;
        this._selectors.id=id;
        //
        this._selectors.btnOpenId=this._selectors.id + '__nav__btn-open';
        this._selectors.btnOpenContainer='nav__btn-open-container';
        this._selectors.btnOpenCls='nav__btn-open';
        this._selectors.item='nav__item';
        this._selectors.item_main='nav__item_main';
        this._selectors.item_hasChildren='nav__item_has-children';
        this._selectors.itemSvg='nav__item-svg';
        this._selectors.itemSvg_closed='nav__item-svg_closed';
        this._selectors.itemHeader='nav__item-header';
        this._selectors.items_children='nav__items_children';
        this._selectors.itemHeaderText='nav__item-header-text';
        this._selectors.itemHeaderTextSimple='nav__item-header-text_simple';
        this._selectors.itemHeaderTextBold='nav__item-header-text_bold';
        this._selectors.nav='nav';
        this._selectors.navMenu='nav__menu';
        //
        this._svg.arrowSvg='<svg version="1.2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" overflow="visible" preserveAspectRatio="none" viewBox="0 0 34 34" xml:space="preserve" y="0px" x="0px" id="Layer_1_1605199411491" width="32" height="32"><g transform="translate(1, 1)"><style type="text/css">	.st0_1605199411491{fill:#2A2C2B;}</style><g>	<path d="M13.5,22c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l4.3-4.3l-4.3-4.3c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5,5   c0.4,0.4,0.4,1,0,1.4l-5,5C14,21.9,13.8,22,13.5,22z" class="st0_1605199411491" vector-effect="non-scaling-stroke"/></g></g></svg>';
        this._svg.burger='<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\t viewBox="0 0 250.579 250.579" style="enable-background:new 0 0 250.579 250.579;" xml:space="preserve"><g id="Menu">\t<path style="fill-rule:evenodd;clip-rule:evenodd;" d="M22.373,76.068h205.832c12.356,0,22.374-10.017,22.374-22.373\t\tc0-12.356-10.017-22.373-22.374-22.373H22.373C10.017,31.323,0,41.339,0,53.696C0,66.052,10.017,76.068,22.373,76.068z\t\t M228.205,102.916H22.373C10.017,102.916,0,112.933,0,125.289c0,12.357,10.017,22.373,22.373,22.373h205.832\t\tc12.356,0,22.374-10.016,22.374-22.373C250.579,112.933,240.561,102.916,228.205,102.916z M228.205,174.51H22.373\t\tC10.017,174.51,0,184.526,0,196.883c0,12.356,10.017,22.373,22.373,22.373h205.832c12.356,0,22.374-10.017,22.374-22.373\t\tC250.579,184.526,240.561,174.51,228.205,174.51z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>';
        this._svg.cross='<svg version="1.2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" overflow="visible" preserveAspectRatio="none" viewBox="0 0 34 34" xml:space="preserve" y="0px" x="0px" id="Layer_1_1605199411492" width="32" height="32"><g transform="translate(1, 1)"><style type="text/css">	.st0_1605199411492{fill:#2A2C2B;}</style><path d="M17.4,16l7.3-7.3c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0L16,14.6L8.7,7.3c-0.4-0.4-1-0.4-1.4,0  c-0.4,0.4-0.4,1,0,1.4l7.3,7.3l-7.3,7.3c-0.4,0.4-0.4,1,0,1.4C7.5,24.9,7.7,25,8,25c0.3,0,0.5-0.1,0.7-0.3l7.3-7.3l7.3,7.3  c0.2,0.2,0.5,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L17.4,16z" class="st0_1605199411492" vector-effect="non-scaling-stroke"/></g></svg>';
        //
        this._eventHandlers.toggleItemChildren=function(){ self._toggleChildren(this); };
        this._eventHandlers.hideItemsChildren=function(){ console.log('mouseleave'); self._hideItemsChildrenAll(); };
    }

    init(){
        this._mobileDetect();
        let self=this;
        //
        document.querySelector('#' + this._selectors.btnOpenId).addEventListener('click',
            function(){ self._toggleNav(this) } );
        window.addEventListener('resize',function(){
            self._onResize();
        });
        this._setItemsEventHandler();
    }

    _mobileDetect(){
        return this._isMobile = !window.matchMedia("(min-width: 1024px)").matches;
    }

    _setItemsEventHandler()
    {
        let navMouseLeave, itemMouseOver, itemClick;
        if (this._isMobile)
        {
            itemClick = this._eventHandlers.toggleItemChildren;
            itemMouseOver = null;
            navMouseLeave = null;
        }
        else
        {
            itemClick = null;
            itemMouseOver = this._eventHandlers.toggleItemChildren;
            navMouseLeave = this._eventHandlers.hideItemsChildren;
        }

        const nav = document.querySelector('#' + this._selectors.id);
        nav.onmouseleave=navMouseLeave;

        const items = document.querySelectorAll('#' + this._selectors.id + ' .' + this._selectors.itemHeaderText);
        for( let n=0; n<items.length; n++ )
        {
            //ниже код временный, т.к. надо все сделать через навешивание/удаление событий
            items[n].onmouseover=itemMouseOver;
            items[n].onclick=itemClick;

            //TODO разобраться почему не работает удаление слушатетелей
            //items[n].removeEventListener(eventOld, this._eventHandlers.btnOpen );
            //items[n].addEventListener(eventNew, this._eventHandlers.btnOpen );
        }
    }

    _setNavVisible(visible = true){
        const navMenu=document.querySelector('#' + this._selectors.id
            + ' .' + this._selectors.navMenu);
        const btnOpen=document.querySelector('#' + this._selectors.btnOpenId);
        if (visible)
        {
            navMenu.style.display='flex';
            btnOpen.innerHTML=this._svg.cross;
        }
        else
        {
            navMenu.style.display='none';
            btnOpen.innerHTML=this._svg.burger;
        }
    }

    _setItemOpen(item, open = true){
        let svgContainer = false;
        if (item.children && item.children.length>1)
        {
            svgContainer = item.querySelector('.' + this._selectors.itemSvg);
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
     * Скрываем все дочерние пункты меню во всем навигаторе
     *
     * @private
     */
    _hideItemsChildrenAll(){
        let elements = document.querySelectorAll('#' + this._selectors.id + ' .' + this._selectors.items_children);
        for(let n=0; n<elements.length; n++)
        {
            elements[n].style.display='none';
            this._setItemOpen(elements[n].parentElement, false);
        }
    }

    /**
     * Показывает все родительские пункты меню для указаного пункта меню.
     * Может показать как в компактном режиме (не буду показаные соседние пункты у родительских элементов), так и без него
     *
     * @param item Пункт меню
     * @param isCompact Компактный режим отображения
     * @private
     */
    _showParentsByItem(item, isCompact=false){
        while(item)
        {
            //условие выхода - это когда мы дошли до первого уровня дерева
            if (item.classList.contains(this._selectors.item_main)) break;
            //
            let itemChildren = item.parentElement;
            //показываем родительский блок с элементами меню
            itemChildren.style.display='block';
            this._setItemOpen(itemChildren.parentElement);
            //в компактном режиме ВСЕ элементы, кроме данного скрываем, чтобы не мешались
            if (isCompact)
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
            //в завершении показываем все родительские пункты
            //в зависимости от мобильной версии или нет, показываем их компактно или нет
            this._showParentsByItem(itemsChildren.parentElement, this._isMobile);
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
                this._setItemOpen(item.children[n], false);
            }
            itemsChildren.style.display='none';
        }
    }

    /**
     * Отображает/скрывает навигатационную панель
     *
     * @private
     */
    _toggleNav(){
        const navMenu=document.querySelector('#' + this._selectors.id
            + ' .' + this._selectors.navMenu);
        if (!navMenu.style.display || 'none' === navMenu.style.display)
        {
            this._setNavVisible();
        }
        else
        {
            this._setNavVisible(false);
        }
    }

    _onResize(){
        //в мобильной версии навигациия по-умолчанию навигацию всегда скрыта
        if (this._mobileDetect())
        {
            this._setNavVisible(false);
        }
        //поскольку в мобильной версии навигациия может быть скрыта, то после ресайза нужно обязательно показать навигацию
        //в настольной версиии
        else
        {
            this._hideItemsChildrenAll(); //также скрываем все элементы, которые в мобильной версии могли быть показаны
            this._setNavVisible();
        }
        this._setItemsEventHandler();
    }

    _drawItem(data, isMain=false){
        const itemMainClass = isMain? ' ' +  this._selectors.item_main : '';
        const hasChildren = (data.children && data.children.length > 0) ? ' ' + this._selectors.item_hasChildren : '';
        const itemSvg = hasChildren ?
                        '<div class="' + this._selectors.itemSvg + ' ' + this._selectors.itemSvg_closed + '">' + this._svg.arrowSvg + '</div>'
                        : '';
        const itemHeaderTextStyle= hasChildren ? ' ' + this._selectors.itemHeaderTextBold : ' ' + this._selectors.itemHeaderTextSimple;
        let html='';
        html += '<div class="' + this._selectors.item + itemMainClass + hasChildren + '" >';
        html += '<div class="' + this._selectors.itemHeader + itemHeaderTextStyle + '">' +
            itemSvg + '<span class="' + this._selectors.itemHeaderText +'">' + HtmlHelper.encode( data.name ) + '</span>' +
            '</div>';
        if (hasChildren)
        {
            html += '<div class="' + this._selectors.items_children + '">';
            for( let n=0; n<data.children.length; n++)
                html += this._drawItem(data.children[n]);
            html += '</div>';
        }
        html += '</div>';

        return html;
    }

    draw(data){
        this._mobileDetect();

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
