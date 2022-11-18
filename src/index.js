import createHeader from './header'
import createHome from './home'
import createMenu from './menu'
import createContact from './contact'


function removeMain() {
    const main = document.querySelector('.main')
    main.remove(main)
}

createHeader();
createHome();

function mapEvents(){
    const home = document.querySelector('.homeBtn') 
    const menu = document.querySelector('.menuBtn') 
    const contact = document.querySelector('.contactBtn') 

    menu.addEventListener('click',function(){
        removeMain();
        createMenu();
    })
    home.addEventListener('click',function(){
        removeMain();
        createHome();
    })
    contact.addEventListener('click',function(){
        removeMain();
        createContact();
    })


}

mapEvents()