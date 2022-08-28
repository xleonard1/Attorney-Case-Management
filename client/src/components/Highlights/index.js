import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

const highlights = [
    {
        id: 1,
        name: 'Case Management',
        description: 'Get rid of the paper copies. Manage files easier with digital case management.'
    },
    {
        id: 2,
        name: 'Authentication',
        description: 'Keep client files safe and confidential with user authorization'
    },
    {
        id: 3,
        name: 'Client Intake',
        description: 'Manage client intake faster and easier with digital client intake forms.'
    }
]

const styles = {
    cardStyle: {
        minHeight: '400px',
        minWidth: '50px',
        width: '400px',
        textAlign: 'center'
    },
    cardRow: {
        display: 'flex',
        justifyContent: 'space-between'
    }
}

function ImgOverlay() {
  return (

    <Row xs={1} md={2} className="g-4" style={styles.cardRow}>
        {highlights.map(item => (
        <Card className="bg-dark text-white" style={styles.cardStyle}>
        <Card.ImgOverlay>
          <Card.Title style={{marginTop: '100px', marginBottom:'30px'}}>
              <h1>{item.name}</h1>
          </Card.Title>
          <Card.Text>
           {item.description}
          </Card.Text>
        </Card.ImgOverlay>
        </Card>
        ))}
   
    </Row>
  );
}

export default ImgOverlay;