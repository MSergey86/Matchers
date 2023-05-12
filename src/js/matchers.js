export function healthHero (hero) {
    const countHero = hero.length;
    let result = [];

        for (let j = 0; j < countHero; j ++ ) {
          let max = 0;
          let indexMax = 0;
            for (let i = 0; i < hero.length; i ++) {
              if (hero[i].health > max) {
                max = hero[i].health;
                indexMax = i;
              }
            }
          result.push(hero[indexMax])
          hero.splice(indexMax, 1);
      }
      
    return result;
}
