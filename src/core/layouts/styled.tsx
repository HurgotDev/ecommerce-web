import styled from 'styled-components'
import { Drawer } from '@mui/material'

/**
 * Default theme
 */

export const CustomDrawer = styled(Drawer)`
    & .MuiPaper-root {
        border: none;
        width: 100%;
        @media (min-width: 768px) {
            width: auto;
        }
    }
    & .MuiDrawer-paper::-webkit-scrollbar {
        display: none;
    }
`
