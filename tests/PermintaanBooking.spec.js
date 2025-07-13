import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import PermintaanBooking from '@/views/admin/PermintaanBooking.vue'
import axios from 'axios'

vi.mock('axios')

describe('PermintaanBooking.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('memanggil axios.patch saat tombol Setujui diklik', async () => {
    axios.get.mockResolvedValue({
      data: [
        {
          id: 1,
          nama: 'Budi',
          hari: 'Senin',
          tanggal: '2025-07-12',
          jam: '10:00',
          status: 'menunggu',
          lapanganId: 1,
        },
      ],
    })

    axios.patch.mockResolvedValue({})

    const wrapper = mount(PermintaanBooking, {
      global: {
        plugins: [createPinia()],
      },
    })

    await new Promise(resolve => setTimeout(resolve, 100))
    const button = wrapper.find('button.btn-approve')
    await button.trigger('click')

    expect(axios.patch).toHaveBeenCalledWith(
      expect.stringContaining('/booking/1'),
      { status: 'disetujui' }
    )
  })
})
