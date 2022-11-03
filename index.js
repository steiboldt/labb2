import { Translator } from "./Modules/code-translator/modules/Translator/Translator.js";
import { userInterface } from "./userInterface.js";
/* import promptSync from 'prompt-sync'; */

const translator = new Translator()
const ui = new userInterface()


try {
  ui.startApp()
} catch (exception) {
  console.log(exception)
  ui.startApp()
}







