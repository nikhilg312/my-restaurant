import React from 'react';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel'
import AboutCard from '../components/AboutCard';
class About extends React.Component {
    state = {}
    render() {
        return (
            <>
                <Carousel></Carousel>
                <AboutCard></AboutCard>
                <Footer></Footer>
            </>
        );
    }
}

export default About;