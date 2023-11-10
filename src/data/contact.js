import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faBehance, faMedium, faYoutube } from '@fortawesome/free-brands-svg-icons';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://www.linkedin.com/in/sumanastani/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://github.com/SimonAstani',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.behance.net/sumanastani/',
    label: 'Behance',
    icon: faBehance,
  },
  {
    link: 'https://www.youtube.com/channel/UCqh8JjmgZidLo7nt0LBUVaw',
    label: 'Youtube',
    icon: faYoutube,
  },
  {
    link: 'https://medium.com/@SumanAstani',
    label: 'Medium',
    icon: faMedium,
  },
  {
    link: 'https://www.instagram.com/suman.astani/',
    label: 'Instagram',
    icon: faInstagram,
  },

  {
    link: 'https://twitter.com/SumanAstani',
    label: 'Twitter',
    icon: faTwitter,
  },
  {
    link: 'mailto:sumanastani@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
