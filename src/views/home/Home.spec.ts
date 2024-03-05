import { describe, it, expect, vi} from 'vitest';
import { mount } from '@vue/test-utils';
import HomeView from './HomeView.vue';
import { Quasar } from 'quasar'; 

import { createRouter, createWebHistory } from 'vue-router';

const routes = [{ path: '/product', component: { template: 'Test' } }];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

describe('HomeView', () => {
  it('deve renderizar o componente corretamente', () => {
    const wrapper = mount(HomeView, {
      global: {
        plugins: [Quasar],
      },
    });
    expect(wrapper.exists()).toBeTruthy();
  });

  it('exibe o título e o parágrafo corretamente', () => {
    const wrapper = mount(HomeView, { global: { plugins: [Quasar] } });
    const title = wrapper.find('h1');
    const paragraph = wrapper.find('p');
    expect(title.text()).toContain('Sistema Integrado de Gestão de Clientes e Produtos');
    expect(paragraph.text()).toContain('Facilite a gestão comercial com cadastros dinâmicos e associação eficiente de produtos');
    
  });

  it('navega para a página de produtos ao clicar no botão', async () => {
    const pushSpy = vi.spyOn(router, 'push');
    const wrapper = mount(HomeView,  { global: { plugins: [Quasar, router] } })
    await router.isReady();
    await wrapper.find('button').trigger('click');
    expect(pushSpy).toHaveBeenCalledWith('/product');
  });

});
