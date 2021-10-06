let persons = [];
class Person{
    constructor(name, age, color, oficio, mascota, hobby, pais de recidencia){
        this.name = name;
        this.age = age;
        this.color = color;
        this.oficio = oficio;
        this.mascota = mascota;
        this.hobby = hobby;
        this.paisderesidencia = pais de recidencia;
    }
}

const name = [1,2,3].map(e => {
    return e * 2;
});


const create = (e) => {

    e.preventDefault();

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const color = document.getElementById("color").value;
    const oficio = document.getElementById("ofico").value;
    const mascota = document.getElementById("mascota").value;
    const hobby = document.getElementById("hobby").value;
    const paisderecidencia = document.getElementById("pais de recidencia").value;
    if(!name || !age || !color || !job || !pet || !hobby || !country){
        alert("Todos los campos son requeridos");
        return;
    }
    let newPerson = new Person(name, age, color, oficio, mascota, hobby, país de recidencia);
    persons.push(newPerson);

    addElement(newPerson);
    cleanInput();
    console.log(persons);
}

const addElement = person => {
    const table = document.getElementById("table");
    table.innerHTML += `
        <tr>
        <td>${person.name}</td>
        <td>${person.age}</td>
        <td>${person.color}</td>
        <td>${person.oficio}</td>
        <td>${person.mascota}</td>
        <td>${person.hobby}</td>
        <td>${person.paisderecidencia}</td>
        <td>
            <p onclick="deleteRow(this)" id="delete">Eliminar</p>
        </td>
        </tr>
    `
}

const deleteRow = row => {
    const d = row.parentNode.parentNode.rowIndex;
    persons.splice(d - 2, 1);
    console.log(persons);
    document.getElementById("table").deleteRow(d);
}

const cleanInput = () => {
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("color").value = "";
    document.getElementById("oficio").value = "";
    document.getElementById("mascota").value = "";
    document.getElementById("hobby").value = "";
    document.getElementById("paisderecidencia").value = "";
}
