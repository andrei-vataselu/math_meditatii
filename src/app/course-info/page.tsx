"use client";

import Design from '../components/Design';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaWhatsapp } from 'react-icons/fa';

const whatsappNumber = "40731979588";
const whatsappUrl = `https://wa.me/${whatsappNumber}`;

export default function CourseInfoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#5f0032] to-slate-900 overflow-hidden isolate">
      <Design />
      <Header />
      <main className="relative flex flex-col items-center justify-center min-h-[70vh] px-2 sm:px-6 py-8 sm:py-16 text-center">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Pregătire Bacalaureat Matematică clasa a XII-a",
            "description": "Pregătire intensivă online pentru Bacalaureat la Matematică, explicată clar, cu suport PDF, grupe pe profil și simulări. Profesor: Denisa Nita.",
            "provider": {
              "@type": "Organization",
              "name": "DSMath Center",
              "url": "https://matebac.com"
            },
            "educationalLevel": "High School",
            "instructor": {
              "@type": "Person",
              "name": "Denisa Nita"
            },
            "audience": {
              "@type": "EducationalAudience",
              "educationalRole": "student",
              "audienceType": "Clasa a XII-a, Bacalaureat"
            },
            "startDate": "2025-09-15",
            "courseMode": "Online",
            "url": "https://matebac.com/course-info"
          }) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Cui se adresează acest curs?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Elevilor de clasa a XII-a care se pregătesc pentru Bacalaureat la Matematică, pe toate profilurile: Mate-Info, Științe, Tehnologic, Pedagogic."
                }
              },
              {
                "@type": "Question",
                "name": "Cum se desfășoară cursul?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Cursul durează 26 de săptămâni, cu 4 ședințe pe lună (o ședință pe săptămână), toate lecțiile sunt înregistrate și primești suport PDF după fiecare ședință."
                }
              },
              {
                "@type": "Question",
                "name": "Ce beneficii oferă cursul?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Explicații clare, metode logice, suport continuu, grupe pe profil, simulări și recapitulări pentru Bac."
                }
              },
              {
                "@type": "Question",
                "name": "Cât costă și cum mă înscriu?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Prețul este lunar și include 4 ședințe. Plata se face lunar, înscrierile sunt deschise până la începerea cursului. Contact prin WhatsApp: +40731979588."
                }
              }
            ]
          }) }}
        />
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Despre curs</h1>
        <div className="w-full max-w-3xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-10 border border-white/20 shadow-2xl flex flex-col items-center gap-6">
          <h2 className="text-2xl font-bold text-white mb-2"> Ești gata să faci pasul decisiv spre succesul la Bacalaureat?</h2>
          <p className="text-lg text-gray-300 mb-4">
            Pregătirea intensivă pentru examenul de Matematică începe pe <span className="font-bold text-[#FEBFD2]">15 septembrie</span>, într-un format <span className="font-bold">100% ONLINE</span>, care îți oferă libertatea de a învăța eficient, din confortul propriei case. Alătură-te unei experiențe educaționale interactive, adaptate nevoilor tale, și transformă-ți temerile în încredere pentru ziua examenului!
          </p>

          <div className="text-left w-full">
            <h2 className="text-2xl font-bold text-white mb-2">Pentru cine este acest curs?</h2>
            <p className="text-gray-200 mb-2">Cursul este dedicat exclusiv elevilor de clasa a XII-a, care se pregătesc pentru examenul de Bacalaureat la Matematică. Vom forma grupe separate, adaptate fiecărui profil:</p>
            <ul className="list-disc list-inside text-gray-200 mb-4">
              <li><span className="font-semibold">Mate-Info (M1)</span></li>
              <li><span className="font-semibold">Științe ale Naturii (M2)</span></li>
              <li><span className="font-semibold">Tehnologic</span></li>
              <li><span className="font-semibold">Pedagogic</span></li>
            </ul>
          </div>

          <div className="text-left w-full">
            <h2 className="text-2xl font-bold text-white mb-2">Cum se desfășoară?</h2>
            <ul className="list-disc list-inside text-gray-200 mb-4">
              <li>Cursul durează <span className="font-semibold">26 de săptămâni</span>, acoperind toată materia necesară pentru Bac.</li>
              <li>Vei participa la <span className="font-semibold">4 ședințe pe lună</span> (o ședință pe săptămână).</li>
              <li>Toate lecțiile sunt <span className="font-semibold">înregistrate</span>, astfel încât, dacă nu poți participa live, poți recupera oricând.</li>
              <li>Vei primi după fiecare ședință un suport de curs complet, în format PDF, pe care îl poți păstra și consulta oricând.</li>
            </ul>
          </div>

          <div className="text-left w-full">
            <h2 className="text-2xl font-bold text-white mb-2">Ce vei face în curs?</h2>
            <ul className="list-disc list-inside text-gray-200 mb-4">
              <li>Parcurgerea temeinică a materiei pentru Bac, adaptată profilului tău.</li>
              <li>Exerciții și teste practice, bazate pe subiecte oficiale.</li>
              <li>Simulări pentru a-ți evalua nivelul și a-ți îmbunătăți performanța.</li>
              <li>Recapitulări și consolidări înainte de examen.</li>
            </ul>
          </div>

          <div className="text-left w-full">
            <h2 className="text-2xl font-bold text-white mb-2">De ce să alegi acest curs?</h2>
            <ul className="list-disc list-inside text-gray-200 mb-4">
              <li>Experiență cu peste <span className="font-semibold">50 de elevi</span> pregătiți cu succes pentru Bac.</li>
              <li>Grupe separate pentru a aborda cerințele specifice fiecărui profil.</li>
              <li>Explicații clare, metode logice și fără stres.</li>
              <li>Suport continuu și înregistrări disponibile.</li>
            </ul>
          </div>

          <div className="text-left w-full">
            <h2 className="text-2xl font-bold text-white mb-2">Cost și înscriere</h2>
            <ul className="list-disc list-inside text-gray-200 mb-4">
              <li>Prețul abonamentului este lunar și include 4 ședințe pe lună.</li>
              <li>Plata se face lunar, iar înscrierile sunt deschise până la începerea cursului.</li>
            </ul>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#FEBFD2] to-[#FAD4E4] text-gray-800 rounded-full text-xl font-semibold hover:from-[#fef6f8] hover:to-[#fce9f0] transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <FaWhatsapp size={24} /> Programează o ședință gratuită
          </a>


        </div>
      </main>
      <Footer />
    </div>
  );
}
