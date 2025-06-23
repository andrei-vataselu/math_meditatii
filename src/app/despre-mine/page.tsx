'use client'
import Design from '../components/Design';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function DespreMine() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#5f0032] to-slate-900 overflow-hidden isolate">
      <Design />
      <Header />
      <main className="relative flex flex-col items-center justify-center min-h-[70vh] px-2 sm:px-6 py-8 sm:py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Despre mine</h1>
        <div className="w-full max-w-2xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-10 border border-white/20 shadow-2xl flex flex-col items-center gap-6">
          <div className="w-40 h-40 sm:w-52 sm:h-52 rounded-full overflow-hidden border-4 border-[#FEBFD2] shadow-lg mb-4">
            <Image src="/denisa/denisa.jpg" alt="Denisa" width={208} height={208} className="object-cover w-full h-full" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Denisa stanciu</h2>
          <p className="text-gray-200 text-base sm:text-lg mb-4">
            Sunt Denisa, profesor de matematică pasionată de educație și de a face matematica accesibilă tuturor. Am peste 8 ani de experiență în lucrul cu elevi de toate vârstele, de la clasele V–VIII până la liceu și Bacalaureat. Cred cu tărie că oricine poate învăța matematica dacă are parte de explicații potrivite și de susținere constantă.
          </p>
          <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center">
            <div className="flex-1 bg-white/20 rounded-xl p-4 text-white">
              <span className="block text-lg font-semibold mb-1">Educație</span>
              <span className="block text-sm">Facultatea de Matematică, Universitatea București</span>
            </div>
            <div className="flex-1 bg-white/20 rounded-xl p-4 text-white">
              <span className="block text-lg font-semibold mb-1">Experiență</span>
              <span className="block text-sm">8+ ani meditații, rezultate excelente la examene</span>
            </div>
          </div>
          <div className="w-full bg-white/5 rounded-xl p-4 mt-4 text-white text-left">
            <span className="block text-lg font-semibold mb-2">Fun facts:</span>
            <ul className="list-disc list-inside text-gray-200 text-base">
              <li>Îmi place să explic matematica folosind exemple din viața reală.</li>
              <li>Am ajutat peste 150 de elevi să își depășească teama de matematică.</li>
              <li>Cred că răbdarea și empatia sunt cheia succesului la orice materie.</li>
              <li>În timpul liber, ador să citesc și să rezolv puzzle-uri logice.</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 