console.log("This is a test to ensure everything is running correctly.");
import contentCreator from './content';
import staticContent from './static';

const header = staticContent.addHeader();
const footer = staticContent.addFooter();

document.body.prepend(header);
document.body.appendChild(footer);

window.addEventListener('load', (event) => {
    //getting first child of header which is navigator then getting the first child of navigator which is home link
    event.preventDefault();
    const home = document.getElementById('home');
    home.tabIndex = 0;
    home.focus();
    contentCreator.getHome();

});