import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'
import { projects } from './data'

const selector = document.querySelector('.selector')

const container = document.querySelector('.proyects-container')

let idSection


//CALLING SECTION ID TO SHOW THE SELECTED PROJECTS
selector.addEventListener('click', (event) =>{
    idSection=event.target.getAttribute('id')
    clearbtn() 
    event.target.classList.add('selector-selected')
    console.log(idSection);

    if (idSection != null){
        insertProjects(idSection)
        
    }
    else{
        alert ("SSS")
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
