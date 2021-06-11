//`const character = {
//`    name: 'Лучник',
//`    type: 'Bowman',
//`    health: 50,
//`    level: 3,
//`    attack: 40,
//`    defence: 10,
//`    special: [
//`      {
//`        id: 8,
//`        name: 'Двойной выстрел',
//`        icon: 'http://...',
//`        description: 'Двойной выстрел наносит двойной урон'
//`      }, 
//`      {
//`        id: 9,
//`        name: 'Нокаутирующий удар',
//`        icon: 'http://...'
//`        // <- обратите внимание, описание "засекречено"
//`      }
//`    ]	
//`  }

function Destructuring(charact) {
    const spec = charact.special;

    let massNew = [];
    for (let i = 0; i < spec.length; i++) {
        massNew[i] = [spec[i].id, spec[i].name, spec[i].icon, ('description' in spec[i]) ? spec[i].description : 'Описание недоступно'];
    }

    //console.log(massNew);
    return massNew;
}

// Destructuring(character);