"use client";
import Design from "../components/Design";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PhotoCarousel from "../components/PhotoCarousel";
import { FaWhatsapp } from "react-icons/fa";

export default function ResurseGratuite() {
  // Photos from poze_pdf directory
  const photos = [
    "/poze_pdf/teorie_1.jpg",
    "/poze_pdf/teorie_2.jpg",
    "/poze_pdf/teorie_3.jpg",
    "/poze_pdf/teorie_4.jpg",
    "/poze_pdf/teorie_5.jpg",
    "/poze_pdf/7bc1bf22-d478-43bf-a171-af89e32280d2.jpg",
    "/poze_pdf/7b91b048-191e-4b6a-9a71-d36bb2a26f8c.jpg",
    "/poze_pdf/be2e68ad-35e9-4648-b2a6-c5157b1ba125.jpg",
    "/poze_pdf/48d511aa-0e89-4317-b33b-2519c4e566c6.jpg",
    "/poze_pdf/02baf0c7-ccc6-43a3-ad1e-203108819596.jpg",
    "/poze_pdf/e02a6e4e-7312-4fd2-9e73-f413c3e4887a.jpg",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#5f0032] to-slate-900 overflow-hidden isolate">
      <Design />
      <Header />
      <main className="relative flex flex-col items-center justify-center min-h-[70vh] px-2 sm:px-6 py-8 sm:py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Resurse gratuite
        </h1>

        {/* Photo Carousel Section */}
        <div className="w-full max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-4 sm:p-8 border border-white/20 shadow-2xl flex flex-col items-center gap-6 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-2">
            Teorie și exerciții
          </h2>
          <p className="text-gray-200 mb-4">
            Parcurge noțiuni teoretice și exerciții propuse din culegerea mea de
            matematică
          </p>
          <PhotoCarousel photos={photos} />

          {/* Comanda acum button */}
          <div className="mt-6">
            <a
              href="https://wa.me/40731979588?text=Bună! Aș dori să achiziționez culegerea de matematică."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FEBFD2] to-[#FAD4E4] text-gray-800 px-8 py-4 rounded-full text-lg font-semibold hover:from-[#fef6f8] hover:to-[#fce9f0] transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <FaWhatsapp size={24} />
              Comanda acum
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
