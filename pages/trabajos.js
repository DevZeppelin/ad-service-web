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

          <section className="mb-8">
            <h2 className="text-3xl text-center pb-4 m-12 ">Algunos de nuestros trabajos</h2>
            <div className="mx-6 md:mx-32 mt-8 text-center fadeIn element grid grid-cols-1 md:grid-cols-3 gap-4">
             
              <GridComponent name="Hola" src="/t1-aporteFresaPlana.png" />
              <GridComponent name="Hola" src="/t2-taparoscadoblesello.png" />
              <GridComponent name="Hola" src="/t7-reduccion.png" />
              <GridComponent name="Hola" src="/t8-pescadorserie150.png" />
              <GridComponent name="Hola" src="/t9-mecanizadodepieza.png" />
              <GridComponent name="Hola" src="/t10-fresaplana1.png" />
              <GridComponent name="Hola" src="/t11-fresaplana2.png" />
              <GridComponent name="Hola" src="/t12-fresaconestabilizador.png" />
              <GridComponent name="Hola" src="/t13-fabricacionpartesnuevas.png" />
              <GridComponent name="Hola" src="/t14-fabricacionbobcat.png" />
              <GridComponent name="Hola" src="/t15-equipobuster.png" />
              <GridComponent name="Hola" src="/t16-equipobuster2.png" />
              <GridComponent name="Hola" src="/t17-electrobombassumergibles.png" />
              <GridComponent name="Hola" src="/t18-electrobombassumergiblesnueva.png" />
              <GridComponent name="Hola" src="/t19-electrobombasumergible.png" />
              <GridComponent name="Hola" src="/t20-electrobombanueva.png" />
              <GridComponent name="Hola" src="/t21-electrobomba2.png" />
              <GridComponent name="Hola" src="/t21-electrobomba3.png" />
              <GridComponent name="Hola" src="/t23-electrobomba4.png" />
              <GridComponent name="Hola" src="/t24-controlcalidadduranteelproceso.png" />
              <GridComponent name="Hola" src="/t25-controlcalidadroscas.png" />
              <GridComponent name="Hola" src="/t26-BOMBAELECTROSUMERGIBLEBMS416-1.png" />
              <GridComponent name="Hola" src="/t27-BOMBAELECTROSUMERGIBLEBMS409AL-38E-5.png" />
              <GridComponent name="Hola" src="/t28-BOMBADEEJE.png" />
              <GridComponent name="Hola" src="/t29-bombacentrifuga.png" />
              <GridComponent name="Hola" src="/t30-BOMBA CENTRIFUGA REACONDICIONADA.png" />
              <GridComponent name="Hola" src="/t32-BOBINADO DE MOTORES.png" />
              <GridComponent name="Hola" src="/t33-APORTE FRESA PLANA.png" />
              <GridComponent name="Hola" src="/t35-APORTE EN FRESA GOTA Y PLANA.png" />
              <GridComponent name="Hola" src="/t36-APORTE DE FRESA PLANA 2.png" />
              <GridComponent name="Hola" src="/t37-equipobuster.png" />
              <GridComponent name="Hola" src="/t38-fabricacionpiezas.png" />
              <GridComponent name="Hola" src="/t39-fabricacionpiezas.png" />
              <GridComponent name="Hola" src="/r1-reparacionderoscas.png" />
              <GridComponent name="Hola" src="/r2-reparacionderoscasenpm.png" />
              <GridComponent name="Hola" src="/r3-reparacionderoscasenpm2.png" />
              <GridComponent name="Hola" src="/r4-reparaciondemotores.png" />
              

            </div>

            <h2 className="text-3xl text-center pb-4 m-12 ">Algunos de nuestras máquinas</h2>
            <div className="mx-6 md:mx-32 mt-8 text-center fadeIn element grid grid-cols-1 md:grid-cols-3 gap-4">
             
              <GridComponent name="Hola" src="/maquina1.png" />
              <GridComponent name="Hola" src="/maquina2.png" />
              <GridComponent name="Hola" src="/maquina3.png" />
     
              </div>
          </section>
        </div>
      </Layout>
    </div>
  );
};

export default Trabajos;
