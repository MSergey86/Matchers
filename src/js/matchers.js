export function healthHero (hero) {     
    return hero.sort((hero1, hero2) => hero2.health - hero1.health);
}
