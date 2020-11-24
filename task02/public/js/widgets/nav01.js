'use strict';
class Nav01Widget {

    _isMobile = null;

    _eventHandlers={};

    /**
     * Объект для хранения различных классов и ИД html элементов.
     * Потом они используется как в селекторах, так и в наименованиях класса или ИД
     *
     * @type {{}}
     * @private
     */
    _selectors={};

    /**
     * SVG изображения этого виджета
     *
     * @type {{}}
     * @private
     */
    _svg={};

    constructor(id = null)
    {
        if (!id) id='nav01-widget-' + Math.random()*1000;
        const self = this;
        this._selectors.id=id;
        //
        this._selectors.btnOpenContainer='nav__btn-open-container';
        this._selectors.btnOpen='nav__btn-open';
        this._selectors.item='nav__item';
        this._selectors.item_visible='nav__item_visible';
        this._selectors.item_hidden='nav__item_hidden';
        this._selectors.item_main='nav__item_main';
        this._selectors.item_hasChildren='nav__item_has-children';
        this._selectors.itemSvg='nav__item-svg';
        this._selectors.itemSvg_closed='nav__item-svg_closed';
        this._selectors.itemChildren='nav__item-children';
        this._selectors.itemChildren_main='nav__item-children_main';
        this._selectors.itemChildren_dropdown='nav__item-children_dropdown';
        this._selectors.itemChildren_visible='nav__item-children_visible';
        this._selectors.itemChildren_hidden='nav__item-children_hidden';
        this._selectors.itemHeader='nav__item-header';
        this._selectors.itemHeaderText='nav__item-header-text';
        this._selectors.itemHeaderTextSimple='nav__item-header-text_simple';
        this._selectors.itemHeaderTextBold='nav__item-header-text_bold';
        this._selectors.itemHeaderUnderlineVisible='nav__item-header-underline-visible';
        // this._selectors.itemHeaderUnderlineHidden='nav__item-header-underline-hidden';
        this._selectors.nav='nav';
        this._selectors.navMenu='nav__menu';
        this._selectors.navMenu_visible = 'nav__menu_visible';
        this._selectors.navMenu_hidden = 'nav__menu_hidden';
        //
        this._svg.arrowSvg='<svg version="1.2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" overflow="visible" preserveAspectRatio="none" viewBox="0 0 34 34" xml:space="preserve" y="0px" x="0px" id="Layer_1_1605199411491" width="32" height="32"><g transform="translate(1, 1)"><style type="text/css">	.st0_1605199411491{fill:#2A2C2B;}</style><g>	<path d="M13.5,22c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l4.3-4.3l-4.3-4.3c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5,5   c0.4,0.4,0.4,1,0,1.4l-5,5C14,21.9,13.8,22,13.5,22z" class="st0_1605199411491" vector-effect="non-scaling-stroke"/></g></g></svg>';
        this._svg.burger='<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\t viewBox="0 0 250.579 250.579" style="enable-background:new 0 0 250.579 250.579;" xml:space="preserve"><g id="Menu">\t<path style="fill-rule:evenodd;clip-rule:evenodd;" d="M22.373,76.068h205.832c12.356,0,22.374-10.017,22.374-22.373\t\tc0-12.356-10.017-22.373-22.374-22.373H22.373C10.017,31.323,0,41.339,0,53.696C0,66.052,10.017,76.068,22.373,76.068z\t\t M228.205,102.916H22.373C10.017,102.916,0,112.933,0,125.289c0,12.357,10.017,22.373,22.373,22.373h205.832\t\tc12.356,0,22.374-10.016,22.374-22.373C250.579,112.933,240.561,102.916,228.205,102.916z M228.205,174.51H22.373\t\tC10.017,174.51,0,184.526,0,196.883c0,12.356,10.017,22.373,22.373,22.373h205.832c12.356,0,22.374-10.017,22.374-22.373\t\tC250.579,184.526,240.561,174.51,228.205,174.51z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>';
        this._svg.cross='<svg version="1.2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" overflow="visible" preserveAspectRatio="none" viewBox="0 0 34 34" xml:space="preserve" y="0px" x="0px" id="Layer_1_1605199411492" width="32" height="32"><g transform="translate(1, 1)"><style type="text/css">	.st0_1605199411492{fill:#2A2C2B;}</style><path d="M17.4,16l7.3-7.3c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0L16,14.6L8.7,7.3c-0.4-0.4-1-0.4-1.4,0  c-0.4,0.4-0.4,1,0,1.4l7.3,7.3l-7.3,7.3c-0.4,0.4-0.4,1,0,1.4C7.5,24.9,7.7,25,8,25c0.3,0,0.5-0.1,0.7-0.3l7.3-7.3l7.3,7.3  c0.2,0.2,0.5,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L17.4,16z" class="st0_1605199411492" vector-effect="non-scaling-stroke"/></g></svg>';
        //
        this._eventHandlers.itemInteraction=function(){ self._toggleChildren(this); };
        this._eventHandlers.navMouseLeave=function(){ self._hideItemChildrenAll(); };
    }

