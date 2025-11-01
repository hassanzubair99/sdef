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
  {
    imageUrl: 'https://i.ibb.co/7dttTGS8/Screenshot-2025-11-01-155641.png',
    imageAlt: 'A beautiful picture of a face',
    imageHint: 'face portrait',
    title: 'A PORTRAIT OF BEAUTY',
    subtitle: 'BY YOUR LOVE HASSAN 💖',
    poem: `✨🌹 Uske Chehre Ki Tasveer – Ek Poori Dastaan-e-Husn 🌹✨

Uska chehra dekh kar lagta hai jaise kisi ne pyaar ki ek poori kitaab 📖 ek chhoti si jagah mein likh di ho... Uski peshani 🧠 ek saaf patthar ki tarah chamakti hai, jispar husn ki dastaan likhi hui hai. Uski aankhein 👁️👁️ "VECTORS" ki tarah seedhi aapke dil ki taraf ishāra karti hain, aur ek hi nazar mein aapke khayalaton ko apni gehrai mein le leti hain.

Uski naak 🖤 ek khoobsurat kajal-sī lakeer hai, jo uske chehre ko ek anokhi shaan deti hai. Uski gaal 🌸 gulāb ki pankhadiyon jaisi narm aur surkh hain, jaise halki si thandī hawa ne unhe chhu kar rang bhar diya ho...

Aur phir aati hai uski muskurāhat... 😊
Woh jab muskuraati hai to lagta hai jaise subah kī pehli kiran ☀️ pahādon se takrā kar saare jahaan ko roshan kar deti hai. Uske hont 🌹 gulāb ke phool jaisi surkh hai, jo muskurahat ke waqt khilte hain, jaise koi ne kahe — "Yeh khushboo toh sirf tumhare liye hai..." Uske daant ⚪ chandī ke motiyon jaisay chamakte hain, aur jab woh hans deti hai, toh lagta hai jaise saari duniya tham si jaati hai... ❤️

Uski awaaz 🎵 ek narm si sarod jaisi hai, jo har lafz ko geet bana kar aapke kaanon se hote hue aapke dil tak pahunch jaati hai. Uski muskurahat ek aisi duaa hai jo bin bole hi poori ho jaati hai... 🙏✨

Haya bhari hai woh muskurāhat uski 🌸
Jaise khilta gulab, jaise ujāla subah ka ☀️
Dekh kar use lagta hai jaise mil gayi ho
Zindagi ki har khushi ek saath muskura kar... 😊💖

Uske honton pe jo muskān rehti hai 🌹
Woh meri duaaon ka asar rehti hai 🙏
Haya ki woh bijli, woh sharmāhat si
Mere liye toh woh ibaadat ki tarah hai... ✨❤️`,
  },
  {
    imageUrl: 'https://i.ibb.co/dqt24Bk/Screenshot-2025-11-01-160414.png',
    imageAlt: 'A composite image of beauty',
    imageHint: 'beauty collage',
    title: 'A COMPLETE MASTERPIECE',
    subtitle: 'BY YOUR LOVE HASSAN 💖',
    poem: `🌿 Aapki Zulfen – Baalon Ki Kahaani
Aapki zulfen jaise shaam ki saaya-daar ghataein hain 🌥️, jo maathe par lahrati hui aapke chehre ko ek raunaq-bakhsh nazakat deti hain. Woh jab hawa mein lehrati hain, toh lagta hai jaise koi kalaakar apne brush se koi jawaan nazm likh raha ho 🎨. Har baal ek misra hai, har lat ek alfaaz... jo aapki haya ko chhupate hue bhi zaahir kar dete hain.

👁️ Aapki Aankhein – Nigaahon Ki Dastaan
Aapki aankhein woh jaadu-bhari kitaab hain jinko padh kar insaan khud ko bhool jaata hai 📖💫. In mein ek gehrai hai jaise samandar ki gehrayi, ek aas hai jaise subah ki pehli kiran, aur ek sukoon hai jaise baarish ki boonden patton par 🍃. Yeh aankhein na sirf dekhti hain, balki mehsoos karaati hain... har nazar pyaar ka paigaam hai, har jhalk aas ka sandesh.

😊 Aapki Muskurahat – Khushi Ka Geet
Aapki muskurahat toh woh ajeeb jaadu hai jo duniya ke sare ghamon ko hara deti hai 🌞. Jaise andheri raat mein chaand ki roshni chamak uthti hai, waise hi aapke honton ki yeh halki-si jhalk zindagi ke har rang ko ujwal kar deti hai 🌙. Yeh muskurahat na sirf aapke chehre ko roshan karti hai, balki har dekhne wale ke dil ko bhi mehka jaati hai... jaise khilte gulab ki khushboo hawa mein ghul jaati hai 🌹.

🤲 Aapke Haath – Imtihaan Ki Nishani
Aapke haath woh nazuk kaliyan hain jo dua bhi hain aur duaaon ka asar bhi 🙏✨. Inme ek lehzati hui komalta hai jaise koi shehzadi ke haath, magar inme woh taqat bhi hai jo duniya badal sakti hai 💪. Ye woh haath hain jo na sirf seva kar sakte hain, balki kisi ke aankhon ko bhi pounch sakte hain... jo na sirf tham sakte hain, balki jod bhi sakte hain ❤️.

✨ Ik Akhiri Alfaz
Aapki zulfon ki shaan, aankhon ki gehraai, muskurahat ki mithas aur haathon ki nazakat - yeh sab milkar aapko woh khoobsurat banana bana deti hain jo na sirf dekhe ja sakti hai, balki mehsoos bhi ki ja sakti hai 🌸. Aapki yeh khoobsurti kisi shayri ki tarah hai jo padhne se nahi, balki jeene se mehsoos hoti hai... ❤️📜`,
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
