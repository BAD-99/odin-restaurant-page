import './style.css';

const header = document.createElement('div');
header.classList.add('flex');
const home = document.createElement('div');
home.textContent = 'Home';
const menu = document.createElement('div');
menu.textContent = 'Menu';
const contact = document.createElement('div');
contact.textContent = 'Contact';

header.append(home, menu, contact);
// console.log(header.className);
document.body.appendChild(header);