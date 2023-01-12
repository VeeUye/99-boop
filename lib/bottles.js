import { downTo } from './helpers';

class Bottles {
  constructor() {
  }

  beerPluraliser(verse) {
    if(verse === 1) {
      return 'bottle';
    }
    return 'bottles';
  }

  thirdPersonToIndefinite(verse) {
    return verse === 1 ? 'it' : 'one';
  }

  remainingBottles(verse) {
    return verse === 1 ? 'no more' : verse - 1;
  }
  

  verse(verse) {
    const firstVerseBeer = this.beerPluraliser(verse);
    const finalVerseBeer = this.beerPluraliser(verse - 1);
    const pronoun = this.thirdPersonToIndefinite(verse);
    const remainingBottles = this.remainingBottles(verse)

    return `${verse} ${firstVerseBeer} of beer on the wall, ${verse} ${firstVerseBeer} of beer.\nTake ${pronoun} down and pass it around, ${remainingBottles} ${finalVerseBeer} of beer on the wall.\n`;
  }

}

export { Bottles };