import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <main>
            <footer className="container site-footer sticky-bottom">
                <div className="row">
                    <div className="col-4 col-sm-2 offset-1 pt-4">
                        <ul className="list-unstyled">
                            <li><Link to="/home" className="link">Home</Link></li>
                            <li><Link to="aboutus" className="link">About Us</Link></li>
                            {/* <li><Link to="#" className="link">How to Help</Link></li> */}
                            {/* <li><Link to="contactus" className="link">Contact Us</Link></li> */}
                        </ul>
                    </div>
                    <div className="col pt-2">
                        <Link to="/home"><img src="assets/images/Majaeks-Heart-Logo-30-Black.png" className="img-fluid mx-auto d-block" alt="Majaek's Heart Logo" /></Link>
                    </div>
                    <div className="col-4 col-sm-3 text-center pt-4">
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/majaeksheart"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col text-center copyright">
                        <p>
                            Copyright © 2021 Majaek's Heart. All Rights Reserved. Majaek’s Heart is a Pennsylvania registered nonprofit organization.<br />
                            EIN#: 36-3673599
                        </p>
                    </div>
                </div>
            </footer>
        </main>
    );
}

export default Footer;