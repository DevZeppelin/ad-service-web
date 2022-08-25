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
          <div>
            <section className="bg-gradient">
              <div className="text-center space-y-6 p-8 md:p-16 raleway">

                <h2 className="text-2xl font-bold animate-bounce">POLITICA DE CALIDAD AD SERVICE</h2>

                <div className="lowercase font-bold text-lg ">
                  <p><b className="uppercase">AD SERVICE</b>. ES UNA EMPRESA DEDICADA A OFRECER SERVICIOS DE FABRICACION DEHERRAMIENTAS, REPARACION DE EQUIPOS DE BOMBEO, REPARACION DE CONEXIONESPETROLERAS, Y APORTE DURO EN HERRAMIENTAS DE ROTACION EN SU BASE DEOPERACIONES EN LA PROVINCIA DE MENDOZA.</p>
                  <p>CON ESTA POLITICA NOS COMPROMETEMOS A:
                    <div className="p-12 text-justify space-y-4">
                      <li>IMPLEMENTAR Y MANTENER UN SISTEMA INTEGRADO DE GESTIÓN, MEJORANDOCONTINUAMENTE SU EFICACIA Y DESEMPEÑO SEGÚN APLIQUE, BASADO EN LOSREQUISITOS DE LAS NORMAS ISO 9001. </li>
                      <li>QUE SIRVA DE APOYO A LA DIRECCIÓN Y SEA APROPIADA AL PROPÓSITO, TAMAÑO YCONTEXTO DE LA ORGANIZACIÓN, INCLUIDA LA NATURALEZA E IMPACTOSAMBIENTALES DE SUS ACTIVIDADES, PRODUCTOS Y SERVICIOS, Y A LA NATURALEZAESPECÍFICA DE SUS RIESGOS PARA LA SST Y SUS OPORTUNIDADES PARA LA SST,PROPORCIONANDO CONDICIONES DE TRABAJO SEGURAS Y SALUDABLES PARA LAPREVENCIÓN DE LESIONES Y DETERIORO DE LA SALUD RELACIONADOS CON ELTRABAJO. </li>
                      <li>BRINDAR SERVICIOS QUE CUMPLAN CON LOS REQUISITOS APLICABLES, LEGALES, YOTROS REQUISITOS.</li>
                      <li>PROPORCIONAR EL MARCO DE REFERENCIA PARA EL ESTABLECIMIENTO DE LOSOBJETIVOS DE CALIDAD, AMBIENTALES Y DE LA SST.</li>
                      <li>PROTEGER EL MEDIO AMBIENTE Y PREVENIR LA CONTAMINACIÓN, COMO ASÍ TAMBIÉNELIMINAR LOS PELIGROS Y REDUCIR LOS RIESGOS PARA LA SST.</li>
                      <li>ESTABLECER UN MÉTODO PARA LA CONSULTA Y PARTICIPACIÓN DE LOSTRABAJADORES.</li>
                    </div></p>

                  <p><span className="uppercase">N</span>OS ASEGURAMOS QUE LA PRESENTE POLÍTICA DE GESTIÓN ES PERTINENTE Y APROPIADA,ESTA DOCUMENTADA, ES ENTENDIDA DENTRO DE LA EMPRESA Y COMUNICADA A TODASLAS PERSONAS QUE TRABAJAN PARA AD SERVICE, Y AQUELLAS QUE TRABAJAN Y/O ESTANBAJO EL CONTROL DE LA ORGANIZACIÓN, CON LA FINALIDAD DE QUE ESTÉN CONSCIENTESDE SUS OBLIGACIONES INDIVIDUALES RESPECTO A LA CALIDAD, EL MEDIO AMBIENTE Y LASEGURIDAD Y SALUD ASOCIADOS CON SU TRABAJO.</p>
                  <p>ESTA POLÍTICA DE GESTIÓN ESTÁ A DISPOSICIÓN DE NUESTROS EMPLEADOS, CLIENTES,PÚBLICO Y PARTES INTERESADAS PERTINENTES.</p>
                  <p className=" text-sm mt-16">MENDOZA, 20 de Marzo de 2022.</p>
                </div>

              </div>
            </section>

          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Servicios;
