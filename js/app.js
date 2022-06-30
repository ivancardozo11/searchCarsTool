const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

//This is a container for the results
const resultado = document.querySelector('#resultado');


const max = new Date().getFullYear();
const min = max - 13;


// Generates objects when search
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
}

//eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos();

    //Llena las opciones de años
    llenarSelect();
})

//Event listener for the search forms
marca.addEventListener('change', e =>{
   datosBusqueda.marca = e.target.value;

   filtrarAuto();
})

year.addEventListener('change', e =>{
    datosBusqueda.year = e.target.value;
});

minimo.addEventListener('change', e =>{
    datosBusqueda.minimo = e.target.value;
});

maximo.addEventListener('change', e =>{
    datosBusqueda.maximo = e.target.value;
});

puertas.addEventListener('change', e =>{
    datosBusqueda.puertas = e.target.value;
});

transmision.addEventListener('change', e =>{
    datosBusqueda.transmision = e.target.value;
});
color.addEventListener('change', e =>{
    datosBusqueda.color = e.target.value;
});



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

//Functions filters based on search

function filtrarAuto() {
    const resultado = autos.filter( filtrarMarca )
    console.log(resultado)
}

function filtrarMarca(auto) {
    const { marca } = datosBusqueda;
   if ( marca ) {
    return auto.marca === datosBusqueda.marca;
   }
   return auto;
}