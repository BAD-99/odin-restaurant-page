import quickElement from "./element-helper";

export default function displayHome(){
    const content = document.querySelector('#content');

    const heroText = 
    `Here at Wingin' It, we make all kinds of wings! What kinds you ask? We make bone-in, boneless, saucy, dry, exotic, cretaceous, and mechanical! If'n you want the nuts and bolts, click the menu tab to see what we serve!`

    const heroContainer = document.createElement('div');
    heroContainer.classList.add('container');
    heroContainer.append(
        quickElement('h1', '', "Wingin' It!"),
        quickElement('p', '', heroText)
        );
    // const heroHeader = document.createElement('h1');
    // heroHeader.textContent = "Wingin' It!"

    // const hours = document.createElement('div');
    // hours.textContent = 'Hours';

    const hoursContainer = document.createElement('div');
    hoursContainer.classList.add('container');
    const hoursList = document.createElement('ul');
    hoursContainer.append(
        quickElement('h1', '', 'Hours'),
        hoursList
    )
    hoursList.append(
        quickElement('li','','Sunday: 11am - 1am'),
        quickElement('li','','Monday: 10am - 11pm'),
        quickElement('li','','Tuesday: 10am - 11pm'),
        quickElement('li','','Wednesday: 10am - 11pm'),
        quickElement('li','','Thursday: 10am - 12am'),
        quickElement('li','','Friday: 10am - 12am'),
        quickElement('li','','Saturday: 11am - 1am'),
    )

    content.append(heroContainer, hoursContainer);

}