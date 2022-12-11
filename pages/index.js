import Head from "next/head";
import Link from "next/link";
import NextLink from "next/link";
/* import Link from "next/dist/client/link"; */

import Layout from "../components/Layout";
import SectionWelcome from "../components/sections/SectionWelcome";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { FaRecycle, FaUserCog } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import GridComponent from "../components/GridComponent";
import ImageClientes from "../components/ImageClientes";


import { useInView } from 'react-intersection-observer';

export default function Home() {

  const { ref: sectionGrid, inView: SectionGridVisible } = useInView();
  const { ref: cartelFixed, inView: CartelFixedVisible } = useInView();
  const { ref: elegirnos, inView: elegirnosVisible } = useInView();
  const { ref: clientes, inView: clientesVisible } = useInView();

  return (
    <div>
      <Head>
        <title>AD Service - Petróleo y agua</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="ad service, agua, petróleo, servicios petróleo y agua, mendoza, argentina"
        />
        <meta
          name="keywords"
          content="ad service, agua, petróleo, servicios petróleo y agua, mendoza, argentina"
        />
        <meta name="author" content="Gino Pietrobon" />
      </Head>
      <Layout classHome={"bg-dgreen"}>
        <SectionWelcome />
        <section>
          <div className="space-y-2 text-center p-12 px-8 md:px-32 pt-8 bg-darkGray">
            <h1 className="font-bold text-2xl tracking-wider text-lgreen">
              SOMOS EXPERTOS EN NUESTRO RUBRO
            </h1>
            <p className="text-white">
              AD SERVICE, Es una empresa que trabaja bajo implementación de
              sistema de calidad ISO 9001-2015.
            </p>
            <p className="text-white">
              Aportando valor y alto compromiso brindando servicios de calidad.
              Siendo nuestro pilar la vocación de servicio hacia el cliente.
            </p>
          </div>
        </section>
        <section ref={sectionGrid} className={SectionGridVisible ? "animate-appear" : ""}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-8 md:m-24 text-center fadeIn element">
            <div className="my-auto font-bold flex">
              <div className="w-3 h-32 bg-dgreen my-auto"></div>
              <p className="text-lg m-6">
                Contamos con una amplia variedad de servicios en diferentes
                rubros: Petróleo, Agua, Agro y Bodega
              </p>
            </div>
            <GridComponent
              name="REPARACION DE CONEXIONES API Y ESPECIALES"
              src="0001.png"
            />
            <GridComponent
              name="APORTE DURO EN FRESAS Y ZAPATOS"
              src="0002.png"
            />
            <GridComponent
              name="RECTIFICADO DE FRESAS, ZAPATOS, ESTABILIZADORES"
              src="0003.png"
            />
            <GridComponent name="FABRICACION DE HERAMIENTAS ▶" src="0004.png" />
            <GridComponent
              name="Elevadores, Reducciones, Fresas, Estabilizadores."
              src="0005.png"
            />
            <GridComponent name="MECANIZADO GENERAL" src="0006.png" />
            <GridComponent
              name="GRANALLADO CON MICROESFERAS DE VIDRIO"
              src="0007.png"
            />
            <GridComponent
              name="MANTENIMIENTO DE EQUIPOS DE BOMBEO"
              src="0008.png"
            />
            <GridComponent
              name="SERVICIO DE CONTROL DE CALIDAD PARA EMPRESAS"
              src="0009.png"
            />
            <GridComponent name="LOGISTICA" src="0010.png" />
            <div className="m-6 space-y-4 md:space-y-4 text-center my-auto element">
              <h2 className="font-bold text-xl">
                Más sobre nuestros servicios
              </h2>
              <p>Para ver una lista completa de nuestros servicio entrá acá:</p>
              <NextLink href="/servicios">
                <button className="btn">Servicios</button>
              </NextLink>
            </div>
          </div>
        </section>

        <section>
          <div className="p-8 md:p-32 py-32  font-bold text-black text-center bg-cover bg-hero2 bg-fixed grid grid-cols-1 md:grid-cols-2">
            <div></div>
            <div ref={cartelFixed} className={`${CartelFixedVisible ? "animate-right" : ""} space-y-6 bg-lgreen bg-opacity-80 p-12 rounded-2xl`}>
              <h2 className="text-3xl fadeIn">
                Empresa de servicios de Petróleo y Agua
              </h2>

              <span className="text-base">
                <p>
                  AD SERVICE, Es una empresa que trabaja bajo implementación de
                  sistema de calidad ISO 9001-2015 .
                </p>{" "}
                <p>
                  Aportando valor y alto compromiso brindando servicios de
                  calidad.
                </p>
                <p>
                  Siendo nuestro pilar la vocación de servicio hacia el cliente.
                </p>
              </span>

              <Link href="/contacto">
                <button className="btn uppercase">
                  Reservá una visita con nosotros
                </button>
              </Link>
            </div>
          </div>
        </section>

        <section ref={clientes} className={clientesVisible ? "animate-appear" : ""}>
          <div className="text-center py-16 bg-white">
            <h2 className="text-3xl font-bold pb-12">Nuestros Clientes</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-6 md:px-40 my-0">

            <ImageClientes src="c1.jpg" />
            <ImageClientes src="c2.png" />
            <ImageClientes src="c3.png" />
            <ImageClientes src="c5.png" />
            <ImageClientes src="c4.jpg" />
            <ImageClientes src="c6.png" />
            <ImageClientes src="c7.jpg" />

            </div>
          </div>
        </section>

        <section>
          <div className="text-center pt-16">
            <h2 className="text-3xl font-bold py-12">¿Por qué elegirnos?</h2>
            <div ref={elegirnos} className={`${elegirnosVisible ? "animate-down" : ""} grid grid-cols-1 md:grid-cols-4 gap-12 px-12 md:px-32 pb-16`}>
              <div className="space-y-8 pb-6">
                <BsFillPersonCheckFill className="text-6xl text-dgreen mx-auto" />
                <h3 className="font-bold">
                  Valoración de los recursos humanos
                </h3>
                <p>
                  Queremos, buscamos y promovemos las buenas relaciones humanas,
                  tanto sociales como laborales y familiares. Entendemos el
                  valor de una persona y su historia.
                </p>
              </div>
              <div className="space-y-8 pb-6">
                <FaRecycle className="text-6xl text-dgreen mx-auto" />
                <h3 className="font-bold">Cuidado del medio ambiente</h3>
                <p>
                  Nuestras actividades cumplen con la legislación aplicable y
                  pertinente en materia de calidad, medio ambiente, seguridad y
                  salud.
                </p>
              </div>
              <div className="space-y-8 pb-6">
                <AiOutlineStar className="text-6xl text-dgreen mx-auto" />
                <h3 className="font-bold">Excelencia de nuestros servicios</h3>
                <p>
                  Buscamos y perseguimos la excelencia del servicio prestado a
                  través de los principios de transparencia, honestidad y
                  responsabilidad.
                </p>
              </div>
              <div className="space-y-8 pb-6">
                <FaUserCog className="text-6xl text-dgreen mx-auto" />
                <h3 className="font-bold">Profesionales capacitados</h3>
                <p>
                  Brindamos la eficiencia y calidad exigida por el cliente,
                  demostrando la capacidad de llevar de manera idónea los
                  proyectos asignados.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
}
