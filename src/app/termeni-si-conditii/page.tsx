"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Design from "../components/Design";

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
              <p className="text-gray-200">
                Prezentul document stabilește regulile și condițiile de utilizare a
                site-ului <strong>www.matebac.com</strong> și condițiile de
                achiziționare a serviciilor educaționale și produselor digitale
                oferite de <strong>DS MATH CENTER S.R.L.</strong> Documentele{" "}
                <Link href="/privacy">Politica de Confidențialitate</Link> și{" "}
                <Link href="/politica-cookies">
                  Politica privind utilizarea Cookie-urilor
                </Link>{" "}
                fac parte integrantă din cadrul informării dumneavoastră.
              </p>

              <h2>1. Identificarea Prestatorului</h2>
              <p>Site-ul este deținut și administrat de:</p>
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
                  <strong>Cod Unic de Identificare (CUI):</strong> 51249651
                </li>
                <li>
                  <strong>Nr. înmatriculare Registrul Comerțului:</strong>{" "}
                  J2025008672006
                </li>
                <li>
                  <strong>Reprezentant legal:</strong> Niță Denisa Ștefania
                  (Administrator)
                </li>
                <li>
                  <strong>Email:</strong> denisanita08@gmail.com
                </li>
                <li>
                  <strong>Telefon/WhatsApp:</strong> +40 731 979 588
                </li>
              </ul>

              <h2>2. Definiții</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Utilizator:</strong> Orice persoană care accesează
                  site-ul.
                </li>
                <li>
                  <strong>Client:</strong> Persoana fizică sau juridică ce plasează
                  o comandă pentru un curs sau material digital.
                </li>
                <li>
                  <strong>Servicii:</strong> Cursuri online, meditații, materiale
                  educaționale în format digital (PDF, video etc.).
                </li>
              </ul>

              <h2>3. Proprietatea Intelectuală</h2>
              <p>
                Întregul conținut al site-ului (texte, grafică, logo-uri, materiale
                video, culegeri PDF, metode de calcul proprii) este proprietatea
                exclusivă a Prestatorului și este protejat de Legea drepturilor de
                autor.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Achiziționarea unui curs sau a unei culegeri PDF oferă
                  Clientului o licență de utilizare personală, neexclusivă și
                  netransferabilă.
                </li>
                <li>
                  Este strict interzisă multiplicarea, distribuirea, revânzarea
                  sau publicarea materialelor către terțe persoane, indiferent de
                  metodă (online sau fizic), fără acordul expres și scris al
                  Prestatorului. Încălcarea acestei reguli atrage răspunderea
                  juridică și plata de daune-interese.
                </li>
              </ul>

              <h2>4. Produse și Servicii</h2>
              <p>Prestatorul oferă prin intermediul site-ului:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  <strong>Servicii de meditații/cursuri live:</strong> Desfășurate
                  conform unui program stabilit și comunicat clienților.
                </li>
                <li>
                  <strong>Produse digitale (Culegeri PDF):</strong> Fișiere
                  descărcabile imediat după confirmarea plății. Caracteristicile
                  detaliate ale fiecărui serviciu sunt prezentate pe paginile
                  dedicate din site.
                </li>
              </ol>

              <h2>5. Comandă și Plată</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Plata se efectuează online prin card bancar (prin intermediul
                  procesatorului de plăți securizat), transfer bancar sau ordin
                  de plată.
                </li>
                <li>
                  Accesul la materialele digitale sau confirmarea locului la
                  cursuri se realizează exclusiv după confirmarea debitării sumei
                  în contul Prestatorului.
                </li>
                <li>
                  Factura fiscală va fi transmisă în format electronic pe adresa de
                  e-mail furnizată de Client în momentul plasării comenzii.
                </li>
              </ul>

              <h2>6. Politica de Livrare</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Produsele digitale (PDF):</strong> Vor fi livrate prin
                  e-mail sau prin link de descărcare imediat după confirmarea
                  plății.
                </li>
                <li>
                  <strong>Cursurile online/Meditațiile:</strong> Se vor desfășura
                  conform calendarului comunicat. Link-urile de acces (Zoom/Google
                  Meet/alte platforme) vor fi transmise cu un timp rezonabil înainte
                  de începerea sesiunii.
                </li>
              </ul>

              <h2>7. Dreptul de Retragere și Politica de Rambursare</h2>
              <p>
                Conform legislației în vigoare (OUG 34/2014), dreptul de retragere
                în termen de 14 zile <strong>NU</strong> se aplică în următoarele
                cazuri specifice serviciilor noastre:
              </p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  <strong>Pentru materiale digitale (PDF-uri):</strong> Odată ce
                  livrarea conținutului digital a început (Clientul a primit
                  link-ul de descărcare sau fișierul pe e-mail și a inițiat
                  descărcarea), Clientul își pierde dreptul de retragere, deoarece
                  produsul este considerat consumat.
                </li>
                <li>
                  <strong>Pentru servicii educaționale (Meditații/Cursuri live):</strong>{" "}
                  Dacă prestarea serviciului a început cu acordul prealabil expres
                  al Clientului.
                </li>
              </ol>
              <p>
                Sumele achitate pentru cursurile live la care Clientul nu s-a
                prezentat, fără a notifica Prestatorul cu minim 24 de ore în
                avans, sunt nereturnabile.
              </p>

              <h2>8. Confidențialitate și Protecția Datelor (GDPR)</h2>
              <p>
                Prelucrarea datelor cu caracter personal se face exclusiv în scopul
                procesării comenzilor, facturării și comunicării cu clienții.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Datele colectate nu sunt vândute, înstrăinate sau împrumutate
                  către terți.
                </li>
                <li>
                  Pentru detalii complete privind modul în care gestionăm datele
                  dumneavoastră, consultați{" "}
                  <Link href="/privacy">Politica de Confidențialitate</Link>.
                </li>
              </ul>

              <h2>9. Limitarea Răspunderii</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Prestatorul depune toate eforturile pedagogice pentru ca elevii
                  să obțină rezultatele dorite. Cu toate acestea, Prestatorul nu
                  poate garanta obținerea unei anumite note la examene
                  (Bacalaureat/Evaluare Națională), rezultatul final depinzând în
                  mod direct de efortul, capacitatea de asimilare și studiul
                  individual al fiecărui elev.
                </li>
                <li>
                  Prestatorul nu este responsabil pentru defecțiunile tehnice ale
                  platformelor terțe utilizate pentru desfășurarea cursurilor (ex.
                  platforme de videoconferință) sau pentru calitatea conexiunii la
                  internet a Clientului.
                </li>
              </ul>

              <h2>10. Forța Majoră</h2>
              <p>
                Niciuna dintre părți nu va fi răspunzătoare pentru neexecutarea
                obligațiilor sale, dacă o astfel de neexecutare este cauzată de un
                eveniment de forță majoră, conform legii.
              </p>

              <h2>11. Soluționarea Litigiilor</h2>
              <p>
                Orice conflict apărut între DS MATH CENTER S.R.L. și Client va fi
                soluționat pe cale amiabilă. În cazul în care acest lucru nu este
                posibil, litigiul va fi soluționat de instanțele judecătorești
                competente din raza teritorială a sediului social al Prestatorului
                (Pitești, județul Argeș).
              </p>

              <h2>12. Contact</h2>
              <p>Pentru orice solicitări, întrebări sau asistență tehnică:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Email:</strong> denisanita08@gmail.com
                </li>
                <li>
                  <strong>Telefon:</strong> +40 731 979 588
                </li>
              </ul>

              <p className="text-sm text-gray-400 border-t border-white/10 pt-6 mt-8">
                Prin utilizarea site-ului www.matebac.com și/sau achiziționarea
                serviciilor, confirmați că ați luat la cunoștință acești Termeni și
                Condiții, Politica de Confidențialitate și Politica privind
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

export default function TOSPage() {
  return <TOSContent />;
}
