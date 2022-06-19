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
                            className="rounded mx-auto d-block w-75"
                            src={"/assets/images/MajaeksheartCookie.JPG"}
                            alt="Majaeks Heart Cookie"
                        />
                        <Carousel.Caption>
                            <h1 class="carousel-caption">Help the Hungry</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{'height': "850px"}}>
                        <img 
                            className="d-block w-100"
                            src="/assets/images/awardGenine2021.JPG"
                            alt="Significant Achievement Trophy"
                        />
                        <Carousel.Caption >
                        <div class="carousel-caption d-none d-md-block">
    <h4>Congratulations to Genine Suggs!</h4>
    <p >Genine Suggs has been presented a trophy to signify her substantial contribution to the community through the Majaeks heart organization.</p>
  </div>
                            <h1 class="carousel-caption"style={{'color': 'black'}}></h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{'height': "500px"}}>
                        <img 
                            className="d-block w-100"
                            src="/assets/images/galaCake2021.JPG"
                            alt="Gala Cake"
                        />
                        <Carousel.Caption>
                        <h4>1st Annual Majaeks Heart Gala 2021</h4>
    <p > First Annual Gala In Celebration of the success of the Majaeks Heart organization over the past year</p>
  
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