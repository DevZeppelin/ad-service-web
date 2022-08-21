import Head from "next/head";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import Link from "next/dist/client/link";
import GridComponent from "../components/GridComponent";

const Servicios = () => {
  return (
    <div>
      <Head>
        <title>Servicios</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout classServicios={"bg-dgreen"}>
        <div>
          <PageTitle text="Nuestros Servicios" />

          <section className="grid grid-cols-2 mb-8">
            <div className="mx-12 md:mx-32 mt-8 text-center fadeIn element">
              <h2 className="text-3xl text-left pb-4">Lista de servicios</h2>

              <ul>
                <ul className="text-justify">
                  <h3 className="text-2xl pt-6">SERVICIO PETROLEO</h3>

                  <li>• FABRICACION DE HERRAMIENTAS</li>
                  <ul className="pl-6">
                    <li>• ELEVADOR (LIFT SUB)</li>
                    <li>• TAPON ELEVADOR MACHO-HEMBRA (LIFTING CAP)</li>
                    <li>• REDUCCION (CROSSOVER)</li>
                    <li>• ESTABILIZADOR RECTO (BLADE STABILIZER)</li>
                    <li>• FRESA PLANA (FLAT BOTTOM JUNK MILL)</li>
                    <li>• FRESA CONICA (CONIC MILLS)</li>
                    <li>• FRESA PILOTO (PILOT MILL)</li>
                    <li>• FRESA PLANA CON ESTABILIZADOR (BLADED JUNK MILL)</li>
                    <li>
                      • PERCADOR SERIE 70 Y SERIE 150 (OVERSHOT S70 AND S150)
                    </li>
                    <li>• NIPLE EUE</li>
                    <li>• CUPLA EUE</li>
                  </ul>
                  <li>• REPARACION DE ROSCAS API Y ESPECIALES</li>
                  <ul className="pl-6">
                    <li>• ROSCAS API (IF, NC, REG, EUE, RD, NPT)</li>
                    <li>• ROSCAS ESPECIALES CLIENTES</li>
                  </ul>
                  <li>• CONSTRUCCION DE GUARDAROSCA CON SELLO</li>
                  <li>• REPARACION DE VALVULAS ESFERICAS</li>
                  <li>• APORTE DE MATERIAL DURO</li>
                  <li>• RECTIFICADO</li>
                  <li>• GRANALLADO CON MICROESFERAS DE VIDRIO</li>
                  <li>• ARENADO</li>
                  <li>• LOGISTICA 24HS</li>
                </ul>

                <ul className="text-justify">
                  <h3 className="text-2xl pt-6">SERVICIO AGRO</h3>
                  <li>• EXTRACCION Y COLOCACION DE BOMBAS DE PROFUNDIDAD</li>
                  <li>• MANTENIMIENTO DE ELECTROBOMBAS SUMERGIBLES</li>
                  <li>• MANTENIMIENTO DE BOMBAS DE EJE</li>
                  <li>
                    • VENTA DE EQUIPOS DE BOMBEO NUEVOS Y REACONDICIONADOS
                    GARANTIDOS
                  </li>
                  <li>• ROSCADO DE CAÑERIA</li>
                  <li>• FABRICACION DE FILTROS</li>
                  <li>• METALURGIA</li>
                  <li>• LOGISTICA 24HS</li>
                </ul>

                <ul className="text-justify">
                  <h3 className="text-2xl pt-6">SERVICIO BODEGA</h3>
                  <li>• REPARACION DE TAMIZ</li>
                  <li>• REPARACION DE BOMBAS A TORNILLO</li>
                  <li>• REPARACION DE REDUCTORES</li>
                  <li>• ENDEREZADO DE SIN FIN</li>
                  <li>• MANTENIMIENTOS DE BOMBAS EN GRAL</li>
                  <li>• TORNERIA Y FRESADO GRAL</li>
                  <li>• METALURGIA</li>
                  <li>• LOGISTICA 24HS</li>
                </ul>
              </ul>
            </div>
            <div className="mx-12 md:mx-32 mt-8 text-center fadeIn element space-y-4">
              <h2 className="text-3xl text-left pb-4">Trabajos</h2>
              <GridComponent name="Hola" src="/0001.png" />
              <GridComponent name="Hola" src="/0001.png" />
              <GridComponent name="Hola" src="/0001.png" />
              <GridComponent name="Hola" src="/0001.png" />
              <Link href="/trabajos">
                <div className="rounded-lg p-8 text-xl my-auto btn m-8">
                 Ver más Fotos de trabajos
                </div>
              </Link>
            </div>
          </section>
        </div>
      </Layout>
    </div>
  );
};

export default Servicios;
