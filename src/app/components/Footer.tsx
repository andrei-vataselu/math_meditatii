// components/Footer.tsx
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative py-12 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        {/* Legal / Policy Links */}
        <nav aria-label="Legal" className="flex flex-col sm:flex-row justify-center gap-6 text-sm text-gray-100 items-center">
          <a href="/tos" className="hover:text-white transition-colors">Termeni și condiții</a>
          <a href="/privacy" className="hover:text-white transition-colors">Politica de confidențialitate</a>
          <a href="/politica-cookies" className="hover:text-white transition-colors">Politica de utilizare cookie-uri</a>
        </nav>

        {/* Authority Logos */}
        <div className="flex justify-center gap-8">
          <a
          href="https://reclamatiisal.anpc.ro/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
          aria-label="SAL"
          >
          <Image
          src="/sol.png"
          alt="Soluționarea online a litigiilor (SOL)"
          width={500}      
          height={300}     
          priority
          className="h-11 w-auto"      
          />
          </a>
          <a
          href="https://ec.europa.eu/consumers/odr/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
          aria-label="ANAF"
          >
          <Image
          src="/sal.png"
          alt="Soluționare Alternativă a Litigiilor (SAL) - ANPC"
          width={500}      
          height={300}     
          priority
          className="h-11 w-auto"      
          />
          </a>
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
          <AiFillTikTok size={32} color="#696969" />
          </a>
          <a
            href="https://www.instagram.com/dsmathcenter"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center "
            aria-label="Instagram"
          >
          <FaInstagram size={32} color="#C13584" />
          </a>
          <a
            href="https://chat.whatsapp.com/KXZcwE814NtLImYiBYkOBd"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center"
            aria-label="Instagram"
          >
          <FaWhatsapp size={32} color="#25D366" />
          </a>
        </nav>

        {/* Copyright */}
        <p className="text-xs text-gray-100">
          &copy; DS Math Center. Toate drepturile rezervate.
        </p>
      </div>
    </footer>
  );
}
