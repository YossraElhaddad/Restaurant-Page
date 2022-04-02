import './style.css';
import contentCreator from './content';

const staticContent = (() => {
    const content = document.querySelector('#content');

    const removeContent = () => {
        if (content.hasChildNodes) {
            for (let i = 0; i < content.children.length; i++) {
                content.children[i].remove();
            }
        }
    }

    const createLists = () => {
        const tabList = document.createElement('ul');
        const home = document.createElement('li');
        const menu = document.createElement('li');
        const contact = document.createElement('li');

        home.setAttribute('id', 'home');
        menu.tabIndex = 0;
        contact.tabIndex = 0;

        home.textContent = "Home";
        menu.textContent = "Menu";
        contact.textContent = "Contacts";

        tabList.append(home, menu, contact);

        home.addEventListener('click', () => {
            removeContent();
            contentCreator.getHome();
        });

        menu.addEventListener('click', () => {
            removeContent();
            contentCreator.getMenu();
        });

        contact.addEventListener('click', () => {
            removeContent();
            contentCreator.getContacts();
        });

        return tabList;

    }
    const addHeader = () => {
        const header = document.createElement('header');
        const navigator = document.createElement('nav');

        navigator.appendChild(createLists());
        header.appendChild(navigator);
        return header;
    }



    const addFooter = () => {
        const footer = document.createElement('footer');
        const reference = document.createElement('div');
        reference.textContent = "Images copyrights go here";
        footer.appendChild(reference);
        return footer;

    }


    return { addHeader, addFooter };

})();

export default staticContent;