import Image from 'next/image';
import avatar from '@/public/images/avatar.webp';

import CircleSpring from '@/components/Common/CircleSpring';
import Link from '@/components/Common/Link';

import contact from '@/data/contact';

// Dashboard imps
import { SWRConfig } from 'swr';
import { getReadStats } from '@/lib/wakatime';
import { getGithubUser } from '@/lib/github';
import CodingActive from '@/components/CodingActive';
import Contributions from '@/components/Contributions';
HomePage.description = `Hey, I'm Daniel Vlassov!`;

export default function HomePage(props) {
  const fallback = { props }
  return (
    <section>
    <section className="relative flex flex-col-reverse items-start gap-4 rounded-md dark:bg-opacity-0 sm:flex-row sm:pt-20">
      <div className="flex flex-1 flex-col gap-y-2">
        <h1 className="pb-2 text-2xl sm:text-4xl">Hey, I'm Daniel Vlassov 👋</h1>
        <h2 className="text-md text-gray-700 dark:text-gray-200">
          <span>Computer Science Student at </span>
          <Link href="https://carleton.ca/scs/">
            <span className="font-semibold">Carleton University</span>
          </Link>
        </h2>

        <ul className="flex flex-col pb-8 items-start justify-center gap-2">
          {contact.map((item) => (
            <Link key={item.link} href={item.link} aria-label={item.label}>
              <li className="flex items-center gap-2 py-2 transition duration-200 ease-in-out hover:text-gray-400">
                {item.icon}
                {item.title}
              </li>
            </Link>
          ))}
        </ul>
      </div>

      <CircleSpring>
        <div className="my-4 flex h-99 w-44 items-center justify-center sm:my-0 sm:mx-21 sm:h-48 sm:w-48">
          <Image
            className="rounded-full"
            alt="Daniel Vlassov"
            unoptimized
            objectFit="cover"
            src={avatar.src}
            width={400}
            height={400}
          />
        </div>
      </CircleSpring>
    </section>
{/*
    <SWRConfig value={{ fallback }}>
    <div className="flex flex-col gap-y-6">
      <div className="border-t border-gray-500 pt-4">
        <Contributions />
      </div>

      <div className="border-t border-gray-500 pt-4">
        <CodingActive />
      </div>

    </div>
  </SWRConfig>

*/}
  </section>
  );
}

{/*
export async function getStaticProps() {
  const readStats = await getReadStats();
  const githubUser = await getGithubUser();

  return {
    props: {
      fallback: {
        '/api/read-stats': readStats.data,
        '/api/github': githubUser.data,
      },
    },
    revalidate: 60,
  };
}

*/}