"use client";
import Design from "../components/Design";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PhotoCarousel from "../components/PhotoCarousel";
import { FaWhatsapp } from "react-icons/fa";
import GoldOfferBanner from "../components/GoldOfferBanner";

export default function ResurseGratuite() {
  // Photos from culegeri directories
  const photosMateInfo = [
    "/culegeri/culegere-mate-info/7bc1bf22-d478-43bf-a171-af89e32280d2.jpg",
    "/culegeri/culegere-mate-info/7b91b048-191e-4b6a-9a71-d36bb2a26f8c.jpg",
    "/culegeri/culegere-mate-info/be2e68ad-35e9-4648-b2a6-c5157b1ba125.jpg",
    "/culegeri/culegere-mate-info/48d511aa-0e89-4317-b33b-2519c4e566c6.jpg",
    "/culegeri/culegere-mate-info/02baf0c7-ccc6-43a3-ad1e-203108819596.jpg",
    "/culegeri/culegere-mate-info/e02a6e4e-7312-4fd2-9e73-f413c3e4887a.jpg",
  ];

  const photosStiunte = [
    "/culegeri/culegere-stiintele-naturii/culegere_stiinte_1.jpeg",
    "/culegeri/culegere-stiintele-naturii/culegere_stiinte_2.jpeg",
    "/culegeri/culegere-stiintele-naturii/culegere_stiinte_3.jpeg",
    "/culegeri/culegere-stiintele-naturii/culegere_stiinte_4.jpeg",
    "/culegeri/culegere-stiintele-naturii/culegere_stiinte_5.jpeg",
    "/culegeri/culegere-stiintele-naturii/culegere_stiinte_6.jpeg",
  ];

  const photosTehnologic = [
    "/culegeri/culegere-tehnologic/culegere_tehnologic_1.jpeg",
    "/culegeri/culegere-tehnologic/culegere_tehnologic_2.jpeg",
    "/culegeri/culegere-tehnologic/culegere_tehnologic_3.jpeg",
    "/culegeri/culegere-tehnologic/culegere_tehnologic_4.jpeg",
    "/culegeri/culegere-tehnologic/culegere_tehnologic_5.jpeg",
    "/culegeri/culegere-tehnologic/culegere_tehnologic_6.jpeg",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#5f0032] to-slate-900 overflow-hidden isolate">
      <Design />
      <Header />
      <main className="relative flex flex-col items-center justify-center min-h-[70vh] px-2 sm:px-6 py-8 sm:py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12">
          Culegeri pentru Bacalaureat
        </h1>

        {/* Gold offer banner with sparkles */}
        <GoldOfferBanner />

        {/* Three boxes grid - responsive */}
        <div className="w-full max-w-full mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-8">
          {/* Box 1: Photo Carousel */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 sm:p-8 border border-white/20 shadow-2xl flex flex-col items-center gap-6">
            <h2 className="text-2xl font-semibold text-white mb-2">
              Culegere - Matematică-Informatică
            </h2>
            <p className="text-gray-200 mb-4">
              Parcurge probleme și exerciții din culegerea de Mate-Info
            </p>
            <PhotoCarousel photos={photosMateInfo} />

            {/* Comanda acum button */}
            <div className="mt-6">
              <a
                href="https://wa.me/40731979588?text=Bună! Aș dori să achiziționez culegerea pentru profilul Matematică-Informatică."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FEBFD2] to-[#FAD4E4] text-gray-800 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:from-[#fef6f8] hover:to-[#fce9f0] transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <FaWhatsapp size={24} />
                Comanda acum
              </a>
            </div>
          </div>

          {/* Box 2: Sciences Textbook */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 sm:p-8 border border-white/20 shadow-2xl flex flex-col items-center gap-6">
            <h2 className="text-2xl font-semibold text-white mb-2">
              Culegere - Științe ale Naturii
            </h2>
            <p className="text-gray-200 mb-4">
              Parcurge probleme și exerciții din culegerea de Științe
            </p>
            <PhotoCarousel photos={photosStiunte} />

            {/* Comanda acum button */}
            <div className="mt-6">
              <a
                href="https://wa.me/40731979588?text=Bună! Aș dori să achiziționez culegerea pentru profilul de Științe ale Naturii."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FEBFD2] to-[#FAD4E4] text-gray-800 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:from-[#fef6f8] hover:to-[#fce9f0] transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <FaWhatsapp size={24} />
                Comanda acum
              </a>
            </div>
          </div>

          {/* Box 3: Technological Textbook */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 sm:p-8 border border-white/20 shadow-2xl flex flex-col items-center gap-6">
            <h2 className="text-2xl font-semibold text-white mb-2">
              Culegere - Tehnologic
            </h2>
            <p className="text-gray-200 mb-4">
              Parcurge probleme și exerciții din culegerea de Tehnologic
            </p>
            <PhotoCarousel photos={photosTehnologic} />

            {/* Comanda acum button */}
            <div className="mt-6">
              <a
                href="https://wa.me/40731979588?text=Bună! Aș dori să achiziționez culegerea pentru profilul Tehnologic."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FEBFD2] to-[#FAD4E4] text-gray-800 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:from-[#fef6f8] hover:to-[#fce9f0] transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <FaWhatsapp size={24} />
                Comanda acum
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
