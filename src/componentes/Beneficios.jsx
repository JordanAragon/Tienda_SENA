function Beneficios() {
  const beneficios = [
    {
      titulo: "Envíos rápidos",
      texto: "Recibe tus productos de forma rápida y sencilla.",
    },
    {
      titulo: "Compra segura",
      texto: "Una experiencia de compra clara y fácil de usar.",
    },
    {
      titulo: "Soporte",
      texto: "Te ayudamos cuando tengas alguna duda con tu compra.",
    },
  ];

  return (
    <section
      aria-labelledby="titulo-beneficios"
      className="border-y border-[#242424] bg-[#151515] py-16"
    >
      <header className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 id="titulo-beneficios" className="mb-8 text-2xl font-bold">
          ¿Por qué comprar aquí?
        </h2>

        <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {beneficios.map((beneficio) => (
            <article
              key={beneficio.titulo}
              className="rounded-xl border border-[#242424] bg-[#181818] p-5"
            >
              <h3 className="mb-2 font-semibold">{beneficio.titulo}</h3>
              <p className="text-sm leading-6 text-[#999999]">
                {beneficio.texto}
              </p>
            </article>
          ))}
        </section>
      </header>
    </section>
  );
}

export default Beneficios;