    init(){
        this._mobileDetect();
        let self=this;
        //
        document.querySelector('#' + this._selectors.id + ' .' + this._selectors.btnOpen ).addEventListener('click',
            function(){ self._toggleNav(this) } );
        window.addEventListener('resize',function(){
            self._onResize();
        });
        this._setItemsEventHandler();
    }

    _mobileDetect(){
        return this._isMobile = !window.matchMedia("(min-width: 1024px)").matches;
    }

    /**
     * Навешивает обработчики на пункты меню
     *
     * @private
     */
    _setItemsEventHandler()
    {
        let itemEventNew, itemEventOld;
        const nav = document.querySelector('#' + this._selectors.id);
        //для мобильной версии обрабатываются только события клика
        if (this._isMobile)
        {
            itemEventNew = 'click';
            itemEventOld = 'mouseover';
            nav.removeEventListener('mouseleave', this._eventHandlers.navMouseLeave );
        }
        //для настольной версии обрабатываются события наведения мыши на элемент, а также уход мыши из родительского навигатора
        else
        {
            itemEventNew = 'mouseover';
            itemEventOld = 'click';
            nav.addEventListener('mouseleave', this._eventHandlers.navMouseLeave );
        }

        const items = document.querySelectorAll('#' + this._selectors.id + ' .' + this._selectors.itemHeaderText);
        for( let n=0; n<items.length; n++ )
        {
            items[n].removeEventListener(itemEventOld, this._eventHandlers.itemInteraction );
            items[n].addEventListener(itemEventNew, this._eventHandlers.itemInteraction );
        }
    }

    /**
     * Показывает/скрывает навигатационую панель
     *
     * @param visible Если "истина", то навигатор будет отображен, иначе скрыт
     * @private
     */
    _setNavVisible(visible = true){
        const nav = document.querySelector('#' + this._selectors.id);
        const navMenu=nav.querySelector(' .' + this._selectors.navMenu);
        const btnOpen=nav.querySelector(' .' + this._selectors.btnOpen);
        if (visible)
        {
            navMenu.classList.remove(this._selectors.navMenu_hidden);
            navMenu.classList.add(this._selectors.navMenu_visible);
            btnOpen.innerHTML=this._svg.cross;
        }
        else
        {
            navMenu.classList.remove(this._selectors.navMenu_visible);
            navMenu.classList.add(this._selectors.navMenu_hidden);
            btnOpen.innerHTML=this._svg.burger;
        }
    }

    /**
     * Отображает пункт меню как открытый (это только для тех элементов у которых есть потомки).
     *
     * @param item Пункт меню
     * @param open Если "истина", то пункт будет открытым, иначе закрытым
     * @private
     */
    _setItemOpen(item, open = true)
    {
        if (!item.classList.contains(this._selectors.item_hasChildren)) return;

        let itemHeaderSvg = item.querySelector('.' + this._selectors.itemSvg);
        let itemHeaderText = item.querySelector('.' + this._selectors.itemHeaderText);
        if (open)
        {
            itemHeaderSvg.classList.remove(this._selectors.itemSvg_closed);
            itemHeaderText.classList.add(this._selectors.itemHeaderUnderlineVisible);
            // itemHeaderText.classList.remove(this._selectors.itemHeaderUnderlineHidden);
        }
        else
        {
            itemHeaderSvg.classList.add(this._selectors.itemSvg_closed);
            // itemHeaderText.classList.add(this._selectors.itemHeaderUnderlineHidden);
            itemHeaderText.classList.remove(this._selectors.itemHeaderUnderlineVisible);
        }
    }

