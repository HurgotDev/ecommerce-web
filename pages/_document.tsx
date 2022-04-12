import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import createEmotionServer from '@emotion/server/create-instance'
import createCache from '@emotion/cache'
import { defaultTheme } from 'core/themes/Mui.theme'

function createEmotionCache() {
    return createCache({ key: 'css', prepend: true })
}

export default class MuiDocument extends Document<any> {
    render() {
        return (
            <Html lang="es">
                <Head>
                    <meta content={defaultTheme.palette.primary.main} name="theme-color" />
                    <link href="/static/favicon.ico" rel="shortcut icon" />
                    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
                    {this.props.emotionStyleTags}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

MuiDocument.getInitialProps = async (ctx) => {
    const originalRenderPage = ctx.renderPage

    const cache = createEmotionCache()
    const { extractCriticalToChunks } = createEmotionServer(cache)

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App: any) =>
                function EnhanceApp(props) {
                    return <App emotionCache={cache} {...props} />
                },
        })

    const initialProps = await Document.getInitialProps(ctx)

    const emotionStyles = extractCriticalToChunks(initialProps.html)
    const emotionStyleTags = emotionStyles.styles.map((style) => (
        <style
            key={style.key}
            dangerouslySetInnerHTML={{ __html: style.css }}
            data-emotion={`${style.key} ${style.ids.join(' ')}`}
        />
    ))

    return {
        ...initialProps,
        emotionStyleTags,
    }
}
