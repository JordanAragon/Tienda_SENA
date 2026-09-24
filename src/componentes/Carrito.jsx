function Carrito({
  abierto,
  productos,
  cerrarCarrito,
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
          ? "fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col border-l border-[#242424] bg-[#181818] p-8 shadow-2xl"
          : "hidden"
      }
    >
      <header className="flex items-center justify-between border-b border-[#242424] pb-6">
        <h2 id="titulo-carrito" className="text-2xl font-bold">
          Carrito
        </h2>

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
          <li className="text-sm text-[#999999]">
            Tu carrito está vacío.
          </li>
        )}

        {productos.map((producto) => (
          <li
            key={producto.id}
            className="grid grid-cols-[1fr_auto_auto] items-center gap-3 border-b border-[#242424] pb-4"
          >
            <span className="text-sm text-[#c4c4c4]">
              {producto.nombre} x{producto.cantidad}
            </span>

            <span className="text-sm text-[#c4c4c4]">
              {(producto.precio * producto.cantidad).toLocaleString(
                "es-CO",
                {
                  style: "currency",
                  currency: "COP",
                  maximumFractionDigits: 0,
                }
              )}
            </span>

            <button
              type="button"
              onClick={() => eliminarProducto(producto.id)}
              className="text-sm text-[#999999] hover:text-white"
            >
              Eliminar
            </button>
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
          className="w-full rounded-lg border border-white bg-white px-4 py-3 font-semibold text-[#111111] transition hover:bg-transparent hover:text-white"
        >
          Comprar
        </button>
      </footer>
    </aside>
  );
}

export default Carrito;
