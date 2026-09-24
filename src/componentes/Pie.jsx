function Pie() {
  return (
    <footer className="border-t border-[#242424] bg-[#111111]">
      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:px-8 md:grid-cols-3">
        <header>
          <h2 className="text-lg font-bold">Mi tienda</h2>
          <p className="mt-2 text-sm leading-6 text-[#999999]">
            Una tienda virtual sencilla desarrollada como proyecto SENA.
          </p>
        </header>

        <nav aria-label="Enlaces del pie de página">
          <h2 className="mb-3 text-sm font-semibold text-white">Enlaces</h2>
          <ul className="space-y-2 text-sm text-[#999999]">
            <li>
              <a className="hover:text-white" href="#inicio">
                Inicio
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="#productos">
                Productos
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="#beneficios">
                Beneficios
              </a>
            </li>
          </ul>
        </nav>

        <section>
          <h2 className="mb-3 text-sm font-semibold text-white">Proyecto</h2>
          <p className="text-sm leading-6 text-[#999999]">
            Proyecto académico desarrollado con React, Vite y Tailwind CSS.
          </p>
        </section>
      </section>

      <p className="border-t border-[#242424] px-5 py-5 text-center text-xs text-[#777777] sm:px-8">
        © 2026 Mi tienda. Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Pie;
