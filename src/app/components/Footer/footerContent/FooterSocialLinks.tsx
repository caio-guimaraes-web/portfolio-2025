import {
  GitIcon,
  LinkedinIcon,
  BehanceIcon,
  WhatsAppIcon,
} from '@/app/components/reusable/socialMediaIconComp/SocialMediaIconsComp'

export function FooterSocialLinks() {
  return (
    <div className="flex gap-6">
      <GitIcon className="w-9 h-9 hover:text-cyan-400 cursor-pointer transition-colors" />
      <LinkedinIcon className="w-9 h-9 hover:text-cyan-400 cursor-pointer transition-colors" />
      <BehanceIcon className="w-9 h-9 hover:text-cyan-400 cursor-pointer transition-colors" />
      <WhatsAppIcon className="w-9 h-9 hover:text-cyan-400 cursor-pointer transition-colors" />
    </div>
  )
}
