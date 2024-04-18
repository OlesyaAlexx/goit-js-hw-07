class StringBuilder {
  // Оголошуємо приватну властивсть класу - об"єкт
  #value = {
    initialValue: '',
  };

  // Оголошуємо метод класу constructor
  constructor(value) {
    this.#value.initialValue = value;
  }

  // Оголошуємо метод getValue() який повертає поточне значення приватної властивості value
  getValue() {
    return this.#value.initialValue;
  }

  // Оголошуємо метод  padEnd(str) який додає параметр str (рядок) в кінець значення приватної властивості value об'єкта
  padEnd(str) {
    this.#value.initialValue += `${str}`;
  }

  // Оголошуємо метод padStart(str) який додає параметр str (рядок) на початок значення приватної властивості value об'єкта
  padStart(str) {
    this.#value.initialValue = `${str}${this.#value.initialValue}`;
  }

  // Оголошуємо метод padBoth(str) який додає параметр str (рядок)  і на початок значення приватної властивості value об'єкта і в кінець властивості
  padBoth(str) {
    this.#value.initialValue = `${str}${this.#value.initialValue}${str}`;
  }
}

const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="
