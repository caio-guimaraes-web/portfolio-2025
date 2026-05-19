import Link from 'next/link'
import { IconType } from './SocialMediaTypes'

interface SocialMediaLinkProps {
  url: string
  Icon: IconType
}

export function SocialMediaLink({ url, Icon }: SocialMediaLinkProps) {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-cyan-400 transition-colors"
    >
      <Icon className="w-9 h-9" />
    </Link>
  )
}
