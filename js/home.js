const tableBody = document.getElementById('tableBody');
const editar =document.getElementById('editar');
let usuario = JSON.parse(localStorage.getItem('cuentas'));
const nombreedit = document.getElementById('nombreedit');
const correoedit = document.getElementById('correoedit');
const telefonoedit = document.getElementById('telefonoedit');
const fechaedit = document.getElementById('fechaedit');
const contraseñaedit = document.getElementById('contraseñaedit');
function guardar(){
    localStorage.setItem('cuentas', JSON.stringify(usuario));
}
editar.addEventListener('submit', function(event){
    event.preventDefault();
    
    const nombre = nombreedit.value;
    const correo = correoedit.value;
    const tel = telefonoedit.value;
    const cumple = fechaedit.value;
    const contraseña = contraseñaedit.value;

    if(nombre&&correo&&tel&&cumple&&contraseña){ 
        const nuevaCuenta = {nombre:nombre,correo:correo,telefono:tel,cumpleaños: cumple,contraseña:contraseña};
        usuario.push(nuevaCuenta);
        guardar();
        renderTable();
        editar.reset();
    }

})
function renderTable(){
    tableBody.innerHTML = '';
    usuario.forEach(function (item, index){
        const row = document.createElement('tr');
        const nombreCelda = document.createElement('td');
        const correoCelda = document.createElement('td');
        const telefonoCelda = document.createElement('td');
        const cumpleCelda = document.createElement('td');
        const contraseñaCelda = document.createElement('td');
        const accionCelda = document.createElement('td');
        const editButton = document.createElement('button');
        const deleteButton = document.createElement('button');

        nombreCelda.textContent = item.nombre;
        correoCelda.textContent = item.correo;
        telefonoCelda.textContent = item.telefono;
        cumpleCelda.textContent = item.cumpleaños;
        contraseñaCelda.textContent = item.contraseña;
        editButton.textContent = 'Editar';
        deleteButton.textContent = 'Eliminar';

        editButton.classList.add("button", 'button--secondary');
        deleteButton.classList.add("button", 'button--danger');

        editButton.addEventListener('click', function() {
            editData(index);
        })

        deleteButton.addEventListener('click', function() {
            deleteData(index);
        })

        accionCelda.appendChild(editButton);
        accionCelda.appendChild(deleteButton);

        row.appendChild(nombreCelda);
        row.appendChild(correoCelda);
        row.appendChild(telefonoCelda);
        row.appendChild(cumpleCelda);
        row.appendChild(contraseñaCelda);
        row.appendChild(accionCelda);

        tableBody.appendChild(row);
    });
}
function editData(index){
    const item = usuario[index];
    nombreedit.value = item.nombre;
    correoedit.value = item.correo;
    telefonoedit.value = item.telefono;
    fechaedit.value = item.cumpleaños;
    contraseñaedit.value = item.contraseña;
    usuario.splice(index, 1);
}

function deleteData(index){
    usuario.splice(index, 1);
    guardar();
    renderTable();
}
const cerrar = document.getElementById('out');
cerrar.addEventListener('click', () =>{
    alert('Hasta Luego');
    window.location.href = 'index.html';
})
renderTable()