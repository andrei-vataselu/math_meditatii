'use client';

import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Design from '../components/Design';

function TOSContent() {
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
            Termeni și Condiții
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
              <h2 className="text-2xl font-semibold text-white mb-4">1. Părțile Acordului</h2>
              <p className="mb-6 text-gray-300 ml-5">
              Acest acord este încheiat între Denisa Stanciu – furnizorul cursurilor și serviciilor educaționale prezentate pe platforma www.dsmathcenter.ro – și fiecare persoană fizică sau juridică ce achiziționează aceste produse. 
              <br/> Denisa Stanciu, în calitate de prestator, se angajează să ofere acces la programe educaționale online, în conformitate cu termenii prezentați mai jos.
              </p>

              <h2 className="text-2xl font-semibold text-white mb-4">2. Obiectul Acordului</h2>
              <p className="mb-6 text-gray-300 ml-5">
                Vânzarea online a cursurilor prezentate pe platforma www.dsmathcenter.ro.
              </p>

              <h2 className="text-2xl font-semibold text-white mb-4">3. Politica de Livrare</h2>
              <p className="mb-6 text-gray-300 ml-5">
                Materialele vor fi livrate prin intermediul platformelor Facebook/ZOOM. Programul va începe în data specificată 
                pentru fiecare curs și va dura până în data de încheiere comunicată.
              </p>

              <h2 className="text-2xl font-semibold text-white mb-4">4. Prețul și Modalități de Plată</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-300 ml-5">
                <li>Plata se poate face online cu cardul, prin transfer bancar sau ordin de plată</li>
                <li>Factura fiscală se emite la data debitării sumei în contul Prestatorului</li>
                <li>Toate sumele achitate în avans pentru cursuri sunt nereturnabile</li>
              </ul>

              <h2 className="text-2xl font-semibold text-white mb-4">5. Dreptul de Retragere</h2>
              <p className="mb-6 text-gray-300 ml-5">
                Conform legislației UE, aveți dreptul de a anula comanda în termen de 14 zile de la achiziție. 
                Odată cu primirea accesului la produse/servicii, dreptul la returnare dispare.
              </p>

              <h2 className="text-2xl font-semibold text-white mb-4">6. Confidențialitate</h2>
              <p className="mb-6 text-gray-300 ml-5">
                Toate datele personale sunt strict confidențiale și vor fi prelucrate în conformitate cu GDPR. 
                Nu stocăm detalii ale cardurilor de plată.
              </p>

              <h2 className="text-2xl font-semibold text-white mb-4">7. Forță Majoră</h2>
              <p className="mb-6 text-gray-300 ml-5">
                În caz de evenimente de forță majoră (accidente, deces, catastrofe naturale), contractul poate fi reziliat fără penalități.
              </p>

              <h2 className="text-2xl font-semibold text-white mb-4">8. Contact</h2>
              <p className="mb-6 text-gray-300 ml-5">
                Pentru orice întrebări, vă rugăm să ne contactați la:<br />
                Email: stanciu.denisa@gmail.com<br />
                Telefon: 0751812610
              </p>

              <div className="text-sm text-gray-400 mt-8">
                <p>
                  Prin utilizarea site-ului www.dsmathcenter.ro, sunteți de acord cu acești Termeni și Condiții, 
                  Politica de Confidențialitate și Politica de Cookie-uri.
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

export default function TOSPage() {
  return (
    <TOSContent />
  );
}