import Head from "next/head";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import Link from "next/dist/client/link";

const Servicios = () => {
  return (
    <div>
      <Head>
        <title>Servicios</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout classCalidad={"bg-dgreen"}>
        <div>
          <PageTitle text="Política de Calidad" />

          <section className="bg-gradient">
            <div className="text-center space-y-6 p-8 md:p-16">
              <h2 className="text-3xl animate-bounce">
                POLITICA DE CALIDAD AD SERVICE
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8 text-lg lowercase">
                <div className="space-y-4">
                  <p>
                    <b className="uppercase">AD SERVICE</b>. ES UNA EMPRESA
                    DEDICADA A OFRECER SERVICIOS DE FABRICACION DE HERRAMIENTAS,
                    REPARACION DE EQUIPOS DE BOMBEO, REPARACION DE
                    CONEXIONES PETROLERAS, Y APORTE DURO EN HERRAMIENTAS DE
                    ROTACION EN SU BASE DE OPERACIONES EN LA PROVINCIA DE
                    MENDOZA.
                  </p>
                  <p className="pb-6"><span className="uppercase">C</span>ON ESTA POLITICA NOS COMPROMETEMOS A:</p>
                  <li>
                    IMPLEMENTAR Y MANTENER UN SISTEMA INTEGRADO DE GESTIÓN,
                    MEJORANDO CONTINUAMENTE SU EFICACIA Y DESEMPEÑO SEGÚN
                    APLIQUE, BASADO EN LOS REQUISITOS DE LAS NORMAS ISO 9001.{" "}
                  </li>
                  <li>
                    QUE SIRVA DE APOYO A LA DIRECCIÓN Y SEA APROPIADA AL
                    PROPÓSITO, TAMAÑO Y CONTEXTO DE LA ORGANIZACIÓN, INCLUIDA LA
                    NATURALEZA E IMPACTOS AMBIENTALES DE SUS ACTIVIDADES,
                    PRODUCTOS Y SERVICIOS, Y A LA NATURALEZA ESPECÍFICA DE SUS
                    RIESGOS PARA LA SST Y SUS OPORTUNIDADES PARA LA
                    SST,PROPORCIONANDO CONDICIONES DE TRABAJO SEGURAS Y
                    SALUDABLES PARA LA PREVENCIÓN DE LESIONES Y DETERIORO DE LA
                    SALUD RELACIONADOS CON ELTRABAJO.{" "}
                  </li>
                  
                </div>
                <div className="text-center-test">
                  <img
                    src="/logo.png"
                    alt="building icon logo Ad Service petróleo y agua"
                    className="p-4 w-96 h-96 mx-auto"
                  />
                </div>
              </div>

              <div className="lowercase text-lg space-y-4">
              <li>
                    BRINDAR SERVICIOS QUE CUMPLAN CON LOS REQUISITOS APLICABLES,
                    LEGALES, Y OTROS REQUISITOS.
                  </li>
                  <li>
                    PROPORCIONAR EL MARCO DE REFERENCIA PARA EL ESTABLECIMIENTO
                    DE LOS OBJETIVOS DE CALIDAD, AMBIENTALES Y DE LA SST.
                  </li>
                  <li>
                    PROTEGER EL MEDIO AMBIENTE Y PREVENIR LA CONTAMINACIÓN, COMO
                    ASÍ TAMBIÉN ELIMINAR LOS PELIGROS Y REDUCIR LOS RIESGOS PARA
                    LA SST.
                  </li>
                  <li>
                    ESTABLECER UN MÉTODO PARA LA CONSULTA Y PARTICIPACIÓN DE
                    LOS TRABAJADORES.
                  </li>
                <p>
                  <span className="uppercase">N</span>OS ASEGURAMOS QUE LA
                  PRESENTE POLÍTICA DE GESTIÓN ES PERTINENTE Y APROPIADA,ESTA
                  DOCUMENTADA, ES ENTENDIDA DENTRO DE LA EMPRESA Y COMUNICADA A
                  TODASLAS PERSONAS QUE TRABAJAN PARA AD SERVICE, Y AQUELLAS QUE
                  TRABAJAN Y/O ESTANBAJO EL CONTROL DE LA ORGANIZACIÓN, CON LA
                  FINALIDAD DE QUE ESTÉN CONSCIENTESDE SUS OBLIGACIONES
                  INDIVIDUALES RESPECTO A LA CALIDAD, EL MEDIO AMBIENTE Y
                  LA SEGURIDAD Y SALUD ASOCIADOS CON SU TRABAJO.
                </p>
                <p>
                  <span className="uppercase">E</span>STA POLÍTICA DE GESTIÓN ESTÁ A DISPOSICIÓN DE NUESTROS
                  EMPLEADOS, CLIENTES,PÚBLICO Y PARTES INTERESADAS PERTINENTES.
                </p>
                <p className="text-sm font-bold pt-24 text-right">MENDOZA, 20 de Marzo de 2022.</p>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </div>
  );
};

export default Servicios;
