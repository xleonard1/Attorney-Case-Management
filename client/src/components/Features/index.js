import React from 'react'

const styles = {
   cardStyles: {
     borderStyle: 'none',
     marginLeft: '55px',
     
   },
   listItems: {
     display: 'flex',
     flexDirection: 'row',
     textAlight: 'center'
   },
   iconStyle: {
     height: '60px',
     width: '60px'
    
   }
}

export default function Features(props) {
  return (

    <ul className="list-group"  style={styles.listItems}>
      {props.appItems.map(item => (
        <li className="list-group-item" key={item.id} style={styles.cardStyles} >
          <div className='icons'>
           <h1>{item.icon}</h1>
          </div>
          <div>
          <h5>{item.name}</h5>
         </div>
        </li>
      ))}
      
    </ul>
  );
}

