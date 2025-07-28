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
          <h2 className="text-2xl font-bold text-white mb-2">Nita Denisa Stefania</h2>
          <p className="text-gray-200 text-base sm:text-lg mb-4">
            Sunt Denisa, studentă în anul II la Universitatea Națională de Știință și Tehnologie Politehnica București, în cadrul Facultății de Științe, Educație Fizică și Informatică – Departamentul Matematică-Informatică.
            De peste doi ani ofer meditații la Matematică și am ajutat aproximativ 50 de elevi să înțeleagă materia cu încredere și claritate. Majoritatea elevilor mei au obținut note între 7 și 10 la examenul de Bacalaureat.
            Cred cu tărie că matematica poate fi învățată de oricine, atunci când explicațiile sunt adaptate, iar susținerea este constantă.

          </p>
          <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center">
            <div className="flex-1 bg-white/20 rounded-xl p-4 text-white">
              <span className="block text-lg font-semibold mb-1">Educație</span>
              <span className="block text-sm">U.N.S.T.P.B, în cadrul Facultății de Științe, Educație Fizică și Informatică – Departamentul Matematică-Informatică. </span>
            </div>
            <div className="flex-1 bg-white/20 rounded-xl p-4 text-white">
              <span className="block text-lg font-semibold mb-1">Experiență</span>
              <span className="block text-sm">50+ elevi pregătiți alături de mine, cu rezultate excelente la examene</span>
            </div>
          </div>
          <div className="w-full bg-white/5 rounded-xl p-4 mt-4 text-white text-left">
            <span className="block text-lg font-semibold mb-2">Despre mine:</span>
            <ul className="list-disc list-inside text-gray-200 text-base">
              <li>Sunt o persoană răbdătoare, calmă și prietenoasă – creez mereu un spațiu sigur în care elevii se simt încurajați să întrebe și să greșească.</li>
              <li>Îmi place să explic matematica pas cu pas, cu exemple clare și accesibile.</li>
              <li>Cred că încrederea vine odată cu înțelegerea, nu cu memorarea.</li>
              <li>Îmi place să cunosc fiecare elev și să adaptez explicațiile în funcție de stilul lui de învățare.</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 