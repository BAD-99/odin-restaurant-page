export default function displayHome(){
    const content = document.querySelector('#content');

    const hours = document.createElement('div');
    hours.textContent = 'Hours';

    content.append(hours);
    
}