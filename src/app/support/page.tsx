import { redirect } from 'next/navigation'
import { SUPPORT_URL } from '@/lib/apps'

export default function SupportPage() {
  redirect(SUPPORT_URL)
}
