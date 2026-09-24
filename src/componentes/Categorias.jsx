function Categorias({ categoriaActual, cambiarCategoria }) {
  const categorias = ["Todos", "Audio", "Periféricos", "Monitores"];

  return (
    <nav
      aria-label="Categorías de productos"
      className="flex flex-wrap gap-3"
    >
      {categorias.map((categoria) => (
        <button
          key={categoria}
          type="button"
          onClick={() => cambiarCategoria(categoria)}
          className={
            categoriaActual === categoria
              ? "rounded-full border border-white bg-white px-4 py-2 text-sm font-semibold text-[#111111]"
              : "rounded-full border border-[#2f2f2f] bg-[#181818] px-4 py-2 text-sm text-[#c4c4c4] transition hover:border-[#999999] hover:text-white"
          }
        >
          {categoria}
        </button>
      ))}
    </nav>
  );
}

export default Categorias;
