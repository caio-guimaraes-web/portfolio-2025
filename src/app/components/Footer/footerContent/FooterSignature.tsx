import Image from 'next/image'

export function FooterSignature() {
  return (
    <div className="flex flex-col sm:flex-row-reverse items-center gap-2 opacity-80">
      <Image
        src="https://avatars.githubusercontent.com/u/58598762?v=4"
        alt="Caio Guimarães"
        width={48}
        height={48}
        className="rounded-full"
      />
      <span className="text-sm text-neutral-400">
        made with <span className="text-lime-300">♥</span>
      </span>
    </div>
  )
}