    /**
     * Скрывает все контейнеры дочерних пунктов меню во всем навигаторе (кроме контейнера главных пунктов).
     * Также меняет отображение этих пунктов на закрытые.
     *
     * @private
     */
    _hideItemChildrenAll(){
        let itemsChildrenAll = document.querySelectorAll('#' + this._selectors.id
            + ' .' + this._selectors.itemChildren + ' .' + this._selectors.itemChildren_dropdown
        );
        for(let n=0; n<itemsChildrenAll.length; n++)
        {
            let child = itemsChildrenAll[n];
            child.classList.remove(this._selectors.itemChildren_visible);
            child.classList.add(this._selectors.itemChildren_hidden);
            //
            let item = child.parentElement;
            this._setItemOpen(item, false);
        }
    }

    /**
     * Отображает все родительские пункты меню для указаного пункта меню.
     * Может показать как в компактном режиме (не будут показаные соседние пункты у родительских элементов), так и без него
     *
     * @param currentItem Пункт меню, для которого надо показатель родителей
     * @param isCompact Компактный режим отображения, либо нет
     * @private
     */
    _showParentsByItem(currentItem, isCompact=false)
    {
        do
        {
            //сразу делаем этот пункт открытым
            this._setItemOpen(currentItem);

            //условие выхода - когда получили главный пункт меню
            if (currentItem.classList.contains(this._selectors.item_main)) break;

            //если же это не главный пункт меню, то продолжаем переходить с уровня на уровень
            let previousItemsChildren = currentItem.parentElement;
            previousItemsChildren.classList.remove(this._selectors.itemChildren_hidden);
            previousItemsChildren.classList.add(this._selectors.itemChildren_visible);
            //если компактный режим, то ВСЕ элементы, кроме данного элемента скрываем, чтобы не мешались
            if (isCompact)
                for(let n=0; n<previousItemsChildren.children.length; n++)
                {
                    let child = previousItemsChildren.children[n];
                    if (currentItem === child) continue;
                    child.classList.remove(this._selectors.item_visible);
                    child.classList.add(this._selectors.item_hidden);
                    this._setItemOpen(child, false);
                }
            //
            currentItem = previousItemsChildren.parentElement;
        }
        while(true)
    }

