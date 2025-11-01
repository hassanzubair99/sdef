'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const STATIC_IMAGE_URL = 'https://i.ibb.co/5gd7rTpv/Screenshot-2025-11-01-132005.png';

export default function StoryGenerator() {
  const poem = `Tumhari in aankhon mein kuch to aisa raaz chhupa hai, 💫
Jise dekh kar dil ko ek sukoon milta hai…
Jaise har gham, har pareshaani un aankhon ke noor mein kho jaati ho 💖
Unki chamak mein ek masoomi, ek gehraai hai —
jo sirf dekhne wala nahi, mehsoos karne wala samajh sakta hai... 🌙

Haya, tumhari aankhon ka jaadu kuch aur hi hai... ✨
Inmein sharam bhi hai, mohabbat bhi, aur ek khamosh izhaar bhi 💞
Tum jab muskurati ho na, to lagta hai jaise chand ne zameen par nazar daali ho 🌸
Aur jab aankhen jhuka leti ho, to dil ke andar ek toofan uthta hai... 💌

“Haya ki aankhon mein kuch to baat hai,
Jo dekh le wo khona chahe,
Un aankhon ki chamak mein Rab ka noor hai,
Aur unki gehraai mein pyaar ka samundar bas gaya hai…” 🌊💖

“Un aankhon ne jo dekha, to dil beqarar ho gaya,
Haya ne ek baar muskuraya, to khuda bhi sharma gaya…” 😍✨`;

  return (
    <div className="w-full max-w-4xl">
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }}>
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-3xl text-center">Picture Story</CardTitle>
            <CardDescription className="text-center">A story about her eyes.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                <div className="prose prose-lg text-foreground flex-grow">
                  <p className="whitespace-pre-wrap leading-relaxed font-bold">{poem}</p>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                <div className="w-full aspect-square relative">
                  <Image
                    src={STATIC_IMAGE_URL}
                    alt="A beautiful picture of eyes"
                    fill
                    className="rounded-md object-contain"
                    data-ai-hint="eyes close-up"
                  />
                </div>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
