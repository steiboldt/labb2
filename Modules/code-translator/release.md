
# Mall för inlämning laboration 1, 1dv610
​
## Checklista
  - [ x] Jag har skrivit all kod och reflektioner själv. Jag har inte använt mig av andras kod för att lösa uppgiften.
  - [ x] Mina testresultat är skrivna utifrån utförd testning ( och inte teoretiskt: "det bör fungera" :) )
  - [ x] Koden är objektorienterad
  - [ x] Jag har skrivit en modul som riktar sig till programmerare
​
## Egenskattning och mål
  - [ ] Jag är inte klar eftersom jag vet att jag saknar något. (Då skall du inte lämna in! Lämna då istället in på restlaboration.)
  - [ x] Jag eftersträvar med denna inlämning godkänt betyg (E-D)
    - [ x] De flesta testfall fungerar
    - [ x] Koden är förberedd på Återanvändning
    - [ x] All kod samt historik finns i git 
    - [ x] Kodkvaliterskraven är ifyllda
    - [ x] Reflektion är skriven utifrån bokens kapitel 
  - [ ] Jag eftersträvar med denna inlämning högre betyg (C-B) och anser mig uppfylla alla extra krav för detta. 
    - [ ] Samtliga testfall är skrivna    
    - [ ] Testfall är automatiserade
    - [ ] Det finns en tydlig beskrivning i hur modulen skall användas (i git)
    - [ ] Kodkvalitetskraven är varierade 
  - [ ] Jag eftersträvar med denna inlämning högsta betyg (A) 
​
Förtydligande: Examinator kommer sätta betyg oberoende på vad ni anser. 
​
## Återanvändning
Beskriv hur du anpassat din kod och instruktioner för att någon annan programmerare skall kunna använda din modul. Om du skrivit instruktioner för din användare, länka till dessa. Om inte, beskriv här hur någon skall göra för att använda din modul.

- Jag har bara en enda klass med metoder, och i metoderna i denna har jag döpt till englishToMorse() osv för att så att det ska vara så enkelt som möjligt att förstå vad metoderna gör. 

- Tanken är att använda denna modulen för att översätta till och från olika kodspråk. Man enkelt kallar på metoden till språket man vill översätta till med en sträng som parameter

- Jag har även skrivit en [Readme](README.md) med exempel för att visa hur modulen skall användas. 
​
## Beskrivning av min kod
Beskriv din kod på en hög abstraktionsnivå. En kort beskrivning av dina viktigaste klasser och metoder. Skapa gärna ett klassdiagram som bild. Använd det ni lärt er så här långt i 1dv607. Kommunicera så att jag kan förstå.

- Tanken med modulen är att en användare ska kunna översätta till och från olika kodspråk. Det jag gör är att jämföra arrayer med bokstäver. Man får sedan ut en sträng med bokstäver eller tecken. Klassen [*Translator*](./modules/Translator/Translator.js) Innehåller arrayer med bokstäver och de metoder jag skrivit för att översätta mellan engelska, morse, binärt och ceasarshiffer.
​
## Hur jag testat
Jag har gjort manuella tester som dokumenterats i [Testrapport](Testrapport.md) där jag testat de olika metoderna med input och förväntat resultat.
​
### Testfall
Lista de enskilda testfallen. **Fetmarkera** sådant som du själv fyllt i. En rad per testfall. Om ni använder vertyg för testning kan ni ha en bild här med testrapporten. Tänk på att kommunicera till mig. Vad fungerar?, vad fungerar inte? Hur är det testat? Vilka delar testas inte?
​
| Vad testas      | input | output | utfall PASS/FAIL |
| --------- | --------- | ------ | ------- |
| englishToMorse() |'This will be translated into morse'|'- .... .. ...   .-- .. .-.. .-..   -... .   - .-. .- -. ... .-.. .- - . -..   .. -. - ---   -- --- .-. ... . '|PASS|
| morseToEnglish() |'- .... .. ... .-- .. .-.. .-.. -... . - .-. .- -. ... .-.. .- - . -.. .. -. - --- . -. --. .-.. .. ... ....'|'thiswillbetranslatedintoenglish|PASS|
| englishToBinary()|'Hello'|'01001000 01000101 01001100 01001100 01001111'|PASS|
| binaryToEnglish()|'01001000 01000101 01001100 01001100 01001111'|'hello'|PASS|
| englishToCaesar13()|'caesar'|'P N R F N E'|PASS|
| caesar13ToEnglish()|''P N R F N E''|'caesar'|PASS|
| validateText() genom att skriva in felaktigt tecken i englishToCaesar13() |'caesarö'|Throw error|PASS|
​| validateCode() genom att skriva in felaktigt tecken i caesar13ToEnglish()|'P N R F N E ö|Throw error|PASS|
​
## Kodkvalitetskrav
​
**Fetmarkera** de "regler" som används ur CC. Ni kan frångå tabellformat om ni vill. Skapa direktlänkar till er kod där det är lämpligt. Skriv så att jag kan förstå.
​
### Namngivning
binaryToEnglish   | answer  |

