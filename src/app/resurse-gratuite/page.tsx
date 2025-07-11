"use client"
import Design from '../components/Design';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAuthNavigation } from '@/hooks/useAuthNavigation';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useRequireAuth } from '@/hooks/useRequireAuth';
import LoadingSpinner from '../components/LoadingSpinner';

export default function ResurseGratuite() {
  const { isAuthenticated, isLoading } = useRequireAuth();
  const { isLoading: authLoading, isNavigating, error } = useAuthNavigation(true);
  const router = useRouter();

  if (isLoading) return <LoadingSpinner />;
  if (!isAuthenticated) return null;

  // Show loading state
  if (authLoading || isNavigating) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#5f0032] to-slate-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <div className="text-white text-xl mb-4">
            {isNavigating ? 'Redirecționare...' : 'Se încarcă...'}
          </div>
          <div className="w-8 h-8 border-2 border-[#FEBFD2] border-t-transparent rounded-full animate-spin mx-auto"></div>
        </motion.div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#5f0032] to-slate-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md mx-auto p-6"
        >
          <div className="text-red-300 text-lg mb-4">
            Eroare de autentificare
          </div>
          <div className="text-gray-300 text-sm mb-6">
            {error}
          </div>
          <button
            onClick={() => router.refresh()}
            className="bg-gradient-to-r from-[#FEBFD2] to-[#FAD4E4] text-gray-800 px-6 py-2 rounded-full font-semibold hover:from-[#fef6f8] hover:to-[#fce9f0] transition-all duration-300"
          >
            Reîncearcă
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#5f0032] to-slate-900 overflow-hidden isolate">
      <Design />
      <Header />
      <main className="relative flex flex-col items-center justify-center min-h-[70vh] px-2 sm:px-6 py-8 sm:py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Resurse gratuite</h1>
        <div className="w-full max-w-3xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-4 sm:p-8 border border-white/20 shadow-2xl flex flex-col items-center gap-6">
          <h2 className="text-2xl font-semibold text-white mb-2">Exemplu de subiect la matematică</h2>
          <p className="text-gray-200 mb-4">Poți vizualiza PDF-ul direct aici sau îl poți descărca pentru a-l folosi offline.</p>
          <div className="flex flex-col sm:flex-row gap-4 w-full items-center justify-center">
            <a
              href="/pdf/E_a_romana_uman_ped_2025_var_07.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-[#FEBFD2] to-[#FAD4E4] text-gray-800 px-6 py-2 rounded-full text-base font-semibold hover:from-[#fef6f8] hover:to-[#fce9f0] transition-all duration-300 cursor-pointer shadow mb-2"
            >
              Deschide PDF în tab nou
            </a>
            <a
              href="/pdf/E_a_romana_uman_ped_2025_var_07.pdf"
              download
              className="inline-block bg-gradient-to-r from-[#FEBFD2] to-[#FAD4E4] text-gray-800 px-6 py-2 rounded-full text-base font-semibold hover:from-[#fef6f8] hover:to-[#fce9f0] transition-all duration-300 cursor-pointer shadow mb-2"
            >
              Descarcă PDF
            </a>
          </div>
          <div className="w-full aspect-[4/5] min-h-[500px] max-h-[90vh] rounded-lg overflow-hidden border border-white/20 bg-white/5 flex items-center justify-center">
            <iframe
              src="/pdf/E_a_romana_uman_ped_2025_var_07.pdf"
              title="Subiect matematică PDF"
              className="w-full h-full min-h-[500px]"
              style={{ minHeight: 500, height: '90vh', width: '100%', border: 'none' }}
              allowFullScreen
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 