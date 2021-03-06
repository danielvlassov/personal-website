import { PaperAirplaneIcon } from '@heroicons/react/solid';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '@/components/Common/Icons';

export const mail = {
  link: 'mailto:danielvlassov@gmail.com',
  title: 'danielvlassov@gmail.com',
  label: 'Gmail',
  icon: <PaperAirplaneIcon className="h-6 w-6 translate-x-[3px] translate-y-[-2px] rotate-45" />,
};

export const github = {
  link: 'https://github.com/danielvlassov',
  title: 'github.com/danielvlassov',
  label: 'Github',
  icon: <GithubIcon className="h-6 w-6" />,
};

export const linkedIn = {
  link: 'https://www.linkedin.com/in/danielvlassov/',
  title: 'linkedin.com/in/danielvlassov',
  label: 'Linkedin',
  icon: <LinkedinIcon className="h-6 w-6" />,
};

const data = [mail, github, linkedIn];

export default data;
