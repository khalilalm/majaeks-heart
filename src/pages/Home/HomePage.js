import React from 'react';
import HomeCarousel from '../../components/HomeComponents/HomeCarouselComponent';
import HomeDonations from '../../components/HomeComponents/HomeDonationsComponent';
import UpcomingEvents from '../../components/HomeEventsComponent';
import StayInformedForm from '../../components/StayInformedComponent';
import './Home.css'
function Home(props) {
    return(
        <div className="container">
            <div className="row">
                <div className='col'>
                    <HomeCarousel />
                    <HomeDonations />
                    <UpcomingEvents />
                    <section className="row mt-4 mb-5">
                        <div className="mission">
                            <img src="/assets/images/mother.jpg" alt="A mother" className="img-fluid" styles="background-size: 'cover'" />
                            <div className="centeredInformed">
                                <h1>Stay Informed</h1>
                                <StayInformedForm />
                            </div>
                        </div>
                    </section>
                </div>
                {/* <div className="col">
                    <h1>Home Page</h1>
                </div> */}
            </div>
        </div>
    );
}

export default Home;