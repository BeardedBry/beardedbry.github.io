type DevBryLogoProps = {
  className?: string
}

/** Stable id: only one DevBryLogo should mount per document. */
const FILTER_ID = 'devbry-logo-grunge'

/**
 * Vector wordmark: transparent background, scales with CSS width/height.
 */
export function DevBryLogo({ className }: DevBryLogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 440 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      style={{ marginLeft: '-8px' }}
    >
      <defs>
        <filter
          id={FILTER_ID}
          x="-8%"
          y="-8%"
          width="116%"
          height="116%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="2"
            seed="3"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="0.85"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
      <g filter={`url(#${FILTER_ID})`}>
        <text
          x="6"
          y="74"
          fill="#c084fc"
          fillOpacity={0.55}
          fontFamily="Impact, Haettenschweiler, 'Arial Narrow Bold', Arial, sans-serif"
          fontSize={76}
          fontWeight={700}
          letterSpacing="-0.03em"
          transform="translate(2.5 1.5)"
        >
          DevBry
        </text>
        <text
          x="6"
          y="74"
          fill="#2dd4bf"
          fillOpacity={0.45}
          fontFamily="Impact, Haettenschweiler, 'Arial Narrow Bold', Arial, sans-serif"
          fontSize={76}
          fontWeight={700}
          letterSpacing="-0.03em"
          transform="translate(-2 -1.5)"
        >
          DevBry
        </text>
        <text
          x="6"
          y="74"
          fill="#fafafa"
          fontFamily="Impact, Haettenschweiler, 'Arial Narrow Bold', Arial, sans-serif"
          fontSize={76}
          fontWeight={700}
          letterSpacing="-0.03em"
          paintOrder="stroke fill"
          stroke="#27272a"
          strokeOpacity={0.35}
          strokeWidth={0.6}
        >
          DevBry
        </text>
      </g>
    </svg>
  )
}
