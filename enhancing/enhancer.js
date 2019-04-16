class Item {
  constructor(item) {
    this.name = item.name || 'Jester\'s Marotte';
    this.durability = item.durability || 100;
    this.enhancement = item.enhancement || 0;
    this.normalize();
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

  if (successfulEnhancement.enhancement < 20) {
    successfulEnhancement.enhancement += 1;
  }

  return successfulEnhancement;
}

function fail(item) {
  const failedEnhancement = new Item(item);
  if (failedEnhancement.enhancement < 15) {
    failedEnhancement.durability -= 5;
  } else {
    failedEnhancement.durability -= 10;
  }

  if (failedEnhancement.enhancement > 16) {
    failedEnhancement.enhancement -= 1;
  }
  
  return failedEnhancement;
}

function repair(item) {
  const repairedItem = new Item(item);
  repairedItem.durability = 100;

  return repairedItem;
}

function get(item) {
  const renamedItem = new Item(item);
  if (renamedItem.enhancement > 0) {
    renamedItem.name = `[+${renamedItem.enhancement}] ${renamedItem.name}`
  }

  return renamedItem;
}

module.exports = {
  Item,
  succeed,
  fail,
  repair,
  get,
};