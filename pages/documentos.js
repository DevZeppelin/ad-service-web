import Head from "next/head";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import { useState } from "react";

const Documentos = () => {
  const [visible, setVisible] = useState("hidden");
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((inputValue == "adservice2022")) {
      setVisible("flex");
    } else {
      alert("Contraseña incorrecta")
    }
  };

  return (
    <div>
      <Head>
        <title>Documentación</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout classDocumentos={"bg-dgreen"}>
        <div>
          <PageTitle text="Documentación para el cliente" />

          <section className="mb-8">
            <div className="mx-8 md:mx-32 text-center text-sm md:text-base fadeIn element py-8">
              <h2 className="text-3xl text-center pb-4">
                Acceso a sus documentos
              </h2>

              <h3 className="p-4">
                (En caso de ser cliente, pedir contraseña a los administradores)
              </h3>
              <div className="w-1/3 mx-auto">
                <form className="flex flex-col gap-4 " onSubmit={handleSubmit}>
                  <input
                    type="password"
                    className="border-2 border-black p-2"
                    id="valorIngresado"
                    value={inputValue}
                    onChange= {(e) => {
                      setInputValue (e.target.value)
                    }}
                  />
                  <button type="submit" className="btn">
                    Enviar
                  </button>
                </form>
                  <span className={visible}>
                    <div className="p-8 w-full m-4 border-2 rounded-xl mx-auto border-lowContrast bg-lgreen text-2xl text-white font-extrabold cursor-pointer">
                      Ir a carpeta de archivos
                    </div>
                  </span>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </div>
  );
};

export default Documentos;
