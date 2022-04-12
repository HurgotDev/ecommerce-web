import { useMediaQuery } from '@mui/material'
import { SELECTOR_UI_EXPAND_SIDEBAR } from '@redux/selectors/uiConfig'
import { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import uiReducer from '@redux/reducers/uiConfig'

import { CustomDrawer } from './styled'

const Layout: FC = ({ children }) => {
    const { value: expandSidebar, persistent } = useSelector(SELECTOR_UI_EXPAND_SIDEBAR)
    const isMobil = useMediaQuery('(max-width: 900px)') // window.screen.width <= 950
    const [open, setOpen] = useState(!isMobil)

    const dispatch = useDispatch()
    const isScreenMd = useMediaQuery('(min-width: 769px)')

    useEffect(() => {
        setOpen(!isMobil || (!isMobil && expandSidebar) || (isMobil && !expandSidebar))
    }, [isMobil, expandSidebar])

    return (
        <>
            <CustomDrawer
                open={open}
                variant={'persistent'}
                onMouseEnter={() => {
                    if (isScreenMd && !expandSidebar && !persistent)
                        dispatch(uiReducer.Creators.setUiValue('expandSidebar', { value: true, persistent: false }))
                }}
                onMouseLeave={() => {
                    if (isScreenMd && expandSidebar && !persistent)
                        dispatch(uiReducer.Creators.setUiValue('expandSidebar', { value: false, persistent: false }))
                }}
            >
                Hola
            </CustomDrawer>
            <main>
                <h1>Hola como estas?</h1>
                {/* <button onClick={() => setOpenDrawer(!openDrawer)}>{!openDrawer ? 'open' : 'close'} drawer</button> */}
                {children}
            </main>
        </>
    )
}

export default Layout