    /**
     * Показывает/скрывает дочерние элементы пункта меню, если они у него есть
     *
     * @param textElement Элемент с текстом пункта меню
     * @private
     */
    _toggleChildren(textElement){
        /**
         * Контейнер пункта меню, у которого надо показать потомков (если есть)
         */
        const item = textElement.parentElement.parentElement;
        /**
         * Контейнер дочерних элементов пункта меню, который надо показать/скрыть
         */
        const itemsChildren=item.querySelector('.' + this._selectors.itemChildren );
        //если нет потомков, то ничего делать не надо
        if (!itemsChildren) return;
        //если контейнер с потомками невидимый, то показываем
        if (itemsChildren.classList.contains(this._selectors.itemChildren_hidden))
        {
            //скрываем все пункты меню, чтобы потом показать только нужные
            this._hideItemChildrenAll();
            //показываем контейнер с потомками невидимый, а также всех его детей (они могли быть скрыты по отдельности на мобильной версии)
            itemsChildren.classList.remove(this._selectors.itemChildren_hidden);
            itemsChildren.classList.add(this._selectors.itemChildren_visible);
            for(let n=0; n<itemsChildren.children.length; n++)
            {
                let child = itemsChildren.children[n];
                child.classList.remove(this._selectors.item_hidden);
                child.classList.add(this._selectors.item_visible);
            }
            //в завершении показываем все родительские пункты, которые стоят выше
            //в зависимости от мобильной версии или нет, показываем их компактно, либо нет
            this._showParentsByItem(item, this._isMobile);
        }
        //если "itemsChildren" видимый, то скрываем его
        else
        {
            //скрываем элемент "itemsChildren", но показываем все соседние пункты меню (если они есть)
            let itemsChildrenPrev = itemsChildren.parentElement.parentElement;
            this._setItemOpen(item, false);
            for(let n=0; n<itemsChildrenPrev.children.length; n++)
            {
                let child = itemsChildrenPrev.children[n];
                child.classList.remove(this._selectors.item_hidden);
                child.classList.add(this._selectors.item_visible);
            }
            itemsChildren.classList.remove(this._selectors.itemChildren_visible);
            itemsChildren.classList.add(this._selectors.itemChildren_hidden);
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
        if (navMenu.classList.contains(this._selectors.navMenu_visible))
        {
            this._setNavVisible(false);
        }
        else
        {
            this._setNavVisible();

        }
    }

    _onResize(){
        //в мобильной версии навигациия по-умолчанию всегда скрыта
        if (this._mobileDetect())
        {
            this._setNavVisible(false);
        }
        //в настольной версиии всегда видима
        else
        {
            this._hideItemChildrenAll(); //также скрываем все элементы, которые в мобильной версии могли быть показаны
            this._setNavVisible();
        }
        //переопределяем события для пунктов меню
        this._setItemsEventHandler();
    }

    /**
     * Рисует пункт меню
     *
     * @param data
     * @param isMain Указывает должен ли является этот пункт меню главным
     * @returns {string}
     * @private
     */
    _drawItem(data, isMain=false){
        //подготовка
        const itemMainClass = isMain? ' ' +  this._selectors.item_main : '';
        let hasChildrenClass = "";
        let itemSvgClass = "";
        let itemHeaderTextClass = ' ' + this._selectors.itemHeaderTextSimple;
        const hasChildren = data.children && data.children.length > 0;
        if (hasChildren)
        {
            hasChildrenClass = ' ' + this._selectors.item_hasChildren;
            itemSvgClass =  '<div class="' + this._selectors.itemSvg + ' ' + this._selectors.itemSvg_closed + '">' + this._svg.arrowSvg + '</div>';
            itemHeaderTextClass= ' ' + this._selectors.itemHeaderTextBold
                // + ' ' + this._selectors.itemHeaderUnderlineHidden
            ;
        }

        //рисование пункта
        let html='';
        html += '<li class="' + this._selectors.item + itemMainClass + hasChildrenClass + '" >';
        html +=     '<div class="' + this._selectors.itemHeader +  '">' +
                    itemSvgClass + '<a class="' + this._selectors.itemHeaderText + itemHeaderTextClass + '">' + HtmlHelper.encode( data.name ) + '</a>' +
                    '</div>';

        //рисование детей
        if (hasChildren)
        {
            html += '<ul class="' + this._selectors.itemChildren + ' ' + this._selectors.itemChildren_dropdown + ' ' + this._selectors.itemChildren_hidden +  '">';
            for( let n=0; n<data.children.length; n++)
                html += this._drawItem(data.children[n]);
            html += '</ul>';
        }
        html += '</li>';

        return html;
    }

    //TODO перенести часть по формированию главных пунктов в метод _drawItem
    draw(data){
        this._mobileDetect();
        const navVisibleHidden = this._isMobile? ' ' + this._selectors.navMenu_hidden : ' ' + this._selectors.navMenu_visible;

        let html =
            '<div id="' +  this._selectors.id + '"' + ' class="' + this._selectors.nav + '">' +
                '<div class="' + this._selectors.btnOpen +'">' +
                    this._svg.burger +
                '</div>' +
                '<nav class="' + this._selectors.navMenu + navVisibleHidden + '">' +
                    '<ul class="' + this._selectors.itemChildren + ' ' + this._selectors.itemChildren_visible
            + ' ' + this._selectors.itemChildren_main + '">';
        for (let n=0; n<data.length; n++)
        {
            html += this._drawItem(data[n], true);
        }
        html +=     '</ul>' +
                '</nav>' +
            '</div>';

        return html;
    }
}
