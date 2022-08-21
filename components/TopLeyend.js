import { FiMail, FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";


const TopLeyend = () => {
  return (
    <div className="flex justify-center md:justify-between py-2 text-darkGray md:bg-lightGray">
      <div className="hidden md:flex px-12">
        <p className="text-sm font-extrabold tracking-widest my-auto uppercase">
        Mariano Moreno 50. Rodeo del Medio. Maipú. Mendoza.
        </p>
      </div>
      <div>
        <div className="text-xl space-x-3 pr-6">
              
          
        <a
                  href="https://api.whatsapp.com/send?phone=5492615990759"
                  target="_blank"
                  rel="noreferrer"
                >
            <button aria-label="send me a mail" alt="gmail-logo">
              <FiPhoneCall  className="hover:text-dgreen" />
            </button>
          </a>
          <a
                  href="https://api.whatsapp.com/send?phone=5492615990759"
                  target="_blank"
                  rel="noreferrer"
                >
            <button aria-label="send me a mail" alt="gmail-logo">
              <FaWhatsapp  className="hover:text-dgreen" />
            </button>
          </a>
          <a
            href="mailto:info@adservice.com.ar"
            target="_blank"
            rel="noopener"
          >
            <button aria-label="send me a mail" alt="gmail-logo">
              <FiMail className="hover:text-dgreen" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopLeyend;
