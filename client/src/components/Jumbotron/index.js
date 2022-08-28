import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';



const styles = {
    getInfo: {
        display: 'inline-flex',
        justifyContent: 'space-between'

    },
    input: {
        borderRadius: '10px',
        padding: '10px',
        marginRight: '10px'
    },
    button: {
        padding: '10px',
    },
}

export default function JumboTron() {
    const [formState, setFormState] = useState({ email: '' });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        })
    }
   return (
       <div
       style ={{height: 560, clear: 'both', paddingTop: 120, textAlign: 'center'}}
       >
           <h1>Legal Case Management for Unparalleled Productivity</h1>
           <p> The Easiest Way to Manage Your Large Client Case Load </p>
        <div className = 'getmoreInfo' style={styles.getInfo} >  
           <input
              style={styles.input}
              placeholder="youremail@test.com"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
           />
           <div className="flex-row flex-end">
             <Button variant="primary" style={styles.button}>Get More Information</Button>{' '}
           </div>
        </div> 
       </div>
   );
}