class TiendaRopa {
    constructor(nombre, direccion, telefono, productos, empleados) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.productos = productos;
        this.empleados = empleados;
    }
}

const TiendasRopa = [ 
    new TiendaRopa("Adidas", "Boulevar 21", "+234567890", ["Tenis", "Camisetas", "Ropa deportiva"], 5),
    new TiendaRopa("Nike", "Street 34", "+257654289", ["Ropa deportiva"], 10),
    new TiendaRopa("GUCCI", "Avenue 12", "+1432456708", ["Ropa Clasica", "Ropa Deportiva", "Zapatos"], 20),
    new TiendaRopa("GIVENCHY", "Street 14", "+533225670896", ["Perfumes", "Camisetas"], 8),
    new TiendaRopa("TENIS", "Avenue Las Palmas", "+234567890", ["Pantalones", "Camisetas", "Gorras"], 3)
];

function filtrarTiendaPorEmpleados(minEmpleados) {
    return TiendasRopa.filter(tienda => tienda.empleados >= minEmpleados);
}

const minimoEmpleados = 7;

const tiendasFiltradas = filtrarTiendaPorEmpleados(minimoEmpleados);
console.log(tiendasFiltradas);
