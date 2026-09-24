import { useState } from "react";
import Header from "./componentes/Header.jsx";
import Hero from "./componentes/Hero.jsx";
import Categorias from "./componentes/Categorias.jsx";
import Producto from "./componentes/Producto.jsx";
import Beneficios from "./componentes/Beneficios.jsx";
import Carrito from "./componentes/Carrito.jsx";
import Pie from "./componentes/Pie.jsx";
import { productos } from "./datos/productos.js";

function App() {
  const [carrito, setCarrito] = useState([]);
  const [carritoAbierto, setCarritoAbierto] = useState(false);
  const [categoriaActual, setCategoriaActual] = useState("Todos");

  const productosFiltrados =
    categoriaActual === "Todos"
      ? productos
      : productos.filter(
          (producto) => producto.categoria === categoriaActual
        );

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

  function aumentarCantidad(id) {
    setCarrito(
      carrito.map((producto) =>
        producto.id === id
          ? { ...producto, cantidad: producto.cantidad + 1 }
          : producto
      )
    );
  }

  function disminuirCantidad(id) {
    const producto = carrito.find((item) => item.id === id);

    if (producto && producto.cantidad > 1) {
      setCarrito(
        carrito.map((item) =>
          item.id === id
            ? { ...item, cantidad: item.cantidad - 1 }
            : item
        )
      );
    } else {
      eliminarProducto(id);
    }
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

      <main>
        <Hero />

        <section id="productos" className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <header className="mb-8">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#999999]">
              Nuestra selección
            </p>

            <h2 className="mb-2 text-3xl font-bold">Productos</h2>

            <p className="mb-6 text-sm text-[#999999]">
              Encuentra productos para estudiar, trabajar y disfrutar.
            </p>

            <Categorias
              categoriaActual={categoriaActual}
              cambiarCategoria={setCategoriaActual}
            />
          </header>

          <section
            aria-label="Lista de productos"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {productosFiltrados.map((producto) => (
              <Producto
                key={producto.id}
                producto={producto}
                agregarProducto={agregarProducto}
              />
            ))}
          </section>
        </section>

        <Beneficios />
      </main>

      <Carrito
        abierto={carritoAbierto}
        productos={carrito}
        cerrarCarrito={() => setCarritoAbierto(false)}
        aumentarCantidad={aumentarCantidad}
        disminuirCantidad={disminuirCantidad}
        eliminarProducto={eliminarProducto}
      />

      <Pie />
    </>
  );
}

export default App;
