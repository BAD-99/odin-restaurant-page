import './style.css';
import quickElement from './element-helper';
import displayHome from './home';

const header = quickElement('div', 'flex');
const home = quickElement('button', '', 'Home');
const menu = quickElement('button','','Menu');
const contact = quickElement('button', '', 'Contact');

const content = document.createElement('div');
content.id = 'content';

header.append(home, menu, contact);
document.body.append(header, content);

displayHome();