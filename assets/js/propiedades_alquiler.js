const propiedadesAlquiler = [
  {
    nombre: "Casa de Campo",
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/438246545.jpg?k=b4f867b0d8d6ed8da6641f86458a6f02f7dbec4041aab7b4cef9121d312d6a88&o=&hp=1",
    descripcion: "Hermosa casa alejada de la ciudad",
    ubicacion: "Houston,florida.",
    habitaciones: 3,
    baño: 3,
    costo: 400000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Depto Moderno",
    src: "https://www.depto9.com/wp-content/uploads/2019/12/ft-decoracion-departamento-moderno-pequeno.webp",
    descripcion: "Departamento en plena capital",
    ubicacion: "New York",
    habitaciones: 2,
    baño: 2,
    costo: 300000,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Garage Automovil",
    src: "https://www.bestsheds.com.au/wp-content/uploads/2020/05/Double-Garage-001-1RD.jpg",
    descripcion: "Guarda tu automovil con seguridad",
    ubicacion: "California",
    habitaciones: 0,
    baño: 1,
    costo: 100000,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Gran casa con vista al mar",
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/180352882.jpg?k=285478ce1701eece77107a55cfec0e84ea8a73b1c56ec341fe661722037e1334&o=&hp=1",
    descripcion: "Casa de lujo, no necesita mayor descripcion ",
    ubicacion: "Miami Beach",
    habitaciones: 5,
    baño: 6,
    costo: 1000000,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Condomio en zona residencial",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGP2puIRyNyNLvaT8MYaat_g2EcXzIlu9IVg&usqp=CAU",
    descripcion: "Seguridad a toda hora, en este barrio familiar",
    ubicacion: "Santiago, Chile",
    habitaciones: 3,
    baño: 2,
    costo: 500000,
    smoke: true,
    pets: true,
  },
];

const alquiler = document.querySelector("#contenedorAlquiler");

let templateAlquiler = "";

for (const propiedadAlquiler of propiedadesAlquiler) {
  templateAlquiler += `
  <article class="cards">
    <p class="titulo">${propiedadAlquiler.nombre}</p>
    <img src="${propiedadAlquiler.src}"></img>
    <section class="p"><p class="descripcion">${
      propiedadAlquiler.descripcion
    }</p></section>
    <section class="p"><i class="fa-solid fa-location-dot"></i><p>${
      propiedadAlquiler.ubicacion
    }</p></section>
    <section class="p"><i class="fa-solid fa-bed"></i><p><b>${
      propiedadAlquiler.habitaciones
    }</b> Habitaciones</p><i>|</i><i class="fa-solid fa-bath"></i><p><b>${
    propiedadAlquiler.baño
  }</b> Baños</p></section>
    <section class="p"><i class="fa-solid fa-dollar-sign"></i><p> ${propiedadAlquiler.costo.toLocaleString(
      "ES-CL"
    )}</p></section>
    <section class="p">${
      propiedadAlquiler.smoke
        ? '<i class="fa-solid fa-smoking green"></i><p class="green">Permitido fumar</p>'
        : '<i class="fa-solid fa-ban-smoking red"></i><p class="red">No se permite fumar</p>'
    }</section>
    <section class="p">${
      propiedadAlquiler.pets
        ? '<i class="fa-solid fa-paw green"></i> <p class="green">Se permiten mascotas</p>'
        : '<i class="fa-solid fa-ban red"></i> <p class="red">No se permiten mascotas</p>'
    }</p>
    </article>
  `;
}

alquiler.innerHTML = templateAlquiler;
