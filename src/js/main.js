import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'
import { projects } from './data'

const selector = document.querySelector('.selector')

selector.addEventListener('click', (event) =>{
    console.log("holaa");
    let idSection=event.target.getAttribute('id')
    console.log(idSection);
})