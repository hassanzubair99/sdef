'use client';

import { useState } from 'react';
import StoryGenerator from '@/components/story-generator';
import IntroAnimation from '@/components/intro-animation';
import OutroAnimation from '@/components/outro-animation';

export default function Home() {
  const [appState, setAppState] = useState<'intro' | 'story' | 'outro'>('intro');

  const handleIntroComplete = () => {
    setAppState('story');
  };

  const handleStoryComplete = () => {
    setAppState('outro');
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4 font-body sm:p-6 lg:p-8">
      {appState === 'intro' && <IntroAnimation onComplete={handleIntroComplete} />}
      {appState === 'story' && <StoryGenerator onComplete={handleStoryComplete} />}
      {appState === 'outro' && <OutroAnimation />}
    </main>
  );
}
