import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'
import Swal from "sweetalert2";
import { projects } from './data'


const selector = document.querySelector('.selector')
const container = document.querySelector('.proyects-container')
let idSection



defaultProjects()
//CALLING SECTION ID TO SHOW THE SELECTED PROJECTS
selector.addEventListener('click', (event) =>{
    idSection=event.target.getAttribute('id')
    
    console.log(idSection);

    if (idSection != null){
        insertProjects(idSection)
        clearbtn() 
        event.target.classList.add('selector-selected')
    }
    else{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Seleccione una opción",
          });
    }
})

function insertProjects (id){
    clear()
    projects.forEach(project => {
        project[id].forEach(type => {
            container.innerHTML += `
            <article class="proyect-card">
                <a href="#"><img src="${type.img1}" class="proyect-image" alt=""></a>
                <div><p class="proyect-description">${type.title}</p></div>
            </article>
            `
        })

                    });

}

function clear (){
    container.innerHTML = ''
}

function clearbtn() {
    const selectedbtn = document.querySelectorAll('.selector-selected')
    for (const btn of selectedbtn) {
        btn.classList.remove("selector-selected");
      }
}

function defaultProjects(){
    projects.forEach(project => {
        project.selector1.forEach(type => {
            container.innerHTML += `
            <article class="proyect-card">
                <a href="#"><img src="${type.img1}" class="proyect-image" alt=""></a>
                <div><p class="proyect-description">${type.title}</p></div>
            </article>
            `
        })
    
})
}
