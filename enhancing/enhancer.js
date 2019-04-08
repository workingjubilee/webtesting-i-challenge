class Item {
  constructor(item) {
    this.name = item.name || 'Jester\'s Marotte';
    this.durability = item.durability || 100;
    this.enhancement = item.enhancement || 0;
    this.normalize();

    // if (this.enhancement !)
  }

  normalize() {
    if (this.durability < 0) {
      this.durability = 0;
    }

    if (this.durability > 100) {
      this.durability = 100;
    }

    if (this.enhancement > 20) {
      this.enhancement = 20;
    }

    if (this.enhancement < 0) {
      this.enhancement = 0;
    }

    if (typeof(this.durability) !== 'number') {
      this.durability = 0;
    }

    if (typeof(this.enhancement) !== 'number') {
      this.enhancement = 0;
    }

    if (typeof(this.name) !== 'string') {
      this.name = 'Bug Staff';
    }
  }
}


function succeed(item) {
  const successfulEnhancement = new Item(item);
  // - The item's enhancement increases by 1.
// - If the item enhancement level is 20, the enhancement level is not changed.
// - The durability of the item is not changed.
  return successfulEnhancement;
}

function fail(item) {
  const failedEnhancement = new Item(item);

// - If the item's enhancement is less than 15, the durability of the item is decreased by 5.
// - If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
// - If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).

  return failedEnhancement;
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