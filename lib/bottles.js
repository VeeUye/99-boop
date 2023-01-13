import {capitalize, downTo} from './helpers';

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
    const remainingBottlesFinalVerse = this.remainingBottlesFinalVerse(verse);
    const remainingBottlesFirstVerse = this.remainingBottlesFirstVerse(verse);
    const finalVerse = this.finalVerse(verse);

    return capitalize( `${remainingBottlesFirstVerse} ${firstVerseBeer} of beer on the wall, ${remainingBottlesFirstVerse} ${firstVerseBeer} of beer.\n${finalVerse}, ${remainingBottlesFinalVerse} ${finalVerseBeer} of beer on the wall.\n`);
  }

  verses2() {
    const verseNumberOne = arguments[0];
    const verseNumberTwo = arguments[1];

    const verseOne = this.verse(verseNumberOne);
    const verseTwo = this.verse(verseNumberTwo);

    return `${verseOne}\n${verseTwo}`;
  }

  verses() {
    const verse1 = arguments[0];
    const verse2 = arguments[1];

    const versesToAdd = downTo(verse1, verse2);

    if (versesToAdd.length === 2) {

      return `${this.verse(versesToAdd[0])}\n${this.verse(versesToAdd[1])}`;
    }
    return `${this.verse(versesToAdd[0])}\n${this.verse(versesToAdd[1])}\n${this.verse(versesToAdd[2])}`;

  }

  song() {
    const versesToAdd = downTo(99, 0);
    const fullSong = versesToAdd.map(element => `${this.verse(element)}\n`).join('').trim();
    return `${fullSong}\n`;
  }



}

export { Bottles };