import { downTo, capitalize } from './helpers';

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

  remainingBottlesFirstVerse(verse) {
    if(verse === 0) {
      return 'no more';
    }
    return verse;
  }

  remainingBottlesFinalVerse(verse) {
    if(verse === 1) {
      return 'no more';
    }
    if(verse === 0) {
      return 99;
    }
    return verse - 1;
  }

  finalVerse(verse) {
    return verse === 0 ? 'Go to the store and buy some more' : `Take ${this.thirdPersonToIndefinite(verse)} down and pass it around`;
  }


  

  verse(verse) {
    const firstVerseBeer = this.beerPluraliser(verse);
    const finalVerseBeer = this.beerPluraliser(verse - 1);
    // const thirdPersonToIndefinite = this.thirdPersonToIndefinite(verse);
    const remainingBottlesFinalVerse = this.remainingBottlesFinalVerse(verse);
    const remainingBottlesFirstVerse = this.remainingBottlesFirstVerse(verse);
    const finalVerse = this.finalVerse(verse);

    return capitalize( `${remainingBottlesFirstVerse} ${firstVerseBeer} of beer on the wall, ${remainingBottlesFirstVerse} ${firstVerseBeer} of beer.\n${finalVerse}, ${remainingBottlesFinalVerse} ${finalVerseBeer} of beer on the wall.\n`);
  }

}

export { Bottles };