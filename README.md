# React task manager

```

```

## Základné princípy

- Všetko v reacte je Javascript
- React používa najčastejšie ešte react-dom, čo je virtuálny DOM, pretože samotný react ani toto neobsahuje. Je to teda v základe skôr knižnica. Často sa ešte používa babel. To nám umožňuje vytvárať tzv. jsx súbory, čo je Javascript a sú do neho "vmiešané" HTML atribúty. Najjednochšia forma implementácia na koniec nášho `<head>` v našom `index.html` súboru pridať nasledovné:

```
<script crossorigin src="js/react.development.js></script>
<script crossorigin src="js/react-dom.development.js></script>
<script crossorigin src="js/babel.min.js></script>
```

- Samozrejme, s tým sa poja niektoré nutné zmeny na ktoré si treba dávať pozor, ako napr. že `class` je rezervované slovo v JS a preto ak chceme napísať element, ktorý bude mať nejakú css triedu, nemôžeme učiniť tak formou `<p class="trieda"></p>` ale napr. toto bolo zmenené na `className` atribút. Teda správny zápis bude `<p className="trieda"></p>`. Platia aj ďalšie zmeny ako napr `tabindex` atribút musíme zapísať ako `tabIndex`, alebo `onchange` atribút musíme zapísať ako `onChange`. Proste každé nasledovné slovo začína veľkým písmenom napríklad. Postupne budú vysvetlené nižšie, v prípade, že vo svojej práci na ďalšie narazím
- Každý tag je uzatvorený. V HTML nemusí byť. Sú nepárové elementy ako napr `<hr>` alebo `<br>`, toto však neplatí v reacte, kde to musí byť uvedené ako párový element a teda zapísané ako `<hr />` alebo `<br />`. A je to z toho dôvodu, že všetko je Javascript.
- Komenty ktoré majú reagovať dynamicky majú stav. Používa sa na to `useState`, kde môže byť akýkoľvek objekt.

## TODO

[] Change texts to svg icons
[] Ask about problems viac console.log in tasks.map() when newTask is typing
[] Localstorage (react localstorage exists alterate coding?)
[] Header as separate component
[] Textform as separate compotent
[] Nice to have: ModalWindow with delete task
[] Nice to have: Optimize the edit or done (creating new array copy)
[] Nice to have: Sliding to done or delete
