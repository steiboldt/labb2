# Code translator
This is a node module for translating from english characters to morse and binary, and from binary and morse back to english. 

Feel free to use the module as you wish, or if you have any suggestions for changes see (Contribution)

## Installing
 *"npm install"* in the terminal.

```
npm install
```

## Using the module
The idea of the module is to simply translate english characters to Morse or binary. What you then do with this is completely up to you. 

## Example

The module works by comparing arrays of letters
```
  this.englishAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 
    'y', 'z', ' ']

    this.morseAlphabet = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", 
    ".---", "-.-", ".-..", "--", "-.", "---", ".---.", "--.-", ".-.",
    "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", " "]

```

The Methods are then used by calling the method with a string as parameter.

There are also ```validateCode()``` and ```validateText()``` methods checking for valid characters in the arrays. 
```
let exampleString = 'Hello'

// Logging out the results.
translator.englishToBinary(exampleString)) 
            // Result: 01001000 01000101 01001100 01001100 01001111
```

## Contribution

Best way to suggest changes is to open an issue here on GitHub. 

## 1dv610-mjukvarukvalitet-L1

Assignment for the course **1DV610** at the **Linnaeus University**.

## License

[MIT](https://choosealicense.com/licenses/mit/)