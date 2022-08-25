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

          <section className="grid grid-cols-1 md:grid-cols-2 pb-10 bg-gradient">
            <div className="mx-8 md:mx-32 text-center text-sm md:text-base fadeIn element py-8">
              <h2 className="text-3xl text-left pb-4">Lista de servicios</h2>

              <ul className="space-y-6 raleway">
                <ul className="text-justify space-y-4">
                  <h3 className="text-2xl pt-6 animate-bounce">SERVICIO PETRÓLEO</h3>

                  <div className="lowercase space-y-3">
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
                  </div>
                </ul>

                <ul className="text-justify space-y-4">
                  <h3 className="text-2xl pt-6 animate-bounce">SERVICIO AGRO</h3>
                  <div className="lowercase space-y-3">
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
                  </div>
                </ul>

                <ul className="text-justify space-y-4">
                  <h3 className="text-2xl pt-6 animate-bounce">SERVICIO BODEGA</h3>
                  <div className="lowercase space-y-3">
                    <li>• REPARACION DE TAMIZ</li>
                    <li>• REPARACION DE BOMBAS A TORNILLO</li>
                    <li>• REPARACION DE REDUCTORES</li>
                    <li>• ENDEREZADO DE SIN FIN</li>
                    <li>• MANTENIMIENTOS DE BOMBAS EN GRAL</li>
                    <li>• TORNERIA Y FRESADO GRAL</li>
                    <li>• METALURGIA</li>
                    <li>• LOGISTICA 24HS</li>
                  </div>
                </ul>
              </ul>
            </div>
            <div className="mx-12 md:mx-32 mt-8 text-center fadeIn element space-y-4">
              <h2 className="text-3xl text-left pb-4">Trabajos</h2>
              <GridComponent name="Estabilizador Recto" src="/s-1-estabilizador-recto.png" />
              <GridComponent name="Fresa Plana" src="/s-2-fresa-plana.png" />
              <GridComponent name="Aporte Duro" src="/s-3-aporte-duro.png" />
              <GridComponent name="Cupero Tamiz (Bodega)" src="/s-4-cuerpo-tamiz.png" />
              <GridComponent name="Sustitutos" src="/s-5-sustitutos.png" />
              <GridComponent name="Piezas varias" src="/s-6-piezas-varias.png" />
              <Link href="trabajos">
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
