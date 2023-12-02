const propiedadesVentas = [
    {
    nombre: 'Amplio hogar ',
    src: 'https://img.freepik.com/fotos-premium/hogar-moderno-amplio-luminoso-diseno-concepto-abierto-cocina-espaciosa_124507-213884.jpg?w=2000',
    descripcion: 'Apto para todos los integrantes de la familia',
    ubicacion: 'La reina, Región Metropolitana',
    habitaciones: 5,
    baño: 4,
    costo: 600000,
    smoke: false,
    pets: true
    },
    {
    nombre: 'Depto Individual',
    src: 'https://images.evisos.cl/2019/02/23/arriendo-departamento-renaca-alto_tre0ik0_3.jpg',
    descripcion: 'Departamento especial para solteros',
    ubicacion: 'Peñalolen, Santiago',
    habitaciones: 1,
    baño: 1,
    costo: 20000000,
    smoke: false,
    pets: true
    },
    {
    nombre: 'Apartamento en la costa',
    src: 'https://www.demediterraning.com/V05/img/dem/Alojamientos/86901/86901_64531599.jpg',
    descripcion: 'Apartamento con agradable vista',
    ubicacion: 'Maipu, Santiago',
    habitaciones: 2,
    baño: 2,
    costo: 30000000,
    smoke: false,
    pets: false
    },
    {
    nombre: 'Casa del bosque',
    src: 'https://st2.depositphotos.com/2752123/6175/i/450/depositphotos_61757395-stock-photo-cottage-houses.jpg',
    descripcion: 'Hermoso lugar con flora y fauna ',
    ubicacion: 'Quilpue, VI Region',
    habitaciones: 3,
    baño: 3,
    costo: 50000000,
    smoke: true,
    pets: true
    },
    {
    nombre: 'Terreno Abierto',
    src: 'https://http2.mlstatic.com/D_NQ_NP_911894-MLC70858266970_082023-O.webp',
    descripcion: '2000m2 para hacer tu vida',
    ubicacion: 'San Carlos, Chillan',
    habitaciones: 0,
    baño: 0,
    costo: 90000000,
    smoke: true,
    pets: true
    }
    ]

    const ventas = document.querySelector("#contenedorVentas");

let templateVentas = "";

for (const propiedadVenta of propiedadesVentas) {
  templateVentas += `
  <article class="cards">
    <p class="titulo">${propiedadVenta.nombre}</p>
    <img src="${propiedadVenta.src}"></img>
    <section class="p"><p class="descripcion">${
      propiedadVenta.descripcion
    }</p></section>
    <section class="p"><i class="fa-solid fa-location-dot"></i><p>${
      propiedadVenta.ubicacion
    }</p></section>
    <section class="p"><i class="fa-solid fa-bed"></i><p><b>${
      propiedadVenta.habitaciones
    }</b> Habitaciones</p><i>|</i><i class="fa-solid fa-bath"></i><p><b>${
    propiedadVenta.baño
  }</b> Baños</p></section>
    <section class="p"><i class="fa-solid fa-dollar-sign"></i><p> ${propiedadVenta.costo.toLocaleString(
      "ES-CL"
    )}</p></section>
    <section class="p">${
      propiedadVenta.smoke
        ? '<i class="fa-solid fa-smoking green"></i><p class="green">Permitido fumar</p>'
        : '<i class="fa-solid fa-ban-smoking red"></i><p class="red">No se permite fumar</p>'
    }</section>
    <section class="p">${
      propiedadVenta.pets
        ? '<i class="fa-solid fa-paw green"></i> <p class="green">Se permiten mascotas</p>'
        : '<i class="fa-solid fa-ban red"></i> <p class="red">No se permiten mascotas</p>'
    }</p>
    </article>
  `;
}

ventas.innerHTML = templateVentas;
