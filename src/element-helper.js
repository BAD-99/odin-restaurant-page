export default function quickElement(type, classes, text){
    const element = document.createElement(type);
    if(classes != undefined && classes != ''){
        element.classList.add(classes);
    }
    if(text != undefined && text != ''){
        element.textContent = text;
    }
    return element;
}