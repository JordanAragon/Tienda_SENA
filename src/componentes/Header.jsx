function Header({ cantidad, abrirCarrito }) {
  return (
    <header className="sticky top-0 z-40 border-b border-[#242424] bg-[#111111]">
      <section className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#inicio" className="text-xl font-bold">
          Mi tienda
        </a>

        <nav aria-label="Navegación principal" className="hidden sm:block">
          <ul className="flex items-center gap-6 text-sm text-[#999999]">
            <li>
              <a className="transition hover:text-white" href="#inicio">
                Inicio
              </a>
            </li>
            <li>
              <a className="transition hover:text-white" href="#productos">
                Productos
              </a>
            </li>
            <li>
              <a className="transition hover:text-white" href="#beneficios">
                Beneficios
              </a>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          onClick={abrirCarrito}
          aria-label="Abrir carrito"
          className="flex items-center gap-2 rounded-lg border border-[#242424] bg-[#181818] px-4 py-2 text-white transition hover:border-[#999999]"
        >
          <span aria-hidden="true">🛒</span>
          <span className="text-[#c4c4c4]">{cantidad}</span>
        </button>
      </section>
    </header>
  );
}

export default Header;
