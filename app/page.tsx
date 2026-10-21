import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <main className="min-h-screen relative flex items-center justify-center p-4 overflow-hidden">

      {/* Imagen de fondo estándar */}
      <div className="absolute inset-0 -z-10 bg-black">
        <img
          src="/fondo.jpg"
          alt="Cabañas Rucahue Fondo"
          className="w-full h-full object-cover brightness-[0.4]"
        />
      </div>

      {/* Tarjeta principal con efecto Glassmorphism (vidrio esmerilado) */}
      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 sm:p-12 rounded-[2rem] shadow-2xl max-w-lg w-full text-center transform transition-all hover:scale-[1.02] duration-500">

        {/* Contenedor del Logo */}
        <div className="w-36 h-36 sm:w-40 sm:h-40 mx-auto mb-6 relative rounded-full overflow-hidden border-4 border-[#C19A6B] shadow-lg flex items-center justify-center bg-white">
          <img
            src="/logo.png"
            alt="Logo Cabañas Rucahue"
            className="w-full h-full object-cover scale-[1.5]"
          />
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">
          Cabañas Rucahue
        </h1>

        <p className="text-white/90 text-sm sm:text-base mb-8 leading-relaxed">
          Estamos preparando una nueva experiencia web. Seguimos recibiendo reservas y consultas con normalidad a través de nuestros canales oficiales.
        </p>

        {/* Lista de botones de contacto animados */}
        <div className="flex flex-col gap-4">

          <a href="https://wa.me/56956502571" target="_blank" rel="noopener noreferrer"
            className="group relative flex items-center justify-center gap-3 w-full bg-[#25D366] text-white py-4 px-6 rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(37,211,102,0.3)]">
            <FaWhatsapp className="text-2xl group-hover:scale-110 transition-transform duration-300" />
            <span>Contactar por WhatsApp</span>
          </a>

          <a href="https://www.instagram.com/cabanas.rucahue/?hl=es" target="_blank" rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 w-full bg-white/10 hover:bg-white/20 border border-white/30 text-white py-3 px-6 rounded-full font-medium transition-all duration-300 hover:-translate-y-1">
            <FaInstagram className="text-xl text-[#E1306C] group-hover:scale-110 transition-transform duration-300" />
            <span>@cabanas.rucahue</span>
          </a>

          <a href="https://www.facebook.com/cabanas.rucahue/?locale=es_LA" target="_blank" rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 w-full bg-white/10 hover:bg-white/20 border border-white/30 text-white py-3 px-6 rounded-full font-medium transition-all duration-300 hover:-translate-y-1">
            <FaFacebook className="text-xl text-[#1877F2] group-hover:scale-110 transition-transform duration-300" />
            <span>/cabanas.rucahue</span>
          </a>

          <a href="mailto:cabanas.rucahue.hornopiren@gmail.com"
            className="group flex items-center justify-center gap-3 w-full bg-white/10 hover:bg-white/20 border border-white/30 text-white py-3 px-6 rounded-full font-medium transition-all duration-300 hover:-translate-y-1">
            <MdEmail className="text-xl text-[#C19A6B] group-hover:scale-110 transition-transform duration-300" />
            <span className="truncate">cabanas.rucahue.hornopiren@gmail.com</span>
          </a>

        </div>

        <div className="mt-8 pt-6 border-t border-white/20 text-white/70 text-sm flex items-center justify-center gap-2">
          <span className="font-bold">Los Colonos Sitio 14, Hornopirén Región de Los Lagos</span>
        </div>
        <div className="mt-8 pt-6 border-t border-white/20 text-white/70 text-sm flex items-center justify-center gap-2">
          Teléfono <a href="tel:+56956502571" className="font-bold">+56 9 56502571</a><br />
        </div>
      </div>
    </main>
  );
}