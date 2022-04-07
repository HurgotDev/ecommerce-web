import { FC } from 'react'

const Layout: FC = ({ children }) => {
    return (
        <>
            <h1>Hola como estas?</h1>
            <main>{children}</main>
        </>
    )
}

export default Layout
