// import React, { useState } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import boardData from '../BoardMemberComponents/board-data';

function BoardMember({match}) {
    const detail = boardData.filter(member => member.name === match.params.name);

    return(
        <section className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to="/aboutus">About Us</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{detail[0].name}</BreadcrumbItem>
                    </Breadcrumb>
                    <h1>{detail[0].name}</h1>
                    <hr />
                    <h5>{detail[0].title}</h5>
                </div>
            </div>
            <div className="row my-4">
                <div className="col-1"></div>
                <div className="col-7">
                    <p>{detail[0].bio}</p>
                </div>
                <div className="col-3 text-center">
                    <p>{detail[0].bioImage}</p>
                    <p className="boardMemberQuote">
                        {detail[0].bioQuote}
                    </p>
                </div>
                <div className="col-1"></div>
            </div>
        </section>
    );
}

export default BoardMember;