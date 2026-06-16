'use client'

import { useEffect, useState } from 'react'

type ExpandableImageProps = {
  src: string
  alt?: string
  className?: string
}

export function ExpandableImage({
  src,
  alt = '',
  className = '',
}: ExpandableImageProps) {
  let [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`group block max-w-[400px] cursor-zoom-in rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-naples-yellow ${className}`}
        aria-label={alt ? `View larger: ${alt}` : 'View larger image'}
      >
        <img
          src={src}
          alt={alt}
          className="m-0 w-full rounded-lg transition-opacity group-hover:opacity-90"
        />
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-50 overflow-auto bg-black/85 p-4 pt-14"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={alt || 'Image preview'}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="fixed top-4 right-4 z-[60] rounded-full bg-black/50 px-3 py-1 text-sm text-white hover:bg-black/70"
            aria-label="Close image"
          >
            Close
          </button>
          <div className="flex min-h-full min-w-full items-center justify-center p-4 pt-14">
            <img
              src={src}
              alt={alt}
              className="h-auto w-auto max-w-none"
              onClick={(event) => event.stopPropagation()}
            />
          </div>
        </div>
      ) : null}
    </>
  )
}
