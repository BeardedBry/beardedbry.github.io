import { ArtworkGrid } from 'app/components/artwork-grid'

export const metadata = {
  title: 'Artwork',
  description: '3D artwork and Blender renders.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Artwork</h1>
      <ArtworkGrid />
    </section>
  )
}
