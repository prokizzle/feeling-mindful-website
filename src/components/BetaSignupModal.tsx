'use client'

import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '@/lib/firebase'

export type AppType = 'awareness' | 'simple-rituals'

interface BetaSignupModalProps {
  isOpen: boolean
  onClose: () => void
  app?: AppType
}

const platforms = ['iOS', 'Android', 'Both']
const experienceLevels = ['New to meditation', 'Some experience', 'Regular practice']

const appConfig: Record<AppType, {
  title: string
  description: string
  successMessage: string
  showPlatform: boolean
  showExperience: boolean
}> = {
  awareness: {
    title: 'Join the Awareness Beta',
    description: 'Get early access to Awareness and help shape the future of mindful living.',
    successMessage: 'Thanks for signing up for the Awareness beta. We\'ll be in touch soon with access details.',
    showPlatform: true,
    showExperience: true,
  },
  'simple-rituals': {
    title: 'Join the Simple Rituals Beta',
    description: 'Get early access to Simple Rituals and help us build better routines.',
    successMessage: 'Thanks for signing up for the Simple Rituals beta. We\'ll be in touch soon with access details.',
    showPlatform: false,
    showExperience: false,
  },
}

export function BetaSignupModal({ isOpen, onClose, app = 'awareness' }: BetaSignupModalProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [platform, setPlatform] = useState('')
  const [experience, setExperience] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  const config = appConfig[app]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      await addDoc(collection(db, 'beta-testers'), {
        name,
        email,
        platform: config.showPlatform ? platform : 'iOS',
        experience: config.showExperience ? experience : null,
        app,
        createdAt: serverTimestamp(),
        invited: false,
        userId: null,
      })
      setIsSuccess(true)
    } catch (err) {
      console.error('Error adding beta tester:', err)
      setError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    if (!isSubmitting) {
      onClose()
      // Reset form after animation
      setTimeout(() => {
        setName('')
        setEmail('')
        setPlatform('')
        setExperience('')
        setIsSuccess(false)
        setError('')
      }, 300)
    }
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all">
                {isSuccess ? (
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                      <svg className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <Dialog.Title className="text-lg font-semibold text-neutral-950">
                      You&apos;re on the list!
                    </Dialog.Title>
                    <p className="mt-2 text-sm text-neutral-600">
                      {config.successMessage}
                    </p>
                    <button
                      type="button"
                      onClick={handleClose}
                      className="mt-6 inline-flex w-full justify-center rounded-full bg-neutral-950 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800"
                    >
                      Done
                    </button>
                  </div>
                ) : (
                  <>
                    <Dialog.Title className="text-lg font-semibold text-neutral-950">
                      {config.title}
                    </Dialog.Title>
                    <p className="mt-2 text-sm text-neutral-600">
                      {config.description}
                    </p>

                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-neutral-700">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="mt-1 block w-full rounded-lg border border-neutral-300 px-3 py-2 text-neutral-950 placeholder:text-neutral-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                          placeholder="Your name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-700">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="mt-1 block w-full rounded-lg border border-neutral-300 px-3 py-2 text-neutral-950 placeholder:text-neutral-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                          placeholder="you@example.com"
                        />
                      </div>

                      {config.showPlatform && (
                        <div>
                          <label htmlFor="platform" className="block text-sm font-medium text-neutral-700">
                            Platform
                          </label>
                          <select
                            id="platform"
                            required
                            value={platform}
                            onChange={(e) => setPlatform(e.target.value)}
                            className="mt-1 block w-full rounded-lg border border-neutral-300 px-3 py-2 text-neutral-950 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                          >
                            <option value="">Select platform</option>
                            {platforms.map((p) => (
                              <option key={p} value={p}>{p}</option>
                            ))}
                          </select>
                        </div>
                      )}

                      {config.showExperience && (
                        <div>
                          <label htmlFor="experience" className="block text-sm font-medium text-neutral-700">
                            Meditation Experience
                          </label>
                          <select
                            id="experience"
                            required
                            value={experience}
                            onChange={(e) => setExperience(e.target.value)}
                            className="mt-1 block w-full rounded-lg border border-neutral-300 px-3 py-2 text-neutral-950 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                          >
                            <option value="">Select experience level</option>
                            {experienceLevels.map((level) => (
                              <option key={level} value={level}>{level}</option>
                            ))}
                          </select>
                        </div>
                      )}

                      {error && (
                        <p className="text-sm text-red-600">{error}</p>
                      )}

                      <div className="mt-6 flex gap-3">
                        <button
                          type="button"
                          onClick={handleClose}
                          className="flex-1 rounded-full border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-700 hover:bg-neutral-50"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="flex-1 rounded-full bg-neutral-950 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800 disabled:opacity-50"
                        >
                          {isSubmitting ? 'Signing up...' : 'Join Beta'}
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
