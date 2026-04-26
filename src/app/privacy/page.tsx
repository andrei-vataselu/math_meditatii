"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Design from "../components/Design";

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
              Ultima actualizare: 17.04.2026
            </motion.p>
          </div>

          <motion.div
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <article className="prose prose-invert prose-lg max-w-none text-gray-300 [&_h2]:text-white [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-4 [&_strong]:text-white [&_a]:text-[#FEBFD2] [&_a]:underline [&_a]:underline-offset-2">
              <h2>1. Introducere și Identificarea Operatorului de Date</h2>
              <p>
                Această Politică de Confidențialitate descrie modul în care{" "}
                <strong>DS MATH CENTER S.R.L.</strong> (denumită în continuare
                „Operatorul”, „Noi” sau „DS Math Center”) colectează, utilizează,
                dezvăluie și protejează informațiile dumneavoastră personale atunci
                când interacționați cu site-ul <strong>www.matebac.com</strong> și
                cu serviciile noastre educaționale.
              </p>
              <p>Datele de identificare ale Operatorului sunt:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Denumire:</strong> DS MATH CENTER S.R.L.
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
                  <strong>Nr. Reg. Comerțului:</strong> J2025008672006
                </li>
                <li>
                  <strong>Reprezentant legal:</strong> Niță Denisa Ștefania
                </li>
                <li>
                  <strong>Email:</strong> denisanita08@gmail.com
                </li>
                <li>
                  <strong>Telefon:</strong> +40 731 979 588
                </li>
              </ul>

              <h2>2. Datele pe care le colectăm</h2>
              <p>
                Colectăm informații cu caracter personal pe care ni le furnizați
                direct (prin e-mail, telefonic, WhatsApp sau la înscrierea la
                cursuri), cum ar fi:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Date de identificare și contact:</strong> Nume și
                  prenume, adresă de e-mail, număr de telefon.
                </li>
                <li>
                  <strong>Date de facturare:</strong> Adresă de domiciliu/sediu,
                  CNP (doar dacă este strict necesar pentru facturarea către
                  persoane fizice conform legii) sau datele firmei (pentru
                  persoane juridice).
                </li>
                <li>
                  <strong>Date educaționale:</strong> Profilul liceal, clasa,
                  nivelul de pregătire (necesare pentru personalizarea
                  meditațiilor).
                </li>
              </ul>

              <h2>3. Scopul și Temeiul legal al prelucrării</h2>
              <p>
                Prelucrăm datele dumneavoastră strict în următoarele scopuri și pe
                baza următoarelor temeiuri legale prevăzute de GDPR:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Executarea unui contract (art. 6 alin. (1) lit. b
                  GDPR):</strong> Pentru furnizarea serviciilor educaționale,
                  livrarea materialelor digitale (Culegeri PDF), organizarea
                  meditațiilor și comunicarea administrativă aferentă acestora.
                </li>
                <li>
                  <strong>Îndeplinirea unei obligații legale (art. 6 alin. (1)
                  lit. c GDPR):</strong> Pentru emiterea facturilor fiscale și
                  respectarea legislației financiar-contabile din România.
                </li>
                <li>
                  <strong>Interesul legitim (art. 6 alin. (1) lit. f GDPR):</strong>{" "}
                  Pentru soluționarea eventualelor cereri sau reclamații și pentru
                  asigurarea securității serviciilor noastre.
                </li>
              </ul>

              <h2>4. Partajarea datelor (Destinatarii datelor)</h2>
              <p>
                Nu vindem și nu închiriem informațiile dumneavoastră personale
                către terți. Datele dumneavoastră pot fi partajate doar cu
                parteneri de încredere, strict pentru desfășurarea activității:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Firma de contabilitate (pentru procesarea facturilor fiscale).</li>
                <li>
                  Procesatorii de plăți (dacă efectuați plăți online cu cardul).
                </li>
                <li>
                  Instituții ale statului (ANAF etc.), doar atunci când există o
                  obligație legală în acest sens.
                </li>
              </ul>

              <h2>5. Durata de păstrare a datelor</h2>
              <p>
                Păstrăm datele dumneavoastră personale doar atât timp cât este
                necesar pentru îndeplinirea scopurilor menționate:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Datele de facturare:</strong> Sunt păstrate conform
                  legislației financiar-contabile din România (de regulă, 10 ani).
                </li>
                <li>
                  <strong>Datele de contact/comunicare:</strong> Sunt păstrate pe
                  durata desfășurării cursurilor/meditațiilor și pentru o perioadă
                  rezonabilă ulterior, pentru a putea răspunde eventualelor
                  solicitări.
                </li>
              </ul>

              <h2>6. Securitatea datelor</h2>
              <p>
                Implementăm măsuri de securitate tehnice și organizatorice adecvate
                pentru a proteja informațiile dumneavoastră personale împotriva
                accesului neautorizat, modificării, dezvăluirii sau distrugerii
                accidentale. Toate comunicările online se realizează prin canale
                securizate.
              </p>

              <h2>7. Drepturile dumneavoastră (conform GDPR)</h2>
              <p>
                În calitate de persoană vizată, aveți următoarele drepturi
                referitoare la datele dumneavoastră personale:
              </p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  <strong>Dreptul de acces:</strong> Puteți solicita confirmarea
                  prelucrării datelor și o copie a acestora.
                </li>
                <li>
                  <strong>Dreptul la rectificare:</strong> Puteți solicita
                  corectarea datelor inexacte sau incomplete.
                </li>
                <li>
                  <strong>Dreptul la ștergere („dreptul de a fi uitat”):</strong>{" "}
                  Puteți solicita ștergerea datelor, în condițiile legii (excepție
                  fac datele necesare pentru facturare).
                </li>
                <li>
                  <strong>Dreptul la restricționarea prelucrării:</strong> Puteți
                  solicita limitarea prelucrării datelor în anumite situații.
                </li>
                <li>
                  <strong>Dreptul la portabilitatea datelor:</strong> Puteți
                  solicita transferul datelor către un alt operator.
                </li>
                <li>
                  <strong>Dreptul de opoziție:</strong> Vă puteți opune prelucrării
                  datelor din motive întemeiate.
                </li>
                <li>
                  <strong>Dreptul de a depune o plângere:</strong> Aveți dreptul de
                  a vă adresa Autorității Naționale de Supraveghere a Prelucrării
                  Datelor cu Caracter Personal (ANSPDCP —{" "}
                  <a
                    href="https://www.dataprotection.ro"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.dataprotection.ro
                  </a>
                  ) dacă considerați că drepturile v-au fost încălcate.
                </li>
              </ol>

              <h2>8. Utilizarea Cookie-urilor și a stocării locale în browser</h2>
              <p>
                Platforma <strong>www.matebac.com</strong> este concepută pentru
                a respecta intimitatea vizitatorilor.{" "}
                <strong>Nu utilizăm cookie-uri de urmărire (tracking), marketing
                sau analiză</strong> (ex.: Google Analytics, Meta Pixel).
              </p>
              <p>
                Pentru a reține preferința dumneavoastră privind bannerul
                informativ de la baza paginii (Accept / Refuză), folosim{" "}
                <strong>localStorage</strong> în browser (cheie{" "}
                <code className="text-[#FEBFD2]">cookieConsent</code>), fără
                scopuri de publicitate sau profilare. Detalii complete:{" "}
                <Link href="/politica-cookies">
                  Politica privind utilizarea Cookie-urilor
                </Link>
                .
              </p>

              <h2>9. Modificări ale politicii</h2>
              <p>
                Ne rezervăm dreptul de a actualiza această Politică de
                Confidențialitate periodic pentru a reflecta schimbările
                legislative sau operaționale. Orice modificări vor fi publicate pe
                această pagină cu o dată de actualizare revizuită în partea
                superioară a documentului.
              </p>

              <h2>10. Contact și Solicitări GDPR</h2>
              <p>
                Pentru exercitarea drepturilor dumneavoastră sau pentru orice
                întrebări legate de modul în care prelucrăm datele personale, ne
                puteți contacta la:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Responsabil cu protecția datelor:</strong> Niță Denisa
                  Ștefania
                </li>
                <li>
                  <strong>Email:</strong> denisanita08@gmail.com
                </li>
                <li>
                  <strong>Telefon/WhatsApp:</strong> +40 731 979 588
                </li>
              </ul>

              <p className="text-sm text-gray-400 border-t border-white/10 pt-6 mt-8">
                Prin continuarea navigării pe site-ul www.matebac.com și/sau prin
                achiziționarea serviciilor noastre, confirmați că ați citit,
                înțeles și sunteți de acord cu această Politică de Confidențialitate.
              </p>
            </article>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default function PrivacyPage() {
  return <PrivacyContent />;
}
