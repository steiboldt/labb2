export class Translator {
  constructor () {

    this.englishAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 
    'y', 'z', ' ']

    this.caesarCipher13 = ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M',' ']

    this.morseAlphabet = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", 
    ".---", "-.-", ".-..", "--", "-.", "---", ".---.", "--.-", ".-.",
    "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", " "]

    this.binaryAlphabet = ['01000001', '01000010', '01000011', '01000100', '01000101', '01000110', '01000111', '01001000', '01001001', '01001010', '01001011', '01001100', '01001101', '01001110', '01001111', '01010000', '01010001', '01010010', '01010011', '01010100', '01010101', '01010110', '01010111', '01011000', '01011001', '01011010', ' ']
  }


  /**
   * Checks if there are other characters than the ones in the code-alphabets.
   *
   * @param {string} text string to be validated
   * @returns an array with the characaters from the string
   */
  validateCode(text) {
    let textString = text
    let stringArray = textString.split(' ')

    stringArray.forEach(letter => {
      if (!this.binaryAlphabet.includes(letter) && !this.morseAlphabet.includes(letter) && !this.caesarCipher13.includes(letter)) {
        throw new Error('Error: This is not a valid input')
      }
    })
    return stringArray
  }


  /**
   * Checks if there are other characters than the ones in the english alphabet.
   *
   * @param {string} text string to be validated. 
   * @returns an array with the characters from the string.
   */
  validateText(text) {
    let textString = text.toLowerCase()
    let stringArray = textString.split('')

    stringArray.forEach(letter => {
      if (!this.englishAlphabet.includes(letter)) {
        throw new Error('Error: This is not a valid input, only a-z')
        
      }
    })
    return stringArray
  }

  /**
   * Method for translating from english to caesar cipher with a rotation of 13.
   *
   * @param {Array} stringArray the string to translate split up into an array.
   * @returns String translated from english to Caesar cipher with a rotation of 13.
   */
  englishToCaesar13(stringArray) {
    stringArray = this.validateText(stringArray)
    let answer = ''


    for (let i = 0; i < stringArray.length; i++) {
      for (let j = 0; j < this.englishAlphabet.length; j++) {
        if (this.englishAlphabet[j] === stringArray[i])  {
          answer = answer + this.caesarCipher13[j] + ' '
        }
        
      }
      
    }
    return answer
  }

  /**
   * 
   * @param {Array} stringArray the string to translate split up into an array.
   * @returns String translated from caesar cipher with a rotation of 13 to english.
   */
  caesar13ToEnglish(stringArray) {
    stringArray = this.validateCode(stringArray)
    let answer = ''

    for (let i = 0; i < stringArray.length; i++) {
      for (let j = 0; j < this.caesarCipher13.length; j++) {
        if (this.caesarCipher13[j] === stringArray[i]) {
          answer = answer + this.englishAlphabet[j]
        }
      }
      
    }
    return answer
  }
  /**
   * 
   * @param {Array} stringArray the string to translate split up into an array.
   * @returns String translated from binary to english
   */
  binaryToEnglish(stringArray) {
    stringArray = this.validateCode(stringArray)
    let answer = ''

    for (let i = 0; i < stringArray.length; i++) {
      for (let j = 0; j < this.binaryAlphabet.length; j++) {
        if (this.binaryAlphabet[j] === stringArray[i]) {
          answer = answer + this.englishAlphabet[j]
        }
      }
      
    }
    return answer
  }


  /**
   * Method for translating text to binary. 
   *
   * @param {Array} stringArray the string to translate split up into an array.
   * @returns string translated into binary code. 
   */
  englishToBinary(stringArray) {
    stringArray = this.validateText(stringArray)
    let answer = ''

    for (let i = 0; i < stringArray.length; i++) {
      for (let j = 0; j < this.englishAlphabet.length; j++) {
        if (this.englishAlphabet[j] === stringArray[i])  {
          answer = answer + this.binaryAlphabet[j] + ' '
        }
        
      }
      
    }
    return answer
  }


  /**
   * Method for translating a string (a-z) into morsecode.
   * 
   * @param {Array} stringArray the string to translate split up into an array.
   * @returns String translated into morsecode.
   */
  englishToMorse(stringArray) {
    stringArray = this.validateText(stringArray)
    let answer = ''


    for (let i = 0; i < stringArray.length; i++) {
      for (let j = 0; j < this.englishAlphabet.length; j++) {
        if (this.englishAlphabet[j] === stringArray[i])  {
          answer = answer + this.morseAlphabet[j] + ' '
        }
        
      }
      
    }
    return answer
  }


  /**
   * Method for translating morse into english. 
   *
   * @param {Array} stringArray the string to translate split up into an array.
   * @returns String translated into english from morsecode.
   */
  morseToEnglish(stringArray) {
    stringArray = this.validateCode(stringArray)
    let answer = ''

    for (let i = 0; i < stringArray.length; i++) {
      for (let j = 0; j < this.morseAlphabet.length; j++) {
        if (this.morseAlphabet[j] === stringArray[i]) {
          answer = answer + this.englishAlphabet[j]
        }
      }
      
    }
    return answer
  }
}