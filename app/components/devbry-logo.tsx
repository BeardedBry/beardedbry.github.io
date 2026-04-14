type DevBryLogoProps = {
  className?: string
}

/** Stable id: only one DevBryLogo should mount per document. */
const FILTER_ID = 'devbry-logo-grunge'
const LOGO_FONT_FAMILY =
  "'Molot', Impact, Haettenschweiler, 'Arial Narrow Bold', Arial, sans-serif"

const title = "Web Dev Bry";
const letterSpacing = "-0.03rem";
const wordSpacing = "-1.25rem";

/**
 * Vector wordmark: transparent background, scales with CSS width/height.
 */
export function DevBryLogo({ className }: DevBryLogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 720 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
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
          fontFamily={LOGO_FONT_FAMILY}
          fontSize={76}
          fontWeight={100}
          letterSpacing={letterSpacing}
          wordSpacing={wordSpacing}
          transform="translate(2.5 1.5)"
        >
          {title}
        </text>
        <text
          x="6"
          y="74"
          fill="#2dd4bf"
          fillOpacity={0.45}
          fontFamily={LOGO_FONT_FAMILY}
          fontSize={76}
          fontWeight={100}
          letterSpacing={letterSpacing}
          wordSpacing={wordSpacing}
          transform="translate(-2 -1.5)"
        >
          {title}
        </text>
        <text
          x="6"
          y="74"
          fill="#fafafa"
          fontFamily={LOGO_FONT_FAMILY}
          fontSize={76}
          fontWeight={100}
          letterSpacing={letterSpacing}
          wordSpacing={wordSpacing}
          paintOrder="stroke fill"
          stroke="#27272a"
          strokeOpacity={0.35}
          strokeWidth={0.6}
        >
          {title}
        </text>
      </g>
    </svg>
  )
}
