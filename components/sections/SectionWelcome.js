import React, { useEffect, useRef } from "react";
import Link from "next/dist/client/link";

const SectionWelcome = () => {
  let radio1 = useRef();
  let radio2 = useRef();
  let radio3 = useRef();
  let radio4 = useRef();

  useEffect(() => {
    let counter = 1;
    const arrayRadio = [radio1.current, radio2.current, radio3.current, radio4.current];
    arrayRadio[counter - 1].checked = true;

    setInterval(function () {
      arrayRadio[counter].checked = true;
      counter++;
      if (counter > 3) {
        counter = 0;
      }
    }, 5000);

    return () => { }
  }, []);

  return (
    <section>
      <div>
        <div className="flex relative overflow-hidden md:grid md:grid-cols-2 text-lg px-6 md:px-24 bg-lightGray background-overlay">
          <div className="first-block space-y-4 md:space-y-5 p-8 my-auto bg-white z-40 opacity-70 md:opacity-100 h-full">
            <h1 className="font-extrabold text-xl md:text-4xl">
              EXPERTOS EN PETRÓLEO
            </h1>
            <div className="h-1 w-56 bg-dgreen mx-auto"></div>
            <div className="text-base space-y-8 py-4">
             
              <p>Somos una empresa con personal calificado con más de 15 años en el rubro del petróleo, fabricando herramientas para distintos sectores industriales.</p>

              <p>Nos caracterizamos por el trabajo en equipo y alto compromiso laboral.</p>

              <p>Poseemos una excelente vocación de servicio, esto nos hace estar disponibles a cualquier horario y en cualquier momento.</p>

            </div>
            <Link href="/contacto"><button className="btn">Contáctanos hoy</button></Link>
          </div>
          <div className="slider-body flex-wrap absolute bottom-0 left-0 h-full md:relative md:h-auto">
            <div className="slider">
              <div className="slides">
                {/* Radio buttons Start */}
                <input type="radio" name="radio-btn" id="radio1" ref={radio1} />
                <input type="radio" name="radio-btn" id="radio2" ref={radio2} />
                <input type="radio" name="radio-btn" id="radio3" ref={radio3} />
                <input type="radio" name="radio-btn" id="radio4" ref={radio4} />
                {/*Slides images Start*/}
                <div className="slide first">
                  <img src="01.webp" alt="" />
                </div>
                <div className="slide">
                  <img src="02.png" alt="" />
                </div>
                <div className="slide">
                  <img src="03.png" alt="" />
                </div>
                <div className="slide">
                  <img src="04.png" alt="" />
                </div>
                {/*Automatic Navigation Start*/}
                <div className="navigation-auto">
                  <div className="auto-btn-1"></div>
                  <div className="auto-btn-2"></div>
                  <div className="auto-btn-3"></div>
                  <div className="auto-btn-4"></div>
                </div>
                {/*Automatic Navigation End*/}
                {/*Manual Navigation Start*/}
                <div className="navigation-manual">
                  <label htmlFor="radio1" className="manual-btn" />
                  <label htmlFor="radio2" className="manual-btn" />
                  <label htmlFor="radio3" className="manual-btn" />
                  <label htmlFor="radio4" className="manual-btn" />
                </div>
                {/*Manual Navigation End*/}
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default SectionWelcome;