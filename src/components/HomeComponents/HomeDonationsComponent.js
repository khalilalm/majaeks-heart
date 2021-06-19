import React from 'react';
import { Link } from 'react-router-dom';

function HomeDonations() {
    return (
        <div class="section-home donate fadeIn animated">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-sm-6">
                        <div class="donate-col">
                            <div class="col-icon-wrapper">
                                <img src="assets/images/icons/timeDonation_white2.png" alt="Clock svg" />
                            </div>
                            <h3 class="col-title">Donate Time</h3>
                            <div class="col-details">
                                <p>As much as we would love to see your beautiful faces while you share your time and/or services with us, the pandemic has pushed that back until further notice. See you soon.</p>
                            </div>
                            {/* <a href="#" class="btn btn-primary"> Find out more </a> */}
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6">
                        <div class="donate-col">
                            <div class="col-icon-wrapper">
                                <img src="assets/images/icons/food_white.png" alt="Food svg" />
                            </div>
                            <h3 class="col-title">Donate Food</h3>
                            <div class="col-details">
                                <p>Lorem ipsum dolor sit amet consect adipisscin elit proin vel lectus ut eta esami vera dolor sit amet consect</p>
                            </div>
                            <Link to="/foodbank" className="btn btn-primary"> Find out where </Link>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6">
                        <div class="donate-col">
                            <div class="col-icon-wrapper">
                                <img src="assets/images/icons/moneyDonation_white.png" alt="Receiving Money svg" />
                            </div>
                            <h3 class="col-title">Donate Money</h3>
                            <div class="col-details">
                                <p>Lorem ipsum dolor sit amet consect adipisscin elit proin vel lectus ut eta esami vera dolor sit amet consect</p>
                            </div>
                            <a href="#" class="btn btn-primary"> Donate </a>
                        </div>
                    </div>
                    {/* <div class="col-md-3 col-sm-6">
                        <div class="donate-col">
                            <div class="col-icon-wrapper">
                                <img src="assets/images/icons/programs-icon.png" alt="" />
                            </div>
                            <h3 class="col-title">our programs</h3>
                            <div class="col-details">
                                <p>Lorem ipsum dolor sit amet consect adipisscin elit proin vel lectus ut eta esami vera dolor sit amet consect</p>
                            </div>
                            <a href="#" class="btn btn-primary"> Read more </a>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default HomeDonations;