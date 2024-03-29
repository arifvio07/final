import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

export default function CardShop2({ item }) { 
  return (
    <Card className='mt-5 '  >
      <img
        alt="Sample"
        src={item.thumbnail}
      />
      <CardBody>
        <CardTitle tag="h5">
          {item.name}
        </CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          Price : ${item.price}
        </CardSubtitle>
        <CardText>
          {item.description}
        </CardText>
        <Button className='text-white btn-dark btn-outline-info'>
          Buy
        </Button>
      </CardBody>
    </Card>
  );
}
