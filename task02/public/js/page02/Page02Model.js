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
                        name: 'Gebäudereinigung2'
                    },
                    {
                        name: 'Betriebsverpflegung2',
                        children: [
                            {
                                name: 'Random number: ' + Math.random()*1000
                            },
                            {
                                name: 'Random number: ' + Math.random()*1000
                            },
                            {
                                name: 'Random number: ' + Math.random()*1000
                            }
                        ]
                    },
                    {
                        name: 'Personaldienstleistungen2'
                    },
                    {
                        name: 'Gastronomie-Dienstleistunge2',
                        children: [
                            {
                                name: 'Random number: ' + Math.random()*1000
                            },
                            {
                                name: 'Random number: ' + Math.random()*1000
                            }
                        ]
                    }
                ]
            },
            {
                name: 'ÜBER UNS',
                children: [
                    {
                        name: 'Gebäudereinigung3'
                    },
                    {
                        name: 'Betriebsverpflegung3',
                    },
                    {
                        name: 'Personaldienstleistungen3'
                    },
                    {
                        name: 'Gastronomie-Dienstleistunge3',
                    },
                    {
                        name: 'Gastronomie-Dienstleistunge3',
                    }
                ]
            },
            {
                name: 'KONTAKT',
                children: [
                    {
                        name: 'Gebäudereinigung4',
                        children: [
                            {
                                name: 'Random number: ' + Math.random()*1000
                            },
                            {
                                name: 'Random number: ' + Math.random()*1000
                            }
                        ]
                    },
                    {
                        name: 'Betriebsverpflegung4',
                        children: [
                            {
                                name: 'Random number: ' + Math.random()*1000
                            },
                            {
                                name: 'Random number: ' + Math.random()*1000
                            }
                        ]
                    },
                    {
                        name: 'Personaldienstleistungen4',
                        children: [
                            {
                                name: 'Random number: ' + Math.random()*1000
                            },
                            {
                                name: 'Random number: ' + Math.random()*1000
                            },
                            {
                                name: 'Random number: ' + Math.random()*1000
                            }
                        ]
                    },
                    {
                        name: 'Gastronomie-Dienstleistunge4',
                        children: [
                            {
                                name: 'Random number: ' + Math.random()*1000
                            }
                        ]
                    }
                ]
            }
        ];

        return this._navData;
    }
}
