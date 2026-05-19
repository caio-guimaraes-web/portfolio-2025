import { socialMediaLinks } from '@/data/socialMediaLinks.data'
import { SocialMediaLink } from '@/app/components/reusable/socialMediaIconComp/SocialMediaLink'

export function FooterSocialLinks() {
  return (
    <div className="flex gap-6">
      {socialMediaLinks.map(({ name, Icon, url }) => (
        <SocialMediaLink key={name} Icon={Icon} url={url} />
      ))}
    </div>
  )
}
