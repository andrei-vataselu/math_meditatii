// components/Footer.tsx
import Image from "next/image";
import Link from "next/link";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const { name, address, phoneDisplay, phoneE164, email, social } = siteConfig;

  return (
    <footer className="relative py-12 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        <div className="rounded-2xl border border-white/15 bg-white/5 px-6 py-6 text-sm sm:text-base text-gray-200">
          <p className="text-white font-semibold mb-2">{name}</p>
          <p className="leading-relaxed">
            {address.streetAddress}, {address.postalCode} {address.addressLocality},{" "}
            {address.addressRegion}, România
          </p>
          <p className="mt-2">
            <a
              href={`tel:${phoneE164}`}
              className="text-[#FEBFD2] hover:text-white underline underline-offset-2"
            >
              Tel. {phoneDisplay}
            </a>
            {" · "}
            <a
              href={`mailto:${email}`}
              className="text-[#FEBFD2] hover:text-white underline underline-offset-2"
            >
              {email}
            </a>
          </p>
        </div>

        {/* Legal / Policy Links */}
        <nav
          aria-label="Legal"
          className="flex flex-col sm:flex-row justify-center gap-6 text-sm text-gray-100 items-center"
        >
          <Link
            href="/termeni-si-conditii"
            className="hover:text-white transition-colors"
          >
            Termeni și condiții
          </Link>
          <Link href="/privacy" className="hover:text-white transition-colors">
            Politica de confidențialitate
          </Link>
          <Link
            href="/politica-cookies"
            className="hover:text-white transition-colors"
          >
            Politica de utilizare cookie-uri
          </Link>
          <Link href="/sitemap" className="hover:text-white transition-colors">
            Site Map
          </Link>
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
              loading="lazy"
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
              alt="Soluționare Alternativă a litigiilor (SAL) - ANPC"
              width={500}
              height={300}
              loading="lazy"
              className="h-11 w-auto"
            />
          </a>
        </div>

        {/* Social Media Icons */}
        <nav aria-label="Social media" className="flex flex-wrap justify-center gap-6">
          <a
            href={social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center"
            aria-label="Facebook"
          >
            <FaFacebook size={32} color="#1877F2" />
          </a>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={32} color="#0A66C2" />
          </a>
          <a
            href={social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center"
            aria-label="YouTube"
          >
            <FaYoutube size={32} color="#FF0000" />
          </a>
          <a
            href={social.x}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center"
            aria-label="X (Twitter)"
          >
            <FaXTwitter size={28} color="#e7e9ea" />
          </a>
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
            className="w-8 h-8 flex items-center justify-center"
            aria-label="Instagram"
          >
            <FaInstagram size={32} color="#C13584" />
          </a>
          <a
            href="https://wa.me/40731979588"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={32} color="#25D366" />
          </a>
        </nav>

        {/* Copyright */}
        <p className="text-xs text-gray-100">
          &copy; {name}. Toate drepturile rezervate.
        </p>
      </div>
    </footer>
  );
}
