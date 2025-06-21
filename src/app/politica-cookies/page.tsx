'use client';

import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Design from '../components/Design';

function CookiesContent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#5f0032] to-slate-900 overflow-hidden isolate">
      <Design />
      <Header />
      <div className="flex items-center justify-center min-h-[calc(100vh-100px)] px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-4xl"
        >
          <div className="text-center mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
            >
            Politica de Cookie-uri
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-400 mb-6"
            >
              Ultima actualizare: 13.09.2022
            </motion.p>
          </div>

          <motion.div 
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            transition={{ duration: 0.6}}
          >
            <div className="prose prose-invert prose-lg max-w-none">
              <h2 className="text-2xl font-semibold text-white mb-4">1. Introducere</h2>
              <p className="mb-6 text-gray-300 ml-5">
                Folosim cookie-uri pentru a vă ajuta să navigați cu eficiență și să utilizați anumite funcții. Veți găsi informații detaliate privind cookie-urile în continuare.
              </p>

              <h2 className="text-2xl font-semibold text-white mb-4">2. Ce sunt cookie-urile?</h2>
              <p className="mb-6 text-gray-300 ml-5">
                Un „Internet Cookie” (termen cunoscut și sub denumirea de „browser cookie” sau „HTTP cookie”) reprezintă un fișier de mici dimensiuni, format din litere și numere, care va fi stocat pe dispozitivul dumneavoastră.
              </p>
              <p className="mb-6 text-gray-300 ml-5">
                Cookie-urile sunt instalate prin solicitarea emisă de un web-server către un browser și au o durată de existență determinată. Nu conțin programe software, viruși sau spyware.
              </p>

              <h2 className="text-2xl font-semibold text-white mb-4">3. Categorii de cookie-uri</h2>
              <div className="mb-6 text-gray-300 ml-5">
                <h3 className="text-xl font-semibold text-[#FEBFD2] mb-2">Necesare</h3>
                <p className="mb-4">
                  Cookie-urile necesare sunt esențiale pentru funcțiile de bază ale site-ului web. Site-ul web nu va funcționa în mod dorit fără ele.
                </p>
                
                <h3 className="text-xl font-semibold text-[#FEBFD2] mb-2">Funcționalitate</h3>
                <p className="mb-4">
                  Cookie-urile de funcționalitate ajută la realizarea anumitor funcționalități precum partajarea conținutului pe platformele de socializare.
                </p>
                
                <h3 className="text-xl font-semibold text-[#FEBFD2] mb-2">Analitice</h3>
                <p className="mb-4">
                  Cookie-urile analitice sunt utilizate pentru a înțelege modul în care vizitatorii interacționează cu site-ul web.
                </p>
                
                <h3 className="text-xl font-semibold text-[#FEBFD2] mb-2">Publicitate</h3>
                <p>
                  Cookie-urile publicitare sunt utilizate pentru a oferi vizitatorilor reclame personalizate.
                </p>
              </div>

              <h2 className="text-2xl font-semibold text-white mb-4">4. Cookie-uri utilizate</h2>
              <div className="mb-6 overflow-x-auto">
                <table className="w-full text-gray-300 border border-white/20">
                  <thead>
                    <tr className="bg-white/10">
                      <th className="p-3 text-left">Nume</th>
                      <th className="p-3 text-left">Durată</th>
                      <th className="p-3 text-left">Descriere</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/20">
                      <td className="p-3">PHPSESSID</td>
                      <td className="p-3">Sesiune</td>
                      <td className="p-3">Gestionează sesiunile utilizatorului pe website</td>
                    </tr>
                    <tr className="border-b border-white/20">
                      <td className="p-3">_ga</td>
                      <td className="p-3">2 ani</td>
                      <td className="p-3">Cookie Google Analytics pentru analiza traficului</td>
                    </tr>
                    <tr className="border-b border-white/20">
                      <td className="p-3">_gid</td>
                      <td className="p-3">24 ore</td>
                      <td className="p-3">Cookie Google Analytics pentru identificarea utilizatorilor</td>
                    </tr>
                    <tr>
                      <td className="p-3">_gat</td>
                      <td className="p-3">1 minut</td>
                      <td className="p-3">Cookie Google Analytics pentru limitarea solicitărilor</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-semibold text-white mb-4">5. Durata de viață a cookie-urilor</h2>
              <p className="mb-6 text-gray-300 ml-5">
                Există două categorii principale de cookie-uri:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-300 ml-5">
                <li><strong>Cookie-uri de sesiune</strong> - Șterse automat când închideți browserul</li>
                <li><strong>Cookie-uri persistente</strong> - Rămân stocate pe dispozitiv până la expirare sau ștergere manuală</li>
              </ul>

              <h2 className="text-2xl font-semibold text-white mb-4">6. Gestionarea cookie-urilor</h2>
              <p className="mb-6 text-gray-300 ml-5">
                Puteți controla și șterge cookie-uri prin setările browserului. Totuși, dezactivarea anumitor cookie-uri poate afecta funcționalitatea site-ului.
              </p>
              <p className="mb-6 text-gray-300 ml-5">
                Pentru instrucțiuni specifice browserului dumneavoastră:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-300 ml-5">
                <li><a href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies" className="text-[#FEBFD2] hover:underline">Internet Explorer</a></li>
                <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" className="text-[#FEBFD2] hover:underline">Firefox</a></li>
                <li><a href="https://support.google.com/chrome/answer/95647" className="text-[#FEBFD2] hover:underline">Chrome</a></li>
                <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" className="text-[#FEBFD2] hover:underline">Safari</a></li>
              </ul>

              <h2 className="text-2xl font-semibold text-white mb-4">7. Contact</h2>
              <p className="mb-6 text-gray-300 ml-5">
                Pentru orice întrebări legate de politica noastră de cookie-uri, vă rugăm să ne contactați la:<br />
                Email: stanciu.denisa@gmail.com<br />
                Telefon: 0751812610
              </p>

              <div className="text-sm text-gray-400 mt-8">
                <p>
                  Prin continuarea utilizării site-ului www.dsmathcenter.ro, sunteți de acord cu această Politică de Cookie-uri.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default function CookiesPage() {
  return (
    <CookiesContent />
  );
}