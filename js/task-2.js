class Storage {
  // Оголошуємо приватну властивість #items
  #items = [];

  // Оголошуємо метод класу constructor
  constructor(items) {
    this.#items = items;
  }

  // Оголошуємо метод getItems() який повертає масив поточних товарів
  getItems() {
    return this.#items;
  }

  // Оголошуємо метод addItem(newItem) який приймає новий товар і додоє його до масиву
  addItem(newItem) {
    this.#items.push(newItem);
  }

  // Оголошуємо метод removeItem(itemToRemove) який приймає рядок з назвою товару і видаляє його змасиву
  removeItem(itemToRemove) {
    const index = this.#items.indexOf(itemToRemove);
    if (index !== -1) {
      this.#items.splice(index, 1);
    }
  }
}

const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);

console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem('Scaner');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
