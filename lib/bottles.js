import {capitalize, downTo} from './helpers';

class Bottles {
  constructor() {
  }

  bottlePluraliser(verse) {
    return verse === 1 ? 'bottle' : 'bottles';
  }

  thirdPersonToIndefinite(verse) {
    return verse === 1 ? 'it' : 'one';
  }

  remainingBottleCounterFirstLine(verse) {
    return verse === 0 ? 'no more' : verse;
  }

  remainingBottleCounterFinalLine(verse) {
    if(verse === 1) {
      return 'no more';
    }
    if(verse === 0) {
      return 99;
    }
    return verse - 1;
  }

  finalLineCreator(verse) {
    return verse === 0 ? 'Go to the store and buy some more' : `Take ${this.thirdPersonToIndefinite(verse)} down and pass it around`;
  }

  verse(verse) {
    const firstLineBottle = this.bottlePluraliser(verse);
    const finalLineBottle = this.bottlePluraliser(verse - 1);
    const remainingBottlesFinalLine = this.remainingBottleCounterFinalLine(verse);
    const remainingBottlesFirstLine = this.remainingBottleCounterFirstLine(verse);
    const finalLine = this.finalLineCreator(verse);

    return capitalize( `${remainingBottlesFirstLine} ${firstLineBottle} of beer on the wall, ${remainingBottlesFirstLine} ${firstLineBottle} of beer.\n${finalLine}, ${remainingBottlesFinalLine} ${finalLineBottle} of beer on the wall.\n`);
  }


  verses() {
    const verse1 = arguments[0];
    const verse2 = arguments[1];

    const versesToAdd = downTo(verse1, verse2);

    const partialSong = versesToAdd.map(element => `${this.verse(element)}\n`).join('').trim();
    return `${partialSong}\n`;
  }

  song() {
    const versesToAdd = downTo(99, 0);
    const fullSong = versesToAdd.map(element => `${this.verse(element)}\n`).join('').trim();
    return `${fullSong}\n`;
  }
}

export { Bottles };