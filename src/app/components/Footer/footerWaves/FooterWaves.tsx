import dynamic from 'next/dynamic'

const WaveLayer = dynamic(() => import('./WaveLayer.client'), {
  ssr: false,
  loading: () => <div className="w-full h-full" />,
})

export function FooterWaves() {
  return (
    <div className="relative w-full overflow-hidden h-[260px] md:h-[320px]">
      <WaveLayer />
    </div>
  )
}
