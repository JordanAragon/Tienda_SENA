import { useState } from "react";

function Producto({ producto, agregarProducto }) {
  const [mostrarDescripcion, setMostrarDescripcion] = useState(false);

  return (
    <article className="overflow-hidden rounded-xl border border-[#242424] bg-[#181818] transition hover:-translate-y-1 hover:border-[#999999]">
      <button
        type="button"
        onClick={() => setMostrarDescripcion(!mostrarDescripcion)}
        aria-label={`Mostrar información de ${producto.nombre}`}
        className="block w-full cursor-pointer border-0 bg-transparent p-0"
      >
        <img
          src={producto.imagen}
          alt={producto.textoAlternativo}
          className="block h-64 w-full object-cover transition duration-300 hover:scale-[1.03]"
        />
      </button>

      <h3 className="px-5 pt-5 text-lg font-semibold">
        {producto.nombre}
      </h3>

      {mostrarDescripcion && (
        <p className="px-5 pt-2 text-sm text-[#999999]">
          {producto.descripcion}
        </p>
      )}

      <p className="px-5 py-4 text-lg font-bold">
        {producto.precio.toLocaleString("es-CO", {
          style: "currency",
          currency: "COP",
          maximumFractionDigits: 0,
        })}
      </p>

      <button
        type="button"
        onClick={() => agregarProducto(producto)}
        className="mb-5 ml-5 w-[calc(100%-2.5rem)] rounded-lg border border-white bg-white px-4 py-3 font-semibold text-[#111111] transition hover:bg-transparent hover:text-white"
      >
        Agregar al carrito
      </button>
    </article>
  );
}

export default Producto;
