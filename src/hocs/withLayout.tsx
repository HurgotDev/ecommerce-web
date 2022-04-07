import type { FC } from 'react'
import type { NextPageWithLayout } from 'types/next'

const withLayout = (Page: NextPageWithLayout, Layout: FC): NextPageWithLayout => {
    const PageWithLayout: NextPageWithLayout = (props) => {
        return <Page {...props} />
    }

    PageWithLayout.getLayout = (page) => <Layout>{page}</Layout>

    return PageWithLayout
}

export default withLayout
