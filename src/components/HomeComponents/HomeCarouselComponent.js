import Carousel from 'react-bootstrap/Carousel';
import React from 'react';

function HomeCarousel(props) {
    return(
        <div className="container">
            <div className="row">
                <div className='col'>
                <Carousel>
                    <Carousel.Item style={{'height': "500px"}}>
                        <img 
                            className="d-block w-100"
                            src={"/assets/images/food_bank.jpg"}
                            alt="Food Bank"
                        />
                        <Carousel.Caption>
                            <h1 class="carousel-caption">Help the Hungry</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{'height': "500px"}}>
                        <img 
                            className="d-block w-100"
                            src="/assets/images/homeless-man-833017_1920.jpg"
                            alt="Homeless Man"
                        />
                        <Carousel.Caption>
                            <h1 class="carousel-caption">Help the Homeless</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{'height': "500px"}}>
                        <img 
                            className="d-block w-100"
                            src="/assets/images/prison-553836_1920.jpg"
                            alt="Prison Bars"
                        />
                        <Carousel.Caption>
                            <h1 class="carousel-caption">Help Incarcerated Mothers</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{'height': "500px"}}>
                        <img 
                            className="d-block w-100"
                            src="/assets/images/blight-3766584_1920.jpg"
                            alt="Distressed Neighborhood"
                        />
                        <Carousel.Caption>
                            <h1 class="carousel-caption">Help the Poor</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{'height': "500px"}}>
                        <img 
                            className="d-block w-100"
                            src="/assets/images/woman-1006100_1920.jpg"
                            alt="Crying Woman"
                        />
                        <Carousel.Caption>
                            <h1 class="carousel-caption">Help Victims of Abuse</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </div>
                {/* <div className="col">
                    <h1>Home Page</h1>
                </div> */}
            </div>
        </div>
    );
}

export default HomeCarousel;