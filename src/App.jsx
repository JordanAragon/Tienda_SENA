import { useState } from "react";
import Header from "./componentes/Header.jsx";
import Producto from "./componentes/Producto.jsx";
import Carrito from "./componentes/Carrito.jsx";
import Pie from "./componentes/Pie.jsx";
import { productos } from "./datos/productos.js";

function App() {
  const [carrito, setCarrito] = useState([]);
  const [carritoAbierto, setCarritoAbierto] = useState(false);

  function agregarProducto(producto) {
    const productoExistente = carrito.find(
      (item) => item.id === producto.id
    );

    if (productoExistente) {
      setCarrito(
        carrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      );
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }

    setCarritoAbierto(true);
  }

  function eliminarProducto(id) {
    setCarrito(carrito.filter((producto) => producto.id !== id));
  }

  function obtenerCantidad() {
    return carrito.reduce(
      (total, producto) => total + producto.cantidad,
      0
    );
  }

  return (
    <>
      <Header
        cantidad={obtenerCantidad()}
        abrirCarrito={() => setCarritoAbierto(true)}
      />

      <main className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <section
          aria-labelledby="titulo-productos"
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          <header className="sm:col-span-2 lg:col-span-3">
            <h2
              id="titulo-productos"
              className="mb-2 text-3xl font-bold"
            >
              Productos
            </h2>
            <p className="text-sm text-[#999999]">
              Explora nuestros productos y agrégalos al carrito.
            </p>
          </header>

          {productos.map((producto) => (
            <Producto
              key={producto.id}
              producto={producto}
              agregarProducto={agregarProducto}
            />
          ))}
        </section>

        <Carrito
          abierto={carritoAbierto}
          productos={carrito}
          cerrarCarrito={() => setCarritoAbierto(false)}
          eliminarProducto={eliminarProducto}
        />
      </main>

      <Pie />
    </>
  );
}

export default App;
