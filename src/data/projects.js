import bananovalue from '@/public/images/projects/bananovalue.webp';
import pWeb from '@/public/images/projects/p-web.webp';
const data = [

  {
    image: pWeb.src,
    title: 'danielvlassov.ca',
    description: 'My personal website from March 2022!',
    tag: 'Next.js, Tailwindcss, MDX, Vercel',
    links: {
      repo: 'https://www.github.com/danielvlassov/personal-website',
      demo: 'https://www.danielvlassov.ca',
    },
  },
  {
    image: bananovalue.src,
    title: '$BAN Price Tracker',
    description: 'A twitter bot with 150+ followers that tracks the price of $BAN. \n Code was sadly lost. [2021] ',
    tag: 'Python',
    links: {
      repo: 'https://twitter.com/bananovalue',
      demo: 'https://twitter.com/bananovalue',
    },
  },

];

export default data;
