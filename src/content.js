import './style.css';

//importing all images
import chocolateBunImageSrc from './images/chocolate_bun.png';
import chocoBreadImageSrc from './images/choco_bread.jpg';
import cupcakeImageSrc from './images/cupcake.png';
import oatmealImageSrc from './images/oatmeal.png';
import croissantImageSrc from './images/croissant.png';
import pizzaImageSrc from './images/pizza.png';
import burgerBunImageSrc from './images/burger_buns.png';
import zebraCakeImageSrc from './images/zebra_cake.png';
import milkshakesImageSrc from './images/milkshakes.jpg';



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

        //create headlines
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

    }


    const getMenu = () => {
        const menuContent = document.createElement('div');
        menuContent.classList.add('menu-container');

        //Create elements for the titles
        const menuTitle = document.createElement('p');
        const mainDishes = document.createElement('p');
        const specialDishes = document.createElement('p');
        const drinks = document.createElement('p');

        //Add text for each title
        menuTitle.textContent = "MENU";
        mainDishes.textContent = "MAIN DISHES";
        specialDishes.textContent = "SPECIAL DISHES";
        drinks.textContent = "DRINKS";

        /**************Create menu for the main dishes*************/

        const chocolateBun = document.createElement('div');
        const cupcake = document.createElement('div');
        const zebraCake = document.createElement('div');
        const chocoBread = document.createElement('div');

        //Get images for each dish in the main dishes
        const chocolateBunImage = document.createElement('img');
        chocolateBunImage.src = chocolateBunImageSrc;
        //chocolateBunImage.src = "https://merryboosters.com/wp-content/uploads/2021/03/5-1024x576.png";

        const cupcakeImage = document.createElement('img');
        cupcakeImage.src = cupcakeImageSrc;
        //cupcakeImage.src = "https://merryboosters.com/wp-content/uploads/2019/06/Screen-Shot-2019-06-12-at-6.35.08-AM-1024x567.png";

        const zebraCakeImage = document.createElement('img');
        zebraCakeImage.src = zebraCakeImageSrc;
        //zebraCakeImage.src = "https://merryboosters.com/wp-content/uploads/2019/05/3.png";


        const chocoBreadImage = document.createElement('img');
        chocoBreadImage.src = chocoBreadImageSrc;
        //chocoBreadImage.src = "https://merryboosters.com/wp-content/uploads/2020/01/1-1-1024x576.jpg";

        //Add the content
        chocolateBun.textContent = "Chocolate Bun   $2\n";
        cupcake.textContent = "Vanilla Chocolate Cupcake    $3\n";
        zebraCake.textContent = "Zebra Cake $5\n";
        chocoBread.textContent = "Chocolate Chip Banana Bread   $5\n";

        chocolateBun.appendChild(chocolateBunImage);
        cupcake.appendChild(cupcakeImage);
        zebraCake.appendChild(zebraCakeImage);
        chocoBread.appendChild(chocoBreadImage);


        /**************Create menu for the special dishes*************/

        const burgerBun = document.createElement('div');
        const oatmeal = document.createElement('div');
        const pizza = document.createElement('div');
        const croissant = document.createElement('div');

        //Get images for each dish in the special dishes
        const burgerBunImage = document.createElement('img');
        burgerBunImage.src = burgerBunImageSrc;
        //burgerBunImage.src = "https://merryboosters.com/wp-content/uploads/2018/02/Chocolate-2.png";

        const oatmealImage = document.createElement('img');
        oatmealImage.src = oatmealImageSrc;
        //oatmealImage.src = "https://merryboosters.com/wp-content/uploads/2020/02/Untitled-design-42-1024x576.png";

        const pizzaImage = document.createElement('img');
        pizzaImage.src = pizzaImageSrc;
        //pizzaImage.src = "https://merryboosters.com/wp-content/uploads/2018/05/1-1-1024x576.png";


        const croissantImage = document.createElement('img');
        croissantImage.src = croissantImageSrc;
        //croissantImage.src = "https://merryboosters.com/wp-content/uploads/2018/04/Untitled-design-22-1024x576.png";

        //Add the content
        burgerBun.textContent = "Burger Bun $2\n";
        oatmeal.textContent = "Oatmeal Chocolate Chip Cookies   $5\n";
        pizza.textContent = "Special Pizza  $3\n";
        croissant.textContent = "Special Croissant  $2\n";

        burgerBun.appendChild(burgerBunImage);
        oatmeal.appendChild(oatmealImage);
        pizza.appendChild(pizzaImage);
        croissant.appendChild(croissantImage);

        /**************Create menu for the drinks*************/

        const milkshakes = document.createElement('div');

        const milkshakesImage = document.createElement('img');
        milkshakesImage.src = milkshakesImageSrc;
        //milkshakesImage.src = "https://hips.hearstapps.com/del.h-cdn.co/assets/15/24/1600x800/landscape-1433889344-del-milkshakes-index.jpg?resize=980:*";

        milkshakes.textContent = "Oreo Milkshake    $4\n\nCaramel Milkshake $4\n\nVanilla Marshmallow Milkshake $3\n\nChocolate Milkshake   $3\n\nLotus Milkshake   $5\n\nCoffee Milkshake  $3\n";

        milkshakes.appendChild(milkshakesImage);

        mainDishes.append(chocolateBun, cupcake, zebraCake, chocoBread);
        specialDishes.append(burgerBun, oatmeal, pizza, croissant);
        drinks.append(milkshakes);


        menuContent.append(menuTitle, mainDishes, specialDishes, drinks);
        content.appendChild(menuContent);


    }

    const getContacts = () => {
        const contactsContent = document.createElement('div');
        contactsContent.classList.add('contact-container');

        const title = document.createElement('p');
        const phoneNumber = document.createElement('div');
        const email = document.createElement('div');
        const socialMedia = document.createElement('div');

        title.textContent = "Contacts";
        phoneNumber.textContent = "+1 xxx-xxx-xxx";
        email.textContent = "sweetbuns@xmail.com";
        socialMedia.textContent = "www.facebook.com/sweetbunss";

        contactsContent.append(title, phoneNumber, email, socialMedia);
        content.appendChild(contactsContent);

        //Create headlines
        const phoneNumberText = document.createElement('p');
        phoneNumberText.textContent = "Phone Number";

        const emailText = document.createElement('p');
        emailText.textContent = "Email";

        const socialMediaText = document.createElement('p');
        socialMediaText.textContent = "Facebook";

        phoneNumber.prepend(phoneNumberText);
        email.prepend(emailText);
        socialMedia.prepend(socialMediaText);

    }

    return { getHome, getMenu, getContacts };
})();

export default navContent;