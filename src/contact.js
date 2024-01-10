import quickElement from "./element-helper";

export default function displayContact() {
    const content = document.querySelector('#content');

    const managerContainer = document.createElement('div');
    managerContainer.classList.add('container', 'employee-card');
    const managerInfo = document.createElement('ul');
    managerInfo.classList.add('employee-info');
    managerInfo.append(
        quickElement('li', 'employee-name', "Goose"),
        quickElement('li', 'employee-credential', 'Manager'),
        quickElement('li', 'employee-credential', '555-555-5555'),
        quickElement('li', 'employee-credential', 'goose15loose@notFake.com'),
    );
    const managerImage = document.createElement('img');
    // managerImage.classList.add('manager-picture');
    // managerImage.src = 'images/mohamadreza-azhdari-4lD0wEPzSjU-unsplash.jpg';
    managerImage.id = 'manager';
    managerContainer.append(managerImage, managerInfo);


    const chefContainer = document.createElement('div');
    chefContainer.classList.add('container', 'employee-card');
    const chefInfo = document.createElement('ul');
    chefInfo.classList.add('employee-info');
    chefInfo.append(
        quickElement('li', 'employee-name', "Rex"),
        quickElement('li', 'employee-credential', 'Chef'),
        quickElement('li', 'employee-credential', '555-555-5555'),
        quickElement('li', 'employee-credential', 'RexTexMex@notFake.com'),
    );
    const chefImage = document.createElement('img');
    chefImage.id = 'chef';
    chefContainer.append(chefImage, chefInfo);

    const waitressContainer = document.createElement('div');
    waitressContainer.classList.add('container', 'employee-card');
    const waitressInfo = document.createElement('ul');
    waitressInfo.classList.add('employee-info');
    waitressInfo.append(
        quickElement('li', 'employee-name', "Pelly"),
        quickElement('li', 'employee-credential', 'Waitress'),
        quickElement('li', 'employee-credential', '555-555-5555'),
        quickElement('li', 'employee-credential', 'pelly64@notFake.com'),
    );
    const waitressImage = document.createElement('img');
    waitressImage.id = 'waitress';
    waitressContainer.append(waitressImage, waitressInfo);

    content.append(managerContainer, chefContainer, waitressContainer);
}