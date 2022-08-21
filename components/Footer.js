import MainBarButton from "./MainBarButton";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import Link from "next/dist/client/link";

const Footer = () => {
  return (
    <div className="bg-darkGray text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-6 space-y-8">
        <div className="flex justify-center my-auto">
          <div className="block">
            <Link href="/">
              <a href="">
                <img
                  src="/logo.png"
                  alt="building icon logo Ad Service agua y petróleo"
                  height="200"
                  width="200"
                  className="mx-auto"
                />
                <p className="text-lgreen text-xl mt-4 font-bold text-center">
                  Agua y petróleo
                </p>
              </a>
            </Link>
          </div>
        </div>

        <div className="text-lg">
          <h2 className="font-extrabold">¡Contactanos hoy!</h2>
          
            <MainBarButton
              logo={
                <FiPhoneCall className="text-lgreen text-2xl flex my-auto m-2" />
              }
              text="Llamadas"
              description="2634-739363"
              classType=""
            />
         
          <a
            href="https://api.whatsapp.com/send?phone=5492615990759"
            target="_blank"
            rel="noopener"
          >
            <MainBarButton
              logo={
                <FaWhatsapp className="text-lgreen text-2xl flex my-auto m-2" />
              }
              text="Whatsapp Chat"
              description="+5492615990759"
              classType=""
            />
          </a>
          <a href="mailto:info@adservice.com.ar" target="_blank" rel="noopener">
            <MainBarButton
              logo={
                <FiMail className="text-lgreen text-2xl flex my-auto m-2" />
              }
              text="Correo electrónico"
              description="info@adservice.com.ar"
              classType=""
            />
          </a>
        </div>
      </div>
      <div className="p-4 text-sm bg-black">
        Make with &#128153; in Mendoza, Argentina, by{" "}
        <a href="https://devzeppelin.ar" target="_blank" rel="noopener">
          DevZeppelin
        </a>
        . All rights reserved. &copy; &nbsp; {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default Footer;
