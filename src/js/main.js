import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'
import { projects } from './data'

const selector = document.querySelector('.selector')


//CALLING SECTION ID TO SHOW THE SELECTED PROJECTS
selector.addEventListener('click', (event) =>{
    let idSection=event.target.getAttribute('id')
    console.log(idSection);
})