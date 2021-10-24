const ano_actual = 2021;
const nombre = prompt("Ingrese su Nombre");
let edad = parseInt(prompt("Ingrese su Edad")); 
const fecha_nacimiento = ano_actual - edad;

alert("Estimado "+nombre+" usted nacio en "+fecha_nacimiento);