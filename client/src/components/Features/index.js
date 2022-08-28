import React from 'react'

import Card from 'react-bootstrap/Card';

const styles = {
   cardStyles: {
     display: 'flex',
     flexDirection: 'row',
     justifyContent: 'space-between'
   }
}

export default function Features(props) {
  return (

    <div className = 'Features' style={styles.cardStyles}>
      {props.appItems.map(item => (
        <Card style={{ width: '18rem' }}>
        <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{item.name}</Card.Subtitle>
       </Card.Body>
       </Card>
      ))}
      
    </div>
  );
}

