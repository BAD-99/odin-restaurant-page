import quickElement from "./element-helper";

export default function displayMenu() {
    const content = document.querySelector('#content');

    const chickenContainer = document.createElement('div');
    chickenContainer.classList.add('container');
    const chickenList = document.createElement('ul');
    chickenContainer.append(
        quickElement('h1', '', 'Chicken Wings'),
        quickElement('p', '', 'Chicken wings come in bone-in and boneless.'),
        chickenList
    );
    chickenList.append(
        quickElement('li', '', '6 piece combo: $5.99'),
        quickElement('li', '', '8 piece combo: $7.49'),
        quickElement('li', '', '10 piece combo: $8.99'),
        quickElement('li', '', '20 wings: $15.99'),
        quickElement('li', '', '30 wings: $22.99'),
        quickElement('li', '', '50 wings: $35.99'),
    );

    const pterodactylContainer = document.createElement('div');
    pterodactylContainer.classList.add('container');
    const pterodactylList = document.createElement('ul');
    pterodactylContainer.append(
        quickElement('h1', '', 'Pterodactyl Wings'),
        quickElement('p', '', 'Pterodactyl wings are fossil-in or fossilless. Fossil returns are $1,000 off your order for complete wings. Ask your server about fossil returns!'),
        pterodactylList
    )
    pterodactylList.append(
        quickElement('li', '', 'Quarter wing: $9,599.49'),
        quickElement('li', '', 'Half wing: $15,029.99'),
        quickElement('li', '', 'Full wing: $18,999.99'),
        quickElement('li', '', '2 wings: $24,099.99'),
        quickElement('li', '', '4 wings: $37,999.49'),
        quickElement('li', '', '8 wings: $64,049.99'),
    )

    const planeContainer = document.createElement('div');
    planeContainer.classList.add('container');
    const planeList = document.createElement('ul');
    planeContainer.append(
        quickElement('h1', '', 'Plane Wings'),
        quickElement('p', '', 'Plane wings come in bolt-in or boltless. Limit 2 per person.'),
        planeList
    );
    planeList.append(
        quickElement('li', '', 'Cessna 172: $79,999.99'),
        quickElement('li', '', 'DHC-6 Twin Otter: $899,999.99'),
        quickElement('li', '', "A-10 'Warthog': $3,599,999.99"),
        quickElement('li', '', 'Airbus A320: $20,199,999.99'),
        quickElement('li', '', 'Boeing 747: $83,679,999.99'),
    );

    const sauceContainer = document.createElement('div');
    sauceContainer.classList.add('container');
    const sauceList = document.createElement('ul');
    sauceContainer.append(
        quickElement('h1', '', 'Sauces'),
        quickElement('p', '', 'Our sauces are hand-made each day! 2 free sauces for each order, additional sauces are $0.75 extra.'),
        sauceList
    );
    sauceList.append(
        quickElement('li', '', 'Sweet and Spicy BBQ'),
        quickElement('li', '', 'Mild Buffalo'),
        quickElement('li', '', 'Spicy Ranch'),
        quickElement('li', '', 'Hot Buffalo'),
        quickElement('li', '', 'Jurassic Jalepeno'),
        quickElement('li', '', 'Mesozoic Mustard'),
        quickElement('li', '', 'Hydraulic Fluid'),
        quickElement('li', '', 'BBQ 747'),
    )


    content.append(chickenContainer, pterodactylContainer, planeContainer, sauceContainer);
}