/* 1)Crear un párrafo. Luego desde el javascript hacer que se vea rojo*/

// document.querySelector("p").classList.add("red")

/* 2) Crear tres párrafos. Luego desde el javascript hacer que tengan un fondo verde.*/

// document.querySelectorAll("p").forEach(clase=>clase.classList.add("ring"))

/* 3)Crear 4 párrafos, dos con clase “blanco”. A todos agregarle un fondo celeste, y a los clase blanco además hacer que el texto se vea blanco.*/

// document.querySelectorAll(".blanco").forEach(edit=>edit.classList.add("letras"))
// document.querySelectorAll("p").forEach(este=>este.classList.add("fondo"))

/* 4) En base al siguiente listado de notas, mostrar en verde los mayores a 7, amarillo los que están entre 4 y 6 y en rojo del tres para abajo.*/

// let notas = [9,2,7,6,6,4,5,10,3,9.5]

// notas.forEach(numero=>{
//     if(numero>7) document.write(`<p>${numero}</p>`)
// })



/*5)Vamos a preguntarle al usuario qué color quiere cambiar, y luego lo vamos a preguntar por cuál. (Dos input). En base a eso, nuestro javascript modificará el documento. Ejemplo: Si pide cambiar el verde por azul, los textos que antes se veían en verde ahora deberán verse en azul.
(Nota: Se debe agregar el css correspondiente).*/

// let color= document.write(`<input type="text">¿qué color desea cambiar? ¿Rojo, Verde o Azul? <button>Aceptar</button>`)
// let cambio= document.write(`<input type="text">¿por cual? Rojo, Verde o Azul? <button>Aceptar</button>`)

// if(color==="r" && Cambio==="v")document.querySelector("rojo").classList.toggle("verde")
// if(color==="r" && Cambio==="a")document.querySelector("rojo").classList.toggle("azul")
// if(color==="v" && Cambio==="a")document.querySelector("verde").classList.toggle("azul")
// if(color==="v" && Cambio==="r")document.querySelector("verde").classList.toggle("rojo")
// if(color==="a" && Cambio==="r")document.querySelector("azul").classList.toggle("rojo")
// if(color==="a" && Cambio==="v")document.querySelector("azul").classList.toggle("verde")


/* 6) Pedir al usuario: Una palabra, un color y una cantidad. Generar la cantidad de párrafos con esa palabra y ese color que se requiera.*/

// let palabra= prompt("Ingrese una palabra que funcionara como parrafo")
// let color= prompt("Ingrese el color del cual desea los parrafos. Opciones: verde, rojo, azul")
// let numero= parseInt(prompt("Ingrese la cantidad de parrafos que desea generar"))

// for(i=0;i<numero;i++){
//     document.write(`<p>${palabra}</p>`)
// }
// document.querySelectorAll("p").forEach(este=>este.classList.add(`${color}`))


/*7) a) Dentro del siguiente HTML, a todos los párrafos que NO tengan la clase “nuevo”, agregarle la clase “antiguo”.*/

// document.querySelectorAll("p").forEach(y=> {
//    if (y.classList.contains("nuevo")!=true){
//     y.classList.add("antiguo")}

/*b) A todos los que tienen clase “rojo”, agregarles la clase “transparencia” */

// document.querySelectorAll(".rojo").forEach(l=>l.classList.add("transparencia"))

/*c) A todos los que tengan clase “saludo” quitarla, y a los que no la tengan, agregarla. */

// document.querySelectorAll("p").forEach(go=> go.classList.toggle("saludo"))

/*d) Remover de los primeros 4 párrafos la clase “ayuda”*/

// for(i=0;i<4;i++){
    // document.querySelectorAll("p").forEach(v=>v.classList.remove("ayuda"))
// }