var productos = [
  {
    marca: 'Dell',
    modelo: 'Latitude 5580 i7-7820HQ 16GB RAM 256GB SSD',
    precio: '499.999',
    imagen: 'assets/img/DELL.jpg'
  },
  {
    marca: 'Lenovo',
    modelo: 'Thinkpad Yoga L380 Intel Core i5 8GB RAM 256GB SSD',
    precio: '699.999',
    imagen: 'assets/img/LENOVO.jpg'
  },
  {
    marca: 'HP',
    modelo: 'Elitebook 745 G6 AMD Ryzen 5 PRO 3500U Radeon Vega Mobile Gfx 256 GB SSD 16GB RAM',
    precio: '899.999',
    imagen: 'assets/img/HP.jpg'
  },
  {
    marca: 'ASUS',
    modelo: 'P1412 DE 14“ (I5-1135G7, 8GB RAM, 256GB SSD, WIN10 PRO)',
    precio: '749.990',
    imagen: 'assets/img/ASUS.jpg'
  }
];

var indiceAlternativa = 0;

function mostrarProducto() {
  var productoActual = productos[indiceAlternativa];

  document.getElementById('marca').textContent = productoActual.marca;
  document.getElementById('modelo').textContent = productoActual.modelo;
  document.getElementById('precio').textContent = productoActual.precio;
  document.getElementById('img').src = productoActual.imagen;
}

function mostrarAlternativa() {
  indiceAlternativa++;

  if (indiceAlternativa >= productos.length) {
    indiceAlternativa = 0;
  }

  mostrarProducto();
}


mostrarProducto();

// Event listener para el botón "Ver una alternativa"
document.getElementById('alternativa').addEventListener('click', mostrarAlternativa);
