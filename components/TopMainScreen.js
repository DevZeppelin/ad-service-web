import Link from "next/dist/client/link";

import MainBarButton from "./MainBarButton";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail, FiPhoneCall } from "react-icons/fi";

const TopMainScreen = () => {
  return (
    <div className="flex px-2 md:px-12 text-black justify-center md:justify-between py-2">
      <div className="flex-col">
        <Link href="/">
          <a href="">
            <img
              src="/logo.png"
              alt="building icon logo Ad Service petróleo y agua"
              height="200"
              width="200"
              className="pt-2"
            />
          </a>
        </Link>
      </div>

      <div className="hidden md:flex justify-between space-x-2 text-center my-auto p-2">
        <a
          href="https://api.whatsapp.com/send?phone=5492634739363"
          target="_blank"
          rel="noopener"
        >
          <MainBarButton
            logo={
              <FiPhoneCall className="text-dgreen text-4xl flex my-auto m-2" />
            }
            text="Llamadas"
            description="2634-739363"
            classType="text-dgreen font-bold"
          />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5492615990759"
          target="_blank"
          rel="noopener"
        >
          <MainBarButton
            logo={
              <FaWhatsapp className="text-dgreen text-4xl flex my-auto m-2" />
            }
            text="Whatsapp Chat"
            description="+5492615990759"
            classType="text-dgreen font-bold"
          />
        </a>
        <a href="mailto:info@adservice.com.ar" target="_blank" rel="noopener">
          <MainBarButton
            logo={<FiMail className="text-dgreen text-4xl flex my-auto m-2" />}
            text="Correo electrónico"
            description="info@adservice.com.ar"
            classType="text-dgreen font-bold"
          />
        </a>

        <Link href="/contacto">
          <div className="rounded-lg p-4 text-xl my-auto btn">Te llamamos</div>
        </Link>
      </div>
    </div>
  );
};

export default TopMainScreen;
