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

const header = quickElement('header', 'flex');
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

const footer = quickElement('footer');
const citations = document.createElement('div');
footer.append(citations);

const mohamadrezaCite = document.createElement('a');
mohamadrezaCite.href = 'https://unsplash.com/photos/a-person-wearing-a-helmet-and-goggles-4lD0wEPzSjU';
mohamadrezaCite.textContent = 'Mohamadreza Azhdari';

const amyCite = document.createElement('a');
amyCite.href = 'https://unsplash.com/photos/brown-and-black-dinosaur-illustration-SByb8Ch9XcQ';
amyCite.textContent = 'Amy-Leigh Barnard';

const valeriiaCite = document.createElement('a');
valeriiaCite.href = 'https://unsplash.com/photos/white-pelican-on-brown-wooden-dock-during-daytime-veFlkAIjKJk';
valeriiaCite.textContent = ' Valeriia Miller';

const leoCite = document.createElement('a');
leoCite.href = 'https://unsplash.com/photos/four-fighter-planes-in-grayscale-photography-DTZaI8lolUk';
leoCite.textContent = 'Leo';


citations.append(
    quickElement('span','','Images used from: '),
    mohamadrezaCite,
    amyCite,
    valeriiaCite,
    leoCite
);

document.body.append(header, content, footer);

// displayHome();
displayHome();