import { healthHero } from "../matchers";

    test('healthHeroHealthy', () => {
        const hero = 
          [
            {name: 'мечник', health: 10},
            {name: 'маг', health: 100},
            {name: 'лучник', health: 80},
          ]

        const result = healthHero(hero);
        expect(result).toEqual(
            [
            {name: 'маг', health: 100},
            {name: 'лучник', health: 80},
            {name: 'мечник', health: 10},
            ]);
    })

