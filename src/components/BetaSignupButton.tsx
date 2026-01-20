'use client'

import { useState } from 'react'
import { BetaSignupModal, type AppType } from './BetaSignupModal'

interface BetaSignupButtonProps {
  className?: string
  children?: React.ReactNode
  app?: AppType
}

export function BetaSignupButton({ className, children, app = 'awareness' }: BetaSignupButtonProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={className}
      >
        {children || 'Join the Beta'}
      </button>
      <BetaSignupModal isOpen={isOpen} onClose={() => setIsOpen(false)} app={app} />
    </>
  )
}
