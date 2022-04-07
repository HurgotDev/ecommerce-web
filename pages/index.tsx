import type { NextPage } from 'next'

import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    background: ${({ theme }) => theme.palette.success.main};
    justify-content: center;
`

const Title = styled.h1`
    color: blueviolet;
`

const Home: NextPage = () => {
    return (
        <Wrapper>
            <Title>Title h1</Title> comsds sds hsd jsk s sfdsd sdjfsdsd sdfs dfsdfsdfs sdf sdfsd fsd fs dfsdfs df sd fsd fs df sdf
            sdfsdfsdfsdf sdfsd sdf sdfsdf sdfsdf sdfsd <fieldset>sdf</fieldset>
        </Wrapper>
    )
}

export default Home
