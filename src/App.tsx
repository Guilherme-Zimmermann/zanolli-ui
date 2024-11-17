import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <div className="p-8 md:ml-16">
        <Header />
        <div>
          <div className="mt-64">
            <h2 className="text-3xl font-semibold">Por que devo conhecer?</h2>
          </div>
          <div className="md:flex md:justify-between max-md:mx-8">
            <div className="flex flex-col gap-8 md:gap-16 mt-16 md:w-[36rem]">
              <div>
                <span className="font-medium">Titulo</span>
                <p className="font-light">
                  O Instituto Zanolli é uma instituição de Kong Fu e Wushu Sanda
                  que tem como objetivo ensinar a arte marcial chinesa para
                  crianças, jovens e adultos.
                </p>
              </div>
              <div>
                <span>Titulo</span>
                <p className="font-light">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Magnam quam eaque molestias iure? Doloribus ducimus soluta
                  necessitatibus eius a architecto esse saepe fuga modi,
                  quaerat, fugiat suscipit quis quidem tempora.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-8 md:gap-16 mt-16 md:w-[36rem]">
              <div>
                <span className="font-medium">Titulo</span>
                <p className="font-light">
                  O Instituto Zanolli é uma instituição de Kong Fu e Wushu Sanda
                  que tem como objetivo ensinar a arte marcial chinesa para
                  crianças, jovens e adultos.
                </p>
              </div>
              <div>
                <span className="font-medium">Titulo</span>
                <p className="font-light">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Magnam quam eaque molestias iure? Doloribus ducimus soluta
                  necessitatibus eius a architecto esse saepe fuga modi,
                  quaerat, fugiat suscipit quis quidem tempora.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-64" id="sobre-nos">
            <h2 className="max-md:text-center text-3xl font-semibold">
              Sobre nós
            </h2>
            <div>
              <p className="max-md:text-center w-[26rem] md:w-[30rem] mt-10 font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores rerum ipsum accusantium impedit modi expedita
                accusamus quisquam magni ratione error, corrupti cumque
                exercitationem fugiat earum, cum nulla, esse totam amet.
              </p>
            </div>
          </div>
          <div className="mt-32">
            <a
              className="p-4 px-8 bg-emerald-400 rounded-3xl text-secondary flex gap-2 items-center hover:bg-emerald-400/80 w-max"
              href="https://contate.me/instituto-zanolli"
            >
              Nos chame no Whatsapp
              <img src="/src/assets/whatsappIcon.svg" alt="" width={18} />
            </a>
          </div>
        </div>
        <div className="mt-64">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
