import dynamic from 'next/dynamic'
import './waves.css'

const WaveLayer = dynamic(() => import('./WaveLayer.client'), {
  ssr: false,
  loading: () => <div className="wave-placeholder" />,
})

export function FooterWaves() {
  return (
    <div className="waves-wrapper">
      <WaveLayer />
    </div>
  )
}
