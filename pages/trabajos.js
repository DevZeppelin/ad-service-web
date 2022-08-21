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
      <Layout classServicios={"bg-dgreen"}>
        <div>
          <PageTitle text="Nuestros Trabajos" />

          <section className="grid grid-cols-1 md:grid-cols-3 mb-8">
            <h2 className="text-3xl text-center pb-4 m-12 ">Nuestros trabajos</h2>
            <div className="mx-12 md:mx-32 mt-8 text-center fadeIn element">
             
              <GridComponent name="Hola" src="/0001.png" />
              <GridComponent name="Hola" src="/0001.png" />
              <GridComponent name="Hola" src="/0001.png" />
              <GridComponent name="Hola" src="/0001.png" />
              <GridComponent name="Hola" src="/0001.png" />
              <GridComponent name="Hola" src="/0001.png" />
              <GridComponent name="Hola" src="/0001.png" />
              <GridComponent name="Hola" src="/0001.png" />
              <GridComponent name="Hola" src="/0001.png" />
              <GridComponent name="Hola" src="/0001.png" />
              <GridComponent name="Hola" src="/0001.png" />
              <GridComponent name="Hola" src="/0001.png" />
              
            </div>
          </section>
        </div>
      </Layout>
    </div>
  );
};

export default Trabajos;
