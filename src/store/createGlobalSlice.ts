import { StateCreator } from 'zustand'
import type { TCombinedTypes } from './useBoundStore'

export interface TGlobalSlice {
  currency: string
  setCurrency: (newCurrency: string) => void
}

const createGlobalSlice: StateCreator<TCombinedTypes, [], [], TGlobalSlice> = (
  set
) => ({
  currency: 'CZK',
  setCurrency: (newCurrency) => set(() => ({ currency: newCurrency })),
})

export default createGlobalSlice
