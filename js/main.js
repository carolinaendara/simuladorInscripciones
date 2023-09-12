alert("INSCRIPCIONES A MATERIAS CICLO LECTIVO 2024");
alert("Utilice los siguientes datos de prueba usuario=admin pass=1234");



let usuario="admin";
let pass ="1234";

let username=prompt("Ingrese su usuario");
let password= prompt("Ingrese su contraseña");


let legajo;
function salir(){
   alert("La inscripcion ha finalizado");

}

function seleccionarOperacion(){
     console.log("1:Anotarme a otra materia");
     console.log("2: Ingresar otro legajo");
     console.log("3: Salir");

     let opcion=prompt("Seleccione una opcion: 1) Anotarme a Otra materia 2) Ingresar otro legajo 3) Salir");

     switch(opcion){
      case "1":prompt("Ingrese codigo de materia a la que desea anotarse");
      break;
      case "2":prompt("Ingrese un nuevo legajo");
      
      break;
      case "3": salir();
      break;
     }
   }

function inscripcion(){
   while(legajo!=0){
      
      alert("La materia ha sido anotada con exito");
      seleccionarOperacion();
      
   } alert("el legajo que ingreso no es valido");

}


 
    
function inicioInscripcion(){

 
  legajo=  prompt("Ingrese legajo");
  var codigoMateria = prompt("Ingrese codigo de materia a la que desea anotarse");
  let diaDePreferencia = prompt("ingrese dia de preferencia siendo los mismos lu ma mi ju vi");
  inscripcion(legajo);

}


function inicioSesion(){
if(username==usuario && pass==password){
   alert("Inicio de sesion exitosa");
   inicioInscripcion(username);

}else {
   alert("su usuario o contraseña no son validos");}
}

inicioSesion(pass);












