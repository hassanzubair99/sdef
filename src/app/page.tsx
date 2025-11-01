'use client';

import { useState, useEffect } from 'react';
import StoryGenerator from '@/components/story-generator';
import IntroAnimation from '@/components/intro-animation';

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4 font-body sm:p-6 lg:p-8">
      {showIntro ? (
        <IntroAnimation onComplete={handleIntroComplete} />
      ) : (
        <StoryGenerator />
      )}
    </main>
  );
}
