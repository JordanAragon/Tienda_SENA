function Hero() {
  return (
    <section id="inicio" className="border-b border-[#242424] bg-[#111111]">
      <header className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-20 sm:px-8 lg:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#999999]">
          Tienda SENA
        </p>

        <h2 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
          Tecnología sencilla para tu día a día.
        </h2>

        <p className="max-w-2xl text-base leading-7 text-[#999999]">
          Encuentra accesorios y equipos para estudiar, trabajar y disfrutar
          de tus dispositivos.
        </p>

        <a
          href="#productos"
          className="w-fit rounded-lg border border-white bg-white px-5 py-3 font-semibold text-[#111111] transition hover:bg-transparent hover:text-white"
        >
          Ver productos
        </a>
      </header>
    </section>
  );
}

export default Hero;
