const resultado = document.querySelector('#resultado');

//eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos();
})

//Funciones

function mostrarAutos(){
    autos.forEach(auto => {
        const { marca, modelo, year, puertas, transmision, precio, color }= auto;
        const autoHTML = document.createElement('p');
        autoHTML.textContent = `${marca}- ${modelo} -${year} -${puertas}Puertas -  Transmision: ${transmision} - Precio -${precio} - Color: ${color} `;

        //insert's  HTML.
        resultado.appendChild(autoHTML);
    
    });
}