'use client'

import { useState } from 'react'
import { BetaSignupModal } from './BetaSignupModal'

interface BetaSignupButtonProps {
  className?: string
  children?: React.ReactNode
}

export function BetaSignupButton({ className, children }: BetaSignupButtonProps) {
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
      <BetaSignupModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
