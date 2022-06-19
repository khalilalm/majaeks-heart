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
                                <p>There are various food banks around the PA where you can help donate to the families in need.</p>
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
                                <p>Donations go towards food and school supplies to families in need.</p>
                            </div>
                            <form action="https://www.paypal.com/donate" method="post" target="_top">
<input type="hidden" name="business" value="nesstex@gmail.com" />
<input type="hidden" name="no_recurring" value="0" />
<input type="hidden" name="item_name" value="charity" />
<input type="hidden" name="currency_code" value="USD" />
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
<img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
</form>

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