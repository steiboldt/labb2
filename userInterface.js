import promptSync from 'prompt-sync';
import { Translator } from './Modules/code-translator/modules/Translator/Translator.js';

export class userInterface {
  constructor() {
    
    
  }

/**
 * Starting page for the console interface.
 */
  startingPage() {
    console.log('')
    console.log('= Welcome to the wonky translator app =')
    console.log('Please select using numbers')
    console.log('(1) From English to code')
    console.log('(2) From code to English')
    console.log('(0) Exit Application')

    const prompt = promptSync()
    const selection = prompt('Your selection: ')

    if (selection === '1') {
      this.stringToTranslate()
    } else if (selection === '2') {
        this.codeToEnglishpage()
    } else if (selection === '0') {
      return
    }
  }

  stringToTranslate() {
    console.log('')
    console.log('Please write what you would like to translate in the terminal')

    const prompt = promptSync()
    const stringToTranslate = prompt('Your text: ')

    this.englishToCodePage(stringToTranslate)
  }

  englishToCodePage(stringToTranslate) {
    console.log('')
    console.log('What codelanguage would you like to translate to?')
    console.log('(1) Morse')
    console.log('(2) Binary')
    console.log('(3) Caesarcipher (Rotation 13)')
    console.log('(0) Return to startpage')

    const prompt = promptSync()
    const selection = prompt('Your selection: ')

    if (selection === '1') {
      this.toMorse(stringToTranslate)
      this.keepTranslating(stringToTranslate)
    } else if (selection === '2') {
      this.toBinary(stringToTranslate)
      this.keepTranslating(stringToTranslate)
    } else if (selection === '3') {
      this.toCaesar(stringToTranslate)
      this.keepTranslating(stringToTranslate)
    } else if (selection === '0') {
      this.startingPage()
    }
    
  }

  keepTranslating(stringToTranslate) {
    console.log('')
    console.log('Would you like to keep translating?')

    const prompt = promptSync()
    const selection = prompt('y/n?: ')

    if (selection === 'y') {
      this.englishToCodePage(stringToTranslate)
    } else {
      this.startingPage()
    }
  }

  toMorse(stringToTranslate) {
    const translator = new Translator()

    console.log(translator.englishToMorse(stringToTranslate))
  }

  toBinary(stringToTranslate) {
    const translator = new Translator()

    console.log(translator.englishToBinary(stringToTranslate))
  }

  toCaesar(stringToTranslate) {
    const translator = new Translator()

    console.log(translator.englishToCaesar13(stringToTranslate))
  }

  codeToEnglishpage() {
    console.log('What codelanguage would you like to translate from?')
    console.log('(1) Morse')
    console.log('(2) Binary')
    console.log('(3) Caesarcipher (Rotation 13)')
    console.log('(0) Return to startpage')

    const prompt = promptSync()
    const selection = prompt('Your selection: ')
  }
}