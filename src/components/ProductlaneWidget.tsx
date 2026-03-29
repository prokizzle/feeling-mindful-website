'use client'

import Script from 'next/script'

declare global {
  interface Window {
    Productlane: {
      queue: Record<string, { args: IArguments }>
      init: (opts: { widgetKey: string }) => void
      open: () => void
      close: () => void
      toggle: () => void
      set: (...args: unknown[]) => void
      on: (...args: unknown[]) => void
      off: (...args: unknown[]) => void
      enable: () => void
      disable: () => void
    }
  }
}

const WIDGET_KEY = '6e054f9f-b445-4afc-a702-3cb52dff4e67'

export function ProductlaneWidget() {
  return (
    <>
      <Script
        id="productlane-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            ;((w)=>{const P=(w.Productlane={queue:{}});["set","open","close","toggle","on","off","init","enable","disable"].forEach(m=>{P[m]=(n=>function(){P.queue[n]={args:arguments}})(m)})})(window);
            Productlane.init({ widgetKey: "${WIDGET_KEY}" });
          `,
        }}
      />
      <Script
        src="https://widget.productlane.com/latest.productlane-widget.min.js"
        strategy="afterInteractive"
      />
    </>
  )
}

export function ProductlaneButton({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={() => window.Productlane?.open()}
      className={className}
    >
      {children}
    </button>
  )
}
