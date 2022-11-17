console.log('header.js appended')

function createHeader() {
    // cache
    const content = document.querySelector('.content')

    // element creation
    const restaurantName = document.createElement('p');
    restaurantName.classList.add('restaurant-name');
    restaurantName.textContent = 'Pizza Perfecto';

    const header = document.createElement('div');
    header.classList.add('header')
    
    const menu = document.createElement('ul');
    menu.classList.add('menu')

    const liHome = document.createElement('li'); 
    liHome.textContent = 'Home'

    const liMenu = document.createElement('li') ;
    liMenu.textContent = 'Menu'

    const liContact = document.createElement('li'); 
    liContact.textContent = 'Contact'

    header.appendChild(restaurantName)
    menu.appendChild(liHome)
    menu.appendChild(liMenu)
    menu.appendChild(liContact)
    header.appendChild(menu)
    content.appendChild(header)
}


createHeader()
