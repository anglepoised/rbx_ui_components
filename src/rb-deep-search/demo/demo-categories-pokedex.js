define([
], function () {

    return [
        {
            anchor: 'Pokedex',
            label: 'Pokedex',
            hidden: true,
            items: [
                {
                    label: 'Electric',
                    anchor: 'Electric',
                    items: [
                        {
                            label:'Magnemite',
                            value:'magnemite'
                        },
                        {
                            label:'Magneton',
                            value:'magneton'
                        },
                        {
                            label:'Pichu',
                            value:'pichu'
                        },
                        {
                            label:'Pikachu',
                            value:'pikachu'
                        },
                        {
                            label:'Raichu',
                            value:'raichu'
                        }
                    ]
                },
                {
                    label: 'Fire',
                    anchor: 'Fire',
                    items: [
                        {label:'Charizard', value:'charizard'},
                        {label:'Charmander', value:'charmander'},
                        {label:'Charmeleon', value:'charmeleon'},
                        {label:'Ninetails', value:'ninetails'},
                        {label:'Vulpix', value:'vulpix'}
                    ]
                },
                {
                    label: 'Grass',
                    anchor: 'Grass',
                    items: [
                        {label:'Bulbasaur', value:'bulbasaur'},
                        {label:'Gloom', value:'gloom'},
                        {label:'Ivysaur', value:'ivysaur'},
                        {label:'Oddish', value:'oddish'},
                        {label:'Venusaur', value:'venusaur'},
                        {label:'Vileplume', value:'vileplume'}
                    ]
                },
                {
                    label: 'Water',
                    anchor: 'Water',
                    items: [
                        {label:'Blastoise', value:'blastoise'},
                        {label:'Psyduck', value:'psyduck'},
                        {label:'Slowbro', value:'slowbro'},
                        {label:'Squirtle', value:'squirtle'},
                        {label:'Wartortle', value:'wartortle'}
                    ]
                }
            ]
        }
    ];

});
