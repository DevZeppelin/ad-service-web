import Head from "next/head";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import Link from "next/dist/client/link";
import GridComponent from "../components/GridComponent";

const Trabajos = () => {
  return (
    <div>
      <Head>
        <title>Trabajos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout classTrabajos={"bg-dgreen"}>
        <div>
          <PageTitle text="Nuestros Trabajos" />

          <section className="pb-8 bg-gradient">
            <h2 className="text-3xl text-center pb-4 p-12 ">Algunos de nuestros trabajos</h2>
            <div className="mx-6 md:mx-32 mt-8 text-center fadeIn element grid grid-cols-1 md:grid-cols-3 gap-4">
             
              <GridComponent name="Aporte Fresa Plana" src="/t1-aporteFresaPlana.png" />
              <GridComponent name="Tapa Rosca Doble Selli" src="/t2-taparoscadoblesello.png" />
              <GridComponent name="Reducción" src="/t7-reduccion.png" />
              <GridComponent name="Pescador Serie 150" src="/t8-pescadorserie150.png" />
              <GridComponent name="Mecanizado de Pieza" src="/t9-mecanizadodepieza.png" />
              <GridComponent name="Fabricación de partes nuevas" src="/t13-fabricacionpartesnuevas.png" />
              <GridComponent name="Fresa Plana" src="/t10-fresaplana1.png" />
              <GridComponent name="Fresa Plana" src="/t11-fresaplana2.png" />
              <GridComponent name="Fresa con estabilizador" src="/t12-fresaconestabilizador.png" />
              <GridComponent name="Aporte en Fresa gota y plana" src="/t35-APORTE EN FRESA GOTA Y PLANA.png" />
              <GridComponent name="Aporte Fresa Plana" src="/t33-APORTE FRESA PLANA.png" />
              <GridComponent name="Aporte Fresa Plana" src="/t36-APORTE DE FRESA PLANA 2.png" />
              <GridComponent name="Equipo Buster" src="/t15-equipobuster.png" />
              <GridComponent name="Equipo Buster" src="/t16-equipobuster2.png" />
              <GridComponent name="Equipo Buster" src="/t37-equipobuster.png" />
              <GridComponent name="Electrobombas Sumergibles" src="/t17-electrobombassumergibles.png" />
              <GridComponent name="Electrobomba sumergible nueva" src="/t18-electrobombassumergiblesnueva.png" />
              <GridComponent name="Electrobombas Sumergibles" src="/t19-electrobombasumergible.png" />
              <GridComponent name="Bomba electrosumergible BMS416-1" src="/t26-BOMBAELECTROSUMERGIBLEBMS416-1.png" />
              <GridComponent name="Bomba electrosumergible BMS409AL-38E-5" src="/t27-BOMBAELECTROSUMERGIBLEBMS409AL-38E-5.png" />
              <GridComponent name="Reparación de Electrobombas en general" src="/t28-BOMBADEEJE.png" />
              <GridComponent name="electrobomba Nueva" src="/t20-electrobombanueva.png" />
              <GridComponent name="electrobomba Nueva" src="/t21-electrobomba2.png" />
              <GridComponent name="electrobomba Nueva" src="/t21-electrobomba3.png" />
              <GridComponent name="electrobomba Nueva" src="/t23-electrobomba4.png" />
              <GridComponent name="Bomba centrífuga Reacondicionada" src="/t30-BOMBA CENTRIFUGA REACONDICIONADA.png" />
              <GridComponent name="Bomba Centrífuga" src="/t29-bombacentrifuga.png" />
              <GridComponent name="Bobinado de motoresa" src="/t32-BOBINADO DE MOTORES.png" />
              <GridComponent name="Control Calidad Durante el proceso" src="/t24-controlcalidadduranteelproceso.png" />
              <GridComponent name="Control de Calidad Roscas" src="/t25-controlcalidadroscas.png" />
              <GridComponent name="Fabricación BobCat" src="/t14-fabricacionbobcat.png" />
              <GridComponent name="Fabricación de piezas" src="/t38-fabricacionpiezas.png" />
              <GridComponent name="Fabricación de piezas" src="/t39-fabricacionpiezas.png" />
              <GridComponent name="Reparación de roscas" src="/r1-reparacionderoscas.png" />
              <GridComponent name="Reparación de roscas en PM" src="/r2-reparacionderoscasenpm.png" />
              <GridComponent name="Reparación de roscas" src="/r3-reparacionderoscasenpm2.png" />
              <GridComponent name="Reparación de Motores" src="/r4-reparaciondemotores.png" />
              

            </div>

            <h2 className="text-3xl text-center pb-4 m-12 ">Algunas de nuestras máquinas</h2>
            <div className="mx-6 md:mx-32 mt-8 text-center fadeIn element grid grid-cols-1 md:grid-cols-3 gap-4">
             
              <GridComponent name="maq 01" src="/maquina1.png" />
              <GridComponent name="maq 02" src="/maquina2.png" />
              <GridComponent name="maq 03" src="/maquina3.png" />
     
              </div>
          </section>
        </div>
      </Layout>
    </div>
  );
};

export default Trabajos;
