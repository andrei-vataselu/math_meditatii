"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Design from "../components/Design";

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
              Politica privind utilizarea Cookie-urilor
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-400 mb-6"
            >
              Ultima actualizare: 17.04.2026
            </motion.p>
          </div>

          <motion.div
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <article className="prose prose-invert prose-lg max-w-none text-gray-300 [&_h2]:text-white [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-white [&_h3]:mt-6 [&_h3]:mb-3 [&_strong]:text-white [&_a]:text-[#FEBFD2] [&_a]:underline [&_a]:underline-offset-2">
              <p className="lead text-gray-200">
                Transparența și respectarea intimității utilizatorilor noștri
                reprezintă o prioritate pentru{" "}
                <strong>DS MATH CENTER S.R.L.</strong> Prin urmare, am conceput
                platforma <strong>www.matebac.com</strong> astfel încât să
                colecteze o cantitate minimă de date.
              </p>
              <p>
                Această politică explică modul în care gestionăm tehnologiile de
                stocare a datelor în browserul dumneavoastră. Pentru protecția
                datelor cu caracter personal, consultați și{" "}
                <Link href="/privacy">Politica de Confidențialitate</Link>.
              </p>

              <h2>1. Ce sunt cookie-urile?</h2>
              <p>
                Un &quot;Internet Cookie&quot; (cunoscut și sub numele de
                &quot;browser cookie&quot; sau pur și simplu &quot;cookie&quot;)
                este un fișier de mici dimensiuni, format din litere și numere,
                care este stocat pe computerul, terminalul mobil sau alte
                echipamente ale unui utilizator de pe care se accesează
                internetul.
              </p>

              <h2>2. Abordarea noastră: fără cookie-uri de urmărire</h2>
              <p>
                Spre deosebire de multe site-uri web,{" "}
                <strong>www.matebac.com</strong> nu plasează{" "}
                <strong>cookie-uri HTTP</strong> în browser pentru analiză,
                marketing, publicitate sau profilare. Vă informăm că:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  NU folosim cookie-uri de analiză a traficului (ex.: Google
                  Analytics).
                </li>
                <li>
                  NU folosim cookie-uri de marketing, profilare sau publicitate
                  (ex.: Facebook/Meta Pixel).
                </li>
                <li>
                  NU încorporăm elemente externe care plasează cookie-uri terțe
                  (ex.: player YouTube încorporat pe paginile noastre).
                </li>
              </ul>
              <p>
                Navigarea dumneavoastră pe acest site nu este urmărită în scopuri
                publicitare prin cookie-uri de profilare.
              </p>

              <h3>2.1. Stocare locală (localStorage) pentru bannerul informativ</h3>
              <p>
                Pentru a reține faptul că ați citit mesajul din bannerul de la
                baza paginii și că ați ales <strong>Accept</strong> sau{" "}
                <strong>Refuză</strong>, stocăm în browserul dumneavoastră o
                valoare în <strong>localStorage</strong> (cheie:{" "}
                <code className="text-[#FEBFD2]">cookieConsent</code>). Această
                valoare:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>rămâne pe dispozitivul dumneavoastră (nu o vindem terților);</li>
                <li>
                  nu este folosită pentru publicitate, profilare sau analiză a
                  comportamentului;
                </li>
                <li>
                  servește doar pentru a nu vă afișa repetitiv același mesaj,
                  după ce ați făcut o alegere;
                </li>
                <li>
                  poate fi ștearsă oricând din setările browserului (ștergere
                  date pentru site / date stocate local pentru matebac.com).
                </li>
              </ul>
              <p className="text-sm text-gray-400">
                În mediul de dezvoltare (localhost), instrumentele de dezvoltare
                Next.js pot afișa cookie-uri tehnice temporare (ex. reîmprospătare
                cod); acestea nu se aplică vizitatorilor site-ului public în
                producție.
              </p>

              <h2>3. Date tehnice de funcționare (Server Logs)</h2>
              <p>
                Singurele date colectate în timpul vizitei dumneavoastră sunt cele
                transmise în mod automat și inerent de către browserul
                dumneavoastră către serverul care găzduiește site-ul. Acestea
                includ:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Adresa IP (Internet Protocol).</li>
                <li>
                  Informații despre tipul browserului și sistemul de operare
                  utilizat (User-Agent).
                </li>
                <li>Data și ora accesării paginilor.</li>
              </ul>
              <p>
                Aceste date nu sunt folosite pentru a vă identifica personal. Ele
                sunt păstrate temporar, la nivel de server, fiind strict necesare
                pentru funcționarea tehnică a site-ului, diagnosticarea erorilor
                și prevenirea atacurilor cibernetice (în baza interesului nostru
                legitim de a asigura securitatea platformei, conform art. 6 alin.
                (1) lit. f din GDPR).
              </p>

              <h2>4. Link-uri și servicii externe (WhatsApp)</h2>
              <p>
                Pentru a facilita o comunicare rapidă, site-ul nostru utilizează
                un link direct către aplicația WhatsApp.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Când faceți clic pe butonul sau link-ul de WhatsApp, veți fi
                  redirecționat către platforma deținută de Meta Platforms, Inc.
                </li>
                <li>
                  Din momentul redirecționării, orice interacțiune se supune
                  exclusiv Politicii de Confidențialitate și Politicii de
                  Cookie-uri ale WhatsApp/Meta. Vă recomandăm să consultați
                  politicile acestora pentru a înțelege cum vă sunt prelucrate
                  datele pe respectiva platformă.
                </li>
              </ul>

              <h2>5. Date de identificare ale operatorului</h2>
              <p>Această politică este menținută de:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Denumire firmă:</strong> DS MATH CENTER S.R.L.
                </li>
                <li>
                  <strong>Sediul social:</strong> Localitatea Pitești, județul
                  Argeș, Strada Constantin Rădulescu-Motru nr.8A, bl.S2, sc.A,
                  et.1, ap.3
                </li>
                <li>
                  <strong>CUI:</strong> 51249651
                </li>
                <li>
                  <strong>Nr. înmatriculare Registrul Comerțului:</strong>{" "}
                  J2025008672006
                </li>
                <li>
                  <strong>Reprezentant legal:</strong> Niță Denisa Ștefania
                </li>
                <li>
                  <strong>Email:</strong> denisanita08@gmail.com
                </li>
                <li>
                  <strong>Telefon/WhatsApp:</strong> +40 731 979 588
                </li>
              </ul>

              <p className="text-sm text-gray-400 border-t border-white/10 pt-6 mt-8">
                Prin continuarea utilizării site-ului www.matebac.com, confirmați
                că ați luat la cunoștință prevederile acestei Politici privind
                utilizarea Cookie-urilor.
              </p>
            </article>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default function CookiesPage() {
  return <CookiesContent />;
}
