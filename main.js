const formulario = document.getElementById('formulario');
const btn = document.getElementById('boton');
const result = document.getElementById('resultado')


const productos = [
    {nombre: 'Platanos', valor: '35'},
    {nombre: 'Pera', valor: '70'},
    {nombre: 'Sandia', valor: '125'},
    {nombre: 'Kiwi', valor: '50'},
    {nombre: 'Melon', valor: '200'},
    {nombre: 'Manzana', valor: '35'},
]

const filtrar = ()=>{
    //console.log(formulario.value)
    result.innerHTML = '';
    const texto = formulario.value.toLowerCase();
    for (let producto of productos){
        let nombre = producto.nombre.toLocaleLowerCase();
        if(nombre.indexOf(texto) !== -1){
            result.innerHTML += `
            <li>${producto.nombre} - valor: ${producto.valor}<li>
            `
        }
    }

    if (result.innerHTML === ''){
        result.innerHTML += `
        <li>Producto no encontrado...<li>
        ` 
    }
}

btn.addEventListener('click', filtrar);
formulario.addEventListener('keyup', filtrar);

