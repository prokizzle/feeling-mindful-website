import { permanentRedirect } from 'next/navigation'

// The app's paywall and store listings link here. goodparts.ai/terms is the one copy, so this
// page forwards to it rather than mirroring it, as /apps/good-parts/privacy does (GOO-654).
export default function GoodPartsTerms() {
  permanentRedirect('https://goodparts.ai/terms')
}
