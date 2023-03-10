const defLocalization = "no";


let localization;

let translate = {};

document.addEventListener("DOMContentLoaded", ()=>{
    setLocale(defLocalization);
    langSwitcher(defLocalization);
});

function langSwitcher(initialValue){
    const switcher = 
    document.querySelector("[changeLanguage]");
    switcher.value = initialValue;
    switcher.onchange = (e) => {
        setLocale(e.target.value);
    }
}

async function setLocale(newLocalization){
    if (newLocalization=== localization) return;
    const newTranslate =
     await fetchTranslateFor(newLocalization);
    localization = newLocalization;
    translate = newTranslate;
    translatePage();
}

async function fetchTranslateFor(newLocalization){
    const response = await fetch("./lang/" + newLocalization + ".json");
    return await response.json();
}

function translatePage(){
    document
    .querySelectorAll("[translateKey]")
    .forEach(translateTxt);
}

function translateTxt(word){
    const key = word.getAttribute("translateKey");
    const translation = translate[key];
    word.innerText = translation;
};

