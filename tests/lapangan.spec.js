import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useLapanganStore } from '@/stores/lapangan'

describe('Lapangan Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('menambahkan lapangan baru', () => {
    const store = useLapanganStore()
    store.addLapangan({ id: 1, nama: 'Lapangan Futsal', lokasi: 'Jl. Mawar', harga: 150000 })
    expect(store.list.length).toBe(1)
    expect(store.list[0].nama).toBe('Lapangan Futsal')
  })

  it('menghapus lapangan', () => {
    const store = useLapanganStore()
    store.list = [{ id: 1, nama: 'Lapangan Futsal', lokasi: 'Jl. Mawar', harga: 150000 }]
    store.deleteLapangan(1)
    expect(store.list.length).toBe(0)
  })
})
