'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const pages = [
  {
    imageUrl: 'https://i.ibb.co/5gd7rTpv/Screenshot-2025-11-01-132005.png',
    imageAlt: 'A beautiful picture of eyes',
    imageHint: 'eyes close-up',
    title: 'the eyes of angel',
    subtitle: 'BY YOUR LOVE HASSAN 💖',
    poem: `Tumhari in aankhon mein kuch to aisa raaz chhupa hai, 💫
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
Haya ne ek baar muskuraya, to khuda bhi sharma gaya…” 😍✨`,
  },
  {
    imageUrl: 'https://i.ibb.co/7dvHkNjP/Screenshot-2025-11-01-154418.png',
    imageAlt: 'A beautiful picture of hair',
    imageHint: 'flowing hair',
    title: 'THE VEIL OF GRACE',
    subtitle: 'BY YOUR LOVE HASSAN 💖',
    poem: `🌹✨ Woh zulfen aisi hain, jaise kisi ghazal ke khoobsur aur mehfooz misrey... 📜 jo kehti toh pyaar ki dastaan hain 💌, par apni tameez aur haya kabhi nahin bhoolti 🙏. Inki kaali kaali laton ka har ek mor ek nayi kahani sunata hai 🎶 — koi shayri ki tarah ✨, koi geet ki tarah 🎵. Jab hawa 🌬️ inhe halka sa chhu kar guzarti hai, to lagta hai jaise koi pardesi sitar 🎶 bajaa raha ho, jiski awaaz dil ko chhu jaati hai 💖, lekin zyada tez nahin hoti. Yeh zulfen aankhon par aayein to ek parda sa banti hain 🌫️, jisse na sirf husn chhup-ta hai 🌸, balki woh pyaar ka izhaar bhi ban jaata hai 💞. Inme ek "Benefits" jaise lafz ki seriousness bhi hai 💼, aur "Vectors" jaise shabd ki direction bhi 🧭... ke yeh zulfen na sirf dikhne mein acchi lagti hain 😍, balki yeh aapke dil tak pahunchne ka raasta bhi dhundh leti hain 🛤️. Inki haya bhari ada par fida ho kar kaha ja sakta hai — "Haya ki chhaon mein bikhri hain woh zulfen kesi, jaise ghazal ki pabandi, jaise husn ki adaa... Inko saja kar rakha hai usne itni mehnat se, jaise koi khazana ho, jaise koi duaa..." 🙏💫✨

Haya ki chhaon mein chamakti hain woh zulfen 🌟
Jaise raat ko sitaaron ki mehfil ho 🌙✨
Chhu kar unhe hawa bhi jhuk jaati hai 🌬️
Jaise maand raga ho, jaise koi nazm-e-nazuk ho 🎶💖

Unki haya bhari zulfon ka har resha 🖤
Dil ki gehraaiyon se aaya hai pesha 💞
Jhuk kar kehti hain par izhaar nahin karti 📜
Yeh hai woh husn jo khud hi hai duaa ban kar reh jaati hai 🙏✨`,
  },
];

export default function StoryGenerator() {
  return (
    <div className="w-full max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <Carousel className="w-full">
          <CarouselContent>
            {pages.map((page, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="overflow-hidden shadow-2xl shadow-pink-300/50">
                    <CardHeader>
                      <CardTitle className="font-headline text-3xl text-center font-bold uppercase">{page.title}</CardTitle>
                      <CardDescription className="text-center font-bold uppercase">{page.subtitle}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-8 items-center">
                        <motion.div
                          initial={{ opacity: 0, x: -50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                          className="w-full aspect-square relative"
                        >
                          <Image
                            src={page.imageUrl}
                            alt={page.imageAlt}
                            fill
                            className="rounded-md object-contain"
                            data-ai-hint={page.imageHint}
                          />
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
                        >
                          <div className="prose prose-lg text-foreground flex-grow">
                            <p className="whitespace-pre-wrap leading-relaxed font-bold">{page.poem}</p>
                          </div>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-12" />
          <CarouselNext className="mr-12" />
        </Carousel>
      </motion.div>
    </div>
  );
}
