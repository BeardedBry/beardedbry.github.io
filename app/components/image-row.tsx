import { ExpandableImage } from './expandable-image'

type ImageItem = {
  src: string
  alt?: string
}

type ImageRowProps = {
  images?: ImageItem[]
  cols?: 2 | 3
  children?: React.ReactNode
}

const colClasses = {
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3',
}

export function ImageRow({ images, cols = 2, children }: ImageRowProps) {
  let gridClass = colClasses[cols] ?? colClasses[2]

  if (images?.length) {
    return (
      <div className={`my-4 grid ${gridClass} gap-4`}>
        {images.map((image, index) => (
          <ExpandableImage
            key={index}
            src={image.src}
            alt={image.alt}
            className="max-w-full"
          />
        ))}
      </div>
    )
  }

  return (
    <div
      className={`my-4 grid ${gridClass} gap-4 [&_button]:max-w-full [&_p]:m-0`}
    >
      {children}
    </div>
  )
}
