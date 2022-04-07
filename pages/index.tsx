import Layout from 'core/layouts/Default.layout'
import { NextPageWithLayout } from 'types/next'
import withLayout from 'src/hocs/withLayout'

const Home: NextPageWithLayout = () => {
    return <div>Hola</div>
}

export default withLayout(Home, Layout)
