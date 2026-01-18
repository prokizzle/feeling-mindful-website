'use client'

import { useState } from 'react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '@/lib/firebase'

export function DataDeletionForm() {
  const [email, setEmail] = useState('')
  const [reason, setReason] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      await addDoc(collection(db, 'data-deletion-requests'), {
        email,
        reason: reason || null,
        createdAt: serverTimestamp(),
        status: 'pending',
        processedAt: null,
      })
      setIsSuccess(true)
    } catch (err) {
      console.error('Error submitting deletion request:', err)
      setError('Something went wrong. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="rounded-2xl bg-emerald-50 p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100">
            <svg className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h3 className="font-medium text-emerald-900">Request submitted</h3>
            <p className="mt-1 text-sm text-emerald-700">
              We&apos;ve received your data deletion request for <strong>{email}</strong>.
              You&apos;ll receive a confirmation email shortly.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-700">
          Email address
        </label>
        <p className="mt-1 text-sm text-neutral-500">
          Enter the email associated with your account
        </p>
        <input
          type="email"
          id="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-2 block w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-950 placeholder:text-neutral-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="reason" className="block text-sm font-medium text-neutral-700">
          Reason for deletion <span className="text-neutral-400">(optional)</span>
        </label>
        <p className="mt-1 text-sm text-neutral-500">
          Help us improve by sharing why you&apos;re leaving
        </p>
        <textarea
          id="reason"
          rows={3}
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          className="mt-2 block w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-950 placeholder:text-neutral-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
          placeholder="Optional feedback..."
        />
      </div>

      {error && (
        <div className="rounded-lg bg-red-50 p-4 text-sm text-red-600">
          {error}
        </div>
      )}

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center px-6 py-3 bg-neutral-950 text-white rounded-full font-medium hover:bg-neutral-800 transition-colors disabled:opacity-50"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Request'}
        </button>
        <p className="text-xs text-neutral-500">
          This action cannot be undone.
        </p>
      </div>
    </form>
  )
}
