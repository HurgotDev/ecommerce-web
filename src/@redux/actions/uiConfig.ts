import { UI_VALUE_LOADING_CHECKOUT_ADDRESS, UI_VALUE_LOADING_FULFILLMENT, UI_VALUE_SHOW_SHOPPING_CART } from 'environment'

import { SELECTOR_UI_SHOW_SHOPPING_CART } from '../selectors/uiConfig'
import uiConfig from '../reducers/uiConfig'

export function toggleShoppingCart() {
    return async (dispatch: any, getState: any) => {
        const show = SELECTOR_UI_SHOW_SHOPPING_CART(getState())

        dispatch(uiConfig.Creators.setUiValue(UI_VALUE_SHOW_SHOPPING_CART, !show))
    }
}

export function setLoadingRaw(key: string, loading: boolean) {
    return async (dispatch: any) => {
        dispatch(uiConfig.Creators.setUiValue(key, loading))
    }
}

export function setLoadingCheckoutAddress(loading: boolean) {
    return setLoadingRaw(UI_VALUE_LOADING_CHECKOUT_ADDRESS, loading)
}

export function setLoadingFulfillment(loading: boolean) {
    return setLoadingRaw(UI_VALUE_LOADING_FULFILLMENT, loading)
}
