import Link from "next/link";
import { siteConfig } from "@/config/site";

/**
 * Indexable long-form copy for homepage SEO (word count, FAQs, internal links).
 */
export default function HomeSeoContent() {
  const { name, address, phoneDisplay, phoneE164, email, social } = siteConfig;

  return (
    <section
      id="pregatire-matematica-bac-en"
      className="relative py-16 md:py-24 px-6 text-left"
      aria-labelledby="seo-section-heading"
    >
      <div className="max-w-3xl mx-auto space-y-10 text-gray-200">
        <div>
          <h2
            id="seo-section-heading"
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Meditații la matematică pentru Bac și Evaluare Națională la {name}
          </h2>
          <p className="text-lg leading-relaxed">
            La <strong className="text-white">{name}</strong>,{" "}
            <strong className="text-white">Denisa Niță</strong> pregătește
            elevi de clasa a VIII-a și a XII-a pentru{" "}
            <strong className="text-white">Evaluarea Națională</strong> și{" "}
            <strong className="text-white">Bacalaureatul la matematică</strong>.
            Oferim <strong className="text-white">meditații la matematică</strong>{" "}
            online și întâlniri la Pitești, cu explicații structurate și materiale
            care urmăresc programa oficială și tipurile de subiecte de la examen.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-white mb-3">
            De ce să alegi meditații de matematică aici?
          </h3>
          <p className="leading-relaxed mb-4">
            Mulți elevi au nevoie nu doar de exerciții, ci de o explicație clară a
            raționamentului din spatele formulelor. La {name} combinăm antrenamentul
            pe subiecte oficiale cu un plan personalizat: identificăm lacunele,
            repetăm conceptele esențiale și urmărim progresul până la ziua
            examenului. Poți consulta gratuit{" "}
            <Link
              href="/resurse-gratuite"
              className="text-[#FEBFD2] underline underline-offset-2 hover:text-white"
            >
              resurse gratuite
            </Link>{" "}
            și subiectele organizate pe{" "}
            <Link
              href="/subiecte-oficiale-bacalaureat"
              className="text-[#FEBFD2] underline underline-offset-2 hover:text-white"
            >
              Bacalaureat
            </Link>{" "}
            și{" "}
            <Link
              href="/subiecte-oficiale-evaluare-nationala"
              className="text-[#FEBFD2] underline underline-offset-2 hover:text-white"
            >
              Evaluare Națională
            </Link>
            .
          </p>
          <p className="leading-relaxed">
            Pentru detalii despre formatul ședințelor și abordare, citește{" "}
            <Link
              href="/despre-meditatii"
              className="text-[#FEBFD2] underline underline-offset-2 hover:text-white"
            >
              despre meditații
            </Link>{" "}
            și{" "}
            <Link
              href="/planuri"
              className="text-[#FEBFD2] underline underline-offset-2 hover:text-white"
            >
              planurile disponibile
            </Link>
            . Dacă vrei să ne cunoaștem, poți solicita o consultație pe WhatsApp
            sau prin pagina de{" "}
            <Link
              href="/contact"
              className="text-[#FEBFD2] underline underline-offset-2 hover:text-white"
            >
              contact
            </Link>
            .
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-white mb-3">
            Profiluri la matematică: Mate-Info, Științe, Tehnologic, Pedagogic
          </h3>
          <p className="leading-relaxed mb-4">
            Subiectele de la Bac și EN diferă ca structură și profunzime. Ne
            adaptăm profilului tău (Mate-Info, Științe ale naturii, Tehnologic,
            Pedagogic) astfel încât să exersăm exact tipurile de cerințe care îți
            apar la probă. Exersăm grile, probleme cu parametri, demonstrații și
            subiecte cu conținut practic, mereu legate de baremele și tendințele
            recente ale ministerului.
          </p>
          <p className="leading-relaxed">
            Meditațiile pot fi urmate constant sau ca intensiv înainte de simulări
            și sesiunea oficială. Important este să începi devreme: matematica se
            construiește în timp, iar o bază solidă îți reduce stresul și îți
            crește încrederea în ziua examenului.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-white mb-3">
            Locație și contact ({address.addressLocality})
          </h3>
          <p className="leading-relaxed">
            Ne poți contacta la telefon{" "}
            <a
              href={`tel:${phoneE164}`}
              className="text-[#FEBFD2] underline underline-offset-2 hover:text-white"
            >
              {phoneDisplay}
            </a>
            , pe e-mail{" "}
            <a
              href={`mailto:${email}`}
              className="text-[#FEBFD2] underline underline-offset-2 hover:text-white"
            >
              {email}
            </a>{" "}
            sau pe{" "}
            <a
              href={social.whatsapp}
              className="text-[#FEBFD2] underline underline-offset-2 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            . Pentru meditații cu prezență fizică, ne întâlnim la adresa:{" "}
            <span className="text-white">
              {address.streetAddress}, {address.postalCode}{" "}
              {address.addressLocality}, {address.addressRegion},{" "}
              {address.addressCountry === "RO" ? "România" : address.addressCountry}
            </span>
            .
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">
            Întrebări frecvente (meditații matematică Bac / EN)
          </h3>
          <dl className="space-y-6">
            <div>
              <dt className="font-semibold text-white">
                Cum se desfășoară meditațiile la matematică online?
              </dt>
              <dd className="mt-2 leading-relaxed">
                Folosim o platformă stabilă de videoconferință, tablă digitală și
                materiale PDF pe care le primești înainte de ședință. Poți întreba
                în timp real și primești feedback la exercițiile rezolvate acasă.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-white">
                Pot combina meditațiile online cu întâlniri la Pitești?
              </dt>
              <dd className="mt-2 leading-relaxed">
                Da, în funcție de disponibilitate și de perioada din an putem stabili
                un mix între ședințe online și fizice, astfel încât să păstrezi
                ritmul de învățare fără întreruperi.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-white">
                Este utilă o consultație înainte de a începe meditațiile?
              </dt>
              <dd className="mt-2 leading-relaxed">
                Da. O discuție scurtă ajută să stabilim nivelul, obiectivele
                (nota țintă, admitere, recuperare) și frecvența ședințelor, ca să nu
                pierdem timpul pe subiecte irrelevante pentru tine.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-white">
                Aveți materiale pentru Bacalaureat și Evaluare Națională?
              </dt>
              <dd className="mt-2 leading-relaxed">
                Da — pe site găsești subiecte oficiale, resurse gratuite și
                explicații aliniate la programa actuală. În meditații folosim aceste
                materiale ca punct de plecare și le completăm cu exerciții
                suplimentare acolo unde e nevoie.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-white">
                Cum mă ajută {name} față de învățat singur acasă?
              </dt>
              <dd className="mt-2 leading-relaxed">
                Primești clarificări la locul unde te blochezi, eviți să înveți greșit
                de pe start și economisești timp: exersăm strategic, cu feedback
                imediat și plan de repetare.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
