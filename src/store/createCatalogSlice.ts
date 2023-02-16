import { StateCreator } from 'zustand'
import type { TCombinedTypes } from './useBoundStore'

export interface TCatalogSlice {
  page: number
  setPage: (newPage: number) => void
}

const createCatalogSlice: StateCreator<
  TCombinedTypes,
  [],
  [],
  TCatalogSlice
> = (set) => ({
  page: 1,
  setPage: (newPage) => set(() => ({ page: newPage })),
})

export default createCatalogSlice
