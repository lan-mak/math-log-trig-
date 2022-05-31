import Character from '../character';
import Daemon from '../Daemon';
import Magician from '../Magician';

test('Атака обычная', () => {
  const user1 = new Daemon('user1');
  expect(user1.attack).toBe(10);
});

test('Дурман есть у персонажа', () => {
  const user2 = new Magician('user2');
  user2.stoned = true;
  expect(user2.stoned).toBe(true);
});

test('Насылание дурмана', () => {
  const user3 = new Magician('user3');
  user3.stoned = true;
  user3.distance = 2;
  expect(user3.attack).toBe(4);
});

test('Неправильное имя', () => {
  expect(() => {
    const user4 = new Magician('u') /* eslint-disable-line */
  }).toThrow();
});

test('Неправильный тип', () => {
  expect(() => {
    const user5 = new Character('user4', 'Bot') /* eslint-disable-line */
  }).toThrow();
});
