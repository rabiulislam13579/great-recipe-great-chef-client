import React from 'react';
import Header from '../Header/Header';
import About from '../About/About';
import Extra from '../Extra/Extra';
import ChefCard from '../ChefCard/ChefCard';
import Footer from '../Footer/Footer';


const Home = () => {

    return (
        <div>
           <Header></Header>
           <About></About>
           <Extra></Extra>
           <ChefCard></ChefCard>
           <Footer></Footer>
            
        </div>
    );
};

export default Home;