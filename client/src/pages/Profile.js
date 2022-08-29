import React from 'react';
import Card from 'react-bootstrap/Card';




const styles = {
    cardStyle: {
        border: 'solid',
        margin: '20%'
    }
}
export default function Profile () {
 return (
   
    <Card style={styles.cardStyle}>
      <Card.Body>
          This is some text within a card body.
      </Card.Body>
    </Card>



 )
}