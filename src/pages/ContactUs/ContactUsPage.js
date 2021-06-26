import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
// import { Breadcrumb, BreadcrumbItem, Form, FormGroup, Input, Button, Container, Row, Col, Label } from 'reactstrap';
import Form from 'customisable-contact-form'
import {Heading, FirstName, LastName, Email, Message, SubmitButton} from 'customisable-contact-form'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import '../contactUsStyles.scss';

function ContactUs() {
    const { register, handleSubmit, errors } = useForm();
    const handleRegistration = (data) => alert(JSON.stringify(data));
    // const handleRegistration = (data) => console.log(data);
    const handleErrors = (errors) => {};
    const registerOptions = {
        firstName: { required: "First name is required" },
        lastName: { required: "Last name is required" },
        email: { required: {
            pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: 'Email is not valid.'
            }
        }}
    };
    
    return(
        <main className="bg-white">
            <div className="container">
                <section className="row">
                    <div className="col text-center">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                        </Breadcrumb>
                        <h1>Contact Us</h1>
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-6 mb-5 mb-lg-0">
                                    <form class="border-right pr-5 mb-5" onSubmit={handleSubmit(handleRegistration, handleErrors)}>
                                        <div class="row">
                                            <div class="col-md-6 form-group">
                                                <input type="text" class="form-control" id="firstName" {...register('firstName', registerOptions.firstName)} placeholder="First name" />
                                            </div>
                                            <div class="col-md-6 form-group">
                                                <input type="text" class="form-control" id="lastName" {...register('lastName', registerOptions.lastName)} placeholder="Last name" />
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12 form-group">
                                                <input type="text" class="form-control" id="email" {...register('email', registerOptions.email)} placeholder="Email" />
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12 form-group">
                                                <textarea class="form-control" id="message" cols="30" rows="7" {...register('message', registerOptions.email)} placeholder="Write your message"></textarea>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <input type="submit" value="Send Message" class="btn btn-primary rounded-0 py-2 px-4" />
                                                <span class="submitting"></span>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div class="col-lg-6 col-md-offset-1">
                                    <div class="container">
                                        <div class="row justify-content-start">
                                            <div>
                                                {/* <h5 class="mb-4">For general inquiries</h5> */}
                                                <ul className="list-unstyled">
                                                    <li class="contact-item"> <span class="contact-icon"> <i class="fa fa-map-marker mr-1"></i></span><strong>Location:</strong><br />Majaek’s Heart cannot currently be confined to a physical location. All
                                                        board members are mobile and prepared to travel to where we are needed. We currently serve Monroe, Luzerne, and Lackawanna Counties.</li>
                                                    <li><br /></li>
                                                    <li class="contact-item"> <span class="contact-icon"> <i class="fa fa-hourglass mr-1"></i></span><strong>Hours:</strong> 24/7, 365</li>
                                                    <li><br /></li>
                                                    <li class="contact-item"> <span class="contact-icon"> <i class="fa fa-phone mr-1"></i></span><strong>Telephone:</strong> 570-316-HELP or 570-316-4357</li>
                                                    <li><br /></li>
                                                    <li class="contact-item"> <span class="contact-icon"> <i class="fa fa-envelope mr-1"></i></span><strong>Email:</strong> majaeksheart@yahoo.com</li>
                                                    <li><br /></li>
                                                    <li class="contact-item"> <span class="contact-icon"> <i class="fa fa-facebook-square mr-1"></i></span><strong>Facebook:</strong> www.facebook.com/majaeksheart</li>
                                                </ul>
                                                {/* <p><strong>Offices:</strong><br />
                                                    Majaek’s Heart cannot currently be confined to a physical location. All
                                                    board members are mobile and prepared to travel to where we are needed. We currently serve Monroe, Luzerne, and Lackawanna Counties.
                                                    <br />
                                                    <br />
                                                    <strong>Hours:</strong> 24/7, 365<br /><br />
                                                    <strong>Telephone:</strong> 570-316-HELP or 570-316-4357<br /><br />
                                                    <strong>Email:</strong> majaeksheart@yahoo.com<br /><br />
                                                    <strong>Social media:</strong> www.facebook.com/majaeksheart
                                                </p> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default ContactUs