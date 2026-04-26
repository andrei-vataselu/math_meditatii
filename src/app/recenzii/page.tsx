import Design from '../components/Design';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

const testimonials = [
  {
    name: 'A., clasa a XII-a',
    text: `Mi-a plăcut calmitatea cu care rezolvai exercițiile și asta mă ajută fiindcă mă puteam concentra mult mai ușor. Mi-a plăcut că mă includeai din când în când să dictez și eu, ceea ce în online mi se pare că face mult, deoarece de multe ori poate îmi mai pierdeam din concentație.

Prietenoasă, interesată și clar pasionată de ceea ce face


`,
    image: '/recenzii/anon.jpg',
  },
  {
    name: 'M., clasa a VIII-a',
    text: 'Ședința de astăzi a decurs foarte bine! Modul tău de a explica este una foarte bună și de înțelegere. Explici într-un mod foarte calm și îmi place faptul că îmi explici până înțeleg. Chiar îți mulțumesc! 💗🌸',
    image: '/recenzii/anon.jpg',
  },
  {
    name: 'V., clasa a X-a',
    text: `Buna! Mi-a plăcut foarte mult. Explici foarte bine și mă faci să înțeleg mult mai ușor, prin multe metode ușoare :)
Îmi place și că e totul organizat, cu formule și exerciții, scris frumos cu culori, atât pentru clasă cât și pt Bac
`,
    image: '/recenzii/anon.jpg',
  },
  {
    name: 'I., clasa a VII-a',
    text: `Mi-a plăcut să învăț cu tine, mă pot simți în largul meu și îmi place că mi explici până învăț și că ai răbdare cu mine, ceea ce nu mulți profesori nu au și chiar îți mulțumesc! 🙈❤️
`,
    image: '/recenzii/anon.jpg',
  },
  {
    name: 'P., clasa a XI-a',
    text: `Vreau să îți mulțumesc din tot sufletul pentru tot sprijinul pe care mi l-ai oferit în toată perioada asta. Ai avut mereu răbdare cu mine, chiar și atunci când nu înțelegeam din prima, iar indiferent de cum va fi mâine la bac, știu că am crescut mult, comparativ cu prima ședință de meditație, datorită ție! ❤️`,
    image: '/recenzii/anon.jpg',
  },
  {
    name: 'S., clasa a XII-a',
    text: 'Bună seara!! Vă mulțumesc pentru implicare. S. evoluează din ce în ce mai bine, dovadă nota de la test care e și meritul dumneavoastră. O seară bună! 🤗',
    image: '/recenzii/anon.jpg',
  },

];

export default function Recenzii() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#5f0032] to-slate-900 overflow-hidden isolate">
      <Design />
      <Header />
      <main className="relative flex flex-col items-center justify-center min-h-[70vh] px-6 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Ce spun elevii noștri</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 flex flex-col items-center shadow-lg">
              <div className="w-20 h-20 mb-4 relative rounded-full overflow-hidden border-4 border-[#FEBFD2]">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
              <p className="text-gray-200 italic mb-4">“{t.text}”</p>
              <span className="text-[#FEBFD2] font-semibold">{t.name}</span>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
} 