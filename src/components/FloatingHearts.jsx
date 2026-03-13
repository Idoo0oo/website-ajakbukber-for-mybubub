import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const FloatingHearts = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const initialHearts = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * (30 - 10) + 10,
      duration: Math.random() * (10 - 5) + 5,
      delay: Math.random() * 5,
    }));
    setHearts(initialHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: '110vh', x: `${heart.x}vw`, opacity: 0, scale: 0 }}
          animate={{
            y: '-10vh',
            opacity: [0, 0.6, 0.6, 0],
            scale: [0.5, 1, 1, 0.5],
            rotate: [0, 45, -45, 0],
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: "linear"
          }}
          className="absolute text-pink-300/40 select-none"
          style={{ fontSize: heart.size }}
        >
          ❤️
        </motion.div>
      ))}
      
      {/* Sparkles */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,182,193,0.1)_0%,transparent_50%)]" />
    </div>
  );
};

export default FloatingHearts;
