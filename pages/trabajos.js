import Head from "next/head";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
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
              <GridComponent name="Bobinado de motoresa" src="/t32-BOBINADO DE MOTORES.png" />
              <GridComponent name="Control Calidad Durante el proceso" src="/t24-controlcalidadduranteelproceso.png" />
              <GridComponent name="Control de Calidad Roscas" src="/t25-controlcalidadroscas.png" />
              <GridComponent name="Fabricación BobCat" src="/t14-fabricacionbobcat.png" />
              <GridComponent name="Fabricación de piezas" src="/t38-fabricacionpiezas.png" />
              <GridComponent name="Fabricación de piezas" src="/t39-fabricacionpiezas.png" />
              <GridComponent name="Reparación de roscas" src="/r1-reparacionderoscas.png" />
              <GridComponent name="Reparación de roscas en PM" src="/r2-reparacionderoscasenpm.png" />
              <GridComponent name="Reparación de roscas" src="/r3-reparacionderoscasenpm2.png" />
              

            </div>
            
          </section>
        </div>
      </Layout>
    </div>
  );
};

export default Trabajos;
