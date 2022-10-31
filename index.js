import { Translator } from "./Modules/code-translator/modules/Translator/Translator.js";
import { userInterface } from "./userInterface.js";
/* import promptSync from 'prompt-sync'; */

const translator = new Translator()
const ui = new userInterface()

/* const prompt = promptSync()

const asdf = prompt('what is your name: ')

console.log(`HEJ DÄR ${asdf}`) */
ui.startingPage()






