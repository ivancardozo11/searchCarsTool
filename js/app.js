const resultado = document.querySelector('#resultado');

const year = document.querySelector('#year');
const max = new Date().getFullYear();
const min = max - 13;

//eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos();

    //Llena las opciones de años
    llenarSelect();
})

//Funciones

function mostrarAutos(){
    autos.forEach(auto => {
        const { marca, modelo, year, puertas, transmision, precio, color } = auto;
        const autoHTML = document.createElement('p');
        autoHTML.textContent = `${marca}- ${modelo} -${year} -${puertas}Puertas -  Transmision: ${transmision} - Precio -${precio} - Color: ${color} `;

        //insert's  HTML.
        resultado.appendChild(autoHTML);
    
    });
}

//Genera los años del select

function llenarSelect() {
    for(i = max; i > min; i--){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);
    }
}