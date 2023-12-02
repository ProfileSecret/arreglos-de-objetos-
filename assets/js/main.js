import propiedadesAlquiler from "./data/alquiler.js";
import propiedadesVentas from "./data/ventas.js";

const ventas = document.querySelector("#contenedorVentas");

let templateVentas = "";

for (const propiedadVenta of propiedadesVentas) {
  templateVentas += `
  <article class="cards">
    <p class="titulo">${propiedadVenta.nombre}</p>
    <img src="${propiedadVenta.src}"></img>
    <section class="p"><p class="descripcion">${propiedadVenta.descripcion}</p></section>
    <section class="p"><i class="fa-solid fa-location-dot"></i><p>${propiedadVenta.ubicacion}</p></section>
    <section class="p"><i class="fa-solid fa-bed"></i><p><b>${propiedadVenta.habitaciones}</b> Habitaciones</p><i>|</i><i class="fa-solid fa-bath"></i><p><b>${propiedadVenta.baño}</b> Baños</p></section>
    <section class="p"><i class="fa-solid fa-dollar-sign"></i><p> ${propiedadVenta.costo.toLocaleString('ES-CL')}</p></section>
    <section class="p">${propiedadVenta.smoke ?'<i class="fa-solid fa-smoking green"></i><p class="green">Permitido fumar</p>' : '<i class="fa-solid fa-ban-smoking red"></i><p class="red">No se permite fumar</p>'}</section>
    <section class="p">${propiedadVenta.pets ?'<i class="fa-solid fa-paw green"></i> <p class="green">Se permiten mascotas</p>' :'<i class="fa-solid fa-ban red"></i> <p class="red">No se permiten mascotas</p>'}</p>
    </article>
  `
}
ventas.innerHTML = templateVentas;


const alquiler = document.querySelector('#contenedorAlquiler')

let templateAlquiler = ""

for (const propiedadAlquiler of propiedadesAlquiler) {
  templateAlquiler += `
  <article class="cards">
    <p class="titulo">${propiedadAlquiler.nombre}</p>
    <img src="${propiedadAlquiler.src}"></img>
    <section class="p"><p class="descripcion">${propiedadAlquiler.descripcion}</p></section>
    <section class="p"><i class="fa-solid fa-location-dot"></i><p>${propiedadAlquiler.ubicacion}</p></section>
    <section class="p"><i class="fa-solid fa-bed"></i><p><b>${propiedadAlquiler.habitaciones}</b> Habitaciones</p><i>|</i><i class="fa-solid fa-bath"></i><p><b>${propiedadAlquiler.baño}</b> Baños</p></section>
    <section class="p"><i class="fa-solid fa-dollar-sign"></i><p> ${propiedadAlquiler.costo.toLocaleString('ES-CL')}</p></section>
    <section class="p">${propiedadAlquiler.smoke ?'<i class="fa-solid fa-smoking green"></i><p class="green">Permitido fumar</p>' : '<i class="fa-solid fa-ban-smoking red"></i><p class="red">No se permite fumar</p>'}</section>
    <section class="p">${propiedadAlquiler.pets ?'<i class="fa-solid fa-paw green"></i> <p class="green">Se permiten mascotas</p>' :'<i class="fa-solid fa-ban red"></i> <p class="red">No se permiten mascotas</p>'}</p>
    </article>
  `
}

alquiler.innerHTML = templateAlquiler;