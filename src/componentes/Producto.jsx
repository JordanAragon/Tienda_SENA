import { useState } from "react";

function Producto({ producto, agregarProducto }) {
  const [mostrarDescripcion, setMostrarDescripcion] = useState(false);

  const precio = producto.precio.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  });

  return (
    <article className="overflow-hidden rounded-xl border border-[#242424] bg-[#181818] transition hover:-translate-y-1 hover:border-[#999999]">
      <figure>
        <button
          type="button"
          onClick={() => setMostrarDescripcion(!mostrarDescripcion)}
          aria-label={`Mostrar imagen de ${producto.nombre}`}
          className="block w-full cursor-pointer border-0 bg-transparent p-0"
        >
          <img
            src={producto.imagen}
            alt={producto.textoAlternativo}
            className="block h-64 w-full object-cover transition duration-300 hover:scale-[1.03]"
          />
        </button>
      </figure>

      <header className="px-5 pt-5">
        <span className="rounded-full border border-[#2f2f2f] px-3 py-1 text-xs text-[#999999]">
          {producto.categoria}
        </span>

        <h3 className="mt-4 text-lg font-semibold">{producto.nombre}</h3>
      </header>

      <section className="px-5 pt-3">
        {mostrarDescripcion ? (
          <p className="text-sm leading-6 text-[#999999]">
            {producto.descripcion}
          </p>
        ) : (
          <button
            type="button"
            onClick={() => setMostrarDescripcion(true)}
            className="text-sm text-[#999999] underline underline-offset-4 transition hover:text-white"
          >
            Ver descripción
          </button>
        )}

        <p className="pt-4 text-xs text-[#999999]">Disponible</p>
      </section>

      <footer className="flex items-center justify-between gap-4 px-5 py-5">
        <p className="text-lg font-bold">{precio}</p>

        <button
          type="button"
          onClick={() => agregarProducto(producto)}
          className="rounded-lg border border-white bg-white px-4 py-2.5 text-sm font-semibold text-[#111111] transition hover:bg-transparent hover:text-white"
        >
          Agregar
        </button>
      </footer>
    </article>
  );
}

export default Producto;
