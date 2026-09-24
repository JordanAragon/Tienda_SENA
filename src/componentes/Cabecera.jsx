function Cabecera({ cantidad, abrirCarrito }) {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between border-b border-[#242424] bg-[#111111] px-5 py-5 sm:px-8">
      <h1 className="text-xl font-bold">Mi tienda</h1>

      <button
        type="button"
        onClick={abrirCarrito}
        aria-label="Abrir carrito"
        className="flex items-center gap-2 rounded-lg border border-[#242424] bg-[#181818] px-4 py-2 text-white transition hover:border-[#999999]"
      >
        <span aria-hidden="true">🛒</span>
        <span className="text-[#c4c4c4]">{cantidad}</span>
      </button>
    </header>
  );
}

export default Cabecera;
