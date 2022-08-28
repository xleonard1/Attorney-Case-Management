import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';

const styles = {
   cardStyles: {
     borderStyle: 'none',
     marginLeft: '55px',
     
   },
   listItems: {
     display: 'flex',
     flexDirection: 'row',
     textAlight: 'center',
     overflow: 'hidden'
   },
   iconStyle: {
    textAlign: 'center'
   }
}

export default function Features(props) {
  return (
    <ListGroup style={styles.listItems}>
      {props.appItems.map(item => (
        <ListGroup.Item  key={item.id} style={styles.cardStyles} >
          <div className='icons'>
           <h1 style={styles.iconStyle}>{item.icon}</h1>
          </div>
          <div>
          <h5 style={styles.iconStyle}>{item.name}</h5>
         </div>
        </ListGroup.Item>
      ))}
      
      </ListGroup>
  );
}

