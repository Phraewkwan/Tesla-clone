import React from 'react'
import styled from 'styled-components'
import Section from './Section'

const Home = () => {
    return (
        <Container>
            <Section
                title="Model S"
                desc="Order Online for Touchless Delivery"
                BgImg="model-3.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section
                title="Model Y"
                desc="Order Online for Touchless Delivery"
                BgImg="model-y.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section
                title="Model 3"
                desc="Order Online for Touchless Delivery"
                BgImg="model-3.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section
                title="Model X"
                desc="Order Online for Touchless Delivery"
                BgImg="model-x.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section
                title="Lowest Cost Solar Panels in America"
                desc="Money-back guarantee"
                BgImg="solar-panel.jpg"
                leftBtnText="Order now"
                rightBtnText="Learn more"
            />
            <Section
                title="Solar for New Roofs"
                desc="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
                BgImg="solar-roof.jpg"
                leftBtnText="Order now"
                rightBtnText="Learn more"
            />
            <Section
                title="Accessories"
                desc=""
                BgImg="accessories.jpg"
                leftBtnText="Order now"
            />
        </Container>
    )
}

export default Home


const Container = styled.div`
    height: 100vh;
`