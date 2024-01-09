import quickElement from "./element-helper";

export default function displayContact() {
    const content = document.querySelector('#content');

    const managerContainer = document.createElement('div');
    managerContainer.classList.add('container', 'employee-card');
    const managerInfo = document.createElement('ul');
    managerInfo.classList.add('employee-info');
    managerInfo.append(
        quickElement('li', 'employee-name', "'Goose'"),
        quickElement('li', 'employee-credential', 'Manager'),
        quickElement('li', 'employee-credential', '555-555-5555'),
        quickElement('li', 'employee-credential', 'goose15loose@notFake.com'),
    );
    const managerImage = document.createElement('img');
    managerImage.id = 'manager';
    managerContainer.append(managerInfo, managerImage);

    content.append(managerContainer);
}