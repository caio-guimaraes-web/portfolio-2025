import {
  GitIcon,
  LinkedinIcon,
  BehanceIcon,
  WhatsAppIcon,
} from '@/app/components/reusable/socialMediaIconComp/SocialMediaIconsComp'

export const socialMediaLinks = [
  {
    name: 'GitHub',
    Icon: GitIcon,
    url: 'https://github.com/caio-guimaraes-web',
  },
  {
    name: 'LinkedIn',
    Icon: LinkedinIcon,
    url: 'https://www.linkedin.com/in/caio--guimaraes/',
  },
  {
    name: 'Behance',
    Icon: BehanceIcon,
    url: 'https://www.behance.net/caio_guimaraes',
  },
  {
    name: 'WhatsApp',
    Icon: WhatsAppIcon,
    url: 'https://wa.me/5548984719950',
  },
] as const
