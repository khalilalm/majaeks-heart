import React from 'react';
import {
    Card, CardImg, CardTitle, CardText, CardDeck, CardBody
} from 'reactstrap';
import { Link } from 'react-router-dom';
import boardMembers from './board-data';

function BoardMembers() {
    //const boardMember = boardData.find(member => member.name === name);

    return (
        <CardDeck className="ml-1 mt-4 mb-4">
            {boardMembers.map((member, key) => (
                <Link key={key} to={`/aboutus/${member.name}`} className="pt-0 pl-0 ml-0 text-decoration-none">
                    <Card className="member-card">
                        <CardImg className="card-img-top" top width="100%" src={member.bioCardImage} alt={member.name} />
                        <CardBody>
                            <CardTitle tag="h5">{member.name}</CardTitle>
                            <CardText>{member.bio.substring(0, 150)}...</CardText>
                        </CardBody>
                    </Card>
                </Link>
            ))}
        </CardDeck>
    );
}

export default BoardMembers;