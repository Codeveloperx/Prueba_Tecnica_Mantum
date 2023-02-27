import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {NavLink} from 'react-router-dom';

const CardList = ({stations}) => {
  return (
    <div className='card_list container'>
      {stations.map((stations, idx) => (
        <Card
          key={idx}      
          style={{ width: '18rem' }}
          className="mb-2"
          border="primary"
        >
          <Card.Header>{stations.name}</Card.Header>
          <Card.Body>
            <Card.Title>{stations.name}</Card.Title>
            <Card.Text>
              {stations.agency}
            </Card.Text>
            <NavLink to={`/details/${stations.uri}`}>
              <Button size="sm" variant="dark">Show Details</Button>
            </NavLink>
          </Card.Body>
        </Card>
      ))}
    </div>
  )
}

export default CardList
