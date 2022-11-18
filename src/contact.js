import location from './img/location.png'

function createContact() {
    const content = document.querySelector('.content');
    const main = document.createElement('div')
    main.classList.add('main')
    main.classList.add('contact')

    const contactHeader = document.createElement('p');
    contactHeader.textContent = 'Contact Information'
    main.appendChild(contactHeader);
    const contactText1 = document.createElement('p');
    contactText1.textContent = "ul. Wilcza 62 00-679 Warszawa";
    main.appendChild(contactText1);
    const contactText2 = document.createElement('p');
    contactText2.textContent = 'tel. (022) 629-11-12'
    main.appendChild(contactText2);
    const contactText3 = document.createElement('p');
    contactText3.textContent = 'mail: pizza.perfecto@gmail.com'
    main.appendChild(contactText3);

    const image = new Image(650);
    image.src = location

    /* main.appendChild(contactText); */
    main.appendChild(image)
    content.appendChild(main)
}


export default createContact;
