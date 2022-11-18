console.log('home.js appended')
import image from './img/interior.jpeg'

function createHome(){
    //cache
    const content = document.querySelector('#content');
    //create elements
    const home = document.createElement('div');
    home.classList.add('main')
    home.classList.add('home')
    
    const wrap = document.createElement('div')
    wrap.classList.add('wrap')

    const homeText = document.createElement('p')
    homeText.textContent = 'Wszystkie pizze i sałatki przygotowywane są dla Państwa na miejscu, ze świeżych składników, co gwarantuje ich znakomity smak.';

    const interior = new Image(300);
    interior.src = image;

    const homeTextBottom = document.createElement('p');
    homeTextBottom.classList.add('bottom-text')
    homeTextBottom.textContent = 'Lokal w centrum Nadarzyna dostosowany na miarę potrzeb i oczekiwań naszej społeczności. Głównym menu lokalu jest oczywiście szeroki wybór doskonałej pizzy, przygotowanej według własnej receptury pizzera z wieloletnim doświadczeniem. Każdy gość jest świadkiem procesu przygotowań specjałów oferowanych w naszym menu i sam decyduje o składnikach zawartych w swojej pizzy.'

    wrap.appendChild(homeText)
    wrap.appendChild(interior)
    home.appendChild(wrap)
    home.appendChild(homeTextBottom)
    content.appendChild(home)
}   

export default createHome;