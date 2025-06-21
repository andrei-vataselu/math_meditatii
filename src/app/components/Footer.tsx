// components/Footer.tsx
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="relative py-12 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        {/* Legal / Policy Links */}
        <nav aria-label="Legal" className="flex flex-col sm:flex-row justify-center gap-6 text-sm text-gray-100 items-center">
          <a href="/tos" className="hover:text-white transition-colors">Termeni și condiții</a>
          <a href="/privacy" className="hover:text-white transition-colors">Politica de confidențialitate</a>
          <a href="/politica-cookie" className="hover:text-white transition-colors">Politica de utilizare cookie-uri</a>
        </nav>

        {/* Authority Logos */}
        <div className="flex justify-center gap-8">
          <img src="/sol.png" alt="SOL" className="h-11 w-auto" />
          <img src="/sal.png" alt="SAL" className="h-11 w-auto" />
        </div>

        {/* Social Media Icons */}
        <nav aria-label="Social media" className="flex justify-center gap-6">
          <a
            href="https://www.tiktok.com/@dsmathcenter"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center"
            aria-label="TikTok"
          >
          <AiFillTikTok size={24} color="#25D366" />
          </a>
          <a
            href="https://www.instagram.com/dsmathcenter"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center "
            aria-label="Instagram"
          >
          <FaInstagram />
          </a>
          <a
            href="https://chat.whatsapp.com/CiyxENF40rcHOwp9On1yY3"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center"
            aria-label="Instagram"
          >
          <FaWhatsapp size={24} color="#25D366" />
          </a>
        </nav>

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} DSMath Center. Toate drepturile rezervate.
        </p>
      </div>
    </footer>
  );
}
