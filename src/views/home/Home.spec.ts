import { describe, it, expect} from 'vitest';
import { mount } from '@vue/test-utils';
import HomeView from './HomeView.vue';
import { Quasar } from 'quasar'; 


describe('HomeView', () => {
  it('deve renderizar o componente corretamente', () => {
    const wrapper = mount(HomeView, {
      global: {
        plugins: [Quasar],
      },
    });
    expect(wrapper.exists()).toBeTruthy();
  });
  

});
