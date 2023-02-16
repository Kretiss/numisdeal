import { create } from 'zustand'
import createGlobalSlice, { TGlobalSlice } from './createGlobalSlice'
import createCatalogSlice, { TCatalogSlice } from './createCatalogSlice'

export type TCombinedTypes = TCatalogSlice & TGlobalSlice

const useBoundStore = create<TCombinedTypes>()((...a) => ({
  ...createGlobalSlice(...a),
  ...createCatalogSlice(...a),
}))

export default useBoundStore
