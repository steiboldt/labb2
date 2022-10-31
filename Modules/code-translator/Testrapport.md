# Testrapport

## UC 1
**Beskrivning** - Kalla på metoden **englishToMorse()** med englishToMorseString som parameter.

```
let englishToMorseString = 'This will be translated into morse'

console.log(translator.englishToMorse(englishToMorseString)
```
**Förväntat utfall**
```
- .... .. ...   .-- .. .-.. .-..   -... .   - .-. .- -. ... .-.. .- - . -..   .. -. - ---   -- --- .-. ... .
```

## UC 2
**Beskrivning** - Kalla på metoden **morseToEnglish()** med morseToEnglishString som parameter.

```
let morseToEnglishString = '- .... .. ... .-- .. .-.. .-.. -... . - .-. .- -. ... .-.. .- - . -.. .. -. - --- . -. --. .-.. .. ... ....'

console.log(translator.morseToEnglish(morseToEnglishString))
```

**Förväntat utfall**
```
thiswillbetranslatedintoenglish
```

## UC 3
**Beskrivning** - Kalla på metoden **englishToBinary()** med englishToBinaryString som parameter.

```
let englishToBinaryString = 'Hello'

console.log(translator.englishToBinary(englishToBinaryString))

```

**Förväntat utfall**
```
01001000 01000101 01001100 01001100 01001111
```

## UC 4 
**Beskrivning** - Kalla på metoden **binaryToEnglish()** med binaryToEnglishString som parameter.
```
let binaryToEnglishString = '01001000 01000101 01001100 01001100 01001111'

console.log(translator.binaryToEnglish(binaryToEnglishString))
```

**Förväntat utfall**
```
hello
```

## UC 5
**Beskrivning** - Kalla på metoden **englishToCaesar13()** med englishToCaesarString som parameter.
```
let englishToCaesarString = "caesar"

console.log(translator.englishToCaesar13(englishToCaesarString))
```

**Förväntat utfall**
```
P N R F N E
```

## UC 6 
**Beskrivning** - Kalla på metoden **caesar13ToEnglish()** med caesarToEnglishString som parameter.
```
let caesarToEnglishString = "P N R F N E"

console.log(translator.caesar13ToEnglish(caesarToEnglishString))
```

**Förväntat utfall**
```
caesar
```

## UC 7 
**Beskrivning** - Testar valideringsmetoden **ValidateText()** genom att skriva in felaktigt tecken i englishToCaesar13()
```
let englishToCaesarString = "caesarö"

console.log(translator.englishToCaesar13(englishToCaesarString))
```

**Förväntat utfall**
```
Error: Error: This is not a valid input, only a-z
```

## UC 8
**Beskrivning** - Testar valideringsmetoden **ValidateCode()** genom att skriva in felaktigt tecken i caesar13ToEnglish()
```
let caesarToEnglishString = "P N R F N E ö"

console.log(translator.caesar13ToEnglish(caesarToEnglishString))
```

**Förväntat utfall**
```
throw new Error('Error: This is not a valid input')
```