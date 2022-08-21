import Head from "next/head";
import Layout from "../components/Layout";
import MainBarButton from "../components/MainBarButton";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Fade from "react-reveal/Fade";
import PageTitle from "../components/PageTitle";

const Contacto = () => {
  return (
    <div>
      <Head>
        <title>Contacto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout classContacto={"bg-dgreen"}>
        <PageTitle text="Contactanos" />
        <div className="text-center space-y-6 pt-8">
          <p className="text-lg px-16">
            <p>
              Somos una empresa con personal calificado con más de 15 años en el
              rubro del petróleo, fabricando herramientas para distintos
              sectores industriales.
            </p>

            <p>
              Nos caracterizamos por el trabajo en equipo y alto compromiso
              laboral.
            </p>

            <p>
              Poseemos una excelente vocación de servicio, esto nos hace estar
              disponibles a cualquier horario y en cualquier momento.
            </p>
          </p>
          <h1 className="text-4xl font-extrabold pt-10">¡Contactanos!</h1>
          <p>
            <b>Dirección</b>: Mariano Moreno 50 - Rodeo del Medio - Maipú - Mendoza
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-6 ">
            <Fade big>
              <div>
                <a
                  href="https://api.whatsapp.com/send?phone=5492615990759"
                  target="_blank"
                  rel="noopener"
                >
                  <MainBarButton
                    logo={
                      <FaPhone className="text-dgreen text-6xl flex my-auto m-4" />
                    }
                    text="Llamadas"
                    description="2634-739363"
                    classType="text-dgreen text-2xl my-2"
                  />
                </a>
              </div>
            </Fade>
            <Fade big>
              <div>
                <a
                  href="https://api.whatsapp.com/send?phone=5492615990759"
                  target="_blank"
                  rel="noopener"
                >
                  <MainBarButton
                    logo={
                      <FaWhatsapp className="text-dgreen text-6xl flex my-auto m-4" />
                    }
                    text="Whatsapp Chat"
                    description="+5492615990759"
                    classType="text-dgreen text-2xl my-2"
                  />
                </a>
              </div>
            </Fade>
            <Fade big>
              <div>
                <a
                  href="mailto:info@adservice.com.ar"
                  target="_blank"
                  rel="noopener"
                >
                  <MainBarButton
                    logo={
                      <FiMail className="text-dgreen text-6xl flex my-auto m-4" />
                    }
                    text="Correo electrónico"
                    description="info@adservice.com.ar"
                    classType="text-dgreen text-2xl my-2"
                  />
                </a>
              </div>
            </Fade>
          </div>
        </div>
        <section className="text-gray-400 bg-gray-900 body-font relative">
          <div className="absolute inset-0 bg-gray-900">
           
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d836.6366260216392!2d-68.6903558708076!3d-32.98936447392598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0d32921ea911%3A0xff180b611e46be2f!2sAD%20SERVICE%20Agua%20y%20Petroleo!5e0!3m2!1ses-419!2sar!4v1661029843576!5m2!1ses-419!2sar"
              width="100%"
              height="600"              
              allowFullScreen=""
              
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="container px-5 py-24 min-h-screen mx-auto flex"></div>
        </section>
      </Layout>
    </div>
  );
};

export default Contacto;
