import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';


const cardStyles = {
    width: '400px',
    marginBottom: '20px',
    background: '#ffffffcc',
    boxShadow: '3px 3px #80808069'
};
  
  const PersonCard = (props) => {
    return (
      <div>
        <Card style={cardStyles}>
          {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
          <CardBody>
            <CardTitle><h2>{props.personData.name}</h2></CardTitle>
            <CardSubtitle>Gender: {props.personData.gender}</CardSubtitle>
            <CardText>Birthdate: {props.personData.birth_year}</CardText>
            <Button color="primary" >See More</Button>
          </CardBody>
        </Card>
      </div>
    );
  };
  
  export default PersonCard;