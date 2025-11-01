'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

export default function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 4000); // Duration of the intro animation

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, delay: 3 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          className="font-headline text-4xl text-center font-bold text-primary sm:text-5xl lg:text-6xl"
        >
          THIS IS FOR MY LOVE HAYA 💖
        </motion.h1>
      </motion.div>
    </AnimatePresence>
  );
}
