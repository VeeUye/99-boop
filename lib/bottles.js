import { downTo } from './helpers';

class Bottles {
  constructor() {
  }

  pluraliser(num) {
    return num === 2 ? 'bottle' : 'bottles';
  }

  verse(num) {
    const pluralised = this.pluraliser(num);
    return `${num} bottles of beer on the wall, ${num} bottles of beer.\nTake one down and pass it around, ${num - 1} ${pluralised} of beer on the wall.\n`;
  }

}

export { Bottles };