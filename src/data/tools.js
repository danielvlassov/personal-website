/* eslint-disable @next/next/no-img-element */
import { VSCodeIcon, ITermIcon, FigIcon } from '@/components/Common/Icons';
import rectangle from '@/public/images/tools/rectangle.png';


const data = [
  {
    logo: <VSCodeIcon />,
    title: 'VSCode',
    description: 'My code editor.',
    link: 'https://code.visualstudio.com',
    tag: {
      type: 'success',
      label: 'OPEN SOURCE',
    },
  },
  {
    logo: <ITermIcon />,
    title: 'iTerm2',
    description: 'iTerm2 (Terminal Replacement) using Oh My Zsh & Powerlevel10k.',
    link: 'https://iterm2.com',
    tag: {
      type: 'success',
      label: 'OPEN SOURCE',
    },
  },
  {
    logo: <FigIcon />,
    title: 'Fig',
    description: 'Fig Adds IDE-style autocomplete to your existing terminal.',
    link: 'https://fig.io',
    tag: {
      type: 'success',
      label: 'OPEN SOURCE',
    },
  },
  {
    logo: <img src={rectangle.src} alt="rectangle logo" />,
    title: 'Rectangle',
    description: 'Move and resize windows in macOS using keyboard shortcuts or snap areas.',
    link: 'https://rectangleapp.com',
    tag: {
      type: 'success',
      label: 'OPEN SOURCE',
    },
  },
];

export default data;
