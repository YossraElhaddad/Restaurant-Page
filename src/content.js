import './style.css';

const navContent = (() => {
    //const body = document.querySelector('body');
    const content = document.querySelector('#content');
    const getHome = () => {
        const homeContent = document.createElement('div');

        const title = document.createElement('p');
        const description = document.createElement('div');
        const hours = document.createElement('div');
        const location = document.createElement('div');

        hours.textContent = "Saturday: 10:00 AM - 11:00 PM\nSunday: 8:00 AM - 9:00 PM\nMonday: 8:00 AM - 9:00 PM\nTuesday: 8:00 AM - 9:00 PM\nWednesday: 10:00 AM - 11:00 PM\nThursday: closed\nFriday: closed";
        const hoursText = document.createElement('p');
        const locationText = document.createElement('p');


        description.textContent = "Welcome to Sweet Buns!\nThis is the place where you can truly get a taste of happiness! You can enjoy our special baked buns, cakes and more! Your happiness is guaranteed by our sweetness.";
        location.textContent = "122 PalmHills, Miami";

        title.textContent = "Sweet Buns";

        homeContent.append(title, description, hours, location);
        homeContent.classList.add('home-container');

        content.appendChild(homeContent);

        hoursText.textContent = "Hours";
        locationText.textContent = "Location";
        hours.prepend(hoursText);
        location.prepend(locationText);
        //hours.before(hoursText);
        //location.before(locationText);
        console.log("Hurraay! Done!");
        //return homeContent;
    }


    const getMenu = () => {

    }

    const getContacts = () => {

    }

    return { getHome, getMenu, getContacts };
})();

export default navContent;