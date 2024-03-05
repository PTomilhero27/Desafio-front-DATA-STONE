import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import confirmationDialog from './ConfirmationDialog.vue'
import { Quasar, QDialog, QCard, QCardSection, QAvatar, QCardActions, QBtn } from 'quasar'

describe('confirmationDialog', () => {
  const globalMountOptions = {
    global: {
      plugins: [Quasar],
      components: {
        QDialog,
        QCard,
        QCardSection,
        QAvatar,
        QCardActions,
        QBtn
      }
    }
  }

  it('deve renderizar o diálogo quando a prop isOpen é verdadeira', () => {
    const wrapper = mount(confirmationDialog, {
      ...globalMountOptions,
      props: { isOpen: true, onConfirm: vi.fn(), onCancel: vi.fn() }
    })

    expect(wrapper.props().isOpen).toBeTruthy()
  })

  it('deve emitir o evento "onCancel" quando o diálogo é fechado', async () => {
    const wrapper = mount(confirmationDialog, {
      ...globalMountOptions,
      props: { isOpen: true, onCancel: vi.fn() }
    })

    await wrapper.findComponent(QDialog).vm.$emit('hide')
    expect(wrapper.props().onCancel).toHaveBeenCalled()
  })
})
