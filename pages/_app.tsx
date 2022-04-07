import '../assets/css/globals.css'

import { ThemeProvider as StyledComponentThemeProvider } from 'styled-components'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { defaultTheme as StyledComponentTheme } from 'core/themes/StyledComponents.theme'
import { defaultTheme as MuiTheme } from 'core/themes/Mui.theme'
import { AppPropsWithLayout } from 'types/next'

function App({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page)

    return (
        <MuiThemeProvider theme={MuiTheme}>
            <StyledComponentThemeProvider theme={StyledComponentTheme}>
                {getLayout(<Component {...pageProps} />)}
            </StyledComponentThemeProvider>
        </MuiThemeProvider>
    )
}

export default App
