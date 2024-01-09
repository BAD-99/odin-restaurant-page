import './style.css';
import quickElement from './element-helper';
import displayHome from './home';
import displayMenu from './menu';
import displayContact from './contact';

const content = document.createElement('div');
content.id = 'content';

function clearContent(){
    content.innerHTML = '';
}

const header = quickElement('div', 'flex');
const home = document.createElement('button');
home.textContent = 'Home';
home.addEventListener('click', ()=>{
    clearContent();
    displayHome();
});
const menu = document.createElement('button');
menu.textContent = 'Menu';
menu.addEventListener('click', ()=>{
    clearContent();
    displayMenu();
});

const contact =document.createElement('button');
contact.textContent = 'Contact';
contact.addEventListener('click', ()=>{
    clearContent();
    displayContact();
    // displayMenu();
});
header.append(home, menu, contact);
document.body.append(header, content);

// displayHome();
displayMenu();