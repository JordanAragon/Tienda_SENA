function Carrito({
  abierto,
  productos,
  cerrarCarrito,
  aumentarCantidad,
  disminuirCantidad,
  eliminarProducto,
}) {
  const total = productos.reduce(
    (suma, producto) => suma + producto.precio * producto.cantidad,
    0
  );

  return (
    <aside
      aria-labelledby="titulo-carrito"
      className={
        abierto
          ? "fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col border-l border-[#242424] bg-[#181818] p-6 shadow-2xl sm:p-8"
          : "hidden"
      }
    >
      <header className="flex items-center justify-between border-b border-[#242424] pb-6">
        <section>
          <h2 id="titulo-carrito" className="text-2xl font-bold">
            Carrito
          </h2>
          <p className="mt-1 text-sm text-[#999999]">
            Revisa tus productos antes de comprar.
          </p>
        </section>

        <button
          type="button"
          onClick={cerrarCarrito}
          aria-label="Cerrar carrito"
          className="text-3xl text-[#999999] transition hover:text-white"
        >
          ×
        </button>
      </header>

      <ul className="flex flex-1 flex-col gap-4 overflow-y-auto py-6">
        {productos.length === 0 && (
          <li className="rounded-lg border border-dashed border-[#2f2f2f] p-5 text-sm text-[#999999]">
            Tu carrito está vacío. Agrega un producto para comenzar.
          </li>
        )}

        {productos.map((producto) => (
          <li
            key={producto.id}
            className="border-b border-[#242424] pb-4"
          >
            <section className="flex items-start justify-between gap-4">
              <section>
                <h3 className="text-sm font-semibold">{producto.nombre}</h3>
                <p className="mt-1 text-sm text-[#999999]">
                  {producto.precio.toLocaleString("es-CO", {
                    style: "currency",
                    currency: "COP",
                    maximumFractionDigits: 0,
                  })}
                </p>
              </section>

              <button
                type="button"
                onClick={() => eliminarProducto(producto.id)}
                className="text-xs text-[#999999] hover:text-white"
              >
                Eliminar
              </button>
            </section>

            <footer className="mt-3 flex items-center justify-between">
              <section
                aria-label={`Cantidad de ${producto.nombre}`}
                className="flex items-center gap-3"
              >
                <button
                  type="button"
                  onClick={() => disminuirCantidad(producto.id)}
                  aria-label={`Disminuir cantidad de ${producto.nombre}`}
                  className="h-8 w-8 rounded-md border border-[#2f2f2f] text-[#c4c4c4] hover:border-[#999999] hover:text-white"
                >
                  −
                </button>

                <span>{producto.cantidad}</span>

                <button
                  type="button"
                  onClick={() => aumentarCantidad(producto.id)}
                  aria-label={`Aumentar cantidad de ${producto.nombre}`}
                  className="h-8 w-8 rounded-md border border-[#2f2f2f] text-[#c4c4c4] hover:border-[#999999] hover:text-white"
                >
                  +
                </button>
              </section>

              <strong className="text-sm">
                {(producto.precio * producto.cantidad).toLocaleString(
                  "es-CO",
                  {
                    style: "currency",
                    currency: "COP",
                    maximumFractionDigits: 0,
                  }
                )}
              </strong>
            </footer>
          </li>
        ))}
      </ul>

      <footer className="border-t border-[#242424] pt-6">
        <p className="mb-4 flex justify-between text-[#999999]">
          <span>Total</span>
          <strong className="text-white">
            {total.toLocaleString("es-CO", {
              style: "currency",
              currency: "COP",
              maximumFractionDigits: 0,
            })}
          </strong>
        </p>

        <button
          type="button"
          disabled={productos.length === 0}
          className="w-full rounded-lg border border-white bg-white px-4 py-3 font-semibold text-[#111111] transition hover:bg-transparent hover:text-white disabled:cursor-not-allowed disabled:border-[#2f2f2f] disabled:bg-[#2f2f2f] disabled:text-[#777777]"
        >
          Comprar
        </button>
      </footer>
    </aside>
  );
}

export default Carrito;
