import { createActions, createReducer } from 'reduxsauce'
import produce from 'immer'

import { reset } from '../utilities'

const INITIAL_STATE = {
    loadingCheckoutAddress: true,
    loadingFulfillment: true,
    showShoppingCart: false,
    expandSidebar: {
        value: true,
        persistent: false,
    },
}

const { Types, Creators } = createActions({
    setUiValue: ['key', 'value'],
    setReset: null,
})

const setValue = (state: any, { key, value }: any) => {
    return produce(state, (draftState: any) => {
        draftState[key] = value
    })
}

export const uiConfig = createReducer(INITIAL_STATE, {
    [Types.SET_UI_VALUE]: setValue as any,
    [Types.SET_RESET]: reset(INITIAL_STATE),
})

const reducer = {
    Types,
    Creators,
}

export default reducer
