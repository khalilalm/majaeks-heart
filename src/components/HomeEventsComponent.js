import React from 'react';
import { Link } from 'react-router-dom';

function UpcomingEvents() {
    return(
        <div className="events mb-5">
            <div className="row">
                <div className="col">
                    {/* <h1 className="title">Upcoming Events</h1> */}
                    <h1 className="title-style-1">Upcoming Events<strong><span className="title-under"></span></strong></h1>
                    <div className="container">
                        <div className="row">
                            <div className="col ml-5">
                                <div className="images shadow-1-strong mb-4">
                                    <img src="/assets/images/BookDrive.png" alt="Book Drive" className="rounded mx-auto d-block"></img>
                                    <Link to="/bookdrive">Majaek's Heart Annual Book Drive</Link>
                                </div>
                            </div>
                            <div className="col ml-5">
                                <div className="images shadow-1-strong mb-4 align-items-center">
                                    <img src="/assets/images/Gala.png" alt="Gala" className="rounded mx-auto d-block"></img>
                                    <Link to="/https://www.facebook.com/photo/?fbid=193093112734495&set=a.120223690021438">Majaek's Heart Annual Gala</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpcomingEvents;