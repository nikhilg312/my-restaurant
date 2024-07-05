import React from 'react';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel'
import HomeCard from '../components/HomeCard';
import ChefCard from '../components/ChefCard';
class Home extends React.Component {
    state = {}
    render() {
        return (
            <>
                <Carousel></Carousel>
                <HomeCard></HomeCard>
                <ChefCard></ChefCard>
                <Footer></Footer>
            </>
        );
    }
}

export default Home;