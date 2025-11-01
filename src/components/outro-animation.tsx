'use client';

import { motion, AnimatePresence } from 'framer-motion';

export default function OutroAnimation() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background text-center"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1, ease: 'easeOut' }}
          className="font-headline text-4xl font-bold text-primary sm:text-5xl lg:text-6xl"
        >
          Thanks to be in my life
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2, ease: 'easeOut' }}
          className="mt-4 font-headline text-2xl font-bold text-primary sm:text-3xl lg:text-4xl"
        >
          your love hassan 💖
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
}
