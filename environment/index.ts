export const HOST_API = process.env.NEXT_PUBLIC_HOST_API

export const PROTOCOL_HTTP = process.env.NEXT_PUBLIC_PROTOCOL

export const TOKEN_NAME = process.env.NEXT_PUBLIC_TOKEN_NAME

export const S3_URL = process.env.NEXT_PUBLIC_S3_URL

export const S3_IMAGE_HANDLER = process.env.NEXT_PUBLIC_S3_IMAGE_HANDLER

/**
 * Ui config
 */
export const UI_VALUE_LOADING_CHECKOUT_ADDRESS = 'loadingCheckoutAddress'
export const UI_VALUE_LOADING_FULFILLMENT = 'loadingFulfillment'
export const UI_VALUE_SHOW_SHOPPING_CART = 'showShoppingCart'
export const UI_VALUE_EXPEND_SIDEBAR = 'expandSidebar'

/**
 * Auth redux action types
 */
export const LOGIN = 'LOGIN'
export const SET_LOGIN_DIALOG_OPEN = 'SET_LOGIN_DIALOG_OPEN'
export const REGISTER = 'REGISTER'
export const ADD_NOTIFICATION = 'ADD_NOTIFICATION'
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION'
export const SET_AUTHENTICATE = 'SET_AUTHENTICATE'
export const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const START_LOADING_USER = 'START_LOADING_USER'
export const END_LOADING_USER = 'END_LOADING_USER'
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE'
export const SET_COUNT_CART = 'SET_COUNT_CART'
export const SET_HAS_PENDING_USER_DATA = 'SET_HAS_PENDING_USER_DATA'
export const SET_HAS_PENDING_SECURITY = 'SET_HAS_PENDING_SECURITY'
export const SET_CURRENT_CATEGORY = 'SET_CURRENT_CATEGORY'
export const TOGGLE_SHOPPING_CART = 'TOGGLE_SHOPPING_CART'
export const SET_CURRENT_PRODUCT = 'SET_CURRENT_PRODUCT'