Intention-revealing name   |Pronouncable name   |


| Namn och förklaring  | Reflektion                                   |
| -------------------  | ---------------------------------------------|
| **morseAlphabet** - Array med tecken från morse-alfabet                    |  **Class Names** - variabelnament är ett substantiv, och inte ett verb. **Intention-revealing name** Namnet säger väldigt tydlig vad det är för något, men dock inte att det är en array. 
| **validateText** - kollar så inga andra tecken än a-z skickas in som parameter                    |  **Class Names** - Variabelnament är ett verb. **Intention-revealing name** Att metoden validerar text är glasklart. Men vad är det den validerar?                                             |
| **Translator** - namnet på klassen i modulen                     |  **Add meaningful context** - Här tycker jag inte mycket mer än Translator som behövs. Den har som jobb att översätta, men kanske inte exakt vad som översätts.                                          |
| **binaryToEnglish** - Metod som översätter binär kod till bokstäver a-z                    | **Pronouncable names** - Viktigt att kunna uttala namnen för att kunna kommunicera med andra människor, men också för sin egen del för att faktiskt komma ihåg vad saker heter.                                             |
| **caesarCipher13** - Array med tecken från Caesarshiffer                    | **Avoid disinformation** Här kan man kanske tro att 13 är oväsentligt, men det är det faktiskt inte, det är för att tydliggöra att det är caesar shiffer med 13 rotationer.                                              |
​ 
### Funktioner
​
| Metodnamn och förklaring  | Reflektion                                   |
| -------------------  | ---------------------------------------------|
| **validateText** - kollar så inga andra tecken än a-z skickas in som parameter                     |  **Do one thing** Denna funktionen gör till synes bara en sak, men det är också den som ansvara för att splitta upp strängen till en array med bokstäver. |
| **binaryToEnglish** - Metod som översätter binär kod till bokstäver a-z                     | **Use descriptive names** Här tycker jag metoden beskriver väldigt väl vad det är den gör.|
| **englishToMorse**  - Metod som översätter engelska bokstäver till morse                   |  **Small!** Metoden är i mina ögon liten och det och är också för att den endast gör en enda sak.|
| **caesar13ToEnglish** - Metoder som översätter caesarshiffer till bokstäver a-z                     |  **Verbs and keywords** Detta är inget verb, metodnamner har "to" vilket är en preposition. Man hade kanske kunnat döpa den till något annat, men jag kände att detta namnet var tydligare.|
| **validateCode** - kollar så inga andra tecken än de som finns i alfabetsarrayerna skickas |**Blocks and indenting** Denna metoden har ett långt logiskt uttryck med ! och && som är långt och jobbigt att läsa. |

## Laborationsreflektion


As a whole I agree with the rules set by the author, and what feels validating is reading atleast some of them and know that you have been actively thinking about them all along, particularly intention-revealing names. My go-to way of thinking when it comes to naming is that the name should tell you enough, to the point where comments are not needed. However thinking of naming in terms of verbs for methods and nouns for variables is something I haven't actively been thinking of, but will for sure do in the future. 

Avoiding mental mapping is another one I really took to heart since I know this is something I have done personally, and on the flipside I have a really hard time reading code written by others, or by myself in the past. Using i,j or k in loops and if-statements is something probably every programmer is guilty, and I know I'm not helping myself or others with this and I will definitely take this with me, and be more explicit with my code. 

Out of everything in the chapter that struck me the hardest it would have to be "Clarity is king". It has been what I have been striving for since i started programming merely a year ago, but there are clearly things I haven't thought of in the slightest, and things I have thought about, but can improve a considerable amount. 