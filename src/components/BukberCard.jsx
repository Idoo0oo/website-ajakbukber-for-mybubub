import { motion } from 'framer-motion';

const BukberCard = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative z-10 w-[90%] max-w-[400px] p-8 rounded-[2.5rem] bg-white/40 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_0_rgba(255,182,193,0.3)] flex flex-col items-center text-center gap-6"
    >
      <motion.div
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="text-7xl mb-2 drop-shadow-lg"
      >
        <div className="relative">
          <span className="relative z-10">🥺</span>
          <motion.span 
            className="absolute top-0 right-0 text-3xl"
            animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ⭐
          </motion.span>
        </div>
      </motion.div>

      <div className="space-y-3">
        <h1 className="text-3xl font-bold text-pink-600 tracking-tight">
          Bukber Yukkk 🥺🌙
        </h1>
        <p className="text-pink-500 font-medium leading-relaxed">
          Aku kangen banget tauk... bukber bareng aku yaa hari ini? 🥹
        </p>
      </div>

      {children}
    </motion.div>
  );
};

export default BukberCard;
