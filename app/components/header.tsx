import Link from 'next/link'
import { DevBryLogo } from './devbry-logo'

export function Header() {
  return (
    <>
      <h1 className="mb-4">
        <Link
          href="/"
          aria-label="DevBry home"
          className="inline-block w-full max-w-[min(100%,30rem)] sm:max-w-[min(100%,28rem)] transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-400"
        >
          <DevBryLogo className="block h-auto w-full" />
        </Link>
      </h1>
      <p className="mb-4">{`Games, Web, and stuff.`}</p>
    </>
  )
}

export default Header;