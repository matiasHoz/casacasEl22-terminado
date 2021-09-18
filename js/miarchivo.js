/*Funcion para detallar las camisetas */
function camisetas(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}

/*Agregando nuevas camisetas*/
const camiseta1 = new camisetas("PSG", 2300);
const camiseta2 = new camisetas("Juventus", 2800);
const camiseta3 = new camisetas("Barcelona", 2500);
const camiseta4 = new camisetas("Atletico de Madrid", 2900);
const camiseta5 = new camisetas("River", 3000);
const camiseta6 = new camisetas("Boca", 3000);
const camiseta7 = new camisetas("Rosario Central", 2200);
const camiseta8 = new camisetas("Racing", 3100);
const camiseta9 = new camisetas("Argentina", 3700);
const camiseta10 = new camisetas("Palmeiras", 2900);
const camiseta11 = new camisetas("Ajax", 2800);
const camiseta12 = new camisetas("Dortmund", 2600);
const camiseta13 = new camisetas("Real Madrid", 3000);
const camiseta14 = new camisetas("Chelsea", 3200);
const camiseta15 = new camisetas("Sassuolo", 2200);
const camiseta16 = new camisetas("Manchester City", 2900);
const camiseta17 = new camisetas("Gremio", 2700);
const camiseta18 = new camisetas("Peñarol", 2500);
const camiseta19 = new camisetas("Brasil", 2100);
const camiseta20 = new camisetas("Inter", 2900);

/*Array con todas las casacas*/

const arrayCamisetas = [camiseta1, camiseta2, camiseta3, camiseta4, camiseta5, camiseta6, camiseta7, camiseta8, camiseta9, camiseta10, camiseta11, camiseta12, camiseta13, camiseta14, camiseta15, camiseta16, camiseta17, camiseta18, camiseta19, camiseta20];


/*Pasarlo a JSON y mostrarlo en la consola */

const enJSON = JSON.stringify(arrayCamisetas);

console.log(enJSON);

/*Almacenar datos en el Storage ------------------------*/
/*PSG */
localStorage.setItem("añoPSG", 2020);
localStorage.setItem("stockPSG", 20);
localStorage.setItem("marcaPSG", "Nike");

/*Juventus */
localStorage.setItem("añoJuve", 2020);
localStorage.setItem("stockJuve", 14);
localStorage.setItem("marcaJuve", "Adidas");

/*Barcelona */
localStorage.setItem("añoBarca", 2021);
localStorage.setItem("stockBarca", 27);
localStorage.setItem("marcaBarca", "Nike");

/*Atl. Madrid */
localStorage.setItem("añoAleti", 2021);
localStorage.setItem("stockAleti", 12);
localStorage.setItem("marcaAleti", "Nike");

/*River Plate */
localStorage.setItem("añoRiver", 2021);
localStorage.setItem("stockRiver", 10);
localStorage.setItem("marcaRiver", "Adidas");

/*Boca Juniors */
localStorage.setItem("añoBoca", 2020);
localStorage.setItem("stockBoca", 8);
localStorage.setItem("marcaBoca", "Nike");

/*Rosario Central */
localStorage.setItem("añoCentral", 2020);
localStorage.setItem("stockCentral", 22);
localStorage.setItem("marcaCentral", "Under Armour");

/*Racing Club */
localStorage.setItem("añoRacing", 2015);
localStorage.setItem("stockRacing", 15);
localStorage.setItem("marcaRacing", "Topper");


/*Recuperar los datos del Storage ----------------------*/
/*PSG */
let infoPSG1 = localStorage.getItem("añoPSG");
let infoPSG2 = localStorage.getItem("stockPSG");
let infoPSG3 = localStorage.getItem("marcaPSG");

console.log("PSG año: " + infoPSG1);
console.log("PSG stock: " + infoPSG2);
console.log("PSG marca: " + infoPSG3);

/*Juventus */
let infoJuve1 = localStorage.getItem("añoJuve");
let infoJuve2 = localStorage.getItem("stockJuve");
let infoJuve3 = localStorage.getItem("marcaJuve");

console.log("Juventus año: " + infoJuve1);
console.log("Juventus stock: " + infoJuve2);
console.log("Juventus marca: " + infoJuve3);

/*Barcelona */
let infoBarca1 = localStorage.getItem("añoBarca");
let infoBarca2 = localStorage.getItem("stockBarca");
let infoBarca3 = localStorage.getItem("marcaBarca");

