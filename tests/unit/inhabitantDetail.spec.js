
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import router from '../../src/router'

import InhabitantDetail from '@/components/InhabitantDetail.vue'

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(router)

describe('InhabitantsDetail', () => {
    let store
    let getters

    beforeEach(() => {
      getters = {
        getInhabitantById: () => jest.fn()
      }
      store = new Vuex.Store({ getters })
    })
    it('renders container div', () => {
      const wrapper = shallowMount(InhabitantDetail, {
        store,
        localVue
      })
      wrapper.setData({ inhabitant: {name:'joe'} })

      expect(wrapper.find('.container'))
     
    })

})
