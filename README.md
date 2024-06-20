# React + Vite

Deployed app https://jobchaser.vercel.app/ 

## Del 4

-  #### Vad är Redux Toolkit? 

    Redux Toolkit är ett paket från Redux-teamet som är designat för att göra det enklare att använda Redux. Det inkluderar en olika hjälpverktyg och funktioner som standardiserar och förenklar arbetsflödet för att skapa och hantera bland annat state i en applikation. 

- #### När, i vilka situationer vill man använda Redux Toolkit?

    1. Komplexa state-hanteringar: När din applikation har ett komplext globalt state som behöver hanteras på ett organiserat och skalbart sätt.

    2. Minskad Boilerplate-kod: När man vill minska mängden boilerplate-kod som vanlig Redux-implementation ofta kräver.

    3. Asynkrona åtgärder: När man behöver hantera saker asynkront (som API-anrop) och vill om man använda en standardiserad metod för detta.

 - #### Beskriv typiska områden hur man använder Typescript i React? (ex props, event, useReducer, etc)

    1. Props: TypeScript används för att typdefiniera props som skickas till komponenter. Detta säkerställer 
    att komponenterna får rätt typer av   data  och underlättar felsökning och dokumentation.

    2. State: TypeScript används för att typdefiniera lokalt state i funktionella komponenter med hjälp av useState.

    3. Events: TypeScript används för att typdefiniera eventobjekt i eventhanterare.

    4. useReducer: TypeScript används för att typdefiniera actions och state i reducer-funktioner.

    5. Custom Hooks: TypeScript används för att skapa typdefinierade custom hooks som kan återanvändas i flera komponenter.



## Del 3

- ### Vad menas med Reacts ekosystem? 

    React-ekosystemet består av olika bibliotek, verktyg och resurser som används tillsammans med React för att bygga webbapplikationer. Dessa verktyg och bibliotek kompletterar React och utökar dess funktionalitet.

- ### Nämn några andra viktiga bibliotek i Reacts ekosystem förutom React Router och React Hook Form?

    #### Några andra viktiga bibliotek i React-ekosystemet inkluderar:

    1. Redux: En förvaltningsbibliotek för tillstånd som används för att hantera global tillstånd i React-applikationer.

    2. Axios: En HTTP-klient för att göra AJAX-förfrågningar från webbläsaren eller Node.js.

- ### Vad är fördelen med att använda React Hook Form?
    
    Fördelarna med att använda React Hook Form:

    1. Enkelhet: React Hook Form erbjuder enkel integration och en minimalistisk API.

    2. Prestanda: Det är optimerat för prestanda eftersom det minimerar omdirigeringar och uppdateringar av komponenter.

    3. Förbättrad användarupplevelse: Genom att använda React Hook Form kan man enkelt skapa formulär med validering utan att behöva använda kontrollerade komponenter.

- ### Vad är syftet med useContext? Vilket problem med  props löser den?

    Syftet med useContext-hooken är att dela globalt tillstånd mellan flera komponenter utan att behöva skicka props genom hela komponentträdet. Detta löser problemet med "prop drilling", där props måste skickas igenom flera nivåer av komponenter för att nå en komponent längre ner i hierarkin.

- ### Vilka fördelar finns det att använda Tailwind / nackdelar?

    #### Fördelarna med att använda Tailwind CSS inkluderar:

    1. Snabb utveckling: Tailwind CSS tillåter snabb och effektiv utveckling genom att tillhandahålla färdiga komponenter och klasser för vanliga designmönster.

    2. Anpassningsbarhet: Det är mycket anpassningsbart och tillåter utvecklare att skapa en unik design utan att behöva skriva anpassad CSS.

    3. Responsivitet: Tailwind CSS inkluderar inbyggda responsiva klasser som gör det enkelt att skapa responsiv design.

    4. Mindre filstorlek: Tailwind CSS gör det möjligt att skapa mindre CSS-filer jämfört med traditionell CSS, vilket resulterar i snabbare laddningstider för webbplatser.

    #### Nackdelarna med att använda Tailwind CSS kan vara:

    1. Inlärningskurva: För nybörjare kan inlärningskurvan vara brant på grund av den omfattande listan över klasser och koncept.

    2. Större HTML-storlek: Användningen av många klasser kan resultera i en större HTML-storlek, vilket kan påverka laddningstiden negativt.



