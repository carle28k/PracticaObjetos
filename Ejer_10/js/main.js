

//----SOLICITUD DE DATOS AL USUARIO----

let numAlumnos = parseInt(prompt (`Escribe el NÚMERO de alumnos`));



let arrayRegistroNotas = [];

//----Creación objetos necesarios----
const updateRegistroNotas = (numAlumnos)=>{
    for (let i = 0; i<numAlumnos ;i++){

        arrayRegistroNotas.push({
        alumno: "nombre",
        notaA: 0,
        notaB: 0 
        })
    }
}



//----Solicitar Nombres y Notas // actualización de objetos----
const registrarNotas=()=>{

       
        arrayRegistroNotas.forEach((pos, i)=>{
            if(i < numAlumnos){
                pos.alumno = prompt (`Escribe el NOMBRE del alumno ${i+1}`);
                pos.notaA = parseInt(prompt (`Escribe la PRIMERA nota del alumno ${i+1}`));
                pos.notaB = parseInt(prompt (`Escribe la SEGUNDA nota del alumno ${i+1}`));

            }
        })
      

    //ParseInt nos devolvela un número del string
  
    }  


updateRegistroNotas (numAlumnos)
registrarNotas ()

console.log(arrayRegistroNotas)
//document.write(arrayRegistroNotas )




//______________________________________________________________________


//Array para test
/*
let arrayRegistroNotas = [
    {
        alumno: "Nacho",
        notaA: 5,
        notaB: 9 
        },
    {
        alumno: "Ricardo",
        notaA: 2,
        notaB: 7 
        },
        {
        alumno: "Ana",
        notaA: 8,
        notaB: 4 
        },
]
*/

//----Nota Media Alumno----
const mediaNotas=()=>{

       
    arrayRegistroNotas.forEach((pos)=>{

        pos.media = (pos.notaA + pos.notaB)/2

    })

//console.log(arrayRegistroNotas)
} 


mediaNotas ()

//----Alumno con mejor nota----

const mejorNota = () => {
    let mayorNotaMedia = arrayRegistroNotas[0];
  
    arrayRegistroNotas.forEach((pos)=>{

        if (pos.media > mayorNotaMedia.media) {
            mayorNotaMedia = pos;
        }
    })

    console.log(`El alumno con mayor nota media es ${mayorNotaMedia.alumno} con un ${mayorNotaMedia.media}`)
}

mejorNota ()