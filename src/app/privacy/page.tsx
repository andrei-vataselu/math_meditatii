'use client';

import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Design from '../components/Design';

function PrivacyContent() {
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
            Politica de Confidențialitate
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
                Această Politică de Confidențialitate descrie modul în care DS Math Center colectează, utilizează, 
                dezvăluie și protejează informațiile pe care ni le furnizați atunci când utilizați site-ul nostru www.dsmathcenter.ro.
              </p>

              <h2 className="text-2xl font-semibold text-white mb-4">2. Datele pe care le colectăm</h2>
              <p className="mb-6 text-gray-300 ml-5">
                Colectăm informații personale pe care ni le furnizați direct, cum ar fi:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-300 ml-5">
                <li>Nume și prenume</li>
                <li>Adresă de email</li>
                <li>Număr de telefon</li>
                <li>Date de plată (procesate exclusiv prin procesatorii de plăți)</li>
                <li>Alte informații necesare pentru furnizarea serviciilor noastre</li>
              </ul>

              <h2 className="text-2xl font-semibold text-white mb-4">3. Cum utilizăm datele</h2>
              <p className="mb-6 text-gray-300 ml-5">
                Informațiile colectate sunt utilizate pentru:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-300 ml-5">
                <li>Furnizarea și îmbunătățirea serviciilor noastre</li>
                <li>Procesarea tranzacțiilor</li>
                <li>Comunicarea cu dumneavoastră</li>
                <li>Asigurarea securității și împotriva fraudelor</li>
                <li>Conformitatea cu obligațiile legale</li>
              </ul>

              <h2 className="text-2xl font-semibold text-white mb-4">4. Partajarea datelor</h2>
              <p className="mb-6 text-gray-300 ml-5">
                Nu vindem sau închiriem informațiile dumneavoastră personale terților. Datele pot fi partajate cu:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-300 ml-5">
                <li>Furnizori de servicii care ne ajută în activitatea noastră (ex: procesatori de plăți)</li>
                <li>Autorități competente, atunci când este necesar prin lege</li>
                <li>Alte terțe părți cu consimțământul dumneavoastră</li>
              </ul>

              <h2 className="text-2xl font-semibold text-white mb-4">5. Securitatea datelor</h2>
              <p className="mb-6 text-gray-300 ml-5">
                Implementăm măsuri de securitate adecvate pentru a proteja informațiile dumneavoastră personale împotriva 
                accesului neautorizat, modificării, dezvăluirii sau distrugerii.
              </p>

              <h2 className="text-2xl font-semibold text-white mb-4">6. Drepturile dumneavoastră</h2>
              <p className="mb-6 text-gray-300 ml-5">
                Conform GDPR, aveți următoarele drepturi:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-300 ml-5">
                <li>Dreptul de acces la datele dumneavoastră personale</li>
                <li>Dreptul la rectificare</li>
                <li>Dreptul la ștergere (&quot;dreptul de a fi uitat&quot;)</li>
                <li>Dreptul la restricționarea prelucrării</li>
                <li>Dreptul la portabilitatea datelor</li>
                <li>Dreptul de opoziție</li>
              </ul>

              <h2 className="text-2xl font-semibold text-white mb-4">7. Cookie-uri</h2>
              <p className="mb-6 text-gray-300 ml-5">
                Site-ul nostru utilizează cookie-uri pentru a îmbunătăți experiența de navigare. Puteți gestiona preferințele 
                pentru cookie-uri în setările browserului dumneavoastră.
              </p>

              <h2 className="text-2xl font-semibold text-white mb-4">8. Modificări ale politicii</h2>
              <p className="mb-6 text-gray-300 ml-5">
                Ne rezervăm dreptul de a actualiza această Politică de Confidențialitate periodic. Orice modificări vor fi 
                publicate pe această pagină cu o dată de actualizare revizuită.
              </p>

              <h2 className="text-2xl font-semibold text-white mb-4">9. Contact</h2>
              <p className="mb-6 text-gray-300 ml-5">
                Pentru întrebări sau solicitări legate de confidențialitate, vă rugăm să ne contactați la:<br />
                Email: stanciu.denisa@gmail.com<br />
                Telefon: 0751812610
              </p>

              <div className="text-sm text-gray-400 mt-8">
                <p>
                  Prin utilizarea site-ului www.dsmathcenter.ro, sunteți de acord cu această Politică de Confidențialitate.
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

export default function PrivacyPage() {
  return (
    <PrivacyContent />
  );
}