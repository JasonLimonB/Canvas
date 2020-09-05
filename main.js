/*
    Llamamos  a la etiqueta canvas y agregamos el contexto de 2d
*/
let canvas = document.querySelector("#rectangulo");
let context = canvas.getContext("2d");

//Pasamos por parametro el color en hexadecimal 
context.fillStyle = "#626EE3";
/* con esta linea indicamos un trazo recto ( los parametros son 4 )
    1.- la distancio de la esquina superior izquierda en el eje de las X
    2.- la distancio de la esquina superior izquierda en el eje de las Y
    3.- Ancho
    4.- Alto
*/
context.fillRect(120, 60 ,100, 50);


// Para practicar debemos realizar un cuadrado

let cuadradoCanvas = document.querySelector("#practica1").getContext("2d");
cuadradoCanvas.strokeStyle = "red";

cuadradoCanvas.strokeRect(5,5,50,50);
cuadradoCanvas.lineWidth = 5;
cuadradoCanvas.strokeRect(100, 5, 50, 50);

//Otra practica

const pie = document.querySelector("#p2").getContext("2d");
pie.beginPath();
for(let y = 10; y < 100; y += 10){
    pie.moveTo(10, y);
    pie.lineTo(90, y);
}
pie.stroke();


// Curvas en canvas

const curva = document.querySelector("#curva").getContext("2d");
curva.beginPath();
curva.moveTo(10, 90);
//  Tambien podemos usar la siguiente sintazys
// control=(60, 60) goal=(90, 90)
curva.quadraticCurveTo(60, 30, 90, 90);
curva.lineTo(60, 10);
curva.closePath();
curva.stroke();


// VAmos a dibujar un circulo usando canvas
const cl = document.querySelector("#circulo").getContext("2d");
cl.beginPath();

// Los parametros de arc 
// 1 eje de las x iniciando por la parte superior izquierda
// 2 eje de las y iniciando por la parte superior izquierda
// 3 el tamaño del radio
cl.arc(150, 150,100, 0, 8);

cl.fillStyle = "red";
cl.stroke();


// Ahora si queremos crear un pieChar ( grafica de pastel )
// Teniendo el siguiente Arreglo de objetos
const results = [
    { name: "Leidos", count: 1043, color: "lightblue" },
    { name: "Respondidos", count: 563, color: "lightgreen" },
    { name: "No respondidos", count: 510, color: "purple" },
    { name: "No Leidos", count: 175, color: "red" }
];

let cx2 = document.querySelector("#pie").getContext("2d");
  let total = results
    .reduce((sum, {count}) => sum + count, 0);
  let currentAngle = -0.5 * Math.PI;
for (let result of results) {
    let sliceAngle = (result.count / total) * 2 * Math.PI;
    cx2.beginPath();
    cx2.arc(100, 100, 100,
            currentAngle, currentAngle + sliceAngle);
    currentAngle += sliceAngle;
    cx2.lineTo(100, 100);
    cx2.fillStyle = result.color;
    cx2.fill();
}