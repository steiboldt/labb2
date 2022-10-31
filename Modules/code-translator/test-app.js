import { Translator } from './modules/Translator/Translator.js'

// Test app to display methods in the module
//
// !! Note that this module only works with characters a-z !!

const translator = new Translator()

let englishToMorseString = 'This will be translated into morse'
let morseToEnglishString = '- .... .. ... .-- .. .-.. .-.. -... . - .-. .- -. ... .-.. .- - . -.. .. -. - --- . -. --. .-.. .. ... ...' //thiswillbetranslatedintoenglish

let englishToBinaryString = 'Hello'
let binaryToEnglishString = '01001000 01000101 01001100 01001100 01001111'

let englishToCaesarString = "caesar"
let caesarToEnglishString = "P N R F N E"



// Logging out the results.
console.log(translator.englishToMorse(englishToMorseString))
console.log(translator.morseToEnglish(morseToEnglishString))

console.log(translator.englishToBinary(englishToBinaryString))
console.log(translator.binaryToEnglish(binaryToEnglishString))

console.log(translator.englishToCaesar13(englishToCaesarString))
console.log(translator.caesar13ToEnglish(caesarToEnglishString))