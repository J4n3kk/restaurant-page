import pizzaPepperoni from './img/peperoni.jpeg';
import pizzaMargarita from './img/margarita.jpeg';
import pizzaWiejska from './img/wiejska.jpeg';
import pizzaJajo from './img/jajo.jpeg';


function createMenu(){
    

    const content = document.querySelector('.content')
    const main = document.createElement('div');
    main.classList.add('main');
    main.classList.add('order')
    const pizzaContainer = document.createElement('div')
    pizzaContainer.classList.add('pizza-container')

    function pizzaItem(name1, srcImg, components) {
        const wrapper = document.createElement('div')
        wrapper.classList.add('pizza-item')
        wrapper.classList.add(name1)
        const img = new Image(150, 150)
        img.src = `${srcImg}`
        const description = document.createElement('p')
        description.textContent = `${components}`;
        wrapper.appendChild(img);
        wrapper.appendChild(description)
        return wrapper
    }

    const pepperoni = new pizzaItem('pepperoni', pizzaPepperoni, 'peperoni, cheese, whatever')
    const wiejska = new pizzaItem('pepperoni', pizzaWiejska, 'peperoni, cheese, whatever')
    const jajo = new pizzaItem('pepperoni', pizzaJajo, 'peperoni, cheese, whatever')
    const margarita = new pizzaItem('pepperoni', pizzaMargarita, 'peperoni, cheese, whatever')

    pizzaContainer.appendChild(pepperoni)
    pizzaContainer.appendChild(wiejska)
    pizzaContainer.appendChild(jajo)
    pizzaContainer.appendChild(margarita)
    main.appendChild(pizzaContainer)
    content.appendChild(main)
}

export default createMenu;