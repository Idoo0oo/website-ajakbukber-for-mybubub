import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Swal from 'sweetalert2';

const messages = [
  "Yakin ga ikut? 🥺",
  "Jangan dong...",
  "Aku sedih loh :(",
  "Masa ga kangen sih...",
  "Klik ikut aja deh 🥹",
  "Ih kok gitu sih? 😭",
  "Jahat bangett...",
  "Pliss ikut yaa? ❤️"
];

const ChoiceButtons = ({ onAccept }) => {
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [noAttempts, setNoAttempts] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [noOpacity, setNoOpacity] = useState(1);
  const [noScale, setNoScale] = useState(1);
  const [isNoVisible, setIsNoVisible] = useState(true);

  const moveButton = () => {
    // Random position within a safe area for mobile viewport
    const newX = (Math.random() - 0.5) * 200;
    const newY = (Math.random() - 0.5) * 200;
    
    setNoPos({ x: newX, y: newY });
    setNoAttempts(prev => prev + 1);
    setMessageIndex(prev => (prev + 1) % messages.length);
    setNoScale(prev => Math.max(0.2, prev - 0.1));
    setNoOpacity(prev => Math.max(0, prev - 0.15));

    if (noAttempts >= 8) {
      setIsNoVisible(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <AnimatePresence mode="wait">
        <motion.p
          key={messageIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="text-pink-400 font-medium h-6"
        >
          {messages[messageIndex]}
        </motion.p>
      </AnimatePresence>

      <div className="flex flex-col gap-4 w-full px-4 relative min-h-[140px] items-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onAccept}
          className="w-full py-4 rounded-3xl bg-pink-500 text-white font-bold text-xl shadow-lg shadow-pink-200 active:bg-pink-600 transition-colors z-20"
        >
          Ikut 💖
        </motion.button>

        {isNoVisible && (
          <motion.button
            animate={{ 
              x: noPos.x, 
              y: noPos.y,
              opacity: noOpacity,
              scale: noScale
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onMouseEnter={moveButton}
            onClick={moveButton}
            className="w-full py-4 rounded-3xl bg-purple-100 text-purple-400 font-bold text-xl border-2 border-purple-200 select-none touch-none"
          >
            Ga Ikut 🙃
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default ChoiceButtons;
