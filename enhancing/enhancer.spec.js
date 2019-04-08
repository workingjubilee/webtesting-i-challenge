const enhancer = require('./enhancer.js');

it('should always return a new item', function() {

  const jestRod = { name: "Jester\'s Marotte", durability: 99, enhancement: 1 }

  expect(enhancer.repair(jestRod)).not.toBe(jestRod);
  expect(enhancer.succeed(jestRod)).not.toBe(jestRod);
  expect(enhancer.fail(jestRod)).not.toBe(jestRod);
});

it('should successfully repair an item to 100 durability', function() {
  let testItem = { name: "Jester\'s Marotte", durability: 99, enhancement: 0 }

  let repairedItem = enhancer.repair(testItem);

  expect(repairedItem.durability).toEqual(100);
});

it('shouldn\'t break even if the item is bugged', function() {
  // const buggedItem = { name: "Jester\'s Marotte", durability: undefined, enhancement: -1 }

  // let repairedItem = enhancer.repair(buggedItem);

  expect(enhancer.repair({ name: 'Jester\'s Marotte', durability: undefined, enhancement: -1}).durability).toBe(value => typeof(value) === 'number');
  expect(enhancer.repair({ name: 'Jester\'s Marotte', durability: undefined, enhancement: -1}).enhancement).toEqual(0);
  expect(enhancer.repair({ name: 'Jester\'s Marotte', durability: 'what?', enhancement: -1}).durability).toEqual(100);
  expect(enhancer.repair({ name: 'Jester\'s Marotte', durability: 'what?', enhancement: 'howdy'}).enhancement).toEqual(0);
});

it('shouldn\'t affect enhancement', function() {
  let testItem = { name: "Jester\'s Marotte", durability: 90, enhancement: 1 }

  let repairedItem = enhancer.repair(testItem);

  expect(repairedItem.enhancement).toEqual(testItem.enhancement);
});

it('shouldn\'t affect names', function() {
  let testItem = { name: "Jester\'s Marotte", durability: 90, enhancement: 1 }

  let repairedItem = enhancer.repair(testItem);

  expect(repairedItem.name).toEqual(testItem.name);
});

it

// - If the item's enhancement is less than 15, the durability of the item is decreased by 5.
// - If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
// - If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).