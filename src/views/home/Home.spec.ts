import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import AboutView from './HomeView.vue'; 
describe('HomeView', () => {
  it('deve renderizar o componente corretamente', () => {
    const wrapper = mount(AboutView);
    expect(wrapper.exists()).toBeTruthy();
  });
});
