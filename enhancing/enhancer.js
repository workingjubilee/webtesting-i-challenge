class Item {
  constructor(item) {
    this.name = item.name || "Sword of 1000 Truths";
    this.durability = item.durability || 100;
    this.enhancement = item.enhancement || 0;
  }

// ### Items.

// - Items have `name`, `durability` and `enhancement`.
// - The item's `enhancement` it's a number from 0 to 20.
// - The item's `durability` it's a number from 0 to 100.
}




function succeed(item) {
  // - The item's enhancement increases by 1.
// - If the item enhancement level is 20, the enhancement level is not changed.
// - The durability of the item is not changed.
  return { ...item };
}

function fail(item) {

// - If the item's enhancement is less than 15, the durability of the item is decreased by 5.
// - If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
// - If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).

  return { ...item };
}

function repair(item) {
  const repairedItem = new Item(item);
  repairedItem.durability = 100;
  
  return repairedItem;
}

function get(item) {
//   - Add a `get()` method to the `enhancer` object that takes an `item` and **returns a new item** with the `name` property modified according to the following rules:
//   - if the enhancement level is 0, the the name is not modified.
//   - if the enhancement level is greater than 0, change the name to include the enhancement level, preceded by a plus sign ( + ), between square brackets before the item's name. Example: the name of a "Iron Sword" enhanced to 7 would be "[+7] Iron Sword".
// - Design and build a Web Application to test the enhancing module you implemented for the MVP.
// - Work on [this repository for extra practice testing JavaScript Functions](https://github.com/LambdaSchool/Testing).
  return { ...item };
}

module.exports = {
  Item,
  succeed,
  fail,
  repair,
  get,
};