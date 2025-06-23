import Design from '../components/Design';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Andrei, clasa a XII-a',
    text: 'Datorită meditațiilor cu Denisa, am reușit să înțeleg concepte pe care le consideram imposibile. Am luat nota 9 la Bac!',
    image: '/recenzii/img.png',
  },
  {
    name: 'Maria, clasa a VIII-a',
    text: 'Explicațiile sunt clare și răbdătoare. Am prins încredere în mine și am început să îmi placă matematica.',
    image: '/recenzii/img2.png',
  },
  {
    name: 'Vlad, clasa a X-a',
    text: 'Fiecare ședință este interactivă și adaptată nevoilor mele. Recomand cu drag!',
    image: '/recenzii/img3.png',
  },
  {
    name: 'Ioana, clasa a VII-a',
    text: 'Am progresat enorm într-un timp scurt. Denisa are răbdare și explică pe înțelesul tuturor.',
    image: '/recenzii/img4.png',
  },
  {
    name: 'Paul, clasa a XI-a',
    text: 'Matematica nu mai este un stres pentru mine. Mulțumesc pentru tot ajutorul!',
    image: '/recenzii/im5.png',
  },
  {
    name: 'Paul, clasa a XI-a',
    text: 'Matematica nu mai este un stres pentru mine. Mulțumesc pentru tot ajutorul!',
    image: '/recenzii/im5.png',
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
                <Image src={t.image} alt={t.name} fill style={{objectFit:'cover'}} />
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