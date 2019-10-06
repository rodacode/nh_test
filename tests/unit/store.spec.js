import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

const localVue = createLocalVue()

localVue.use(Vuex)

describe("SET_INHABITANTS", () => {
    let store
    let mutations

    beforeEach(() => {
        mutations = {
            SET_INHABITANTS: () => jest.fn()
        }
        store = new Vuex.Store({ mutations })
      })

  it("it set the inhabitants", () => {
    const inhabitants = [{ id: 1, name: "Test" }]
    const state = {
      inhabitants: [ inhabitants]
    }

    mutations.SET_INHABITANTS(state, { inhabitants })

    expect(state).toEqual({
      inhabitants: [ inhabitants ]
    })
  })
})