console.log("Barcelona año: " + infoBarca1);
console.log("Barcelona stock: " + infoBarca2);
console.log("Barcelona marca: " + infoBarca3);

/*Atl. Madrid */
let infoAleti1 = localStorage.getItem("añoAleti");
let infoAleti2 = localStorage.getItem("stockAleti");
let infoAleti3 = localStorage.getItem("marcaAleti");

console.log("Atl Madrid año: " + infoAleti1);
console.log("Atl Madrid stock: " + infoAleti2);
console.log("Atl Madrid marca: " + infoAleti3);

/*River Plate */
let infoRiver1 = localStorage.getItem("añoRiver");
let infoRiver2 = localStorage.getItem("stockRiver");
let infoRiver3 = localStorage.getItem("marcaRiver");

console.log("River año: " + infoRiver1);
console.log("River stock: " + infoRiver2);
console.log("River marca: " + infoRiver3);

/*Boca Juniors */
let infoBoca1 = localStorage.getItem("añoBoca");
let infoBoca2 = localStorage.getItem("stockBoca");
let infoBoca3 = localStorage.getItem("marcaBoca");

console.log("Boca año: " + infoBoca1);
console.log("Boca stock: " + infoBoca2);
console.log("Boca marca: " + infoBoca3);

/*Rosario Central */
let infoCentral1 = localStorage.getItem("añoCentral");
let infoCentral2 = localStorage.getItem("stockCentral");
let infoCentral3 = localStorage.getItem("marcaCentral");

console.log("Central año " + infoCentral1);
console.log("Central stock: " + infoCentral2);
console.log("Central marca: " + infoCentral3);

/*Racing Club */
let infoRacing1 = localStorage.getItem("añoRacing");
let infoRacing2 = localStorage.getItem("stockRacing");
let infoRacing3 = localStorage.getItem("marcaRacing");

console.log("Racing año: " + infoRacing1);
console.log("Racing stock: " + infoRacing2);
console.log("Racing marca: " + infoRacing3);


/*Solicitar nombre del usuario ----------------------*/
function solicitarNombre() {
	let nombreIngresado = prompt("Ingrese su nombre");
    alert("¡Bienvenido a Casacas El 22 " + nombreIngresado + "!");
    console.log("Nombre: " + nombreIngresado);
}

/*Solicitar talle del cliente -----------------------*/
function solicitarTalle() {
	let talleIngresado = prompt("Ingrese su talle");
	alert("Actualmente contamos con el talle " + talleIngresado + " en todas las camisetas.");
	console.log("Talle: " + talleIngresado);
}

/*¿Es un antiguo cliente? ---------------------------*/
function pregunta() {
	let descuento = prompt("¿Alguna vez habías comprado en Casacas El 22?");
	if(descuento == "Si"){
		alert("Obtienes un descuento del 20% por haber comprado en este sitio.")
	}
	if(descuento == "No"){
		alert("¡Entonces gracias por elegirnos!");
	}
	console.log("Descuento: " + descuento);
}



/* Llamado de las funciones -----------------------------*/
solicitarNombre();
solicitarTalle();
pregunta();



/* Agregar elementos al DOM con jQuery ------------------*/
/* Nueva opcion al menu */
$("#menu").prepend("<h5> PRE-VENTA </h5>");

/* Nuevo botón de "Aviso" */
$(".camisetas4").append(`<button id="boton"> AVISO </button`);

/* Nuevo subtitulo */
$(".camisetas3").prepend(`<br> <h2 id="colecciones"> COLECCIONES </h2`);

/* Descripcion */
$(".camisetas3").prepend(`<h2> ¿Qué hacemos? </h2>
                         <p id="descrip"> Somos un sitio dedicado a la venta de camisetas. Tenemos desde camisetas clásicas hasta lo último
                         en actualidad. Cada vez sumamos más ligas a nuestro stock. </p>`);

/* Nuevas opciones al footer */
$(".pie .orden").append(`<li> Trabaja con nosotros </li>
                         <li> Contacto </li>
                         <li> Términos y condiciones </li>`);

/* Nuevo formulario */
$("main").append(`<h2 id="registro">REGISTRATE</h2>
<form class="form">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Dirección de e-mail</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">Nunca vamos a compartir tu e-mail con otros.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Contraseña</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Quiero que me lleguen las novedades.</label>
  </div>
  <button type="submit" class="btn btn-primary submit">Enviar</button>
</form>
<br>`);



