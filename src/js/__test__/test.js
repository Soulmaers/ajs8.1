import Daemon from '../Daemon';
import Magician from '../Magician';

test('Атака без дурмана', () => {
  const magic = new Magician();
  magic.attack = 100;
  const result = magic.attack;
  expect(result(2)).toEqual(90);
});

test('Атака с дурманом', () => {
  const daemon = new Daemon();
  daemon.attack = 100;
  daemon.stoned = true;
  const result = daemon.attack;
  expect(result(2)).toEqual(85);
});
