import promptSync from 'prompt-sync';
import { Translator } from './Modules/code-translator/modules/Translator/Translator.js';

export class userInterface {
  constructor() {
    
    
  }

startApp() {
  this.startingPage()
  this.startingPageNav()
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
  }

  startingPageNav() {
    const prompt = promptSync()
    const selection = prompt('Your selection: ')
    const navSelection1 = '1'
    const navSelection2 = '2'
    const navSelection0 = '0'
    const validSelection = ['1', '2', '0']
    

    if (validSelection.includes(selection) === true) {
      if (selection === navSelection1) {
        this.stringToTranslate()
      } else if (selection === navSelection2) {
          this.runCodeToEnglishPage()
      } else if (selection === navSelection0) {
        return
      } 
    } else {
      throw new Exception('Error: Invalid input')
    }
  }

  /**
   * Run ui and navigation for code to english page.
   */
  runCodeToEnglishPage() {
    this.codeToEnglishPage()
    this.codeToEnglishPageNav()
  }

  /**
   * the page for translating english into codelanguages.
   */
  codeToEnglishPage() {
    console.log('')
    console.log('What codelanguage would you like to translate from?')
    console.log('(1) Morse')
    console.log('(2) Binary')
    console.log('(3) Caesarcipher (Rotation 13)')
    console.log('(0) Return to startpage')
  }

  /**
   * Navigating the codeToEnglishPage
   */
  codeToEnglishPageNav() {
    const prompt = promptSync()
    const selection = prompt('Your selection: ')
    const navSelection1 = '1'
    const navSelection2 = '2'
    const navSelection3 = '3'
    const navSelection0 = '0'
    const validSelection = ['1', '2', '3', '0']

    if (validSelection.includes(selection) === true) {
      if (selection === navSelection1) {
        this.fromMorse()
        this.keepTranslatingCode()
      } else if (selection === navSelection2 ) {
        this.fromBinary()
        this.keepTranslatingCode()
      } else if (selection === navSelection3) {
        this.fromCaesar()
        this.keepTranslatingCode()
      } else if (selection === navSelection0) {
        this.startingPage()
    }
    } else {
      throw new Error('Error: Invalid input')
    }

  }

  /**
   * Translate from Morse method.
   */
  fromMorse() {
    console.log('')
    console.log('To translate from morse use symbols . or - ')
    console.log('the program uses spaces to seperate letters')
    console.log('hence write .- -... -.-.')

    const prompt = promptSync()
    const morseText = prompt('Your text: ')

    const translator = new Translator() 
    console.log(translator.translateFromCode(morseText, 'morse'))
  }

  /**
   * Translate from binary method.
   */
  fromBinary() {
    console.log('')
    console.log('To translate from morse use 0 or 1 ')
    console.log('the program uses spaces to seperate letters')
    console.log('hence write 01000001 01000010 01000011')

    const prompt = promptSync()
    const binaryText = prompt('Your text: ')

    const translator = new Translator() 
    console.log(translator.translateFromCode(binaryText, 'binary'))
  }

  /**
   * Translate from caesar cipher 13 method.
   */
  fromCaesar() {
    console.log('')
    console.log('To translate from Caesarcipher use A-Z.')
    console.log('Use capital letters and seperate letters using spaces')
   

    const prompt = promptSync()
    const caesarText = prompt('Your text: ')

    const translator = new Translator() 
    console.log(translator.translateFromCode(caesarText, 'caesar'))
  }

  /**
   * prompt asking what to translate into code.
   */
  stringToTranslate() {
    console.log('')
    console.log('Please write what you would like to translate in the terminal')

    const prompt = promptSync()
    const stringToTranslate = prompt('Your text: ')

    console.log(this.englishToCodePage(stringToTranslate))
  }

  /**
   * The page for translating into codelanguages.
   *
   * @param {String} stringToTranslate 
   */
  englishToCodePage(stringToTranslate) {
    
    console.log('')
    console.log('What codelanguage would you like to translate to?')
    console.log('(1) Morse')
    console.log('(2) Binary')
    console.log('(3) Caesarcipher (Rotation 13)')
    console.log('(0) Return to startpage')

    this.englishToCodeNav(stringToTranslate)
    

    
  }

  englishToCodeNav(stringToTranslate) {
    const prompt = promptSync()
    const selection = prompt('Your selection: ')
    const navSelection1 = '1'
    const navSelection2 = '2'
    const navSelection3 = '3'
    const navSelection0 = '0'
    const validSelection = ['1', '2', '3', '0']

    if (validSelection.includes(selection) === true) {
      if (selection === navSelection1 ) {
        this.toMorse(stringToTranslate)
        this.keepTranslatingEnglish(stringToTranslate)
      } else if (selection === navSelection2) {
        this.toBinary(stringToTranslate)
        this.keepTranslatingEnglish(stringToTranslate)
      } else if (selection === navSelection3) {
        this.toCaesar(stringToTranslate)
        this.keepTranslatingEnglish(stringToTranslate)
      } else if (selection === navSelection0) {
        this.startingPage()
      }
    } else {
      throw new Error('Error: Invalid input')
    }
  }

  /**
   * Prompt for continuing to translate code.
   */
  keepTranslatingCode() {
    console.log('')
    console.log('Would you like to keep translating?')
    
    const prompt = promptSync()
    const selection = prompt('y/n?: ')
    const keepTranslatingYes = 'y'

    if (selection === keepTranslatingYes) {
      this.runCodeToEnglishPage()
    } else {
      return
    }
  }

  /**
   * Prompt asking if you want to keep translating.
   *
   * @param {String} stringToTranslate 
   */
  keepTranslatingEnglish(stringToTranslate) {
    console.log('')
    console.log('Would you like to keep translating?')

    const prompt = promptSync()
    const selection = prompt('y/n?: ')
    const keepTranslatingYes = 'y'

    if (selection === keepTranslatingYes) {
      this.englishToCodePage(stringToTranslate)
    } else {
      return
    }
  }

  /**
   * Method for translating the string into morse.
   *
   * @param {String} stringToTranslate 
   */
  toMorse(stringToTranslate) {
    const translator = new Translator()

    console.log(translator.translateToCode(stringToTranslate, 'morse'))
  }

  /**
   * Method for translating the string into binary.
   *
   * @param {String} stringToTranslate 
   */
  toBinary(stringToTranslate) {
    const translator = new Translator()

    console.log(translator.translateToCode(stringToTranslate, 'binary'))
  }

  /**
   * Method for translating the string into caesarciper.
   *
   * @param {String} stringToTranslate 
   */
  toCaesar(stringToTranslate) {
    const translator = new Translator()

    console.log(translator.translateToCode(stringToTranslate, 'caesar'))
  }

  
}