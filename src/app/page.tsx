import Cards from '@/components/Cards';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });

function MyApp() {
  return (
    <div className={`${montserrat.variable}`}>
      
      <div className="bg-gray-800 min-h-screen text-white font-sans">

          {/* nvbar */}
          <Navbar />

          {/* Hro Section */}
          <Hero />

          {/* Crds Section */}
          <Cards />

      </div>

    </div>
  );
}


export default MyApp;
