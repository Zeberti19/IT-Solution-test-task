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
                        name: 'Lvl2. Gebäudereinigung2'
                    },
                    {
                        name: 'Lvl2. Betriebsverpflegung2',
                        children: [
                            {
                                name: 'Lvl3. Random number: ' + Math.random()*1000
                            },
                            {
                                name: 'Lvl3. Random number: ' + Math.random()*1000
                            },
                            {
                                name: 'Lvl3. Random number: ' + Math.random()*1000
                            }
                        ]
                    },
                    {
                        name: 'Lvl2. Personaldienstleistungen2'
                    },
                    {
                        name: 'Lvl2. Gastronomie-Dienstleistunge2',
                        children: [
                            {
                                name: 'Lvl3. Random number: ' + Math.random()*1000
                            },
                            {
                                name: 'Lvl3. Random number: ' + Math.random()*1000
                            }
                        ]
                    }
                ]
            },
            {
                name: 'ÜBER UNS',
                children: [
                    {
                        name: 'Lvl2. Gebäudereinigung3'
                    },
                    {
                        name: 'Lvl2. Betriebsverpflegung3',
                    },
                    {
                        name: 'Lvl2. Personaldienstleistungen3'
                    },
                    {
                        name: 'Lvl2. Gastronomie-Dienstleistunge3',
                    },
                    {
                        name: 'Lvl2. Gastronomie-Dienstleistunge3',
                    }
                ]
            },
            {
                name: 'KONTAKT',
                children: [
                    {
                        name: 'Lvl2. Gebäudereinigung4',
                        children: [
                            {
                                name: 'Lvl3. Random number: ' + Math.random()*1000
                            },
                            {
                                name: 'Lvl3. Random number: ' + Math.random()*1000
                            }
                        ]
                    },
                    {
                        name: 'Lvl2. Betriebsverpflegung4',
                        children: [
                            {
                                name: 'Lvl3. Random number: ' + Math.random()*1000
                            },
                            {
                                name: 'Lvl3. Random number: ' + Math.random()*1000
                            }
                        ]
                    },
                    {
                        name: 'Lvl2. Personaldienstleistungen4',
                        children: [
                            {
                                name: 'Lvl3. Random number: ' + Math.random()*1000
                            },
                            {
                                name: 'Lvl3. Random number: ' + Math.random()*1000
                            },
                            {
                                name: 'Lvl3. Random number: ' + Math.random()*1000
                            }
                        ]
                    },
                    {
                        name: 'Lvl2. Gastronomie-Dienstleistunge4',
                        children: [
                            {
                                name: 'Lvl3. Random number: ' + Math.random()*1000
                            }
                        ]
                    }
                ]
            }
        ];

        return this._navData;
    }
}
