export function Header() {
  const handleScroll = (id: string) => {
    const section = document.getElementById(`${id}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header>
      <div>
        <h1 className="text-2xl font-medium">Instituto Zanolli</h1>
        <div className="mt-52">
          <h2 className="text-5xl font-semibold">
            Bem Vindo ao Instituto Zanolli
          </h2>
          <button
            className="mt-8 bg-foreground p-2 px-8 rounded-3xl text-secondary font-bold hover:bg-foreground/80"
            onClick={() => handleScroll("sobre-nos")}
          >
            Detalhes
          </button>
        </div>
      </div>
    </header>
  );
}
