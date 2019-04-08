const enhancer = require('./enhancer.js');

it('should successfully repair an item to 100 durability', function() {
  let testItem = { name: "Jester\'s Staff", durability: 99, enhancement: 0 }

  let repairedItem = enhancer.repair(testItem);

  expect(repairedItem.durability).toEqual(100);
});

it('shouldn\'t break even if the item has broken', function() {
  let testItem = { name: "Jester\'s Staff", durability: undefined, enhancement: 0 }

  let repairedItem = enhancer.repair(testItem);

  expect(repairedItem.durability).toEqual(100);
});

it('shouldn\'t affect enhancement', function() {
  let testItem = { name: "Jester\'s Staff", durability: 90, enhancement: 1 }

  let repairedItem = enhancer.repair(testItem);

  expect(repairedItem.enhancement).toEqual(testItem.enhancement);
});

it('shouldn\'t affect names', function() {
  let testItem = { name: "Jester\'s Staff", durability: 90, enhancement: 1 }

  let repairedItem = enhancer.repair(testItem);

  expect(repairedItem.name).toEqual(testItem.name);
});