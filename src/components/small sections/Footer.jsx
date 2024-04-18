import { BsInstagram } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import logo from "../../../public/assets/logo.png";
export default function Footer() {
  const footerLinks = [
    {
      title: "Home",
      link: "home",
    },
    {
      title: "Shop",
      link: "products",
    },
    {
      title: "Offers",
      link: "offers",
    },
    {
      title: "Contacts",
      link: "footer",
    },
  ];

  function smoothScroll(event, sectionId) {
    event.preventDefault();
    window.scrollTo({
      top: document.getElementById(sectionId).offsetTop,
      behavior: "smooth",
    });
  }

  const bgImage = {
    backgroundImage:
      "url(https://img.freepik.com/free-photo/car-empty-road-dark-atmosphere_23-2150914416.jpg?t=st=1713453323~exp=1713456923~hmac=997a0b2a67479be2ffa783283b05900dec0ff64ad8a2b0f8a203ee22b54f36d5&w=826)",
    backgroundPosition: "bottom",
    backgroundSize: "cover",
  };
  return (
    <div id="footer" className="bg-black/90">
      <div
        style={bgImage}
        className="text-white min-h-[450px] grid md:grid-cols-4 gap-6 lg:gap-12 pb-24 pt-10 px-7 lg:px-10"
      >
        <div className="md:col-span-2">
          <a
            href="#home"
            onClick={(e) => smoothScroll(e, "home")}
            className="flex items-center mb-3"
          >
            <img src={logo} alt="logo" className="w-14 h-14" />
            <h2 className="text-4xl font-semibold text-primary ml-2 tracking-wide">
              Bike Gearz
            </h2>
          </a>
          <p className="text-gray-400 leading-7">
            Find your desired top-quality accessories within the best reasonable
            price range.
          </p>
        </div>
        <div>
          <h1 className="text-2xl text-white my-4">Footer Link</h1>
          {footerLinks.map((link, index) => (
            <a
              key={index}
              href={link.link}
              className="block text-gray-400 font-medium hover:text-white duration-200 text-lg leading-10"
              onClick={(e) => smoothScroll(e, link.link)}
            >
              {link.title}
            </a>
          ))}
        </div>
        <div>
          <h1 className="text-2xl text-white my-4">Address</h1>
          <p className="text-gray-400 text-lg mb-4">Dhaka, Bangladesh</p>
          <div className="flex gap-6 text-gray-400 text-xl">
            <FaFacebookSquare className="text-gray-400 hover:text-white duration-200" />
            <BsInstagram className="text-gray-400 hover:text-white duration-200" />
            <FaLinkedin className="text-gray-400 hover:text-white duration-200" />
          </div>
        </div>
      </div>
    </div>
  );
}
