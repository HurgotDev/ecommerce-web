import '../assets/css/globals.css'
import type { AppProps } from 'next/app'

import { ThemeProvider as StyledComponentThemeProvider } from 'styled-components'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'

import { defaultTheme as StyledComponentTheme } from 'core/themes/StyledComponents.theme'
import { defaultTheme as MuiTheme } from 'core/themes/Mui.theme'

function App({ Component, pageProps }: AppProps) {
    return (
        <MuiThemeProvider theme={MuiTheme}>
            <StyledComponentThemeProvider theme={StyledComponentTheme}>
                <Component {...pageProps} />
            </StyledComponentThemeProvider>
        </MuiThemeProvider>
    )
}

export default App
