// import { test } from 'media-typer';
// import { ExpectationFailed } from 'http-errors';
import destructuring from '../destructuring';

test('test1', () => {
  const result = destructuring({
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [{
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
    },
    ],
  });

  expect(result).toEqual([
    [8, 'Двойной выстрел', 'http://...', 'Двойной выстрел наносит двойной урон'],
    [9, 'Нокаутирующий удар', 'http://...', 'Описание недоступно'],
  ]);
});