/*Asociar eventos a los elementos -----------------------------*/
/*Click en la camiseta del PSG */
$("#remera1").on("click", function() {
    alert("La camiseta del " + camiseta1.nombre + " " + "cuesta " + "$" + camiseta1.precio);
})

/*Click en la camiseta de la Juve */
$("#remera2").on("click", function() {
    alert("La camiseta del " + camiseta2.nombre + " " + "cuesta " + "$" + camiseta2.precio);
})

/*Click en la camiseta del Barcelona */
$("#remera3").on("click", function () {
    alert("La camiseta del " + camiseta3.nombre + " " + "cuesta " + "$" + camiseta3.precio);
})

/*Click en la camiseta del Atl Madrid */
$("#remera4").on("click", function() {
    alert("La camiseta del " + camiseta4.nombre + " " + "cuesta " + "$" + camiseta4.precio);
})

/*Click en la camiseta de River */
$("#remera5").on("click", function() {
    alert("La camiseta de " + camiseta5.nombre + " " + "cuesta " + "$" + camiseta5.precio);
})

/*Click en la camiseta de Boca */
$("#remera6").on("click", function() {
    alert("La camiseta de " + camiseta6.nombre + " " + "cuesta " + "$" + camiseta6.precio);
})

/*Click en la camiseta de Central */
$("#remera7").on("click", function() {
    alert("La camiseta de " + camiseta7.nombre + " " + "cuesta " + "$" + camiseta7.precio);
})

/*Click en la camiseta de Racing */
$("#remera8").on("click", function() {
    alert("La camiseta de " + camiseta8.nombre + " " + "cuesta " + "$" + camiseta8.precio);
})

/*Click en la camiseta de la Selección Argentina */
$("#remera9").on("click", function() {
    alert("La camiseta de " + camiseta9.nombre + " " + "cuesta " + "$" + camiseta9.precio);
})

/*Click en la camiseta del Palmeiras */
$("#remera10").on("click", function() {
    alert("La camiseta del " + camiseta10.nombre + " " + "cuesta " + "$" + camiseta10.precio);
})

/*Click en la camiseta del Ajax */
$("#remera11").on("click", function () {
    alert("La camiseta del " + camiseta11.nombre + " " + "cuesta " + "$" + camiseta11.precio);
})

/*Click en la camiseta del Dortmund */
$("#remera12").on("click", function () {
    alert("La camiseta del " + camiseta12.nombre + " " + "cuesta " + "$" + camiseta12.precio);
})

/*Click en la camiseta del Real Madrid */
$("#remera13").on("click", function () {
    alert("La camiseta del " + camiseta13.nombre + " " + "cuesta " + "$" + camiseta13.precio);
})

/*Click en la camiseta del Chelsea */
$("#remera14").on("click", function () {
    alert("La camiseta del " + camiseta14.nombre + " " + "cuesta " + "$" + camiseta14.precio);
})

/*Click en la camiseta del Sassuolo */
$("#remera15").on("click", function () {
    alert("La camiseta del " + camiseta15.nombre + " " + "cuesta " + "$" + camiseta15.precio);
})

/*Click en la camiseta del City */
$("#remera16").on("click", function () {
    alert("La camiseta del " + camiseta16.nombre + " " + "cuesta " + "$" + camiseta16.precio);
})

/*Click en la camiseta de Gremio */
$("#remera17").on("click", function () {
    alert("La camiseta de " + camiseta17.nombre + " " + "cuesta " + "$" + camiseta17.precio);
})

/*Click en la camiseta de Peñarol */
$("#remera18").on("click", function () {
    alert("La camiseta de " + camiseta18.nombre + " " + "cuesta " + "$" + camiseta18.precio);
})

/*Click en la camiseta de Brasil */
$("#remera19").on("click", function () {
    alert("La camiseta de " + camiseta19.nombre + " " + "cuesta " + "$" + camiseta19.precio);
})

/*Click en la camiseta del Inter */
$("#remera20").on("click", function () {
    alert("La camiseta del " + camiseta20.nombre + " " + "cuesta " + "$" + camiseta20.precio);
})

/*Envio de formulario */
$(".form").submit("submit", function(e) {
    e.preventDefault();
    alert("Los datos se han guardado.");
})

/*Click en el botón "Enviar" */
$(".submit").one("click", function() {
    $(".form").append(`<p> ¡Gracias por registrarte! </p>`);
})

/*Click en el botón "Aviso" */
$("#boton").one("click", function () {
    $("#boton").append(`<p id="aviso"> El stock se actualiza cada semana </p>`);
})







             
             



