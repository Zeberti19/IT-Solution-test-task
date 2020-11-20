'use strict';
class Page02Model {

    _navData=null;

    constructor() {}

    getNavData(reload=false){
        if (reload || this._navData) return this._navData;

        //якобы загружаем данные с сервера
        this._navData=[
            {
                name: 'FÜR UNTERNEHMEN',
                children: [
                    {
                        name: 'Gebäudereinigung'
                    },
                    {
                        name: 'Betriebsverpflegung'
                    },
                    {
                        name: 'Personaldienstleistungen'
                    },
                    {
                        name: 'Gastronomie-Dienstleistunge'
                    }
                ]
            },
            {
                name: 'FÜR BEWERBER',
                children: [
                    {
                        name: 'Lvl2. FÜR BEWERBER #1'
                    },
                    {
                        name: 'Lvl2. FÜR BEWERBER #2',
                        children: [
                            {
                                name: 'Lvl3. FÜR BEWERBER #2. #1'
                            },
                            {
                                name: 'Lvl3. FÜR BEWERBER #2. #2'
                            },
                            {
                                name: 'Lvl3. FÜR BEWERBER #2. #3'
                            }
                        ]
                    },
                    {
                        name: 'Lvl2. FÜR BEWERBER #3'
                    },
                    {
                        name: 'Lvl2. FÜR BEWERBER #4'
                    }
                ]
            },
            {
                name: 'ÜBER UNS',
                children: [
                    {
                        name: 'Lvl2. ÜBER UNS. #1'
                    },
                    {
                        name: 'Lvl2. ÜBER UNS. #2',
                    },
                    {
                        name: 'Lvl2. ÜBER UNS. #3'
                    },
                    {
                        name: 'Lvl2. ÜBER UNS. #4',
                    },
                    {
                        name: 'Lvl2. ÜBER UNS. #5',
                    }
                ]
            },
            {
                name: 'KONTAKT',
                children: [
                    {
                        name: 'Lvl2. KONTAKT #1',
                        children: [
                            {
                                name: 'Lvl3. KONTAKT #1 #1'
                            },
                            {
                                name: 'Lvl3. KONTAKT. #1 #2'
                            }
                        ]
                    },
                    {
                        name: 'Lvl2. KONTAKT #2',
                        children: [
                            {
                                name: 'Lvl3. KONTAKT #2 #1'
                            },
                            {
                                name: 'Lvl3. KONTAKT #2 #2'
                            }
                        ]
                    },
                    {
                        name: 'Lvl2. KONTAKT #3',
                        children: [
                            {
                                name: 'Lvl3. KONTAKT #3. #1'
                            },
                            {
                                name: 'Lvl3. KONTAKT #3. #2'
                            },
                            {
                                name: 'Lvl3. KONTAKT #3. #3'
                            }
                        ]
                    },
                    {
                        name: 'Lvl2. KONTAKT #4',
                    }
                ]
            }
        ];

        return this._navData;
    }
}
