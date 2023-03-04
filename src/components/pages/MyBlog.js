import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function BasicExample() {
  const cardInfo = [
   {image: "", title: "Project 1", text: "cool code"},
   {image: "", title: "Project 1", text: "cool code"},
   {image: "", title: "Project 1", text: "cool code"}
  ];

   const renderCard = (card, index) => { return (
      <Card style={{ width: '18rem' }} key={index}>
        <Card.Img variant="top" src={card.image}/>
        <Card.Body>
          <Card.Title>{card.Title}</Card.Title>
          <Card.Text>
        {card.text}
          </Card.Text>
         <a href={card.link}><Button variant="primary">Go somewhere</Button></a>
        </Card.Body>
      </Card>
    )
  }

return <div className="App">
{cardInfo.map(renderCard)}
  </div>
};