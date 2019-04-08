const enhancer = require('./enhancer.js');


const theDice = new enhancer.Item({ name: 'Gambler\'s Dice' });

function randomize() {
  this.durability = Math.floor(Math.random()*100);
  this.enhancement = Math.floor(Math.random()*20)
  return this;
}

theDice.roll = randomize;

test('the Dice for usage in testing', function() {

  console.log(theDice.roll());

  expect(theDice.roll().name).toEqual(theDice.roll().name);
  expect(theDice.roll().durability).not.toEqual(theDice.roll().durability);
  expect(theDice.roll().enhancement).not.toEqual(theDice.roll().enhancement);
});

it('should always return a new item', function() {
  const jestRod = { name: "Jester\'s Marotte", durability: 90, enhancement: 1 };

  expect(enhancer.repair(jestRod)).not.toBe(jestRod);
  expect(enhancer.succeed(jestRod)).not.toBe(jestRod);
  expect(enhancer.fail(jestRod)).not.toBe(jestRod);
});

it('should return a complete item even if the world has gone crazy', function() {

  const emptiness = {};

  expect(enhancer.repair(emptiness)).toHaveProperty('name');
  expect(enhancer.repair(emptiness)).toHaveProperty('durability');
  expect(enhancer.repair(emptiness)).toHaveProperty('enhancement');

  expect(enhancer.succeed(emptiness)).toHaveProperty('name');
  expect(enhancer.succeed(emptiness)).toHaveProperty('durability');
  expect(enhancer.succeed(emptiness)).toHaveProperty('enhancement');

  expect(enhancer.fail(emptiness)).toHaveProperty('name');
  expect(enhancer.fail(emptiness)).toHaveProperty('durability');
  expect(enhancer.fail(emptiness)).toHaveProperty('enhancement');
});

it('should use the right class', function() {
  const jestRod = { name: "Jester\'s Marotte", durability: 90, enhancement: 1 };

  const repairedItem = enhancer.repair(jestRod);
  const enhancedItem = enhancer.succeed(jestRod);
  const failedItem = enhancer.fail(jestRod);

  expect(repairedItem).toBeInstanceOf(enhancer.Item);
  expect(enhancedItem).toBeInstanceOf(enhancer.Item);
  expect(failedItem).toBeInstanceOf(enhancer.Item);
});

it('should successfully repair an item to 100 durability', function() {
  const jestRod = { name: "Jester\'s Marotte", durability: 90, enhancement: 0 };

  expect(enhancer.repair(jestRod)).toHaveProperty('durability', 100);
});

it('should successfully repair an item to 100 durability', function() {
  const jestRod = { name: "Jester\'s Marotte", durability: 90, enhancement: 0 };

  expect(enhancer.repair(jestRod)).toHaveProperty('durability', 100);
});

it('should work even if the item is bugged', function() {
  const bugStaff = { name: 100, durability: 'bugs!', enhancement: 'more bugs!' }
  const nerfStick = { name: "Underpowered Voulge", durability: -100, enhancement: -10 };

  expect(enhancer.repair(bugStaff)).toHaveProperty('durability', 100)
});

it('shouldn\'t affect enhancement', function() {
  const jestRod = { name: "Jester\'s Marotte", durability: 90, enhancement: 1 };

  expect(enhancer.repair(jestRod).enhancement).toEqual(jestRod.enhancement);
});

it('shouldn\'t affect names', function() {
  const jestRod = { name: "Jester\'s Marotte", durability: 90, enhancement: 0 };

  let repairedItem = enhancer.repair(jestRod);

  expect(repairedItem.name).toEqual(jestRod.name);
});

it('shouldn\'t return overpowered items', function() {
  const buffStick = { name: "Overpowered Halberd", durability: 107, enhancement: 21 };
  const maxAxe = { name: "Maximal Axe", durability: 100, enhancement: 20 }

  expect(enhancer.succeed(buffStick).enhancement).toEqual(20);
  expect(enhancer.succeed(maxAxe).enhancement).toEqual(20);
  expect(enhancer.repair(buffStick).durability).toEqual(100);
  expect(enhancer.repair(maxAxe).durability).toEqual(100);
})

it('shouldn\'t return underpowered items', function() {
  const nerfStick = { name: "Underpowered Voulge", durability: -100, enhancement: -10 };
  const minSickle = { name: "Minimal Sickle", durability: 100, enhancement: 20 }

  expect(enhancer.fail(nerfStick).enhancement).toEqual(0);
  expect(enhancer.fail(minSickle).enhancement).toEqual(0);
})

// - If the item's enhancement is less than 15, the durability of the item is decreased by 5.
// - If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
// - If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).