import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import BoardMembers from "../../components/BoardMemberComponents/BoardMembersComponent";
import StayInformedForm from "../../components/StayInformedComponent";
import "./AboutUs.css";
function AboutUs(props) {
  return (
    <main className="bg-light" >
      <div className="container" >
        <section className="row mb-4">
          <div className="col text-center">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/home">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>About Us</BreadcrumbItem>
            </Breadcrumb>
            <h1>About Us</h1>
            <p>
              Majaek’s Heart is a nonprofit organization founded by Genine
              Suggs, LPN. She
              <br />
              began her mission in 2015 with the simple goal of assisting her
              community.
              <br />
              Within a few short weeks, Genine realized that the need in her
              community was
              <br />
              larger than she anticipated. She began working thirty hours a week
              in overtime to
              <br />
              offset the cost of assisting her neighborhood with their growing
              needs. After 5<br />
              years of financing, commanding, and volunteering for her
              organization all by
              <br />
              herself, she knew it was time for Majaek’s Heart to grow. In 2020,
              she shared her
              <br />
              mission with her close friends, also nurses, and together they are
              getting closer
              <br />
              to achieving Genine’s ultimate vision of being a household name.
              Majaek’s Heart
              <br />
              is a Pennsylvania registered nonprofit organization.
              <br />
              EIN# 85-3850405
              <br />
            </p>
          </div>
        </section>
        <section className="row mt-4">
          <div className="mission">
            <img
              src="/assets/images/wanderer2.jpg"
              alt="Homeless Man"
              className="img-fluid"
              styles="background-size: 'cover',background-size: cover;
  "
            />
            <div className="centered">
              <h1>Our Mission</h1>
              <p>
                Majaek’s Heart is a committed non profit organization who is
                dedicated to
                <br />
                helping the no-income and low-income and homeless families in
                <br />
                Pennsylvania. We are a committee of all nurses working together
                with one
                <br />
                goal in mind: to assist our community in anyway possible with
                items
                <br />
                necessary for daily living.
                <br />
              </p>
            </div>
          </div>
        </section>
        <section className="row mt-4 mb-4">
          <div className="mission">
            <img
              src="/assets/images/food_bank3.jpg"
              alt="Food Bank"
              className="img-fluid"
              styles="background-size: 'cover'"
            />
            <div className="centered">
              <h1>Our Vision</h1>
              <p>
                Majaek’s Heart’s vision is to be a publicly recognized resource
                that assists
                <br />
                the no-income and low-income community as well as a proud
                partner to
                <br />
                similar organizations in the Pennsylvania area.
                <br />
              </p>
            </div>
          </div>
        </section>
        <div className="text-center">
          <h1>Our Board Members</h1>
        </div>
        <section className="row my-2">
          <BoardMembers />
        </section>
        <section className="row mt-4 mb-5">
          <div className="mission">
            <img
              src="/assets/images/mother.jpg"
              alt="A mother"
              className="img-fluid"
              styles="background-size: 'cover'"
            />
            <div className="centeredInformed">
              <h1>Stay Informed</h1>
              <StayInformedForm />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default AboutUs;
