import { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import FloatingHearts from './components/FloatingHearts';
import BukberCard from './components/BukberCard';
import ChoiceButtons from './components/ChoiceButtons';
import ConfettiEffect from './components/ConfettiEffect';

const MySwal = withReactContent(Swal);

function App() {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleAccept = () => {
    setShowConfetti(true);
    
    MySwal.fire({
      title: <span className="text-pink-600 font-bold">Yeyyyy akhirnya kamu ikutttt!!! 🥳💖</span>,
      html: <p className="text-pink-500">Note: klik kirim pesan bubb</p>,
      icon: 'success',
      confirmButtonText: 'Kirim Pesan ke ido ganteng',
      confirmButtonColor: '#ec4899',
      background: '#fff',
      padding: '2rem',
      borderRadius: '2rem',
      allowOutsideClick: false,
    }).then((result) => {
      if (result.isConfirmed) {
        // Replace this with YOUR (the user's) phone number so she sends it to you
        const myNumber = '6283837534805'; 
        const message = 'iyaa sayangku, cintaku, gantengku, aku mau ikuttt';
        const encodedMessage = encodeURIComponent(message);
        window.location.href = `https://wa.me/${myNumber}?text=${encodedMessage}`;
      }
    });
  };

  return (
    <main className="relative min-h-screen w-full bg-gradient-to-br from-pink-100 to-purple-200 flex items-center justify-center overflow-hidden font-sans">
      {/* Background Layer */}
      <FloatingHearts />
      
      {/* Confetti Layer */}
      {showConfetti && <ConfettiEffect />}

      {/* Content Layer */}
      <BukberCard>
        <ChoiceButtons onAccept={handleAccept} />
      </BukberCard>

      {/* Attribution/Footer */}
      <footer className="absolute bottom-6 text-pink-400/60 text-sm font-medium">
        Made with ❤️ for my bubub
      </footer>
    </main>
  );
}

export default App;
