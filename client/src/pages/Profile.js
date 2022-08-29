import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import appItems from '../utils/items';
import ListGroup from 'react-bootstrap/ListGroup';



const styles = {
    cardStyle: {
        border: 'solid',
        maxWidth: '800px',
        marginLeft: '-20px'
    },
    listItems: {
        display: 'flex',
        flexDirection: 'row',
        textAlight: 'center',
        overflow: 'hidden',
        borderStyle: 'none'
      },
}
export default function Profile () {
 return (
   
    <Container>
      <Row>
        <Col>
          <Card style = {styles.cardStyle}>
            <Card.Header as="h5">Featured</Card.Header>
              <Card.Body style={{display: 'flex', flexWrap:'wrap'}}>
                   <Card.Text>
                    <ListGroup style={styles.listItems}>
                      {appItems.map(item => (
                        <ListGroup.Item  key={item.id} style={{borderStyle:'none', textAlign:'center'}}>
                         <div className='icons'>
                           <h5>{item.icon}</h5>
                         </div>
                         <div>
                          <p>{item.name}</p>
                         </div>
                        </ListGroup.Item>
                         ))}
                    </ListGroup>
                   </Card.Text>
               </Card.Body>
           </Card>
        </Col>
        <Col xs lg="2">2 of 2</Col>
      </Row> 
    </Container>
  );
}