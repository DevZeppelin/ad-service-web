import Head from "next/head";
import Layout from "../components/Layout";
import { BiCheckShield } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import Fade from "react-reveal/Fade";
import PageTitle from "../components/PageTitle";

const QuienesSomos = () => {
  return (
    <div>
      <Head>
        <title>Quienes Somos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout classQuienesSomos={"bg-dgreen"}>
        <section>
          <PageTitle text="Quienes somos" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8">
            <div className="text-center space-y-4 p-8 md:p-16">
              <h2 className="text-2xl font-extrabold">Nuestra empresa</h2>
              <div className="bg-dgreen w-32 h-1 mx-auto"></div>
              <p>
                <b>AD Service - Agua y petróleo</b>
                <p>
                  Somos una empresa con personal calificado con más de 15 años en el rubro del petróleo, fabricando herramientas para distintos sectores industriales.</p>
                <p>Nos caracterizamos por el trabajo en equipo y alto compromiso laboral.
                </p>
                <p>
                  Poseemos una excelente vocación de servicio, esto nos hace estar disponibles a cualquier horario y en cualquier momento.</p>
                <p>Trabajamos cumpliendo requisitos de calidad propuestos por el cliente para lograr la satisfacción del mismo y aportar a la mejora contínua del proceso.
                </p>


              </p>
            </div>
            <div>
              <img
                src="/logo.png"
                alt="building icon logo Ad Service agua y petróleo"
                className="p-4 w-96 h-96"

              />
            </div>
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 px-8 md:px-32 pb-16 text-center">
          <Fade bottom>
            <div className="space-y-4">
              <BiCheckShield className="mx-auto text-4xl text-dgreen" />
              <h2 className="text-2xl">Nuestra Misión</h2>
              <p>
                AD SERVICE, ofrece servicios
                de Mecanizados, Reparación
                de conexiones petroleras,
                Mantenimiento de equipos de
                bombeo, y Aporte duro en
                herramientas de rotación.
                Cumpliendo con normas de
                calidad y mejora continua
                constante.
              </p>
            </div>
          </Fade>
          <Fade bottom>
            <div className="space-y-4">
              <FaEye className="mx-auto text-4xl text-dgreen " />
              <h2 className="text-2xl">Nuestra Visión</h2>
              <p>
                AD SERVICE, Aspira a ser líder en el servicio de
                Mecanizados y Reparaciones del sector Petrolero y afines, con elevado compromiso, cuidando el medio ambiente, la seguridad y la salud de las personas.
              </p>
            </div>
          </Fade>
        </section>
      </Layout>
    </div>
  );
};

export default QuienesSomos;
